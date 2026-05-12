export default function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">
              About
            </p>
            <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
              What I&apos;m building
            </h2>
          </div>

          <div className="space-y-5 text-base leading-relaxed text-muted md:col-span-8 md:text-lg">
            <p>
              {/* TODO: personalize this paragraph */}
              I&apos;m a full-stack developer focused on the intersection of
              AI, interactive systems, and product design. I build things
              people actually use — not demos.
            </p>
            <p>
              My recent work includes an AI fitness coach that ships real
              workout plans, a browser-based VR escape room, and full-stack
              web systems with real users and real data.
            </p>
            <p>
              I&apos;m currently looking for roles at product-quality startups
              where engineering and design are taken equally seriously.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}