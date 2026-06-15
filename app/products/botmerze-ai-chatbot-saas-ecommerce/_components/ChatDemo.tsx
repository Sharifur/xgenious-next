'use client';

import { useEffect, useRef, useState } from 'react';
import { COLOR, LIGHT_COLOR } from './constants';

type Message = {
  id: number;
  from: 'bot' | 'user' | 'typing';
  text?: string;
  products?: { name: string; price: string; badge?: string }[];
  order?: { id: string; status: string; step: number; eta: string; carrier: string };
  returnCard?: { id: string; item: string };
};

type ScenarioDef = {
  id: string;
  label: string;
  icon: React.ReactNode;
  sequence: { msg: Message; delay: number }[];
};

const SCENARIOS: ScenarioDef[] = [
  {
    id: 'products',
    label: 'Product Search',
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
      </svg>
    ),
    sequence: [
      { delay: 500,  msg: { id: 1, from: 'bot',    text: 'Hi! How can I help you today?' } },
      { delay: 1800, msg: { id: 2, from: 'user',   text: "I'm looking for an office watch. Show me some options?" } },
      { delay: 2600, msg: { id: 3, from: 'typing' } },
      { delay: 4200, msg: { id: 4, from: 'bot',    text: 'Found 2 great picks from your store:', products: [{ name: 'Watch Pro', price: '$179.99', badge: 'Best Seller' }, { name: 'Executive Watch', price: '$219.99', badge: 'New' }] } },
    ],
  },
  {
    id: 'orders',
    label: 'Order Tracking',
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l2-1.14"/><path d="M16.5 9.4L7.55 4.24"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" y1="22" x2="12" y2="12"/><circle cx="18.5" cy="15.5" r="2.5"/><path d="M20.27 17.27L22 19"/>
      </svg>
    ),
    sequence: [
      { delay: 500,  msg: { id: 1, from: 'bot',    text: 'Hi! How can I help you today?' } },
      { delay: 1800, msg: { id: 2, from: 'user',   text: 'Can you check the status of my order #BM-1234?' } },
      { delay: 2600, msg: { id: 3, from: 'typing' } },
      { delay: 4000, msg: { id: 4, from: 'bot',    text: 'Found your order! Here are the details:', order: { id: '#BM-1234', status: 'Shipped', step: 2, eta: 'Jun 18, 2026', carrier: 'FedEx · FX7823491' } } },
    ],
  },
  {
    id: 'returns',
    label: 'Return Request',
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/>
      </svg>
    ),
    sequence: [
      { delay: 500,  msg: { id: 1, from: 'bot',    text: 'Hi! How can I help you today?' } },
      { delay: 1800, msg: { id: 2, from: 'user',   text: 'I want to return my recent watch purchase.' } },
      { delay: 2600, msg: { id: 3, from: 'typing' } },
      { delay: 4000, msg: { id: 4, from: 'bot',    text: 'No problem! I checked your order — it\'s eligible for a return:', returnCard: { id: '#BM-1198', item: 'Executive Watch — $219.99' } } },
    ],
  },
];

const RESET_DELAY = 8500;

const STEPS = ['Ordered', 'Processing', 'Shipped', 'Delivered'];

