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

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://alardev.al" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://alardev.al/services" },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "ALAR DEV Services",
  itemListElement: [
    {
      "@type": "ListItem", position: 1,
      item: { "@type": "Service", name: "Website Creation & Web Design", provider: { "@type": "Organization", name: "ALAR DEV" }, areaServed: ["Albania", "Kosovo"], description: "Professional website creation and web design in Albania. Mobile-first, SEO-optimized, fast delivery." },
    },
    {
      "@type": "ListItem", position: 2,
      item: { "@type": "Service", name: "E-commerce Development", provider: { "@type": "Organization", name: "ALAR DEV" }, areaServed: ["Albania", "Kosovo"], description: "Full-featured online stores with payment integration, order management, and product catalogs." },
    },
    {
      "@type": "ListItem", position: 3,
      item: { "@type": "Service", name: "Mobile App Development", provider: { "@type": "Organization", name: "ALAR DEV" }, areaServed: ["Albania", "Kosovo", "Worldwide"], description: "iOS and Android mobile apps built with Flutter — one codebase, native performance." },
    },
    {
      "@type": "ListItem", position: 4,
      item: { "@type": "Service", name: "Custom Software Development", provider: { "@type": "Organization", name: "ALAR DEV" }, areaServed: ["Albania", "Kosovo", "Worldwide"], description: "Admin dashboards, CRM systems, SaaS platforms and custom web applications built from scratch." },
    },
  ],
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      {children}
    </>
  );
}
