'use client';

import { useState, useEffect, useRef } from 'react';

const sections = [
  {
    id: 'launch-faster',
    title: 'Launch Faster With Essential Features',
    content: [
      'An MVP focuses only on the core functionality your users truly need. This lets you enter the market sooner, start collecting real traction data immediately, iterate based on what users actually do — not what they say — and improve with evidence rather than assumptions. No 12-month build before you know if the idea works.',
    ],
  },
  {
    id: 'save-budget',
    title: 'Save Budget and Reduce Build Risk',
    content: [
      'Building a complete product from day one often burns funded runway on features users never wanted. An MVP keeps development lean — critical when you have a 6-month window to find traction. Spend on what the data confirms, not what the roadmap assumes, and only expand scope once real user behaviour points the way.',
    ],
  },
  {
    id: 'real-feedback',
    title: 'Make Decisions Based on Real User Behaviour',
    content: [
      'Instead of assumptions, an MVP gives you actual user behaviour — activation rates, retention, drop-off points. That data shapes every future sprint, every prioritisation decision, and every investor conversation. Product-market fit is not a feeling. It\'s a retention curve and a referral rate — and you can only measure it with real users.',
    ],
  },
  {
    id: 'reduce-risk',
    title: 'Reduce the Risk of Building the Wrong Product',
    content: [
      'Most failed products weren\'t badly built — they solved the wrong problem. An MVP validates demand — and your path to PMF — before the major investment. Test the hypothesis, iterate on the insight, pivot if the data demands it, and scale with confidence once the signal is real rather than assumed.',
    ],
  },
];

export default function WhyMVP() {
  const [active, setActive] = useState(sections[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach((s) => {
      const el = sectionRefs.current[s.id];
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(s.id); },
        { root: containerRef.current, threshold: 0.5 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActive(id);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-[100px]" style={{ background: '#0a0c10' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="mb-8 sm:mb-12 lg:mb-16 flex flex-col gap-4">
          <h2 className="font-semibold text-white text-[26px] leading-[34px] sm:text-[36px] sm:leading-[44px] lg:text-[48px] lg:leading-[56px]">
            Why Build an MVP First
          </h2>
          <p className="text-[#6b7280] text-[15px] leading-[23px] sm:text-[17px] sm:leading-[26px] max-w-[600px]">
            Building the full product first is the most expensive way to discover you built the wrong thing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 lg:gap-16 items-start">

          {/* Left — scrollable content */}
          <div
            ref={containerRef}
            className="flex flex-col gap-8 sm:gap-10 lg:gap-12"
          >
            {sections.map((s) => (
              <div
                key={s.id}
                ref={(el) => { sectionRefs.current[s.id] = el; }}
                id={s.id}
              >
                <h3
                  className="font-semibold text-[18px] sm:text-[22px] leading-[28px] sm:leading-[32px] mb-4 transition-colors duration-200"
                  style={{ color: active === s.id ? '#fff' : '#9ca3af' }}
                >
                  {s.title}
                </h3>
                {s.content.map((p, i) => (
                  <p key={i} className="text-[#9ca3af] text-[14px] sm:text-[15px] leading-[22px] sm:leading-[23px] mb-3 last:mb-0">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Right — sticky nav */}
          <div className="hidden lg:block sticky top-[100px]">
            <div
              className="rounded-[16px] p-5 flex flex-col gap-1"
              style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)' }}
            >
              {sections.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className="text-left px-4 py-3 rounded-[10px] transition-all duration-200 focus:outline-none"
                  style={{
                    background: active === s.id ? 'rgba(255,255,255,0.07)' : 'transparent',
                  }}
                >
                  <span
                    className="font-medium text-[14px] leading-[20px] transition-colors duration-200"
                    style={{ color: active === s.id ? '#fff' : '#6b7280' }}
                  >
                    {s.title}
                  </span>
                  {i < sections.length - 1 && (
                    <div className="mt-3 h-px" style={{ background: 'rgba(255,255,255,0.07)' }} />
                  )}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
