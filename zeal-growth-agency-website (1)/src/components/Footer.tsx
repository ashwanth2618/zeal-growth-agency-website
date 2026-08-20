import { nav, site } from "../lib/site";
import { Logo, LinkedInButton } from "./Brand";
import { StreakDivider } from "./primitives";

const legal = [
  { label: "Privacy Policy", route: "/privacy" },
  { label: "Terms & Conditions", route: "/terms" },
  { label: "Cookie Policy", route: "/cookies" },
  { label: "Disclaimer", route: "/disclaimer" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="on-dark relative overflow-hidden bg-ink-950 text-white">
      <div aria-hidden="true" className="rule-grid-dark absolute inset-0 opacity-40" />
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 h-72 w-72 rounded-full opacity-[0.16] blur-3xl"
        style={{ background: "radial-gradient(circle, #2A5BFF 0%, transparent 70%)" }}
      />

      <div className="shell relative pt-16 pb-10 md:pt-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo tone="dark" />
            <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-white/55">
              {site.description}
            </p>
            <p className="label-mono mt-6 text-white/35">
              Strategy · Creative · Performance · Technology
            </p>
            <div className="mt-8">
              <LinkedInButton tone="dark" />
            </div>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <h2 className="label-mono text-white/35">Navigate</h2>
              <ul className="mt-4 space-y-2.5">
                {nav.map((item) => (
                  <li key={item.label}>
                    <a
                      href={`#${item.route}${item.hash ?? ""}`}
                      className="text-[0.92rem] text-white/70 transition-colors hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#/about" className="text-[0.92rem] text-white/70 transition-colors hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#/contact" className="text-[0.92rem] text-white/70 transition-colors hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="label-mono text-white/35">Contact</h2>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a
                    href={site.phoneHref}
                    className="font-mono text-[0.9rem] text-white/70 transition-colors hover:text-white"
                    aria-label={`Call ZEAL on ${site.phoneDisplay}`}
                  >
                    {site.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={site.emailHref}
                    className="font-mono text-[0.9rem] break-all text-white/70 transition-colors hover:text-white"
                  >
                    {site.email}
                  </a>
                </li>
                <li>
                  <a
                    href={site.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.92rem] text-white/70 transition-colors hover:text-white"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href="#/contact" className="text-[0.92rem] text-streak-400 transition-colors hover:text-streak-500">
                    Book a Strategy Call
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h2 className="label-mono text-white/35">Legal</h2>
              <ul className="mt-4 space-y-2.5">
                {legal.map((l) => (
                  <li key={l.route}>
                    <a
                      href={`#${l.route}`}
                      className="text-[0.92rem] text-white/70 transition-colors hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-16">
          <StreakDivider tone="dark" />
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="label-mono text-white/30">© {year} ZEAL. All rights reserved.</p>
          <p className="label-mono text-white/30">
            Marketing outcomes depend on multiple factors — see our{" "}
            <a href="#/disclaimer" className="underline decoration-white/30 underline-offset-4 hover:text-white/60">
              disclaimer
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
