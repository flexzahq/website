import { useEffect, useRef } from "react";
import booker1 from "../../assets/booker_1_5x.webp";
import bookingPopup1 from "../../assets/booking_popup_booker_1_5x-1.webp";
import bookingPopup2 from "../../assets/booking_popup_booker_1_5x-2.webp";
import bookingPopup from "../../assets/booking_popup_booker_1_5x-3.webp";
import bookinghome from "../../assets/Booker (1).webp";
import loginVendor from "../../assets/login_vendor_1_5x.webp";
import tokenVendor from "../../assets/token_vendor_1_5x.webp";
import { SectionHeader } from "../ui/SectionHeader";
import { ScrollReveal } from "../ui/ScrollReveal";

const screenImages = [
  { title: "Patient Home", src: booker1 },
  { title: "Enter Mobile no", src: bookingPopup1 },
  { title: "Verify & Enter Name", src: bookingPopup2 },
  { title: "Token Booked", src: bookingPopup },
  { title: "Doctor Login", src: loginVendor },
  { title: "Doctor Dashboard", src: tokenVendor },
  { title: "Booked Token", src: bookinghome },
];

export function ScreensPreview() {
  const railRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const rail = railRef.current;
    const track = trackRef.current;
    if (!rail || !track) return;

    let paused = false;
    let rafId = 0;
    let last = performance.now();
    let offset = 0;
    let contentWidth = track.scrollWidth / 2 || 1;
    const speed = 0.035;

    track.style.willChange = "transform";

    const step = (now: number) => {
      const dt = now - last;
      last = now;
      if (!paused) {
        offset += speed * dt;
        if (offset >= contentWidth) {
          offset -= contentWidth;
        }
        track.style.transform = `translateX(-${offset}px)`;
      }
      rafId = requestAnimationFrame(step);
    };

    const onPointerEnter = () => (paused = true);
    const onPointerLeave = () => (paused = false);
    const updateWidth = () => {
      contentWidth = track.scrollWidth / 2 || 1;
    };

    rail.addEventListener("pointerenter", onPointerEnter);
    rail.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("resize", updateWidth);
    rafId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(rafId);
      rail.removeEventListener("pointerenter", onPointerEnter);
      rail.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <section className="py-20">
      <ScrollReveal className="section-shell">
        <SectionHeader eyebrow="Screens Preview" title="Polished placeholders ready for your real product screens." />
        <div className="mt-10"> 
          <div className="mx-auto max-w-[90vw] px-4 sm:px-6">
            <div ref={railRef} className="no-scrollbar">
              <div ref={trackRef} className="flex gap-4" style={{ minWidth: "max-content" }}>
                {[...screenImages, ...screenImages].map((screen, index) => (
                  <div key={`${screen.title}-${index}`} className="min-w-[260px] sm:min-w-[100px] md:min-w-[240px] lg:min-w-[260px] rounded-[1.25rem]">
                    <div className="rounded-[1.25rem] overflow-hidden">
                      <img src={screen.src} alt={screen.title} className="w-full object-contain md:h-[320px] lg:h-[400px] sm:h-[200px]" />
                    </div>
                    <div className="p-3 text-center">
                      <h3 className="text-base font-semibold text-ink">{screen.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
