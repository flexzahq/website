import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../../lib/motion";

type SectionHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  titleClassName?: string;
};
export function SectionHeader({ eyebrow, title, description, align = "center", titleClassName }: SectionHeaderProps) {
  return (
    <motion.div
      className={`mx-auto max-w-2xl ${align === "center" ? "text-center" : "text-left"}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {eyebrow ? <span className="eyebrow mb-4">{eyebrow}</span> : null}
      <h2 className={`text-3xl font-extrabold tracking-normal sm:text-4xl lg:text-5xl ${titleClassName ?? 'text-ink'}`}>{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{description}</p> : null}
    </motion.div>
  );
}
