"use client";
import Link from "next/link";
import { useState } from "react";
import StatsCounter from "@/components/StatsCounter";
import Ticker from "@/components/Ticker";
import ProjectCarousel from "@/components/ProjectCarousel";
import RevealObserver from "@/components/RevealObserver";
import { ProjectModal } from "@/components/ProjectModal";
import { useLang } from "@/lib/i18n";
import { PROJECTS } from "@/lib/data";
import type { Lang } from "@/lib/data";

type Project = (typeof PROJECTS)[number];

const WHY = [
  {
    icon: "⚡",
    t: { en: "Fast delivery", sq: "Dorëzim i shpejtë" },
    d: { en: "We move quickly without cutting corners. Most projects launch in 2–4 weeks.", sq: "Lëvizim shpejt pa anashkaluar cilësinë. Shumica e projekteve lansohen në 2–4 javë." },
  },
  {
    icon: "◎",
    t: { en: "Local & reliable", sq: "Lokal & i besueshëm" },
    d: { en: "Based in Albania, working with Albanian businesses every day. We understand your market.", sq: "Me bazë në Shqipëri, punojmë me biznese shqiptare çdo ditë. E njohim tregun tuaj." },
  },
  {
    icon: "▣",
    t: { en: "Full ownership", sq: "Pronësi e plotë" },
    d: { en: "You own everything — code, domain, hosting. No lock-in, no surprises.", sq: "Ju zotëroni gjithçka — kodin, domenin, hostingun. Pa kufizime, pa surpriza." },
  },
  {
    icon: "◈",
    t: { en: "Real results", sq: "Rezultate reale" },
    d: { en: "50+ completed projects. Our clients come back because the work speaks for itself.", sq: "50+ projekte të realizuara. Klientët kthehen sepse puna flet vetë." },
  },
  {
    icon: "◐",
    t: { en: "Transparent pricing", sq: "Çmime transparente" },
    d: { en: "No hidden fees. You know what you pay from day one.", sq: "Pa tarifa të fshehura. Dini çfarë paguani nga dita e parë." },
  },
  {
    icon: "◑",
    t: { en: "After-launch support", sq: "Mbështetje pas lansimit" },
    d: { en: "We stick around after go-live. Updates, fixes, and growth — we're your long-term partner.", sq: "Mbetemi pas lansimit. Përditësime, rregullime dhe rritje — jemi partneri juaj afatgjatë." },
  },
];

const PRICING = [
  {
    key: "landing",
    price: "€150",
    t: { en: "Landing Page", sq: "Faqe Prezantuese" },
    d: { en: "Perfect for new businesses or product launches. Fast, beautiful, and conversion-focused.", sq: "Ideal për biznese të reja ose lansime produkti. E shpejtë, e bukur dhe e fokusuar në konversion." },
    incl: { en: ["1-page responsive design", "Contact form", "SEO basics", "Delivered in 7 days"], sq: ["Dizajn 1-faqësh responsive", "Formë kontakti", "SEO bazë", "Dorëzim në 7 ditë"] },
    cta: false,
    hot: false,
  },
  {
    key: "admin",
    price: "€250",
    t: { en: "Business + Admin", sq: "Biznes + Admin" },
    d: { en: "A full website with a dashboard to manage your content, listings, or bookings yourself.", sq: "Faqe e plotë me panel administrimi për të menaxhuar vetë përmbajtjen, listimet ose rezervimet." },
    incl: { en: ["Multi-page site", "Admin dashboard", "Content management", "SEO optimized", "Mobile ready"], sq: ["Faqe shumë-faqësh", "Panel administrimi", "Menaxhim përmbajtjeje", "SEO e optimizuar", "Gati për mobile"] },
    cta: false,
    hot: true,
  },
  {
    key: "ecom",
    price: "€500",
    t: { en: "E-commerce / CRM", sq: "E-commerce / CRM" },
    d: { en: "Full online store or customer management system with payments, orders, and automation.", sq: "Dyqan online i plotë ose sistem menaxhimi klientësh me pagesa, porosi dhe automatizim." },
    incl: { en: ["Product catalog", "Payment integration", "Order management", "Customer accounts", "Analytics"], sq: ["Katalog produktesh", "Integrim pagesash", "Menaxhim porosish", "Llogari klientësh", "Analitikë"] },
    cta: false,
    hot: false,
  },
  {
    key: "custom",
    price: null,
    t: { en: "Custom Build", sq: "Ndërtim i Personalizuar" },
    d: { en: "Complex platform, SaaS, mobile app, or anything that doesn't fit a template. Let's talk.", sq: "Platformë komplekse, SaaS, aplikacion mobile ose çdo gjë që nuk përshtatet në një shabllon. Le të flasim." },
    incl: { en: ["Requirements workshop", "Custom architecture", "Dedicated team", "Long-term support"], sq: ["Workshop kërkesash", "Arkitekturë e personalizuar", "Ekip i dedikuar", "Mbështetje afatgjatë"] },
    cta: true,
    hot: false,
  },
];

