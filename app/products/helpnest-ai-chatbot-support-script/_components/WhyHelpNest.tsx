import Image from 'next/image';
import { COLOR, LIGHT_COLOR } from './constants';

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 mt-0.5">
      <circle cx="10" cy="10" r="10" fill={COLOR} fillOpacity="0.12" />
      <path d="M6 10l3 3 5-5" stroke={COLOR} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const ITEMS = [
  {
    title: 'Self-Hosted AI Chatbot Script vs SaaS Subscriptions',
    desc: 'While platforms like Intercom, Crisp, and Tidio charge $50–1,000 per month, HelpNest is a self-hosted script — you pay once and own it forever, eliminating recurring fees.',
    points: [
      'One-time payment instead of recurring monthly fees',
      'Complete data ownership and privacy control',
      'Full source code access for unlimited customisation',
      'Resell and white-label with unlimited client agents',
      'White-label ready for agencies and resellers',
    ],
    img: '/products/helpnest-feature-billing.jpg',
  },
  {
    title: 'Everything Modern Support Scripts Should Have',
    desc: 'When evaluating customer support scripts and help desk solutions, you need features that scale with your business. HelpNest delivers everything expected from enterprise software.',
    points: [
      'Semantic Search: AI understands meaning, not just keywords',
      'Knowledge Base: Train chatbots with your docs and FAQs',
      'Multi-Team: Real chat with live agent hand-off and escalation',
      'Live Visitor Tracking: Geo-map active users in real time',
      'Analytics: Track performance and customer satisfaction',
    ],
    img: '/products/helpnest-feature-inbox.jpg',
  },
];

export default function WhyHelpNest() {
  return (
    <section className="py-16 lg:py-[100px] bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1100px] mx-auto">

        <div className="text-center mb-16 max-w-[620px] mx-auto">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
            Why HelpNest
          </div>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-4">
            The Smarter Way to Build AI Customer Support
          </h2>
          <p className="text-[15px] text-[#6b7280] leading-7">
            Stop paying month-to-month. Own your platform, control your data, and keep 100% of the revenue.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {ITEMS.map((item, i) => (
            <div
              key={item.title}
              className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10`}
            >
              <div className="flex-1 flex flex-col gap-5">
                <h3 className="text-[22px] sm:text-[26px] font-bold text-[#0F1112] leading-tight">{item.title}</h3>
                <p className="text-[15px] text-[#6b7280] leading-7">{item.desc}</p>
                <ul className="flex flex-col gap-2.5">
                  {item.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-[14px] text-[#374151]">
                      <Check />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 w-full rounded-2xl overflow-hidden border border-[#E5E7EC] shadow-sm">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={520}
                  height={340}
                  className="w-full object-cover object-top"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
