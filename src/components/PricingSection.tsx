import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import {
  ADD_ONS,
  BUILDER_COMPARISON,
  packagesByTier,
  PAYMENT_PLANS,
  PRICING_LADDER,
  RECOMMENDED_START,
  type PackageTier,
} from "../data/packages";
import { CONTACT } from "../data/contact";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-28 px-6 section-muted">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <p className="text-xs text-primary uppercase tracking-widest font-medium mb-4">
            Packages
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-5">
            Packages built around what you need to improve.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Every package targets a real result: more enquiries, smoother operations, less manual work. Most clients start simple and grow into bigger systems over time.
          </p>
        </div>

        <div className="mb-16 p-6 md:p-8 rounded-2xl border border-primary/25 bg-primary/[0.05] flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-xs text-primary uppercase tracking-widest font-medium mb-2">
              Most clients start here
            </p>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {RECOMMENDED_START.packageTitle}
            </h3>
            <p className="text-sm text-muted-foreground max-w-xl">{RECOMMENDED_START.reason}</p>
          </div>
          <Link
            to={RECOMMENDED_START.href}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 text-sm shrink-0"
          >
            Talk about your project <ArrowRight size={16} />
          </Link>
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

        {/* Payment options */}
        <div className="mb-20">
          <div className="mb-8">
            <p className="text-xs text-primary uppercase tracking-widest font-medium mb-2">
              How to pay
            </p>
            <h3 className="text-2xl font-bold tracking-tight text-foreground mb-1">
              Cash, milestones, or monthly
            </h3>
            <p className="text-sm text-muted-foreground">
              We quote a cash price first, then match you to the payment path that fits.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PAYMENT_PLANS.map((plan) => (
              <div
                key={plan.title}
                className={`flex flex-col p-7 rounded-2xl border bg-card shadow-soft transition-all duration-200 ${
                  plan.highlight
                    ? "border-primary/30 ring-1 ring-primary/15 shadow-card"
                    : "border-border hover:border-primary/25"
                }`}
              >
                {plan.highlight && (
                  <span className="text-xs font-medium text-primary uppercase tracking-widest mb-3">
                    Most common
                  </span>
                )}
                <h4 className="text-lg font-semibold text-foreground mb-1">{plan.title}</h4>
                <p className="text-xs text-primary font-medium mb-3">{plan.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {plan.outcome}
                </p>
                <p className="text-sm font-medium text-foreground mb-4">{plan.summary}</p>
                <ul className="space-y-2 mb-4">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                      <Check size={14} className="text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                {plan.example && (
                  <p className="text-xs text-muted-foreground mb-5 border-t border-border pt-4">
                    Example: {plan.example}
                  </p>
                )}
                {plan.href.startsWith("#") ? (
                  <a
                    href={plan.href}
                    className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-semibold mt-auto ${
                      plan.highlight
                        ? "bg-primary text-background hover:opacity-90"
                        : "border border-border hover:border-primary/40 hover:text-primary"
                    }`}
                  >
                    {plan.ctaLabel} <ArrowRight size={14} />
                  </a>
                ) : (
                  <Link
                    to={plan.href}
                    className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-semibold mt-auto ${
                      plan.highlight
                        ? "bg-primary text-background hover:opacity-90"
                        : "border border-border hover:border-primary/40 hover:text-primary"
                    }`}
                  >
                    {plan.ctaLabel} <ArrowRight size={14} />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Builder comparison */}
        <div className="mb-20 p-8 rounded-2xl border border-border bg-card shadow-soft">
          <h3 className="text-xl font-bold text-foreground mb-6">{BUILDER_COMPARISON.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div>
              <p className="text-sm font-semibold text-foreground mb-3">
                {BUILDER_COMPARISON.builderLabel}
              </p>
              <ul className="space-y-2">
                {BUILDER_COMPARISON.builderGoodFor.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                    <Check size={14} className="text-muted-foreground shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground mb-3">
                {BUILDER_COMPARISON.buzproutLabel}
              </p>
              <ul className="space-y-2">
                {BUILDER_COMPARISON.buzproutGoodFor.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                    <Check size={14} className="text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-4">{BUILDER_COMPARISON.academyNote}</p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/assessment"
              className="text-sm text-primary hover:underline underline-offset-4"
            >
              Free systems assessment
            </Link>
            <a
              href="/caribbean-site-checklist.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline underline-offset-4"
            >
              Download free checklist
            </a>
            <Link to="/academy" className="text-sm text-primary hover:underline underline-offset-4">
              Buzprout Academy
            </Link>
          </div>
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
        <div className="mt-16 p-8 rounded-2xl border border-primary/20 bg-primary/[0.04] text-center shadow-soft">
          <p className="text-sm text-muted-foreground mb-4 max-w-xl mx-auto">
            Not sure where you fit? Start with Academy if you want DIY, Flex if you need
            a custom build but prefer monthly payments, or book a call and we will map
            the right entry point.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-4">
            <Link to="/academy" className="text-sm text-primary hover:underline underline-offset-4">
              Academy
            </Link>
            <span className="text-muted-foreground">·</span>
            <a href="#flex" className="text-sm text-primary hover:underline underline-offset-4">
              Buzprout Flex
            </a>
          </div>
          <a
            href={CONTACT.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-background font-semibold hover:opacity-90 active:scale-95 transition-all duration-150 text-sm"
          >
            {CONTACT.calendlyLabel} <ArrowRight size={16} />
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
            className={`flex flex-col p-7 rounded-2xl border bg-card shadow-soft transition-colors duration-200 ${
              pkg.highlight
                ? "border-primary/30 ring-1 ring-primary/15 shadow-card"
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

            <Link
              to="/contact"
              className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-semibold transition-all duration-150 ${
                pkg.highlight
                  ? "bg-primary text-background hover:opacity-90"
                  : "border border-border text-foreground hover:border-primary/40 hover:text-primary"
              }`}
            >
              {pkg.ctaLabel} <ArrowRight size={14} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
