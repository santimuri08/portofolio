import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const detailUrl = `/projects/${project.slug}`;

  return (
    <article className="group relative border-t border-border pt-12 md:pt-20">
      {/* Top row: index + category label + external link row */}
      <div className="mb-8 flex items-start justify-between gap-6">
        <div className="flex items-baseline gap-6">
          <span className="font-mono text-xs text-muted">{project.index}</span>
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
            {project.category}
          </span>
        </div>

        <div className="hidden items-center gap-5 text-sm md:flex">
          <Link
            href={detailUrl}
            className="text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            Case study
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              Live
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              Code
            </a>
          )}
        </div>
      </div>

      {/* Title + subtitle */}
      <Link href={detailUrl} className="mb-8 block md:mb-12">
        <h3
          className={`mb-3 font-medium tracking-tight transition-colors group-hover:text-muted ${
            project.featured
              ? "text-4xl md:text-6xl lg:text-7xl"
              : "text-3xl md:text-5xl"
          }`}
        >
          {project.title}
        </h3>
        <p className="text-base text-muted md:text-lg">{project.subtitle}</p>
      </Link>

      {/* Big screenshot */}
      <Link
        href={detailUrl}
        className="mb-10 block overflow-hidden rounded-lg border border-border bg-card"
      >
        <div
          className={`relative w-full overflow-hidden bg-background ${
            project.featured ? "aspect-[16/9]" : "aspect-[16/10]"
          }`}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 1000px, 100vw"
            className="object-cover brightness-90 transition-all duration-700 group-hover:scale-[1.02] group-hover:brightness-100"
          />
        </div>
      </Link>

      {/* Bottom: description + tags + mobile links */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
        <p className="text-base leading-relaxed text-muted md:col-span-7 md:text-lg">
          {project.shortDescription}
        </p>

        <div className="md:col-span-5">
          <div className="mb-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Mobile-only link row */}
          <div className="flex flex-wrap items-center gap-5 text-sm md:hidden">
            <Link
              href={detailUrl}
              className="text-foreground underline-offset-4 hover:underline"
            >
              Case study
            </Link>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="text-muted underline-offset-4 hover:text-foreground hover:underline"
              >
                Live
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="text-muted underline-offset-4 hover:text-foreground hover:underline"
              >
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}