'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { COLOR, LIGHT_COLOR } from './constants';

const SHOTS = [
  { file: 'dashboard.png', title: 'Dashboard', caption: 'Campaigns, sequences, and deliverability at a glance.' },
  { file: 'contacts.png', title: 'Contacts', caption: 'CSV import with arbitrary column mapping and real-time import progress.' },
  { file: 'template-editor.png', title: 'Template Editor', caption: 'Rich-text editor with spintax variants and AI-assisted copywriting.' },
  { file: 'campaign-detail.png', title: 'Campaign Detail', caption: 'Open and click tracking with engagement analytics per campaign.' },
  { file: 'sequence-builder.png', title: 'Sequence Builder', caption: 'Multi-step drip sequences with per-contact enrollment and per-step delays.' },
  { file: 'webhooks.png', title: 'Webhooks', caption: 'Auto-enroll contacts on tag, field, list, or inbound HMAC-signed webhook events.' },
];

function Lightbox({ index, onClose, onNav }: { index: number; onClose: () => void; onNav: (i: number) => void }) {
  const shot = SHOTS[index];

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNav((index + 1) % SHOTS.length);
      if (e.key === 'ArrowLeft') onNav((index - 1 + SHOTS.length) % SHOTS.length);
    }
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [index, onClose, onNav]);

  return createPortal(
    <>
      <div
        className="fixed inset-0 z-[9999]"
        onClick={onClose}
        style={{ background: 'rgba(11,12,15,0.85)', backdropFilter: 'blur(4px)' }}
      />
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-8 pointer-events-none">
        <div className="relative w-full max-w-[1200px] pointer-events-auto">
          <button
            onClick={onClose}
            aria-label="Close"
            className="cursor-pointer absolute -top-11 right-0 sm:top-0 sm:-right-11 w-9 h-9 rounded-full flex items-center justify-center bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          <button
            onClick={() => onNav((index - 1 + SHOTS.length) % SHOTS.length)}
            aria-label="Previous screenshot"
            className="cursor-pointer absolute top-1/2 -left-3 sm:-left-14 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={() => onNav((index + 1) % SHOTS.length)}
            aria-label="Next screenshot"
            className="cursor-pointer absolute top-1/2 -right-3 sm:-right-14 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="rounded-2xl overflow-hidden bg-black">
            <Image
              src={`/free-software/genius-campaign/${shot.file}`}
              alt={`Genius Campaign ${shot.title}: ${shot.caption}`}
              width={2000}
              height={1052}
              className="w-full h-auto"
              priority
            />
          </div>
          <p className="text-center text-white text-[13px] mt-4">
            <span className="font-semibold">{shot.title}</span>
            <span className="text-[#9ca3af]">: {shot.caption}</span>
          </p>
        </div>
      </div>
    </>,
    document.body,
  );
}

export default function Screenshots() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-20 bg-[#f9fafb]">
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="text-center mb-12">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-medium mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            Screenshots
          </span>
          <h2 className="text-[28px] sm:text-[38px] font-semibold text-[#0F1112]">
            See the Console
          </h2>
          <p className="text-[#484848] text-[15px] mt-3 max-w-[560px] mx-auto leading-7">
            Contacts, templates, sequences, and campaigns, running on your own server. Click any screenshot to zoom in.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
          {SHOTS.map((s, i) => (
            <button
              key={s.file}
              onClick={() => setOpenIndex(i)}
              className="cursor-zoom-in text-left rounded-2xl border border-[#E5E7EC] bg-white overflow-hidden group focus:outline-none focus-visible:ring-2"
              style={{ ['--tw-ring-color' as string]: COLOR }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={`/free-software/genius-campaign/${s.file}`}
                  alt={`Genius Campaign ${s.title}: ${s.caption}`}
                  width={2000}
                  height={1052}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity w-9 h-9 rounded-full bg-white/90 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <circle cx="11" cy="11" r="7" stroke="#0F1112" strokeWidth="1.8" />
                      <path d="M11 8v6M8 11h6" stroke="#0F1112" strokeWidth="1.8" strokeLinecap="round" />
                      <path d="M21 21l-4.35-4.35" stroke="#0F1112" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </span>
                </div>
              </div>
              <figcaption className="p-4">
                <p className="text-[13px] font-semibold text-[#0F1112]">{s.title}</p>
                <p className="text-[12px] text-[#6b7280] mt-1 leading-5">{s.caption}</p>
              </figcaption>
            </button>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <Lightbox index={openIndex} onClose={() => setOpenIndex(null)} onNav={setOpenIndex} />
      )}
    </section>
  );
}
