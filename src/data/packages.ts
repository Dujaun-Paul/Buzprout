export type PackageTier = "entry" | "growth" | "systems" | "retainers";

export type Package = {
  title: string;
  tier: PackageTier;
  priceJmd: string;
  priceUsd: string;
  timeline?: string;
  outcome: string;
  includes: string[];
  ctaLabel: string;
  highlight?: boolean;
};

export type TierMeta = {
  id: PackageTier;
  label: string;
  level: string;
  audience: string;
};

export const PRICING_LADDER: TierMeta[] = [
  {
    id: "entry",
    label: "Entry",
    level: "Visibility",
    audience: "You need customers to find you online",
  },
  {
    id: "growth",
    label: "Growth",
    level: "Conversion",
    audience: "You need bookings, leads, and a site that sells",
  },
  {
    id: "systems",
    label: "Systems",
    level: "Operations",
    audience: "You need to run the business better, not just look good",
  },
  {
    id: "retainers",
    label: "Retainers",
    level: "Automation",
    audience: "You want steady improvements without starting from zero each month",
  },
];

export const PACKAGES: Package[] = [
  // Entry
  {
    title: "Starter Website",
    tier: "entry",
    priceJmd: "JMD $80,000 to $180,000",
    priceUsd: "~USD $500 to $1,200",
    timeline: "7 to 10 days",
    outcome: "Show up online with a site that makes you look credible and easy to contact.",
    includes: [
      "A professional presence customers can trust",
      "Works perfectly on phones",
      "Easy ways for people to reach you",
      "Found on Google with the basics covered",
    ],
    ctaLabel: "Get started",
  },
  {
    title: "Landing Page",
    tier: "entry",
    priceJmd: "JMD $50,000 to $120,000",
    priceUsd: "~USD $300 to $750",
    timeline: "3 to 5 days",
    outcome: "Turn ad clicks and promotions into real enquiries, fast.",
    includes: [
      "One focused page built to convert",
      "Clear calls to action that drive action",
      "See what's working with basic analytics",
      "Live in days, not weeks",
    ],
    ctaLabel: "Get started",
  },
  {
    title: "Brand Starter Kit",
    tier: "entry",
    priceJmd: "JMD $120,000 to $300,000",
    priceUsd: "~USD $750 to $1,900",
    outcome: "Look consistent everywhere so people remember and trust your business.",
    includes: [
      "A logo and look you can use with confidence",
      "Colors and fonts that work together",
      "Ready to use on cards and social posts",
      "Simple guide so your team stays on brand",
    ],
    ctaLabel: "Get started",
  },
  // Growth
  {
    title: "Business Website + Systems",
    tier: "growth",
    priceJmd: "JMD $250,000 to $600,000",
    priceUsd: "~USD $1,600 to $3,800",
    timeline: "3 to 6 weeks",
    outcome: "A site that captures leads and gives you a simple way to manage them.",
    includes: [
      "More enquiries without chasing every visitor manually",
      "Bookings and inquiries handled in one place",
      "See what's working with real analytics",
      "Fast enough that people don't bounce",
    ],
    ctaLabel: "Book a scoping call",
    highlight: true,
  },
  {
    title: "Tourism Website",
    tier: "growth",
    priceJmd: "JMD $300,000 to $800,000",
    priceUsd: "~USD $1,900 to $5,000",
    outcome: "Turn browsers into booking requests for tours, stays, and experiences.",
    includes: [
      "Showcase destinations and itineraries beautifully",
      "Capture booking interest without phone tag",
      "WhatsApp and payment paths that fit how you sell",
      "Gallery and content that sells the experience",
    ],
    ctaLabel: "Book a scoping call",
  },
  {
    title: "Logistics / Delivery Lite",
    tier: "growth",
    priceJmd: "JMD $500,000 to $1.5M",
    priceUsd: "~USD $3,200 to $9,500",
    outcome: "Give customers tracking and your team a dashboard instead of endless status calls.",
    includes: [
      "Customers see where their delivery is",
      "Your team updates status in one place",
      "Drivers get a simple mobile experience",
      "Fewer where is my order messages",
    ],
    ctaLabel: "Book a scoping call",
  },
  // Systems
  {
    title: "Custom Business Platform",
    tier: "systems",
    priceJmd: "JMD $1.2M to $5M+",
    priceUsd: "~USD $7,500+",
    timeline: "6 to 16+ weeks",
    outcome: "Software built around how your business actually runs.",
    includes: [
      "One system for staff, customers, and admins",
      "Data and workflows designed for your ops",
      "Connects to the tools you already use",
      "Launched with support so nothing falls through",
    ],
    ctaLabel: "Book a scoping call",
  },
  {
    title: "MVP / Startup Build",
    tier: "systems",
    priceJmd: "JMD $800K to $3M",
    priceUsd: "~USD $5,000 to $19,000",
    timeline: "8 to 14 weeks",
    outcome: "Validate your product idea with something real users can touch.",
    includes: [
      "Clarity on what to build first",
      "Design and build focused on learning fast",
      "Launch with room to iterate",
      "Support through the first 30 to 60 days",
    ],
    ctaLabel: "Book a scoping call",
  },
  // Retainers
  {
    title: "Website Care Plan",
    tier: "retainers",
    priceJmd: "JMD $15,000 to $50,000/month",
    priceUsd: "~USD $95 to $315/month",
    outcome: "Your site stays online, secure, and current without you thinking about it.",
    includes: [
      "Hosting and backups handled for you",
      "Small updates when you need them",
      "Security and performance looked after",
      "Someone to call when something breaks",
    ],
    ctaLabel: "Talk about a care plan",
  },
  {
    title: "Business Systems Retainer",
    tier: "retainers",
    priceJmd: "JMD $50,000 to $250,000/month",
    priceUsd: "~USD $315 to $1,600/month",
    outcome: "Keep improving your software without scoping a new project every time.",
    includes: [
      "Regular fixes and feature improvements",
      "Monitoring so issues get caught early",
      "Predictable monthly development time",
      "A team that already knows your system",
    ],
    ctaLabel: "Talk about a retainer",
  },
  {
    title: "Growth Retainer",
    tier: "retainers",
    priceJmd: "JMD $150,000 to $500,000/month",
    priceUsd: "~USD $950 to $3,150/month",
    outcome: "Continuous product growth, automation, and optimization as your business scales.",
    includes: [
      "Ongoing feature development on your roadmap",
      "Automation that cuts manual work over time",
      "Funnels and analytics tuned for results",
      "A partner invested in your long term growth",
    ],
    ctaLabel: "Talk about a retainer",
  },
];

export const ADD_ONS = [
  { label: "Extra pages", price: "JMD $10K to $30K each" },
  { label: "Booking system", price: "JMD $50K to $200K" },
  { label: "Admin dashboard", price: "JMD $100K+" },
  { label: "API integrations", price: "JMD $80K to $300K" },
  { label: "AI chatbot", price: "JMD $100K to $500K" },
  { label: "Speed optimization", price: "JMD $30K to $100K" },
];

export function packagesByTier(tier: PackageTier): Package[] {
  return PACKAGES.filter((p) => p.tier === tier);
}
