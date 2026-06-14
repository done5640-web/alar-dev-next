"use client";
import RevealObserver from "@/components/RevealObserver";
import { useLang } from "@/lib/i18n";
import { VALUES, TEAM } from "@/lib/data";
import type { Lang } from "@/lib/data";

export default function AboutPage() {
  const { lang } = useLang();
  return (
    <>
      <RevealObserver />
      <div className="pt-header">
        <div className="container">
          <div className="page-head">
            <h1>
              {lang === "en" ? <>We are <span className="gradient-text">alar.dev</span></> : <>Ne jemi <span className="gradient-text">alar.dev</span></>}
            </h1>
            <p className="section-sub">
              {lang === "en"
                ? "A small team of engineers who care deeply about quality and the products we build."
                : "Një ekip i vogël inxhinierësh që kujdeset thellësisht për cilësinë dhe produktet që ndërtojmë."}
            </p>
          </div>

          <div className="story">
            <div>
              <p>
                {lang === "en"
                  ? "We're a small team of engineers and designers who care deeply about the craft of software. We've spent years building products across industries — from HR platforms to logistics apps — and we've learned what separates good software from great software: attention to detail, honest communication, and a genuine obsession with quality."
                  : "Jemi një ekip i vogël inxhinierësh dhe dizajnerësh që kujdesemi thellësisht për mjeshtërinë e softuerit. Kemi kaluar vite duke ndërtuar produkte në industri të ndryshme — nga platforma HR te aplikacione logjistike — dhe kemi mësuar se çfarë e dallon softuerin e mirë nga ai i shkëlqyer: vëmendja ndaj detajit, komunikimi i ndershëm dhe një obsesion i vërtetë për cilësinë."}
              </p>
              <p>
                {lang === "en"
                  ? "We work with startups and established companies alike. Whether you need to launch fast or rebuild something the right way, we approach every project with the same rigor and care."
                  : "Punojmë me startup dhe me kompani të konsoliduara. Qoftë për të lansuar shpejt apo për të rindërtuar diçka siç duhet, çdo projekt e trajtojmë me të njëjtën rigorozitet dhe kujdes."}
              </p>
            </div>
            <div className="story-deco">
              {["React", "Next.js", "Vue", "Flutter", "Node", "Python", "Postgres", "Docker", "Firebase"].map((t) => (
                <div key={t} className="deco-tech">{t}</div>
              ))}
            </div>
          </div>

          <div className="values-grid">
            {VALUES.map((v, i) => (
              <div key={i} className="value-card reveal">
                <div className="svc-icon"><ValueIcon index={i} /></div>
                <h4>{v.t[lang as Lang]}</h4>
                <p>{v.d[lang as Lang]}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 96 }}>
            <div className="center">
              <div className="section-label">{lang === "en" ? "THE TEAM" : "EKIPI"}</div>
              <h2 className="section-head">{lang === "en" ? "The team" : "Ekipi"}</h2>
            </div>
            <div className="team-grid">
              {TEAM.map((m) => (
                <div key={m.init} className="team-card reveal">
                  <div className="avatar">{m.init}</div>
                  <h4>{m.name}</h4>
                  <div className="role">{m.role[lang as Lang]}</div>
                  <p className="bio">{m.bio[lang as Lang]}</p>
                  <div className="team-social">
                    <a href="#" aria-label="GitHub"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.82.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg></a>
                    <a href="#" aria-label="LinkedIn"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h4v4H4zM4 10h4v10H4zM10 10h4v1.6c.6-1 1.9-1.9 3.6-1.9 3.4 0 4.4 2 4.4 5.1V20h-4v-4.6c0-1.4-.5-2.4-1.9-2.4-1.3 0-2.1.9-2.1 2.3V20h-4z"/></svg></a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ValueIcon({ index }: { index: number }) {
  const icons = [
    <svg key={0} width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 L4 14 H11 L10 22 L20 10 H13 Z"/></svg>,
    <svg key={1} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>,
    <svg key={2} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 5 H20 V17 H13 L8 21 V17 H4 Z"/></svg>,
    <svg key={3} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 12 a3 3 0 1 1 4 3 c-2 1 -3 -3 -1 -4 a3 3 0 1 1 4 -2"/><path d="M17 12 a3 3 0 1 0 -4 -3"/></svg>,
  ];
  return <>{icons[index]}</>;
}
