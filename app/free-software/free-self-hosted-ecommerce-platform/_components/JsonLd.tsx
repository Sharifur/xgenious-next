import { CANONICAL, FAQS } from './constants';

const BASE_URL = 'https://xgenious.com';

export default function JsonLd() {
  const software = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Genius Commerz',
    operatingSystem: 'Linux, Docker',
    applicationCategory: 'BusinessApplication',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description:
      'Genius Commerz is a free, self-hosted eCommerce platform for cross-border merchants and developers. 98 built-in integrations (39 payment gateways, 20 SMS gateways, 19 shipping carriers, 11 fraud checkers) across 213 countries and 155 currencies. MIT licensed, 0% commission.',
    url: CANONICAL,
    author: { '@type': 'Organization', name: 'Xgenious', url: BASE_URL },
    license: 'https://opensource.org/licenses/MIT',
    programmingLanguage: ['PHP', 'TypeScript'],
  };

  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Install Genius Commerz',
    description: 'Deploy the free, self-hosted eCommerce platform in four steps, no command line required.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Download the software',
        text: 'Download the full-source .zip archive.',
        position: 1,
      },
      {
        '@type': 'HowToStep',
        name: 'Unzip and upload to your server',
        text: 'Extract the archive and upload the files to your PHP 8.2+ hosting or VPS.',
        position: 2,
      },
      {
        '@type': 'HowToStep',
        name: 'Create a database and update .env',
        text: 'Create a MySQL 8 database, then set your DB_* values in the .env file.',
        position: 3,
      },
      {
        '@type': 'HowToStep',
        name: 'Ready to use',
        text: 'Log in with the default admin account and change the password immediately.',
        position: 4,
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
