import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";

export default function PrivacyPolicyPage() {
  return (
    <main className="overflow-hidden bg-[#fbfdfc] text-ink">
      <Navbar />

      <section className="section-shell py-24 sm:py-28">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-black/5 bg-white p-8 shadow-soft sm:p-10">
          <span className="eyebrow">Privacy Policy</span>
          <h1 className="mt-6 text-4xl font-extrabold text-ink sm:text-5xl">
            Privacy matters as much as queue flow.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
            Flexza respects patient and clinic privacy. We collect only the minimum information needed to
            support queue booking, live updates, and secure access for clinics and patients.
          </p>

          <div className="mt-8 space-y-6 text-sm leading-7 text-muted">
            <div>
              <h2 className="text-base font-extrabold text-ink">1. Information we collect</h2>
              <p className="mt-2">
                We may collect contact details, queue booking information, clinic operational data, and basic
                usage-related technical information to keep the service dependable and secure.
              </p>
            </div>
            <div>
              <h2 className="text-base font-extrabold text-ink">2. How we use it</h2>
              <p className="mt-2">
                Data is used to provide queue visibility, token updates, visit history, authentication, and
                service improvements. We do not sell customer data.
              </p>
            </div>
            <div>
              <h2 className="text-base font-extrabold text-ink">3. Security</h2>
              <p className="mt-2">
                We follow reasonable technical and organizational safeguards to protect product data, user
                accounts, and clinic workflows from unauthorized access or misuse.
              </p>
            </div>
            <div>
              <h2 className="text-base font-extrabold text-ink">4. Contact</h2>
              <p className="mt-2">
                For any privacy questions, please reach out to hello@flexza.io.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
