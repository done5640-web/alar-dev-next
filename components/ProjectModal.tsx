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
        <div className="modal-actions">
          {project.url && <a className="btn btn-primary" href={project.url} target="_blank" rel="noopener noreferrer">Visit Site →</a>}
        </div>
      </div>
    </div>
  );
}
