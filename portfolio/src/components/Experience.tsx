"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  points: string[];
};

const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Nagy Ventures",
    role: "Frontend Developer",
    period: "2025 — Present",
    points: [
      "Contributed to AbsoluteJS using React, TypeScript, and PostgreSQL",
      "Developed frontend features and reusable UI components",
      "Collaborated using GitHub and Agile workflows",
      "Improved developer documentation and examples",
    ],
  },
];

export default function Experience() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      ref={ref}
      id="experience"
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

      <div className="relative mx-auto max-w-6xl px-6 py-28 md:px-8 md:py-40">
        {/* Header */}
        <div className="mb-16 max-w-3xl md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-muted"
          >
            Experience
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-balance text-4xl font-medium leading-[1.1] tracking-tight md:text-6xl lg:text-[4rem]"
          >
            Where I&apos;ve <span className="text-muted">shipped.</span>
          </motion.h2>
        </div>

        {/* Roles */}
        <div className="flex flex-col gap-px overflow-hidden rounded-xl border border-border bg-border">
          {EXPERIENCE.map((item, i) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.3 + i * 0.12,
              }}
              className="bg-background p-7 md:p-10"
            >
              <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
                {/* Left: company + role + period */}
                <div className="md:col-span-4">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[10.5px] tracking-[0.15em] text-muted/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                      {item.company}
                    </h3>
                  </div>
                  <p className="mt-2 text-base text-foreground/90">{item.role}</p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-muted/70">
                    {item.period}
                  </p>
                </div>

                {/* Right: bullet points */}
                <ul className="space-y-4 md:col-span-8">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-4 text-base leading-relaxed text-foreground/90 md:text-lg"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.6em] inline-block h-px w-5 flex-shrink-0 bg-muted"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}