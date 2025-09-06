import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  FileCode2,
  Gauge,
  Gem,
  Mail,
  MonitorSmartphone,
  Phone,
  Rocket,
  Search,
  Sparkles,
  Wand2,
} from "lucide-react";

// ===============================
// Mckenzie Dev — One-file React site
// - TailwindCSS for styling (no imports required in this canvas)
// - Framer Motion for smooth, modern animations
// - Pure React + Tailwind: copy into any CRA/Vite/Next app
// ===============================

// Helper: Section wrapper with max-width + padding
function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-6xl px-6 ${className}`}>
      {children}
    </section>
  );
}

// Helper: Simple button
function Button({ href = "#", onClick, children, variant = "solid", className = "" }) {
  const base =
    "inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300";
  const variants = {
    solid:
      "bg-white text-black hover:bg-zinc-200 active:translate-y-[1px] shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset,0_10px_30px_-10px_rgba(255,255,255,0.25)]",
    outline:
      "border border-white/20 text-white hover:border-white/40 hover:bg-white/5 active:translate-y-[1px]",
    ghost: "text-white/80 hover:text-white",
  };
  const cls = `${base} ${variants[variant]} ${className}`;
  const content = <span className="flex items-center gap-2">{children}</span>;
  if (href) return (
    <a href={href} onClick={onClick} className={cls}>
      {content}
    </a>
  );
  return (
    <button onClick={onClick} className={cls}>
      {content}
    </button>
  );
}

// Cards
function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-md ${className}`}
    >
      {/* subtle gradient highlight */}
      <div className="pointer-events-none absolute -inset-px bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      {children}
    </div>
  );
}

// Floating background blobs
function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-24 -right-24 h-[40vmax] w-[40vmax] rounded-full bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.25),rgba(0,0,0,0))] blur-3xl animate-float-slow" />
      <div className="absolute -bottom-24 -left-24 h-[40vmax] w-[40vmax] rounded-full bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.18),rgba(0,0,0,0))] blur-3xl animate-float-slower" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.06)_0%,transparent_30%,transparent_70%,rgba(255,255,255,0.04)_100%)]" />
      {/* faint grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:56px_56px] opacity-[0.07]" />
    </div>
  );
}

// Scroll progress bar
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <motion.div
      style={{ width }}
      className="fixed left-0 top-0 z-40 h-1 bg-gradient-to-r from-white via-white/70 to-white/30"
    />
  );
}

// NAVBAR
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLink = "text-sm text-white/80 hover:text-white transition-colors";

  return (
    <div className={`fixed inset-x-0 top-4 z-30 flex justify-center px-4`}>
      <div
        className={`flex w-full max-w-6xl items-center justify-between rounded-2xl border px-5 py-3 backdrop-blur-md transition-all
          ${scrolled ? "border-white/15 bg-black/50 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.7)]" : "border-white/10 bg-white/5"}
        `}
      >
        <a href="#home" className="group inline-flex items-center gap-2">
          <div className="relative">
            <Gem className="h-5 w-5 text-white" />
            <Sparkles className="absolute -right-2 -top-2 h-3 w-3 text-white/70 opacity-0 transition group-hover:opacity-100" />
          </div>
          <span className="font-semibold tracking-wide">Mckenzie Dev</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          <a className={navLink} href="#work">Work</a>
          <a className={navLink} href="#services">Services</a>
          <a className={navLink} href="#process">Process</a>
          <a className={navLink} href="#pricing">Pricing</a>
          <a className={navLink} href="#faq">FAQ</a>
          <Button href="#contact" variant="outline" className="h-9">Let’s talk</Button>
        </nav>
      </div>
    </div>
  );
}

// HERO
function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <div id="home" className="relative pt-28">
      <Section className="pb-24 pt-16 md:pt-24">
        <div className="relative">
          {/* soft spotlight */}
          <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),rgba(0,0,0,0))] blur-2xl" />

          <motion.h1
            ref={ref}
            style={{ y }}
            className="mx-auto max-w-3xl text-balance text-center text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl"
          >
            Modern, fast, <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">black‑aesthetic</span> sites that convert.
          </motion.h1>

          <p className="mx-auto mt-5 max-w-2xl text-center text-lg text-white/70">
            I build silky‑smooth static websites for small businesses: clean code, tasteful motion, and zero CMS headaches.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <Button href="#contact">
              Start a project <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#work" variant="outline">
              See work
            </Button>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-3 gap-3">
            {[
              { k: "<1s", v: "First paint" },
              { k: "100%", v: "Core Web Vitals" },
              { k: "0 plugins", v: "Static & secure" },
            ].map((s) => (
              <GlassCard key={s.v} className="text-center">
                <div className="text-xl font-bold">{s.k}</div>
                <div className="text-xs text-white/60">{s.v}</div>
              </GlassCard>
            ))}
          </div>

          {/* Floating showcase card */}
          <motion.div
            style={{ y }}
            className="mx-auto mt-14 w-full max-w-5xl"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 backdrop-blur">
              <div className="rounded-2xl border border-white/10 bg-black/60 p-6">
                <div className="mb-4 flex items-center gap-2 text-xs text-white/50">
                  <div className="h-2 w-2 rounded-full bg-emerald-400/70" />
                  Live preview — sample hero section
                </div>
                <div className="aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/10">
                  {/* Faux demo site frame */}
                  <div className="relative h-full w-full">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(120,119,198,0.25),transparent),radial-gradient(ellipse_at_bottom_right,rgba(34,197,94,0.18),transparent)]" />
                    <div className="absolute inset-0 grid place-items-center">
                      <div className="rounded-xl border border-white/10 bg-black/60 p-6 text-center">
                        <div className="text-sm uppercase tracking-widest text-white/60">Sample module</div>
                        <div className="mt-2 text-2xl font-semibold">Micro‑interactions that feel alive</div>
                        <div className="mt-2 text-sm text-white/60">Hover, tap, and scroll to feel it</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}

