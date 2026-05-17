const projects = [
  {
    title: 'Taskip',
    desc: 'All-in-one agency management platform that streamlines client work, team collaboration, and project delivery in a single workspace.',
    img: '/images/app-dev/showcase-taskip.png',
  },
  {
    title: 'Go Car App',
    desc: 'Comprehensive mechanic and car service booking platform connecting vehicle owners with certified service providers on-demand.',
    img: '/images/app-dev/showcase-gocar.png',
  },
  {
    title: 'Prohandy',
    desc: 'Platform connecting customers with trusted local handymen for home repairs, maintenance, and improvement services.',
    img: '/images/app-dev/showcase-prohandy.png',
  },
  {
    title: 'Xilancer App',
    desc: 'Freelance marketplace platform enabling businesses to find top-tier talent and manage projects with full transparency.',
    img: '/images/app-dev/showcase-xilancer.png',
  },
];

export default function WorkShowcase() {
  return (
    <section className="py-14 sm:py-20 lg:py-[120px] bg-[#f5f6f8]">
      <div className="container-page px-4 sm:px-6 lg:px-0 flex flex-col gap-10 sm:gap-14 lg:gap-[72px]">
        <div className="flex flex-col gap-4 items-center text-center">
          <div className="inline-flex items-center justify-center px-4 py-[6px] rounded-[165px] bg-[rgba(242,107,78,0.12)]">
            <span className="font-normal text-[#ec7161] text-[12px] leading-[18px] sm:text-base sm:leading-6">Work Showcase</span>
          </div>
          <h2 className="font-semibold text-[#0f1112] text-[26px] leading-[34px] sm:text-[34px] sm:leading-[42px] lg:text-[44px] lg:leading-[52px] max-w-[712px]">
            High-Performance Mobile Application Systems
          </h2>
          <p className="font-normal text-[#484848] text-[14px] leading-[21px] sm:text-base sm:leading-6 max-w-[580px]">
            A selection of mobile products we have designed, built, and shipped for founders and growing businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="flex flex-col gap-4 sm:gap-6 rounded-[12px] overflow-hidden">
              <div className="overflow-hidden h-[220px] sm:h-[380px] lg:h-[540px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-3 pb-6">
                <p className="font-bold text-[#181818] text-[22px] leading-[30px] sm:text-[28px] sm:leading-[38px] lg:text-[36px] lg:leading-[46px]">
                  {project.title}
                </p>
                <p className="font-medium text-[#484848] text-[14px] leading-[22px] sm:text-[16px] sm:leading-6 lg:text-[18px] lg:leading-[27px]">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
