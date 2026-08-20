import type { ReactNode } from "react";
import { Button, Eyebrow, MomentumStreak, Reveal } from "../components/primitives";
import { site } from "../lib/site";

type Section = { h: string; p?: string; ul?: string[] };

type Doc = {
  slug: string;
  title: string;
  updated: string;
  intro: string;
  sections: Section[];
};

/* ════════════════════════════════════════════════════════════
   LEGAL DOCUMENTS
   Written as editable placeholders. Each carries a review notice so
   a qualified professional can ratify before publication.
   ════════════════════════════════════════════════════════════ */
export const legalDocs: Doc[] = [
  {
    slug: "/privacy",
    title: "Privacy Policy",
    updated: "Draft v1",
    intro:
      "This policy explains what information ZEAL collects through this website and while providing marketing services, how it is used, and the choices available to you.",
    sections: [
      {
        h: "1. Who we are",
        p: `ZEAL ("we", "us", "our") is a digital marketing and growth agency. You can contact us at ${site.email} or on ${site.phoneDisplay} for any privacy question or request.`,
      },
      {
        h: "2. Information we collect",
        ul: [
          "Enquiry and contact forms: name, business name, email address, phone number, website, industry, services of interest, budget range, business goal and any message you provide.",
          "Booking requests: the details you supply when arranging a strategy call, including preferred times and contact information.",
          "Communications: records of emails, calls and messages exchanged with us so we can continue conversations accurately.",
          "Technical information: IP address (truncated where supported), browser and device type, referring page, pages visited and approximate location derived from IP.",
          "Analytics data: page views, sessions, engagement events and campaign attribution signals.",
          "Cookies and similar technologies: see our Cookie Policy for the categories used and how to control them.",
        ],
      },
      {
        h: "3. How we use information",
        ul: [
          "To respond to enquiries, prepare proposals and provide requested services.",
          "To schedule, reschedule and follow up on strategy calls.",
          "To operate, secure and improve this website and understand how it is used.",
          "To measure the performance of our own marketing and attribute enquiries to campaigns.",
          "To comply with legal, accounting and regulatory obligations, and to prevent misuse.",
        ],
      },
      {
        h: "4. Legal bases for processing",
        ul: [
          "Consent — where you submit a form, accept cookies, or opt in to marketing communication.",
          "Legitimate interests — operating and securing the website, improving our services, and business development, balanced against your rights.",
          "Contract — where processing is necessary to deliver services you have engaged us for.",
          "Legal obligation — where retention or disclosure is required by law.",
        ],
      },
      {
        h: "5. Marketing and analytics tools",
        p: "We use analytics and advertising measurement tools to understand traffic sources and campaign effectiveness. These tools may set cookies or similar identifiers. Where consent is required, data is only processed after you opt in. Aggregated, non-identifying statistics may be used to improve our content and services.",
      },
      {
        h: "6. Third-party services",
        ul: [
          "Email and messaging providers used to receive and reply to enquiries.",
          "Scheduling and calendar tools used for booking calls.",
          "Analytics and advertising platforms used for measurement and attribution.",
          "Cloud hosting, storage and security providers supporting this website.",
          "Professional advisers, auditors and authorities where disclosure is lawful and necessary.",
        ],
      },
      {
        h: "7. International transfers",
        p: "Some providers process data outside your country. Where that happens, we rely on appropriate safeguards such as standard contractual clauses or equivalent mechanisms, and we select providers with documented security practices.",
      },
      {
        h: "8. Retention",
        p: "Enquiry data is retained only as long as needed to respond and, where a relationship follows, for the duration of the engagement plus any period required for legal, tax or accounting purposes. Analytics data is retained according to the configured retention window of each tool.",
      },
      {
        h: "9. Your rights",
        ul: [
          "Request access to the personal data we hold about you.",
          "Request correction of inaccurate or incomplete data.",
          "Request deletion where there is no overriding legal basis to retain it.",
          "Object to or restrict certain processing, including direct marketing.",
          "Withdraw consent at any time where processing relies on it.",
          "Request a portable copy of data you provided to us.",
          "Lodge a complaint with your local data protection authority.",
        ],
      },
      {
        h: "10. Security",
        p: "We apply technical and organisational measures appropriate to the sensitivity of the information, including access restrictions and encrypted transmission. No method of transmission over the internet is completely secure, so please avoid sending unnecessary sensitive details through website forms.",
      },
      {
        h: "11. Children",
        p: "Our services are directed at businesses. We do not knowingly collect personal data from children. If you believe a child has provided data, contact us and we will delete it.",
      },
      {
        h: "12. Changes to this policy",
        p: "We may update this policy as our tools or practices change. The version date at the top will be revised and material changes will be highlighted on this page.",
      },
      {
        h: "13. Contact",
        p: `For privacy requests, email ${site.email} with the subject line "Privacy request" and include enough detail for us to identify the relevant records.`,
      },
    ],
  },
  {
    slug: "/terms",
    title: "Terms & Conditions",
    updated: "Draft v1",
    intro:
      "These terms govern the use of this website and, once agreed in a signed proposal or work order, the marketing services ZEAL provides.",
    sections: [
      {
        h: "1. Website usage",
        ul: [
          "This website is provided for information and enquiry purposes.",
          "You agree not to attempt to disrupt, overload, scrape or gain unauthorised access to the site or related systems.",
          "Content is provided on an 'as is' basis without warranty of uninterrupted availability.",
        ],
      },
      {
        h: "2. Services",
        p: "Services are defined in a written proposal, work order or retainer agreement specifying scope, deliverables, timelines, cadence and fees. Nothing on this website constitutes a binding offer or a commitment to specific results.",
      },
      {
        h: "3. Quotations, fees and payment",
        ul: [
          "Pricing is customised according to business goals, scope, channels, creative requirements, campaign complexity, advertising budget, growth stage and required level of support.",
          "Agency fees are separate from advertising and media spend. Media budgets are paid to the relevant platforms unless expressly agreed otherwise in writing.",
          "Payment terms, invoicing frequency, taxes and late-payment consequences are set out in the engagement document.",
          "Third-party costs such as platform fees, software licences, stock assets, paid tools or production costs are billed separately unless included in writing.",
        ],
      },
      {
        h: "4. Client responsibilities",
        ul: [
          "Providing accurate business information, brand assets, access credentials and approvals within agreed timelines.",
          "Maintaining legal compliance of your products, claims, pricing and content, including industry-specific regulations.",
          "Owning and maintaining advertising, analytics and platform accounts, and ensuring payment methods remain valid.",
          "Nominating a decision-maker for approvals; delayed approvals may shift timelines.",
        ],
      },
      {
        h: "5. Intellectual property",
        ul: [
          "On receipt of full payment, deliverables created specifically for the engagement are licensed or assigned to you as stated in the engagement document.",
          "ZEAL retains rights to its pre-existing frameworks, methodologies, templates, internal tooling and general know-how.",
          "Third-party assets such as fonts, music, stock media and software are licensed under their own terms and pass-through fees may apply.",
          "We may reference the nature of the work in a confidential capability discussion unless a written non-disclosure agreement restricts it.",
        ],
      },
      {
        h: "6. Limitation of liability",
        ul: [
          "Marketing outcomes depend on factors outside our control, including market conditions, competition, pricing, product-market fit, platform behaviour and seasonality.",
          "We do not guarantee specific metrics such as leads, conversions, revenue, rankings or return on ad spend.",
          "To the maximum extent permitted by law, our aggregate liability under an engagement is limited to the fees paid for the affected scope during the defined period.",
          "We are not liable for indirect or consequential losses, including lost profits or lost opportunity.",
        ],
      },
      {
        h: "7. Third-party platforms",
        p: "Advertising, search, social and analytics platforms operate under their own terms and may change policies, algorithms, pricing or availability at any time. We adapt to these changes but are not responsible for platform decisions or outages.",
      },
      {
        h: "8. Suspension, cancellation and termination",
        ul: [
          "Notice periods and termination rights are defined in the engagement document.",
          "Work completed and third-party costs incurred up to the termination date remain payable.",
          "Media spend already committed to platforms is generally non-refundable.",
          "Either party may terminate immediately for material breach that is not remedied within the notice period stated in the engagement document.",
        ],
      },
      {
        h: "9. Confidentiality",
        p: "Each party will keep the other's non-public commercial, technical and performance information confidential and use it only for the purposes of the engagement, subject to lawful disclosure requirements.",
      },
      {
        h: "10. Governing law",
        p: "The governing law and dispute resolution venue are specified in the engagement document. Where nothing is specified, the laws applicable at our registered place of business apply.",
      },
      {
        h: "11. Changes",
        p: "We may update these terms. The version in force at the time an engagement is signed applies to that engagement.",
      },
    ],
  },
  {
    slug: "/cookies",
    title: "Cookie Policy",
    updated: "Draft v1",
    intro:
      "This policy explains the categories of cookies and similar technologies this website may use, why they exist, and how you can control them.",
    sections: [
      {
        h: "1. What cookies are",
        p: "Cookies are small files placed on your device by a website. Similar technologies include local storage, pixels and software development kits used by embedded analytics or advertising tools.",
      },
      {
        h: "2. Necessary cookies",
        ul: [
          "Required for the website to function, to keep the service secure and to remember security and preference choices.",
          "Include load-balancing, session integrity and spam-prevention technologies.",
          "These cannot be switched off from within the site because the site would not operate reliably without them.",
        ],
      },
      {
        h: "3. Analytics",
        ul: [
          "Help us understand which pages are read, where visitors come from and where they encounter problems.",
          "Used to improve content, navigation and performance of our own marketing.",
          "May be configured to store identifiers and behavioural events; where consent is required these are only set after you opt in.",
        ],
      },
      {
        h: "4. Advertising and marketing",
        ul: [
          "Used to measure campaign effectiveness and attribute enquiries to a source.",
          "May support audience building and frequency management on advertising platforms.",
          "Set only where consent has been given or where a legitimate measurement purpose is permitted by applicable law.",
        ],
      },
      {
        h: "5. Functional and preference",
        p: "Remember choices such as accessibility settings, dismissed notices and form drafts so you do not have to set them repeatedly.",
      },
      {
        h: "6. Controlling cookies",
        ul: [
          "Use the cookie preferences notice on this site, where available, to accept or reject non-essential categories.",
          "Browser settings allow you to block or delete cookies entirely; the help section of your browser explains how.",
          "Mobile browsers and privacy extensions offer equivalent controls.",
          "Advertising platforms provide their own opt-out tools for interest-based advertising.",
        ],
      },
      {
        h: "7. Effect of blocking",
        p: "Blocking necessary cookies may break parts of the website. Blocking analytics or advertising cookies does not restrict access to content, but reduces the accuracy of our measurement.",
      },
      {
        h: "8. Updates",
        p: "This policy is updated when tools or categories change. Continued use of the site after changes means the updated policy applies to your visit.",
      },
      {
        h: "9. Contact",
        p: `Questions about cookies can be sent to ${site.email}.`,
      },
    ],
  },
  {
    slug: "/disclaimer",
    title: "Disclaimer",
    updated: "Draft v1",
    intro:
      "Please read this disclaimer carefully in connection with the information and materials published on this website.",
    sections: [
      {
        h: "1. No guarantee of outcomes",
        p: "ZEAL does not guarantee any specific marketing outcome, including leads, conversions, sales, revenue, website traffic, search rankings, engagement rates, return on ad spend or timelines. Marketing results depend on multiple variables, many of which are outside our control.",
      },
      {
        h: "2. Factors that affect results",
        ul: [
          "Market conditions, demand cycles, competition and seasonality.",
          "Product or offer quality, pricing, margins and product-market fit.",
          "Brand awareness, existing reputation and review sentiment.",
          "Sales process, follow-up speed and internal capacity to handle demand.",
          "Website, checkout or funnel performance and technical stability.",
          "Creative volume and approval turnaround.",
          "Advertising budget, bid landscape and auction competition.",
          "Platform policy, algorithm and targeting changes by third parties.",
        ],
      },
      {
        h: "3. Illustrative material",
        p: "Dashboards, charts, frameworks, wireframes and creative concepts shown on this website are illustrative and conceptual. They demonstrate structure and methodology only. They are not client data, historical results or forecasts, and should not be interpreted as an indication of future performance.",
      },
      {
        h: "4. No professional advice",
        p: "Website content is general marketing information, not legal, financial, tax, medical or regulatory advice. Businesses in regulated categories must obtain their own compliance review before publishing any claim, offer or advertisement.",
      },
      {
        h: "5. Third-party platforms",
        p: "References to platforms, tools or networks are descriptive. Trademarks belong to their respective owners, and their availability, policies and pricing may change without notice.",
      },
      {
        h: "6. External links",
        p: "Where we link to third-party sites, we do so for convenience. We do not control and are not responsible for their content, security or privacy practices.",
      },
      {
        h: "7. Contact",
        p: `If anything on this site appears inaccurate or unclear, contact ${site.email} and we will review it.`,
      },
    ],
  },
];

