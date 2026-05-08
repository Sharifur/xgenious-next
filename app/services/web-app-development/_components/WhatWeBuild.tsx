const cards = [
  {
    icon: '/images/web-app-dev/icon-b2b.svg',
    title: 'B2B Client Portals',
    description: 'Branded portals for suppliers, partners vendors and clients. Invoicing, document sharing, approvals and real time status tracking.',
    tags: ['Supplier portal', 'Client Portal', 'Partner portal'],
  },
  {
    icon: null,
    title: 'Internal Tools and Dashboards',
    description: 'Retool-style internal tools built to your exact data model. Ops consoles, back-office workflow, approval pipelines, reporting.',
    tags: ['Ops consoles', 'Workflow engines', 'Reporting dashboards'],
  },
  {
    icon: '/images/web-app-dev/icon-enterprise.svg',
    title: 'Enterprise Web Platforms',
    description: "Custom CRMs, HR system, ERP extensions and specialized platforms where off the shelf SaaS doesn't fit your process.",
    tags: ['Custom CRM', 'Custom HRIS', 'Metered billing'],
  },
  {
    icon: null,
    title: 'Progressive Web Apps',
    description: 'Installable, offline-capable, push-notifications ready web apps — the fastest path to mobile feel without an App Store submission.',
    tags: ['Offline-first', 'Push notifications', 'Installable'],
  },
  {
    icon: null,
    title: 'Legacy Modernization',
    description: 'Rescue ageing PHP, ASP.NET or Rails apps. Rebuild on a modern stack with no feature regression and a controlled cutover plan.',
    tags: ['PHP-React', 'ASP.NET-Next Js', 'Zero-downtime cutover'],
  },
  {
    icon: null,
    title: 'Third-party Integration',
    description: 'Salesforce, HubSpot, Shopify, Xero, QuickBooks, Slack, Zapier and custom REST/GraphQL APIs wired into your platform.',
    tags: ['Salesforce / HubSpot', 'Stripe / Xero', 'Custom APIs'],
  },
];

function FallbackIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="4" y="4" width="24" height="24" rx="3" stroke="#bababa" strokeWidth="1.5" />
      <path d="M10 16h12M16 10v12" stroke="#bababa" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function Card({ icon, title, description, tags }: { icon: string | null; title: string; description: string; tags: string[] }) {
  return (
    <div className="bg-[#f5f6f8] rounded-[12px] p-8 flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        <div className="w-16 h-16 flex items-center justify-center bg-white border border-[#bababa] rounded-[32px] flex-shrink-0">
          {icon ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={icon} alt="" width={32} height={36} className="object-contain" />
          ) : (
            <FallbackIcon />
          )}
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-[#181818] font-semibold" style={{ fontSize: 20, lineHeight: '28px' }}>
            {title}
          </h3>
          <p className="text-[#484848] font-normal" style={{ fontSize: 16, lineHeight: '24px' }}>
            {description}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-[10px] py-1 text-[#52525b] bg-white rounded-[999px] font-medium"
            style={{ fontSize: 12, lineHeight: '18px', border: '0.5px solid #bababa' }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function WhatWeBuild() {
  return (
    <section className="py-[120px] bg-white">
      <div className="container-page flex flex-col gap-[72px] items-center">
        <div className="flex flex-col items-center gap-4 text-center max-w-[732px]">
          <div
            className="inline-flex items-center px-4 py-[6px] rounded-[165px]"
            style={{ background: 'rgba(242,107,78,0.12)' }}
          >
            <span className="text-[#ec7161] font-normal" style={{ fontSize: 16, lineHeight: '24px' }}>
              What We Build
            </span>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <h2
              className="text-[#0f1112] font-semibold"
              style={{ fontSize: 44, lineHeight: '52px' }}
            >
              SaaS Engineering, End-to-End.
            </h2>
            <p
              className="text-[#484848] font-normal"
              style={{ fontSize: 16, lineHeight: '24px', maxWidth: 401 }}
            >
              Six capability lines across the full SaaS lifecycle. Pick one or work with us across all six.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {cards.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
