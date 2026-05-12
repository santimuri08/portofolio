"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type StackColumn = {
  label: string;
  number: string;
  items: string[];
};

const STACK: StackColumn[] = [
  {
    label: "Frontend",
    number: "01",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    label: "Backend + data",
    number: "02",
    items: [
      "Node.js",
      "FastAPI",
      "PostgreSQL",
      "Prisma",
      "REST APIs",
      "pgvector",
    ],
  },
  {
    label: "AI + infrastructure",
    number: "03",
    items: [
      "OpenAI SDK",
      "Anthropic Claude",
      "Vector Embeddings",
      "AI Function Calling",
      "Docker",
      "Vercel",
    ],
  },
];

function StackColumn({
  column,
  index,
  visible,
}: {
  column: StackColumn;
  index: number;
  visible: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.3 + index * 0.12,
      }}
      className="group relative flex flex-col gap-7 bg-background p-7 transition-colors duration-500 ease-out hover:bg-card/50 md:p-10"
    >
      {/* Hover glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(500px circle at 50% 0%, rgba(34,197,94,0.05), transparent 50%)",
        }}
      />

      {/* Column header */}
      <div className="relative flex items-center justify-between border-b border-border pb-5">
        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-muted">
          {column.label}
        </span>
        <span
          aria-hidden="true"
          className="font-mono text-[10.5px] tracking-[0.15em] text-muted/60"
        >
          {column.number}
        </span>
      </div>

      {/* Stack items */}
      <ul className="relative flex flex-col gap-4">
        {column.items.map((item, itemIndex) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, x: -8 }}
            animate={visible ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.5 + index * 0.12 + itemIndex * 0.06,
            }}
            className="group/item flex items-center gap-3"
          >
            <span
              aria-hidden="true"
              className="h-1 w-1 rounded-full bg-muted/40 transition-all duration-300 group-hover/item:bg-foreground/60 group-hover/item:shadow-[0_0_8px_rgba(34,197,94,0.6)]"
            />
            <span className="text-[15px] text-foreground/90 transition-colors duration-300 group-hover/item:text-foreground">
              {item}
            </span>
          </motion.li>
        ))}
      </ul>

      {/* Bottom accent line */}
      <div
        aria-hidden="true"
        className="relative mt-auto h-px w-8 bg-border transition-all duration-500 group-hover:w-16 group-hover:bg-foreground/40"
      />
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      ref={ref}
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
        <div className="mb-20 max-w-3xl md:mb-28">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-muted"
          >
            Skills & Tools
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="mb-8 text-balance text-4xl font-medium leading-[1.1] tracking-tight md:text-6xl lg:text-[4rem]"
          >
            AI product{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(120deg, #ffffff 0%, #d4f7dd 45%, #22C55E 100%)",
              }}
            >
              stack.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="max-w-2xl text-balance text-base leading-relaxed text-muted md:text-lg"
          >
            Technologies I use to build conversational products, workflow
            systems, and modern AI-powered applications.
          </motion.p>
        </div>

        {/* Stack grid */}
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
          {STACK.map((column, i) => (
            <StackColumn
              key={column.label}
              column={column}
              index={i}
              visible={inView}
            />
          ))}
        </div>

        {/* Architectural footer note */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.9 }}
          className="mt-10 flex flex-wrap items-center justify-between gap-3 font-mono text-[10.5px] uppercase tracking-[0.22em] text-muted/60 md:mt-12"
        >
          <span>Production-ready architecture</span>
          <span aria-hidden="true">{"//"} end-to-end systems</span>
        </motion.div>
      </div>
    </section>
  );
}