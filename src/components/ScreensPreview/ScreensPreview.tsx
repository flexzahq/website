import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import booker1 from "../../assets/booker_1_5x.webp";
import bookingPopup from "../../assets/booking_popup_booker_1_5x.webp";
import loginVendor from "../../assets/login_vendor_1_5x.webp";
import tokenVendor from "../../assets/token_vendor_1_5x.webp";
import { SectionHeader } from "../ui/SectionHeader";
import { ScrollReveal } from "../ui/ScrollReveal";

const screenImages = [
  { title: "Patient Home", src: booker1 },
  { title: "Book Token", src: bookingPopup },
  { title: "Live Queue", src: tokenVendor },
  { title: "Doctor Dashboard", src: loginVendor },
];

export function ScreensPreview() {
  const railRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    // duplicate content for seamless loop
    // pause on hover
    let paused = false;
    let rafId = 0;
    let last = performance.now();
    const speed = 0.06; // pixels per ms

    const step = (now: number) => {
      const dt = now - last;
      last = now;
      if (!paused) {
        rail.scrollLeft += speed * dt;
        // reset when we've scrolled past half (since content duplicated)
        if (rail.scrollLeft >= rail.scrollWidth / 2) {
          rail.scrollLeft -= rail.scrollWidth / 2;
        }
      }
      rafId = requestAnimationFrame(step);
    };

    const onEnter = () => (paused = true);
    const onLeave = () => (paused = false);

    rail.addEventListener("mouseenter", onEnter);
    rail.addEventListener("mouseleave", onLeave);
    rafId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(rafId);
      rail.removeEventListener("mouseenter", onEnter);
      rail.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section className="py-20">
      <ScrollReveal className="section-shell">
        <SectionHeader eyebrow="Screens Preview" title="Polished placeholders ready for your real product screens." />
        <div className="mt-10">
          <div ref={railRef} className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6 no-scrollbar">
            {[...screenImages, ...screenImages].map((screen, index) => (
              <motion.div
                key={`${screen.title}-${index}`}
                className="snap-center min-w-full sm:min-w-[280px] md:min-w-[300px] lg:min-w-[340px] rounded-[1.25rem] border border-black/10 bg-white shadow-soft"
                animate={{ y: [0, index % 2 === 0 ? -8 : 8, 0] }}
                transition={{ duration: 4 + (index % screenImages.length) * 0.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="rounded-[1.25rem] sm:overflow-hidden">
                  <img src={screen.src} alt={screen.title} className="w-full object-contain md:h-[360px] lg:h-[420px]" />
                </div>
                <div className="border-t border-black/10 p-3 text-center">
                  <h3 className="text-base font-semibold text-ink">{screen.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
