/**
 * Single place to update contact details across the site.
 * Replace calendlyUrl and whatsappUrl with your live links when ready.
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
  academyWaitlistUrl:
    "mailto:hello@buzprout.com?subject=Buzprout%20Academy%20waitlist&body=Hi%2C%20I%27d%20like%20to%20join%20the%20Academy%20waitlist.%0A%0AName%3A%20%0ACourse%20(self-paced%20%2F%20cohort%20%2F%20critique)%3A%20",
} as const;
