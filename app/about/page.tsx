"use client";
import Link from "next/link";
import RevealObserver from "@/components/RevealObserver";
import { useLang } from "@/lib/i18n";
import type { Lang } from "@/lib/data";

const WHY = [
  {
    icon: "⚡",
    t: { en: "Fast delivery", sq: "Dorëzim i shpejtë" },
    d: { en: "We move quickly without cutting corners. Most projects launch in 2–4 weeks.", sq: "Lëvizim shpejt pa anashkaluar cilësinë. Shumica e projekteve lansohen në 2–4 javë." },
  },
  {
    icon: "◎",
    t: { en: "Local & reliable", sq: "Lokal & i besueshëm" },
    d: { en: "Based in Albania, working with Albanian businesses every day. We understand your market.", sq: "Me bazë në Shqipëri, punojmë me biznese shqiptare çdo ditë. E njohim tregun tuaj." },
  },
  {
    icon: "▣",
    t: { en: "Full ownership", sq: "Pronësi e plotë" },
    d: { en: "You own everything — code, domain, hosting. No lock-in, no surprises.", sq: "Ju zotëroni gjithçka — kodin, domenin, hostingun. Pa kufizime, pa surpriza." },
  },
  {
    icon: "◈",
    t: { en: "Real results", sq: "Rezultate reale" },
    d: { en: "50+ completed projects. Our clients come back because the work speaks for itself.", sq: "50+ projekte të realizuara. Klientët kthehen sepse puna flet vetë." },
  },
  {
    icon: "◐",
    t: { en: "Transparent pricing", sq: "Çmime transparente" },
    d: { en: "No hidden fees. You know what you pay from day one.", sq: "Pa tarifa të fshehura. Dini çfarë paguani nga dita e parë." },
  },
  {
    icon: "◑",
    t: { en: "After-launch support", sq: "Mbështetje pas lansimit" },
    d: { en: "We stick around after go-live. Updates, fixes, and growth — we're your long-term partner.", sq: "Mbetemi pas lansimit. Përditësime, rregullime dhe rritje — jemi partneri juaj afatgjatë." },
  },
];

