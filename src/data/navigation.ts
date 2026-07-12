export const FOOTER_LEGAL = [
  { label: "Legal hub", to: "/legal.html", external: true },
  { label: "Privacy", to: "/privacy.html", external: true },
  { label: "Terms", to: "/terms.html", external: true },
  { label: "Payment policy", to: "/payment-policy.html", external: true },
  { label: "Flex terms", to: "/flex-terms.html", external: true },
  { label: "Cookies", to: "/cookies.html", external: true },
] as const;

export const NAV_LINKS = [
  { label: "Outcomes", to: "/outcomes" },
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Pricing", to: "/pricing" },
  { label: "Academy", to: "/academy" },
] as const;

export const FOOTER_EXPLORE = [
  { label: "Outcomes", to: "/outcomes" },
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Pricing", to: "/pricing" },
  { label: "Academy", to: "/academy" },
] as const;

export const FOOTER_COMPANY = [
  { label: "Contact", to: "/contact" },
  ...FOOTER_LEGAL,
] as const;
