import { CANONICAL, FAQS } from './constants';

const BASE_URL = 'https://xgenious.com';
const TRUSTPILOT_URL = 'https://www.trustpilot.com/review/xgenious.com';

export default function JsonLd() {
  const software = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Genius Support',
    operatingSystem: 'Linux',
    applicationCategory: 'BusinessApplication',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description:
      'Free, open-source self-hosted support ticketing system built with Laravel. Includes customer portal with guest ticket submission (no login required), agent dashboard, admin panel, knowledge base, SLA management, email-to-ticket (IMAP), and real-time updates via Laravel Reverb WebSocket. MIT licensed.',
    url: CANONICAL,
    author: { '@type': 'Organization', name: 'Xgenious', url: BASE_URL },
    license: 'https://opensource.org/licenses/MIT',
    programmingLanguage: ['PHP'],
    dateModified: '2026-09-15',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4',
      reviewCount: '34',
      bestRating: '5',
      worstRating: '1',
      url: TRUSTPILOT_URL,
    },
  };

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Xgenious LLC',
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    sameAs: [TRUSTPILOT_URL, 'https://github.com/xgeniousllc'],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Free Software', item: `${BASE_URL}/free-software` },
      { '@type': 'ListItem', position: 3, name: 'Genius Support', item: CANONICAL },
    ],
  };

  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Genius Support Installation & Custom Setup',
    serviceType: 'Software Installation and Customization',
    description:
      'Professional installation, configuration, and white-label setup of Genius Support on your server. Includes email-to-ticket IMAP configuration, department and agent setup, branding, and deployment.',
    provider: { '@type': 'Organization', name: 'Xgenious LLC', url: BASE_URL },
    areaServed: 'Worldwide',
    offers: {
      '@type': 'Offer',
      description: 'Custom installation and setup service. Contact for pricing.',
      url: `${BASE_URL}/contact`,
      availability: 'https://schema.org/InStock',
    },
    url: `${BASE_URL}/contact`,
  };

  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Install Genius Support on Your Server',
    description: 'Set up a free self-hosted support portal in three steps.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Install on Your Server',
        text: 'Download Genius Support and run the installation script on Ubuntu 22.04 LTS with PHP 8.2+, MySQL 8.0, and Node.js 20. The guided installer handles database setup and environment configuration.',
        position: 1,
      },
      {
        '@type': 'HowToStep',
        name: 'Configure Email and Departments',
        text: 'Connect your IMAP inbox to enable email-to-ticket automation. Create departments, assign agents, and configure email reply templates from the admin panel.',
        position: 2,
      },
      {
        '@type': 'HowToStep',
        name: 'Go Live',
        text: 'Share the customer portal URL. Customers submit tickets, agents resolve them in real time via WebSocket, and email-to-ticket keeps every conversation in one place.',
        position: 3,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(software) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
