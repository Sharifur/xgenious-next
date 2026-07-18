import { CANONICAL, FAQS } from './constants';

const BASE_URL = 'https://xgenious.com';

export default function JsonLd() {
  const software = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Genius Campaign',
    operatingSystem: 'Linux',
    applicationCategory: 'BusinessApplication',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description:
      'Free, open-source self-hosted email marketing platform built with Laravel. Includes sequence automation, webhooks, built-in templates, AI-assisted writing, AWS SES and Google Workspace sending, and email verification.',
    url: CANONICAL,
    author: { '@type': 'Organization', name: 'Xgenious', url: BASE_URL },
    license: 'https://opensource.org/licenses/MIT',
    programmingLanguage: ['PHP'],
  };

  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Install Genius Campaign on Your Server',
    description: 'Set up a free self-hosted email marketing platform in three steps.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Install on Your Server',
        text: 'Download Genius Campaign and run the installation script on Ubuntu 22.04 LTS with PHP 8.2+ and MySQL 8.0. The guided installer handles database setup and environment configuration.',
        position: 1,
      },
      {
        '@type': 'HowToStep',
        name: 'Connect Sending & Verify Domain',
        text: 'Add your AWS SES or Google Workspace credentials, then verify your sending domain with SPF, DKIM, and DMARC records so campaigns land in the inbox.',
        position: 2,
      },
      {
        '@type': 'HowToStep',
        name: 'Build Your First Sequence and Go Live',
        text: 'Import contacts, pick a built-in template or write one with AI assistance, build your first automated sequence, and send.',
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
