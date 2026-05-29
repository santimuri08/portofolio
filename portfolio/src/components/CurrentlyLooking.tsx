"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ROLES = [
  "Frontend Developer",
  "AI Developer",
  "AI Consultant",
  "React Developer",
  "Software Engineer I",
  "Full-Stack Developer",
];

const ACCENT = "#22C55E";

export default function CurrentlyLooking() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      id="currently-looking"
      className="relative overflow-hidden border-b border-border"
    >
      {/* Grid texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[30vh] w-[60vw] -translate-x-1/2 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(34,197,94,0.07), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32">
        <div className="flex flex-col items-start gap-8 md:gap-10">
          {/* Status pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/50 px-3.5 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.22em] text-muted backdrop-blur-md"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
                style={{ backgroundColor: ACCENT }}
              />
              <span
                className="relative inline-flex h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: ACCENT }}
              />
            </span>
            Open to work
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-balance text-3xl font-medium leading-[1.1] tracking-tight md:text-5xl lg:text-[3.5rem]"
          >
            Currently seeking{" "}
            <span className="text-muted">roles in.</span>
          </motion.h2>

          {/* Role pills */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-wrap gap-2.5"
          >
            {ROLES.map((role) => (
              <span
                key={role}
                className="rounded-full border border-border/70 bg-card/30 px-4 py-2 text-sm text-foreground/90 backdrop-blur-sm transition-colors duration-300 hover:border-foreground/30 hover:text-foreground"
              >
                {role}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}