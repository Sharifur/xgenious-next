'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ownProducts, type OwnProduct } from '@/data/saas-page';


function ProductCard({ p }: { p: OwnProduct }) {
  return (
    <a
      href={p.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative rounded-3xl overflow-hidden bg-[#1A1A1A] flex-shrink-0 w-[400px] h-[500px] block"
    >
      <Image src={p.image} alt={p.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />

      {/* Bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

      {/* Black overlay on hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-400" />

      {/* Glass shine — sweeps left→right once on hover */}
      <div className="absolute top-0 left-0 h-full w-32 -translate-x-48 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none group-hover:translate-x-[700px] transition-transform duration-700 ease-in-out" />

      {/* Badges */}
      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
        {p.badges.map((b) => (
          <span
            key={b}
            className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-[11px] font-medium text-white"
          >
            {b}
          </span>
        ))}
      </div>

      {/* Name + description — hidden by default, revealed on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
        <h3 className="text-[20px] font-bold text-white leading-tight">{p.name}</h3>
        <p className="mt-1 text-[13px] text-[#A6A6A6] leading-[18px]">{p.description}</p>
      </div>
    </a>
  );
}

export default function PortfolioGrid() {
  const [paused, setPaused] = useState(false);

  return (
    <section id="portfolio" className="py-24 bg-white">
      {/* Header */}
      <div className="container-page">
        <div className="text-center mb-12 max-w-[640px] mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFE8E1] text-[#F26B4E] text-[12px] font-medium mb-5">
            Our Own Products
          </span>
          <h2 className="text-[44px] leading-[52px] font-semibold text-[#0F1112] tracking-[-0.01em]">
            Built for Your{' '}
            <span className="italic font-semibold">Digital Future</span>
          </h2>
          <p className="mt-4 text-[#484848] text-[15px] leading-6 max-w-[460px] mx-auto">
            We don&apos;t just build software for others — we create and operate our own digital
            products.
          </p>
        </div>
      </div>

      {/* Full-width auto-sliding strip */}
      <div className="relative overflow-hidden">
        {/* Left shadow — 50% overflows outside the left edge */}
        <svg width="400" height="500" viewBox="0 0 294 1347" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 z-10 pointer-events-none select-none" style={{ left: -200 }} aria-hidden>
          <g filter="url(#shadow-left)">
            <ellipse cx="-84" cy="673.199" rx="244" ry="539.5" fill="white" fillOpacity="0.88"/>
          </g>
          <defs>
            <filter id="shadow-left" x="-461.7" y="-0.000778198" width="755.4" height="1346.4" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="66.85" result="effect1_foregroundBlur"/>
            </filter>
          </defs>
        </svg>
        {/* Right shadow — flipped horizontally, 50% overflows outside the right edge */}
        <svg width="400" height="500" viewBox="0 0 294 1347" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 z-10 pointer-events-none select-none" style={{ right: -200, transform: 'scaleX(-1)' }} aria-hidden>
          <g filter="url(#shadow-right)">
            <ellipse cx="-84" cy="673.199" rx="244" ry="539.5" fill="white" fillOpacity="0.88"/>
          </g>
          <defs>
            <filter id="shadow-right" x="-461.7" y="-0.000778198" width="755.4" height="1346.4" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="66.85" result="effect1_foregroundBlur"/>
            </filter>
          </defs>
        </svg>
        <div
          className="flex gap-5 w-max px-5"
          style={{
            animation: 'marquee-left 40s linear infinite',
            animationPlayState: paused ? 'paused' : 'running',
          }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {Array.from({ length: 4 }).flatMap((_, set) =>
            ownProducts.map((p) => (
              <ProductCard key={`${set}-${p.name}`} p={p} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
