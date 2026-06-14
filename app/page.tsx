"use client";
import Link from "next/link";
import { useState } from "react";
import HeroCanvas from "@/components/HeroCanvas";
import StatsCounter from "@/components/StatsCounter";
import RevealObserver from "@/components/RevealObserver";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { useLang } from "@/lib/i18n";
import { PROJECTS, SERVICES, PROCESS } from "@/lib/data";
import type { Lang } from "@/lib/data";

type Project = (typeof PROJECTS)[number];

export default function HomePage() {
  const { lang } = useLang();
  const [modal, setModal] = useState<Project | null>(null);
  const openModal = (p: Project) => setModal(p);

  return (
    <>
      <RevealObserver />

      {/* HERO */}
      <section id="hero">
        <HeroCanvas />
        <div className="hero-glow" />
        <div className="float-pill fp1">React · Next.js</div>
        <div className="float-pill fp2">Flutter · Dart</div>
        <div className="float-pill fp3">Node.js · Docker</div>
        <div className="float-pill fp4">PostgreSQL</div>
        <div className="hero-inner">
          <div className="section-label">✦ SOFTWARE STUDIO · EST. 2019</div>
          <h1 className="hero-headline">
            {lang === "en" ? (
              <>We engineer software<br />that <span className="gradient-text">scales.</span></>
            ) : (
              <>Ndërtojmë softuer që<br /><span className="gradient-text">shkëlqen.</span></>
            )}
          </h1>
          <p className="hero-sub">
            {lang === "en"
              ? "Full-stack product teams. From architecture to deployment — we build the software your business runs on."
              : "Ekipe të plota produkti. Nga arkitektura deri në lansim — ne ndërtojmë softuerin mbi të cilin biznesi juaj funksionon."}
          </p>
          <div className="hero-ctas">
            <Link href="/contact" className="btn btn-primary btn-lg">
              {lang === "en" ? "Start a project →" : "Fillo një projekt →"}
            </Link>
            <Link href="/projects" className="btn btn-ghost btn-lg">
              {lang === "en" ? "See our work" : "Shiko punën tonë"}
            </Link>
          </div>
        </div>
        <div className="scroll-ind">
          <span>{lang === "en" ? "Scroll" : "Lëviz"}</span>
          <div className="arrow" />
        </div>
      </section>

      {/* STATS */}
      <StatsCounter />

      {/* FEATURED PROJECTS */}
      <section id="featured-projects" className="block">
        <div className="container">
          <div className="center reveal">
            <div className="section-label">{lang === "en" ? "OUR WORK" : "PUNËT TONA"}</div>
            <h2 className="section-head">
              {lang === "en" ? <>Selected <span className="gradient-text">Projects</span></> : <>Projekte <span className="gradient-text">të Zgjedhura</span></>}
            </h2>
            <p className="section-sub">
              {lang === "en"
                ? "A selection of what we've built. Each project is a story of a problem solved."
                : "Një përzgjedhje e asaj që kemi ndërtuar. Çdo projekt është një histori e një problemi të zgjidhur."}
            </p>
          </div>
          <div className="proj-grid">
            {PROJECTS.slice(0, 4).map((p) => (
              <ProjectCard key={p.id} p={p} lang={lang as Lang} onOpen={openModal} />
            ))}
          </div>
          <div className="center" style={{ marginTop: 48 }}>
            <Link href="/projects" className="btn btn-ghost">
              {lang === "en" ? "View all projects →" : "Shiko të gjitha projektet →"}
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="block" style={{ background: "linear-gradient(180deg,transparent,rgba(168,85,247,0.03),transparent)" }}>
        <div className="container">
          <div className="center reveal">
            <div className="section-label">{lang === "en" ? "WHAT WE DO" : "ÇFARË BËJMË"}</div>
            <h2 className="section-head">
              {lang === "en" ? <>End-to-end <span className="gradient-text">engineering</span></> : <>Inxhinieri <span className="gradient-text">nga fundi në fund</span></>}
            </h2>
            <p className="section-sub">
              {lang === "en"
                ? "We cover every layer of modern software — from pixel to database to deployment."
                : "Ne mbulojmë çdo shtresë të softuerit modern — nga pikseli te baza e të dhënave."}
            </p>
          </div>
          <div className="svc-grid">
            {SERVICES.map((s, i) => (
              <div key={i} className="svc-card reveal">
                <ServiceIcon index={i} />
                <h3 className="svc-title">{s.title[lang as Lang]}</h3>
                <p className="svc-desc">{s.desc[lang as Lang]}</p>
                <div className="tech-row">
                  {s.tech.map((t) => <span key={t} className="tech-pill">{t}</span>)}
                </div>
                <Link href="/services" className="learn">
                  {lang === "en" ? "Learn more" : "Mëso më shumë"} <span className="arr">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="block">
        <div className="container">
          <div className="center reveal">
            <div className="section-label">{lang === "en" ? "PROCESS" : "PROCESI"}</div>
            <h2 className="section-head">
              {lang === "en" ? <>How we <span className="gradient-text">work</span></> : <>Si <span className="gradient-text">punojmë</span></>}
            </h2>
            <p className="section-sub">
              {lang === "en"
                ? "A simple, transparent process from first call to final deployment."
                : "Një proces i thjeshtë dhe transparent nga thirrja e parë deri në lansim."}
            </p>
          </div>
          <div className="proc-grid">
            {PROCESS.map((p) => (
              <div key={p.n} className="proc-step reveal">
                <div className="proc-num">{p.n}</div>
                <h4 className="proc-title">{p.t[lang as Lang]}</h4>
                <p className="proc-desc">{p.d[lang as Lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section id="cta-banner" className="block">
        <div className="container cta-inner reveal">
          <h2 className="cta-h">
            {lang === "en" ? "Ready to build something great?" : "Gati të ndërtoni diçka të madhe?"}
          </h2>
          <p className="cta-sub">
            {lang === "en"
              ? "No pitch decks, no long contracts. Just a real conversation about your project."
              : "Pa prezantime, pa kontrata të gjata. Vetëm një bisedë e vërtetë për projektin tuaj."}
          </p>
          <Link href="/contact" className="btn btn-primary btn-lg" style={{ marginTop: 40 }}>
            {lang === "en" ? "Get in touch →" : "Na kontaktoni →"}
          </Link>
        </div>
      </section>

      {modal && <ProjectModal project={modal} lang={lang as Lang} onClose={() => setModal(null)} />}
    </>
  );
}

function ServiceIcon({ index }: { index: number }) {
  const icons = [
    <svg key={0} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9 H21"/><circle cx="6.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="9" cy="6.5" r=".5" fill="currentColor"/></svg>,
    <svg key={1} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18 H13"/></svg>,
    <svg key={2} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 10 L10 13 L7 16"/><path d="M13 16 H17"/></svg>,
  ];
  return <div className="svc-icon">{icons[index]}</div>;
}
