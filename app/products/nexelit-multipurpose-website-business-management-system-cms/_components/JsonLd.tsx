import { BASE_URL, CANONICAL, PURCHASE_URL, DEMO_URL, REGULAR_PRICE, FAQS } from './constants';

export default function JsonLd() {
  const softwareApp = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Nexelit',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: CANONICAL,
    description:
      'Nexelit is a multipurpose website and business CMS built on Laravel with 9 built-in business modules (eCommerce, events, courses, appointments, donations, job posting, service packages, support tickets, knowledgebase), 4 drag & drop builders, 20+ payment gateways, RTL support, and a support ticket system. One-time purchase with full source code.',
    offers: {
      '@type': 'Offer',
      price: String(REGULAR_PRICE),
      priceCurrency: 'USD',
      url: PURCHASE_URL,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.72',
      reviewCount: '183',
      bestRating: '5',
      worstRating: '1',
    },
    author: {
      '@type': 'Organization',
      name: 'Xgenious',
      url: BASE_URL,
    },
    softwareVersion: '4.1.0',
    dateModified: '2025-09-22',
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
    name: 'How to Launch a Website with Nexelit CMS',
    description: 'Install Nexelit on your server, enable your business modules, design with the drag & drop builders, connect payment gateways, and go live.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Install on Your Server',
        text: 'Upload Nexelit to any PHP/Laravel host or VPS, run the guided installer, and connect your database.',
      },
      {
        '@type': 'HowToStep',
        name: 'Enable Your Business Modules',
        text: 'Toggle on only the modules you need — eCommerce, events, appointments, courses, donations, jobs, service packages, support tickets, knowledgebase — or all nine.',
      },
      {
        '@type': 'HowToStep',
        name: 'Design with the Builders',
        text: 'Pick one of 4 homepage variants, then drag & drop widgets to build your pages. Set fonts, colors, and menus without code.',
      },
      {
        '@type': 'HowToStep',
        name: 'Connect Payments & Go Live',
        text: 'Enable from 20+ payment gateways, generate your sitemap, and start taking orders, bookings, or donations the same day.',
      },
    ],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Products', item: `${BASE_URL}/products` },
      { '@type': 'ListItem', position: 3, name: 'Nexelit', item: CANONICAL },
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
