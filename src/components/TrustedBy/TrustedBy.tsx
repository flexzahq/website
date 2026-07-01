import { motion } from "framer-motion";
import { trustedLogos } from "../../lib/constants";
import { fadeUp, stagger } from "../../lib/motion";

export function TrustedBy() {
  return (
    <section className="py-12">
      <div className="section-shell">
        <motion.p
          className="text-center text-base font-semibold text-muted"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Built for modern clinics and growing healthcare businesses.
        </motion.p>
        <motion.div
          className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {trustedLogos.map((logo) => (
            <motion.div
              key={logo}
              variants={fadeUp}
              className="flex h-20 items-center justify-center rounded-2xl border border-black/5 bg-white text-center text-sm font-extrabold text-muted shadow-sm"
            >
              {logo}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