export default function ChatDemo() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [tick, setTick] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([]);
    const scenario = SCENARIOS[activeIdx];
    const timers = scenario.sequence.map(({ delay, msg }) =>
      setTimeout(() => {
        setMessages((prev) => [...prev.filter((m) => m.from !== 'typing'), msg]);
      }, delay),
    );
    timers.push(setTimeout(() => setTick((t) => t + 1), RESET_DELAY));
    return () => timers.forEach(clearTimeout);
  }, [activeIdx, tick]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const switchTab = (idx: number) => {
    if (idx === activeIdx) { setTick((t) => t + 1); return; }
    setActiveIdx(idx);
    setTick(0);
  };

  return (
    <section className="py-20 lg:py-[100px]" style={{ background: '#F5F6F8' }}>
      <style>{`
        @keyframes msg-in     { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
        @keyframes dot-bounce { 0%,80%,100% { transform:translateY(0); } 40% { transform:translateY(-5px); } }
        @keyframes ping-fade  { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.6; transform:scale(1.1); } }
      `}</style>

      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT */}
          <div className="flex flex-col gap-8">
            <div>
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-5"
                style={{ background: LIGHT_COLOR, color: COLOR }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
                Live Preview
              </div>
              <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-4">
                See AI in Action
              </h2>
              <p className="text-[15px] text-[#6b7280] leading-7">
                Watch Botmerze handle real customer conversations — product discovery, order tracking, and return requests, all automated without human input.
              </p>
            </div>

            <ul className="flex flex-col gap-3">
              {[
                'Auto-suggests products based on customer intent',
                'Fetches live order status from your store in real time',
                'Processes return and refund requests automatically',
                'Captures leads and escalates complex issues to agents',
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-[14px] text-[#374151]">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5" style={{ background: LIGHT_COLOR }}>
                    <svg width="10" height="10" viewBox="0 0 20 20" fill={COLOR}>
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 gap-4">
              {[{ value: '80%', label: 'Support queries automated' }, { value: '35%', label: 'Higher average order value' }].map((s) => (
                <div key={s.value} className="rounded-2xl bg-white border border-[#E5E7EC] px-5 py-4">
                  <div className="text-[28px] font-black leading-none mb-1" style={{ color: COLOR }}>{s.value}</div>
                  <div className="text-[12px] text-[#6b7280] leading-4">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — chat preview */}
          <div className="relative flex flex-col gap-3">

            {/* Scenario tabs */}
            <div className="flex gap-2 flex-wrap">
              {SCENARIOS.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => switchTab(i)}
                  className="flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[12px] font-semibold transition-all"
                  style={
                    activeIdx === i
                      ? { background: COLOR, color: 'white' }
                      : { background: 'white', color: '#6b7280', border: '1px solid #E5E7EC' }
                  }
                >
                  {s.icon}
                  {s.label}
                </button>
              ))}
            </div>

            {/* Glow */}
            <div
              className="absolute inset-x-8 bottom-8 top-16 rounded-3xl blur-2xl opacity-15 pointer-events-none"
              style={{ background: `linear-gradient(135deg, ${COLOR}, #7C3AED)` }}
            />

            {/* AI Online badge */}
            <div
              className="absolute -top-1 right-0 z-20 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold text-white shadow-lg"
              style={{ background: COLOR, animation: 'ping-fade 2.5s ease-in-out infinite' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" />
              AI Online
            </div>

            {/* Chat card */}
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-[#E5E7EC]">

              {/* Header */}
              <div
                className="flex items-center justify-between px-5 py-4"
                style={{ background: `linear-gradient(135deg, ${COLOR} 0%, #7C3AED 100%)` }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <rect x="4" y="8" width="16" height="12" rx="3" fill="white" fillOpacity="0.9"/>
                      <rect x="9" y="3" width="6" height="5" rx="1.5" fill="white" fillOpacity="0.7"/>
                      <circle cx="9" cy="13" r="1.5" fill={COLOR}/>
                      <circle cx="15" cy="13" r="1.5" fill={COLOR}/>
                      <path d="M9 17h6" stroke={COLOR} strokeWidth="1.5" strokeLinecap="round"/>
                      <line x1="2" y1="12" x2="4" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="20" y1="12" x2="22" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold text-[14px] leading-none">Botmerze AI</p>
                    <p className="text-white/70 text-[11px] mt-0.5 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] inline-block" />
                      Online — powered by your OpenAI key
                    </p>
                  </div>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </div>

              {/* Messages */}
              <div ref={scrollRef} className="bg-white px-5 py-6 flex flex-col gap-4 h-[320px] overflow-y-auto">
                {messages.map((msg) => {
                  if (msg.from === 'typing') {
                    return (
                      <div key="typing" className="flex items-end gap-2" style={{ animation: 'msg-in 0.3s ease' }}>
                        <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: COLOR }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
                        </div>
                        <div className="bg-[#F3F4F6] rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1.5 items-center">
                          {[0, 1, 2].map((i) => (
                            <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#9ca3af] inline-block" style={{ animation: `dot-bounce 1.2s ease-in-out ${i * 0.15}s infinite` }} />
                          ))}
                        </div>
                      </div>
                    );
                  }

                  if (msg.from === 'user') {
                    return (
                      <div key={msg.id} className="flex justify-end" style={{ animation: 'msg-in 0.35s ease' }}>
                        <div className="rounded-2xl rounded-br-sm px-4 py-3 max-w-[78%]" style={{ background: `${COLOR}18` }}>
                          <p className="text-[13px] text-[#374151] leading-5">{msg.text}</p>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <div key={msg.id} className="flex items-end gap-2" style={{ animation: 'msg-in 0.35s ease' }}>
                      <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: COLOR }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
                      </div>
                      <div className="flex flex-col gap-2 max-w-[85%]">
                        {msg.text && (
                          <div className="bg-[#F3F4F6] rounded-2xl rounded-bl-sm px-4 py-3">
                            <p className="text-[13px] text-[#374151] leading-5">{msg.text}</p>
                          </div>
                        )}

                        {/* Product cards */}
                        {msg.products && (
                          <div className="flex gap-2">
                            {msg.products.map((p) => (
                              <div key={p.name} className="bg-white border border-[#E5E7EC] rounded-xl p-3 flex flex-col gap-2 w-[130px]">
                                {p.badge && (
                                  <span className="text-[8px] font-bold px-1.5 py-0.5 rounded-full self-start" style={{ background: `${COLOR}15`, color: COLOR }}>{p.badge}</span>
                                )}
                                <div className="w-full h-12 rounded-lg bg-[#F3F4F6] flex items-center justify-center">
                                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.4" strokeLinecap="round">
                                    <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.58-7 8-7s8 3 8 7"/>
                                  </svg>
                                </div>
                                <div>
                                  <p className="text-[10px] font-bold text-[#0F1112]">{p.name}</p>
                                  <p className="text-[12px] font-black" style={{ color: COLOR }}>{p.price}</p>
                                </div>
                                <button className="w-full text-[9px] font-bold py-1.5 rounded-lg text-white" style={{ background: COLOR }}>
                                  Add to Cart
                                </button>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Order tracking card */}
                        {msg.order && (
                          <div className="bg-white border border-[#E5E7EC] rounded-xl p-4 w-full">
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-[12px] font-bold text-[#0F1112]">Order {msg.order.id}</span>
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: `${COLOR}15`, color: COLOR }}>
                                {msg.order.status}
                              </span>
                            </div>
                            {/* Step progress */}
                            <div className="flex items-center mb-2">
                              {STEPS.map((step, i) => (
                                <div key={step} className="flex items-center flex-1 last:flex-none">
                                  <div
                                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-[8px] font-black"
                                    style={i <= msg.order!.step ? { background: COLOR, color: 'white' } : { background: '#E5E7EC', color: '#9CA3AF' }}
                                  >
                                    {i < msg.order!.step ? '✓' : i + 1}
                                  </div>
                                  {i < STEPS.length - 1 && (
                                    <div className="flex-1 h-0.5 mx-0.5" style={{ background: i < msg.order!.step ? COLOR : '#E5E7EC' }} />
                                  )}
                                </div>
                              ))}
                            </div>
                            <div className="flex justify-between mb-3">
                              {STEPS.map((s) => (
                                <span key={s} className="text-[8px] text-[#9CA3AF]">{s}</span>
                              ))}
                            </div>
                            <div className="border-t border-[#F3F4F6] pt-2.5 flex flex-col gap-1">
                              <div className="flex justify-between text-[10px]">
                                <span className="text-[#9CA3AF]">Carrier</span>
                                <span className="font-semibold text-[#374151]">{msg.order.carrier}</span>
                              </div>
                              <div className="flex justify-between text-[10px]">
                                <span className="text-[#9CA3AF]">Est. delivery</span>
                                <span className="font-bold" style={{ color: COLOR }}>{msg.order.eta}</span>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Return request card */}
                        {msg.returnCard && (
                          <div className="bg-white border border-[#E5E7EC] rounded-xl p-4 w-full">
                            <div className="flex items-center gap-2 mb-3">
                              <span className="w-5 h-5 rounded-full bg-[#10b981] flex items-center justify-center flex-shrink-0">
                                <svg width="9" height="9" viewBox="0 0 20 20" fill="white"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                              </span>
                              <span className="text-[12px] font-bold text-[#0F1112]">Return Eligible</span>
                            </div>
                            <div className="text-[10px] text-[#9CA3AF] mb-0.5">Order {msg.returnCard.id}</div>
                            <div className="text-[12px] font-semibold text-[#0F1112] mb-3">{msg.returnCard.item}</div>
                            <div className="border border-[#E5E7EC] rounded-lg px-3 py-2 text-[11px] text-[#9CA3AF] mb-3 flex items-center justify-between">
                              Select return reason...
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                            </div>
                            <button className="w-full text-white text-[11px] font-bold py-2 rounded-lg" style={{ background: COLOR }}>
                              Submit Return Request
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Input bar */}
              <div className="bg-white border-t border-[#E5E7EC] px-4 py-3">
                <div className="flex items-center gap-2 mb-2">
                  <button className="text-[10px] text-[#6b7280] border border-[#E5E7EC] rounded-full px-2.5 py-0.5">+ New Chat</button>
                  <button className="text-[10px] text-[#6b7280] border border-[#E5E7EC] rounded-full px-2.5 py-0.5">Create Ticket</button>
                </div>
                <div className="flex items-center gap-2 border rounded-xl px-3 py-2.5" style={{ borderColor: `${COLOR}40` }}>
                  <span className="text-[12px] text-[#9ca3af] flex-1">Type your message here...</span>
                  <button className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: COLOR }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
