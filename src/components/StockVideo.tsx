import { useEffect, useRef } from "react";

type StockVideoProps = {
  src: string;
  label: string;
  className?: string;
  overlayClassName?: string;
};

export default function StockVideo({
  src,
  label,
  className = "",
  overlayClassName = "bg-background/75",
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
        className="absolute inset-0 w-full h-full object-cover"
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className={`absolute inset-0 ${overlayClassName}`} />
      <span className="sr-only">{label}</span>
    </div>
  );
}
