import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Projects — Our Work & Portfolio | ALAR DEV Albania",
  description:
    "Explore ALAR DEV's project portfolio — enterprise HR platforms, real-time logistics apps, AI-powered document tools, e-commerce stores and more. Built for clients in Albania, Kosovo and worldwide.",
  keywords: [
    "alar dev projects", "software portfolio albania", "web development portfolio albania",
    "projektet tona", "punimet tona shqiperi", "shembuj website shqiperi",
    "aplikacione te ndertuar shqiperi", "portfolio studio software", "case studies albania",
    "enterprise software albania", "ecommerce projects albania", "mobile apps portfolio",
  ].join(", "),
  alternates: {
    canonical: "https://alardev.al/projects",
  },
  openGraph: {
    title: "Projects & Portfolio | ALAR DEV — Software Studio Albania",
    description: "Enterprise HR platforms, logistics apps, AI tools, e-commerce stores — see what we've built for clients in Albania, Kosovo and worldwide.",
    url: "https://alardev.al/projects",
    siteName: "ALAR DEV",
    type: "website",
    images: [{ url: "https://alardev.al/og-image.png", width: 1200, height: 630, alt: "ALAR DEV Projects Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | ALAR DEV — Software Studio Albania",
    description: "HR platforms, logistics apps, AI tools, e-commerce — see what we've built.",
    images: ["https://alardev.al/og-image.png"],
  },
  robots: { index: true, follow: true },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://alardev.al" },
    { "@type": "ListItem", position: 2, name: "Projects", item: "https://alardev.al/projects" },
  ],
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
