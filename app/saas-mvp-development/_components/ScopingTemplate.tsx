'use client';

import { useState } from 'react';

const PREVIEWS = [
  'What is the one job your MVP must do for a user?',
  'Which assumption, if wrong, kills the business?',
  'What does "success" look like after 90 days?',
  'Who is the decision-maker for the first paid seat?',
  'What does your user do today without your product?',
];

function DocumentCard() {
  return (
    <div
      className="relative w-full max-w-[340px] mx-auto rounded-[14px] overflow-hidden"
      style={{ background: '#111827', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 24px 64px rgba(0,0,0,0.5)' }}
    >
      {/* Header bar */}
      <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-[6px]" style={{ background: 'rgba(236,113,97,0.15)', border: '1px solid rgba(236,113,97,0.25)' }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 2h6l3 3v9H4V2z" stroke="#ec7161" strokeWidth="1.2" strokeLinejoin="round" />
              <path d="M9.5 2v3.5H13" stroke="#ec7161" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M6 7h4M6 9.5h4M6 12h2.5" stroke="#ec7161" strokeWidth="1.1" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <p className="text-white text-[12px] font-semibold leading-none">MVP Scoping Template</p>
            <p className="text-[#6b7280] text-[10px] mt-0.5">25 questions · PDF</p>
          </div>
        </div>
        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: 'rgba(236,113,97,0.15)', color: '#ec7161' }}>Free</span>
      </div>

      {/* Question previews */}
      <div className="px-5 py-4 flex flex-col gap-3">
        {PREVIEWS.map((q, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold mt-0.5"
              style={{ background: 'rgba(255,255,255,0.06)', color: '#6b7280' }}>
              {i + 1}
            </span>
            <p className="text-[12px] leading-[18px]" style={{ color: i < 2 ? '#d1d5db' : '#4b5563' }}>{q}</p>
          </div>
        ))}
        {/* Fade + "…and 20 more" */}
        <div className="relative mt-1">
          <div className="absolute inset-x-0 -top-8 h-8 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, #111827)' }} />
          <p className="text-[11px] text-center" style={{ color: '#4b5563' }}>+ 20 more questions inside</p>
        </div>
      </div>
    </div>
  );
}

export default function ScopingTemplate() {
  const [email, setEmail]         = useState('');
  const [loading, setLoading]     = useState(false);
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
    <section className="py-16 sm:py-20 lg:py-[100px]" style={{ background: '#070b14' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — document preview */}
          <DocumentCard />

          {/* Right — copy + form */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-[2px] bg-[#ec7161] rounded-full" />
                <span className="text-[#ec7161] text-[13px] font-medium">Free Resource</span>
              </div>
              <h2 className="font-semibold text-white text-[26px] leading-[34px] sm:text-[32px] sm:leading-[40px] lg:text-[38px] lg:leading-[46px]">
                Get our MVP Scoping Template
              </h2>
              <p className="text-[#9ca3af] text-[14px] sm:text-[15px] leading-[22px] sm:leading-[23px]">
                25 questions every pre-seed and seed-stage founder should answer before quoting any
                development work. Define scope, avoid mid-sprint pivots, and walk into any vendor
                call prepared. No call required.
              </p>
            </div>

            {/* Bullets */}
            <ul className="flex flex-col gap-2.5">
              {[
                'Clarify your core use case before dev starts',
                'Identify the assumptions that need validating first',
                'Set a realistic timeline and runway budget',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
                    <circle cx="8" cy="8" r="7" stroke="#ec7161" strokeWidth="1.2" />
                    <path d="M5 8l2 2 4-4" stroke="#ec7161" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-[#d1d5db] text-[13px] leading-[20px]">{item}</span>
                </li>
              ))}
            </ul>

            {/* Form */}
            {submitted ? (
              <div
                className="flex items-center gap-4 p-5 rounded-[12px]"
                style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)' }}
              >
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="flex-shrink-0">
                  <circle cx="14" cy="14" r="13" stroke="#22c55e" strokeWidth="1.4" />
                  <path d="M8.5 14l3.5 3.5 7-7" stroke="#22c55e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <p className="font-semibold text-[#22c55e] text-[14px]">Template sent to {email}</p>
                  <p className="text-[#16a34a] text-[12px] mt-0.5">Check your inbox — reply if you have questions.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-[8px] text-[14px] text-white outline-none transition-all placeholder:text-[#4b5563]"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-shrink-0 flex items-center justify-center gap-2 px-5 py-3 rounded-[8px] font-semibold text-[14px] text-white transition-opacity disabled:opacity-60 whitespace-nowrap"
                  style={{ background: '#ec7161' }}
                >
                  {loading ? 'Sending…' : 'Send me the template'}
                  {!loading && (
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <path d="M2.5 7.5h10M9 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              </form>
            )}
            <p className="text-[#4b5563] text-[12px]">No spam. Unsubscribe any time.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
