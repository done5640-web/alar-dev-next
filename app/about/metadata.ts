import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Us — Software Studio Tirana, Albania | ALAR DEV",
  description:
    "Meet the team behind ALAR DEV — a software studio based in Tirana, Albania. Engineers and designers who build websites, mobile apps, and custom software for businesses across Albania, Kosovo, and beyond.",
  keywords: [
    "about alar dev", "software studio tirana", "software team albania", "web developers albania",
    "who we are alar dev", "kompani software tirane", "ekipi alar dev", "studio software tirane",
    "zhvillues web tirane", "agjensi digjitale tirane",
  ].join(", "),
  alternates: {
    canonical: "https://alardev.al/about",
    languages: { en: "https://alardev.al/about", sq: "https://alardev.al/about", "x-default": "https://alardev.al/about" },
  },
  openGraph: {
    title: "About ALAR DEV — Software Studio Albania",
    description: "Engineers and designers based in Tirana, Albania. We build websites, mobile apps, and custom software for businesses worldwide.",
    url: "https://alardev.al/about",
    siteName: "ALAR DEV",
    type: "website",
    images: [{ url: "https://alardev.al/og-image.png", width: 1200, height: 630, alt: "ALAR DEV — Software Studio Albania" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About ALAR DEV — Software Studio Albania",
    description: "Engineers and designers based in Tirana. Websites, mobile apps & custom software.",
    images: ["https://alardev.al/og-image.png"],
  },
  robots: { index: true, follow: true },
};
