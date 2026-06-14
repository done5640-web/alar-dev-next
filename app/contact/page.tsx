"use client";
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { useLang } from "@/lib/i18n";

export default function ContactPage() {
  const { lang } = useLang();
  const t = (en: string, sq: string) => lang === "en" ? en : sq;

  return (
    <div className="pt-header">
      <div className="container">
        <div style={{ maxWidth: 760 }}>
          <h1 style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.02em", color: "#fff" }}>
            {lang === "en"
              ? <>Let&apos;s build something <span className="gradient-text">together</span></>
              : <>Le të ndërtojmë diçka <span className="gradient-text">së bashku</span></>}
          </h1>
          <p style={{ fontSize: 16, color: "var(--text-muted)", marginTop: 16, maxWidth: 560 }}>
            {t("Tell us about your project. We'll get back to you within 24 hours.", "Na tregoni për projektin tuaj. Do t'ju kontaktojmë brenda 24 orëve.")}
          </p>
        </div>

        <div className="contact-grid">
          <ContactForm />

          <div className="info-card">
            <div className="info-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6 L20 6 L20 18 L4 18 Z"/><path d="M4 6 L12 13 L20 6"/></svg>
              <div>
                <div className="lbl">Email</div>
                <a className="val" href="mailto:alar.dev2@gmail.com">alar.dev2@gmail.com</a>
              </div>
            </div>
            <div className="info-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.19h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6 6l.93-.97a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16z"/></svg>
              <div>
                <div className="lbl">{t("Phone", "Telefon")}</div>
                <a className="val" href="tel:+355694712357">+355 69 471 2357</a>
              </div>
            </div>
            <div className="info-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 7 V12 L15 14"/></svg>
              <div>
                <div className="lbl">{t("Response time", "Koha e përgjigjes")}</div>
                <div className="val">{t("Under 24 hours", "Nën 24 orë")}</div>
              </div>
            </div>
            <div className="info-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22 C7 16 4 12 4 9 a8 8 0 0 1 16 0 c0 3 -3 7 -8 13Z"/><circle cx="12" cy="9" r="2.5"/></svg>
              <div>
                <div className="lbl">{t("Location", "Vendndodhja")}</div>
                <div className="val">{t("Tirana, Albania", "Tiranë, Shqipëri")}</div>
              </div>
            </div>
            <div className="info-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="6" fill="#22C55E"/></svg>
              <div>
                <div className="lbl">{t("Availability", "Disponueshmëria")}</div>
                <div className="val">{t("Currently accepting new projects", "Aktualisht pranojmë projekte të reja")}</div>
              </div>
            </div>
            <div className="info-divider" />
            <div>
              <div className="lbl" style={{ fontSize: 12, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                {t("Follow us", "Na ndiqni")}
              </div>
              <div className="foot-social" style={{ marginTop: 12 }}>
                <a href="#" aria-label="GitHub"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.82.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg></a>
                <a href="#" aria-label="LinkedIn"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h4v4H4zM4 10h4v10H4zM10 10h4v1.6c.6-1 1.9-1.9 3.6-1.9 3.4 0 4.4 2 4.4 5.1V20h-4v-4.6c0-1.4-.5-2.4-1.9-2.4-1.3 0-2.1.9-2.1 2.3V20h-4z"/></svg></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
