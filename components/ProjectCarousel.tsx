"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { useLang } from "@/lib/i18n";
import { PROJECTS } from "@/lib/data";
import type { Lang } from "@/lib/data";

type Project = (typeof PROJECTS)[number];

const FEATURED_IDS = [5, 3, 4, 2, 1, 6];

export default function ProjectCarousel() {
  const { lang } = useLang();
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const touchStartX = useRef(0);

  const items = FEATURED_IDS.map((id) => PROJECTS.find((p) => p.id === id)!).filter(Boolean);
  const total = items.length;

  const go = useCallback((dir: 1 | -1) => {
    if (animating) return;
    setAnimating(true);
    setActive((prev) => (prev + dir + total) % total);
    setTimeout(() => setAnimating(false), 750);
  }, [animating, total]);

  useEffect(() => {
    const t = setInterval(() => go(1), 4500);
    return () => clearInterval(t);
  }, [go]);

  const getCardStyle = (offset: number): React.CSSProperties => {
    const abs = Math.abs(offset);
    if (abs > 2) return { display: "none" };
    const rotateY = offset * 14;
    const translateX = offset * 78;
    const scale = 1 - abs * 0.14;
    const zIndex = 10 - abs;
    const opacity = abs === 2 ? 0.3 : abs === 1 ? 0.65 : 1;
    const blur = abs === 2 ? "blur(3px)" : "none";
    return {
      transform: `perspective(1600px) rotateY(${rotateY}deg) translateX(${translateX}%) scale(${scale})`,
      zIndex,
      opacity,
      filter: blur,
      transition: animating
        ? "transform 0.75s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.75s ease, filter 0.75s ease"
        : "none",
      cursor: abs === 0 ? "default" : "pointer",
      willChange: "transform",
    };
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) go(diff > 0 ? 1 : -1);
  };

  return (
    <div
      className="fan-carousel"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Left arrow — positioned on the side */}
      <button className="fan-arrow fan-arrow-left" onClick={() => go(-1)} aria-label="Previous">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18 L9 12 L15 6"/></svg>
      </button>

      {/* Cards */}
      <div className="fan-stage">
        {items.map((p, i) => {
          const offset = ((i - active + total) % total + Math.floor(total / 2)) % total - Math.floor(total / 2);
          const isCenter = offset === 0;
          const img = (p as typeof p & { image?: string }).image;
          return (
            <div
              key={p.id}
              className={`fan-card${isCenter ? " fan-center" : ""}`}
              style={getCardStyle(offset)}
              onClick={() => !isCenter && go(offset > 0 ? 1 : -1)}
            >
              <div className="fan-img-wrap">
                {img && <img src={img} alt={p.name} className="fan-img" />}
                <div className="fan-img-overlay" />
                <div className="fan-cat">{p.cat}</div>
              </div>
              <div className="fan-info">
                <h3 className="fan-title">{p.name}</h3>
                <p className="fan-desc">{p.desc[lang as Lang]}</p>
                <div className="fan-tech">
                  {p.tech.slice(0, 3).map((t) => <span key={t} className="fan-tag">{t}</span>)}
                </div>
                {isCenter && p.url && (
                  <div className="fan-actions">
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="fan-visit">
                      {lang === "en" ? "Visit site ↗" : "Vizito faqen ↗"}
                    </a>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Right arrow */}
      <button className="fan-arrow fan-arrow-right" onClick={() => go(1)} aria-label="Next">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18 L15 12 L9 6"/></svg>
      </button>
    </div>
  );
}
