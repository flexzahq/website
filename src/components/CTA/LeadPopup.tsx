import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../../assets/flexza-logo-primary.svg";
import manImage from "../../assets/man.webp";
import { Button } from "../ui/Button";

type FormState = {
  name: string;
  phone: string;
};

export function openLeadPopup() {
  window.dispatchEvent(new CustomEvent("flexza:open-lead-popup"));
}

export function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState<FormState>({ name: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const hasSeenPopup = window.sessionStorage.getItem("flexza-popup-seen");

    const handleOpen = () => {
      setIsOpen(true);
    };

    window.addEventListener("flexza:open-lead-popup", handleOpen);

    if (!hasSeenPopup) {
      const timer = window.setTimeout(() => {
        setIsOpen(true);
        window.sessionStorage.setItem("flexza-popup-seen", "true");
      }, 1200);

      return () => {
        window.clearTimeout(timer);
        window.removeEventListener("flexza:open-lead-popup", handleOpen);
      };
    }

    return () => window.removeEventListener("flexza:open-lead-popup", handleOpen);
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (message) {
      setMessage("");
      setIsSuccess(false);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.phone.trim()) {
      setIsSuccess(false);
      setMessage("Please enter your name and mobile number.");
      return;
    }

    setIsSubmitting(true);
    setMessage("");

    try {
      const endpoint = import.meta.env.VITE_LEAD_FORM_ENDPOINT as string | undefined;
      const payload = {
        name: form.name.trim(),
        phone: form.phone.trim(),
        source: "landing-popup",
        submittedAt: new Date().toISOString(),
      };

      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error("Unable to submit your request right now.");
        }
      } else {
        const existingLeads = window.localStorage.getItem("flexza-leads");
        const parsedLeads = existingLeads ? JSON.parse(existingLeads) : [];
        parsedLeads.push(payload);
        window.localStorage.setItem("flexza-leads", JSON.stringify(parsedLeads));
      }

      setIsSuccess(true);
      setMessage("Thanks! We will reach out to you shortly.");
      setForm({ name: "", phone: "" });
      window.setTimeout(() => setIsOpen(false), 1400);
    } catch (error) {
      setIsSuccess(false);
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={openLeadPopup} className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-[#4c8f8a]" >
        Request a demo
      </Button>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/70 px-4 py-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-3xl overflow-hidden rounded-3xl border border-black/5 bg-white shadow-2xl"
            >
              <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                <div className="flex items-center justify-center bg-[radial-gradient(circle_at_top_left,_rgba(94,179,170,0.18),_transparent_55%)] p-6 sm:p-8 lg:p-6">

                  <div className="rounded-2xl">
                    <img src={manImage} alt="Customer representative" className="mx-auto h-auto w-full sm:max-w-[300px] rounded-2xl object-cover" />
                  </div>


                </div>

                <div className="relative p-6 sm:p-8 lg:p-10">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="absolute right-4 top-4 rounded-full border border-black/5 p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
                    aria-label="Close popup"
                  >
                    <X className="h-4 w-4" />
                  </button>

                  <div className="max-w-md">
                    <p className="text-sm font-semibold uppercase text-primary">Get in touch</p>
                    <h3 className="mt-2 text-2xl font-bold text-ink">Fill out the form</h3>

                    <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                      <label className="block text-sm font-medium text-slate-700">
                        Your good name
                        <input
                          name="name"
                          type="text"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Alex Morgan"
                          className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                        />
                      </label>

                      <label className="block text-sm font-medium text-slate-700">
                        Mobile number for contact
                        <input
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+971 50 123 4567"
                          className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                        />
                      </label>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-[#4c8f8a] disabled:cursor-not-allowed disabled:opacity-70"
                      >
                        {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <CheckCircle2 className="h-4 w-4" />}
                        {isSubmitting ? "Sending request..." : "Book a Callback"}
                      </button>
                    </form>

                    {message ? (
                      <p className={`mt-4 text-sm ${isSuccess ? "text-emerald-600" : "text-rose-600"}`}>{message}</p>
                    ) : null}

                    <p className="mt-5 text-xs leading-5 text-slate-500">
                      Your details are only used to contact you about Flexza. You can opt out at any time.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
