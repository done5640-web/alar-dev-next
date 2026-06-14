"use client";
import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import RevealObserver from "@/components/RevealObserver";
import { useLang } from "@/lib/i18n";
import { PROJECTS } from "@/lib/data";
import type { Lang } from "@/lib/data";

const CATS = ["All", "Web App", "Mobile App", "Platform", "Dashboard"];
const CAT_LABELS: Record<Lang, Record<string, string>> = {
  en: { All: "All", "Web App": "Web App", "Mobile App": "Mobile App", Platform: "Platform", Dashboard: "Dashboard" },
  sq: { All: "Të gjitha", "Web App": "Web", "Mobile App": "Mobile", Platform: "Platformë", Dashboard: "Panel" },
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
      <div className="pt-header">
        <div className="container">
          <div className="page-head">
            <div className="section-label">{lang === "en" ? "ALL PROJECTS" : "TË GJITHA PROJEKTET"}</div>
            <h1><span className="gradient-text">{lang === "en" ? "Projects" : "Projektet tona"}</span></h1>
          </div>
          <div className="filters">
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
      </div>
      {modal && <ProjectModal project={modal} lang={lang as Lang} onClose={() => setModal(null)} />}
    </>
  );
}
