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
        description="Book a call, send a message, or tell us what's slowing you down."
        videoSrc={STOCK_VIDEOS.contact.src}
        videoLabel={STOCK_VIDEOS.contact.label}
      />
      <ContactSection compact />
      <FaqSection />
    </>
  );
}
