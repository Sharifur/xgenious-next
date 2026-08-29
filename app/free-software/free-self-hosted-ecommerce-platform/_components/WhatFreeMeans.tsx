import { COLOR, LIGHT_COLOR } from './constants';

const ITEMS = [
  { title: 'MIT licensed', desc: 'Use commercially, modify, and redistribute, with no restrictions.' },
  { title: 'No per-order fee', desc: '0% commission on every order, on every gateway.' },
  { title: 'No expiry, no paid tiers', desc: 'Every feature ships in the same free download. Nothing is held back for a future paid plan.' },
  { title: 'Full source included', desc: 'Not a compiled binary or a hosted trial: the complete Laravel + React source.' },
  { title: 'Self-hosted', desc: 'Runs on your own server. Your data never leaves your infrastructure.' },
];

export default function WhatFreeMeans() {
  return (
    <section className="py-16 sm:py-20 bg-[#0F1112]">
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="text-center mb-10 max-w-[640px] mx-auto">
          <h2 className="text-[28px] sm:text-[36px] font-semibold text-white leading-tight">
            What &ldquo;Free&rdquo; Means Here
          </h2>
          <p className="text-[#9ca3af] text-[15px] mt-3 leading-7">
            Not a free tier of a paid product: the whole platform, MIT licensed, self-hosted.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-[1100px] mx-auto">
          {ITEMS.map((item) => (
            <div key={item.title} className="rounded-xl border border-white/10 p-5">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style={{ background: `${COLOR}30` }}>
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="10" fill={COLOR} fillOpacity="0.3" />
                  <path d="M6 10l3 3 5-5" stroke={LIGHT_COLOR} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-white font-semibold text-[13.5px]">{item.title}</p>
              <p className="text-[#9ca3af] text-[12.5px] mt-1 leading-5">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
