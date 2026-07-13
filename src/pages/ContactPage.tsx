import PageHeader from "../components/PageHeader";
import ContactSection from "../components/ContactSection";
import FaqSection from "../components/FaqSection";
import { STOCK_VIDEOS } from "../data/videos";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            What business problem<br />
            <span className="text-primary">are you solving?</span>
          </>
        }
        description="Tell us what's slowing you down. We'll point you to the right fix on a free call."
        videoSrc={STOCK_VIDEOS.contact.src}
        videoLabel={STOCK_VIDEOS.contact.label}
      />
      <ContactSection compact />
      <FaqSection />
    </>
  );
}
