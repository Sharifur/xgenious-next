import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import BookingCTA from '@/components/sections/BookingCTA';
import InstallationPackage from '@/components/sections/InstallationPackage';

const BASE_URL = 'https://xgenious.com';
const CANONICAL = `${BASE_URL}/products/xilancer-freelancer-marketplace-script`;
const COLOR = '#e8705a';
const LIGHT_COLOR = '#fef3f0';
const PURCHASE_URL = 'https://codecanyon.net/item/xilancer-all-in-one-freelancer-marketplace-platform/';
const DEMO_URL = 'https://xilancer.xgenious.com';
const ADMIN_URL = 'https://xilancer.xgenious.com/admin';
const DOCS_URL = 'https://docs.xgenious.com/xilancer/';
const MOBILE_URL = 'https://xgenious.com/our-products/xilancer-freelancer-marketplace-platform/#mobile';
const PRICING_URL = '#pricing';

export const metadata: Metadata = {
  title: 'Xilancer — Freelancer Marketplace Script | Xgenious',
  description:
    'Build a Fiverr or Upwork clone with Xilancer. Laravel freelancing platform script with escrow payments, mobile app, bidding, and multi-language support.',
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Xilancer — Freelancer Marketplace Script | Xgenious',
    description:
      'Launch a full-featured freelancing marketplace. Laravel backend, Vue.js frontend, native mobile apps, Stripe & PayPal escrow, unlimited freelancers.',
    url: CANONICAL,
    siteName: 'Xgenious',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xilancer — Freelancer Marketplace Script',
    description: 'Build a Fiverr or Upwork clone with Xilancer. Laravel + Vue.js. Native mobile apps. One-time purchase.',
    images: ['/og-image.png'],
  },
  keywords: [
    'freelancer marketplace script',
    'fiverr clone script',
    'upwork clone laravel',
    'freelancing platform script',
    'laravel freelancer marketplace',
    'buy freelancing script',
    'xilancer',
  ],
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Xilancer',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, Android, iOS',
  offers: { '@type': 'Offer', price: '49', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
  description:
    'All-in-one freelancer marketplace script built with Laravel. Build a Fiverr or Upwork clone with bidding, escrow payments, mobile apps, and admin panel.',
  url: CANONICAL,
  author: { '@type': 'Organization', name: 'Xgenious', url: BASE_URL },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.36',
    reviewCount: '45',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Aofn75' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'One of the best and fast customer support I have ever seen. The script quality is excellent and the team goes above and beyond to help.',
      datePublished: '2025-10',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Sommapropaganda' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'Genial programmers with fast, effective solutions. The support team resolved every issue quickly and the platform works great.',
      datePublished: '2025-10',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Trustable' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'This product stands out with a seamless user experience and competitive features. Very well built and easy to customize.',
      datePublished: '2025-05',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'letrank69' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'Absolutely amazing script! Clean code, modern UI. Setup was smooth, performance is great, and the developer is always responsive and helpful.',
      datePublished: '2025-05',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'rossymike' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'A complete solution that delivers everything as promised. Support has been outstanding — even when they were on holiday, they still responded promptly.',
      datePublished: '2025-05',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Otiumapps' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'Outstanding support and wonderful spirit. Their professionalism and dedication truly made a difference.',
      datePublished: '2025-10',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Xilancer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Xilancer is a complete freelancer marketplace script built with Laravel. It lets you launch your own Fiverr or Upwork clone — fully self-hosted, one-time purchase, no monthly fees.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Xilancer include a mobile app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Xilancer ships with native Android and iOS mobile apps for both freelancers and clients. The mobile apps cover the full job and project workflow.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which payment gateways does Xilancer support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Xilancer supports PayPal, Stripe, and several regional gateways. Payments go through an escrow system — funds release to the freelancer only after client approval.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it a one-time purchase or a subscription?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'One-time purchase. You buy the script once on CodeCanyon, download the source code, and self-host it on your own server. No recurring licensing fees.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I white-label Xilancer for my own brand?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The script is fully white-label ready. Change the name, logo, colors, and domain. You own the platform and the brand.',
      },
    },
    {
      '@type': 'Question',
      name: 'What server is required to run Xilancer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Any Linux VPS or shared hosting with PHP 8.1+, MySQL 5.7+, and Composer. 2 GB RAM recommended for production. Nginx or Apache both work.',
      },
    },
  ],
};

