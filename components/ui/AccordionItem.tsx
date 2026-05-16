'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
        className="w-full flex items-center justify-between px-7 py-5 text-left gap-4 cursor-pointer"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className={`text-[16px] font-semibold leading-7 ${dark ? 'text-white' : 'text-[#0F1112]'}`}>{question}</span>
        <span
          className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all ${
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

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className={`px-7 pb-6 text-[14px] leading-[22px] max-w-[760px] ${dark ? 'text-[#9ca3af]' : 'text-[#484848]'}`}>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
