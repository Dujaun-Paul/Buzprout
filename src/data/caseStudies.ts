export type CaseStudyMetric = {
  label: string;
  before: string;
  after: string;
};

export type CaseStudy = {
  id: string;
  client: string;
  industry: string;
  location: string;
  problem: string;
  solution: string;
  metrics: CaseStudyMetric[];
  image: string;
  url?: string;
  projectTitle: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "beauty-refinery-ja",
    client: "The Beauty Refinery JA",
    industry: "Beauty",
    location: "Jamaica",
    problem:
      "The booking flow looked finished, but appointments only lived in browser memory. Mock admin data reset on refresh, and the owner had no reliable way to manage services, staff, or retreat applications.",
    solution:
      "A multi-page public site with live booking, deposit policy at every step, retreat applications, and a privilege-based admin portal so staff manage catalog and appointments without touching code.",
    metrics: [
      { label: "Booking persistence", before: "Local state only", after: "Real appointments + refs" },
      { label: "Admin catalog edits", before: "Lost on refresh", after: "Saved in live database" },
      { label: "Team access control", before: "No staff governance", after: "Owner-managed privileges" },
    ],
    image: "/projects/thebeautyrefineryja.png",
    url: "https://www.thebeautyrefineryja.com/",
    projectTitle: "The Beauty Refinery JA",
  },
  {
    id: "smart-xpress",
    client: "Smart Xpress Courier",
    industry: "Logistics",
    location: "Guyana",
    problem:
      "Customers kept calling and messaging to ask where their Miami shipments were. The team spent hours a day on repeat status updates.",
    solution:
      "A customer-facing tracking site with rates, shipment lookup, and clear support paths so people could self-serve.",
    metrics: [
      { label: "Daily status calls", before: "~30", after: "~12" },
      { label: "Customer self-service lookups", before: "Rare", after: "Primary channel" },
      { label: "Time on repeat WhatsApp updates", before: "10+ hrs/week", after: "Under 4 hrs/week" },
    ],
    image: "/projects/smartxpress.png",
    url: "https://smartxpress.net",
    projectTitle: "Smart Xpress Courier",
  },
  {
    id: "yaadex",
    client: "Delivery operators using Yaadex",
    industry: "Logistics",
    location: "Jamaica",
    problem:
      "Orders, rider updates, and customer messages lived in separate WhatsApp threads. Dispatchers lost track as volume grew.",
    solution:
      "Yaadex: one dispatch dashboard for jobs, riders, and customer updates instead of chasing chats.",
    metrics: [
      { label: "Orders lost in chat", before: "Common", after: "Tracked centrally" },
      { label: "Dispatcher visibility", before: "Fragmented", after: "Single live view" },
      { label: "Customer update delays", before: "Manual", after: "Automated status flow" },
    ],
    image: "/projects/yaadex.png",
    url: "https://yaadex.com",
    projectTitle: "Yaadex",
  },
  {
    id: "immers3d",
    client: "Tourism operator",
    industry: "Tourism",
    location: "Jamaica",
    problem:
      "Flat photos weren't enough. Visitors hesitated to book because they couldn't feel confident about the experience.",
    solution:
      "Immersive 3D property previews on the site so tourists could explore before they committed.",
    metrics: [
      { label: "Booking enquiry quality", before: "Low intent browsers", after: "Warmer, informed leads" },
      { label: "Time spent on property pages", before: "Under 1 min", after: "3+ min average" },
      { label: "Pre-sale confidence", before: "Phone tag", after: "Explore then enquire" },
    ],
    image: "/projects/immers3d.png",
    url: "https://immers3-d.vercel.app/",
    projectTitle: "Immers3D",
  },
];
