'use client';

import { useState, useEffect, useRef } from 'react';
import { COLOR, LIGHT_COLOR } from './constants';

const MESSAGES = [
  { role: 'user', text: 'How do I add the chat widget to my website?' },
  { role: 'bot',  text: 'Copy 2 lines of code from your dashboard and paste before </body>. Works on any site — no dev needed.' },
  { role: 'user', text: 'Does it support WordPress and Shopify?' },
  { role: 'bot',  text: 'Yes! Helpnest embeds on WordPress, Shopify, Webflow, Wix, or any custom HTML site instantly.' },
  { role: 'user', text: 'What AI model powers the chatbot?' },
  { role: 'bot',  text: 'You choose — GPT-4, GPT-3.5, or Claude. Switch models anytime from your admin panel.' },
];

const HOW_IT_WORKS = [
  {
    title: 'Train on your content',
    desc: 'Upload docs, FAQs, or paste a URL — the AI learns your product in minutes, no coding required.',
  },
  {
    title: 'Embed in 2 lines of code',
    desc: 'Copy one script tag from your dashboard and paste it before </body>. Works on any website.',
  },
  {
    title: 'AI resolves queries 24/7',
    desc: 'Understands meaning, not just keywords. Replies in seconds and handles edge cases gracefully.',
  },
  {
    title: 'Hand off to a human agent',
    desc: 'Complex issues escalate to your live support team seamlessly — no conversation gaps.',
  },
];

type Msg = { role: string; text: string };

function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-2 h-2 rounded-full bg-[#9ca3af] animate-bounce"
          style={{ animationDelay: `${i * 0.15}s`, animationDuration: '0.8s' }}
        />
      ))}
    </div>
  );
}

