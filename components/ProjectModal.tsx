"use client";
import { useEffect } from "react";
import type { Lang, PROJECTS } from "@/lib/data";

type Project = (typeof PROJECTS)[number];

export function ProjectModal({ project, lang, onClose }: { project: Project | null; lang: Lang; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = project ? "hidden" : "";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay open" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal">
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        <span className="cat-pill">{project.cat}</span>
        <h2 className="gradient-text">{project.name}</h2>
        {project.long[lang].split("\n\n").map((par, i) => <p key={i}>{par}</p>)}
        <h4 style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", marginTop: 24 }}>Tech stack</h4>
        <div className="tech-row" style={{ marginTop: 12 }}>
          {project.tech.map((t) => <span key={t} className="tech-pill">{t}</span>)}
        </div>
        <div className="screens">
          {[0, 1].map((i) => (
            <div key={i} className="screen">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="6" width="18" height="14" rx="2" /><circle cx="12" cy="13" r="3.5" /><path d="M8 6 L10 4 H14 L16 6" />
              </svg>
              <span>Screenshot</span>
            </div>
          ))}
        </div>
        <div className="modal-actions">
          <a className="btn btn-primary" href="#">View Live →</a>
          <a className="btn btn-ghost" href="#">GitHub →</a>
        </div>
      </div>
    </div>
  );
}
