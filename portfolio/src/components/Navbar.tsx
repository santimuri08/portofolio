"use client";

import Link from "next/link";

const SECTION_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
];

const GITHUB_URL = "https://github.com/santimuri08";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/santiago-murillo-londono-65b947293/";
// Place your resume at /public/resume.pdf
const RESUME_URL = "/resume.png";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 md:px-8">
        <Link
          href="/"
          className="font-mono text-sm tracking-tight text-foreground"
        >
          santiago<span className="text-muted">.dev</span>
        </Link>

        <div className="flex items-center gap-5 text-sm md:gap-6">
          {/* Section links — shown on large screens */}
          <div className="hidden items-center gap-6 lg:flex">
            {SECTION_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* External links — shown from small screens up */}
          <div className="hidden items-center gap-5 sm:flex">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="text-muted transition-colors hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="text-muted transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
          </div>

          {/* Resume — primary CTA, always visible. `download` forces a save. */}
          <a
            href={RESUME_URL}
            download="Santiago-Murillo-Resume.png"
            className="inline-flex items-center gap-2 rounded-md bg-foreground px-3.5 py-2 text-[13px] font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:opacity-95"
          >
            Resume
            <span aria-hidden="true">{"\u2193"}</span>
          </a>
        </div>
      </div>
    </nav>
  );
}