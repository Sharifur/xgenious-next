'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface StatCounterProps {
  value: number;
  suffix: string;
  label: string;
}

export default function StatCounter({ value, suffix, label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1700;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.floor(value * eased));
      if (t < 1) requestAnimationFrame(tick);
      else setCount(value);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <div ref={ref} className={label ? 'flex flex-col items-start text-left' : 'inline'}>
      <span className="text-[44px] lg:text-[52px] leading-none font-semibold text-white tabular-nums tracking-[-0.02em]">
        {count.toLocaleString()}
        {suffix}
      </span>
      {label && (
        <span className="mt-3 text-[13px] text-[#A6A6A6] font-medium">{label}</span>
      )}
    </div>
  );
}
