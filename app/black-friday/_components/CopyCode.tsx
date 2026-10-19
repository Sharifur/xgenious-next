'use client';

import { useEffect, useRef, useState } from 'react';
type Variant = 'hero' | 'step' | 'final';

export default function CopyCode({ variant, coupon }: { variant: Variant; coupon: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = () => {
    navigator.clipboard?.writeText(coupon).catch(() => {});
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1800);
  };
  const label = copied ? 'Copied' : 'Copy';

  if (variant === 'hero') {
    return (
      <div className="coupon">
        <div className="stack" style={{ gap: 2 }}><small>Coupon code</small><strong>{coupon}</strong></div>
        <button type="button" className="copy" onClick={copy}>{label}</button>
      </div>
    );
  }
  if (variant === 'step') {
    return (
      <div className="mini"><span>{coupon}</span><button type="button" onClick={copy}>{label}</button></div>
    );
  }
  return (
    <button type="button" className="copy-lg" onClick={copy}>{coupon} <span>{label}</span></button>
  );
}
