'use client';

import { useEffect, useRef, useState } from 'react';
import { COLOR, LIGHT_COLOR } from './constants';

export default function ProfitModel() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.25 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const vis = visible ? ' qxp-vis' : '';

  return (
    <section className="py-20 lg:py-[100px] bg-white overflow-hidden">
      <style>{`
        @keyframes qxp-draw {
          from { stroke-dashoffset: 320; opacity: 0; }
          to   { stroke-dashoffset: 0;   opacity: 1; }
        }
        @keyframes qxp-fade-up {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes qxp-flow {
          0%   { stroke-dashoffset: 20; }
          100% { stroke-dashoffset: 0; }
        }
        .qxp-box { opacity: 0; }
        .qxp-box.qxp-vis { animation: qxp-fade-up 0.55s ease forwards; }
        .qxp-line {
          stroke-dasharray: 320;
          stroke-dashoffset: 320;
          opacity: 0;
        }
        .qxp-line.qxp-vis { animation: qxp-draw 0.75s ease forwards; }
        .qxp-flow-line {
          stroke-dasharray: 6 4;
          stroke-dashoffset: 10;
        }
        .qxp-flow-line.qxp-vis { animation: qxp-flow 1.8s linear infinite; }
      `}</style>

      <div
        className="container-page px-4 sm:px-6 lg:px-0 max-w-[1100px] mx-auto"
        ref={ref}
      >
        <div className="text-center mb-14 max-w-[600px] mx-auto">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
            Revenue Model
          </div>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-4">
            Making Profit From Qixer
          </h2>
          <p className="text-[15px] text-[#6b7280] leading-7">
            Two built-in revenue models — earn from monthly provider subscriptions, collect a commission on every completed order, or run both simultaneously.
          </p>
        </div>

        {/* ── Desktop flow diagram ── */}
        <div className="hidden lg:flex items-center justify-center">

          {/* Service Providers box */}
          <div
            className={`qxp-box${vis} flex-shrink-0 w-[168px] h-[168px] bg-white rounded-2xl border border-[#E5E7EC] shadow-sm flex flex-col items-center justify-center gap-3`}
            style={{ animationDelay: '0s' }}
          >
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: LIGHT_COLOR }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={COLOR} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <span className="text-[13px] font-semibold text-[#0F1112] text-center px-2 leading-5">Service Providers</span>
          </div>

          {/* Left connector SVG */}
          <div className="relative flex-shrink-0" style={{ width: 110, height: 200 }}>
            <svg className="absolute inset-0" width="110" height="200" viewBox="0 0 110 200" fill="none">
              <path
                className={`qxp-line qxp-flow-line${vis}`}
                d="M 0 100 C 30 100, 70 55, 110 55"
                stroke={COLOR} strokeWidth="1.8" fill="none"
                style={{ animationDelay: '0.35s' }}
              />
              <path
                className={`qxp-line qxp-flow-line${vis}`}
                d="M 0 100 C 30 100, 70 145, 110 145"
                stroke={COLOR} strokeWidth="1.8" fill="none"
                style={{ animationDelay: '0.45s' }}
              />
              <circle className={`qxp-box${vis}`} cx="110" cy="55" r="4" fill={COLOR} style={{ animationDelay: '0.55s' }}/>
              <circle className={`qxp-box${vis}`} cx="110" cy="145" r="4" fill={COLOR} style={{ animationDelay: '0.65s' }}/>
            </svg>
          </div>

          {/* Middle: two model boxes + OR badge */}
          <div className="flex flex-col items-center gap-4 flex-shrink-0">
            <div
              className={`qxp-box${vis} w-[224px] h-[78px] bg-white rounded-xl border border-[#E5E7EC] shadow-sm flex items-center gap-4 px-5`}
              style={{ animationDelay: '0.2s' }}
            >
              <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: LIGHT_COLOR }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={COLOR} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
                </svg>
              </div>
              <span className="text-[12.5px] font-semibold text-[#0F1112] leading-5">Subscription Fee Model</span>
            </div>

            <div
              className={`qxp-box${vis} w-9 h-9 rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-md`}
              style={{ background: COLOR, animationDelay: '0.3s' }}
            >
              OR
            </div>

            <div
              className={`qxp-box${vis} w-[224px] h-[78px] bg-white rounded-xl border border-[#E5E7EC] shadow-sm flex items-center gap-4 px-5`}
              style={{ animationDelay: '0.25s' }}
            >
              <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: LIGHT_COLOR }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={COLOR} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <span className="text-[12.5px] font-semibold text-[#0F1112] leading-5">Commission Fee Model</span>
            </div>
          </div>

          {/* Right connector SVG */}
          <div className="relative flex-shrink-0" style={{ width: 110, height: 200 }}>
            <svg className="absolute inset-0" width="110" height="200" viewBox="0 0 110 200" fill="none">
              <path
                className={`qxp-line qxp-flow-line${vis}`}
                d="M 0 55 C 40 55, 80 100, 110 100"
                stroke={COLOR} strokeWidth="1.8" fill="none"
                style={{ animationDelay: '0.55s' }}
              />
              <path
                className={`qxp-line qxp-flow-line${vis}`}
                d="M 0 145 C 40 145, 80 100, 110 100"
                stroke={COLOR} strokeWidth="1.8" fill="none"
                style={{ animationDelay: '0.6s' }}
              />
            </svg>
          </div>

          {/* Your Profit box */}
          <div
            className={`qxp-box${vis} flex-shrink-0 w-[168px] h-[168px] rounded-2xl border-2 shadow-md flex flex-col items-center justify-center gap-3`}
            style={{ borderColor: COLOR, background: LIGHT_COLOR, animationDelay: '0.7s' }}
          >
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white shadow-sm">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={COLOR} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                <line x1="1" y1="10" x2="23" y2="10"/>
              </svg>
            </div>
            <span className="text-[15px] font-bold text-[#0F1112]">Your Profit</span>
            <span className="text-[11px]" style={{ color: COLOR }}>Hands-free revenue</span>
          </div>
        </div>

        {/* ── Mobile fallback ── */}
        <div className="flex lg:hidden flex-col items-center gap-4 max-w-[360px] mx-auto">
          <div className="w-full h-[80px] bg-white rounded-xl border border-[#E5E7EC] shadow-sm flex items-center gap-4 px-5">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: LIGHT_COLOR }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={COLOR} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <span className="text-[13px] font-semibold text-[#0F1112]">Service Providers</span>
          </div>

          <svg width="2" height="32" viewBox="0 0 2 32"><line x1="1" y1="0" x2="1" y2="32" stroke={COLOR} strokeWidth="1.5" strokeDasharray="4 3"/></svg>

          <div className="w-full h-[78px] bg-white rounded-xl border border-[#E5E7EC] shadow-sm flex items-center gap-4 px-5">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: LIGHT_COLOR }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={COLOR} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
              </svg>
            </div>
            <span className="text-[12.5px] font-semibold text-[#0F1112]">Subscription Fee Model</span>
          </div>

          <div className="w-9 h-9 rounded-full flex items-center justify-center text-[10px] font-bold text-white" style={{ background: COLOR }}>OR</div>

          <div className="w-full h-[78px] bg-white rounded-xl border border-[#E5E7EC] shadow-sm flex items-center gap-4 px-5">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: LIGHT_COLOR }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={COLOR} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23"/>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </div>
            <span className="text-[12.5px] font-semibold text-[#0F1112]">Commission Fee Model</span>
          </div>

          <svg width="2" height="32" viewBox="0 0 2 32"><line x1="1" y1="0" x2="1" y2="32" stroke={COLOR} strokeWidth="1.5" strokeDasharray="4 3"/></svg>

          <div className="w-full h-[80px] rounded-xl border-2 flex items-center gap-4 px-5" style={{ borderColor: COLOR, background: LIGHT_COLOR }}>
            <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-white shadow-sm flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={COLOR} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                <line x1="1" y1="10" x2="23" y2="10"/>
              </svg>
            </div>
            <span className="text-[13px] font-bold text-[#0F1112]">Your Profit</span>
          </div>
        </div>

        {/* Bottom note */}
        <p className="text-center text-[13px] text-[#9ca3af] mt-10">
          Configure commission rates and subscription plans from the admin panel — no code changes required.
        </p>

      </div>
    </section>
  );
}
