import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../data/projects";

type WorkSectionProps = {
  activeIndustry: string | null;
  onClearFilter: () => void;
  hideHeader?: boolean;
};

export default function WorkSection({ activeIndustry, onClearFilter, hideHeader = false }: WorkSectionProps) {
  const filtered = activeIndustry
    ? PROJECTS.filter((p) => p.industryIds.includes(activeIndustry))
    : PROJECTS;

  return (
    <section id="work" className={`${hideHeader ? "section-y-sm" : "section-y"} px-6 section-muted`}>
      <div className="max-w-7xl mx-auto">
        {!hideHeader && (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 section-head">
          <div>
            <p className="text-xs text-primary uppercase tracking-widest font-medium mb-4">
              Portfolio
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-3">
              Real businesses,<br />real results.
            </h2>
            <p className="text-muted-foreground max-w-xl">
              We fix what's costing you customers or time with websites, booking, and custom tools.
            </p>
            {activeIndustry && (
              <button
                onClick={onClearFilter}
                className="mt-4 text-sm text-primary hover:underline underline-offset-4"
              >
                Clear filter · Show all work
              </button>
            )}
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline underline-offset-4"
          >
            Discuss your project <ArrowUpRight size={14} />
          </Link>
        </div>
        )}

        {hideHeader && activeIndustry && (
          <button
            onClick={onClearFilter}
            className="mb-8 text-sm text-primary hover:underline underline-offset-4"
          >
            Clear filter · Show all work
          </button>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((proj) => (
            <a
              key={proj.title}
              href={proj.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl overflow-hidden border border-border bg-card shadow-soft hover:border-primary/30 hover:shadow-card transition-all duration-200 hover-lift"
            >
              <div className="relative h-56 overflow-hidden bg-muted">
                <img
                  src={proj.image}
                  alt={`${proj.title} website preview`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/10 to-transparent" />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-primary text-primary-foreground font-medium">
                    {proj.category}
                  </span>
                  {proj.metric && (
                    <span className="text-xs px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-sm text-foreground font-medium border border-border">
                      {proj.metric}
                    </span>
                  )}
                </div>
                <div className="absolute bottom-4 right-4 flex items-center gap-2">
                  <span className="text-xs px-2.5 py-1.5 rounded-full bg-background/80 backdrop-blur-sm text-primary font-semibold border border-primary/20">
                    {proj.impact}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border border-primary/20 flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
              <div className="p-7">
                <h3 className="text-xl font-semibold text-foreground mb-2.5">{proj.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{proj.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full border border-border text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">
            No projects in this industry yet.{" "}
            <button onClick={onClearFilter} className="text-primary hover:underline">
              View all work
            </button>
          </p>
        )}
      </div>
    </section>
  );
}
