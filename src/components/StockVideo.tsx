import { useEffect, useRef, type CSSProperties } from "react";

type StockVideoProps = {
  src: string;
  label: string;
  className?: string;
  overlayClassName?: string;
  overlayStyle?: CSSProperties;
};

const DEFAULT_OVERLAY: CSSProperties = {
  background:
    "radial-gradient(ellipse 75% 70% at 50% 42%, color-mix(in srgb, var(--background) 70%, transparent), color-mix(in srgb, var(--background) 30%, transparent) 72%, color-mix(in srgb, var(--background) 18%, transparent))",
};

export default function StockVideo({
  src,
  label,
  className = "",
  overlayClassName = "",
  overlayStyle = DEFAULT_OVERLAY,
}: StockVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.play().catch(() => {});
  }, [src]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <video
        ref={ref}
        className="absolute inset-0 w-full h-full object-cover brightness-[1.08] contrast-[1.06] saturate-[1.1]"
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className={`absolute inset-0 ${overlayClassName}`} style={overlayStyle} />
      <span className="sr-only">{label}</span>
    </div>
  );
}
