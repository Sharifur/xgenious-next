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
    <section className="py-[120px] bg-[#f5f6f8]">
      <div className="container-page flex flex-col gap-[72px]">
        <div className="flex flex-col gap-4 items-center text-center">
          <div className="inline-flex items-center justify-center px-4 py-[6px] rounded-[165px] bg-[rgba(242,107,78,0.12)]">
            <span className="font-normal text-[#ec7161] text-base leading-6">Work Showcase</span>
          </div>
          <h2 className="font-semibold text-[#0f1112] text-[44px] leading-[52px] max-w-[712px]">
            High-Performance Mobile Application Systems
          </h2>
          <p className="font-normal text-[#484848] text-base leading-6 max-w-[580px]">
            A selection of mobile products we have designed, built, and shipped for founders and growing businesses.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="flex flex-col gap-6 rounded-[12px] overflow-hidden">
              <div className="overflow-hidden h-[540px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-3 pb-6">
                <p className="font-bold text-[#181818] text-[36px] leading-[46px]">
                  {project.title}
                </p>
                <p className="font-medium text-[#484848] text-[18px] leading-[27px]">
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
