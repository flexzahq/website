import { Button } from "../ui/Button";

export function FinalCTA() {
  return (
    <section className="py-20">
      <div className="section-shell text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl font-extrabold tracking-normal text-ink sm:text-5xl">Ready to modernize your clinic?</h2>
          <p className="mt-5 text-lg leading-8 text-muted">
            Start with a lightweight digital queue, then grow into analytics, history, and branded patient experiences.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button showArrow>Get Early Access</Button>
            <Button variant="secondary">Book Demo</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
