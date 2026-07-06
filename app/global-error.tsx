'use client';
import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    const isChunkError = /ChunkLoadError|Loading chunk|Failed to load chunk/i.test(error.message);
    if (isChunkError) {
      const key = `chunk-reload:${window.location.pathname}`;
      if (!sessionStorage.getItem(key)) {
        sessionStorage.setItem(key, '1');
        window.location.reload();
      }
      return;
    }
    fetch('/api/crash-report', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'Root layout crash',
        message: error.message,
        stack: error.stack ?? '',
        url: typeof window !== 'undefined' ? window.location.href : '',
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
        digest: error.digest ?? '',
      }),
    }).catch(() => {});
  }, [error]);

  return (
    <html lang="en">
      <body style={{ fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', margin: 0, background: '#f9fafb' }}>
        <div style={{ textAlign: 'center', padding: '40px 24px', maxWidth: 480 }}>
          <div style={{ width: 56, height: 56, borderRadius: 16, background: '#ec7161', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M12 8v4M12 16h.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h1 style={{ fontSize: 24, fontWeight: 700, color: '#0F1112', margin: '0 0 12px' }}>Something went wrong</h1>
          <p style={{ color: '#6b7280', fontSize: 14, lineHeight: 1.6, margin: '0 0 24px' }}>
            An unexpected error occurred. Our team has been notified automatically.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={reset}
              style={{ padding: '10px 24px', background: '#0F1112', color: '#fff', border: 'none', borderRadius: 999, fontWeight: 600, fontSize: 14, cursor: 'pointer' }}
            >
              Try Again
            </button>
            <a
              href="/"
              style={{ padding: '10px 24px', background: '#fff', color: '#0F1112', border: '1px solid #e5e7ec', borderRadius: 999, fontWeight: 600, fontSize: 14, textDecoration: 'none' }}
            >
              Go Home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
