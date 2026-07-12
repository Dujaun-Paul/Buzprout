import PageHeader from "../components/PageHeader";
import OutcomesList from "../components/OutcomesList";
import { STOCK_VIDEOS } from "../data/videos";

export default function OutcomesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Outcomes"
        title={<>Built for the results you actually need</>}
        description="We start with what's not working in your business, then build the right fix."
        videoSrc={STOCK_VIDEOS.outcomes.src}
        videoLabel={STOCK_VIDEOS.outcomes.label}
        cta={{ label: "Discuss your goals", to: "/contact" }}
      />
      <OutcomesList />
    </>
  );
}
