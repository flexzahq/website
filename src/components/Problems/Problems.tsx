import { motion } from "framer-motion";
import { problemItems } from "../../lib/constants";
import { fadeUp, stagger } from "../../lib/motion";
import { SectionHeader } from "../ui/SectionHeader";
import { ScrollReveal } from "../ui/ScrollReveal";

export function Problems() {
  return (
    <section id="problems" className="py-20">
      <ScrollReveal className="section-shell">
        <SectionHeader eyebrow="Current Problems" title="Waiting Shouldn't Be This Frustrating" />
        <motion.div
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          {problemItems.map((item) => (
            <motion.article key={item.title} variants={fadeUp} className="premium-card p-5">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff4f2] text-[#d65f4f]">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <p className="text-base font-bold leading-6 text-ink">{item.title}</p>
            </motion.article>
          ))}
        </motion.div>
      </ScrollReveal>
    </section>
  );
}
