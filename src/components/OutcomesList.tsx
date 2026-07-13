import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { OUTCOMES } from "../data/outcomes";
import StockImage from "./StockImage";
import { STOCK_IMAGES } from "../data/images";

type OutcomesListProps = {
  limit?: number;
  showLink?: boolean;
};

export default function OutcomesList({ limit, showLink = false }: OutcomesListProps) {
  const items = limit ? OUTCOMES.slice(0, limit) : OUTCOMES;

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {!limit && (
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <p className="text-xs text-primary uppercase tracking-widest font-medium mb-4">Outcomes</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Fixes for the problems you actually have
            </h2>
            <p className="text-muted-foreground">
              We start with what's not working, then set up the right tools.
            </p>
          </div>
        )}

        <div className="space-y-0 divide-y divide-border">
          {items.map((outcome) => {
            const Icon = outcome.icon;
            return (
              <div
                key={outcome.title}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-8 first:pt-0 last:pb-0"
              >
                <div className="lg:col-span-1 flex items-start">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon size={20} className="text-primary" />
                  </div>
                </div>
                <div className="lg:col-span-3">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{outcome.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {outcome.tags.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-sm text-muted-foreground leading-relaxed">{outcome.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {showLink && (
          <div className="mt-10 text-center">
            <Link
              to="/outcomes"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline underline-offset-4"
            >
              See all outcomes <ArrowRight size={14} />
            </Link>
          </div>
        )}

        {!limit && (
          <div className="mt-16 rounded-2xl overflow-hidden border border-border aspect-[21/9] max-w-4xl mx-auto shadow-soft">
            <StockImage src={STOCK_IMAGES.planning.src} alt={STOCK_IMAGES.planning.alt} />
          </div>
        )}
      </div>
    </section>
  );
}
