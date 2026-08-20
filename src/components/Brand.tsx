import { useState } from "react";
import { cn } from "../utils/cn";
import { site } from "../lib/site";

/**
 * ZEAL wordmark. The Z carries a sliced counter-form so the diagonal
 * momentum streak language begins in the logo itself.
 */
export function Logo({
  tone = "dark",
  className,
  withMark = true,
}: {
  tone?: "dark" | "light";
  className?: string;
  withMark?: boolean;
}) {
  const ink = tone === "dark" ? "#FFFFFF" : "#080B10";
  return (
    <span className={cn("inline-flex items-center gap-2.5 select-none", className)}>
      {withMark && (
        <svg
          viewBox="0 0 28 28"
          aria-hidden="true"
          className="h-[26px] w-[26px] shrink-0"
          role="presentation"
        >
          <rect x="0.5" y="0.5" width="27" height="27" fill="none" stroke={ink} strokeOpacity="0.28" />
          <path d="M6 7h16L6 21h16" fill="none" stroke={ink} strokeWidth="2.2" />
          <path d="M22.6 5.4 5.4 22.6" stroke="#FF5A1F" strokeWidth="2.6" />
        </svg>
      )}
      <span
        className="font-display text-[1.32rem] leading-none font-bold tracking-[0.16em]"
        style={{ color: ink }}
      >
        ZEAL
      </span>
    </span>
  );
}

/** LinkedIn — company URL not yet supplied. Honest inline state, no dead link. */
export function LinkedInButton({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className={className}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="zeal-linkedin-note"
        className={cn(
          "label-mono inline-flex items-center gap-2 border px-3 py-2 transition-colors",
          tone === "dark"
            ? "border-white/15 text-white/70 hover:border-white/40 hover:text-white"
            : "border-mist-300 text-ink-500 hover:border-ink-900 hover:text-ink-900",
        )}
      >
        <svg viewBox="0 0 16 16" aria-hidden="true" className="h-3.5 w-3.5" fill="currentColor">
          <path d="M3.2 5.6H1.1V15h2.1V5.6ZM2.15 1a1.23 1.23 0 1 0 0 2.46 1.23 1.23 0 0 0 0-2.46ZM14.9 9.6c0-2.5-1.34-3.66-3.12-3.66-1.44 0-2.08.79-2.44 1.35V5.6H7.25V15h2.1v-5.1c0-1.09.2-2.14 1.55-2.14 1.33 0 1.35 1.24 1.35 2.21V15h2.1l.55-5.4Z" />
        </svg>
        LinkedIn
        <span aria-hidden="true" className="text-streak-400">
          {open ? "−" : "+"}
        </span>
      </button>
      <div
        id="zeal-linkedin-note"
        hidden={!open}
        className={cn(
          "mt-2 max-w-xs border-l-2 border-streak-500 pl-3 text-xs leading-relaxed",
          tone === "dark" ? "text-white/55" : "text-ink-400",
        )}
      >
        Our company page link is being finalised. Email{" "}
        <a className="underline decoration-dotted underline-offset-2" href={site.emailHref}>
          {site.email}
        </a>{" "}
        and we will connect on LinkedIn directly.
      </div>
    </div>
  );
}
