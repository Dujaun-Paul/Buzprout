import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import OutcomesList from "../components/OutcomesList";
import { STOCK_VIDEOS } from "../data/videos";

export default function OutcomesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Outcomes"
        title={<>Real fixes for real business problems</>}
        description="We hear what's not working, then set up the website, booking, or WhatsApp help that fixes it."
        videoSrc={STOCK_VIDEOS.outcomes.src}
        videoLabel={STOCK_VIDEOS.outcomes.label}
        cta={{ label: "Tell us what's slowing you down", to: "/contact" }}
      />
      <OutcomesList />
      <section className="section-y-md px-6 section-muted">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs text-primary uppercase tracking-widest font-medium mb-4">
            Not sure which fits?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Get your Business Systems Score
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Answer 12 quick questions online. We score your setup and show what to fix first.
          </p>
          <Link
            to="/assessment"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 text-sm"
          >
            Take the free assessment <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
