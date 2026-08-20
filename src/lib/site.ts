/**
 * ZEAL — central content file.
 * Everything a marketer may want to edit lives here.
 */

export const site = {
  name: "ZEAL",
  positioning: "A specialized growth partner for ambitious businesses.",
  description:
    "A specialized digital growth agency helping ambitious businesses build measurable momentum.",
  phoneDisplay: "9360988110",
  phoneHref: "tel:+919360988110",
  whatsappHref: "https://wa.me/919360988110?text=Hi%20ZEAL%2C%20I%27d%20like%20to%20discuss%20a%20growth%20plan.",
  email: "zealagency7@gmail.com",
  emailHref: "mailto:zealagency7@gmail.com?subject=Growth%20enquiry%20for%20ZEAL",
  /* The LinkedIn company URL has not been supplied yet — the UI states this plainly
     instead of inventing or dead-linking a URL. */
  linkedinPending: true,
};

export type Route = "/" | "/about" | "/capabilities" | "/privacy" | "/terms" | "/cookies" | "/disclaimer";

export const nav: { label: string; route: Route; hash?: string }[] = [
  { label: "Home", route: "/" },
  { label: "Services", route: "/", hash: "#services" },
  { label: "Industries", route: "/", hash: "#industries" },
  { label: "Approach", route: "/", hash: "#approach" },
  { label: "Capabilities", route: "/capabilities" },
  { label: "Engagement", route: "/", hash: "#engagement" },
  { label: "FAQ", route: "/", hash: "#faq" },
];

export const disciplines = [
  "Strategy",
  "Creative",
  "Performance",
  "Automation",
  "Analytics",
] as const;

export const services = [
  {
    n: "01",
    title: "Social Media Marketing",
    blurb:
      "Content strategy, social presence, audience engagement and platform-specific growth.",
    detail: ["Content strategy", "Channel management", "Community & engagement", "Platform growth"],
    accent: "volt",
  },
  {
    n: "02",
    title: "Performance Marketing",
    blurb:
      "Meta Ads, Google Ads, YouTube Ads, campaign strategy, optimization and performance management.",
    detail: ["Meta Ads", "Google Ads", "YouTube Ads", "Campaign management"],
    accent: "streak",
  },
  {
    n: "03",
    title: "Content & Creative Production",
    blurb:
      "Reels, short-form video, advertising creatives, graphics, UGC-style concepts, campaign content and copy.",
    detail: ["Short-form video", "Ad creative", "Campaign copy", "Visual systems"],
    accent: "volt",
  },
  {
    n: "04",
    title: "SEO & Organic Growth",
    blurb:
      "Technical SEO, content SEO, local SEO, search strategy and long-term organic growth.",
    detail: ["Technical SEO", "Content SEO", "Local SEO", "Search strategy"],
    accent: "volt",
  },
  {
    n: "05",
    title: "Website & Conversion Optimization",
    blurb:
      "High-converting websites, landing pages, UX improvements, conversion optimization and analytics.",
    detail: ["Websites", "Landing pages", "UX & CRO", "Analytics setup"],
    accent: "streak",
  },
  {
    n: "06",
    title: "Brand Strategy & Positioning",
    blurb:
      "Market research, competitor analysis, positioning, messaging, identity and go-to-market thinking.",
    detail: ["Market research", "Positioning", "Messaging", "Go-to-market"],
    accent: "volt",
  },
  {
    n: "07",
    title: "AI Automation & AI Marketing",
    blurb:
      "AI-powered workflows, customer interactions, marketing automation, AI agents, process automation and intelligent operational systems.",
    detail: ["AI workflows", "AI agents", "Marketing automation", "Process automation"],
    accent: "streak",
  },
  {
    n: "08",
    title: "Marketing Analytics & Growth Strategy",
    blurb:
      "Dashboards, attribution, campaign measurement, customer journey analysis, strategic insights and continuous optimization.",
    detail: ["Dashboards", "Attribution", "Journey analysis", "Continuous optimization"],
    accent: "volt",
  },
] as const;

