import { motion } from "framer-motion";
import { Activity, Clock3, UsersRound } from "lucide-react";
import { AnimatedCounter } from "../ui/AnimatedCounter";
import { AnimatedWord } from "../ui/AnimatedWord";
import { Button } from "../ui/Button";

function PhoneMockup() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-[340px]"
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="absolute -left-12 top-20 hidden h-24 w-24 rounded-full bg-secondary blur-2xl sm:block" />
      <div className="absolute -right-10 bottom-20 h-28 w-28 rounded-full bg-primary/20 blur-2xl" />
      <div className="relative rounded-[2.5rem] border border-black/10 bg-ink p-3 shadow-glow">
        <div className="rounded-[2rem] bg-[#f7fbfa] p-5">
          <div className="mx-auto mb-5 h-1.5 w-20 rounded-full bg-black/10" />
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase text-primary">Aarogya Clinic</p>
              <h3 className="mt-1 text-xl font-extrabold text-ink">Live Token</h3>
            </div>
            <div className="rounded-full bg-secondary p-3 text-primary">
              <Activity className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-6 rounded-3xl bg-primary p-5 text-white shadow-glow">
            <p className="text-sm font-semibold text-white/80">Your token</p>
            <div className="mt-2 flex items-end justify-between">
              <span className="text-6xl font-extrabold">A-24</span>
              <span className="rounded-full bg-white/20 px-3 py-1 text-sm font-bold">Active</span>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <UsersRound className="h-5 w-5 text-primary" />
              <p className="mt-3 text-xs font-semibold text-muted">Current Queue</p>
              <p className="text-2xl font-extrabold text-ink">A-19</p>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <Clock3 className="h-5 w-5 text-primary" />
              <p className="mt-3 text-xs font-semibold text-muted">Estimated Wait</p>
              <p className="text-2xl font-extrabold text-ink">18m</p>
            </div>
          </div>
          <div className="mt-4 space-y-3 rounded-2xl bg-white p-4 shadow-sm">
            {["A-20 in consultation", "A-21 ready soon", "A-22 checked in"].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm font-semibold text-muted">
                <span className="h-2 w-2 rounded-full bg-primary" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
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
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="eyebrow">Digital queue management for modern clinics</span>
          <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-[1.02] tracking-normal text-ink sm:text-6xl lg:text-6xl">
            Stop Waiting. Start Managing <AnimatedWord words={["Smarter", "Faster", "Better"]} />.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            Flexza helps clinics manage patient queues digitally while patients track their live token from anywhere.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button showArrow>Get Early Access</Button>
            <Button variant="secondary">Book Free Demo</Button>
          </div>
          <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
            <AnimatedCounter value={10} suffix="+" label="Early clinics" />
            <AnimatedCounter value={65} suffix="%" label="Less desk load" />
            <AnimatedCounter value={24} suffix="/7" label="Queue access" />
          </div>
        </motion.div>
        <PhoneMockup />
      </div>
    </section>
  );
}
