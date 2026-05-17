'use client';

import SectionBadge from '@/components/ui/SectionBadge';
import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { processSteps } from '@/data/saas-page';

/* ── Dedicated icon per step ── */

// 01 Discovery & Requirements — magnifying glass over a document
const IconDiscovery = ({ active }: { active: boolean }) => {
  const c = active ? '#F26B4E' : '#0F1112';
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 3h9l5 5v9a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" stroke={c} strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M14 3v5h5" stroke={c} strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="11" cy="14" r="2.6" stroke={c} strokeWidth="1.6" />
      <path d="M13 16l2 2" stroke={c} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
};

// 02 Solution Architecture — connected nodes / network
const IconArchitecture = ({ active }: { active: boolean }) => {
  const c = active ? '#F26B4E' : '#0F1112';
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="6" r="2.4" stroke={c} strokeWidth="1.6" />
      <circle cx="5" cy="18" r="2.4" stroke={c} strokeWidth="1.6" />
      <circle cx="19" cy="18" r="2.4" stroke={c} strokeWidth="1.6" />
      <circle cx="12" cy="13" r="2.4" stroke={c} strokeWidth="1.6" />
      <path d="M12 8.4v2.2M10 14.4l-3.4 2.4M14 14.4l3.4 2.4" stroke={c} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
};

// 03 Development & Customization — code brackets
const IconDevelopment = ({ active }: { active: boolean }) => {
  const c = active ? '#F26B4E' : '#0F1112';
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M9 7l-5 5 5 5M15 7l5 5-5 5" stroke={c} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 5l-2 14" stroke={c} strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
};

