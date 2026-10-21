'use client';

import { useEffect, useState } from 'react';

type Variant = 'boxes' | 'clock' | 'term';

const p2 = (n: number) => String(n).padStart(2, '0');

function useRemaining(endsAt: string) {
  const [left, setLeft] = useState<number | null>(null);
  useEffect(() => {
    const end = new Date(endsAt).getTime();
    const tick = () => setLeft(Math.max(0, Math.floor((end - Date.now()) / 1000)));
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, [endsAt]);
  if (left === null) return { d: '--', h: '--', m: '--', s: '--' };
  return { d: p2(Math.floor(left / 86400)), h: p2(Math.floor((left % 86400) / 3600)), m: p2(Math.floor((left % 3600) / 60)), s: p2(left % 60) };
}

export default function Countdown({ endsAt, variant, label = 'Time left' }: { endsAt: string; variant: Variant; label?: string }) {
  const { d, h, m, s } = useRemaining(endsAt);
  if (variant === 'boxes') {
    return (
      <div className="boxes" role="timer" aria-label={label}>
        {[[d, 'days'], [h, 'hours'], [m, 'mins']].map(([v, l]) => (
          <div className="box" key={l}><b>{v}</b><span>{l}</span></div>
        ))}
        <div className="box hot"><b>{s}</b><span>secs</span></div>
      </div>
    );
  }
  return (
    <span role="timer" suppressHydrationWarning>
      {d}d {h}:{m}:{variant === 'term' ? <span style={{ color: 'var(--accent)' }}>{s}</span> : s}
    </span>
  );
}
