import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { MATURITY_STAGES } from "../data/maturity";

export default function MaturitySection() {
  return (
    <section id="start-here" className="section-y px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center section-head max-w-2xl mx-auto">
          <p className="text-xs text-primary uppercase tracking-widest font-medium mb-4">
            Where to start
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-5">
            Not sure what you need yet?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Take the free assessment for a score, or pick the stage that sounds like you.
          </p>
          <Link
            to="/assessment"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 text-sm"
          >
            Take the free assessment <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {MATURITY_STAGES.map((stage) => (
            <div
              key={stage.id}
              className={`flex flex-col p-7 rounded-2xl border bg-card shadow-soft ${
                stage.highlight
                  ? "border-primary/30 ring-1 ring-primary/15"
                  : "border-border"
              }`}
            >
              {stage.highlight && (
                <span className="text-xs font-medium text-primary uppercase tracking-widest mb-3">
                  Most common
                </span>
              )}
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
                {stage.stage}
              </p>
              <h3 className="text-xl font-semibold text-foreground mb-4">{stage.title}</h3>

              <ul className="space-y-2 mb-6 flex-1">
                {stage.signals.map((signal) => (
                  <li key={signal} className="text-sm text-muted-foreground leading-relaxed">
                    · {signal}
                  </li>
                ))}
              </ul>

              <p className="text-sm text-foreground mb-5">
                <span className="text-muted-foreground">Start with: </span>
                {stage.startWith}
              </p>

              {stage.ctaHref.startsWith("#") ? (
                <a
                  href={stage.ctaHref}
                  className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-semibold ${
                    stage.highlight
                      ? "bg-primary text-primary-foreground hover:opacity-90"
                      : "border border-border hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  {stage.ctaLabel} <ArrowRight size={14} />
                </a>
              ) : (
                <Link
                  to={stage.ctaHref}
                  className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-semibold ${
                    stage.highlight
                      ? "bg-primary text-primary-foreground hover:opacity-90"
                      : "border border-border hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  {stage.ctaLabel} <ArrowRight size={14} />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
