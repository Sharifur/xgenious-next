'use client';

import { useState } from 'react';
import Link from 'next/link';

const checks = [
  { id: 'hypothesis',  text: 'I have a hypothesis I want to test with real users in under 12 weeks.' },
  { id: 'budget',      text: 'I have under $50K of runway budgeted for the initial build.' },
  { id: 'throwaway',   text: "I'm OK refactoring or replacing features if the hypothesis fails." },
  { id: 'scope',       text: "I'm not trying to build the full product on day one — just enough to learn." },
];

export default function MVPQualifier() {
  const [ticked, setTicked] = useState<Record<string, boolean>>({});
  const allYes = checks.every((c) => ticked[c.id]);
  const anyTicked = Object.values(ticked).some(Boolean);

  function toggle(id: string) {
    setTicked((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <section className="py-14 sm:py-20 lg:py-[100px]" style={{ background: '#fff' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — copy */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#ec7161] rounded-full" />
              <span className="text-[#ec7161] text-[14px] font-medium">Is MVP right for you?</span>
            </div>
            <h2 className="font-semibold text-[#0f1112] text-[26px] leading-[34px] sm:text-[34px] sm:leading-[42px] lg:text-[40px] lg:leading-[50px]">
              How we know an MVP is the right call
            </h2>
            <p className="text-[#484848] text-[14px] sm:text-[15px] leading-[22px] sm:leading-[23px]">
              Not every problem is an MVP problem. Check the boxes that apply to your situation —
              the answer will tell you whether an MVP or a full SaaS build is the right starting point.
            </p>
            <p className="text-[#484848] text-[14px] leading-[22px]">
              If all four apply, an MVP is the right investment. If you&apos;re already past validation
              and need scale, compliance, or enterprise billing from day one —{' '}
              <Link href="/custom-saas-development-company" className="text-[#ec7161] underline underline-offset-2 hover:opacity-80 transition-opacity">
                see our Custom SaaS Development
              </Link>{' '}
              instead.
            </p>
          </div>

          {/* Right — checklist */}
          <div className="flex flex-col gap-4">
            <div
              className="rounded-[14px] overflow-hidden"
              style={{ border: '1px solid #e0e2e7' }}
            >
              {checks.map((c, i) => (
                <button
                  key={c.id}
                  onClick={() => toggle(c.id)}
                  className="w-full flex items-start gap-4 px-5 py-4 text-left transition-colors"
                  style={{
                    background: ticked[c.id] ? 'rgba(236,113,97,0.04)' : '#fff',
                    borderBottom: i < checks.length - 1 ? '1px solid #e0e2e7' : 'none',
                  }}
                >
                  {/* Checkbox */}
                  <div
                    className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-[5px] flex items-center justify-center transition-all"
                    style={{
                      background: ticked[c.id] ? '#ec7161' : '#fff',
                      border: ticked[c.id] ? '1.5px solid #ec7161' : '1.5px solid #d1d5db',
                    }}
                  >
                    {ticked[c.id] && (
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                        <path d="M2 5.5l2.5 2.5 4.5-4.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <span className="text-[14px] leading-[22px]" style={{ color: ticked[c.id] ? '#0f1112' : '#484848' }}>
                    {c.text}
                  </span>
                </button>
              ))}
            </div>

            {/* Result */}
            {anyTicked && (
              <div
                className="rounded-[10px] px-5 py-4 transition-all"
                style={{
                  background: allYes ? 'rgba(34,197,94,0.06)' : 'rgba(251,191,36,0.06)',
                  border: `1px solid ${allYes ? 'rgba(34,197,94,0.25)' : 'rgba(251,191,36,0.25)'}`,
                }}
              >
                {allYes ? (
                  <div className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 mt-0.5">
                      <circle cx="10" cy="10" r="9" stroke="#22c55e" strokeWidth="1.3" />
                      <path d="M6 10l3 3 5-5" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div>
                      <p className="font-semibold text-[#166534] text-[14px]">An MVP is the right call.</p>
                      <p className="text-[#15803d] text-[13px] mt-0.5">
                        You&apos;re in the right place.{' '}
                        <a href="#pricing" className="underline underline-offset-2">See our packages →</a>
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 mt-0.5">
                      <circle cx="10" cy="10" r="9" stroke="#f59e0b" strokeWidth="1.3" />
                      <path d="M10 6v5M10 13v.5" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <div>
                      <p className="font-semibold text-[#92400e] text-[14px]">Some of these don&apos;t apply.</p>
                      <p className="text-[#b45309] text-[13px] mt-0.5">
                        If you&apos;re past validation, consider{' '}
                        <Link href="/custom-saas-development-company" className="underline underline-offset-2">
                          Custom SaaS Development →
                        </Link>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
