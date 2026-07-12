export const SITE = {
  name: "Buzprout",
  tagline: "Helping businesses grow through technology",
  url: "https://buzprout.com",
  locale: "en_JM",
  region: "Caribbean",
  description:
    "Buzprout helps Caribbean businesses get more customers, save time on manual work, and build systems that scale. Websites, software, and automation built around your business.",
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
    "WhatsApp automation",
    "Booking systems",
    "Digital business consulting",
  ],
};
