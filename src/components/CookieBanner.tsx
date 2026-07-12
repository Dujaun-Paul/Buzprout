import { useEffect, useState } from "react";

const STORAGE_KEY = "buzprout-cookie-consent";

function hasConsented() {
  try {
    return localStorage.getItem(STORAGE_KEY) === "ok";
  } catch {
    return false;
  }
}

function saveConsent() {
  try {
    localStorage.setItem(STORAGE_KEY, "ok");
  } catch {
    // ignore
  }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!hasConsented());
  }, []);

  function accept() {
    saveConsent();
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Cookie notice"
      className="fixed inset-x-0 bottom-0 z-[60] p-4 pb-[calc(1rem+4.5rem)] md:pb-4 pointer-events-none"
    >
      <div className="pointer-events-auto max-w-3xl mx-auto rounded-2xl border border-border bg-background/95 backdrop-blur-xl shadow-soft px-5 py-4 md:px-6 md:py-5">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          <p className="text-sm text-muted-foreground leading-relaxed flex-1">
            We use essential cookies to keep this site working. Third-party tools like Calendly may
            set their own cookies when you use them.{" "}
            <a
              href="/cookies.html"
              className="text-primary hover:underline underline-offset-4"
            >
              Cookie policy
            </a>
          </p>
          <button
            type="button"
            onClick={accept}
            className="px-4 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 shrink-0"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
