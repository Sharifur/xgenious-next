'use client';

import { useState, useEffect } from 'react';
import { COLOR, LIGHT_COLOR } from './constants';

const MESSAGES = [
  { text: 'hello..', from: 'provider' },
  { text: 'hii', from: 'client' },
  { text: 'you have placed order for tomorrow', from: 'provider' },
  { text: 'yeas, it was cleaning service', from: 'client' },
  { text: "Unfortunately all of our staff are busy. Will it be okay if we arrive the day after tomorrow?", from: 'provider' },
  { text: "No, I won't be around that day to let you see the work criteria.", from: 'client' },
  { text: 'What about 13th December?', from: 'client' },
  { text: 'Yes, we will be able to go that day.', from: 'provider' },
  { text: 'Thank you very much for being understanding.', from: 'provider' },
  { text: 'No problem', from: 'client' },
  { text: 'See you at 13th..', from: 'client' },
];

const INTERVAL = 1400;
const RESET_DELAY = 2200;

function TypingDots({ color }: { color: string }) {
  return (
    <div className="flex items-center gap-1 px-3 py-2 rounded-2xl rounded-bl-[4px]" style={{ background: '#F3F4F6', width: 48 }}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-1.5 h-1.5 rounded-full"
          style={{
            background: color,
            animation: 'typingBounce 1s ease-in-out infinite',
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
    </div>
  );
}

function Avatar({ color, initials }: { color: string; initials: string }) {
  return (
    <div
      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-[8px] font-bold"
      style={{ background: color }}
    >
      {initials}
    </div>
  );
}

function PhoneMockup({
  perspective,
  visibleCount,
  typing,
}: {
  perspective: 'client' | 'provider';
  visibleCount: number;
  typing: boolean;
}) {
  const isClient = perspective === 'client';
  const sentColor = isClient ? '#2563EB' : COLOR;
  const borderColor = isClient ? '#bfdbfe' : `${COLOR}66`;
  const headerName = isClient ? 'Robert Fox — Provider' : 'Kinley Wangchuk — Client';
  const nextFrom = MESSAGES[visibleCount]?.from;
  const nextIsSent = nextFrom && ((isClient && nextFrom === 'client') || (!isClient && nextFrom === 'provider'));
  const showTyping = typing && visibleCount < MESSAGES.length && !nextIsSent;

  return (
    <div
      className="w-[210px] sm:w-[230px] rounded-[28px] overflow-hidden flex flex-col"
      style={{
        border: `2px solid ${borderColor}`,
        background: '#fff',
        boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
        height: '460px',
      }}
    >
      {/* Status bar */}
      <div className="flex items-center justify-between px-4 pt-3 pb-1">
        <span className="text-[9px] text-[#374151] font-semibold">20:03</span>
        <span className="text-[9px] text-[#374151]">52</span>
      </div>

      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-[#f0f0f0]">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
        <span className="text-[12px] font-semibold text-[#0F1112]">{headerName}</span>
        <span className="ml-auto w-2 h-2 rounded-full bg-green-400" />
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-hidden flex flex-col justify-end px-3 py-3 gap-1.5">
        {MESSAGES.slice(0, visibleCount).map((msg, i) => {
          const isSent = (isClient && msg.from === 'client') || (!isClient && msg.from === 'provider');
          return (
            <div
              key={i}
              className={`flex items-end gap-1 ${isSent ? 'flex-row-reverse' : 'flex-row'}`}
              style={{ animation: 'msgPop 0.25s ease both' }}
            >
              {!isSent && <Avatar initials={isClient ? 'EJ' : 'EJ'} color={isClient ? '#7c3aed' : COLOR} />}
              <div
                className="max-w-[130px] px-2.5 py-1.5 rounded-2xl text-[10px] leading-[14px]"
                style={{
                  background: isSent ? sentColor : '#F3F4F6',
                  color: isSent ? '#fff' : '#374151',
                  borderBottomRightRadius: isSent ? '4px' : undefined,
                  borderBottomLeftRadius: !isSent ? '4px' : undefined,
                }}
              >
                {msg.text}
              </div>
              {isSent && <Avatar initials="ME" color="#9ca3af" />}
            </div>
          );
        })}

        {showTyping && (
          <div className="flex items-end gap-1" style={{ animation: 'msgPop 0.2s ease both' }}>
            <Avatar initials={isClient ? 'EJ' : 'EJ'} color={isClient ? '#7c3aed' : COLOR} />
            <TypingDots color={isClient ? '#2563EB' : COLOR} />
          </div>
        )}
      </div>

      {/* Input */}
      <div className="px-3 pb-3 pt-2 border-t border-[#f0f0f0]">
        <div className="flex items-center gap-2 rounded-full border border-[#E5E7EC] px-3 py-1.5">
          <span className="text-[10px] text-[#9ca3af] flex-1">Message</span>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
        </div>
      </div>
    </div>
  );
}

export default function LiveChat() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (visibleCount >= MESSAGES.length) {
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
    <section className="py-20 lg:py-[100px]" style={{ background: '#F5F6F8' }}>
      <style>{`
        @keyframes msgPop {
          from { opacity: 0; transform: translateY(6px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes typingBounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-4px); }
        }
      `}</style>

      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1100px] mx-auto">

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">

          {/* Left — Client phone */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-[11px] font-semibold px-3 py-1 rounded-full" style={{ background: '#EFF6FF', color: '#1d4ed8' }}>
              Client View
            </span>
            <PhoneMockup perspective="client" visibleCount={visibleCount} typing={typing} />
          </div>

          {/* Center — text */}
          <div className="text-center max-w-[260px] flex-shrink-0">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-4"
              style={{ background: LIGHT_COLOR, color: COLOR }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
              Real-Time Communication
            </div>
            <h2 className="text-[22px] sm:text-[28px] font-bold text-[#0F1112] leading-tight mb-4">
              Live chat between Providers for Clients
            </h2>
            <p className="text-[#6b7280] text-[13px] leading-6">
              Engage in live chat with providers, enabling smooth communication throughout the service process. See provider activity status to know when they are available for discussions.
            </p>
          </div>

          {/* Right — Provider phone */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-[11px] font-semibold px-3 py-1 rounded-full" style={{ background: LIGHT_COLOR, color: COLOR }}>
              Provider View
            </span>
            <PhoneMockup perspective="provider" visibleCount={visibleCount} typing={typing} />
          </div>

        </div>

      </div>
    </section>
  );
}
