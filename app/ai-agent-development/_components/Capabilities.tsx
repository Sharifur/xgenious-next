'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

const LINE = { stroke: '#2a2a2a', strokeWidth: '1.5', fill: 'none' } as const;
const PULSE = { fill: 'none', stroke: '#ec7161', strokeWidth: '1.5', strokeLinecap: 'round' } as const;
const ARROW_FILL = '#ec7161';

function HeartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M17 3a4 4 0 0 1 4 4c0 4-5 9-9 12C8 16 3 11 3 7a4 4 0 0 1 7-2.65A4 4 0 0 1 17 3z" stroke="white" strokeWidth="1.8" strokeLinejoin="round"/>
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="5" rx="9" ry="3" stroke="white" strokeWidth="1.8"/>
      <path d="M21 5v5c0 1.657-4.03 3-9 3S3 11.657 3 10V5" stroke="white" strokeWidth="1.8"/>
      <path d="M21 10v5c0 1.657-4.03 3-9 3S3 16.657 3 15v-5" stroke="white" strokeWidth="1.8"/>
    </svg>
  );
}

function GearIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.8"/>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="white" strokeWidth="1.8"/>
    </svg>
  );
}

const CAPS = [
  {
    icon: <HeartIcon />,
    title: 'Multi Agent Collaboration',
    desc: 'Enable multiple AI agents to work together, share context, and complete complex business operations collaboratively.',
  },
  {
    icon: <DatabaseIcon />,
    title: 'Real-Time Decision Engine',
    desc: 'AI agents analyze live data, understand context, and make intelligent decisions instantly across workflows and systems.',
  },
  {
    icon: <GearIcon />,
    title: 'Seamless Tool Integration',
    desc: 'Connect AI agents with APIs, CRMs, databases, and third-party tools to automate actions across your business ecosystem.',
  },
];

function IconBadge({ icon }: { icon: ReactNode }) {
  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
      style={{ background: '#ec7161', boxShadow: '0 0 20px rgba(236,113,97,0.4)' }}
    >
      {icon}
    </div>
  );
}

function CapabilityCard({ icon, title, desc, className = '' }: (typeof CAPS)[number] & { className?: string }) {
  return (
    <div className={`relative mt-[30px] sm:mt-0 ${className}`}>
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
        <IconBadge icon={icon} />
      </div>
      <div
        className="rounded-[16px] p-5 sm:p-[40px] pt-10 sm:pt-14 text-center flex flex-col gap-[40px]"
        style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.08)' }}
      >
        <h3 className="text-white font-medium text-[20px] leading-[28px] sm:text-[28px] sm:leading-[36px] lg:text-[32px] lg:leading-[40px]">{title}</h3>
        <p className="text-[#9ca3af] text-[15px] leading-[24px]">{desc}</p>
      </div>
    </div>
  );
}

