'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { COLOR, PURCHASE_URL, DEMO_URL, REGULAR_PRICE } from './constants';

export default function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#E5E7EC] shadow-[0_-4px_24px_rgba(0,0,0,0.08)] transition-transform"
      style={{ background: '#fff' }}
    >
      <div className="container-page px-4 sm:px-6 lg:px-0 py-3 flex items-center justify-between gap-4 flex-wrap">

        <div className="flex items-center gap-3 min-w-0">
          <Image src="/icons/xilancer-logo.svg" alt="Xilancer" width={100} height={19} className="flex-shrink-0" />
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="12" height="12" viewBox="0 0 20 20" fill={i < 4 ? '#F59E0B' : '#E5E7EB'}>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-[12px] text-[#6b7280]">4.36 · 45 reviews · 450+ installs</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <Link
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0F1112] border border-[#E5E7EC] rounded-full px-4 py-2 hover:bg-[#f9fafb] transition-colors"
          >
            View Demo
          </Link>
          <Link
            href={PURCHASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-semibold text-[13px] rounded-full px-5 py-2.5 transition-all hover:opacity-90"
            style={{ background: COLOR }}
          >
            {`Get Xilancer — from $${REGULAR_PRICE}`}
          </Link>
        </div>

      </div>
    </div>
  );
}
