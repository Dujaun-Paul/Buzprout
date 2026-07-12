import { JSON_LD } from "../data/site";

export function BrandLockup() {
  return (
    <span className="font-heading text-xl tracking-tight">Buzprout</span>
  );
}

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
    />
  );
}
