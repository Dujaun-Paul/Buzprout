import PageHeader from "../components/PageHeader";
import AcademySection from "../components/AcademySection";

export default function AcademyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Academy"
        title={<>Learn to launch. Grow into a full build.</>}
        description="DIY courses for founders who want a credible site now and a studio partner when they outgrow it."
      />
      <AcademySection />
    </>
  );
}
