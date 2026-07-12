import { ArrowRight, Check, Shield } from "lucide-react";
import {
  BUILD_PLUS_CARE,
  ELIGIBILITY_DECLINES,
  FINANCE_FEE_TABLE,
  FLEX_DEFAULTS,
  FLEX_EXAMPLE,
  FLEX_OWNERSHIP_POINTS,
  FLEX_PRODUCT,
  TIER_FLEX_CAPS,
} from "../data/flex";
import { calculateFlexQuote, formatJmd } from "../lib/flexCalculator";

const growthExample = calculateFlexQuote({
  cashPriceJmd: FLEX_EXAMPLE.cashPriceJmd,
  depositPercent: FLEX_EXAMPLE.depositPercent,
  termMonths: FLEX_EXAMPLE.termMonths,
});

export default function FlexSection() {
  return (
    <section id="flex" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <p className="text-xs text-primary uppercase tracking-widest font-medium mb-4">
            How to start
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-5">
            {FLEX_PRODUCT.tagline}
          </h2>
          <p className="text-lg text-muted-foreground mb-3">{FLEX_PRODUCT.name}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            You shouldn't have to delay growth because of upfront cost. Flex gets your
            custom build live with a deposit and monthly payments. It's a commercial build
            agreement, not a loan. Final terms confirmed on your discovery call.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-16">
          {FLEX_PRODUCT.promises.map((promise) => (
            <div
              key={promise}
              className="p-6 rounded-2xl border border-border bg-card shadow-soft flex gap-3"
            >
              <Shield size={18} className="text-primary shrink-0 mt-0.5" />
              <p className="text-sm text-foreground">{promise}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Example quote */}
          <div className="p-8 rounded-2xl border border-primary/20 bg-primary/[0.04] shadow-soft">
            <p className="text-xs text-primary uppercase tracking-widest font-medium mb-3">
              Example quote
            </p>
            <h3 className="text-xl font-semibold text-foreground mb-6">
              {FLEX_EXAMPLE.label}
            </h3>
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Cash price</dt>
                <dd className="font-medium text-foreground">
                  {formatJmd(growthExample.cashPriceJmd)}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">
                  Deposit ({growthExample.depositPercent}%)
                </dt>
                <dd className="font-medium text-foreground">
                  {formatJmd(growthExample.depositJmd)}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">
                  Then {growthExample.termMonths} monthly payments
                </dt>
                <dd className="font-medium text-primary">
                  {formatJmd(growthExample.monthlyPaymentJmd)}/mo
                </dd>
              </div>
              <div className="flex justify-between gap-4 pt-3 border-t border-border">
                <dt className="text-muted-foreground">Total over term</dt>
                <dd className="font-semibold text-foreground">
                  {formatJmd(growthExample.totalCollectedJmd)}
                </dd>
              </div>
            </dl>
            <p className="text-xs text-muted-foreground mt-4">
              Includes a {growthExample.financeFeePercent}% plan fee on the financed portion.
              Always quote cash price first, then Flex.
            </p>
          </div>

          {/* Plan fees + caps */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Plan fee by term</h3>
              <div className="space-y-2">
                {FINANCE_FEE_TABLE.map((row) => (
                  <div
                    key={row.termMonths}
                    className="flex justify-between items-center px-4 py-3 rounded-xl border border-border bg-card text-sm"
                  >
                    <span className="text-foreground">{row.label}</span>
                    <span className="text-muted-foreground">
                      {row.feePercent}% on financed portion
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">By package tier</h3>
              <div className="space-y-2">
                {TIER_FLEX_CAPS.map((cap) => (
                  <div
                    key={cap.tier}
                    className="flex justify-between items-center px-4 py-3 rounded-xl border border-border bg-card text-sm capitalize"
                  >
                    <span className="text-foreground">{cap.tier}</span>
                    <span className="text-muted-foreground text-right">
                      min {cap.minDepositPercent}% deposit · max {cap.maxTermMonths} mo
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Build + Care */}
        <div className="p-8 rounded-2xl border border-border bg-card mb-16">
          <h3 className="text-lg font-semibold text-foreground mb-2">{BUILD_PLUS_CARE.name}</h3>
          <p className="text-sm text-muted-foreground mb-4 max-w-2xl">
            {BUILD_PLUS_CARE.description} Best for entry tier when Flex deposit is still a
            stretch.
          </p>
          <p className="text-sm text-foreground">
            Example: {formatJmd(BUILD_PLUS_CARE.example.cashPriceJmd)} cash →{" "}
            {formatJmd(BUILD_PLUS_CARE.example.depositJmd)} deposit +{" "}
            {formatJmd(BUILD_PLUS_CARE.example.monthlyJmd)}/mo for{" "}
            {BUILD_PLUS_CARE.example.months} months (
            {formatJmd(BUILD_PLUS_CARE.example.totalJmd)} total, includes hosting).
          </p>
        </div>

        {/* Ownership */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-foreground mb-4">How ownership works</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {FLEX_OWNERSHIP_POINTS.map((point) => (
              <li key={point} className="flex gap-2.5 text-sm text-muted-foreground">
                <Check size={14} className="text-primary shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-background font-semibold hover:opacity-90 text-sm"
          >
            Discuss Flex on a call <ArrowRight size={16} />
          </a>
          <a
            href="#academy"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border text-foreground hover:border-primary/40 hover:text-primary text-sm"
          >
            Not ready yet? See Academy
          </a>
        </div>

        <p className="text-xs text-muted-foreground mt-6 max-w-2xl">
          We do not offer 100% financing. Deposits start at {FLEX_DEFAULTS.depositPercent}%
          for most growth builds. {ELIGIBILITY_DECLINES[0].toLowerCase()} and similar cases
          are declined.
        </p>
      </div>
    </section>
  );
}
