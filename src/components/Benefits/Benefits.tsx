import { benefitGroups, CheckIcon } from "../../lib/constants";
import { SectionHeader } from "../ui/SectionHeader";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../lib/motion";

export function Benefits() {
  return (
    <section className="bg-ink py-20 text-white">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Benefits"
          title="Designed for both sides of the waiting room."
          titleClassName="text-white"
          description="Patients get clarity. Clinics get control. Everyone gets a calmer day."
        />
        <motion.div
          className="mt-12 grid gap-6 lg:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          {benefitGroups.map((group) => (
            <motion.article key={group.title} variants={fadeUp} className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 text-white">
              <h3 className="text-2xl font-extrabold">{group.title}</h3>
              <ul className="mt-6 space-y-4">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-base font-semibold text-white/80">
                    <CheckIcon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
