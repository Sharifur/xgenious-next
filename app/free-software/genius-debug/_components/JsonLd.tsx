import { CANONICAL, FAQS } from './constants';

const BASE_URL = 'https://xgenious.com';

export default function JsonLd() {
  const software = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Genius Debug',
    operatingSystem: 'Docker, Linux',
    applicationCategory: 'DeveloperApplication',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description:
      'Genius Debug is a free, open-source, self-hosted Sentry alternative for JavaScript and Next.js/React apps. Captures runtime errors, groups them into issues, symbolicates stack traces, and pairs each error with a distributed trace and a short session replay — reusing the standard Sentry SDK.',
    url: CANONICAL,
    author: { '@type': 'Organization', name: 'Xgenious', url: BASE_URL },
    programmingLanguage: ['TypeScript', 'JavaScript'],
  };

  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Self-Host Genius Debug',
    description: 'Deploy a free, self-hosted Sentry alternative in three steps.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Download and Configure',
        text: 'Download Genius Debug, extract the archive, and copy .env.example to .env, setting JWT_SECRET, APP_ENCRYPTION_KEY, and POSTGRES_PASSWORD.',
        position: 1,
      },
      {
        '@type': 'HowToStep',
        name: 'Launch the Stack',
        text: 'Run docker compose up -d --build to start Postgres, Redis, the ingest service, API, workers, and the web dashboard.',
        position: 2,
      },
      {
        '@type': 'HowToStep',
        name: "Point Your Sentry SDK at Your Instance",
        text: 'Repoint your existing @sentry/nextjs (or other Sentry SDK) DSN at your self-hosted ingest endpoint — no application code changes required.',
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
