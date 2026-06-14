"use client";
import { useEffect } from "react";

export default function ClientEffects() {
  useEffect(() => {
    const prog = document.getElementById("scroll-progress");
    const nav = document.querySelector("nav.top");
    const cursor = document.getElementById("cursor");
    const isTouch = matchMedia("(hover:none)").matches;

    const heroInner = document.querySelector(".hero-inner") as HTMLElement | null;
    const heroGlow = document.querySelector(".hero-glow") as HTMLElement | null;

    // Scroll progress + nav + hero parallax
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (prog) prog.style.width = Math.min(100, (window.scrollY / h) * 100) + "%";
      nav?.classList.toggle("scrolled", window.scrollY > 60);
      const y = window.scrollY;
      if (heroInner) heroInner.style.transform = `translateY(${y * 0.28}px)`;
      if (heroGlow) heroGlow.style.transform = `translateY(${y * 0.15}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Cursor
    if (!isTouch && cursor) {
      let cx = 0, cy = 0, tx = 0, ty = 0;
      const onMove = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
      document.addEventListener("mousemove", onMove);
      const loop = () => {
        cx += (tx - cx) * 0.1;
        cy += (ty - cy) * 0.1;
        cursor.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`;
        requestAnimationFrame(loop);
      };
      loop();
      document.addEventListener("mouseover", (e) => {
        const el = e.target as Element;
        if (el.closest("a,button,.proj-card,input,select,textarea")) cursor.classList.add("hover");
        else cursor.classList.remove("hover");
      });
    } else if (cursor) {
      cursor.style.display = "none";
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
