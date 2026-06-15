'use client';

import { useEffect, useState } from 'react';
import { COLOR, LIGHT_COLOR } from './constants';

/* ─── Step definitions ─── */
const STEPS = [
  {
    n: 1,
    time: '2 min',
    title: 'Connect Your Store',
    desc: 'Link WooCommerce or Shopify with one click. Botmerze syncs products, orders, inventory, and customer data in real time — no coding needed.',
  },
  {
    n: 2,
    time: '5 min',
    title: 'Train the AI',
    desc: 'Upload PDFs, paste URLs, or let AI auto-crawl your store catalog. Botmerze builds a vector knowledge base and starts answering in minutes.',
  },
  {
    n: 3,
    time: 'Instant',
    title: 'Go Live on Your Store',
    desc: 'Paste one script tag. The chatbot goes live immediately — answering product questions, tracking orders, and capturing leads 24/7.',
  },
  {
    n: 4,
    time: '24/7',
    title: 'Grow Revenue Automatically',
    desc: 'AI recommendations, cross-sells, and in-chat checkout boost AOV by 35%. Lead capture converts every visitor into a pipeline entry.',
  },
];

/* ─── Preview panels ─── */

function ConnectPreview() {
  const stores = [
    { name: 'MyWatch Store',  type: 'WooCommerce', logo: '/products/logos/woocommerce.svg', tc: '#7F54B3', ok: true },
    { name: 'GadgetBunny',    type: 'Shopify',     logo: '/products/logos/shopify.svg',     tc: '#95BF47', ok: true },
    { name: 'Custom Store',   type: 'REST API',    logo: null,                              tc: '#6366F1', ok: false },
  ];
  return (
    <div className="flex flex-col">
      <div className="px-4 py-2.5 border-b border-[#F3F4F6] flex items-center justify-between">
        <span className="text-[12px] font-bold text-[#0F1112]">Commerce Stores</span>
        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: `${COLOR}12`, color: COLOR }}>2 connected</span>
      </div>
      {stores.map((s) => (
        <div key={s.name} className="flex items-center justify-between px-4 py-3 border-b border-[#F9FAFB] last:border-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${s.tc}15` }}>
              {s.logo ? (
                <img src={s.logo} alt={s.type} className="w-5 h-5 object-contain" />
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={s.tc} strokeWidth="2" strokeLinecap="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              )}
            </div>
            <div>
              <div className="text-[12px] font-bold text-[#0F1112]">{s.name}</div>
              <div className="text-[10px] text-[#9CA3AF]">{s.type}</div>
            </div>
          </div>
          {s.ok ? (
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1" style={{ background: '#ecfdf5', color: '#059669' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />Connected
            </span>
          ) : (
            <button className="text-[10px] font-bold px-2.5 py-1 rounded-full text-white flex items-center gap-1" style={{ background: COLOR }}>
              Connect
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          )}
        </div>
      ))}
      <div className="px-4 py-3 flex items-center gap-2 text-[11px] text-[#6b7280]">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={COLOR} strokeWidth="2" strokeLinecap="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
        Syncing products, orders &amp; customers in real time
      </div>
    </div>
  );
}

function TrainPreview() {
  const files = [
    { name: 'store-faq.pdf',         type: 'PDF',      color: '#ef4444', chunks: 142, pct: 100 },
    { name: 'return-policy.pdf',     type: 'PDF',      color: '#ef4444', chunks:  89, pct: 100 },
    { name: 'mystore.com/products',  type: 'URL',      color: '#3b82f6', chunks: 531, pct: 100 },
    { name: 'Catalog auto-crawl',    type: 'AUTO',     color: COLOR,     chunks: 485, pct:  78 },
  ];
  return (
    <div className="flex flex-col">
      <div className="px-4 py-2.5 border-b border-[#F3F4F6] flex items-center justify-between">
        <span className="text-[12px] font-bold text-[#0F1112]">Knowledge Repository</span>
        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: `${COLOR}12`, color: COLOR }}>1,247 chunks</span>
      </div>
      {files.map((f) => (
        <div key={f.name} className="flex items-center gap-3 px-4 py-3 border-b border-[#F9FAFB] last:border-0">
          <span className="text-[9px] font-black px-1.5 py-0.5 rounded flex-shrink-0" style={{ background: `${f.color}18`, color: f.color }}>{f.type}</span>
          <div className="flex-1 min-w-0">
            <div className="text-[11px] font-semibold text-[#374151] truncate">{f.name}</div>
            <div className="mt-1 h-1 rounded-full bg-[#F3F4F6] overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${f.pct}%`, background: f.pct === 100 ? '#10b981' : COLOR }} />
            </div>
          </div>
          <span className="text-[10px] font-bold flex-shrink-0" style={{ color: f.pct === 100 ? '#10b981' : COLOR }}>
            {f.pct === 100 ? `${f.chunks} ✓` : `${f.pct}%`}
          </span>
        </div>
      ))}
    </div>
  );
}

