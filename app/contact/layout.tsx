import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact ALAR DEV | Get a Free Quote — Web & App Development Albania",
  description:
    "Start your project with ALAR DEV today. Get a free quote for your website, mobile app or custom software. Based in Tirana, Albania — serving clients worldwide. Na kontaktoni — merrni ofertë falas për faqen tuaj web ose aplikacionin tuaj.",
  keywords: [
    // Albanian contact
    "kontaktoni alar dev", "oferte falas website shqiperi", "oferte falas aplikacion mobile",
    "merr oferte faqe web", "fillo projektin tend shqiperi", "kerkese oferte software",
    "takim konsultimi shqiperi", "konsultim falas website", "kontakt studio software tirane",
    "dergoni mesazh alar dev", "porositni website shqiperi", "porositni aplikacion shqiperi",
    "rezervo konsultim shqiperi", "fillo bashkepunimin shqiperi", "hapni projekt te ri shqiperi",
    "kohe dorezimi website shqiperi", "cmim website shqiperi", "buxhet website shqiperi",
    "pagesa website shqiperi", "kontrakte software shqiperi",
    // English contact
    "contact alar dev", "get a quote albania", "free quote web development albania",
    "hire web developer albania", "start a project albania", "request a quote albania",
    "web development quote albania", "app development quote albania",
    "software development quote", "book a consultation albania",
    "free consultation web design", "website cost albania", "how much does a website cost albania",
    "website price albania", "affordable website quote", "get started web development",
    "contact software company albania", "reach out software studio albania",
    "work with us albania", "collaborate albania", "partnership albania",
    // International
    "hire web developer", "get a website quote", "request web development services",
    "affordable website development quote", "free project consultation",
    "start a website project", "get a software quote",
  ].join(", "),
  alternates: {
    canonical: "https://alardev.al/contact",
    languages: { "en": "https://alardev.al/contact", "sq": "https://alardev.al/contact", "x-default": "https://alardev.al/contact" },
  },
  openGraph: {
    title: "Contact ALAR DEV | Free Quote — Web & App Development Albania",
    description: "Get a free quote for your website, app or custom software. No pitch decks. Just a real conversation. Based in Albania, serving worldwide.",
    url: "https://alardev.al/contact",
    siteName: "ALAR DEV",
    type: "website",
    images: [{ url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1200&auto=format&fit=crop", width: 1200, height: 630, alt: "Contact ALAR DEV" }],
  },
  twitter: { card: "summary_large_image", title: "Contact ALAR DEV | Free Quote", description: "Get a free quote for your website, app or custom software. Albania's top software studio." },
  robots: { index: true, follow: true },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
