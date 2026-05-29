"use client";

import { useEffect, useState } from "react";

const ACCENT = "#22C55E";

type FloatingItem = {
  kind: "cube" | "globe" | "angle" | "branch" | "braces" | "terminal" | "fn";
  top: string;
  left?: string;
  right?: string;
  size: number;
  duration: number;
  delay: number;
  baseOpacity: number;
};

const FLOATING_ITEMS: FloatingItem[] = [
  { kind: "cube", top: "18%", left: "4%", size: 64, duration: 14, delay: 0, baseOpacity: 0.5 },
  { kind: "braces", top: "52%", left: "3%", size: 32, duration: 12, delay: 2, baseOpacity: 0.3 },
  { kind: "globe", top: "80%", left: "5%", size: 48, duration: 16, delay: 1, baseOpacity: 0.42 },
  { kind: "branch", top: "22%", right: "5%", size: 52, duration: 15, delay: 1.4, baseOpacity: 0.48 },
  { kind: "angle", top: "55%", right: "6%", size: 60, duration: 13, delay: 0.8, baseOpacity: 0.52 },
  { kind: "terminal", top: "82%", right: "8%", size: 42, duration: 13, delay: 1.8, baseOpacity: 0.38 },
  { kind: "fn", top: "38%", right: "10%", size: 24, duration: 14, delay: 1.2, baseOpacity: 0.28 },
  { kind: "braces", top: "8%", right: "32%", size: 28, duration: 15, delay: 0.3, baseOpacity: 0.26 },
];

function FloatingIcon({ item, colorShift }: { item: FloatingItem; colorShift: number }) {
  const opacity = item.baseOpacity + colorShift * 0.35;

  const style: React.CSSProperties = {
    top: item.top,
    left: item.left,
    right: item.right,
    opacity,
    color: ACCENT,
    animation: `float ${item.duration}s ease-in-out infinite ${item.delay}s`,
    transition: "opacity 0.3s ease-out",
  };

  const strokeWidth = "1.8";

  switch (item.kind) {
    case "cube":
      return (
        <div className="absolute" style={style}>
          <svg
            width={item.size}
            height={item.size}
            viewBox="0 0 48 48"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M24 6 L42 15 L42 33 L24 42 L6 33 L6 15 Z" />
            <path d="M24 6 L24 24 L6 15" />
            <path d="M24 24 L42 15" />
            <path d="M24 24 L24 42" />
          </svg>
        </div>
      );
    case "globe":
      return (
        <div className="absolute" style={style}>
          <svg
            width={item.size}
            height={item.size}
            viewBox="0 0 48 48"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          >
            <circle cx="24" cy="24" r="18" />
            <ellipse cx="24" cy="24" rx="8" ry="18" />
            <path d="M6 24 L42 24" />
          </svg>
        </div>
      );
    case "angle":
      return (
        <div className="absolute" style={style}>
          <svg
            width={item.size}
            height={item.size}
            viewBox="0 0 64 48"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 10 L6 24 L18 38" />
            <path d="M46 10 L58 24 L46 38" />
            <path d="M36 8 L28 40" />
          </svg>
        </div>
      );
    case "branch":
      return (
        <div className="absolute" style={style}>
          <svg
            width={item.size}
            height={item.size}
            viewBox="0 0 48 48"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          >
            <circle cx="12" cy="10" r="4" />
            <circle cx="12" cy="38" r="4" />
            <circle cx="36" cy="18" r="4" />
            <path d="M12 14 L12 34" />
            <path d="M12 24 C 12 22, 20 22, 26 22 C 32 22, 32 20, 32 18" />
          </svg>
        </div>
      );
    case "braces":
      return (
        <span
          className="absolute font-mono font-light"
          style={{ ...style, fontSize: `${item.size}px`, lineHeight: 1 }}
        >
          {"{ }"}
        </span>
      );
    case "fn":
      return (
        <span
          className="absolute font-mono font-light"
          style={{ ...style, fontSize: `${item.size}px`, lineHeight: 1 }}
        >
          {"() =>"}
        </span>
      );
    case "terminal":
      return (
        <div className="absolute" style={style}>
          <svg
            width={item.size}
            height={item.size}
            viewBox="0 0 48 48"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="6" y="10" width="36" height="28" rx="2" />
            <path d="M14 22 L20 27 L14 32" />
            <path d="M24 32 L32 32" />
          </svg>
        </div>
      );
  }
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [colorShift, setColorShift] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const progress = Math.min(Math.max(y / 600, 0), 1);
      setColorShift(progress);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden border-b border-border">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(0,0,0,0.5) 100%)",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[40vh] w-[60vw] -translate-x-1/2 -translate-y-1/2 opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(34,197,94,0.08), transparent 60%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {FLOATING_ITEMS.map((item, i) => (
          <FloatingIcon key={i} item={item} colorShift={colorShift} />
        ))}
      </div>

      <div className="relative z-10 flex h-full w-full items-center justify-center px-6 md:px-8">
        <div className="flex w-full max-w-5xl flex-col items-center text-center">
          {/* Role pill */}
          <div
            className={`mb-7 inline-flex items-center gap-2.5 rounded-full border border-border bg-card/50 px-3.5 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.22em] text-muted backdrop-blur-md transition-all duration-700 ease-out md:mb-8 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
                style={{ backgroundColor: ACCENT }}
              />
              <span
                className="relative inline-flex h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: ACCENT }}
              />
            </span>
            Full Stack & AI Automation Developer
          </div>

          {/* Name */}
          <div
            className={`mb-8 font-mono text-sm uppercase tracking-[0.3em] text-muted md:mb-10 transition-all duration-700 ease-out ${
              mounted
                ? "translate-y-0 opacity-90 delay-75"
                : "translate-y-3 opacity-0"
            }`}
          >
            Santiago Murillo
          </div>

          {/* Headline */}
          <h1
            className={`mb-10 text-balance text-[2.75rem] font-semibold leading-[1.05] tracking-[-0.02em] md:mb-12 md:text-6xl lg:text-[4.75rem] transition-all duration-700 ease-out ${
              mounted
                ? "translate-y-0 opacity-100 delay-150"
                : "translate-y-4 opacity-0"
            }`}
          >
            I build software that solves{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(120deg, #ffffff 0%, #d4f7dd 45%, #22C55E 100%)",
              }}
            >
              real problems.
            </span>
          </h1>

          {/* Description */}
          <p
            className={`mb-12 max-w-2xl text-balance text-[15px] leading-relaxed text-muted md:mb-14 md:text-lg transition-all duration-700 ease-out ${
              mounted
                ? "translate-y-0 opacity-100 delay-250"
                : "translate-y-4 opacity-0"
            }`}
          >
            Building modern web applications, AI-powered products, and workflow
            systems using React, Next.js, TypeScript, PostgreSQL, and modern
            cloud technologies.
          </p>

          {/* CTAs */}
          <div
            className={`flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-3.5 transition-all duration-700 ease-out ${
              mounted
                ? "translate-y-0 opacity-100 delay-300"
                : "translate-y-4 opacity-0"
            }`}
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:opacity-95 hover:shadow-[0_0_30px_-8px_rgba(34,197,94,0.4)]"
            >
              View projects
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
                {"\u2192"}
              </span>
            </a>
            <a
              href="https://github.com/santimuri08"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card/30 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/40 hover:bg-card"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/santiago-murillo-londono-65b947293/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card/30 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/40 hover:bg-card"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
}