const FEATURES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Service & Gig Marketplace',
    desc: 'Freelancers post services (gigs) with packages, delivery time, revisions, and price tiers. Clients browse by category, filter by budget, and order instantly.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: 'Project Bidding System',
    desc: 'Clients post projects with budgets and deadlines. Freelancers submit proposals. Clients review bids and hire — full Upwork-style workflow out of the box.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: 'Escrow Payment System',
    desc: 'Client funds are held in escrow at order. Money releases to the freelancer only after the client approves the delivery. Disputes handled through admin.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Real-Time Chat & Messaging',
    desc: 'Built-in real-time messaging between clients and freelancers. File sharing, order discussion, and custom offer creation directly from the chat window.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Reviews & Ratings',
    desc: 'Mutual review system after order completion. Star ratings, written feedback, and verified buyer badge. Freelancer reputation built transparently.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Admin Panel & Analytics',
    desc: 'Full control dashboard with revenue charts, commission settings, user management, withdrawal approvals, dispute resolution, and category management.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 18h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Native Mobile App',
    desc: 'Separate Android and iOS apps for clients and freelancers. Push notifications, order management, real-time chat, and payments — all mobile-native.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    title: 'Multi-Language & RTL',
    desc: 'Full translation system with RTL support. Manage all UI strings from the admin panel. Launch in any language without touching code.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Multiple Payment Gateways',
    desc: 'PayPal, Stripe, Razorpay, Flutterwave, SSLCommerz, and more. Commission rate configurable per gateway. Withdrawal to bank or wallet.',
  },
];

const STATS = [
  { value: '10,000+', label: 'Active installs' },
  { value: '4.36/5', label: 'CodeCanyon rating' },
  { value: '45', label: 'Verified reviews' },
  { value: '1-time', label: 'Purchase' },
];

const REVIEWS = [
  {
    name: 'Aofn75',
    category: 'Customer Support',
    rating: 5,
    body: 'One of the best and fast customer support I have ever seen. Very humble and they fix any issues within no time. Highly recommended.',
  },
  {
    name: 'Sommapropaganda',
    category: 'Customer Support',
    rating: 5,
    body: 'Outstanding support from XGenious. Incredibly fast and resolved everything on the first go. The team\'s technical expertise really shows.',
  },
  {
    name: 'Trustable',
    category: 'Design Quality',
    rating: 5,
    body: 'This script is right up there with the best in the freelance industry. Seamless user experience, exceptional functionality, and continuous improvements.',
  },
  {
    name: 'letrank69',
    category: 'Design Quality',
    rating: 5,
    body: 'Absolutely amazing script! Clean code, modern UI. Setup was smooth, performance is great, and the developer is always responsive and helpful.',
  },
  {
    name: 'rossymike',
    category: 'Design Quality',
    rating: 5,
    body: 'A complete solution that delivers everything as promised. Support has been outstanding — even when they were on holiday, they still responded promptly.',
  },
  {
    name: 'Otiumapps',
    category: 'Customer Support',
    rating: 5,
    body: 'Outstanding support and wonderful spirit. Their professionalism and dedication truly made a difference. You can feel the care they put into the product.',
  },
];

const TECH = [
  { name: 'Laravel', desc: 'PHP 8+ backend framework' },
  { name: 'Vue.js', desc: 'Reactive SPA frontend' },
  { name: 'MySQL', desc: 'Relational database' },
  { name: 'Laravel Echo', desc: 'Real-time WebSocket events' },
  { name: 'Flutter', desc: 'Cross-platform mobile app' },
  { name: 'Stripe & PayPal', desc: 'Escrow payment processing' },
];

const QUICK_LINKS = [
  { label: 'Admin Panel', href: ADMIN_URL },
  { label: 'Mobile App', href: MOBILE_URL },
  { label: 'Documentation', href: DOCS_URL },
  { label: 'Pricing', href: PRICING_URL },
];