function LivePreview() {
  const msgs = [
    { from: 'user', text: 'Do you have the Watch Pro in black?' },
    { from: 'bot',  text: 'Yes! Watch Pro comes in Black, Silver, and Gold. Black is in stock — want me to add it to your cart?' },
    { from: 'user', text: 'Yes please, and what\'s the shipping time?' },
    { from: 'bot',  text: 'Added! Standard shipping: 3–5 days. Express available at checkout.' },
  ];
  return (
    <div className="flex flex-col">
      <div className="px-4 py-2.5 border-b border-[#F3F4F6] flex items-center justify-between">
        <span className="text-[12px] font-bold text-[#0F1112]">Live Conversation</span>
        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1" style={{ background: '#ecfdf5', color: '#059669' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />3 active
        </span>
      </div>
      <div className="px-4 py-3 flex flex-col gap-2 max-h-[200px] overflow-hidden">
        {msgs.map((m, i) => (
          <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className="text-[11px] leading-4 px-3 py-2 rounded-xl max-w-[85%]"
              style={m.from === 'bot'
                ? { background: '#F3F4F6', color: '#374151', borderBottomLeftRadius: 2 }
                : { background: `${COLOR}18`, color: '#374151', borderBottomRightRadius: 2 }}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>
      <div className="px-4 py-2 border-t border-[#F3F4F6] flex items-center gap-1.5 text-[10px] text-[#9CA3AF]">
        <svg width="10" height="10" viewBox="0 0 20 20" fill="#10b981"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
        Resolved in 28 s — no human involved
      </div>
    </div>
  );
}

function AnalyticsPreview() {
  const kpis = [
    { label: 'Tickets deflected', value: '80%',  sub: 'this month', color: '#10b981' },
    { label: 'AOV increase',      value: '+35%', sub: 'vs baseline', color: COLOR },
    { label: 'Leads captured',    value: '247',  sub: 'this month', color: '#6366F1' },
  ];
  const bars = [65, 80, 72, 90, 85, 95, 88];
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  return (
    <div className="flex flex-col">
      <div className="px-4 py-2.5 border-b border-[#F3F4F6]">
        <span className="text-[12px] font-bold text-[#0F1112]">Analytics · This Month</span>
      </div>
      <div className="grid grid-cols-3 gap-0 border-b border-[#F3F4F6]">
        {kpis.map((k) => (
          <div key={k.label} className="flex flex-col px-4 py-3 border-r border-[#F9FAFB] last:border-0">
            <span className="text-[20px] font-black leading-none" style={{ color: k.color }}>{k.value}</span>
            <span className="text-[9px] text-[#9CA3AF] mt-0.5 leading-3">{k.label}</span>
            <span className="text-[8px] text-[#C4C9D0] mt-0.5">{k.sub}</span>
          </div>
        ))}
      </div>
      {/* Mini bar chart */}
      <div className="px-4 py-3 flex flex-col gap-1.5">
        <span className="text-[9px] font-semibold text-[#9CA3AF] uppercase tracking-wide">Conversations resolved / day</span>
        <div className="flex items-end gap-1 h-14">
          {bars.map((h, i) => (
            <div key={i} className="flex flex-col items-center gap-1 flex-1">
              <div className="w-full rounded-sm" style={{ height: `${h}%`, background: i === 5 ? COLOR : `${COLOR}40` }} />
              <span className="text-[7px] text-[#C4C9D0]">{days[i]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const PREVIEWS = [ConnectPreview, TrainPreview, LivePreview, AnalyticsPreview];

/* nav[step] = which sidebar item is highlighted */
const ACTIVE_NAV = [1, 2, 3, 4];

const NAV_ITEMS = [
  { label: 'Dashboard',    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg> },
  { label: 'Stores',       icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg> },
  { label: 'Knowledge',    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg> },
  { label: 'Chatbots',     icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg> },
  { label: 'Analytics',    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
];

export default function HowItWorksAnimated() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setActive((a) => (a + 1) % STEPS.length), 3500);
    return () => clearInterval(interval);
  }, []);

  const Preview = PREVIEWS[active];

  return (
    <section className="pb-20 lg:pb-[100px] bg-white">
      <style>{`
        @keyframes preview-in { from { opacity:0; transform:translateY(6px); } to { opacity:1; transform:translateY(0); } }
      `}</style>

      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1100px] mx-auto">

        <div className="text-center mb-16 max-w-[560px] mx-auto">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
            How It Works
          </div>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-4">
            Get Started in 4 Simple Steps
          </h2>
          <p className="text-[15px] text-[#6b7280] leading-7">
            No machine learning expertise required. Botmerze handles all AI infrastructure — you just connect your store.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left — app mockup */}
          <div className="rounded-2xl border border-[#E5E7EC] overflow-hidden shadow-lg bg-white">

            {/* Window title bar */}
            <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-[#E5E7EC]" style={{ background: '#F3F4F6' }}>
              <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
              <div className="ml-3 flex-1 h-[22px] rounded-md bg-white border border-[#E5E7EC] flex items-center gap-1.5 px-2.5 shadow-sm">
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                <span className="text-[10px] text-[#9ca3af]">app.botmerze.com</span>
              </div>
              <div className="flex items-center gap-1.5 ml-2">
                {[0,1,2].map(i=><div key={i} className="w-3 h-3 rounded-sm bg-[#E5E7EC]"/>)}
              </div>
            </div>

            {/* App layout */}
            <div className="flex" style={{ minHeight: 340 }}>

              {/* Sidebar */}
              <div className="flex flex-col items-center pt-4 pb-4 gap-1 flex-shrink-0" style={{ width: 56, background: '#0d1117', borderRight: '1px solid #1f2937' }}>
                {/* Logo */}
                <div className="w-8 h-8 rounded-lg mb-4 flex items-center justify-center flex-shrink-0" style={{ background: COLOR }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <rect x="4" y="8" width="16" height="12" rx="3" fill="white" fillOpacity="0.9"/>
                    <rect x="9" y="3" width="6" height="5" rx="1.5" fill="white" fillOpacity="0.6"/>
                    <circle cx="9" cy="13" r="1.5" fill={COLOR}/>
                    <circle cx="15" cy="13" r="1.5" fill={COLOR}/>
                  </svg>
                </div>
                {NAV_ITEMS.map((item, i) => {
                  const isNavActive = ACTIVE_NAV[active] === i;
                  return (
                    <div
                      key={item.label}
                      title={item.label}
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-all"
                      style={{
                        background: isNavActive ? `${COLOR}25` : 'transparent',
                        color: isNavActive ? COLOR : 'rgba(255,255,255,0.28)',
                      }}
                    >
                      {item.icon}
                    </div>
                  );
                })}
              </div>

              {/* Content area */}
              <div className="flex-1 flex flex-col overflow-hidden">

                {/* Section breadcrumb header */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-[#F3F4F6]">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#9CA3AF]">
                    <span>Botmerze</span>
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#C4C9D4" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
                    <span className="font-semibold text-[#374151]">{NAV_ITEMS[ACTIVE_NAV[active]].label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-16 rounded-md bg-[#F3F4F6]" />
                    <div className="w-6 h-6 rounded-full bg-[#E5E7EC]" />
                  </div>
                </div>

                {/* Dynamic preview */}
                <div key={active} className="flex-1" style={{ animation: 'preview-in 0.4s ease' }}>
                  <Preview />
                </div>
              </div>
            </div>

            {/* Step dots */}
            <div className="px-4 py-3 border-t border-[#F3F4F6] flex gap-2" style={{ background: '#F8F9FB' }}>
              {STEPS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="h-1 rounded-full transition-all duration-500 flex-1"
                  style={{ background: i === active ? COLOR : '#E5E7EC' }}
                />
              ))}
            </div>
          </div>

          {/* Right — steps */}
          <div className="flex flex-col gap-0">
            {STEPS.map((s, i) => {
              const isActive = i === active;
              const isDone   = i < active;
              return (
                <button
                  key={s.n}
                  className="flex items-start gap-4 text-left py-5 group relative"
                  onClick={() => setActive(i)}
                >
                  {/* Connector line */}
                  {i < STEPS.length - 1 && (
                    <div className="absolute left-[19px] top-[60px] w-0.5" style={{ height: 'calc(100% - 60px)', background: '#E5E7EC' }}>
                      {isDone && <div className="w-full h-full rounded-full" style={{ background: COLOR }} />}
                    </div>
                  )}

                  {/* Circle */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-[14px] font-black flex-shrink-0 transition-all duration-300 border-2"
                    style={
                      isActive
                        ? { background: COLOR, borderColor: COLOR, color: '#fff', boxShadow: `0 0 0 4px ${COLOR}22` }
                        : isDone
                        ? { background: '#fff', borderColor: COLOR, color: COLOR }
                        : { background: '#fff', borderColor: '#E5E7EC', color: '#9ca3af' }
                    }
                  >
                    {isDone ? (
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                        <path d="M5 10l4 4 6-6" stroke={COLOR} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : s.n}
                  </div>

                  {/* Text */}
                  <div className="pt-1.5 flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3
                        className="text-[15px] font-bold leading-tight transition-colors duration-200"
                        style={{ color: isActive ? '#0F1112' : '#6b7280' }}
                      >
                        {s.title}
                      </h3>
                      <span
                        className="text-[9px] font-bold px-1.5 py-0.5 rounded-full flex-shrink-0"
                        style={{ background: isActive ? `${COLOR}15` : '#F3F4F6', color: isActive ? COLOR : '#9CA3AF' }}
                      >
                        {s.time}
                      </span>
                    </div>
                    <div
                      className="overflow-hidden transition-all duration-300"
                      style={{ maxHeight: isActive ? '80px' : '0', opacity: isActive ? 1 : 0 }}
                    >
                      <p className="text-[13px] text-[#6b7280] leading-6 mt-1">{s.desc}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
