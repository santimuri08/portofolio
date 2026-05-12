"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
        <Link
          href="/"
          className="font-mono text-sm tracking-tight text-foreground"
        >
          santiago<span className="text-muted">.dev</span>
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <a
            href="#about"
            className="text-muted transition-colors hover:text-foreground"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-muted transition-colors hover:text-foreground"
          >
            Work
          </a>
          <a
            href="#skills&tools"
            className="text-muted transition-colors hover:text-foreground"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="text-muted transition-colors hover:text-foreground"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}