export default function HomePage() {
  const { lang } = useLang();
  const [modal, setModal] = useState<Project | null>(null);
  const openModal = (p: Project) => setModal(p);

  return (
    <>
      <RevealObserver />

      {/* HERO */}
      <section id="hero">
        <div className="hero-glow" />
        <div className="float-pill fp1">React · Next.js</div>
        <div className="float-pill fp2">Flutter · Dart</div>
        <div className="float-pill fp3">Node.js · Docker</div>
        <div className="float-pill fp4">PostgreSQL</div>
        <div className="hero-inner">
          <div className="section-label">✦ ALAR DEV · SOFTWARE STUDIO</div>
          <h1 className="hero-headline">
            {lang === "en" ? (
              <>Software solutions<br />for your <span className="gradient-text">success.</span></>
            ) : (
              <>Zgjidhje software<br />për <span className="gradient-text">suksesin tuaj.</span></>
            )}
          </h1>
          <p className="hero-sub">
            {lang === "en"
              ? "Creating web and mobile applications that turn startups and businesses into industry leaders."
              : "Krijojmë aplikacione web dhe mobile që kthejnë startup-et dhe bizneset në liderë të industrisë."}
          </p>
          <div className="hero-ctas">
            <Link href="/contact" className="btn btn-primary btn-lg">
              {lang === "en" ? "Start Your Project →" : "Fillo Projektin →"}
            </Link>
            <Link href="/projects" className="btn btn-ghost btn-lg">
              {lang === "en" ? "See Our Work" : "Shiko Punën Tonë"}
            </Link>
          </div>
        </div>
        <div className="scroll-ind">
          <span>{lang === "en" ? "Scroll" : "Lëviz"}</span>
          <div className="arrow" />
        </div>
      </section>

      {/* STATS */}
      <StatsCounter />

      {/* TICKER */}
      <Ticker />

      {/* FEATURED PROJECTS CAROUSEL */}
      <section id="featured-projects" className="block">
        <div className="container">
          <div className="center reveal">
            <div className="section-label">{lang === "en" ? "OUR WORK" : "PUNËT TONA"}</div>
            <h2 className="section-head">
              {lang === "en" ? <>Selected <span className="gradient-text">Projects</span></> : <>Projekte <span className="gradient-text">të Zgjedhura</span></>}
            </h2>
            <p className="section-sub">
              {lang === "en"
                ? "Real businesses, real results."
                : "Biznese reale, rezultate reale."}
            </p>
          </div>
        </div>
        <ProjectCarousel onOpen={openModal} />
        <div className="container">
          <div className="center" style={{ marginTop: 48 }}>
            <Link href="/projects" className="btn btn-ghost">
              {lang === "en" ? "View all projects →" : "Shiko të gjitha projektet →"}
            </Link>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="block" id="pricing">
        <div className="container">
          <div className="center reveal">
            <div className="section-label">{lang === "en" ? "PRICING" : "ÇMIMET"}</div>
            <h2 className="section-head">
              {lang === "en" ? <>Simple, <span className="gradient-text">transparent</span> pricing</> : <>Çmime të <span className="gradient-text">thjeshta</span> dhe transparente</>}
            </h2>
            <p className="section-sub">
              {lang === "en"
                ? "No surprises. Pick the plan that fits your project."
                : "Pa surpriza. Zgjidhni paketën që i përshtatet projektit tuaj."}
            </p>
          </div>
          <div className="pricing-grid">
            {PRICING.map((plan) => (
              <div key={plan.key} className={`pricing-card reveal${plan.hot ? " pricing-hot" : ""}`}>
                {plan.hot && <div className="pricing-badge">{lang === "en" ? "Most Popular" : "Më i Popullarizuar"}</div>}
                <div className="pricing-top">
                  <div className="pricing-name">{plan.t[lang as Lang]}</div>
                  {plan.price
                    ? <div className="pricing-price">{plan.price}</div>
                    : <div className="pricing-price pricing-custom">{lang === "en" ? "Let's talk" : "Le të flasim"}</div>
                  }
                  <p className="pricing-desc">{plan.d[lang as Lang]}</p>
                </div>
                <ul className="pricing-incl">
                  {plan.incl[lang as Lang].map((item) => (
                    <li key={item}>
                      <span className="pricing-check">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`btn ${plan.hot ? "btn-primary" : "btn-ghost"} pricing-btn`}>
                  {plan.cta
                    ? (lang === "en" ? "Get a custom quote →" : "Merr ofertë →")
                    : (lang === "en" ? "Get started →" : "Fillo →")}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US — editorial layout */}
      <section className="block why-section">
        <div className="container">
          <div className="why-editorial reveal">
            {/* Left: reasons */}
            <div className="why-editorial-left">
              <div className="section-label">{lang === "en" ? "WHY US" : "PSE NE"}</div>
              <h2 className="section-head" style={{ textAlign: "left", marginTop: 16 }}>
                {lang === "en" ? <>Why choose <span className="gradient-text">ALAR DEV</span></> : <>Pse zgjidhni <span className="gradient-text">ALAR DEV</span></>}
              </h2>
              <div className="why-list">
                {WHY.map((w, i) => (
                  <div key={i} className="why-row">
                    <div className="why-row-num">0{i + 1}</div>
                    <div>
                      <h4 className="why-row-title">{w.t[lang as Lang]}</h4>
                      <p className="why-row-desc">{w.d[lang as Lang]}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: 40, alignSelf: "flex-start" }}>
                {lang === "en" ? "Start your project →" : "Fillo projektin →"}
              </Link>
            </div>
            {/* Right: photo */}
            <div className="why-editorial-right">
              <div className="why-photo-wrap">
                <img
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=900&auto=format&fit=crop"
                  alt="ALAR DEV workspace"
                  className="why-photo"
                />
                <div className="why-photo-badge">
                  <div className="why-badge-num">50+</div>
                  <div className="why-badge-lbl">{lang === "en" ? "Projects delivered" : "Projekte të realizuara"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section id="cta-banner" className="block">
        <div className="container cta-inner reveal">
          <h2 className="cta-h">
            {lang === "en" ? "Ready to build something great?" : "Gati të ndërtoni diçka të madhe?"}
          </h2>
          <p className="cta-sub">
            {lang === "en"
              ? "No pitch decks, no long contracts. Just a real conversation about your project."
              : "Pa prezantime, pa kontrata të gjata. Vetëm një bisedë e vërtetë për projektin tuaj."}
          </p>
          <Link href="/contact" className="btn btn-primary btn-lg" style={{ marginTop: 40 }}>
            {lang === "en" ? "Get in touch →" : "Na kontaktoni →"}
          </Link>
        </div>
      </section>

      {modal && <ProjectModal project={modal} lang={lang as Lang} onClose={() => setModal(null)} />}
    </>
  );
}
