import Image from 'next/image';

const FEATURES = [
  {
    title: 'Proposal Submission System for Freelancer',
    desc: 'Freelancers can submit their proposals on clients job post and clients can decide best option for their need.',
    bullets: ['Proposal Abstract', 'Delivery Question', 'Cover Letter'],
    image: '/products/xilancer-mf-proposal.jpg',
    imageAlt: 'Proposal submission system in Xilancer',
    imageLeft: false,
    imageBg: '#F9FBF4',
    imageShadow: true,
  },
  {
    title: 'Balance Wallet for Freelancers and Clients',
    desc: 'Smart financial management with built-in wallet. Freelancers can buy subscriptions, add more funds, and clients can easily pay freelancers, all within Xilancer platform.',
    bullets: ['Wallet Deposit', 'Withdraw wallet balance', 'Refund Money'],
    image: '/products/xilancer-mf-wallet.jpg',
    imageAlt: 'Balance wallet for freelancers and clients in Xilancer',
    imageLeft: true,
    imageBg: '#D8F5F5',
    imageShadow: false,
  },
  {
    title: 'Clients Can pay by Milestones to Freelancers',
    desc: 'Clients can pay Freelancers by milestones upon agreement of both parties.',
    bullets: ['Milestone based bids', 'Milestone money deposit', 'Automatic milestone approval'],
    image: '/products/xilancer-mf-milestone.png',
    imageAlt: 'Milestone payment system in Xilancer',
    imageLeft: false,
    imageBg: '#F9EEF6',
    imageShadow: false,
  },
  {
    title: 'Feedback System for Freelancers and Clients',
    desc: 'Freelancers & Clients can provide feedback and ratings to each others to maintain their professionalism at working.',
    bullets: ['Client feedback', 'Freelancer feedback', 'Details feedback on multiple segment'],
    image: '/products/xilancer-mf-feedback.jpg',
    imageAlt: 'Feedback and rating system in Xilancer',
    imageLeft: true,
    imageBg: '#EFF1FE',
    imageShadow: false,
  },
  {
    title: 'Subscription & Trial Period System for Freelancers',
    desc: 'Allow Freelancers to purchase membership subscription per option to use premium features & connect to submit more proposals.',
    bullets: ['Verified badge', '20+ Projects Catalogue', '24/7 Live Support'],
    image: '/products/xilancer-mf-subscription.jpg',
    imageAlt: 'Subscription and trial period system in Xilancer',
    imageLeft: false,
    imageBg: '#EFF1FE',
    imageShadow: false,
  },
];

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 mt-0.5">
      <circle cx="10" cy="10" r="10" fill="#1a3d3a" fillOpacity="0.1" />
      <path d="M6 10l3 3 5-5" stroke="#1a6b5a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function MarketplaceFeatures() {
  return (
    <section className="pt-16 sm:pt-20 lg:pt-[100px]" style={{ background: '#F5F6F8' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-14 max-w-[560px] mx-auto">
          <h2 className="text-[32px] sm:text-[44px] font-bold text-[#0F1112] leading-tight mb-4">
            Marketplace Features<br className="hidden sm:block" /> That Drive Success
          </h2>
          <p className="text-[#484848] text-[15px] sm:text-[17px] leading-7">
            Allow Client &amp; Freelancers to efficiently collaborate real time in their projects right into the Xilancer platform
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl border border-[#E5E7EC] bg-white p-[30px]"
            >
              {/* Text side */}
              <div className={`flex flex-col justify-center gap-5 ${f.imageLeft ? 'md:order-2 md:pl-[80px]' : 'md:order-1 md:pr-[80px]'}`}>
                <h3 className="text-[20px] sm:text-[24px] font-bold text-[#0F1112] leading-tight">
                  {f.title}
                </h3>
                <p className="text-[14px] sm:text-[15px] text-[#484848] leading-6">{f.desc}</p>
                <ul className="flex flex-col gap-2.5">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-[14px] text-[#374151]">
                      <CheckIcon />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image side */}
              <div
                className={`rounded-xl flex items-center justify-center p-6 min-h-[240px] ${f.imageLeft ? 'md:order-1' : 'md:order-2'}`}
                style={{ background: f.imageBg }}
              >
                <Image
                  src={f.image}
                  alt={f.imageAlt}
                  width={460}
                  height={300}
                  className="w-full h-auto object-contain"
                  style={f.imageShadow ? { boxShadow: '0 4px 24px rgba(0,0,0,0.10)', borderRadius: '8px' } : undefined}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
