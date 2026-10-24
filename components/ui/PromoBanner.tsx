'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { PROMO_CODE, PROMO_HIDDEN_PATHS } from '@/lib/fastspring';
import { activeCampaign, type Campaign } from '@/app/black-friday/_components/data';

const STORAGE_KEY = 'xg-promo-welcome10-dismissed';

function PumpkinIcon() {
  return (
    <svg width="26" height="24" viewBox="0 0 60 56" className="shrink-0" aria-hidden>
      <path d="M30 12c-2-5-1-9 3-11" stroke="#6bbf4e" strokeWidth="4" fill="none" strokeLinecap="round" />
      <ellipse cx="17" cy="33" rx="14" ry="20" fill="#e8620c" />
      <ellipse cx="43" cy="33" rx="14" ry="20" fill="#e8620c" />
      <ellipse cx="30" cy="33" rx="15" ry="22" fill="#ff7a1a" />
      <path d="M30 13c-4 12-4 28 0 42" stroke="#c9500a" strokeWidth="2" fill="none" />
      <path d="M14 26l7 6H7zM46 26l7 6H39z" fill="#0f0814" />
      <path d="M16 42c4 7 24 7 28 0-4 2-6 0-8 3-3 2-9 2-12 0-2-3-4-1-8-3z" fill="#0f0814" />
    </svg>
  );
}

function TagIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="shrink-0" aria-hidden>
      <path d="M20.59 13.41 12 22l-9-9V3h10l7.59 7.59a2 2 0 0 1 0 2.82Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="7.5" cy="7.5" r="1.5" fill="currentColor" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70" aria-hidden>
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15V6a2 2 0 0 1 2-2h9" />
    </svg>
  );
}

