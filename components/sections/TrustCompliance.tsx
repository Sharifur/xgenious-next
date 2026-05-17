import SectionBadge from '@/components/ui/SectionBadge';

type ComplianceCard = { icon: string; name: string; status: string };

const cards: ComplianceCard[] = [
  { icon: '/images/saas-dev/tc-shield.svg',   name: 'GDPR',              status: 'Live · DPA available' },
  { icon: '/images/saas-dev/tc-heart.svg',    name: 'HIPAA',             status: 'Ready · BAA on request' },
  { icon: '/images/saas-dev/tc-clock.svg',    name: 'SOC 2 Type I',      status: 'In progress · Q3 2026' },
  { icon: '/images/saas-dev/tc-badge.svg',    name: 'ISO 27001',         status: 'Roadmap · 2026' },
  { icon: '/images/saas-dev/tc-payment.svg',  name: 'PCI DSS',           status: 'Ready · Stripe SAQ-A' },
  { icon: '/images/saas-dev/tc-database.svg', name: 'UAE DIFC',          status: 'DIFC/ADGM-compliant' },
  { icon: '/images/saas-dev/tc-database.svg', name: 'KSA PDPL',          status: 'Data-residency in-Kingdom' },
  { icon: '/images/saas-dev/tc-todo.svg',     name: 'GDPR',              status: 'Live · DPA available' },
  { icon: '/images/saas-dev/tc-globe.svg',    name: 'EU Data Residency', status: 'Frankfurt / Dublin regions' },
];

function ComplianceItem({ icon, name, status }: ComplianceCard) {
  return (
    <div className="bg-[#F5F6F8] rounded-xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4">
      <div
        className="flex items-center justify-center rounded-full flex-shrink-0 border border-[#E0D5C5]"
        style={{ width: 44, height: 44, background: '#F5EBDA' }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={icon} alt="" width={22} height={22} className="object-contain" />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-[#0F1112] font-bold text-[13px] leading-[18px] sm:text-[15px] sm:leading-[22px] lg:text-[18px] lg:leading-tight">{name}</p>
        <p className="text-[#717179] font-normal text-[11px] leading-[16px] sm:text-[12px] sm:leading-[18px] lg:text-[14px] lg:leading-5">{status}</p>
      </div>
    </div>
  );
}

export default function TrustCompliance() {
  const rows = [cards.slice(0, 3), cards.slice(3, 6), cards.slice(6, 9)];

  return (
    <section className="py-14 sm:py-20 lg:py-[120px] bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0 flex flex-col gap-10 sm:gap-14 lg:gap-[72px] items-center">
        <div className="flex flex-col items-center gap-3 sm:gap-4 text-center max-w-[621px]">
          <SectionBadge className="mb-1">Trust &amp; Compliance</SectionBadge>
          <h2 className="text-[#0f1112] font-semibold text-[24px] leading-[32px] sm:text-[32px] sm:leading-[40px] lg:text-[44px] lg:leading-[52px]">
            Security is Not a Phase Two Concern
          </h2>
          <p className="text-[#484848] font-normal text-[14px] leading-[21px] sm:text-[16px] sm:leading-6 max-w-[611px]">
            Every engagement ships a DPA. Every architecture ships with a threat model — honest
            roadmap, not marketing badges.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:gap-4 w-full">
          {rows.map((row, ri) => (
            <div key={ri} className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {row.map((card, ci) => (
                <ComplianceItem key={`${ri}-${ci}`} {...card} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
