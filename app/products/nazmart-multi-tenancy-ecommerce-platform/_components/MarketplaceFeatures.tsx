import Image from 'next/image';

const features = [
  {
    title: '10 Modern eCommerce Themes to Choose From',
    desc: 'Manage users, vendors, and tenant shops effortlessly with a powerful system designed for streamlined operations, role management, and reliable marketplace control.',
    bullets: [
      'Active, Deactivate themes for tenant',
      'Customize theme category',
      'Themes for different categories',
    ],
    image: '/products/themeChoose.webp',
    imageBg: '#F5F6F8',
    imageRight: true,
  },
  {
    title: 'Easily Create Advanced Price Plan',
    desc: 'Enable custom domains for every shop, allowing businesses to create a branded storefront experience with seamless domain connection and management.',
    bullets: [
      'Customize price plan',
      'Include, Exclude features',
      'Include, Exclude payment gateways',
    ],
    image: '/products/subscription.webp',
    imageBg: '#EAF6F3',
    imageRight: false,
  },
  {
    title: 'Advanced User & Tenant Shop Management',
    desc: 'Manage users, vendors, and tenant shops effortlessly with a powerful system designed for streamlined operations, role management, and reliable marketplace control.',
    bullets: [
      'Add new Tenants',
      'Customize home content',
      'Themes for different categories',
    ],
    image: '/products/userManagement.webp',
    imageBg: '#F5F6F8',
    imageRight: true,
  },
  {
    title: 'Custom Domain Support for Shop',
    desc: 'Enable custom domains for every shop, allowing businesses to create a branded storefront experience with seamless domain connection and management.',
    bullets: [
      'Tenants can add custom domain',
      'Custom email subdomain assignation',
      'Separated email settings for landlord & Tenant',
    ],
    image: '/products/domainSupport.webp',
    imageBg: '#EAF6F3',
    imageRight: false,
  },
  {
    title: 'Easy Third-Party Script Integration',
    desc: 'Integrate third-party tools and scripts effortlessly to extend functionality, enhance workflows, and enhance your platform experience with seamless connectivity.',
    bullets: [
      'Google Analytics',
      'Google Tag Manager',
      'Facebook Pixels',
      "Messenger, WhatsApp & more",
    ],
    image: '/products/scriptIntegration.webp',
    imageBg: '#F5F6F8',
    imageRight: true,
  },
];

function CheckIcon() {
  return (
    <svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="10" fill="#dcfce7" />
      <path d="M6 10l3 3 5-5" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function MarketplaceFeatures() {
  return (
    <section className="py-14 sm:py-20" style={{ background: '#fff' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-14 max-w-[560px] mx-auto">
          <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] mb-3">
            Marketplace Features That Drive Success
          </h2>
          <p className="text-[#6b7280] text-[15px] leading-6">
            Allow Client & Freelancers to efficiently collaborate real time in their projects right into the Nazmart platform.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-[#E5E7EC] ${
                f.imageRight ? '' : 'lg:[&>:first-child]:order-2 lg:[&>:last-child]:order-1'
              }`}
            >
              {/* Text */}
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <h3 className="text-[20px] sm:text-[24px] font-bold text-[#0F1112] mb-3 leading-snug">{f.title}</h3>
                <p className="text-[14px] text-[#6b7280] leading-6 mb-5">{f.desc}</p>
                <div className="flex flex-col gap-2.5">
                  {f.bullets.map((b) => (
                    <div key={b} className="flex items-start gap-2.5 text-[14px] text-[#374151]">
                      <CheckIcon />
                      {b}
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div
                className="flex items-center justify-center p-8"
                style={{ background: f.imageBg }}
              >
                <div className="rounded-xl overflow-hidden shadow-md w-full">
                  <Image
                    src={f.image}
                    alt={f.title}
                    width={540}
                    height={360}
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
