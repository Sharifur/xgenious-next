export const COLOR = '#0284c7';
export const LIGHT_COLOR = '#e0f2fe';
export const BASE_URL = 'https://xgenious.com';
export const CANONICAL = `${BASE_URL}/free-software/genius-support`;
export const DEMO_URL = 'https://genius-support.xgenious.com';
export const DOCS_URL = 'https://genius-support.xgenious.com/docs/index.html';
export const GITHUB_URL = '';
export const LICENSE_UUID = '3e132da5-2f4c-4e15-ad22-8c00c1287e98';

export const MODULES = [
  {
    name: 'Ticket Management',
    features: [
      'Create, assign, and prioritize tickets with one click',
      'Status workflow: Open → In Progress → Resolved → Closed',
      'Priority levels: Low, Medium, High, Urgent',
      'Real-time status updates via WebSocket (Laravel Reverb)',
      'Department-based ticket routing and reassignment',
    ],
  },
  {
    name: 'Customer Portal',
    features: [
      'Self-service ticket submission and tracking',
      'Reply to agents directly from the portal',
      'Knowledge base search for instant self-help',
      'Resolution rating: customers rate every resolved ticket',
      'Profile management and ticket history',
    ],
  },
  {
    name: 'Agent Dashboard',
    features: [
      'Unified ticket queue with filter and search',
      'Compose replies with rich text editor',
      'Internal notes visible only to agents',
      'Bulk actions: reassign, close, or change priority',
      'Real-time notifications for new and updated tickets',
    ],
  },
  {
    name: 'Admin Panel',
    features: [
      'User management: customers, agents, and admins',
      'Department setup with dedicated agent assignment',
      'Custom email reply templates',
      'Branding: upload logo, set colour scheme, custom domain',
      'Analytics and reporting: ticket volume, response times, CSAT',
    ],
  },
  {
    name: 'Knowledge Base',
    features: [
      'Author and publish self-service articles',
      'Category and tag organisation',
      'Full-text search for customers',
      'Reduce ticket volume with proactive answers',
      'Manage draft and published states per article',
    ],
  },
  {
    name: 'Email-to-Ticket (IMAP)',
    features: [
      'Connect any IMAP inbox to auto-create tickets from emails',
      'Preserve email threading: replies stay linked',
      'Agent replies sent as emails from your domain',
      'Configurable polling interval and department mapping',
      'Works with Gmail, Outlook, and any IMAP-compatible mailbox',
    ],
  },
];

export const TECH_STACK = [
  { name: 'Laravel', role: 'PHP backend, routing, ORM, queues', logo: '/tech/laravel.svg' },
  { name: 'PHP 8.2+ (8.4 tested)', role: 'Application runtime', logo: '/tech/php.svg' },
  { name: 'MySQL 8.0', role: 'Primary relational database', logo: '/tech/mysql.svg' },
  { name: 'Laravel Reverb', role: 'Real-time WebSocket server', logo: '/icons/tech/reverb.png' },
  { name: 'Nginx', role: 'Web server and reverse proxy', logo: '/tech/nginx.svg' },
  { name: 'Supervisor', role: 'Queue worker and WebSocket process management', logo: null },
];

export const SERVER_REQUIREMENTS = [
  { label: 'OS', value: 'Ubuntu 22.04 LTS' },
  { label: 'PHP', value: '8.2+' },
  { label: 'Database', value: 'MySQL 8.0' },
  { label: 'Node.js', value: '20+ (WebSocket server)' },
  { label: 'Web Server', value: 'Nginx or Apache' },
  { label: 'Min RAM', value: '2 GB' },
];

export const ROLES = [
  { role: 'Admin', desc: 'Full access: users, departments, email settings, branding, analytics, and all tickets' },
  { role: 'Agent', desc: 'Handle ticket queue, reply to customers, create internal notes, bulk actions' },
  { role: 'Customer', desc: 'Submit tickets, track status, reply to agents, search knowledge base, rate resolutions' },
];

export const FAQS = [
  {
    q: 'Is Genius Support really free with no limitations?',
    a: 'Yes. MIT licensed. Every feature in the repository is included at no cost: no paid tier, no per-agent pricing, no feature locks. Deploy as many instances as you need.',
  },
  {
    q: 'Can I modify the source code?',
    a: 'Yes. Full source code is included. The MIT license places no restrictions on modification, redistribution, or commercial use. Fork it, customise it, build client projects on top of it.',
  },
  {
    q: 'How does the email-to-ticket feature work?',
    a: 'Connect any IMAP mailbox (Gmail, Outlook, or a custom domain inbox) in the admin panel. Genius Support polls the inbox on a configurable interval and automatically creates a ticket for each new email. Agent replies are sent back as emails from your domain, so customers never need to log in if they prefer email.',
  },
  {
    q: 'What server do I need to run Genius Support?',
    a: 'Ubuntu 22.04 LTS with PHP 8.2+, MySQL 8.0, Node.js 20, and Nginx. A minimum of 2 GB RAM is recommended. Any standard VPS or cloud instance works: no managed services required. Supervisor manages background processes for queues and the WebSocket server.',
  },
  {
    q: 'Does it support multiple departments?',
    a: 'Yes. You can create unlimited departments (for example, Billing, Technical Support, Sales). Each ticket is routed to a department, and each department has its own assigned agents. Tickets can be reassigned across departments at any time.',
  },
  {
    q: 'How does real-time work? Do I need a paid service like Pusher?',
    a: 'No. Genius Support uses Laravel Reverb, the official self-hosted WebSocket server from the Laravel team. Real-time ticket updates run entirely on your own server with no third-party WebSocket service required.',
  },
  {
    q: 'How is Genius Support different from Zendesk or Freshdesk?',
    a: 'Zendesk and Freshdesk charge $19–$149 per agent per month. Genius Support is a one-time free download: self-hosted, MIT licensed, full source code, no per-agent fees and no monthly charges. Your data stays on your own server.',
  },
  {
    q: 'Can I white-label Genius Support for clients?',
    a: 'Yes. The MIT license permits commercial use including client deployments. You can replace the logo, set a custom colour scheme, and run it under your own domain. There is no "Powered by Genius Support" branding requirement.',
  },
];
