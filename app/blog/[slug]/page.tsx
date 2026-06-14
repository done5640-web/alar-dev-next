import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { POSTS, getPost } from "@/lib/blog";
import BlogPostClient from "@/components/blog/BlogPostClient";

function buildJsonLd(post: NonNullable<ReturnType<typeof getPost>>) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.en.title,
    description: post.en.excerpt,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: "ALAR DEV", url: "https://alardev.al" },
    publisher: {
      "@type": "Organization",
      name: "ALAR DEV",
      logo: { "@type": "ImageObject", url: "https://alardev.al/favicon.svg" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://alardev.al/blog/${post.slug}` },
    keywords: [...post.en.keywords, ...post.sq.keywords].join(", "),
    inLanguage: ["en", "sq"],
  };
}

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.en.title,
    description: post.en.excerpt,
    keywords: [...post.en.keywords, ...post.sq.keywords].join(", "),
    alternates: { canonical: `https://alardev.al/blog/${slug}` },
    openGraph: {
      title: post.en.title,
      description: post.en.excerpt,
      url: `https://alardev.al/blog/${slug}`,
      siteName: "ALAR DEV",
      type: "article",
      publishedTime: post.date,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.imageAlt }],
    },
    twitter: { card: "summary_large_image", title: post.en.title, description: post.en.excerpt, images: [post.image] },
    robots: { index: true, follow: true },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const jsonLd = buildJsonLd(post);
  const related = POSTS.filter((p) => p.slug !== slug).slice(0, 3);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BlogPostClient post={post} related={related} />
    </>
  );
}
