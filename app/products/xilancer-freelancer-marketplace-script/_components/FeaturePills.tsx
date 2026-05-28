import Image from 'next/image';

const PILLS = [
  { label: 'Fixed Rate Jobs',      bg: '#EFF1FE', icon: '/icons/xilancer/fixed-rate-jobs.svg' },
  { label: 'Hourly Rate Jobs',      bg: '#D8F5F5', icon: '/icons/xilancer/hourly-rate-job.svg' },
  { label: 'Project/Gig Catalogue', bg: '#FDF4EF', icon: '/icons/xilancer/project-gig-catalog.svg' },
  { label: 'Custom Order',          bg: '#F9EEF6', icon: '/icons/xilancer/custom-order.svg' },
  { label: 'Live Chat System',      bg: '#F6F4EF', icon: '/icons/xilancer/livechat-system.svg' },
  { label: 'Paid Membership',       bg: '#F0FDF3', icon: '/icons/xilancer/paid-membership.svg' },
];

export default function FeaturePills() {
  return (
    <section className="py-10 bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide justify-between">
          {PILLS.map((pill) => (
            <div
              key={pill.label}
              className="flex flex-col items-start gap-[30px] rounded-2xl border border-[#F0FDF3] px-6 py-[30px] cursor-default select-none flex-1 transition-all hover:shadow-md hover:-translate-y-1"
              style={{ background: pill.bg }}
            >
              <div
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0"
                style={{ border: '1px solid #CFD2D6' }}
              >
                <Image src={pill.icon} alt={pill.label} width={20} height={20} />
              </div>
              <span className="text-[13px] font-medium text-[#374151] text-left leading-tight whitespace-nowrap">
                {pill.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
