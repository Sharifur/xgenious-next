'use client';

import { useRef, useState } from 'react';
import { useScroll, useTransform, useMotionTemplate, motion, useMotionValueEvent } from 'framer-motion';
import SectionBadge from '@/components/ui/SectionBadge';

export type HowWeWorkStep = { label: string; desc: string };

type Props = {
  steps: HowWeWorkStep[];
  description?: string;
};

export default function HowWeWork({
  steps,
  description = 'Custom web apps, B2B portals, internal tools and enterprise platforms — built with published scope, fixed pricing, and a committed delivery date.',
}: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const fillDeg = useTransform(scrollYProgress, [0, 1], [90, 360]);
  const conicBg = useMotionTemplate`conic-gradient(from 0deg, #3D1A15 0deg, #ec7161 ${fillDeg}deg, #232325 ${fillDeg}deg)`;

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setActiveStep(Math.min(steps.length - 1, Math.floor(v * steps.length)));
  });

  return (
    <>
      {/* ── Mobile: plain static list (hidden md+) ── */}
      <section className="block md:hidden py-14 bg-[#050406]">
        <div className="container-page px-4">
          <div className="flex flex-col items-start gap-3 mb-8">
            <SectionBadge variant="dark">How We Work</SectionBadge>
            <p className="text-white font-semibold text-[28px] leading-[36px]" aria-hidden="true">
              {'From Idea to '}
              <em className="font-normal italic">Execution</em>
            </p>
            <p className="text-[#b9bac0] text-[14px] leading-[22px] mt-1">{description}</p>
          </div>

          <div className="flex flex-col divide-y divide-[#1e1e22]">
            {steps.map((step) => (
              <div key={step.label} className="py-5">
                <span className="text-[#ec7161] text-[11px] font-bold tracking-[0.6px] uppercase mb-2 block">
                  {step.label.split('. ')[0]}
                </span>
                <p className="text-white font-semibold text-[18px] leading-[26px] mb-2" aria-hidden="true">
                  {step.label.split('. ')[1]}
                </p>
                <p className="text-[#b9bac0] text-[14px] leading-[22px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Desktop: scroll-pinned animated circle (hidden below md) ── */}
      <section
        ref={sectionRef}
        className="hidden md:block relative"
        style={{ background: '#050406', minHeight: '400vh', paddingBottom: '120px' }}
      >
        <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
          {/* Header */}
          <div className="w-full flex-shrink-0">
            <div className="container-page pt-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-8">
              <div className="flex flex-col items-start gap-4">
                <SectionBadge variant="dark">How We Work</SectionBadge>
                <h2 className="text-white font-semibold text-[36px] leading-[44px] lg:text-[44px] lg:leading-[52px]">
                  {'From Idea to '}
                  <em className="font-normal italic">Execution</em>
                </h2>
              </div>
              <p className="font-normal max-w-[438px] flex-shrink-0 text-[15px] lg:text-[16px] leading-[24px]" style={{ color: '#b9bac0' }}>
                {description}
              </p>
            </div>
          </div>

          {/* Animated circle */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative flex items-center justify-center" style={{ width: 554, height: 554 }}>
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ background: conicBg }}
              />
              <div
                className="absolute rounded-full"
                style={{ inset: 28, background: '#111113' }}
              />
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="flex flex-col items-center text-center gap-6 px-14">
                  <motion.h3
                    key={activeStep}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45 }}
                    className="text-white font-bold"
                    style={{ fontSize: 66, lineHeight: '74px' }}
                  >
                    {steps[activeStep].label}
                  </motion.h3>
                  <motion.p
                    key={`d${activeStep}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.45, delay: 0.12 }}
                    style={{ fontSize: 16, lineHeight: '24px', color: '#b9bac0' }}
                  >
                    {steps[activeStep].desc}
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
