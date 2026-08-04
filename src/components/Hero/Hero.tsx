import { motion } from "framer-motion";
import { Activity, Clock3, UsersRound } from "lucide-react";
import { AnimatedCounter } from "../ui/AnimatedCounter";
import { AnimatedWord } from "../ui/AnimatedWord";
import { Button } from "../ui/Button";
import { ScrollReveal } from "../ui/ScrollReveal";
import { openLeadPopup } from "../CTA/LeadPopup";
import bookerMock from "../../assets/booker_1_5x.webp";
import vendorMock from "../../assets/vendor_1_5x.webp";

function PhoneMockup() {
  return (
    <div className="relative mx-auto flex w-full max-w-[420px] justify-center overflow-visible">
      <div className="relative flex h-[340px] w-full items-center justify-center sm:h-[420px] md:h-[480px]">

        {/* Back phone */}
        <motion.img
          src={vendorMock}
          alt="Vendor mockup"
          className="
            relative
            z-0
            mr-0
            w-[205PX]
            object-cover
            sm:mr-[-80px]
            sm:w-[220px]
            md:mr-[-96px]
            md:w-[300px]
          "
          initial={{ rotate: -3, scale: 0.98 }}
          animate={{
            rotate: [-3, 0, -3],
            y: [0, -4, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Front phone */}
        <motion.img
          src={bookerMock}
          alt="Booker mockup"
          className="
            relative
            z-10
            w-[190px]
            object-cover
            sm:w-[200px]
            md:w-[260px]
          "
          initial={{ rotate: 0 }}
          animate={{
            y: [0, -12, 0],
            rotate: [0, 4, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}
export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pb-20 pt-28 sm:pt-32 lg:pb-28">
      <div className="absolute inset-x-0 top-0 -z-10 h-[620px] bg-[radial-gradient(circle_at_20%_20%,rgba(90,157,152,0.22),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(234,245,244,1),transparent_26%)]" />
      <motion.div
        className="absolute left-[8%] top-32 -z-10 h-20 w-20 rounded-3xl border border-primary/15 bg-white/60"
        animate={{ rotate: [0, 8, 0], y: [0, 18, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[12%] top-24 -z-10 h-14 w-14 rounded-full bg-secondary shadow-soft"
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <ScrollReveal className="section-shell grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="eyebrow">Digital queue management for modern clinics</span>
          <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-[1.02] tracking-normal text-ink sm:text-6xl lg:text-6xl">
            Stop Waiting. Start Managing <AnimatedWord words={["Smarter", "Faster", "Better"]} />
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            Flexza helps clinics manage patient queues digitally while patients track their live token from anywhere.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button showArrow onClick={openLeadPopup}>
              Get Early Access
            </Button>
            <Button variant="secondary" onClick={openLeadPopup}>
              Book Free Demo
            </Button>
          </div>
          <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
            <AnimatedCounter value={100} suffix="%" label="Early clinics" />
            <AnimatedCounter value={65} suffix="%" label="Less desk load" />
            <AnimatedCounter value={24} suffix="/7" label="Queue access" />
          </div>
        </motion.div>
        <PhoneMockup />
      </ScrollReveal>
    </section>
  );
}
