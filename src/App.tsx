import { useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  Plus,
  Minus,
  Megaphone,
  MessageSquare,
  Sparkles,
  Workflow,
  TrendingUp,
  Truck,
  Heart,
  ShoppingBag,
  Building2,
  Rocket,
  Globe,
  UtensilsCrossed,
} from "lucide-react";

import PricingSection from "./components/PricingSection";
import FlexSection from "./components/FlexSection";
import AcademySection from "./components/AcademySection";
import { CONTACT } from "./data/contact";

const NAV_LINKS = [
  { label: "Outcomes", href: "#outcomes" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Flex", href: "#flex" },
  { label: "Academy", href: "#academy" },
  { label: "FAQ", href: "#faq" },
];

const OUTCOMES = [
  {
    icon: Megaphone,
    title: "Acquire Customers",
    desc: "If customers can't find you or don't trust what they see online, enquiries go elsewhere. We build sites, landing pages, and booking tools that bring people in.",
    tags: ["More enquiries", "More bookings", "Credibility", "Found online"],
    wide: true,
  },
  {
    icon: MessageSquare,
    title: "Improve Customer Communication",
    desc: "If your team answers the same WhatsApp questions every day, hours disappear on autopilot. We set up automation so routine messages handle themselves.",
    tags: ["Hours saved", "Faster responses", "24/7 support", "Less repetition"],
    wide: false,
  },
  {
    icon: Sparkles,
    title: "Improve Customer Experience",
    desc: "When customers wait on hold or chase you for updates, they don't come back. We build portals, booking flows, and tracking so they can help themselves.",
    tags: ["Self-service", "Fewer calls", "Better reviews", "Repeat business"],
    wide: false,
  },
  {
    icon: Workflow,
    title: "Streamline Operations",
    desc: "Running the business from spreadsheets and WhatsApp threads only works for so long. We build dashboards and custom tools that cut manual work and show you what's happening.",
    tags: ["Less manual work", "Fewer errors", "Team visibility", "Clearer ops"],
    wide: false,
  },
  {
    icon: TrendingUp,
    title: "Scale the Business",
    desc: "What worked at 10 customers breaks at 100. We build platforms, integrations, and systems that grow with you as demand increases.",
    tags: ["Room to grow", "Integrations", "Multi-location", "Long-term platform"],
    wide: false,
  },
];

const INDUSTRIES = [
  { label: "Tourism & Hospitality", icon: Globe },
  { label: "Logistics & Courier", icon: Truck },
  { label: "Healthcare", icon: Heart },
  { label: "Beauty & Wellness", icon: Sparkles },
  { label: "Restaurants & Food", icon: UtensilsCrossed },
  { label: "Retail & E-commerce", icon: ShoppingBag },
  { label: "Professional Services", icon: Building2 },
  { label: "Startups & SMEs", icon: Rocket },
];

const PROJECTS = [
  {
    title: "Immers3D",
    category: "More bookings",
    desc: "Tourists can explore Jamaica before they book. Immersive 3D previews turn flat photos into experiences that help visitors feel confident about where they're going.",
    image: "/projects/immers3d.png",
    url: "https://immers3-d.vercel.app/",
    tags: ["Tourism", "Immersive previews", "Booking confidence", "Jamaica"],
    impact: "Experience before arrival",
  },
  {
    title: "Wayfora Health",
    category: "Better patient outcomes",
    desc: "Caribbean patients no longer navigate healthcare alone. Wayfora helps people find subsidies, affordable care, and a clear path through a system that was never built to be simple.",
    image: "/projects/wayfora.png",
    url: "https://wayfora-web.vercel.app/",
    tags: ["Healthcare", "Lower costs", "Clear next steps", "Caribbean"],
    impact: "More health per dollar",
  },
  {
    title: "Waataly",
    category: "Operational visibility",
    desc: "Families and schools in Jamaica no longer climb ladders to guess tank levels. Waataly shows how much water is left and warns you before the taps run dry.",
    image: "/projects/waataly.png",
    url: "https://waataly.com",
    tags: ["IoT monitoring", "Fewer dry taps", "Remote visibility", "Jamaica"],
    impact: "Never run out blind",
  },
  {
    title: "Smart Xpress Courier",
    category: "Fewer status calls",
    desc: "Guyanese customers shipping from Miami finally know where their packages are. One place for tracking, rates, and support without chasing updates.",
    image: "/projects/smartxpress.png",
    url: "https://smartxpress.net",
    tags: ["Shipment clarity", "Self service", "Less anxiety", "Miami to Guyana"],
    impact: "Confidence at every step",
  },
  {
    title: "Yaadex",
    category: "Scale without chaos",
    desc: "Delivery teams stopped losing orders in WhatsApp chats. Yaadex gives dispatchers one calm view of riders, jobs, and customer updates as volume grows.",
    image: "/projects/yaadex.png",
    url: "https://yaadex.com",
    tags: ["Less chaos", "Happy customers", "Dispatch clarity", "Jamaica"],
    impact: "Grow without the mess",
  },
  {
    title: "Autokima",
    category: "Early demand",
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
    title: "We solve problems, not sell deliverables",
    desc: "Most agencies hand you a website and move on. We start with what's broken in your business and build technology around that.",
  },
  {
    number: "02",
    title: "Business before technology",
    desc: "We never open with a tech stack. We ask what you need to improve, what it's costing you, then pick the right fix.",
  },
  {
    number: "03",
    title: "Simplicity creates value",
    desc: "Simple systems are easier to use, maintain, and scale. We avoid complexity unless it serves a clear business purpose.",
  },
  {
    number: "04",
    title: "Long-term partnership",
    desc: "Projects end. Partnerships continue. We stay close after launch so your systems keep improving as your business grows.",
  },
];

const STEPS = [
  {
    step: "01",
    label: "Identify the outcome",
    desc: "What do you want to improve? More bookings, fewer support calls, less manual work.",
  },
  {
    step: "02",
    label: "Quantify the cost",
    desc: "How much time, revenue, or opportunity is the problem costing you today?",
  },
  {
    step: "03",
    label: "Design the technology",
    desc: "We pick the right tools after we understand your business. Website, automation, or custom software. Whatever actually solves the problem.",
  },
  {
    step: "04",
    label: "Measure success",
    desc: "Every project has before/after metrics so you know the investment paid off.",
  },
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
    quote: "The AI chatbot now handles 70% of routine customer queries. Our team can focus on work that actually requires human judgement.",
    name: "Daniel M.",
    role: "CEO, MedAccess Clinics",
    initial: "D",
  },
];

