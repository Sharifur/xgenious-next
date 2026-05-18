'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/* ══════════════════════════════════════════════════════════════════════════
   Panel 1 — Faster Product Validation
   ══════════════════════════════════════════════════════════════════════════ */
function ValidationPanel() {
  const [count, setCount] = useState(0);
  const metrics = [
    { label: 'Users onboarded', value: '1,240', icon: '👥' },
    { label: 'Feedback collected', value: '340', icon: '💬' },
    { label: 'NPS score', value: '74', icon: '⭐' },
  ];

  useEffect(() => {
    setCount(0);
    const id = setInterval(() => setCount((p) => (p < metrics.length ? p + 1 : 0)), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-5 px-6 py-8"
      style={{ background: 'linear-gradient(145deg, #fff7ed 0%, #fed7aa 100%)' }}>

      {/* Header */}
      <div className="flex flex-col items-center gap-1">
        <motion.div animate={{ y: [-4, 4, -4] }} transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          className="text-[44px] leading-none">🚀</motion.div>
        <span className="font-bold text-[15px]" style={{ color: '#9a3412' }}>MVP is live — Week 6</span>
      </div>

      {/* Metric cards appearing one by one */}
      <div className="flex flex-col gap-2 w-full max-w-[260px]">
        {metrics.map((m, i) => (
          <AnimatePresence key={m.label}>
            {count > i && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="flex items-center justify-between bg-white rounded-[10px] px-4 py-2.5 shadow-sm"
              >
                <span className="text-[13px] text-[#6b7280]">{m.icon} {m.label}</span>
                <span className="font-bold text-[14px]" style={{ color: '#ea580c' }}>{m.value}</span>
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>

      {/* Progress bar */}
      <div className="w-full max-w-[260px]">
        <div className="flex justify-between text-[11px] text-[#9a3412] font-medium mb-1">
          <span>Launch Progress</span><span>100%</span>
        </div>
        <div className="h-2 rounded-full bg-orange-100 overflow-hidden">
          <motion.div className="h-full rounded-full" style={{ background: '#ea580c' }}
            initial={{ width: '0%' }} animate={{ width: '100%' }}
            transition={{ duration: 7, ease: 'easeInOut', repeat: Infinity, repeatDelay: 1 }} />
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   Panel 2 — Reduced Development Risk
   ══════════════════════════════════════════════════════════════════════════ */
function RiskPanel() {
  const [step, setStep] = useState(0); // 0=danger, 1=mitigating, 2=safe
  const risks = ['Scope creep', 'Budget blowout', 'Wrong features', 'Missed deadline'];
  const [resolved, setResolved] = useState(0);

  useEffect(() => {
    const run = () => {
      setStep(0); setResolved(0);
      const t1 = setTimeout(() => setStep(1), 1500);
      const t2 = setTimeout(() => setStep(2), 4500);
      const ids = risks.map((_, i) => setTimeout(() => setResolved(i + 1), 2000 + i * 800));
      return [t1, t2, ...ids];
    };
    let handles = run();
    const loop = setInterval(() => {
      handles.forEach(clearTimeout);
      handles = run();
    }, 8000);
    return () => { handles.forEach(clearTimeout); clearInterval(loop); };
  }, []);

  // gauge arc: 0 = full red left, 1 = full green right
  const angle = step === 0 ? -80 : step === 1 ? 0 : 80; // degrees from center

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-5 px-6 py-8"
      style={{ background: 'linear-gradient(145deg, #eff6ff 0%, #bfdbfe 100%)' }}>

      {/* Gauge */}
      <div className="relative flex flex-col items-center">
        <svg width="160" height="90" viewBox="0 0 160 90">
          {/* Track */}
          <path d="M 20 80 A 60 60 0 0 1 140 80" fill="none" stroke="#e5e7eb" strokeWidth="10" strokeLinecap="round"/>
          {/* Red zone */}
          <path d="M 20 80 A 60 60 0 0 1 80 20" fill="none" stroke="#fca5a5" strokeWidth="10" strokeLinecap="round"/>
          {/* Green zone */}
          <path d="M 80 20 A 60 60 0 0 1 140 80" fill="none" stroke="#86efac" strokeWidth="10" strokeLinecap="round"/>
          {/* Needle */}
          <motion.line
            x1="80" y1="80" x2="80" y2="28"
            stroke={step === 2 ? '#16a34a' : step === 1 ? '#f59e0b' : '#dc2626'}
            strokeWidth="3" strokeLinecap="round"
            style={{ transformOrigin: '80px 80px' }}
            animate={{ rotate: angle }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />
          <circle cx="80" cy="80" r="5" fill="#1e40af"/>
        </svg>
        <motion.span
          animate={{ color: step === 2 ? '#16a34a' : step === 1 ? '#d97706' : '#dc2626' }}
          transition={{ duration: 0.6 }}
          className="text-[12px] font-bold -mt-1"
        >
          {step === 2 ? 'RISK: LOW ✓' : step === 1 ? 'MITIGATING…' : 'RISK: HIGH'}
        </motion.span>
      </div>

      {/* Risk items */}
      <div className="flex flex-col gap-1.5 w-full max-w-[240px]">
        {risks.map((r, i) => (
          <div key={r} className="flex items-center justify-between bg-white rounded-[8px] px-3 py-2">
            <span className="text-[12px]" style={{ color: '#374151', textDecoration: resolved > i ? 'line-through' : 'none', opacity: resolved > i ? 0.5 : 1 }}>{r}</span>
            <motion.span
              animate={{ background: resolved > i ? '#d1fae5' : '#fee2e2', color: resolved > i ? '#065f46' : '#991b1b' }}
              transition={{ duration: 0.4 }}
              className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
            >
              {resolved > i ? '✓ safe' : '⚠ risk'}
            </motion.span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   Panel 3 — Smarter Budget Planning
   ══════════════════════════════════════════════════════════════════════════ */
function BudgetPanel() {
  const [animating, setAnimating] = useState(false);
  const [savings, setSavings] = useState(0);

  useEffect(() => {
    setAnimating(false); setSavings(0);
    const t = setTimeout(() => {
      setAnimating(true);
      let n = 0;
      const id = setInterval(() => {
        n += 750;
        if (n >= 105000) { setSavings(105000); clearInterval(id); }
        else setSavings(n);
      }, 50);
      return () => clearInterval(id);
    }, 400);
    return () => clearTimeout(t);
  }, []);

  const bars = [
    { label: 'Traditional', amount: '$120k', height: 130, color: '#fca5a5', textColor: '#dc2626' },
    { label: 'With MVP',    amount: '$15k',  height: 24,  color: '#86efac', textColor: '#16a34a' },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-5 px-6 py-8"
      style={{ background: 'linear-gradient(145deg, #f0fdf4 0%, #bbf7d0 100%)' }}>

      <span className="font-bold text-[14px]" style={{ color: '#14532d' }}>Development Cost Comparison</span>

      {/* Bar chart */}
      <div className="flex items-end gap-8 h-[150px]">
        {bars.map((b) => (
          <div key={b.label} className="flex flex-col items-center gap-1.5">
            <span className="font-bold text-[12px]" style={{ color: b.textColor }}>{b.amount}</span>
            <motion.div
              className="w-14 rounded-t-[8px]"
              style={{ background: b.color }}
              initial={{ height: 0 }}
              animate={{ height: animating ? b.height : 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: b.label === 'With MVP' ? 0.3 : 0 }}
            />
            <span className="text-[11px] text-[#6b7280] text-center leading-tight w-14">{b.label}</span>
          </div>
        ))}
      </div>

      {/* Savings */}
      <div className="flex flex-col items-center gap-0.5 bg-white rounded-[12px] px-6 py-3 shadow-sm">
        <span className="text-[11px] text-[#6b7280]">You save up to</span>
        <span className="font-bold text-[26px]" style={{ color: '#059669' }}>
          ${savings.toLocaleString()}
        </span>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   Panel 4 — Continuous Product Growth
   ══════════════════════════════════════════════════════════════════════════ */
function GrowthPanel() {
  const pts = [
    { x: 20,  y: 130, label: 'v1', users: '0.2k' },
    { x: 75,  y: 100, label: 'v2', users: '1.5k' },
    { x: 135, y: 68,  label: 'v3', users: '8k'   },
    { x: 195, y: 38,  label: 'v4', users: '24k'  },
    { x: 250, y: 16,  label: 'v5', users: '50k'  },
  ];
  const [vis, setVis] = useState(0);

  useEffect(() => {
    setVis(0);
    const id = setInterval(() => setVis((p) => (p < pts.length ? p + 1 : 0)), 1600);
    return () => clearInterval(id);
  }, []);

  const linePath = pts.slice(0, Math.max(vis, 1)).map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x} ${p.y}`).join(' ');
  const areaPath = vis > 0
    ? `${linePath} L${pts[Math.max(vis - 1, 0)].x} 150 L${pts[0].x} 150 Z`
    : '';

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4 px-6 py-8"
      style={{ background: 'linear-gradient(145deg, #faf5ff 0%, #e9d5ff 100%)' }}>

      <span className="font-bold text-[14px]" style={{ color: '#581c87' }}>Product Growth Curve</span>

      {/* Chart */}
      <svg width="270" height="165" viewBox="0 0 270 165">
        {[30, 70, 110].map((y) => (
          <line key={y} x1="10" y1={y} x2="260" y2={y} stroke="#e9d5ff" strokeWidth="1" strokeDasharray="3 4"/>
        ))}
        {areaPath && <motion.path d={areaPath} fill="#a855f7" fillOpacity="0.15" initial={{ opacity: 0 }} animate={{ opacity: 1 }} />}
        {vis > 1 && (
          <motion.path d={linePath} fill="none" stroke="#9333ea" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5 }} />
        )}
        {pts.slice(0, vis).map((p, i) => (
          <motion.g key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 400 }}>
            <circle cx={p.x} cy={p.y} r="5" fill="#9333ea"/>
            <text x={p.x} y={p.y - 11} textAnchor="middle" fontSize="9" fill="#7e22ce" fontWeight="700">{p.label}</text>
          </motion.g>
        ))}
      </svg>

      {/* Latest metric */}
      <AnimatePresence mode="wait">
        {vis > 0 && (
          <motion.div key={vis} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="flex items-center gap-3 bg-white rounded-[10px] px-5 py-2.5 shadow-sm">
            <span className="text-[12px] text-[#6b7280]">Active users</span>
            <span className="font-bold text-[20px]" style={{ color: '#9333ea' }}>{pts[vis - 1]?.users}</span>
            <span className="text-[12px] text-[#16a34a] font-semibold">↑</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   Items
   ══════════════════════════════════════════════════════════════════════════ */
const PANELS = [ValidationPanel, RiskPanel, BudgetPanel, GrowthPanel];

const items = [
  {
    icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>),
    title: 'Faster Product Validation',
    body: 'Get working software in front of real users in weeks, not months. Real behaviour data — signups, retention, activation — tells you more in 30 days than 6 months of assumption-driven planning.',
  },
  {
    icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>),
    title: 'Reduced Development Risk',
    body: 'Building the wrong thing is the most expensive mistake in software. An MVP surfaces what users actually want before you invest in the full build — cutting the risk of a costly pivot or rewrite later.',
  },
  {
    icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><path d="M2 10h20"/></svg>),
    title: 'Smarter Budget Planning',
    body: 'Fixed-price engagements with committed scope. No runaway costs, no mid-sprint surprises — you know exactly what you\'re getting and what it costs before work starts.',
  },
  {
    icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/></svg>),
    title: 'Continuous Product Growth',
    body: 'Clean architecture from day one means v2 is an extension, not a rewrite. When the MVP validates, the codebase is already structured to absorb the next sprint of features without technical debt accumulating.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
   Main component
   ══════════════════════════════════════════════════════════════════════════ */
export default function Benefits() {
  const [open, setOpen] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setOpen((p) => (p + 1) % items.length);
    }, 10000);
  }, []);

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [startTimer]);

  const handleClick = (i: number) => {
    setOpen(i);
    startTimer(); // reset 5s timer on manual click
  };

  const ActivePanel = PANELS[open];

  return (
    <section className="py-16 sm:py-20 lg:py-[100px] bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0 flex flex-col gap-12 sm:gap-16 items-center">

        <div className="flex flex-col items-center gap-4 text-center max-w-[760px]">
          <h2 className="font-semibold text-[#0f1112] text-[26px] leading-[34px] sm:text-[36px] sm:leading-[44px] lg:text-[44px] lg:leading-[52px]">
            Benefits of MVP Development{' '}<br />for Faster Growth
          </h2>
          <p className="text-[#484848] text-[14px] leading-[22px] sm:text-[16px] sm:leading-[24px]">
            Launch faster, validate your idea early, and reduce development risk
            with a strategic MVP built for real market feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full items-stretch">

          {/* Left — animated illustration */}
          <div className="rounded-[20px] overflow-hidden relative aspect-[4/3] lg:aspect-auto lg:min-h-[460px]">
            <AnimatePresence mode="wait">
              <motion.div key={open} className="absolute inset-0"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.03 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}>
                <ActivePanel />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right — accordion */}
          <div className="rounded-[20px] flex flex-col divide-y divide-[#ebebeb] p-2 sm:p-3" style={{ background: '#f5f6f8' }}>
            {items.map((item, i) => (
              <button key={item.title} onClick={() => handleClick(i)}
                className="flex flex-col gap-3 text-left px-4 sm:px-5 py-5 sm:py-6 focus:outline-none w-full relative overflow-hidden">

                {/* Active progress bar at bottom */}
                {open === i && (
                  <motion.div className="absolute bottom-0 left-0 h-[2px] rounded-full"
                    style={{ background: '#ec7161' }}
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 10, ease: 'linear' }} />
                )}

                <div className="flex items-center gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full transition-colors duration-200"
                    style={{ background: open === i ? '#fde8e5' : '#ebe9e9', color: open === i ? '#ec7161' : '#6b6b6b' }}>
                    {item.icon}
                  </span>
                  <span className="font-semibold text-[15px] sm:text-[17px] leading-[24px]" style={{ color: '#0f1112' }}>
                    {item.title}
                  </span>
                </div>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="text-[#484848] text-[13px] sm:text-[14px] leading-[21px] pl-12 overflow-hidden">
                      {item.body}
                    </motion.p>
                  )}
                </AnimatePresence>
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
