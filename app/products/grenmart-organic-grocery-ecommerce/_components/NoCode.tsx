import Image from 'next/image';
import { COLOR, COLOR_DARK, BUILDERS } from './constants';

export default function NoCode() {
  return (
    <section className="py-16 sm:py-20 lg:py-[100px] bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-[1100px] mx-auto">

          <div>
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-widest mb-4" style={{ background: `${COLOR}15`, color: COLOR }}>
              100% No-Code
            </div>
            <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] mb-4 leading-tight">
              Build Every Page by Dragging &amp; Dropping
            </h2>
            <p className="text-[#6b7280] text-[15px] leading-7 mb-8">
              Grenmart ships with four visual builders so you control the whole store without a developer. Compose pages
              from <strong className="text-[#0F1112]">50+ widgets</strong>, design menus and forms, and customize the
              footer — all from the admin panel.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BUILDERS.map((b) => (
                <div key={b.name} className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5"
                    style={{ background: `${COLOR}15`, color: COLOR }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-[15px] font-semibold text-[#0F1112] mb-0.5">{b.name}</h3>
                    <p className="text-[13px] text-[#6b7280] leading-6">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#pricing"
              className="inline-flex items-center gap-2 text-white font-semibold text-[15px] rounded-full px-7 py-3 mt-8 transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: COLOR, boxShadow: `0 6px 18px ${COLOR}35` }}
            >
              Get Grenmart — from $39
            </a>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-[#E5E7EC] shadow-xl">
              <Image
                src="/products/grenmart/feat-related.png"
                alt="Grenmart related product suggestions and page builder layout"
                width={1035}
                height={695}
                className="w-full h-auto"
              />
            </div>
            <div
              className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-2 bg-white rounded-xl px-4 py-3 shadow-lg border border-[#E5E7EC]"
            >
              <span className="text-[22px] font-bold" style={{ color: COLOR_DARK }}>50+</span>
              <span className="text-[12px] text-[#6b7280] leading-4">page builder<br />widgets included</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
