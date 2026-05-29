/* ────────────────────────────────────────────────────────────
   Page content for the SaaS Development page.
   Colors and structure derived from Figma node 5639:58860.
   ──────────────────────────────────────────────────────────── */

export const trustedLogos = [
  'Envato',
  'Codecanyon',
  'ThemeForest',
  'GitHub',
  'Vercel',
  'AWS',
  'Stripe',
];

/* ── SERVICES ── */
export type Service = {
  number: string;
  title: string;
  description: string;
  cta: string;
  bg: string;
  illustration: 'saas' | 'web' | 'mobile' | 'ai' | 'mvp';
  href: string;
  /** Optional asset paths — when provided, the card uses real images
   *  instead of the inline SVG illustration. */
  bgImage?: string;
  illustrationImage?: string;
};

export const services: Service[] = [
  {
    number: '01',
    title: 'SaaS Development',
    description:
      'Multi-tenant architecture, subscription billing, SSO, compliance — engineered in from day one, never bolted on later.',
    cta: 'Plan your SaaS build',
    bg: '#E1E7F3',
    illustration: 'saas',
    href: '/custom-saas-development-company',
    bgImage: '/services/saas-development-service-bg.jpg',
    illustrationImage: '/services/saas-illustration.png',
  },
  {
    number: '02',
    title: 'Web App Development',
    description:
      'Internal tools, B2B portals, enterprise dashboards, and CRMs — built from the schema up, never retrofitted from a template.',
    cta: 'Scope your platform',
    bg: '#CFF3E0',
    illustration: 'web',
    href: '/web-app-development-company',
    bgImage: '/services/web-app-development-bg.jpg',
    illustrationImage: '/services/web-app-development-illustration.png',
  },
  {
    number: '03',
    title: 'Mobile App Development',
    description:
      'iOS and Android shipped to the stores. Flutter for cross-platform speed, native where the build demands it. Push, offline, biometrics, payments — all production-grade.',
    cta: 'Ship your mobile app',
    bg: '#F5E1CD',
    illustration: 'mobile',
    href: '/mobile-app-development',
    bgImage: '/services/mobile-app-development-bg.jpg',
    illustrationImage: '/services/mobile-app-development-illustration.png',
  },
  {
    number: '04',
    title: 'AI Agent Development',
    description:
      'RAG pipelines, agentic workflows, and voice agents on Claude and OpenAI — with eval harnesses, observability, and a real ROI model engineered in from day one.',
    cta: 'Deploy an AI agent',
    bg: '#EADBF5',
    illustration: 'ai',
    href: '/ai-agent-development-services',
    bgImage: '/services/ai-agent-development-bg.jpg',
    illustrationImage: '/services/ai-agent-development-illustration.png',
  },
  {
    number: '05',
    title: 'MVP Development',
    description:
      'Working product in 6–8 weeks. Real users, validated metrics, and a clean codebase that scales into the full SaaS — not throwaway prototype code.',
    cta: 'Validate your idea',
    bg: '#D6EEF8',
    illustration: 'mvp',
    href: '/contact',
  },
];

/* ── WHY CHOOSE US — 3 dark differentiator cards ── */
export type WhyChooseCard = {
  icon: 'code' | 'package' | 'shield';
  title: string;
  body: string;
  quote: string;
  quoteAttribution: string;
};

export const whyChooseCards: WhyChooseCard[] = [
  {
    icon: 'code',
    title: 'Greenfield builds only.',
    body:
      'Every engagement is a from-scratch build on a modern stack — React, Next.js, Node, Laravel, Flutter, AWS. No surprise "starter" code that breaks at scale.',
    quote:
      'The code quality was outstanding. Clean architecture, well-documented, and built to scale. Not a template in sight.',
    quoteAttribution: 'Founder, eCommerce SaaS',
  },
  {
    icon: 'package',
    title: 'We ship our own software.',
    body:
      '13,000+ active users across Nazmart, Xilancer, Prohandy, Fundorex, Nexelit, Helpnest, Grenmart. We know what running a real product takes — because we run several.',
    quote:
      'Xgenious delivered in 14 weeks what two other agencies said would take 6 months. They clearly know production software.',
    quoteAttribution: 'CTO, Marketplace Platform',
  },
  {
    icon: 'shield',
    title: 'Compliance-ready from day one.',
    body:
      'GDPR, HIPAA, SOC 2-ready architectures by default. DPA on every engagement. UK Ltd, US Delaware C-Corp, and UAE DMCC entities so your procurement team can sign locally.',
    quote:
      'DPA signed in 24 hours. Threat model reviewed on the architecture call. That level of professionalism is rare at this price point.',
    quoteAttribution: 'VP Engineering, B2B SaaS',
  },
];

