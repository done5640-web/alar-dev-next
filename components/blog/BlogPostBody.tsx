import Link from "next/link";
import type { Section } from "@/lib/blog";

export default function BlogPostBody({ content, lang }: { content: Section[]; lang: "en" | "sq" }) {
  return (
    <div className="blog-post-body reveal">
      {content.map((section, i) => {
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
            <h3>{lang === "en" ? "Ready to start your project?" : "Gati për të filluar projektin tuaj?"}</h3>
            <p>{lang === "en" ? "No pitch decks. No long contracts. Just a real conversation about your business." : "Pa prezantime. Pa kontrata të gjata. Vetëm një bisedë e vërtetë rreth biznesit tuaj."}</p>
            <Link href="/contact" className="btn btn-primary">
              {lang === "en" ? "Get a free quote →" : "Merr ofertë falas →"}
            </Link>
          </div>
        );
        return null;
      })}
    </div>
  );
}
