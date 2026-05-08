import Link from 'next/link';

function RatingBadge({ logo, name }: { logo: string; name: string }) {
  return (
    <div className="flex items-center gap-1">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/saas-dev/laurel.svg" alt="" width={23} height={56} />
      <div className="flex flex-col items-center gap-[6px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} alt={name} width={52} height={17} className="object-contain" />
        <div className="flex gap-0.5">
          {[0, 1, 2, 3, 4].map((i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={i} src="/images/saas-dev/star-full.svg" alt="" width={13} height={13} />
          ))}
        </div>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/saas-dev/laurel.svg" alt="" width={23} height={56} className="scale-x-[-1]" />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-[140px] pb-[80px]"
      style={{ background: 'linear-gradient(180deg, rgba(236,113,97,0.07) 0%, #ffffff 65%)' }}
    >
      <div className="absolute left-[5%] top-[152px] hidden lg:flex rotate-[-6deg]">
        <div className="bg-[#dbecf5] border-[0.5px] border-white flex gap-2 items-center px-[14px] py-[10px] rounded-[99px] shadow-[0px_1px_1.5px_rgba(0,0,0,0.04)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/saas-dev/chip-code.svg" alt="" width={24} height={24} />
          <span className="text-[#2bb6ff] font-medium text-[17px] leading-6">Code</span>
        </div>
      </div>

      <div className="absolute right-[5%] top-[152px] hidden lg:flex rotate-[6deg]">
        <div className="bg-[#e9e9e9] border-[0.6px] border-white flex gap-2 items-center px-[14px] py-[10px] rounded-[99px] shadow-[0px_1px_3px_rgba(0,0,0,0.04)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/saas-dev/chip-server.svg" alt="" width={24} height={24} />
          <span className="text-[#181818] font-normal text-[17px] leading-6">Server</span>
        </div>
      </div>

      <div className="absolute left-[5%] bottom-[120px] hidden lg:flex rotate-[6deg]">
        <div className="bg-[#e8e6f7] border-[0.6px] border-white flex gap-2 items-center px-[14px] py-[10px] rounded-[99px] shadow-[0px_1px_1.5px_rgba(0,0,0,0.04)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/saas-dev/chip-text.svg" alt="" width={24} height={24} />
          <span className="text-[#8e79ff] font-medium text-[17px] leading-6">Text</span>
        </div>
      </div>

      <div className="absolute right-[5%] bottom-[120px] hidden lg:flex rotate-[-6deg]">
        <div className="bg-[#f0fff2] border-[0.6px] border-white flex gap-2 items-center px-[22px] py-[10px] rounded-[99px] shadow-[0px_1px_3px_rgba(0,0,0,0.04)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/saas-dev/chip-api.svg" alt="" width={24} height={24} />
          <span className="text-[#12b503] font-normal text-[17px] leading-6">API</span>
        </div>
      </div>

      <div className="container-page flex flex-col items-center text-center gap-8">
        <div className="flex items-center gap-8">
          <RatingBadge logo="/images/saas-dev/badge-clutch.svg" name="Clutch" />
          <RatingBadge logo="/images/saas-dev/badge-google.svg" name="Google" />
        </div>

        <h1 className="text-[#181818] font-semibold" style={{ fontSize: 72, lineHeight: '80px' }}>
          {'Powerful SaaS Solutions for '}
          <em className="font-medium" style={{ fontStyle: 'italic' }}>Business Growth</em>
        </h1>

        <p className="text-[#2f2f2f] font-normal" style={{ fontSize: 18, lineHeight: '27px', maxWidth: 682 }}>
          For founders and mid-market teams who need a real SaaS, not a script. GDPR, HIPAA and SOC 2 ready
          architectures by default. Built by a team that has shipped 50+ SaaS products since 2017.
        </p>

        <div className="flex items-center gap-[17px] flex-wrap justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-semibold text-white rounded-[30px] px-8 py-4 text-[16px] leading-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(236,113,97,0.5)]"
            style={{ background: '#ec7161' }}
          >
            Start New Project
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/web-app-dev/arrow-white.svg" alt="" width={24} height={24} />
          </Link>
          <Link
            href="#pricing"
            className="inline-flex items-center gap-2 font-semibold text-[#181818] rounded-[30px] px-8 py-4 text-[16px] leading-6 border border-[#2f2f2f] bg-white transition-all duration-200 hover:-translate-y-0.5"
          >
            SaaS Packages
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/web-app-dev/arrow-dark.svg" alt="" width={24} height={24} />
          </Link>
        </div>
      </div>
    </section>
  );
}
