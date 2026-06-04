import { CANONICAL, FAQS } from './constants';

const BASE_URL = 'https://xgenious.com';

export default function JsonLd() {
  const software = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Genius Support',
    operatingSystem: 'Linux',
    applicationCategory: 'BusinessApplication',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description:
      'Free, open-source self-hosted support portal and ticketing system built with Laravel. Includes customer portal, agent dashboard, admin panel, knowledge base, email-to-ticket (IMAP), and real-time updates via Laravel Reverb WebSocket.',
    url: CANONICAL,
    author: { '@type': 'Organization', name: 'Xgenious', url: BASE_URL },
    license: 'https://opensource.org/licenses/MIT',
    programmingLanguage: ['PHP'],
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