// WORK / PORTFOLIO (placeholders)
function Work() {
  const items = [
    {
      title: "Halo Auto Detailing",
      tag: "Service business",
      desc: "Conversion‑focused landing page with sticky pricing and instant contact.",
    },
    {
      title: "Mountain Cafe",
      tag: "Local cafe",
      desc: "Menu + gallery with lightweight animations and offline‑friendly caching.",
    },
    {
      title: "Craft Studio",
      tag: "Portfolio",
      desc: "Grid portfolio with hover reveals and case study pages.",
    },
  ];

  return (
    <Section id="work" className="pb-8 pt-4">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-semibold md:text-4xl">Selected work</h2>
          <p className="mt-2 text-white/60">A feel for my style and performance‑first approach.</p>
        </div>
        <div className="hidden md:block">
          <Button href="#contact" variant="outline">Get a free homepage mockup</Button>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
          >
            <GlassCard className="h-full">
              <div className="aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04),rgba(0,0,0,0))]"></div>
              <div className="mt-4 flex items-center gap-2 text-xs text-white/60">
                <BadgeCheck className="h-4 w-4" /> {it.tag}
              </div>
              <div className="mt-2 text-lg font-semibold">{it.title}</div>
              <p className="mt-1 text-sm text-white/60">{it.desc}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

// SERVICES
function Services() {
  const cards = [
    {
      icon: MonitorSmartphone,
      title: "Static sites that fly",
      desc: "Zero bloat, instant loads, and search‑friendly markup.",
      points: ["Hand‑coded UI", "Mobile‑first", "Accessibility pass"],
    },
    {
      icon: Wand2,
      title: "Motion that guides",
      desc: "Framer‑Motion micro‑interactions to focus user attention.",
      points: ["Reveal on scroll", "Delightful hovers", "No jank"],
    },
    {
      icon: Search,
      title: "SEO basics done right",
      desc: "Meta, schema, sitemaps, and performance budgets baked in.",
      points: ["Semantic HTML", "OpenGraph", "Robots & sitemap"],
    },
  ];

  return (
    <Section id="services" className="py-12">
      <h2 className="text-3xl font-semibold md:text-4xl">Services</h2>
      <p className="mt-2 max-w-3xl text-white/60">
        I specialize in lightning‑fast static websites for small businesses. Clean design, maintainable code, clear messaging.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: i * 0.06 }}
          >
            <GlassCard className="h-full">
              <c.icon className="h-8 w-8 text-white/80" />
              <div className="mt-3 text-lg font-semibold">{c.title}</div>
              <p className="mt-1 text-sm text-white/60">{c.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {c.points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-white/70" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

// PROCESS
function Process() {
  const steps = [
    {
      icon: FileCode2,
      title: "Free mockup",
      desc: "A quick homepage concept so you can see the vibe before committing.",
    },
    {
      icon: Gauge,
      title: "Build & tune",
      desc: "Implement sections, performance budgets, and motion polish.",
    },
    { icon: Rocket, title: "Launch", desc: "Deploy to Netlify or Vercel, connect your domain, done." },
  ];
  return (
    <Section id="process" className="py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold md:text-4xl">Process</h2>
        <p className="mt-2 max-w-3xl text-white/60">Simple, transparent, and fast. You always see progress in a live preview link.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
          >
            <GlassCard className="h-full">
              <s.icon className="h-8 w-8" />
              <div className="mt-3 text-lg font-semibold">{s.title}</div>
              <p className="mt-1 text-sm text-white/60">{s.desc}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

// PRICING
function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "$599",
      blurb: "Single‑page static site. Perfect for a new local service.",
      popular: false,
      features: ["Hero + About + Services + Contact", "Basic SEO setup", "1 round of revisions"],
    },
    {
      name: "Growth",
      price: "$1199",
      blurb: "Multi‑section site with portfolio and pricing.",
      popular: true,
      features: ["Up to 6 sections", "Animations & micro‑interactions", "2 rounds of revisions"],
    },
    {
      name: "Pro",
      price: "$1999",
      blurb: "Full polished site with blog‑like updates via Markdown.",
      popular: false,
      features: ["Up to 10 sections", "CMS‑less updates (Markdown)", "Ongoing optimizations"],
    },
  ];

  return (
    <Section id="pricing" className="py-12">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-semibold md:text-4xl">Transparent pricing</h2>
        <p className="mt-2 text-white/60">Pay once. Own it forever. Optional care plan after launch.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {tiers.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, delay: i * 0.06 }}
          >
            <GlassCard className={`h-full ${t.popular ? "ring-1 ring-white/40" : ""}`}>
              <div className="flex items-baseline justify-between">
                <div className="text-lg font-semibold">{t.name}</div>
                {t.popular && (
                  <span className="rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-xs">Most popular</span>
                )}
              </div>
              <div className="mt-2 text-3xl font-bold">{t.price}</div>
              <p className="mt-1 text-sm text-white/60">{t.blurb}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button href="#contact" className="w-full">Book this</Button>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
      {/* Care plan */}
      <div className="mx-auto mt-6 max-w-3xl text-center text-sm text-white/60">
        Need ongoing help? Care plan from <span className="text-white">$49/mo</span> for content updates, backups, and uptime checks.
      </div>
    </Section>
  );
}

// FAQ
function FAQ() {
  const faqs = [
    {
      q: "How fast can we launch?",
      a: "Most single‑page sites launch within 7–10 days once copy and assets are ready.",
    },
    {
      q: "Do you handle domains and hosting?",
      a: "Yes. I typically use Netlify or Vercel for hosting and connect your domain (Namecheap/Cloudflare/etc.).",
    },
    {
      q: "Is this a template?",
      a: "No. I hand‑craft each site. This portfolio page is a base you’re seeing polished.",
    },
    {
      q: "What about contact forms?",
      a: "Static sites can still have forms. I wire them to Netlify Forms or Formspree—no server needed.",
    },
  ];
  return (
    <Section id="faq" className="py-12">
      <h2 className="text-3xl font-semibold md:text-4xl">FAQ</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {faqs.map((f, i) => (
          <motion.details
            key={f.q}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="group rounded-2xl border border-white/10 bg-white/[0.02] p-4 open:bg-white/[0.04]"
          >
            <summary className="cursor-pointer list-none text-lg font-semibold marker:hidden">
              <span className="select-none">{f.q}</span>
            </summary>
            <p className="mt-2 text-sm text-white/70">{f.a}</p>
          </motion.details>
        ))}
      </div>
    </Section>
  );
}

// CONTACT
function Contact() {
  return (
    <Section id="contact" className="py-16">
      <div className="mx-auto max-w-3xl">
        <GlassCard className="p-8">
          <div className="mb-6">
            <h2 className="text-center text-3xl font-semibold md:text-4xl">Let’s build your site</h2>
            <p className="mt-2 text-center text-white/60">
              Tell me about your business and I’ll reply with a free homepage mockup.
            </p>
          </div>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            className="grid gap-4 md:grid-cols-2"
          >
            <input type="hidden" name="form-name" value="contact" />
            <label className="md:col-span-1">
              <span className="mb-1 block text-sm text-white/70">Name</span>
              <input
                name="name"
                required
                className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 outline-none ring-white/20 focus:ring"
                placeholder="Jane Doe"
              />
            </label>
            <label className="md:col-span-1">
              <span className="mb-1 block text-sm text-white/70">Email</span>
              <input
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 outline-none ring-white/20 focus:ring"
                placeholder="jane@business.com"
              />
            </label>
            <label className="md:col-span-2">
              <span className="mb-1 block text-sm text-white/70">Project details</span>
              <textarea
                name="message"
                rows={5}
                className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 outline-none ring-white/20 focus:ring"
                placeholder="A few lines about your business, goals, and any sites you like."
              />
            </label>
            <div className="md:col-span-2 flex flex-col items-center gap-3 md:flex-row md:justify-between">
              <div className="flex items-center gap-4 text-sm text-white/70">
                <a href="mailto:hello@mckenziedev.ca" className="flex items-center gap-2 hover:text-white">
                  <Mail className="h-4 w-4" /> hello@mckenziedev.ca
                </a>
                <a href="tel:+16045550123" className="flex items-center gap-2 hover:text-white">
                  <Phone className="h-4 w-4" /> (604) 555‑0123
                </a>
              </div>
              <Button href="#" onClick={(e) => e.currentTarget.closest("form")?.requestSubmit?.()}>
                Send message <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </GlassCard>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-sm text-white/60">
      <Section className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div>© {new Date().getFullYear()} Mckenzie Dev. All rights reserved.</div>
        <div className="flex items-center gap-6">
          <a className="hover:text-white" href="#">Privacy</a>
          <a className="hover:text-white" href="#">Terms</a>
          <a className="hover:text-white" href="#home">Back to top</a>
        </div>
      </Section>
    </footer>
  );
}

export default function MckenzieDevSite() {
  // Pointer glow
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div className="relative min-h-screen scroll-smooth bg-black text-white">
      <ScrollProgress />
      <BackgroundFX />
      {/* pointer halo */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(255,255,255,0.08), transparent 40%)`,
        }}
      />

      <Navbar />
      <Hero />
      <Work />
      <Services />
      <Process />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />

      {/* Page-level styles for keyframes */}
      <style>{`
        @keyframes float-slow { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-12px) } }
        @keyframes float-slower { 0%,100% { transform: translateY(0) } 50% { transform: translateY(14px) } }
        .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
        .animate-float-slower { animation: float-slower 12s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
