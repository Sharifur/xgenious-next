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

const CSS = `
  @keyframes popIn    { from{opacity:0;transform:scale(0.82)} to{opacity:1;transform:scale(1)} }
  @keyframes slideUp  { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
  @keyframes typeText { from{width:0} to{width:100%} }
  @keyframes barFill  { from{width:0%} to{width:85%} }
  @keyframes pulseDot { 0%,100%{opacity:1} 50%{opacity:0} }
`;

function StepVisual({ step }: { step: number }) {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    setTick(0);
    const id = setInterval(() => setTick((t) => t + 1), 1800);
    return () => clearInterval(id);
  }, [step]);

  /* ── Step 1: setup checklist, one item every tick ── */
  if (step === 0) {
    const checks = ['Domain configured', 'Database connected', 'SMTP ready', 'SSL active'];
    return (
      <div className="w-full flex flex-col gap-3 px-2">
        <style>{CSS}</style>
        <div className="text-[13px] font-semibold text-[#0F1112] mb-1">Setup Checklist</div>
        {checks.map((label, i) => {
          const done = tick > i;
          const visible = tick >= i;
          return (
            <div
              key={label}
              className="flex items-center gap-3 bg-white rounded-xl px-4 py-2.5 border transition-all duration-500"
              style={{
                borderColor: done ? '#92E721' : '#E5E7EC',
                opacity: visible ? 1 : 0.2,
                animation: visible && !done ? 'slideUp 0.4s ease' : 'none',
              }}
            >
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500"
                style={{ background: done ? '#92E721' : '#F3F4F6' }}
              >
                {done && (
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="#0d2b14" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <span className="text-[13px]" style={{ color: done ? '#0F1112' : '#9ca3af', fontWeight: done ? 600 : 400 }}>
                {label}
              </span>
            </div>
          );
        })}
        {tick >= 4 && (
          <div className="mt-1 text-center text-[11px] font-semibold text-[#2d6a00]" style={{ animation: 'popIn 0.4s ease' }}>
            Platform is live!
          </div>
        )}
      </div>
    );
  }

  /* ── Step 2: select plan → type store name → payment → store ready ── */
  if (step === 1) {
    // tick 0 : plans shown, none selected
    // tick 1 : Growth plan selected
    // tick 2 : store name input appears (empty, cursor blinking)
    // tick 3 : store name typewriter completes
    // tick 4 : payment card appears + processing
    // tick 5+: store ready
    const planSelected  = tick >= 1;
    const showInput     = tick >= 2;
    const showTyped     = tick >= 3;
    const showPayment   = tick >= 4;
    const showDone      = tick >= 5;

    const plans = [
      { name: 'Starter', price: '$9',  desc: '50 products' },
      { name: 'Growth',  price: '$29', desc: '500 products' },
      { name: 'Pro',     price: '$59', desc: 'Unlimited' },
    ];

    return (
      <div className="w-full flex flex-col gap-3 px-2">
        <style>{CSS}</style>

        {/* Plan cards */}
        <div className="flex gap-2">
          {plans.map((p, i) => {
            const sel = planSelected && i === 1;
            return (
              <div
                key={p.name}
                className="flex-1 rounded-xl border p-2.5 text-center transition-all duration-500"
                style={{
                  background: sel ? '#0d2b14' : '#fff',
                  borderColor: sel ? '#92E721' : '#E5E7EC',
                  transform: sel ? 'scale(1.06)' : 'scale(1)',
                }}
              >
                <div className="text-[11px] font-semibold" style={{ color: sel ? '#92E721' : '#6b7280' }}>{p.name}</div>
                <div className="text-[14px] font-bold mt-0.5" style={{ color: sel ? '#fff' : '#0F1112' }}>{p.price}</div>
                <div className="text-[9px] mt-0.5" style={{ color: sel ? '#92E72170' : '#9ca3af' }}>{p.desc}</div>
                {sel && (
                  <div className="mt-1.5 mx-auto w-4 h-4 rounded-full flex items-center justify-center" style={{ background: '#92E721', animation: 'popIn 0.35s ease' }}>
                    <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5 4-4" stroke="#0d2b14" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Store name input */}
        {showInput && (
          <div
            className="bg-white rounded-xl border px-3 py-2.5"
            style={{ borderColor: '#F26B4E', animation: 'slideUp 0.35s ease' }}
          >
            <div className="text-[10px] text-[#9ca3af] mb-1">Store Name</div>
            <div className="text-[13px] font-medium text-[#0F1112] h-5 overflow-hidden whitespace-nowrap flex items-center">
              {showTyped ? (
                <span
                  className="overflow-hidden whitespace-nowrap"
                  style={{ display: 'inline-block', animation: 'typeText 1.2s steps(15,end) both' }}
                >
                  Summer Boutique
                </span>
              ) : (
                <span
                  className="inline-block w-0.5 h-4 bg-[#F26B4E]"
                  style={{ animation: 'pulseDot 0.8s infinite' }}
                />
              )}
            </div>
          </div>
        )}

        {/* Payment */}
        {showPayment && !showDone && (
          <div
            className="bg-white rounded-xl border border-[#E5E7EC] px-4 py-3"
            style={{ animation: 'slideUp 0.35s ease' }}
          >
            <div className="flex items-center gap-2 mb-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round">
                <rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>
              </svg>
              <span className="text-[12px] font-semibold text-[#0F1112]">Processing payment…</span>
            </div>
            <div className="h-1.5 rounded-full bg-[#F3F4F6] overflow-hidden">
              <div
                className="h-full rounded-full bg-[#F26B4E]"
                style={{ animation: 'barFill 1.4s ease forwards' }}
              />
            </div>
          </div>
        )}

        {/* Store ready */}
        {showDone && (
          <div
            className="rounded-xl px-4 py-3 flex items-center gap-3"
            style={{ background: '#F0FDE4', animation: 'popIn 0.4s ease' }}
          >
            <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#92E721' }}>
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                <path d="M4 10l4 4 8-8" stroke="#0d2b14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <div className="text-[13px] font-bold text-[#0d2b14]">Store is Ready!</div>
              <div className="text-[11px] text-[#2d6a00]">summerboutique.yourplatform.com</div>
            </div>
          </div>
        )}
      </div>
    );
  }

  /* ── Step 3: vendor store → add to cart → checkout → order success ── */
  // tick 0–1 : store preview
  // tick 2   : add to cart
  // tick 3   : checkout screen
  // tick 4+  : order confirmed + revenue
  const phase = Math.min(tick, 4);

  return (
    <div className="w-full flex flex-col gap-3 px-2">
      <style>{CSS}</style>

      {/* Store card */}
      <div className="bg-white rounded-xl border border-[#E5E7EC] overflow-hidden">
        <div className="px-4 py-2.5 flex items-center justify-between border-b border-[#F3F4F6]">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md flex items-center justify-center text-white text-[9px] font-bold" style={{ background: '#F26B4E' }}>S</div>
            <span className="text-[12px] font-semibold text-[#0F1112]">Summer Boutique</span>
          </div>
          <div className="relative">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            {phase >= 2 && (
              <span
                className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full text-[8px] font-bold flex items-center justify-center text-white"
                style={{ background: '#F26B4E', animation: 'popIn 0.25s ease' }}
              >1</span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="w-10 h-10 rounded-lg flex-shrink-0" style={{ background: 'linear-gradient(135deg,#fde68a,#fca5a5)' }} />
          <div className="flex-1 min-w-0">
            <div className="text-[12px] font-semibold text-[#0F1112] truncate">Floral Summer Dress</div>
            <div className="text-[11px] text-[#6b7280]">$49.00</div>
          </div>
          <button
            className="text-[11px] font-bold px-2.5 py-1 rounded-lg text-white transition-all duration-500"
            style={{
              background: phase >= 2 ? '#92E721' : '#F26B4E',
              color: phase >= 2 ? '#0d2b14' : '#fff',
            }}
          >
            {phase >= 2 ? 'Added ✓' : 'Add to Cart'}
          </button>
        </div>
      </div>

      {/* Checkout */}
      {phase >= 3 && (
        <div className="bg-white rounded-xl border border-[#E5E7EC] px-4 py-3" style={{ animation: 'slideUp 0.4s ease' }}>
          <div className="text-[10px] font-semibold text-[#9ca3af] mb-2 tracking-wide">CHECKOUT</div>
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-[12px] text-[#374151]">Floral Summer Dress</span>
            <span className="text-[12px] font-semibold text-[#0F1112]">$49.00</span>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-lg mb-2.5" style={{ background: '#F8F9FB' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round">
              <rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>
            </svg>
            <span className="text-[11px] text-[#374151]">•••• •••• •••• 4242</span>
          </div>
          {phase === 3 && (
            <div className="text-center text-[11px] font-semibold py-2 rounded-lg text-white" style={{ background: '#F26B4E' }}>
              Confirm Payment
            </div>
          )}
        </div>
      )}

      {/* Order success */}
      {phase >= 4 && (
        <div className="flex flex-col gap-2" style={{ animation: 'slideUp 0.4s ease' }}>
          <div className="rounded-xl px-4 py-3 flex items-center gap-3" style={{ background: '#F0FDE4' }}>
            <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#92E721' }}>
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                <path d="M4 10l4 4 8-8" stroke="#0d2b14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <div className="text-[13px] font-bold text-[#0d2b14]">Order #1042 Confirmed!</div>
              <div className="text-[11px] text-[#2d6a00]">Customer notified via email</div>
            </div>
          </div>
          <div className="rounded-xl px-4 py-2.5 flex items-center justify-between" style={{ background: '#0d2b14', animation: 'slideUp 0.5s ease' }}>
            <span className="text-[12px] font-semibold" style={{ color: '#92E721' }}>Your revenue</span>
            <span className="text-[14px] font-bold text-white">+$49.00</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const [visualKey, setVisualKey] = useState(0);

  useEffect(() => {
    // 5 phases × 1800ms + 1800ms hold = ~10800ms per step
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
      setVisualKey((k) => k + 1);
    }, 11000);
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
