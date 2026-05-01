'use client';

import type { ReactElement } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { services } from '@/data/saas-page';

/* ───────────────────────────────────────────────────────────────
   "Creating the Future of Your Digital Presence"
   - Eyebrow + heading on the left, supporting copy on the right
   - 4 stacked service cards with rich isometric-feel illustrations
   ─────────────────────────────────────────────────────────────── */

/* ── Illustration: SaaS — rich isometric scene matching reference image
       (server stack, cloud, coins, gears, SaaS tablet, laptop, phone, etc.)  */
const Saas = () => (
  <svg viewBox="0 0 420 320" className="w-full max-w-[420px] h-auto" aria-hidden>
    <defs>
      <linearGradient id="purp" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#A89AE6" />
        <stop offset="100%" stopColor="#6E5BCC" />
      </linearGradient>
      <linearGradient id="purpDark" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#7567C8" />
        <stop offset="100%" stopColor="#3F3596" />
      </linearGradient>
      <linearGradient id="coral" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F26B4E" />
        <stop offset="100%" stopColor="#EC7161" />
      </linearGradient>
      <linearGradient id="gold" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFD66B" />
        <stop offset="100%" stopColor="#F2A933" />
      </linearGradient>
    </defs>

    {/* Connection lines (subtle coral) */}
    <g stroke="#F26B4E" strokeWidth="1.2" fill="none" opacity="0.55">
      <path d="M85 78 L 175 145" />
      <path d="M175 145 L 295 88" />
      <path d="M175 145 L 295 165" />
      <path d="M175 145 L 105 230" />
      <path d="M175 145 L 195 245" />
      <path d="M295 165 L 320 235" />
    </g>

    {/* Server stack (top-left) */}
    <g>
      {[0, 1, 2].map((i) => {
        const y = 32 + i * 26;
        return (
          <g key={i}>
            <rect x="32" y={y} width="78" height="22" rx="3" fill="url(#purp)" stroke="#F26B4E" strokeWidth="1.2" />
            <rect x="40" y={y + 5} width="40" height="3" rx="1" fill="#3F3596" />
            <rect x="40" y={y + 11} width="55" height="2" rx="1" fill="#3F3596" />
            <circle cx="100" cy={y + 11} r="1.6" fill="#F26B4E" />
          </g>
        );
      })}
    </g>

    {/* Cloud (top-mid) */}
    <g>
      <path
        d="M155 55 q-12 0 -14 12 q-12 0 -12 12 q0 12 14 12 h36 q14 0 14 -12 q0 -10 -10 -12 q-2 -12 -14 -12 z"
        fill="url(#purp)"
        stroke="#F26B4E"
        strokeWidth="1.2"
      />
    </g>

    {/* Coin stack (top-right) */}
    <g>
      {[0, 1, 2].map((i) => {
        const y = 80 - i * 6;
        return (
          <ellipse
            key={i}
            cx="290"
            cy={y}
            rx="22"
            ry="6"
            fill="url(#gold)"
            stroke="#D88B0E"
            strokeWidth="0.8"
          />
        );
      })}
      <rect x="268" y="68" width="44" height="12" fill="url(#gold)" />
      <ellipse cx="290" cy="68" rx="22" ry="6" fill="url(#gold)" />
    </g>

    {/* Disc with play button */}
    <g>
      <ellipse cx="278" cy="115" rx="28" ry="9" fill="url(#purpDark)" />
      <ellipse cx="278" cy="111" rx="28" ry="9" fill="url(#purp)" stroke="#F26B4E" strokeWidth="1.2" />
      <circle cx="278" cy="111" r="9" fill="url(#coral)" />
      <path d="M275 107 l 6 4 -6 4 z" fill="white" />
    </g>

    {/* Browser window (right) */}
    <g>
      <rect x="335" y="92" width="70" height="58" rx="3" fill="url(#purp)" stroke="#F26B4E" strokeWidth="1.2" />
      <rect x="335" y="92" width="70" height="9" rx="3" fill="url(#purpDark)" />
      <circle cx="340" cy="96.5" r="1.2" fill="#F26B4E" />
      <circle cx="344" cy="96.5" r="1.2" fill="#FFD66B" />
      <rect x="345" y="115" width="50" height="3" rx="1" fill="#3F3596" />
      <rect x="345" y="123" width="40" height="3" rx="1" fill="#3F3596" />
    </g>

    {/* SaaS tablet (center, focal) */}
    <g>
      <rect x="135" y="125" width="100" height="60" rx="4" fill="url(#purpDark)" />
      <rect x="135" y="120" width="100" height="60" rx="4" fill="url(#purp)" stroke="#F26B4E" strokeWidth="1.4" />
      <text
        x="185"
        y="156"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="20"
        fontWeight="700"
        fill="#F26B4E"
      >
        SaaS
      </text>
    </g>

    {/* Chat bubble (mid-left) */}
    <g>
      <rect x="60" y="155" width="50" height="26" rx="6" fill="url(#purp)" stroke="#F26B4E" strokeWidth="1.2" />
      <path d="M70 178 l -4 8 l 12 -5 z" fill="url(#purp)" stroke="#F26B4E" strokeWidth="1.2" />
      <circle cx="73" cy="168" r="2" fill="#F26B4E" />
      <circle cx="83" cy="168" r="2" fill="#F26B4E" />
      <circle cx="93" cy="168" r="2" fill="#F26B4E" />
    </g>

    {/* Gears (bottom-left) */}
    <g transform="translate(82 215)">
      <g fill="url(#purpDark)" stroke="#F26B4E" strokeWidth="1">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <rect key={deg} x="-3" y="-22" width="6" height="6" transform={`rotate(${deg})`} />
        ))}
        <circle r="16" />
        <circle r="6" fill="#F26B4E" />
      </g>
    </g>
    <g transform="translate(118 248)">
      <g fill="url(#purpDark)" stroke="#F26B4E" strokeWidth="1">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <rect key={deg} x="-2" y="-15" width="4" height="4" transform={`rotate(${deg})`} />
        ))}
        <circle r="11" />
        <circle r="4" fill="#F26B4E" />
      </g>
    </g>

    {/* Phone with WiFi (bottom-center) */}
    <g>
      <rect x="170" y="220" width="42" height="60" rx="6" fill="url(#purpDark)" stroke="#F26B4E" strokeWidth="1.2" />
      <rect x="174" y="226" width="34" height="42" rx="3" fill="url(#purp)" />
      <g transform="translate(191 247)" stroke="#FFD66B" strokeWidth="1.6" fill="none" strokeLinecap="round">
        <path d="M -6 -3 q 6 -6 12 0" />
        <path d="M -3 0 q 3 -3 6 0" />
        <circle cx="0" cy="3" r="1.5" fill="#FFD66B" stroke="none" />
      </g>
    </g>

    {/* Document (bottom-left) */}
    <g>
      <rect x="22" y="252" width="56" height="36" rx="2" fill="url(#purp)" stroke="#F26B4E" strokeWidth="1.2" />
      <rect x="28" y="262" width="44" height="2.5" rx="0.5" fill="#F26B4E" />
      <rect x="28" y="268" width="44" height="2.5" rx="0.5" fill="#F26B4E" />
      <rect x="28" y="274" width="32" height="2.5" rx="0.5" fill="#F26B4E" />
      <rect x="28" y="280" width="38" height="2.5" rx="0.5" fill="#F26B4E" />
    </g>

    {/* Laptop (right) */}
    <g>
      <path
        d="M255 230 L 405 230 L 410 280 L 250 280 Z"
        fill="url(#purpDark)"
        stroke="#F26B4E"
        strokeWidth="1.2"
      />
      <path
        d="M268 232 L 392 232 L 395 270 L 265 270 Z"
        fill="url(#purp)"
      />
      <path
        d="M260 280 L 400 280 L 408 290 L 252 290 Z"
        fill="url(#purpDark)"
        stroke="#F26B4E"
        strokeWidth="1.2"
      />
      <ellipse cx="330" cy="285" rx="14" ry="2" fill="#3F3596" />
    </g>
  </svg>
);

