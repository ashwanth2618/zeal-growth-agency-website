import { useState } from "react";
import { Button, Eyebrow, MomentumStreak, Reveal, SectionHeader, Tag } from "../components/primitives";
import { cn } from "../utils/cn";

/* ── Framework data ─────────────────────────────────────────── */
const funnel = [
  {
    n: "S1",
    k: "ATTENTION",
    w: 100,
    build: ["Positioning & message market fit", "Channel mix and reach plan", "Creative formats per platform"],
    measure: ["Impressions & reach", "Hook / view-through rate", "Brand search lift"],
  },
  {
    n: "S2",
    k: "INTEREST",
    w: 78,
    build: ["Content series and editorial angles", "Retention-led short-form video", "Landing experience matching the promise"],
    measure: ["Engagement rate", "Watch time & scroll depth", "Return visits"],
  },
  {
    n: "S3",
    k: "INTENT",
    w: 52,
    build: ["Offer architecture & lead magnets", "Qualification and routing", "Retargeting sequences"],
    measure: ["Click-through & session quality", "Lead volume & lead quality", "Cost per qualified lead"],
  },
  {
    n: "S4",
    k: "CONVERSION",
    w: 28,
    build: ["CRO experiments & friction removal", "Sales enablement assets", "Nurture and retention loops"],
    measure: ["Conversion rate", "CAC and payback", "ROAS / revenue attribution"],
  },
];

const methodologies = [
  {
    n: "M1",
    t: "Channel Selection Matrix",
    d: "Every channel is scored on audience density, intent quality, creative requirement, cost to test and speed to signal. Channels enter the plan by score, not by trend.",
    out: ["Scored channel shortlist", "Test budget split", "Kill criteria per channel"],
  },
  {
    n: "M2",
    t: "Creative Testing Methodology",
    d: "Each test states one hypothesis, one variable and the metric that decides it. Volume is planned so a read is statistically usable rather than anecdotal.",
    out: ["Hypothesis backlog", "Variant matrix", "Read / scale / retire decision"],
  },
  {
    n: "M3",
    t: "Measurement Hierarchy",
    d: "Four levels: business outcome, leading indicator, channel metric, diagnostic. Reporting starts at the top so channel metrics never masquerade as results.",
    out: ["Metric tree", "Attribution approach & limits", "Dashboard specification"],
  },
  {
    n: "M4",
    t: "Conversion Diagnostic",
    d: "A structured pass across clarity, offer, proof, friction, speed, trust, mobile behaviour and follow-up — ranked by expected impact against effort.",
    out: ["Prioritised issue list", "Test roadmap", "Implementation notes"],
  },
  {
    n: "M5",
    t: "Search Architecture",
    d: "Technical foundation, then topical coverage mapped to buying intent, then local and entity signals, then authority — in that order.",
    out: ["Technical audit", "Topic & keyword map", "Content and internal-link plan"],
  },
  {
    n: "M6",
    t: "AI Automation Opportunity Map",
    d: "Tasks are scored on frequency, volume, data availability and judgement requirement. High-frequency, low-judgement work is automated first.",
    out: ["Task inventory & scoring", "Automation sequence design", "Guardrails and human review points"],
  },
];

/* ── Sample concept frames ──────────────────────────────────── */
function ConceptFrame({
  label,
  hook,
  body,
  cta,
  accent,
}: {
  label: string;
  hook: string;
  body: string;
  cta: string;
  accent: "volt" | "streak";
}) {
  return (
    <figure className="flex h-full flex-col border border-mist-200 bg-white">
      <figcaption className="label-mono flex items-center justify-between border-b border-mist-200 bg-mist-50 px-3 py-2 text-ink-400">
        <span>{label}</span>
        <span className={accent === "streak" ? "text-streak-600" : "text-volt-600"}>
          {accent === "streak" ? "PROOF" : "HOOK"}
        </span>
      </figcaption>
      <div className="relative flex flex-1 flex-col justify-between overflow-hidden p-4">
        <span
          aria-hidden="true"
          className={cn(
            "absolute -top-6 -right-6 h-16 w-16 rotate-45",
            accent === "streak" ? "bg-streak-500/20" : "bg-volt-500/15",
          )}
        />
        <p className="relative font-display text-[1.02rem] leading-snug tracking-[-0.02em] text-ink-900">
          {hook}
        </p>
        <p className="relative mt-4 text-[0.8rem] leading-relaxed text-ink-400">{body}</p>
        <span
          className={cn(
            "label-mono relative mt-5 inline-block w-fit px-2.5 py-1.5 text-white",
            accent === "streak" ? "bg-streak-500" : "bg-ink-900",
          )}
        >
          {cta}
        </span>
      </div>
    </figure>
  );
}

