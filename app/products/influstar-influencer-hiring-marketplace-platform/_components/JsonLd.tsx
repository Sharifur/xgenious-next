import { BASE_URL, CANONICAL, PURCHASE_URL, REGULAR_PRICE, FAQS } from './constants';

export default function JsonLd() {
  const softwareApp = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Influstar',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Marketplace',
    operatingSystem: 'Web, Linux, macOS',
    url: CANONICAL,
    description:
      'Influstar is a self-hosted influencer hiring marketplace script built on Laravel 12. Brands discover, hire, and pay influencers and content creators with built-in escrow payments, real-time chat with word filtering, service packages, custom offers, an influencer subscription system, promoted influencer listings, job posting, reviews, user moderation and account ban controls, 20+ payment gateways, and no-code drag & drop builders. One-time purchase with full PHP source code — no monthly fees.',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: String(REGULAR_PRICE),
      highPrice: '99',
      priceCurrency: 'USD',
      offerCount: '3',
      offers: [
        { '@type': 'Offer', name: 'Regular License', price: String(REGULAR_PRICE), priceCurrency: 'USD', url: PURCHASE_URL },
        { '@type': 'Offer', name: 'Regular License + Installation', price: '49', priceCurrency: 'USD', url: `${BASE_URL}/checkout?product=infustar-bundle-pack` },
        { '@type': 'Offer', name: 'Exclusive License', price: '99', priceCurrency: 'USD', url: `${BASE_URL}/checkout?product=infustar-exclusive-pack` },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '2',
      bestRating: '5',
      worstRating: '1',
    },
    author: { '@type': 'Organization', name: 'Xgenious', url: BASE_URL },
    publisher: { '@type': 'Organization', name: 'Xgenious', url: BASE_URL },
    softwareVersion: '1.3.0',
    softwareRequirements: 'PHP 8.3+, MySQL 8, Composer 2, Laravel 12, mod_rewrite',
    programmingLanguage: 'PHP',
    dateModified: '2026-01-27',
    datePublished: '2025-09-01',
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Launch an Influencer Marketplace with Influstar',
    description:
      'Install Influstar on your server, brand your marketplace, configure payment gateways and escrow, onboard influencers and brands, then go live and earn commission on every booking.',
    step: [
      { '@type': 'HowToStep', name: 'Install on Your Server', text: 'Upload Influstar to any PHP 8.3+ host or VPS, run the guided installer, and connect your MySQL 8 database.' },
      { '@type': 'HowToStep', name: 'Brand Your Marketplace', text: 'Set your logo, colours, niche categories, and commission rates, then design pages with the drag & drop builders.' },
      { '@type': 'HowToStep', name: 'Configure Payments & Onboard', text: 'Enable gateways from 20+ available, set up escrow and withdrawal rules, then open registration for influencers and brands.' },
      { '@type': 'HowToStep', name: 'Launch & Earn', text: 'Go live and earn commission on every booking plus recurring influencer subscriptions — no monthly platform fees.' },
    ],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Products', item: `${BASE_URL}/products` },
      { '@type': 'ListItem', position: 3, name: 'Influstar', item: CANONICAL },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}
