"use client";
import { useEffect, useRef } from "react";
import { useLang } from "@/lib/i18n";

const stats = [
  { target: 50, suffix: "+", label: { en: "Projects Delivered", sq: "Projekte të Realizuara" } },
  { target: 30, suffix: "+", label: { en: "Happy Clients", sq: "Klientë të Kënaqur" } },
  { target: 100, suffix: "%", label: { en: "Quality Guaranteed", sq: "Cilësi e Garantuar" } },
  { target: 3, suffix: "", label: { en: "Years of Experience", sq: "Vite Eksperience" } },
];

export default function StatsCounter() {
  const { lang } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          el.querySelectorAll<HTMLElement>(".num").forEach((num, i) => {
            const target = stats[i].target;
            const suf = stats[i].suffix;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min(1, (now - start) / 2000);
              const eased = 1 - Math.pow(2, -10 * p);
              num.textContent = Math.round(target * eased) + suf;
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          });
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="stats">
      <div className="stats-grid" ref={ref}>
        {stats.map((s, i) => (
          <div className="stat" key={i}>
            <div className="num">0</div>
            <div className="lbl">{s.label[lang]}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
