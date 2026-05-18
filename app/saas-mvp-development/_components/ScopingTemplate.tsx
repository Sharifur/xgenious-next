'use client';

import { useState } from 'react';

export default function ScopingTemplate() {
  const [email, setEmail]       = useState('');
  const [loading, setLoading]   = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <section className="py-14 sm:py-16" style={{ background: '#fff', borderTop: '1px solid #e7e9ed', borderBottom: '1px solid #e7e9ed' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">

          {/* Left */}
          <div className="flex flex-col gap-3 max-w-[520px] text-center lg:text-left">
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <span className="w-6 h-[2px] bg-[#ec7161] rounded-full" />
              <span className="text-[#ec7161] text-[13px] font-medium">Free Resource</span>
            </div>
            <h2 className="font-semibold text-[#0f1112] text-[22px] leading-[30px] sm:text-[28px] sm:leading-[36px]">
              Get our MVP Scoping Template
            </h2>
            <p className="text-[#484848] text-[14px] sm:text-[15px] leading-[22px] sm:leading-[23px]">
              25 questions every pre-seed and seed-stage founder should answer before quoting any
              development work. Helps you define scope, avoid mid-sprint pivots, and walk into any
              vendor call prepared. No call required.
            </p>
          </div>

          {/* Right — form */}
          <div className="w-full max-w-[420px]">
            {submitted ? (
              <div
                className="flex flex-col items-center gap-3 p-6 rounded-[12px] text-center"
                style={{ background: '#f0fdf4', border: '1px solid #bbf7d0' }}
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="15" stroke="#22c55e" strokeWidth="1.5" />
                  <path d="M10 16l4 4 8-8" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="font-semibold text-[#166534] text-[15px]">Template sent to {email}</p>
                <p className="text-[#15803d] text-[13px]">Check your inbox — reply if you have questions.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-[8px] text-[14px] text-[#0f1112] outline-none transition-all"
                  style={{
                    background: '#f5f6f8',
                    border: '1px solid #e0e2e7',
                  }}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-[8px] font-semibold text-[14px] text-white transition-opacity disabled:opacity-60"
                  style={{ background: '#ec7161' }}
                >
                  {loading ? 'Sending…' : 'Send me the template'}
                  {!loading && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
                <p className="text-[#9ca3af] text-[12px] text-center">No spam. Unsubscribe any time.</p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
