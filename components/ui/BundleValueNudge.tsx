'use client';

import { useEffect, useMemo, useState } from 'react';

function hexToRgb(hex: string) {
  const num = parseInt(hex.replace('#', ''), 16);
  return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
}

function rgbToHex(r: number, g: number, b: number) {
  return `#${[r, g, b].map((c) => Math.max(0, Math.min(255, Math.round(c))).toString(16).padStart(2, '0')).join('')}`;
}

// WCAG relative luminance — used to tell whether white text on this color will actually be readable.
function relativeLuminance({ r, g, b }: { r: number; g: number; b: number }) {
  const lin = (c: number) => {
    const v = c / 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}

// Brand accent colors are tuned for use on white backgrounds, not as a solid panel behind white text
// (e.g. Nazmart's bright lime is unreadable that way). Darken toward black until white text has real contrast.
function contrastSafePanelColor(hex: string) {
  let { r, g, b } = hexToRgb(hex);
  let steps = 0;
  while (relativeLuminance({ r, g, b }) > 0.28 && steps < 8) {
    r *= 0.88;
    g *= 0.88;
    b *= 0.88;
    steps += 1;
  }
  return rgbToHex(r, g, b);
}

interface BundleValueNudgeProps {
  productName: string;
  regularPrice: number;
  bundlePrice: number;
  bundleLabel: string;
  /** Short, real (not invented) summary of what the bundle adds over the regular license — reuse the same copy already used in that product's own Pricing section. */
  bundleHighlight: string;
  storageKey: string;
  accentColor?: string;
  delayMs?: number;
}

function scrollToPricing(e: React.MouseEvent) {
  e.preventDefault();
  document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function BundleValueNudge({
  productName,
  regularPrice,
  bundlePrice,
  bundleLabel,
  bundleHighlight,
  storageKey,
  accentColor = '#F2542D',
  delayMs = 12000,
}: BundleValueNudgeProps) {
  const [eligible, setEligible] = useState(false);
  const [visible, setVisible] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(storageKey) === '1') return;
    } catch {
      /* storage blocked — still show */
    }
    setEligible(true);
    const timer = setTimeout(() => setVisible(true), delayMs);
    return () => clearTimeout(timer);
  }, [storageKey, delayMs]);

  useEffect(() => {
    if (!visible) return;
    const raf = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(raf);
  }, [visible]);

  const panelColor = useMemo(() => contrastSafePanelColor(accentColor), [accentColor]);

  if (!eligible || !visible) return null;

  const diff = bundlePrice - regularPrice;

  const dismiss = () => {
    setShown(false);
    setTimeout(() => setVisible(false), 200);
    try { sessionStorage.setItem(storageKey, '1'); } catch { /* storage blocked */ }
  };

  const handleCta = (e: React.MouseEvent) => {
    scrollToPricing(e);
    dismiss();
  };

  return (
    <div
      className={`fixed z-40 bottom-[240px] right-4 md:right-6 w-[min(92vw,320px)] transition-all duration-200 ease-out ${
        shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
      }`}
      role="complementary"
      aria-label={`${productName} bundle value tip`}
    >
      <div className="relative bg-white rounded-2xl shadow-2xl ring-1 ring-black/5 overflow-hidden">
        <button
          onClick={dismiss}
          aria-label="Dismiss"
          className="absolute right-2.5 top-2.5 w-6 h-6 flex items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/15 transition-colors cursor-pointer z-10"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Header */}
        <div className="px-4 pt-4 pb-3.5" style={{ background: panelColor }}>
          <p className="text-[10.5px] font-bold uppercase tracking-widest text-white/75 mb-1">
            Before you go
          </p>
          <h3 className="text-[15px] font-bold text-white leading-snug pr-4">
            {productName} {bundleLabel} — for ${diff} more
          </h3>
        </div>

        {/* Body */}
        <div className="px-4 pt-3.5 pb-4">
          <div className="flex items-baseline gap-2">
            <span className="text-[24px] font-bold text-[#0F1112] leading-none">${bundlePrice}</span>
            <span className="text-[13px] line-through text-[#9ca3af]">${regularPrice}</span>
            <span className="text-[11px] font-bold text-[#16a34a]">Same purchase</span>
          </div>

          <div className="flex items-start gap-1.5 mt-2.5">
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 mt-0.5">
              <circle cx="10" cy="10" r="10" fill="#dcfce7" />
              <path d="M6 10l3 3 5-5" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="text-[12.5px] text-[#4b5563] leading-snug">
              You&apos;d be leaving on the table: <span className="font-semibold text-[#374151]">{bundleHighlight}</span>
            </p>
          </div>

          <a
            href="#pricing"
            onClick={handleCta}
            className="mt-3.5 w-full inline-flex items-center justify-center gap-1.5 text-white text-[13px] font-bold rounded-xl py-2.5 transition-transform hover:-translate-y-0.5"
            style={{ background: panelColor, boxShadow: `0 6px 16px ${panelColor}40` }}
          >
            See the bundle
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
