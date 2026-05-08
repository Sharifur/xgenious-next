type ComplianceCard = {
  icon: string;
  name: string;
  status: string;
};

const cards: ComplianceCard[] = [
  { icon: '/images/web-app-dev/icon-gdpr.svg', name: 'GDPR', status: 'Live · DPA available' },
  { icon: '/images/web-app-dev/icon-hipaa.svg', name: 'HIPAA', status: 'Ready · BAA on request' },
  { icon: '/images/web-app-dev/icon-soc2.svg', name: 'SOC 2 Type I', status: 'In progress · Q3 2026' },
  { icon: '/images/web-app-dev/icon-iso.svg', name: 'ISO 27001', status: 'Roadmap · 2026' },
  { icon: '/images/web-app-dev/icon-pci.svg', name: 'PCI DSS', status: 'Ready · Stripe SAQ-A' },
  { icon: '/images/web-app-dev/icon-uae.svg', name: 'UAE DIFC', status: 'DIFC/ADGM-compliant' },
  { icon: '/images/web-app-dev/icon-ksa.svg', name: 'KSA PDPL', status: 'Data-residency in-Kingdom' },
  { icon: '/images/web-app-dev/icon-gdpr.svg', name: 'GDPR', status: 'Live · DPA available' },
  { icon: '/images/web-app-dev/icon-eu.svg', name: 'EU Data Residency', status: 'Frankfurt / Dublin regions' },
];

function ComplianceItem({ icon, name, status }: ComplianceCard) {
  return (
    <div className="bg-[#f5f6f8] rounded-[8px] p-6 flex items-start gap-4 h-[106px]">
      <div
        className="flex items-center justify-center rounded-[24px] flex-shrink-0 border border-[#bababa]"
        style={{ width: 48, height: 48, background: '#f5ebda' }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={icon} alt="" width={28} height={28} className="object-contain" />
      </div>
      <div className="flex flex-col gap-[6px]">
        <p className="text-black font-semibold" style={{ fontSize: 20, lineHeight: '28px' }}>{name}</p>
        <p className="text-[#2f2f2f] font-normal" style={{ fontSize: 16, lineHeight: '24px' }}>{status}</p>
      </div>
    </div>
  );
}

export default function TrustCompliance() {
  const rows = [cards.slice(0, 3), cards.slice(3, 6), cards.slice(6, 9)];

  return (
    <section className="py-[120px] bg-white">
      <div className="container-page flex flex-col gap-[72px] items-center">
        <div className="flex flex-col items-center gap-4 text-center max-w-[621px]">
          <div
            className="inline-flex items-center px-4 py-[6px] rounded-[165px]"
            style={{ background: 'rgba(242,107,78,0.12)' }}
          >
            <span className="text-[#ec7161] font-normal" style={{ fontSize: 16, lineHeight: '24px' }}>
              Trust &amp; Compliance
            </span>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-[#0f1112] font-semibold" style={{ fontSize: 44, lineHeight: '52px' }}>
              Security is Not a Phase Two Concern
            </h2>
            <p className="text-[#484848] font-normal" style={{ fontSize: 16, lineHeight: '24px', maxWidth: 611 }}>
              Every engagement ships a DPA. Every architecture ships with a threat model — honest roadmap, not
              marketing badges.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full">
          {rows.map((row, ri) => (
            <div key={ri} className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
