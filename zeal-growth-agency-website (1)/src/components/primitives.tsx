import {
  createElement,
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";
import { cn } from "../utils/cn";

/* ────────────────────────────────────────────────────────────
   Reveal — IntersectionObserver based entrance.
   Honours prefers-reduced-motion via CSS (no JS motion).
   ──────────────────────────────────────────────────────────── */
export function Reveal({
  children,
  as = "div",
  delay = 0,
  className,
  id,
}: {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
  id?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setSeen(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return createElement(
    as,
    {
      ref,
      id,
      className: cn("reveal", seen && "is-in", className),
      style: delay ? { transitionDelay: `${delay}ms` } : undefined,
    },
    children,
  );
}

/* ────────────────────────────────────────────────────────────
   Buttons
   ──────────────────────────────────────────────────────────── */
type BtnProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "streak" | "ghost";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  ariaLabel?: string;
  external?: boolean;
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  type = "button",
  disabled,
  ariaLabel,
  external,
}: BtnProps) {
  const base = cn(
    "btn",
    variant === "primary" && "btn-primary",
    variant === "streak" && "btn-streak",
    variant === "ghost" && "btn-ghost",
    className,
  );

  if (href) {
    return (
      <a
        href={href}
        className={base}
        aria-label={ariaLabel}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={base} aria-label={ariaLabel} disabled={disabled}>
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </button>
  );
}

export function ArrowRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className={cn("h-3.5 w-3.5", className)} fill="none">
      <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
    </svg>
  );
}

/* ────────────────────────────────────────────────────────────
   Section furniture
   ──────────────────────────────────────────────────────────── */
export function Eyebrow({
  children,
  index,
  tone = "light",
  className,
}: {
  children: ReactNode;
  index?: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 label-mono",
        tone === "dark" ? "text-white/45" : "text-ink-400",
        className,
      )}
    >
      {index && (
        <span className={tone === "dark" ? "text-streak-400" : "text-streak-500"}>{index}</span>
      )}
      <span
        aria-hidden="true"
        className={cn("h-px w-8", tone === "dark" ? "bg-white/25" : "bg-ink-300/60")}
      />
      <span>{children}</span>
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  index,
  title,
  lead,
  tone = "light",
  align = "left",
  className,
  level = 2,
}: {
  eyebrow: string;
  index?: string;
  title: ReactNode;
  lead?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "split";
  className?: string;
  level?: 1 | 2 | 3;
}) {
  const H = `h${level}` as ElementType;
  return (
    <div
      className={cn(
        align === "split"
          ? "grid gap-6 md:grid-cols-12 md:gap-10 md:items-end"
          : "flex flex-col gap-5 max-w-3xl",
        className,
      )}
    >
      <div className={align === "split" ? "md:col-span-8" : undefined}>
        <Eyebrow index={index} tone={tone}>
          {eyebrow}
        </Eyebrow>
        <H
          className={cn(
            "mt-5 text-[clamp(1.9rem,4.4vw,3.35rem)] leading-[1.02] tracking-[-0.03em]",
            tone === "dark" ? "text-white" : "text-ink-900",
          )}
        >
          {title}
        </H>
      </div>
      {lead && (
        <p
          className={cn(
            "text-[0.975rem] leading-relaxed md:text-[1.02rem]",
            tone === "dark" ? "text-white/60" : "text-ink-400",
            align === "split" ? "md:col-span-4 md:pb-2" : "max-w-2xl",
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}

/* Mono data tag used across the system */
export function Tag({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode;
  tone?: "light" | "dark" | "volt" | "streak";
  className?: string;
}) {
  const tones = {
    light: "border-mist-300 text-ink-400",
    dark: "border-white/15 text-white/50",
    volt: "border-volt-500/35 text-volt-600",
    streak: "border-streak-500/40 text-streak-600",
  } as const;
  return (
    <span className={cn("label-mono inline-block border px-2 py-1", tones[tone], className)}>
      {children}
    </span>
  );
}

/* ────────────────────────────────────────────────────────────
   Momentum streak components
   ──────────────────────────────────────────────────────────── */
export function StreakDivider({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <div
      aria-hidden="true"
      className={cn("relative h-px w-full overflow-hidden", tone === "dark" ? "bg-white/10" : "bg-mist-200")}
    >
      <span
        className="absolute inset-y-0 left-0 block bg-streak-500"
        style={{ width: "22%", transform: "skewX(-19deg)", marginLeft: "8%" }}
      />
    </div>
  );
}

/** The signature diagonal. Used sparingly: hero, CTAs, dividers. */
export function MomentumStreak({
  className,
  width = "38%",
  angle = 19,
  opacity = 1,
}: {
  className?: string;
  width?: string;
  angle?: number;
  opacity?: number;
}) {
  return (
    <span aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <span
        className="absolute -top-[30%] -bottom-[30%] block"
        style={{
          width,
          left: "-10%",
          transform: `rotate(${angle}deg)`,
          opacity,
          background:
            "linear-gradient(to bottom, rgba(255,90,31,0) 4%, rgba(255,90,31,.42) 26%, #FF5A1F 48%, rgba(255,124,77,.5) 72%, rgba(255,90,31,0) 96%)",
        }}
      />
    </span>
  );
}

/* ────────────────────────────────────────────────────────────
   Utilities
   ──────────────────────────────────────────────────────────── */
const KNOWN_ROUTES = [
  "/",
  "/about",
  "/capabilities",
  "/privacy",
  "/terms",
  "/cookies",
  "/disclaimer",
];

type Location = { route: string; section: string };

function readLocation(): Location {
  const raw = window.location.hash.replace(/^#/, "");
  if (!raw) return { route: "/", section: "" };
  if (!raw.startsWith("/")) return { route: "/", section: raw };
  const [path, sub] = raw.split("#");
  const p = path || "/";
  if (KNOWN_ROUTES.includes(p)) return { route: p, section: sub || "" };
  // "#/contact", "#/services" … → home page + section anchor
  return { route: "/", section: p.slice(1) };
}

function applyScroll(loc: Location) {
  if (loc.section) {
    requestAnimationFrame(() => {
      const el = document.getElementById(loc.section);
      if (el) el.scrollIntoView({ behavior: "auto", block: "start" });
    });
  } else {
    window.scrollTo({ top: 0, behavior: "auto" });
  }
}

export function useHashRoute(): Location {
  const [state, setState] = useState<Location>(readLocation);

  useEffect(() => {
    const onChange = () => {
      const next = readLocation();
      setState(next);
      applyScroll(next);
    };
    window.addEventListener("hashchange", onChange);
    applyScroll(readLocation());
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return state;
}

export function go(section?: string) {
  const target = section ? `#${section}` : "#/";
  if (window.location.hash === target) {
    applyScroll(readLocation());
    return;
  }
  window.location.hash = target;
}
