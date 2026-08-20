import { GrowthSystemVisual } from "../components/GrowthSystem";
import { ArrowRight, Button, MomentumStreak, Reveal } from "../components/primitives";
import { disciplines, site } from "../lib/site";

export function Hero() {
  return (
    <section
      id="hero"
      className="on-dark relative isolate overflow-hidden bg-ink-900 pt-[68px] text-white"
      aria-labelledby="hero-heading"
    >
      {/* background system */}
      <div aria-hidden="true" className="rule-grid-dark absolute inset-0 opacity-70" />
      <div
        aria-hidden="true"
        className="absolute -top-40 right-[-10%] h-[34rem] w-[34rem] opacity-[0.22] blur-[120px]"
        style={{ background: "radial-gradient(circle, #2A5BFF 0%, transparent 68%)" }}
      />
      <MomentumStreak width="30%" angle={19} opacity={0.5} className="hidden md:block" />
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-streak-500 via-volt-500/60 to-transparent opacity-70"
      />

      <div className="shell relative grid gap-12 py-16 md:py-24 lg:grid-cols-12 lg:gap-10 lg:py-28">
        <div className="flex flex-col justify-center lg:col-span-6">
          <Reveal>
            <div className="label-mono flex items-center gap-3 text-white/45">
              <span className="h-px w-8 bg-streak-500" aria-hidden="true" />
              Digital Growth Agency
            </div>
          </Reveal>

          <Reveal delay={60}>
            <h1
              id="hero-heading"
              className="mt-7 text-[clamp(2.6rem,7.2vw,4.9rem)] leading-[0.94] font-bold tracking-[-0.045em]"
            >
              Turn Attention
              <br />
              Into{" "}
              <span className="relative inline-block">
                <span
                  aria-hidden="true"
                  className="absolute -left-[0.42em] top-[0.12em] h-[0.72em] w-[0.14em] origin-top-left -rotate-[24deg] bg-streak-500"
                />
                <span className="relative">Momentum</span>
                <span
                  aria-hidden="true"
                  className="absolute -bottom-[0.08em] left-0 h-[3px] w-full bg-gradient-to-r from-streak-500 to-transparent"
                />
              </span>
              .
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-8 max-w-xl text-[1rem] leading-relaxed text-white/60 md:text-[1.08rem]">
              ZEAL helps ambitious businesses build, launch and optimize digital growth systems that
              turn attention into measurable business outcomes.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#/contact" className="sm:px-6 sm:py-4">
                Book a Free Strategy Call <ArrowRight />
              </Button>
              <Button href="#/capabilities" variant="ghost" className="text-white/80 sm:px-6 sm:py-4">
                Explore Our Capabilities
              </Button>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <dl className="mt-12 grid grid-cols-2 gap-px border-t border-white/10 pt-6 sm:grid-cols-4">
              {[
                { k: "STRATEGY", v: "Direction first" },
                { k: "EXECUTION", v: "Built in-house" },
                { k: "MEASUREMENT", v: "One source of truth" },
                { k: "MOMENTUM", v: "Compounding loops" },
              ].map((item) => (
                <div key={item.k} className="pr-4">
                  <dt className="label-mono text-white/70">{item.k}</dt>
                  <dd className="mt-2 text-[0.8rem] leading-snug text-white/40">{item.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:pl-4">
          <Reveal delay={100}>
            <GrowthSystemVisual className="shadow-[0_40px_120px_-40px_rgba(4,6,10,0.9)]" />
          </Reveal>
          <Reveal delay={200}>
            <p className="label-mono mt-4 text-white/30">
              ZEAL growth framework — strategy, channels, creative and measurement as one system.
            </p>
          </Reveal>
        </div>
      </div>

      {/* contact quick strip */}
      <div className="relative border-t border-white/10 bg-ink-950/60">
        <div className="shell flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="label-mono text-white/40">Talk to the growth team</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href={site.phoneHref} className="label-mono text-white/75 transition-colors hover:text-white">
              ↳ {site.phoneDisplay}
            </a>
            <a href={site.emailHref} className="label-mono text-white/75 transition-colors hover:text-white">
              ↳ {site.email}
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="label-mono text-streak-400 transition-colors hover:text-streak-500"
            >
              ↳ WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PositioningStrip() {
  return (
    <section aria-label="What ZEAL does" className="relative border-b border-mist-200 bg-white">
      <div className="shell grid gap-8 py-14 md:grid-cols-12 md:py-20">
        <div className="md:col-span-4">
          <p className="label-mono text-ink-400">ZEAL / OPERATING DISCIPLINES</p>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-700">
            Five disciplines, operated as a single system — so strategy, creative, performance,
            automation and analytics stop working in separate rooms.
          </p>
        </div>
        <ul className="md:col-span-8 md:border-l md:border-mist-200 md:pl-10">
          {disciplines.map((d, i) => (
            <li key={d} className="border-b border-mist-200 last:border-b-0">
              <div className="group flex items-center gap-4 py-4 md:gap-8">
                <span className="font-mono text-[0.7rem] text-ink-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-[clamp(1.5rem,3.4vw,2.4rem)] leading-none tracking-[-0.03em] text-ink-900">
                  {d}
                </h3>
                <span
                  aria-hidden="true"
                  className="ml-auto hidden h-px flex-1 bg-mist-200 transition-colors duration-300 group-hover:bg-streak-500 sm:block"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
