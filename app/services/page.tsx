"use client";
import Link from "next/link";
import RevealObserver from "@/components/RevealObserver";
import { useLang } from "@/lib/i18n";
import type { Lang } from "@/lib/data";

const SERVICES = [
  {
    num: "01",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
      sq: "Ndërtojmë aplikacione web të shpejta dhe moderne, të personalizuara sipas nevojave tuaja — nga platformat e rezervimit tek produktet SaaS.",
    },
    bullets: {
      en: ["Responsive on every device", "SEO-optimized from day one", "Admin dashboard included", "Delivered in 2–4 weeks"],
      sq: ["Responsive në çdo pajisje", "SEO e optimizuar nga dita e parë", "Panel administrimi i përfshirë", "Dorëzim në 2–4 javë"],
    },
  },
  {
    num: "02",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9L12 3L21 9"/>
        <path d="M9 21V12H15V21"/>
        <path d="M3 9V21H21V9"/>
      </svg>
    ),
    color: "#06b6d4",
    t: { en: "Business Websites", sq: "Website për Biznes" },
    d: {
      en: "Professional websites for local businesses that actually convert visitors into customers. Clean design, fast loading, easy to manage.",
      sq: "Website profesionale për biznese lokale që konvertojnë vizitorë në klientë. Dizajn modern, ngarkim i shpejtë, i lehtë për t'u menaxhuar.",
    },
    bullets: {
      en: ["Starting at €150", "Built and delivered in 7 days", "Contact & booking forms", "Easy content updates"],
      sq: ["Nga €150", "Ndërtuar dhe dorëzuar në 7 ditë", "Forma kontakti dhe rezervimi", "Përditësime të lehta të përmbajtjes"],
    },
  },
  {
    num: "03",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="7" y="2" width="10" height="20" rx="2"/>
        <path d="M11 18H13"/>
      </svg>
    ),
    color: "#f97316",
    t: { en: "Mobile Applications", sq: "Aplikacione Mobile" },
    d: {
      en: "iOS and Android apps built with Flutter — one codebase, both platforms, no compromise on speed or experience.",
      sq: "Aplikacione iOS dhe Android me Flutter — një bazë kodi, të dyja platformat, pa kompromis në shpejtësi ose eksperiencë.",
    },
    bullets: {
      en: ["Works on iOS & Android", "Offline capability", "Push notifications", "App Store submission handled"],
      sq: ["Funksionon në iOS & Android", "Aftësi offline", "Njoftime push", "Dorëzim në App Store"],
    },
  },
  {
    num: "04",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7L12 12L22 7Z"/>
        <path d="M2 17L12 22L22 17"/>
        <path d="M2 12L12 17L22 12"/>
      </svg>
    ),
    color: "#22c55e",
    t: { en: "Maintenance & Support", sq: "Mirëmbajtje & Mbështetje" },
    d: {
      en: "Already have a website or app? We keep it running, updated, and growing. Fast fixes, regular updates, no headaches.",
      sq: "Keni tashmë një website ose aplikacion? Ne e mbajmë në punë, të përditësuar dhe në rritje. Rregullime të shpejta, pa dhimbje koke.",
    },
    bullets: {
      en: ["Bug fixes within 24 hours", "Regular security updates", "Performance monitoring", "New features on demand"],
      sq: ["Rregullim bug-esh brenda 24 orësh", "Përditësime sigurie të rregullta", "Monitorim performance", "Funksionalitete të reja sipas kërkesës"],
    },
  },
];

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
              ? <>Built for your <span className="gradient-text">business.</span></>
              : <>Ndërtuar për <span className="gradient-text">biznesin tuaj.</span></>}
          </h1>
          <p className="page-hero-sub">
            {lang === "en"
              ? "From landing pages to full platforms — we build what your business needs, and nothing you don't."
              : "Nga faqet prezantuese tek platformat e plota — ndërtojmë çfarë ka nevojë biznesi juaj."}
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="container" style={{ paddingBottom: 120 }}>
        <div className="svc-simple-list">
          {SERVICES.map((s, i) => (
            <div key={i} className="svc-simple-card reveal">
              <div className="svc-simple-left">
                <div className="svc-simple-icon" style={{ color: s.color, borderColor: s.color + "30", background: s.color + "10" }}>
                  {s.icon}
                </div>
              </div>
              <div className="svc-simple-body">
                <div className="svc-simple-num" style={{ color: s.color }}>{s.num}</div>
                <h2 className="svc-simple-title">{s.t[lang as Lang]}</h2>
                <p className="svc-simple-desc">{s.d[lang as Lang]}</p>
                <ul className="svc-simple-bullets">
                  {s.bullets[lang as Lang].map((b) => (
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
          ))}
        </div>

        <div className="center reveal" style={{ marginTop: 80 }}>
          <p style={{ color: "var(--text-muted)", fontSize: 17, marginBottom: 28 }}>
            {lang === "en" ? "Not sure what you need? Let's talk about your project." : "Nuk jeni i sigurt? Le të flasim për projektin tuaj."}
          </p>
          <Link href="/contact" className="btn btn-primary btn-lg">
            {lang === "en" ? "Start a conversation →" : "Fillo një bisedë →"}
          </Link>
        </div>
      </div>
    </>
  );
}
