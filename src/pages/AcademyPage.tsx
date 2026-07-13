import PageHeader from "../components/PageHeader";
import AcademySection from "../components/AcademySection";

export default function AcademyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Academy"
        title={<>Learn to launch. Grow into a full build.</>}
        description="You learn to build it yourself with our courses. When you outgrow DIY, we build it properly for you."
      />
      <AcademySection />
    </>
  );
}
