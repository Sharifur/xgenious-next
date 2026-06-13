import { COLOR, LIGHT_COLOR } from './constants';

const NICHES = [
  {
    title: 'Beauty & Wellness',
    desc: 'Salons, spas, massage therapists',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={COLOR} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    bgColor: '#FFF0F3',
  },
  {
    title: 'Cleaning Services',
    desc: 'Home, office & deep cleaning',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={COLOR} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    bgColor: '#EFF6FF',
  },
  {
    title: 'Event Management',
    desc: 'Planners, decorators, venues',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={COLOR} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    bgColor: '#EEF2FF',
  },
  {
    title: 'Car Repair',
    desc: 'Mechanics, detailing, tyre service',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={COLOR} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    bgColor: '#FEF3C7',
  },
  {
    title: 'Home Shifting',
    desc: 'Packing, moving, furniture assembly',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={COLOR} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 3h15v13H1z"/>
        <path d="M16 8h4l3 3v5h-7V8z"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    bgColor: '#F0FDF4',
  },
  {
    title: 'Pest Control',
    desc: 'Fumigation, termite & bugs control',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={COLOR} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V12m0 0C10.5 9 7 8 5 9M12 12C13.5 9 17 8 19 9M5 9L3 7M19 9l2-2M5 9c-1 2-1 4 0 6M19 9c1 2 1 4 0 6M8 22c0-2 1-4 4-4s4 2 4 4M7 6a5 5 0 0 1 10 0"/>
      </svg>
    ),
    bgColor: '#ECFDF5',
  },
];

export default function UseCases() {
  return (
    <section className="py-20 lg:py-[100px]" style={{ background: '#F5F6F8' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1100px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* Left: text */}
          <div className="w-full lg:w-[38%] lg:sticky lg:top-28">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-4"
              style={{ background: LIGHT_COLOR, color: COLOR }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
              Built For Any Niche
            </div>
            <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-4">
              Build Your Favorite On-Demand Service Platform with Qixer
            </h2>
            <p className="text-[15px] text-[#6b7280] leading-7 mb-6">
              Qixer is domain-agnostic — any category of service provider can list, manage, and grow on your platform. Launch with one niche, expand to many.
            </p>
            <p className="text-[13px] text-[#9ca3af] leading-6">
              Have a unique requirement? Our experts are ready to shape Qixer for your specific use case.
            </p>
          </div>

          {/* Right: 2-column grid of niches */}
          <div className="w-full lg:w-[62%] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {NICHES.map((n) => (
              <div
                key={n.title}
                className="rounded-2xl border border-[#E5E7EC] p-5 flex flex-col gap-3 hover:shadow-md transition-shadow"
                style={{ background: n.bgColor }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.06)' }}
                >
                  {n.icon}
                </div>
                <div>
                  <h3 className="text-[14px] font-bold text-[#0F1112] mb-1">{n.title}</h3>
                  <p className="text-[12px] text-[#9ca3af] leading-5">{n.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
