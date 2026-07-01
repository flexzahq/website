import { motion } from "framer-motion";
import { screenItems } from "../../lib/constants";
import { SectionHeader } from "../ui/SectionHeader";

export function ScreensPreview() {
  return (
    <section className="overflow-hidden py-20">
      <div className="section-shell">
        <SectionHeader eyebrow="Screens Preview" title="Polished placeholders ready for your real product screens." />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {screenItems.map((screen, index) => (
            <motion.div
              key={screen}
              className="mx-auto w-full max-w-[260px] rounded-[2rem] border border-black/10 bg-ink p-2 shadow-soft"
              animate={{ y: [0, index % 2 === 0 ? -10 : 10, 0] }}
              transition={{ duration: 5 + index * 0.25, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="rounded-[1.6rem] bg-[#f8fbfa] p-4">
                <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-black/10" />
                <div className="rounded-2xl bg-secondary p-5">
                  <p className="text-xs font-bold uppercase text-primary">Flexza</p>
                  <h3 className="mt-2 text-xl font-extrabold text-ink">{screen}</h3>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="h-16 rounded-2xl bg-white shadow-sm" />
                  <div className="h-10 rounded-2xl bg-primary/15" />
                  <div className="h-10 rounded-2xl bg-white shadow-sm" />
                  <div className="h-24 rounded-2xl bg-white shadow-sm" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
