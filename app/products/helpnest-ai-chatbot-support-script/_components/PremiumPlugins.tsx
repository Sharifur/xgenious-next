import Link from 'next/link';
import { COLOR, REGULAR_PRICE, COMBO_PRICE, EXTENDED_PRICE } from './constants';

const plugins = [
  {
    title: 'Analytics Pro',
    desc: 'Answer quality, missed questions, CSAT and AI spend in one dashboard — see what your bot handles and what it costs.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
  },
  {
    title: 'CRM Sync',
    desc: 'Push every captured lead to HubSpot, Zapier, Make, n8n or any webhook the moment a visitor shares contact details.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
  {
    title: 'Integrations Hub',
    desc: 'Mirror every chat into Slack, Discord or Telegram. Reply from Slack or Telegram to take over as a human agent.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
      </svg>
    ),
  },
  {
    title: 'Knowledge Sources',
    desc: 'Train your chatbot from a public Zendesk Help Center or a GitHub docs repository — answers stay in sync automatically.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
      </svg>
    ),
  },
  {
    title: 'Store Import',
    desc: 'Teach the AI your Shopify or WooCommerce catalogue so it can answer product, price and stock questions.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 01-8 0"/>
      </svg>
    ),
  },
  {
    title: 'Privacy & Compliance',
    desc: 'Mask card numbers, emails and IDs before they are stored, auto-delete old chats, and handle visitor data requests.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    title: 'EU Compliance',
    desc: 'Versioned DPA, AI-disclosure checks with an audit trail, offline-visitor follow-ups and VAT-ready invoices.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>
        <path d="M9 15l2 2 4-4"/>
      </svg>
    ),
  },
  {
    title: 'Chat Translation',
    desc: 'Read and reply in your own language while visitors read the answer in theirs — powered by AI, DeepL or Google.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
    ),
  },
  {
    title: 'WhatsApp',
    desc: 'Answer WhatsApp chats with your AI, reply from the inbox, and fall back to an approved template after 24 hours.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8z"/>
      </svg>
    ),
  },
  {
    title: 'Messenger & Instagram',
    desc: 'Connect Facebook Pages and Instagram DMs to the same AI inbox, with the Human Agent tag for late replies.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8z"/><path d="M8 12l3 3 5-5"/>
      </svg>
    ),
  },
  {
    title: 'TikTok',
    desc: "Let the AI answer TikTok direct messages. Beta; region-limited by TikTok's Business Messaging API.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
      </svg>
    ),
  },
  {
    title: 'SEO Suite',
    desc: 'Auto XML sitemap and robots.txt, per-page SEO scoring, redirects, 404 log and an llm.txt for AI crawlers.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        <path d="M11 8v6M8 11h6"/>
      </svg>
    ),
  },
  {
    title: 'Ad Tracking',
    desc: "Server-side Meta and Google Ads conversions for trial starts and paid checkouts — ad blockers can't drop them.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
      </svg>
    ),
  },
];

export default function PremiumPlugins() {
  return (
    <section className="py-14 sm:py-20" style={{ background: '#0d0f14' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-12 max-w-[640px] mx-auto">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-bold uppercase tracking-widest mb-4"
            style={{ background: `${COLOR}26`, color: '#a5b4fc' }}
          >
            Everything Bundle &amp; Exclusive License Only
          </div>
          <h2 className="text-[28px] sm:text-[40px] font-bold text-white mb-3 leading-tight">
            {plugins.length} Premium Plugins,{' '}
            <span style={{ color: '#a5b4fc' }}>Included Free</span>
          </h2>
          <p className="text-[15px] leading-6" style={{ color: '#9aa0b4' }}>
            Every premium add-on below ships at no extra cost in the Everything Bundle and Exclusive License —
            worth hundreds in add-ons. The Regular License gets the core platform only.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {plugins.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl p-5 flex flex-col gap-3 border transition-all duration-300 hover:-translate-y-1"
              style={{ background: '#14161f', borderColor: '#242838' }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${COLOR}26`, color: '#a5b4fc' }}
              >
                {p.icon}
              </div>
              <div>
                <h3 className="text-[14px] font-bold text-white mb-1 leading-snug">{p.title}</h3>
                <p className="text-[12px] leading-5" style={{ color: '#8b90a3' }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10">
          <Link
            href="/checkout?product=helpnest-everything-bundle"
            className="flex items-center justify-center gap-2 text-white font-bold text-[14px] rounded-xl px-6 py-3 transition-all hover:opacity-90 hover:-translate-y-0.5"
            style={{ background: COLOR, boxShadow: `0 8px 24px ${COLOR}55` }}
          >
            Get Everything Bundle — ${COMBO_PRICE}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link
            href="/checkout?product=helpnest-exclusive-pack"
            className="flex items-center justify-center gap-2 text-white font-semibold text-[14px] rounded-xl px-6 py-3 border transition-colors hover:bg-white/5"
            style={{ borderColor: '#a78bfa66' }}
          >
            Exclusive License — ${EXTENDED_PRICE}
          </Link>
        </div>

        <p className="text-center text-[13px] mt-6" style={{ color: '#6b7085' }}>
          All {plugins.length} premium plugins included in Everything Bundle (${COMBO_PRICE}) and Exclusive License (${EXTENDED_PRICE}) · Regular License (${REGULAR_PRICE}) gets core platform only
        </p>

      </div>
    </section>
  );
}
