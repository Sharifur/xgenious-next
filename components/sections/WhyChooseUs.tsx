import StatCounter from '@/components/ui/StatCounter';
import { stats, whyChooseCards } from '@/data/saas-page';

const Icons: Record<string, React.ReactElement> = {
  code: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M9 8l-5 4 5 4M15 8l5 4-5 4"
        stroke="#E5E7EC"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  package: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"
        stroke="#E5E7EC"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" stroke="#E5E7EC" strokeWidth="1.6" />
    </svg>
  ),
  shield: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2l8 4v6c0 4.5-3.4 8.6-8 10-4.6-1.4-8-5.5-8-10V6l8-4z"
        stroke="#E5E7EC"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

const QuoteMark = () => (
  <svg width="32" height="24" viewBox="0 0 32 24" fill="none" className="opacity-30">
    <path
      d="M0 24V14C0 7 4 2 11 0L13 4C8 6 6 9 6 14H12V24H0zm19 0V14c0-7 4-12 11-14l2 4c-5 2-7 5-7 10h6v10H19z"
      fill="#F26B4E"
    />
  </svg>
);

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#0C0C0E] relative overflow-hidden">
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(60% 50% at 90% 30%, rgba(242,107,78,0.08) 0%, transparent 60%)',
        }}
      />

      <div className="container-page relative">
        <div className="text-center mb-14 max-w-[640px] mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFE8E1]/15 border border-[#F26B4E]/30 text-[#F26B4E] text-[12px] font-medium mb-5">
            Why Mid-Market Team Pick Us
          </span>
          <h2 className="text-[44px] leading-[52px] font-semibold text-white tracking-[-0.01em]">
            Built for Your{' '}
            <span className="italic font-semibold">Digital Future</span>
          </h2>
          <p className="mt-4 text-[#A6A6A6] text-[15px] leading-6 max-w-[460px] mx-auto">
            We don&apos;t just build software for others — we create and operate our own digital
            products.
          </p>
        </div>

        {/* 3 differentiator cards — middle one (i=1) is the highlighted/active state */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
          {whyChooseCards.map((card, i) => {
            const isActive = i === 1;
            return (
              <article
                key={card.title}
                className="relative rounded-2xl p-7 flex flex-col transition-all"
                style={
                  isActive
                    ? {
                        // 1px linear-gradient border (BABABA → 170E0D) on a #2F2F2F card body.
                        // Achieved via two stacked backgrounds with different background-clips
                        // so rounded corners are preserved.
                        background:
                          'linear-gradient(#2F2F2F, #2F2F2F) padding-box, linear-gradient(180deg, #BABABA 0%, #170E0D 100%) border-box',
                        border: '1px solid transparent',
                      }
                    : {
                        background: '#131418',
                        border: '1px solid #1F2127',
                      }
                }
              >
                <div className="w-10 h-10 rounded-lg bg-[#1F2127] flex items-center justify-center mb-6">
                  {Icons[card.icon]}
                </div>
                <h3 className="text-[18px] font-semibold text-white leading-[26px] mb-3">
                  {card.title}
                </h3>
                <p className="text-[13px] text-[#A6A6A6] leading-[20px] mb-6 flex-1">
                  {card.body}
                </p>

                {/* Nested quote card */}
                <div
                  className="rounded-xl p-4 relative"
                  style={
                    isActive
                      ? {
                          background: '#FFFFFF',
                          // Only a left coral accent — no other borders
                          borderLeft: '2px solid #F26B4E',
                        }
                      : {
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid #1F2127',
                        }
                  }
                >
                  <p
                    className={`text-[12px] italic leading-[18px] pr-10 mb-2 ${
                      isActive ? 'text-[#2F2F2F]' : 'text-[#E5E7EC]'
                    }`}
                  >
                    &ldquo;{card.quote}&rdquo;
                  </p>
                  <div className="absolute top-3 right-3">
                    <QuoteMark />
                  </div>
                  <p className="text-[11px] font-medium text-[#F26B4E] mt-3">
                    — {card.quoteAttribution}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* 4 stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-[#131418] border border-[#1F2127] p-7 flex flex-col"
            >
              <span className="text-[12px] font-medium text-[#8A8F99] mb-[120px]">
                {stat.number}/
              </span>
              <div className="flex items-baseline gap-1">
                <StatCounter value={stat.value} suffix="" label="" />
                <span className="text-[28px] font-medium text-[#A6A6A6] leading-none">
                  {stat.suffix}
                </span>
              </div>
              <span className="mt-2 text-[13px] text-[#A6A6A6] font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
