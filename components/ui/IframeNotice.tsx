'use client';

import { useEffect, useState } from 'react';

export default function IframeNotice() {
  const [isIframe, setIsIframe] = useState(false);
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (window.self !== window.top) {
      setIsIframe(true);
      setUrl(window.location.href);
    }
  }, []);

  if (!isIframe) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[99999] bg-[#0F1112] text-white px-4 py-2.5 flex items-center justify-between gap-3 shadow-lg">
      <p className="text-[13px] text-gray-300 leading-snug">
        You&apos;re viewing this site inside a preview frame. Some features may be limited.
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 inline-flex items-center gap-1.5 bg-white text-[#0F1112] text-[12px] font-semibold rounded-full px-4 py-1.5 hover:bg-gray-100 transition-colors"
      >
        Open in new tab
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </div>
  );
}
