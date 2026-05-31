import Image from 'next/image';

const projects = [
  {
    name: 'Xilancer',
    description: 'Xilancer is a freelance marketplace platform that connects businesses with skilled professionals across a wide range of services. It enables seamless collaboration, secure transactions, and efficient project delivery.',
    image: '/site-images/web-app-dev/showcase-xilancer.png',
  },
  {
    name: 'Fundorex',
    description: 'Fundorex has brought an incredible change on how you build a Crowdfunding platform. It helps you to Raise money or funds for your cause quickly and easily.',
    image: '/site-images/web-app-dev/showcase-fundorex.png',
  },
  {
    name: 'Prohandy',
    description: 'Prohandy is a platform connecting customers with trusted local service providers. Find reliable professionals for home repairs, cleaning, and more, all in one place.',
    image: '/site-images/web-app-dev/showcase-prohandy.png',
  },
  {
    name: 'Nexelit',
    description: 'Nexelit Multipurpose Website & Agency Business CMS is the perfect agency business or any kind of website with this PHP Script. Nexelit is a better way to present your business and many others.',
    image: '/site-images/web-app-dev/showcase-nexelit.png',
  },
];

function ShowcaseItem({ name, description, image }: typeof projects[0]) {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative w-full rounded-[12px] overflow-hidden" style={{ height: 540 }}>
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-[14px]">
        <h3 className="text-[#0f1112] font-bold" style={{ fontSize: 36, lineHeight: '46px' }}>
          {name}
        </h3>
        <p className="text-[#484848] font-medium" style={{ fontSize: 18, lineHeight: '24px' }}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default function WorkShowcase() {
  return (
    <section className="py-[120px] bg-[#f5f6f8]">
      <div className="container-page flex flex-col gap-[72px] items-center">
        <div className="flex flex-col items-center gap-4 text-center max-w-[620px]">
          <div
            className="inline-flex items-center px-4 py-[6px] rounded-[165px]"
            style={{ background: 'rgba(242,107,78,0.12)' }}
          >
            <span className="text-[#ec7161] font-normal" style={{ fontSize: 16, lineHeight: '24px' }}>
              Work Showcase
            </span>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-[#0f1112] font-semibold" style={{ fontSize: 44, lineHeight: '52px' }}>
              Start Strong with Scalable Web Solutions
            </h2>
            <p className="text-[#484848] font-normal" style={{ fontSize: 16, lineHeight: '24px', maxWidth: 556 }}>
              We deliver scalable web solutions built for performance, flexibility, and long-term growth.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.slice(0, 2).map((p) => <ShowcaseItem key={p.name} {...p} />)}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.slice(2, 4).map((p) => <ShowcaseItem key={p.name} {...p} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
