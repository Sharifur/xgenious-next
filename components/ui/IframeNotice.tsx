'use client';

import { useEffect, useState } from 'react';

export default function IframeNotice() {
  const [isIframe, setIsIframe] = useState(false);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [url, setUrl] = useState('');

  useEffect(() => {
    let inIframe = false;
    try { inIframe = window.self !== window.top; } catch { inIframe = true; }
    if (inIframe) {
      setIsIframe(true);
      setUrl(window.location.href);
      const timer = setTimeout(() => setVisible(true), 4000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isIframe || !visible || dismissed) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-[99998] bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 pointer-events-none">
        <div className="pointer-events-auto bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 flex flex-col items-center text-center">

          {/* Icon */}
          <div className="w-14 h-14 rounded-full bg-[#fef2ef] flex items-center justify-center mb-5">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" stroke="#ec7161" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15 3h6m0 0v6m0-6L10 14" stroke="#ec7161" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <h2 className="text-[20px] font-bold text-[#0F1112] mb-2 leading-snug">
            Get the full experience
          </h2>
          <p className="text-[14px] text-[#6b7280] leading-relaxed mb-6">
            You&apos;re viewing Xgenious inside a preview frame. Open in a new tab for full navigation, live demos, and all features.
          </p>

          {/* Primary CTA */}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#ec7161] text-white text-[15px] font-semibold rounded-full py-3.5 px-8 hover:bg-[#e05e4d] transition-all hover:-translate-y-0.5 shadow-lg shadow-[#ec716140] mb-3"
          >
            Open in New Tab
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          {/* Dismiss */}
          <button
            onClick={() => setDismissed(true)}
            className="text-[13px] text-[#9ca3af] hover:text-[#6b7280] transition-colors cursor-pointer"
          >
            Continue in preview
          </button>
        </div>
      </div>
    </>
  );
}
