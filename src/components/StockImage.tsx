type StockImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function StockImage({ src, alt, className = "" }: StockImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`w-full h-full object-cover ${className}`}
    />
  );
}
