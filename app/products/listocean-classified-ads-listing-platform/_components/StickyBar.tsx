'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { COLOR, DEMO_URL, REGULAR_PRICE } from './constants';

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
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#E5E7EC] shadow-[0_-4px_24px_rgba(0,0,0,0.08)]"
      style={{ background: '#fff' }}
    >
      <div className="container-page px-4 sm:px-6 lg:px-0 py-3 flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-[15px] font-bold text-[#0F1112]">ListOcean</span>
          <span className="hidden sm:inline text-[12px] text-[#6b7280]">
            Classified Ads &amp; Listing Platform · One-time license
          </span>
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
          <a
            href="#pricing"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-white font-semibold text-[13px] rounded-full px-5 py-2.5 transition-all hover:opacity-90 cursor-pointer"
            style={{ background: COLOR }}
          >
            {`Purchase — from $${REGULAR_PRICE}`}
          </a>
        </div>
      </div>
    </div>
  );
}
