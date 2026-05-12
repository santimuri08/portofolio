"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CARDS = [
  {
    label: "AI products",
    title: "Workflows over demos",
    text: "I focus on building AI systems that solve repeatable user problems through automation, conversational UX, and structured workflows.",
  },
  {
    label: "Full-stack systems",
    title: "Connected architecture",
    text: "I combine frontend interfaces, backend APIs, databases, authentication, and AI models into cohesive production-ready systems.",
  },
  {
    label: "Build + iterate",
    title: "Real product evolution",
    text: "Most of my projects improve through testing, iteration, debugging, and refining how users interact with AI inside real workflows.",
  },
];

export default function About() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      ref={ref}
      id="about"
      className="relative overflow-hidden border-b border-border"
    >
      {/* Faint grid */}
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
            How I build
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="mb-8 text-balance text-4xl font-medium leading-[1.1] tracking-tight md:text-6xl lg:text-[4rem]"
          >
            I build AI systems that{" "}
            <span className="text-muted">people can actually use.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="max-w-2xl text-balance text-base leading-relaxed text-muted md:text-lg"
          >
            I care about AI products that do real work — conversational
            interfaces, workflow automation, and systems that feel reliable
            beyond the demo.
          </motion.p>
        </div>

        {/* 2-column: portrait + cards */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Portrait — sticky on desktop while you scroll past the cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start"
          >
            <div className="group relative">
              <div
                aria-hidden="true"
                className="absolute -inset-1 rounded-2xl opacity-40 blur-2xl transition-opacity duration-700 group-hover:opacity-60"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(34,197,94,0.18), transparent 70%)",
                }}
              />

              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur-sm">
                <Image
                  src="/images/profile.jpg"
                  alt="Santiago Murillo"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover grayscale-[0.15] transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:grayscale-0"
                  priority
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/5"
                />

                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted/90">
                    Santiago Murillo
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.15em] text-muted/70">
                    NJ / 2026
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cards column */}
          <div className="flex flex-col gap-5 lg:col-span-7 lg:gap-6">
            {CARDS.map((card, i) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                animate={
                  inView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 24 }
                }
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.3 + i * 0.12,
                }}
                className="group relative flex flex-col gap-4 rounded-xl border border-border bg-card/30 p-7 backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:border-foreground/30 hover:bg-card/60 md:p-9"
              >
                {/* Hover glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(600px circle at 50% 0%, rgba(34,197,94,0.07), transparent 45%)",
                  }}
                />

                <div className="relative flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                    {card.label}
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-mono text-[10px] tracking-[0.15em] text-muted/60"
                  >
                    0{i + 1}
                  </span>
                </div>

                <h3 className="relative text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                  {card.title}
                </h3>

                <p className="relative text-sm leading-relaxed text-muted md:text-[15px]">
                  {card.text}
                </p>

                <div
                  aria-hidden="true"
                  className="relative mt-1 h-px w-8 bg-border transition-all duration-500 group-hover:w-16 group-hover:bg-foreground/40"
                />
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}