'use client';

import { useState } from 'react';
import Link from 'next/link';
import { COLOR, DOCS_URL } from './constants';

const FAQS = [
  {
    q: 'What is Helpnest?',
    a: 'Helpnest is a self-hosted Laravel PHP script to build your own AI-powered customer support platform like Crisp, Intercom, or Tidio. It includes a semantic AI chatbot, multi-tenant architecture, support ticketing, knowledge base, embeddable chat widget, visitor tracking, and subscription billing — all in one codebase.',
  },
  {
    q: 'Can I use Helpnest to start my own SaaS business?',
    a: 'Yes. The Exclusive License allows you to offer Helpnest as a paid service to unlimited clients. Stripe and PayPal subscription billing are built in, so you can create plans, charge clients monthly, and generate invoices — without writing billing logic from scratch.',
  },
  {
    q: 'How does the AI chatbot work?',
    a: 'Helpnest uses semantic search with vector similarity technology. Rather than matching keywords, the AI understands context and intent. It is powered by OpenAI (GPT-4, GPT-3.5) and Anthropic Claude — you choose which model to use from the admin panel.',
  },
  {
    q: 'What are the server requirements?',
    a: 'Helpnest requires PHP 8.4+, PostgreSQL 14+, Redis for queues and cache, and Pusher for realtime events. A minimum of 4 GB RAM is recommended on any Linux VPS. It does not run on shared hosting with MySQL only.',
  },
  {
    q: 'Does the chatbot support multiple languages?',
    a: 'Yes. If you train the knowledge base with multilingual content, the AI chatbot can understand and respond in your customers preferred language without any additional configuration or translation plugins.',
  },
  {
    q: 'How is Helpnest different from Crisp, Intercom, or Tidio?',
    a: 'Crisp, Intercom, and Tidio are SaaS tools that charge $29–$45 per month per workspace indefinitely. Helpnest is a one-time $59 purchase — self-hosted on your own server, full source code, no monthly fees, multi-tenant by design, and white-label rights included in the Exclusive License.',
  },
  {
    q: 'Which license do I need?',
    a: 'Choose the Regular License ($59) for a single internal deployment — one company, one chatbot. Choose the Exclusive License ($199) if you want to sell chatbot access to paying clients and build a recurring SaaS revenue stream.',
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
    a: 'A mobile app is planned and listed as coming soon. The web platform is fully responsive and works on mobile browsers for both agents and end users.',
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
              Everything you need to know before purchasing Helpnest.
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
            style={{ background: '#0d0f14' }}
          >
            <div>
              <p className="text-white font-semibold text-[16px] mb-1">Still have questions?</p>
              <p className="text-[#6b7280] text-[14px]">Check the documentation or open a pre-sale ticket.</p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <a
                href={DOCS_URL}
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
            <Link href="/products/xilancer-freelancer-marketplace-script" className="hover:underline" style={{ color: COLOR }}>Xilancer — Freelancer Marketplace</Link>
            <Link href="/products/nazmart-multi-tenancy-ecommerce-platform" className="hover:underline" style={{ color: COLOR }}>Nazmart — Multi-Tenant eCommerce</Link>
            <Link href="/custom-saas-development-company" className="hover:underline" style={{ color: COLOR }}>Custom SaaS Development</Link>
            <a href="https://en.wikipedia.org/wiki/Chatbot" target="_blank" rel="noopener noreferrer" className="text-[#6b7280] hover:underline">Chatbot — Wikipedia ↗</a>
          </div>

        </div>
      </div>
    </section>
  );
}
