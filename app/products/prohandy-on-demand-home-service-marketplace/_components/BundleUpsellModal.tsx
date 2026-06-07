'use client';

import { useEffect } from 'react';
import { COLOR, CODECANYON_URL, REGULAR_PRICE, COMBO_PRICE } from './constants';

const UPSELL_ITEMS = [
  'Client Flutter Mobile App',
  'Provider Flutter Mobile App',
  'WhatsApp Order Plugin',
];

interface Props {
  onClose: () => void;
}

export default function BundleUpsellModal({ onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const diff = COMBO_PRICE - REGULAR_PRICE;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative w-full max-w-[480px] rounded-2xl overflow-hidden shadow-2xl"
        style={{ background: '#fff' }}
      >
        {/* Header */}
        <div className="px-7 pt-7 pb-5" style={{ background: '#0f2620' }}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full transition-colors hover:bg-white/10"
            aria-label="Close"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          <p className="text-[12px] font-bold uppercase tracking-widest mb-1" style={{ color: `${COLOR}cc` }}>
            Wait — before you go
          </p>
          <h2 className="text-[22px] font-bold text-white leading-tight">
            Get the full bundle for just <span style={{ color: COLOR }}>${diff} more</span>
          </h2>
          <p className="text-[13px] text-white/60 mt-1.5">
            Instead of the regular license at ${REGULAR_PRICE}, upgrade to the Everything Bundle at ${COMBO_PRICE} and get everything.
          </p>
        </div>

        {/* Bundle items */}
        <div className="px-7 py-5 border-b border-[#E5E7EC]">
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#9ca3af] mb-3">
            You also get with the bundle
          </p>
          <div className="flex flex-col gap-2.5">
            {UPSELL_ITEMS.map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="flex-shrink-0">
                  <circle cx="10" cy="10" r="10" fill="#dcfce7" />
                  <path d="M6 10l3 3 5-5" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[13px] font-medium text-[#374151]">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl px-4 py-3 flex items-center justify-between" style={{ background: '#f0fdf4' }}>
            <div>
              <p className="text-[11px] text-[#6b7280]">Everything Bundle</p>
              <div className="flex items-baseline gap-2">
                <span className="text-[26px] font-bold" style={{ color: '#0f2620' }}>${COMBO_PRICE}</span>
                <span className="text-[13px] line-through text-[#9ca3af]">${REGULAR_PRICE}</span>
              </div>
            </div>
            <span
              className="text-[11px] font-bold px-2.5 py-1 rounded-full"
              style={{ background: `${COLOR}20`, color: COLOR }}
            >
              Save ${166 - COMBO_PRICE}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="px-7 py-5 flex flex-col gap-3">
          <a
            href="/checkout?product=prohandy-everything-bundle"
            className="flex items-center justify-center gap-2 text-white font-bold text-[15px] rounded-xl py-3.5 transition-all hover:opacity-90 hover:-translate-y-0.5"
            style={{ background: COLOR, boxShadow: `0 8px 24px ${COLOR}45` }}
          >
            Get Everything Bundle — ${COMBO_PRICE}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <a
            href={CODECANYON_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="text-center text-[13px] text-[#6b7280] underline underline-offset-4 decoration-[#d1d5db] hover:text-[#374151] transition-colors py-1"
          >
            No thanks, continue to CodeCanyon (${REGULAR_PRICE})
          </a>
        </div>
      </div>
    </div>
  );
}
