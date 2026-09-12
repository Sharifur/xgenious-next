export const COLOR = '#6366F1';
export const COLOR_HOVER = '#5457EC';
export const COLOR_GRADIENT_END = '#4F46E5';
export const LIGHT_COLOR = '#EEF0FD';
export const DARK_BG = '#0B0C0F';
export const BASE_URL = 'https://xgenious.com';
export const CANONICAL = `${BASE_URL}/free-software/genius-campaign`;

export const GITHUB_URL = 'https://github.com/XgeniousLLC/geniousCampaign/archive/refs/heads/main.zip';
export const DOCS_URL = 'https://xgeniousllc.github.io/geniousCampaign/#/';
export const DEPLOY_GUIDE_URL = 'https://xgeniousllc.github.io/geniousCampaign/#/docs/DEPLOY';
export const PUBLIC_API_URL = 'https://xgeniousllc.github.io/geniousCampaign/#/docs/PUBLIC_API';
export const LICENSE_UUID = '612ad2e7-d451-428b-b962-9ee7fa3ed0fc';

export const MODULES = [
  {
    name: 'Contacts, Lists & Tags',
    features: [
      'CSV import with arbitrary column mapping & real-time progress',
      'Pick-or-create lists/tags at import, server-side pagination & bulk actions',
      'Custom fields (text/number/date/url/boolean/dropdown) per contact',
    ],
  },
  {
    name: 'Template Editor',
    features: [
      'Rich-text + spintax, multi-subject & preview-text shuffle',
      'Conditional if/else with variable defaults, AI-assisted copy (OpenAI/DeepSeek)',
      'CTA button/link controls, paste-and-drop image upload, reusable across campaigns',
    ],
  },
  {
    name: 'Sequences',
    features: [
      'Multi-step drip with per-contact enrollment, pause/resume mid-sequence',
      'A/B step variants — multiple templates per step, Stats tab (enrolled/open/click)',
      'Per-sequence sender override, enrolled date/last step/last executed time',
    ],
  },
  {
    name: 'Campaigns',
    features: [
      'One-off sends by list/tag/hand-picked, schedule for later or run-for-real',
      'Open/click/delivered tracking with engagement analytics per campaign',
      'Sender override (From name/reply-to), search/filter on detail view',
    ],
  },
  {
    name: 'Email Verification',
    features: [
      'Bulk checks before you send + per-contact click-to-verify',
      'Reoon primary, NeverBounce fallback — auto-suppresses risky/invalid',
      'Live bulk-verify progress, protects sender reputation',
    ],
  },
  {
    name: 'Triggers & Webhooks',
    features: [
      'Auto-enroll on tag added, field changed, list joined, or HMAC webhook',
      'Webhook-based trigger + fired-events history',
      'Connect your stack without polling',
    ],
  },
  {
    name: 'Public API',
    features: [
      'API-key endpoint for forms/automation — push contacts, idempotent enroll',
      'Remove from list/tags/sequences, stop-all, rate-limited & expiring keys',
    ],
  },
  {
    name: 'Sender Rotation',
    features: [
      'Rotate across multiple AWS SES + Gmail Workspace accounts, quota-aware',
      'Per-account named credentials, test-email button, delivers click/open tracking',
      'Protects deliverability by spreading volume',
    ],
  },
  {
    name: 'Team & Audit',
    features: [
      'RBAC: owner/editor/viewer — global guards, live-validated JWT, last-owner protection',
      'Full audit log (now includes role changes) + global suppression checked before every send',
      'Team management in Administration → Team, clear email log by retention window',
    ],
  },
];

export const TECH_STACK = [
  { name: 'NestJS', role: 'API and background job services', logo: '/tech/nestjs.svg' },
  { name: 'PostgreSQL + Drizzle ORM', role: 'Contacts, campaigns, and sequence data', logo: '/tech/postgresql.svg' },
  { name: 'BullMQ + Redis', role: 'Sequence and campaign send queue', logo: null },
  { name: 'React (Vite)', role: 'Admin console frontend', logo: '/tech/react.svg' },
  { name: 'Tailwind CSS', role: 'UI styling', logo: '/tech/tailwind.svg' },
  { name: 'Zustand', role: 'Frontend state management', logo: null },
];

export const SERVER_REQUIREMENTS = [
  { label: 'Runtime', value: 'Docker (recommended) or Node 20+' },
  { label: 'Database', value: 'PostgreSQL' },
  { label: 'Queue', value: 'Redis (BullMQ)' },
  { label: 'Sending', value: 'Your own AWS SES or Gmail Workspace credentials' },
  { label: 'Storage', value: 'Cloudflare R2 (optional, for attachments)' },
  { label: 'Deploy path', value: 'docker compose up or bare-metal' },
];

export const FAQS = [
  {
    q: 'Does my email actually route through Xgenious or a third-party server?',
    a: 'No. Genius Campaign connects directly to your own AWS SES or Gmail Workspace account, and your own Cloudflare R2 bucket if you use one. Calls go straight from your deployment to AWS/Google/Cloudflare; nothing proxies through a third-party server, including ours.',
  },
  {
    q: 'Is Genius Campaign really free with no limitations?',
    a: 'Yes. MIT licensed, confirmed in the repository LICENSE file. Every feature is included at no cost: no paid tier, no per-contact pricing, no feature locks.',
  },
  {
    q: 'What do the AI writing features actually do?',
    a: 'The template editor includes AI-assisted copywriting via OpenAI or DeepSeek, plus spintax variants for subject line and body rotation. It drafts and suggests; you review and send.',
  },
  {
    q: 'What is sender rotation, and why does it matter?',
    a: 'Genius Campaign rotates sends across your connected AWS SES and Gmail Workspace accounts automatically, tracking each account’s quota. Spreading volume across senders protects deliverability instead of pushing everything through one address.',
  },
  {
    q: 'How does email verification work?',
    a: 'Before a campaign sends, contacts are checked against Reoon (primary) with NeverBounce as a fallback provider. Invalid and risky addresses are flagged so your bounce rate, and sender reputation, stays healthy.',
  },
  {
    q: 'Can I trigger sequences from my own app or forms?',
    a: 'Yes. Contacts can auto-enroll into a sequence on a tag added, a field changed, a list joined, or an inbound HMAC-signed webhook. There’s also an API-key-authenticated public API for pushing contacts in from external forms or automation tools.',
  },
  {
    q: 'How do I deploy it?',
    a: 'docker compose up is the recommended path and covers Postgres, Redis, the API, and the web console. Bare-metal deployment is also documented, along with the full environment variable reference for production.',
  },
  {
    q: 'How is this different from Smartlead, Instantly, or Mailchimp?',
    a: 'Smartlead and Instantly charge per-tier monthly fees that scale with contacts and send volume; Mailchimp scales similarly. Genius Campaign is a one-time free download (self-hosted, MIT licensed, full source code) with no per-contact or per-send fee, and your data never leaves your infrastructure.',
  },
  {
    q: 'Can I modify the source code or white-label it for clients?',
    a: 'Yes. The MIT license permits modification, redistribution, and commercial use, including client deployments. Replace the branding, run it under your own domain, and build on top of it without restriction.',
  },
];
