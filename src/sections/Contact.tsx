import EnquiryForm from "../components/EnquiryForm";
import { LinkedInButton } from "../components/Brand";
import { Eyebrow, Reveal } from "../components/primitives";
import { site } from "../lib/site";

const channels = [
  {
    k: "Call",
    label: site.phoneDisplay,
    href: site.phoneHref,
    note: "Mon–Fri, 10:00–18:30 IST",
    external: false,
  },
  {
    k: "Email",
    label: site.email,
    href: site.emailHref,
    note: "Best for detailed briefs",
    external: false,
  },
  {
    k: "WhatsApp",
    label: "Start a chat",
    href: site.whatsappHref,
    note: "Quick questions welcome",
    external: true,
  },
];

const nextSteps = [
  { n: "01", t: "You send the brief", d: "Form, email, call or WhatsApp — whichever is easiest." },
  { n: "02", t: "We review fit", d: "We assess category, objective and whether we can genuinely move it." },
  { n: "03", t: "Strategy call", d: "A working conversation on channels, scope and realistic timelines." },
  { n: "04", t: "Proposal", d: "Scope, deliverables, cadence and pricing — in writing." },
];

export default function Contact() {
  return (
    <section id="contact" className="relative border-b border-mist-200 bg-mist-50 py-20 md:py-28">
      <div aria-hidden="true" className="rule-grid absolute inset-0 opacity-60" />
      <div className="shell relative grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow index="12">Contact</Eyebrow>
            <h2 className="mt-5 text-[clamp(1.9rem,4.4vw,3.1rem)] leading-[1.02] tracking-[-0.04em] text-ink-900">
              Start the
              <br />
              conversation.
            </h2>
            <p className="mt-6 max-w-md text-[0.98rem] leading-relaxed text-ink-500">
              Qualified enquiries get a considered reply, not a template. If we are not the right
              partner for your problem, we will say so and suggest a better direction.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <ul className="mt-10 border-t border-mist-200">
              {channels.map((c) => (
                <li key={c.k} className="border-b border-mist-200">
                  <a
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center justify-between gap-4 py-5"
                  >
                    <span>
                      <span className="label-mono block text-ink-400">{c.k}</span>
                      <span className="mt-2 block font-mono text-[1.05rem] text-ink-900 transition-colors group-hover:text-volt-600">
                        {c.label}
                      </span>
                      <span className="mt-1 block text-[0.8rem] text-ink-300">{c.note}</span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="font-mono text-[1.1rem] text-ink-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-streak-500"
                    >
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <p className="label-mono text-ink-400">Also on</p>
              <LinkedInButton tone="light" className="mt-3" />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-10 border border-mist-200 bg-white p-6">
              <p className="label-mono text-ink-400">WHAT HAPPENS NEXT</p>
              <ol className="mt-5 space-y-5">
                {nextSteps.map((s) => (
                  <li key={s.n} className="flex gap-4">
                    <span className="font-mono text-[0.7rem] text-streak-500">{s.n}</span>
                    <span>
                      <span className="block font-display text-[1rem] tracking-[-0.02em] text-ink-900">
                        {s.t}
                      </span>
                      <span className="mt-1 block text-[0.85rem] leading-relaxed text-ink-400">
                        {s.d}
                      </span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={60}>
            <EnquiryForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
