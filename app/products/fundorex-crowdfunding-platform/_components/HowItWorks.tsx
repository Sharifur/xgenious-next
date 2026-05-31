import { COLOR, LIGHT_COLOR } from './constants';

const STEPS = [
  {
    n: '01',
    title: 'Purchase & Download',
    desc: 'Purchase Fundorex with a one-time payment. Download the script ZIP, SQL database, and documentation instantly. The Flutter mobile app source is included in Combo and Extended packs.',
  },
  {
    n: '02',
    title: 'Install on Your Server',
    desc: 'Upload to any Linux VPS or shared hosting running PHP 8+ and MySQL. Run the guided web installer, import the database, and configure your domain. Full setup takes under 30 minutes.',
  },
  {
    n: '03',
    title: 'Configure & Go Live',
    desc: 'Set platform fees, enable payment gateways, configure campaign categories, and customize colors from the admin panel — no coding required. Publish and start accepting donations.',
  },
];

export default function HowItWorks() {
  return (
    <section className="pb-20 pt-8 lg:pb-[100px] lg:pt-10 bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1100px] mx-auto">

        <div className="text-center mb-14 max-w-[600px] mx-auto">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
            Quick Setup
          </div>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-4">
            Launch Your Crowdfunding Platform in 3 Steps
          </h2>
          <p className="text-[15px] text-[#6b7280] leading-7">
            No devops expertise required. Fundorex installs on any standard PHP hosting in under 30 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {STEPS.map((step, i) => (
            <div key={step.n} className="relative flex flex-col">
              {/* connector line */}
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px border-t-2 border-dashed border-[#E5E7EC]" />
              )}
              <div className="flex flex-col items-center text-center gap-4">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-[22px] font-bold flex-shrink-0 z-10"
                  style={{ background: LIGHT_COLOR, color: COLOR }}
                >
                  {step.n}
                </div>
                <div>
                  <h3 className="text-[16px] font-bold text-[#0F1112] mb-2">{step.title}</h3>
                  <p className="text-[14px] text-[#6b7280] leading-6">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 text-white font-semibold text-[15px] rounded-full px-8 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-lg"
            style={{ background: COLOR, boxShadow: `0 6px 20px ${COLOR}40` }}
          >
            See Pricing — One-Time Purchase
          </a>
        </div>

      </div>
    </section>
  );
}
