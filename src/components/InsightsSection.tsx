import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, FileText, GraduationCap } from "lucide-react";
import { RESOURCES } from "../data/resources";

const ICONS = {
  guide: FileText,
  course: GraduationCap,
  article: BookOpen,
} as const;

function ResourceCta({ type, href }: { type: string; href: string }) {
  if (href === "/assessment") return "Take assessment";
  if (type === "course") return "Learn more";
  return "Read more";
}

export default function InsightsSection() {
  return (
    <section id="insights" className="py-28 px-6 section-muted">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs text-primary uppercase tracking-widest font-medium mb-4">
            Resources
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Learn before you buy.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Tools and education for Caribbean business owners figuring out what to fix first.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {RESOURCES.map((resource) => {
            const Icon = ICONS[resource.type];
            const cta = ResourceCta({ type: resource.type, href: resource.href });
            const className =
              "flex flex-col p-7 rounded-2xl border border-border bg-card shadow-soft hover:border-primary/30 transition-colors";

            const body = (
              <>
                <Icon size={20} className="text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{resource.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                  {resource.desc}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm text-primary font-medium">
                  {cta} <ArrowRight size={14} />
                </span>
              </>
            );

            if (resource.external) {
              return (
                <a
                  key={resource.title}
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {body}
                </a>
              );
            }

            return (
              <Link key={resource.title} to={resource.href} className={className}>
                {body}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
