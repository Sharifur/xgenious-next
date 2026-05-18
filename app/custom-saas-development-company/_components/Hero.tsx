import Button, { ArrowIcon } from '@/components/ui/Button';

function Cursor({ color, delay = '0s' }: { color: string; delay?: string }) {
  return (
    <svg
      width="13"
      height="15"
      viewBox="0 0 13 15"
      fill="none"
      style={{ animation: `cursorChase 6s ease-in-out ${delay} infinite` }}
    >
      <path d="M1 1L1 13L4.5 9.5L7 14L9 13L6.5 8.5L11.5 8.5L1 1Z" fill={color} />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-[100px] pb-[100px] sm:pt-[140px] sm:pb-[140px] lg:pt-[200px] lg:pb-[200px]"
      style={{ background: 'linear-gradient(180deg, #f5f6ea 0%, #f3dacd 100%)' }}
    >
      <div className="container-page relative px-4 sm:px-6 lg:px-0">

        {/* Code — top left */}
        <div
          className="absolute left-0 top-0 hidden lg:flex flex-col items-start gap-2"
          style={{ animation: 'chipOrbit 6s ease-in-out infinite' }}
        >
          <div className="bg-[#dbecf5] border-[0.5px] border-white flex gap-2 items-center px-[14px] py-[10px] rounded-[99px] shadow-[0px_1px_1.5px_rgba(0,0,0,0.04)] -rotate-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/saas-dev/chip-code.svg" alt="" width={24} height={24} />
            <span className="text-[#2bb6ff] font-medium text-[17px] leading-6">Code</span>
          </div>
          <div className="ml-8">
            <Cursor color="#2bb6ff" delay="1.5s" />
          </div>
        </div>

        {/* Server — top right */}
        <div
          className="absolute right-0 top-0 hidden lg:flex flex-col items-end gap-2"
          style={{ animation: 'chipOrbit 7s ease-in-out 1s infinite' }}
        >
          <div className="bg-[#e9e9e9] border-[0.6px] border-white flex gap-2 items-center px-[14px] py-[10px] rounded-[99px] shadow-[0px_1px_3px_rgba(0,0,0,0.04)] rotate-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/saas-dev/chip-server.svg" alt="" width={24} height={24} />
            <span className="text-[#181818] font-normal text-[17px] leading-6">Server</span>
          </div>
          <div className="mr-8">
            <Cursor color="#181818" delay="2.5s" />
          </div>
        </div>

        {/* Center content */}
        <div className="flex flex-col items-center text-center gap-6 sm:gap-8 lg:px-[180px]">
          <div className="flex items-center gap-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/saas-dev/badge-clutch.svg" alt="Clutch" width={90} height={40} className="object-contain sm:w-[124px] sm:h-[56px]" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/saas-dev/badge-google.svg" alt="Google" width={90} height={40} className="object-contain sm:w-[124px] sm:h-[56px]" />
          </div>

          <h1 className="text-[#181818] font-semibold text-[32px] leading-[40px] sm:text-[48px] sm:leading-[56px] lg:text-[72px] lg:leading-[80px] max-w-[1050px]">
            <span className="lg:whitespace-nowrap">Custom SaaS Development</span><br />
            <em className="font-medium italic">Built to Run, Not Just to Launch</em>
          </h1>

          <p className="text-[#2F2F2F] text-[14px] leading-[21px] sm:text-[16px] sm:leading-6 lg:text-[18px] lg:leading-[27px] max-w-[650px]">
            For founders and mid-market teams who need a real SaaS — not a script. Multi-tenant architecture,
            subscription billing, GDPR and HIPAA-ready by default. Fixed-price from $3k, built by a team running
            7 SaaS products with 13,000+ active users.
          </p>

          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Button href="/contact" variant="coral" icon={<ArrowIcon />}>
              Start Your Project
            </Button>
            <Button href="#pricing" variant="outline" icon={<ArrowIcon />}>
              View SaaS Packages
            </Button>
          </div>
        </div>

        {/* Text — bottom left */}
        <div
          className="absolute left-0 bottom-0 hidden lg:flex flex-col items-start gap-2"
          style={{ animation: 'chipOrbit 8s ease-in-out 0.5s infinite' }}
        >
          <div className="ml-6">
            <Cursor color="#8e79ff" delay="2s" />
          </div>
          <div className="bg-[#e8e6f7] border-[0.6px] border-white flex gap-2 items-center px-[14px] py-[10px] rounded-[99px] shadow-[0px_1px_1.5px_rgba(0,0,0,0.04)] rotate-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/saas-dev/chip-text.svg" alt="" width={24} height={24} />
            <span className="text-[#8e79ff] font-medium text-[17px] leading-6">Text</span>
          </div>
        </div>

        {/* API — bottom right */}
        <div
          className="absolute right-0 bottom-0 hidden lg:flex flex-col items-end gap-2"
          style={{ animation: 'chipOrbit 6.5s ease-in-out 1.5s infinite' }}
        >
          <div className="mr-6">
            <Cursor color="#12b503" delay="3s" />
          </div>
          <div className="bg-[#f0fff2] border-[0.6px] border-white flex gap-2 items-center px-[14px] py-[10px] rounded-[99px] shadow-[0px_1px_3px_rgba(0,0,0,0.04)] -rotate-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/saas-dev/chip-api.svg" alt="" width={24} height={24} />
            <span className="text-[#12b503] font-normal text-[17px] leading-6">API</span>
          </div>
        </div>

      </div>
    </section>
  );
}
