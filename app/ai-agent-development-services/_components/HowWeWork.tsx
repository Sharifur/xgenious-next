'use client';

import { useRef, useState } from 'react';
import { useScroll, useTransform, useMotionTemplate, motion, useMotionValueEvent } from 'framer-motion';
import SectionBadge from '@/components/ui/SectionBadge';

const STEPS = [
  {
    label: '01. Discover',
    desc: 'We map your workflows, identify automation opportunities, define agent scope, and agree on success metrics before any model is touched.',
  },
  {
    label: '02. Design',
    desc: 'Agent architecture, tool integrations, memory strategy, and escalation logic — every decision documented and approved before build starts.',
  },
  {
    label: '03. Build & Test',
    desc: 'Prompt engineering, RAG pipelines, tool calls, safety guardrails, and evaluation suites — tested against real edge cases from your data.',
  },
  {
    label: '04. Deploy',
    desc: 'Production deploy with monitoring, latency dashboards, hallucination alerts, and a human-in-the-loop fallback for every critical path.',
  },
];

export default function HowWeWork() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const fillDeg = useTransform(scrollYProgress, [0, 1], [90, 360]);
  const conicBg = useMotionTemplate`conic-gradient(from 0deg, #3D1A15 0deg, #ec7161 ${fillDeg}deg, #232325 ${fillDeg}deg)`;

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setActiveStep(Math.min(3, Math.floor(v * 4)));
  });

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ background: '#050406', minHeight: '400vh', paddingBottom: '120px' }}
    >
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
        <div className="w-full flex-shrink-0">
          <div className="container-page pt-16 flex items-end justify-between gap-8">
            <div className="flex flex-col gap-4">
              <SectionBadge variant="dark" className="self-start">How We Work</SectionBadge>
              <h2 className="text-white font-semibold" style={{ fontSize: 44, lineHeight: '52px' }}>
                {'From Idea to '}
                <em className="font-normal italic">Execution</em>
              </h2>
            </div>
            <p className="font-normal max-w-[438px] flex-shrink-0" style={{ fontSize: 16, lineHeight: '24px', color: '#b9bac0' }}>
              AI agents scoped, built, and deployed with full transparency — no black-box models, no hidden costs, no post-launch surprises.
            </p>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="relative flex items-center justify-center" style={{ width: 554, height: 554 }}>
            <motion.div className="absolute inset-0 rounded-full" style={{ background: conicBg }} />
            <div className="absolute rounded-full" style={{ inset: 28, background: '#111113' }} />
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
                  {STEPS[activeStep].label}
                </motion.h3>
                <motion.p
                  key={`d${activeStep}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.45, delay: 0.12 }}
                  style={{ fontSize: 16, lineHeight: '24px', color: '#b9bac0' }}
                >
                  {STEPS[activeStep].desc}
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
