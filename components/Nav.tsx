"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useLang } from "@/lib/i18n";
import { BrandLogo } from "./BrandLogo";

const links = [
  { href: "/", label: { en: "Home", sq: "Kryefaqja" } },
  { href: "/about", label: { en: "About", sq: "Rreth Nesh" } },
  { href: "/services", label: { en: "Services", sq: "Shërbimet" } },
  { href: "/projects", label: { en: "Portfolio", sq: "Portofoli" } },
  { href: "/contact", label: { en: "Contact", sq: "Kontakt" } },
];

export default function Nav() {
  const pathname = usePathname();
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <nav className={`top${scrolled ? " scrolled" : ""}`}>
        <div className="inner">
          <Link href="/" className="brand">
            <BrandLogo />
            <span className="brand-text">ALAR DEV</span>
          </Link>

          <div className="nav-links">
            {links.map((l) => {
              const isActive = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
              return (
                <Link key={l.href} href={l.href} className={`nav-link${isActive ? " active" : ""}`}>
                  {l.label[lang]}
                </Link>
              );
            })}
          </div>

          <div className="nav-right">
            <div className="lang-toggle">
              <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
              <span className="lang-pipe" />
              <button className={lang === "sq" ? "active" : ""} onClick={() => setLang("sq")}>SQ</button>
            </div>
            <Link href="/contact" className="nav-cta">
              {lang === "en" ? "Start a Project" : "Nis Projektin"}
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12 H19 M13 6 L19 12 L13 18"/></svg>
            </Link>
            <button className="hamburger" onClick={() => setOpen(true)} aria-label="Menu">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-overlay${open ? " open" : ""}`}>
        <button className="mobile-close" onClick={() => setOpen(false)}>×</button>
        {links.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="mob-link">
            {l.label[lang]}
          </Link>
        ))}
        <div className="mob-lang">
          <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
          <span className="lang-pipe" />
          <button className={lang === "sq" ? "active" : ""} onClick={() => setLang("sq")}>SQ</button>
        </div>
        <Link href="/contact" className="nav-cta" onClick={() => setOpen(false)}>
          {lang === "en" ? "Start a Project" : "Nis Projektin"}
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12 H19 M13 6 L19 12 L13 18"/></svg>
        </Link>
      </div>
    </>
  );
}
