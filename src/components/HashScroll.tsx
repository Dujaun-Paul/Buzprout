import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scrolls to hash targets after client-side navigation (e.g. /pricing#flex). */
export default function HashScroll() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace(/^#/, "");
    const scroll = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    requestAnimationFrame(() => setTimeout(scroll, 50));
  }, [pathname, hash]);

  return null;
}
