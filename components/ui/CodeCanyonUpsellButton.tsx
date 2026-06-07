'use client';

import { useState, useEffect } from 'react';

export interface CodeCanyonUpsellProps {
  codecanyonUrl: string;
  regularPrice: number;
  bundlePrice: number;
  bundleCheckoutUrl: string;
  bundleItems: string[];
  bundleLabel?: string;
  accentColor?: string;
  className?: string;
  children: React.ReactNode;
}

function isInIframe(): boolean {
  try {
    return window.self !== window.top;
  } catch {
    return true;
  }
}

function Modal({
  onClose,
  codecanyonUrl,
  regularPrice,
  bundlePrice,
  bundleCheckoutUrl,
  bundleItems,
  bundleLabel = 'Everything Bundle',
  accentColor = '#059669',
}: Omit<CodeCanyonUpsellProps, 'className' | 'children'> & { onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const diff = bundlePrice - regularPrice;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative w-full max-w-[480px] rounded-2xl overflow-hidden shadow-2xl bg-white">
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
          <p className="text-[12px] font-bold uppercase tracking-widest mb-1" style={{ color: `${accentColor}cc` }}>
            Wait — before you go
          </p>
          <h2 className="text-[22px] font-bold text-white leading-tight">
            Get the full bundle for just{' '}
            <span style={{ color: accentColor }}>${diff} more</span>
          </h2>
          <p className="text-[13px] text-white/60 mt-1.5">
            Instead of the regular license at ${regularPrice}, upgrade to the {bundleLabel} at ${bundlePrice} and get everything.
          </p>
        </div>

        {/* Bundle items */}
        <div className="px-7 py-5 border-b border-[#E5E7EC]">
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#9ca3af] mb-3">
            You also get with the bundle
          </p>
          <div className="flex flex-col gap-2.5">
            {bundleItems.map((item) => (
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
              <p className="text-[11px] text-[#6b7280]">{bundleLabel}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-[26px] font-bold text-[#0f2620]">${bundlePrice}</span>
                <span className="text-[13px] line-through text-[#9ca3af]">${regularPrice}</span>
              </div>
            </div>
            <span
              className="text-[11px] font-bold px-2.5 py-1 rounded-full"
              style={{ background: `${accentColor}20`, color: accentColor }}
            >
              +${diff} only
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="px-7 py-5 flex flex-col gap-3">
          <a
            href={bundleCheckoutUrl}
            className="flex items-center justify-center gap-2 text-white font-bold text-[15px] rounded-xl py-3.5 transition-all hover:opacity-90 hover:-translate-y-0.5"
            style={{ background: accentColor, boxShadow: `0 8px 24px ${accentColor}45` }}
          >
            Get {bundleLabel} — ${bundlePrice}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href={codecanyonUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="text-center text-[13px] text-[#6b7280] underline underline-offset-4 decoration-[#d1d5db] hover:text-[#374151] transition-colors py-1"
          >
            No thanks, continue to CodeCanyon (${regularPrice})
          </a>
        </div>
      </div>
    </div>
  );
}

export default function CodeCanyonUpsellButton({
  codecanyonUrl,
  regularPrice,
  bundlePrice,
  bundleCheckoutUrl,
  bundleItems,
  bundleLabel,
  accentColor,
  className,
  children,
}: CodeCanyonUpsellProps) {
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (isInIframe()) return;
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <>
      <a
        href={codecanyonUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={className}
      >
        {children}
      </a>

      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          codecanyonUrl={codecanyonUrl}
          regularPrice={regularPrice}
          bundlePrice={bundlePrice}
          bundleCheckoutUrl={bundleCheckoutUrl}
          bundleItems={bundleItems}
          bundleLabel={bundleLabel}
          accentColor={accentColor}
        />
      )}
    </>
  );
}
