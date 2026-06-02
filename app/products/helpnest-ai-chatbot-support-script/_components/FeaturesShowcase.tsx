import Image from 'next/image';
import { COLOR, LIGHT_COLOR } from './constants';

const ITEMS = [
  {
    title: 'Live AI Support — Intelligent & Data-Driven',
    desc: 'Automate your first response with AI that understands context, not just keywords. Manage subscriptions, revenue analytics, and platform settings from a single dashboard.',
    points: [
      'Complete user and subscription management dashboard',
      'Revenue analytics and business metrics',
      'Flexible plan creation and billing automation',
      'Role-based access control for team members',
    ],
    img: '/products/helpnest-feature-ai.jpg',
    imgBg: '#F9EEF6',
    reverse: false,
  },
  {
    title: 'Tickets Organize and Track Customer Issues',
    desc: 'A ticketing system helps you organize and track customer issues. Manage ticket queues, monitor team workload, and close tickets faster with detailed conversation history.',
    points: [
      'Complete user and transaction management dashboard',
      'Revenue analytics with usage metrics',
      'Flexible plan creation and platform customisation',
      'Role-based access control for team members',
    ],
    img: '/products/helpnest-feature-tickets.jpg',
    imgBg: '#D8F5F5',
    reverse: true,
  },
  {
    title: 'Powerful Admin Panel for SaaS Owners',
    desc: 'Your command centre for managing the entire multi-tenant SaaS platform. Monitor licenses, manage clients, configure plans, and get real-time accuracy about the state of your business.',
    points: [
      'Complete user and subscription management dashboard',
      'Revenue analytics and business metrics',
      'Global settings and platform customisation',
      'Role-based access control for team members',
    ],
    img: '/products/helpnest-feature-admin.png',
    imgBg: '#EAE9EF',
    reverse: false,
  },
  {
    title: 'Client Dashboard for Your Customers',
    desc: 'Modern, intuitive dashboard where your clients manage their AI chatbots, knowledge bases, tickets, and team members. White-label ready with subscription billing options.',
    points: [
      'Complete user and subscription management dashboard',
      'Revenue analytics and business metrics',
      'Flexible plan creation and platform customisation',
      'Role-based access control for team members',
    ],
    img: '/products/helpnest-feature-client.jpg',
    imgBg: '#F6F4EF',
    reverse: true,
  },
];

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 mt-0.5">
      <circle cx="10" cy="10" r="10" fill={COLOR} fillOpacity="0.12" />
      <path d="M6 10l3 3 5-5" stroke={COLOR} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function FeaturesShowcase() {
  return (
    <section className="py-16 lg:py-[100px] bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1100px] mx-auto">

        <div className="text-center mb-16 max-w-[600px] mx-auto">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
            Intelligent Features
          </div>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-4">
            Intelligent Features for Modern Chatbots
          </h2>
          <p className="text-[15px] text-[#6b7280] leading-7">
            Business-intelligent, context-focused designs to optimize conversations, improve customer engagement.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {ITEMS.map((item) => (
            <div
              key={item.title}
              className={`flex flex-col ${item.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-10 rounded-2xl p-4 sm:p-6 lg:p-[30px]`}
              style={{ background: '#F5F6F8' }}
            >
              <div className="flex-1 flex flex-col gap-5">
                <h3 className="text-[22px] sm:text-[26px] font-bold text-[#0F1112] leading-tight">{item.title}</h3>
                <p className="text-[15px] text-[#6b7280] leading-7">{item.desc}</p>
                <ul className="flex flex-col gap-2.5">
                  {item.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-[14px] text-[#374151]">
                      <Check />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="flex-1 w-full rounded-2xl overflow-hidden border border-[#E5E7EC] shadow-sm flex items-center justify-center"
                style={item.imgBg ? { background: item.imgBg, padding: '30px' } : {}}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={520}
                  height={340}
                  className="w-full object-cover object-top rounded-xl"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
