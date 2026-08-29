'use client';

import { useEffect, useState } from 'react';
import DownloadButton from '@/components/ui/DownloadButton';
import { COLOR, LIGHT_COLOR, GITHUB_URL, LICENSE_UUID } from './constants';

export default function StickyDownload() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      const scrolledPastHero = window.scrollY > 700;
      const nearFooter = document.body.scrollHeight - (window.scrollY + window.innerHeight) < 800;
      setVisible(scrolledPastHero && !nearFooter);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 transition-all duration-300"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transform: `translate(-50%, ${visible ? '0' : '16px'})`,
      }}
    >
      <div className="flex items-center gap-3 bg-white rounded-full border border-[#E5E7EC] shadow-lg pl-5 pr-2 py-2">
        <span className="hidden sm:block text-[13px] font-medium text-[#0F1112]">
          Free, MIT licensed, 0% commission
        </span>
        <DownloadButton
          productName="Genius Commerz"
          productColor={COLOR}
          productLightColor={LIGHT_COLOR}
          githubUrl={GITHUB_URL}
          licenseUuid={LICENSE_UUID}
          label="Download .zip"
          buttonColor={COLOR}
          className="cursor-pointer inline-flex items-center gap-2 text-white font-semibold text-[13px] rounded-full px-5 py-2.5 transition-all hover:-translate-y-0.5"
        />
      </div>
    </div>
  );
}
