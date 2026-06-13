import { COLOR, LIGHT_COLOR } from './constants';

const HIGHLIGHTS = [
  {
    n: '01',
    title: 'Manage Admin Roles & Permissions',
    desc: 'Decide who can do what. Add admin, editor, moderator, or custom roles and assign granular permissions per module. Control who can approve providers, process payouts, or configure gateways — without exposing the full admin to everyone.',
    align: 'left',
    bgColor: '#EEF2FF',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={COLOR} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    n: '02',
    title: 'Set & Earn Commission from Every Order',
    desc: 'Configure a commission percentage per service category or globally. Every completed booking automatically transfers your platform fee to the admin wallet — hands-free revenue on every transaction with no manual reconciliation.',
    align: 'right',
    bgColor: '#FFF7ED',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={COLOR} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
  {
    n: '03',
    title: 'Real-Time Earnings & Revenue Reports',
    desc: 'Get real-time data on commissions, subscription revenue, and platform growth. Daily, weekly, and monthly breakdowns give you visibility into order volume, top-performing categories, and seller activity — so you can act on data, not guesses.',
    align: 'left',
    bgColor: '#ECFDF5',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={COLOR} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
  },
];

function Arrow({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`hidden lg:flex justify-center items-center ${flip ? 'scale-x-[-1]' : ''}`}>
      <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
        <path
          d="M10 10 C10 10, 60 -10, 110 30 C110 30, 115 34, 110 50"
          stroke={`${COLOR}40`}
          strokeWidth="2"
          strokeDasharray="6 4"
          fill="none"
        />
        <path d="M104 52 L110 50 L108 44" stroke={`${COLOR}40`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    </div>
  );
}

export default function MarketplaceOwner() {
  return (
    <section className="pb-20 lg:pb-[100px] bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1100px] mx-auto">

        <div className="text-center mb-14 max-w-[600px] mx-auto">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
            For Marketplace Owners
          </div>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-4">
            You Run the Platform — Qixer Handles the Rest
          </h2>
          <p className="text-[15px] text-[#6b7280] leading-7">
            Three admin capabilities that determine whether your marketplace is profitable and scalable from day one.
          </p>
        </div>

        <div className="flex flex-col gap-4 lg:gap-0">
          {HIGHLIGHTS.map((item, i) => (
            <div key={item.n}>
              <div className={`flex flex-col lg:flex-row items-center gap-6 ${item.align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                <div
                  className="w-full lg:w-[48%] rounded-2xl border border-[#E5E7EC] p-8 flex flex-col gap-5"
                  style={{ background: item.bgColor }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: '#fff', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: `${COLOR}80` }}>
                      Step {item.n}
                    </div>
                    <h3 className="text-[20px] sm:text-[24px] font-bold text-[#0F1112] mb-3 leading-tight">{item.title}</h3>
                    <p className="text-[14px] sm:text-[15px] text-[#6b7280] leading-7">{item.desc}</p>
                  </div>
                </div>

                <div className="hidden lg:block w-[4%]" />

                <div className="w-full lg:w-[48%] flex items-center justify-center">
                  <div
                    className="w-full rounded-2xl border border-[#E5E7EC] h-[200px] sm:h-[240px] flex items-center justify-center"
                    style={{ background: 'rgba(99,105,241,0.04)' }}
                  >
                    <div className="flex flex-col items-center gap-3 opacity-30">
                      {item.icon}
                      <span className="text-[12px] font-semibold" style={{ color: COLOR }}>Screenshot coming soon</span>
                    </div>
                  </div>
                </div>
              </div>

              {i < HIGHLIGHTS.length - 1 && (
                <Arrow flip={item.align === 'left'} />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