const STACK_LOGOS = [
  {
    name: "React",
    svg: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="2.05" fill="#61DAFB"/><ellipse cx="12" cy="12" rx="10" ry="3.9" stroke="#61DAFB" strokeWidth="1.1" fill="none"/><ellipse cx="12" cy="12" rx="10" ry="3.9" stroke="#61DAFB" strokeWidth="1.1" fill="none" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="3.9" stroke="#61DAFB" strokeWidth="1.1" fill="none" transform="rotate(120 12 12)"/></svg>,
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    svg: <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.5 14.5L8 9v7H6.5V7h1.75l8 9.5H14v-5.5l1.5 1.75V16.5h1z"/></svg>,
    color: "#fff",
  },
  {
    name: "Flutter",
    svg: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14.314 0L2.3 12 6 15.7 21.684 0h-7.37zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z" fill="#54C5F8"/><path d="M7.857 17.53l3.43-3.43 3.437 3.43-3.438 3.44-3.43-3.44z" fill="#01579B"/></svg>,
    color: "#54C5F8",
  },
  {
    name: "Node.js",
    svg: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76L4.69 16.6c-.08-.04-.13-.12-.13-.21V7.71c0-.09.04-.17.13-.21l7.44-4.29c.07-.04.16-.04.24 0l7.44 4.29c.08.04.13.12.13.21v8.68c0 .09-.05.17-.13.21l-7.44 4.29c-.08.04-.17.04-.24 0l-1.93-1.14c-.06-.03-.14-.05-.2-.02-.54.3-.64.34-1.15.51-.13.04-.31.11.07.32l2.53 1.5c.23.13.5.2.78.2.27 0 .54-.07.78-.2l7.44-4.3c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36L12.78 2.05c-.23-.13-.5-.2-.78-.2z" fill="#339933"/></svg>,
    color: "#339933",
  },
  {
    name: "TypeScript",
    svg: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="3" fill="#3178C6"/><path d="M13.15 14.47v1.38c.22.11.49.2.8.25.31.06.64.09.99.09.34 0 .67-.04.97-.11.3-.07.57-.19.79-.35.22-.16.4-.37.53-.63.13-.25.19-.56.19-.91 0-.26-.04-.49-.11-.69a1.6 1.6 0 0 0-.33-.53 2.4 2.4 0 0 0-.54-.41c-.21-.12-.46-.23-.73-.33-.2-.07-.37-.14-.52-.2a2 2 0 0 1-.37-.2.85.85 0 0 1-.22-.24.57.57 0 0 1-.08-.3c0-.1.02-.2.07-.28.05-.08.12-.15.21-.2.09-.05.2-.1.32-.12.13-.03.27-.04.42-.04.11 0 .22.01.35.03.12.02.24.05.36.09.12.04.23.09.33.15.1.06.19.12.26.19v-1.3a3.5 3.5 0 0 0-.67-.18 4.8 4.8 0 0 0-.84-.07c-.33 0-.65.04-.95.12-.3.08-.57.2-.79.37-.23.16-.41.37-.54.61-.13.25-.19.54-.19.87 0 .43.12.8.37 1.09.25.29.63.54 1.13.74.21.08.4.15.56.22.17.07.31.14.42.21.11.07.2.15.26.24.06.09.09.19.09.3 0 .1-.02.2-.07.28-.05.09-.12.16-.21.22-.09.06-.2.11-.33.14-.13.04-.28.05-.44.05-.29 0-.57-.05-.85-.16a2.6 2.6 0 0 1-.75-.46zm-2.41-3.54H13V9.75H8v1.18h1.93V17H10.74v-6.07z" fill="white"/></svg>,
    color: "#3178C6",
  },
  {
    name: "PostgreSQL",
    svg: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.13 12.48c-.13-.06-.28-.1-.44-.12.27-.28.46-.65.46-1.07 0-.82-.66-1.48-1.48-1.48-.47 0-.89.21-1.18.55A3.47 3.47 0 0 0 12 9.5a3.47 3.47 0 0 0-2.49 1.06 1.48 1.48 0 0 0-1.18-.55c-.82 0-1.48.66-1.48 1.48 0 .42.19.79.46 1.07-.16.02-.31.06-.44.12C6.33 12.8 6 13.4 6 14.08v.09c0 1.12.81 2.04 1.87 2.22l.54 2.74c.07.35.37.59.72.59h5.74c.35 0 .65-.24.72-.59l.54-2.74C17.19 16.21 18 15.29 18 14.17v-.09c0-.68-.33-1.28-.87-1.6zM12 10.5c.95 0 1.73.7 1.84 1.61h-3.68c.11-.91.89-1.61 1.84-1.61z" fill="#336791"/></svg>,
    color: "#336791",
  },
  {
    name: "Tailwind",
    svg: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6C9.6 6 8.1 7.2 7.5 9.6c.9-1.2 1.95-1.65 3.15-1.35.685.171 1.174.668 1.716 1.219C13.313 10.48 14.388 11.6 16.5 11.6c2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.95 1.65-3.15 1.35-.685-.171-1.174-.668-1.716-1.219C15.187 7.12 14.112 6 12 6zM7.5 11.6C5.1 11.6 3.6 12.8 3 15.2c.9-1.2 1.95-1.65 3.15-1.35.685.171 1.174.668 1.716 1.219C8.813 16.08 9.887 17.2 12 17.2c2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.95 1.65-3.15 1.35-.685-.171-1.174-.668-1.716-1.219C10.687 12.72 9.613 11.6 7.5 11.6z" fill="#06B6D4"/></svg>,
    color: "#06B6D4",
  },
  {
    name: "Docker",
    svg: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.98 11.08h1.9v-1.93h-1.9v1.93zm-2.58 0h1.9v-1.93h-1.9v1.93zm-2.59 0h1.9v-1.93h-1.9v1.93zm-2.58 0h1.9v-1.93H6.23v1.93zm5.17-2.52h1.9V6.63h-1.9v1.93zm-2.58 0h1.9V6.63h-1.9v1.93zm2.58-2.52h1.9V4.11h-1.9v1.93zM22.18 11c-.3-.19-.96-.26-1.48-.16-.07-.52-.36-.97-.86-1.34l-.29-.19-.19.28c-.24.37-.31.99-.06 1.4-.11.06-.33.15-.62.14-.9-.02-1.18-.59-1.26-.77A5.3 5.3 0 0 0 14 9.08H2.04a.24.24 0 0 0-.24.24c-.03 1.32.33 2.62 1.01 3.69.78 1.2 1.93 2.08 3.42 2.41 1.59.36 4.14.27 5.69-1.66.76.01 1.49-.23 2.03-.91h.2c.36 0 1.44-.08 2.09-1.23.03-.05.13-.26.13-.26l-.22-.14zM2.89 12.1H1.9v-.95h.99v.95zm1.3 0H3.2v-.95h.99v.95zm1.3 0H4.5v-.95h.99v.95zm1.3 0H5.8v-.95h.99v.95z" fill="#2496ED"/></svg>,
    color: "#2496ED",
  },
  {
    name: "Firebase",
    svg: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5.786 10.692L7.844 1.35a.552.552 0 0 1 1.029-.098l2.158 4.154-5.245 5.286zm13.077 4.122l-1.344-8.085a.552.552 0 0 0-.986-.208L6 18l7.065 3.966a1.5 1.5 0 0 0 1.47 0l4.328-2.428v-.724z" fill="#FFCA28"/><path d="M16.178 8.154L14.065 2.7a.553.553 0 0 0-1.027.025L5.786 10.692l7.262 4.082 3.13-6.62z" fill="#FFA000"/><path d="M5.786 10.692l-2.08 7.485a.55.55 0 0 0 .274.63l8.794 4.96L5.786 10.69z" fill="#F57F17"/></svg>,
    color: "#FFCA28",
  },
  {
    name: "Stripe",
    svg: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z" fill="#635BFF"/></svg>,
    color: "#635BFF",
  },
  {
    name: "Vue",
    svg: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 1.61h-9.94L12 5.16 9.94 1.61H0l12 20.78zM12 14.08L5.16 2.23H9.59L12 6.41l2.41-4.18h4.43z" fill="#42B883"/><path d="M12 14.08L5.16 2.23H9.59L12 6.41l2.41-4.18h4.43z" fill="#35495E"/></svg>,
    color: "#42B883",
  },
  {
    name: "Prisma",
    svg: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M1.927 16.706a.9.9 0 0 0 .517.808L11.8 22.047a.9.9 0 0 0 .73-.008l9.087-4.17a.9.9 0 0 0 .505-.8V6.975a.9.9 0 0 0-.505-.8L12.53 1.95a.9.9 0 0 0-.73.008L2.444 6.127a.9.9 0 0 0-.517.808v9.771z" fill="#2D3748"/><path d="M12 2.5L3 7v10l9 4.5 9-4.5V7L12 2.5zm0 17.54L4.5 16.2V7.8L12 4.46l7.5 3.34v8.4L12 20.04z" fill="#5A67D8"/></svg>,
    color: "#5A67D8",
  },
];

