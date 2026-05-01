'use client';

import { useEffect, useRef } from 'react';

/* Lightweight animated globe-arc lines used as background for the hero. */
export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    let start = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const LINES = 26;
    const PERIOD = 60_000;

    const draw = (ts: number) => {
      if (!start) start = ts;
      const t = (ts - start) / PERIOD;
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      const cx = W / 2;
      const cy = H * 0.78;
      const R = Math.max(W, H) * 0.46;
      const theta = t * Math.PI * 2;

      for (let i = 0; i < LINES; i++) {
        const phi = (i / LINES) * Math.PI * 2 + theta;
        const sinPhi = Math.sin(phi);
        const absCos = Math.abs(Math.cos(phi));

        const xc = cx + R * sinPhi;
        const rx = R * absCos;
        const ry = R;

        const opacity = (1 - Math.abs(sinPhi) * 0.6) * 0.11;
        if (opacity < 0.005) continue;

        ctx.beginPath();
        ctx.ellipse(xc, cy, Math.max(rx, 0.5), ry, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(120, 110, 150, ${opacity.toFixed(3)})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden
    />
  );
}
