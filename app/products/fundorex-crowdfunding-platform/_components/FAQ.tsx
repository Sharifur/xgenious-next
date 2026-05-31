'use client';

import { useState } from 'react';
import Link from 'next/link';
import { COLOR, DOCS_URL } from './constants';

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
    a: 'All licenses include 6 months of support. Extended License customers receive priority support. You can also access the full documentation for setup guides and customization help.',
  },
  {
    q: 'Does Fundorex support community-based campaigns?',
    a: 'Yes. Fundorex includes a community campaign system where users can collaborate on shared fundraising goals. Campaign owners can invite volunteers, assign roles, and track contributions from community members — all managed from the admin panel.',
  },
  {
    q: 'Is there a built-in wallet for donors?',
    a: 'Yes. Fundorex includes a built-in donor wallet. Donors can add funds to their wallet and use it to contribute to campaigns without re-entering payment details on every donation. Wallet top-ups go through the same 20+ payment gateways.',
  },
  {
    q: 'How does the campaign withdrawal system work?',
    a: 'Campaign owners can request withdrawals of raised funds once a campaign reaches its goal or deadline. Admins review and approve withdrawal requests from the dashboard. Funds are released via bank transfer or any configured payout method.',
  },
  {
    q: 'Does Fundorex support gift-based or reward-based donations?',
    a: 'Yes. Campaign owners can set up gift tiers — donors who contribute above a certain amount receive a reward or acknowledgement defined by the campaign owner. Ideal for product pre-launches, creative projects, and incentivized fundraising.',
  },
  {
    q: 'Can users volunteer through the platform?',
    a: 'Yes. Fundorex includes a volunteer management feature. Campaign owners can post volunteer opportunities, set availability requirements, and accept applications from registered users. Volunteer activity is tracked and displayed on the campaign page.',
  },
  {
    q: 'How is Fundorex different from GoFundMe or Kickstarter?',
    a: 'GoFundMe and Kickstarter are SaaS platforms that charge 3–8% transaction fees, limit your branding, and keep you on their infrastructure. Fundorex is a self-hosted script you own outright — one-time purchase, zero monthly fees, zero platform commission, full source code, your own domain.',
  },
  {
    q: 'Is Fundorex a white-label crowdfunding solution?',
    a: 'Yes. Fundorex is fully white-label. You host it on your own server under your own domain and brand. Your donors never see Xgenious. The admin panel lets you customize colors, logo, email templates, and all UI text without code.',
  },
  {
    q: 'Is Fundorex suitable as a Kickstarter clone or alternative?',
    a: 'Yes. Fundorex can be configured as a Kickstarter-style reward-based crowdfunding platform with campaign goals, deadlines, backer gift tiers, and public campaign discovery. It also supports donation-based campaigns, making it more versatile than a pure Kickstarter clone.',
  },
  {
    q: 'What is the difference between platform fee and transaction fee?',
    a: 'Platform fee is the commission the admin charges on each donation — configurable as a percentage or flat amount. Transaction fee is the charge applied by the payment gateway (e.g. Stripe). Both are displayed transparently to donors before they complete a contribution.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="pb-20 lg:pb-[100px]" style={{ background: '#F5F6F8' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">
      <div className="max-w-[760px] mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-[#6b7280] text-[15px] leading-6">
            Everything you need to know before purchasing Fundorex.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-[#E5E7EC] overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-[15px] font-semibold text-[#0F1112]">{faq.q}</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="flex-shrink-0 transition-transform duration-200"
                  style={{ transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <path d="M6 9l6 6 6-6" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: open === i ? '400px' : '0px' }}
              >
                <p className="px-6 pb-5 text-[14px] text-[#484848] leading-7">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-10 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ background: '#1a0e05' }}
        >
          <div>
            <p className="text-white font-semibold text-[16px] mb-1">Still have questions?</p>
            <p className="text-[#9a7a60] text-[14px]">Check the documentation or open a pre-sale ticket.</p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href={DOCS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-semibold px-4 py-2 rounded-full border transition-colors"
              style={{ borderColor: '#4a2e14', color: COLOR }}
            >
              Documentation
            </a>
            <Link
              href="/contact"
              className="text-[13px] font-semibold px-4 py-2 rounded-full text-white"
              style={{ background: COLOR }}
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#E5E7EC] flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-[#6b7280]">
          <span>Related:</span>
          <Link href="/products/xilancer-freelancer-marketplace-script" className="hover:underline" style={{ color: COLOR }}>Xilancer — Freelancer Marketplace</Link>
          <Link href="/products/nazmart-multi-tenancy-ecommerce-platform" className="hover:underline" style={{ color: COLOR }}>Nazmart — Multi-Tenant eCommerce</Link>
          <Link href="/custom-saas-development-company" className="hover:underline" style={{ color: COLOR }}>Custom SaaS Development</Link>
          <a href="https://en.wikipedia.org/wiki/Crowdfunding" target="_blank" rel="noopener noreferrer" className="text-[#6b7280] hover:underline">Crowdfunding — Wikipedia ↗</a>
        </div>

      </div>
      </div>
    </section>
  );
}
