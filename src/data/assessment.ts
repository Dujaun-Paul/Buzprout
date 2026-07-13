export type AssessmentCategoryId =
  | "enquiries"
  | "bookings"
  | "whatsapp"
  | "website"
  | "payments"
  | "followup"
  | "automation";

export type AssessmentOption = {
  label: string;
  /** 0-100, higher = healthier systems */
  score: number;
};

export type AssessmentQuestion = {
  id: string;
  category: AssessmentCategoryId;
  prompt: string;
  options: AssessmentOption[];
};

export type AssessmentCategory = {
  id: AssessmentCategoryId;
  label: string;
  shortLabel: string;
};

export type Opportunity = {
  category: AssessmentCategoryId;
  title: string;
  recommendation: string;
  packageHint: string;
};

export type RoadmapPhase = {
  phase: string;
  title: string;
  description: string;
  when: "low" | "mid" | "high";
};

export const ASSESSMENT_META = {
  headline: "How Efficient Is Your Business?",
  subhead: "Find out in 3 minutes.",
  description:
    "Answer a few questions about how customers find you, book, pay, and get followed up. You'll get a score, your biggest gaps, and clear next steps.",
  questionCountLabel: "12 quick questions",
  timeLabel: "About 3 minutes",
} as const;

export const ASSESSMENT_CATEGORIES: AssessmentCategory[] = [
  { id: "enquiries", label: "Customer enquiries", shortLabel: "Enquiries" },
  { id: "bookings", label: "Bookings", shortLabel: "Bookings" },
  { id: "whatsapp", label: "WhatsApp & messaging", shortLabel: "WhatsApp" },
  { id: "website", label: "Website & online presence", shortLabel: "Website" },
  { id: "payments", label: "Payments", shortLabel: "Payments" },
  { id: "followup", label: "Customer follow-up", shortLabel: "Follow-up" },
  { id: "automation", label: "Automation", shortLabel: "Automation" },
];

export const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  {
    id: "enquiries-channel",
    category: "enquiries",
    prompt: "How do most new customers first reach you?",
    options: [
      { label: "Mostly WhatsApp, Instagram DMs, or phone calls", score: 35 },
      { label: "Mix of DMs, calls, and a website contact form", score: 65 },
      { label: "Website, booking form, or a tracked enquiry system", score: 95 },
      { label: "We're not sure. It varies and we don't track it", score: 15 },
    ],
  },
  {
    id: "enquiries-tracking",
    category: "enquiries",
    prompt: "How do you track open enquiries?",
    options: [
      { label: "We don't. Memory, chat threads, or sticky notes", score: 10 },
      { label: "Notebook or spreadsheet we update manually", score: 45 },
      { label: "Shared inbox or simple CRM", score: 75 },
      { label: "CRM or pipeline with statuses and follow-up dates", score: 95 },
    ],
  },
  {
    id: "bookings-method",
    category: "bookings",
    prompt: "How do customers book with you?",
    options: [
      { label: "Call or message us, then we confirm manually", score: 25 },
      { label: "They request a slot; we check availability and reply", score: 50 },
      { label: "Online booking for some services, manual for others", score: 70 },
      { label: "Self-serve online booking with confirmations", score: 95 },
    ],
  },
  {
    id: "bookings-no-shows",
    category: "bookings",
    prompt: "How often do you deal with no-shows or double bookings?",
    options: [
      { label: "Often. It's a regular headache", score: 20 },
      { label: "Sometimes, when things get busy", score: 50 },
      { label: "Rarely. Reminders and calendars help", score: 80 },
      { label: "Almost never. The system handles reminders and slots", score: 95 },
    ],
  },
  {
    id: "whatsapp-volume",
    category: "whatsapp",
    prompt: "How much of your day goes to answering the same WhatsApp questions?",
    options: [
      { label: "Hours on the same FAQs, hours, prices, and availability", score: 15 },
      { label: "A solid chunk every day", score: 40 },
      { label: "Some, but templates or saved replies help", score: 70 },
      { label: "Little. FAQs and automation handle most of it", score: 95 },
    ],
  },
  {
    id: "whatsapp-after-hours",
    category: "whatsapp",
    prompt: "What happens to messages outside business hours?",
    options: [
      { label: "They sit until someone sees them next day", score: 20 },
      { label: "Someone checks when they can", score: 45 },
      { label: "Auto-reply sets expectations; we follow up later", score: 75 },
      { label: "Automated answers or booking capture 24/7", score: 95 },
    ],
  },
  {
    id: "website-presence",
    category: "website",
    prompt: "What's your current online presence?",
    options: [
      { label: "Social media only, no proper website", score: 20 },
      { label: "Basic site or page that's outdated or hard to use", score: 40 },
      { label: "Credible site, but weak on bookings or enquiries", score: 65 },
      { label: "Clear site that builds trust and converts visitors", score: 95 },
    ],
  },
  {
    id: "website-mobile",
    category: "website",
    prompt: "How well does your site work on a phone?",
    options: [
      { label: "We don't have a site, or it barely works on mobile", score: 15 },
      { label: "Usable but awkward: slow or hard to find info", score: 45 },
      { label: "Fine for browsing; booking or contact is clunky", score: 70 },
      { label: "Fast, clear, and easy to enquire or book on mobile", score: 95 },
    ],
  },
  {
    id: "payments-method",
    category: "payments",
    prompt: "How do customers usually pay you?",
    options: [
      { label: "Cash, bank transfer, or chase via WhatsApp", score: 25 },
      { label: "Mostly manual invoices and follow-ups", score: 50 },
      { label: "Online payments for some jobs; rest is manual", score: 70 },
      { label: "Online checkout, deposits, or invoices that get paid", score: 95 },
    ],
  },
  {
    id: "followup-process",
    category: "followup",
    prompt: "After an enquiry or visit, how do you follow up?",
    options: [
      { label: "We often forget or only follow up when we remember", score: 15 },
      { label: "Someone remembers and messages when they can", score: 40 },
      { label: "We have a rough process, but it slips when busy", score: 65 },
      { label: "Scheduled follow-ups or automations keep us consistent", score: 95 },
    ],
  },
  {
    id: "automation-level",
    category: "automation",
    prompt: "How much of your routine work is automated?",
    options: [
      { label: "Almost nothing. Everything is manual", score: 10 },
      { label: "A few tools (calendar, templates) but lots of copy-paste", score: 40 },
      { label: "Some automations (reminders, forms) in place", score: 70 },
      { label: "Key workflows run without constant babysitting", score: 95 },
    ],
  },
  {
    id: "automation-pain",
    category: "automation",
    prompt: "Which statement sounds most like your team right now?",
    options: [
      { label: "We're drowning in repetitive admin", score: 15 },
      { label: "Busy but managing. Tools feel scattered", score: 45 },
      { label: "Mostly smooth, with a few painful bottlenecks", score: 70 },
      { label: "Systems free us to focus on customers and growth", score: 95 },
    ],
  },
];

