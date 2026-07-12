export type Resource = {
  title: string;
  desc: string;
  href: string;
  type: "guide" | "course" | "article";
  external?: boolean;
};

export const RESOURCES: Resource[] = [
  {
    title: "Caribbean Site Checklist",
    desc: "Free checklist for launching a credible business site in the Caribbean. What to fix before you spend on ads.",
    href: "/caribbean-site-checklist.md",
    type: "guide",
    external: true,
  },
  {
    title: "Buzprout Academy",
    desc: "Learn to launch yourself when a full build isn't the right move yet.",
    href: "#academy",
    type: "course",
  },
  {
    title: "When WhatsApp becomes the bottleneck",
    desc: "Coming soon: how Caribbean SMEs know they've outgrown chat-based ops.",
    href: "#insights",
    type: "article",
  },
];
