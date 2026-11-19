"use client";
import Link from "next/link";
import RevealObserver from "@/components/RevealObserver";
import { useLang } from "@/lib/i18n";
import type { Lang } from "@/lib/data";

const DEV_SERVICES = [
  {
    num: "01",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="16" rx="2"/>
        <path d="M3 9H21"/>
        <path d="M7 13L10 16L7 19" strokeLinecap="round"/>
        <path d="M13 19H17" strokeLinecap="round"/>
      </svg>
    ),
    color: "#a855f7",
    t: { en: "Custom Web Apps", sq: "Aplikacione Web" },
    d: {
      en: "We build fast, modern web applications tailored to your exact needs — from booking platforms to full SaaS products.",
      sq: "Ndërtojmë aplikacione web të shpejta dhe moderne, të personalizuara — nga platformat e rezervimit tek produktet SaaS.",
    },
    bullets: {
      en: ["Responsive on every device", "SEO-optimized from day one", "Admin dashboard included", "Delivered in 2–4 weeks"],
      sq: ["Responsive në çdo pajisje", "SEO e optimizuar nga dita e parë", "Panel administrimi i përfshirë", "Dorëzim në 2–4 javë"],
    },
  },
  {
    num: "02",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9L12 3L21 9"/>
        <path d="M9 21V12H15V21"/>
        <path d="M3 9V21H21V9"/>
      </svg>
    ),
    color: "#06b6d4",
    t: { en: "Business Websites", sq: "Website për Biznes" },
    d: {
      en: "Professional websites for local businesses that actually convert visitors into customers. Clean design, fast loading, easy to manage.",
      sq: "Website profesionale për biznese lokale që konvertojnë vizitorë në klientë. Dizajn modern, ngarkim i shpejtë.",
    },
    bullets: {
      en: ["Starting at €150", "Built and delivered in 7 days", "Contact & booking forms", "Easy content updates"],
      sq: ["Nga €150", "Ndërtuar dhe dorëzuar në 7 ditë", "Forma kontakti dhe rezervimi", "Përditësime të lehta"],
    },
  },
  {
    num: "03",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="7" y="2" width="10" height="20" rx="2"/>
        <path d="M11 18H13"/>
      </svg>
    ),
    color: "#f97316",
    t: { en: "Mobile Applications", sq: "Aplikacione Mobile" },
    d: {
      en: "iOS and Android apps built with Flutter — one codebase, both platforms, no compromise on speed or experience.",
      sq: "Aplikacione iOS dhe Android me Flutter — një bazë kodi, të dyja platformat, pa kompromis.",
    },
    bullets: {
      en: ["Works on iOS & Android", "Offline capability", "Push notifications", "App Store submission handled"],
      sq: ["Funksionon në iOS & Android", "Aftësi offline", "Njoftime push", "Dorëzim në App Store"],
    },
  },
  {
    num: "04",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7L12 12L22 7Z"/>
        <path d="M2 17L12 22L22 17"/>
        <path d="M2 12L12 17L22 12"/>
      </svg>
    ),
    color: "#22c55e",
    t: { en: "Maintenance & Support", sq: "Mirëmbajtje & Mbështetje" },
    d: {
      en: "Already have a website or app? We keep it running, updated, and growing. Fast fixes, regular updates, no headaches.",
      sq: "Keni tashmë një website ose aplikacion? Ne e mbajmë në punë, të përditësuar dhe në rritje.",
    },
    bullets: {
      en: ["Bug fixes within 24 hours", "Regular security updates", "Performance monitoring", "New features on demand"],
      sq: ["Rregullim bug-esh brenda 24 orësh", "Përditësime sigurie të rregullta", "Monitorim performance", "Funksionalitete të reja"],
    },
  },
];

