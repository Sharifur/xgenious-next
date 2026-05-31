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
  { label: 'MVP Development', href: '/saas-mvp-development', description: 'Working product in 6–8 weeks, built to scale' },
];

export const productsDropdown: DropdownItem[] = [
  { label: 'Nazmart', description: 'Multi-Tenancy eCommerce SAAS', href: '/products/nazmart-multi-tenancy-ecommerce-platform' },
  { label: 'Helpnest', description: 'AI Power Support Chatbot', href: '/products/helpnest-ai-chatbot-support-script' },
  { label: 'Nexelit', description: 'Multipurpose Website CMS', href: 'https://xgenious.com/our-products/nexelit-multipurpose-website-business-management-system-cms/' },
  { label: 'Fundorex', description: 'Crowdfunding Platform', href: '/products/fundorex-crowdfunding-platform' },
  { label: 'Xilancer', description: 'Freelancer Marketplace Platform', href: '/products/xilancer-freelancer-marketplace-script' },
  { label: 'Prohandy', description: 'On-Demand Service Provider Marketplace', href: 'https://xgenious.com/our-products/prohandy-on-demand-home-service-marketplace-platform' },
];

export const freeSoftwareDropdown: DropdownItem[] = [
  { label: 'Genius School Management', description: 'Free school ERP — Laravel 11 + React 18', href: '/free-software/genius-school-management' },
  { label: 'Genius CRM', description: 'Free self-hosted CRM — Laravel 12 + React 19', href: '/free-software/genius-crm' },
  { label: 'Genius HRM', description: 'Free HR management system — Laravel + React', href: '/free-software/genius-hrm' },
];

export const freeToolsLink = { label: 'Free Tools', href: '/free-tools' };

export const companyDropdown: DropdownItem[] = [
  { label: 'About Us', href: '/about' },
  { label: 'Documentation', href: 'https://docs.xgenious.com/' },
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
    { label: 'MVP Development', href: '/saas-mvp-development' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Support Center', href: '#' },
    { label: 'Contact', href: '/contact' },
    { label: 'My Account', href: '#' },
  ],
};
