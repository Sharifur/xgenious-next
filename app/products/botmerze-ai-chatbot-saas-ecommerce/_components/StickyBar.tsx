'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { COLOR, CODECANYON_URL, REGULAR_PRICE, DEMO_URL } from './constants';

export default function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 transition-transform duration-300"
      style={{ transform: visible ? 'translateY(0)' : 'translateY(-100%)' }}
    >
      <div className="bg-white/95 backdrop-blur-md border-b border-[#E5E7EC] shadow-sm">
        <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1200px] mx-auto flex items-center justify-between gap-4 py-3">
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
              className="inline-flex items-center gap-1.5 text-white font-semibold text-[13px] rounded-full px-5 py-2 transition-all hover:opacity-90"
              style={{ background: COLOR }}
            >
              {`Get Botmerze — $${REGULAR_PRICE}`}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
