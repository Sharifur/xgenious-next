import Link from 'next/link';

export interface InstallationItem {
  title: string;
  description: string;
  badge: string;
  badgeVariant: 'dark' | 'green';
}

export interface InstallationPackageProps {
  badgeText?: string;
  heading?: string;
  subheading?: string;
  packageTitle: string;
  packageDescription: string;
  price: number;
  originalPrice: number;
  savingsAmount?: number;
  claimUrl: string;
  claimLabel?: string;
  trustBadges?: string[];
  items: InstallationItem[];
  note?: string;
}

const ACCENT = '#1a3d3a';

export default function InstallationPackage({
  badgeText = 'LIMITED TIME OFFER',
  heading = 'Launch Your Platform The Right Way',
  subheading = 'Get everything you need to start your digital presence with our premium professional bundle.',
  packageTitle,
  packageDescription,
  price,
  originalPrice,
  savingsAmount,
  claimUrl,
  claimLabel = 'Claim this Offer',
  trustBadges = ['No Setup fees', 'No Hidden Costs', 'Instant Support'],
  items,
  note,
}: InstallationPackageProps) {
  const savings = savingsAmount ?? originalPrice - price;

  return (
    <section className="py-16 sm:py-20 lg:py-[100px] bg-[#f5f6f0]">
      <div className="container-page px-4 sm:px-6 lg:px-0">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 gap-4">
          <span className="inline-flex items-center gap-1.5 bg-[#FA8C00] text-white text-[12px] font-bold uppercase tracking-widest rounded-full px-4 py-1.5">
            <img src="/icons/xilancer/badge-icon.svg" alt="" width={12} height={12} />
            {badgeText}
          </span>
          <h2 className="text-[32px] sm:text-[44px] lg:text-[52px] font-bold text-[#0F1112] leading-tight max-w-[640px]">
            {heading}
          </h2>
          <p className="text-[#484848] text-[15px] sm:text-[17px] leading-7 max-w-[480px]">{subheading}</p>
        </div>

        {/* Two-column card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-[960px] mx-auto">

          {/* Left — offer card */}
          <div className="bg-white rounded-2xl border border-[#E5E7EC] p-7 sm:p-8 flex flex-col gap-6">
            <div>
              <h3 className="text-[22px] sm:text-[26px] font-bold leading-tight" style={{ color: ACCENT }}>
                {packageTitle}
              </h3>
              <p className="text-[14px] text-[#484848] leading-6 mt-3">{packageDescription}</p>
            </div>

            <div className="rounded-xl border border-[#E5E7EC] p-6 flex flex-col gap-3">
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="text-[48px] sm:text-[56px] font-bold text-[#0F1112] leading-none">${price}</span>
                <span className="text-[15px] text-[#9ca3af] line-through">${originalPrice.toLocaleString()} Total Value</span>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-[#dcfce7] text-[#16a34a] text-[13px] font-semibold rounded-full px-3 py-1 self-start">
                <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Save ${savings} Today
              </div>
            </div>

            <Link
              href={claimUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-white font-semibold text-[15px] rounded-xl py-4 transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: ACCENT }}
            >
              {claimLabel}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            {trustBadges.length > 0 && (
              <div className="flex items-center gap-4 flex-wrap justify-center pt-1">
                {trustBadges.map((badge) => (
                  <div key={badge} className="flex items-center gap-1.5 text-[13px] text-[#484848]">
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="10" fill={ACCENT} fillOpacity="0.1" />
                      <path d="M6 10l3 3 5-5" stroke={ACCENT} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {badge}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right — what's included */}
          <div className="rounded-2xl border border-[#fde0d8] p-7 sm:p-8 flex flex-col gap-5" style={{ background: '#fef6f4' }}>
            <h3 className="text-[18px] font-bold text-[#0F1112]">What&apos;s Included</h3>

            <div className="flex flex-col gap-3">
              {items.map((item) => (
                <div key={item.title} className="bg-white rounded-xl border border-[#f3e8e5] p-4 flex items-start gap-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: `${ACCENT}15` }}
                  >
                    <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10l5 5 7-7" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-[14px] font-semibold text-[#0F1112] leading-tight">{item.title}</p>
                      <span
                        className="text-[11px] font-semibold rounded-full px-2.5 py-0.5 flex-shrink-0"
                        style={
                          item.badgeVariant === 'dark'
                            ? { background: '#1f2937', color: '#fff' }
                            : { background: '#dcfce7', color: '#16a34a' }
                        }
                      >
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-[12px] text-[#6b7280] mt-0.5">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {note && (
              <div className="rounded-xl border border-[#fde0d8] p-4" style={{ background: '#fdf0ee' }}>
                <p className="text-[12px] font-bold uppercase tracking-wider mb-1" style={{ color: ACCENT }}>NOTE:</p>
                <p className="text-[13px] text-[#484848] leading-5">{note}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
