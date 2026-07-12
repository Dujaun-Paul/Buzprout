import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { WHY } from "../data/process";
import StockImage from "./StockImage";
import { STOCK_IMAGES } from "../data/images";

export default function WhySection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-border shadow-soft aspect-[4/5] lg:sticky lg:top-24">
              <StockImage src={STOCK_IMAGES.team.src} alt={STOCK_IMAGES.team.alt} />
            </div>
          </div>
          <div className="lg:col-span-7">
          <div className="mb-8">
            <p className="text-xs text-primary uppercase tracking-widest font-medium mb-4">
              What makes us different
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-5">
              A studio built around your business
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
              We figure out what's broken, build technology that fixes it, and keep improving as you grow.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 text-sm hover-lift"
            >
              Start the conversation <ArrowRight size={16} />
            </Link>
          </div>
          <div className="space-y-3">
            {WHY.map((w) => (
              <div
                key={w.number}
                className="flex gap-5 p-5 rounded-2xl border border-border bg-card shadow-soft hover:border-primary/30 transition-all duration-200"
              >
                <span className="text-xs text-primary/50 mt-0.5 w-7 shrink-0 font-medium">{w.number}</span>
                <div>
                  <h4 className="text-base font-semibold text-foreground mb-1">{w.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
