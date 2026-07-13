import { TESTIMONIALS } from "../data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs text-primary uppercase tracking-widest font-medium mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-3">
            Results you can measure.
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            We fix what's costing you customers or time. Here's what changed for other owners we worked with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.caseStudyId}
              className="p-8 rounded-2xl border border-border bg-card shadow-soft hover:border-primary/30 transition-all duration-200 flex flex-col"
            >
              {t.metric && (
                <span className="inline-flex self-start text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium mb-4">
                  {t.metric}
                </span>
              )}
              <p className="text-sm text-foreground/85 leading-relaxed mb-8 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center text-primary text-sm font-bold shrink-0">
                  {t.initial}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.company}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
              {t.caseStudyId && (
                <a
                  href={`#case-studies`}
                  className="mt-4 text-xs text-primary hover:underline underline-offset-4"
                >
                  Read the case study
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
