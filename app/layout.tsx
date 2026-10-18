import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ClientEffects from "@/components/ClientEffects";
import DynamicTitle from "@/components/DynamicTitle";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "ALAR DEV — Software Studio | Web Development & Apps Albania",
    template: "%s | ALAR DEV",
  },
  description:
    "ALAR DEV — Albania's leading software studio. We build websites, mobile apps, e-commerce platforms and custom software for businesses in Tirana, Kosovo and worldwide. Fast delivery, full ownership. Krijim website, zhvillim aplikacione, kompani software Shqipëri.",
  metadataBase: new URL("https://alardev.al"),
  keywords: "web development albania, software company albania, krijim website, krijim faqe web, kompani software shqiperi, dizajn website shqiperi, zhvillim aplikacione mobile, mobile app development albania, e-commerce albania, custom software albania, alar dev",
  authors: [{ name: "ALAR DEV", url: "https://alardev.al" }],
  creator: "ALAR DEV",
  publisher: "ALAR DEV",
  category: "Software Development",
  alternates: {
    canonical: "https://alardev.al",
    languages: {
      "sq": "https://alardev.al",
      "en": "https://alardev.al",
      "x-default": "https://alardev.al",
    },
  },
  openGraph: {
    siteName: "ALAR DEV",
    type: "website",
    locale: "sq_AL",
    alternateLocale: ["en_US"],
    images: [{ url: "https://alardev.al/og-image.png", width: 1200, height: 630, alt: "ALAR DEV — Software Studio Albania" }],
  },
  twitter: { card: "summary_large_image", site: "@alardev" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  verification: {},
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://alardev.al/#organization",
      name: "ALAR DEV",
      alternateName: ["ALAR Development", "ALAR DEV Studio", "Alar Dev Shqiperi", "Alar Dev Albania"],
      url: "https://alardev.al",
      logo: { "@type": "ImageObject", url: "https://alardev.al/icon.png", width: 512, height: 512 },
      description: "ALAR DEV is Albania's leading software studio, based in Tirana, specializing in web development, mobile apps, e-commerce platforms and custom software solutions for businesses in Albania, Kosovo and worldwide.",
      slogan: "Fast delivery. Full ownership. Real results.",
      foundingDate: "2021",
      numberOfEmployees: { "@type": "QuantitativeValue", minValue: 2, maxValue: 10 },
      areaServed: [
        { "@type": "Country", name: "Albania" },
        { "@type": "Country", name: "Kosovo" },
        { "@type": "AdministrativeArea", name: "Europe" },
      ],
      knowsLanguage: ["Albanian", "English", "Italian"],
      knowsAbout: [
        "Web Development", "Website Design", "Mobile App Development",
        "E-commerce Development", "Custom Software Development", "React", "Next.js",
        "Flutter", "Node.js", "TypeScript", "PostgreSQL", "UI/UX Design",
        "SEO Optimization", "Business Websites Albania", "Software Studio Albania",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          availableLanguage: ["Albanian", "English"],
          url: "https://alardev.al/contact",
          email: "info@alardev.al",
        },
        {
          "@type": "ContactPoint",
          contactType: "sales",
          availableLanguage: ["Albanian", "English"],
          url: "https://alardev.al/contact",
        },
      ],
      sameAs: [
        "https://www.facebook.com/alardev",
        "https://www.instagram.com/alardev",
        "https://www.linkedin.com/company/alardev",
      ],
    },
    {
      "@type": ["LocalBusiness", "SoftwareApplication"],
      "@id": "https://alardev.al/#localbusiness",
      name: "ALAR DEV",
      description: "Professional software studio in Tirana, Albania. ALAR DEV builds websites, mobile apps, e-commerce platforms and custom software. Packages start from €150 for a landing page. 50+ projects delivered. 5-star Google rating.",
      url: "https://alardev.al",
      image: "https://alardev.al/og-image.png",
      priceRange: "€–€€€",
      email: "info@alardev.al",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "9",
        bestRating: "5",
        worstRating: "1",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tirana",
        addressRegion: "Tirana",
        addressCountry: "AL",
      },
      geo: { "@type": "GeoCoordinates", latitude: 41.3275, longitude: 19.8187 },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        opens: "09:00", closes: "18:00",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Web & Software Development Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Landing Page Website", description: "Professional 1-page responsive website with contact form and SEO, delivered in 7 days." }, price: "150", priceCurrency: "EUR" },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Website with Admin Dashboard", description: "Multi-page website with admin panel for managing content, bookings or listings." }, price: "250", priceCurrency: "EUR" },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-commerce Store or CRM System", description: "Full online store or customer management system with payments and order management." }, price: "500", priceCurrency: "EUR" },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Software, SaaS or Mobile App", description: "Complex platforms, SaaS products, iOS and Android mobile apps built from scratch." } },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://alardev.al/#website",
      url: "https://alardev.al",
      name: "ALAR DEV — Software Studio Albania",
      description: "Albania's leading software studio. Websites from €150, mobile apps, e-commerce and custom software.",
      publisher: { "@id": "https://alardev.al/#organization" },
      inLanguage: ["sq", "en"],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://alardev.al/#service",
      name: "ALAR DEV — Web Development & Software Studio Albania",
      provider: { "@id": "https://alardev.al/#organization" },
      description: "ALAR DEV offers web development, mobile app development, e-commerce, and custom software services in Albania and Kosovo. Known for fast delivery (3–5 days), full code ownership, and transparent pricing starting from €150.",
      serviceType: ["Web Development", "Website Design", "Mobile App Development", "E-commerce Development", "Custom Software Development", "UI/UX Design", "SEO Optimization"],
      areaServed: [
        { "@type": "Country", name: "Albania" },
        { "@type": "Country", name: "Kosovo" },
        { "@type": "AdministrativeArea", name: "Europe" },
      ],
      availableLanguage: ["Albanian", "English"],
      hasOfferCatalog: { "@id": "https://alardev.al/#localbusiness" },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sq">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-NEMJE66YC8" />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-NEMJE66YC8');` }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.variable}>
        <I18nProvider>
          <DynamicTitle />
          <div id="cursor" />
          <Nav />
          <main>{children}</main>
          <Footer />
          <ClientEffects />
          <Analytics />
        </I18nProvider>
      </body>
    </html>
  );
}

