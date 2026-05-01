export const navLinks = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Technologies', href: '#tech-stack' },
  { label: 'Blog', href: '/blog' },
  { label: 'Hire', href: '#hire' },
  { label: 'Contact', href: '#contact' },
];

export const heroBadges = ['AI Agent', 'SaaS Platform', 'Development'];

export const trustedLogos = [
  'Envato', 'Codecanyon', 'ThemeForest', 'GitHub', 'Vercel', 'AWS', 'Stripe',
];

export const services = [
  {
    number: '01',
    title: 'SaaS Development',
    description:
      'We design and build scalable SaaS platforms from scratch — multi-tenant architecture, subscription billing, user management, and everything in between.',
    bg: '#FFE8E1',         /* Pippin — peach */
    accent: '#F26B4E',
    illustration: 'saas',
  },
  {
    number: '02',
    title: 'Web App Development',
    description:
      'High-performance web applications built with modern frameworks. From complex dashboards to customer-facing products that scale with your growth.',
    bg: '#E0EEEA',         /* light teal */
    accent: '#3B7A6A',
    illustration: 'web',
  },
  {
    number: '03',
    title: 'Mobile App Development',
    description:
      'Native and cross-platform mobile apps for iOS and Android. Built with React Native and Flutter for maximum performance and code reuse.',
    bg: '#F5F6F8',         /* cream-50 */
    accent: '#0F1112',
    illustration: 'mobile',
  },
  {
    number: '04',
    title: 'AI Agent Development',
    description:
      'Custom AI agents that automate complex workflows — from intelligent document processing to multi-step decision systems integrated into your product.',
    bg: '#0C0C0E',
    accent: '#F26B4E',
    illustration: 'ai',
    dark: true,
  },
];

export const stats = [
  { value: 7000, suffix: '+', label: 'Projects Delivered' },
  { value: 19, suffix: '+', label: 'Countries Served' },
  { value: 25, suffix: '+', label: 'Team Members' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
];

export const portfolio = [
  { title: 'Taskip SaaS', category: 'SaaS Platform', image: '/portfolio/taskip.jpg' },
  { title: 'Xgenious CRM', category: 'Web App', image: '/portfolio/crm.jpg' },
  { title: 'HelpNest', category: 'Support Platform', image: '/portfolio/helpnest.jpg' },
  { title: 'Qixer', category: 'Marketplace', image: '/portfolio/qixer.jpg' },
  { title: 'NazMart', category: 'eCommerce', image: '/portfolio/nazmart.jpg' },
  { title: 'Genius HRM', category: 'Enterprise App', image: '/portfolio/hrm.jpg' },
];

export const techStack = [
  { name: 'React', icon: 'react' },
  { name: 'Next.js', icon: 'nextjs' },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'Laravel', icon: 'laravel' },
  { name: 'PostgreSQL', icon: 'postgres' },
  { name: 'Redis', icon: 'redis' },
  { name: 'Docker', icon: 'docker' },
  { name: 'AWS', icon: 'aws' },
];

export const processSteps = [
  {
    number: '01',
    title: 'Discovery & Requirements',
    description:
      'We start by deeply understanding your business goals, user needs, and technical constraints to define a clear product roadmap.',
  },
  {
    number: '02',
    title: 'Solution Architecture',
    description:
      'Our architects design a scalable, maintainable system — choosing the right stack, patterns, and deployment strategy for your use case.',
  },
  {
    number: '03',
    title: 'Development & Customization',
    description:
      'Agile sprints with weekly demos. You see progress every step of the way and can adjust priorities based on real feedback.',
  },
  {
    number: '04',
    title: 'QA & Deployment',
    description:
      'Comprehensive testing across devices and environments, followed by a smooth production deployment with monitoring in place.',
  },
];

export const aiFeatures = [
  'Multi-Agent Automation',
  'Voice-Driven Decision Systems',
  'Intelligent Integrations',
  'Context-Aware Workflows',
  'Real-Time Data Processing',
];

export const testimonials = [
  {
    name: 'David Chen',
    role: 'CTO, Laraloom',
    photo: '/testimonials/david.jpg',
    quote:
      'Xgenious delivered our SaaS platform 3 weeks ahead of schedule. The architecture decisions they made in week one saved us months of refactoring later.',
  },
  {
    name: 'Sarah Miller',
    role: 'Founder, HelpNest',
    photo: '/testimonials/sarah.jpg',
    quote:
      'Working with Xgenious felt like having an in-house engineering team. They pushed back on bad ideas and championed the right ones. That is rare.',
  },
  {
    name: 'Ahmed Hassan',
    role: 'Product Lead, Qixer',
    photo: '/testimonials/ahmed.jpg',
    quote:
      'The AI agent integration they built handles 80% of our customer queries automatically. The ROI was visible within the first month.',
  },
];

export const faqs = [
  {
    question: 'How long does it take to build a SaaS product?',
    answer:
      'An MVP typically takes 8–14 weeks depending on complexity. We scope every project individually after the discovery phase to give you an accurate timeline.',
  },
  {
    question: 'Can we start with a Proof of Concept first?',
    answer:
      'Yes. A focused 2-4 week POC is often the best way to validate core assumptions before committing to full development. We recommend it for technically novel products.',
  },
  {
    question: 'What time zones does your team work in?',
    answer:
      'Our team is distributed across UTC+6 with overlap windows for US and EU clients. We schedule all key syncs within your business hours.',
  },
  {
    question: 'Do you take ownership of the codebase or do we?',
    answer:
      'You own 100% of the code, repositories, and IP from day one. We never lock clients in.',
  },
  {
    question: 'Can you integrate with our existing systems?',
    answer:
      'Yes. We routinely integrate with existing CRMs, ERPs, payment gateways, analytics platforms, and internal APIs. Send us your current stack and we\'ll scope it.',
  },
  {
    question: 'Do you offer ongoing support after launch?',
    answer:
      'We offer retainer-based support and maintenance plans. Most clients stay with us after launch — the team that built the product is also the best team to maintain it.',
  },
];

export const footerLinks = {
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '#contact' },
  ],
  Services: [
    { label: 'SaaS Development', href: '/services/saas-development' },
    { label: 'Web App Development', href: '/services/web-app' },
    { label: 'Mobile App', href: '/services/mobile-app' },
    { label: 'AI Agent', href: '/services/ai-agent' },
  ],
  Products: [
    { label: 'Themes', href: '#' },
    { label: 'Plugins', href: '#' },
    { label: 'Scripts', href: '#' },
    { label: 'All Products', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Refund Policy', href: '/refund' },
  ],
};
