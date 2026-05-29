import { CANONICAL, REGULAR_PRICE } from './constants';

export default function JsonLd() {
  const software = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Fundorex',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: String(REGULAR_PRICE),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    description:
      'Fundorex is a self-hosted crowdfunding platform script built on Laravel. Launch a donation and fundraising website with campaign management, 20+ payment gateways, mobile app, and admin commission controls.',
    url: CANONICAL,
    author: { '@type': 'Organization', name: 'Xgenious', url: 'https://xgenious.com' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '33',
    },
  };

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Fundorex?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fundorex is a self-hosted crowdfunding platform script built on Laravel. Launch a fundraising website with campaign management, 20+ payment gateways, event ticketing, and a Flutter mobile app.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which payment gateways does Fundorex support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fundorex includes 20+ payment gateways: Stripe, PayPal, Razorpay, 2Checkout, Skrill, Payoneer, Wise, Square, Cinetpay, Paytabs, SSLCommerz, and more.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Fundorex include a mobile app?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The Combo Pack and Extended License include a Flutter-built mobile app for Android and iOS. Donors can browse campaigns and donate directly from the app.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Fundorex a one-time purchase?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Fundorex is a one-time purchase starting at $49. No monthly fees. No platform commission. You keep 100% of what your campaigns raise.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I customize Fundorex?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Fundorex ships with full Laravel source code. The admin panel includes color customization, drag-and-drop builders, multi-language support, and RTL layout — all without touching code.',
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(software) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  );
}