/** Recommendations keyed by category, used when that category scores lowest */
export const CATEGORY_OPPORTUNITIES: Record<AssessmentCategoryId, Opportunity> = {
  enquiries: {
    category: "enquiries",
    title: "Capture and track every enquiry",
    recommendation:
      "Stop losing leads in chat threads. A simple form, CRM, or shared pipeline shows who contacted you and what happens next.",
    packageHint: "Business Website + lead capture, or a lightweight CRM setup",
  },
  bookings: {
    category: "bookings",
    title: "Stop losing bookings to back-and-forth messages",
    recommendation:
      "Customers can't book after hours or without calling? Let them pick a slot online with confirmations and reminders.",
    packageHint: "Online booking on your site or WhatsApp",
  },
  whatsapp: {
    category: "whatsapp",
    title: "Stop answering the same WhatsApp questions",
    recommendation:
      "Tired of repeating hours, prices, and availability? Auto-replies handle the routine stuff so your team only steps in when a human is needed.",
    packageHint: "WhatsApp auto-replies and saved-reply flows",
  },
  website: {
    category: "website",
    title: "Strengthen your online presence",
    recommendation:
      "A clear, mobile-friendly site builds trust and turns visitors into enquiries, especially when social alone isn't enough.",
    packageHint: "Starter or Business Website",
  },
  payments: {
    category: "payments",
    title: "Get paid with less chasing",
    recommendation:
      "Deposits, invoices, and online payments reduce awkward follow-ups and speed up cash flow.",
    packageHint: "Payments and invoicing wired into your booking or site flow",
  },
  followup: {
    category: "followup",
    title: "Stop losing sales to missed follow-ups",
    recommendation:
      "Enquiries slip when you're busy? Simple reminders after visits or quotes keep you top of mind without more admin.",
    packageHint: "Automatic follow-up reminders",
  },
  automation: {
    category: "automation",
    title: "Stop doing the same tasks over and over",
    recommendation:
      "Anything you do the same way every week is worth fixing once: reminders, status updates, handoffs between tools.",
    packageHint: "Set up the right tools so routine work runs itself",
  },
};

export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    phase: "Phase 1",
    title: "Improve online presence",
    description: "Credible site, clear offer, easy way to enquire or book on mobile.",
    when: "low",
  },
  {
    phase: "Phase 2",
    title: "Answer customers faster",
    description: "WhatsApp FAQs, confirmations, and follow-ups that don't need you every time.",
    when: "low",
  },
  {
    phase: "Phase 3",
    title: "Save time on daily work",
    description: "Bookings, payments, and enquiry tracking in one clearer system.",
    when: "mid",
  },
  {
    phase: "Phase 4",
    title: "Grow without the chaos",
    description: "Custom tools built around how your business actually runs.",
    when: "high",
  },
];

export function scoreBand(score: number): {
  label: string;
  summary: string;
  maturityId: "establishing" | "growing" | "scaling";
} {
  if (score < 40) {
    return {
      label: "Early systems",
      summary:
        "A lot of your growth is still held together by manual effort. Fixing a few high-friction spots will free time and stop lost leads.",
      maturityId: "establishing",
    };
  }
  if (score < 70) {
    return {
      label: "Growing, with gaps",
      summary:
        "You have pieces in place, but weak links (often WhatsApp, bookings, or follow-up) are capping how efficiently you can grow.",
      maturityId: "growing",
    };
  }
  return {
    label: "Strong foundation",
    summary:
      "Your basics are solid. The next wins are usually faster replies, clearer reports, or custom tools as you get busier.",
    maturityId: "scaling",
  };
}
