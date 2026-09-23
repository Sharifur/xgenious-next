'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { COLOR, CODECANYON_URL, REGULAR_PRICE, DEMO_URL } from './constants';

export default function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#E5E7EC] shadow-[0_-4px_24px_rgba(0,0,0,0.08)]"
      style={{ background: '#fff' }}
    >
      <div className="container-page px-4 sm:px-6 lg:px-0 flex items-center justify-between gap-4 py-3">
        <div className="flex items-center gap-3 min-w-0">
          <span className="font-bold text-[15px] text-[#0F1112] truncate">Botmerze</span>
          <span className="hidden sm:block text-[13px] text-[#6b7280] truncate">AI Chatbot SaaS for WooCommerce & Shopify</span>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <Link
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-[13px] font-semibold px-4 py-2 rounded-full border border-[#E5E7EC] text-[#374151] hover:bg-[#f9fafb] transition-colors"
          >
            Live Demo
          </Link>
          <a
            href="#pricing"
            onClick={(e) => { e.preventDefault(); document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center gap-1.5 text-white font-semibold text-[13px] rounded-full px-5 py-2 transition-all hover:opacity-90 cursor-pointer"
            style={{ background: COLOR }}
          >
            {`Get Botmerze — $${REGULAR_PRICE}`}
          </a>
        </div>
      </div>
    </div>
  );
}
