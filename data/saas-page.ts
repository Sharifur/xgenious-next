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
  bg: string;
  illustration: 'saas' | 'web' | 'mobile' | 'ai';
  dark?: boolean;
};

export const services: Service[] = [
  {
    number: '01',
    title: 'SaaS Development',
    description:
      'We design and build scalable SaaS platforms from scratch — multi-tenant architecture, subscription billing, user management, and everything in between.',
    bg: '#FFE8E1',
    illustration: 'saas',
  },
  {
    number: '02',
    title: 'Web App Development',
    description:
      'High-performance web applications built with modern frameworks. Complex dashboards to customer-facing products that scale with growth.',
    bg: '#E0EEEA',
    illustration: 'web',
  },
  {
    number: '03',
    title: 'Mobile App Development',
    description:
      'Native and cross-platform mobile apps for iOS and Android. Built with React Native and Flutter for maximum performance and code reuse.',
    bg: '#F5F6F8',
    illustration: 'mobile',
  },
  {
    number: '04',
    title: 'AI Agent Development',
    description:
      'Custom AI agents that automate complex workflows — from intelligent document processing to multi-step decision systems integrated into your product.',
    bg: '#0C0C0E',
    illustration: 'ai',
    dark: true,
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
    title: 'Greenfield only, No script clones.',
    body:
      'Every engagement is a from-scratch build on a modern stack — React, Next.js, Node, Laravel, Flutter, AWS. No CodeCanyon forks. No copy-paste templates. No surprise "starter" code that breaks at scale.',
    quote:
      'They asked me what we actually needed before quoting. Three other shops just sent a template price.',
    quoteAttribution: 'VP Engineering, Series B Fintech',
  },
  {
    icon: 'package',
    title: 'We ship our own software.',
    body:
      'Seven SaaS products in production with paying users — Nazmart, Xilancer, Prohandy, Fundorex, Nexelit, Helpnest, Grenmart. We know what running a real product takes because we run several. That\'s how we estimate honestly.',
    quote:
      'Other agencies estimated 6 months. Xgenious finished in 14 weeks because their own products solved Problem.',
    quoteAttribution: 'VP Engineering, Series B Fintech',
  },
  {
    icon: 'shield',
    title: 'Compliance-ready from day one.',
    body:
      'GDPR, HIPAA, SOC 2-ready architectures by default. DPA on every engagement. UK Ltd, US Delaware C-Corp, and UAE DMCC entities so your procurement team can sign locally. The trust artefacts mid-market buyers need.',
    quote:
      'DPA inside 24 hours. Threat model on the architecture review call. That\'s what closed it for us.',
    quoteAttribution: 'VP Engineering, Series B Fintech',
  },
];

/* ── STATS — 4 numbered stat cards under the differentiator cards ── */
export const stats = [
  { number: '01', value: 7000, suffix: '+', label: 'Customer Happy' },
  { number: '02', value: 19,   suffix: '+', label: 'Awards Achieved' },
  { number: '03', value: 25,   suffix: '+', label: 'Team Members' },
  { number: '04', value: 100,  suffix: '+', label: 'Product develop' },
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
    title: 'Discovery & Requirements',
    description:
      'Deeply understanding your business goals, user needs, and technical constraints to define a clear roadmap.',
  },
  {
    number: '02',
    title: 'Solution Architecture',
    description:
      'A scalable, maintainable system — choosing the right stack, patterns, and deployment strategy for your use case.',
  },
  {
    number: '03',
    title: 'Development & Customization',
    description:
      'Agile sprints with weekly demos. You see progress every step and adjust priorities based on real feedback.',
  },
  {
    number: '04',
    title: 'QA & Deployment',
    description:
      'Comprehensive testing across devices and environments, followed by a smooth production deployment.',
  },
];

/* ── AI AGENT ── */
export const aiFeatures = [
  { number: '01', title: 'Custom AI Agent Development',  description: 'Autonomous reasoning, tool use, multi-step workflows' },
  { number: '02', title: 'Work flow Automation',         description: 'End-to-end orchestration across systems and teams' },
  { number: '03', title: 'Data-Driven Decision Systems', description: 'Predictive models tuned to your operational reality' },
  { number: '04', title: 'Intelligent Integrations',     description: 'LLM-native connectors for the tools you already use' },
];

export const aiTabs = ['Development', 'Automation', 'Data-Driven', 'Integrations'];

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
    question: 'Does webflow support custom code?',
    answer:
      'Webflow is a no-code visual development platform that allows you to design, build, and launch fully responsive websites without relying on traditional coding.',
  },
  {
    question: 'How fast can you actually ship a SaaS MVP?',
    answer:
      'Webflow is a no-code visual development platform that allows you to design, build, and launch fully responsive websites without relying on traditional coding.',
  },
  {
    question: 'What does the fixed price cover — and what\'s excluded?',
    answer:
      'The fixed price covers everything in the agreed scope. Out of scope items are quoted separately and only after you approve them.',
  },
  {
    question: 'Where will my customer data be hosted?',
    answer:
      'You choose. We deploy to your AWS, GCP, or Azure account by default. We also offer EU and UAE residency for regulated workloads.',
  },
  {
    question: 'Do you sign GDPR DPAs? What about HIPAA?',
    answer:
      'Yes. DPA inside 24 hours. We architect for HIPAA technical safeguards by default and can sign BAAs with US entities.',
  },
  {
    question: 'Can we work under NDA before sharing our idea?',
    answer:
      'Always. Mutual NDA before the first call if you ask for it. We also keep all engagements confidential by default.',
  },
  {
    question: 'What happens after launch — do you offer support retainers?',
    answer:
      'We offer retainer-based support and maintenance plans. Most clients stay with us after launch — the team that built the product is also the best team to maintain it.',
  },
];
