import { ArrowRight, BookOpen, Check } from "lucide-react";
import { FormEvent, useState } from "react";
import { ACADEMY, COURSE_MODULES, COURSE_TIERS } from "../data/academy";
import { CONTACT } from "../data/contact";
import StockImage from "./StockImage";
import { STOCK_IMAGES } from "../data/images";

function AcademyWaitlistForm() {
  const [course, setCourse] = useState("Live cohort");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const body = [`Name: ${name}`, `Email: ${email}`, `Course: ${course}`].join("\n");
    window.location.href = CONTACT.mailto("Buzprout Academy waitlist", body);
  }

  return (
    <form
      id="academy-waitlist"
      onSubmit={handleSubmit}
      className="p-8 rounded-2xl border border-border bg-card shadow-soft space-y-4"
    >
      <h3 className="text-lg font-semibold text-foreground">Join the waitlist</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          name="name"
          required
          placeholder="Your name"
          className="px-4 py-3 rounded-md border border-border bg-background text-sm"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Email address"
          className="px-4 py-3 rounded-md border border-border bg-background text-sm"
        />
      </div>
      <select
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        className="w-full px-4 py-3 rounded-md border border-border bg-background text-sm"
      >
        {COURSE_TIERS.map((t) => (
          <option key={t.title} value={t.title}>
            {t.title}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold text-sm"
      >
        Join waitlist <ArrowRight size={14} />
      </button>
    </form>
  );
}

export default function AcademySection() {
  return (
    <section id="academy" className="py-28 px-6 section-muted">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 items-center">
          <div>
            <p className="text-xs text-primary uppercase tracking-widest font-medium mb-4">
              DIY path
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-5">
              {ACADEMY.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{ACADEMY.tagline}</p>
            <p className="text-sm text-muted-foreground mb-4">
              Not ready for a custom build? Start here. Graduates get{" "}
              <span className="text-foreground">{ACADEMY.graduateOffer}</span>.
            </p>
            <a
              href="/caribbean-site-checklist.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline underline-offset-4"
            >
              Free Caribbean Site Checklist <ArrowRight size={14} />
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border shadow-soft aspect-[4/3]">
            <StockImage src={STOCK_IMAGES.learning.src} alt={STOCK_IMAGES.learning.alt} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <BookOpen size={18} className="text-primary" />
              Who it is for
            </h3>
            <ul className="space-y-2 mb-8">
              {ACADEMY.forWho.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm text-muted-foreground">
                  <Check size={14} className="text-primary shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground border-l-2 border-primary/40 pl-4">
              {ACADEMY.notFor}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Curriculum</h3>
            <div className="space-y-3">
              {COURSE_MODULES.map((mod) => (
                <div
                  key={mod.number}
                  className="p-4 rounded-xl border border-border bg-card shadow-soft"
                >
                  <p className="text-xs text-primary font-medium mb-1">Module {mod.number}</p>
                  <p className="text-sm font-semibold text-foreground mb-1">{mod.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{mod.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-foreground mb-6">Course options</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {COURSE_TIERS.map((tier) => (
            <div
              key={tier.title}
              className={`flex flex-col p-7 rounded-2xl border bg-card shadow-soft ${
                tier.highlight
                  ? "border-primary/30 ring-1 ring-primary/15 shadow-card"
                  : "border-border"
              }`}
            >
              {tier.highlight && (
                <span className="text-xs font-medium text-primary uppercase tracking-widest mb-3">
                  Most popular
                </span>
              )}
              <h4 className="text-lg font-semibold text-foreground mb-2">{tier.title}</h4>
              <p className="text-base font-semibold text-foreground">{tier.priceJmd}</p>
              <p className="text-xs text-muted-foreground mb-5">{tier.priceUsd}</p>
              <ul className="space-y-2 mb-6 flex-1">
                {tier.includes.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                    <Check size={14} className="text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => {
                  document.getElementById("academy-waitlist")?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-semibold w-full ${
                  tier.highlight
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-border hover:border-primary/40 hover:text-primary"
                }`}
              >
                {tier.ctaLabel} <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

        <div id="academy-waitlist" className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <AcademyWaitlistForm />
          <div className="p-8 rounded-2xl border border-primary/20 bg-primary/[0.04] shadow-soft">
            <p className="text-sm text-muted-foreground mb-4">
              Outgrown DIY? Module 8 covers when Flex or a full build makes sense.
              Course graduates get a discount on their first Flex deposit.
            </p>
            <a
              href="/pricing#flex"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline underline-offset-4"
            >
              See Buzprout Flex <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
