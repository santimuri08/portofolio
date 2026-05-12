"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type ShowcaseProject = {
  slug: string;
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  repoUrl?: string;
};

const PROJECTS: ShowcaseProject[] = [
  {
    slug: "studyai",
    number: "01",
    category: "AI productivity · study",
    title: "StudyAI",
    description:
      "Chat-first productivity platform that converts assignments into AI-assisted study workflows.",
    tags: ["Next.js", "PostgreSQL", "Prisma", "Claude AI"],
    image: "/images/studyai.png",
    liveUrl: "https://study-mrzhbe37s-snaitgoaos-projects.vercel.app",
    repoUrl: "https://github.com/santimuri08/study",
  },
  {
    slug: "jobtrack",
    number: "02",
    category: "AI agent · productivity",
    title: "JobTrack",
    description:
      "AI job-search agent with live job aggregation, resume matching, and application tracking in one workflow.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Claude AI"],
    image: "/images/jobtrack.png",
    liveUrl: "https://jobtracker-production-cb87.up.railway.app",
    repoUrl: "https://github.com/santimuri08/jobtracker",
  },
];

function ProjectRow({
  project,
  index,
}: {
  project: ShowcaseProject;
  index: number;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  // Alternate image side per row on desktop for editorial rhythm
  const imageOnLeft = index % 2 === 0;
  const detailUrl = `/projects/${project.slug}`;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="group relative grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-14"
    >
      {/* Image column */}
      <Link
        href={detailUrl}
        aria-label={`View ${project.title}`}
        className={`relative block lg:col-span-7 ${
          imageOnLeft ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-card/30 backdrop-blur-sm">
          {/* Glow behind image on hover */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-1 rounded-2xl opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(34,197,94,0.18), transparent 70%)",
            }}
          />

          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
          />

          {/* Dark gradient overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/15 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90"
          />

          {/* Inner ring */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/5"
          />

          {/* "View Project" hover cue */}
          <div className="pointer-events-none absolute inset-0 flex items-end justify-end p-6">
            <span className="inline-flex translate-y-2 items-center gap-2 rounded-full border border-foreground/20 bg-background/70 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              View project
              <span aria-hidden="true">{"\u2192"}</span>
            </span>
          </div>

          {/* Project number watermark */}
          <div className="absolute left-6 top-6">
            <span className="font-mono text-[10.5px] tracking-[0.22em] text-muted/70">
              {project.number}
            </span>
          </div>
        </div>
      </Link>

      {/* Text column */}
      <div
        className={`flex flex-col gap-5 lg:col-span-5 lg:gap-6 ${
          imageOnLeft ? "lg:order-2" : "lg:order-1"
        }`}
      >
        {/* Category */}
        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-muted">
          {project.category}
        </span>

        {/* Title */}
        <Link
          href={detailUrl}
          className="block transition-colors hover:text-muted"
        >
          <h3 className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-[2.5rem] lg:leading-[1.1]">
            {project.title}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-balance text-[15px] leading-relaxed text-muted md:text-base">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border/70 px-2.5 py-1 font-mono text-[10.5px] text-muted/80"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-2 pt-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="group/btn inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-[13px] font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:opacity-95"
            >
              Live site
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover/btn:translate-x-0.5"
              >
                {"\u2192"}
              </span>
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border/70 px-4 py-2 text-[13px] font-medium text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/30 hover:text-foreground"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });

  return (
    <section
      id="projects"
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

      <div className="relative mx-auto max-w-6xl px-6 py-28 md:px-8 md:py-36">
        {/* Header */}
        <div ref={headerRef} className="mb-20 max-w-3xl md:mb-28">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={
              headerInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 12 }
            }
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-muted"
          >
            Selected projects
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={
              headerInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 18 }
            }
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="mb-6 text-balance text-4xl font-medium leading-[1.1] tracking-tight md:text-6xl lg:text-[4rem]"
          >
            AI products built for{" "}
            <span className="text-muted">real workflows.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={
              headerInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 18 }
            }
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="max-w-2xl text-balance text-base leading-relaxed text-muted md:text-lg"
          >
            A curated set of AI tools focused on productivity, automation, and
            real user workflows.
          </motion.p>
        </div>

        {/* Projects — alternating layout for editorial rhythm */}
        <div className="flex flex-col gap-24 md:gap-32 lg:gap-36">
          {PROJECTS.map((project, i) => (
            <ProjectRow key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}