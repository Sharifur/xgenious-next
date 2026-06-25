export interface DropdownItem {
  label: string;
  href: string;
  description?: string;
  category?: string;
  accent?: string;
  image?: string;
}

export const servicesDropdown: DropdownItem[] = [
  { label: 'Web App Development', href: '/web-app-development-company', description: 'B2B portals, dashboards & enterprise platforms' },
  { label: 'Mobile App Development', href: '/mobile-app-development', description: 'iOS, Android & cross-platform apps' },
  { label: 'SaaS Development', href: '/custom-saas-development-company', description: 'End-to-end SaaS products from MVP to scale' },
  { label: 'AI Agent Development', href: '/ai-agent-development-services', description: 'Custom AI agents & workflow automation' },
  { label: 'MVP Development', href: '/saas-mvp-development', description: 'Working product in 6–8 weeks, built to scale' },
];

export const productsDropdown: DropdownItem[] = [
  { label: 'Nazmart', description: 'Multi-Tenancy eCommerce SAAS', category: 'eCommerce SaaS', accent: '#16a34a', image: '/products/menu/nazmart.png', href: '/products/nazmart-multi-tenancy-ecommerce-platform' },
  { label: 'Grenmart', description: 'Organic Grocery eCommerce Platform', category: 'Grocery eCommerce', accent: '#2f9e44', image: '/products/menu/grenmart.png', href: '/products/grenmart-organic-grocery-ecommerce' },
  { label: 'Helpnest', description: 'AI Power Support Chatbot', category: 'AI Support', accent: '#4F46E5', image: '/products/menu/helpnest.png', href: '/products/helpnest-ai-chatbot-support-script' },
  { label: 'Botmerze', description: 'AI Chatbot SaaS for WooCommerce & Shopify', category: 'AI Chatbot', accent: '#007066', image: '/products/menu/botmerze.png', href: '/products/botmerze-ai-chatbot-saas-ecommerce' },
  { label: 'MultiSaas', description: 'Multi-Tenant Website Builder SaaS', category: 'Website Builder', accent: '#eb6149', image: '/products/menu/multisaas.png', href: '/products/multisaas-website-builder-saas' },
  { label: 'Nexelit', description: 'Multipurpose Website CMS', category: 'CMS', accent: '#6366f1', image: '/products/menu/nexelit.png', href: '/products/nexelit-multipurpose-website-business-management-system-cms' },
  { label: 'ListOcean', description: 'Classified Ads & Listing Platform', category: 'Classifieds', accent: '#0891b2', image: '/products/menu/listocean-thumb.png', href: '/products/listocean-classified-ads-listing-platform' },
  { label: 'Fundorex', description: 'Crowdfunding Platform', category: 'Crowdfunding', accent: '#f59e0b', image: '/products/menu/fundorex.png', href: '/products/fundorex-crowdfunding-platform' },
  { label: 'Xilancer', description: 'Freelancer Marketplace Platform', category: 'Freelance', accent: '#a855f7', image: '/products/menu/xilancer.png', href: '/products/xilancer-freelancer-marketplace-script' },
  { label: 'Prohandy', description: 'On-Demand Service Provider Marketplace', category: 'Home Services', accent: '#059669', image: '/products/menu/prohandy.png', href: '/products/prohandy-on-demand-home-service-marketplace' },
  { label: 'GoCar', description: 'On-Demand Car Service Marketplace', category: 'Car Service', accent: '#DC2626', image: '/products/menu/gocar.png', href: '/products/gocar-on-demand-car-service-marketplace' },
  { label: 'Qixer', description: 'Multi-Vendor On-Demand Service Marketplace', category: 'Marketplace', accent: '#0ea5e9', image: '/products/menu/qixer.png', href: '/products/qixer-on-demand-service-marketplace' },
];

export const freeSoftwareDropdown: DropdownItem[] = [
  { label: 'Genius School Management', description: 'Free school ERP — Laravel 11 + React 18', href: '/free-software/genius-school-management' },
  { label: 'Genius CRM', description: 'Free self-hosted CRM — Laravel 12 + React 19', href: '/free-software/genius-crm' },
  { label: 'Genius HRM', description: 'Free HR management system — Laravel + React', href: '/free-software/genius-hrm' },
  { label: 'Genius Support', description: 'Free self-hosted support portal — Laravel + Reverb', href: '/free-software/genius-support' },
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
