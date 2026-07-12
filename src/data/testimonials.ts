export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  initial: string;
  caseStudyId?: string;
  metric?: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Customers stopped calling just to ask where their package was. The tracking site handles that now and our team finally has breathing room.",
    name: "Operations lead",
    role: "Courier operations",
    company: "Smart Xpress Courier",
    initial: "S",
    caseStudyId: "smart-xpress",
    metric: "~60% fewer status calls",
  },
  {
    quote:
      "We were losing orders in WhatsApp every busy weekend. One dashboard for dispatch changed how we run the whole operation.",
    name: "Dispatch manager",
    role: "Delivery operations",
    company: "Yaadex user",
    initial: "Y",
    caseStudyId: "yaadex",
    metric: "Centralized order tracking",
  },
  {
    quote:
      "Visitors actually spent time exploring properties before they enquired. The 3D previews made sales conversations much easier.",
    name: "Tourism operator",
    role: "Hospitality",
    company: "Immers3D client",
    initial: "I",
    caseStudyId: "immers3d",
    metric: "Warmer booking leads",
  },
];
