'use client';

import { useState, useEffect } from 'react';
import { COLOR, LIGHT_COLOR } from './constants';

const WA_GREEN = '#25D366';
const WA_DARK = '#128C7E';
const WA_SENT = '#dcf8c6';
const WA_BG = '#e5ddd5';

const FEATURES = [
  'WhatsApp Business API',
  'Client Order Creation',
  'Chat With Support',
  'Notification Through WhatsApp',
  'View Recent Order Details',
];

type Step =
  | { kind: 'sent'; text: string }
  | { kind: 'recv'; text: string; buttons?: string[] }
  | { kind: 'sent-reply'; quote1: string; quote2: string; text: string }
  | { kind: 'recv-btn'; text: string; button: string }
  | { kind: 'recv-order'; service: string; slot: string; price: string; time: string; button: string }
  | { kind: 'recv-confirm'; ref: string; provider: string; arrival: string; time: string };

const STEPS: Step[] = [
  { kind: 'sent', text: 'Hi' },
  { kind: 'recv', text: 'How can we help you?', buttons: ['Search Service', 'View Recent Orders', 'Talk to Support'] },
  { kind: 'sent-reply', quote1: '+1 (555) 182-4709', quote2: 'How can we help you?', text: 'Search Service' },
  { kind: 'recv', text: 'Please type the service you are looking for.' },
  { kind: 'sent', text: 'Repair' },
  { kind: 'recv-btn', text: 'Please choose a service:', button: 'Select Service' },
  { kind: 'sent-reply', quote1: '+1 (555) 182-4709', quote2: 'Please choose a service:', text: 'AC Repair' },
  { kind: 'recv-order', service: 'AC Repair', slot: 'Today, 3:00 PM', price: '$45 fixed', time: '12:13 pm', button: 'Confirm Booking' },
  { kind: 'sent', text: 'Confirm Booking' },
  { kind: 'recv', text: 'Please share your service address.' },
  { kind: 'sent', text: '123 Elm Street, New York, NY 10001' },
  { kind: 'recv', text: 'Preferred date and time?' },
  { kind: 'sent', text: 'Tomorrow, 3:00 PM' },
  { kind: 'recv-confirm', ref: '#PH-2847', provider: 'Alex M.', arrival: 'Tomorrow 3:00 PM', time: '12:15 pm' },
];

const INTERVAL = 1600;
const RESET_DELAY = 2800;

function WaButton({ label }: { label: string }) {
  return (
    <div className="border-t border-[#e0e0e0] pt-2 mt-1 flex items-center justify-center gap-1.5">
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={WA_DARK} strokeWidth="2.5"><path d="M9 14l-4-4 4-4M5 10h14" /></svg>
      <span className="text-[11px] font-semibold" style={{ color: WA_DARK }}>{label}</span>
    </div>
  );
}

