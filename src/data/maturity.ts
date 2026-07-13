export type MaturityStage = {
  id: string;
  stage: string;
  title: string;
  signals: string[];
  needs: string[];
  startWith: string;
  ctaLabel: string;
  ctaHref: string;
  highlight?: boolean;
};

export const MATURITY_STAGES: MaturityStage[] = [
  {
    id: "establishing",
    stage: "Stage 1",
    title: "Getting established",
    signals: [
      "You need to look credible online",
      "Customers find you on Google or Instagram, not a proper site",
      "You're not ready for custom software yet",
    ],
    needs: ["Online presence", "Branding basics", "Lead capture"],
    startWith: "Starter Website, Landing Page, or Buzprout Academy",
    ctaLabel: "See entry packages",
    ctaHref: "#pricing",
  },
  {
    id: "growing",
    stage: "Stage 2",
    title: "Growing",
    signals: [
      "You need bookings, enquiries, or less time on WhatsApp",
      "Spreadsheets and manual follow-ups are slowing you down",
      "You want monthly payments instead of one big upfront bill",
    ],
    needs: ["Bookings", "Less time on WhatsApp", "Customer tracking", "Save time on admin"],
    startWith: "Business Website + Systems or Buzprout Flex",
    ctaLabel: "See growth packages",
    ctaHref: "#pricing",
    highlight: true,
  },
  {
    id: "scaling",
    stage: "Stage 3",
    title: "Scaling",
    signals: [
      "What worked at low volume is breaking",
      "You need custom software or tools that connect as you grow",
      "You want a long-term partner, not one-off projects",
    ],
    needs: ["Custom software", "Tools that connect", "Clear reports", "Ongoing help"],
    startWith: "Custom Business Platform or Systems Retainer",
    ctaLabel: "Book a scoping call",
    ctaHref: "/contact",
  },
];
