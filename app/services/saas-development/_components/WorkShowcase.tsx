'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import SectionBadge from '@/components/ui/SectionBadge';

/* ── icons ── */
const Icon = {
  mail: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 8l10 6 10-6"/></svg>,
  ai: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10"/><path d="M22 2 12 12"/><path d="M15 2h5v5"/></svg>,
  shop: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>,
  users: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  grid: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
  file: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  star: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  chart: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
  lock: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
  chat: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  map: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 14 8 14s8-8.75 8-14a8 8 0 0 0-8-8z"/></svg>,
  heart: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
  layout: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
  dollar: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  search: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
};

type Feature = { icon: React.ReactNode; name: string; badge?: 'New' | 'Most Used' };

type Product = {
  name: string;
  tagline: string;
  description: string;
  features: Feature[];
  href: string;
  image: string | null;
};

const PRODUCTS: Product[] = [
  {
    name: 'Taskip',
    tagline: 'Agency Management Platform',
    description: 'The all-in-one agency management platform and client portal software that helps freelancers and digital agencies run their entire business.',
    features: [
      { icon: Icon.mail, name: 'Email Inbox' },
      { icon: Icon.ai, name: 'Taspi AI Feature', badge: 'New' },
      { icon: Icon.shop, name: 'Service Catalog' },
      { icon: Icon.users, name: 'Taskip CRM', badge: 'Most Used' },
      { icon: Icon.grid, name: 'Project Management' },
      { icon: Icon.file, name: 'Proposal' },
    ],
    href: 'https://taskip.net',
    image: null,
  },
  {
    name: 'Nazmart',
    tagline: 'Multi-Tenancy eCommerce Platform',
    description: 'Launch a full-scale multi-vendor marketplace where each merchant gets their own store, subdomain, and dashboard — all managed from one admin panel.',
    features: [
      { icon: Icon.grid, name: 'Multi-Tenancy', badge: 'Most Used' },
      { icon: Icon.shop, name: 'Product Management' },
      { icon: Icon.dollar, name: 'Payment Gateway' },
      { icon: Icon.chart, name: 'Analytics Dashboard' },
      { icon: Icon.users, name: 'Seller Dashboard' },
      { icon: Icon.lock, name: 'Role & Permissions' },
    ],
    href: 'https://xgenious.com/our-products/nazmart-multi-tenancy-ecommerce-platform-saas/',
    image: '/products/nazmart.png',
  },
  {
    name: 'Xilancer',
    tagline: 'Freelancer Marketplace Platform',
    description: 'A complete freelance marketplace where clients post jobs and freelancers bid, communicate, and get paid — with escrow and dispute resolution built in.',
    features: [
      { icon: Icon.file, name: 'Job Board', badge: 'Most Used' },
      { icon: Icon.dollar, name: 'Escrow Payments' },
      { icon: Icon.chat, name: 'Bid System' },
      { icon: Icon.star, name: 'Reviews & Ratings' },
      { icon: Icon.users, name: 'Portfolio Profiles' },
      { icon: Icon.lock, name: 'Dispute Resolution', badge: 'New' },
    ],
    href: 'https://xgenious.com/our-products/xilancer-freelancer-marketplace-platform/',
    image: '/products/xilancer.png',
  },
  {
    name: 'Prohandy',
    tagline: 'On Demand Home Service Platform',
    description: 'Book verified local service providers for home repair, cleaning, and more. Real-time GPS tracking, in-app payments, and provider management built in.',
    features: [
      { icon: Icon.map, name: 'GPS Tracking', badge: 'New' },
      { icon: Icon.grid, name: 'Service Booking', badge: 'Most Used' },
      { icon: Icon.dollar, name: 'Payment Gateway' },
      { icon: Icon.star, name: 'Review System' },
      { icon: Icon.users, name: 'Provider Management' },
      { icon: Icon.chart, name: 'Admin Dashboard' },
    ],
    href: 'https://xgenious.com/our-products/prohandy-on-demand-home-service-marketplace-platform',
    image: '/products/prohandy.png',
  },
  {
    name: 'Fundorex',
    tagline: 'Crowdfunding & Donation Platform',
    description: 'Run equity, reward, or donation campaigns at scale. Multi-currency, KYC verification, backer dashboards, and automated payout workflows included.',
    features: [
      { icon: Icon.heart, name: 'Campaign Builder', badge: 'Most Used' },
      { icon: Icon.dollar, name: 'Donation Tracking' },
      { icon: Icon.lock, name: 'KYC Verification', badge: 'New' },
      { icon: Icon.chart, name: 'Payout Management' },
      { icon: Icon.users, name: 'Backer Profiles' },
      { icon: Icon.star, name: 'Reward Tiers' },
    ],
    href: 'https://xgenious.com/our-products/fundorex-crowdfunding-platform/',
    image: '/products/fundorex.png',
  },
  {
    name: 'Helpnest',
    tagline: 'AI Chatbot & Customer Support SaaS',
    description: 'Deploy an AI-powered support chatbot trained on your docs, combined with a full help desk — live chat, ticket management, and team inbox in one place.',
    features: [
      { icon: Icon.ai, name: 'AI Chatbot', badge: 'New' },
      { icon: Icon.chat, name: 'Live Chat', badge: 'Most Used' },
      { icon: Icon.file, name: 'Ticket System' },
      { icon: Icon.search, name: 'Knowledge Base' },
      { icon: Icon.mail, name: 'Team Inbox' },
      { icon: Icon.chart, name: 'Support Analytics' },
    ],
    href: 'https://xgenious.com/our-products/laravel-ai-chatbot-support-script/',
    image: '/products/helpnest.png',
  },
  {
    name: 'Nexelit',
    tagline: 'Multipurpose Website CMS',
    description: 'A drag-and-drop CMS for agencies and businesses — 21+ homepage templates, blog, portfolio, multi-language, SEO tools, and a visual page builder.',
    features: [
      { icon: Icon.layout, name: 'Drag & Drop Builder', badge: 'Most Used' },
      { icon: Icon.search, name: 'SEO Tools', badge: 'New' },
      { icon: Icon.file, name: 'Blog & Portfolio' },
      { icon: Icon.chart, name: 'Analytics' },
      { icon: Icon.lock, name: 'Role Management' },
      { icon: Icon.grid, name: '21+ Templates' },
    ],
    href: 'https://xgenious.com/our-products/nexelit-multipurpose-website-business-management-system-cms/',
    image: '/products/nexelit.png',
  },
];

