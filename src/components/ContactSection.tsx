import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";
import { CONTACT } from "../data/contact";
import { isLeadApiConfigured, submitLead } from "../lib/submitLead";
import StockImage from "./StockImage";
import { STOCK_IMAGES } from "../data/images";

type ContactSectionProps = {
  compact?: boolean;
};

export default function ContactSection({ compact = false }: ContactSectionProps) {
  const [status, setStatus] = useState<"idle" | "saving" | "done" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "saving") return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const business = String(data.get("business") || "").trim();
    const email = String(data.get("email") || "").trim();
    const problem = String(data.get("problem") || "").trim();

    setError(null);
    setStatus("saving");

    try {
      if (!isLeadApiConfigured()) {
        const body = [
          `Name: ${name}`,
          `Email: ${email}`,
          `Business: ${business}`,
          "",
          "What they need help with:",
          problem,
        ].join("\n");
        window.location.href = CONTACT.mailto("Project enquiry from website", body);
        setStatus("done");
        return;
      }

      const result = await submitLead({
        source: "contact",
        name,
        email,
        business,
        message: problem,
      });

      if (!result.ok) {
        setError(result.error || "Could not send your message.");
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("done");
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className={`relative ${compact ? "section-y-sm" : "section-y-lg"} px-6 overflow-hidden pb-28 md:pb-36`}
    >
      {!compact && (
        <>
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(27,122,74,0.07) 1px, transparent 1px)",
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
              What business problem
              <br />
              <span className="text-primary">are you solving?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
              Tell us what's slowing you down. We'll point you to the right fix on a free call.
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
                disabled={status === "saving"}
                className="w-full px-4 py-3 rounded-md border border-border bg-background text-sm disabled:opacity-60"
                placeholder="Jane Smith"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                disabled={status === "saving"}
                className="w-full px-4 py-3 rounded-md border border-border bg-background text-sm disabled:opacity-60"
                placeholder="you@business.com"
              />
            </div>
            <div>
              <label htmlFor="business" className="block text-sm font-medium text-foreground mb-2">
                Business name
              </label>
              <input
                id="business"
                name="business"
                disabled={status === "saving"}
                className="w-full px-4 py-3 rounded-md border border-border bg-background text-sm disabled:opacity-60"
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
                disabled={status === "saving"}
                className="w-full px-4 py-3 rounded-md border border-border bg-background text-sm resize-y disabled:opacity-60"
                placeholder="More bookings, less time on WhatsApp, a customer tracking portal..."
              />
            </div>
            <button
              type="submit"
              disabled={status === "saving"}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 text-sm disabled:opacity-60"
            >
              {status === "saving"
                ? "Sending…"
                : status === "done"
                  ? "Message sent"
                  : "Send message"}{" "}
              <ArrowRight size={16} />
            </button>
            {status === "done" && (
              <p className="text-xs text-muted-foreground">
                Thanks. We'll get back to you soon, usually within one business day.
              </p>
            )}
            {error && <p className="text-xs text-muted-foreground">{error}</p>}
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
