import { Button } from "../ui/Button";
import { ScrollReveal } from "../ui/ScrollReveal";

export function EarlyAccessBanner() {
  return (
    <section className="py-16">
      <ScrollReveal className="section-shell">
        <div className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-12 text-center text-white shadow-glow sm:px-10 lg:px-16">
          <div className="absolute -left-10 -top-10 h-36 w-36 rounded-full bg-white/15" />
          <div className="absolute -bottom-16 -right-10 h-44 w-44 rounded-full bg-white/12" />
          <div className="relative mx-auto max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-normal sm:text-4xl lg:text-5xl">
              🎉 First 10 Clinics Get Lifetime Premium Free
            </h2>
            <p className="mt-5 text-base leading-7 text-white/82 sm:text-lg">
              We're working closely with our first clinics to shape Flexza. Get free access, onboarding, and priority
              support in exchange for your feedback.
            </p>
            <Button variant="secondary" showArrow className="mt-8">
              Reserve My Spot
            </Button>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