// 04 QC & Deployment — rocket
const IconDeployment = ({ active }: { active: boolean }) => {
  const c = active ? '#F26B4E' : '#0F1112';
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M14.5 3c2 0 4 .5 5.5 1.5C21 6 21.5 8 21.5 10c-3 0-6 1.5-8 4l-3.5 3.5L7 14l3.5-3.5C13 8.5 14.5 5.5 14.5 3z"
        stroke={c}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="15.5" cy="8.5" r="1.4" fill={c} />
      <path d="M5 16l-2 5 5-2M9 18l-3 3" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

const stepIcons = [IconDiscovery, IconArchitecture, IconDevelopment, IconDeployment];

/* ── Reusable shared visual frame ── */
function VisualFrame({ children, gradient }: { children: React.ReactNode; gradient: string }) {
  return (
    <div
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden"
      style={{ background: gradient }}
    >
      <svg
        viewBox="0 0 400 300"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        {children}
      </svg>
    </div>
  );
}

/* ── 1. Discovery & Requirements — user research + requirements doc ── */
const DiscoveryVisual = () => (
  <VisualFrame gradient="linear-gradient(135deg, #DCE8F4, #B4CCE0)">
    <defs>
      <pattern id="dots" width="18" height="18" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="1" fill="#FFFFFF" opacity="0.3" />
      </pattern>
      <linearGradient id="disc-card" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#F0F6FB" />
      </linearGradient>
    </defs>

    {/* Dot grid bg */}
    <rect width="400" height="300" fill="url(#dots)" />

    {/* ── User / interviewer icon (left) ── */}
    <g transform="translate(58 130)">
      <circle r="28" fill="#FFFFFF" opacity="0.85" stroke="#9BBDD4" strokeWidth="1" />
      <circle cy="-9" r="9" fill="#5A8BAA" />
      <path d="M -13 12 Q -13 2 0 0 Q 13 2 13 12 Z" fill="#5A8BAA" />
    </g>
    {/* Speech bubble */}
    <rect x="18" y="58" width="88" height="36" rx="7" fill="#FFFFFF" stroke="#9BBDD4" strokeWidth="1" />
    <path d="M 48 94 L 43 104 L 56 94 Z" fill="#FFFFFF" stroke="#9BBDD4" strokeWidth="1" />
    <text x="62" y="73" fontFamily="Inter,sans-serif" fontSize="7.5" fontWeight="600" fill="#1E3A5F" textAnchor="middle">What do</text>
    <text x="62" y="86" fontFamily="Inter,sans-serif" fontSize="7.5" fontWeight="600" fill="#1E3A5F" textAnchor="middle">you need?</text>

    {/* Dashed arrow from user to doc */}
    <path d="M 90 130 Q 120 130 130 130" stroke="#9BBDD4" strokeWidth="1.2" strokeDasharray="4 3" fill="none" />
    <polygon points="130,126 138,130 130,134" fill="#9BBDD4" />

    {/* ── Requirements document (center) ── */}
    <rect x="138" y="36" width="128" height="228" rx="8" fill="url(#disc-card)" stroke="#B8D0E3" strokeWidth="1" />
    {/* Clip at top */}
    <rect x="175" y="30" width="54" height="16" rx="4" fill="#5A8BAA" />
    <rect x="184" y="34" width="36" height="8" rx="2" fill="#3D6E8A" />
    {/* Header label */}
    <rect x="138" y="36" width="128" height="26" rx="8" fill="#1E3A5F" />
    <text x="202" y="53" fontFamily="Inter,sans-serif" fontSize="9" fontWeight="700" fill="#FFFFFF" textAnchor="middle">Requirements</text>

    {/* Checkbox items */}
    {[
      { y: 86,  label: 'User research',    done: true  },
      { y: 114, label: 'Stakeholder input', done: true  },
      { y: 142, label: 'Feature mapping',   done: true  },
      { y: 170, label: 'Tech constraints',  done: false },
      { y: 198, label: 'Scope definition',  done: false },
      { y: 226, label: 'Timeline & budget', done: false },
    ].map((item) => (
      <g key={item.label}>
        <rect x="154" y={item.y - 8} width="13" height="13" rx="2.5"
          fill={item.done ? '#F26B4E' : 'none'}
          stroke={item.done ? '#F26B4E' : '#9BBDD4'}
          strokeWidth="1.2"
        />
        {item.done && (
          <path
            d={`M ${157} ${item.y - 1} L ${160} ${item.y + 2} L ${165} ${item.y - 4}`}
            stroke="#FFFFFF" strokeWidth="1.5" fill="none"
            strokeLinecap="round" strokeLinejoin="round"
          />
        )}
        <text x="174" y={item.y + 2} fontFamily="Inter,sans-serif" fontSize="8.5" fill={item.done ? '#1E3A5F' : '#7AA0BA'}>
          {item.label}
        </text>
      </g>
    ))}

    {/* ── Magnifying glass (right) ── */}
    <circle cx="310" cy="148" r="52" fill="#FFFFFF" opacity="0.15" />
    <circle cx="310" cy="148" r="46" fill="#FFFFFF" opacity="0.7" stroke="#1E3A5F" strokeWidth="3.5" />
    {/* Zoomed content inside glass */}
    <rect x="280" y="132" width="60" height="9" rx="2" fill="#F26B4E" opacity="0.85" />
    <rect x="284" y="148" width="12" height="12" rx="2.5" fill="#F26B4E" />
    <path d="M 287 154 L 290 157 L 295 150" stroke="#FFFFFF" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="302" y="149" width="34" height="4" rx="1.5" fill="#1E3A5F" opacity="0.5" />
    <rect x="302" y="157" width="24" height="4" rx="1.5" fill="#1E3A5F" opacity="0.3" />
    {/* Handle */}
    <line x1="346" y1="185" x2="375" y2="215" stroke="#1E3A5F" strokeWidth="7" strokeLinecap="round" />
    <line x1="344" y1="183" x2="373" y2="213" stroke="#3A6888" strokeWidth="4" strokeLinecap="round" />

    {/* Dashed arrow from doc to magnifier */}
    <path d="M 266 148 Q 280 148 290 148" stroke="#9BBDD4" strokeWidth="1.2" strokeDasharray="4 3" fill="none" />
  </VisualFrame>
);

/* ── 2. Solution Architecture — blueprints + connected nodes ── */
const ArchitectureVisual = () => (
  <VisualFrame gradient="linear-gradient(135deg, #DCE7F2, #B6CBE3)">
    <defs>
      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.4" />
      </pattern>
    </defs>
    <rect width="400" height="300" fill="url(#grid)" />

    {/* Architecture nodes */}
    <g stroke="#1E3A5F" strokeWidth="1.5" fill="none">
      <line x1="100" y1="80" x2="200" y2="150" />
      <line x1="200" y1="150" x2="300" y2="80" />
      <line x1="200" y1="150" x2="100" y2="220" />
      <line x1="200" y1="150" x2="300" y2="220" />
      <line x1="100" y1="80" x2="100" y2="220" />
      <line x1="300" y1="80" x2="300" y2="220" />
    </g>

    {/* Center hub */}
    <g transform="translate(200 150)">
      <circle r="32" fill="#FFFFFF" stroke="#1E3A5F" strokeWidth="2" />
      <circle r="20" fill="#F26B4E" />
      <path d="M -8 0 L -2 6 L 8 -6" stroke="#FFFFFF" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </g>

    {/* Corner nodes */}
    {[
      { x: 100, y: 80, label: 'API' },
      { x: 300, y: 80, label: 'DB' },
      { x: 100, y: 220, label: 'CDN' },
      { x: 300, y: 220, label: 'AUTH' },
    ].map((n) => (
      <g key={n.label} transform={`translate(${n.x} ${n.y})`}>
        <rect x="-22" y="-14" width="44" height="28" rx="4" fill="#FFFFFF" stroke="#1E3A5F" strokeWidth="1.5" />
        <text y="4" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="600" fill="#1E3A5F" textAnchor="middle">
          {n.label}
        </text>
      </g>
    ))}

    {/* Floating blueprint detail */}
    <g transform="translate(340 260)" opacity="0.7">
      <rect x="-22" y="-14" width="44" height="28" rx="2" fill="none" stroke="#1E3A5F" strokeWidth="1" />
      <line x1="-18" y1="-8" x2="18" y2="-8" stroke="#1E3A5F" strokeWidth="0.6" />
      <line x1="-18" y1="0" x2="14" y2="0" stroke="#1E3A5F" strokeWidth="0.6" />
      <line x1="-18" y1="8" x2="10" y2="8" stroke="#1E3A5F" strokeWidth="0.6" />
    </g>
  </VisualFrame>
);

/* ── 3. Development & Customization — code editor mockup ── */
const DevelopmentVisual = () => (
  <VisualFrame gradient="linear-gradient(135deg, #1E2530, #0F141A)">
    {/* Window */}
    <rect x="40" y="40" width="320" height="220" rx="8" fill="#252B36" stroke="#3A424F" strokeWidth="1" />
    <rect x="40" y="40" width="320" height="22" rx="8" fill="#1A1F28" />
    <circle cx="56" cy="51" r="4" fill="#EF4444" />
    <circle cx="70" cy="51" r="4" fill="#F59E0B" />
    <circle cx="84" cy="51" r="4" fill="#10B981" />

    {/* Sidebar */}
    <rect x="40" y="62" width="60" height="198" fill="#1A1F28" />
    {[80, 100, 120, 140, 160, 180].map((y) => (
      <rect key={y} x="50" y={y} width="40" height="3" rx="0.5" fill="#3A424F" />
    ))}

    {/* Code lines */}
    <g fontFamily="monospace" fontSize="10" fill="#FFFFFF">
      <text x="115" y="92"><tspan fill="#C28BFF">function</tspan> <tspan fill="#7DD3FC">build</tspan>() {`{`}</text>
      <text x="125" y="110"><tspan fill="#C28BFF">const</tspan> app = <tspan fill="#7DD3FC">create</tspan>();</text>
      <text x="125" y="128"><tspan fill="#C28BFF">return</tspan> app.<tspan fill="#FBBF24">deploy</tspan>();</text>
      <text x="115" y="146">{`}`}</text>
      <text x="115" y="172"><tspan fill="#9CA3AF">{'// agile sprints'}</tspan></text>
      <text x="115" y="190"><tspan fill="#C28BFF">async function</tspan> <tspan fill="#7DD3FC">ship</tspan>() {`{`}</text>
      <text x="125" y="208"><tspan fill="#C28BFF">await</tspan> <tspan fill="#FBBF24">test</tspan>();</text>
      <text x="125" y="226"><tspan fill="#C28BFF">await</tspan> <tspan fill="#FBBF24">release</tspan>();</text>
      <text x="115" y="244">{`}`}</text>
    </g>

    {/* Cursor blink */}
    <rect x="194" y="200" width="2" height="11" fill="#F26B4E">
      <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
    </rect>

    {/* Floating gear */}
    <g transform="translate(340 90)" fill="#F26B4E">
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <rect key={deg} x="-2.5" y="-16" width="5" height="6" transform={`rotate(${deg})`} />
      ))}
      <circle r="11" />
      <circle r="4" fill="#1E2530" />
    </g>
  </VisualFrame>
);

