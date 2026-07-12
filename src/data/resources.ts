export type Resource = {
  title: string;
  desc: string;
  href: string;
  type: "guide" | "course" | "article";
  external?: boolean;
};

export const RESOURCES: Resource[] = [
  {
    title: "Business Systems Assessment",
    desc: "How efficient is your business? Get a score, your top gaps, and clear next steps in about 3 minutes.",
    href: "/assessment",
    type: "guide",
  },
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
    href: "/academy",
    type: "course",
  },
];
