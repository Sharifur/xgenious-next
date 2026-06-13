'use client';

import { useState } from 'react';
import Link from 'next/link';
import { COLOR, REGULAR_PRICE, EXTENDED_PRICE, COMBO_PRICE } from './constants';

const FAQS = [
  {
    q: 'What is Qixer?',
    a: 'Qixer is a multi-vendor on-demand service marketplace script built with Laravel 12 and PHP 8.3+. It lets you launch a platform where service providers list their services and customers book them — similar to TaskRabbit or UrbanClap. It ships with a buyer Flutter app and a seller Flutter app for iOS and Android, a drag-and-drop admin panel, and 20+ integrated payment gateways.',
  },
  {
    q: 'What is included in the Regular License?',
    a: `The Regular License includes the full web platform, Laravel admin panel, GPS-based service discovery, commission revenue model, 20+ payment gateways, coupon system, and lifetime updates with 6 months support. The Flutter buyer and seller apps are not included in the Regular License — they are part of the Everything Bundle.`,
  },
  {
    q: 'Does Qixer support both commission and subscription revenue?',
    a: 'Yes. Qixer supports two monetization models simultaneously. You can charge service providers a percentage commission on each completed order, a recurring monthly or yearly subscription fee, or both at the same time. You configure and switch between models from the admin panel without any code changes.',
  },
  {
    q: 'What are the server requirements?',
    a: 'Qixer requires PHP 8.3+, MySQL 8+, and a standard Linux VPS or cPanel hosting environment. Any provider offering cPanel hosting is compatible. Free cPanel installation is included with every purchase — the team deploys it on your server at no extra charge.',
  },
  {
    q: 'Are the Flutter apps included?',
    a: `The buyer and seller Flutter apps for iOS and Android are included with the Everything Bundle ($${COMBO_PRICE}) and Exclusive License ($${EXTENDED_PRICE}). The Regular License covers the web platform only. Both apps are fully branded for your marketplace and ready for Google Play and the App Store.`,
  },
  {
    q: 'How does the drag-and-drop builder work?',
    a: 'Qixer ships with a WordPress-style builder system including a page builder with 30+ widgets, a menu builder with mega menu support, a form builder, and a widget builder. You create and edit pages, set up navigation, and configure widgets from the admin panel — no code required.',
  },
  {
    q: 'What payment gateways are supported?',
    a: 'Qixer integrates with 20+ payment gateways including PayPal, Stripe, Razorpay, Paytm, Flutterwave, and many regional options. You configure gateways from the admin panel — no code changes needed for standard gateway setup.',
  },
  {
    q: 'Can I white-label Qixer?',
    a: 'White-labeling — removing all Xgenious and Bytesed branding — requires the Exclusive License. The Exclusive License also grants SaaS rights, meaning you can operate the platform as a subscription business, launch unlimited marketplaces, and modify the source code freely.',
  },
  {
    q: 'Does Qixer support multiple languages and RTL?',
    a: 'Yes. Qixer includes multi-language support with RTL (right-to-left) capability for Arabic, Hebrew, and other RTL languages. Languages are managed from the admin panel without touching code, making the platform ready for any regional market.',
  },
  {
    q: 'How many sales has Qixer made on CodeCanyon?',
    a: 'Qixer has 712 sales and a 4.5/5 rating from 46 reviews on CodeCanyon. It holds a Featured Item badge from an Elite Author, indicating consistent quality and support standards over its 4-year history on the marketplace.',
  },
  {
    q: 'Is there a live demo?',
    a: 'Yes. You can explore the full platform at qixer.bytesed.com. Admin credentials: super_admin / 12345678. Seller credentials: test_seller / 12345678. Buyer credentials: test_buyer / 12345678. The Flutter mobile app is available for download from the Play Store link on this page.',
  },
  {
    q: 'What support is included?',
    a: 'Every license includes 6 months of ticket-based support with an average 10-minute response time. You can extend to 12 months at checkout. Documentation is available at docs.bytesed.com and a full YouTube tutorial playlist covers installation and configuration.',
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
              Everything you need to know before purchasing Qixer.
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
                  style={{ maxHeight: open === i ? '500px' : '0px' }}
                >
                  <p className="px-6 pb-5 text-[14px] text-[#484848] leading-7">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-10 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ background: '#0d0f14' }}
          >
            <div>
              <p className="text-white font-semibold text-[16px] mb-1">Still have questions?</p>
              <p className="text-[#6b7280] text-[14px]">Check the documentation or open a pre-sale ticket.</p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <a
                href="https://docs.bytesed.com/docs/qixer-service-marketplace-and-service-finder/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-semibold px-4 py-2 rounded-full border transition-colors"
                style={{ borderColor: '#2d2d3a', color: COLOR }}
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
            <Link href="/products/prohandy-on-demand-home-service-marketplace" className="hover:underline" style={{ color: COLOR }}>Prohandy — Home Service Marketplace</Link>
            <Link href="/products/gocar-on-demand-car-service-marketplace" className="hover:underline" style={{ color: COLOR }}>GoCar — Car Service Marketplace</Link>
            <Link href="/custom-saas-development-company" className="hover:underline" style={{ color: COLOR }}>Custom SaaS Development</Link>
            <a href="https://en.wikipedia.org/wiki/On-demand_economy" target="_blank" rel="noopener noreferrer" className="text-[#6b7280] hover:underline">On-Demand Economy — Wikipedia ↗</a>
          </div>

        </div>
      </div>
    </section>
  );
}