export default function AboutPage() {
  const { lang } = useLang();
  return (
    <>
      <RevealObserver />

      {/* Page Hero */}
      <div className="page-hero">
        <div className="page-hero-dots" />
        <div className="page-hero-glow" style={{ "--hero-glow-color": "rgba(249,115,22,0.13)" } as React.CSSProperties} />
        <div className="container page-hero-content reveal">
          <div className="section-label">{lang === "en" ? "WHO WE ARE" : "KUSH JEMI NE"}</div>
          <h1 className="page-hero-title">
            {lang === "en"
              ? <>We build digital<br /><span className="gradient-text">products that last.</span></>
              : <>Ndërtojmë produkte<br /><span className="gradient-text">digjitale që zgjatin.</span></>}
          </h1>
          <p className="page-hero-sub">
            {lang === "en"
              ? "A software studio from Albania, building digital products for businesses that want to stand out."
              : "Një studio software nga Shqipëria, duke ndërtuar produkte digjitale për biznese që duan të dallohen."}
          </p>
        </div>
      </div>

      <div className="pt-header" style={{ paddingTop: 0 }}>
        <div className="container">

          {/* Manifesto block */}
          <div className="manifesto reveal">
            <div className="manifesto-line" />
            <div className="manifesto-body">
              <p>
                {lang === "en"
                  ? "At ALAR DEV, we combine the latest technology with creative solutions to build digital products that stand out. Our focus is on quality, efficiency, and measurable results."
                  : "Në ALAR DEV, kombinojmë teknologjinë më të fundit me zgjidhje kreative për të ndërtuar produkte digjitale që dallohen. Fokusi ynë është cilësia, efikasiteti dhe rezultatet e matshme."}
              </p>
              <p>
                {lang === "en"
                  ? "Every project we take on is treated with complete dedication and professionalism — ensuring sustainable, scalable solutions that serve your business for years to come."
                  : "Çdo projekt që marrim përsipër trajtohet me përkushtim dhe profesionalizëm të plotë — duke garantuar zgjidhje të qëndrueshme dhe të shkallëzueshme që i shërbejnë biznesit tuaj për vite."}
              </p>
            </div>
          </div>

          {/* Stack logos */}
          <div className="stack-section reveal">
            <div className="section-label" style={{ marginBottom: 40, textAlign: "center" }}>{lang === "en" ? "OUR STACK" : "TEKNOLOGJITË"}</div>
            <div className="stack-logos-grid">
              {STACK_LOGOS.map((s) => (
                <div key={s.name} className="stack-logo-card">
                  <div className="stack-logo-icon">{s.svg}</div>
                  <span className="stack-logo-name" style={{ color: s.color }}>{s.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Why Work With Us — editorial layout matching homepage */}
          <div className="why-section" style={{ padding: "80px 0 40px" }}>
            <div className="why-editorial reveal">
              <div className="why-editorial-left">
                <div className="section-label">{lang === "en" ? "WHY US" : "PSE NE"}</div>
                <h2 className="section-head" style={{ textAlign: "left", marginTop: 16 }}>
                  {lang === "en" ? <>Why work with <span className="gradient-text">ALAR DEV</span></> : <>Pse të punoni me <span className="gradient-text">ALAR DEV</span></>}
                </h2>
                <div className="why-para-block">
                  {lang === "en" ? (
                    <>
                      <p>We've spent years building digital products for Albanian businesses — and we know what actually works. We move fast, we communicate clearly, and we treat every project like our own.</p>
                      <p>Most sites launch in 7–14 days. You own everything: the code, the domain, the hosting. No lock-in, no hidden fees, no surprises. And when we're done, we don't disappear — we stay as your long-term tech partner.</p>
                      <p>50+ projects delivered. Our clients come back because the work speaks for itself.</p>
                    </>
                  ) : (
                    <>
                      <p>Kemi kaluar vite duke ndërtuar produkte digjitale për biznese shqiptare — dhe e dimë çfarë funksionon. Lëvizim shpejt, komunikojmë qartë dhe trajtojmë çdo projekt si të ytin.</p>
                      <p>Shumica e faqeve lansohen në 7–14 ditë. Ju zotëroni gjithçka: kodin, domenin, hostingun. Pa kufizime, pa tarifa të fshehura, pa surpriza. Dhe kur mbarojmë, nuk zhdukem — mbetemi partneri juaj afatgjatë.</p>
                      <p>50+ projekte të dorëzuara. Klientët kthehen sepse puna flet vetë.</p>
                    </>
                  )}
                </div>
                <Link href="/contact" className="btn btn-primary" style={{ marginTop: 40, alignSelf: "flex-start" }}>
                  {lang === "en" ? "Start your project →" : "Fillo projektin →"}
                </Link>
              </div>
              <div className="why-editorial-right">
                <div className="why-photo-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=900&auto=format&fit=crop"
                    alt="ALAR DEV workspace"
                    className="why-photo"
                  />
                  <div className="why-photo-badge">
                    <div className="why-badge-num">50+</div>
                    <div className="why-badge-lbl">{lang === "en" ? "Projects delivered" : "Projekte të realizuara"}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
