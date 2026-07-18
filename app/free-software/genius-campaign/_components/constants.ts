export const COLOR = '#16a34a';
export const LIGHT_COLOR = '#dcfce7';
export const BASE_URL = 'https://xgenious.com';
export const CANONICAL = `${BASE_URL}/free-software/genius-campaign`;
export const DEMO_URL = '';
export const DOCS_URL = '';
export const GITHUB_URL = '';
export const LICENSE_UUID = '';

export const MODULES = [
  {
    name: 'Sequences & Automation',
    features: [
      'Drip campaign builder — multi-step email sequences',
      'Behavioral triggers — send based on subscriber actions',
      'Delay and condition steps between sequence emails',
      'Pause, resume, or exit subscribers from a running sequence',
    ],
  },
  {
    name: 'Webhooks & Triggers',
    features: [
      'Inbound webhooks — start a sequence from any external event',
      'Outbound webhooks — push campaign and email events to other systems',
      'Trigger sequences from signups, purchases, or custom app events',
      'JSON payloads for easy integration with your existing stack',
    ],
  },
  {
    name: 'Email Templates & AI Writing',
    features: [
      'Built-in email templates for common campaign types',
      'AI-assisted subject line and email copy suggestions',
      'Drag-and-drop content blocks, no HTML required',
      'Save custom templates for reuse across campaigns',
    ],
  },
  {
    name: 'Sending Infrastructure',
    features: [
      'AWS SES integration for high-deliverability sending',
      'Google Workspace support for sending and syncing mail',
      'Configurable sending domains and reply-to addresses',
      'Queue-based dispatch so large sends do not block the app',
    ],
  },
  {
    name: 'Email Verification',
    features: [
      'Validate recipient addresses before a campaign sends',
      'Flag invalid, risky, or undeliverable addresses',
      'Protect sender reputation by reducing bounce rate',
      'Keep contact lists clean as they grow',
    ],
  },
  {
    name: 'Contacts & Analytics',
    features: [
      'Contact list management with segmentation',
      'Group and filter contacts for targeted sends',
      'Campaign analytics — opens, clicks, and engagement',
      'Track sequence performance over time',
    ],
  },
];

export const TECH_STACK = [
  { name: 'Laravel', role: 'PHP backend, routing, ORM, queues', logo: '/tech/laravel.svg' },
  { name: 'PHP 8.2+', role: 'Application runtime', logo: '/tech/php.svg' },
  { name: 'MySQL 8.0', role: 'Primary relational database', logo: '/tech/mysql.svg' },
  { name: 'AWS SES', role: 'Transactional and campaign email sending', logo: '/tech/aws.svg' },
  { name: 'Queue Worker', role: 'Background sequence and campaign dispatch', logo: null },
  { name: 'Google Workspace API', role: 'Send and sync via Google Workspace', logo: null },
];

export const SERVER_REQUIREMENTS = [
  { label: 'OS', value: 'Ubuntu 22.04 LTS' },
  { label: 'PHP', value: '8.2+' },
  { label: 'Database', value: 'MySQL 8.0' },
  { label: 'Queue', value: 'Database or Redis driver' },
  { label: 'Web Server', value: 'Nginx or Apache' },
  { label: 'Min RAM', value: '2 GB' },
];

export const FAQS = [
  {
    q: 'Is Genius Campaign really free with no limitations?',
    a: 'Yes. MIT licensed. Every feature is included at no cost — no paid tier, no per-contact pricing, no feature locks. Deploy as many instances as you need on your own server.',
  },
  {
    q: 'Is Genius Campaign self-hosted or a SaaS product?',
    a: 'Self-hosted only. You install Genius Campaign on your own server and it sends through your own AWS SES or Google Workspace account. There is no hosted Xgenious version — your contact data and sending reputation stay entirely under your control.',
  },
  {
    q: 'What do the AI writing features actually do?',
    a: 'Genius Campaign includes AI-assisted email and subject line writing to help you draft campaign copy faster. You describe what the email should say and refine the suggestion — it is an assistant for drafting, not an autopilot that sends without review.',
  },
  {
    q: 'How do I set up AWS SES or Google Workspace sending?',
    a: 'Add your AWS SES credentials or Google Workspace API details in the admin settings, then verify your sending domain with the standard DNS records (SPF, DKIM, DMARC). Once verified, Genius Campaign routes all campaign and sequence emails through that connection.',
  },
  {
    q: 'What server do I need to run Genius Campaign?',
    a: 'Ubuntu 22.04 LTS with PHP 8.2+, MySQL 8.0, and a queue worker (database or Redis driver) for background sending. A minimum of 2 GB RAM is recommended. Any standard VPS or cloud instance works — no managed services required.',
  },
  {
    q: 'How does email verification protect my sender reputation?',
    a: 'Before a campaign sends, Genius Campaign checks recipient addresses and flags invalid or risky ones. Sending to fewer bad addresses means fewer bounces, which keeps your AWS SES or Google Workspace sending reputation healthy over time.',
  },
  {
    q: 'How is Genius Campaign different from Mailchimp, ActiveCampaign, or Klaviyo?',
    a: 'Mailchimp, ActiveCampaign, and Klaviyo charge monthly fees that scale with your contact list size. Genius Campaign is a one-time free download — self-hosted, MIT licensed, full source code, with no per-contact pricing and no monthly bill regardless of list size.',
  },
  {
    q: 'Can I modify the source code or white-label it for clients?',
    a: 'Yes. The MIT license permits modification, redistribution, and commercial use, including client deployments. Replace the branding, run it under your own domain, and build on top of it without restriction.',
  },
];
