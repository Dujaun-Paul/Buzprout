/**
 * Single place to update contact details across the site.
 */
export const CONTACT = {
  email: "hello@buzprout.com",
  calendlyUrl: "https://calendly.com/dujaunjpaul/30min",
  calendlyLabel: "Book Discovery Call",
  whatsappUrl: "https://wa.me/18765175047",
  whatsappLabel: "WhatsApp Us",
  hours: "Mon to Fri, 8am to 6pm AST",
  mailto: (subject: string, body?: string) =>
    `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}${
      body ? `&body=${encodeURIComponent(body)}` : ""
    }`,
} as const;