export default function Capabilities() {
  return (
    <section className="relative pb-14 sm:pb-20 lg:pb-[120px]" style={{ background: '#070b14' }}>
      {/* Decorative top-left glow */}
      <img
        src="/gradient-blur-2.png"
        alt=""
        aria-hidden
        className="absolute pointer-events-none select-none"
        style={{ top: -80, left: -120, width: 600, opacity: 0.5 }}
      />
      <div className="container-page px-4 sm:px-6 lg:px-0 flex flex-col gap-10 sm:gap-16 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-5">
          <div className="flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#ec7161] rounded-full" />
            <span className="text-[#ec7161] text-[14px] font-medium">Capabilities</span>
          </div>
          <h2 className="font-bold text-white text-[24px] leading-[32px] sm:text-[34px] sm:leading-[42px] lg:text-[48px] lg:leading-[58px]">
            Connected AI Capabilities
          </h2>
          <p className="text-[#9ca3af] text-[14px] sm:text-[16px] leading-6 max-w-[560px]">
            A complete ecosystem of intelligent AI capabilities designed to automate workflows, enhance decision-making, and scale business operations.
          </p>
        </div>

        {/* Diagram */}
        <div className="relative">

          <div className="hidden sm:block">
          {/* Central orb — same SVG as AgentWorkflow Multi-Layer Orchestration (unique IDs: cap_*) */}
          <div className="flex justify-center relative z-10">
            <motion.svg
              width="80" height="80" viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg"
              animate={{
                filter: [
                  'drop-shadow(0 0 6px rgba(236,113,97,0.3))',
                  'drop-shadow(0 0 28px rgba(236,113,97,0.9))',
                  'drop-shadow(0 0 6px rgba(236,113,97,0.3))',
                ],
              }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.5 }}
            >
              <path d="M45.5 91C70.629 91 91 70.629 91 45.5C91 20.371 70.629 0 45.5 0C20.371 0 0 20.371 0 45.5C0 70.629 20.371 91 45.5 91Z" fill="url(#cap_grad0)"/>
              <g filter="url(#cap_blur)">
                <path d="M45.4989 73.3045C60.8555 73.3045 73.3045 60.8555 73.3045 45.4989C73.3045 30.1423 60.8555 17.6934 45.4989 17.6934C30.1423 17.6934 17.6934 30.1423 17.6934 45.4989C17.6934 60.8555 30.1423 73.3045 45.4989 73.3045Z" fill="url(#cap_grad1)"/>
              </g>
              <defs>
                <filter id="cap_blur" x="5.34774" y="5.34774" width="80.3026" height="80.3026" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feGaussianBlur stdDeviation="6.17281" result="effect1_foregroundBlur"/>
                </filter>
                <radialGradient id="cap_grad0" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(45.5 45.5) scale(45.5)">
                  <stop stopColor="#F8B1A7"/>
                  <stop offset="1" stopColor="#8F483B" stopOpacity="0"/>
                </radialGradient>
                <radialGradient id="cap_grad1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(45.4989 45.4989) scale(27.8056)">
                  <stop stopColor="#FFD8D3"/>
                  <stop offset="0.4" stopColor="#EC7161"/>
                  <stop offset="1" stopColor="#672219"/>
                </radialGradient>
              </defs>
            </motion.svg>
          </div>

          {/* SVG connector lines — y coords are pixels (height=380 maps 1:1), x scales with width */}
          <svg
            className="absolute top-0 left-0 w-full pointer-events-none z-0"
            viewBox="0 0 1000 380"
            preserveAspectRatio="none"
            style={{ height: 380, overflow: 'visible' }}
          >
            {/* All three branches start from orb center (500,40) — orb sits AT the junction */}

            {/* Left branch — base + pulse */}
            <path d="M 500 40 L 185 40 Q 167 40 167 58 L 167 240" {...LINE} />
            <motion.path
              d="M 500 40 L 185 40 Q 167 40 167 58 L 167 240"
              {...PULSE} pathLength={1} strokeDasharray="0.12 0.88"
              animate={{ strokeDashoffset: [0, -1] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'linear', delay: 0 }}
            />
            <polygon points="160,238 174,238 167,247" fill={ARROW_FILL} />

            {/* Right branch — base + pulse */}
            <path d="M 500 40 L 815 40 Q 833 40 833 58 L 833 240" {...LINE} />
            <motion.path
              d="M 500 40 L 815 40 Q 833 40 833 58 L 833 240"
              {...PULSE} pathLength={1} strokeDasharray="0.12 0.88"
              animate={{ strokeDashoffset: [0, -1] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'linear', delay: 0.4 }}
            />
            <polygon points="826,238 840,238 833,247" fill={ARROW_FILL} />

            {/* Center branch — base + pulse */}
            <path d="M 500 40 L 500 350" {...LINE} />
            <motion.path
              d="M 500 40 L 500 350"
              {...PULSE} pathLength={1} strokeDasharray="0.12 0.88"
              animate={{ strokeDashoffset: [0, -1] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'linear', delay: 0.8 }}
            />
            <polygon points="493,348 507,348 500,357" fill={ARROW_FILL} />
          </svg>
          </div>

          {/* Cards grid — left/right at y≈240, center badge at y≈352 (mt-28 = 112px lower) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-6 sm:mt-40 relative z-10 items-start">
            <CapabilityCard {...CAPS[0]} />
            <CapabilityCard {...CAPS[1]} className="sm:mt-28" />
            <CapabilityCard {...CAPS[2]} />
          </div>

        </div>
      </div>
    </section>
  );
}
