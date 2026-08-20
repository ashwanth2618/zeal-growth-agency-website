import { ArrowRight, Button, Eyebrow, Reveal, SectionHeader, StreakDivider, Tag } from "../components/primitives";
import { industries, layers, processSteps, services, whyZeal } from "../lib/site";
import { cn } from "../utils/cn";

/* ════════════════════════════════════════════════════════════
   SERVICES — What We Build
   ════════════════════════════════════════════════════════════ */
export function Services() {
  return (
    <section id="services" className="relative border-b border-mist-200 bg-mist-50 py-20 md:py-28">
      <div aria-hidden="true" className="rule-grid absolute inset-0 opacity-60" />
      <div className="shell relative">
        <Reveal>
          <SectionHeader
            index="01"
            eyebrow="Services"
            title={<>What We Build</>}
            lead="One growth system. Eight specialized capabilities."
            align="split"
          />
        </Reveal>

        <div className="mt-14 grid gap-px border border-mist-200 bg-mist-200 md:mt-16 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={(i % 2) * 70}>
              <article className="edge-card group h-full border-0 bg-white p-6 md:p-8">
                <div className="flex items-start justify-between gap-6">
                  <span className="font-mono text-[0.72rem] text-ink-300">{s.n}</span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      "h-2 w-2 rotate-45 transition-colors",
                      s.accent === "streak" ? "bg-streak-500" : "bg-volt-500/70",
                    )}
                  />
                </div>
                <h3 className="mt-6 font-display text-[1.35rem] leading-tight tracking-[-0.025em] text-ink-900 md:text-[1.45rem]">
                  {s.title}
                </h3>
                <p className="mt-3.5 text-[0.92rem] leading-relaxed text-ink-400">{s.blurb}</p>
                <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 border-t border-mist-200 pt-5">
                  {s.detail.map((d) => (
                    <li key={d} className="label-mono text-ink-300 transition-colors group-hover:text-ink-500">
                      {d}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-[0.92rem] leading-relaxed text-ink-400">
              Capabilities are rarely used alone. Most engagements combine three to five of these
              under one strategy and one measurement framework.
            </p>
            <Button href="#/contact" variant="ghost">
              Discuss scope <ArrowRight />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   INDUSTRIES
   ════════════════════════════════════════════════════════════ */
function IndustryGlyph({ index }: { index: number }) {
  const common = "stroke-white/35 group-hover:stroke-white/70 transition-colors";
  return (
    <svg viewBox="0 0 96 72" aria-hidden="true" className="h-[72px] w-[96px] shrink-0" fill="none">
      {index === 0 && (
        <>
          <path d="M6 62V26L48 8l42 18v36" className={common} strokeWidth="1.2" />
          <path d="M24 62V38h20v24M52 62V30h20v32" className={common} strokeWidth="1.2" />
          <path d="M14 30 82 12" stroke="#FF5A1F" strokeWidth="2" />
        </>
      )}
      {index === 1 && (
        <>
          <rect x="8" y="12" width="34" height="48" className={common} strokeWidth="1.2" />
          <rect x="54" y="12" width="34" height="48" className={common} strokeWidth="1.2" />
          <path d="M14 24h22M14 34h22M14 44h14" className={common} strokeWidth="1.2" />
          <path d="M62 24 84 12v24z" fill="#FF5A1F" fillOpacity="0.85" />
          <path d="M62 42h20" className={common} strokeWidth="1.2" />
        </>
      )}
      {index === 2 && (
        <>
          <path d="M48 8c8 10 22 12 22 28a22 22 0 1 1-44 0C26 20 40 18 48 8Z" className={common} strokeWidth="1.2" />
          <path d="M36 40h24M48 28v24" stroke="#2A5BFF" strokeWidth="1.6" />
          <path d="M18 62 78 18" stroke="#FF5A1F" strokeWidth="2" />
        </>
      )}
      {index === 3 && (
        <>
          <path d="M6 56h14V42H6zM30 56h14V26H30zM54 56h14V14H54z" className={common} strokeWidth="1.2" />
          <path d="M78 56h14V32H78z" fill="#FF5A1F" fillOpacity="0.85" />
          <path d="M6 64h86" className={common} strokeWidth="1.2" />
        </>
      )}
      {index === 4 && (
        <>
          <path d="M10 14h76v44H10z" className={common} strokeWidth="1.2" />
          <path d="M10 26h76" className={common} strokeWidth="1.2" />
          <circle cx="20" cy="20" r="2.4" fill="#2A5BFF" />
          <path d="M22 36h22M22 46h34" className={common} strokeWidth="1.2" />
          <path d="M58 34 84 54M84 34 58 54" stroke="#FF5A1F" strokeWidth="2" />
        </>
      )}
    </svg>
  );
}

export function Industries() {
  return (
    <section
      id="industries"
      className="on-dark relative isolate overflow-hidden border-b border-white/10 bg-ink-900 py-20 text-white md:py-28"
      aria-labelledby="industries-heading"
    >
      <div aria-hidden="true" className="rule-grid-dark absolute inset-0 opacity-60" />
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-[-15%] h-[26rem] w-[26rem] opacity-[0.14] blur-[130px]"
        style={{ background: "radial-gradient(circle, #2A5BFF 0%, transparent 70%)" }}
      />
      <span
        aria-hidden="true"
        className="absolute top-0 right-0 h-full w-[2px] bg-gradient-to-b from-transparent via-streak-500/70 to-transparent"
      />

      <div className="shell relative">
        <Reveal>
          <SectionHeader
            index="02"
            eyebrow="Industries"
            tone="dark"
            title={
              <span id="industries-heading">
                Built For Businesses
                <br />
                Where Growth Matters
              </span>
            }
            lead="We go deep in five categories. Depth is what makes strategy, creative and channel decisions fast and defensible."
            align="split"
          />
        </Reveal>

        <div className="mt-14 md:mt-16">
          {industries.map((ind, i) => (
            <Reveal key={ind.key} delay={i * 50}>
              <article className="group grid gap-6 border-t border-white/10 py-8 md:grid-cols-12 md:items-center md:gap-8 md:py-10">
                <div className="md:col-span-1">
                  <span className="font-mono text-[0.72rem] text-streak-400">{ind.n}</span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-display text-[1.4rem] leading-tight tracking-[-0.025em] text-white md:text-[1.6rem]">
                    {ind.title}
                  </h3>
                  <p className="label-mono mt-3 text-white/35">{ind.metric}</p>
                </div>
                <div className="md:col-span-4">
                  <p className="text-[0.94rem] leading-relaxed text-white/60">{ind.blurb}</p>
                  <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                    {ind.points.map((p) => (
                      <li key={p} className="label-mono text-white/40">
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-end justify-between gap-6 md:col-span-3 md:justify-end">
                  <IndustryGlyph index={i} />
                </div>
              </article>
            </Reveal>
          ))}
          <div className="border-t border-white/10" />
        </div>

        <Reveal>
          <div className="mt-12 flex flex-col items-start gap-5 border border-white/10 bg-white/[0.02] p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <p className="max-w-xl text-[0.95rem] leading-relaxed text-white/60">
              Operating outside these five categories? The system still applies — we will assess fit
              honestly before proposing anything.
            </p>
            <Button href="#/contact" variant="ghost" className="!text-white/80">
              Check category fit <ArrowRight />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   APPROACH — How Momentum Gets Built
   ════════════════════════════════════════════════════════════ */
export function Approach() {
  return (
    <section id="approach" className="relative border-b border-mist-200 bg-white py-20 md:py-28">
      <div className="shell">
        <Reveal>
          <SectionHeader
            index="03"
            eyebrow="Our Approach"
            title="How Momentum Gets Built"
            lead="A four-phase operating loop. Each phase has defined inputs, defined outputs and a decision gate before the next one starts."
            align="split"
          />
        </Reveal>

        {/* the momentum line connecting the four phases */}
        <div className="relative mt-14 md:mt-20">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-[34px] left-0 hidden h-[3px] w-full origin-left bg-gradient-to-r from-streak-500 via-streak-500/45 to-volt-500/25 md:block"
            style={{ transform: "rotate(-1.4deg)" }}
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-0 bottom-0 left-[19px] w-[2px] bg-gradient-to-b from-streak-500 via-streak-500/40 to-transparent md:hidden"
          />

          <ol className="relative grid gap-10 md:grid-cols-4 md:gap-8">
            {processSteps.map((s, i) => (
              <Reveal key={s.n} as="li" delay={i * 90}>
                <div className="pl-12 md:pl-0">
                  <div className="relative flex h-[68px] items-center md:h-auto md:block">
                    <span className="absolute -left-12 top-1 flex h-10 w-10 items-center justify-center border border-mist-300 bg-white font-mono text-[0.72rem] text-ink-900 md:relative md:-left-0 md:mb-7 md:h-12 md:w-12 md:text-[0.78rem]">
                      {s.n}
                    </span>
                    {i < processSteps.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="ml-auto hidden text-ink-300 md:absolute md:right-2 md:top-4 md:block"
                      >
                        →
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-[1.5rem] tracking-[-0.03em] text-ink-900">{s.title}</h3>
                  <p className="mt-3 text-[0.92rem] leading-relaxed text-ink-400">{s.body}</p>
                  <ul className="mt-5 border-t border-mist-200 pt-4">
                    {s.outputs.map((o) => (
                      <li key={o} className="label-mono py-1 text-ink-300">
                        ↳ {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal>
          <div className="mt-14 border border-mist-200 bg-mist-50 p-6 md:p-8">
            <Eyebrow index="LOOP">The loop does not stop</Eyebrow>
            <p className="mt-4 max-w-3xl text-[0.98rem] leading-relaxed text-ink-700">
              Measure feeds back into Discover. Every cycle sharpens the audience definition, the
              creative angles and the channel mix — which is how growth compounds instead of
              plateauing after a launch.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   WHY ZEAL — split layout
   ════════════════════════════════════════════════════════════ */
export function WhyZeal() {
  return (
    <section
      className="on-dark relative isolate overflow-hidden border-b border-white/10 bg-ink-950 text-white"
      aria-labelledby="why-heading"
    >
      <div className="grid lg:grid-cols-2">
        <div className="relative border-b border-white/10 px-5 py-16 md:px-10 md:py-24 lg:border-b-0 lg:border-r lg:px-14 lg:py-28">
          <div aria-hidden="true" className="rule-grid-dark absolute inset-0 opacity-50" />
          <div className="relative">
            <Reveal>
              <Eyebrow index="04" tone="dark">
                Why ZEAL
              </Eyebrow>
              <h2
                id="why-heading"
                className="mt-6 text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.02] font-bold tracking-[-0.04em]"
              >
                More Than Marketing.
                <br />
                A Growth System.
              </h2>
              <p className="mt-7 max-w-md text-[1rem] leading-relaxed text-white/55">
                Most businesses buy fragments — a media buyer here, a designer there, an SEO
                contractor somewhere else. Fragments produce activity. Systems produce momentum.
              </p>
              <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-white/40">
                ZEAL operates strategy, creative, performance and technology under one framework and
                one measurement layer, so every part of the work is accountable to the same outcome.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button href="#/contact">Book a Free Strategy Call</Button>
                <Button href="#/about" variant="ghost" className="text-white/80">
                  About the agency
                </Button>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="px-5 py-12 md:px-10 md:py-16 lg:px-14 lg:py-28">
          <ul className="grid gap-px bg-white/10 sm:grid-cols-2">
            {whyZeal.map((w, i) => (
              <Reveal key={w.title} as="li" delay={(i % 2) * 60}>
                <div className="edge-card-dark h-full bg-ink-950 p-6 md:p-7">
                  <span className="font-mono text-[0.68rem] text-streak-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-[1.08rem] leading-snug tracking-[-0.02em] text-white">
                    {w.title}
                  </h3>
                  <p className="mt-3 text-[0.87rem] leading-relaxed text-white/50">{w.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   CAPABILITY LAYERS — architecture
   ════════════════════════════════════════════════════════════ */
export function LayerStack({ compact = false }: { compact?: boolean }) {
  return (
    <section
      id="layers"
      className={cn(
        "relative border-b border-mist-200 bg-mist-50",
        compact ? "py-16 md:py-20" : "py-20 md:py-28",
      )}
      aria-labelledby="layers-heading"
    >
      <div aria-hidden="true" className="rule-grid absolute inset-0 opacity-60" />
      <div className="shell relative">
        <Reveal>
          <SectionHeader
            index="05"
            eyebrow="Capabilities"
            title={<span id="layers-heading">Built Across Four Layers</span>}
            lead="Each layer feeds the next. Remove one and the system leaks value somewhere downstream."
            align="split"
          />
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          {/* architecture diagram */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative border border-mist-200 bg-white p-6 md:p-8">
                <p className="label-mono text-ink-400">SYSTEM ARCHITECTURE</p>
                <ul className="mt-6 space-y-2">
                  {[layers[0], layers[1], layers[2], layers[3]].map((l, i) => (
                    <li key={l.n} className="relative">
                      <div
                        className={cn(
                          "flex items-center justify-between border px-4 py-4",
                          i === 3 ? "border-volt-500 bg-volt-500/[0.06]" : "border-mist-300 bg-mist-50",
                        )}
                      >
                        <span className="label-mono text-ink-700">{l.name}</span>
                        <span className="font-mono text-[0.65rem] text-ink-300">{l.n}</span>
                      </div>
                      {i < 3 && (
                        <span
                          aria-hidden="true"
                          className="absolute -bottom-2 left-1/2 h-2 w-px -translate-x-1/2 bg-ink-300"
                        />
                      )}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center gap-3">
                  <span aria-hidden="true" className="h-px w-10 bg-streak-500" />
                  <p className="label-mono text-ink-400">DATA RETURNS UPWARD</p>
                </div>
                <p className="mt-4 text-[0.85rem] leading-relaxed text-ink-400">
                  Strategy directs. Creative expresses. Performance acquires. Technology enables and
                  measures. Performance data flows back into strategy each cycle.
                </p>
              </div>
            </Reveal>
          </div>

          {/* layer detail */}
          <div className="lg:col-span-7">
            <ul className="grid gap-px border border-mist-200 bg-mist-200 sm:grid-cols-2">
              {layers.map((l, i) => (
                <Reveal key={l.n} as="li" delay={(i % 2) * 60}>
                  <article className="h-full bg-white p-6 md:p-8">
                    <div className="flex items-baseline justify-between">
                      <span className="font-mono text-[0.7rem] text-volt-600">{l.n}</span>
                      <span aria-hidden="true" className="h-2 w-2 rotate-45 bg-streak-500/80" />
                    </div>
                    <h3 className="mt-5 font-display text-[1.3rem] tracking-[-0.025em] text-ink-900">
                      {l.name}
                    </h3>
                    <p className="mt-3 text-[0.9rem] leading-relaxed text-ink-400">{l.body}</p>
                    <ul className="mt-5 flex flex-wrap gap-2 border-t border-mist-200 pt-5">
                      {l.items.map((it) => (
                        <li key={it}>
                          <Tag>{it}</Tag>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </ul>
            <Reveal>
              <div className="mt-8">
                <StreakDivider />
                <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-sm text-[0.9rem] leading-relaxed text-ink-400">
                    See how these layers turn into working frameworks, methodologies and sample
                    concepts.
                  </p>
                  <Button href="#/capabilities" variant="ghost">
                    How we think <ArrowRight />
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
