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
    const rx = ((y / r.height) - 0.5) * -6;
    const ry = ((x / r.width) - 0.5) * 6;
    card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
  };

  const onMouseLeave = () => {
    const card = ref.current!;
    card.style.transition = "transform .5s ease";
    card.style.transform = "";
    setTimeout(() => { card.style.transition = ""; }, 500);
  };

  const img = (p as typeof p & { image?: string }).image;

  return (
    <article
      ref={ref}
      className="proj-card reveal"
      onClick={() => onOpen(p)}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {img && (
        <div className="proj-card-img">
          <img src={img} alt={p.name} />
          <div className="proj-card-img-overlay" style={{ background: `linear-gradient(to bottom, transparent 40%, rgba(7,8,15,0.95) 100%)` }} />
          <span className="proj-card-cat">{p.cat}</span>
        </div>
      )}
      {!img && <div className="accent-line" style={{ background: p.grad }} />}
      <div className="proj-card-body">
        {!img && <span className="cat-pill">{p.cat}</span>}
        <h3 className="proj-title">{p.name}</h3>
        <p className="proj-desc">{p.desc[lang]}</p>
        <div className="tech-row">
          {p.tech.map((t) => <span key={t} className="tech-pill">{t}</span>)}
        </div>
        <div className="proj-bottom">
          <span className="view-link">
            {lang === "en" ? "View project" : "Shiko projektin"} <span className="arr">→</span>
          </span>
        </div>
      </div>
    </article>
  );
}
