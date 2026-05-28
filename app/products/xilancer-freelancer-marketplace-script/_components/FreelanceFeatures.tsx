import Image from 'next/image';

const CARDS = [
  {
    bg: '#EFF1FE',
    border: '#E5E7EC',
    src: '/products/xilancer-feature-1.jpg',
    alt: 'Advanced freelancer account creation — multi-step profile setup in Xilancer',
    title: 'Advanced Account Creation for Freelancers',
    desc: "Allow freelancers to showcase their multi information’s to the clients for a better professional experience.",
    large: true,
  },
  {
    bg: '#D8F5F5',
    border: '#b2ddd6',
    src: '/products/xilancer-feature-2.png',
    alt: 'Project and gig listing system — freelancer catalogue in Xilancer',
    title: 'Project/Gig Listing System for Freelancers',
    desc: 'Fiverr Gig market is booming right? So why should you lack behind? Introduce freelancers to project catalogue or gig to attract new clients.',
    large: true,
  },
  {
    bg: '#FDF4EF',
    border: '#E5E7EC',
    src: '/products/xilancer-feature-3.jpg',
    alt: 'Real-time live chat between freelancers and clients in Xilancer',
    title: 'Freelancer Live Chat',
    desc: 'Enable seamless real-time communication between freelancers and clients for faster collaboration, project discussions, and instant updates.',
    large: false,
  },
  {
    bg: '#F9EEF6',
    border: '#fde0d8',
    src: '/products/xilancer-feature-4.png',
    alt: 'Fixed rate job listings for freelancers in Xilancer',
    title: 'Fixed Rate Job for Freelancers',
    desc: 'Unleash the power of job feed — let freelancers find their desired jobs using smart job filters.',
    large: false,
  },
  {
    bg: '#F6F4EF',
    border: '#E5E7EC',
    src: '/products/xilancer-feature-5.png',
    alt: 'Freelancer payment withdrawal and earnings management in Xilancer',
    title: 'Payment Withdraw',
    desc: 'Allow freelancers to request withdrawals securely and manage earnings with a smooth and transparent payment system.',
    large: false,
  },
];

export default function FreelanceFeatures() {
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
            Access powerful tools designed to simplify project management, improve collaboration, and enhance the overall freelancing experience.
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
