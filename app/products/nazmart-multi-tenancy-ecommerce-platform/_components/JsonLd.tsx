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
    description: 'Nazmart is a multi-tenancy eCommerce SaaS platform built with Laravel. Launch a Shopify-like marketplace with vendor subscription billing, custom domains per store, Flutter mobile apps, and 19+ payment gateways. One-time purchase from $69.',
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
      { '@type': 'HowToStep', name: 'Install & Configure', text: 'Upload Nazmart to your Linux VPS, configure your database, domain, and payment gateways in under an hour.' },
      { '@type': 'HowToStep', name: 'Create Vendor Subscription Plans', text: 'Define monthly and yearly pricing tiers. Set storage limits, product quotas, and feature access per plan.' },
      { '@type': 'HowToStep', name: 'Vendors Launch — You Collect Revenue', text: 'Vendors register, pick a theme, add their products, and go live. You earn recurring subscription income automatically.' },
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
