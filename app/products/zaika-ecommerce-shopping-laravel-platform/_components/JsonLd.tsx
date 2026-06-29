import { FAQS, CANONICAL, BASE_URL, REGULAR_PRICE, EXCLUSIVE_PRICE } from './constants';

export default function JsonLd() {
  const softwareApp = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Zaika — Single Vendor eCommerce Laravel Platform',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Linux, PHP',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: REGULAR_PRICE.toString(),
      highPrice: EXCLUSIVE_PRICE.toString(),
      priceCurrency: 'USD',
      offerCount: '3',
      availability: 'https://schema.org/InStock',
      url: `${CANONICAL}#pricing`,
    },
    description:
      'Zaika is a single-vendor eCommerce CMS and shopping platform built on Laravel. It ships with a no-code drag & drop page builder, 30+ widgets, 15+ payment gateways, and advanced inventory, shipping, tax, coupon, and campaign systems. One-time purchase with full source code from $39.',
    url: CANONICAL,
    image: `${BASE_URL}/products/zaika/hero-storefront.png`,
    screenshot: `${BASE_URL}/products/zaika/hero-storefront.png`,
    softwareVersion: '2.1.0',
    author: { '@type': 'Organization', name: 'Xgenious', url: BASE_URL },
    publisher: { '@type': 'Organization', name: 'Xgenious', url: BASE_URL },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.4',
      bestRating: '5',
      ratingCount: '20',
    },
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Launch a Single Vendor Online Store with Zaika',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Install on Your Server',
        text: 'Upload Zaika to any PHP/Laravel host or VPS, run the guided installer, and connect your database.',
      },
      {
        '@type': 'HowToStep',
        name: 'Add Products & Categories',
        text: 'Build your catalog with attributes, variants, and stock, then configure tax and shipping zones once.',
      },
      {
        '@type': 'HowToStep',
        name: 'Design With the Page Builder',
        text: 'Drag & drop 30+ widgets to brand your storefront and shop layouts — no code required.',
      },
      {
        '@type': 'HowToStep',
        name: 'Connect Gateways & Go Live',
        text: 'Enable from 15+ payment gateways, generate your sitemap, and launch. Start taking orders the same day.',
      },
    ],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Products', item: `${BASE_URL}/products` },
      { '@type': 'ListItem', position: 3, name: 'Zaika — Single Vendor eCommerce', item: CANONICAL },
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
