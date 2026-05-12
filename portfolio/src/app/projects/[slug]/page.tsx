import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects, getProjectBySlug } from "@/data/projects";

type Params = { slug: string };

// Pre-generate a page for each project at build time
export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.title} - Santiago Murillo Londono`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  // Find prev/next for the bottom navigation
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const prev = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const next =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <article>
        {/* Header */}
        <header className="border-b border-border">
          <div className="mx-auto max-w-5xl px-6 pb-16 pt-16 md:px-8 md:pb-24 md:pt-20">
            {/* Back link */}
            <Link
              href="/#projects"
              className="mb-12 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-muted transition-colors hover:text-foreground"
            >
              <span aria-hidden="true">{"<-"}</span>
              Back to work
            </Link>

            {/* Meta row */}
            <div className="mb-8 flex flex-wrap items-baseline gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-[0.15em] text-muted">
              <span>{project.index}</span>
              <span>{project.category}</span>
              <span>{project.year}</span>
            </div>

            {/* Title + subtitle */}
            <h1 className="mb-4 text-4xl font-medium tracking-tight md:text-6xl lg:text-7xl">
              {project.title}
            </h1>
            <p className="mb-10 text-lg text-muted md:text-xl">
              {project.subtitle}
            </p>

            {/* Short summary */}
            <p className="mb-10 max-w-3xl text-base leading-relaxed text-foreground md:text-lg">
              {project.shortDescription}
            </p>

            {/* Primary links */}
            <div className="flex flex-wrap gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
                >
                  View live
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-foreground hover:bg-card"
                >
                  View code
                </a>
              )}
            </div>
          </div>
        </header>

        {/* Hero image */}
        <div className="border-b border-border">
          <div className="mx-auto max-w-5xl px-6 py-16 md:px-8 md:py-24">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-border bg-card">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 1000px, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Overview */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-5xl px-6 py-20 md:px-8 md:py-28">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-4">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                  Overview
                </p>
              </div>
              <div className="space-y-6 md:col-span-8">
                {project.fullDescription.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-base leading-relaxed text-foreground md:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Key features */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-5xl px-6 py-20 md:px-8 md:py-28">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-4">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                  Key features
                </p>
              </div>
              <ul className="space-y-5 md:col-span-8">
                {project.keyFeatures.map((feature, i) => (
                  <li
                    key={i}
                    className="flex gap-5 text-base leading-relaxed text-foreground md:text-lg"
                  >
                    <span className="mt-[0.55em] inline-block h-px w-6 flex-shrink-0 bg-muted" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-5xl px-6 py-20 md:px-8 md:py-28">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-4">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                  How it works
                </p>
              </div>
              <div className="space-y-8 md:col-span-8">
                <div>
                  <p className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-muted">
                    Input
                  </p>
                  <p className="text-base leading-relaxed text-foreground md:text-lg">
                    {project.howItWorks.input}
                  </p>
                </div>
                <div>
                  <p className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-muted">
                    Process
                  </p>
                  <p className="text-base leading-relaxed text-foreground md:text-lg">
                    {project.howItWorks.process}
                  </p>
                </div>
                <div>
                  <p className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-muted">
                    Output
                  </p>
                  <p className="text-base leading-relaxed text-foreground md:text-lg">
                    {project.howItWorks.output}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech stack */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-5xl px-6 py-20 md:px-8 md:py-28">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-4">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                  Tech stack
                </p>
              </div>
              <div className="space-y-8 md:col-span-8">
                {project.techStack.map((group) => (
                  <div key={group.label}>
                    <p className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-muted">
                      {group.label}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-border px-3 py-1 font-mono text-xs text-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Optional note */}
        {project.note && (
          <section className="border-b border-border">
            <div className="mx-auto max-w-5xl px-6 py-16 md:px-8 md:py-20">
              <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
                <div className="md:col-span-4">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                    Note
                  </p>
                </div>
                <p className="text-sm italic leading-relaxed text-muted md:col-span-8 md:text-base">
                  {project.note}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Prev / Next nav */}
        <nav className="border-b border-border">
          <div className="mx-auto grid max-w-5xl grid-cols-2 px-6 py-10 md:px-8 md:py-14">
            <div>
              {prev && (
                <Link href={`/projects/${prev.slug}`} className="group block">
                  <p className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-muted">
                    Previous
                  </p>
                  <p className="text-base font-medium transition-colors group-hover:text-muted md:text-lg">
                    {prev.title}
                  </p>
                </Link>
              )}
            </div>
            <div className="text-right">
              {next && (
                <Link href={`/projects/${next.slug}`} className="group block">
                  <p className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-muted">
                    Next
                  </p>
                  <p className="text-base font-medium transition-colors group-hover:text-muted md:text-lg">
                    {next.title}
                  </p>
                </Link>
              )}
            </div>
          </div>
        </nav>
      </article>

      <Footer />
    </main>
  );
}