function DocLayout({ doc }: { doc: Doc }) {
  return (
    <article>
      <div className="on-dark relative isolate overflow-hidden bg-ink-900 pt-[68px] text-white">
        <div aria-hidden="true" className="rule-grid-dark absolute inset-0 opacity-70" />
        <MomentumStreak width="26%" angle={19} opacity={0.35} className="hidden md:block" />
        <div className="shell relative py-14 md:py-20">
          <Reveal>
            <div className="label-mono flex items-center gap-3 text-white/45">
              <span className="h-px w-8 bg-streak-500" aria-hidden="true" />
              Legal
            </div>
            <h1 className="mt-6 text-[clamp(2rem,4.6vw,3.2rem)] leading-[1] font-bold tracking-[-0.04em]">
              {doc.title}
            </h1>
            <p className="mt-6 max-w-2xl text-[0.98rem] leading-relaxed text-white/60">{doc.intro}</p>
            <p className="label-mono mt-8 text-white/35">Document status · {doc.updated}</p>
          </Reveal>
        </div>
      </div>

      <div className="border-b border-mist-200 bg-mist-50 px-5 py-4 md:px-10">
        <div className="shell flex flex-wrap items-center gap-x-6 gap-y-2 px-0">
          <span className="label-mono text-ink-400">On this page</span>
          {legalDocs.map((d) => (
            <a
              key={d.slug}
              href={`#${d.slug}`}
              className={
                d.slug === doc.slug
                  ? "label-mono text-ink-900"
                  : "label-mono text-ink-400 transition-colors hover:text-ink-900"
              }
              aria-current={d.slug === doc.slug ? "page" : undefined}
            >
              {d.title}
            </a>
          ))}
        </div>
      </div>

      <div className="border-b border-mist-200 bg-white py-14 md:py-20">
        <div className="shell grid gap-10 lg:grid-cols-12">
          <nav aria-label="Sections" className="lg:col-span-3">
            <p className="label-mono text-ink-400">CONTENTS</p>
            <ol className="mt-4 space-y-2">
              {doc.sections.map((s, i) => (
                <li key={s.h}>
                  <a
                    href={`#sec-${i}`}
                    className="text-[0.85rem] leading-snug text-ink-500 transition-colors hover:text-ink-900"
                  >
                    {s.h}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="lg:col-span-9 lg:border-l lg:border-mist-200 lg:pl-10">
            <div className="border-l-2 border-volt-500 bg-mist-50 p-5">
              <Eyebrow>Review notice</Eyebrow>
              <p className="mt-3 text-[0.88rem] leading-relaxed text-ink-500">
                This document is an editable draft prepared for launch. It has not yet been reviewed
                by a qualified legal professional and should be ratified for your operating
                jurisdiction before being relied upon.
              </p>
            </div>

            {doc.sections.map((s, i) => (
              <Reveal key={s.h} as="section" className="mt-10 scroll-mt-28">
                <h2
                  id={`sec-${i}`}
                  className="font-display text-[1.2rem] tracking-[-0.025em] text-ink-900 md:text-[1.3rem]"
                >
                  {s.h}
                </h2>
                {s.p && <p className="mt-3.5 max-w-3xl text-[0.94rem] leading-relaxed text-ink-500">{s.p}</p>}
                {s.ul && (
                  <ul className="mt-4 max-w-3xl space-y-3">
                    {s.ul.map((li) => (
                      <li key={li} className="flex gap-3 text-[0.92rem] leading-relaxed text-ink-500">
                        <span aria-hidden="true" className="mt-[0.55em] h-1 w-1 shrink-0 rotate-45 bg-streak-500" />
                        {li}
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}

            <div className="mt-14 border-t border-mist-200 pt-8">
              <p className="text-[0.9rem] leading-relaxed text-ink-500">
                Questions about this document? Write to{" "}
                <a href={site.emailHref} className="font-mono text-[0.86rem] text-ink-900 underline underline-offset-4">
                  {site.email}
                </a>
                .
              </p>
              <div className="mt-6">
                <Button href="#/contact" variant="ghost">
                  Contact ZEAL
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function LegalPage({ slug }: { slug: string }) {
  const doc = legalDocs.find((d) => d.slug === slug) ?? legalDocs[0];
  return <DocLayout doc={doc} />;
}

export function LegalIndex(): ReactNode {
  return null;
}
