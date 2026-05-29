'use client';

import { useState } from 'react';
import { COLOR, LIGHT_COLOR } from './constants';

const FAQS = [
  {
    q: 'What is Fundorex?',
    a: 'Fundorex is a self-hosted crowdfunding platform script built on Laravel. It lets you launch your own fundraising website where users can create campaigns, accept donations, run events with ticket sales, and manage withdrawals — all under your own brand and domain.',
  },
  {
    q: 'What types of campaigns can I run?',
    a: 'Fundorex supports charity campaigns, personal fundraising, startup funding, community projects, and emergency funding drives. Admins can configure campaign categories, approval workflows, and commission rates per campaign type.',
  },
  {
    q: 'Which payment gateways are included?',
    a: 'Fundorex ships with 20+ payment gateways: Stripe, PayPal, Razorpay, 2Checkout, Skrill, Payoneer, Wise, Square, Cinetpay, Paytabs, SSLCommerz, Instamojo, and more. You can also accept bank transfers and cash.',
  },
  {
    q: 'Does it include a mobile app?',
    a: 'Yes. The Combo Pack and Extended License both include a Flutter-built mobile app available on Android and iOS. Donors can browse campaigns, contribute, and follow updates directly from the app.',
  },
  {
    q: 'Can I customize the platform?',
    a: 'Yes — Fundorex ships with full source code. The admin panel includes color customization, drag-and-drop menu and widget builders, multi-language support, and customizable email templates. For deeper changes, you have direct access to the Laravel codebase.',
  },
  {
    q: 'Does it support multiple languages?',
    a: 'Yes. Fundorex includes a full translation system with RTL layout support. You can manage all UI strings from the admin panel without touching code. Launch in Arabic, French, Spanish, or any other language.',
  },
  {
    q: 'How does admin commission work?',
    a: 'Admins can set platform fees as a percentage of each donation or as a flat fee per campaign. All commission settings are configurable from the admin panel without any code changes.',
  },
  {
    q: 'What kind of support is included?',
    a: 'All licenses include 6 months of support via Envato. Extended License customers receive priority support. You can also access the full documentation at docs.xgenious.com/docs/fundorex/ for setup guides and customization help.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 lg:py-[100px] bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[800px] mx-auto">

        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
            FAQ
          </div>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col divide-y divide-[#E5E7EC] border border-[#E5E7EC] rounded-2xl overflow-hidden">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-white">
              <button
                className="w-full text-left px-6 py-4 flex items-center justify-between gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-[14px] font-semibold text-[#0F1112]">{faq.q}</span>
                <svg
                  className="flex-shrink-0 transition-transform"
                  style={{ transform: open === i ? 'rotate(180deg)' : 'none', color: COLOR }}
                  width="18" height="18" viewBox="0 0 24 24" fill="none"
                >
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-[13px] text-[#6b7280] leading-6">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