function FeatureChip({ feature }: { feature: Feature }) {
  return (
    <div className="flex items-center gap-2 bg-white border border-[#E4E4E7] rounded-lg px-3 py-2.5">
      <span className="text-[#52525b] flex-shrink-0">{feature.icon}</span>
      <span className="text-[12px] font-medium text-[#3f3f46] leading-none">{feature.name}</span>
      {feature.badge === 'New' && (
        <span className="ml-auto text-[10px] font-semibold px-1.5 py-0.5 rounded bg-[#ec7161] text-white leading-none flex-shrink-0">
          New
        </span>
      )}
      {feature.badge === 'Most Used' && (
        <span className="ml-auto text-[10px] font-semibold px-1.5 py-0.5 rounded bg-[#4F46E5] text-white leading-none flex-shrink-0">
          Most Used
        </span>
      )}
    </div>
  );
}

function ArrowDiag() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2.5 11.5 11 3M11 3H5M11 3v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function WorkShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="py-[120px]" style={{ background: '#F5F6F8' }}>
      <div className="container-page">
        {/* Header */}
        <div className="text-center mb-14 max-w-[640px] mx-auto">
          <SectionBadge className="mb-5">Work Showcase</SectionBadge>
          <h2 className="text-[44px] leading-[52px] font-semibold text-[#0F1112] tracking-[-0.01em]">
            Launch On a Ready-Made SaaS
          </h2>
          <p className="mt-4 text-[#484848] text-[15px] leading-6 max-w-[440px] mx-auto">
            Seven productized SaaS platforms you can deploy today. Managed hosting, multi-tenant,
            subscription priced. White label available.
          </p>
        </div>

        {/* Accordion list */}
        <div className="border-t border-[#E4E4E7]">
          {PRODUCTS.map((product, i) => {
            const isActive = activeIdx === i;
            return (
              <div key={product.name} className="border-b border-[#E4E4E7]">
                {isActive ? (
                  /* ── Expanded card ── */
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="py-8 flex flex-col lg:flex-row gap-10 items-start"
                  >
                    {/* Left */}
                    <div className="flex flex-col gap-6 flex-1 min-w-0">
                      <div>
                        <p className="text-[12px] font-medium text-[#ec7161] mb-1">{product.tagline}</p>
                        <h3 className="text-[32px] font-bold text-[#0F1112] leading-[38px] mb-3">
                          {product.name}
                        </h3>
                        <p className="text-[14px] text-[#484848] leading-[22px] max-w-[400px]">
                          {product.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-2 max-w-[400px]">
                        {product.features.map((f) => (
                          <FeatureChip key={f.name} feature={f} />
                        ))}
                      </div>

                      <a
                        href={product.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0F1112] hover:text-[#ec7161] transition-colors duration-200 self-start"
                      >
                        Read More
                        <ArrowDiag />
                      </a>
                    </div>

                    {/* Right — screenshot */}
                    <div className="w-full lg:w-[380px] flex-shrink-0 rounded-xl overflow-hidden bg-[#d8d8d8]" style={{ aspectRatio: '4/3' }}>
                      {product.image ? (
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={380}
                          height={285}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-[#c8c8c8]" />
                      )}
                    </div>
                  </motion.div>
                ) : (
                  /* ── Collapsed row ── */
                  <button
                    type="button"
                    onClick={() => setActiveIdx(i)}
                    className="w-full flex items-center justify-between py-5 text-left group"
                  >
                    <h3 className="text-[22px] font-bold text-[#0F1112] leading-[28px] group-hover:text-[#ec7161] transition-colors duration-200">
                      {product.name}
                      <span className="text-[14px] font-normal text-[#A0A0A0] ml-3">{product.tagline}</span>
                    </h3>
                    <div className="flex items-center gap-4 flex-shrink-0">
                      {product.image && (
                        <div className="w-[88px] h-[58px] rounded-lg overflow-hidden bg-[#d8d8d8] flex-shrink-0">
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={88}
                            height={58}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <svg
                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                        className="text-[#A0A0A0] group-hover:text-[#ec7161] transition-colors duration-200 flex-shrink-0"
                      >
                        <path d="M9 3v12M3 9h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
