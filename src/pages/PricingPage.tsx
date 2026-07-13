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
        title={<>Clear starting points. Firm quotes after discovery.</>}
        description="Prices below help you plan. We confirm the full quote on a free call before you commit."
        imageSrc={STOCK_IMAGES.workspace.src}
        imageAlt={STOCK_IMAGES.workspace.alt}
        cta={{ label: "Get a quote", to: "/contact" }}
      />
      <MaturitySection />
      <PricingSection />
      <FlexSection />
      <FaqSection />
    </>
  );
}
