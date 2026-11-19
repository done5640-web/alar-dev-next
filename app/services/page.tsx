"use client";
import Link from "next/link";
import RevealObserver from "@/components/RevealObserver";
import { useLang } from "@/lib/i18n";
import type { Lang } from "@/lib/data";

const DEV_SERVICES = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="16" rx="2"/>
        <path d="M3 9H21"/>
        <path d="M7 13L10 16L7 19" strokeLinecap="round"/>
        <path d="M13 19H17" strokeLinecap="round"/>
      </svg>
    ),
    color: "#a855f7",
    t: { en: "Custom Web Apps", sq: "Aplikacione Web" },
    d: {
      en: "Fast, modern web applications tailored to your exact needs — from booking platforms to full SaaS products.",
      sq: "Aplikacione web të shpejta dhe moderne — nga platformat e rezervimit tek produktet SaaS.",
    },
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9L12 3L21 9"/><path d="M9 21V12H15V21"/><path d="M3 9V21H21V9"/>
      </svg>
    ),
    color: "#06b6d4",
    t: { en: "Business Websites", sq: "Website për Biznes" },
    d: {
      en: "Professional websites for local businesses. Clean design, fast loading, easy to manage. Starting at €150.",
      sq: "Website profesionale për biznese lokale. Dizajn modern, ngarkim i shpejtë. Nga €150.",
    },
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18H13"/>
      </svg>
    ),
    color: "#f97316",
    t: { en: "Mobile Applications", sq: "Aplikacione Mobile" },
    d: {
      en: "iOS and Android apps built with Flutter — one codebase, both platforms, no compromise.",
      sq: "Aplikacione iOS dhe Android me Flutter — një bazë kodi, të dyja platformat.",
    },
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7L12 12L22 7Z"/><path d="M2 17L12 22L22 17"/><path d="M2 12L12 17L22 12"/>
      </svg>
    ),
    color: "#22c55e",
    t: { en: "Maintenance & Support", sq: "Mirëmbajtje & Mbështetje" },
    d: {
      en: "Already have a website or app? We keep it running, updated, and growing.",
      sq: "Keni tashmë një website ose aplikacion? Ne e mbajmë në punë dhe në rritje.",
    },
  },
];

const MKT_SERVICES = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    color: "#f43f5e",
    t: { en: "PPC Management", sq: "Menaxhim PPC" },
    d: {
      en: "We manage your pay-per-click campaigns so every euro works harder. Data-driven, constantly optimized.",
      sq: "Menaxhojmë fushatat tuaja PPC që çdo euro të punojë më shumë. Targetim i bazuar në të dhëna.",
    },
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    color: "#8b5cf6",
    t: { en: "Social Media Marketing", sq: "Social Media Marketing" },
    d: {
      en: "We create, manage, and grow your presence on Instagram, Facebook, TikTok, and LinkedIn.",
      sq: "Krijojmë, menaxhojmë dhe rritim praninë tuaj në Instagram, Facebook, TikTok dhe LinkedIn.",
    },
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    color: "#0ea5e9",
    t: { en: "Meta Ads", sq: "Meta Ads" },
    d: {
      en: "Facebook and Instagram advertising that reaches your ideal customers. Strategy, creatives, optimization.",
      sq: "Reklama Facebook dhe Instagram që arrijnë klientët tuaj idealë. Strategji, kreativë, optimizim.",
    },
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
      </svg>
    ),
    color: "#ec4899",
    t: { en: "Google & TikTok Ads", sq: "Google & TikTok Ads" },
    d: {
      en: "Reach customers on Google Search, YouTube, and TikTok — where attention and buying intent meet.",
      sq: "Arrini klientët në Google Search, YouTube dhe TikTok — ku vëmendja dhe blerja takohen.",
    },
  },
];

