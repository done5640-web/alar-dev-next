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
  { href: "/blog", label: { en: "Blog", sq: "Blog" } },
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

  // Close menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <nav className={`top${scrolled ? " scrolled" : ""}`}>
        <div className="inner">
          <Link href="/" className="brand">
            <BrandLogo />
            <span className="brand-text">ALAR DEV</span>
          </Link>

          {/* Desktop links */}
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
            {/* Language toggle — visible on all screen sizes */}
            <div className="lang-toggle">
              <button className={lang === "sq" ? "active" : ""} onClick={() => setLang("sq")}>SQ</button>
              <span className="lang-pipe" />
              <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
            </div>
            {/* CTA — desktop only */}
            <Link href="/contact" className="nav-cta desktop-only">
              {lang === "en" ? "Start a Project" : "Nis Projektin"}
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12 H19 M13 6 L19 12 L13 18"/></svg>
            </Link>
            {/* Burger — mobile only */}
            <button className="hamburger" onClick={() => setOpen((v) => !v)} aria-label="Menu" aria-expanded={open}>
              <span className={open ? "open" : ""} />
              <span className={open ? "open" : ""} />
              <span className={open ? "open" : ""} />
            </button>
          </div>
        </div>
      </nav>

      {/* Slide-down mobile menu */}
      <div className={`mobile-menu${open ? " open" : ""}`}>
        <div className="mobile-menu-inner">
          {links.map((l) => {
            const isActive = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`mob-link${isActive ? " active" : ""}`}
              >
                {l.label[lang]}
              </Link>
            );
          })}
          <div className="mob-divider" />
          <Link href="/contact" className="mob-cta" onClick={() => setOpen(false)}>
            {lang === "en" ? "Start a Project →" : "Nis Projektin →"}
          </Link>
        </div>
      </div>

      {/* Backdrop */}
      {open && <div className="mob-backdrop" onClick={() => setOpen(false)} />}
    </>
  );
}
