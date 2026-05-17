'use client';

import { useState, useEffect, useRef } from 'react';

const sections = [
  {
    id: 'launch-faster',
    title: 'Launch Faster With Essential Features',
    content: [
      'An MVP focuses only on the core functionality your users truly need. This allows you to launch quickly, enter the market sooner, and start collecting real feedback without waiting for a fully complex product.',
      'Early launches create faster learning opportunities and help you improve with confidence.',
    ],
  },
  {
    id: 'save-budget',
    title: 'Save Budget and Development Resources',
    content: [
      'Building a complete product from day one often leads to unnecessary costs. An MVP approach helps you prioritise the most important features first, keeping development lean, efficient, and budget-friendly.',
      'You invest smarter while reducing the risk of wasted resources.',
    ],
  },
  {
    id: 'real-feedback',
    title: 'Make Decisions Based on Real User Feedback',
    content: [
      'Instead of relying on assumptions, an MVP lets you observe how real users interact with your product. Their behaviour and feedback help shape future updates, features, and product direction more effectively.',
      'Better insights lead to stronger product decisions.',
    ],
  },
  {
    id: 'reduce-risk',
    title: 'Reduce the Risk of Building the Wrong Product',
    content: [
      'Many startups fail because they spend too much time building features users never actually need. An MVP helps validate your idea early, so you can test demand, refine your concept, and scale with clarity before making larger investments.',
      'Building smaller first creates a safer path toward long-term growth.',
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
        <h2 className="font-semibold text-white text-[26px] leading-[34px] sm:text-[36px] sm:leading-[44px] lg:text-[48px] lg:leading-[56px] mb-8 sm:mb-12 lg:mb-16">
          Why Build an MVP Website First
        </h2>

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
