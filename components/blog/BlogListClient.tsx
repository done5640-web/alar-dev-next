"use client";
import Link from "next/link";
import { POSTS } from "@/lib/blog";
import { useLang } from "@/lib/i18n";
import type { Lang } from "@/lib/data";
import RevealObserver from "@/components/RevealObserver";

export default function BlogListClient() {
  const { lang } = useLang();
  const l = lang as Lang;

  return (
    <>
      <RevealObserver />
      <div className="page-hero">
        <div className="page-hero-dots" />
        <div className="page-hero-glow" style={{ "--hero-glow-color": "rgba(168,85,247,0.13)" } as React.CSSProperties} />
        <div className="container page-hero-content reveal">
          <div className="section-label">{l === "en" ? "INSIGHTS" : "ARTIKUJ"}</div>
          <h1 className="page-hero-title">
            {l === "en" ? <>Our <span className="gradient-text">Blog.</span></> : <>Blogu <span className="gradient-text">ynë.</span></>}
          </h1>
          <p className="page-hero-sub">
            {l === "en"
              ? "Expert articles on web development, software, and digital growth for Albanian businesses."
              : "Artikuj ekspertësh mbi zhvillimin web, softuerin dhe rritjen dixhitale për bizneset shqiptare."}
          </p>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: 120 }}>
        <div className="blog-grid">
          {POSTS.map((post) => {
            const data = post[l];
            return (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card reveal">
                <div className="blog-card-img">
                  <img src={post.image} alt={post.imageAlt} loading="lazy" />
                  <div className="blog-card-overlay" />
                </div>
                <div className="blog-card-body">
                  <div className="blog-meta">
                    <span className="blog-date">{new Date(post.date).toLocaleDateString(l === "sq" ? "sq-AL" : "en-GB", { day: "numeric", month: "long", year: "numeric" })}</span>
                  </div>
                  <h2 className="blog-card-title">{data.title}</h2>
                  <p className="blog-card-excerpt">{data.excerpt}</p>
                  <span className="blog-read-more">{l === "en" ? "Read article →" : "Lexo artikullin →"}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
