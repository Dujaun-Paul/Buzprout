import {
  Megaphone,
  MessageSquare,
  Sparkles,
  Workflow,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export type Outcome = {
  icon: LucideIcon;
  title: string;
  desc: string;
  tags: string[];
};

export const OUTCOMES: Outcome[] = [
  {
    icon: Megaphone,
    title: "Acquire Customers",
    desc: "Sites, landing pages, and booking tools that bring enquiries in and build trust online.",
    tags: ["More enquiries", "More bookings", "Credibility", "Found online"],
  },
  {
    icon: MessageSquare,
    title: "Improve Customer Communication",
    desc: "Automation so routine WhatsApp and email messages handle themselves and your team saves hours.",
    tags: ["Hours saved", "Faster responses", "24/7 support", "Less repetition"],
  },
  {
    icon: Sparkles,
    title: "Improve Customer Experience",
    desc: "Portals, booking flows, and tracking so customers help themselves instead of chasing you.",
    tags: ["Self-service", "Fewer calls", "Better reviews", "Repeat business"],
  },
  {
    icon: Workflow,
    title: "Streamline Operations",
    desc: "Dashboards and custom tools that cut manual work and show what's happening in the business.",
    tags: ["Less manual work", "Fewer errors", "Team visibility", "Clearer ops"],
  },
  {
    icon: TrendingUp,
    title: "Scale the Business",
    desc: "Platforms and integrations that grow with you when spreadsheets and WhatsApp threads stop working.",
    tags: ["Room to grow", "Integrations", "Multi-location", "Long-term platform"],
  },
];