/* ── Illustration: Web App — figures + browser windows ── */
const Web = () => (
  <div className="relative w-[260px] h-[200px] flex-shrink-0">
    <div
      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] h-3 rounded-full"
      style={{ background: 'rgba(15,17,18,0.06)', filter: 'blur(6px)' }}
    />
    {/* Center figure */}
    <div className="absolute left-1/2 -translate-x-1/2 bottom-3 flex flex-col items-center">
      <div className="w-7 h-7 rounded-full bg-[#3B7A6A] flex items-center justify-center">
        <div className="w-3.5 h-3.5 rounded-full bg-[#FFE8E1]" />
      </div>
      <div className="w-12 h-16 rounded-t-2xl mt-1 bg-[#3B7A6A]" />
    </div>
    {/* Left figure */}
    <div className="absolute left-3 bottom-3 flex flex-col items-center">
      <div className="w-6 h-6 rounded-full bg-[#0F1112] flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-[#FFE8E1]" />
      </div>
      <div className="w-10 h-14 rounded-t-2xl mt-1 bg-[#0F1112]" />
    </div>
    {/* Browser windows floating */}
    <div className="absolute right-2 top-2 w-[110px] h-[80px] rounded-md bg-white shadow-xl border border-[#3B7A6A]/20 overflow-hidden rotate-[-4deg]">
      <div className="h-3 px-1.5 bg-[#3B7A6A]/10 flex items-center gap-0.5">
        <div className="w-1 h-1 rounded-full bg-[#3B7A6A]/40" />
        <div className="w-1 h-1 rounded-full bg-[#3B7A6A]/30" />
      </div>
      <div className="p-1.5 space-y-1">
        <div className="h-1.5 rounded bg-[#3B7A6A]/40 w-2/3" />
        <div className="h-7 rounded bg-[#3B7A6A]/20" />
        <div className="grid grid-cols-2 gap-1">
          <div className="h-4 rounded bg-[#3B7A6A]/30" />
          <div className="h-4 rounded bg-[#F26B4E]/40" />
        </div>
      </div>
    </div>
    {/* Floating code chip */}
    <div className="absolute right-6 bottom-12 w-9 h-9 rounded-lg bg-white shadow-md flex items-center justify-center">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M9 8l-4 4 4 4M15 8l4 4-4 4"
          stroke="#3B7A6A"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
    {/* Settings cog */}
    <div className="absolute left-12 top-3 w-8 h-8 rounded-full bg-[#3B7A6A] flex items-center justify-center">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.8" />
        <path
          d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </div>
  </div>
);

