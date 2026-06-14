"use client";
import { useState } from "react";
import { useLang } from "@/lib/i18n";

export default function ContactForm() {
  const { lang } = useLang();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const t = (en: string, sq: string) => lang === "en" ? en : sq;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const errs: Record<string, boolean> = {};
    let ok = true;
    form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>("[required]").forEach((f) => {
      if (!f.value.trim()) { errs[f.name] = true; ok = false; }
    });
    setErrors(errs);
    if (!ok) return;

    setLoading(true);
    setError(false);

    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "b299bb79-0a44-41fe-a9ad-8576ab9a7e94",
          from_name: "Alar Dev Website",
          subject: `New Contact Form Submission from ${data.name}`,
          ...data,
        }),
      });
      const result = await res.json();
      if (result.success) {
        setSent(true);
        form.reset();
      } else {
        throw new Error("Failed");
      }
    } catch {
      setError(true);
      setTimeout(() => setError(false), 5000);
    } finally {
      setLoading(false);
    }
  };

  const clearErr = (name: string) => setErrors((p) => ({ ...p, [name]: false }));

  if (sent) {
    return (
      <div className="success show">
        <svg className="check" viewBox="0 0 64 64">
          <circle cx="32" cy="32" r="28" />
          <path d="M20 33 L29 42 L46 24" />
        </svg>
        <h3 style={{ marginTop: 24, color: "#fff", fontSize: 22 }}>{t("Message sent!", "Mesazhi u dërgua!")}</h3>
        <p style={{ color: "var(--text-muted)", marginTop: 8 }}>{t("We'll be in touch within 24 hours.", "Do t'ju kontaktojmë brenda 24 orëve.")}</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <label>{t("Full Name", "Emri i Plotë")}</label>
        <input className={`f${errors.name ? " err" : ""}`} name="name" placeholder={t("Your name", "Emri juaj")} required onChange={() => clearErr("name")} />
        {errors.name && <div className="field-err show">{t("This field is required", "Kjo fushë është e detyrueshme")}</div>}
      </div>
      <div className="form-row">
        <label>Email</label>
        <input className={`f${errors.email ? " err" : ""}`} type="email" name="email" placeholder="email@you.com" required onChange={() => clearErr("email")} />
        {errors.email && <div className="field-err show">{t("This field is required", "Kjo fushë është e detyrueshme")}</div>}
      </div>
      <div className="form-row">
        <label>{t("Project Type", "Lloji i Projektit")}</label>
        <select className={`f${errors.type ? " err" : ""}`} name="type" required onChange={() => clearErr("type")} defaultValue="">
          <option value="">{t("Choose a type", "Zgjidhni llojin")}</option>
          <option>{t("Web Application", "Aplikacion Web")}</option>
          <option>{t("Business Website", "Website Biznesi")}</option>
          <option>{t("Mobile App", "Aplikacion Mobile")}</option>
          <option>{t("App Maintenance", "Mirëmbajtje Aplikacioni")}</option>
          <option>{t("Other", "Tjetër")}</option>
        </select>
        {errors.type && <div className="field-err show">{t("This field is required", "Kjo fushë është e detyrueshme")}</div>}
      </div>
      <div className="form-row">
        <label>{t("Message", "Mesazhi")}</label>
        <textarea className={`f${errors.message ? " err" : ""}`} name="message" rows={5} placeholder={t("Tell us more about your project...", "Tregoni më shumë për projektin tuaj...")} required onChange={() => clearErr("message")} />
        {errors.message && <div className="field-err show">{t("This field is required", "Kjo fushë është e detyrueshme")}</div>}
      </div>
      {error && (
        <div style={{ padding: "12px 16px", borderRadius: 8, background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", color: "#f87171", fontSize: 14 }}>
          {t("An error occurred. Please try again or email us directly.", "Ndodhi një gabim. Ju lutem provoni përsëri ose na kontaktoni direkt.")}
        </div>
      )}
      <button type="submit" className="btn btn-primary btn-lg" disabled={loading}>
        {loading ? t("Sending...", "Duke dërguar...") : t("Send message →", "Dërgo mesazhin →")}
      </button>
    </form>
  );
}
