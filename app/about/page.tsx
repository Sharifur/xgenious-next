import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us — Xgenious',
  description:
    'Crafting the digital future through software — learn about the team behind Xgenious.',
};

// Figma export URLs — valid ~7 days from 2026-05-07; replace with permanent CDN paths
const IMG = {
  heroTeam: 'https://www.figma.com/api/mcp/asset/011ab49f-b9d0-46bd-b002-34445da4a8dc',
  logos: [
    { src: 'https://www.figma.com/api/mcp/asset/5697f5de-e676-47bf-b281-7263114f5013', name: 'Workpeople' },
    { src: 'https://www.figma.com/api/mcp/asset/8e8931f7-4895-44cd-82ad-d096a4f921cc', name: 'BeFinder' },
    { src: 'https://www.figma.com/api/mcp/asset/16a214dc-4b26-42f4-a59b-240edc1f7b4a', name: 'ViaPlaats' },
    { src: 'https://www.figma.com/api/mcp/asset/10ee764b-e297-4a4e-af69-fe21bb91533b', name: 'Five&Two' },
    { src: 'https://www.figma.com/api/mcp/asset/0ba22690-68b0-4aa6-9437-c7edd6abd489', name: 'Givepy' },
    { src: 'https://www.figma.com/api/mcp/asset/8e8931f7-4895-44cd-82ad-d096a4f921cc', name: 'BeFinder' },
  ],
  founder: 'https://www.figma.com/api/mcp/asset/db65f488-7a16-40a8-97cd-e9b306ade1ee',
  founderBg: 'https://www.figma.com/api/mcp/asset/2d685d13-bfe2-45c5-a515-35b91bd4ffaf',
  statsFaintBg: 'https://www.figma.com/api/mcp/asset/0f4a569b-76fc-4a92-b835-72639df0e9ce',
  ctaMask: 'https://www.figma.com/api/mcp/asset/2f5de7b7-81b4-4ff3-9663-35b5f39e6548',
  arrowRight: 'https://www.figma.com/api/mcp/asset/66e50222-cc21-4a4b-bfac-c10675c6d48e',
  arrowRightCareer: 'https://www.figma.com/api/mcp/asset/5c4da717-7fa6-4bca-b019-328cc477a983',
  team: [
    { src: 'https://www.figma.com/api/mcp/asset/cf642682-8d9c-4ef6-a816-39b98cbd3b53', name: 'Aysha Parvin', role: 'Business Development Manager' },
    { src: 'https://www.figma.com/api/mcp/asset/eab7aa18-a6bf-4abf-8915-1dad3f7ee406', name: 'Kamrul Ibn Zaman', role: 'Project Manager' },
    { src: 'https://www.figma.com/api/mcp/asset/0b021605-5bc8-4816-80ed-a3fa135abe01', name: 'Mobarak Hossain', role: 'Frontend Developer' },
    { src: 'https://www.figma.com/api/mcp/asset/c4189105-1613-4757-942d-9a383d54efee', name: 'Rakibul Hasan', role: 'Backend Developer' },
  ],
};

const STATS = [
  { num: '7000', label: 'Customer Happy' },
  { num: '19', label: 'Awards Achieved' },
  { num: '25', label: 'Team Members' },
  { num: '100', label: 'Product Develop' },
];

