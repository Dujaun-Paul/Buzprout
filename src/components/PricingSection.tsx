import { ArrowRight, Check } from "lucide-react";
import {
  ADD_ONS,
  packagesByTier,
  PRICING_LADDER,
  type PackageTier,
} from "../data/packages";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-28 px-6 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <p className="text-xs text-primary uppercase tracking-widest font-medium mb-4">
            Packages
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-5">
            Start small. Grow into systems.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Clear packages so you know what you're buying. Most clients start with
            something simple, then upgrade as the business grows. You can climb
            this ladder at your own pace.
          </p>
        </div>

        {/* Ladder */}
        <div className="hidden md:grid md:grid-cols-4 gap-3 mb-16">
          {PRICING_LADDER.map((step, i) => (
            <div key={step.id} className="relative flex flex-col items-center text-center">
              <div className="w-full flex items-center justify-center mb-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {step.label}
                </span>
                {i < PRICING_LADDER.length - 1 && (
                  <div className="absolute top-2 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-border" />
                )}
              </div>
              <p className="text-sm font-medium text-foreground mb-1">{step.level}</p>
              <p className="text-xs text-muted-foreground leading-relaxed px-2">
                {step.audience}
              </p>
            </div>
          ))}
        </div>

        {/* Tier groups */}
        <div className="space-y-20">
          {PRICING_LADDER.map((tierMeta) => (
            <TierGroup key={tierMeta.id} tier={tierMeta.id} meta={tierMeta} />
          ))}
        </div>

        {/* Add-ons */}
        <div className="mt-20 pt-12 border-t border-border">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Need something specific?
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            Common add-ons we bolt onto any package to increase what you get from
            the build.
          </p>
          <div className="flex flex-wrap gap-3">
            {ADD_ONS.map((addon) => (
              <div
                key={addon.label}
                className="px-4 py-2.5 rounded-full border border-border bg-background text-sm"
              >
                <span className="text-foreground font-medium">{addon.label}</span>
                <span className="text-muted-foreground ml-2">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Funnel CTA */}
        <div className="mt-16 p-8 rounded-2xl border border-primary/25 bg-primary/5 text-center">
          <p className="text-sm text-muted-foreground mb-4 max-w-xl mx-auto">
            Not sure where you fit? Most clients start with a landing page or
            starter site, then add booking, dashboards, or custom software as
            revenue grows. We stay on through retainers so you're not resetting
            every month.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-background font-semibold hover:opacity-90 active:scale-95 transition-all duration-150 text-sm"
          >
            Book a free call <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

function TierGroup({
  tier,
  meta,
}: {
  tier: PackageTier;
  meta: (typeof PRICING_LADDER)[number];
}) {
  const packages = packagesByTier(tier);

  return (
    <div>
      <div className="mb-8">
        <p className="text-xs text-primary uppercase tracking-widest font-medium mb-2">
          {meta.label}
        </p>
        <h3 className="text-2xl font-bold tracking-tight text-foreground mb-1">
          {meta.level}
        </h3>
        <p className="text-sm text-muted-foreground">{meta.audience}</p>
      </div>

      <div
        className={`grid grid-cols-1 gap-4 ${
          packages.length >= 3 ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2"
        }`}
      >
        {packages.map((pkg) => (
          <div
            key={pkg.title}
            className={`flex flex-col p-7 rounded-2xl border bg-background transition-colors duration-200 ${
              pkg.highlight
                ? "border-primary/40 ring-1 ring-primary/20"
                : "border-border hover:border-primary/25"
            }`}
          >
            {pkg.highlight && (
              <span className="text-xs font-medium text-primary uppercase tracking-widest mb-3">
                Most popular
              </span>
            )}
            <h4 className="text-lg font-semibold text-foreground mb-2">{pkg.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
              {pkg.outcome}
            </p>

            <div className="mb-5">
              <p className="text-base font-semibold text-foreground">{pkg.priceJmd}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{pkg.priceUsd}</p>
              {pkg.timeline && (
                <p className="text-xs text-muted-foreground mt-1">{pkg.timeline}</p>
              )}
            </div>

            <ul className="space-y-2.5 mb-6">
              {pkg.includes.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm text-muted-foreground">
                  <Check size={14} className="text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-semibold transition-all duration-150 ${
                pkg.highlight
                  ? "bg-primary text-background hover:opacity-90"
                  : "border border-border text-foreground hover:border-primary/40 hover:text-primary"
              }`}
            >
              {pkg.ctaLabel} <ArrowRight size={14} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
