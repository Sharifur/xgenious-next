import type { ReactNode } from 'react';

type Plugin = {
  bg: string;
  border: string;
  accent: string;
  title: string;
  tagline: string;
  does: string;
  how: string[];
  icon: ReactNode;
  isNew?: boolean;
};

const PLUGINS: Plugin[] = [
  {
    bg: '#F5F3FF',
    border: '#DDD6FE',
    accent: '#7C3AED',
    title: 'AI Toolkit',
    tagline: 'Draft better offers, projects and profiles — with or without an API key',
    does:
      'Deterministic writing help for offers, services, projects and profiles, plus LinkedIn mapping and search reranking. It works without a provider, then optionally polishes output with OpenAI-compatible, DeepSeek or Ollama models.',
    how: [
      'Open a create form and use the inline AI assist box',
      'Review the generated draft, profile score or suggestions',
      'Publish, or connect a provider for LLM-polished copy',
    ],
    isNew: true,
    icon: (
      <path d="M12 3l1.9 5.8H20l-4.9 3.6 1.9 5.8-5-3.6-5 3.6 1.9-5.8L4 8.8h6.1L12 3z" />
    ),
  },
  {
    bg: '#EEF2FF',
    border: '#C7D2FE',
    accent: '#4F46E5',
    title: 'AI Engine',
    tagline: 'Smarter search ranking, recommendations and related listings',
    does:
      'Parses intent from a query or job description, scores candidates against skills, category, level, budget and recency, then ranks jobs, services and talent. It also powers recommendations and related listings — no API key required.',
    how: [
      'Enable the plugin and choose ranking weights',
      'Searchers get intent-ranked results and guided CTAs',
      'Clients and freelancers see recommended and related listings',
    ],
    isNew: true,
    icon: (
      <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3M7 7h10v10H7V7z" />
    ),
  },
  {
    bg: '#ECFEFF',
    border: '#A5F3FC',
    accent: '#0891B2',
    title: 'AI Power',
    tagline: 'Multi-provider AI for content, SEO, moderation and translation',
    does:
      'Connects OpenAI, Gemini, Anthropic, DeepSeek and Ollama for text generation across admin and frontend. Includes a content writer, SEO generator, moderation, semantic search, translation and images, with usage and cost tracking.',
    how: [
      'Add one or more provider API keys',
      'Create prompt presets by input type and category',
      'Use inline AI buttons across admin forms and frontend tools',
    ],
    isNew: true,
    icon: (
      <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
    ),
  },
  {
    bg: '#EFF6FF',
    border: '#BFDBFE',
    accent: '#2563EB',
    title: 'NDA Plugin',
    tagline: 'Confidentiality agreements signed by both parties',
    does:
      'Attaches an NDA to any order with typed signatures, timestamps, IP evidence, PDF downloads and an immutable signed record. Admins can make the NDA free or charge a fee through the wallet or a supported gateway.',
    how: [
      'Write the agreement template and set free or paid',
      'Both client and freelancer sign from the order page',
      'Download the signed PDF or review status from admin',
    ],
    isNew: true,
    icon: (
      <path d="M6 3h8l4 4v14H6V3zm8 0v4h4M9 12h6M9 16h4" />
    ),
  },
  {
    bg: '#FEF2F2',
    border: '#FECACA',
    accent: '#DC2626',
    title: 'Security Plugin',
    tagline: 'Keep deals on-platform and moderate bad actors',
    does:
      'Filters specific words in chat to stop users sharing email or phone numbers off-platform. Admins can ban users and restrict clients or freelancers.',
    how: [
      'Admin sets a blocklist of words, emails, and phone patterns',
      'Chat messages are scanned in real time and flagged content is blocked',
      'Violating users get banned or restricted from the dashboard',
    ],
    icon: (
      <path d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4zm-2 9l1.5 1.5L15 9" />
    ),
  },
  {
    bg: '#FFFBEB',
    border: '#FDE68A',
    accent: '#B45309',
    title: 'Impersonate Plugin',
    tagline: 'See the marketplace exactly as a client or freelancer',
    does:
      'Adds a Login as action to the admin user list and user details page, with a confirmation dialog, a visible impersonation banner and an audit trail. Permission-controlled so only support roles can use it.',
    how: [
      'Grant the impersonate-users permission',
      'Click Login as on a user record',
      'Reproduce the issue, then exit the impersonated session',
    ],
    isNew: true,
    icon: (
      <path d="M8 7a3 3 0 106 0 3 3 0 00-6 0zM5 21v-2a5 5 0 0110 0v2M17 8h4m-2-2l2 2-2 2" />
    ),
  },
  {
    bg: '#F0FDF4',
    border: '#BBF7D0',
    accent: '#16A34A',
    title: 'Affiliate Marketing Plugin',
    tagline: 'Turn users into a sales channel with tracked referrals',
    does:
      'Creates ?aff= affiliate links with first-touch or last-touch attribution, tracks signup, login and hire conversions, and requires admin approval before crediting the affiliate wallet. Includes a dashboard panel.',
    how: [
      'Set the commission rate and attribution window',
      'Affiliates share their tracked link',
      'Approve conversions to credit wallet payouts',
    ],
    isNew: true,
    icon: (
      <path d="M6 12a2 2 0 104 0 2 2 0 00-4 0zm10-7a2 2 0 104 0 2 2 0 00-4 0zm0 14a2 2 0 104 0 2 2 0 00-4 0zM9.5 10.5l5-3.5M9.5 13.5l5 3.5" />
    ),
  },
  {
    bg: '#FDF2F8',
    border: '#FBCFE8',
    accent: '#DB2777',
    title: 'Coupons Plugin',
    tagline: 'Scoped discounts for orders, subscriptions, connects and promotions',
    does:
      'Supports percent or fixed discounts with project, job, offer, hourly, promotion, subscription and connect scopes. Adds caps, minimum order values, date windows, usage limits, instant quotes and an admin redemption ledger.',
    how: [
      'Create a coupon and choose its scope',
      'Set the discount, cap, dates and usage limits',
      'Clients apply it at checkout; admins track redemptions',
    ],
    isNew: true,
    icon: (
      <path d="M4 7h16v4a2 2 0 000 4v4H4v-4a2 2 0 000-4V7zm5 0v10" />
    ),
  },
  {
    bg: '#FAF5FF',
    border: '#E9D5FF',
    accent: '#9333EA',
    title: 'Email Marketing Plugin',
    tagline: 'Sync users and buyers to ten email platforms',
    does:
      'Connects Mailchimp, ActiveCampaign, ConvertKit, MailerLite, Brevo, GetResponse, Constant Contact, Klaviyo, Aweber or SendGrid, then syncs contacts on signup and paid orders with per-provider list and tag mapping.',
    how: [
      'Choose a provider and add its API key',
      'Map lists and tags for signup and purchase events',
      'Send a test contact, then enable sync',
    ],
    isNew: true,
    icon: (
      <path d="M3 5h18v14H3V5zm0 1l9 7 9-7" />
    ),
  },
  {
    bg: '#F0FDFA',
    border: '#99F6E4',
    accent: '#0D9488',
    title: 'Referrals Plugin',
    tagline: 'Reward users for bringing new clients and freelancers',
    does:
      'Gives every user a tamper-evident referral link and rewards signups or orders with bonuses and commission. Qualification can wait for email verification, and rewards appear in a dedicated dashboard panel.',
    how: [
      'Set the signup bonus and order commission',
      'Users share their referral link',
      'Rewards credit after the qualifying event',
    ],
    isNew: true,
    icon: (
      <path d="M20 12v8H4v-8M2 8h20v4H2V8zm10 0v12M12 8C10 8 8 7 8 5.5S9 3 10.5 3 12 5 12 8zm0 0c2 0 4-1 4-2.5S15 3 13.5 3 12 5 12 8z" />
    ),
  },
  {
    bg: '#FFF7ED',
    border: '#FED7AA',
    accent: '#EA580C',
    title: 'Subscription Offers Plugin',
    tagline: 'Let freelancers sell recurring service subscriptions',
    does:
      'Adds monthly or annual service offers with plans, client subscriptions, invoices and deliverables. Orders activate subscriptions automatically, with a default 10% platform commission and a full admin view.',
    how: [
      'A freelancer creates an offer and its plans',
      'The client subscribes and pays through checkout',
      'Invoices and deliverables generate automatically',
    ],
    isNew: true,
    icon: (
      <path d="M4 7h16v13H4V7zm0 4h16M8 3v4M16 3v4M9 15l2 2 4-4" />
    ),
  },
  {
    bg: '#F8FAFC',
    border: '#E2E8F0',
    accent: '#475569',
    title: 'Reports Plugin',
    tagline: 'Operational and financial reporting in one place',
    does:
      'Adds reports for overview, freelancers, clients, jobs, projects, orders, earnings, withdrawals and subscriptions, with filters and date presets. A read-only reports-view permission keeps access controlled.',
    how: [
      'Open Reports from the admin menu',
      'Choose a report and date range',
      'Filter, compare and export the numbers you need',
    ],
    isNew: true,
    icon: (
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
    ),
  },
  {
    bg: '#FFFBEB',
    border: '#FDE68A',
    accent: '#B45309',
    title: 'Currency Switcher Plugin',
    tagline: 'Let each visitor browse in their own currency',
    does:
      'Adds admin-managed currencies and conversion rates plus a per-user currency switch. Display prices convert through the configured rate while checkout still charges in the gateway\'s supported currency.',
    how: [
      'Add currencies and conversion rates',
      'Enable the switcher for visitors',
      'Each user\'s choice is stored and applied across listings',
    ],
    isNew: true,
    icon: (
      <path d="M4 7h13l-3-3M20 17H7l3 3M12 6v12M15 9a3 3 0 00-3-2c-1.7 0-3 .8-3 2s1.3 2 3 2 3 .8 3 2-1.3 2-3 2a3 3 0 01-3-2" />
    ),
  },
  {
    bg: '#F7FEE7',
    border: '#D9F99D',
    accent: '#4D7C0F',
    title: 'SEO Tools Plugin',
    tagline: 'Per-URL SEO rules, schemas and noindex controls',
    does:
      'Takes over core SEO seams with exact, prefix and regex URL rules, templates for every page type, JSON-LD schema for jobs, services, profiles and breadcrumbs, plus robots directives and per-entity noindex.',
    how: [
      'Create rules or use page-type templates',
      'Set titles, descriptions, schema and robots directives',
      'Preview metadata and publish without code edits',
    ],
    isNew: true,
    icon: (
      <path d="M11 4a7 7 0 104.9 12L21 21M11 8v3l2 1" />
    ),
  },
  {
    bg: '#EEF2FF',
    border: '#C7D2FE',
    accent: '#4F46E5',
    title: 'Webhooks Plugin',
    tagline: 'Send signed events to your CRM, ERP or automation stack',
    does:
      'Delivers 60+ events across users, jobs, projects, proposals, orders, wallet, subscriptions and commissions. Each endpoint gets an HMAC secret, SSRF protection, five retries with backoff and a full delivery log.',
    how: [
      'Add an endpoint URL and secret',
      'Choose the events it should receive',
      'Monitor deliveries, responses and retries from admin',
    ],
    isNew: true,
    icon: (
      <path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 10-5.7-5.7l-1 1M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 105.7 5.7l1-1" />
    ),
  },
  {
    bg: '#FFF1F2',
    border: '#FECDD3',
    accent: '#E11D48',
    title: 'Announcements Plugin',
    tagline: 'Site-wide bars and popups with scheduling and targeting',
    does:
      'Publishes announcement bars or popups without touching layouts. Supports scheduling windows, audience targeting and per-version dismissal stored in the browser, with a dedicated manage permission.',
    how: [
      'Create the announcement and choose bar or popup',
      'Set the schedule and target audience',
      'Publish; dismissals are remembered per version',
    ],
    isNew: true,
    icon: (
      <path d="M4 9v6h4l10 4V5L8 9H4zm14-4v14M7 15v4" />
    ),
  },
  {
    bg: '#F0F9FF',
    border: '#BAE6FD',
    accent: '#0284C7',
    title: 'Pesapal Plugin',
    tagline: 'Hosted cards and mobile money checkout for Africa',
    does:
      'Adds Pesapal API v3 hosted checkout with IPN and return-URL verification. One callback route settles orders, wallet deposits, subscriptions and NDA fees by encoding the payment type and record ID in the merchant reference.',
    how: [
      'Add your Pesapal consumer key and secret',
      'Register the IPN URL and enable the gateway',
      'Customers pay on Pesapal\'s hosted page; IPN confirms',
    ],
    isNew: true,
    icon: (
      <path d="M3 6h18v12H3V6zm0 4h18M7 15h3" />
    ),
  },
  {
    bg: '#ECFDF5',
    border: '#A7F3D0',
    accent: '#059669',
    title: 'SePay Plugin',
    tagline: 'VietQR bank transfers with automatic confirmation',
    does:
      'Generates VietQR codes, matches incoming transfers by payment code and confirms them through an HMAC or API-key webhook. Handles VND conversion and settles wallets, orders, subscriptions and promotions.',
    how: [
      'Connect your bank and add SePay credentials',
      'Set the webhook to /sepay/ipn and enable it',
      'The customer scans the VietQR code; the webhook marks it paid',
    ],
    isNew: true,
    icon: (
      <path d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 3h3v3h-3v-3zm3-3h3v3" />
    ),
  },
  {
    bg: '#ECFEFF',
    border: '#A5F3FC',
    accent: '#0891B2',
    title: 'SMS Gateway Plugin',
    tagline: 'OTP and SMS delivery across 23+ providers',
    does:
      'Adds phone verification and OTP login through 23+ drivers spanning Global, India, Bangladesh, Middle East, Africa, Latin America and WhatsApp, including Twilio, Vonage, MSG91, SSL Wireless, Unifonic and Gupshup.',
    how: [
      'Choose a provider and add its credentials',
      'Enable phone verification or OTP login',
      'Users receive a code before dashboard access',
    ],
    isNew: true,
    icon: (
      <path d="M8 2h8a2 2 0 012 2v16a2 2 0 01-2 2H8a2 2 0 01-2-2V4a2 2 0 012-2zm2 15h4" />
    ),
  },
  {
    bg: '#FFFBEB',
    border: '#FDE68A',
    accent: '#D97706',
    title: 'CoinPayments Plugin',
    tagline: 'Accept crypto payments with automatic IPN settlement',
    does:
      'Adds a CoinPayments gateway with IPN verification and generic payment.complete settlement, ported from the legacy CoinPaymentGateway module into the plugin framework.',
    how: [
      'Add your merchant ID and IPN secret',
      'Set the IPN URL and enable the gateway',
      'Customers pay in crypto; IPN settles the order',
    ],
    icon: (
      <path d="M12 3a9 9 0 100 18 9 9 0 000-18zm0 4v10m3-7a3 3 0 00-3-2c-1.7 0-3 .8-3 2s1.3 2 3 2 3 .8 3 2-1.3 2-3 2a3 3 0 01-3-2" />
    ),
  },
  {
    bg: '#FAF5FF',
    border: '#E9D5FF',
    accent: '#9333EA',
    title: 'YooMoney Plugin',
    tagline: 'YooMoney wallet and card payments',
    does:
      'Adds a YooMoney gateway with notification verification and payment.complete settlement, ported from the legacy YooMoneyPaymentGateway module and managed from its own settings page.',
    how: [
      'Add your shop ID and secret',
      'Set the notification URL and enable the gateway',
      'Customers pay; the notification settles the order',
    ],
    icon: (
      <path d="M3 7h18v12H3V7zm0 4h18M7 11h4" />
    ),
  },
  {
    bg: '#F0F9FF',
    border: '#BAE6FD',
    accent: '#0284C7',
    title: 'Hourly Plugin',
    tagline: 'Hire freelancers by the hour with automatic time tracking',
    does:
      'Lets clients hire freelancers on an hourly basis instead of a fixed price. Logged work hours are tracked automatically and billed transparently.',
    how: [
      'Freelancer starts the timer when work begins on an hourly contract',
      'The plugin records every tracked hour against the project',
      'Client is billed for the exact hours worked — no guesswork',
    ],
    icon: (
      <path d="M12 7v5l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    bg: '#F0F9FF',
    border: '#BAE6FD',
    accent: '#0284C7',
    title: 'Cloud Storage Plugin',
    tagline: 'Store files on AWS, Cloudflare R2 and more',
    does:
      'Offload file storage to a cloud provider instead of your own server. Supports AWS S3, Cloudflare R2, and other S3-compatible buckets.',
    how: [
      'Admin connects cloud provider keys in settings',
      'Uploaded files route straight to the cloud bucket',
      'Server disk stays light while storage scales infinitely',
    ],
    icon: (
      <path d="M7 18a4 4 0 010-8 5 5 0 019.6-1.5A3.5 3.5 0 0118 18H7z" />
    ),
  },
  {
    bg: '#F0FDF4',
    border: '#BBF7D0',
    accent: '#16A34A',
    title: 'Community Plugin',
    tagline: 'Run a built-in Q&A community for your platform',
    does:
      'Adds a community space where users and clients can post questions and get answers — turning your marketplace into an engaged community.',
    how: [
      'Members post questions or topics to the community feed',
      'Other freelancers and clients reply with answers',
      'Best answers surface knowledge and keep users coming back',
    ],
    icon: (
      <path d="M17 8h2a2 2 0 012 2v8l-3-2H9a2 2 0 01-2-2M3 4h11a2 2 0 012 2v6a2 2 0 01-2 2H7l-4 3V6a2 2 0 012-2z" />
    ),
  },
  {
    bg: '#FFF7ED',
    border: '#FED7AA',
    accent: '#EA580C',
    title: 'Promotional Plugin',
    tagline: 'Paid boosts for freelancer profiles and projects',
    does:
      'Lets freelancers promote their profile or projects for extra visibility — an added revenue stream for the platform admin.',
    how: [
      'Freelancer picks a profile or project to promote',
      'They pay to boost it to the top of listings and search',
      'Admin earns revenue while the freelancer gets more leads',
    ],
    icon: (
      <path d="M3 11l18-5v12L3 13v-2zm0 0v6m8-7.5v9" />
    ),
  },
  {
    bg: '#FDF4FF',
    border: '#E9D5FF',
    accent: '#9333EA',
    title: 'Freelancer Level Plugin',
    tagline: 'Gamified levels that unlock as freelancers grow',
    does:
      'Define freelancer level tiers that unlock automatically based on your rules — giving freelancers clear goals to become high-value members.',
    how: [
      'Admin sets level categories and unlock criteria',
      'Freelancers level up automatically as they hit targets',
      'Higher levels reward top performers and motivate the rest',
    ],
    icon: (
      <path d="M12 15a7 7 0 100-14 7 7 0 000 14zm0 0v6m-4 0h8M9 8l3 3 3-4" />
    ),
  },
];

export default function PremiumPlugins() {
  return (
    <section className="py-16 sm:py-20 lg:py-[100px] bg-[#FAFAFB]">
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-12">
          <span className="inline-block text-[13px] font-semibold tracking-wide uppercase text-[#4F46E5] bg-[#EEF2FF] border border-[#C7D2FE] rounded-full px-4 py-1.5 mb-4">
            Premium Plugins
          </span>
          <h2 className="text-[32px] sm:text-[44px] font-bold text-[#0F1112] leading-tight mb-4">
            26 Plugins to<br className="hidden sm:block" /> Extend Your Marketplace
          </h2>
          <p className="text-[#484848] text-[15px] sm:text-[17px] leading-7 max-w-[640px] mx-auto">
            From AI drafting and NDA signing to SEO, webhooks and local payment gateways — every plugin installs into Xilancer and adds a new revenue stream or trust feature. No core code changes needed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PLUGINS.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border p-[28px] flex flex-col gap-5"
              style={{ background: p.bg, borderColor: p.border }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: '#fff', border: `1px solid ${p.border}` }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={p.accent}
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {p.icon}
                  </svg>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-[21px] font-semibold leading-[1.25]" style={{ color: '#252C38' }}>
                    {p.title}
                  </h3>
                  {p.isNew && (
                    <span
                      className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full text-white"
                      style={{ background: p.accent }}
                    >
                      New
                    </span>
                  )}
                </div>
              </div>

              <p className="text-[14px] font-medium" style={{ color: p.accent }}>
                {p.tagline}
              </p>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-[#6B7280] mb-1.5">
                  What it does
                </p>
                <p className="text-[15px] leading-6 text-[#374253]">{p.does}</p>
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-[#6B7280] mb-2">
                  How it works
                </p>
                <ol className="flex flex-col gap-2">
                  {p.how.map((step, i) => (
                    <li key={i} className="flex gap-3 text-[14px] leading-6 text-[#374253]">
                      <span
                        className="shrink-0 w-5 h-5 rounded-full text-[11px] font-bold text-white flex items-center justify-center mt-0.5"
                        style={{ background: p.accent }}
                      >
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
