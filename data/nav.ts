export interface DropdownItem {
  label: string;
  href: string;
  description?: string;
}

export const servicesDropdown: DropdownItem[] = [
  { label: 'Web App Development', href: '/web-app-development-company', description: 'B2B portals, dashboards & enterprise platforms' },
  { label: 'Mobile App Development', href: '/mobile-app-development', description: 'iOS, Android & cross-platform apps' },
  { label: 'SaaS Development', href: '/custom-saas-development-company', description: 'End-to-end SaaS products from MVP to scale' },
  { label: 'AI Agent Development', href: '/ai-agent-development-services', description: 'Custom AI agents & workflow automation' },
];

export const productsDropdown: DropdownItem[] = [
  { label: 'Nazmart', description: 'Multi-Tenancy eCommerce SAAS', href: '#' },
  { label: 'Helpnest', description: 'AI Power Support Chatbot', href: '#' },
  { label: 'Nexelit', description: 'Multipurpose Website CMS', href: '#' },
  { label: 'Fundorex', description: 'Crowdfunding Platform', href: '#' },
  { label: 'Xilancer', description: 'Freelancer Marketplace Platform', href: '#' },
  { label: 'Prohandy', description: 'On-Demand Service Provider Marketplace', href: '#' },
];

export const companyDropdown: DropdownItem[] = [
  { label: 'About Us', href: '/about' },
  { label: 'Documentation', href: '#' },
];

export const footerLinks = {
  links: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Refund Policy', href: '/refund' },
    { label: 'Support Center', href: '#' },
    { label: 'Support Policy', href: '#' },
    { label: 'Terms Of Service', href: '/terms' },
  ],
  services: [
    { label: 'Web App Development', href: '/web-app-development-company' },
    { label: 'Mobile App Development', href: '/mobile-app-development' },
    { label: 'SaaS Development', href: '/custom-saas-development-company' },
    { label: 'AI Agent Development', href: '/ai-agent-development-services' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Support Center', href: '#' },
    { label: 'Contact', href: '/contact' },
    { label: 'My Account', href: '#' },
  ],
};
