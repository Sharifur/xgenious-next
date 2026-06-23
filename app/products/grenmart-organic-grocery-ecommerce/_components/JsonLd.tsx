import { FAQS, PURCHASE_URL, CANONICAL, BASE_URL, REGULAR_PRICE, EXCLUSIVE_PRICE } from './constants';

export default function JsonLd() {
  const softwareApp = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Grenmart — Organic & Grocery Laravel eCommerce',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Linux, PHP',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: REGULAR_PRICE.toString(),
      highPrice: EXCLUSIVE_PRICE.toString(),
      priceCurrency: 'USD',
      offerCount: '3',
      availability: 'https://schema.org/InStock',
      url: PURCHASE_URL,
    },
    description:
      'Grenmart is an organic grocery and multipurpose eCommerce platform built on Laravel. It ships with a no-code drag & drop page builder, 50+ widgets, 3 home page variants, 20+ payment gateways, and advanced inventory, shipping, tax, coupon, and campaign systems. One-time purchase with full source code from $39.',
    url: CANONICAL,
    author: { '@type': 'Organization', name: 'Xgenious', url: BASE_URL },
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
    name: 'How to Launch an Online Grocery Store with Grenmart',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Install on Your Server',
        text: 'Upload Grenmart to any PHP/Laravel host or VPS, run the guided installer, and connect your database.',
      },
      {
        '@type': 'HowToStep',
        name: 'Add Products & Categories',
        text: 'Import your catalog with attributes, variants, and stock, then configure tax and shipping zones once.',
      },
      {
        '@type': 'HowToStep',
        name: 'Design With the Page Builder',
        text: 'Pick one of 3 home variants and drag & drop 50+ widgets to brand your storefront — no code required.',
      },
      {
        '@type': 'HowToStep',
        name: 'Connect Gateways & Go Live',
        text: 'Enable from 20+ payment gateways, generate your sitemap, and launch. Start taking orders the same day.',
      },
    ],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Products', item: `${BASE_URL}/products` },
      { '@type': 'ListItem', position: 3, name: 'Grenmart — Organic & Grocery eCommerce', item: CANONICAL },
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
