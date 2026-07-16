import { motion } from "framer-motion";
import { solutionItems } from "../../lib/constants";
import { fadeUp, stagger } from "../../lib/motion";
import { SectionHeader } from "../ui/SectionHeader";
import { ScrollReveal } from "../ui/ScrollReveal";

export function Solution() {
  return (
    <section id="solution" className="bg-secondary/55 py-20">
      <ScrollReveal className="section-shell">
        <SectionHeader
          eyebrow="Our Solution"
          title="One Platform. Better Experience."
          description="Flexza connects the clinic desk, doctor flow, and patient phone into one calm queue experience."
        />
        <motion.div
          className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          {solutionItems.map((item) => (
            <motion.article
              key={item.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="premium-card p-6 transition-shadow duration-300 hover:shadow-glow"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-extrabold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </ScrollReveal>
    </section>
  );
}
