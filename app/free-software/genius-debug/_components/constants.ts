export const COLOR = '#6C5FC7';
export const LIGHT_COLOR = '#EFECFB';
export const ERROR_RED = '#E5484D';
export const DARK_BG = '#0E0E14';
export const BASE_URL = 'https://xgenious.com';
export const CANONICAL = `${BASE_URL}/free-software/genius-debug`;

export const GITHUB_URL = 'https://github.com/XgeniousLLC/geniusDebug/archive/refs/heads/main.zip';
export const DOCS_URL = 'https://xgeniousllc.github.io/geniusDebug/index.html';
export const DEPLOY_GUIDE_URL = 'https://xgeniousllc.github.io/geniusDebug/deployment-guide.html';
export const INTEGRATION_GUIDE_URL = 'https://xgeniousllc.github.io/geniusDebug/integration.html';
export const LICENSE_UUID = '';

export const MODULES = [
  {
    name: 'Error Grouping',
    features: [
      'Deduplicates errors into Issues by stack-trace fingerprint',
      'Short, shareable issue IDs',
      'Automatic regression detection when a resolved issue comes back',
      'Full event context: request, user, environment, tags',
    ],
  },
  {
    name: 'Symbolication',
    features: [
      'Maps minified stack frames back to original file, line, and function',
      'Source context around the failing line',
      'Debug-ID source maps stored in Cloudflare R2',
      'Works with standard Sentry source-map upload tooling',
    ],
  },
  {
    name: 'GitHub Integration',
    features: [
      'One-click GitHub App install — personal or org',
      '"Open in GitHub" on every stack frame',
      'Suspect-commit detection for each issue',
      'Auto-resolve when a commit message says "fixes SHORT-ID"',
    ],
  },
  {
    name: 'Distributed Traces',
    features: [
      'Span waterfall with per-span timing',
      'Error markers placed directly on the trace',
      'Linked back to the issue that fired',
    ],
  },
  {
    name: 'Session Replay',
    features: [
      'On-error, privacy-masked DOM replay',
      'Error-marked timeline — jump straight to the failure',
      'See exactly what the user did before it broke',
    ],
  },
  {
    name: 'Smart Alerts',
    features: [
      'New-issue, regression, and frequency-spike rules',
      'Dedupe, throttle, and snooze to avoid alert fatigue',
      'Email delivery via AWS SES',
    ],
  },
  {
    name: 'Fast Triage UX',
    features: [
      'Filters, sort, and global search (⌘K)',
      'Keyboard navigation — j/k/e/x/↵',
      'Merge issues, assign to members, editable highlights',
    ],
  },
  {
    name: 'Safety & Scale Controls',
    features: [
      'Remote kill switch — disable ingest with no redeploy',
      'Back-pressure shedding under load, dead-letter queue for poison events',
      'Time-partitioned events with auto-rolled monthly partitions and retention purges',
      'Multi-project support with per-project DSN keys and roles',
    ],
  },
];

export const TECH_STACK = [
  { name: 'NestJS + TypeScript', role: 'Ingest, API, and worker services', logo: '/tech/nestjs.svg' },
  { name: 'PostgreSQL (Drizzle ORM)', role: 'Issues, events, and project data', logo: '/tech/postgresql.svg' },
  { name: 'Redis (BullMQ)', role: 'Ingest queue and background processing', logo: null },
  { name: 'Cloudflare R2', role: 'Source maps and session replay storage (optional)', logo: '/tech/cloudflare.svg' },
  { name: 'AWS SES', role: 'Email alerts (optional)', logo: '/tech/aws.svg' },
  { name: 'React + Zustand + Tailwind', role: 'Dashboard SPA', logo: '/tech/react.svg' },
];

export const SERVER_REQUIREMENTS = [
  { label: 'Runtime', value: 'Docker 24+ & Compose v2 (or Node 20 LTS)' },
  { label: 'Database', value: 'PostgreSQL 16' },
  { label: 'Queue', value: 'Redis 7 (BullMQ)' },
  { label: 'RAM / vCPU', value: '~2 GB / 2 vCPU for a small team' },
  { label: 'Disk', value: '~20 GB' },
  { label: 'Optional', value: 'Cloudflare R2 · AWS SES · GitHub App' },
];

export const FAQS = [
  {
    q: 'Do I have to replace my Sentry SDK?',
    a: 'No. Genius Debug speaks the Sentry envelope protocol, so you keep the official @sentry/nextjs (or any Sentry SDK) you already have installed and just repoint the DSN at your self-hosted instance. No code rewrite.',
  },
  {
    q: 'Will it slow down my app?',
    a: 'No. The SDK path is async and best-effort, and ingest is gated by a remote kill switch. If Genius Debug is down or overloaded, your app is unaffected — it just stops shipping events, nothing blocks.',
  },
  {
    q: 'What does it cost?',
    a: 'The software is free and open-source. You only pay for the server you run it on — a small VPS is enough for a small team. There is no per-event, per-replay, or per-seat pricing.',
  },
  {
    q: 'Do I need Cloudflare R2 or AWS SES to use it?',
    a: 'No. The core capture, group, and triage loop works without them. Cloudflare R2 adds source-map symbolication and replay playback; AWS SES adds email alerts. Both are optional add-ons, not requirements.',
  },
  {
    q: 'Does it support Laravel / PHP?',
    a: 'The ingest backend is platform-agnostic and already groups platform:"php" events, so a Laravel app can send events to it today. A first-class Laravel integration guide is planned for v2 — for now, Next.js / React via @sentry/nextjs is the primary supported path.',
  },
  {
    q: 'How is this different from GlitchTip, the other popular self-hosted Sentry alternative?',
    a: 'GlitchTip is lighter to run but does not implement Session Replay, Profiling, or trace waterfalls — calls to those APIs fail silently. Genius Debug keeps distributed traces and on-error session replay working, so you are not trading away the features that make debugging fast.',
  },
  {
    q: 'Why not just self-host Sentry itself instead of a separate tool?',
    a: 'Self-hosted Sentry needs Kafka, ClickHouse, Snuba, Relay, Symbolicator, Postgres, Redis, Memcached, and dozens of worker containers — 16GB+ RAM as a bare minimum, more like 32GB if it shares a box with anything else. Genius Debug runs on ~2GB RAM / 2 vCPU because it only implements the triage loop a small team actually uses, not Sentry’s full platform.',
  },
  {
    q: 'Can I migrate off Sentry SaaS?',
    a: 'Yes. Swap the DSN, disable Sentry’s source-map upload step in CI, and add Genius Debug’s uploader instead. No application code changes are required.',
  },
  {
    q: 'Is Genius Debug open source — what license is it under?',
    a: 'Yes, the full source is included with your download. A formal LICENSE file (MIT is the intended license) is being finalized — check it before relying on Genius Debug for a commercial redistribution.',
  },
];