function BotAvatar() {
  return (
    <div
      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
      style={{ background: COLOR }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    </div>
  );
}

function CheckCircle() {
  return (
    <div
      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
      style={{ background: LIGHT_COLOR }}
    >
      <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
        <path d="M5 10l3.5 3.5 6.5-7" stroke={COLOR} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default function ChatDemo() {
  const [visible, setVisible] = useState<Msg[]>([]);
  const [botTyping, setBotTyping] = useState(false);
  const [inputText, setInputText] = useState('');
  const [step, setStep] = useState(0);
  const messagesBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handles: ReturnType<typeof setTimeout>[] = [];
    let charInterval: ReturnType<typeof setInterval> | null = null;

    function cleanup() {
      handles.forEach(clearTimeout);
      if (charInterval) clearInterval(charInterval);
    }

    if (step >= MESSAGES.length) {
      handles.push(setTimeout(() => {
        setVisible([]);
        setBotTyping(false);
        setInputText('');
        setStep(0);
      }, 3000));
      return cleanup;
    }

    const msg = MESSAGES[step];

    if (msg.role === 'user') {
      setInputText('');
      let charIndex = 0;
      const startDelay = step === 0 ? 900 : 500;

      handles.push(setTimeout(() => {
        charInterval = setInterval(() => {
          charIndex++;
          setInputText(msg.text.slice(0, charIndex));
          if (charIndex >= msg.text.length) {
            clearInterval(charInterval!);
            charInterval = null;
            handles.push(setTimeout(() => {
              setInputText('');
              setVisible((prev) => [...prev, msg]);
              setStep((s) => s + 1);
            }, 500));
          }
        }, 36);
      }, startDelay));
    }

    if (msg.role === 'bot') {
      handles.push(setTimeout(() => setBotTyping(true), 200));
      handles.push(setTimeout(() => {
        setBotTyping(false);
        setVisible((prev) => [...prev, msg]);
        setStep((s) => s + 1);
      }, 1900));
    }

    return cleanup;
  }, [step]);

  useEffect(() => {
    const box = messagesBoxRef.current;
    if (box) box.scrollTop = box.scrollHeight;
  }, [visible, botTyping]);

  return (
    <section className="pt-16 lg:pt-[100px]" style={{ background: '#F5F6F8' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1100px] mx-auto">

        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-16">

          {/* Left — how it works */}
          <div className="flex-1 flex flex-col gap-6">
            <div>
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-4"
                style={{ background: LIGHT_COLOR, color: COLOR }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: COLOR }} />
                Live Demo
              </div>
              <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-4">
                Watch Helpnest Resolve Queries Autonomously
              </h2>
              <p className="text-[15px] text-[#6b7280] leading-7">
                Your AI chatbot understands context — not just keywords — and replies instantly, 24/7, without a human agent in the loop.
              </p>
            </div>

            <div className="flex flex-col gap-5 mt-2">
              {HOW_IT_WORKS.map((item) => (
                <div key={item.title} className="flex items-start gap-3.5">
                  <CheckCircle />
                  <div>
                    <p className="text-[14px] font-semibold text-[#0F1112] mb-0.5">{item.title}</p>
                    <p className="text-[13px] text-[#6b7280] leading-[1.6]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — animated chat */}
          <div className="w-full lg:max-w-[440px] flex-shrink-0">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-[#E5E7EC]">

              {/* Chat header */}
              <div className="flex items-center gap-3 px-4 py-3.5" style={{ background: COLOR }}>
                <BotAvatar />
                <div className="flex-1">
                  <p className="text-white font-semibold text-[13px]">Helpnest AI Support</p>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="text-white/70 text-[11px]">Online — powered by GPT-4</span>
                  </div>
                </div>
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-white/20" />
                  <span className="w-3 h-3 rounded-full bg-white/20" />
                  <span className="w-3 h-3 rounded-full bg-white/20" />
                </div>
              </div>

              {/* Messages */}
              <div ref={messagesBoxRef} className="bg-white px-4 py-5 flex flex-col gap-3 h-[380px] overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
                {/* Initial greeting */}
                <div className="flex items-end gap-2">
                  <BotAvatar />
                  <div className="bg-[#F3F4F6] rounded-2xl rounded-bl-sm px-4 py-2.5 max-w-[85%]">
                    <p className="text-[13px] text-[#374151]">Hi there! I&apos;m your AI support assistant. How can I help you today?</p>
                  </div>
                </div>

                {visible.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex items-end gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                    style={{ animation: 'fadeSlideUp 0.3s ease forwards' }}
                  >
                    {msg.role === 'bot' && <BotAvatar />}
                    <div
                      className={`rounded-2xl px-4 py-2.5 max-w-[85%] text-[13px] leading-[1.6] ${
                        msg.role === 'user'
                          ? 'rounded-br-sm text-white'
                          : 'rounded-bl-sm bg-[#F3F4F6] text-[#374151]'
                      }`}
                      style={msg.role === 'user' ? { background: COLOR } : {}}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}

                {botTyping && (
                  <div className="flex items-end gap-2" style={{ animation: 'fadeSlideUp 0.2s ease forwards' }}>
                    <BotAvatar />
                    <div className="bg-[#F3F4F6] rounded-2xl rounded-bl-sm">
                      <TypingDots />
                    </div>
                  </div>
                )}
              </div>

              {/* Input bar with typing animation */}
              <div className="bg-white border-t border-[#E5E7EC] px-4 py-3 flex items-center gap-3">
                <div className="flex-1 bg-[#F3F4F6] rounded-full px-4 py-2 text-[12px] min-h-[34px] flex items-center">
                  {inputText ? (
                    <span className="text-[#374151]">
                      {inputText}
                      <span
                        className="inline-block w-0.5 h-3.5 ml-0.5 align-middle rounded-sm"
                        style={{ background: COLOR, animation: 'blink 0.8s step-end infinite' }}
                      />
                    </span>
                  ) : (
                    <span className="text-[#9ca3af]">Ask anything…</span>
                  )}
                </div>
                <button
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-opacity"
                  style={{ background: COLOR, opacity: inputText ? 1 : 0.5 }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </div>
            </div>

            <p className="text-center text-[12px] text-[#9ca3af] mt-4">
              Simulated demo — real Helpnest AI. Try the live version at{' '}
              <a href="https://helpnest.xgenious.com/" target="_blank" rel="noopener noreferrer" style={{ color: COLOR }} className="underline underline-offset-2">
                helpnest.xgenious.com
              </a>
            </p>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
