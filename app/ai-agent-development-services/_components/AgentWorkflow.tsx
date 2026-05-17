'use client';

import { motion } from 'framer-motion';

const inputNodes = ['Visitor Message', 'Site & Agent Keys', 'Knowledge Base'];

const pipelineSteps = [
  { label: 'Visitor Message', sub: 'Stages 1–2' },
  { label: 'Coverage Gate',   sub: 'Stages 3–4' },
  { label: 'Draft Generator', sub: 'Stages 5–6' },
  { label: 'Guard Rails',     sub: 'Stages 7–8' },
  { label: 'Reply',           sub: 'Stage 9' },
];

const LINE = { stroke: '#B3B3B3', strokeWidth: '2' } as const;

interface Wp { left: string; top: number }

// Outer div travels the path (left/top/opacity).
// Inner div pulses the glow independently so the two animations don't share timing.
function TravelDot({
  waypoints,
  times,
  duration = 9,
  delay = 0,
  repeatDelay = 2,
}: {
  waypoints: Wp[];
  times: number[];
  duration?: number;
  delay?: number;
  repeatDelay?: number;
}) {
  const n = waypoints.length;
  const opacityKf = [0, ...Array(n - 2).fill(1), 0];

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left:       waypoints[0].left,
        top:        waypoints[0].top,
        marginLeft: -7.5,
        marginTop:  -7.5,
        width:  15,
        height: 15,
      }}
      initial={{ opacity: 0 }}
      animate={{
        left:    waypoints.map(w => w.left),
        top:     waypoints.map(w => w.top),
        opacity: opacityKf,
      }}
      transition={{
        duration,
        times,
        repeat: Infinity,
        ease: 'linear',
        delay,
        repeatDelay,
      }}
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-white"
        animate={{
          boxShadow: [
            '0 0 3px 2px rgba(236,113,97,0.2)',
            '0 0 14px 6px rgba(236,113,97,0.75)',
            '0 0 3px 2px rgba(236,113,97,0.2)',
          ],
        }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.5 }}
      />
    </motion.div>
  );
}

