"use client";
import { useState } from "react";
import { useLang } from "@/lib/i18n";

export default function ContactForm() {
  const { lang } = useLang();
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const t = (en: string, sq: string) => lang === "en" ? en : sq;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const errs: Record<string, boolean> = {};
    let ok = true;
    form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>("[required]").forEach((f) => {
      if (!f.value.trim()) { errs[f.name] = true; ok = false; }
    });
    setErrors(errs);
    if (ok) setSent(true);
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
          <option>{t("Mobile App", "Aplikacion Mobile")}</option>
          <option>{t("Custom Software", "Softuer i Personalizuar")}</option>
          <option>{t("Other", "Tjetër")}</option>
        </select>
        {errors.type && <div className="field-err show">{t("This field is required", "Kjo fushë është e detyrueshme")}</div>}
      </div>
      <div className="form-row">
        <label>{t("Budget Range", "Buxheti")}</label>
        <select className={`f${errors.budget ? " err" : ""}`} name="budget" required onChange={() => clearErr("budget")} defaultValue="">
          <option value="">{t("Choose a range", "Zgjidhni buxhetin")}</option>
          <option>Under $5,000</option>
          <option>$5,000 – $15,000</option>
          <option>$15,000 – $50,000</option>
          <option>$50,000+</option>
        </select>
        {errors.budget && <div className="field-err show">{t("This field is required", "Kjo fushë është e detyrueshme")}</div>}
      </div>
      <div className="form-row">
        <label>{t("Message", "Mesazhi")}</label>
        <textarea className={`f${errors.message ? " err" : ""}`} name="message" rows={5} placeholder={t("Tell us about your project, goals, and timeline...", "Tregoni për projektin, qëllimet dhe afatin tuaj...")} required onChange={() => clearErr("message")} />
        {errors.message && <div className="field-err show">{t("This field is required", "Kjo fushë është e detyrueshme")}</div>}
      </div>
      <button type="submit" className="btn btn-primary btn-lg">{t("Send message →", "Dërgo mesazhin →")}</button>
    </form>
  );
}
