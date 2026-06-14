"use client";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { BrandLogo } from "./BrandLogo";

export default function Footer() {
  const { lang } = useLang();
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div>
            <div className="brand">
              <BrandLogo />
              <span className="brand-text">ALAR DEV</span>
            </div>
            <p className="foot-tag">
              {lang === "en"
                ? "Web design & website creation in Albania. E-commerce, mobile apps, custom software. Based in Tirana."
                : "Krijim website & web design në Shqipëri. Dyqan online, aplikacione mobile, software me porosi. Bazuar në Tiranë."}
            </p>
            <div className="foot-social">
              <a href="https://www.instagram.com/alar.dev/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
              <a href="mailto:alar.dev2@gmail.com" aria-label="Email"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6 L20 6 L20 18 L4 18 Z"/><path d="M4 6 L12 13 L20 6"/></svg></a>
            </div>
          </div>
          <div className="foot-col">
            <h4>{lang === "en" ? "Company" : "Kompania"}</h4>
            <ul>
              <li><Link href="/">{lang === "en" ? "Home" : "Kryefaqja"}</Link></li>
              <li><Link href="/projects">{lang === "en" ? "Projects" : "Projektet"}</Link></li>
              <li><Link href="/services">{lang === "en" ? "Services" : "Shërbimet"}</Link></li>
              <li><Link href="/about">{lang === "en" ? "About" : "Rreth Nesh"}</Link></li>
              <li><Link href="/contact">{lang === "en" ? "Contact" : "Kontakt"}</Link></li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>{lang === "en" ? "Services" : "Shërbime"}</h4>
            <ul>
              <li><Link href="/services">{lang === "en" ? "Software Development" : "Zhvillim Software"}</Link></li>
              <li><Link href="/services">{lang === "en" ? "Business Websites" : "Website për Biznes"}</Link></li>
              <li><Link href="/services">{lang === "en" ? "App Maintenance" : "Menaxhim Aplikacionesh"}</Link></li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>{lang === "en" ? "Contact" : "Kontakt"}</h4>
            <ul>
              <li><a href="mailto:alar.dev2@gmail.com">alar.dev2@gmail.com</a></li>
              <li><a href="tel:+355694712357">+355 69 471 2357</a></li>
              <li>{lang === "en" ? "Based in Tirana, Albania" : "Bazuar në Tiranë, Shqipëri"}</li>
              <li><span className="dot" />{lang === "en" ? "Open to new projects" : "Hapur për projekte të reja"}</li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>{lang === "en" ? "© 2026 ALAR DEV. All rights reserved." : "© 2026 ALAR DEV. Të gjitha të drejtat e rezervuara."}</span>
          <span>{lang === "en" ? "Designed & built with obsession." : "Dizajnuar dhe ndërtuar me pasion."}</span>
        </div>
      </div>
    </footer>
  );
}
