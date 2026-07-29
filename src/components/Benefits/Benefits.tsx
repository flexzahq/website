import { benefitGroups, CheckIcon } from "../../lib/constants";
import { SectionHeader } from "../ui/SectionHeader";
import { ScrollReveal } from "../ui/ScrollReveal";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../lib/motion";
import clinicMock from "../../assets/vendor_1_5x.webp";
import patientMock from "../../assets/booker_1_5x.webp";

export function Benefits() {
  return (
    <section className="bg-ink py-20 text-white">
      <ScrollReveal className="section-shell">
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
          {benefitGroups.map((group) => {
            const imageSrc = group.title === "Patients" ? patientMock : clinicMock;
            const imageAlt = group.title === "Patients" ? "Patient mobile mockup" : "Clinic mobile mockup";

            return (
              <motion.article key={group.title} variants={fadeUp} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-7 text-white">
                <h3 className="text-2xl font-extrabold">{group.title}</h3>
                <ul className="mt-6 space-y-4">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-base font-semibold text-white/80">
                      <CheckIcon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden">
                  <div className="mx-auto flex w-full justify-end px-6">
                    <img
                      src={imageSrc}
                      alt={imageAlt}
                      className="w-64 object-contain opacity-80 transition duration-300 group-hover:opacity-100 -mb-64"
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </ScrollReveal>
    </section>
  );
}
