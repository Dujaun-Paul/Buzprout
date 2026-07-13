import PageHeader from "../components/PageHeader";
import MaturitySection from "../components/MaturitySection";
import PricingSection from "../components/PricingSection";
import FlexSection from "../components/FlexSection";
import FaqSection from "../components/FaqSection";
import { STOCK_IMAGES } from "../data/images";

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title={<>Clear starting points. Firm quotes after a free call.</>}
        description="We talk through your problem on a free call, match you to the right package, then give you a firm quote."
        imageSrc={STOCK_IMAGES.workspace.src}
        imageAlt={STOCK_IMAGES.workspace.alt}
        cta={{ label: "Let's Improve Your Business", to: "/contact" }}
      />
      <MaturitySection />
      <PricingSection />
      <FlexSection />
      <FaqSection />
    </>
  );
}