/* ── STATS — 4 numbered stat cards under the differentiator cards ── */
export const stats = [
  { number: '01', value: 13000, suffix: '+', label: 'Businesses Served' },
  { number: '02', value: 4,    suffix: '',   label: 'Industry Awards' },
  { number: '03', value: 25,   suffix: '+', label: 'Team Members' },
  { number: '04', value: 7,    suffix: '',   label: 'Live SaaS Products' },
];

/* ── OWN PRODUCTS — shown in WhyChooseUs section ── */
export type OwnProduct = {
  name: string;
  description: string;
  badges: string[];
  image: string;
  href: string;
};

export const ownProducts: OwnProduct[] = [
  {
    name: 'Nazmart',
    description: 'Multi-Tenancy eCommerce Platform (SAAS)',
    badges: ['eCommerce', 'SaaS'],
    image: '/products/nazmart.png',
    href: '/products/nazmart-multi-tenancy-ecommerce-platform',
  },
  {
    name: 'Xilancer',
    description: 'Freelancer Marketplace Platform',
    badges: ['Marketplace'],
    image: '/products/xilancer.png',
    href: '/products/xilancer-freelancer-marketplace-script',
  },
  {
    name: 'Prohandy',
    description: 'On Demand Home Service Platform',
    badges: ['Home Service', 'Marketplace'],
    image: '/products/prohandy.png',
    href: 'https://xgenious.com/our-products/prohandy-on-demand-home-service-marketplace-platform',
  },
  {
    name: 'Fundorex',
    description: 'Crowdfunding and Donation Platform',
    badges: ['Fundraising', 'Donation'],
    image: '/products/fundorex.png',
    href: 'https://xgenious.com/our-products/fundorex-crowdfunding-platform/',
  },
  {
    name: 'Helpnest',
    description: 'AI Chatbot & Customer Support SaaS Platform',
    badges: ['AI Chatbot', 'SaaS'],
    image: '/products/helpnest.png',
    href: 'https://xgenious.com/our-products/laravel-ai-chatbot-support-script/',
  },
  {
    name: 'Nexelit',
    description: 'Multipurpose Website CMS & Business CMS',
    badges: ['Drag & Drop Page Builder', '21+ Home Page'],
    image: '/products/nexelit.png',
    href: 'https://xgenious.com/our-products/nexelit-multipurpose-website-business-management-system-cms/',
  },
];

/* ── PORTFOLIO — Our Own Products ── */
export type Portfolio = {
  title: string;
  category: string;
  description: string;
  bg: string;
  accent: string;
  visual: 'laptop' | 'phone' | 'dashboard';
};

export const portfolio: Portfolio[] = [
  {
    title: 'Marketplace',
    category: 'Marketplace',
    description: 'A Marketplace Platform',
    bg: '#E0EEEA',
    accent: '#3B7A6A',
    visual: 'laptop',
  },
  {
    title: 'Nazmart',
    category: 'E-Commerce',
    description: 'Multi-Tenancy eCommerce Platform [SAAS]',
    bg: '#F5F6F8',
    accent: '#0F1112',
    visual: 'laptop',
  },
  {
    title: 'Prohandy',
    category: 'Service Marketplace',
    description: 'On Demand Home Service Platform',
    bg: '#FFE8E1',
    accent: '#F26B4E',
    visual: 'phone',
  },
  {
    title: 'Fundorex',
    category: 'Marketing',
    description: 'Crowdfunding and Donation Platform',
    bg: '#1F2127',
    accent: '#F26B4E',
    visual: 'laptop',
  },
  {
    title: 'Helpnest',
    category: 'AI Chatbot',
    description: 'AI Chatbot & Customer Support',
    bg: '#F5F6F8',
    accent: '#3B7A6A',
    visual: 'dashboard',
  },
];

/* ── TECH STACK ── */
export const techStack = [
  { name: 'React',      icon: 'react'    },
  { name: 'Next.js',    icon: 'nextjs'   },
  { name: 'Node.js',    icon: 'nodejs'   },
  { name: 'Laravel',    icon: 'laravel'  },
  { name: 'PostgreSQL', icon: 'postgres' },
  { name: 'Redis',      icon: 'redis'    },
  { name: 'Docker',     icon: 'docker'   },
  { name: 'AWS',        icon: 'aws'      },
];

