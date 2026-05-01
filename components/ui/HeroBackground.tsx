'use client';

import { useEffect, useRef } from 'react';

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf: number;
    let startTime = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const LINES = 28;
    const PERIOD = 50000; // 50 s per full rotation — very slow

    const draw = (ts: number) => {
      if (!startTime) startTime = ts;
      const elapsed = ts - startTime;

      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      // Globe center — lower-center, matching the image
      const cx = W / 2;
      const cy = H * 0.76;
      const R = Math.max(W, H) * 0.46;

      const theta = (elapsed / PERIOD) * Math.PI * 2;

      for (let i = 0; i < LINES; i++) {
        const phi = (i / LINES) * Math.PI * 2 + theta;
        const sinPhi = Math.sin(phi);
        const absCos = Math.abs(Math.cos(phi));

        // x-center of this longitude ellipse
        const xc = cx + R * sinPhi;
        // Apparent width of the ellipse (0 when edge-on, R when face-on)
        const rx = R * absCos;
        // Height stays full radius
        const ry = R;

        // Opacity: lines near the center of the globe face are most visible
        const opacity = (1 - Math.abs(sinPhi) * 0.62) * 0.13;
        if (opacity < 0.004) continue;

        ctx.beginPath();
        ctx.ellipse(xc, cy, Math.max(rx, 0.5), ry, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(115, 105, 145, ${opacity.toFixed(3)})`;
        ctx.lineWidth = 0.65;
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
      aria-hidden="true"
    />
  );
}
