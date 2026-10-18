// Single source for the 13 premium plugins: card copy (PremiumPlugins.tsx) and
// JSON-LD featureList/hasPart (JsonLd.tsx). Plugins ship with the Everything
// Bundle and Exclusive License only; never sold separately.
export type PluginCategory = 'Channels' | 'Commerce & Growth' | 'Knowledge & Insights' | 'Trust & Compliance';

export interface Plugin {
  id: string;
  category: PluginCategory;
  /** H3 on the card. */
  title: string;
  /** Short name for JSON-LD hasPart (prefixed with "Helpnest ", suffixed " plugin"). */
  name: string;
  desc: string;
  beta?: boolean;
  /** Third-party brands shown as a "Works with" row. Files in /public/brands (site favicons); names for alt text. */
  brands?: { name: string; file: string }[];
  /** Optional internal link appended after the description. */
  link?: { lead: string; label: string; href: string };
}

export const PLUGIN_CATEGORIES: PluginCategory[] = ['Channels', 'Commerce & Growth', 'Knowledge & Insights', 'Trust & Compliance'];

export const PLUGINS: Plugin[] = [
  {
    id: 'whatsapp',
    category: 'Channels',
    title: 'WhatsApp AI Chatbot',
    name: 'WhatsApp',
    desc: 'Built on the official WhatsApp Cloud API from Meta. Answer WhatsApp chats with your AI, reply from the Helpnest inbox, and fall back to an approved template after the 24-hour window.',
    brands: [{ name: 'WhatsApp', file: 'whatsapp' }],
  },
  {
    id: 'messenger-instagram',
    category: 'Channels',
    title: 'Messenger & Instagram DM Chatbot',
    name: 'Messenger & Instagram',
    desc: 'Connect Facebook Pages and Instagram DMs to the same AI inbox, with the Human Agent tag for late replies.',
    brands: [{ name: 'Messenger', file: 'messenger' }, { name: 'Instagram', file: 'instagram' }],
  },
  {
    id: 'tiktok',
    category: 'Channels',
    title: 'TikTok DM Replies',
    name: 'TikTok',
    beta: true,
    desc: "Let the AI answer TikTok direct messages. Beta, and region-limited by TikTok's Business Messaging API.",
    brands: [{ name: 'TikTok', file: 'tiktok' }],
  },
  {
    id: 'integrations-hub',
    category: 'Channels',
    title: 'Integrations Hub: Slack, Discord & Telegram',
    name: 'Integrations Hub',
    desc: 'Mirror every chat into Slack, Discord or Telegram. Reply from Slack or Telegram to take over as a human agent.',
    brands: [{ name: 'Slack', file: 'slack' }, { name: 'Discord', file: 'discord' }, { name: 'Telegram', file: 'telegram' }],
  },
  {
    id: 'store-import',
    category: 'Commerce & Growth',
    title: 'Store Import for Shopify & WooCommerce',
    name: 'Store Import',
    desc: 'Teach the AI your Shopify or WooCommerce catalogue so it can answer product, price and stock questions.',
    brands: [{ name: 'Shopify', file: 'shopify' }, { name: 'WooCommerce', file: 'woocommerce' }],
  },
  {
    id: 'crm-sync',
    category: 'Commerce & Growth',
    title: 'CRM Sync: HubSpot, Zapier, Make & n8n',
    name: 'CRM Sync',
    desc: 'Push every captured lead to HubSpot, Zapier, Make, n8n or any webhook the moment a visitor shares contact details.',
    brands: [{ name: 'HubSpot', file: 'hubspot' }, { name: 'Zapier', file: 'zapier' }, { name: 'Make', file: 'make' }, { name: 'n8n', file: 'n8n' }],
  },
  {
    id: 'ad-tracking',
    category: 'Commerce & Growth',
    title: 'Ad Tracking: Server-Side Meta & Google Ads',
    name: 'Ad Tracking',
    desc: "Send server-side Meta and Google Ads conversions for trial starts and paid checkouts, so browser ad blockers can't drop them.",
    brands: [{ name: 'Google', file: 'google' }],
  },
  {
    id: 'seo-suite',
    category: 'Commerce & Growth',
    title: 'SEO Suite',
    name: 'SEO Suite',
    // File name must match what the product serves (helpnest.xgenious.com/llm.txt, checked 2026-10-18).
    desc: 'Auto XML sitemap and robots.txt, per-page SEO scoring, redirects, a 404 log and an llm.txt file for AI crawlers.',
  },
  {
    id: 'knowledge-sources',
    category: 'Knowledge & Insights',
    title: 'Knowledge Sources: Zendesk & GitHub Docs',
    name: 'Knowledge Sources',
    desc: 'Train your chatbot from a public Zendesk Help Center or a GitHub docs repository, and answers stay in sync automatically.',
    brands: [{ name: 'Zendesk', file: 'zendesk' }, { name: 'GitHub', file: 'github' }],
  },
  {
    id: 'analytics-pro',
    category: 'Knowledge & Insights',
    title: 'Analytics Pro: CSAT, Missed Questions & AI Spend',
    name: 'Analytics Pro',
    desc: 'See answer quality, missed questions, CSAT and AI spend in one dashboard, so you know what your bot handles and what it costs.',
    link: { lead: 'Planning a budget?', label: 'Estimate your AI token costs', href: '/free-tools/ai-token-cost-calculator' },
  },
  {
    id: 'chat-translation',
    category: 'Knowledge & Insights',
    title: 'Chat Translation for Multilingual Support',
    name: 'Chat Translation',
    desc: 'Read and reply in your own language while visitors read the answer in theirs, powered by AI, DeepL or Google.',
    brands: [{ name: 'DeepL', file: 'deepl' }, { name: 'Google', file: 'google' }],
  },
  {
    id: 'privacy-compliance',
    category: 'Trust & Compliance',
    title: 'Privacy & Compliance: PII Masking & Auto-Delete',
    name: 'Privacy & Compliance',
    desc: 'Mask card numbers, emails and IDs before they are stored, auto-delete old chats, and handle visitor data requests.',
  },
  {
    id: 'eu-compliance',
    category: 'Trust & Compliance',
    title: 'EU Compliance: DPA, AI Disclosure & VAT Invoices',
    name: 'EU Compliance',
    desc: 'Versioned DPA, AI-disclosure checks with an audit trail, offline-visitor follow-ups and VAT-ready invoices.',
    link: { lead: 'Background:', label: 'GDPR and HIPAA compliance explained', href: '/gdpr-and-hipaa-compliance' },
  },
];
