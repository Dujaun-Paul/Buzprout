import { useEffect, useState } from "react";

const STORAGE_KEY = "buzprout-cookie-consent";

type Consent = "accepted" | "essential";

function readConsent(): Consent | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    if (value === "accepted" || value === "essential") return value;
  } catch {
    // ignore private mode / blocked storage
  }
  return null;
}

function writeConsent(value: Consent) {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // ignore
  }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(readConsent() === null);
  }, []);

  function choose(value: Consent) {
    writeConsent(value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[60] p-4 pb-[calc(1rem+4.5rem)] md:pb-4 pointer-events-none"
    >
      <div className="pointer-events-auto max-w-3xl mx-auto rounded-2xl border border-border bg-background/95 backdrop-blur-xl shadow-soft px-5 py-4 md:px-6 md:py-5">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          <p className="text-sm text-muted-foreground leading-relaxed flex-1">
            We use cookies for essential site functions and optional analytics.{" "}
            <a
              href="/cookies.html"
              className="text-primary hover:underline underline-offset-4"
            >
              Cookie policy
            </a>
          </p>
          <div className="flex flex-wrap gap-2 shrink-0">
            <button
              type="button"
              onClick={() => choose("essential")}
              className="px-4 py-2.5 rounded-md border border-border text-sm font-semibold text-foreground hover:border-primary/40 hover:text-primary transition-colors"
            >
              Essential only
            </button>
            <button
              type="button"
              onClick={() => choose("accepted")}
              className="px-4 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90"
            >
              Accept all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
