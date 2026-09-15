export default function WhatIs() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[820px] mx-auto">
        <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#0F1112] mb-5 text-center">
          What is Genius Support?
        </h2>

        <p className="text-[17px] text-[#0F1112] leading-8 mb-6 p-5 rounded-2xl border border-[#E5E7EC] bg-[#f9fafb]">
          <strong>Genius Support</strong> is free, open-source <strong>support portal software</strong> built with Laravel. It provides a customer ticket portal, agent dashboard, admin panel, self-service knowledge base, and email-to-ticket automation: self-hosted on your own server, MIT licensed, with no per-agent fees.
        </p>

        <p className="text-[16px] text-[#484848] leading-8 mb-5">
          Zendesk charges <strong>$19–$115 per agent per month</strong>. Freshdesk starts at $15 per agent per month and locks advanced features behind higher tiers. Genius Support is a one-time free download: full source code, deploy on any Linux VPS, no recurring cost regardless of team size.
        </p>
        <p className="text-[16px] text-[#484848] leading-8 mb-5">
          The system ships with three distinct portals: a customer-facing ticket portal, an agent dashboard, and an admin panel, plus a self-service <strong>knowledge base</strong> and <strong>email-to-ticket automation</strong> via IMAP. Ticket updates are pushed in real time using <strong>Laravel Reverb</strong>, a self-hosted WebSocket server, with no Pusher subscription required.
        </p>
        <p className="text-[16px] text-[#484848] leading-8 mb-5">
          Unlike osTicket, Zammad, and FreeScout — which require customers to register an account before submitting a ticket through the portal — <strong>Genius Support lets customers open tickets from a guest form</strong> and reply by email or a secure portal link. No registration wall, no password reset, no abandoned tickets. Every reply, whether by email or portal link, lands in the same ticket thread.
        </p>
        <p className="text-[16px] text-[#484848] leading-8 mb-5">
          Because Genius Support is fully self-hosted, customer data never leaves your server. This makes it suitable for teams in healthcare, finance, and government with <strong>GDPR</strong>, <strong>HIPAA</strong>, or data-sovereignty requirements. No third-party SaaS vendor has access to your ticket data, email correspondence, or customer information.
        </p>
        <p className="text-[16px] text-[#484848] leading-8">
          If you are searching for an <strong>osTicket alternative</strong>, a <strong>FreeScout alternative</strong>, or a <strong>Zammad alternative</strong>, Genius Support combines the best of each: the lightweight PHP/Laravel deployability of FreeScout, the modern real-time UI of Zammad, and the classic reliability of osTicket — all under the permissive <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 text-[#0284c7]"><strong>MIT license</strong></a> with no module paywalls. Learn more about{' '}
          <a href="https://en.wikipedia.org/wiki/Issue_tracking_system" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 text-[#0284c7]">
            issue tracking systems ↗
          </a>.
        </p>
      </div>
    </section>
  );
}
