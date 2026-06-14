import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Web & App Projects â€” ALAR DEV Albania",
  description:
    "Explore 50+ completed projects by ALAR DEV â€” websites, mobile apps and custom software built for Albanian and international businesses. Real results, on time and on budget. Portofoli ynÃ« â€” projektet e realizuara nga ALAR DEV ShqipÃ«ri.",
  keywords: [
    // Albanian portfolio
    "portofoli alar dev", "projektet tona shqiperi", "punet tona shqiperi",
    "shembuj website shqiperi", "website te realizuara shqiperi", "projektet e kryera",
    "studime rasti shqiperi", "klientet tane shqiperi", "rezultate projekti shqiperi",
    "aplikacione te ndertuar shqiperi", "faqe web te realizuara", "50 projekte shqiperi",
    "punime web shqiperi", "dizajn te realizuar shqiperi", "website biznesi shqiperi",
    "website restoranti i realizuar", "website hoteli i realizuar", "website me foto",
    "shembuj dizajni website shqiperi", "case study shqiperi",
    // English portfolio
    "web development portfolio albania", "software portfolio albania",
    "completed projects albania", "web design examples albania",
    "case studies albania", "client work albania", "our work albania",
    "50 projects albania", "website examples albania", "app portfolio albania",
    "mobile app examples albania", "e-commerce examples albania",
    "business websites albania", "restaurant websites albania", "hotel websites albania",
    "real results web development", "albanian web design portfolio",
    "alar dev projects", "alar dev portfolio", "alar dev work",
    // International
    "web development portfolio", "software company portfolio",
    "react website examples", "next.js website examples", "flutter app portfolio",
    "best web designs albania", "professional web portfolio",
  ].join(", "),
  alternates: {
    canonical: "https://alardev.al/projects",
    languages: { "en": "https://alardev.al/projects", "sq": "https://alardev.al/projects", "x-default": "https://alardev.al/projects" },
  },
  openGraph: {
    title: "Portfolio | 50+ Projects â€” ALAR DEV Albania",
    description: "50+ websites, apps and software products built for Albanian and international businesses. Real results, on time and on budget.",
    url: "https://alardev.al/projects",
    siteName: "ALAR DEV",
    type: "website",
    images: [{ url: "https://alardev.al/og-image.png", width: 1200, height: 630, alt: "ALAR DEV Portfolio" }],
  },
  twitter: { card: "summary_large_image", title: "Portfolio | ALAR DEV Albania", description: "50+ completed projects. Websites, apps & custom software for Albanian businesses." },
  robots: { index: true, follow: true },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

