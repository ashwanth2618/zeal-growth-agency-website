import { useEffect, useRef, useState } from "react";
import { cn } from "../utils/cn";
import { nav, site } from "../lib/site";
import { Logo } from "./Brand";
import { ArrowRight } from "./primitives";

export default function Nav({ route }: { route: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (item: (typeof nav)[number]) => item.route === route && !item.hash;

  return (
    <header
      className={cn(
        "on-dark fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-white/10 bg-ink-900/92 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <div className="shell flex h-[68px] items-center justify-between gap-6">
        <a
          href="#/"
          onClick={() => setOpen(false)}
          className="rounded-sm"
          aria-label="ZEAL — home"
        >
          <Logo tone="dark" />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <a
              key={item.label}
              href={`#${item.route}${item.hash ?? ""}`}
              className={cn(
                "label-mono px-3 py-2 transition-colors",
                isActive(item) ? "text-white" : "text-white/55 hover:text-white",
              )}
              aria-current={isActive(item) ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={site.phoneHref}
            className="label-mono text-white/55 transition-colors hover:text-white"
          >
            {site.phoneDisplay}
          </a>
          <a href="#/contact" className="btn btn-primary px-4 py-2.5 text-[0.78rem]">
            <span className="relative z-10">Book a Strategy Call</span>
          </a>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="flex h-10 w-10 items-center justify-center border border-white/15 text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-4" aria-hidden="true">
            <span
              className={cn(
                "absolute left-0 block h-px w-4 bg-current transition-all duration-300",
                open ? "top-1.5 rotate-45" : "top-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-1.5 block h-px w-4 bg-current transition-opacity duration-200",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 block h-px w-4 bg-current transition-all duration-300",
                open ? "top-1.5 -rotate-45" : "top-3",
              )}
            />
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        ref={panelRef}
        hidden={!open}
        className="on-dark border-t border-white/10 bg-ink-900 lg:hidden"
      >
        <div className="shell grid gap-1 py-6">
          {nav.map((item, i) => (
            <a
              key={item.label}
              href={`#${item.route}${item.hash ?? ""}`}
              onClick={() => setOpen(false)}
              className="flex items-baseline justify-between border-b border-white/8 py-3.5 text-white"
            >
              <span className="font-display text-[1.35rem] tracking-[-0.02em]">{item.label}</span>
              <span className="label-mono text-white/35">{String(i + 1).padStart(2, "0")}</span>
            </a>
          ))}
          <a
            href="#/contact"
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-5 w-full"
          >
            <span className="relative z-10 inline-flex items-center gap-2">
              Book a Strategy Call <ArrowRight />
            </span>
          </a>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <a href={site.phoneHref} className="btn btn-ghost text-white/80">
              <span className="relative z-10">Call</span>
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost text-white/80"
            >
              <span className="relative z-10">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
