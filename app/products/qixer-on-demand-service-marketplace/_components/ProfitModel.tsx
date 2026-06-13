'use client';

import type { CSSProperties } from 'react';
import { useEffect, useRef, useState } from 'react';
import { COLOR, LIGHT_COLOR } from './constants';

const C = COLOR;
const L = LIGHT_COLOR;

// Path strings for connector SVGs (shared between desktop SVGs and offset-path dots)
const L_UP   = 'M 0 100 C 30 100, 70 55, 110 55';
const L_DOWN = 'M 0 100 C 30 100, 70 145, 110 145';
const R_UP   = 'M 0 55 C 40 55, 80 100, 110 100';
const R_DOWN = 'M 0 145 C 40 145, 80 100, 110 100';

export default function ProfitModel() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const vis = visible ? ' qxp-vis' : '';

  return (
    <section className="pb-20 lg:pb-[100px] bg-white overflow-hidden">
      <style>{`
        @keyframes qxp-fade-up {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes qxp-dot {
          0%   { offset-distance: 0%;   opacity: 0; }
          8%   { opacity: 1; }
          88%  { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        .qxp-box { opacity: 0; }
        .qxp-box.qxp-vis { animation: qxp-fade-up 0.55s ease forwards; }
      `}</style>

      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1100px] mx-auto" ref={ref}>

        <div className="text-center mb-14 max-w-[600px] mx-auto">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-4"
            style={{ background: L, color: C }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: C }} />
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
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: L }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={C} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <span className="text-[13px] font-semibold text-[#0F1112] text-center px-2 leading-5">Service Providers</span>
          </div>

          {/* Left connector */}
          <div className="relative flex-shrink-0" style={{ width: 110, height: 200 }}>
            <svg className="absolute inset-0" width="110" height="200" viewBox="0 0 110 200" fill="none" overflow="visible">
              {/* Static dashed paths */}
              <path d={L_UP}   stroke={C} strokeWidth="1.6" fill="none" strokeDasharray="5 4" opacity="0.3"/>
              <path d={L_DOWN} stroke={C} strokeWidth="1.6" fill="none" strokeDasharray="5 4" opacity="0.3"/>
              {/* Junction dot — service providers output */}
              <circle
                className={`qxp-box${vis}`}
                cx="0" cy="100" r="5" fill={C}
                style={{ animationDelay: '0.2s' }}
              />
              {/* Endpoint dots */}
              <circle
                className={`qxp-box${vis}`}
                cx="110" cy="55" r="4" fill={C}
                style={{ animationDelay: '0.55s' }}
              />
              <circle
                className={`qxp-box${vis}`}
                cx="110" cy="145" r="4" fill={C}
                style={{ animationDelay: '0.65s' }}
              />
              {/* Animated dots — upper path */}
              {visible && [0, 0.9].map((d) => (
                <g key={`lu${d}`}
                  style={{ offsetPath: `path('${L_UP}')`, animation: `qxp-dot 1.8s linear ${d}s infinite` } as CSSProperties}>
                  <circle cx="0" cy="0" r="3.5" fill={C}/>
                </g>
              ))}
              {/* Animated dots — lower path */}
              {visible && [0.45, 1.35].map((d) => (
                <g key={`ld${d}`}
                  style={{ offsetPath: `path('${L_DOWN}')`, animation: `qxp-dot 1.8s linear ${d}s infinite` } as CSSProperties}>
                  <circle cx="0" cy="0" r="3.5" fill={C}/>
                </g>
              ))}
            </svg>
          </div>

          {/* Middle: two model boxes + OR badge */}
          <div className="flex flex-col items-center gap-4 flex-shrink-0">
            <div
              className={`qxp-box${vis} w-[224px] h-[78px] bg-white rounded-xl border border-[#E5E7EC] shadow-sm flex items-center gap-4 px-5`}
              style={{ animationDelay: '0.2s' }}
            >
              <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: L }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
                </svg>
              </div>
              <span className="text-[12.5px] font-semibold text-[#0F1112] leading-5">Subscription Fee Model</span>
            </div>

            <div
              className={`qxp-box${vis} w-9 h-9 rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-md`}
              style={{ background: C, animationDelay: '0.3s' }}
            >
              OR
            </div>

            <div
              className={`qxp-box${vis} w-[224px] h-[78px] bg-white rounded-xl border border-[#E5E7EC] shadow-sm flex items-center gap-4 px-5`}
              style={{ animationDelay: '0.25s' }}
            >
              <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: L }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <span className="text-[12.5px] font-semibold text-[#0F1112] leading-5">Commission Fee Model</span>
            </div>
          </div>

          {/* Right connector */}
          <div className="relative flex-shrink-0" style={{ width: 110, height: 200 }}>
            <svg className="absolute inset-0" width="110" height="200" viewBox="0 0 110 200" fill="none" overflow="visible">
              {/* Static dashed paths */}
              <path d={R_UP}   stroke={C} strokeWidth="1.6" fill="none" strokeDasharray="5 4" opacity="0.3"/>
              <path d={R_DOWN} stroke={C} strokeWidth="1.6" fill="none" strokeDasharray="5 4" opacity="0.3"/>
              {/* Junction dot — your profit input */}
              <circle
                className={`qxp-box${vis}`}
                cx="110" cy="100" r="5" fill={C}
                style={{ animationDelay: '0.7s' }}
              />
              {/* Animated dots — upper path */}
              {visible && [0.2, 1.1].map((d) => (
                <g key={`ru${d}`}
                  style={{ offsetPath: `path('${R_UP}')`, animation: `qxp-dot 1.8s linear ${d}s infinite` } as CSSProperties}>
                  <circle cx="0" cy="0" r="3.5" fill={C}/>
                </g>
              ))}
              {/* Animated dots — lower path */}
              {visible && [0.65, 1.55].map((d) => (
                <g key={`rd${d}`}
                  style={{ offsetPath: `path('${R_DOWN}')`, animation: `qxp-dot 1.8s linear ${d}s infinite` } as CSSProperties}>
                  <circle cx="0" cy="0" r="3.5" fill={C}/>
                </g>
              ))}
            </svg>
          </div>

          {/* Your Profit box */}
          <div
            className={`qxp-box${vis} flex-shrink-0 w-[168px] h-[168px] rounded-2xl border-2 shadow-md flex flex-col items-center justify-center gap-3`}
            style={{ borderColor: C, background: L, animationDelay: '0.7s' }}
          >
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white shadow-sm">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={C} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                <line x1="1" y1="10" x2="23" y2="10"/>
              </svg>
            </div>
            <span className="text-[15px] font-bold text-[#0F1112]">Your Profit</span>
            <span className="text-[11px]" style={{ color: C }}>Hands-free revenue</span>
          </div>
        </div>

        {/* ── Mobile fallback ── */}
        <div className="flex lg:hidden flex-col items-center gap-4 max-w-[360px] mx-auto">
          <div className="w-full h-[80px] bg-white rounded-xl border border-[#E5E7EC] shadow-sm flex items-center gap-4 px-5">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: L }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <span className="text-[13px] font-semibold text-[#0F1112]">Service Providers</span>
          </div>

          <svg width="2" height="32" viewBox="0 0 2 32"><line x1="1" y1="0" x2="1" y2="32" stroke={C} strokeWidth="1.5" strokeDasharray="4 3"/></svg>

          <div className="w-full h-[78px] bg-white rounded-xl border border-[#E5E7EC] shadow-sm flex items-center gap-4 px-5">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: L }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
              </svg>
            </div>
            <span className="text-[12.5px] font-semibold text-[#0F1112]">Subscription Fee Model</span>
          </div>

          <div className="w-9 h-9 rounded-full flex items-center justify-center text-[10px] font-bold text-white" style={{ background: C }}>OR</div>

          <div className="w-full h-[78px] bg-white rounded-xl border border-[#E5E7EC] shadow-sm flex items-center gap-4 px-5">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: L }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23"/>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </div>
            <span className="text-[12.5px] font-semibold text-[#0F1112]">Commission Fee Model</span>
          </div>

          <svg width="2" height="32" viewBox="0 0 2 32"><line x1="1" y1="0" x2="1" y2="32" stroke={C} strokeWidth="1.5" strokeDasharray="4 3"/></svg>

          <div className="w-full h-[80px] rounded-xl border-2 flex items-center gap-4 px-5" style={{ borderColor: C, background: L }}>
            <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-white shadow-sm flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                <line x1="1" y1="10" x2="23" y2="10"/>
              </svg>
            </div>
            <span className="text-[13px] font-bold text-[#0F1112]">Your Profit</span>
          </div>
        </div>

        <p className="text-center text-[13px] text-[#9ca3af] mt-10">
          Configure commission rates and subscription plans from the admin panel — no code changes required.
        </p>

      </div>
    </section>
  );
}
