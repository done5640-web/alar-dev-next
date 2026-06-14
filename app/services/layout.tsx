import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Web Design, Mobile Apps & Custom Software — ALAR DEV Albania",
  description:
    "Professional web development, mobile app creation, e-commerce platforms, admin dashboards and custom software solutions in Albania. Landing pages from €150, full business sites from €250. Shërbimet tona — krijim website, aplikacione mobile, e-commerce, software me porosi.",
  keywords: [
    // Albanian services
    "sherbimet tona shqiperi", "krijim website professional", "krijim faqe web profesionale",
    "dizajn faqe interneti shqiperi", "zhvillim faqe web shqiperi", "krijim landing page shqiperi",
    "landing page shqiperi", "faqe prezantuese me cmim te mire", "website 150 euro shqiperi",
    "website 250 euro shqiperi", "krijim dyqan online shqiperi", "e-commerce shqiperi",
    "platforma e-commerce shqiperi", "dyqan online professional shqiperi",
    "krijim aplikacion mobile shqiperi", "zhvillim aplikacione android", "zhvillim aplikacione ios",
    "aplikacione flutter shqiperi", "aplikacione react native shqiperi",
    "panel administrimi me porosi", "dashboard admin shqiperi", "sistem menaxhimi shqiperi",
    "CRM me porosi shqiperi", "sistem rezervimi online shqiperi", "sistem porosish online",
    "software me porosi shqiperi", "platforma SaaS shqiperi", "zhvillim platforma shqiperi",
    "API zhvillim shqiperi", "backend zhvillim shqiperi", "frontend zhvillim shqiperi",
    "dizajn UI UX shqiperi", "dizajn nderfaqe shqiperi", "optimizim faqe web shqiperi",
    "mirëmbajtje faqe web shqiperi", "hosting dhe domain shqiperi", "SEO shqiperi",
    "optimizim per motoret e kerkimit", "marketing digjital shqiperi",
    "krijim faqe restorant shqiperi", "faqe hoteli shqiperi",
    "faqe pasuri te paluajtshme shqiperi", "faqe klinike shqiperi",
    "faqe salloni bukurie shqiperi", "faqe biznesi shqiperi",
    // English services
    "web development services albania", "website design services albania",
    "mobile app development services", "e-commerce development albania",
    "landing page design albania", "landing page from 150 euros", "business website from 250 euros",
    "custom software development albania", "admin dashboard development albania",
    "CRM development albania", "SaaS development albania", "booking system development albania",
    "order management system albania", "inventory system albania",
    "react development albania", "next.js development albania", "flutter app development albania",
    "node.js backend albania", "postgresql database albania", "API development albania",
    "UI UX design albania", "responsive web design albania", "SEO services albania",
    "website maintenance albania", "website hosting albania",
    "restaurant website albania", "hotel website albania",
    "real estate website albania", "medical website albania", "salon website albania",
    "e-commerce store albania", "online payment integration albania", "stripe integration albania",
    // International
    "affordable landing page", "cheap website development", "professional web design affordable",
    "full stack web development", "custom web application", "bespoke software development",
    "mobile first web design", "PWA development", "headless CMS development",
    "wordpress alternatives", "next.js website", "react website",
  ].join(", "),
  alternates: {
    canonical: "https://alardev.al/services",
    languages: { "en": "https://alardev.al/services", "sq": "https://alardev.al/services", "x-default": "https://alardev.al/services" },
  },
  openGraph: {
    title: "Services | Web Design, Mobile Apps & Custom Software — ALAR DEV",
    description: "Landing pages from €150. Full business sites from €250. E-commerce, mobile apps, custom software. Fast delivery, full ownership.",
    url: "https://alardev.al/services",
    siteName: "ALAR DEV",
    type: "website",
    images: [{ url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1200&auto=format&fit=crop", width: 1200, height: 630, alt: "ALAR DEV Services" }],
  },
  twitter: { card: "summary_large_image", title: "Services | ALAR DEV Albania", description: "Landing pages from €150. Mobile apps, e-commerce, custom software. Albania's top software studio." },
  robots: { index: true, follow: true },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
