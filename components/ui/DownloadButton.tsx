'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  productName: string;
  productColor: string;
  productLightColor: string;
  githubUrl: string;
  label?: string;
  className?: string;
  buttonColor?: string;
}

function DownloadModal({
  productName,
  productColor,
  productLightColor,
  githubUrl,
  onClose,
}: Omit<Props, 'label' | 'className'> & { onClose: () => void }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/download-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, product: productName, downloadUrl: githubUrl }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? 'Something went wrong.');
      setSubmittedEmail(email);
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  }

  return createPortal(
    <>
    <div className="fixed inset-0 z-[9999]" onClick={onClose} style={{ background: 'rgba(15,17,18,0.7)', backdropFilter: 'blur(4px)' }} />
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 pointer-events-none">
      <div className="bg-white rounded-2xl w-full max-w-md p-8 relative shadow-2xl pointer-events-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-[#6b7280] hover:text-[#0F1112] hover:bg-[#f3f4f6] transition-colors"
          aria-label="Close"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {done ? (
          <div className="flex flex-col items-center text-center gap-4 py-4">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center"
              style={{ background: productLightColor, color: productColor }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <h3 className="text-[20px] font-semibold text-[#0F1112]">Check your inbox</h3>
              <p className="text-[14px] text-[#484848] mt-1 leading-6">
                Download link sent to <strong>{submittedEmail}</strong>. Check spam if it does not arrive within a few minutes.
              </p>
            </div>
            <button
              onClick={onClose}
              className="mt-2 text-[13px] text-[#6b7280] underline underline-offset-2"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <p className="text-[12px] font-medium text-[#6b7280] mb-1">Downloading</p>
              <h3 className="text-[18px] font-semibold text-[#0F1112]">{productName}</h3>
              <p className="text-[13px] text-[#484848] mt-2 leading-5">
                Enter your name and email — we&apos;ll send the download link straight to your inbox.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-medium text-[#0F1112] text-left">
                  Full Name <span style={{ color: productColor }}>*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="John Doe"
                  className="rounded-xl border border-[#E5E7EC] px-4 py-3 text-[14px] text-[#0F1112] placeholder:text-[#9ca3af] outline-none transition-colors"
                  onFocus={(e) => (e.target.style.borderColor = productColor)}
                  onBlur={(e) => (e.target.style.borderColor = '#E5E7EC')}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-medium text-[#0F1112] text-left">
                  Email Address <span style={{ color: productColor }}>*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@example.com"
                  className="rounded-xl border border-[#E5E7EC] px-4 py-3 text-[14px] text-[#0F1112] placeholder:text-[#9ca3af] outline-none transition-colors"
                  onFocus={(e) => (e.target.style.borderColor = productColor)}
                  onBlur={(e) => (e.target.style.borderColor = '#E5E7EC')}
                />
              </div>

              {error && <p className="text-[13px] text-red-500">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 text-white font-semibold text-[14px] rounded-full px-8 py-3.5 transition-all hover:-translate-y-0.5 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  background: '#ec7161',
                  boxShadow: loading ? 'none' : '0 8px 24px #ec716140',
                }}
              >
                {loading ? 'Sending...' : (
                  <>
                    Send Download Link
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </>
                )}
              </button>

              <p className="text-[11px] text-[#9ca3af] text-center">
                MIT licensed · Free forever · No credit card
              </p>
            </form>
          </>
        )}
      </div>
    </div>
    </>,
    document.body
  );
}

export default function DownloadButton({
  productName,
  productColor,
  productLightColor,
  githubUrl,
  label = 'Download Free',
  className,
  buttonColor,
}: Props) {
  const [open, setOpen] = useState(false);
  const btnBg = buttonColor ?? productColor;

  return (
    <>
      {open && (
        <DownloadModal
          productName={productName}
          productColor={productColor}
          productLightColor={productLightColor}
          githubUrl={githubUrl}
          onClose={() => setOpen(false)}
        />
      )}
      <button
        onClick={() => setOpen(true)}
        className={className ?? 'inline-flex items-center gap-2 text-white font-semibold text-[14px] rounded-full px-7 py-3.5 transition-all hover:-translate-y-0.5'}
        style={{
          background: btnBg,
          boxShadow: `0 6px 20px ${btnBg}35`,
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {label}
      </button>
    </>
  );
}