export default function AgentWorkflow() {
  // Bezier curves are sampled at t=0.3 and t=0.6 to produce intermediate waypoints,
  // so the dot follows the arc rather than cutting straight across the corner.
  //
  // Left  corner 1: Q 167 84 197 84  (P0=167,54  P1=167,84  P2=197,84)
  // Left  corner 2: Q 500 84 500 108 (P0=476,84  P1=500,84  P2=500,108)
  // Right corner 1: Q 833 84 803 84  (P0=833,54  P1=833,84  P2=803,84)
  // Right corner 2: Q 500 84 500 108 (P0=524,84  P1=500,84  P2=500,108)
  //
  // Times are proportional to pixel path length for constant-speed travel.

  return (
    <section className="pb-14 sm:pb-20 lg:pb-[120px]" style={{ background: '#070b14' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0 flex flex-col gap-10 sm:gap-16">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-5">
          <div className="flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#ec7161] rounded-full" />
            <span className="text-[#ec7161] text-[14px] font-medium">AI Agent Workflow</span>
          </div>
          <h2 className="font-bold text-white text-[24px] leading-[32px] sm:text-[34px] sm:leading-[42px] lg:text-[44px] lg:leading-[54px] max-w-[720px]">
            How an Agent Thinks, Retrieves &amp; Responds
          </h2>
          <p className="text-[#9ca3af] text-[14px] sm:text-[16px] leading-6 max-w-[600px]">
            Every reply our agents produce passes through a four-layer knowledge pipeline and a nine-step contract. No layer is optional. No step can be reordered. Three hard stops protect the output from drift.
          </p>
        </div>

        {/* Diagram card */}
        <div
          className="hidden md:flex rounded-[16px] border border-white/[0.07] p-10 flex-col"
          style={{ background: '#0d1117' }}
        >
          {/* Input nodes */}
          <div className="grid grid-cols-3 gap-5">
            {inputNodes.map((label) => (
              <div
                key={label}
                className="flex items-center justify-center h-[70px] rounded-[10px] border border-white/[0.08] text-white text-[15px] font-medium"
                style={{ background: 'rgba(255,255,255,0.04)' }}
              >
                {label}
              </div>
            ))}
          </div>

          {/* Connector: input nodes → orchestration */}
          <div className="relative w-full" style={{ height: 185 }}>
            <svg viewBox="0 0 1000 185" className="w-full h-full" preserveAspectRatio="none">
              <path d="M 167 0 L 167 54 Q 167 84 197 84 L 476 84 Q 500 84 500 108"
                    fill="none" {...LINE} />
              <path d="M 833 0 L 833 54 Q 833 84 803 84 L 524 84 Q 500 84 500 108"
                    fill="none" {...LINE} />
              <line x1="500" y1="0" x2="500" y2="175" {...LINE} />
              <polygon points="495,176 505,176 500,184" fill="#B3B3B3" />
              <text x="295" y="102" fill="#6b7280" fontSize="12" fontFamily="system-ui,sans-serif">Query</text>
              <text x="514" y="76"  fill="#6b7280" fontSize="12" fontFamily="system-ui,sans-serif">Scope</text>
              <text x="660" y="102" fill="#6b7280" fontSize="12" fontFamily="system-ui,sans-serif">Fetch</text>
            </svg>

            {/* Left path — 9 waypoints: vertical + 2 sampled corners + horizontal + 2 sampled corners */}
            <TravelDot
              waypoints={[
                { left: '16.7%',  top: 0   },  // M 167 0
                { left: '16.7%',  top: 54  },  // L 167 54  (start of corner 1)
                { left: '16.97%', top: 69  },  // corner 1 t=0.3
                { left: '17.78%', top: 79  },  // corner 1 t=0.6
                { left: '19.7%',  top: 84  },  // end of corner 1 / start of horizontal
                { left: '47.6%',  top: 84  },  // L 476 84  (start of corner 2)
                { left: '48.82%', top: 86  },  // corner 2 t=0.3
                { left: '49.62%', top: 93  },  // corner 2 t=0.6
                { left: '50%',    top: 108 },  // end of corner 2
              ]}
              times={[0, 0.12, 0.15, 0.18, 0.23, 0.91, 0.94, 0.97, 1.0]}
              duration={9}
              delay={0}
            />

            {/* Right path — mirror of left */}
            <TravelDot
              waypoints={[
                { left: '83.3%',  top: 0   },  // M 833 0
                { left: '83.3%',  top: 54  },  // L 833 54  (start of corner 1)
                { left: '83.03%', top: 69  },  // corner 1 t=0.3
                { left: '82.22%', top: 79  },  // corner 1 t=0.6
                { left: '80.3%',  top: 84  },  // end of corner 1 / start of horizontal
                { left: '52.4%',  top: 84  },  // L 524 84  (start of corner 2)
                { left: '51.18%', top: 86  },  // corner 2 t=0.3
                { left: '50.38%', top: 93  },  // corner 2 t=0.6
                { left: '50%',    top: 108 },  // end of corner 2
              ]}
              times={[0, 0.12, 0.15, 0.18, 0.23, 0.91, 0.94, 0.97, 1.0]}
              duration={9}
              delay={0.8}
            />

            {/* Center — straight vertical */}
            <TravelDot
              waypoints={[
                { left: '50%', top: 0   },
                { left: '50%', top: 58  },
                { left: '50%', top: 117 },
                { left: '50%', top: 175 },
              ]}
              times={[0, 0.33, 0.67, 1]}
              duration={9}
              delay={1.6}
            />
          </div>

          {/* Orchestration pill */}
          <div className="flex justify-center">
            <div
              className="flex items-center gap-5 px-6 py-4"
              style={{
                background: '#080c12',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 20,
                boxShadow: '0 0 60px rgba(236,113,97,0.18), 0 8px 32px rgba(0,0,0,0.5)',
              }}
            >
              <motion.svg
                width="60" height="60" viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg"
                style={{ flexShrink: 0 }}
                animate={{
                  filter: [
                    'drop-shadow(0 0 6px rgba(236,113,97,0.3))',
                    'drop-shadow(0 0 28px rgba(236,113,97,0.9))',
                    'drop-shadow(0 0 6px rgba(236,113,97,0.3))',
                  ],
                }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.5 }}
              >
                <path d="M45.5 91C70.629 91 91 70.629 91 45.5C91 20.371 70.629 0 45.5 0C20.371 0 0 20.371 0 45.5C0 70.629 20.371 91 45.5 91Z" fill="url(#orb_grad0)"/>
                <g filter="url(#orb_blur)">
                  <path d="M45.4989 73.3045C60.8555 73.3045 73.3045 60.8555 73.3045 45.4989C73.3045 30.1423 60.8555 17.6934 45.4989 17.6934C30.1423 17.6934 17.6934 30.1423 17.6934 45.4989C17.6934 60.8555 30.1423 73.3045 45.4989 73.3045Z" fill="url(#orb_grad1)"/>
                </g>
                <defs>
                  <filter id="orb_blur" x="5.34774" y="5.34774" width="80.3026" height="80.3026" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="6.17281" result="effect1_foregroundBlur"/>
                  </filter>
                  <radialGradient id="orb_grad0" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(45.5 45.5) scale(45.5)">
                    <stop stopColor="#F8B1A7"/>
                    <stop offset="1" stopColor="#8F483B" stopOpacity="0"/>
                  </radialGradient>
                  <radialGradient id="orb_grad1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(45.4989 45.4989) scale(27.8056)">
                    <stop stopColor="#FFD8D3"/>
                    <stop offset="0.4" stopColor="#EC7161"/>
                    <stop offset="1" stopColor="#672219"/>
                  </radialGradient>
                </defs>
              </motion.svg>
              <div>
                <p className="text-white text-[17px] font-semibold">Multi-Layer Orchestration</p>
                <p className="text-[#9ca3af] text-[12px] mt-0.5">L0 → L1 → L2 → L3 → L4</p>
                <p className="text-[#6b7280] text-[11px] mt-0.5">Every Layer runs. In Order. No Skipping</p>
              </div>
            </div>
          </div>

          {/* Connector: orchestration → pipeline */}
          <div className="relative w-full" style={{ height: 140 }}>
            <svg viewBox="0 0 1000 140" className="w-full h-full" preserveAspectRatio="none">
              <line x1="500" y1="0" x2="500" y2="133" {...LINE} />
              <polygon points="495,133 505,133 500,140" fill="#B3B3B3" />
            </svg>
            <TravelDot
              waypoints={[
                { left: '50%', top: 0   },
                { left: '50%', top: 43  },
                { left: '50%', top: 85  },
                { left: '50%', top: 128 },
              ]}
              times={[0, 0.33, 0.67, 1]}
              duration={8}
              delay={0}
              repeatDelay={5}
            />
          </div>

          {/* Pipeline steps — 13s cycle.
              Border draws itself in clockwise from the top-left corner then holds, resets at cycle end. */}
          <div className="flex items-center mt-4">
            {pipelineSteps.map((step, i) => {
              const onFrac    = (8 + i * 0.8) / 13;
              const drawEnd   = Math.min(onFrac + 2 / 13, 0.96);
              const kfTimes: number[]   = [0, onFrac, drawEnd, 0.98, 1];
              return (
              <div key={step.label} className="flex items-center flex-1 min-w-0">
                <div
                  className="flex-1 relative rounded-[10px]"
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                >
                  <svg
                    width="100%" height="100%"
                    className="absolute inset-0 pointer-events-none"
                    fill="none"
                  >
                    {/* Static dim border always visible */}
                    <rect x="1" y="1" width="99%" height="99%" rx="9" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                    {/* Animated draw-in border: offset 1→0 fills the stroke clockwise */}
                    <motion.rect
                      x="1" y="1"
                      width="99%" height="99%"
                      rx="9"
                      fill="none"
                      stroke="#ec7161"
                      strokeWidth="1.5"
                      pathLength={1}
                      strokeDasharray="1"
                      animate={{ strokeDashoffset: [1, 1, 0, 0, 1] }}
                      transition={{
                        duration: 13,
                        times: kfTimes,
                        repeat: Infinity,
                        ease: ['linear', 'easeOut', 'linear', 'linear'],
                      }}
                    />
                  </svg>
                  <div className="relative z-10 flex flex-col items-center justify-center py-4 px-2">
                    <span className="text-white text-[14px] font-medium text-center">{step.label}</span>
                    <span className="text-[#6b7280] text-[11px] mt-0.5">{step.sub}</span>
                  </div>
                </div>
                {i < pipelineSteps.length - 1 && (
                  <div className="w-7 flex items-center justify-center shrink-0">
                    <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
                      <path d="M0 5 H14 M9 1 L15 5 L9 9" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
              );
            })}
          </div>

        </div>

        <div className="flex flex-col gap-3 md:hidden">
          {pipelineSteps.map((step, i) => (
            <div
              key={step.label}
              className="flex items-start gap-4 rounded-[10px] p-4"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <span className="text-[#ec7161] text-[12px] font-bold flex-shrink-0 mt-0.5">0{i + 1}</span>
              <div>
                <p className="text-white text-[14px] font-medium">{step.label}</p>
                <p className="text-[#6b7280] text-[11px] mt-0.5">{step.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
