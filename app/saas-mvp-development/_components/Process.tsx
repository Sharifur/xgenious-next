'use client';

import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SectionBadge from '@/components/ui/SectionBadge';

const steps = [
  {
    week: 'Week 1-2',
    title: 'Discovery &\nStrategy',
    position: 'below' as const,
    items: [
      'Define product goals',
      'Target user research',
      'Scope essential features',
      'MVP roadmap sign-off',
    ],
  },
  {
    week: 'Week 3-4',
    title: 'UI/UX & Product\nDesign',
    position: 'above' as const,
    items: [
      'Wireframes & user flows',
      'Design system setup',
      'Interactive prototypes',
      'Stakeholder sign-off',
    ],
  },
  {
    week: 'Week 5-11',
    title: 'MVP\nDevelopment',
    position: 'below' as const,
    items: [
      'Sprint-based builds',
      'Weekly demos',
      'Automated testing',
      'Iterative refinement',
    ],
  },
  {
    week: 'Week 12',
    title: 'Testing, Launch\n& Growth',
    position: 'above' as const,
    items: [
      'QA & load testing',
      'App Store / DNS deploy',
      'Analytics wired',
      'Post-launch support',
    ],
  },
];

const TRAVEL_MS = 900;
const PAUSE_MS  = 1600;

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

function CheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
      <circle cx="8" cy="8" r="8" fill="#ec7161" />
      <path d="M4.5 8l2.5 2.5 4.5-4.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Process() {
  const [activeStep, setActiveStep]   = useState(0);
  /* lineWidth is expressed as % of the full container width.
     Dots are centered in each of 4 equal columns → at 12.5 / 37.5 / 62.5 / 87.5 %.
     So the progress line: left=12.5%, width grows 0 → 25 → 50 → 75 % of container. */
  const [lineWidth, setLineWidth]     = useState('0%');
  const cancelRef = useRef(false);

  useEffect(() => {
    cancelRef.current = false;

    const run = async () => {
      while (!cancelRef.current) {
        for (let i = 0; i < steps.length; i++) {
          if (cancelRef.current) return;

          // Animate line to dot i
          setLineWidth(`${i * 25}%`);

          // Wait for line to travel, then reveal tooltip
          await sleep(i === 0 ? 0 : TRAVEL_MS);
          if (cancelRef.current) return;
          setActiveStep(i);

          // Hold on this step
          await sleep(PAUSE_MS);
          if (cancelRef.current) return;
        }
        // Brief pause before looping
        await sleep(300);
      }
    };

    run();
    return () => { cancelRef.current = true; };
  }, []);

  const handleDotClick = (i: number) => {
    setActiveStep(i);
    setLineWidth(`${i * 25}%`);
  };

  return (
    <section className="pt-16 sm:pt-20 lg:pt-[100px]" style={{ background: '#f5f6f8' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0 flex flex-col gap-6 sm:gap-8 items-center">

        {/* Heading */}
        <div className="flex flex-col items-center gap-4 text-center max-w-[600px]">
          <SectionBadge>How We Ship</SectionBadge>
          <h2 className="font-semibold text-[#0f1112] text-[26px] leading-[34px] sm:text-[36px] sm:leading-[44px] lg:text-[48px] lg:leading-[56px]">
            Our MVP Development Process
          </h2>
          <p className="text-[#484848] text-[14px] leading-[22px] sm:text-[16px] sm:leading-[24px]">
            A four-stage process refined across 40+ launches. Transparent, predictable,
            and built to keep momentum from week one to go-live.
          </p>
        </div>

        {/* ── Desktop timeline ─────────────────────────────────────────────── */}
        <div className="hidden lg:block w-full">
          {/* Outer wrapper — 200px above + dot row + 200px below */}
          <div className="relative" style={{ paddingTop: 20, paddingBottom: 20 }}>

            {/* Gray baseline — from center of col 1 to center of col 4 */}
            <div
              className="absolute"
              style={{
                top: '50%', transform: 'translateY(-50%)',
                left: '12.5%', right: '12.5%',
                height: 1, background: '#d1d5db',
              }}
            />

            {/* Coral progress line */}
            <div
              className="absolute"
              style={{
                top: '50%', transform: 'translateY(-50%)',
                left: '12.5%',
                height: 2,
                width: lineWidth,
                background: '#ec7161',
                transition: `width ${TRAVEL_MS}ms cubic-bezier(0.4,0,0.2,1)`,
                borderRadius: 2,
              }}
            />

            {/* 4-column grid for dots + labels */}
            <div className="grid grid-cols-4 relative">
              {steps.map((step, i) => (
                <div key={step.title} className="flex flex-col items-center relative">

                  {/* Space above dot — label for "above" steps */}
                  <div className="h-[200px] flex flex-col items-center justify-end pb-8">
                    {step.position === 'above' && (
                      <div className="flex flex-col items-center gap-1 text-center">
                        <p className="text-[12px] text-[#9ca3af]">{step.week}</p>
                        <p className="font-semibold text-[#0f1112] text-[15px] leading-[22px] whitespace-pre-line">
                          {step.title}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Dot + tooltip */}
                  <div className="relative flex items-center justify-center" style={{ zIndex: 10 }}>
                    <button
                      onClick={() => handleDotClick(i)}
                      className="focus:outline-none"
                      aria-label={`Step ${i + 1}: ${step.title.replace('\n', ' ')}`}
                    >
                      <div
                        className="w-4 h-4 rounded-full border-2 transition-all duration-300"
                        style={{
                          background:   activeStep >= i ? '#ec7161' : '#fff',
                          borderColor:  activeStep >= i ? '#ec7161' : '#d1d5db',
                          boxShadow:    activeStep === i ? '0 0 0 5px rgba(236,113,97,0.22)' : 'none',
                        }}
                      />
                    </button>

                    {/* Tooltip card */}
                    <AnimatePresence>
                      {activeStep === i && (
                        <motion.div
                          initial={{ opacity: 0, y: step.position === 'below' ? 10 : -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{  opacity: 0, y: step.position === 'below' ? 10 : -10, scale: 0.95 }}
                          transition={{ duration: 0.22, ease: 'easeOut' }}
                          className="absolute z-20 w-[210px] bg-white rounded-[14px] border border-[#ebebeb] shadow-[0_8px_36px_rgba(0,0,0,0.12)] p-4 flex flex-col gap-3 pointer-events-none"
                          style={
                            step.position === 'below'
                              ? { bottom: 'calc(100% + 14px)', left: '50%', transform: 'translateX(-50%)' }
                              : { top:    'calc(100% + 14px)', left: '50%', transform: 'translateX(-50%)' }
                          }
                        >
                          <div>
                            <p className="text-[11px] text-[#9ca3af] mb-0.5">{step.week}</p>
                            <p className="font-semibold text-[#0f1112] text-[14px] leading-[20px]">
                              {step.title.replace('\n', ' ')}
                            </p>
                          </div>
                          <div className="flex flex-col gap-2">
                            {step.items.map((item) => (
                              <div key={item} className="flex items-start gap-2">
                                <CheckIcon />
                                <span className="text-[12px] text-[#484848] leading-[18px]">{item}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Space below dot — label for "below" steps */}
                  <div className="h-[200px] flex flex-col items-center justify-start pt-8">
                    {step.position === 'below' && (
                      <div className="flex flex-col items-center gap-1 text-center">
                        <p className="text-[12px] text-[#9ca3af]">{step.week}</p>
                        <p className="font-semibold text-[#0f1112] text-[15px] leading-[22px] whitespace-pre-line">
                          {step.title}
                        </p>
                      </div>
                    )}
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Mobile — vertical accordion ───────────────────────────────────── */}
        <div className="lg:hidden w-full flex flex-col gap-0 relative">
          <div className="absolute left-[9px] top-0 bottom-0 w-px" style={{ background: '#d1d5db' }} />
          {steps.map((step, i) => (
            <button
              key={step.title}
              onClick={() => handleDotClick(i)}
              className="flex gap-5 items-start text-left pb-8 relative focus:outline-none w-full"
            >
              <div className="flex-shrink-0 relative z-10 mt-0.5">
                <div
                  className="w-[18px] h-[18px] rounded-full border-2 transition-all duration-300"
                  style={{
                    background:  activeStep >= i ? '#ec7161' : '#fff',
                    borderColor: activeStep >= i ? '#ec7161' : '#d1d5db',
                    boxShadow:   activeStep === i ? '0 0 0 3px rgba(236,113,97,0.22)' : 'none',
                  }}
                />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <p className="text-[12px] text-[#9ca3af]">{step.week}</p>
                <p className="font-semibold text-[#0f1112] text-[16px] leading-[24px]">
                  {step.title.replace('\n', ' ')}
                </p>
                <AnimatePresence initial={false}>
                  {activeStep === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.22 }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-2 pt-1">
                        {step.items.map((item) => (
                          <div key={item} className="flex items-start gap-2">
                            <CheckIcon />
                            <span className="text-[13px] text-[#484848] leading-[20px]">{item}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
