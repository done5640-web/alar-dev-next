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
              <span className="brand-text">alar.dev</span>
            </div>
            <p className="foot-tag">{lang === "en" ? "Crafting software with purpose." : "Krijojmë softuer me qëllim."}</p>
            <div className="foot-social">
              <a href="#" aria-label="GitHub"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.82.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg></a>
              <a href="#" aria-label="LinkedIn"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h4v4H4zM4 10h4v10H4zM10 10h4v1.6c.6-1 1.9-1.9 3.6-1.9 3.4 0 4.4 2 4.4 5.1V20h-4v-4.6c0-1.4-.5-2.4-1.9-2.4-1.3 0-2.1.9-2.1 2.3V20h-4z"/></svg></a>
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
              <li><Link href="/services">Web Apps</Link></li>
              <li><Link href="/services">Mobile Apps</Link></li>
              <li><Link href="/services">{lang === "en" ? "Custom Software" : "Softuer i Personalizuar"}</Link></li>
              <li><Link href="/services">API Development</Link></li>
              <li><Link href="/services">{lang === "en" ? "Consulting" : "Konsulencë"}</Link></li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>{lang === "en" ? "Contact" : "Kontakt"}</h4>
            <ul>
              <li><a href="mailto:hello@alar.dev">hello@alar.dev</a></li>
              <li>{lang === "en" ? "Based in Tirana, Albania" : "Bazuar në Tiranë, Shqipëri"}</li>
              <li><span className="dot" />{lang === "en" ? "Open to new projects" : "Hapur për projekte të reja"}</li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>{lang === "en" ? "© 2025 alar.dev. All rights reserved." : "© 2025 alar.dev. Të gjitha të drejtat e rezervuara."}</span>
          <span>{lang === "en" ? "Designed & built with obsession." : "Dizajnuar dhe ndërtuar me pasion."}</span>
        </div>
      </div>
    </footer>
  );
}
