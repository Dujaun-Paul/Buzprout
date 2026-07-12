export type FlexTermMonths = 6 | 12 | 18;
export type PackageTierForFlex = "entry" | "growth" | "systems";

export const FLEX_PRODUCT = {
  name: "Buzprout Flex",
  tagline: "Start building without waiting to save the full amount.",
  promises: [
    "Start with a deposit, not the full project cost",
    "Use your site or system while you pay",
    "Full ownership when the plan is complete",
  ],
} as const;

export const FINANCE_FEE_TABLE: { termMonths: FlexTermMonths; feePercent: number; label: string }[] = [
  { termMonths: 6, feePercent: 10, label: "6 months" },
  { termMonths: 12, feePercent: 15, label: "12 months" },
  { termMonths: 18, feePercent: 20, label: "18 months" },
];

export const FLEX_DEFAULTS = {
  depositPercent: 40,
  defaultTermMonths: 12 as FlexTermMonths,
  earlyPayoffDiscountPercent: 5,
  lateFeeJmd: "JMD 5,000 to 10,000 after 7-day grace",
} as const;

export const TIER_FLEX_CAPS: {
  tier: PackageTierForFlex;
  maxTermMonths: FlexTermMonths;
  minDepositPercent: number;
}[] = [
  { tier: "entry", maxTermMonths: 6, minDepositPercent: 40 },
  { tier: "growth", maxTermMonths: 12, minDepositPercent: 40 },
  { tier: "systems", maxTermMonths: 18, minDepositPercent: 50 },
];

export const BUILD_PLUS_CARE = {
  name: "Build + Care",
  depositPercent: 25,
  defaultTermMonths: 18,
  description:
    "Lower upfront deposit with monthly payments that bundle hosting, light support, and build cost. Ownership transfers after the term or early buyout.",
  example: {
    cashPriceJmd: 120_000,
    depositJmd: 30_000,
    monthlyJmd: 7_500,
    months: 18,
    totalJmd: 165_000,
  },
} as const;

export const FLEX_EXAMPLE = {
  label: "Business Website + Systems",
  cashPriceJmd: 400_000,
  depositPercent: 40,
  termMonths: 12 as FlexTermMonths,
  depositJmd: 160_000,
  monthlyJmd: 23_000,
  totalJmd: 436_000,
};

export const ELIGIBILITY_SCORECARD: {
  check: string;
  required: boolean;
}[] = [
  { check: "Valid ID and contact details", required: true },
  { check: "Registered business or clear revenue proof (sole traders included)", required: true },
  { check: "Deposit paid in full before work starts", required: true },
  { check: "Signed contract and payment schedule", required: true },
  { check: "Auto-pay or committed payment method", required: false },
  { check: "Business presence or references for terms over 12 months", required: false },
  { check: "Personal guarantee for balances over JMD 500,000", required: false },
];

export const ELIGIBILITY_DECLINES = [
  "Won't pay a deposit upfront",
  "Wants full ownership before final payment",
  "Unclear scope or no budget floor",
  "History of bounced payments with Buzprout",
];

export const FLEX_OWNERSHIP_POINTS = [
  "During Flex you get a license to operate the site or app for your business",
  "Buzprout holds code, hosting, and domain until the balance is cleared",
  "Full ownership transfers on final payment with signed IP assignment",
  "If payments stop, service pauses within 48 hours with a 30-day recovery window",
];

export const SALES_DECISION_TREE = [
  {
    question: "Can they pay 40%+ now and the rest at milestones?",
    answer: "Milestone build (default, best margin)",
  },
  {
    question: "Need it live but can pay monthly?",
    answer: "Buzprout Flex (12 months, 15% plan fee on financed portion)",
  },
  {
    question: "Can't meet Flex deposit?",
    answer: "Build + Care (entry only) or walk away",
  },
  {
    question: "Already running custom software?",
    answer: "Retainer only, no new Flex debt",
  },
];
