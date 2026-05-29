'use client';

import { useEffect, useState } from 'react';

const steps = [
  {
    number: 1,
    title: 'Install & Configure',
    desc: 'Upload Nazmart to your VPS, configure your database, domain, and payment gateways in under an hour.',
  },
  {
    number: 2,
    title: 'Create Vendor Subscription Plans',
    desc: 'Define monthly and yearly pricing tiers. Set storage limits, product quotas, and feature access per plan.',
  },
  {
    number: 3,
    title: 'Vendors Launch — You Collect Revenue',
    desc: 'Vendors register, pick a theme, add their products, and go live. You earn recurring subscription income automatically.',
  },
];

function StepVisual({ step }: { step: number }) {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 900);
    return () => clearInterval(id);
  }, [step]);

  if (step === 0) {
    const checks = ['Domain configured', 'Database connected', 'SMTP ready', 'SSL active'];
    return (
      <div className="w-full flex flex-col gap-3 px-2">
        <div className="text-[13px] font-semibold text-[#0F1112] mb-1">Setup Checklist</div>
        {checks.map((label, i) => {
          const done = tick > i;
          return (
            <div
              key={label}
              className="flex items-center gap-3 bg-white rounded-xl px-4 py-2.5 border transition-all duration-300"
              style={{ borderColor: done ? '#92E721' : '#E5E7EC', opacity: tick >= i ? 1 : 0.35 }}
            >
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
                style={{ background: done ? '#92E721' : '#F3F4F6' }}
              >
                {done && (
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="#0d2b14" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <span className="text-[13px]" style={{ color: done ? '#0F1112' : '#9ca3af', fontWeight: done ? 600 : 400 }}>{label}</span>
            </div>
          );
        })}
        <div className="mt-2 text-[11px] text-[#6b7280] text-center">Ready in under 1 hour</div>
      </div>
    );
  }

  if (step === 1) {
    const plans = [
      { name: 'Starter', price: '$9', products: '50 products', color: '#E5E7EC', text: '#374151', badge: false },
      { name: 'Growth', price: '$29', products: '500 products', color: '#0d2b14', text: '#fff', badge: true },
      { name: 'Pro', price: '$59', products: 'Unlimited', color: '#F3F4F6', text: '#374151', badge: false },
    ];
    const highlighted = tick % 3;
    return (
      <div className="w-full flex flex-col gap-2.5 px-2">
        <div className="text-[13px] font-semibold text-[#0F1112] mb-1">Your Subscription Plans</div>
        {plans.map((plan, i) => {
          const active = highlighted === i;
          return (
            <div
              key={plan.name}
              className="flex items-center justify-between rounded-xl px-4 py-3 border transition-all duration-500"
              style={{
                background: active ? plan.color : '#fff',
                borderColor: active ? (plan.color === '#0d2b14' ? '#0d2b14' : '#92E721') : '#E5E7EC',
                transform: active ? 'scale(1.02)' : 'scale(1)',
              }}
            >
              <div className="flex items-center gap-2.5">
                <span className="text-[13px] font-bold" style={{ color: active && plan.color === '#0d2b14' ? '#fff' : '#0F1112' }}>{plan.name}</span>
                {plan.badge && active && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: '#92E721', color: '#0d2b14' }}>Popular</span>
                )}
              </div>
              <div className="text-right">
                <div className="text-[14px] font-bold" style={{ color: active && plan.color === '#0d2b14' ? '#92E721' : '#0F1112' }}>{plan.price}<span className="text-[10px] font-normal opacity-60">/mo</span></div>
                <div className="text-[10px] opacity-60" style={{ color: active && plan.color === '#0d2b14' ? '#fff' : '#6b7280' }}>{plan.products}</div>
              </div>
            </div>
          );
        })}
        <div className="mt-1 text-[11px] text-[#6b7280] text-center">You set the price — you keep 100%</div>
      </div>
    );
  }

  // step 2 — vendors going live + revenue
  const vendors = ['Summer Boutique', 'Tech Gadgets Co.', 'Fresh Organics', 'Luxe Perfumes'];
  const visibleCount = Math.min(tick + 1, vendors.length);
  const revenue = ['+$9', '+$29', '+$29', '+$59'];
  return (
    <div className="w-full flex flex-col gap-2.5 px-2">
      <div className="text-[13px] font-semibold text-[#0F1112] mb-1">New Vendors This Month</div>
      {vendors.slice(0, visibleCount).map((name, i) => (
        <div
          key={name}
          className="flex items-center justify-between bg-white rounded-xl px-4 py-2.5 border border-[#E5E7EC] transition-all duration-300"
          style={{ animation: 'fadeSlideIn 0.4s ease' }}
        >
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0" style={{ background: ['#F26B4E', '#3b82f6', '#10b981', '#8b5cf6'][i] }}>
              {name[0]}
            </div>
            <span className="text-[13px] font-medium text-[#0F1112]">{name}</span>
          </div>
          <span className="text-[13px] font-bold" style={{ color: '#2d6a00' }}>{revenue[i]}<span className="text-[10px] font-normal text-[#6b7280]">/mo</span></span>
        </div>
      ))}
      {visibleCount < vendors.length && (
        <div className="text-center text-[11px] text-[#9ca3af]">More vendors joining...</div>
      )}
      {visibleCount === vendors.length && (
        <div className="mt-1 rounded-xl px-4 py-2 text-center text-[12px] font-bold" style={{ background: '#F0FDE4', color: '#2d6a00' }}>
          Total MRR: $126 / month
        </div>
      )}
      <style>{`@keyframes fadeSlideIn { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }`}</style>
    </div>
  );
}

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const [visualKey, setVisualKey] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
      setVisualKey((k) => k + 1);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  function handleClick(i: number) {
    setActive(i);
    setVisualKey((k) => k + 1);
  }

  return (
    <section className="py-14 sm:py-20" style={{ background: '#fff' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-12 max-w-[520px] mx-auto">
          <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] mb-3">How does it Work?</h2>
          <p className="text-[#6b7280] text-[15px] leading-6">
            From purchase to a live multi-vendor marketplace — three steps, no coding required.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 items-center max-w-[1000px] mx-auto">

          {/* Left — animated visual */}
          <div className="rounded-3xl p-6 sm:p-8 min-h-[300px] flex items-center justify-center" style={{ background: '#FDF3F0' }}>
            <div className="w-full max-w-[340px]">
              <StepVisual key={`${active}-${visualKey}`} step={active} />
            </div>
          </div>

          {/* Right — steps */}
          <div className="flex flex-col">
            {steps.map((step, i) => {
              const isActive = active === i;
              return (
                <div key={step.number} onClick={() => handleClick(i)} className="cursor-pointer">
                  <div className="flex gap-4 items-start py-5">
                    <div
                      className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-[14px] font-bold border-2 transition-all duration-300"
                      style={
                        isActive
                          ? { background: '#F26B4E', borderColor: '#F26B4E', color: '#fff' }
                          : { background: 'transparent', borderColor: '#d1d5db', color: '#9ca3af' }
                      }
                    >
                      {step.number}
                    </div>
                    <div>
                      <h3
                        className="text-[18px] font-bold mb-1 leading-snug transition-colors duration-300"
                        style={{ color: isActive ? '#0F1112' : '#9ca3af' }}
                      >
                        {step.title}
                      </h3>
                      <div
                        className="overflow-hidden transition-all duration-500"
                        style={{ maxHeight: isActive ? '80px' : '0px', opacity: isActive ? 1 : 0 }}
                      >
                        <p className="text-[14px] text-[#6b7280] leading-6">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="ml-[18px] border-l-2 border-dashed border-[#e5e7eb] h-4" />
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
