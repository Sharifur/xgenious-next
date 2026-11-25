import { COLOR, LIGHT_COLOR, REGULAR_PRICE } from './constants';
import ScrollToPricing from './ScrollToPricing';

const ROWS = [
  { feature: 'What it is', prohandy: 'Software you buy and run', taskrabbit: 'Marketplace (not for sale)', urbancompany: 'Marketplace (not for sale)', handy: 'Marketplace (not for sale)' },
  { feature: 'How it earns', prohandy: `One-time from $${REGULAR_PRICE}; you set the commission`, taskrabbit: 'Client service fee + Trust & Support fee; Taskers pay $25 once', urbancompany: "Customer convenience fee + 28.3% of pros' gross earnings in commissions and fees (9M FY26)", handy: 'Keeps a booking fee: customer price minus the pro’s pay' },
  { feature: 'Source code', prohandy: 'Full source code', taskrabbit: 'Not available', urbancompany: 'Not available', handy: 'Not available' },
  { feature: 'Self-hosted', prohandy: 'Yes — your server', taskrabbit: 'No', urbancompany: 'No', handy: 'No' },
  { feature: 'White-label rights', prohandy: 'Exclusive license', taskrabbit: 'No', urbancompany: 'No', handy: 'No' },
  { feature: 'Customer app', prohandy: 'Flutter (Everything Bundle)', taskrabbit: 'iOS + Android', urbancompany: 'iOS + Android', handy: 'iOS' },
  { feature: 'Provider app', prohandy: 'Flutter (Everything Bundle)', taskrabbit: 'Tasker app, iOS or Android', urbancompany: '—', handy: 'Pro app, iOS + Android' },
  { feature: 'How jobs are matched', prohandy: 'Instant booking + job posts with offers', taskrabbit: 'Client picks a Tasker by hourly rate', urbancompany: 'Fixed-price services, platform assigns a pro', handy: 'Set price; pros claim posted jobs' },
  { feature: 'Provider checks', prohandy: 'Identity verification + admin approval', taskrabbit: 'ID + background check (US)', urbancompany: 'ID documents and past work verified', handy: 'ID check + background check' },
  { feature: 'Payment gateways', prohandy: '19 gateways', taskrabbit: '—', urbancompany: '—', handy: '—' },
];

const SOURCES = [
  { label: 'TaskRabbit service fee', href: 'https://support.taskrabbit.com/hc/en-ca/articles/46260411872155-What-s-the-Taskrabbit-Service-Fee' },
  { label: 'TaskRabbit Trust & Support fee', href: 'https://support.taskrabbit.com/hc/en-us/articles/46260504648731-What-s-the-Taskrabbit-Trust-Support-Fee' },
  { label: 'TaskRabbit $25 registration fee', href: 'https://support.taskrabbit.com/hc/en-us/articles/46260480151579-What-s-the-Registration-Fee' },
  { label: 'TaskRabbit Tasker requirements', href: 'https://support.taskrabbit.com/hc/en-us/articles/46260520394651-What-s-Required-to-Become-a-Tasker' },
  { label: 'TaskRabbit customer app on the App Store', href: 'https://apps.apple.com/us/app/taskrabbit-handyman-more/id374165361' },
  { label: 'TaskRabbit customer app on Google Play', href: 'https://play.google.com/store/apps/details?id=com.taskrabbit.droid.consumer' },
  { label: 'Tasker app on the App Store', href: 'https://apps.apple.com/us/app/tasker-by-taskrabbit/id1455415833' },
  { label: 'Tasker app on Google Play', href: 'https://play.google.com/store/apps/details?id=com.taskrabbit.droid.rabbit' },
  { label: 'Inc42: Urban Company commissions and fees, 9M FY26', href: 'https://inc42.com/features/inside-urban-companys-marketplace-model-what-it-keeps-from-every-booking/' },
  { label: 'Urban Company on the App Store', href: 'https://apps.apple.com/app/id1032480595' },
  { label: 'Urban Company on Google Play', href: 'https://play.google.com/store/apps/details?id=com.urbanclap.urbanclap' },
  { label: 'Urban Company: how professionals are verified', href: 'https://www.urbancompany.com/blog/building-indias-largest-marketplace-for-services-what-it-takes' },
  { label: 'Handy US Service Professional Agreement', href: 'https://vault.pactsafe.io/s/f2c54d1f-373d-4a51-b961-d1bea6d73ec5/handy-legal-center' },
  { label: 'FTC complaint: Handy pros claim jobs', href: 'https://search.ftc.gov/system/files/ftc_gov/pdf/1-Handy-Complaint.pdf' },
  { label: 'Handy trust and safety', href: 'https://www.handy.com/trust-and-safety' },
  { label: 'Handy customer app on the App Store', href: 'https://apps.apple.com/us/app/handy-com/id604419063' },
  { label: 'Handy pro app on the App Store (listed as Angi Services for Pros)', href: 'https://apps.apple.com/us/app/angi-services-for-pros/id1533132556' },
  { label: 'Handy pro app on Google Play (listed as Angi Services for Pros)', href: 'https://play.google.com/store/apps/details?id=com.handy.portal' },
];

