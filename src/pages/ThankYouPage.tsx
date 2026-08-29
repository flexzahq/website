import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";
import ThankYou from "../assets/thankyouman.webp";

export default function ThankYouPage() {
    const navigate = useNavigate();

    return (
        <main className="overflow-hidden bg-[#fbfdfc] text-ink">
            <Navbar />

            <section className="section-shell py-24 sm:py-28">
                <div className="mx-auto max-w-3xl rounded-[2rem] border border-black/5 bg-white p-8 text-center shadow-soft sm:p-12">
                    <div className="mx-auto max-w-2xl">
                        <img
                            src={ThankYou}
                            alt="Thank you illustration"
                            className="mx-auto w-56 sm:w-72"
                        />
                    </div>
                    <h1 className="mt-6 text-4xl font-extrabold text-ink sm:text-5xl">
                        Thanks for reaching out.
                    </h1>
                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted">
                        Your request has been submitted successfully. Our team will contact you shortly.
                    </p>

                    <button
                        type="button"
                        onClick={() => {
                            navigate("/");
                        }}
                        className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-[#4c8f8a]"
                    >
                        Back to home
                    </button>
                </div>
            </section>

            <Footer />
        </main>
    );
}