export default function XilancerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden pt-[120px] pb-0 sm:pt-[140px]"
        style={{
          background: 'linear-gradient(135deg, #fce8e3 0%, #fdf3ed 30%, #e8f5ef 70%, #d4ede0 100%)',
        }}
      >
        {/* Floating screenshots — left */}
        <div
          className="hidden lg:block absolute left-0 top-[120px] w-[280px] xl:w-[320px] rounded-2xl overflow-hidden shadow-2xl rotate-[-6deg] translate-x-[-30px]"
          style={{ border: '1px solid rgba(255,255,255,0.6)' }}
        >
          <Image
            src="/products/xilancer.png"
            alt="Xilancer freelancer marketplace script screenshot"
            width={320}
            height={220}
            className="object-cover object-top w-full"
          />
        </div>

        {/* Floating screenshot — right */}
        <div
          className="hidden lg:block absolute right-0 top-[80px] w-[260px] xl:w-[300px] rounded-2xl overflow-hidden shadow-2xl rotate-[5deg] translate-x-[30px]"
          style={{ border: '1px solid rgba(255,255,255,0.6)' }}
        >
          <Image
            src="/products/xilancer.png"
            alt="Xilancer admin panel screenshot"
            width={300}
            height={200}
            className="object-cover object-center w-full"
          />
        </div>

        {/* Center content */}
        <div className="container-page px-4 sm:px-6 lg:px-0 flex flex-col items-center text-center gap-6 relative z-10 max-w-[780px] mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/60 rounded-full px-4 py-1.5 border border-white/80 text-[13px] font-medium text-[#484848]">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
            Laravel Freelancing Platform Script
          </div>

          <h1 className="text-[36px] leading-[44px] sm:text-[52px] sm:leading-[60px] lg:text-[60px] lg:leading-[68px] font-bold text-[#0F1112]">
            Build Your Own{' '}
            <strong className="font-bold" style={{ color: COLOR }}>Freelancer Marketplace Script</strong>
            {' '}with Xilancer
          </h1>

          <p className="text-[#484848] text-[15px] sm:text-[17px] leading-7 max-w-[580px]">
            The best freelancing platform script in the market. Build your own <strong>Fiverr clone</strong> or <strong>Upwork clone</strong> freelancing platform using all-in-one Laravel freelancer marketplace script.
          </p>

          <div className="flex items-center gap-3 flex-wrap justify-center mt-1">
            <Link
              href={PURCHASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-semibold text-[15px] rounded-full px-8 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: COLOR, boxShadow: `0 6px 20px ${COLOR}40` }}
            >
              Purchase Now
            </Link>
            <Link
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-[15px] rounded-full px-8 py-3.5 border-2 text-[#0F1112] border-[#0F1112]/20 bg-white/60 hover:bg-white transition-all hover:-translate-y-0.5"
            >
              Explore Demos
            </Link>
          </div>

          <div className="flex items-center gap-6 flex-wrap justify-center mt-1">
            {QUICK_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-[14px] font-medium text-[#484848] underline underline-offset-4 decoration-[#484848]/30 hover:text-[#0F1112] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Product preview */}
          <div className="mt-10 w-full max-w-[900px] rounded-t-2xl overflow-hidden shadow-2xl border border-white/80">
            <Image
              src="/products/xilancer.png"
              alt="Xilancer freelancer marketplace script — connecting clients with talent"
              width={900}
              height={540}
              className="w-full object-cover object-top"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── Marquee ticker ── */}
      <div className="overflow-hidden bg-[#1a3d3a] py-3">
        <style>{`
          @keyframes xilancer-ticker {
            0% { transform: translateX(0) }
            100% { transform: translateX(-50%) }
          }
          .xilancer-ticker-track {
            display: flex;
            width: max-content;
            animation: xilancer-ticker 28s linear infinite;
          }
        `}</style>
        <div className="xilancer-ticker-track">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="flex items-center gap-3 px-8 text-white text-[13px] font-semibold uppercase tracking-wide whitespace-nowrap">
              40% OFF ON INSTALLATION PACKAGE GRAB IT NOW
              <span aria-hidden>✨</span>
              <span aria-hidden className="text-white/30">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Feature pills ── */}
      <section className="py-10 bg-white border-b border-[#E5E7EC]">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide justify-center flex-wrap">
            {[
              {
                label: 'Fixed Rate Jobs',
                bg: '#f9fafb',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="7" width="20" height="14" rx="2" stroke="#374151" strokeWidth="1.6" />
                    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="#374151" strokeWidth="1.6" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                label: 'Hourly Rate Jobs',
                bg: '#f0fdf9',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#0d9488" strokeWidth="1.6" />
                    <path d="M12 7v5l3 3" stroke="#0d9488" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                label: 'Project/Gig Catalogue',
                bg: '#fff1f2',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="#e11d48" strokeWidth="1.6" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                label: 'Custom Order',
                bg: '#f8fafc',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="#64748b" strokeWidth="1.6" strokeLinejoin="round" />
                    <path d="M14 2v6h6M12 18v-6M9 15h6" stroke="#64748b" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                label: 'Live Chat System',
                bg: '#f0f9ff',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#0284c7" strokeWidth="1.6" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                label: 'Paid Membership',
                bg: '#f0fdf4',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#16a34a" strokeWidth="1.6" strokeLinejoin="round" />
                    <circle cx="9" cy="7" r="4" stroke="#16a34a" strokeWidth="1.6" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="#16a34a" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                ),
              },
            ].map((pill) => (
              <div
                key={pill.label}
                className="flex flex-col items-center gap-2 rounded-2xl border border-[#E5E7EC] px-6 py-4 min-w-[120px] cursor-default select-none"
                style={{ background: pill.bg }}
              >
                {pill.icon}
                <span className="text-[13px] font-medium text-[#374151] text-center leading-tight">{pill.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-12 bg-white border-b border-[#E5E7EC]">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-[32px] sm:text-[40px] font-bold text-[#0F1112]">{stat.value}</p>
                <p className="text-[13px] text-[#6b7280] font-medium mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Definition block (AI extraction) ── */}
      <section className="py-10 bg-white border-b border-[#E5E7EC]">
        <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[760px] mx-auto">
          <p className="text-[15px] sm:text-[16px] text-[#484848] leading-7">
            <strong>Xilancer</strong> is a <strong>freelancer marketplace script</strong> built with Laravel that lets you launch a complete Fiverr or Upwork-style platform. It includes a gig marketplace, project bidding, escrow payments, native mobile apps, real-time chat, multi-language support, and a full admin panel — all in a single one-time purchase.
          </p>
        </div>
      </section>

      {/* ── Essential Features showcase ── */}
      <section className="py-16 sm:py-20 lg:py-[100px] bg-white">
        <div className="container-page px-4 sm:px-6 lg:px-0">

          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-[32px] sm:text-[44px] font-bold text-[#0F1112] leading-tight mb-4">
              Essential Features for<br className="hidden sm:block" /> Freelance Success
            </h2>
            <p className="text-[#484848] text-[15px] sm:text-[17px] leading-7 max-w-[560px] mx-auto">
              Access powerful tools designed to simplify project management, improve collaboration, and enhance the overall freelancing experience.
            </p>
          </div>

          {/* Top row — 2 large cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            {/* Card 1 — white */}
            <div className="rounded-2xl border border-[#E5E7EC] overflow-hidden bg-white">
              <div className="relative h-[220px] sm:h-[260px] overflow-hidden bg-[#f8fafc] border-b border-[#E5E7EC]">
                <Image
                  src="/products/xilancer.png"
                  alt="Advanced freelancer account creation — multi-step profile setup in Xilancer"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6 sm:p-7">
                <h3 className="text-[18px] sm:text-[20px] font-bold text-[#0F1112] mb-2">
                  Advanced Account Creation for Freelancers
                </h3>
                <p className="text-[13px] sm:text-[14px] text-[#484848] leading-6">
                  Allow freelancers to showcase their multi information&apos;s to the clients for a better professional experience.
                </p>
              </div>
            </div>

            {/* Card 2 — mint */}
            <div className="rounded-2xl border border-[#b2ddd6] overflow-hidden" style={{ background: '#e8f5f2' }}>
              <div className="relative h-[220px] sm:h-[260px] overflow-hidden border-b border-[#b2ddd6]" style={{ background: '#d4ede9' }}>
                <Image
                  src="/products/xilancer.png"
                  alt="Project and gig listing system — freelancer catalogue in Xilancer"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="p-6 sm:p-7">
                <h3 className="text-[18px] sm:text-[20px] font-bold text-[#0F1112] mb-2">
                  Project/Gig Listing System for Freelancers
                </h3>
                <p className="text-[13px] sm:text-[14px] text-[#484848] leading-6">
                  Fiverr Gig market is booming right? So why should you lack behind? Introduce freelancers to project catalogue or gig to attract new clients.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom row — 3 smaller cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {/* Card 3 — white */}
            <div className="rounded-2xl border border-[#E5E7EC] overflow-hidden bg-white">
              <div className="relative h-[180px] overflow-hidden bg-[#f8fafc] border-b border-[#E5E7EC]">
                <Image
                  src="/products/xilancer.png"
                  alt="Real-time live chat between freelancers and clients in Xilancer"
                  fill
                  className="object-cover object-left-top"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-[16px] sm:text-[17px] font-bold text-[#0F1112] mb-2">
                  Freelancer Live Chat
                </h3>
                <p className="text-[13px] text-[#484848] leading-6">
                  Enable seamless real-time communication between freelancers and clients for faster collaboration, project discussions, and instant updates.
                </p>
              </div>
            </div>

            {/* Card 4 — peach */}
            <div className="rounded-2xl border border-[#fde0d8] overflow-hidden" style={{ background: '#fef3f0' }}>
              <div className="relative h-[180px] overflow-hidden border-b border-[#fde0d8]" style={{ background: '#fde8e2' }}>
                <Image
                  src="/products/xilancer.png"
                  alt="Fixed rate job listings for freelancers in Xilancer"
                  fill
                  className="object-cover object-right-top"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-[16px] sm:text-[17px] font-bold text-[#0F1112] mb-2">
                  Fixed Rate Job for Freelancers
                </h3>
                <p className="text-[13px] text-[#484848] leading-6">
                  Unleash the power of job feed — let freelancers find their desired jobs using smart job filters.
                </p>
              </div>
            </div>

            {/* Card 5 — white */}
            <div className="rounded-2xl border border-[#E5E7EC] overflow-hidden bg-white">
              <div className="relative h-[180px] overflow-hidden bg-[#f8fafc] border-b border-[#E5E7EC]">
                <Image
                  src="/products/xilancer.png"
                  alt="Freelancer payment withdrawal and earnings management in Xilancer"
                  fill
                  className="object-cover object-bottom"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-[16px] sm:text-[17px] font-bold text-[#0F1112] mb-2">
                  Payment Withdraw
                </h3>
                <p className="text-[13px] text-[#484848] leading-6">
                  Allow freelancers to request withdrawals securely and manage earnings with a smooth and transparent payment system.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-16 sm:py-20 lg:py-[100px] bg-[#fafafa]">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="text-center mb-14">
            <p className="text-[13px] font-medium text-[#6b7280] uppercase tracking-wider mb-3">Everything Included</p>
            <h2 className="text-[32px] sm:text-[40px] font-bold text-[#0F1112] leading-tight">
              A complete freelancer marketplace script,<br className="hidden sm:block" /> ready to launch
            </h2>
            <p className="text-[#484848] text-[15px] sm:text-[17px] leading-7 max-w-[560px] mx-auto mt-4">
              Every feature your freelancing platform needs — built in, not bolted on.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feat) => (
              <div
                key={feat.title}
                className="bg-white rounded-2xl border border-[#E5E7EC] p-7 flex flex-col gap-4 hover:shadow-md transition-shadow"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: LIGHT_COLOR, color: COLOR }}
                >
                  {feat.icon}
                </div>
                <div>
                  <h3 className="text-[16px] font-semibold text-[#0F1112] mb-1.5">{feat.title}</h3>
                  <p className="text-[13px] text-[#484848] leading-6">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Marketplace Features alternating rows ── */}
      <section className="bg-white">
        {/* Header */}
        <div className="container-page px-4 sm:px-6 lg:px-0 pt-16 sm:pt-20 lg:pt-[100px] pb-12 text-center">
          <h2 className="text-[32px] sm:text-[44px] font-bold text-[#0F1112] leading-tight mb-4">
            Marketplace Features<br className="hidden sm:block" /> That Drive Success
          </h2>
          <p className="text-[#484848] text-[15px] sm:text-[17px] leading-7 max-w-[500px] mx-auto">
            Allow Client &amp; Freelancers to efficiently collaborate real time in their projects right into the Xilancer platform.
          </p>
        </div>

        {[
          {
            title: 'Proposal Submission System for Freelancer',
            desc: 'Freelancers can submit their proposals/bids on clients job post and clients can short-list option for hire need.',
            points: ['Proposals decision', 'Delivery deadline', 'Current tasks'],
            bg: '#ffffff',
            imgPos: 'object-top',
            reverse: false,
          },
          {
            title: 'Balance Wallet for Freelancers and Clients',
            desc: 'Streamline financial management with built-in wallet. Freelancers can top up subscriptions, withdraw funds, and clients can easily pay freelancers, all within Xilancer platform.',
            points: ['Wallet Deposit', 'Withdraw wallet balance', 'Refund Money'],
            bg: '#f0fdf8',
            imgPos: 'object-center',
            reverse: true,
          },
          {
            title: 'Clients Can pay by Milestones to Freelancer',
            desc: 'Clients can pay freelancers by milestones upon agreement of both parties.',
            points: ['Milestone select work', 'Milestone money deposit', 'Automatic Milestone approval'],
            bg: '#ffffff',
            imgPos: 'object-right-top',
            reverse: false,
          },
          {
            title: 'Feedback System for Freelancers and Clients',
            desc: 'Freelancers and Clients can provide feedback and ratings to each others about their aftermath of working.',
            points: ['Client feedback', 'Freelancer feedback', 'Display feedback on multiple segments'],
            bg: '#f8f5ff',
            imgPos: 'object-left-top',
            reverse: true,
          },
          {
            title: 'Subscription & Trial Period System for Freelancer',
            desc: 'Allow freelancers to purchase membership subscription to gain access to best premium features & connects to submit best proposals.',
            points: ['Verified Badge', '20+ Projects Catalogue', '24/7 Live Support'],
            bg: '#ffffff',
            imgPos: 'object-bottom',
            reverse: false,
          },
        ].map((feat) => (
          <div key={feat.title} style={{ background: feat.bg }}>
            <div className="container-page px-4 sm:px-6 lg:px-0 py-14 sm:py-16">
              <div className={`flex flex-col lg:flex-row gap-10 xl:gap-16 items-center ${feat.reverse ? 'lg:flex-row-reverse' : ''}`}>

                {/* Text */}
                <div className="flex-1 flex flex-col gap-5">
                  <h3 className="text-[22px] sm:text-[28px] font-bold text-[#0F1112] leading-tight">
                    {feat.title}
                  </h3>
                  <p className="text-[14px] sm:text-[15px] text-[#484848] leading-7">{feat.desc}</p>
                  <div className="flex flex-col gap-2.5">
                    {feat.points.map((pt) => (
                      <div key={pt} className="flex items-center gap-2.5 text-[14px] text-[#374151]">
                        <svg className="flex-shrink-0" width="18" height="18" viewBox="0 0 20 20" fill="none">
                          <circle cx="10" cy="10" r="10" fill="#22c55e" fillOpacity="0.15" />
                          <path d="M6 10l3 3 5-5" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {pt}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Screenshot */}
                <div className="flex-1 w-full">
                  <div className="rounded-xl overflow-hidden border border-[#E5E7EC] shadow-lg aspect-[4/3] relative">
                    <Image
                      src="/products/xilancer.png"
                      alt={feat.title}
                      fill
                      className={`object-cover ${feat.imgPos}`}
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ── Live Chat showcase ── */}
      <section className="pt-16 sm:pt-20 lg:pt-[100px] pb-0 overflow-hidden" style={{ background: '#f4f5f0' }}>
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="text-center mb-12">
            <h2 className="text-[32px] sm:text-[44px] font-bold text-[#0F1112] leading-tight mb-4">
              Live Chatting System for<br className="hidden sm:block" /> Freelancers and clients
            </h2>
            <p className="text-[#484848] text-[15px] sm:text-[17px] leading-7 max-w-[480px] mx-auto">
              Allow Client &amp; Freelancers to efficiently collaborate real time in their projects right into the Xilancer platform.
            </p>
          </div>
        </div>

        {/* Screenshot + green bg */}
        <div className="relative">
          {/* Dark green curved background */}
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{
              height: '55%',
              background: '#1a3d2b',
              borderRadius: '40px 40px 0 0',
            }}
          />

          {/* Screenshot */}
          <div className="container-page px-4 sm:px-6 lg:px-0 relative z-10">
            <div className="max-w-[860px] mx-auto relative">
              <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="/products/xilancer.png"
                  alt="Xilancer live chat system — real-time messaging between freelancers and clients"
                  width={860}
                  height={560}
                  className="w-full object-cover object-top"
                />
              </div>

              {/* Floating Xgenious badge */}
              <div
                className="absolute -right-4 sm:right-[-50px] top-[15%] w-[64px] h-[64px] rounded-full shadow-xl border-4 border-white overflow-hidden hidden sm:block"
                style={{ background: '#ec7161' }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-white text-[9px] font-bold text-center leading-tight px-1">xgenious</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tech stack ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-[380px] flex-shrink-0">
              <p className="text-[13px] font-medium text-[#6b7280] uppercase tracking-wider mb-3">Tech Stack</p>
              <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight">
                Modern stack. Self-hosted. You own it.
              </h2>
              <p className="text-[#484848] text-[15px] leading-7 mt-4">
                Xilancer is built on proven, battle-tested open-source technology. No proprietary lock-in — you get the source code and can deploy anywhere.
              </p>
              <Link
                href={DOCS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-[14px] mt-6 hover:underline"
                style={{ color: COLOR }}
              >
                View documentation
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TECH.map((t) => (
                <div
                  key={t.name}
                  className="flex items-start gap-3 rounded-xl border border-[#E5E7EC] p-5"
                >
                  <div
                    className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                    style={{ background: COLOR }}
                  />
                  <div>
                    <p className="text-[15px] font-semibold text-[#0F1112]">{t.name}</p>
                    <p className="text-[13px] text-[#6b7280] mt-0.5">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="py-16 sm:py-20 lg:py-[100px] bg-[#fafafa]">
        <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[560px] mx-auto text-center">
          <p className="text-[13px] font-medium text-[#6b7280] uppercase tracking-wider mb-3">Pricing</p>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-4">
            One-time purchase.<br />Own it forever.
          </h2>
          <p className="text-[#484848] text-[15px] leading-7 mb-10">
            Buy once on CodeCanyon. Get the full source code. Deploy to your own server. No monthly fees, no per-user charges, no vendor lock-in.
          </p>

          <div className="bg-white rounded-2xl border border-[#E5E7EC] p-8 text-left">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-[48px] font-bold text-[#0F1112]">$49</span>
              <span className="text-[#6b7280] text-[15px]">one-time</span>
            </div>
            <p className="text-[13px] text-[#6b7280] mb-8">Regular license — CodeCanyon. 6 months support included.</p>

            <div className="flex flex-col gap-3 mb-8">
              {[
                'Full source code — PHP + Vue.js',
                'Android & iOS mobile apps',
                'Free future updates',
                '6 months support from Xgenious',
                'Self-host on any server',
                'White-label — use your own brand',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-[14px] text-[#484848]">
                  <svg className="flex-shrink-0" width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="10" fill={COLOR} fillOpacity="0.1" />
                    <path d="M6 10l3 3 5-5" stroke={COLOR} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>

            <Link
              href={PURCHASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-white font-semibold text-[15px] rounded-full py-4 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: COLOR, boxShadow: `0 6px 20px ${COLOR}40` }}
            >
              Purchase on CodeCanyon
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="py-16 sm:py-20 lg:py-[100px] bg-white">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="text-center mb-12">
            <h2 className="text-[32px] sm:text-[44px] font-bold text-[#0F1112] leading-tight mb-4">
              What Our Customer Think<br className="hidden sm:block" /> About Xilancer
            </h2>
            <p className="text-[#484848] text-[15px] sm:text-[17px] leading-7 max-w-[520px] mx-auto">
              Access powerful tools designed to simplify project management, improve collaboration, and enhance the overall freelancing experience.
            </p>
            <div className="flex items-center justify-center gap-2 mt-5">
              <div className="flex items-center gap-0.5">
                {[1,2,3,4,5].map((s) => (
                  <svg key={s} width="16" height="16" viewBox="0 0 20 20" fill={s <= 4 ? '#f59e0b' : 'none'} stroke="#f59e0b" strokeWidth="1.2">
                    <polygon points="10 1 12.94 7.18 20 8.18 15 13.09 16.18 20 10 16.77 3.82 20 5 13.09 0 8.18 7.06 7.18 10 1" />
                  </svg>
                ))}
              </div>
              <span className="text-[14px] font-semibold text-[#0F1112]">4.36</span>
              <span className="text-[13px] text-[#6b7280]">· 45 reviews on</span>
              <Link
                href="https://codecanyon.net/item/xilancer-freelancer-marketplace-platform-with-services-projects/reviews/49358326"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-medium underline underline-offset-4"
                style={{ color: COLOR }}
              >
                CodeCanyon
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {REVIEWS.map((r) => (
              <div key={r.name} className="rounded-xl border border-[#E5E7EC] bg-white p-6 flex flex-col gap-3">
                {/* Stars + category */}
                <div className="flex items-center gap-2 flex-wrap">
                  <div className="flex items-center gap-0.5">
                    {[1,2,3,4,5].map((s) => (
                      <svg key={s} width="14" height="14" viewBox="0 0 20 20" fill={s <= r.rating ? '#f59e0b' : '#e5e7eb'}>
                        <polygon points="10 1 12.94 7.18 20 8.18 15 13.09 16.18 20 10 16.77 3.82 20 5 13.09 0 8.18 7.06 7.18 10 1" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[12px] text-[#6b7280]">For {r.category}</span>
                </div>

                {/* Body */}
                <p className="text-[13px] sm:text-[14px] text-[#374151] leading-6 flex-1">
                  {r.body}
                </p>

                {/* Reviewer */}
                <p className="text-[13px] font-medium" style={{ color: '#3b82f6' }}>
                  by {r.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Installation package ── */}
      <InstallationPackage
        packageTitle="Professional Setup + Free VPS for 1 Year"
        packageDescription="Get your platform live with professional installation, mobile apps on both stores, premium VPS hosting, and a full year of expert maintenance. Everything handled for you."
        price={499}
        originalPrice={4097}
        claimUrl="https://xgenious.com/our-products/xilancer-freelancer-marketplace-platform/#installation"
        items={[
          { title: 'Custom Professional Setup', description: 'Full white-glove installation', badge: 'Worth $199', badgeVariant: 'dark' },
          { title: 'Premium VPS Hosting (12 Months)', description: 'Lightning fast cloud infrastructure', badge: 'Worth $100', badgeVariant: 'dark' },
          { title: 'SSL Certificate & Security Hardening', description: 'End-to-end encryption enabled', badge: 'Included', badgeVariant: 'green' },
          { title: 'SEO Optimization Baseline', description: 'Configured for search visibility', badge: 'Free', badgeVariant: 'green' },
        ]}
        note="This package covers the complete deployment of one platform. The 1-year free VPS period begins immediately upon setup completion."
      />

      {/* ── FAQ ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[720px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-[13px] font-medium text-[#6b7280] uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight">
              Common questions about Xilancer freelancer marketplace script
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {faqSchema.mainEntity.map((item) => (
              <div key={item.name} className="rounded-xl border border-[#E5E7EC] p-6">
                <h3 className="text-[15px] font-semibold text-[#0F1112] mb-2">{item.name}</h3>
                <p className="text-[14px] text-[#484848] leading-6">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-[14px] text-[#484848]">
              More questions?{' '}
              <Link href="/contact" className="font-medium underline underline-offset-4" style={{ color: COLOR }}>
                Contact us
              </Link>
              {' '}or{' '}
              <Link href={DOCS_URL} target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-4" style={{ color: COLOR }}>
                read the docs
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
