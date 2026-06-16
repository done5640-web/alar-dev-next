"use client";
import Link from "next/link";
import Image from "next/image";
import StatsCounter from "@/components/StatsCounter";
import Ticker from "@/components/Ticker";
import ProjectCarousel from "@/components/ProjectCarousel";
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

const PRICING = [
  {
    key: "landing",
    price: "€150",
    t: { en: "Landing Page", sq: "Faqe Prezantuese" },
    d: { en: "Perfect for new businesses or product launches. Fast, beautiful, and conversion-focused.", sq: "Ideal për biznese të reja ose lansime produkti. E shpejtë, e bukur dhe e fokusuar në konversion." },
    incl: { en: ["1-page responsive design", "Contact form", "SEO basics", "Delivered in 7 days"], sq: ["Dizajn 1-faqësh responsive", "Formë kontakti", "SEO bazë", "Dorëzim në 7 ditë"] },
    cta: false,
    hot: false,
  },
  {
    key: "admin",
    price: "€250",
    t: { en: "Business + Admin", sq: "Biznes + Admin" },
    d: { en: "A full website with a dashboard to manage your content, listings, or bookings yourself.", sq: "Faqe e plotë me panel administrimi për të menaxhuar vetë përmbajtjen, listimet ose rezervimet." },
    incl: { en: ["Multi-page site", "Admin dashboard", "Content management", "SEO optimized", "Mobile ready"], sq: ["Faqe shumë-faqësh", "Panel administrimi", "Menaxhim përmbajtjeje", "SEO e optimizuar", "Gati për mobile"] },
    cta: false,
    hot: true,
  },
  {
    key: "ecom",
    price: "€500",
    t: { en: "E-commerce / CRM", sq: "E-commerce / CRM" },
    d: { en: "Full online store or customer management system with payments, orders, and automation.", sq: "Dyqan online i plotë ose sistem menaxhimi klientësh me pagesa, porosi dhe automatizim." },
    incl: { en: ["Product catalog", "Payment integration", "Order management", "Customer accounts", "Analytics"], sq: ["Katalog produktesh", "Integrim pagesash", "Menaxhim porosish", "Llogari klientësh", "Analitikë"] },
    cta: false,
    hot: false,
  },
  {
    key: "custom",
    price: null,
    t: { en: "Custom Build", sq: "Ndërtim i Personalizuar" },
    d: { en: "Complex platform, SaaS, mobile app, or anything that doesn't fit a template. Let's talk.", sq: "Platformë komplekse, SaaS, aplikacion mobile ose çdo gjë që nuk përshtatet në një shabllon. Le të flasim." },
    incl: { en: ["Requirements workshop", "Custom architecture", "Dedicated team", "Long-term support"], sq: ["Workshop kërkesash", "Arkitekturë e personalizuar", "Ekip i dedikuar", "Mbështetje afatgjatë"] },
    cta: true,
    hot: false,
  },
];

