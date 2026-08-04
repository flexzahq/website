import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";

export default function TermsPage() {
  return (
    <main className="overflow-hidden bg-[#fbfdfc] text-ink">
      <Navbar />

      <section className="section-shell py-24 sm:py-28">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-black/5 bg-white p-8 shadow-soft sm:p-10">
          <span className="eyebrow">Terms of Service</span>
          <h1 className="mt-6 text-4xl font-extrabold text-ink sm:text-5xl">
            Clear terms for a trustworthy queue platform.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
            By using Flexza, clinics and patients agree to a simple set of guidelines centered on secure
            service usage, truthful booking, and responsible handling of queue data.
          </p>

          <div className="mt-8 space-y-6 text-sm leading-7 text-muted">
            <div>
              <h2 className="text-base font-extrabold text-ink">1. Service usage</h2>
              <p className="mt-2">
                Flexza is intended to support queue management and token bookings for clinics and related
                service businesses. Users must use the platform lawfully and keep booking information accurate.
              </p>
            </div>
            <div>
              <h2 className="text-base font-extrabold text-ink">2. Clinic responsibility</h2>
              <p className="mt-2">
                Clinics are responsible for managing their own queue rules, staff access, and operational
                information displayed to patients through the platform.
              </p>
            </div>
            <div>
              <h2 className="text-base font-extrabold text-ink">3. Availability</h2>
              <p className="mt-2">
                While we aim for a stable and reliable experience, Flexza may occasionally be unavailable for
                maintenance or due to external service conditions beyond our control.
              </p>
            </div>
            <div>
              <h2 className="text-base font-extrabold text-ink">4. Questions</h2>
              <p className="mt-2">
                For service or legal questions, contact hello@flexza.io.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
