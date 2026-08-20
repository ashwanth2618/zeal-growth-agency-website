import { Button, Eyebrow, MomentumStreak, Reveal, SectionHeader, StreakDivider, Tag } from "../components/primitives";
import { industries, processSteps, services } from "../lib/site";

const values = [
  {
    t: "Clarity over noise",
    d: "If a metric, channel or creative cannot be explained in one sentence, it does not belong in the plan.",
  },
  {
    t: "Strategy before spend",
    d: "Positioning, audience and measurement are settled before a single rupee goes into media.",
  },
  {
    t: "Evidence over opinion",
    d: "Preferences are a hypothesis. Live data decides what stays in the system.",
  },
  {
    t: "Craft is commercial",
    d: "Creative quality is a performance variable, not a cosmetic one.",
  },
  {
    t: "Radical transparency",
    d: "You see the numbers, including the ones that did not work.",
  },
  {
    t: "Momentum, not campaigns",
    d: "We optimise for compounding systems over one-off launches.",
  },
];

const philosophy = [
  {
    n: "P1",
    t: "Attention is not the outcome",
    d: "Reach, views and followers are inputs. They only matter when they can be connected to intent, conversion and revenue.",
  },
  {
    n: "P2",
    t: "One system beats many tactics",
    d: "Channels influence each other. Isolated reporting is how good channels get cancelled and bad ones get funded.",
  },
  {
    n: "P3",
    t: "Creative is the biggest lever",
    d: "Audience and offer set the ceiling; creative decides how close you get to it. Volume with hypothesis beats perfection without one.",
  },
  {
    n: "P4",
    t: "Friction is easier to remove than demand is to create",
    d: "Fixing a broken funnel step often outperforms increasing spend. CRO and UX are growth work, not design work.",
  },
  {
    n: "P5",
    t: "Automation should remove waste, not judgement",
    d: "AI handles repetition, research and routing. People decide what matters.",
  },
  {
    n: "P6",
    t: "Measurement earns trust",
    d: "Clear attribution, honest assumptions and visible limitations are what make a growth relationship durable.",
  },
];

const clientExperience = [
  {
    k: "Onboarding",
    d: "Access, audit and discovery in the first cycle. You get a written view of what is working, what is broken and what we will do first.",
  },
  {
    k: "Cadence",
    d: "A fixed working rhythm — planned content and campaign cycles, plus review points where decisions are made rather than deferred.",
  },
  {
    k: "Reporting",
    d: "Dashboard access from day one, with commentary on what changed, why and what happens next. Agency fee and media spend reported separately.",
  },
  {
    k: "Ownership",
    d: "Ad accounts, analytics properties and assets remain yours. If we part ways, you keep the system and the data.",
  },
  {
    k: "Escalation",
    d: "A named point of contact and a clear route when something needs to move faster than the normal cadence.",
  },
  {
    k: "Honesty",
    d: "If a channel is not working, we say so early and redirect budget rather than defending a plan that is not performing.",
  },
];

const technologyStack = [
  { k: "Paid media", v: "Meta Ads, Google Ads, YouTube Ads" },
  { k: "Analytics", v: "GA4, tag management, dashboard tooling" },
  { k: "Web & CRO", v: "Landing systems, testing, heatmaps, session review" },
  { k: "SEO", v: "Technical crawlers, rank tracking, search intelligence" },
  { k: "Automation", v: "CRM, workflow automation, AI agents, integrations" },
  { k: "Creative", v: "Short-form video, motion, static systems, copy frameworks" },
];

