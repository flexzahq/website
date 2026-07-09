import { motion } from "framer-motion";
import { Link2, ShieldCheck, Ticket, Waves } from "lucide-react";
import { fadeUp, stagger } from "../../lib/motion";
import { SectionHeader } from "../ui/SectionHeader";

const steps = [
  { title: "Scan QR or Open Clinic Link", icon: Link2 },
  { title: "Verify Mobile with OTP", icon: ShieldCheck },
  { title: "Receive Digital Token", icon: Ticket },
  { title: "Track Queue Live", icon: Waves },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="section-shell">
        <SectionHeader eyebrow="How It Works" title="From check-in to consultation in four simple steps." />
        <motion.div
          className="relative mt-14 grid gap-5 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <div className="absolute left-0 right-0 top-11 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block" />
          {steps.map((step, index) => (
            <motion.article key={step.title} variants={fadeUp} className="relative premium-card p-6 text-center">
              <span className="mt-5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-ink text-sm font-extrabold text-white">
                {index + 1}
              </span>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-secondary text-primary">
                <step.icon className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-extrabold text-ink">{step.title}</h3>
              {index < steps.length - 1 ? (
                <motion.span
                  aria-hidden="true"
                  className="absolute -bottom-5 left-1/2 h-10 w-px bg-primary/30 lg:-right-3 lg:left-auto lg:top-11 lg:h-px lg:w-6"
                  animate={{ opacity: [0.35, 1, 0.35] }}
                  transition={{ duration: 1.6, repeat: Infinity, delay: index * 0.2 }}
                />
              ) : null}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