export const industries = [
  {
    key: "real-estate",
    n: "01",
    title: "Real Estate & Property Development",
    blurb:
      "Campaigns and digital systems for launches, demand generation, visibility and conversion.",
    points: ["Project launches", "Demand generation", "Lead qualification", "Sales enablement"],
    metric: "LAUNCH READINESS",
  },
  {
    key: "edtech",
    n: "02",
    title: "EdTech & Coaching",
    blurb: "Performance marketing, content, SEO, funnel optimization and growth strategy.",
    points: ["Enrolment funnels", "Cohort launches", "Content engines", "Organic search"],
    metric: "ENROLMENT FUNNEL",
  },
  {
    key: "healthcare",
    n: "03",
    title: "Healthcare",
    blurb:
      "Digital visibility, local SEO, performance campaigns, brand presence and conversion-focused experiences.",
    points: ["Local visibility", "Service pages", "Appointment paths", "Trust signals"],
    metric: "PATIENT JOURNEY",
  },
  {
    key: "d2c",
    n: "04",
    title: "D2C & E-commerce",
    blurb: "Performance marketing, creative production, CRO, content and analytics.",
    points: ["Paid acquisition", "Creative testing", "CRO", "Retention loops"],
    metric: "UNIT ECONOMICS",
  },
  {
    key: "saas",
    n: "05",
    title: "B2B SaaS & Technology",
    blurb: "SEO, content, paid acquisition, website optimization, positioning and growth analytics.",
    points: ["Category SEO", "Demand capture", "Demo conversion", "Positioning"],
    metric: "PIPELINE MOTION",
  },
] as const;

export const processSteps = [
  {
    n: "01",
    title: "Discover",
    body:
      "Understand the business, audience, market, competitors, current performance and growth opportunities.",
    outputs: ["Audit", "Market & competitor view", "Opportunity map"],
  },
  {
    n: "02",
    title: "Strategize",
    body:
      "Build a customized growth strategy aligned with business goals, positioning, channels and measurable objectives.",
    outputs: ["Growth strategy", "Channel plan", "Measurement framework"],
  },
  {
    n: "03",
    title: "Execute",
    body:
      "Launch campaigns, create content, optimize websites, implement automation and execute the growth strategy.",
    outputs: ["Campaigns live", "Content system", "Automation & CRO"],
  },
  {
    n: "04",
    title: "Measure",
    body:
      "Track performance, analyze results, identify opportunities and continuously optimize the system.",
    outputs: ["Dashboards", "Insight reviews", "Iteration cycles"],
  },
] as const;

export const whyZeal = [
  {
    title: "Strategy before execution",
    body: "Every channel decision follows a positioning and measurement decision. Tactics come last.",
  },
  {
    title: "Specialized capabilities",
    body: "Eight disciplines operated as one system instead of eight disconnected vendors.",
  },
  {
    title: "Multi-channel thinking",
    body: "Paid, organic, creative and website treated as one acquisition surface with shared economics.",
  },
  {
    title: "Creative + performance together",
    body: "Creative is built against a hypothesis, shipped, measured and replaced — not admired.",
  },
  {
    title: "AI-powered workflows",
    body: "Automation applied to research, production, follow-ups and reporting where it genuinely removes waste.",
  },
  {
    title: "Data-driven decisions",
    body: "A single source of truth for spend, pipeline and outcomes so debates end in evidence.",
  },
  {
    title: "Transparent reporting",
    body: "Live dashboards and plain-language reviews. No hidden metrics, no selective screenshots.",
  },
  {
    title: "Continuous optimization",
    body: "Growth is a loop, not a launch. We re-plan on a fixed cadence against real data.",
  },
] as const;

export const layers = [
  {
    n: "L1",
    name: "Strategy",
    body: "Research, positioning, growth strategy, audience analysis.",
    items: ["Market & competitor research", "Positioning & messaging", "Growth roadmaps", "Audience & ICP definition"],
  },
  {
    n: "L2",
    name: "Creative",
    body: "Content, advertising creative, video, messaging and visual systems.",
    items: ["Campaign concepts", "Ad creative & variants", "Short-form video", "Brand visual language"],
  },
  {
    n: "L3",
    name: "Performance",
    body: "Paid media, SEO, CRO and acquisition optimization.",
    items: ["Paid media management", "SEO programmes", "CRO & testing", "Acquisition economics"],
  },
  {
    n: "L4",
    name: "Technology",
    body: "Websites, analytics, AI automation, integrations and marketing systems.",
    items: ["Websites & landing systems", "Analytics & attribution", "AI automation & agents", "CRM / tool integrations"],
  },
] as const;

