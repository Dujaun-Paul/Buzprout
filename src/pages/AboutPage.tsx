import PageHeader from "../components/PageHeader";
import AboutSection from "../components/AboutSection";
import ProductsSection from "../components/ProductsSection";
import WhySection from "../components/WhySection";
import ProcessSection from "../components/ProcessSection";
import { STOCK_VIDEOS } from "../data/videos";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={<>Caribbean-built. Outcome-focused.</>}
        description="A digital business solutions studio for SMEs who need more than a pretty website."
        videoSrc={STOCK_VIDEOS.about.src}
        videoLabel={STOCK_VIDEOS.about.label}
        cta={{ label: "Book a discovery call", to: "/contact" }}
      />
      <AboutSection compact />
      <ProductsSection />
      <WhySection />
      <ProcessSection />
    </>
  );
}