export default function About() {
  return (
    <>
      {/* page hero */}
      <section className="on-dark relative isolate overflow-hidden bg-ink-900 pt-[68px] text-white">
        <div aria-hidden="true" className="rule-grid-dark absolute inset-0 opacity-70" />
        <MomentumStreak width="34%" angle={19} opacity={0.45} className="hidden md:block" />
        <div className="shell relative grid gap-12 py-16 md:py-24 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="label-mono flex items-center gap-3 text-white/45">
                <span className="h-px w-8 bg-streak-500" aria-hidden="true" />
                Agency profile
              </div>
              <h1 className="mt-7 text-[clamp(2.2rem,5.6vw,4rem)] leading-[0.98] font-bold tracking-[-0.045em]">
                A specialized growth
                <br />
                partner for ambitious
                <br />
                businesses.
              </h1>
              <p className="mt-8 max-w-xl text-[1rem] leading-relaxed text-white/60 md:text-[1.06rem]">
                ZEAL exists to close the gap between marketing activity and business outcome. We
                build, launch and operate digital growth systems for companies that need more than
                isolated tactics — combining strategy, creative, performance, technology and
                measurement under one framework.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button href="#/contact">Book a Free Strategy Call</Button>
                <Button href="#/capabilities" variant="ghost" className="text-white/80">
                  How we think
                </Button>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:border-l lg:border-white/10 lg:pl-12">
            <Reveal delay={100}>
              <p className="label-mono text-white/35">ZEAL IN ONE LINE</p>
              <p className="mt-5 font-display text-[1.5rem] leading-snug tracking-[-0.03em] text-white md:text-[1.7rem]">
                Energy + Direction + Momentum.
              </p>
              <p className="mt-5 text-[0.95rem] leading-relaxed text-white/50">
                Energy is the creative and commercial ambition of the businesses we work with.
                Direction is strategy, positioning and channel choice. Momentum is what happens when
                the two are measured and compounded over consecutive cycles.
              </p>
              <dl className="mt-8 grid grid-cols-2 gap-px border-t border-white/10 bg-white/10">
                {[
                  { k: "DISCIPLINES", v: "08" },
                  { k: "LAYERS", v: "04" },
                  { k: "PHASES", v: "04" },
                  { k: "INDUSTRIES", v: "05" },
                ].map((s) => (
                  <div key={s.k} className="bg-ink-900 py-5">
                    <dt className="label-mono text-white/40">{s.k}</dt>
                    <dd className="mt-2 font-mono text-[1.6rem] leading-none text-streak-400">
                      {s.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* mission / vision */}
      <section className="border-b border-mist-200 bg-white py-20 md:py-24">
        <div className="shell grid gap-px border border-mist-200 bg-mist-200 md:grid-cols-3">
          {[
            {
              k: "Mission",
              t: "Make growth measurable for businesses that cannot afford to guess.",
              d: "We turn scattered marketing effort into a defined system with clear inputs, visible performance and a decision loop that improves every cycle.",
            },
            {
              k: "Vision",
              t: "To be the growth partner ambitious businesses keep as they scale.",
              d: "Not the biggest agency — the one leadership teams trust because strategy, creative and reporting hold up under scrutiny.",
            },
            {
              k: "How we work",
              t: "Specialists, one system, one measurement layer.",
              d: "A focused team operating across strategy, creative, performance and technology, with no handoff gaps between disciplines.",
            },
          ].map((c, i) => (
            <Reveal key={c.k} delay={i * 70}>
              <div className="h-full bg-white p-7 md:p-9">
                <Eyebrow>{c.k}</Eyebrow>
                <h2 className="mt-5 font-display text-[1.28rem] leading-snug tracking-[-0.025em] text-ink-900">
                  {c.t}
                </h2>
                <p className="mt-4 text-[0.92rem] leading-relaxed text-ink-400">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* philosophy */}
      <section className="relative overflow-hidden border-b border-mist-200 bg-mist-50 py-20 md:py-28">
        <div aria-hidden="true" className="rule-grid absolute inset-0 opacity-60" />
        <div className="shell relative grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionHeader
                eyebrow="Marketing philosophy"
                title="Six positions we do not compromise on."
              />
              <p className="mt-6 text-[0.94rem] leading-relaxed text-ink-400">
                These principles decide what we recommend and what we refuse to do — even when a
                shorter route looks cheaper.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <ol className="border-t border-mist-300">
              {philosophy.map((p, i) => (
                <Reveal key={p.n} as="li" delay={(i % 2) * 50}>
                  <div className="grid gap-3 border-b border-mist-300 py-6 md:grid-cols-12 md:gap-6">
                    <span className="font-mono text-[0.72rem] text-streak-500 md:col-span-1">
                      {p.n}
                    </span>
                    <h3 className="font-display text-[1.15rem] leading-snug tracking-[-0.025em] text-ink-900 md:col-span-4">
                      {p.t}
                    </h3>
                    <p className="text-[0.92rem] leading-relaxed text-ink-400 md:col-span-7">{p.d}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* values */}
      <section className="on-dark relative isolate overflow-hidden border-b border-white/10 bg-ink-950 py-20 text-white md:py-28">
        <div aria-hidden="true" className="rule-grid-dark absolute inset-0 opacity-50" />
        <div className="shell relative">
          <Reveal>
            <SectionHeader
              eyebrow="Core values"
              tone="dark"
              title="How we operate."
              align="split"
              lead="Values that show up in deliverables, not just in a deck."
            />
          </Reveal>
          <ul className="mt-12 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.t} as="li" delay={(i % 3) * 60}>
                <div className="h-full bg-ink-950 p-6 md:p-7">
                  <span className="font-mono text-[0.68rem] text-streak-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-[1.1rem] tracking-[-0.02em] text-white">
                    {v.t}
                  </h3>
                  <p className="mt-3 text-[0.87rem] leading-relaxed text-white/50">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* capabilities + industries + approach */}
      <section className="border-b border-mist-200 bg-white py-20 md:py-24">
        <div className="shell grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>Specialized capabilities</Eyebrow>
              <h2 className="mt-5 text-[clamp(1.6rem,3.2vw,2.2rem)] leading-tight tracking-[-0.035em] text-ink-900">
                Eight capabilities. One operating system.
              </h2>
              <ul className="mt-8 border-t border-mist-200">
                {services.map((s) => (
                  <li
                    key={s.n}
                    className="flex items-baseline gap-4 border-b border-mist-200 py-3.5"
                  >
                    <span className="font-mono text-[0.68rem] text-ink-300">{s.n}</span>
                    <span className="text-[0.95rem] text-ink-700">{s.title}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div className="lg:col-span-3 lg:border-l lg:border-mist-200 lg:pl-10">
            <Reveal delay={60}>
              <Eyebrow>Industries</Eyebrow>
              <ul className="mt-6 space-y-4">
                {industries.map((ind) => (
                  <li key={ind.key} className="border-b border-mist-200 pb-4">
                    <p className="font-display text-[1rem] leading-snug text-ink-900">{ind.title}</p>
                    <p className="label-mono mt-2 text-ink-300">{ind.metric}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div className="lg:col-span-4 lg:border-l lg:border-mist-200 lg:pl-10">
            <Reveal delay={100}>
              <Eyebrow>Approach</Eyebrow>
              <ol className="mt-6 space-y-5">
                {processSteps.map((s) => (
                  <li key={s.n} className="flex gap-4">
                    <span className="font-mono text-[0.68rem] text-streak-500">{s.n}</span>
                    <span>
                      <span className="block font-display text-[1.05rem] text-ink-900">{s.title}</span>
                      <span className="mt-1.5 block text-[0.86rem] leading-relaxed text-ink-400">
                        {s.body}
                      </span>
                    </span>
                  </li>
                ))}
              </ol>
              <div className="mt-8">
                <StreakDivider />
              </div>
              <div className="mt-6">
                <Button href="#/contact" variant="ghost">
                  Discuss your system
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* technology */}
      <section className="border-b border-mist-200 bg-mist-50 py-20 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeader
                eyebrow="Technology"
                title="Tooling chosen for measurement, not for novelty."
                lead="Platforms change; the requirement does not — every tool in the stack must produce a signal we can act on or remove work a human should not be doing."
              />
              <div className="mt-8 flex flex-wrap gap-2">
                <Tag tone="volt">Measurement first</Tag>
                <Tag tone="streak">Automation where it counts</Tag>
                <Tag>No lock-in</Tag>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={70}>
              <dl className="grid gap-px border border-mist-200 bg-mist-200 sm:grid-cols-2">
                {technologyStack.map((t) => (
                  <div key={t.k} className="bg-white p-6">
                    <dt className="label-mono text-ink-400">{t.k}</dt>
                    <dd className="mt-3 text-[0.92rem] leading-relaxed text-ink-700">{t.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* client experience */}
      <section className="relative overflow-hidden border-b border-mist-200 bg-white py-20 md:py-28">
        <div className="shell">
          <Reveal>
            <SectionHeader
              eyebrow="Client experience"
              title="What working with ZEAL feels like."
              align="split"
              lead="No black boxes, no surprise invoices, no unexplained channel decisions."
            />
          </Reveal>
          <div className="mt-12 grid gap-px border border-mist-200 bg-mist-200 md:grid-cols-2 lg:grid-cols-3">
            {clientExperience.map((c, i) => (
              <Reveal key={c.k} delay={(i % 3) * 60}>
                <div className="h-full bg-white p-6 md:p-8">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-[1.1rem] tracking-[-0.02em] text-ink-900">
                      {c.k}
                    </h3>
                    <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-volt-500" />
                  </div>
                  <p className="mt-3.5 text-[0.9rem] leading-relaxed text-ink-400">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="on-dark relative mt-10 overflow-hidden border border-ink-900 bg-ink-900 p-8 text-white md:p-12">
              <MomentumStreak width="40%" angle={20} opacity={0.45} />
              <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="font-display text-[1.5rem] leading-tight tracking-[-0.03em] md:text-[1.8rem]">
                    See whether we are the right fit.
                  </h3>
                  <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-white/55">
                    A short call on your objectives, category and current performance — with an
                    honest answer either way.
                  </p>
                </div>
                <Button href="#/contact" variant="streak" className="shrink-0">
                  Book a Free Strategy Call
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
