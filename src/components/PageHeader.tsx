import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import StockVideo from "./StockVideo";
import StockImage from "./StockImage";

type PageHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  videoSrc?: string;
  videoLabel?: string;
  imageSrc?: string;
  imageAlt?: string;
  cta?: { label: string; to: string };
};

export default function PageHeader({
  eyebrow,
  title,
  description,
  videoSrc,
  videoLabel,
  imageSrc,
  imageAlt,
  cta,
}: PageHeaderProps) {
  const hasVideo = Boolean(videoSrc && videoLabel);
  const hasImage = Boolean(imageSrc && imageAlt);

  return (
    <section className={`relative px-6 overflow-hidden ${hasVideo ? "pt-36 pb-24" : "pt-32 pb-16"}`}>
      {hasVideo && (
        <StockVideo
          src={videoSrc!}
          label={videoLabel!}
          overlayStyle={{
            background:
              "radial-gradient(ellipse 75% 70% at 50% 40%, color-mix(in srgb, var(--background) 74%, transparent), color-mix(in srgb, var(--background) 34%, transparent) 70%, color-mix(in srgb, var(--background) 20%, transparent))",
          }}
        />
      )}
      {!hasVideo && (
        <>
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(27,122,74,0.07) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(27,122,74,0.06),transparent)]" />
        </>
      )}

      <div className="relative max-w-3xl mx-auto text-center">
        <p className="text-xs text-primary uppercase tracking-widest font-medium mb-4">{eyebrow}</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-5">{title}</h1>
        {description && (
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">{description}</p>
        )}
        {cta && (
          <Link
            to={cta.to}
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 text-sm hover-lift"
          >
            {cta.label} <ArrowRight size={16} />
          </Link>
        )}
        {hasImage && (
          <div className="mt-10 max-w-4xl mx-auto rounded-2xl overflow-hidden border border-border aspect-[21/9] shadow-soft">
            <StockImage src={imageSrc!} alt={imageAlt!} />
          </div>
        )}
      </div>
    </section>
  );
}
