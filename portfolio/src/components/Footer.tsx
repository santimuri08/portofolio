export default function Footer() {
  return (
    <footer id="contact">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-6">
            <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">
              Contact
            </p>
            <h2 className="mb-6 text-3xl font-medium tracking-tight md:text-5xl">
              Let&apos;s build something.
            </h2>
            <a
              href="mailto:you@example.com"
              className="inline-flex items-center gap-2 text-lg text-foreground underline underline-offset-8 hover:no-underline"
            >
              you@example.com
            </a>
          </div>

          <div className="md:col-span-6">
            <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">
              Elsewhere
            </p>
            <ul className="space-y-3 text-base">
              <li>
                <a
                  href="https://github.com/yourhandle"
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground underline-offset-4 hover:underline"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/yourhandle"
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground underline-offset-4 hover:underline"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/yourhandle"
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground underline-offset-4 hover:underline"
                >
                  X / Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-24 flex items-center justify-between border-t border-border pt-8">
          <p className="font-mono text-xs text-muted">
            Copyright {new Date().getFullYear()} Your Name
          </p>
          <p className="font-mono text-xs text-muted">
            Built with Next.js and Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}