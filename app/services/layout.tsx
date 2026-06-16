import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Services — Web Development, Apps & Custom Software | ALAR DEV Albania",
  description:
    "Professional web development, mobile app development, e-commerce and custom software services in Albania. Fast delivery, full ownership. Shërbime zhvillimi web dhe software në Shqipëri.",
  keywords: [
    "web development services albania", "mobile app development albania", "e-commerce development albania",
    "custom software development albania", "landing page albania", "business website albania",
    "sherbime web shqiperi", "zhvillim faqe web shqiperi", "zhvillim aplikacione mobile shqiperi",
    "dyqan online shqiperi", "software me porosi shqiperi", "paketa web shqiperi",
  ].join(", "),
  alternates: {
    canonical: "https://alardev.al/services",
  },
  openGraph: {
    title: "Services — Web & Software Development Albania | ALAR DEV",
    description: "End-to-end web development, mobile apps, e-commerce and custom software in Albania. Fast delivery, full ownership.",
    url: "https://alardev.al/services",
    siteName: "ALAR DEV",
    type: "website",
    images: [{ url: "https://alardev.al/og-image.png", width: 1200, height: 630, alt: "ALAR DEV Services — Web Development Albania" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | ALAR DEV — Web & Software Development Albania",
    description: "Web development, mobile apps, e-commerce and custom software in Albania. Fast delivery, full ownership.",
    images: ["https://alardev.al/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
