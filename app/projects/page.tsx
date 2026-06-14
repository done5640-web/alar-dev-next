"use client";
import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import RevealObserver from "@/components/RevealObserver";
import { useLang } from "@/lib/i18n";
import { PROJECTS } from "@/lib/data";
import type { Lang } from "@/lib/data";

const CATS = ["All", "Web App", "Platform"];
const CAT_LABELS: Record<Lang, Record<string, string>> = {
  en: { All: "All Projects", "Web App": "Web Apps", Platform: "Platforms" },
  sq: { All: "Të Gjitha", "Web App": "Web Apps", Platform: "Platforma" },
};

type Project = (typeof PROJECTS)[number];

export default function ProjectsPage() {
  const { lang } = useLang();
  const [filter, setFilter] = useState("All");
  const [modal, setModal] = useState<Project | null>(null);
  const openModal = (p: Project) => setModal(p);

  const visible = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.catKey === filter);

  return (
    <>
      <RevealObserver />

      {/* Page Hero */}
      <div className="page-hero">
        <div className="page-hero-dots" />
        <div className="page-hero-glow" style={{ "--hero-glow-color": "rgba(6,182,212,0.15)" } as React.CSSProperties} />
        <div className="container page-hero-content reveal">
          <div className="section-label">{lang === "en" ? "OUR WORK" : "PUNËT TONA"}</div>
          <h1 className="page-hero-title">
            {lang === "en"
              ? <>Our <span className="gradient-text">Portfolio.</span></>
              : <>Portofoli <span className="gradient-text">ynë.</span></>}
          </h1>
          <p className="page-hero-sub">
            {lang === "en"
              ? "50+ projects delivered across Albania. Every one built with care, on time, and on budget."
              : "50+ projekte të dorëzuara në Shqipëri. Çdo njëri i ndërtuar me kujdes, në kohë dhe brenda buxhetit."}
          </p>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: 120 }}>
        {/* Filters */}
        <div className="filters reveal">
          {CATS.map((c) => (
            <button key={c} className={`filter${filter === c ? " active" : ""}`} onClick={() => setFilter(c)}>
              {CAT_LABELS[lang as Lang][c]}
            </button>
          ))}
        </div>

        <div className="proj-grid-3">
          {visible.map((p) => (
            <ProjectCard key={p.id} p={p} lang={lang as Lang} onOpen={openModal} />
          ))}
        </div>
      </div>

      {modal && <ProjectModal project={modal} lang={lang as Lang} onClose={() => setModal(null)} />}
    </>
  );
}