export const engagementModels = [
  {
    name: "Growth Retainer",
    tag: "MOST REQUESTED",
    for: "For businesses seeking ongoing marketing execution and optimization.",
    includes: [
      "Strategy",
      "Social media",
      "Performance marketing",
      "Content & creative",
      "SEO",
      "Website / CRO",
      "Analytics",
      "Optimization",
    ],
    cta: "Build My Growth Plan",
    featured: false,
  },
  {
    name: "Project / Campaign Engagement",
    tag: "FOCUSED SCOPE",
    for: "For defined initiatives with a start, an end and a clear deliverable.",
    includes: [
      "Product launches",
      "Real estate project launches",
      "Campaigns",
      "Website development",
      "Brand positioning",
      "SEO projects",
      "AI automation implementation",
    ],
    cta: "Discuss a Project",
    featured: false,
  },
  {
    name: "Scale Partnership",
    tag: "DEEPEST ENGAGEMENT",
    for: "Premium ongoing engagement for businesses seeking a deeper strategic growth partnership.",
    includes: [
      "Dedicated strategy",
      "Multi-channel marketing",
      "Performance marketing",
      "Creative production",
      "CRO",
      "SEO",
      "AI automation",
      "Advanced analytics",
      "Strategic reviews",
    ],
    cta: "Talk to Our Growth Team",
    featured: true,
  },
] as const;

export const pricingFactors = [
  "Business objectives",
  "Scope",
  "Channels",
  "Creative requirements",
  "Campaign complexity",
  "Advertising budget",
  "Growth stage",
  "Required level of support",
] as const;

export const faqs = [
  {
    q: "What services does your agency provide?",
    a: "ZEAL operates eight capabilities as one system: social media marketing, performance marketing, content and creative production, SEO and organic growth, website and conversion optimization, brand strategy and positioning, AI automation and AI marketing, and marketing analytics with growth strategy. Most clients use a combination rather than a single service.",
  },
  {
    q: "Which industries do you specialize in?",
    a: "Our primary focus is real estate and property development, EdTech and coaching, healthcare, D2C and e-commerce, and B2B SaaS and technology. These are the categories where our playbooks, creative formats and measurement models are most developed.",
  },
  {
    q: "Do you work with businesses outside these industries?",
    a: "Yes. When a business has a clear growth objective, a workable offer and realistic expectations around timeline and budget, the underlying system — strategy, creative, performance, technology, measurement — transfers well. We will tell you honestly if we are not the right fit.",
  },
  {
    q: "How do you determine the right strategy for our business?",
    a: "Through the Discover phase: business and revenue model review, audience and demand analysis, competitor and channel audit, and a review of current performance data. That produces a growth strategy with prioritized channels, creative angles, measurement framework and a phased execution plan.",
  },
  {
    q: "What are your engagement models?",
    a: "Three: a Growth Retainer for ongoing execution and optimization, a Project or Campaign Engagement for defined initiatives such as launches, websites, SEO programmes or AI automation builds, and a Scale Partnership for a deeper, dedicated strategic relationship.",
  },
  {
    q: "Is advertising spend included in your agency fee?",
    a: "No. Agency fees and advertising / media spend are always separated and reported separately. You retain control of media accounts and budgets; our fee covers strategy, execution, creative, optimization and reporting.",
  },
  {
    q: "How long does it take to see results?",
    a: "It depends on channel, category and starting position. Paid media typically produces directional signal in the first weeks as data accumulates; SEO, content and brand-driven compound growth take longer. We set expectation bands per channel before we start rather than promising timelines we cannot stand behind.",
  },
  {
    q: "Will we receive performance reports?",
    a: "Yes. Every engagement includes dashboard access and scheduled reviews covering spend, reach, engagement, traffic, conversion rate, acquisition cost and return on ad spend where applicable — with commentary on what changed, what we learned and what we are doing next.",
  },
  {
    q: "How do we get started?",
    a: "Book a free strategy call or send an enquiry. We review your business, current state and objectives, then propose an engagement shape, scope and pricing. If the fit is not right, we will say so and point you in a better direction.",
  },
] as const;

export const industryOptions = [
  "Real Estate & Property Development",
  "EdTech & Coaching",
  "Healthcare",
  "D2C & E-commerce",
  "B2B SaaS & Technology",
  "Other",
];

export const serviceOptions = [
  "Social Media Marketing",
  "Performance Marketing",
  "Content & Creative Production",
  "SEO & Organic Growth",
  "Website & Conversion Optimization",
  "Brand Strategy & Positioning",
  "AI Automation & AI Marketing",
  "Marketing Analytics & Growth Strategy",
  "Not sure yet — advise me",
];

export const budgetOptions = [
  "Under ₹50,000 / month",
  "₹50,000 – ₹1,50,000 / month",
  "₹1,50,000 – ₹4,00,000 / month",
  "₹4,00,000+ / month",
  "Project-based (one-time)",
  "Still deciding",
];
