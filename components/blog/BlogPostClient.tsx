"use client";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import type { Lang } from "@/lib/data";
import type { Post } from "@/lib/blog";
import RevealObserver from "@/components/RevealObserver";

export default function BlogPostClient({ post }: { post: Post }) {
  const { lang } = useLang();
  const l = lang as Lang;
  const data = post[l];

  return (
    <>
      <RevealObserver />
      <article className="blog-post">
        <div className="blog-post-hero">
          <img src={post.image} alt={post.imageAlt} className="blog-post-hero-img" />
          <div className="blog-post-hero-overlay" />
          <div className="container blog-post-hero-content">
            <Link href="/blog" className="blog-back">← {l === "en" ? "Back to Blog" : "Kthehu te Blogu"}</Link>
            <div className="section-label" style={{ marginTop: 20 }}>{l === "en" ? "INSIGHTS" : "ARTIKUJ"}</div>
            <h1 className="blog-post-title">{data.title}</h1>
            <div className="blog-post-meta">
              <span>{new Date(post.date).toLocaleDateString(l === "sq" ? "sq-AL" : "en-GB", { day: "numeric", month: "long", year: "numeric" })}</span>
              <span className="blog-meta-dot">·</span>
              <span>ALAR DEV</span>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="blog-post-body reveal">
            {data.content.map((section, i) => {
              if (section.h2) return <h2 key={i} className="blog-h2">{section.h2}</h2>;
              if (section.h3) return <h3 key={i} className="blog-h3">{section.h3}</h3>;
              if (section.p) return <p key={i} className="blog-p">{section.p}</p>;
              if (section.ul) return (
                <ul key={i} className="blog-ul">
                  {section.ul.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              );
              if (section.table) return (
                <div key={i} className="blog-table-wrap">
                  <table className="blog-table">
                    <thead><tr>{section.table.headers.map((h, j) => <th key={j}>{h}</th>)}</tr></thead>
                    <tbody>{section.table.rows.map((row, j) => <tr key={j}>{row.map((cell, k) => <td key={k}>{cell}</td>)}</tr>)}</tbody>
                  </table>
                </div>
              );
              if (section.cta) return (
                <div key={i} className="blog-cta-block">
                  <h3>{l === "en" ? "Ready to start your project?" : "Gati për të filluar projektin tuaj?"}</h3>
                  <p>{l === "en" ? "No pitch decks. No long contracts. Just a real conversation about your business." : "Pa prezantime. Pa kontrata të gjata. Vetëm një bisedë e vërtetë rreth biznesit tuaj."}</p>
                  <Link href="/contact" className="btn btn-primary">
                    {l === "en" ? "Get a free quote →" : "Merr ofertë falas →"}
                  </Link>
                </div>
              );
              return null;
            })}
          </div>

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
