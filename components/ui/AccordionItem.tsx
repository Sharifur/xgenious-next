'use client';

import { useState } from 'react';

interface AccordionItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
  dark?: boolean;
}

export default function AccordionItem({ question, answer, defaultOpen = false, dark = false }: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  const wrapperClass = dark
    ? open ? 'bg-[#111111] border border-[rgba(255,255,255,0.1)]' : 'bg-[#0d1017]'
    : open ? 'bg-white border border-[#E5E7EC] shadow-[0_4px_18px_rgba(15,17,18,0.05)]' : 'bg-[#F5F6F8]';

  return (
    <div className={`rounded-2xl transition-colors ${wrapperClass}`}>
      <button
        className="w-full flex items-center justify-between px-4 py-4 sm:px-7 sm:py-5 text-left gap-4 cursor-pointer"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className={`text-[14px] leading-[22px] sm:text-[16px] sm:leading-7 font-semibold ${dark ? 'text-white' : 'text-[#0F1112]'}`}>{question}</span>
        <span
          className={`flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all ${
            open ? 'bg-[#ec7161] text-white' : dark ? 'text-white' : 'text-[#0F1112]'
          }`}
        >
          {open ? (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 9l4-4 4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </span>
      </button>

      {/* CSS grid-rows transition (0fr → 1fr) animates height without JS; the answer stays in the DOM. */}
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-[250ms] ease-in-out ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
        aria-hidden={!open}
      >
        <div className="overflow-hidden">
          <p className={`px-4 sm:px-7 pb-5 text-[14px] leading-[22px] max-w-[760px] ${dark ? 'text-[#9ca3af]' : 'text-[#484848]'}`}>{answer}</p>
        </div>
      </div>
    </div>
  );
}
