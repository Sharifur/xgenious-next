import { BASE_URL, CANONICAL, PURCHASE_URL, DEMO_URL, REGULAR_PRICE, FAQS } from './constants';

export default function JsonLd() {
  const softwareApp = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'ListOcean',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: CANONICAL,
    description:
      'ListOcean is a classified ads and listing platform built on Laravel with real-time live chat, Google Maps location filtering, tiered membership plans, a digital wallet, multiple ad formats, SMS notifications, 4 drag & drop builders, and GDPR compliance. One-time purchase with full source code.',
    offers: {
      '@type': 'Offer',
      price: String(REGULAR_PRICE),
      priceCurrency: 'USD',
      url: PURCHASE_URL,
    },
    author: {
      '@type': 'Organization',
      name: 'Xgenious',
      url: BASE_URL,
    },
    softwareVersion: '2.0',
    dateModified: '2026-06-25',
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
    name: 'How to Launch a Classified Ads Platform with ListOcean',
    description: 'Install ListOcean on your server, configure categories and locations, enable premium plugins, and go live to start accepting listings and monetizing your marketplace.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Install on Your Server',
        text: 'Upload ListOcean to any PHP/Laravel-compatible host, run the guided installer, and connect your database.',
      },
      {
        '@type': 'HowToStep',
        name: 'Configure Categories & Locations',
        text: 'Set up your listing categories, subcategories, and location hierarchy from the admin panel.',
      },
      {
        '@type': 'HowToStep',
        name: 'Enable Premium Plugins',
        text: 'Activate the Live Chat, Membership, Wallet, and SMS Gateway plugins from the plugin manager with one click each.',
      },
      {
        '@type': 'HowToStep',
        name: 'Go Live & Start Monetizing',
        text: 'Publish your site and start earning from featured placements, membership subscriptions, and ad banners.',
      },
    ],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Products', item: `${BASE_URL}/products` },
      { '@type': 'ListItem', position: 3, name: 'ListOcean', item: CANONICAL },
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