function ArrowRight() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* ── 1. Hero ── */}
      <section style={{ background: 'linear-gradient(180deg, #f5f6ea 0%, #f3dacd 100%)' }} className="pt-[140px] pb-0">
        <div className="container-page flex flex-col items-center text-center gap-6 pb-14">
          <h1 className="text-[72px] font-semibold leading-[80px] text-[#181818]">
            Crafting the Digital Future{' '}
            <span className="font-medium italic">Through Software</span>
          </h1>
          <p className="text-[18px] leading-[27px] text-[#2f2f2f] max-w-[550px]">
            Our journey began with a simple mission to transform the digital landscape one pixel at a time
          </p>
        </div>
        <div className="container-page">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={IMG.heroTeam}
            alt="Xgenious annual team tour"
            className="w-full h-[520px] object-cover rounded-xl"
          />
        </div>
      </section>

      {/* ── 2. Innovation Motto ── */}
      <section className="bg-white py-20">
        <div className="container-page">
          <p className="text-[36px] font-medium leading-[46px] text-[#0f1112] text-center max-w-[1320px] mx-auto">
            Building innovation, Robust websites for the digital age. Driving growth and enhancing
            digital footprints for business of all sizes. Xgenious is an Envato Elite Author —
            40+ products, 12000+ customers, and a trusted partner for digital growth worldwide.
          </p>
        </div>
      </section>

      {/* ── 3. Trusted By ── */}
      <section className="bg-white pb-16 relative overflow-hidden">
        <p className="text-[24px] font-semibold leading-[32px] text-[#181818] text-center mb-10">
          Trusted by Leading Global Company
        </p>
        <div className="flex justify-center flex-wrap">
          {IMG.logos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center border-r border-t border-b border-[#d8d8d8] first:border-l h-[110px] w-[192px] flex-shrink-0"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={logo.src} alt={logo.name} className="h-[26px] w-auto object-contain" />
            </div>
          ))}
        </div>
        <div className="flex justify-center flex-wrap border-t border-[#d8d8d8]">
          {[...IMG.logos].reverse().map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center border-r border-b border-[#d8d8d8] first:border-l h-[110px] w-[192px] flex-shrink-0"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={logo.src} alt={logo.name} className="h-[26px] w-auto object-contain" />
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. Stats / About ── */}
      <section className="bg-[#f5f6f8] py-24 relative overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-[60%] pointer-events-none opacity-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMG.statsFaintBg} alt="" aria-hidden className="w-full h-full object-cover" />
        </div>
        <div className="container-page relative flex flex-col gap-16">
          <div className="flex gap-[232px] items-start flex-wrap lg:flex-nowrap">
            <div className="flex flex-col gap-4 w-full lg:w-[552px] flex-shrink-0">
              <span className="inline-flex items-center justify-center self-start px-4 py-1.5 rounded-full bg-[rgba(242,107,78,0.12)] text-[#ec7161] text-[16px] leading-[24px]">
                Start With Us
              </span>
              <h2 className="text-[44px] font-semibold leading-[52px] text-[#181818]">
                Honest service you can trust—no surprises, no confusion
              </h2>
            </div>
            <div className="flex flex-col gap-11 text-[18px] leading-[27px] text-[#383838] flex-1">
              <p>
                At Xgenious, we craft scalable digital solutions that help businesses grow, adapt,
                and lead in a fast-moving world. We combine strategy, design, and technology to
                build products that are not only visually engaging but also highly functional and
                performance-driven.
              </p>
              <p>
                Our team focuses on delivering user-centered experiences — from intuitive UI/UX
                design to robust development — ensuring every product we create solves real
                problems and adds meaningful value.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat, i) => (
              <div key={i} className="bg-white rounded-lg p-8 flex flex-col gap-2">
                <p className="text-[#2f2f2f] text-[16px] leading-[24px]">0{i + 1}/</p>
                <p className="text-[#181818] font-semibold leading-[56px]">
                  <span className="text-[48px]">{stat.num}</span>
                  <span className="text-[24px]">+</span>
                </p>
                <p className="text-[#2f2f2f] text-[18px] leading-[26px]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Culture Gallery ── */}
      <section className="bg-white py-24">
        <div className="container-page">
          <h2 className="text-[44px] font-semibold leading-[52px] text-[#181818] mb-12 max-w-[552px]">
            Creating experiences Rooted in Authentic culture
          </h2>
          {/* Staggered masonry layout matching Figma */}
          <div className="flex gap-6 items-start">
            {/* Column 1 */}
            <div className="flex flex-col gap-6 flex-1 mt-24">
              <div className="bg-[#d9d9d9] rounded-lg h-[473px]" />
            </div>
            {/* Column 2 */}
            <div className="flex flex-col gap-6 flex-1">
              <div className="bg-[#d9d9d9] rounded-lg h-[315px]" />
              <div className="bg-[#d9d9d9] rounded-lg h-[315px]" />
            </div>
            {/* Column 3 */}
            <div className="flex flex-col gap-6 flex-1">
              <div className="bg-[#d9d9d9] rounded-lg h-[549px]" />
              <div className="bg-[#d9d9d9] rounded-lg h-[221px]" />
            </div>
            {/* Column 4 */}
            <div className="flex flex-col gap-6 flex-1 mt-14">
              <div className="bg-[#d9d9d9] rounded-lg h-[431px]" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Founder's Vision ── */}
      <section className="bg-[#f5f6f8] py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMG.founderBg} alt="" aria-hidden className="w-full h-full object-cover opacity-30 -scale-y-100" />
        </div>
        <div className="container-page relative">
          <h2 className="text-[44px] font-semibold leading-[52px] text-[#181818] text-center mb-[70px]">
            The Founder&apos;s Vision
          </h2>
          <div className="flex gap-[88px] items-center flex-wrap lg:flex-nowrap">
            <div className="flex-shrink-0 w-full lg:w-[560px] overflow-hidden bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMG.founder}
                alt="Sharifur Rahman — Founder & CEO"
                className="w-full h-[582px] object-cover"
              />
            </div>
            <div className="flex flex-col gap-12 flex-1">
              <div>
                <p className="text-[28px] font-medium leading-[36px] text-[#181818]">Sharifur Rahman</p>
                <p className="text-[18px] leading-[27px] text-[#515151] mt-1">Founder &amp; CEO, Xgenious</p>
              </div>
              <div className="flex flex-col gap-6 text-[18px] font-medium leading-[27px] text-[#383838]">
                <p>
                  &ldquo;I founded{' '}
                  <span className="text-[#ec7161]">Xgenious</span>{' '}
                  with a simple yet powerful mission: to transform the digital landscape one pixel
                  at a time. What started as a passion for building reliable software systems has
                  grown into a company that has empowered over{' '}
                  <span className="text-[#ec7161]">12,000+ businesses</span>{' '}
                  worldwide, helping them engineer their digital dreams into reality.
                </p>
                <p>
                  Beyond Xgenious, I also created{' '}
                  <span className="text-[#ec7161]">Taskip</span>{' '}
                  — a complete platform designed to help freelancers and agency owners seamlessly
                  manage clients, schedules, payments, and projects all in one place.
                </p>
                <p>
                  My journey from developer to entrepreneur has been driven by one belief: your
                  ideas deserve to become reality, and my expertise is the tool to build your
                  digital future. Let&rsquo;s connect and create something amazing together.&rdquo;
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#ec7161] text-white text-[16px] font-semibold self-start hover:bg-[#d9614f] transition-colors"
              >
                Let&rsquo;s Connect
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Brain Behind Xgenious ── */}
      <section className="bg-white py-24">
        <div className="container-page">
          <h2 className="text-[44px] font-semibold leading-[52px] text-[#181818] mb-[70px]">
            Brain Behind Xgenious
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {IMG.team.map((member) => (
              <div key={member.name} className="flex flex-col gap-3">
                <div className="h-[384px] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.src}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-[24px] font-medium leading-[32px] text-[#181818]">{member.name}</p>
                  <p className="text-[18px] leading-[27px] text-[#515151] mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Career ── */}
      <section className="bg-[#f5f6f8] py-24">
        <div className="container-page flex gap-16 items-center flex-wrap lg:flex-nowrap">
          <div className="flex-shrink-0 w-full lg:w-[603px] h-[500px] bg-[#c4c4c4] rounded-xl" />
          <div className="flex flex-col gap-8 flex-1">
            <h2 className="text-[44px] font-semibold leading-[52px] text-[#181818]">
              Feeling stuck at your current work?
            </h2>
            <p className="text-[18px] leading-[26px] text-[#484848]">
              Join us at Xgenious and be part of something exciting! We&apos;re looking for people
              who love technology and creativity to help us make great websites and apps. Come work
              in a friendly team where your ideas really make a difference.
            </p>
            <Link href="/careers" className="inline-flex items-center self-start">
              <span className="px-8 py-[22px] bg-[#ec7161] text-white text-[16px] font-bold rounded-l-full leading-none hover:bg-[#d9614f] transition-colors">
                Join with us
              </span>
              <span className="w-[56px] h-[56px] flex items-center justify-center bg-[#ec7161] rounded-r-full hover:bg-[#d9614f] transition-colors border-l border-white/20">
                <ArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 9. CTA ── */}
      <section className="bg-[#191b1c] py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 120% at 50% 100%, rgba(236,113,97,0.18) 0%, transparent 60%)',
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={IMG.ctaMask}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none mix-blend-luminosity"
        />
        <div className="container-page relative flex flex-col items-center text-center gap-8">
          <h2 className="text-[44px] font-semibold leading-[52px] text-white max-w-[665px]">
            Ready to Build Your SaaS or Marketplace?
          </h2>
          <p className="text-[18px] font-medium leading-[26px] text-[#efedf0]">
            Book a free consultation — get a roadmap &amp; estimate.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#ec7161] text-white text-[16px] font-semibold hover:bg-[#d9614f] transition-colors"
          >
            Book a Free Consultation
            <ArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
