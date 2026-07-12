export type Project = {
  title: string;
  category: string;
  desc: string;
  image: string;
  url: string;
  tags: string[];
  impact: string;
  industryIds: string[];
  metric?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Immers3D",
    category: "More bookings",
    desc: "Immersive 3D previews help tourists explore Jamaica before they book.",
    image: "/projects/immers3d.png",
    url: "https://immers3-d.vercel.app/",
    tags: ["Tourism", "Immersive previews", "Booking confidence", "Jamaica"],
    impact: "Experience before arrival",
    industryIds: ["tourism"],
    metric: "Higher booking enquiry rate",
  },
  {
    title: "Wayfora Health",
    category: "Better patient outcomes",
    desc: "Helps Caribbean patients find subsidies, affordable care, and clear next steps.",
    image: "/projects/wayfora.png",
    url: "https://wayfora-web.vercel.app/",
    tags: ["Healthcare", "Lower costs", "Clear next steps", "Caribbean"],
    impact: "More health per dollar",
    industryIds: ["healthcare"],
    metric: "Clearer care pathways",
  },
  {
    title: "Waataly",
    category: "Operational visibility",
    desc: "Remote tank monitoring so families and schools know water levels before taps run dry.",
    image: "/projects/waataly.png",
    url: "https://waataly.com",
    tags: ["IoT monitoring", "Fewer dry taps", "Remote visibility", "Jamaica"],
    impact: "Never run out blind",
    industryIds: ["startups"],
    metric: "Remote tank monitoring",
  },
  {
    title: "Smart Xpress Courier",
    category: "Fewer status calls",
    desc: "One place for Miami-to-Guyana tracking, rates, and support without chasing updates.",
    image: "/projects/smartxpress.png",
    url: "https://smartxpress.net",
    tags: ["Shipment clarity", "Self service", "Less anxiety", "Miami to Guyana"],
    impact: "Confidence at every step",
    industryIds: ["logistics"],
    metric: "60% fewer status calls",
  },
  {
    title: "Yaadex",
    category: "Scale without chaos",
    desc: "Dispatch dashboard that replaces lost orders in WhatsApp as delivery volume grows.",
    image: "/projects/yaadex.png",
    url: "https://yaadex.com",
    tags: ["Less chaos", "Happy customers", "Dispatch clarity", "Jamaica"],
    impact: "Grow without the mess",
    industryIds: ["logistics", "startups"],
    metric: "Orders tracked in one place",
  },
  {
    title: "Autokima",
    category: "Early demand",
    desc: "Waitlist landing page with clear value story and simple signup before launch.",
    image: "/projects/autokima.png",
    url: "https://autokima.com",
    tags: ["Trust at first click", "Early signups", "Clear value", "Launch ready"],
    impact: "Building demand early",
    industryIds: ["startups"],
    metric: "Waitlist signups from day one",
  },
];