export default function HomePageClient() {
  const { lang } = useLang();

  return (
    <>
      <RevealObserver />

      {/* HERO */}
      <section id="hero">
        <div className="hero-glow" />
        <div className="float-pill fp1">React · Next.js</div>
        <div className="float-pill fp2">Flutter · Dart</div>
        <div className="float-pill fp3">Node.js · Docker</div>
        <div className="float-pill fp4">PostgreSQL</div>
        <div className="hero-inner">
          <div className="section-label">✦ ALAR DEV · SOFTWARE STUDIO</div>
          <h1 className="hero-headline">
            {lang === "en" ? (
              <>Website creation &amp;<br /><span className="gradient-text">software development</span> in Albania.</>
            ) : (
              <>Krijim website &amp;<br /><span className="gradient-text">zhvillim software</span> në Shqipëri.</>
            )}
          </h1>
          <p className="hero-sub">
            {lang === "en"
              ? "Professional web design, mobile apps, and custom software for businesses in Albania and Kosovo. Fast delivery, full ownership, from €150."
              : "Web design profesional, aplikacione mobile dhe software me porosi për biznese në Shqipëri dhe Kosovë. Dorëzim i shpejtë, pronësi e plotë, nga 150€."}
          </p>
          <div className="hero-ctas">
            <Link href="/contact" className="btn btn-primary btn-lg">
              {lang === "en" ? "Start Your Project →" : "Fillo Projektin →"}
            </Link>
            <Link href="/projects" className="btn btn-ghost btn-lg">
              {lang === "en" ? "See Our Work" : "Shiko Punën Tonë"}
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <StatsCounter />

      {/* TICKER */}
      <Ticker />

      {/* FEATURED PROJECTS CAROUSEL */}
      <section id="featured-projects" className="block">
        <div className="container">
          <div className="center reveal">
            <div className="section-label">{lang === "en" ? "OUR WORK" : "PUNËT TONA"}</div>
            <h2 className="section-head">
              {lang === "en" ? <>Selected <span className="gradient-text">Projects</span></> : <>Projekte <span className="gradient-text">të Zgjedhura</span></>}
            </h2>
            <p className="section-sub">
              {lang === "en"
                ? "Real businesses, real results."
                : "Biznese reale, rezultate reale."}
            </p>
          </div>
        </div>
        <ProjectCarousel />
        <div className="container">
          <div className="center" style={{ marginTop: 48 }}>
            <Link href="/projects" className="btn btn-ghost">
              {lang === "en" ? "View all projects →" : "Shiko të gjitha projektet →"}
            </Link>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="block" id="pricing">
        <div className="container">
          <div className="center reveal">
            <div className="section-label">{lang === "en" ? "PRICING" : "ÇMIMET"}</div>
            <h2 className="section-head">
              {lang === "en" ? <>Simple, <span className="gradient-text">transparent</span> pricing</> : <>Çmime të <span className="gradient-text">thjeshta</span> dhe transparente</>}
            </h2>
            <p className="section-sub">
              {lang === "en"
                ? "No surprises. Pick the plan that fits your project."
                : "Pa surpriza. Zgjidhni paketën që i përshtatet projektit tuaj."}
            </p>
          </div>
          <div className="pricing-grid">
            {PRICING.map((plan) => (
              <div key={plan.key} className={`pricing-card reveal${plan.hot ? " pricing-hot" : ""}`}>
                {plan.hot && <div className="pricing-badge">{lang === "en" ? "Most Popular" : "Më i Popullarizuar"}</div>}
                <div className="pricing-top">
                  <div className="pricing-name">{plan.t[lang as Lang]}</div>
                  {plan.price
                    ? <div className="pricing-price">{plan.price}</div>
                    : <div className="pricing-price pricing-custom">{lang === "en" ? "Let's talk" : "Le të flasim"}</div>
                  }
                  <p className="pricing-desc">{plan.d[lang as Lang]}</p>
                </div>
                <ul className="pricing-incl">
                  {plan.incl[lang as Lang].map((item) => (
                    <li key={item}>
                      <span className="pricing-check">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`btn ${plan.hot ? "btn-primary" : "btn-ghost"} pricing-btn`}>
                  {plan.cta
                    ? (lang === "en" ? "Get a custom quote →" : "Merr ofertë →")
                    : (lang === "en" ? "Get started →" : "Fillo →")}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US — editorial paragraph layout */}
      <section className="block why-section">
        <div className="container">
          <div className="why-editorial reveal">
            <div className="why-editorial-left">
              <div className="section-label">{lang === "en" ? "WHY US" : "PSE NE"}</div>
              <h2 className="section-head" style={{ textAlign: "left", marginTop: 16 }}>
                {lang === "en" ? <>Why choose <span className="gradient-text">ALAR DEV</span></> : <>Pse zgjidhni <span className="gradient-text">ALAR DEV</span></>}
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
                <Image
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=900&auto=format&fit=crop"
                  alt="ALAR DEV workspace"
                  className="why-photo"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="block services-overview-section">
        <div className="container">
          <div className="center reveal">
            <div className="section-label">{lang === "en" ? "WHAT WE BUILD" : "ÇFARË NDËRTOJMË"}</div>
            <h2 className="section-head">
              {lang === "en"
                ? <><span className="gradient-text">Web design</span> &amp; software development in Albania</>
                : <>Web design &amp; zhvillim software <span className="gradient-text">në Shqipëri</span></>}
            </h2>
            <p className="section-sub">
              {lang === "en"
                ? "From simple landing pages to full enterprise platforms — we cover every layer of your digital presence."
                : "Nga faqe prezantuese të thjeshta deri te platforma të plota — mbulojmë çdo shtresë të pranisë suaj digjitale."}
            </p>
          </div>
          <div className="services-ov-grid">
            {lang === "en" ? (
              <>
                <div className="services-ov-card reveal">
                  <div className="services-ov-icon">◈</div>
                  <h3>Website Creation &amp; Web Design</h3>
                  <p>Fast, modern, SEO-optimized websites from €150 — mobile-first, responsive, built to convert visitors into customers.</p>
                </div>
                <div className="services-ov-card reveal">
                  <div className="services-ov-icon">◉</div>
                  <h3>E-commerce &amp; Online Stores</h3>
                  <p>Full-featured online stores with product catalogs, shopping carts, and secure payment integration for any business type.</p>
                </div>
                <div className="services-ov-card reveal">
                  <div className="services-ov-icon">◐</div>
                  <h3>Mobile App Development</h3>
                  <p>iOS and Android apps built with Flutter — one codebase, two platforms, native performance.</p>
                </div>
                <div className="services-ov-card reveal">
                  <div className="services-ov-icon">▣</div>
                  <h3>Custom Software &amp; Web Apps</h3>
                  <p>Admin dashboards, CRM systems, SaaS platforms — built from scratch with full ownership and no lock-in.</p>
                </div>
                <div className="services-ov-card reveal">
                  <div className="services-ov-icon">◑</div>
                  <h3>Every Industry, Every Scale</h3>
                  <p>Restaurants, hotels, construction, healthcare, real estate — if your business needs an online presence, we know how to make it work.</p>
                </div>
                <div className="services-ov-card reveal">
                  <div className="services-ov-icon">⚡</div>
                  <h3>SEO &amp; Digital Presence</h3>
                  <p>Every site ships SEO-ready — fast loading, structured data, Google Search Console, sitemap, and technical SEO included as standard.</p>
                </div>
              </>
            ) : (
              <>
                <div className="services-ov-card reveal">
                  <div className="services-ov-icon">◈</div>
                  <h3>Krijim Website &amp; Web Design</h3>
                  <p>Website moderne, të shpejtë dhe SEO-optimizuara nga 150€ — mobile-first, responsive, ndërtuar për të kthyer vizitorët në klientë.</p>
                </div>
                <div className="services-ov-card reveal">
                  <div className="services-ov-icon">◉</div>
                  <h3>Dyqan Online &amp; E-commerce</h3>
                  <p>Dyqane online të plota me katalog produktesh, shportë blerjesh dhe integrim pagesash të sigurta për çdo lloj biznesi.</p>
                </div>
                <div className="services-ov-card reveal">
                  <div className="services-ov-icon">◐</div>
                  <h3>Zhvillim Aplikacione Mobile</h3>
                  <p>Aplikacione iOS dhe Android me Flutter — një bazë kodi, dy platforma, performancë native.</p>
                </div>
                <div className="services-ov-card reveal">
                  <div className="services-ov-icon">▣</div>
                  <h3>Software me Porosi &amp; Web Apps</h3>
                  <p>Panel administrimi, sisteme CRM, platforma SaaS — ndërtuar nga zero me pronësi të plotë dhe pa kufizime.</p>
                </div>
                <div className="services-ov-card reveal">
                  <div className="services-ov-icon">◑</div>
                  <h3>Çdo Industri, Çdo Shkallë</h3>
                  <p>Restorante, hotele, ndërtim, shëndetësi, pasuri të paluajtshme — nëse biznesi juaj ka nevojë për prani online, ne e dimë si ta bëjmë të funksionojë.</p>
                </div>
                <div className="services-ov-card reveal">
                  <div className="services-ov-icon">⚡</div>
                  <h3>SEO &amp; Prani Dixhitale</h3>
                  <p>Çdo faqe lansohet gati për SEO — ngarkim i shpejtë, të dhëna të strukturuara, Google Search Console dhe SEO teknik si standard.</p>
                </div>
              </>
            )}
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

    </>
  );
}
