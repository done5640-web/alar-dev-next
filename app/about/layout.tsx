import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ALAR DEV | Albanian Software Studio — Who We Are",
  description:
    "ALAR DEV is a software studio based in Albania, building digital products for businesses across Tirana, Kosovo and beyond. 50+ projects delivered. We build fast, you own everything. Rreth ALAR DEV — studio software nga Shqipëria.",
  keywords: [
    // Albanian
    "rreth alar dev", "studio software shqiperi", "kompani software shqiperi",
    "ekip web developer shqiperi", "historia e kompanise software", "kush jemi ne shqiperi",
    "kompani it shqiperi", "agjensi digjitale tirane", "studio krijuese shqiperi",
    "zhvillues software shqiperi", "programues shqiperi", "team software shqiperi",
    "kompani teknologji shqiperi", "startup shqiperi", "kompani inovative shqiperi",
    "partner digjital shqiperi", "web agency shqiperi", "agjensi web tirane",
    "studio web shqiperi", "projektet tona shqiperi", "puna jone shqiperi",
    "stafi yne shqiperi", "misioni yne shqiperi", "vlerat tona shqiperi",
    "kompani e besueshem shqiperi", "bashkepunim software shqiperi",
    // English
    "about alar dev", "albanian software studio", "albanian software company",
    "who we are albania", "software team albania", "web development company albania",
    "about us software albania", "albanian developers", "tech company tirana",
    "software engineers albania", "digital studio albania", "creative agency albania",
    "IT company albania", "technology company albania", "software consultancy albania",
    "development team albania", "albanian tech startup", "software partner albania",
    "reliable software company albania", "experienced web developers albania",
    "professional software team", "software agency tirana",
  ].join(", "),
  alternates: {
    canonical: "https://alardev.al/about",
    languages: { "en": "https://alardev.al/about", "sq": "https://alardev.al/about", "x-default": "https://alardev.al/about" },
  },
  openGraph: {
    title: "About ALAR DEV | Albanian Software Studio",
    description: "A software studio from Albania. 50+ projects delivered. We build fast, you own everything.",
    url: "https://alardev.al/about",
    siteName: "ALAR DEV",
    type: "website",
    images: [{ url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1200&auto=format&fit=crop", width: 1200, height: 630, alt: "ALAR DEV Team" }],
  },
  twitter: { card: "summary_large_image", title: "About ALAR DEV | Albanian Software Studio", description: "A software studio from Albania. 50+ projects delivered." },
  robots: { index: true, follow: true },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
