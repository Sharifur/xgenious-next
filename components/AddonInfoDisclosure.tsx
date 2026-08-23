'use client';
import { useEffect, useRef, useState } from 'react';
import type { CheckoutAddon } from '@/lib/checkout-products';

export default function AddonInfoDisclosure({ addon }: { addon: CheckoutAddon }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  if (!addon.includes?.length && !addon.excludes?.length) return null;

  return (
    <span ref={wrapperRef} className="relative inline-flex">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={`What's included in ${addon.label}`}
        aria-expanded={open}
        className={`inline-flex items-center justify-center w-4 h-4 rounded-full border text-[10px] font-semibold transition-colors flex-shrink-0 cursor-pointer ${
          open ? 'border-[#ec7161] text-[#ec7161] bg-[#ec7161]/10' : 'border-gray-300 text-gray-400 hover:border-[#ec7161] hover:text-[#ec7161]'
        }`}
      >
        i
      </button>

      {open && (
        <div className="absolute z-30 top-full left-0 mt-2 w-64 max-w-[85vw] p-3 bg-white rounded-lg border border-gray-200 shadow-lg text-xs space-y-2.5">
          <div className="absolute -top-1.5 left-2 w-3 h-3 bg-white border-l border-t border-gray-200 rotate-45" />
          {addon.includes && addon.includes.length > 0 && (
            <div>
              <p className="font-medium text-gray-500 mb-1.5">What's included</p>
              <ul className="space-y-1">
                {addon.includes.map((item) => (
                  <li key={item} className="flex items-start gap-1.5 text-gray-600">
                    <svg className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {addon.excludes && addon.excludes.length > 0 && (
            <div>
              <p className="font-medium text-gray-500 mb-1.5">Not included</p>
              <ul className="space-y-1">
                {addon.excludes.map((item) => (
                  <li key={item} className="flex items-start gap-1.5 text-gray-400">
                    <svg className="w-3.5 h-3.5 text-gray-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </span>
  );
}
