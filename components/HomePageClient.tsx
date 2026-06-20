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
              ? "Professional web design, mobile apps, and custom software for businesses in Albania and Kosovo. Fast delivery, full ownership."
              : "Web design profesional, aplikacione mobile dhe software me porosi për biznese në Shqipëri dhe Kosovë. Dorëzim i shpejtë, pronësi e plotë."}
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

      {/* TESTIMONIALS */}
      <section className="block" id="testimonials">
        <div className="container">
          <div className="center reveal">
            <div className="section-label">{lang === "en" ? "REVIEWS" : "VLERËSIMET"}</div>
            <h2 className="section-head">
              {lang === "en" ? <>What our <span className="gradient-text">clients say</span></> : <>Çfarë thonë <span className="gradient-text">klientët tanë</span></>}
            </h2>
            <p className="section-sub">5.0 ★★★★★ Google</p>
          </div>
          <div className="testimonials-grid">
            {[
              {
                name: "Kristiana Celaj",
                text: { en: "I am very satisfied with the service. With the availability, it has been a pleasure to make changes and after we finished, everything was delivered to us on time.", sq: "Jam shumë e kënaqur me shërbimin. Me disponibilitetin, sa herë më është dashur të bëj ndryshime dhe mbasi kemi përfunduar me çdo gjë më janë përgjigjur në kohë rekord." },
              },
              {
                name: "Erisa Kopaci",
                text: { en: "I had a great experience working with ALAR Dev. The team is professional, talented, and very supportive. They create a positive working environment, value teamwork, and always focus on delivering high-quality solutions. It was a pleasure collaborating with ALAR Dev, and I highly recommend them for their dedication and expertise.", sq: "Pata një përvojë të shkëlqyer duke punuar me ALAR Dev. Ekipi është profesional, i talentuar dhe shumë mbështetës." },
              },
              {
                name: "Arsi Kurti",
                text: { en: "Excellent service", sq: "Shërbim i shkëlqyer" },
              },
            ].map((t, i) => (
              <div key={i} className="testimonial-card reveal">
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-text">"{t.text[lang as "en" | "sq"]}"</p>
                <div className="testimonial-author">— {t.name}</div>
              </div>
            ))}
          </div>
          <div className="center" style={{ marginTop: 32 }}>
            <a href="https://www.google.com/search?q=alar+dev+review#lrd=0x135031774eb30fa9:0x1f4c8aaac5d0f7ef,1,,,," target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              {lang === "en" ? "See all reviews on Google →" : "Shiko të gjitha vlerësimet në Google →"}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="block" id="faq">
        <div className="container">
          <div className="center reveal">
            <div className="section-label">FAQ</div>
            <h2 className="section-head">
              {lang === "en" ? <>Frequently asked <span className="gradient-text">questions</span></> : <>Pyetje të <span className="gradient-text">shpeshta</span></>}
            </h2>
          </div>
          <div className="faq-list reveal">
            {(lang === "en" ? [
              { q: "How much does it cost to create a website in Albania?", a: "Prices depend on the scope — a landing page starts from €150, a full business website with admin panel from €250, and an e-commerce store from €500. Custom software and apps are quoted individually. Contact us for a free estimate." },
              { q: "How long does it take to build a professional website?", a: "Most websites launch within 7–14 days. Simple landing pages can be ready in 7 days. E-commerce stores and custom platforms take 3–6 weeks depending on complexity." },
              { q: "Which is the best web development company in Albania?", a: "ALAR DEV is a top-rated software studio in Tirana with 7+ years of experience, 50+ completed projects, and a 5.0 Google rating. We specialize in websites, mobile apps, and custom software for Albanian and international businesses." },
              { q: "Can you create an online store for my business in Albania?", a: "Yes. We build complete e-commerce stores with product catalog, shopping cart, secure payment integration (card, bank transfer), and order management — fully optimized for the Albanian and Balkan market." },
              { q: "Will my website rank on Google (SEO)?", a: "Every website we build is SEO-optimized from day one — fast loading, mobile-friendly, structured data, sitemap, and Google Search Console setup included as standard. We also offer ongoing SEO services." },
              { q: "Do I fully own my website after you build it?", a: "Yes — 100%. You own the source code, domain, hosting, and all data. No monthly platform fees, no lock-in. You can take it to any developer in the future." },
              { q: "Do you build mobile apps for iOS and Android?", a: "Yes. We develop mobile apps for both iOS and Android using Flutter — one codebase, two platforms, and native performance. This reduces cost and time to market significantly." },
            ] : [
              { q: "Sa kushton krijimi i një website profesional në Shqipëri?", a: "Çmimet varen nga kompleksiteti — një faqe prezantuese fillon nga 150€, një website biznesi me panel administrimi nga 250€, dhe dyqani online nga 500€. Software dhe aplikacione me porosi ofertë individualisht. Na kontaktoni për vlerësim falas." },
              { q: "Sa kohë duhet për të krijuar një website?", a: "Shumica e website-ve lansohen brenda 7–14 ditëve. Faqet prezantuese mund të dorëzohen brenda 7 ditëve. Dyqanet online dhe platformat me porosi marrin 3–6 javë." },
              { q: "Cila është kompania më e mirë e zhvillimit web në Shqipëri?", a: "ALAR DEV është studio software me vlerësim të lartë në Tiranë — 7+ vjet përvojë, 50+ projekte të realizuara dhe vlerësim 5.0 në Google. Specializohemi në website, aplikacione mobile dhe software me porosi." },
              { q: "A mund të krijoni dyqan online për biznesin tim në Shqipëri?", a: "Po. Ndërtojmë dyqane online të plota me katalog produktesh, shportë blerjesh, integrim pagesash të sigurta dhe menaxhim porosish — të optimizuara për tregun shqiptar dhe ballkanik." },
              { q: "A do të del website-i im i parë në Google (SEO)?", a: "Çdo website që ndërtojmë vjen i optimizuar për SEO — ngarkim i shpejtë, mobile-friendly, të dhëna të strukturuara, sitemap dhe Google Search Console si standard. Ofrojmë gjithashtu shërbime SEO afatgjata." },
              { q: "A do të jem pronar i plotë i website-it tim?", a: "Po — 100%. Ju zotëroni kodin burimor, domenin, hostingun dhe të gjitha të dhënat. Pa tarifa mujore, pa kufizime. Mund ta çoni te çdo zhvillues tjetër në të ardhmen." },
              { q: "A krijoni aplikacione mobile për iOS dhe Android?", a: "Po. Zhvillojmë aplikacione mobile për iOS dhe Android me Flutter — një bazë kodi, dy platforma dhe performancë native. Kjo zvogëlon ndjeshëm koston dhe kohën e zhvillimit." },
            ]).map((item, i) => (
              <details key={i} className="faq-item">
                <summary className="faq-q">{item.q}</summary>
                <p className="faq-a">{item.a}</p>
              </details>
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

    </>
  );
}
