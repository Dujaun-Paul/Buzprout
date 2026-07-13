export const SITE = {
  name: "Buzprout",
  tagline: "Technology that helps your business grow.",
  subtagline:
    "Whether you need more bookings, less manual work, or better customer communication, we'll build the right system to help your business move forward.",
  heroCta: "Let's Improve Your Business",
  url: "https://buzprout.com",
  locale: "en_JM",
  region: "Caribbean",
  description:
    "Whether you need more bookings, less manual work, or better customer communication, we'll build the right system to help your business move forward.",
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
