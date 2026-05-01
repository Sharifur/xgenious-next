'use client';

import { useState } from 'react';
import { aiFeatures, aiTabs } from '@/data/saas-page';

function BrainVisual() {
  return (
    <svg
      viewBox="0 0 400 320"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <defs>
        <radialGradient id="brainGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4DD0E1" stopOpacity="0.45" />
          <stop offset="60%" stopColor="#26C6DA" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#26C6DA" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="brainBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4DD0E1" />
          <stop offset="100%" stopColor="#0097A7" />
        </linearGradient>
      </defs>

      {/* Glow */}
      <circle cx="200" cy="160" r="150" fill="url(#brainGlow)" />

      {/* Electric tendrils */}
      <g stroke="#4DD0E1" strokeWidth="1.4" fill="none" strokeLinecap="round" opacity="0.7">
        <path d="M200 50 Q 180 30 160 20" />
        <path d="M170 60 Q 130 40 90 50" />
        <path d="M260 70 Q 290 50 320 60" />
        <path d="M280 110 Q 320 90 360 100" />
        <path d="M120 130 Q 70 130 30 150" />
        <path d="M150 220 Q 100 240 60 260" />
        <path d="M270 250 Q 320 270 360 280" />
        <path d="M210 280 Q 220 310 240 320" />
      </g>

      {/* Brain shape */}
      <g>
        <path
          d="M 200 80
             C 150 80, 110 110, 110 160
             C 110 210, 150 240, 200 240
             C 250 240, 290 210, 290 160
             C 290 110, 250 80, 200 80 Z"
          fill="url(#brainBody)"
          opacity="0.85"
        />
        {/* Brain folds */}
        <path
          d="M 140 140 Q 170 130 200 140 Q 230 150 260 140"
          stroke="#80DEEA"
          strokeWidth="1.5"
          fill="none"
          opacity="0.8"
        />
        <path
          d="M 130 170 Q 165 165 200 175 Q 235 185 270 170"
          stroke="#80DEEA"
          strokeWidth="1.5"
          fill="none"
          opacity="0.8"
        />
        <path
          d="M 140 200 Q 170 195 200 200 Q 230 205 260 195"
          stroke="#80DEEA"
          strokeWidth="1.5"
          fill="none"
          opacity="0.8"
        />
      </g>

      {/* CPU chip overlay */}
      <g>
        <rect
          x="160"
          y="135"
          width="80"
          height="60"
          rx="6"
          fill="rgba(0,0,0,0.4)"
          stroke="#B2EBF2"
          strokeWidth="1.2"
        />
        <rect x="172" y="148" width="56" height="34" rx="3" stroke="#80DEEA" strokeWidth="0.8" fill="none" />
        {/* Chip pins */}
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <line x1={172 + i * 16} y1="135" x2={172 + i * 16} y2="128" stroke="#80DEEA" strokeWidth="1" />
            <line x1={172 + i * 16} y1="195" x2={172 + i * 16} y2="202" stroke="#80DEEA" strokeWidth="1" />
            <line x1="160" y1={148 + i * 11} x2="153" y2={148 + i * 11} stroke="#80DEEA" strokeWidth="1" />
            <line x1="240" y1={148 + i * 11} x2="247" y2={148 + i * 11} stroke="#80DEEA" strokeWidth="1" />
          </g>
        ))}
      </g>

      {/* Spark dots */}
      {[
        [60, 90],
        [340, 100],
        [40, 220],
        [360, 230],
        [200, 30],
        [200, 290],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2" fill="#4DD0E1" />
      ))}
    </svg>
  );
}

export default function AIAgentSection() {
  const [active, setActive] = useState('Automation');

  return (
    <section className="py-24 bg-[#0C0C0E]">
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#F26B4E]/40 text-[#F26B4E] text-[12px] font-medium mb-6">
              Capabilities
            </span>
            <h2 className="text-[44px] leading-[52px] font-semibold text-white tracking-[-0.01em]">
              AI Agent that <span className="italic font-semibold">Actually do Work</span>
            </h2>
            <p className="mt-5 text-[#A6A6A6] text-[14px] leading-[22px] max-w-[440px]">
              We build smart, scalable, and efficient digital products by embedding intelligence
              at every layer — from autonomous agents that reason in real time, to systems that
              learn, adapt, and decide alongside your team.
            </p>

            <ul className="mt-10 max-w-[460px]">
              {aiFeatures.map((f, i) => (
                <li
                  key={f.number}
                  className={`flex gap-5 py-5 ${
                    i < aiFeatures.length - 1 ? 'border-b border-[#1F2127]' : ''
                  }`}
                >
                  <span className="text-[12px] font-medium text-[#8A8F99] flex-shrink-0 w-8">
                    /{f.number}.
                  </span>
                  <div className="flex-1">
                    <h3 className="text-[16px] font-semibold text-white leading-6 mb-1">
                      {f.title}
                    </h3>
                    <p className="text-[13px] text-[#8A8F99] leading-[20px]">{f.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — interactive panel */}
          <div className="rounded-3xl bg-[#131418] border border-[#1F2127] p-6 lg:p-8 shadow-2xl shadow-black/40">
            {/* Tabs */}
            <div className="flex items-center gap-1 p-1 rounded-full bg-[#0C0C0E] border border-[#1F2127] mb-6 overflow-x-auto">
              {aiTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActive(tab)}
                  className={`px-4 py-2 rounded-full text-[12px] font-medium transition-colors whitespace-nowrap ${
                    active === tab
                      ? 'bg-[#F26B4E] text-white'
                      : 'text-[#A6A6A6] hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Visual */}
            <div className="rounded-2xl bg-[#0C0C0E] border border-[#1F2127] aspect-[4/3] overflow-hidden">
              <BrainVisual />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
