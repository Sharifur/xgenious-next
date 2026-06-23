'use client';

import { useEffect, useRef, useState } from 'react';
import { PROMO_CODE } from '@/lib/fastspring';

const STORAGE_KEY = 'xg-promo-welcome10-dismissed';

export default function PromoBanner() {
  const [dismissed, setDismissed] = useState(true);
  const [copied, setCopied] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setDismissed(localStorage.getItem(STORAGE_KEY) === '1');
  }, []);

  // Publish the bar's height as a CSS var so the fixed Navbar and page
  // content can offset themselves beneath it.
  useEffect(() => {
    const root = document.documentElement;
    if (dismissed || !barRef.current) {
      root.style.setProperty('--promo-h', '0px');
      return;
    }
    const el = barRef.current;
    const setVar = () => root.style.setProperty('--promo-h', `${el.offsetHeight}px`);
    setVar();
    const ro = new ResizeObserver(setVar);
    ro.observe(el);
    return () => {
      ro.disconnect();
      root.style.setProperty('--promo-h', '0px');
    };
  }, [dismissed]);

  if (dismissed) return null;

  const dismiss = () => {
    setDismissed(true);
    localStorage.setItem(STORAGE_KEY, '1');
  };

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(PROMO_CODE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — code is still visible */
    }
  };

  return (
    <div
      ref={barRef}
      className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-[#FF7A45] via-[#F2542D] to-[#FF7A45] text-white shadow-sm"
    >
      <div className="mx-auto max-w-7xl px-4 py-2.5 pr-10 flex items-center justify-center gap-x-2.5 gap-y-1 flex-wrap text-center text-[13px] sm:text-[14px] leading-snug font-medium">
        <span className="inline-flex items-center gap-1.5">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="shrink-0" aria-hidden>
            <path d="M20.59 13.41 12 22l-9-9V3h10l7.59 7.59a2 2 0 0 1 0 2.82Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <circle cx="7.5" cy="7.5" r="1.5" fill="currentColor" />
          </svg>
          <span className="font-bold">Save 10% on every Xgenious product</span>
        </span>
        <span className="hidden sm:inline text-white/90">— auto-applied with code</span>
        <button
          onClick={copyCode}
          className="group inline-flex items-center gap-1.5 font-mono font-bold tracking-wide rounded-md bg-white text-[#D83A1A] hover:bg-white/90 transition-colors px-2 py-0.5 cursor-pointer shadow-sm"
          aria-label={`Copy coupon code ${PROMO_CODE}`}
        >
          {PROMO_CODE}
          {copied && (
            <span className="text-[11px] font-sans font-semibold text-[#D83A1A]/70">✓ Copied</span>
          )}
        </button>
        <span className="hidden sm:inline text-white/90">— no code needed at checkout</span>
      </div>
      <button
        onClick={dismiss}
        aria-label="Dismiss promotion"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors cursor-pointer"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
