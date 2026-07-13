import { ArrowRight } from "lucide-react";
import { CONTACT } from "../data/contact";
import { STEPS } from "../data/process";
import StockImage from "./StockImage";
import { STOCK_IMAGES } from "../data/images";

export default function ProcessSection() {
  return (
    <section className="py-20 px-6 section-muted">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl overflow-hidden border border-border mb-14 aspect-[21/9] max-w-4xl mx-auto shadow-soft">
          <StockImage src={STOCK_IMAGES.planning.src} alt={STOCK_IMAGES.planning.alt} />
        </div>
        <div className="text-center mb-14">
          <p className="text-xs text-primary uppercase tracking-widest font-medium mb-4">How we work</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Four steps. Clear results.
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            We name the problem, count what it's costing you, set up the right tools, then check if it worked.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {STEPS.map((s, i) => (
            <div key={s.step} className="relative flex flex-col items-center text-center group">
              <div className="relative w-14 h-14 rounded-full border-2 border-border bg-background flex items-center justify-center mb-5 text-primary font-bold group-hover:border-primary group-hover:bg-primary/10 transition-all duration-200 z-10">
                {s.step}
                {i < STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-[calc(100%+4px)] w-[calc(100%+1.5rem)] h-px bg-border -translate-y-1/2" />
                )}
              </div>
              <h4 className="font-semibold text-foreground mb-2">{s.label}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed max-w-[200px]">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href={CONTACT.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 text-sm"
          >
            {CONTACT.calendlyLabel} <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
