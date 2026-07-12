export type Product = {
  name: string;
  tagline: string;
  desc: string;
  status: "live" | "beta" | "coming-soon";
  url?: string;
  tags: string[];
};

export const PRODUCTS: Product[] = [
  {
    name: "Yaadex",
    tagline: "Dispatch without the WhatsApp chaos",
    desc: "Courier and delivery teams get one dashboard for riders, jobs, and customer updates. Built from real dispatch pain on Jamaican delivery operations.",
    status: "live",
    url: "https://yaadex.com",
    tags: ["Logistics", "Dispatch", "Jamaica"],
  },
  {
    name: "Courier ops toolkit",
    tagline: "Industry patterns we're productizing",
    desc: "Tracking, customer notifications, and rider workflows we're turning into reusable tools based on client delivery projects across the Caribbean.",
    status: "beta",
    tags: ["Logistics", "SaaS", "In development"],
  },
  {
    name: "Operational AI tools",
    tagline: "AI that handles real work, not demos",
    desc: "WhatsApp assistants, status bots, and internal copilots shaped by what businesses actually ask us to automate.",
    status: "coming-soon",
    tags: ["Automation", "AI", "Roadmap"],
  },
];