const BUNDLES = [
  {
    badge: { en: "LAUNCH", sq: "NISJE" },
    name: { en: "Launch Pack", sq: "Paketa Nisje" },
    price: "€300",
    highlight: false,
    color: "#06b6d4",
    desc: { en: "Go live fast — website + 1 month of paid ads on us", sq: "Lanço shpejt — website + 1 muaj reklama falas" },
    items: {
      en: ["Professional business website", "1 month Meta or Google Ads — free", "SEO setup included", "Analytics tracking"],
      sq: ["Website profesionale për biznes", "1 muaj Meta ose Google Ads — falas", "Konfigurim SEO i përfshirë", "Gjurmim analitik"],
    },
  },
  {
    badge: { en: "BEST VALUE", sq: "MË E MIRË" },
    name: { en: "Scale Pack", sq: "Paketa Rritje" },
    price: "€500",
    highlight: true,
    color: "#a855f7",
    desc: { en: "Build your presence and start getting leads from day one", sq: "Ndërto prezencën dhe fillo të marrësh klientë nga dita e parë" },
    items: {
      en: ["Premium website with custom design", "1 month Facebook + Google Ads — free", "Full campaign setup & tracking", "Monthly analytics report"],
      sq: ["Website premium me dizajn të personalizuar", "1 muaj Facebook + Google Ads — falas", "Konfigurim i plotë i fushatës & gjurmim", "Raport mujor analitik"],
    },
  },
  {
    badge: { en: "FULL POWER", sq: "FUQI E PLOTË" },
    name: { en: "Dominate Pack", sq: "Paketa Dominim" },
    price: "€700",
    highlight: false,
    color: "#f43f5e",
    desc: { en: "Total digital presence — web, search, and social all covered", sq: "Prezencë digjitale totale — web, kërkim dhe social, gjithçka" },
    items: {
      en: ["Full-featured website", "Google Ads campaign management", "Social media content & management", "Monthly strategy & reporting call"],
      sq: ["Website me funksionalitete të plota", "Menaxhim fushatash Google Ads", "Përmbajtje & menaxhim social media", "Thirrje mujore strategjie & raportimi"],
    },
  },
];