const MKT_SERVICES = [
  {
    num: "01",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path d="M8 12l2 2 4-4"/>
        <path d="M12 6v2M12 16v2M6 12H4M20 12h-2"/>
      </svg>
    ),
    color: "#f43f5e",
    t: { en: "PPC Management", sq: "Menaxhim PPC" },
    d: {
      en: "We manage your pay-per-click campaigns so every euro you spend works harder. Data-driven targeting, constant optimization, real results.",
      sq: "Menaxhojmë fushatat tuaja PPC që çdo euro të punojë më shumë. Targetim i bazuar në të dhëna, optimizim i vazhdueshëm.",
    },
    bullets: {
      en: ["Google Ads & Bing Ads", "Full campaign setup & tracking", "Weekly performance reports", "A/B ad testing"],
      sq: ["Google Ads & Bing Ads", "Konfigurim i plotë & gjurmim", "Raporte javore të performancës", "Testim A/B reklamash"],
    },
  },
  {
    num: "02",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
        <circle cx="8" cy="10" r="2"/>
        <path d="M14 8h4M14 12h4"/>
      </svg>
    ),
    color: "#8b5cf6",
    t: { en: "Social Media Marketing", sq: "Marketing Social Media" },
    d: {
      en: "We create, manage, and grow your social media presence across Instagram, Facebook, TikTok, and LinkedIn — content that connects.",
      sq: "Krijojmë, menaxhojmë dhe rritim praninë tuaj në media sociale — Instagram, Facebook, TikTok, LinkedIn.",
    },
    bullets: {
      en: ["Content creation & scheduling", "Community management", "Growth strategy", "Monthly analytics reports"],
      sq: ["Krijim & planifikim i përmbajtjes", "Menaxhim komuniteti", "Strategji rritjeje", "Raporte mujore analitike"],
    },
  },
  {
    num: "03",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    color: "#0ea5e9",
    t: { en: "Meta Ads", sq: "Meta Ads" },
    d: {
      en: "Facebook and Instagram advertising that reaches your ideal customers. We handle the strategy, creatives, and optimization end-to-end.",
      sq: "Reklama Facebook dhe Instagram që arrijnë klientët tuaj idealë. Ne menaxhojmë strategjinë, kreativët dhe optimizimin.",
    },
    bullets: {
      en: ["Facebook & Instagram campaigns", "Audience research & targeting", "Creative design included", "Retargeting funnels"],
      sq: ["Fushata Facebook & Instagram", "Kërkime & targetim audiencash", "Dizajn kreativ i përfshirë", "Funele retargeting"],
    },
  },
  {
    num: "04",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77"/>
        <path d="M20 4.77A5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77"/>
        <path d="M5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
    color: "#ec4899",
    t: { en: "Google & TikTok Ads", sq: "Google & TikTok Ads" },
    d: {
      en: "Reach customers on Google Search, YouTube, and TikTok — the platforms where attention and buying intent meet.",
      sq: "Arrini klientët në Google Search, YouTube dhe TikTok — platformat ku vëmendja dhe qëllimi i blerjes takohen.",
    },
    bullets: {
      en: ["Google Search & Display campaigns", "YouTube video ads", "TikTok ads for young audiences", "Cross-platform reporting"],
      sq: ["Fushata Google Search & Display", "Reklama video YouTube", "TikTok Ads për audienca të reja", "Raportim cross-platform"],
    },
  },
];

const BUNDLES = [
  {
    badge: { en: "STARTER", sq: "FILLESTARE" },
    name: { en: "Web Starter", sq: "Web Fillestare" },
    price: "€300",
    highlight: false,
    color: "#06b6d4",
    desc: {
      en: "Website + 1 month paid advertising free",
      sq: "Website + 1 muaj reklamim falas",
    },
    items: {
      en: ["Professional business website", "1 month Meta or Google Ads — free", "SEO setup included", "Analytics tracking"],
      sq: ["Website profesionale për biznes", "1 muaj Meta ose Google Ads — falas", "Konfigurim SEO i përfshirë", "Gjurmim analitik"],
    },
  },
  {
    badge: { en: "POPULAR", sq: "MË E KËRKUAR" },
    name: { en: "Web + Growth", sq: "Web + Rritje" },
    price: "€500",
    highlight: true,
    color: "#a855f7",
    desc: {
      en: "Website + Facebook & Google Ads (1 month free)",
      sq: "Website + Facebook & Google Ads (1 muaj falas)",
    },
    items: {
      en: ["Premium website with custom design", "1 month Facebook + Google Ads — free", "Full campaign setup & tracking", "Monthly analytics report"],
      sq: ["Website premium me dizajn të personalizuar", "1 muaj Facebook + Google Ads — falas", "Konfigurim i plotë i fushatës & gjurmim", "Raport mujor analitik"],
    },
  },
  {
    badge: { en: "FULL SUITE", sq: "KOMPLET" },
    name: { en: "Web + Full Marketing", sq: "Web + Marketing i Plotë" },
    price: "€700",
    highlight: false,
    color: "#f43f5e",
    desc: {
      en: "Website + Google Ads + Social Media Management",
      sq: "Website + Google Ads + Menaxhim Social Media",
    },
    items: {
      en: ["Full-featured website", "Google Ads campaign management", "Social media content & management", "Monthly strategy & reporting call"],
      sq: ["Website me funksionalitete të plota", "Menaxhim fushatash Google Ads", "Përmbajtje & menaxhim social media", "Thirrje mujore strategjie & raportimi"],
    },
  },
];

