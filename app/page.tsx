import type { Metadata } from "next";
import HomePageClient from "@/components/HomePageClient";

export const metadata: Metadata = {
  title: "Krijim Website & Faqe Interneti | Web Design Albania — ALAR DEV",
  description:
    "Krijim website dhe faqe interneti profesionale në Shqipëri. Web design, dyqan online, aplikacione mobile nga €150. Professional website creation & web design in Albania — e-commerce, mobile apps, custom software. Tirana. Na kontaktoni!",
  keywords: [
    // Albanian primary
    "krijim website", "krijim faqe web", "krijim faqe interneti", "dizajn website shqiperi",
    "dizajn faqe web", "dizajn faqe interneti", "kompani software shqiperi", "kompani software tirane",
    "studio software shqiperi", "studio digjitale shqiperi", "zhvillim faqe web", "zhvillim aplikacione",
    "zhvillim aplikacione mobile", "zhvillim software", "programim web", "programim faqe interneti",
    "programues web tirane", "web developer shqiperi", "web developer tirane", "agjensi digjitale shqiperi",
    "agjensi web shqiperi", "krijim dyqan online", "dyqan online shqiperi", "e-commerce shqiperi",
    "faqe shitje online", "krijim aplikacion mobile", "aplikacione android shqiperi", "aplikacione ios shqiperi",
    "sistem online", "sistem rezervimi online", "panel administrimi", "dashboard admin shqiperi",
    "CRM shqiperi", "SaaS shqiperi", "platforma SaaS shqiperi", "zhvillim platforma",
    "faqe interneti profesionale", "faqe interneti biznesi", "website me cmim te mire",
    "website lire shqiperi", "mirembajtje faqe web", "optimizim SEO shqiperi", "SEO shqiperi",
    "optimizim motoresh kerkimi shqiperi", "faqe interneti tirane", "website tirane",
    "website durres", "website shkoder", "website vlore", "website fier", "website elbasan",
    "website korce", "website berat", "website lushnje", "website kavaje", "website pogradec",
    "krijim website kosove", "web developer kosove", "studio software kosove",
    "website prishtine", "kompani software kosove", "agjensi web kosove",
    "website gjakove", "website prizren", "website mitrovice",
    "transformim digjital shqiperi", "dixhitalizim biznesi shqiperi", "platforma digjitale",
    "aplikacion biznes shqiperi", "faqe restoranti shqiperi", "faqe hoteli shqiperi",
    "faqe pasuri te paluajtshme shqiperi", "faqe mjekesore shqiperi", "faqe bukurie shqiperi",
    "faqe makinash shqiperi", "faqe ndertimi shqiperi", "sisteme informacioni",
    "aplikacione web shqiperi", "platforma cloud", "sisteme menaxhimi", "CMS shqiperi",
    "menaxhim permbajtje shqiperi", "branding dixhital shqiperi", "identitet vizual shqiperi",
    "paketa web shqiperi", "oferta web shqiperi", "cmime website shqiperi",
    "sa kushton website shqiperi", "cmim krijim faqe web", "website 150 euro",
    "website startup shqiperi", "website biznes i ri", "prezantim online", "faqe prezantuese shqiperi",
    "landing page shqiperi", "alar dev", "alar development",
    // English Albania/Kosovo
    "web development albania", "website creation albania", "software company albania",
    "software development albania", "web design albania", "mobile app development albania",
    "custom software albania", "software studio albania", "web developer albania",
    "e-commerce development albania", "website design tirana", "web development tirana",
    "software company tirana", "tech company albania", "IT company albania",
    "digital agency albania", "affordable web development albania", "professional website albania",
    "business website albania", "landing page albania", "next.js developer albania",
    "react developer albania", "flutter developer albania", "full stack developer albania",
    "app development albania", "web application albania", "startup website albania",
    "small business website albania", "restaurant website albania", "hotel website albania",
    "real estate website albania", "online store albania", "booking system albania",
    "admin dashboard albania", "content management albania", "software development tirana",
    "web developer tirana", "albanian software company", "albanian web developers",
    "albanian tech company", "website for albanian business", "kosovo web developer",
    "kosovo software company", "balkans software company", "southeastern europe web development",
    "software company kosova", "web development kosova",
    // International English
    "affordable web development", "professional website design", "custom web development",
    "business website creation", "e-commerce website development", "mobile app development company",
    "react developer", "next.js developer", "flutter developer", "web application development",
    "SaaS development", "CRM development", "software development company", "software studio",
    "digital agency", "website for small business", "professional web design",
    "custom software development", "full stack development", "web developer for hire",
    "hire web developer", "website developer", "portfolio website", "business card website",
    "startup website development", "MVP development", "web app development",
    "progressive web app", "responsive web design", "SEO friendly website",
    "website maintenance", "website redesign", "ecommerce platform", "online shop development",
    "payment integration", "stripe integration", "booking system", "appointment scheduling",
    "customer management", "inventory management", "order management", "admin panel",
    "dashboard development", "API development", "REST API", "database design",
    "cloud deployment", "Vercel deployment", "docker deployment",
    "software consulting", "IT consulting", "digital transformation",
  ].join(", "),
  alternates: {
    canonical: "https://alardev.al",
  },
  openGraph: {
    title: "Krijim Website & Web Design Albania | ALAR DEV",
    description:
      "Studio profesionale për krijim website dhe web design në Shqipëri. Aplikacione mobile, e-commerce dhe software me porosi. Dorëzim i shpejtë, pronësi e plotë.",
    url: "https://alardev.al",
    siteName: "ALAR DEV",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://alardev.al/og-image.png",
        width: 1200,
        height: 630,
        alt: "ALAR DEV — Software Studio Albania",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ALAR DEV — Software Studio | Web Development Albania",
    description: "Albania's leading software studio. Websites, mobile apps & custom software from €150.",
    images: ["https://alardev.al/og-image.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does it cost to create a website in Albania?",
      acceptedAnswer: { "@type": "Answer", text: "At ALAR DEV, a landing page starts from €150, a business website with admin panel from €250, and an e-commerce store from €500. Custom software and mobile apps are quoted individually. Contact ALAR DEV at alardev.al for a free estimate." },
    },
    {
      "@type": "Question",
      name: "Which is the best web development company in Albania?",
      acceptedAnswer: { "@type": "Answer", text: "ALAR DEV is a top-rated software studio in Tirana, Albania, with 50+ completed projects and a 5.0 Google rating. ALAR DEV specializes in websites, mobile apps, and custom software for Albanian and international businesses. Based in Tirana, serving Albania, Kosovo, and worldwide clients." },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a website in Albania?",
      acceptedAnswer: { "@type": "Answer", text: "ALAR DEV delivers most websites in 3–5 days. Simple landing pages are ready in 3 days. E-commerce stores and custom platforms take 2–4 weeks depending on complexity." },
    },
    {
      "@type": "Question",
      name: "Do I own my website after ALAR DEV builds it?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — 100%. ALAR DEV gives you full ownership of everything: source code, domain, hosting, and all data. No monthly platform fees, no lock-in. You can take it to any developer in the future." },
    },
    {
      "@type": "Question",
      name: "Can ALAR DEV create an online store for my business in Albania?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. ALAR DEV builds complete e-commerce stores with product catalog, shopping cart, secure payment integration, and order management — fully optimized for the Albanian and Balkan market. Prices start from €500." },
    },
    {
      "@type": "Question",
      name: "Does ALAR DEV build mobile apps for iOS and Android?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. ALAR DEV develops mobile apps for both iOS and Android using Flutter — one codebase, two platforms, native performance. This significantly reduces cost and time to market." },
    },
    {
      "@type": "Question",
      name: "Sa kushton krijimi i një website profesional në Shqipëri?",
      acceptedAnswer: { "@type": "Answer", text: "Në ALAR DEV, çmimet varen nga kompleksiteti — një faqe prezantuese fillon nga 150€, një website biznesi me panel administrimi nga 250€, dhe dyqani online nga 500€. Software dhe aplikacione me porosi ofertë individualisht. Na kontaktoni në alardev.al për vlerësim falas." },
    },
    {
      "@type": "Question",
      name: "Cila është kompania më e mirë e zhvillimit web në Shqipëri?",
      acceptedAnswer: { "@type": "Answer", text: "ALAR DEV është studio software me vlerësim të lartë në Tiranë, Shqipëri — me 50+ projekte të realizuara dhe vlerësim 5.0 në Google. ALAR DEV specializohet në website, aplikacione mobile dhe software me porosi për biznese shqiptare dhe ndërkombëtare." },
    },
    {
      "@type": "Question",
      name: "A ofron ALAR DEV mbështetje pas lansimit të faqes?",
      acceptedAnswer: { "@type": "Answer", text: "Po. ALAR DEV ofron mbështetje teknike edhe pas dorëzimit të projektit — përfshirë përditësime, rregullime dhe shtesa të reja. ALAR DEV është partneri juaj afatgjatë dixhital." },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <HomePageClient />
    </>
  );
}

