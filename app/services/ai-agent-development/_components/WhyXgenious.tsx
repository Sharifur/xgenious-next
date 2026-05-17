'use client';

import { motion } from 'framer-motion';

const features = [
  {
    num: '02',
    title: 'Horizontally Scalable',
    desc: 'From 100 to 10M requests/day without re-architecture. Auto-scaled inference and queueing.',
  },
  {
    num: '03',
    title: 'LLM Provider Agnostic',
    desc: 'OpenAI, Anthropic, open-source — switch models without touching agent logic.',
  },
  {
    num: '04',
    title: 'Real-time Observability',
    desc: 'Every reasoning step, tool call, and token logged. Debug agents like microservices.',
  },
  {
    num: '05',
    title: 'Secure by Default',
    desc: 'Prompt-injection defense, scoped tool permissions, encrypted memory stores.',
  },
  {
    num: '06',
    title: 'Custom-Trained on  Your Data',
    desc: 'Fine-tuning, RAG indexing, and continual learning loops tailored to your domain.',
  },
  {
    num: '07',
    title: 'Deployed in 4–6 weeks',
    desc: 'From kickoff to production. Most agencies take quarters; we ship in sprints.',
  },
];

const BAR_HEIGHTS = [28, 32, 38, 36, 44, 48, 43, 54, 52, 60, 65, 70, 76, 84];

export default function WhyXgenious() {
  return (
    <section className="relative pb-14 sm:pb-20 lg:pb-[120px] overflow-hidden" style={{ background: '#070b14' }}>
      {/* Decorative top-right glow */}
      <img
        src="/gradient-blur.png"
        alt=""
        aria-hidden
        className="absolute pointer-events-none select-none"
        style={{
          top: -80,
          right: -100,
          width: 600,
          opacity: 0.5,
        }}
      />
      <div className="container-page px-4 sm:px-6 lg:px-0 flex flex-col gap-10 sm:gap-14 relative z-10">

        {/* Header */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#ec7161] rounded-full" />
            <span className="text-[#ec7161] text-[14px] font-medium">Why Xgenious</span>
          </div>
          <h2 className="font-bold text-white text-[26px] leading-[34px] sm:text-[36px] sm:leading-[44px] lg:text-[48px] lg:leading-[58px] max-w-[540px]">
            Built for Teams Who Refuse Prototype Grade AI
          </h2>
        </div>

        {/* Container card */}
        <div
          className="rounded-[20px] p-5"
          style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <div className="flex flex-col lg:flex-row gap-4">

            {/* Featured-01 card */}
            <div
              className="flex flex-col justify-between rounded-[14px] p-6 w-full lg:w-[290px] lg:flex-shrink-0"
              style={{ background: '#050608', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div className="flex flex-col gap-4">
                <span className="text-[#ec7161] text-[13px] font-medium">Featured-01</span>
                <h3 className="text-white font-semibold text-[20px] leading-[28px]">
                  Enterprise-Grade AI Architecture
                </h3>
                <p className="text-[#9ca3af] text-[14px] leading-[22px]">
                  SOC 2 patterns, isolated tenancy, audit logs, and PII redaction baked in from day one — not retrofitted later.
                </p>
              </div>

              {/* Animated bar chart */}
              <div>
                <div className="flex items-end gap-[5px] mb-3" style={{ height: 110 }}>
                  {BAR_HEIGHTS.map((h, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 rounded-[3px]"
                      style={{
                        background: `rgba(236,113,97,${0.35 + i * 0.047})`,
                        transformOrigin: 'bottom',
                        height: `${h}%`,
                      }}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{
                        duration: 0.5,
                        delay: i * 0.04,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  ))}
                </div>
                <p className="text-[#6b7280] text-[12px]">Agent Uptime • 18 Months</p>
              </div>
            </div>

            {/* 3×2 grid of feature cards */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((f) => (
                <motion.div
                  key={f.num}
                  className="flex flex-col gap-3 rounded-[14px] p-5 cursor-default"
                  style={{ background: '#050608', border: '1px solid rgba(255,255,255,0.07)' }}
                  whileHover={{
                    borderColor: 'rgba(236,113,97,0.35)',
                    background: '#0a0608',
                    y: -3,
                  }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  <span className="text-[#ec7161] text-[13px] font-medium">{f.num}</span>
                  <h3 className="text-white font-semibold text-[16px] leading-[24px]">{f.title}</h3>
                  <p className="text-[#9ca3af] text-[13px] leading-[20px]">{f.desc}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
