import { useState } from "react";
import PageHeader from "../components/PageHeader";
import WorkSection from "../components/WorkSection";
import CaseStudiesSection from "../components/CaseStudiesSection";
import { INDUSTRIES } from "../data/industries";
import { STOCK_VIDEOS } from "../data/videos";

export default function WorkPage() {
  const [activeIndustry, setActiveIndustry] = useState<string | null>(null);

  return (
    <>
      <PageHeader
        eyebrow="Work"
        title={<>Real businesses, real results</>}
        description="Websites, booking systems, and custom software built around business outcomes."
        videoSrc={STOCK_VIDEOS.work.src}
        videoLabel={STOCK_VIDEOS.work.label}
        cta={{ label: "Start a project", to: "/contact" }}
      />

      <section className="py-8 px-6 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4 font-medium">
            Filter by industry
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setActiveIndustry(null)}
              className={`px-4 py-2 rounded-full border text-sm transition-colors ${
                activeIndustry === null
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border bg-background text-muted-foreground hover:text-foreground"
              }`}
            >
              All
            </button>
            {INDUSTRIES.map((ind) => {
              const Icon = ind.icon;
              const active = activeIndustry === ind.id;
              return (
                <button
                  key={ind.id}
                  type="button"
                  onClick={() => setActiveIndustry(ind.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm transition-colors ${
                    active
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-background text-muted-foreground hover:text-foreground hover:border-primary/30"
                  }`}
                >
                  <Icon size={13} className={active ? "text-primary" : "text-primary/70"} />
                  {ind.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <WorkSection
        activeIndustry={activeIndustry}
        onClearFilter={() => setActiveIndustry(null)}
        hideHeader
      />
      <CaseStudiesSection />
    </>
  );
}
