import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";
import { CONTACT } from "../data/contact";
import StockImage from "./StockImage";
import { STOCK_IMAGES } from "../data/images";

type ContactSectionProps = {
  compact?: boolean;
};

export default function ContactSection({ compact = false }: ContactSectionProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "");
    const business = String(form.get("business") || "");
    const problem = String(form.get("problem") || "");
    const body = [
      `Name: ${name}`,
      `Business: ${business}`,
      "",
      "What they need help with:",
      problem,
    ].join("\n");

    window.location.href = CONTACT.mailto("Project enquiry from website", body);
    setSubmitted(true);
  }

  return (
    <section id="contact" className={`relative ${compact ? "py-16" : "py-36"} px-6 overflow-hidden pb-28 md:pb-36`}>
      {!compact && (
        <>
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(27,122,74,0.07) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,rgba(27,122,74,0.04),transparent)]" />
        </>
      )}

      <div className="relative max-w-7xl mx-auto">
        {!compact && (
        <div className="text-center mb-14">
          <p className="text-xs text-primary uppercase tracking-widest font-medium mb-5">
            Get started
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-5">
            What business problem<br />
            <span className="text-primary">are you solving?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Book a call, send a quick message, or tell us what's slowing you down below.
          </p>
        </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4 rounded-2xl overflow-hidden border border-border shadow-soft aspect-[4/3] lg:aspect-[3/4]">
            <StockImage src={STOCK_IMAGES.workspace.src} alt={STOCK_IMAGES.workspace.alt} />
          </div>
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-4 p-8 rounded-2xl border border-border bg-card shadow-soft space-y-5"
          >
            <h3 className="text-lg font-semibold text-foreground">Send a message</h3>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Your name
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-md border border-border bg-background text-sm"
                placeholder="Jane Smith"
              />
            </div>
            <div>
              <label htmlFor="business" className="block text-sm font-medium text-foreground mb-2">
                Business name
              </label>
              <input
                id="business"
                name="business"
                className="w-full px-4 py-3 rounded-md border border-border bg-background text-sm"
                placeholder="Your company"
              />
            </div>
            <div>
              <label htmlFor="problem" className="block text-sm font-medium text-foreground mb-2">
                What do you need help with?
              </label>
              <textarea
                id="problem"
                name="problem"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-md border border-border bg-background text-sm resize-y"
                placeholder="More bookings, less time on WhatsApp, a customer tracking portal..."
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 text-sm"
            >
              {submitted ? "Opening your email app..." : "Send via email"} <ArrowRight size={16} />
            </button>
            <p className="text-xs text-muted-foreground">
              Opens your email client with a pre-filled message to {CONTACT.email}.
            </p>
          </form>

          <div className="lg:col-span-4 space-y-5">
            <a
              href={CONTACT.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-8 rounded-2xl border border-primary/20 bg-primary/[0.04] shadow-soft hover:border-primary/40 transition-colors"
            >
              <p className="text-xs text-primary uppercase tracking-widest font-medium mb-2">
                Fastest path
              </p>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {CONTACT.calendlyLabel}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Free 30 minute call. No hard sell. We'll tell you honestly if we're the right fit.
              </p>
              <span className="inline-flex items-center gap-2 text-sm text-primary font-semibold">
                Pick a time <ArrowRight size={14} />
              </span>
            </a>

            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-8 rounded-2xl border border-border bg-card shadow-soft hover:border-primary/30 transition-colors"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {CONTACT.whatsappLabel}
              </h3>
              <p className="text-sm text-muted-foreground">
                Prefer chat? Message us during {CONTACT.hours.toLowerCase()}.
              </p>
            </a>

            <p className="text-sm text-muted-foreground text-center lg:text-left">
              Or email{" "}
              <a
                href={CONTACT.mailto("Project enquiry")}
                className="text-primary hover:underline underline-offset-4"
              >
                {CONTACT.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
