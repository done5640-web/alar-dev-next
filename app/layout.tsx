import type { Metadata } from "next";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ClientEffects from "@/components/ClientEffects";

export const metadata: Metadata = {
  title: {
    default: "ALAR DEV â€” Software Studio | Web Development & Apps Albania",
    template: "%s | ALAR DEV",
  },
  description:
    "ALAR DEV â€” Albania's leading software studio. We build websites, mobile apps, e-commerce platforms and custom software for businesses in Tirana, Kosovo and worldwide. Fast delivery, full ownership. Krijim website, zhvillim aplikacione, kompani software ShqipÃ«ri.",
  metadataBase: new URL("https://alardev.al"),
  keywords: "web development albania, software company albania, krijim website, krijim faqe web, kompani software shqiperi, dizajn website shqiperi, zhvillim aplikacione mobile, mobile app development albania, e-commerce albania, custom software albania, alar dev",
  authors: [{ name: "ALAR DEV", url: "https://alardev.al" }],
  creator: "ALAR DEV",
  publisher: "ALAR DEV",
  category: "Software Development",
  openGraph: {
    siteName: "ALAR DEV",
    type: "website",
    locale: "en_US",
    alternateLocale: ["sq_AL"],
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
      alternateName: ["ALAR Development", "ALAR DEV Studio", "Alar Dev Shqiperi"],
      url: "https://alardev.al",
      logo: { "@type": "ImageObject", url: "https://alardev.al/icon.png", width: 512, height: 512 },
      description: "Albania's leading software studio specializing in web development, mobile apps, e-commerce and custom software solutions.",
      foundingDate: "2021",
      areaServed: ["Albania", "Kosovo", "Worldwide"],
      knowsLanguage: ["Albanian", "English"],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        availableLanguage: ["Albanian", "English"],
        url: "https://alardev.al/contact",
      },
      sameAs: [
        "https://www.facebook.com/alardev",
        "https://www.instagram.com/alardev",
        "https://www.linkedin.com/company/alardev",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://alardev.al/#localbusiness",
      name: "ALAR DEV",
      description: "Professional software studio in Tirana, Albania. Web development, mobile apps, e-commerce and custom software.",
      url: "https://alardev.al",
      image: "https://alardev.al/og-image.png",
      priceRange: "â‚¬â‚¬",
      address: { "@type": "PostalAddress", addressLocality: "Tirana", addressCountry: "AL" },
      geo: { "@type": "GeoCoordinates", latitude: 41.3275, longitude: 19.8187 },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        opens: "09:00", closes: "18:00",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Web & Software Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Landing Page", description: "Professional 1-page website" }, price: "150", priceCurrency: "EUR" },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Website + Admin", description: "Multi-page website with admin dashboard" }, price: "250", priceCurrency: "EUR" },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-commerce / CRM", description: "Full online store or customer management system" }, price: "500", priceCurrency: "EUR" },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Software Build", description: "Complex platform, SaaS or mobile app" } },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://alardev.al/#website",
      url: "https://alardev.al",
      name: "ALAR DEV",
      description: "Albania's leading software studio",
      publisher: { "@id": "https://alardev.al/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: "https://alardev.al/projects?search={search_term_string}" },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://alardev.al/#service",
      name: "ALAR DEV â€” Software Studio",
      provider: { "@id": "https://alardev.al/#organization" },
      serviceType: ["Web Development", "Mobile App Development", "E-commerce Development", "Custom Software Development", "UI/UX Design"],
      areaServed: ["Albania", "Kosovo", "Europe", "Worldwide"],
      availableLanguage: ["Albanian", "English"],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="alternate" hrefLang="en" href="https://alardev.al" />
        <link rel="alternate" hrefLang="sq" href="https://alardev.al" />
        <link rel="alternate" hrefLang="x-default" href="https://alardev.al" />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-NEMJE66YC8" />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-NEMJE66YC8');` }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <I18nProvider>
          <div id="scroll-progress" />
          <div id="cursor" />
          <Nav />
          <main>{children}</main>
          <Footer />
          <ClientEffects />
        </I18nProvider>
      </body>
    </html>
  );
}