/* ── Illustration: Mobile — phone with floating app icons ── */
const Mobile = () => (
  <div className="relative w-[260px] h-[200px] flex-shrink-0">
    <div
      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[180px] h-3 rounded-full"
      style={{ background: 'rgba(15,17,18,0.08)', filter: 'blur(8px)' }}
    />
    {/* Phone */}
    <div
      className="absolute left-1/2 -translate-x-1/2 top-3 w-[100px] h-[180px] rounded-[22px] overflow-hidden border-[4px] border-[#0F1112]"
      style={{
        background: 'linear-gradient(180deg, #F26B4E, #EC7161)',
        boxShadow: '0 12px 28px rgba(15,17,18,0.18)',
      }}
    >
      <div className="h-3 flex items-center justify-center bg-[#0F1112]">
        <div className="w-7 h-1 rounded bg-[#3F3F3F]" />
      </div>
      <div className="bg-white h-full p-2 space-y-1.5">
        <div className="h-2 rounded bg-[#F26B4E]/60 w-2/3" />
        <div className="h-12 rounded bg-[#F26B4E]/30" />
        <div className="grid grid-cols-2 gap-1">
          <div className="h-6 rounded bg-[#F26B4E]/40" />
          <div className="h-6 rounded bg-[#F26B4E]/20" />
        </div>
        <div className="h-6 rounded bg-[#F26B4E]" />
      </div>
    </div>
    {/* Floating icons */}
    <div className="absolute left-2 top-4 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="#E11D48" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="4" stroke="#E11D48" strokeWidth="1.6" />
        <circle cx="17.5" cy="6.5" r="1" fill="#E11D48" />
      </svg>
    </div>
    <div className="absolute left-3 bottom-12 w-8 h-8 rounded-full bg-[#F26B4E] flex items-center justify-center shadow-md">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" fill="white" />
      </svg>
    </div>
    <div className="absolute right-2 top-6 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path
          d="M9 8l-4 4 4 4M15 8l4 4-4 4"
          stroke="#0F1112"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
    <div className="absolute right-3 bottom-10 w-9 h-9 rounded-full bg-[#A78BFA] shadow-md flex items-center justify-center">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.6" />
        <path d="M12 7v5l3 3" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </div>
    <div className="absolute right-8 bottom-2 w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L4 6v6c0 5 3.5 9.5 8 10 4.5-.5 8-5 8-10V6l-8-4z"
          fill="#3B82F6"
        />
      </svg>
    </div>
  </div>
);

