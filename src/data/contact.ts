/**
 * Single place to update contact details across the site.
 * Replace whatsappUrl with your live number when ready.
 */
export const CONTACT = {
  email: "hello@buzprout.com",
  calendlyUrl: "https://calendly.com/buzprout/discovery",
  calendlyLabel: "Book Discovery Call",
  whatsappUrl: "https://wa.me/18765550123",
  whatsappLabel: "WhatsApp Us",
  hours: "Mon to Fri, 8am to 6pm CAT",
  mailto: (subject: string, body?: string) =>
    `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}${
      body ? `&body=${encodeURIComponent(body)}` : ""
    }`,
} as const;
