"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLang } from "@/lib/i18n";
import { BrandLogo } from "./BrandLogo";

const links = [
  { href: "/", label: { en: "Home", sq: "Kryefaqja" } },
  { href: "/projects", label: { en: "Projects", sq: "Projektet" } },
  { href: "/services", label: { en: "Services", sq: "Shërbimet" } },
  { href: "/about", label: { en: "About", sq: "Rreth Nesh" } },
  { href: "/contact", label: { en: "Contact", sq: "Kontakt" } },
];

export default function Nav() {
  const pathname = usePathname();
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="top">
        <div className="inner">
          <Link href="/" className="brand">
            <BrandLogo />
            <span className="brand-text glitch">alar.dev</span>
          </Link>
          <div className="nav-links">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className={`nav-link${pathname === l.href ? " active" : ""}`}>
                {l.label[lang]}
              </Link>
            ))}
          </div>
          <div className="nav-right">
            <div className="lang">
              <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
              <span className="sep">|</span>
              <button className={lang === "sq" ? "active" : ""} onClick={() => setLang("sq")}>SQ</button>
            </div>
            <Link href="/contact" className="btn btn-primary magnetic">
              {lang === "en" ? "Let's talk →" : "Le të flasim →"}
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
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label[lang]}</Link>
        ))}
        <div className="lang" style={{ fontSize: 16, marginTop: 32 }}>
          <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
          <span className="sep">|</span>
          <button className={lang === "sq" ? "active" : ""} onClick={() => setLang("sq")}>SQ</button>
        </div>
      </div>
    </>
  );
}
