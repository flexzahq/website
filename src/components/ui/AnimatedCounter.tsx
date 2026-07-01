import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  label: string;
};

export function AnimatedCounter({ value, suffix = "", label }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1200, bounce: 0 });
  const display = useTransform(spring, (latest) => `${Math.round(latest)}${suffix}`);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  return (
    <div ref={ref} className="rounded-2xl border border-black/5 bg-white/75 p-4 shadow-sm">
      <motion.div className="text-2xl font-extrabold text-ink">{display}</motion.div>
      <div className="mt-1 text-sm font-medium text-muted">{label}</div>
    </div>
  );
}
