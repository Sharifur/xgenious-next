import { BASE_URL, CANONICAL, PURCHASE_URL, REGULAR_PRICE, FAQS } from './constants';

export default function JsonLd() {
  const softwareApp = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'SafeCart',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'eCommerce',
    operatingSystem: 'Web, Linux, macOS',
    url: CANONICAL,
    description:
      'SafeCart is a self-hosted eCommerce platform built on Laravel 10 that works as a single-vendor store or a full multi-vendor marketplace — the same codebase supports both models. It ships with separate admin, vendor, and customer dashboards, three Flutter mobile apps (Customer, Vendor, Delivery Man), 26+ payment gateways, a POS system with barcode scanner, live delivery tracking, campaign countdown timers, a digital wallet, advanced inventory management, and 4 no-code builders. One-time purchase with full PHP source code — no monthly fees.',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: String(REGULAR_PRICE),
      highPrice: '199',
      priceCurrency: 'USD',
      offerCount: '3',
      offers: [
        { '@type': 'Offer', name: 'Regular License', price: String(REGULAR_PRICE), priceCurrency: 'USD', url: PURCHASE_URL },
        { '@type': 'Offer', name: 'Vendor Bundle', price: '99', priceCurrency: 'USD', url: `${BASE_URL}/checkout?product=safecart-bundle-pack` },
        { '@type': 'Offer', name: 'Exclusive Pack', price: '199', priceCurrency: 'USD', url: `${BASE_URL}/checkout?product=safecart-exclusive-pack` },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '3.36',
      reviewCount: '22',
      bestRating: '5',
      worstRating: '1',
    },
    author: {
      '@type': 'Organization',
      name: 'Xgenious',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Xgenious',
      url: BASE_URL,
    },
    softwareVersion: '2.4.0',
    softwareRequirements: 'PHP 8.1+, MySQL 8.x, Composer 2, Laravel 10, mod_rewrite',
    programmingLanguage: 'PHP',
    dateModified: '2026-06-25',
    datePublished: '2023-01-01',
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Launch a Multi-Vendor Marketplace with SafeCart',
    description:
      'Install SafeCart on your server, onboard vendors, configure payment gateways and plugins, then go live and start collecting commission on every sale.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Install on Your Server',
        text: 'Upload SafeCart to any PHP 8.1+ host or VPS, run the guided installer, and connect your database.',
      },
      {
        '@type': 'HowToStep',
        name: 'Onboard Your Vendors',
        text: 'Open vendor registration or invite merchants, set commission rates, and approve vendors before they go live.',
      },
      {
        '@type': 'HowToStep',
        name: 'Configure Payments & Plugins',
        text: 'Enable payment gateways from 26+ available and activate the Live Chat, Delivery Man, Refund, and POS plugins in one click each.',
      },
      {
        '@type': 'HowToStep',
        name: 'Launch & Start Earning',
        text: 'Go live, run promotional campaigns, and collect commission on every vendor sale from day one.',
      },
    ],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Products', item: `${BASE_URL}/products` },
      { '@type': 'ListItem', position: 3, name: 'SafeCart', item: CANONICAL },
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
