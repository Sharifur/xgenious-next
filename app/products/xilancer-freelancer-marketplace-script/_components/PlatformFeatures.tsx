import Image from 'next/image';

const CARDS = [
  {
    bg: '#EEF2FF',
    border: '#C7D2FE',
    src: '/products/xilancer-pf-talent-list.png',
    alt: 'Talent list — browse and filter freelancers in Xilancer',
    title: 'Talent List',
    desc: 'Buyers can browse all available freelancers, filter by skill, location, rate, and level — and hire the right person in minutes.',
    large: true,
  },
  {
    bg: '#F0FDF4',
    border: '#BBF7D0',
    src: '/products/xilancer-pf-community.png',
    alt: 'Community forum — freelancers and clients ask questions in Xilancer',
    title: 'Community Forum',
    desc: 'Freelancers and clients ask questions, share knowledge, and build bonds — turning your platform into a community, not just a marketplace.',
    large: true,
  },
  {
    bg: '#FFF7ED',
    border: '#FED7AA',
    src: '/products/xilancer-pf-promote.png',
    alt: 'Promoted freelancer profiles — extra revenue stream for platform admins in Xilancer',
    title: 'Promote Freelancer Profile',
    desc: 'Freelancers pay to boost their profile visibility. Extra revenue for you, more exposure for them.',
    large: false,
  },
  {
    bg: '#F0F9FF',
    border: '#BAE6FD',
    src: '/products/xilancer-pf-kyc.png',
    alt: 'KYC identity verification for freelancers in Xilancer',
    title: 'KYC Verification',
    desc: 'Require freelancers to verify their identity before going live. Builds trust with clients and reduces fraud on your platform.',
    large: false,
  },
  {
    bg: '#FDF4FF',
    border: '#E9D5FF',
    src: '/products/xilancer-pf-2fa.png',
    alt: 'Two-factor authentication 2FA for freelancer and client accounts in Xilancer',
    title: '2FA Security',
    desc: 'Protect every account with two-factor authentication. Freelancers and clients enable it via Google Authenticator — no code changes needed.',
    large: false,
  },
];

export default function PlatformFeatures() {
  const topCards = CARDS.filter((c) => c.large);
  const bottomCards = CARDS.filter((c) => !c.large);

  return (
    <section className="py-16 sm:py-20 lg:py-[100px] bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-12">
          <h2 className="text-[32px] sm:text-[44px] font-bold text-[#0F1112] leading-tight mb-4">
            Essential Features for<br className="hidden sm:block" /> Freelance Success
          </h2>
          <p className="text-[#484848] text-[15px] sm:text-[17px] leading-7 max-w-[560px] mx-auto">
            Everything your platform needs to build trust, grow revenue, and keep freelancers and clients coming back.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {topCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border p-[30px] flex flex-col gap-5"
              style={{ background: card.bg, borderColor: card.border }}
            >
              <div className="relative h-[220px] sm:h-[260px] overflow-hidden rounded-xl">
                <Image src={card.src} alt={card.alt} fill className="object-cover object-top" />
                <div
                  className="absolute bottom-0 left-0 right-0 h-[80px] pointer-events-none"
                  style={{ background: `linear-gradient(to bottom, transparent, ${card.bg})` }}
                />
              </div>
              <div>
                <h3 className="text-[28px] font-semibold mb-2 leading-[1.3]" style={{ color: '#252C38' }}>
                  {card.title}
                </h3>
                <p className="text-[16px] leading-6" style={{ color: '#374253' }}>
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {bottomCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border p-[30px] flex flex-col gap-5"
              style={{ background: card.bg, borderColor: card.border }}
            >
              <div className="relative h-[180px] overflow-hidden rounded-xl">
                <Image src={card.src} alt={card.alt} fill className="object-cover object-top" />
                <div
                  className="absolute bottom-0 left-0 right-0 h-[60px] pointer-events-none"
                  style={{ background: `linear-gradient(to bottom, transparent, ${card.bg})` }}
                />
              </div>
              <div>
                <h3 className="text-[28px] font-semibold mb-2 leading-[1.3]" style={{ color: '#252C38' }}>
                  {card.title}
                </h3>
                <p className="text-[16px] leading-6" style={{ color: '#374253' }}>
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