/* ── 4. QC & Deployment — checklist + rocket ── */
const DeploymentVisual = () => (
  <VisualFrame gradient="linear-gradient(135deg, #FFE8E1, #FFCCB8)">
    {/* Stars */}
    {[
      [50, 60], [80, 30], [120, 80], [330, 50], [360, 100], [320, 30],
    ].map(([x, y], i) => (
      <g key={i} transform={`translate(${x} ${y})`}>
        <path d="M 0 -3 L 1 -1 L 3 0 L 1 1 L 0 3 L -1 1 L -3 0 L -1 -1 Z" fill="#FFFFFF" opacity="0.7" />
      </g>
    ))}

    {/* Checklist card */}
    <g>
      <rect x="40" y="80" width="160" height="160" rx="10" fill="#FFFFFF" stroke="#F26B4E" strokeWidth="1" />
      <text x="60" y="108" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill="#0F1112">
        QA Checklist
      </text>
      {[
        { y: 130, text: 'Unit tests', done: true },
        { y: 150, text: 'E2E tests', done: true },
        { y: 170, text: 'Performance', done: true },
        { y: 190, text: 'Accessibility', done: true },
        { y: 210, text: 'Production deploy', done: false },
      ].map((item) => (
        <g key={item.text}>
          <rect x="60" y={item.y - 8} width="12" height="12" rx="2" fill={item.done ? '#F26B4E' : 'none'} stroke="#F26B4E" strokeWidth="1.2" />
          {item.done && (
            <path d={`M ${63} ${item.y - 2} L ${66} ${item.y + 1} L ${70} ${item.y - 4}`} stroke="white" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          )}
          <text x="80" y={item.y + 1} fontFamily="Inter, sans-serif" fontSize="9" fill="#2F2F2F">
            {item.text}
          </text>
        </g>
      ))}
    </g>

    {/* Rocket */}
    <g transform="translate(290 160)">
      <path
        d="M 0 -50 C -10 -45, -16 -20, -16 5 L -16 25 L 16 25 L 16 5 C 16 -20, 10 -45, 0 -50 Z"
        fill="#FFFFFF"
        stroke="#0F1112"
        strokeWidth="1.6"
      />
      <circle cx="0" cy="-15" r="6" fill="#7DD3FC" stroke="#0F1112" strokeWidth="1.4" />
      {/* Fins */}
      <path d="M -16 5 L -28 30 L -16 25 Z" fill="#F26B4E" stroke="#0F1112" strokeWidth="1.4" />
      <path d="M 16 5 L 28 30 L 16 25 Z" fill="#F26B4E" stroke="#0F1112" strokeWidth="1.4" />
      {/* Flame */}
      <path d="M -10 25 Q -8 50, 0 60 Q 8 50, 10 25 Z" fill="#F26B4E" />
      <path d="M -5 30 Q -4 45, 0 55 Q 4 45, 5 30 Z" fill="#FBBF24" />
    </g>

    {/* Cloud */}
    <g transform="translate(310 80)" fill="#FFFFFF" opacity="0.85">
      <ellipse cx="0" cy="0" rx="18" ry="8" />
      <ellipse cx="-12" cy="2" rx="8" ry="6" />
      <ellipse cx="14" cy="2" rx="9" ry="6" />
    </g>
  </VisualFrame>
);

