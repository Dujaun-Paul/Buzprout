export const SITE = {
  name: "Buzprout",
  tagline: "Helping businesses grow through technology",
  subtagline:
    "We find what's slowing you down, then set up websites, booking, and WhatsApp help that bring in customers and save you time.",
  url: "https://buzprout.com",
  locale: "en_JM",
  region: "Caribbean",
  description:
    "We find what's slowing Caribbean businesses down, then set up websites, booking, and WhatsApp help that bring in customers and save time.",
  ogImage: "/og-image.png",
} as const;

export const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  email: "hello@buzprout.com",
  areaServed: ["Jamaica", "Guyana", "Trinidad and Tobago", "Barbados", "Caribbean"],
  serviceType: [
    "Business websites",
    "Custom software",
    "WhatsApp help for businesses",
    "Booking systems",
    "Business technology consulting",
  ],
};
