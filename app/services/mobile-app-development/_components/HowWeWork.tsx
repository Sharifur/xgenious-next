'use client';

import { useState } from 'react';

const steps = [
  { num: '01', title: 'Product Discovery', desc: '' },
  {
    num: '02',
    title: 'UX/UI Design',
    desc: "Direct user input is invaluable. We conduct one-on-one interviews to gain qualitative insights into users' experiences, expectations, and challenges. These interviews provide rich context and personal anecdotes that inform our design decisions.",
  },
  { num: '03', title: 'Flutter App Development', desc: '' },
  { num: '04', title: 'Coding & Testing', desc: '' },
  { num: '05', title: 'Quality Assurance', desc: '' },
  { num: '06', title: 'Support & Maintenance', desc: '' },
];

export default function HowWeWork() {
  const [open, setOpen] = useState(1);

  return (
    <section className="py-[120px] bg-white">
      <div className="container-page flex flex-col gap-[64px]">
        <div className="flex flex-col gap-4">
          <h2
            className="text-[#26302b] font-semibold capitalize"
            style={{ fontSize: 72, lineHeight: '80px' }}
          >
            Our Approach to<br />apps Development
          </h2>
        </div>

        <div className="flex items-start gap-[120px]">
          {/* Left image */}
          <div className="flex-shrink-0 rounded-[8px] overflow-hidden" style={{ width: 630, height: 619 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/mobile-app-dev/experience-photo.png"
              alt="Our development approach"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right accordion */}
          <div className="flex flex-col gap-8 flex-1">
            {steps.map((step, i) => {
              const isOpen = open === i;
              const hasDesc = !!step.desc;
              return (
                <div
                  key={step.num}
                  className="flex flex-col border-b"
                  style={{ borderColor: '#e7e7e7', paddingBottom: isOpen && hasDesc ? 24 : 0 }}
                >
                  <button
                    className="flex items-center justify-between w-full py-4 text-left gap-4"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <div className="flex items-center gap-6">
                      <span
                        className="text-[#484848] font-medium flex-shrink-0"
                        style={{ fontSize: 16, lineHeight: 'normal', minWidth: 28 }}
                      >
                        {step.num}
                      </span>
                      <span
                        className="text-[#26302b] font-semibold whitespace-nowrap"
                        style={{ fontSize: 24, lineHeight: '32px' }}
                      >
                        {step.title}
                      </span>
                    </div>
                    <div
                      className="flex-shrink-0 w-[30px] h-[30px] flex items-center justify-center"
                      style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
                    >
                      <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                        <path d="M1 1L8 8L15 1" stroke="#26302b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </button>
                  {isOpen && hasDesc && (
                    <p
                      className="text-[#484848] font-normal"
                      style={{ fontSize: 16, lineHeight: '24px', paddingLeft: 52 }}
                    >
                      {step.desc}
                    </p>
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
