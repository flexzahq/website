import { comparisonRows } from "../../lib/constants";
import { SectionHeader } from "../ui/SectionHeader";
import { ScrollReveal } from "../ui/ScrollReveal";

export function Comparison() {
  return (
    <section className="py-20">
      <ScrollReveal className="section-shell">
        <SectionHeader eyebrow="Why Flexza" title="Replace manual chaos with visible, digital flow." />
        <div className="mt-12 overflow-hidden rounded-3xl border border-black/5 bg-white shadow-soft">
          <div className="grid grid-cols-2 bg-ink text-sm font-extrabold uppercase text-white">
            <div className="p-5">Traditional Queue</div>
            <div className="bg-primary p-5">Flexza</div>
          </div>
          {comparisonRows.map(([traditional, flexza]) => (
            <div key={traditional} className="group grid grid-cols-2 border-t border-black/5 text-sm font-bold transition duration-300 hover:-translate-y-1 hover:shadow-soft sm:text-base">
              <div className="p-5 text-muted transition duration-300 group-hover:bg-black/[0.02]">{traditional}</div>
              <div className="border-l border-black/5 bg-secondary/60 p-5 text-ink transition duration-300 group-hover:bg-secondary">{flexza}</div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
