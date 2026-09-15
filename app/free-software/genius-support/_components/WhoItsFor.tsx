import { COLOR, LIGHT_COLOR } from './constants';

const AUDIENCES = [
  { title: 'SaaS Startups', desc: 'Stop paying $50–$200/month for Zendesk before you have the revenue to justify it. Self-host once, scale freely with no per-agent fees.' },
  { title: 'Web Agencies', desc: 'Deploy per-client instances under custom domains. The MIT license lets you white-label and build client projects on top of it without copyleft obligations.' },
  { title: 'Hosting Providers & MSPs', desc: 'Give every client their own ticket portal. Route tickets by department, assign dedicated agents, and brand each instance independently.' },
  { title: 'Ecommerce Stores', desc: 'Email-to-ticket captures customer support emails automatically. The knowledge base deflects repeat questions and reduces ticket volume.' },
  { title: 'IT Teams', desc: 'Internal helpdesk with SLA tracking, priority escalation, and department routing. Real-time WebSocket updates keep the whole team in sync.' },
  { title: 'Open-Source Communities', desc: 'The MIT license means you can fork, customize, and redistribute freely. No AGPL network-use clause, no copyleft surprises.' },
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
            Built for Teams That Own Their Support Stack
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[900px] mx-auto">
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
