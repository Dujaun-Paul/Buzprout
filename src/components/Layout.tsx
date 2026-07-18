import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import { BrandLockup, JsonLd } from "./Brand";
import StickyCTA from "./StickyCTA";
import CookieBanner from "./CookieBanner";
import HashScroll from "./HashScroll";
import { CONTACT } from "../data/contact";
import { FOOTER_COMPANY, FOOTER_EXPLORE, NAV_LINKS } from "../data/navigation";

const navClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm transition-colors duration-150 ${
    isActive ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
  }`;

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-background text-foreground min-h-screen antialiased">
      <JsonLd />
      <HashScroll />

      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border backdrop-blur-xl bg-background/90 shadow-soft">
        <div className="max-w-7xl mx-auto px-6 h-16 grid grid-cols-[1fr_auto_1fr] items-center">
          <Link to="/" className="justify-self-start hover:opacity-90 transition-opacity">
            <BrandLockup />
          </Link>

          <nav className="hidden md:flex items-center justify-center gap-7 justify-self-center">
            {NAV_LINKS.map((l) => (
              <NavLink key={l.label} to={l.to} className={navClass}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3 justify-self-end">
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
            <a
              href={CONTACT.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-2 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 active:scale-95 transition-all duration-150 hover-lift"
            >
              {CONTACT.calendlyLabel}
            </a>
          </div>

          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors justify-self-end col-start-3"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border px-6 py-5 flex flex-col gap-5">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.label}
                to={l.to}
                className={navClass}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href={CONTACT.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-2.5 rounded-md bg-primary text-primary-foreground font-semibold text-center"
              onClick={() => setMenuOpen(false)}
            >
              {CONTACT.calendlyLabel}
            </a>
          </div>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      <StickyCTA />
      <CookieBanner />

      <footer className="border-t border-border bg-muted pt-12 pb-32 md:py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <div className="mb-4">
                <BrandLockup />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                Helping Caribbean businesses get more customers, save time, and grow.
              </p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">Explore</div>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                {FOOTER_EXPLORE.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="hover:text-foreground transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">Company</div>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                {FOOTER_COMPANY.map((l) => (
                  <li key={l.label}>
                    {"external" in l ? (
                      <a href={l.to} className="hover:text-foreground transition-colors">{l.label}</a>
                    ) : (
                      <Link to={l.to} className="hover:text-foreground transition-colors">{l.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">Contact</div>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li>
                  <a href={CONTACT.mailto("Hello from Buzprout")} className="hover:text-foreground transition-colors">
                    {CONTACT.email}
                  </a>
                </li>
                <li>
                  <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                    {CONTACT.whatsappLabel}
                  </a>
                </li>
                <li>{CONTACT.hours}</li>
              </ul>
              <a
                href={CONTACT.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                {CONTACT.calendlyLabel} <ArrowRight size={14} />
              </a>
            </div>
          </div>
          <div className="mt-14 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">© 2026 Buzprout. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
