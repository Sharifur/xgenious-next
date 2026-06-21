import { COLOR } from './constants';

type Step = { step: string; title: string; desc: string; icon: React.ReactNode };

const STEPS: Step[] = [
  {
    step: '01',
    title: 'User Login',
    desc: 'Tenants get secure access with their credentials. No technical setup required — they log in and get started immediately.',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="10 17 15 12 10 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="15" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Select Package',
    desc: 'Tenants pick the subscription package that fits their needs. You define the packages, included modules, and pricing.',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="12" y1="22.08" x2="12" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Set Domain',
    desc: 'Each tenant enters their own domain name. Custom branded domain or subdomain — fully supported out of the box.',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Website Is Ready',
    desc: 'Within minutes the site is live with seed data. Tenants start publishing and building their business right away.',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function TenantFlow() {
  return (
    <section className="py-16 sm:py-20 lg:py-[100px] bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-14 max-w-[640px] mx-auto">
          <div
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-widest mb-4"
            style={{ background: `${COLOR}15`, color: COLOR }}
          >
            How It Works
          </div>
          <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] mb-4 leading-tight">
            Tenants Go From Signup to Live Site in Minutes
          </h2>
          <p className="text-[#6b7280] text-[15px] leading-6">
            A four-step onboarding flow that scales without operator effort. You set up the platform once; every new tenant self-serves.
          </p>
        </div>

        <div className="relative max-w-[1080px] mx-auto">
          {/* connector line behind the icons (desktop) */}
          <div
            className="hidden lg:block absolute top-[52px] left-[12%] right-[12%] h-[2px] border-t-2 border-dashed"
            style={{ borderColor: `${COLOR}30` }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 relative">
            {STEPS.map((s) => (
              <div key={s.step} className="text-center group">
                <div className="flex justify-center mb-5">
                  <div className="relative">
                    <div
                      className="w-[104px] h-[104px] rounded-2xl flex items-center justify-center bg-white transition-all group-hover:-translate-y-1"
                      style={{
                        color: COLOR,
                        border: `2px solid ${COLOR}`,
                        boxShadow: `0 10px 28px ${COLOR}22`,
                      }}
                    >
                      {/* soft inner tint */}
                      <span
                        className="absolute inset-1.5 rounded-xl"
                        style={{ background: `${COLOR}0d` }}
                        aria-hidden
                      />
                      <span className="relative">{s.icon}</span>
                    </div>
                    {/* number badge */}
                    <span
                      className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-bold text-white"
                      style={{ background: COLOR, boxShadow: `0 4px 10px ${COLOR}55` }}
                    >
                      {s.step}
                    </span>
                  </div>
                </div>
                <h3 className="text-[17px] font-semibold text-[#0F1112] mb-2">{s.title}</h3>
                <p className="text-[13px] text-[#6b7280] leading-6 max-w-[240px] mx-auto">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-14">
          <p className="text-[14px] text-[#484848] mb-4">
            <strong className="text-[#0F1112]">Result:</strong> A self-serve SaaS where new tenants generate revenue without your involvement.
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 text-white font-semibold text-[15px] rounded-full px-7 py-3 transition-all hover:opacity-90 hover:-translate-y-0.5"
            style={{ background: COLOR, boxShadow: `0 6px 18px ${COLOR}35` }}
          >
            Get MultiSaas — from $59
          </a>
        </div>

      </div>
    </section>
  );
}