const FAQS = [
  {
    q: "Do you build websites or solve business problems?",
    a: "Both. We always start with your problem. The website or booking system is how we solve it. What matters is whether you get more enquiries, save hours, or serve customers better.",
  },
  {
    q: "Do you publish fixed prices?",
    a: "The ranges on our packages page are starting points. Every business is different, so we confirm scope and give you a firm quote after a discovery call. No surprises once we agree on what you're getting.",
  },
  {
    q: "Which package should I start with?",
    a: "It depends on the outcome you need. If you mainly need to be found online, start with a starter website or landing page. If you need bookings, inquiries, or internal tools, look at our growth packages. We'll help you pick the right entry point on a free call.",
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
    a: "Flex lets you start building without saving the full amount upfront. Example: a JMD 400,000 build might start with a JMD 160,000 deposit and about JMD 23,000 per month for 12 months. It is a commercial payment plan, not a loan. Terms are confirmed in your contract after a discovery call.",
  },
  {
    q: "Do you teach DIY instead of building for me?",
    a: "We offer both. Buzprout Academy teaches you to launch a credible site with AI and modern tools. When you outgrow DIY, Flex or a full build is the next step. Graduates get a discount on their first Flex deposit.",
  },
  {
    q: "What size businesses do you work with?",
    a: "We mainly work with SMEs in tourism, logistics, healthcare, beauty, retail, restaurants, and professional services across the Caribbean. We also help early stage startups building their first product.",
  },
  {
    q: "How does the discovery call work?",
    a: "It's a free 30 minute call where we learn what business problem you're trying to solve. No hard sell. We'll tell you honestly if we're the right fit and what working together would look like.",
  },
  {
    q: "How long does a typical project take?",
    a: "A business website usually takes 3 to 6 weeks. Custom software runs 6 to 16 weeks depending on scope. We agree timelines upfront during planning so there are no surprises.",
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
              className="text-sm px-4 py-2 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 active:scale-95 transition-all duration-150 hover-lift"
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
              className="text-sm px-4 py-2.5 rounded-md bg-primary text-primary-foreground font-semibold text-center"
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
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(27,122,74,0.07) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(27,122,74,0.06),transparent)]" />
          <div className="absolute top-0 right-0 w-[480px] h-[480px] bg-[radial-gradient(circle,rgba(42,157,143,0.1),transparent_70%)] blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />

          <div className="relative max-w-7xl mx-auto">
            <div className="max-w-5xl">
              <p className="font-heading text-2xl md:text-3xl tracking-tight text-foreground mb-6 animate-fade-up">
                Buzprout
              </p>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.08] tracking-tight text-foreground mb-7 animate-fade-up delay-100">
                Helping businesses grow<br />
                through <span className="text-primary">technology.</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-11 leading-relaxed animate-fade-up delay-200">
                You want more customers, less time on repetitive work, and systems that keep up as you grow. Tell us what's slowing you down and we'll build what fixes it.
              </p>

              <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
                <a
                  href={CONTACT.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 active:scale-95 transition-all duration-150 text-sm hover-lift"
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
          </div>
        </section>

        {/* ── Industries ── */}
        <section className="py-10 px-6 section-muted">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-5 font-medium">
              Industries we serve
            </p>
            <div className="flex flex-wrap gap-3">
              {INDUSTRIES.map((ind, i) => {
                const Icon = ind.icon;
                return (
                  <div
                    key={ind.label}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors duration-150 cursor-default select-none animate-fade-up"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <Icon size={13} className="text-primary" />
                    {ind.label}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Outcomes ── */}
        <section id="outcomes" className="py-28 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <p className="text-xs text-primary uppercase tracking-widest font-medium mb-4">
                Outcomes
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-5">
                Built for the results<br className="hidden md:block" />
                you actually need.
              </h2>
              <p className="text-muted-foreground max-w-lg leading-relaxed">
                We start with what's not working in your business, then build the right fix.
              </p>
            </div>

            <div className="space-y-0 divide-y divide-border">
              {OUTCOMES.map((outcome, i) => {
                const Icon = outcome.icon;
                return (
                  <div
                    key={outcome.title}
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-6 py-10 first:pt-0 last:pb-0 animate-fade-up`}
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    <div className="lg:col-span-1 flex items-start">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon size={20} className="text-primary" />
                      </div>
                    </div>
                    <div className="lg:col-span-3">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {outcome.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {outcome.tags.map(t => (
                          <span
                            key={t}
                            className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="lg:col-span-8">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {outcome.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Featured Work ── */}
        <section id="work" className="py-28 px-6 section-muted">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-16">
              <div>
                <p className="text-xs text-primary uppercase tracking-widest font-medium mb-4">
                  Portfolio
                </p>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                  Real businesses,<br />real results.
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
                  className="group rounded-2xl overflow-hidden border border-border bg-card shadow-soft hover:border-primary/30 hover:shadow-card transition-all duration-200 hover-lift"
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

        {/* ── What Makes Us Different ── */}
        <section className="py-28 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <p className="text-xs text-primary uppercase tracking-widest font-medium mb-4">
                  What makes us different
                </p>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-7">
                  A studio built<br />around your business.
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4 max-w-md">
                  We're not a web design agency. We figure out what's broken in your operation, build technology that fixes it, and keep improving as you grow.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-10 max-w-md">
                  If we can't measure the improvement, we rethink the approach. Your business should be better off when we're done.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 active:scale-95 transition-all duration-150 text-sm hover-lift"
                >
                  Start the conversation <ArrowRight size={16} />
                </a>
              </div>

              <div className="space-y-3">
                {WHY.map(w => (
                  <div
                    key={w.number}
                    className="flex gap-5 p-6 rounded-2xl border border-border bg-card shadow-soft hover:border-primary/30 transition-all duration-200"
                  >
                    <span className="text-xs text-primary/50 mt-0.5 w-7 shrink-0 font-medium">
                      {w.number}
                    </span>
                    <div>
                      <h4 className="text-base font-semibold text-foreground mb-1.5">
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
                How we work
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-5">
                Four steps. Clear results.
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
                We figure out what you need to improve, what it's costing you, build the right technology, then track what changed.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative">
              {STEPS.map((s, i) => (
                <div key={s.step} className="relative flex flex-col items-center text-center group">
                  <div className="relative w-14 h-14 rounded-full border-2 border-border bg-background flex items-center justify-center mb-5 text-primary font-bold group-hover:border-primary group-hover:bg-primary/10 transition-all duration-200 z-10">
                    {s.step}
                    {i < STEPS.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 left-[calc(100%+4px)] w-[calc(100%+1.5rem)] h-px bg-border -translate-y-1/2" />
                    )}
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {s.label}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed max-w-[200px]">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PricingSection />

        <FlexSection />

        <AcademySection />

        {/* ── Testimonials ── */}
        <section className="py-28 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xs text-primary uppercase tracking-widest font-medium mb-4">
                Testimonials
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                Results our clients measure.
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
              <h2 className="text-4xl font-bold tracking-tight text-foreground">
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
              backgroundImage: "radial-gradient(circle, rgba(27,122,74,0.07) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,rgba(27,122,74,0.04),transparent)]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse,rgba(42,157,143,0.08),transparent_70%)] blur-3xl pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

          <div className="relative max-w-4xl mx-auto text-center">
            <p className="text-xs text-primary uppercase tracking-widest font-medium mb-5">
              Get started
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-7">
              What business problem<br />
              <span className="text-primary">are you solving?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-lg mx-auto mb-12 leading-relaxed">
              Book a free 30 minute call. We'll listen, figure out what's costing you, and tell you honestly what's possible.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={CONTACT.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 active:scale-95 transition-all duration-150 text-base hover-lift"
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
                We help Caribbean businesses get more customers, communicate better, run more efficiently, and grow.
              </p>
            </div>

            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">Outcomes</div>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                {OUTCOMES.map(o => (
                  <li key={o.title}>
                    <a href="#outcomes" className="hover:text-foreground transition-colors">{o.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">Company</div>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                {[
                  { label: "Outcomes", href: "#outcomes" },
                  { label: "Work", href: "#work" },
                  { label: "Process", href: "#process" },
                  { label: "Pricing", href: "#pricing" },
                  { label: "Flex", href: "#flex" },
                  { label: "Academy", href: "#academy" },
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
                className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                {CONTACT.calendlyLabel} <ArrowRight size={14} />
              </a>
            </div>
          </div>

          <div className="mt-14 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">© 2026 Buzprout. All rights reserved.</p>
            <p className="text-xs text-muted-foreground">Helping businesses grow through technology.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
