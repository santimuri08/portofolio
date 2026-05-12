const skillGroups = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js"],
  },
  {
    label: "Backend",
    items: ["Node.js", "PostgreSQL", "Prisma", "REST APIs", "Supabase"],
  },
  {
    label: "AI and Tooling",
    items: ["OpenAI API", "LangChain", "Vercel AI SDK", "Git", "Figma"],
  },
];

export default function Skills() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32">
        <div className="mb-16">
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">
            Stack
          </p>
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
            Tools I work with
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">
                {group.label}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-base text-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}