import { ArrowRight } from "lucide-react";
import { ABOUT, CLIENT_LOGOS } from "../data/about";
import { CONTACT } from "../data/contact";
import StockImage from "./StockImage";
import { STOCK_IMAGES } from "../data/images";

type AboutSectionProps = {
  compact?: boolean;
};

export default function AboutSection({ compact = false }: AboutSectionProps) {
  return (
    <section id="about" className={`${compact ? "section-y-sm" : "section-y"} px-6`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            {!compact && (
              <>
                <p className="text-xs text-primary uppercase tracking-widest font-medium mb-4">
                  About
                </p>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                  {ABOUT.headline}
                </h2>
              </>
            )}
            <p className="text-muted-foreground leading-relaxed mb-4">{ABOUT.intro}</p>
            {!compact && <p className="text-muted-foreground leading-relaxed mb-8">{ABOUT.story}</p>}
            <div className="flex flex-wrap gap-2 mb-8">
              {ABOUT.markets.map((market) => (
                <span
                  key={market}
                  className="text-xs px-3 py-1.5 rounded-full border border-border bg-card text-muted-foreground"
                >
                  {market}
                </span>
              ))}
            </div>
            <a
              href={CONTACT.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 text-sm"
            >
              {CONTACT.calendlyLabel} <ArrowRight size={16} />
            </a>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden border border-border shadow-soft aspect-[4/3]">
              <StockImage src={STOCK_IMAGES.consulting.src} alt={STOCK_IMAGES.consulting.alt} />
            </div>
            {ABOUT.beliefs.map((belief, i) => (
              <div
                key={belief}
                className="flex gap-4 p-5 rounded-xl border border-border bg-card shadow-soft"
              >
                <span className="text-xs text-primary/60 font-medium w-6 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm text-foreground leading-relaxed">{belief}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-20 pt-8 md:pt-12 border-t border-border">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-6 font-medium">
            Teams we've built for
          </p>
          <div className="flex flex-wrap gap-3">
            {CLIENT_LOGOS.map((logo) => (
              <a
                key={logo.name}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl border border-border bg-card text-sm font-semibold text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
              >
                {logo.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