function ServiceItem({ s, lang }: { s: (typeof DEV_SERVICES)[0]; lang: Lang }) {
  return (
    <div className="svc-col-item">
      <div className="svc-col-icon" style={{ color: s.color, background: s.color + "15", borderColor: s.color + "25" }}>
        {s.icon}
      </div>
      <div className="svc-col-body">
        <h3 className="svc-col-title">{s.t[lang]}</h3>
        <p className="svc-col-desc">{s.d[lang]}</p>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const { lang } = useLang();
  return (
    <>
      <RevealObserver />

      {/* Page Hero */}
      <div className="page-hero">
        <div className="page-hero-dots" />
        <div className="page-hero-glow" />
        <div className="container page-hero-content reveal">
          <div className="section-label">{lang === "en" ? "WHAT WE DO" : "ÇFARË BËJMË"}</div>
          <h1 className="page-hero-title">
            {lang === "en"
              ? <>Build. <span className="gradient-text">Grow.</span> Dominate.</>
              : <>Ndërto. <span className="gradient-text">Rrit.</span> Domino.</>}
          </h1>
          <p className="page-hero-sub">
            {lang === "en"
              ? "From code to campaigns — we build your digital presence and market it to the right people."
              : "Nga kodi tek fushatat — ndërtojmë prezencën tuaj digjitale dhe e tregëtojmë tek njerëzit e duhur."}
          </p>
        </div>
      </div>

      {/* Two-column services */}
      <div className="container" style={{ paddingBottom: 100 }}>
        <div className="svc-two-col reveal">

          {/* Development */}
          <div className="svc-col">
            <div className="svc-col-header">
              <div className="svc-section-pill svc-pill-dev">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                </svg>
                {lang === "en" ? "Development" : "Zhvillim"}
              </div>
              <h2 className="svc-col-heading">
                {lang === "en" ? "We build it." : "Ne e ndërtojmë."}
              </h2>
            </div>
            <div className="svc-col-list">
              {DEV_SERVICES.map((s, i) => <ServiceItem key={i} s={s} lang={lang as Lang} />)}
            </div>
            <Link href="/contact" className="btn btn-ghost svc-col-cta">
              {lang === "en" ? "Get a quote →" : "Merr ofertë →"}
            </Link>
          </div>

          {/* Divider */}
          <div className="svc-col-divider" />

          {/* Marketing */}
          <div className="svc-col">
            <div className="svc-col-header">
              <div className="svc-section-pill svc-pill-mkt">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
                {lang === "en" ? "Marketing" : "Marketing"}
              </div>
              <h2 className="svc-col-heading">
                {lang === "en" ? "We grow it." : "Ne e rritim."}
              </h2>
            </div>
            <div className="svc-col-list">
              {MKT_SERVICES.map((s, i) => <ServiceItem key={i} s={s} lang={lang as Lang} />)}
            </div>
            <Link href="/contact" className="btn btn-ghost svc-col-cta">
              {lang === "en" ? "Start a campaign →" : "Fillo një fushatë →"}
            </Link>
          </div>
        </div>

        {/* Bundles */}
        <div style={{ marginTop: 100 }}>
          <div className="svc-section-header reveal">
            <div className="svc-section-pill svc-pill-bundle">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
                <line x1="7" y1="7" x2="7.01" y2="7"/>
              </svg>
              {lang === "en" ? "Bundle Offers" : "Paketa"}
            </div>
            <h2 className="svc-section-title">
              {lang === "en" ? "More value. One price." : "Më shumë vlerë. Një çmim."}
            </h2>
            <p className="svc-section-sub">
              {lang === "en"
                ? "Combine web development with marketing and save. Perfect for businesses ready to launch and grow fast."
                : "Kombinoni zhvillimin web me marketingun dhe kurseni. Perfekte për bizneset gati të lançojnë dhe rriten shpejt."}
            </p>
          </div>

          <div className="bundle-grid">
            {BUNDLES.map((b, i) => (
              <div key={i} className={`bundle-card reveal${b.highlight ? " bundle-card--highlight" : ""}`}
                style={{ "--bundle-color": b.color } as React.CSSProperties}>
                {b.highlight && (
                  <div className="bundle-popular-tag">
                    {lang === "en" ? "✦ Most Popular" : "✦ Më e Kërkuar"}
                  </div>
                )}
                <div className="bundle-badge" style={{ color: b.color, background: b.color + "15", borderColor: b.color + "30" }}>
                  {b.badge[lang as Lang]}
                </div>
                <h3 className="bundle-name">{b.name[lang as Lang]}</h3>
                <p className="bundle-desc">{b.desc[lang as Lang]}</p>
                <div className="bundle-price">
                  <span className="bundle-from">{lang === "en" ? "from" : "nga"}</span>
                  <span className="bundle-amount" style={{ color: b.color }}>{b.price}</span>
                </div>
                <ul className="bundle-list">
                  {b.items[lang as Lang].map((item) => (
                    <li key={item}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={b.color} strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`btn bundle-btn${b.highlight ? " btn-primary" : " btn-ghost"}`}>
                  {lang === "en" ? "Get this bundle →" : "Merr këtë paketë →"}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="center reveal" style={{ marginTop: 72 }}>
          <p style={{ color: "var(--text-muted)", fontSize: 16, marginBottom: 24 }}>
            {lang === "en" ? "Need something custom? Let's build the right package for you." : "Keni nevojë për diçka të personalizuar? Ndërtojmë paketën e duhur për ju."}
          </p>
          <Link href="/contact" className="btn btn-primary btn-lg">
            {lang === "en" ? "Talk to us →" : "Na kontaktoni →"}
          </Link>
        </div>
      </div>
    </>
  );
}