const endLabel = (c: Campaign) =>
  new Date(c.endsAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' });

type Theme = 'default' | 'hw' | 'bf' | 'cm';

export default function PromoBanner() {
  // null = storage not read yet (SSR + first client render). In that state the layout's
  // inline --promo-h estimate must stay untouched, otherwise hydration wipes the reserved
  // space and the page shifts twice (0 → banner height).
  const [dismissedStorage, setDismissedStorage] = useState<boolean | null>(null);
  const [copied, setCopied] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  // Checkout auto-applies the coupon itself and campaign pages advertise their
  // own coupon, so the banner is redundant or conflicting there — hide it.
  const isHidden = PROMO_HIDDEN_PATHS.some((p) => pathname?.startsWith(p));
  const dismissed = dismissedStorage !== false || isHidden;
  // Only read after mount (dismissed is true until then), so SSR and hydration never see it.
  const campaign = activeCampaign(new Date());
  const theme: Theme = campaign?.theme ?? 'default';
  const code = campaign?.coupon ?? PROMO_CODE;
  // One dismissal per campaign, so closing WELCOME_10 doesn't hide a later sale.
  const storageKey = campaign ? `xg-promo-${campaign.name.toLowerCase().replace(/\s+/g, '-')}-dismissed` : STORAGE_KEY;

  useEffect(() => {
    try {
      setDismissedStorage(localStorage.getItem(storageKey) === '1');
    } catch {
      /* storage blocked (privacy mode / enterprise policy) — show banner */
      setDismissedStorage(false);
    }
  }, [storageKey]);

  // Publish the bar's height as a CSS var so the fixed Navbar and page
  // content can offset themselves beneath it.
  useEffect(() => {
    const root = document.documentElement;
    if (dismissedStorage === null && !isHidden) return;
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
  }, [dismissed, dismissedStorage, isHidden]);

  if (dismissed) return null;

  const dismiss = () => {
    setDismissedStorage(true);
    try { localStorage.setItem(storageKey, '1'); } catch { /* storage blocked */ }
  };

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — code is still visible */
    }
  };

  const copiedLabel = copied && <span className="text-[11px] font-sans font-semibold opacity-70">✓ Copied</span>;
  const codeBase = 'inline-flex items-center gap-1.5 font-mono font-bold tracking-wide transition-colors cursor-pointer';

  const bar: Record<Theme, string> = {
    default: 'bg-gradient-to-r from-[#FF7A45] via-[#F2542D] to-[#FF7A45]',
    hw: 'bg-gradient-to-r from-[#0F0814] via-[#24152F] to-[#0F0814] border-b-2 border-[#FF7A1A]',
    bf: 'bg-[#0A0A0A] border-b-[3px] border-[#F06B55]',
    cm: 'bg-[#0A0C2A] bg-[radial-gradient(60%_220%_at_50%_0,rgba(169,173,255,.22),transparent_70%),radial-gradient(rgba(169,173,255,.16)_1px,transparent_1.2px)] bg-[length:100%_100%,14px_14px] border-b-2 border-[#A9ADFF] shadow-[0_2px_18px_rgba(169,173,255,.25)]',
  };

  const content: Record<Theme, React.ReactNode> = {
    default: (
      <>
        <span className="inline-flex items-center gap-1.5">
          <TagIcon size={15} />
          <span className="font-bold">Save 10% on every Xgenious product</span>
        </span>
        <span className="hidden sm:inline text-white/90">— auto-applied with code</span>
        <button
          onClick={copyCode}
          className={`${codeBase} rounded-md bg-white text-[#D83A1A] hover:bg-white/90 px-2 py-0.5 shadow-sm`}
          aria-label={`Copy coupon code ${code}`}
        >
          {code}
          {copiedLabel}
        </button>
        <span className="hidden sm:inline text-white/90">— no code needed at checkout</span>
      </>
    ),
    hw: campaign && (
      <>
        <span className="inline-flex items-center gap-2">
          <PumpkinIcon />
          <span className="font-bold">
            Halloween Sale: <span className="text-[#FFA24D]">{campaign.pct}% off</span> every Xgenious product
          </span>
        </span>
        <span className="hidden sm:inline text-[#D6C6E0]">— use code</span>
        <button
          onClick={copyCode}
          className={`${codeBase} rounded-md bg-[#FF7A1A] text-[#0F0814] hover:bg-[#FF8F3D] px-2 py-0.5 shadow-sm`}
          aria-label={`Copy coupon code ${code}`}
        >
          {code}
          {copiedLabel}
        </button>
        <span className="hidden sm:inline text-[#D6C6E0]">· ends {endLabel(campaign)}</span>
      </>
    ),
    bf: campaign && (
      <>
        <span className="self-stretch -ml-4 flex items-center gap-2 bg-[#F06B55] text-[#0A0A0A] font-black text-[11px] sm:text-[12px] tracking-[.16em] uppercase pl-3 sm:pl-4 pr-6 sm:pr-7 [clip-path:polygon(0_0,100%_0,calc(100%-14px)_100%,0_100%)]">
          <TagIcon size={15} />
          {campaign.name}
        </span>
        <span className="py-2 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          <span className="text-[15px] sm:text-[18px] font-extrabold tracking-tight">
            <span className="inline-block -rotate-2 rounded bg-white text-[#0A0A0A] px-1.5 mr-1.5">{campaign.pct}% OFF</span>
            every Xgenious product
          </span>
          <span className="hidden md:inline text-[13px] text-[#A6A6A6]">Scripts, bundles and add-ons</span>
          <button
            onClick={copyCode}
            className={`${codeBase} rounded-md bg-[#1D1D1D] text-white border-[1.5px] border-dashed border-[#F06B55] px-2.5 py-0.5`}
            aria-label={`Copy coupon code ${code}`}
          >
            {code}
            <CopyIcon />
            {copiedLabel}
          </button>
        </span>
        <span className="hidden sm:inline font-bold text-[13px] text-[#F06B55] tabular-nums whitespace-nowrap">
          Ends {endLabel(campaign)}
        </span>
      </>
    ),
    cm: campaign && (
      <>
        <span className="font-mono font-bold text-[11.5px] sm:text-[12.5px] tracking-[.14em] uppercase text-[#A9ADFF] [text-shadow:0_0_10px_rgba(169,173,255,.8)] whitespace-nowrap">
          [ {campaign.name} ]
        </span>
        <span className="text-[15px] sm:text-[18px] font-extrabold tracking-tight">
          <span className="inline-block rounded-[5px] bg-[#A9ADFF] text-[#0A0C2A] px-2 mr-1.5 shadow-[0_0_14px_rgba(169,173,255,.6)]">
            {campaign.pct}% OFF
          </span>
          every Xgenious product
        </span>
        <span className="hidden md:inline text-[13px] text-[#B2B6E6]">Online only · all scripts and bundles</span>
        <button
          onClick={copyCode}
          className={`${codeBase} rounded-md bg-[#0A0C2A]/80 text-[#D7D9FF] border border-[#A9ADFF] px-2.5 py-0.5 hover:bg-[#1B1F58]`}
          aria-label={`Copy coupon code ${code}`}
        >
          <span className="text-[#A9ADFF]">&gt;</span>
          {code}
          <span className="inline-block w-[7px] h-[14px] bg-[#A9ADFF] animate-pulse motion-reduce:animate-none" aria-hidden />
          {copiedLabel}
        </button>
        <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-[#A9ADFF]/40 px-2.5 py-0.5 text-[13px] font-semibold text-[#D7D9FF] whitespace-nowrap">
          <span className="w-[7px] h-[7px] rounded-full bg-[#7DFFB2] shadow-[0_0_8px_#7DFFB2]" aria-hidden />
          Ends {endLabel(campaign)}
        </span>
      </>
    ),
  };

  return (
    <div ref={barRef} className={`fixed top-0 left-0 right-0 z-[60] text-white shadow-sm ${bar[theme]}`}>
      <div className="mx-auto max-w-7xl px-4 py-2.5 pr-10 flex items-center justify-center gap-x-2.5 gap-y-1 flex-wrap text-center text-[13px] sm:text-[14px] leading-snug font-medium">
        {content[theme]}
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
