import { COLOR, LIGHT_COLOR } from './constants';

const DONATION_FEATURES = [
  'One-click, one-off giving, no goals or deadlines required',
  '20+ payment gateways built in',
  'Recurring monthly donations',
  'Gift-based & emergency campaigns',
  'Automatic tax redemption certificates',
];

const FUNDRAISING_FEATURES = [
  'Goal + deadline campaigns, Kickstarter-style',
  'Reward tiers for backers',
  'All-or-nothing or flexible funding models',
  'Built-in campaign moderation & refund queue',
  'Campaign updates and backer reports',
];

function CheckIcon() {
  return (
    <svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="10" fill="#dcfce7" />
      <path d="M6 10l3 3 5-5" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function FundingModels() {
  return (
    <section className="py-20 lg:py-[100px] bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1100px] mx-auto">

        <div className="text-center mb-12 max-w-[640px] mx-auto">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
            Two Ways to Raise Money
          </div>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-4">
            Built-In Donations. Now With Optional Crowdfunding (Fundraising Plugin).
          </h2>
          <p className="text-[15px] text-[#6b7280] leading-7">
            Every Fundorex platform ships with simple, gift-based Donations out of the box. Add the new Fundraising plugin to unlock true Kickstarter-style, reward-based crowdfunding campaigns on the same platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Donations */}
          <div className="rounded-2xl border border-[#E5E7EC] bg-[#F9FAFB] p-7 flex flex-col">
            <span className="w-fit text-[11px] font-bold px-3 py-1 rounded-full bg-[#16a34a] text-white mb-4">
              INCLUDED FREE
            </span>
            <h3 className="text-[20px] font-bold text-[#0F1112] mb-2">Donations</h3>
            <p className="text-[13px] text-[#6b7280] leading-6 mb-6">
              Accept one-off gifts for any cause. No goals or deadlines, just fast, frictionless giving, built into core Fundorex.
            </p>
            <div className="flex flex-col gap-2.5 mt-auto">
              {DONATION_FEATURES.map((f) => (
                <div key={f} className="flex items-start gap-2.5 text-[13px] text-[#374151]">
                  <CheckIcon />
                  {f}
                </div>
              ))}
            </div>
          </div>

          {/* Fundraising plugin */}
          <div className="rounded-2xl p-7 flex flex-col relative overflow-hidden" style={{ background: '#0f1112', border: `2px solid ${COLOR}` }}>
            <span className="w-fit text-[11px] font-bold px-3 py-1 rounded-full mb-4" style={{ background: COLOR, color: '#fff' }}>
              NEW PLUGIN
            </span>
            <h3 className="text-[20px] font-bold text-white mb-2">Fundraising</h3>
            <p className="text-[13px] leading-6 mb-6" style={{ color: '#9ca3af' }}>
              A Kickstarter-style crowdfunding module with campaigns, reward tiers, and multi-gateway payment support, on top of every gateway you already configured.
            </p>
            <div className="flex flex-col gap-2.5 mt-auto">
              {FUNDRAISING_FEATURES.map((f) => (
                <div key={f} className="flex items-start gap-2.5 text-[13px]" style={{ color: '#d1d5db' }}>
                  <CheckIcon />
                  {f}
                </div>
              ))}
            </div>
          </div>

        </div>

        <p className="text-center text-[13px] text-[#6b7280] mt-8 max-w-[560px] mx-auto">
          Run everyday Donations for simple giving, and launch reward-based Fundraising campaigns for bigger goals, both from the same admin panel.
        </p>

      </div>
    </section>
  );
}
