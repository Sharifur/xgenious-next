import { COLOR } from './constants';

const MODULES = [
  {
    name: 'Donation',
    desc: 'Let tenants run fundraising campaigns and collect donations directly through their website.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Event Booking',
    desc: 'Sell event tickets online. Full event management with booking calendars and payment flow.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Support Ticketing',
    desc: 'Built-in helpdesk for each tenant site. Customers open tickets; tenants manage from their panel.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Knowledgebase',
    desc: 'Let tenants publish wikis, docs, and help centers. Each site gets its own self-service knowledge base.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Job Board',
    desc: 'Full job listing platform. Tenants post openings; candidates apply — all managed from their panel.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'eCommerce',
    desc: 'Full online store for any tenant — product listings, cart, checkout, and order management.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 10a4 4 0 01-8 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Hotel Booking',
    desc: 'Room listings, availability calendars, and reservation management for any hospitality tenant.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Appointment',
    desc: 'Calendar-based scheduling for service businesses. Clients book; tenants manage their calendar.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <polyline points="12 6 12 12 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Restaurant',
    desc: 'Online menu, food ordering, and delivery management for restaurant and food delivery tenants.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <line x1="12" y1="2" x2="12" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="12" y1="14" x2="12" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M9 2v4c0 2 3 4 3 4s3-2 3-4V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Modules() {
  return (
    <section className="py-16 sm:py-20 lg:py-[100px] bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-12 max-w-[600px] mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-widest mb-4" style={{ background: `${COLOR}15`, color: COLOR }}>
            10+ Modules Available
          </div>
          <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] mb-4 leading-tight">
            Every Business Type, One Platform
          </h2>
          <p className="text-[#6b7280] text-[15px] leading-6">
            Build a vertical SaaS around one module, or offer all 10+ to give tenants maximum flexibility. You decide which modules each subscription plan unlocks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {MODULES.map((mod) => (
            <div
              key={mod.name}
              className="group bg-white rounded-2xl border border-[#E5E7EC] p-6 hover:border-transparent hover:shadow-lg transition-all"
              style={{ ['--hover-shadow' as string]: `0 4px 24px ${COLOR}20` }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors"
                style={{ background: `${COLOR}15`, color: COLOR }}
              >
                {mod.icon}
              </div>
              <h3 className="text-[16px] font-semibold text-[#0F1112] mb-2">{mod.name}</h3>
              <p className="text-[13px] text-[#6b7280] leading-6">{mod.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-[13px] text-[#9ca3af] mt-8">
          Operator controls which modules are included per subscription plan · More modules added with updates
        </p>
      </div>
    </section>
  );
}