function ServiceCard({ s, lang }: { s: (typeof DEV_SERVICES)[0]; lang: Lang }) {
  return (
    <div className="svc-simple-card reveal">
      <div className="svc-simple-left">
        <div className="svc-simple-icon" style={{ color: s.color, borderColor: s.color + "30", background: s.color + "10" }}>
          {s.icon}
        </div>
      </div>
      <div className="svc-simple-body">
        <div className="svc-simple-num" style={{ color: s.color }}>{s.num}</div>
        <h3 className="svc-simple-title">{s.t[lang]}</h3>
        <p className="svc-simple-desc">{s.d[lang]}</p>
        <ul className="svc-simple-bullets">
          {s.bullets[lang].map((b) => (
            <li key={b}>
              <span className="svc-bullet-dot" style={{ background: s.color }} />
              {b}
            </li>
          ))}
        </ul>
      </div>
      <div className="svc-simple-cta">
        <Link href="/contact" className="btn btn-ghost">
          {lang === "en" ? "Get a quote →" : "Merr ofertë →"}
        </Link>
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
              : <>Ndërto. <span className="gradient-text">Rrit.</span> Dominо.</>}
          </h1>
          <p className="page-hero-sub">
            {lang === "en"
              ? "From code to campaigns — we build your digital presence and market it to the right people."
              : "Nga kodi tek fushatat — ndërtojmë prezencën tuaj digjitale dhe e tregëtojmë tek njerëzit e duhur."}
          </p>
        </div>
      </div>

      {/* Development Section */}
      <div className="container" style={{ paddingBottom: 80 }}>
        <div className="svc-section-header reveal">
          <div className="svc-section-pill svc-pill-dev">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
            </svg>
            {lang === "en" ? "Development" : "Zhvillim"}
          </div>
          <h2 className="svc-section-title">
            {lang === "en" ? "We build things that work." : "Ndërtojmë gjëra që funksionojnë."}
          </h2>
          <p className="svc-section-sub">
            {lang === "en"
              ? "Websites, apps, and platforms — fast, clean, and built to last."
              : "Website, aplikacione dhe platforma — të shpejta, të pastra dhe të qëndrueshme."}
          </p>
        </div>
        <div className="svc-simple-list">
          {DEV_SERVICES.map((s, i) => <ServiceCard key={i} s={s} lang={lang as Lang} />)}
        </div>
      </div>

      {/* Marketing Section */}
      <div style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="container" style={{ paddingTop: 80, paddingBottom: 80 }}>
          <div className="svc-section-header reveal">
            <div className="svc-section-pill svc-pill-mkt">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
              {lang === "en" ? "Marketing" : "Marketing"}
            </div>
            <h2 className="svc-section-title">
              {lang === "en" ? "We get eyes on your business." : "Sjellim vëmendjen tek biznesi juaj."}
            </h2>
            <p className="svc-section-sub">
              {lang === "en"
                ? "Paid ads and social media that drive real traffic, real leads, real revenue."
                : "Reklama me pagesë dhe social media që sjellin trafik, klientë dhe të ardhura reale."}
            </p>
          </div>
          <div className="svc-simple-list">
            {MKT_SERVICES.map((s, i) => <ServiceCard key={i} s={s} lang={lang as Lang} />)}
          </div>
        </div>
      </div>

      {/* Bundles Section */}
      <div className="container" style={{ paddingTop: 100, paddingBottom: 120 }}>
        <div className="svc-section-header reveal">
          <div className="svc-section-pill svc-pill-bundle">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
