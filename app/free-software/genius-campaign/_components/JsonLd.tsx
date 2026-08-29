import { CANONICAL, FAQS } from './constants';

const BASE_URL = 'https://xgenious.com';

export default function JsonLd() {
  const software = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Genius Campaign',
    operatingSystem: 'Docker, Linux',
    applicationCategory: 'BusinessApplication',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description:
      'Genius Campaign is a free, open-source, self-hosted email marketing and outreach platform. Contacts, templates, sequences, campaigns, deliverability, and sender rotation in one console. Bring your own AWS SES, Gmail Workspace, and Cloudflare R2.',
    url: CANONICAL,
    author: { '@type': 'Organization', name: 'Xgenious', url: BASE_URL },
    license: 'https://opensource.org/licenses/MIT',
    programmingLanguage: ['TypeScript', 'JavaScript'],
  };

  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Self-Host Genius Campaign',
    description: 'Deploy a free, self-hosted email marketing and outreach platform in three steps.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Deploy',
        text: 'Run docker compose up to start Postgres, Redis, the API, and the web console. Bare-metal deployment is documented as an alternative.',
        position: 1,
      },
      {
        '@type': 'HowToStep',
        name: 'Connect Sending and Verify Domain',
        text: 'Add your AWS SES or Gmail Workspace credentials, then verify your sending domain with SPF, DKIM, and DMARC records.',
        position: 2,
      },
      {
        '@type': 'HowToStep',
        name: 'Import Contacts and Send',
        text: 'Import contacts by CSV, build a sequence or campaign with the AI-assisted template editor, and send; verification runs before dispatch.',
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
