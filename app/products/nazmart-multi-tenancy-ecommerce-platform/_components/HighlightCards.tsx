import { COLOR } from './constants';

const cards = [
  {
    title: '19+ Payment Gateways',
    desc: 'We are continuously working to integrate More',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    title: '10+ Beautiful Themes',
    desc: "We're working hard to bring 3 more soon",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    title: 'Flutter Mobile Application',
    desc: 'Mobile application available for iOS and Android',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    title: '200+ Language Supported',
    desc: 'Arabic, Chinese, or what? We have them all',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 7h16M4 12h10M4 17h6" />
        <path d="M15 15l2 2 4-4" />
      </svg>
    ),
  },
];

export default function HighlightCards() {
  return (
    <section className="py-12 sm:py-16" style={{ background: '#154646' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card) => (
            <div key={card.title} className="bg-white rounded-2xl p-6 flex flex-col gap-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${COLOR}30`, color: '#2d6a00' }}
              >
                {card.icon}
              </div>
              <div>
                <h3 className="text-[16px] font-bold text-[#0F1112] leading-snug mb-2">{card.title}</h3>
                <p className="text-[13px] text-[#6b7280] leading-5">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
