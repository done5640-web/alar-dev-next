import { MetadataRoute } from "next";
import { POSTS } from "@/lib/blog";

const BASE = "https://alardev.al";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const blogPosts = POSTS.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  return [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/projects`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...blogPosts,
  ];
}
