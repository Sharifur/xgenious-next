import { COLOR } from './constants';

const STEPS = [
  {
    step: '01',
    title: 'User Login',
    desc: 'Tenants get secure access with their credentials. No technical setup required — they log in and get started immediately.',
  },
  {
    step: '02',
    title: 'Select Package',
    desc: 'Tenants pick the subscription package that fits their needs. You define the packages, included modules, and pricing.',
  },
  {
    step: '03',
    title: 'Set Domain',
    desc: 'Each tenant enters their own domain name. Custom branded domain or subdomain — fully supported out of the box.',
  },
  {
    step: '04',
    title: 'Website Is Ready',
    desc: 'Within minutes the site is live with seed data. Tenants start publishing and building their business right away.',
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
          <div
            className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed"
            style={{ borderColor: `${COLOR}30` }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {STEPS.map((s) => (
              <div key={s.step} className="text-center">
                <div className="flex justify-center mb-5">
                  <div
                    className="w-[88px] h-[88px] rounded-full flex items-center justify-center text-[28px] font-bold relative bg-white"
                    style={{
                      color: COLOR,
                      border: `2px solid ${COLOR}`,
                      boxShadow: `0 8px 24px ${COLOR}25`,
                    }}
                  >
                    {s.step}
                  </div>
                </div>
                <h3 className="text-[17px] font-semibold text-[#0F1112] mb-2">{s.title}</h3>
                <p className="text-[13px] text-[#6b7280] leading-6 max-w-[240px] mx-auto">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
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