/* ── Illustration: AI Agent — robot with chat & icons ── */
const AI = () => (
  <div className="relative w-[260px] h-[200px] flex-shrink-0">
    <div
      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[160px] h-3 rounded-full"
      style={{ background: 'rgba(15,17,18,0.08)', filter: 'blur(6px)' }}
    />
    {/* Robot body */}
    <div className="absolute left-1/2 -translate-x-1/2 top-12">
      {/* Antenna */}
      <div className="w-px h-4 mx-auto bg-[#A78BFA]" />
      <div className="w-1.5 h-1.5 mx-auto rounded-full bg-[#F26B4E] -mt-px" />
      {/* Head */}
      <div
        className="w-[80px] h-[68px] mt-1 rounded-2xl flex items-center justify-center relative"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF, #E5DAF5)',
          boxShadow: '0 8px 18px rgba(120,80,200,0.25)',
        }}
      >
        {/* Eyes */}
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#0F1112]" />
          <div className="w-3 h-3 rounded-full bg-[#0F1112]" />
        </div>
        {/* Cheek lights */}
        <div className="absolute left-2 top-1/2 w-1 h-1 rounded-full bg-[#F26B4E]" />
        <div className="absolute right-2 top-1/2 w-1 h-1 rounded-full bg-[#F26B4E]" />
      </div>
      {/* Body */}
      <div
        className="w-[60px] h-[36px] mt-1 mx-auto rounded-b-xl"
        style={{ background: 'linear-gradient(180deg, #E5DAF5, #C7B3F0)' }}
      />
    </div>
    {/* Floating chat / app icons around robot */}
    <div className="absolute left-2 top-4 w-9 h-9 rounded-lg bg-[#F26B4E] flex items-center justify-center shadow-md">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path
          d="M21 11.5a8.4 8.4 0 01-1.2 4.4 8.5 8.5 0 01-7.3 4.1 8.4 8.4 0 01-4.4-1.2L3 21l2.2-5.1a8.4 8.4 0 01-1.2-4.4 8.5 8.5 0 014.1-7.3A8.4 8.4 0 0112.5 3h.5a8.5 8.5 0 018 8v.5z"
          stroke="white"
          strokeWidth="1.6"
        />
      </svg>
    </div>
    <div className="absolute right-3 top-2 w-8 h-8 rounded-lg bg-white shadow-md flex items-center justify-center">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="#A78BFA" strokeWidth="1.6" />
        <path d="M3 7l9 6 9-6" stroke="#A78BFA" strokeWidth="1.6" />
      </svg>
    </div>
    <div className="absolute right-2 bottom-14 w-8 h-8 rounded-lg bg-[#A78BFA] flex items-center justify-center shadow-md">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.6" />
        <path d="M8 12l3 3 5-6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
    <div className="absolute left-3 bottom-12 w-7 h-7 rounded-lg bg-white shadow-md flex items-center justify-center">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
        <path d="M12 2v20M2 12h20" stroke="#F26B4E" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
    <div className="absolute right-12 bottom-2 w-7 h-7 rounded-lg bg-[#FFE8E1] flex items-center justify-center shadow-md">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
        <path
          d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
          stroke="#F26B4E"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>
);

const ill: Record<string, ReactElement> = {
  saas: <Saas />,
  web: <Web />,
  mobile: <Mobile />,
  ai: <AI />,
};

