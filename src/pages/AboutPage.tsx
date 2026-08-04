import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#fbfdfc] text-ink">
      <Navbar />

      <section className="section-shell py-24 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <span className="eyebrow">About Flexza</span>
          <h1 className="mt-6 text-4xl font-extrabold text-ink sm:text-5xl">
            Building calmer queue experiences for modern service businesses.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
            Flexza helps clinics and service teams replace front-desk chaos with a clear digital queue flow.
            Patients can book ahead, view live token updates, and stay informed from anywhere, while staff
            manage the queue without manual calling or scattered paper records.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-soft">
              <h2 className="text-lg font-extrabold text-ink">Patient-first</h2>
              <p className="mt-3 text-sm leading-6 text-muted">
                Transparent wait updates and easy mobile booking reduce confusion for every visit.
              </p>
            </div>
            <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-soft">
              <h2 className="text-lg font-extrabold text-ink">Clinic-ready</h2>
              <p className="mt-3 text-sm leading-6 text-muted">
                Staff get better visibility into live queue movement, faster operations, and less desk load.
              </p>
            </div>
            <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-soft">
              <h2 className="text-lg font-extrabold text-ink">Built to scale</h2>
              <p className="mt-3 text-sm leading-6 text-muted">
                From small clinics to multi-location service teams, Flexza is designed for smoother daily flow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
