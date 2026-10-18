// Single source for the visible FAQ (FAQ.tsx) and the FAQPage JSON-LD (JsonLd.tsx).
// Visible text and schema text must stay identical.
export interface Faq {
  q: string;
  a: string;
  /** Renders `label` inside `a` as an internal link on the visible page only. */
  link?: { label: string; href: string };
}

export const FAQS: Faq[] = [
  {
    q: 'What is Helpnest?',
    a: 'Helpnest is a self-hosted Laravel PHP script to build your own AI-powered customer support platform like Crisp, Intercom, or Tidio. It includes a semantic AI chatbot, multi-tenant architecture, support ticketing, knowledge base, embeddable chat widget, visitor tracking, and subscription billing — all in one codebase.',
  },
  {
    q: 'Can I use Helpnest to start my own SaaS business?',
    a: 'Yes. The Everything Bundle ($89) and the Exclusive License ($199) both include SaaS and white-label rights, so you can offer Helpnest as a paid service to your clients. Stripe and PayPal subscription billing are built in, so you can create plans, charge clients monthly and generate invoices without writing billing logic. The Exclusive License adds unlimited client workspaces, source code modification rights and priority support.',
  },
  {
    q: 'How does the AI chatbot work?',
    a: 'Helpnest uses semantic search with vector similarity technology. Rather than matching keywords, the AI understands context and intent. It works with 5 AI providers — OpenAI (GPT-6, GPT-4.1, o3/o4), DeepSeek, Google Gemini, GLM (Z.ai) and MiniMax — and you choose which provider and model to use from the admin panel.',
  },
  {
    q: 'What are the server requirements?',
    a: 'Helpnest requires PHP 8.4+, PostgreSQL 14+ and Redis for queues and cache. Realtime runs on Laravel Reverb or Pusher, your choice. A minimum of 4 GB RAM is recommended on any Linux VPS. It does not run on shared hosting with MySQL only.',
  },
  {
    q: 'Does the chatbot support multiple languages?',
    a: "Yes. The AI chatbot answers in your customer's language when your knowledge base has content in that language. With the Chat Translation plugin (Everything Bundle and Exclusive License), your agents can also read and reply in their own language while visitors see the answer in theirs, using AI, DeepL or Google.",
  },
  {
    q: 'How is Helpnest different from Crisp, Intercom, or Tidio?',
    a: 'Crisp, Intercom, and Tidio are SaaS tools that charge monthly fees indefinitely. Helpnest is a one-time $59 purchase — self-hosted on your own server, full source code, no monthly fees, multi-tenant by design, and white-label rights included in the Everything Bundle and Exclusive License.',
  },
  {
    q: 'Which license do I need?',
    a: 'Choose the Regular License ($59) for one company running its own AI chatbot. It includes the core platform only, with no premium plugins. Choose the Everything Bundle ($89) to add the mobile app, all 13 premium plugins and SaaS / white-label rights to sell chatbot access to clients. Choose the Exclusive License ($199) for everything in the Bundle plus unlimited client workspaces, source code modification rights and priority support.',
  },
  {
    q: 'Which Helpnest licences include the 13 premium plugins?',
    a: 'Only the Everything Bundle ($89) and the Exclusive License ($199). Both include all 13 plugins at no extra cost, and all 13 are available now: WhatsApp, Messenger & Instagram, TikTok (beta), Integrations Hub, Store Import, CRM Sync, Ad Tracking, SEO Suite, Knowledge Sources, Analytics Pro, Chat Translation, Privacy & Compliance and EU Compliance. The Regular License ($59) includes the core AI chatbot script only, and plugins can\'t be added to it.',
  },
  {
    q: 'Can I buy the plugins separately with the Regular License?',
    a: 'No. The 13 premium plugins come only with the Everything Bundle ($89) or the Exclusive License ($199), and they are not sold individually. The Regular License ($59) includes the core AI chatbot script without plugins.',
  },
  {
    q: 'Are future plugin updates free?',
    a: 'Yes. If you buy the Everything Bundle or the Exclusive License, future updates to the premium plugins are free, just like the lifetime updates to the core Helpnest script.',
  },
  {
    q: 'Can the Helpnest AI chatbot reply on WhatsApp?',
    a: "Yes, with the WhatsApp plugin (Everything Bundle and Exclusive License), which uses the official WhatsApp Cloud API from Meta. The AI answers WhatsApp chats, your team can reply from the Helpnest inbox, and after WhatsApp's 24-hour customer-service window closes, Helpnest falls back to an approved template message, as WhatsApp's rules require.",
  },
  {
    q: 'Can it answer Instagram and Facebook Messenger DMs?',
    a: "Yes. The Messenger & Instagram plugin connects Facebook Pages and Instagram DMs to the same AI inbox. For late replies, it uses Meta's Human Agent tag, which lets a human agent respond after the standard 24-hour window.",
  },
  {
    q: 'Is the TikTok plugin available in my country?',
    a: "It's in beta and depends on TikTok's Business Messaging API, which TikTok offers only in some regions and to approved business accounts. Check TikTok's availability for your account before you rely on it.",
  },
  {
    q: 'Is Helpnest GDPR compliant?',
    a: 'Helpnest is self-hosted, so chat data stays on your server. The Privacy & Compliance plugin masks card numbers, emails and IDs before storage, auto-deletes old chats and handles visitor data requests. The EU Compliance plugin adds a versioned DPA, AI-disclosure checks with an audit trail and VAT-ready invoices. These are tools, and your own setup and policies determine compliance.',
  },
  {
    q: 'Can the chatbot answer questions about my Shopify or WooCommerce products?',
    a: 'Yes. The Store Import plugin teaches the AI your Shopify or WooCommerce catalogue so it can answer product, price and stock questions. For a store-first chatbot, also see Botmerze.',
    link: { label: 'Botmerze', href: '/products/botmerze-ai-chatbot-saas-ecommerce' },
  },
  {
    q: 'Can my team reply from Slack or Telegram?',
    a: 'Yes. The Integrations Hub plugin mirrors every chat into Slack, Discord or Telegram, and you can reply from Slack or Telegram to take over as a human agent.',
  },
  {
    q: 'Can Helpnest send leads to HubSpot or my CRM?',
    a: 'Yes. CRM Sync pushes every captured lead to HubSpot, Zapier, Make, n8n or any webhook as soon as a visitor shares contact details.',
  },
  {
    q: 'Will the chatbot replace human support agents?',
    a: 'Helpnest is designed to augment, not replace. The AI handles routine queries and FAQs automatically, while complex or sensitive issues are escalated to human agents through the ticketing system. You control escalation rules from the admin panel.',
  },
  {
    q: 'What is the knowledge base and how does it train the AI?',
    a: 'The knowledge base is a searchable documentation system you build inside Helpnest. Articles you create are indexed using vector embeddings. When a visitor asks a question, the AI runs a semantic similarity search against your knowledge base to find the most relevant answer.',
  },
  {
    q: 'Does Helpnest include visitor tracking?',
    a: 'Yes. Helpnest shows a real-time visitor map with browsing history, current page, country, and address details. You can initiate a proactive chat with any live visitor directly from the dashboard.',
  },
  {
    q: 'Is Helpnest multi-tenant?',
    a: 'Yes. Helpnest is built with a multi-tenant architecture from the ground up. Each client workspace has isolated knowledge bases, agents, conversations, and billing — no data leaks between workspaces.',
  },
  {
    q: 'Is there a mobile app for Helpnest?',
    a: 'A mobile app is available with the Everything Bundle ($89) and the Exclusive License ($199) — not included in the Regular license. The web platform is also fully responsive and works on mobile browsers for both agents and end users.',
  },
];
