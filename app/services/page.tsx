"use client";
import Link from "next/link";
import RevealObserver from "@/components/RevealObserver";
import { useLang } from "@/lib/i18n";
import { SERVICES } from "@/lib/data";
import type { Lang } from "@/lib/data";

export default function ServicesPage() {
  const { lang } = useLang();
  return (
    <>
      <RevealObserver />
      <div className="pt-header">
        <div className="container">
          <div className="page-head">
            <div className="section-label">{lang === "en" ? "WHAT WE DO" : "ÇFARË BËJMË"}</div>
            <h1>
              {lang === "en" ? <>Our <span className="gradient-text">services</span></> : <>Shërbimet <span className="gradient-text">tona</span></>}
            </h1>
          </div>

          {SERVICES.map((s, i) => (
            <div key={i} className="svc-detail reveal">
              <div>
                <div className="svc-icon"><ServiceIcon index={i} /></div>
                <h3>{s.title[lang as Lang]}</h3>
                <p className="lead">{s.desc[lang as Lang]}</p>
                <div className="use-cases">
                  {s.cases[lang as Lang].map((c) => <span key={c} className="tech-pill">{c}</span>)}
                </div>
              </div>
              <div>
                <p className="incl-head">{lang === "en" ? "What's included" : "Çfarë përfshihet"}</p>
                <ul className="incl-list">
                  {s.incl[lang as Lang].map((item) => (
                    <li key={item}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 12 L10 17 L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="incl-head" style={{ marginTop: 24 }}>{lang === "en" ? "Tech stack" : "Teknologjitë"}</p>
                <div className="tech-grid">
                  {s.tech.map((t) => <div key={t} className="tech-card">{t}</div>)}
                </div>
              </div>
            </div>
          ))}

          <div className="center" style={{ marginTop: 64 }}>
            <Link href="/contact" className="btn btn-primary btn-lg">
              {lang === "en" ? "Have a project in mind? Let's talk →" : "Keni një projekt në mendje? Le të flasim →"}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

function ServiceIcon({ index }: { index: number }) {
  const icons = [
    <svg key={0} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9 H21"/><circle cx="6.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="9" cy="6.5" r=".5" fill="currentColor"/></svg>,
    <svg key={1} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18 H13"/></svg>,
    <svg key={2} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 10 L10 13 L7 16"/><path d="M13 16 H17"/></svg>,
  ];
  return <>{icons[index]}</>;
}
