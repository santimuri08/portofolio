"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type EducationItem = {
  school: string;
  degree: string;
  detail: string;
  coursework: string[];
};

const EDUCATION: EducationItem[] = [
  {
    school: "New Jersey Institute of Technology",
    degree: "Bachelor of Science in Information Technology",
    detail: "Graduation — May 2026",
    coursework: [
      "Web Development",
      "Database Systems",
      "Software Engineering",
      "Human-Computer Interaction",
    ],
  },
];

export default function Education() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      ref={ref}
      id="education"
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
            Education
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-balance text-4xl font-medium leading-[1.1] tracking-tight md:text-6xl lg:text-[4rem]"
          >
            Built on a{" "}
            <span className="text-muted">technical foundation.</span>
          </motion.h2>
        </div>

        {/* Entries */}
        <div className="flex flex-col gap-px overflow-hidden rounded-xl border border-border bg-border">
          {EDUCATION.map((item, i) => (
            <motion.div
              key={item.school}
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
                {/* Left: school + degree + date */}
                <div className="md:col-span-5">
                  <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                    {item.school}
                  </h3>
                  <p className="mt-2 text-base text-foreground/90">
                    {item.degree}
                  </p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-muted/70">
                    {item.detail}
                  </p>
                </div>

                {/* Right: coursework */}
                <div className="md:col-span-7">
                  <p className="mb-5 font-mono text-[10.5px] uppercase tracking-[0.22em] text-muted">
                    Relevant coursework
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.coursework.map((course) => (
                      <span
                        key={course}
                        className="rounded-full border border-border/70 px-3 py-1.5 text-sm text-foreground/85"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}