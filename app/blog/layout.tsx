import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Web Development & Software Tips — ALAR DEV Albania",
  description:
    "Expert articles on web development, software, and digital growth for Albanian businesses. Learn how to create a website, what it costs, and how to choose the right software company. Artikuj ekspertësh mbi zhvillimin web dhe rritjen dixhitale për bizneset shqiptare.",
  keywords: [
    "blog web development albania", "artikuj software shqiperi", "keshilla website shqiperi",
    "si te krijoj website", "sa kushton website shqiperi", "zhvillim web shqiperi blog",
    "dixhitalizim biznes shqiperi", "software blog shqiperi", "kompani software blog",
    "web development tips albania", "digital growth albania", "website advice albania",
    "krijim website guide", "faqe interneti keshilla", "tech blog shqiperi",
  ].join(", "),
  alternates: { canonical: "https://alardev.al/blog" },
  openGraph: {
    title: "Blog | ALAR DEV — Web Development Albania",
    description: "Expert articles on web development, software, and digital growth for Albanian businesses.",
    url: "https://alardev.al/blog",
    siteName: "ALAR DEV",
    type: "website",
    images: [{ url: "https://alardev.al/og-image.png", width: 1200, height: 630, alt: "ALAR DEV Blog — Web Development Albania" }],
  },
  robots: { index: true, follow: true },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://alardev.al" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://alardev.al/blog" },
  ],
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
