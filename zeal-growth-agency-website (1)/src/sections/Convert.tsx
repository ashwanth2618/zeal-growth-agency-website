import { useState } from "react";
import { SamplePerformanceView } from "../components/GrowthSystem";
import {
  ArrowRight,
  Button,
  Eyebrow,
  MomentumStreak,
  Reveal,
  SectionHeader,
  Tag,
} from "../components/primitives";
import { engagementModels, faqs, pricingFactors, site } from "../lib/site";
import { cn } from "../utils/cn";

/* ════════════════════════════════════════════════════════════
   ANALYTICS
   ════════════════════════════════════════════════════════════ */
export function Analytics() {
  return (
    <section
      id="analytics"
      className="on-dark relative isolate overflow-hidden border-b border-white/10 bg-ink-900 py-20 text-white md:py-28"
      aria-labelledby="analytics-heading"
    >
      <div aria-hidden="true" className="rule-grid-dark absolute inset-0 opacity-55" />
      <MomentumStreak width="26%" angle={19} opacity={0.32} className="hidden lg:block" />

      <div className="shell relative">
        <Reveal>
          <SectionHeader
            index="06"
            eyebrow="Reporting & Analytics"
            tone="dark"
            title={<span id="analytics-heading">Nothing Important Should Be Hidden.</span>}
            lead="Every engagement includes live dashboard access and scheduled reviews. You see what we see — spend, performance and what we are changing next."
            align="split"
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-12 md:mt-14">
            <SamplePerformanceView />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
          {[
            {
              t: "One source of truth",
              d: "Platform data, website analytics and CRM outcomes reconciled into a single view instead of five conflicting screenshots.",
            },
            {
              t: "Attribution you can question",
              d: "We show the model, its limits and the assumptions — so decisions are made on evidence, not on the most flattering number.",
            },
            {
              t: "Reviews with decisions",
              d: "Each reporting cycle ends with a written decision list: what we keep, what we cut, what we test next.",
            },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 60}>
              <div className="h-full bg-ink-900 p-6 md:p-8">
                <span className="label-mono text-streak-400">0{i + 1}</span>
                <h3 className="mt-4 font-display text-[1.12rem] tracking-[-0.02em] text-white">{c.t}</h3>
                <p className="mt-3 text-[0.88rem] leading-relaxed text-white/50">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   ENGAGEMENT MODELS
   ════════════════════════════════════════════════════════════ */
export function Engagement() {
  return (
    <section id="engagement" className="relative border-b border-mist-200 bg-white py-20 md:py-28">
      <div className="shell">
        <Reveal>
          <SectionHeader
            index="07"
            eyebrow="Engagement"
            title="Three Ways To Work Together"
            lead="Pricing is customized according to business goals, scope, channels, complexity and required level of support."
            align="split"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {engagementModels.map((m, i) => (
            <Reveal key={m.name} delay={i * 80}>
              <article
                className={cn(
                  "relative flex h-full flex-col overflow-hidden border p-6 md:p-8",
                  m.featured
                    ? "on-dark border-ink-900 bg-ink-900 text-white"
                    : "border-mist-200 bg-white",
                )}
              >
                {m.featured && <MomentumStreak width="42%" angle={22} opacity={0.5} />}
                <div className="relative flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <span
                      className={cn("label-mono", m.featured ? "text-streak-400" : "text-ink-300")}
                    >
                      {m.tag}
                    </span>
                    <span className="font-mono text-[0.68rem] text-ink-300/70">
                      0{i + 1}
                    </span>
                  </div>
                  <h3
                    className={cn(
                      "mt-7 font-display text-[1.5rem] leading-tight tracking-[-0.03em]",
                      m.featured ? "text-white" : "text-ink-900",
                    )}
                  >
                    {m.name}
                  </h3>
                  <p
                    className={cn(
                      "mt-3.5 text-[0.92rem] leading-relaxed",
                      m.featured ? "text-white/55" : "text-ink-400",
                    )}
                  >
                    {m.for}
                  </p>

                  <ul
                    className={cn(
                      "mt-7 flex-1 space-y-2.5 border-t pt-6",
                      m.featured ? "border-white/12" : "border-mist-200",
                    )}
                  >
                    {m.includes.map((inc) => (
                      <li
                        key={inc}
                        className={cn(
                          "flex items-start gap-2.5 text-[0.88rem] leading-snug",
                          m.featured ? "text-white/70" : "text-ink-500",
                        )}
                      >
                        <span
                          aria-hidden="true"
                          className={cn(
                            "mt-[0.45em] h-1.5 w-1.5 shrink-0 rotate-45",
                            m.featured ? "bg-streak-500" : "bg-volt-500",
                          )}
                        />
                        {inc}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Button
                      href="#/contact"
                      variant={m.featured ? "streak" : "ghost"}
                      className={cn("w-full", !m.featured && "text-ink-900")}
                    >
                      {m.cta} <ArrowRight />
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* fee clarity */}
        <Reveal>
          <div className="mt-8 grid gap-px border border-mist-200 bg-mist-200 md:grid-cols-2">
            <div className="bg-mist-50 p-6 md:p-8">
              <Eyebrow>Separated by design</Eyebrow>
              <h3 className="mt-4 font-display text-[1.2rem] tracking-[-0.02em] text-ink-900">
                Agency fees
              </h3>
              <p className="mt-3 text-[0.9rem] leading-relaxed text-ink-400">
                Strategy, execution, creative production, optimization and reporting. Quoted as a
                fixed scope-based fee — monthly retainer or project fee.
              </p>
            </div>
            <div className="bg-mist-50 p-6 md:p-8">
              <Eyebrow>Paid to platforms</Eyebrow>
              <h3 className="mt-4 font-display text-[1.2rem] tracking-[-0.02em] text-ink-900">
                Advertising / media spend
              </h3>
              <p className="mt-3 text-[0.9rem] leading-relaxed text-ink-400">
                Paid directly to Meta, Google, YouTube or other platforms. You keep ownership of the
                accounts. Never bundled into our fee.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   WHY CUSTOM PRICING
   ════════════════════════════════════════════════════════════ */
export function CustomPricing() {
  return (
    <section className="relative overflow-hidden border-b border-mist-200 bg-mist-100 py-16 md:py-20">
      <div aria-hidden="true" className="rule-grid absolute inset-0 opacity-70" />
      <div className="shell relative grid gap-10 md:grid-cols-12 md:items-center">
        <div className="md:col-span-5">
          <Reveal>
            <Eyebrow index="08">Pricing approach</Eyebrow>
            <h2 className="mt-5 text-[clamp(1.7rem,3.6vw,2.5rem)] leading-[1.05] tracking-[-0.035em] text-ink-900">
              Every business has a different growth problem.
            </h2>
            <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-ink-500">
              A fixed price list would force us to sell the same package to fundamentally different
              situations. Instead we scope against your actual problem, then price the work.
            </p>
            <div className="mt-8">
              <Button href="#/contact">Request a Proposal</Button>
            </div>
          </Reveal>
        </div>
        <div className="md:col-span-7 md:border-l md:border-mist-300 md:pl-10">
          <Reveal delay={80}>
            <p className="label-mono text-ink-400">PRICING DEPENDS ON</p>
            <ul className="mt-5 grid gap-px border border-mist-300 bg-mist-300 sm:grid-cols-2">
              {pricingFactors.map((f) => (
                <li key={f} className="flex items-center gap-3 bg-white px-4 py-3.5">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-streak-500" />
                  <span className="text-[0.9rem] text-ink-700">{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   FAQ — accessible accordion
   ════════════════════════════════════════════════════════════ */
export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative border-b border-mist-200 bg-white py-20 md:py-28">
      <div className="shell grid gap-10 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-4">
          <Reveal>
            <SectionHeader
              index="09"
              eyebrow="FAQ"
              title="Questions, answered directly."
              level={2}
            />
            <p className="mt-6 text-[0.92rem] leading-relaxed text-ink-400">
              Still unclear on something? Ask on the strategy call — no pitch decks, no pressure.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="#/contact" variant="ghost">
                Ask a question <ArrowRight />
              </Button>
            </div>
            <div className="mt-8 hidden md:block">
              <Tag tone="streak">9 answers</Tag>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-8">
          <Reveal delay={60}>
            <div className="border-t border-mist-200">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                const panelId = `faq-panel-${i}`;
                const btnId = `faq-btn-${i}`;
                return (
                  <div key={f.q} className="border-b border-mist-200">
                    <div>
                      <h3>
                        <button
                          id={btnId}
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={panelId}
                          onClick={() => setOpen(isOpen ? null : i)}
                          className="group flex w-full items-start gap-4 py-5 text-left"
                        >
                          <span className="font-mono text-[0.7rem] text-ink-300">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="flex-1 font-display text-[1.05rem] leading-snug tracking-[-0.02em] text-ink-900 md:text-[1.12rem]">
                            {f.q}
                          </span>
                          <span
                            aria-hidden="true"
                            className={cn(
                              "mt-1 flex h-5 w-5 shrink-0 items-center justify-center border border-mist-300 text-ink-400 transition-colors group-hover:border-ink-900 group-hover:text-ink-900",
                              isOpen && "border-streak-500 bg-streak-500 text-white",
                            )}
                          >
                            {isOpen ? "−" : "+"}
                          </span>
                        </button>
                       </h3>
                     </div>
                     <div
                       id={panelId}
                       role="region"
                       aria-labelledby={btnId}
                       hidden={!isOpen}
                       className="pb-6 pl-[2.1rem] pr-8"
                     >
                       <p className="max-w-2xl text-[0.93rem] leading-relaxed text-ink-500">{f.a}</p>
                     </div>
                   </div>
                 );
               })}
             </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   FINAL CTA
   ════════════════════════════════════════════════════════════ */
export function ClosingCta() {
  return (
    <section
      className="on-dark relative isolate overflow-hidden bg-ink-950 text-white"
      aria-labelledby="cta-heading"
    >
      <div aria-hidden="true" className="rule-grid-dark absolute inset-0 opacity-60" />
      <MomentumStreak width="46%" angle={19} opacity={0.55} />
      <div
        aria-hidden="true"
        className="absolute right-[-12%] bottom-[-30%] h-[30rem] w-[30rem] opacity-[0.16] blur-[130px]"
        style={{ background: "radial-gradient(circle, #2A5BFF 0%, transparent 70%)" }}
      />

      <div className="shell relative grid gap-12 py-20 md:py-28 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <Eyebrow index="10" tone="dark">
              Next step
            </Eyebrow>
            <h2
              id="cta-heading"
              className="mt-6 text-[clamp(2.1rem,5.2vw,3.8rem)] leading-[1.0] font-bold tracking-[-0.045em]"
            >
              Let's find the fastest
              <br />
              path to momentum.
            </h2>
            <p className="mt-7 max-w-xl text-[1rem] leading-relaxed text-white/55">
              A free strategy call: we review where you are, what is blocking growth and whether ZEAL
              is the right partner. Thirty minutes, no obligation.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="#/contact" className="sm:px-6 sm:py-4">
                Book a Free Strategy Call <ArrowRight />
              </Button>
              <Button
                href={site.whatsappHref}
                external
                variant="ghost"
                className="text-white/80 sm:px-6 sm:py-4"
              >
                Message on WhatsApp
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5 lg:border-l lg:border-white/10 lg:pl-12">
          <Reveal delay={80}>
            <dl className="divide-y divide-white/10 border-y border-white/10">
              <div className="py-5">
                <dt className="label-mono text-white/35">Phone</dt>
                <dd className="mt-2 font-mono text-[1.05rem] text-white">
                  <a href={site.phoneHref} className="hover:text-streak-400 transition-colors">
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div className="py-5">
                <dt className="label-mono text-white/35">Email</dt>
                <dd className="mt-2 font-mono text-[1.05rem] break-all text-white">
                  <a href={site.emailHref} className="transition-colors hover:text-streak-400">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div className="py-5">
                <dt className="label-mono text-white/35">Response time</dt>
                <dd className="mt-2 text-[0.95rem] text-white/60">
                  Enquiries are reviewed on working days and answered in sequence.
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-[0.82rem] leading-relaxed text-white/35">
              Prefer writing first? Use the{" "}
              <a href="#/contact" className="underline decoration-white/30 underline-offset-4 hover:text-white/70">
                enquiry form
              </a>{" "}
              and include your goal, industry and budget band — it speeds up the first reply.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