export default function Capabilities() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <>
      {/* hero */}
      <section className="on-dark relative isolate overflow-hidden bg-ink-900 pt-[68px] text-white">
        <div aria-hidden="true" className="rule-grid-dark absolute inset-0 opacity-70" />
        <MomentumStreak width="32%" angle={19} opacity={0.45} className="hidden md:block" />
        <div className="shell relative grid gap-10 py-16 md:py-24 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="label-mono flex items-center gap-3 text-white/45">
                <span className="h-px w-8 bg-streak-500" aria-hidden="true" />
                How we think
              </div>
              <h1 className="mt-7 text-[clamp(2.2rem,5.6vw,4rem)] leading-[0.98] font-bold tracking-[-0.045em]">
                Frameworks,
                <br />
                not templates.
              </h1>
              <p className="mt-8 max-w-xl text-[1rem] leading-relaxed text-white/60 md:text-[1.06rem]">
                This page shows how ZEAL thinks — the structures we use to decide where attention
                goes, what we build, and how we know whether it worked. Everything here is method:
                no client names, no borrowed case studies.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button href="#/contact">Book a Free Strategy Call</Button>
                <Button href="#/services" variant="ghost" className="!text-white/80">
                  See the services
                </Button>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:border-l lg:border-white/10 lg:pl-12">
            <Reveal delay={90}>
              <p className="label-mono text-white/35">ON THIS PAGE</p>
              <ul className="mt-5 border-t border-white/10">
                {[
                  ["01", "Attention → Momentum framework"],
                  ["02", "Operating loop"],
                  ["03", "Six working methodologies"],
                  ["04", "Sample concept (illustrative)"],
                  ["05", "Deliverables"],
                ].map(([n, t]) => (
                  <li key={n} className="flex items-baseline gap-4 border-b border-white/10 py-3">
                    <span className="font-mono text-[0.68rem] text-streak-400">{n}</span>
                    <span className="text-[0.94rem] text-white/70">{t}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* framework: interactive stage selector */}
      <section className="border-b border-mist-200 bg-white py-20 md:py-28">
        <div className="shell">
          <Reveal>
            <SectionHeader
              index="01"
              eyebrow="Framework"
              title="Attention → Momentum"
              lead="Four stages. At each stage we define what gets built and what gets measured — so nothing is produced without a job to do."
              align="split"
            />
          </Reveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-12">
            {/* funnel diagram / selector */}
            <div className="lg:col-span-5">
              <Reveal>
                <p className="label-mono text-ink-400">STAGE SELECTOR</p>
                <ul className="mt-4 space-y-2" aria-label="Growth framework stages">
                  {funnel.map((s, i) => (
                    <li key={s.n}>
                      <button
                        type="button"
                        aria-expanded={activeStage === i}
                        aria-controls={`stage-panel-${i}`}
                        onClick={() => setActiveStage(i)}
                        className="group w-full text-left"
                      >
                        <span
                          className={cn(
                            "flex items-center gap-4 border px-4 py-3.5 transition-colors",
                            activeStage === i
                              ? "border-ink-900 bg-ink-900 text-white"
                              : "border-mist-200 bg-white text-ink-700 hover:border-ink-400",
                          )}
                        >
                          <span className="w-full">
                            <span
                              className="block h-2.5"
                              style={{
                                width: `${s.w}%`,
                                background: activeStage === i ? "#FF5A1F" : "#2A5BFF",
                              }}
                            />
                          </span>
                          <span className="label-mono shrink-0">{s.k}</span>
                          <span className="font-mono text-[0.65rem] opacity-60">{s.n}</span>
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[0.8rem] leading-relaxed text-ink-300">
                  Bars represent relative volume through a typical funnel shape — illustrative only.
                </p>
              </Reveal>
            </div>

            {/* stage detail */}
            <div className="lg:col-span-7">
              {funnel.map((s, i) => (
                <div
                  key={s.n}
                  id={`stage-panel-${i}`}
                  aria-label={`${s.k} stage detail`}
                  hidden={activeStage !== i}
                  className="border border-mist-200 bg-mist-50 p-6 md:p-8"
                >
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-display text-[1.6rem] tracking-[-0.03em] text-ink-900">
                      {s.k.charAt(0) + s.k.slice(1).toLowerCase()}
                    </h3>
                    <span className="font-mono text-[0.7rem] text-streak-500">{s.n}</span>
                  </div>
                  <div className="mt-7 grid gap-8 sm:grid-cols-2">
                    <div>
                      <p className="label-mono text-ink-400">WHAT WE BUILD</p>
                      <ul className="mt-4 space-y-3">
                        {s.build.map((b) => (
                          <li key={b} className="flex gap-2.5 text-[0.9rem] leading-snug text-ink-600">
                            <span aria-hidden="true" className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rotate-45 bg-volt-500" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="label-mono text-ink-400">WHAT WE MEASURE</p>
                      <ul className="mt-4 space-y-3">
                        {s.measure.map((m) => (
                          <li key={m} className="flex gap-2.5 text-[0.9rem] leading-snug text-ink-600">
                            <span aria-hidden="true" className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rotate-45 bg-streak-500" />
                            {m}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* operating loop */}
      <section className="on-dark relative overflow-hidden border-b border-white/10 bg-ink-950 py-16 text-white md:py-20">
        <div aria-hidden="true" className="rule-grid-dark absolute inset-0 opacity-50" />
        <div className="shell relative">
          <Reveal>
            <Eyebrow index="02" tone="dark">
              Operating loop
            </Eyebrow>
            <h2 className="mt-5 text-[clamp(1.7rem,3.6vw,2.5rem)] leading-tight tracking-[-0.04em]">
              Discover → Strategize → Execute → Measure
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <ol className="mt-10 grid gap-px border border-white/10 bg-white/10 md:grid-cols-4">
              {[
                ["01", "Discover", "Audit, market view, opportunity map"],
                ["02", "Strategize", "Strategy, channel plan, measurement design"],
                ["03", "Execute", "Campaigns, content, CRO, automation"],
                ["04", "Measure", "Dashboards, insight reviews, iteration"],
              ].map(([n, t, d]) => (
                <li key={n} className="bg-ink-950 p-6">
                  <span className="font-mono text-[0.68rem] text-streak-400">{n}</span>
                  <h3 className="mt-3 font-display text-[1.15rem] tracking-[-0.02em] text-white">{t}</h3>
                  <p className="mt-2.5 text-[0.86rem] leading-relaxed text-white/50">{d}</p>
                </li>
              ))}
            </ol>
            <p className="label-mono mt-6 text-white/35">
              Measure feeds back into Discover · the loop repeats every cycle
            </p>
          </Reveal>
        </div>
      </section>

      {/* methodologies */}
      <section className="border-b border-mist-200 bg-mist-50 py-20 md:py-28">
        <div aria-hidden="true" className="rule-grid absolute inset-0 opacity-60" />
        <div className="shell relative">
          <Reveal>
            <SectionHeader
              index="03"
              eyebrow="Methodologies"
              title="Six structures behind every recommendation."
              lead="Not theory for its own sake — each one exists to make a decision faster and more defensible."
              align="split"
            />
          </Reveal>
          <div className="mt-12 grid gap-px border border-mist-200 bg-mist-200 md:grid-cols-2 lg:grid-cols-3">
            {methodologies.map((m, i) => (
              <Reveal key={m.n} delay={(i % 3) * 60}>
                <article className="flex h-full flex-col bg-white p-6 md:p-7">
                  <span className="font-mono text-[0.68rem] text-volt-600">{m.n}</span>
                  <h3 className="mt-4 font-display text-[1.15rem] leading-snug tracking-[-0.025em] text-ink-900">
                    {m.t}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.89rem] leading-relaxed text-ink-400">{m.d}</p>
                  <ul className="mt-5 border-t border-mist-200 pt-4">
                    {m.out.map((o) => (
                      <li key={o} className="label-mono py-1 text-ink-300">
                        ↳ {o}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* sample concept */}
      <section className="relative overflow-hidden border-b border-mist-200 bg-white py-20 md:py-28">
        <div className="shell">
          <Reveal>
            <div className="flex flex-col gap-6 border border-streak-500/40 bg-mist-50 p-6 md:flex-row md:items-center md:justify-between md:p-8">
              <div>
                <span className="label-mono inline-block border border-streak-500 px-2.5 py-1.5 text-streak-600">
                  SAMPLE CONCEPT · ILLUSTRATIVE ONLY
                </span>
                <h2 className="mt-5 font-display text-[clamp(1.6rem,3.4vw,2.3rem)] leading-tight tracking-[-0.035em] text-ink-900">
                  What a ZEAL creative direction looks like.
                </h2>
                <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-ink-500">
                  This is a fictional concept created to show structure and craft. It is not client
                  work, contains no client data, and does not represent a past campaign or result.
                </p>
              </div>
              <Tag tone="streak">Conceptual</Tag>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-12">
            <Reveal delay={60}>
              <div className="lg:col-span-7">
                <p className="label-mono text-ink-400">CREATIVE SEQUENCE · 3 BEATS</p>
                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  <ConceptFrame
                    label="FRAME 01 / 09:16"
                    hook="Your product deserves more than a budget increase."
                    body="Open on the problem your buyer already recognises. No logo, no jargon, no intro."
                    cta="Watch 20s"
                    accent="volt"
                  />
                  <ConceptFrame
                    label="FRAME 02 / 09:16"
                    hook="Three changes. One funnel. Measurable lift."
                    body="Show the mechanism — what changed, in what order, and what it produced qualitatively."
                    cta="See the method"
                    accent="streak"
                  />
                  <ConceptFrame
                    label="FRAME 03 / 09:16"
                    hook="Build the system before you scale the spend."
                    body="Close with the decision you want, stated once, with a single action available."
                    cta="Book a call"
                    accent="volt"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="lg:col-span-5">
                <p className="label-mono text-ink-400">LANDING STRUCTURE · WIREFRAME</p>
                <div className="mt-4 border border-mist-200 bg-white p-5">
                  <div className="space-y-3">
                    <div className="border border-mist-200 bg-mist-50 p-3">
                      <p className="label-mono text-ink-400">H1 · PROMISE</p>
                      <p className="mt-1.5 font-display text-[1.05rem] text-ink-900">
                        A growth system, not a monthly package.
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {["PROOF", "PROOF", "PROOF"].map((p, i) => (
                        <div key={i} className="border border-mist-200 p-3">
                          <span className="label-mono text-ink-300">{p}</span>
                          <span className="mt-2 block h-1 w-full bg-mist-200" />
                          <span className="mt-1.5 block h-1 w-2/3 bg-mist-200" />
                        </div>
                      ))}
                    </div>
                    <div className="border border-volt-500/40 bg-volt-500/[0.05] p-3">
                      <p className="label-mono text-volt-600">PRIMARY ACTION</p>
                      <p className="mt-1.5 text-[0.9rem] text-ink-700">Book a free strategy call</p>
                    </div>
                    <div className="border border-mist-200 p-3">
                      <p className="label-mono text-ink-300">OBJECTION HANDLING</p>
                      <span className="mt-2 block h-1 w-full bg-mist-200" />
                      <span className="mt-1.5 block h-1 w-4/5 bg-mist-200" />
                      <span className="mt-1.5 block h-1 w-2/3 bg-mist-200" />
                    </div>
                    <div className="border border-streak-500/40 p-3">
                      <p className="label-mono text-streak-600">SECONDARY ACTION</p>
                      <p className="mt-1.5 text-[0.9rem] text-ink-700">Request a proposal</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* deliverables */}
      <section className="on-dark relative overflow-hidden bg-ink-900 py-20 text-white md:py-24">
        <div aria-hidden="true" className="rule-grid-dark absolute inset-0 opacity-55" />
        <MomentumStreak width="28%" angle={19} opacity={0.3} className="hidden lg:block" />
        <div className="shell relative">
          <Reveal>
            <SectionHeader
              index="05"
              eyebrow="Deliverables"
              tone="dark"
              title="What you actually receive."
              align="split"
              lead="Scoped in writing at the start of an engagement, then reported against each cycle."
            />
          </Reveal>
          <div className="mt-12 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                t: "Strategy",
                items: ["Growth strategy document", "Positioning & messaging", "Channel plan", "Measurement framework"],
              },
              {
                t: "Creative",
                items: ["Campaign concepts", "Ad creative variants", "Short-form video", "Copy & visual system"],
              },
              {
                t: "Performance",
                items: ["Campaign builds & QA", "Optimisation cycles", "Test roadmap", "Channel commentary"],
              },
              {
                t: "Systems",
                items: ["Dashboard access", "Automation workflows", "Tracking & attribution notes", "Review cadence"],
              },
            ].map((g, i) => (
              <Reveal key={g.t} delay={i * 60}>
                <div className="h-full bg-ink-900 p-6">
                  <h3 className="label-mono text-streak-400">{g.t}</h3>
                  <ul className="mt-5 space-y-3">
                    {g.items.map((it) => (
                      <li key={it} className="flex gap-2.5 text-[0.88rem] leading-snug text-white/60">
                        <span aria-hidden="true" className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rotate-45 bg-volt-500" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="#/contact" variant="streak">
                Request a Proposal
              </Button>
              <Button href="#/engagement" variant="ghost" className="text-white/80">
                View engagement models
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
