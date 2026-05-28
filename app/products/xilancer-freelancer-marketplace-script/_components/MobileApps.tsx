import Image from 'next/image';
import Link from 'next/link';
import { COLOR, LIGHT_COLOR } from './constants';

const APPS = [
  {
    id: 'freelancer',
    name: 'Xilancer Freelancer App',
    role: 'For Freelancers',
    description:
      'Manage gigs, bid on projects, track orders, chat with clients, and withdraw earnings — all from your phone.',
    icon: '/products/xilancer-app-freelancer.png',
    playUrl: 'https://play.google.com/store/apps/details?id=com.xgenious.xilancer',
    features: [
      'Create & manage gig packages',
      'Submit project bids',
      'Real-time order tracking',
      'In-app client messaging',
      'Earnings & withdrawal dashboard',
      'Push notifications',
    ],
  },
  {
    id: 'client',
    name: 'Xilancer Client App',
    role: 'For Clients',
    description:
      'Post projects, browse freelancers, place orders, release payments, and manage your entire hiring workflow on the go.',
    icon: '/products/xilancer-app-client.png',
    playUrl: 'https://play.google.com/store/apps/details?id=com.xgenious.xilancer_client',
    features: [
      'Browse & hire freelancers',
      'Post projects & review bids',
      'Escrow-secured payments',
      'Real-time order management',
      'Approve deliveries & release funds',
      'Push notifications',
    ],
  },
];

function GooglePlayBadge() {
  return (
    <svg viewBox="0 0 135 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[38px] w-auto">
      <rect width="135" height="40" rx="5" fill="#0F1112" />
      <rect x="0.5" y="0.5" width="134" height="39" rx="4.5" stroke="white" strokeOpacity="0.2" />
      <text x="46" y="13" fill="white" fontSize="8" fontFamily="sans-serif" opacity="0.8">GET IT ON</text>
      <text x="46" y="27" fill="white" fontSize="13" fontFamily="sans-serif" fontWeight="bold">Google Play</text>
      <g transform="translate(10, 8)">
        <path d="M0.5 1.5C0.5 0.7 1 0.3 1.7 0.7L20.3 10.4C21 10.8 21 11.2 20.3 11.6L1.7 21.3C1 21.7 0.5 21.3 0.5 20.5V1.5Z" fill="white" />
        <path d="M0.5 1.5L11 11L0.5 20.5V1.5Z" fill="#00C853" />
        <path d="M11 11L20.3 10.4C21 10.8 21 11.2 20.3 11.6L11 11Z" fill="#F44336" />
        <path d="M0.5 1.5C0.5 0.7 1 0.3 1.7 0.7L11 11L0.5 1.5Z" fill="#FFEB3B" />
      </g>
    </svg>
  );
}

export default function MobileApps() {
  return (
    <section id="mobile-apps" className="py-20 lg:py-[100px] bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1100px] mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
            Available on Google Play
          </div>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-4">
            Two Native Mobile Apps<br className="hidden sm:block" /> Included in Your License
          </h2>
          <p className="text-[15px] text-[#6b7280] max-w-[520px] mx-auto leading-7">
            Flutter-built Android apps for both sides of your marketplace — freelancers and clients. Fully branded to your platform.
          </p>
        </div>

        {/* App Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {APPS.map((app) => (
            <div
              key={app.id}
              className="rounded-2xl overflow-hidden flex flex-col border"
              style={{ borderColor: '#E5E7EC', background: '#F5F6F8' }}
            >
              {/* Top accent strip */}
              <div className="h-1 w-full" style={{ background: COLOR }} />

              <div className="p-6 sm:p-7 flex flex-col flex-1">
                {/* Icon + name row */}
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="rounded-2xl overflow-hidden flex-shrink-0 border"
                    style={{
                      width: 68,
                      height: 68,
                      borderColor: '#E5E7EC',
                      boxShadow: `0 4px 16px ${COLOR}20`,
                    }}
                  >
                    <Image
                      src={app.icon}
                      alt={`${app.name} icon`}
                      width={68}
                      height={68}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <span
                      className="inline-block text-[10px] font-bold px-2.5 py-1 rounded-full mb-1.5"
                      style={{ background: LIGHT_COLOR, color: COLOR }}
                    >
                      {app.role}
                    </span>
                    <h3 className="text-[16px] font-bold text-[#0F1112] leading-tight">{app.name}</h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[13px] text-[#6b7280] leading-6 mb-5">{app.description}</p>

                {/* Features */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 mb-6">
                  {app.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[12px] text-[#374151]">
                      <svg className="flex-shrink-0 mt-0.5" width="13" height="13" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="10" fill="#dcfce7" />
                        <path d="M6 10l3 3 5-5" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-auto">
                  <Link href={app.playUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
                    <GooglePlayBadge />
                  </Link>
                  <p className="text-[11px] text-[#9ca3af] mt-2.5">Flutter · Android · iOS build available</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-[13px] text-[#6b7280] mt-10">
          Both apps included with{' '}
          <Link href="#pricing" className="font-medium underline underline-offset-2" style={{ color: COLOR }}>
            Everything Bundle
          </Link>
          {' '}and{' '}
          <Link href="#pricing" className="font-medium underline underline-offset-2" style={{ color: COLOR }}>
            Exclusive License
          </Link>
          . White-label branding supported.
        </p>
      </div>
    </section>
  );
}
