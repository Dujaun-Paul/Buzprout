import { ArrowUpRight } from "lucide-react";
import { CASE_STUDIES } from "../data/caseStudies";

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="section-y px-6">
      <div className="max-w-7xl mx-auto">
        <div className="section-head max-w-2xl">
          <p className="text-xs text-primary uppercase tracking-widest font-medium mb-4">
            Case studies
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-5">
            Before and after,<br />in real numbers.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We measure the problem first, build the fix, then track the result in real numbers.
          </p>
        </div>

        <div className="space-y-8">
          {CASE_STUDIES.map((study) => (
            <article
              key={study.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 rounded-2xl border border-border bg-card shadow-soft"
            >
              <div className="lg:col-span-4">
                <div className="rounded-xl overflow-hidden border border-border mb-4">
                  <img
                    src={study.image}
                    alt={study.projectTitle}
                    className="w-full h-48 object-cover object-top"
                  />
                </div>
                <p className="text-xs text-primary uppercase tracking-widest font-medium mb-1">
                  {study.industry} · {study.location}
                </p>
                <h3 className="text-xl font-semibold text-foreground mb-1">{study.client}</h3>
                {study.url && (
                  <a
                    href={study.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-primary hover:underline underline-offset-4"
                  >
                    View live project <ArrowUpRight size={14} />
                  </a>
                )}
              </div>

              <div className="lg:col-span-8 space-y-6">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
                    Problem
                  </p>
                  <p className="text-sm text-foreground leading-relaxed">{study.problem}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
                    What we built
                  </p>
                  <p className="text-sm text-foreground leading-relaxed">{study.solution}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {study.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="p-4 rounded-xl bg-muted border border-border"
                    >
                      <p className="text-xs text-muted-foreground mb-2">{m.label}</p>
                      <div className="flex items-baseline gap-2 text-sm">
                        <span className="text-muted-foreground line-through">{m.before}</span>
                        <span className="text-primary font-semibold">{m.after}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
