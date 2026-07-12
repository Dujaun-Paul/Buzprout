import { useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  Plus,
  Minus,
  Globe,
  Code2,
  Zap,
  Bot,
  LifeBuoy,
  Truck,
  Heart,
  ShoppingBag,
  Building2,
  Rocket,
} from "lucide-react";

import PricingSection from "./components/PricingSection";
import FlexSection from "./components/FlexSection";
import AcademySection from "./components/AcademySection";
import { CONTACT } from "./data/contact";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Flex", href: "#flex" },
  { label: "Academy", href: "#academy" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

const SERVICES = [
  {
    icon: Globe,
    title: "Brand & Design",
    desc: "Look as polished as the work you do. We help you show up with clarity so customers trust you before they ever pick up the phone.",
    tags: ["Credibility", "First impressions", "Consistency", "Stand out"],
    wide: true,
  },
  {
    icon: Code2,
    title: "Websites",
    desc: "Turn curious visitors into paying customers. Your site should sell while you sleep, not just look good in a portfolio.",
    tags: ["More enquiries", "Clear messaging", "Mobile ready", "Built to convert"],
    wide: false,
  },
  {
    icon: Zap,
    title: "Software Development",
    desc: "Stop running the business out of spreadsheets and WhatsApp threads. Get tools that save hours every week and grow with you.",
    tags: ["Less manual work", "Fewer errors", "Team visibility", "Room to grow"],
    wide: false,
  },
  {
    icon: Bot,
    title: "AI & Automation",
    desc: "Give your team their time back. Routine questions and repetitive tasks get handled automatically so people can focus on work that actually needs them.",
    tags: ["Hours saved", "Faster responses", "Lower workload", "Smarter ops"],
    wide: false,
  },
  {
    icon: LifeBuoy,
    title: "Support & Growth",
    desc: "Your digital systems should keep working long after launch day. We handle the upkeep so you can keep growing without nasty surprises.",
    tags: ["Peace of mind", "Always online", "Stay current", "Strategic advice"],
    wide: false,
  },
];

const INDUSTRIES = [
  { label: "Tourism & Hospitality", icon: Globe },
  { label: "Logistics & Delivery", icon: Truck },
  { label: "Healthcare", icon: Heart },
  { label: "Retail & E-commerce", icon: ShoppingBag },
  { label: "Professional Services", icon: Building2 },
  { label: "Startups", icon: Rocket },
];

const PROJECTS = [
  {
    title: "Immers3D",
    category: "Brand & Web",
    desc: "Tourists can explore Jamaica before they book. Immersive 3D previews turn flat photos into experiences that help visitors feel confident about where they're going.",
    image: "/projects/immers3d.png",
    url: "https://immers3-d.vercel.app/",
    tags: ["Tourism 3.0", "Immersive previews", "More bookings", "Jamaica"],
    impact: "Experience before arrival",
  },
  {
    title: "Wayfora Health",
    category: "Websites & Software",
    desc: "Caribbean patients no longer navigate healthcare alone. Wayfora helps people find subsidies, affordable care, and a clear path through a system that was never built to be simple.",
    image: "/projects/wayfora.png",
    url: "https://wayfora-web.vercel.app/",
    tags: ["Healthcare navigation", "Lower costs", "Clear next steps", "Caribbean"],
    impact: "More health per dollar",
  },
  {
    title: "Waataly",
    category: "Software & IoT",
    desc: "Families and schools in Jamaica no longer climb ladders to guess tank levels. Waataly shows how much water is left and warns you before the taps run dry.",
    image: "/projects/waataly.png",
    url: "https://waataly.com",
    tags: ["Peace of mind", "Fewer dry taps", "Remote visibility", "Jamaica"],
    impact: "Never run out blind",
  },
  {
    title: "Smart Xpress Courier",
    category: "Websites & Software",
    desc: "Guyanese customers shipping from Miami finally know where their packages are. One place for tracking, rates, and support without chasing updates.",
    image: "/projects/smartxpress.png",
    url: "https://smartxpress.net",
    tags: ["Shipment clarity", "Less anxiety", "Self service", "Miami to Guyana"],
    impact: "Confidence at every step",
  },
  {
    title: "Yaadex",
    category: "Software Development",
    desc: "Delivery teams stopped losing orders in WhatsApp chats. Yaadex gives dispatchers one calm view of riders, jobs, and customer updates as volume grows.",
    image: "/projects/yaadex.png",
    url: "https://yaadex.com",
    tags: ["Less chaos", "Happy customers", "Scale without stress", "Jamaica"],
    impact: "Grow without the mess",
  },
  {
    title: "Autokima",
    category: "Brand & Web",
    desc: "A waitlist for people tired of surprise subscription charges. Clear story, simple signup, and momentum building before launch.",
    image: "/projects/autokima.png",
    url: "https://autokima.com",
    tags: ["Trust at first click", "Early signups", "Clear value", "Launch ready"],
    impact: "Building demand early",
  },
];

const WHY = [
  {
    number: "01",
    title: "One partner, full stack",
    desc: "One team handles your brand, site, software, and automation. No chasing five vendors or repeating yourself in every handoff.",
  },
  {
    number: "02",
    title: "Business outcomes first",
    desc: "We care about leads won, hours saved, and money kept. Not how many pages we shipped or how pretty the repo looks.",
  },
  {
    number: "03",
    title: "Built for SMEs",
    desc: "Serious capability without enterprise price tags or bloated builds. You get what you need to grow, scoped to what you can actually use.",
  },
  {
    number: "04",
    title: "Long-term partnership",
    desc: "We stick around after launch. Your systems get maintained, improved, and scaled as your business changes.",
  },
];

const STEPS = [
  { step: "01", label: "Discover", desc: "We learn what success looks like for you and where you are today." },
  { step: "02", label: "Plan", desc: "You get a clear scope, timeline, and budget before anything gets built." },
  { step: "03", label: "Build", desc: "Regular demos keep you in the loop. No disappearing for months." },
  { step: "04", label: "Launch", desc: "Go live smoothly with everything tested and your team ready." },
  { step: "05", label: "Support", desc: "We stay close so your investment keeps paying off." },
];

const TESTIMONIALS = [
  {
    quote: "Buzprout replaced three separate vendors we were managing. The new platform launched on time and we saw a 40% increase in online enquiries within the first month.",
    name: "Marcus O.",
    role: "Director, Coastal Freight Solutions",
    initial: "M",
  },
  {
    quote: "They understood exactly what we needed before we did. The booking system they built for our resort has been one of the best investments we have ever made.",
    name: "Priya S.",
    role: "Operations Manager, Horizon Resorts",
    initial: "P",
  },
  {
    quote: "The AI chatbot now handles 70% of routine customer queries. Our team can focus on work that actually requires human judgement. Game-changing.",
    name: "Daniel M.",
    role: "CEO, MedAccess Clinics",
    initial: "D",
  },
];

const FAQS = [
  {
    q: "Do you publish fixed prices?",
    a: "The ranges on our packages page are starting points. Every business is different, so we confirm scope and give you a firm quote after a discovery call. No surprises once we agree on what you're getting.",
  },
  {
    q: "Which package should I start with?",
    a: "If you mainly need to be found online, start with a starter website or landing page. If you need bookings, inquiries, or internal tools, look at our growth packages. We'll help you pick the right entry point on a free call.",
  },
  {
    q: "Can I upgrade later?",
    a: "Yes. The packages are designed as a ladder. Many clients begin with a site, add booking or a dashboard, then move into custom software and a monthly retainer as the business grows.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes. Buzprout Flex lets you pay a deposit upfront and spread the rest over 6 to 18 months with a plan fee on the financed portion. You use the site while you pay; ownership transfers when the plan is complete. We also offer milestone payments and Build + Care for entry tier sites.",
  },
  {
    q: "What is Buzprout Flex?",
    a: "Flex is our build now, pay over time option for growth and systems projects. Example: a JMD 400,000 build might start with a JMD 160,000 deposit and about JMD 23,000 per month for 12 months. It is a commercial payment plan, not a loan. Terms are confirmed in your contract after a discovery call.",
  },
  {
    q: "Why does care start at JMD 5,000 but you also show JMD 15,000?",
    a: "Care Essential from JMD 5,000 covers hosting, backups, and security with no edit hours included. Care Standard around JMD 15,000 includes 2 hours of updates per month plus WhatsApp support. Different scope, not the same product.",
  },
  {
    q: "Do you teach DIY instead of building for me?",
    a: "We offer both. The Buzprout Academy teaches you to launch a credible site with AI and modern tools. When you outgrow DIY, Flex or a full build is the next step. Graduates get a discount on their first Flex deposit.",
  },
  {
    q: "What size businesses do you work with?",
    a: "We mainly work with SMEs, usually teams of 5 to 200 people in tourism, logistics, healthcare, retail, and professional services. We also help early stage startups building their first product.",
  },
  {
    q: "How does the discovery call work?",
    a: "It's a free 30 minute call where we learn about your business and what you're trying to achieve. No hard sell. We'll tell you honestly if we're the right fit and what working together would look like.",
  },
  {
    q: "Do you do one-off projects or ongoing work?",
    a: "Both. Many clients start with one project, like a website or custom tool, then move into ongoing support as they grow. We're built for long term relationships but happy to scope a single deliverable.",
  },
  {
    q: "How long does a typical project take?",
    a: "A business website usually takes 3 to 6 weeks. Custom software runs 6 to 16 weeks depending on scope. We agree timelines upfront during planning so there are no surprises.",
  },
  {
    q: "Can you integrate with our existing systems?",
    a: "Yes. We regularly plug into CRMs, payment gateways, booking platforms, and other tools you already use. We map what you have first so new work fits your setup instead of fighting it.",
  },
  {
    q: "What happens after we launch?",
    a: "Most clients move to a care plan. Essential starts around JMD 5,000 for hosting only. Standard and Plus add included edit hours and priority support. Software clients often use a systems retainer instead.",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-background text-foreground min-h-screen antialiased">

      {/* ── Navigation ── */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border backdrop-blur-xl bg-background/90 shadow-soft">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-heading text-xl tracking-tight">
            Buzprout
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(l => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
            <a
              href={CONTACT.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-2 rounded-md bg-primary text-background font-semibold hover:opacity-90 active:scale-95 transition-all duration-150"
            >
              {CONTACT.calendlyLabel}
            </a>
          </div>

          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border px-6 py-5 flex flex-col gap-5">
            {NAV_LINKS.map(l => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href={CONTACT.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-2.5 rounded-md bg-primary text-background font-semibold text-center"
              onClick={() => setMenuOpen(false)}
            >
              {CONTACT.calendlyLabel}
            </a>
          </div>
        )}
      </header>

      <main>

        {/* ── Hero ── */}
        <section className="relative pt-36 pb-28 px-6 overflow-hidden">
          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(99,91,255,0.09) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(99,91,255,0.07),transparent)]" />
          <div className="absolute top-0 right-0 w-[480px] h-[480px] bg-[radial-gradient(circle,rgba(0,212,255,0.12),transparent_70%)] blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />

          <div className="relative max-w-7xl mx-auto">
            <div className="max-w-5xl">
              <h1
                className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.04] tracking-tight text-foreground mb-7"
              >
                Technology that<br />
                helps businesses<br />
                <span className="text-primary">grow.</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-11 leading-relaxed">
                We build digital systems that help businesses grow and operate more efficiently. Brand, web, software, and automation under one roof.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={CONTACT.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-primary text-background font-semibold hover:opacity-90 active:scale-95 transition-all duration-150 text-sm"
                >
                  {CONTACT.calendlyLabel} <ArrowRight size={16} />
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-border text-foreground hover:border-primary/40 hover:text-primary transition-colors duration-150 text-sm"
                >
                  View Our Work <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-14">
              {[
                { num: "50+", label: "Businesses helped to grow" },
                { num: "3×", label: "Average revenue lift for clients" },
                { num: "5", label: "Ways we help under one roof" },
                { num: "< 3s", label: "Sites built to load fast" },
              ].map(s => (
                <div key={s.label}>
                  <div
                    className="text-4xl font-bold text-primary mb-1.5"
                  >
                    {s.num}
                  </div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Industries ── */}
        <section className="py-10 px-6 section-muted">
          <div className="max-w-7xl mx-auto">
            <p
              className="text-xs text-muted-foreground uppercase tracking-widest mb-5 font-medium"
            >
              Industries we serve
            </p>
            <div className="flex flex-wrap gap-3">
              {INDUSTRIES.map(ind => {
                const Icon = ind.icon;
                return (
                  <div
                    key={ind.label}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors duration-150 cursor-default select-none"
                  >
                    <Icon size={13} className="text-primary" />
                    {ind.label}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section id="services" className="py-28 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <p className="text-xs text-primary uppercase tracking-widest font-medium mb-4">
                Services
              </p>
              <h2
                className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-5"
              >
                Everything your business<br className="hidden md:block" />
                needs, under one roof.
              </h2>
              <p className="text-muted-foreground max-w-lg leading-relaxed">
                You shouldn't need five different vendors to look credible, sell online, and run your ops. We handle it all so you can stay focused on the business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICES.map((svc) => {
                const Icon = svc.icon;
                return (
                  <div
                    key={svc.title}
                    className={`group p-7 rounded-2xl border border-border bg-card shadow-soft hover:border-primary/30 hover:shadow-card transition-all duration-200 ${svc.wide ? "md:col-span-2" : ""}`}
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/18 transition-colors duration-150">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <h3
                      className="text-lg font-semibold text-foreground mb-2.5"
                    >
                      {svc.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">{svc.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {svc.tags.map(t => (
                        <span
                          key={t}
                          className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <PricingSection />

        <FlexSection />

        <AcademySection />

        {/* ── Featured Work ── */}
        <section id="work" className="py-28 px-6 section-muted">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-16">
              <div>
                <p className="text-xs text-primary uppercase tracking-widest font-medium mb-4">
                  Portfolio
                </p>
                <h2
                  className="text-4xl md:text-5xl font-bold tracking-tight text-foreground"
                >
                  Real results for<br />real businesses.
                </h2>
              </div>
              <a
                href="#contact"
                className="hidden md:inline-flex items-center gap-1.5 text-sm text-primary hover:underline underline-offset-4"
              >
                Discuss your project <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {PROJECTS.map(proj => (
                <a
                  key={proj.title}
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl overflow-hidden border border-border bg-card shadow-soft hover:border-primary/30 hover:shadow-card transition-all duration-200"
                >
                  <div className="relative h-56 overflow-hidden bg-muted">
                    <img
                      src={proj.image}
                      alt={`${proj.title} website preview`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/10 to-transparent" />
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="text-xs px-2.5 py-1 rounded-full bg-primary text-primary-foreground font-medium">
                        {proj.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 flex items-center gap-2">
                      <span className="text-xs px-2.5 py-1.5 rounded-full bg-background/80 backdrop-blur-sm text-primary font-semibold border border-primary/20">
                        {proj.impact}
                      </span>
                      <span className="w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border border-primary/20 flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="text-xl font-semibold text-foreground mb-2.5">
                      {proj.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">{proj.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {proj.tags.map(t => (
                        <span
                          key={t}
                          className="text-xs px-2.5 py-1 rounded-full border border-border text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Buzprout ── */}
        <section className="py-28 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <p className="text-xs text-primary uppercase tracking-widest font-medium mb-4">
                  Why Buzprout
                </p>
                <h2
                  className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-7"
                >
                  One partner.<br />Full accountability.
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4 max-w-md">
                  Most SMEs juggle four or five vendors just to keep their digital side running. We replace that mess with one team that actually knows your business.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-10 max-w-md">
                  We're not the kind of agency that builds something and vanishes. We stay close, keep improving, and measure ourselves by what changes for you.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-primary text-background font-semibold hover:opacity-90 active:scale-95 transition-all duration-150 text-sm"
                >
                  Start the conversation <ArrowRight size={16} />
                </a>
              </div>

              <div className="space-y-3">
                {WHY.map(w => (
                  <div
                    key={w.number}
                    className="flex gap-5 p-6 rounded-2xl border border-border bg-card shadow-soft hover:border-primary/30 hover:shadow-card transition-all duration-200"
                  >
                    <span
                      className="text-xs text-primary/50 mt-0.5 w-7 shrink-0 font-medium"
                    >
                      {w.number}
                    </span>
                    <div>
                      <h4
                        className="text-base font-semibold text-foreground mb-1.5"
                      >
                        {w.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Process ── */}
        <section id="process" className="py-28 px-6 section-muted">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-xs text-primary uppercase tracking-widest font-medium mb-4">
                Process
              </p>
              <h2
                className="text-4xl md:text-5xl font-bold tracking-tight text-foreground"
              >
                How we work together.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6 relative">
              {STEPS.map((s, i) => (
                <div key={s.step} className="relative flex flex-col items-center text-center group">
                  <div
                    className="relative w-14 h-14 rounded-full border-2 border-border bg-background flex items-center justify-center mb-5 text-primary font-bold group-hover:border-primary group-hover:bg-primary/10 transition-all duration-200 z-10"
                  >
                    {s.step}
                    {i < STEPS.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 left-[calc(100%+4px)] w-[calc(100%+1.5rem)] h-px bg-border -translate-y-1/2" />
                    )}
                  </div>
                  <h4
                    className="font-semibold text-foreground mb-2"
                  >
                    {s.label}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed max-w-[140px]">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="py-28 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xs text-primary uppercase tracking-widest font-medium mb-4">
                Testimonials
              </p>
              <h2
                className="text-4xl md:text-5xl font-bold tracking-tight text-foreground"
              >
                What our clients say.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {TESTIMONIALS.map(t => (
                <div
                  key={t.name}
                  className="p-8 rounded-2xl border border-border bg-card shadow-soft hover:border-primary/30 hover:shadow-card transition-all duration-200 flex flex-col"
                >
                  <div className="flex gap-0.5 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-primary fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-foreground/85 leading-relaxed mb-8 flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center text-primary text-sm font-bold shrink-0">
                      {t.initial}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="py-28 px-6 section-muted">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xs text-primary uppercase tracking-widest font-medium mb-4">
                FAQ
              </p>
              <h2
                className="text-4xl font-bold tracking-tight text-foreground"
              >
                Common questions.
              </h2>
            </div>

            <div className="space-y-2">
              {FAQS.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-border bg-card shadow-soft overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-muted/20 transition-colors duration-150 gap-4"
                  >
                    <span className="text-sm font-medium text-foreground">{faq.q}</span>
                    {openFaq === i
                      ? <Minus size={15} className="text-primary shrink-0" />
                      : <Plus size={15} className="text-muted-foreground shrink-0" />
                    }
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6">
                      <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section id="contact" className="relative py-36 px-6 overflow-hidden">
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(99,91,255,0.08) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,rgba(99,91,255,0.05),transparent)]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse,rgba(0,212,255,0.1),transparent_70%)] blur-3xl pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

          <div className="relative max-w-4xl mx-auto text-center">
            <p className="text-xs text-primary uppercase tracking-widest font-medium mb-5">
              Get started
            </p>
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-7"
            >
              Ready to build something<br />
              <span className="text-primary">that works?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-lg mx-auto mb-12 leading-relaxed">
              Book a free 30 minute call. We'll listen, give you an honest read on your options, and show you what's actually possible.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={CONTACT.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-md bg-primary text-background font-semibold hover:opacity-90 active:scale-95 transition-all duration-150 text-base"
              >
                {CONTACT.calendlyLabel} <ArrowRight size={18} />
              </a>
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-md border border-border text-foreground hover:border-primary/40 hover:text-primary transition-colors duration-150 text-base"
              >
                <svg className="w-5 h-5 text-primary fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {CONTACT.whatsappLabel}
              </a>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              Or email{" "}
              <a
                href={CONTACT.mailto("Project enquiry")}
                className="text-primary hover:underline underline-offset-4"
              >
                {CONTACT.email}
              </a>
            </p>

            {/* Trust note */}
            <p className="mt-6 text-xs text-muted-foreground">
              Free call. No commitment. Honest advice.
            </p>
          </div>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-border bg-muted py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="lg:col-span-1">
              <div className="font-heading text-xl tracking-tight mb-4">
                Buzprout
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                We help businesses look credible, sell online, and run smarter.
              </p>
            </div>

            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">Services</div>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                {["Brand & Design", "Websites", "Software Development", "AI & Automation", "Care Plans"].map(s => (
                  <li key={s}><a href="#services" className="hover:text-foreground transition-colors">{s}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">Company</div>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                {[
                  { label: "About", href: "#" },
                  { label: "Services", href: "#services" },
                  { label: "Pricing", href: "#pricing" },
                  { label: "Flex", href: "#flex" },
                  { label: "Academy", href: "#academy" },
                  { label: "Portfolio", href: "#work" },
                  { label: "Process", href: "#process" },
                  { label: "FAQ", href: "#faq" },
                  { label: "Contact", href: "#contact" },
                ].map(l => (
                  <li key={l.label}><a href={l.href} className="hover:text-foreground transition-colors">{l.label}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">Contact</div>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li>
                  <a
                    href={CONTACT.mailto("Hello from Buzprout")}
                    className="hover:text-foreground transition-colors"
                  >
                    {CONTACT.email}
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    {CONTACT.whatsappLabel}
                  </a>
                </li>
                <li>{CONTACT.hours}</li>
              </ul>
              <a
                href={CONTACT.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-primary text-background text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                {CONTACT.calendlyLabel} <ArrowRight size={14} />
              </a>
            </div>
          </div>

          <div className="mt-14 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">© 2026 Buzprout. All rights reserved.</p>
            <p className="text-xs text-muted-foreground">Built with intention. Maintained with care.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
