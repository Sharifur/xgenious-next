import { COLOR, LIGHT_COLOR } from './constants';

const AUDIENCES = [
  { title: 'Marketing teams & agencies', desc: 'Running cold outreach who want control of deliverability instead of sharing a vendor’s IP pool.' },
  { title: 'Developers & agencies', desc: 'Self-hosting internal tools for clients without adding a per-client SaaS line item.' },
  { title: 'Teams already on AWS or Google', desc: 'Anyone who doesn’t want a third SaaS subscription for something four AWS services already do.' },
];

export default function WhoItsFor() {
  return (
    <section className="py-16 sm:py-20 bg-[#f9fafb]">
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="text-center mb-12">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-medium mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            Who It&apos;s For
          </span>
          <h2 className="text-[28px] sm:text-[38px] font-semibold text-[#0F1112]">
            Built for Teams That Own Their Sending
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-[900px] mx-auto">
          {AUDIENCES.map((a) => (
            <div key={a.title} className="rounded-2xl border border-[#E5E7EC] bg-white p-5">
              <h3 className="text-[14px] font-semibold text-[#0F1112] mb-2">{a.title}</h3>
              <p className="text-[13px] text-[#484848] leading-6">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
