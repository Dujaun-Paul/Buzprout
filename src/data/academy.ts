export const ACADEMY = {
  title: "Build Your Business Online",
  tagline:
    "Step-by-step courses teach you to launch a credible site yourself, then come back when you need us to build it properly.",
  forWho: [
    "Sole traders and side hustlers",
    "Early startups validating an idea",
    "Anyone who asked if ChatGPT can replace an agency",
  ],
  notFor:
    "Operators who need booking systems, dashboards, or custom software should look at Buzprout Flex or a full build instead.",
  graduateOffer: "JMD 20,000 off your first Flex deposit for course graduates",
} as const;

export const COURSE_MODULES = [
  {
    number: "01",
    title: "What to build first",
    desc: "Brochure site, landing page, or when you actually need a system. Self-qualify before you spend.",
  },
  {
    number: "02",
    title: "Copy that sells",
    desc: "Use AI to draft headlines and about pages, then edit like a human so it sounds like you.",
  },
  {
    number: "03",
    title: "Pick your stack",
    desc: "When Wix or Framer is enough and when DIY stops making sense.",
  },
  {
    number: "04",
    title: "Launch a site",
    desc: "Step-by-step walkthrough on one builder so you are not drowning in options.",
  },
  {
    number: "05",
    title: "WhatsApp and contact flows",
    desc: "How Caribbean customers actually reach you and book.",
  },
  {
    number: "06",
    title: "Google visibility basics",
    desc: "Business Profile, simple SEO, and showing up when people search.",
  },
  {
    number: "07",
    title: "Look credible",
    desc: "Fonts, colors, mobile checks, and trust signals that do not scream template.",
  },
  {
    number: "08",
    title: "When to get help",
    desc: "Honest signs you have outgrown DIY and what Flex or a full build looks like next.",
  },
];

export const COURSE_TIERS = [
  {
    title: "Self-paced",
    priceJmd: "JMD $15,000 to $25,000",
    priceUsd: "~USD $95 to $160",
    includes: [
      "All video modules",
      "Templates and checklists",
      "Community access",
    ],
    ctaLabel: "Join waitlist",
  },
  {
    title: "Live cohort",
    priceJmd: "JMD $35,000 to $50,000",
    priceUsd: "~USD $220 to $315",
    highlight: true,
    includes: [
      "Everything in self-paced",
      "Live Q&A over 4 weeks",
      "Site reviews in group sessions",
      "Pay in 3 installments available",
    ],
    ctaLabel: "Join waitlist",
  },
  {
    title: "Course + critique",
    priceJmd: "JMD $60,000 to $80,000",
    priceUsd: "~USD $380 to $510",
    includes: [
      "Full cohort access",
      "One 1:1 site review call",
      "Written action plan for next steps",
    ],
    ctaLabel: "Join waitlist",
  },
];
