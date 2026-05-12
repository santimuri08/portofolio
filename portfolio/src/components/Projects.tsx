import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32">
        {/* Section header */}
        <div className="mb-20 flex items-end justify-between md:mb-28">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Selected work
            </p>
            <h2 className="text-4xl font-medium tracking-tight md:text-6xl">
              Projects
            </h2>
          </div>
          <a
            href="https://github.com/yourhandle"
            target="_blank"
            rel="noreferrer"
            className="hidden font-mono text-xs uppercase tracking-[0.15em] text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline md:inline"
          >
            All on GitHub
          </a>
        </div>

        {/* Projects stack */}
        <div className="space-y-16 md:space-y-28">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}