import { motion } from "framer-motion";
import { featureItems } from "../../lib/constants";
import { fadeUp, stagger } from "../../lib/motion";
import { SectionHeader } from "../ui/SectionHeader";

export function Features() {
  return (
    <section id="features" className="bg-secondary/55 py-20">
      <div className="section-shell">
        <SectionHeader eyebrow="Features" title="Everything a growing service business needs to manage tokens." />
        <motion.div
          className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          {featureItems.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="premium-card flex min-h-36 flex-col justify-between p-5"
            >
              <item.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              <h3 className="mt-6 text-base font-extrabold text-ink">{item.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
