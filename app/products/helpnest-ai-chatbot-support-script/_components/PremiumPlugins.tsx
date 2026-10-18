import type { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { COLOR, REGULAR_PRICE, COMBO_PRICE, EXTENDED_PRICE } from './constants';
import { PLUGINS, PLUGIN_CATEGORIES } from './plugins';

const ICONS: Record<string, ReactNode> = {
  'analytics-pro': (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
  ),
  'crm-sync': (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
  ),
  'integrations-hub': (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
      </svg>
  ),
  'knowledge-sources': (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
      </svg>
  ),
  'store-import': (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 01-8 0"/>
      </svg>
  ),
  'privacy-compliance': (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
  ),
  'eu-compliance': (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>
        <path d="M9 15l2 2 4-4"/>
      </svg>
  ),
  'chat-translation': (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
  ),
  'whatsapp': (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8z"/>
      </svg>
  ),
  'messenger-instagram': (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8z"/><path d="M8 12l3 3 5-5"/>
      </svg>
  ),
  'tiktok': (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
      </svg>
  ),
  'seo-suite': (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        <path d="M11 8v6M8 11h6"/>
      </svg>
  ),
  'ad-tracking': (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
      </svg>
  ),
};

const BADGE = 'text-[10px] font-semibold px-2 py-0.5 rounded-full';

export default function PremiumPlugins() {
  return (
    <section id="plugins" className="py-14 sm:py-20 scroll-mt-20" style={{ background: '#0d0f14' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-10 max-w-[720px] mx-auto">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-bold uppercase tracking-widest mb-4"
            style={{ background: `${COLOR}26`, color: '#a5b4fc' }}
          >
            Everything Bundle &amp; Exclusive License only
          </div>
          <h2 className="text-[28px] sm:text-[40px] font-bold text-white mb-3 leading-tight">
            {PLUGINS.length} Premium Plugins Included: WhatsApp, Instagram, Slack &amp; More
          </h2>
          <p className="text-[15px] leading-6" style={{ color: '#9aa0b4' }}>
            Every licence gets the full AI chatbot script: live chat, ticketing, knowledge base and multi-tenant billing.
            The Everything Bundle and Exclusive License add {PLUGINS.length} premium plugins at no extra cost, covering new channels,
            store and CRM integrations, deeper analytics and compliance tools. Every premium add-on below ships at no extra cost
            in the Everything Bundle and Exclusive License, worth hundreds in add-ons. The Regular License gets the core platform only.
          </p>
        </div>

        <div
          className="max-w-[720px] mx-auto rounded-xl px-5 py-4 mb-3 text-[13px] leading-6 border"
          style={{ background: '#14161f', borderColor: '#242838', color: '#c7cbe0' }}
        >
          <strong className="text-white">Included free in:</strong> Everything Bundle (${COMBO_PRICE}) and Exclusive License (${EXTENDED_PRICE}).{' '}
          <strong className="text-white">Regular License (${REGULAR_PRICE}):</strong> core platform only. Plugins are not sold separately.{' '}
          <a href="#licences" className="underline underline-offset-2" style={{ color: '#a5b4fc' }}>Compare licences ↓</a>
        </div>
        <p className="max-w-[720px] mx-auto text-center text-[12px] leading-5 mb-12" style={{ color: '#6b7085' }}>
          Comparable chat scripts sell add-ons separately. Support Board, for example, charges $29 per app for WhatsApp, Messenger, Slack or AI
          (board.support/pricing, checked October 2026).
        </p>

        <div className="flex flex-col gap-10">
          {PLUGIN_CATEGORIES.map((category) => (
            <div key={category}>
              <p className="text-[12px] font-bold uppercase tracking-widest mb-4" style={{ color: '#a5b4fc' }}>{category}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {PLUGINS.filter((p) => p.category === category).map((p) => (
                  <div
                    key={p.id}
                    className="rounded-2xl p-5 flex flex-col gap-3 border transition-all duration-300 hover:-translate-y-1"
                    style={{ background: '#14161f', borderColor: '#242838' }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${COLOR}26`, color: '#a5b4fc' }}
                      aria-hidden="true"
                    >
                      {ICONS[p.id]}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[14px] font-bold text-white mb-1 leading-snug">{p.title}</h3>
                      <p className="text-[12px] leading-5" style={{ color: '#8b90a3' }}>
                        {p.desc}
                        {p.link && (
                          <>
                            {' '}{p.link.lead}{' '}
                            <Link href={p.link.href} className="underline underline-offset-2" style={{ color: '#a5b4fc' }}>{p.link.label}</Link>.
                          </>
                        )}
                      </p>
                    </div>
                    {p.brands && (
                      <div className="flex items-center gap-2 text-[11px]" style={{ color: '#6b7085' }}>
                        <span>Works with</span>
                        {p.brands.map((b) => (
                          <Image key={b.file} src={`/brands/${b.file}.png`} alt={`${b.name} logo`} width={20} height={20} className="rounded-[4px]" />
                        ))}
                      </div>
                    )}
                    <div className="flex flex-wrap gap-1.5">
                      <span className={BADGE} style={{ background: `${COLOR}25`, color: '#c7d2fe' }}>Everything Bundle</span>
                      <span className={BADGE} style={{ background: '#a78bfa25', color: '#ddd6fe' }}>Exclusive</span>
                      {p.beta && <span className={BADGE} style={{ background: '#f59e0b25', color: '#fcd34d' }}>Beta</span>}
                    </div>
                  </div>
                ))}
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

        <p className="text-center text-[12px] leading-5 mt-8 max-w-[860px] mx-auto" style={{ color: '#6b7085' }}>
          Plugins are included with the Everything Bundle and Exclusive License. WhatsApp, Messenger, Instagram and TikTok features depend on each
          platform&apos;s API access and approval for your account. TikTok messaging is in beta and not available in every region. Compliance plugins
          provide tools; how you configure and use them determines your own compliance. WhatsApp, Meta, Instagram, TikTok, Shopify, WooCommerce,
          HubSpot, Slack, Discord, Telegram, Zendesk, GitHub, Zapier, Make, n8n, DeepL and Google are trademarks of their owners. Helpnest is not
          affiliated with or endorsed by them.
        </p>

      </div>
    </section>
  );
}