/* ── PROCESS STEPS ── */
export const processSteps = [
  {
    number: '01',
    title: 'Scope',
    description:
      'We start by understanding your business goals, users, existing systems, and what\'s broken. Discovery sprint with workflow mapping, architecture sketch, scope doc, and a fixed quote — before any commitment.',
  },
  {
    number: '02',
    title: 'Solution Architecture',
    description:
      'Tech-spec doc, ER diagram, API contract, threat model, and a written security posture — all signed off with you before sprint one starts.',
  },
  {
    number: '03',
    title: 'Development & Customization',
    description:
      'React, Next.js, TypeScript, Node or Laravel API, Flutter mobile. Weekly demos your team can click through and leave feedback on.',
  },
  {
    number: '04',
    title: 'QC & Deployment',
    description:
      'End-to-end testing, observability wired (Datadog / Sentry / PostHog), DNS cutover, App Store and Play Store submission. We launch alongside your team.',
  },
];

/* ── AI AGENT ── */
export const aiFeatures = [
  { number: '01', title: 'Custom AI Agent Development', description: 'Autonomous agents with tool use, multi-step reasoning, eval harnesses — engineered for production, not demos.' },
  { number: '02', title: 'Workflow Automation',         description: 'End-to-end orchestration across your stack — Slack, CRM, payments, ticketing — wired with idempotency, retries, and observability so nothing silently fails.' },
  { number: '03', title: 'Intelligent Integrations',    description: 'LLM-native connectors for the tools you already use: Salesforce, HubSpot, Slack, Microsoft 365, Notion, custom APIs — agents that read, write, and act inside your workflow.' },
];

export const aiTabs = ['Development', 'Automation', 'Integrations'];

/* ── TESTIMONIALS ── */
export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  photoBg: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Austin Harlan',
    role: 'Founder & CEO',
    quote:
      'We explore user behavior and Motivations design meaningful Digital experiences built around Genuine user insights.',
    photoBg: '#1F2127',
  },
  {
    name: 'David Chen',
    role: 'CTO, Laraloom',
    quote:
      'We explore user behavior and Motivations design meaningful Digital experiences built around Genuine user insights.',
    photoBg: '#3F3F3F',
  },
  {
    name: 'Sarah Miller',
    role: 'Founder, HelpNest',
    quote:
      'Working with Xgenious felt like having an in-house engineering team. They pushed back on bad ideas and championed the right ones — that is rare.',
    photoBg: '#2A2A2A',
  },
  {
    name: 'Ahmed Hassan',
    role: 'Product Lead, Qixer',
    quote:
      'The AI agent integration handles 80% of our customer queries automatically. The ROI was visible within the first month.',
    photoBg: '#1A1A1A',
  },
];

/* ── FAQ ── */
export const faqs = [
  {
    question: 'How long does it take to build a SaaS from scratch?',
    answer:
      'MVP: 12–16 weeks. Full production SaaS with mobile, AI, and compliance layers: 20–24 weeks. You receive a committed launch date in the proposal — not a rolling estimate that shifts every sprint.',
  },
  {
    question: 'What\'s the best tech stack for a custom SaaS in 2026?',
    answer:
      'React + Next.js + TypeScript on the frontend. Node.js or Laravel on the API. PostgreSQL for the database. AWS for infrastructure. Flutter for cross-platform mobile. Claude or OpenAI + LangGraph + Pinecone for AI workloads. We match the stack to the build — this is our default, not a one-size-fits-all answer.',
  },
  {
    question: 'Should I hire a SaaS agency or build in-house?',
    answer:
      'Two mid-level US engineers cost roughly $260K per year — before equity, benefits, or onboarding time. Our MVP Pro engagement ships a production SaaS in 12–16 weeks. Most mid-market clients run hybrid: we ship the foundation, they hire 2 engineers to operate and extend it. We can help you structure that handoff.',
  },
  {
    question: 'What\'s the difference between multi-tenant SaaS and a custom web app?',
    answer:
      'Multi-tenant SaaS means one codebase serving many customers on subscriptions — with tenant isolation, billing, and usage limits baked into the architecture. A custom web app is one codebase serving one customer\'s workflow. Both are browser-delivered, but the architecture, data model, and pricing are completely different. We scope accordingly.',
  },
  {
    question: 'Can you add AI agents to my existing SaaS?',
    answer:
      'Yes — that\'s our AI Agent service line. We build RAG pipelines, agentic workflows, voice agents, and LLM features into existing platforms. We wire in eval harnesses, observability, and a real ROI model so you can measure what the agent is actually doing.',
  },
  {
    question: 'Who owns the code after delivery?',
    answer:
      'You do, 100%. IP transfers on final payment. Your GitHub repository, your cloud account, your App Store listing. No licenses, no revenue shares, no vendor lock-in of any kind.',
  },
];
