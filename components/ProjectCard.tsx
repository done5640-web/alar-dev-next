"use client";
import { useRef } from "react";
import type { Lang, PROJECTS } from "@/lib/data";

type Project = (typeof PROJECTS)[number];

export function ProjectCard({ p, lang, onOpen }: { p: Project; lang: Lang; onOpen: (p: Project) => void }) {
  const ref = useRef<HTMLElement>(null);

  const onMouseMove = (e: React.MouseEvent) => {
    const card = ref.current!;
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;
    const rx = ((y / r.height) - 0.5) * -8;
    const ry = ((x / r.width) - 0.5) * 8;
    card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    card.style.setProperty("--mx", x + "px");
    card.style.setProperty("--my", y + "px");
  };

  const onMouseLeave = () => {
    const card = ref.current!;
    card.style.transition = "transform .5s ease";
    card.style.transform = "";
    setTimeout(() => { card.style.transition = ""; }, 500);
  };

  return (
    <article
      ref={ref}
      className="proj-card reveal"
      onClick={() => onOpen(p)}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className="accent-line" style={{ background: p.grad }} />
      <div className="inner-glow" />
      <div className="proj-head">
        <div />
        <span className="cat-pill">{p.cat}</span>
      </div>
      <h3 className="proj-title">{p.name}</h3>
      <p className="proj-desc">{p.desc[lang]}</p>
      <div className="tech-row">
        {p.tech.map((t) => <span key={t} className="tech-pill">{t}</span>)}
      </div>
      <div className="proj-bottom">
        <span className="view-link">
          {lang === "en" ? "View project" : "Shiko projektin"} <span className="arr">→</span>
        </span>
        <span className="arrow-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12 H19 M13 6 L19 12 L13 18" />
          </svg>
        </span>
      </div>
    </article>
  );
}
