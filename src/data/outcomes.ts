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
    title: "Get more customers",
    desc: "Customers can't find or trust you online? We build sites and booking tools that bring enquiries in.",
    tags: ["More enquiries", "More bookings", "Look credible", "Found online"],
  },
  {
    icon: MessageSquare,
    title: "Answer customers faster",
    desc: "Tired of the same WhatsApp questions every day? We set up replies and follow-ups so routine messages handle themselves.",
    tags: ["Hours saved", "Faster replies", "24/7 answers", "Less repetition"],
  },
  {
    icon: Sparkles,
    title: "Give customers a better experience",
    desc: "Customers keep calling to check status or book? We build flows so they help themselves instead of chasing you.",
    tags: ["Self-service", "Fewer calls", "Better reviews", "Repeat business"],
  },
  {
    icon: Workflow,
    title: "Save time on daily work",
    desc: "Too much time on spreadsheets and manual updates? Dashboards and custom tools cut the repetition and show what's happening.",
    tags: ["Less manual work", "Fewer errors", "Team can see what's going on", "Clearer day-to-day"],
  },
  {
    icon: TrendingUp,
    title: "Grow without the chaos",
    desc: "Spreadsheets and WhatsApp threads breaking when you get busy? We build tools that keep up as your business grows.",
    tags: ["Room to grow", "Connected tools", "Multi-location", "Built for the long term"],
  },
];