function TypingDots() {
  return (
    <div className="self-start">
      <div className="flex items-center gap-1 px-3 py-2 rounded-2xl rounded-tl-[4px]" style={{ background: '#fff', width: 48 }}>
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full"
            style={{
              background: WA_DARK,
              animation: 'waTyping 1s ease-in-out infinite',
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function StepBubble({ step }: { step: Step }) {
  const isSent = step.kind === 'sent' || step.kind === 'sent-reply';

  if (step.kind === 'sent') {
    return (
      <div className="self-end">
        <div className="px-3 py-1.5 rounded-2xl rounded-tr-[4px] text-[11px]" style={{ background: WA_SENT, color: '#111' }}>
          {step.text}
          <span className="text-[8px] text-gray-500 ml-2">12:12 pm ✓✓</span>
        </div>
      </div>
    );
  }

  if (step.kind === 'sent-reply') {
    return (
      <div className="self-end max-w-[160px]">
        <div className="px-3 py-1.5 rounded-2xl rounded-tr-[4px] text-[11px]" style={{ background: WA_SENT, color: '#111' }}>
          <div className="border-l-2 border-[#128C7E] pl-1.5 mb-1">
            <span className="block text-[9px] font-semibold" style={{ color: WA_DARK }}>{step.quote1}</span>
            <span className="block text-[9px] text-gray-600">{step.quote2}</span>
          </div>
          {step.text}
          <span className="text-[8px] text-gray-500 ml-2">12:12 pm ✓✓</span>
        </div>
      </div>
    );
  }

  if (step.kind === 'recv') {
    return (
      <div className="self-start max-w-[170px]">
        <div className="rounded-2xl rounded-tl-[4px] text-[11px] overflow-hidden shadow-sm" style={{ background: '#fff', color: '#111' }}>
          <div className="px-3 pt-2 pb-1">
            {step.text}
            <span className="text-[8px] text-gray-400 ml-1 block text-right">12:12 pm</span>
          </div>
          {step.buttons?.map((b) => <WaButton key={b} label={b} />)}
          {step.buttons && <div className="pb-1" />}
        </div>
      </div>
    );
  }

  if (step.kind === 'recv-btn') {
    return (
      <div className="self-start max-w-[170px]">
        <div className="rounded-2xl rounded-tl-[4px] text-[11px] overflow-hidden shadow-sm" style={{ background: '#fff', color: '#111' }}>
          <div className="px-3 pt-2 pb-1">
            {step.text}
            <span className="text-[8px] text-gray-400 ml-1 block text-right">12:12 pm</span>
          </div>
          <div className="border-t border-[#e0e0e0] pt-1.5 pb-2 flex items-center justify-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={WA_DARK} strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>
            <span className="text-[11px] font-semibold" style={{ color: WA_DARK }}>{step.button}</span>
          </div>
        </div>
      </div>
    );
  }

  if (step.kind === 'recv-order') {
    return (
      <div className="self-start max-w-[175px]">
        <div className="rounded-2xl rounded-tl-[4px] text-[11px] overflow-hidden shadow-sm" style={{ background: '#fff', color: '#111' }}>
          <div className="px-3 pt-2 pb-2">
            <p className="font-semibold text-[11px] mb-1.5">Order Summary</p>
            <div className="flex flex-col gap-1 mb-1">
              <div className="flex items-center gap-1.5 text-[10px] text-gray-600">
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={WA_DARK} strokeWidth="2.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                <span>{step.service}</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-gray-600">
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={WA_DARK} strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                <span>{step.slot}</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-gray-600">
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={WA_DARK} strokeWidth="2.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                <span>{step.price}</span>
              </div>
            </div>
            <span className="text-[8px] text-gray-400 block text-right">{step.time}</span>
          </div>
          <div className="border-t border-[#e0e0e0] pt-1.5 pb-2 flex items-center justify-center gap-1.5">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={WA_DARK} strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            <span className="text-[11px] font-semibold" style={{ color: WA_DARK }}>{step.button}</span>
          </div>
        </div>
      </div>
    );
  }

  if (step.kind === 'recv-confirm') {
    return (
      <div className="self-start max-w-[175px]">
        <div className="rounded-2xl rounded-tl-[4px] text-[11px] px-3 py-2 shadow-sm" style={{ background: '#fff', color: '#111' }}>
          <div className="flex items-center gap-1.5 mb-1.5">
            <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: WA_DARK }}>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="white"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <span className="font-semibold text-[11px]">Order Confirmed!</span>
          </div>
          <div className="text-[9px] text-gray-600 flex flex-col gap-0.5">
            <span>Ref: {step.ref}</span>
            <span>Provider: {step.provider}</span>
            <span>Arrival: {step.arrival}</span>
          </div>
          <span className="text-[8px] text-gray-400 block text-right mt-1">{step.time}</span>
        </div>
      </div>
    );
  }

  return null;
}

function WaMockup({ visibleCount, typing }: { visibleCount: number; typing: boolean }) {
  const nextStep = STEPS[visibleCount];
  const nextIsSent = nextStep && (nextStep.kind === 'sent' || nextStep.kind === 'sent-reply');
  const showTyping = typing && visibleCount < STEPS.length && !nextIsSent;

  return (
    <div
      className="w-[265px] rounded-[28px] overflow-hidden flex flex-col"
      style={{
        border: '6px solid #111',
        background: '#fff',
        boxShadow: '0 16px 48px rgba(0,0,0,0.18)',
        height: '600px',
      }}
    >
      {/* Status bar */}
      <div className="flex items-center justify-between px-3 pt-2 pb-1" style={{ background: WA_DARK }}>
        <span className="text-[9px] text-white font-semibold">4:29</span>
        <div className="flex items-center gap-1">
          <svg width="9" height="8" viewBox="0 0 24 24" fill="white"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 0 0-6 0zm-4-4l2 2a7.074 7.074 0 0 1 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" /></svg>
          <span className="text-[9px] text-white">28%</span>
        </div>
      </div>

      {/* WA Header */}
      <div className="flex items-center gap-2 px-2 py-2" style={{ background: WA_DARK }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M15 18l-6-6 6-6" /></svg>
        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden flex-shrink-0">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#9ca3af"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" /></svg>
        </div>
        <div className="flex-1">
          <p className="text-white text-[11px] font-semibold leading-tight">John Smith</p>
          <p className="text-green-200 text-[9px]">online</p>
        </div>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="white"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" /></svg>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="white"><circle cx="12" cy="5" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="12" cy="19" r="1.5" /></svg>
      </div>

      {/* Chat area — pattern behind messages, messages at z-10 */}
      <div className="flex-1 overflow-hidden relative" style={{ background: WA_BG }}>
        <div
          className="absolute inset-0 bg-repeat"
          style={{ backgroundImage: "url('/products/prohandy-wa-bg.png')", backgroundSize: '200px', opacity: 0.1 }}
        />
        <div className="relative z-10 flex flex-col gap-2 px-2.5 py-2.5 h-full justify-end">
          {STEPS.slice(0, visibleCount).map((step, i) => (
            <div key={i} style={{ animation: 'waMsgPop 0.25s ease both' }}>
              <StepBubble step={step} />
            </div>
          ))}
          {showTyping && (
            <div style={{ animation: 'waMsgPop 0.2s ease both' }}>
              <TypingDots />
            </div>
          )}
        </div>
      </div>

      {/* Input bar */}
      <div className="flex items-center gap-1.5 px-2 py-1.5" style={{ background: '#f0f0f0' }}>
        <div className="flex-1 rounded-full bg-white px-3 py-1.5 text-[10px] text-gray-400">Message</div>
        <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: WA_GREEN }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z" /></svg>
        </div>
      </div>
    </div>
  );
}

export default function WhatsAppPlugin() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (visibleCount >= STEPS.length) {
      const t = setTimeout(() => setVisibleCount(0), RESET_DELAY);
      return () => clearTimeout(t);
    }
    setTyping(true);
    const t = setTimeout(() => {
      setTyping(false);
      setVisibleCount((c) => c + 1);
    }, INTERVAL);
    return () => clearTimeout(t);
  }, [visibleCount]);

  return (
    <section id="whatsapp-plugin" className="py-20 lg:py-[100px] bg-white">
      <style>{`
        @keyframes waMsgPop {
          from { opacity: 0; transform: translateY(6px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes waTyping {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-4px); }
        }
      `}</style>
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1100px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">

          <div className="flex-1 min-w-0 max-w-[520px]">
            <div
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[12px] font-semibold mb-5"
              style={{ borderColor: COLOR, color: COLOR }}
            >
              WhatsApp Plugin
            </div>

            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-[#0F1112] leading-tight mb-4">
              WhatsApp Order Plugin for{' '}
              <span style={{ color: COLOR, textDecoration: 'underline', textDecorationStyle: 'wavy', textUnderlineOffset: '4px' }}>
                Prohandy
              </span>
            </h2>

            <p className="text-[#6b7280] text-[15px] leading-7 mb-8 max-w-[460px]">
              Introducing the Prohandy WhatsApp order plugin — seamless bookings, enhanced engagement through WhatsApp Business API.
            </p>

            <div className="rounded-2xl border border-[#E5E7EC] p-6 max-w-[420px]">
              <p className="font-bold text-[#0F1112] text-[15px] mb-4">Plugin Features:</p>
              <div className="flex flex-col gap-3">
                {FEATURES.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <div
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ background: COLOR }}
                    >
                      <svg width="10" height="10" viewBox="0 0 20 20" fill="none">
                        <path d="M4 10l4.5 4.5 8-8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-[14px] text-[#374151]">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="inline-flex items-center gap-2 mt-6 rounded-full px-4 py-2 text-[12px] font-semibold"
              style={{ background: LIGHT_COLOR, color: COLOR }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14l-4-4 1.41-1.41L10 13.17l6.59-6.59L18 8l-8 8z" fill={COLOR} />
              </svg>
              Available in Everything Bundle &amp; Exclusive License
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center lg:justify-end">
            <WaMockup visibleCount={visibleCount} typing={typing} />
          </div>

        </div>
      </div>
    </section>
  );
}
