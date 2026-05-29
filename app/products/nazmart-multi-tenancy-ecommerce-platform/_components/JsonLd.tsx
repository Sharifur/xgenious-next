import { FAQS, CODECANYON_REVIEWS, PURCHASE_URL, CANONICAL, BASE_URL, REGULAR_PRICE } from './constants';

export default function JsonLd() {
  const softwareApp = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Nazmart',
    applicationCategory: 'WebApplication',
    operatingSystem: 'Web, Linux',
    offers: {
      '@type': 'Offer',
      price: REGULAR_PRICE.toString(),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: PURCHASE_URL,
    },
    description: 'Nazmart is a multi-tenancy eCommerce SaaS platform built with Laravel and Vue.js. Launch a Shopify-like marketplace with subscription billing, custom domains, Flutter mobile apps, and 19+ payment gateways. One-time purchase from $69.',
    url: CANONICAL,
    author: { '@type': 'Organization', name: 'Xgenious', url: BASE_URL },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.51',
      reviewCount: '43',
      bestRating: '5',
      worstRating: '1',
    },
    review: CODECANYON_REVIEWS.slice(0, 5).map(r => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.name },
      reviewRating: { '@type': 'Rating', ratingValue: r.rating.toString(), bestRating: '5' },
      reviewBody: r.body,
    })),
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Launch a Multi-Tenancy eCommerce Platform with Nazmart',
    step: [
      { '@type': 'HowToStep', name: 'Create your subscription plans', text: 'Purchase Nazmart, upload to your Linux VPS, configure your database, and set your vendor subscription tiers.' },
      { '@type': 'HowToStep', name: 'Configure your marketplace branding', text: 'Set your platform domain, logo, and theme. Vendors choose their own store name and connect a custom domain.' },
      { '@type': 'HowToStep', name: 'Go live and onboard vendors', text: 'Vendors sign up, pick a plan, build their store, and go live. Your platform earns subscription revenue automatically.' },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }} />
    </>
  );
}