function Cell({ value, highlight }: { value: string; highlight?: boolean }) {
  const isDash = value === '—';
  const color = isDash ? '#d1d5db' : highlight ? '#059669' : '#6b7280';

  return (
    <td
      className={`px-4 py-3.5 text-[13px] text-center ${highlight && !isDash ? 'font-semibold' : ''}`}
      style={{ color, background: highlight && !isDash ? '#f0fdf4' : 'transparent' }}
    >
      {highlight && !isDash ? (
        <span className="inline-flex items-center justify-center gap-1.5">
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden>
            <circle cx="10" cy="10" r="10" fill="#dcfce7" />
            <path d="M6 10l3 3 5-5" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {value}
        </span>
      ) : value}
    </td>
  );
}

export default function Comparison() {
  return (
    <section className="pb-20 lg:pb-[100px]" style={{ background: '#F5F6F8' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1100px] mx-auto">

        <div className="text-center mb-12 max-w-[640px] mx-auto">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
            Prohandy vs Alternatives
          </div>
          <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] leading-tight mb-4">
            Why Run Your Own Marketplace Instead of Joining One?
          </h2>
          <p className="text-[15px] text-[#6b7280] leading-7">
            TaskRabbit, Urban Company and Handy are marketplaces you can join as a provider, not software you can buy. They keep a fee on every job. With Prohandy you own the platform, set your own commission and keep the customer relationship, from a one-time ${REGULAR_PRICE}.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-[#E5E7EC] bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr style={{ background: '#F8F9FB' }}>
                  <th className="px-4 py-4 text-left text-[13px] font-semibold text-[#6b7280] w-[22%]">Feature</th>
                  <th className="px-4 py-4 text-center text-[13px] font-bold w-[19.5%]" style={{ color: COLOR }}>
                    <div className="flex flex-col items-center gap-1">
                      <span>Prohandy</span>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full" style={{ background: LIGHT_COLOR }}>from ${REGULAR_PRICE}</span>
                    </div>
                  </th>
                  <th className="px-4 py-4 text-center text-[12px] font-semibold text-[#6b7280] w-[19.5%]">TaskRabbit</th>
                  <th className="px-4 py-4 text-center text-[12px] font-semibold text-[#6b7280] w-[19.5%]">Urban Company</th>
                  <th className="px-4 py-4 text-center text-[12px] font-semibold text-[#6b7280] w-[19.5%]">Handy</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, i) => (
                  <tr key={row.feature} style={{ background: i % 2 === 0 ? '#fff' : '#FAFAFA', borderTop: '1px solid #F3F4F6' }}>
                    <td className="px-4 py-3.5 text-[13px] font-medium text-[#374151]">{row.feature}</td>
                    <Cell value={row.prohandy} highlight />
                    <Cell value={row.taskrabbit} />
                    <Cell value={row.urbancompany} />
                    <Cell value={row.handy} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-4 text-[12px] text-[#6b7280] leading-5">
          Sources, checked 25 Nov 2026.{' '}
          {SOURCES.map((source, i) => (
            <span key={source.href}>
              {i > 0 ? ' · ' : null}
              <a href={source.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                {source.label}
              </a>
            </span>
          ))}
          . Handy’s customer app was confirmed on the App Store; no current Google Play customer listing was found. The pro app is listed as Angi Services for Pros and the store page says it was Handy for Pros. Urban Company’s provider app was not verified from an official page.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <ScrollToPricing
            className="inline-flex items-center gap-2 text-white font-semibold text-[14px] rounded-full px-7 py-3 transition-all hover:-translate-y-0.5"
            style={{ background: COLOR, boxShadow: `0 6px 20px ${COLOR}40` }}
          >
            Get Prohandy — from ${REGULAR_PRICE}
          </ScrollToPricing>
          <p className="text-[13px] text-[#9ca3af]">One-time payment · No monthly fees · Full source code</p>
        </div>

      </div>
    </section>
  );
}
