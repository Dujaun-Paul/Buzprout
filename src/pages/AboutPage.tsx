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
        title={<>Caribbean-built. Plain talk.</>}
        description="We start with your problem in plain English, then set up the website or software that fixes it."
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