const visuals = [
  <DiscoveryVisual key="d" />,
  <ArchitectureVisual key="a" />,
  <DevelopmentVisual key="dev" />,
  <DeploymentVisual key="qa" />,
];

export default function ProcessSteps() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="process"
      className="py-24 relative overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/how-we-work-bg.jpg"
        alt=""
        fill
        className="object-cover"
        priority={false}
      />
      <div className="container-page relative z-10">
        {/* Centered header */}
        <div className="text-center mb-14 max-w-[680px] mx-auto">
          <SectionBadge className="mb-5">How We Work</SectionBadge>
          <h2 className="text-[30px] sm:text-[40px] lg:text-[44px] leading-[38px] sm:leading-[52px] font-bold text-[#0F1112] tracking-[-0.01em]">
            Clear Process,{' '}
            <span className="italic font-bold">Consistent Results.</span>
          </h2>
          <p className="mt-4 text-[#484848] text-[14px] leading-[22px] max-w-[560px] mx-auto">
            From research to delivery, we combine strategy, design, and technology to create
            scalable and user-focused digital experiences.
          </p>
        </div>

        {/* 2-column body */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left — interactive step list */}
          <div className="flex flex-col">
            {processSteps.map((step, i) => {
              const isActive = active === i;
              const Icon = stepIcons[i];
              return (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  aria-pressed={isActive}
                  className={`group relative text-left transition-all duration-500 ease-out overflow-hidden ${
                    isActive
                      ? 'bg-white rounded-xl px-6 py-5 shadow-[0_2px_18px_rgba(15,17,18,0.06)]'
                      : 'px-6 py-5'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                        isActive ? 'bg-[#FFE8E1]' : 'bg-[#F5F6F8]'
                      }`}
                    >
                      <Icon active={isActive} />
                    </span>
                    <div className="flex-1">
                      <h3 className="text-[17px] font-semibold text-[#0F1112] leading-7">
                        {step.title}
                      </h3>
                      {/* Description: animated open/close */}
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.p
                            key="desc"
                            initial={{ height: 0, opacity: 0, marginTop: 0 }}
                            animate={{ height: 'auto', opacity: 1, marginTop: 6 }}
                            exit={{ height: 0, opacity: 0, marginTop: 0 }}
                            transition={{ duration: 0.35, ease: 'easeOut' }}
                            className="text-[13px] text-[#8A8F99] leading-[20px] overflow-hidden"
                          >
                            {step.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <span
                    aria-hidden
                    className={`absolute left-0 right-0 bottom-0 transition-all duration-300 ${
                      isActive ? 'h-[3px] bg-[#F26B4E] rounded-full' : 'h-px bg-[#E5E7EC]'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right — animated swappable visual */}
          <div className="relative w-full aspect-[4/3]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.97, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: -8 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="absolute inset-0"
              >
                {visuals[active]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
