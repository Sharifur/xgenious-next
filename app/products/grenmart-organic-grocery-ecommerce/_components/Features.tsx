import { COLOR, FEATURES } from './constants';

function Icon({ name }: { name: string }) {
  const common = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none' } as const;
  switch (name) {
    case 'builder':
      return (
        <svg {...common}><rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" /><rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" /><rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" /><rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" /></svg>
      );
    case 'inventory':
      return (
        <svg {...common}><path d="M21 8v13H3V8M1 3h22v5H1zM10 12h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
      );
    case 'variants':
      return (
        <svg {...common}><path d="M12 2l3 6 6 .9-4.5 4.3 1 6.3L12 16.5 6.5 19.5l1-6.3L3 8.9 9 8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
      );
    case 'shipping':
      return (
        <svg {...common}><rect x="1" y="3" width="15" height="13" stroke="currentColor" strokeWidth="2" /><path d="M16 8h4l3 3v5h-7z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><circle cx="5.5" cy="18.5" r="2" stroke="currentColor" strokeWidth="2" /><circle cx="18.5" cy="18.5" r="2" stroke="currentColor" strokeWidth="2" /></svg>
      );
    case 'coupon':
      return (
        <svg {...common}><path d="M3 8a2 2 0 012-2h14a2 2 0 012 2v2a2 2 0 000 4v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2a2 2 0 000-4z" stroke="currentColor" strokeWidth="2" /><path d="M14 7v10" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2" /></svg>
      );
    case 'campaign':
      return (
        <svg {...common}><path d="M3 11l18-5v12L3 13v-2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M11.6 16.8a3 3 0 01-5.8-1.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
      );
    case 'search':
      return (
        <svg {...common}><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" /><path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
      );
    case 'related':
      return (
        <svg {...common}><circle cx="6" cy="6" r="3" stroke="currentColor" strokeWidth="2" /><circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="2" /><path d="M9 6h6a3 3 0 013 3v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
      );
    case 'cart':
      return (
        <svg {...common}><circle cx="9" cy="21" r="1.5" stroke="currentColor" strokeWidth="2" /><circle cx="18" cy="21" r="1.5" stroke="currentColor" strokeWidth="2" /><path d="M2 3h3l2.6 13.4a1 1 0 001 .8h9.8a1 1 0 001-.8L22 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
      );
    case 'quickview':
      return (
        <svg {...common}><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" /></svg>
      );
    case 'tax':
      return (
        <svg {...common}><rect x="4" y="2" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="2" /><path d="M9 8l6 8M9.5 8.5h.01M14.5 15.5h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
      );
    case 'login':
      return (
        <svg {...common}><path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><polyline points="10 17 15 12 10 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><line x1="15" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
      );
    default:
      return null;
  }
}

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-20 lg:py-[100px] bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-12 max-w-[640px] mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-widest mb-4" style={{ background: `${COLOR}15`, color: COLOR }}>
            25+ Store Features
          </div>
          <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] mb-4 leading-tight">
            Everything an Online Store Needs — Built In
          </h2>
          <p className="text-[#6b7280] text-[15px] leading-6">
            Grenmart is a complete eCommerce engine. From advanced inventory to coupons, campaigns, and search, the
            features that grow revenue are included — no extra plugins to buy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f) => (
            <div
              key={f.name}
              className="group bg-white rounded-2xl border border-[#E5E7EC] p-6 hover:border-transparent hover:shadow-lg transition-all"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${COLOR}15`, color: COLOR }}
              >
                <Icon name={f.icon} />
              </div>
              <h3 className="text-[16px] font-semibold text-[#0F1112] mb-2">{f.name}</h3>
              <p className="text-[13px] text-[#6b7280] leading-6">{f.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-[13px] text-[#9ca3af] mt-8">
          Plus user profiles with reorder, newsletter, color settings, email notifications & more — all included.
        </p>
      </div>
    </section>
  );
}
