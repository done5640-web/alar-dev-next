"use client";
import { useEffect, useRef } from "react";

const COLORS = [
  { r: 168, g: 85,  b: 247 }, // purple
  { r: 6,   g: 182, b: 212 }, // cyan
  { r: 255, g: 60,  b: 172 }, // pink
  { r: 249, g: 115, b: 22  }, // orange
];

export default function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let w = 0, h = 0, raf: number;

    const resize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 110 }, (_, i) => {
      const c = COLORS[i % COLORS.length];
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.8 + 0.8,
        c,
        phase: Math.random() * Math.PI * 2,
        speed: 0.008 + Math.random() * 0.012,
      };
    });

    let mx = -9999, my = -9999;
    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mx = e.clientX - r.left;
      my = e.clientY - r.top;
    };
    const onLeave = () => { mx = my = -9999; };
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    let t = 0;
    const frame = () => {
      t++;
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        // Magnetic attraction toward cursor
        const dx = mx - p.x, dy = my - p.y;
        const d = Math.hypot(dx, dy);
        if (d < 200 && d > 1) {
          p.vx += (dx / d) * 0.06;
          p.vy += (dy / d) * 0.06;
        }

        // Damping
        p.vx *= 0.975;
        p.vy *= 0.975;
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        // Pulsing opacity
        const pulse = 0.5 + 0.5 * Math.sin(t * p.speed + p.phase);
        const alpha = 0.4 + 0.5 * pulse;

        // Glow
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
        grad.addColorStop(0, `rgba(${p.c.r},${p.c.g},${p.c.b},${alpha})`);
        grad.addColorStop(1, `rgba(${p.c.r},${p.c.g},${p.c.b},0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.c.r},${p.c.g},${p.c.b},${alpha})`;
        ctx.fill();
      }

      // Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < 120) {
            const frac = 1 - d / 120;
            // Blend the two particle colors
            const r = Math.round((a.c.r + b.c.r) / 2);
            const g = Math.round((a.c.g + b.c.g) / 2);
            const bl = Math.round((a.c.b + b.c.b) / 2);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${r},${g},${bl},${0.18 * frac})`;
            ctx.lineWidth = frac * 1.5;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(frame);
    };
    frame();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <canvas ref={ref} id="hero-canvas" />;
}
