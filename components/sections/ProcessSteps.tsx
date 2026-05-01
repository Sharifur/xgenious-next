import { processSteps } from '@/data/saas-page';

export default function ProcessSteps() {
  return (
    <section className="py-24 bg-white">
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — steps */}
          <div>
            <span className="inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-[#F26B4E] mb-4">
              How We Work
            </span>
            <h2 className="text-[44px] leading-[52px] font-semibold text-[#0F1112] tracking-[-0.01em]">
              Clear Process,{' '}
              <span className="italic font-semibold">Consistent Results</span>
            </h2>
            <p className="mt-5 text-[#484848] text-[15px] leading-6 max-w-[460px]">
              No black boxes. You see every step, own every decision, and have full visibility
              into where your project stands at all times.
            </p>

            <ol className="mt-10 space-y-0">
              {processSteps.map((step, i) => (
                <li key={step.number} className="flex gap-5 relative">
                  {i < processSteps.length - 1 && (
                    <div className="absolute left-[18px] top-10 bottom-0 w-px bg-[#E5E7EC]" />
                  )}
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#FFE8E1] flex items-center justify-center relative z-10">
                    <span className="text-[12px] font-semibold text-[#F26B4E]">{step.number}</span>
                  </div>
                  <div className="pb-7">
                    <h3 className="text-[16px] font-semibold text-[#0F1112] mb-1.5 leading-6">
                      {step.title}
                    </h3>
                    <p className="text-[14px] text-[#484848] leading-[22px]">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Right — focus visual */}
          <div className="relative">
            <div className="rounded-3xl bg-[#F5F6F8] aspect-[4/5] overflow-hidden relative">
              {/* Grid pattern */}
              <div
                className="absolute inset-0 opacity-50"
                style={{
                  backgroundImage:
                    'linear-gradient(#E5E7EC 1px, transparent 1px), linear-gradient(90deg, #E5E7EC 1px, transparent 1px)',
                  backgroundSize: '32px 32px',
                }}
              />

              {/* Magnifying glass */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-44 h-44 rounded-full bg-white/70 backdrop-blur-sm border-[6px] border-[#0F1112] shadow-2xl shadow-black/20 flex items-center justify-center">
                    <div className="w-28 h-28 rounded-2xl bg-[#F26B4E] flex items-center justify-center">
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <path
                          d="M14 14h20v20H14z"
                          stroke="white"
                          strokeWidth="3"
                          strokeLinejoin="round"
                          opacity="0.3"
                        />
                        <path
                          d="M14 24h20M24 14v20"
                          stroke="white"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute -bottom-12 -right-8 w-4 h-20 rounded-full bg-[#0F1112] rotate-45 origin-top-left" />
                </div>
              </div>

              {/* Floating stats */}
              <div className="absolute top-6 right-6 bg-white rounded-2xl shadow-xl shadow-black/5 p-4 border border-[#E5E7EC]">
                <p className="text-[10px] text-[#8A8F99] font-medium uppercase tracking-wider">
                  Sprint Completion
                </p>
                <p className="text-[24px] font-semibold text-[#0F1112] mt-0.5">96%</p>
                <div className="mt-2 w-32 h-1 rounded-full bg-[#E5E7EC] overflow-hidden">
                  <div className="h-full w-[96%] rounded-full bg-[#F26B4E]" />
                </div>
              </div>

              <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-xl shadow-black/5 p-4 border border-[#E5E7EC]">
                <p className="text-[10px] text-[#8A8F99] font-medium uppercase tracking-wider">
                  On-Time Delivery
                </p>
                <p className="text-[24px] font-semibold text-[#0F1112] mt-0.5">98%</p>
                <p className="text-[10px] text-emerald-600 font-medium mt-1">Industry avg: 64%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
