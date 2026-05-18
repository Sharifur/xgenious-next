'use client';

import { useState } from 'react';
import Link from 'next/link';

const checks = [
  { id: 'hypothesis', text: 'I have a hypothesis I want to test with real users in under 12 weeks.' },
  { id: 'budget',     text: 'I have under $50K of runway budgeted for the initial build.' },
  { id: 'throwaway',  text: "I'm OK refactoring or replacing features if the hypothesis fails." },
  { id: 'scope',      text: "I'm not trying to build the full product on day one — just enough to learn." },
];

export default function MVPQualifier() {
  const [ticked, setTicked] = useState<Record<string, boolean>>({});
  const tickedCount = Object.values(ticked).filter(Boolean).length;
  const allYes      = tickedCount === checks.length;
  const anyTicked   = tickedCount > 0;

  function toggle(id: string) {
    setTicked((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <section className="py-16 sm:py-20 lg:py-[100px]" style={{ background: '#f5f6f8' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#ec7161] rounded-full" />
              <span className="text-[#ec7161] text-[14px] font-medium">Is MVP right for you?</span>
            </div>
            <h2 className="font-semibold text-[#0f1112] text-[26px] leading-[34px] sm:text-[34px] sm:leading-[42px] lg:text-[42px] lg:leading-[52px]">
              How we know an MVP is the right call
            </h2>
            <p className="text-[#484848] text-[14px] sm:text-[15px] leading-[22px] sm:leading-[23px]">
              Not every problem is an MVP problem. Tick the statements that match your situation —
              the result tells you whether an MVP or a full SaaS build is the right starting point.
            </p>

            {/* What happens if all 4 match */}
            <div className="flex flex-col gap-3 p-5 rounded-[12px]" style={{ background: '#fff', border: '1px solid #e0e2e7' }}>
              <p className="font-semibold text-[#0f1112] text-[14px]">If all four apply:</p>
              {[
                'An MVP is the right investment for this stage',
                'Fixed-price build, launched in 4–10 weeks',
                'Clean codebase — extends into your full SaaS when you\'re ready',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="flex-shrink-0 mt-0.5">
                    <circle cx="7.5" cy="7.5" r="6.5" stroke="#ec7161" strokeWidth="1" />
                    <path d="M4.5 7.5l2 2 4-4" stroke="#ec7161" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-[#484848] text-[13px] leading-[20px]">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-[#6b7280] text-[13px] leading-[20px]">
              Already past validation and need scale, compliance, or enterprise billing from day one?{' '}
              <Link href="/custom-saas-development-company" className="text-[#ec7161] underline underline-offset-2 hover:opacity-80 transition-opacity">
                See Custom SaaS Development →
              </Link>
            </p>
          </div>

          {/* Right — checklist card */}
          <div className="flex flex-col gap-4">
            {/* Progress bar */}
            <div className="flex items-center justify-between mb-1">
              <span className="text-[13px] font-medium text-[#484848]">Check what applies to you</span>
              <span className="text-[13px] font-semibold" style={{ color: tickedCount === 4 ? '#22c55e' : '#ec7161' }}>
                {tickedCount} / 4
              </span>
            </div>
            <div className="w-full h-1 rounded-full overflow-hidden" style={{ background: '#e0e2e7' }}>
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${(tickedCount / 4) * 100}%`,
                  background: allYes ? '#22c55e' : '#ec7161',
                }}
              />
            </div>

            {/* Items */}
            <div className="flex flex-col rounded-[14px] overflow-hidden" style={{ border: '1px solid #e0e2e7' }}>
              {checks.map((c, i) => (
                <button
                  key={c.id}
                  onClick={() => toggle(c.id)}
                  className="w-full flex items-center gap-4 px-5 py-4 text-left transition-colors"
                  style={{
                    background: ticked[c.id] ? 'rgba(236,113,97,0.04)' : '#fff',
                    borderBottom: i < checks.length - 1 ? '1px solid #e0e2e7' : 'none',
                  }}
                >
                  {/* Number badge */}
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold transition-all"
                    style={{
                      background: ticked[c.id] ? '#ec7161' : '#f0f1f3',
                      color: ticked[c.id] ? '#fff' : '#9ca3af',
                    }}
                  >
                    {ticked[c.id] ? (
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2.5 2.5 3.5-3.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      i + 1
                    )}
                  </span>
                  <span
                    className="text-[14px] leading-[22px] transition-colors"
                    style={{ color: ticked[c.id] ? '#0f1112' : '#484848' }}
                  >
                    {c.text}
                  </span>
                </button>
              ))}
            </div>

            {/* Result */}
            {anyTicked && (
              <div
                className="rounded-[12px] px-5 py-4 flex items-start gap-3 transition-all"
                style={{
                  background: allYes ? 'rgba(34,197,94,0.06)' : 'rgba(251,191,36,0.06)',
                  border: `1px solid ${allYes ? 'rgba(34,197,94,0.2)' : 'rgba(251,191,36,0.2)'}`,
                }}
              >
                {allYes ? (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 mt-0.5">
                    <circle cx="10" cy="10" r="9" stroke="#22c55e" strokeWidth="1.3" />
                    <path d="M6 10l3 3 5-5" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 mt-0.5">
                    <circle cx="10" cy="10" r="9" stroke="#f59e0b" strokeWidth="1.3" />
                    <path d="M10 6v5M10 13v.5" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                )}
                <div>
                  {allYes ? (
                    <>
                      <p className="font-semibold text-[#166534] text-[14px]">An MVP is the right call.</p>
                      <p className="text-[#15803d] text-[13px] mt-0.5">
                        You&apos;re in the right place.{' '}
                        <a href="#pricing" className="underline underline-offset-2">See our packages →</a>
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="font-semibold text-[#92400e] text-[14px]">
                        {tickedCount} of 4 apply — worth a conversation.
                      </p>
                      <p className="text-[#b45309] text-[13px] mt-0.5">
                        If you&apos;re past validation,{' '}
                        <Link href="/custom-saas-development-company" className="underline underline-offset-2">
                          Custom SaaS Development →
                        </Link>{' '}
                        may be the better fit.
                      </p>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
