import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import StockVideo from "../components/StockVideo";
import StockImage from "../components/StockImage";
import OutcomesList from "../components/OutcomesList";
import ProcessSection from "../components/ProcessSection";
import InsightsSection from "../components/InsightsSection";
import { CONTACT } from "../data/contact";
import { PROJECTS } from "../data/projects";
import { SITE } from "../data/site";
import { STOCK_VIDEOS } from "../data/videos";
import { STOCK_IMAGES } from "../data/images";

export default function HomePage() {
  const featured = PROJECTS.slice(0, 3);

  return (
    <>
      <section className="relative pt-36 pb-28 px-6 overflow-hidden min-h-[85vh] flex items-center">
        <StockVideo
          src={STOCK_VIDEOS.hero.src}
          label={STOCK_VIDEOS.hero.label}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(27,122,74,0.06),transparent)]" />

        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-semibold leading-[1.08] tracking-tight text-foreground mb-7 animate-fade-up">
            Technology that helps your business{" "}
            <span className="text-primary">grow.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-11 leading-relaxed animate-fade-up delay-100">
            {SITE.subtagline}
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-up delay-200">
            <a
              href={CONTACT.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 text-sm hover-lift"
            >
              {CONTACT.calendlyLabel} <ArrowRight size={16} />
            </a>
            <Link
              to="/assessment"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-border text-foreground hover:border-primary/40 hover:text-primary transition-colors text-sm"
            >
              Free systems assessment <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl overflow-hidden border border-border shadow-soft aspect-[4/3] order-2 lg:order-1">
            <StockImage src={STOCK_IMAGES.caribbean.src} alt={STOCK_IMAGES.caribbean.alt} />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs text-primary uppercase tracking-widest font-medium mb-4">Who we help</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Business owners across the Caribbean
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We hear what's slowing you down, then set up websites, booking, and WhatsApp help that fits your business.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline underline-offset-4"
            >
              About Buzprout <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <OutcomesList limit={3} showLink />

      <section className="py-20 px-6 section-muted">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-xs text-primary uppercase tracking-widest font-medium mb-4">Portfolio</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
                Real businesses, real results
              </h2>
              <p className="text-muted-foreground max-w-xl">
                We fix what's costing you customers or time with websites, booking, and custom tools.
              </p>
            </div>
            <Link
              to="/work"
              className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline underline-offset-4"
            >
              See all work <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featured.map((proj) => (
              <a
                key={proj.title}
                href={proj.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl overflow-hidden border border-border bg-card shadow-soft hover:border-primary/30 transition-all duration-200 hover-lift"
              >
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={proj.image}
                    alt={`${proj.title} preview`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs text-primary font-medium mb-1">{proj.category}</p>
                  <h3 className="font-semibold text-foreground">{proj.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{proj.impact}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />

      <InsightsSection />

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-5">
            Ready to fix what's slowing you down?
          </h2>
          <p className="text-muted-foreground mb-8">
            Take a 3-minute score or book a free call. We'll tell you what's slowing you down and what to fix first.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/assessment"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 text-sm"
            >
              Take the free assessment <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-border text-foreground hover:border-primary/40 hover:text-primary text-sm"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
