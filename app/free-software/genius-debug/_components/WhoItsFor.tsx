import { COLOR, LIGHT_COLOR } from './constants';

const AUDIENCES = [
  { title: 'Small-to-mid dev teams', desc: 'Running Next.js / React apps who find Sentry SaaS overkill or too expensive for the size of the team.' },
  { title: 'Agencies & product studios', desc: 'Want error monitoring per client without per-seat pricing eating into margin.' },
  { title: 'Privacy/compliance-conscious teams', desc: 'Need error and replay data to stay on infrastructure they control, not a vendor’s.' },
  { title: 'Self-hosters', desc: 'Already run their own Postgres and Redis and want one more service, not a new vendor relationship.' },
];

export default function WhoItsFor() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="text-center mb-12">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-medium mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            Who It&apos;s For
          </span>
          <h2 className="text-[28px] sm:text-[38px] font-semibold text-[#0F1112]">
            Built for Teams That Own Their Stack
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1000px] mx-auto">
          {AUDIENCES.map((a) => (
            <div key={a.title} className="rounded-2xl border border-[#E5E7EC] p-5">
              <h3 className="text-[14px] font-semibold text-[#0F1112] mb-2">{a.title}</h3>
              <p className="text-[13px] text-[#484848] leading-6">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
