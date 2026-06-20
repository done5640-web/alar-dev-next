import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Us — Start Your Project | ALAR DEV Albania",
  description:
    "Get in touch with ALAR DEV to start your website, mobile app or software project. Based in Tirana, Albania — we respond within 24 hours. Na kontaktoni për krijim website, aplikacion ose software me porosi.",
  keywords: [
    "contact alar dev", "hire web developer albania", "start website project albania",
    "get a quote website albania", "software company contact albania", "web development quote",
    "kontakto alar dev", "kerkese oferte website", "fillo projektin tend", "oferte website shqiperi",
    "zhvillues web kontakt tirane", "studio software kontakt",
  ].join(", "),
  alternates: {
    canonical: "https://alardev.al/contact",
  },
  openGraph: {
    title: "Contact ALAR DEV — Start Your Project",
    description: "Tell us about your goals — website, app or custom software. Based in Tirana, Albania. We respond within 24 hours.",
    url: "https://alardev.al/contact",
    siteName: "ALAR DEV",
    type: "website",
    images: [{ url: "https://alardev.al/og-image.png", width: 1200, height: 630, alt: "Contact ALAR DEV — Software Studio Albania" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact ALAR DEV — Start Your Project",
    description: "Website, app or custom software — tell us your goals. We respond within 24 hours.",
    images: ["https://alardev.al/og-image.png"],
  },
  robots: { index: true, follow: true },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://alardev.al" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://alardev.al/contact" },
  ],
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