/* ── Image with SVG fallback. If the file at `src` is missing or fails
       to load, the inline `fallback` element is shown instead — so the
       card never displays a broken-image icon. */
function IllustrationImg({
  src,
  alt,
  fallback,
}: {
  src: string;
  alt: string;
  fallback: ReactElement;
}) {
  const [errored, setErrored] = useState(false);
  if (errored) return fallback;
  return (
    <Image
      src={src}
      alt={alt}
      width={420}
      height={320}
      className="w-full max-w-[420px] h-auto"
      onError={() => setErrored(true)}
      unoptimized
    />
  );
}

/* ── Decorative background image with graceful fallback to a solid color. */
function CardBackground({ src }: { src: string }) {
  const [errored, setErrored] = useState(false);
  if (errored) return null;
  return (
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Hidden image element used purely to detect 404 → triggers fallback */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        className="hidden"
        onError={() => setErrored(true)}
      />
    </div>
  );
}

export default function ServicesGrid() {
  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="container-page">
        {/* Header — split: heading left, description right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-7">
            <span className="inline-block px-3 py-1 rounded-full bg-[#FFE8E1] text-[#F26B4E] text-[11px] font-medium mb-5">
              What We Build
            </span>
            <h2 className="text-[36px] lg:text-[40px] leading-[44px] font-semibold text-[#0F1112] tracking-[-0.01em]">
              Creating the Future of Your
              <br />
              <span className="italic font-semibold">Digital Presence</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <p className="text-[#484848] text-[14px] leading-[22px] lg:text-right">
              SaaS products, custom web platforms, mobile apps, and AI agents.
              From-scratch builds with publicized scope, fixed pricing, and a
              committed delivery date.
            </p>
          </div>
        </div>

        {/* Service cards */}
        <div className="space-y-5">
          {services.map((s) => (
            <article
              key={s.number}
              className="relative rounded-[24px] flex flex-col sm:flex-row items-stretch transition-transform hover:-translate-y-0.5 overflow-hidden min-h-[300px]"
              style={{ backgroundColor: s.bg }}
            >
              {/* Optional decorative background image (auto-falls back to bg color on 404) */}
              {s.bgImage && <CardBackground src={s.bgImage} />}

              {/* Left — copy */}
              <div className="relative flex-1 px-10 lg:px-14 py-10 lg:py-14 flex flex-col justify-center max-w-[640px]">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[36px] lg:text-[40px] font-bold text-[#0F1112] leading-none tracking-[-0.01em]">
                    {s.number}
                  </span>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path
                      d="M4 11h14M13 6l5 5-5 5"
                      stroke="#0F1112"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h3 className="text-[32px] lg:text-[36px] font-bold leading-tight text-[#0F1112] tracking-[-0.01em]">
                    {s.title}
                  </h3>
                </div>
                <p className="text-[15px] leading-[24px] text-[#484848] max-w-[480px]">
                  {s.description}
                </p>
                <button className="mt-[100px] self-start inline-flex items-center gap-2 px-5 h-11 rounded-full bg-white text-[#0F1112] text-[13px] font-medium shadow-[0_2px_8px_rgba(15,17,18,0.08)] hover:shadow-[0_6px_16px_rgba(15,17,18,0.14)] transition-shadow">
                  View More Details
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M3.5 8.5l5-5M4.5 3.5h4v4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Vertical divider — only when there's a real illustration on the right */}
              {s.illustrationImage && (
                <div
                  aria-hidden
                  className="hidden lg:block w-px self-stretch my-12"
                  style={{ background: 'rgba(15,17,18,0.10)' }}
                />
              )}

              {/* Right — illustration (uses real image when present, SVG otherwise) */}
              <div className="relative flex-shrink-0 flex items-center justify-center px-8 py-6 lg:py-10 lg:pr-14 lg:pl-10">
                {s.illustrationImage ? (
                  <IllustrationImg
                    src={s.illustrationImage}
                    alt={`${s.title} illustration`}
                    fallback={ill[s.illustration]}
                  />
                ) : (
                  ill[s.illustration]
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
