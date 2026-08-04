import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-[#fbfdfc] text-ink">
      <Navbar />

      <section className="section-shell py-24 sm:py-28">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-black/5 bg-white p-8 shadow-soft sm:p-10">
          <span className="eyebrow">Contact</span>
          <h1 className="mt-6 text-4xl font-extrabold text-ink sm:text-5xl">
            Talk to the Flexza team.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Whether you’re exploring a clinic queue solution or need a walkthrough for your team,
            we’d love to help you shape a smoother patient journey.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-ink p-6 text-white">
              <h2 className="text-lg font-extrabold">Book a demo</h2>
              <p className="mt-3 text-sm leading-6 text-white/80">
                Share your workflow details and we’ll show how Flexza fits your clinic or service environment.
              </p>
            </div>
            <div className="rounded-2xl bg-secondary/60 p-6 text-ink">
              <h2 className="text-lg font-extrabold">Reach us</h2>
              <p className="mt-3 text-sm leading-6 text-muted">
                Email: hello@flexza.io
                <br />
                Phone: +91 98765 43210
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
