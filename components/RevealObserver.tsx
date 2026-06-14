"use client";
import { useEffect } from "react";

export default function RevealObserver() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    const observe = () => {
      document.querySelectorAll(".reveal:not(.in)").forEach((el, i) => {
        (el as HTMLElement).style.transitionDelay = (i % 6) * 0.08 + "s";
        obs.observe(el);
      });
    };
    observe();
    // Re-observe when DOM changes (filter clicks etc.)
    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => { obs.disconnect(); mo.disconnect(); };
  }, []);
  return null;
}
