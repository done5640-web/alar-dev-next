import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { POSTS, getPost } from "@/lib/blog";
import BlogPostClient from "@/components/blog/BlogPostClient";

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
  return <BlogPostClient post={post} />;
}
