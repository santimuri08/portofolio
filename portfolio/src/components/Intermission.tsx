"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Intermission() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="relative flex min-h-[85vh] w-full items-center justify-center overflow-hidden border-b border-border md:min-h-[90vh]"
    >
      {/* Faint grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Ambient glow */}
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[40vh] w-[60vw] -translate-x-1/2 -translate-y-1/2 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(34,197,94,0.08), transparent 60%)",
        }}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.6 } : { opacity: 0 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      />

      {/* Vignette */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center md:px-8">
        {/* Top mark */}
        <motion.div
          className="mx-auto mb-12 h-px w-8 bg-border md:mb-16"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={inView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          aria-hidden="true"
        />

        <h2 className="text-balance text-3xl font-semibold leading-[1.1] tracking-[-0.025em] md:text-5xl lg:text-[3.75rem]">
          <motion.span
            className="block"
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            Good products aren&apos;t just built.
          </motion.span>

          <motion.span
            className="mt-3 block text-muted md:mt-5"
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
          >
            They&apos;re structured to survive real users.
          </motion.span>
        </h2>

        {/* Bottom mark */}
        <motion.div
          className="mx-auto mt-12 h-px w-8 bg-border md:mt-16"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={inView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.4 }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}