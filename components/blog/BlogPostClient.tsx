"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, type ReactNode } from "react";
import { useLang } from "@/lib/i18n";
import type { Lang } from "@/lib/data";
import type { Post } from "@/lib/blog";
import RevealObserver from "@/components/RevealObserver";
import BlogPostBody from "@/components/blog/BlogPostBody";

export default function BlogPostClient({
  post,
  related = [],
  serverContent,
}: {
  post: Post;
  related?: Post[];
  serverContent: ReactNode;
}) {
  const { lang } = useLang();
  const l = lang as Lang;
  const data = post[l];

  // Start with false so first render matches server HTML (avoids hydration mismatch)
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => { setHydrated(true); }, []);

  return (
    <>
      <RevealObserver />
      <article className="blog-post">
        <div className="blog-post-hero">
          <Image src={post.image} alt={post.imageAlt} className="blog-post-hero-img" fill priority sizes="100vw" />
          <div className="blog-post-hero-overlay" />
          <div className="container blog-post-hero-content">
            <Link href="/blog" className="blog-back">← {l === "en" ? "Back to Blog" : "Kthehu te Blogu"}</Link>
            <div className="section-label" style={{ marginTop: 20 }}>{l === "en" ? "INSIGHTS" : "ARTIKUJ"}</div>
            <h1 className="blog-post-title">{hydrated ? data.title : post.en.title}</h1>
            <div className="blog-post-meta">
              <span>{new Date(post.date).toLocaleDateString(hydrated && l === "sq" ? "sq-AL" : "en-GB", { day: "numeric", month: "long", year: "numeric" })}</span>
              <span className="blog-meta-dot">·</span>
              <span>ALAR DEV</span>
            </div>
          </div>
        </div>

        <div className="container">
          {/* Before hydration: server-rendered English content (what Google crawls). After: language-aware content. */}
          {hydrated ? <BlogPostBody content={data.content} lang={l} /> : serverContent}

          {related.length > 0 && (
            <div className="blog-related reveal">
              <div className="section-label">{l === "en" ? "RELATED ARTICLES" : "ARTIKUJ TË NGJASHËM"}</div>
              <div className="blog-related-grid">
                {related.map((r) => (
                  <Link key={r.slug} href={`/blog/${r.slug}`} className="blog-related-card">
                    <Image src={r.image} alt={r[hydrated ? l : "en"].title} className="blog-related-img" fill sizes="(max-width: 768px) 100vw, 300px" />
                    <div className="blog-related-body">
                      <span className="blog-related-date">
                        {new Date(r.date).toLocaleDateString(hydrated && l === "sq" ? "sq-AL" : "en-GB", { day: "numeric", month: "long", year: "numeric" })}
                      </span>
                      <p className="blog-related-title">{r[hydrated ? l : "en"].title}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="blog-post-footer reveal">
            <div className="section-label">{l === "en" ? "MORE ARTICLES" : "MË SHUMË ARTIKUJ"}</div>
            <Link href="/blog" className="btn btn-ghost" style={{ marginTop: 16 }}>
              {l === "en" ? "View all articles →" : "Shiko të gjitha artikujt →"}
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
