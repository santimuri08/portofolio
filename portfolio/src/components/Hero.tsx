"use client";

import { useEffect, useState } from "react";

const STATIC_HEADLINE = "Full-stack developer building ";
const TYPED_FRAGMENT = "real-world applications with AI.";
const TYPING_SPEED_MS = 55;
const TYPING_START_DELAY_MS = 700;

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

// All icons placed outside the text column.
// The text column on desktop sits roughly between left: 6% and left: 62% (max-w-4xl).
// So: left-side icons stay at left: 2-5%, right-side icons stay at right: 4-12%.
// Top-only icons can cross the column if they're above the text starts (top < 18%).
// Bottom-only icons can cross the column if they're below the text ends (top > 88%).
const FLOATING_ITEMS: FloatingItem[] = [
  // Left margin (before text block)
  { kind: "cube", top: "14%", left: "3%", size: 68, duration: 14, delay: 0, baseOpacity: 0.55 },
  { kind: "braces", top: "48%", left: "2%", size: 34, duration: 12, delay: 2, baseOpacity: 0.32 },
  { kind: "globe", top: "82%", left: "4%", size: 52, duration: 16, delay: 1, baseOpacity: 0.45 },

  // Right margin (beyond text block)
  { kind: "branch", top: "20%", right: "5%", size: 56, duration: 15, delay: 1.4, baseOpacity: 0.5 },
  { kind: "angle", top: "52%", right: "6%", size: 64, duration: 13, delay: 0.8, baseOpacity: 0.55 },
  { kind: "terminal", top: "78%", right: "8%", size: 44, duration: 13, delay: 1.8, baseOpacity: 0.4 },
  { kind: "fn", top: "36%", right: "10%", size: 26, duration: 14, delay: 1.2, baseOpacity: 0.3 },

  // Top band (above text, safe to cross horizontally)
  { kind: "braces", top: "6%", right: "32%", size: 30, duration: 15, delay: 0.3, baseOpacity: 0.28 },
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
          <svg width={item.size} height={item.size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
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
          <svg width={item.size} height={item.size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round">
            <circle cx="24" cy="24" r="18" />
            <ellipse cx="24" cy="24" rx="8" ry="18" />
            <path d="M6 24 L42 24" />
          </svg>
        </div>
      );
    case "angle":
      return (
        <div className="absolute" style={style}>
          <svg width={item.size} height={item.size} viewBox="0 0 64 48" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 10 L6 24 L18 38" />
            <path d="M46 10 L58 24 L46 38" />
            <path d="M36 8 L28 40" />
          </svg>
        </div>
      );
    case "branch":
      return (
        <div className="absolute" style={style}>
          <svg width={item.size} height={item.size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round">
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
        <span className="absolute font-mono font-light" style={{ ...style, fontSize: `${item.size}px`, lineHeight: 1 }}>
          {"{ }"}
        </span>
      );
    case "fn":
      return (
        <span className="absolute font-mono font-light" style={{ ...style, fontSize: `${item.size}px`, lineHeight: 1 }}>
          {"() =>"}
        </span>
      );
    case "terminal":
      return (
        <div className="absolute" style={style}>
          <svg width={item.size} height={item.size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <rect x="6" y="10" width="36" height="28" rx="2" />
            <path d="M14 22 L20 27 L14 32" />
            <path d="M24 32 L32 32" />
          </svg>
        </div>
      );
  }
}

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [mounted, setMounted] = useState(false);
  const [colorShift, setColorShift] = useState(0);

  useEffect(() => {
    setMounted(true);
    let index = 0;
    const startTimer = setTimeout(() => {
      const interval = setInterval(() => {
        index += 1;
        setTyped(TYPED_FRAGMENT.slice(0, index));
        if (index >= TYPED_FRAGMENT.length) {
          clearInterval(interval);
        }
      }, TYPING_SPEED_MS);
      return () => clearInterval(interval);
    }, TYPING_START_DELAY_MS);

    return () => clearTimeout(startTimer);
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

  const isTypingDone = typed.length === TYPED_FRAGMENT.length;

  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* Subtle grid background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Floating icons layer - behind text but always in margins */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {FLOATING_ITEMS.map((item, i) => (
          <FloatingIcon key={i} item={item} colorShift={colorShift} />
        ))}
      </div>

      {/* Content - z-10 to sit above icons at all times */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-32 pt-16 md:px-8 md:pb-48 md:pt-20">
        <div className="max-w-4xl">
          {/* Name */}
          <div
            className={`mb-6 font-mono text-lg uppercase tracking-[0.2em] text-muted transition-all duration-700 ease-out ${
              mounted ? "translate-y-0 opacity-80" : "translate-y-3 opacity-0"
            }`}
          >
            Santiago Murillo Londono
          </div>

          {/* Availability tag */}
          <div
            className={`mb-12 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 font-mono text-xs text-muted backdrop-blur-sm transition-all duration-700 ease-out ${
              mounted ? "translate-y-0 opacity-100 delay-100" : "translate-y-3 opacity-0"
            }`}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60" style={{ backgroundColor: ACCENT }} />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
            </span>
            Available for new roles
          </div>

          {/* Headline */}
          <h1
            className={`mb-12 text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl lg:text-[5.5rem] transition-all duration-700 ease-out ${
              mounted ? "translate-y-0 opacity-100 delay-200" : "translate-y-4 opacity-0"
            }`}
          >
            {STATIC_HEADLINE}
            <span className="text-muted">
              {typed}
              <span
                className={`inline-block w-[0.08em] bg-foreground align-middle ${isTypingDone ? "animate-pulse" : ""}`}
                style={{
                  height: "0.9em",
                  marginLeft: "0.05em",
                  transform: "translateY(-0.05em)",
                }}
              />
            </span>
          </h1>

          {/* Supporting line */}
          <p
            className={`mb-14 max-w-2xl text-base leading-relaxed text-muted md:text-lg transition-all duration-700 ease-out ${
              mounted ? "translate-y-0 opacity-100 delay-300" : "translate-y-4 opacity-0"
            }`}
          >
            Focused on building and shipping production-ready systems at the intersection of full-stack engineering and AI.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-wrap gap-3 transition-all duration-700 ease-out ${
              mounted ? "translate-y-0 opacity-100 delay-500" : "translate-y-4 opacity-0"
            }`}
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all hover:opacity-90 hover:translate-x-0.5"
            >
              View work
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                {"->"}
              </span>
            </a>
            <a
              href="https://github.com/yourhandle"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-foreground hover:bg-card"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourhandle"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-foreground hover:bg-card"
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