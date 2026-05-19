import type { Metadata } from 'next';
import Link from 'next/link';
import TrustedBy from '@/components/sections/TrustedBy';
import StatsGrid from '@/components/ui/StatsGrid';
import Button, { ArrowIcon } from '@/components/ui/Button';
import SectionBadge from '@/components/ui/SectionBadge';
import Testimonials from '@/components/sections/Testimonials';

const BASE_URL = 'https://xgenious.com';

export const metadata: Metadata = {
  title: 'About Xgenious — Custom SaaS & Software Development Company',
  description:
    'Xgenious is a custom software development company founded in 2017. We build SaaS, web apps, mobile apps, and AI agents for mid-market teams. 13,000+ users across our own products. UK · US · UAE.',
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Xgenious — Custom SaaS & Software Development Company',
    description:
      'Xgenious is a custom software development company founded in 2017. We build SaaS, web apps, mobile apps, and AI agents for mid-market teams. 13,000+ users across our own products. UK · US · UAE.',
    url: `${BASE_URL}/about`,
    siteName: 'Xgenious',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'About Xgenious' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Xgenious — Custom SaaS & Software Development Company',
    description:
      'Xgenious is a custom software development company founded in 2017. We build SaaS, web apps, mobile apps, and AI agents for mid-market teams. 13,000+ users across our own products. UK · US · UAE.',
    images: ['/og-image.png'],
    site: '@xgenious1',
    creator: '@xgenious1',
  },
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



export default function AboutPage() {
  return (
    <>
      {/* ── 1. Hero ── */}
      <section style={{ background: 'linear-gradient(180deg, #f5f6ea 0%, #f3dacd 100%)' }} className="pt-[100px] pb-[60px] sm:pt-[140px] sm:pb-[100px]">
        <div className="container-page px-4 sm:px-6 lg:px-0 flex flex-col items-center text-center gap-4 sm:gap-6 pb-10 sm:pb-14">
          <h1 className="text-[32px] leading-[40px] sm:text-[48px] sm:leading-[56px] lg:text-[72px] lg:leading-[80px] font-semibold text-[#181818] max-w-[1100px]">
            We Build Software{' '}
            <span className="font-medium italic">That Businesses Depend On</span>
          </h1>
          <p className="text-[14px] leading-[21px] sm:text-[16px] sm:leading-6 lg:text-[18px] lg:leading-[27px] text-[#2f2f2f] max-w-[600px]">
            Since 2017, Xgenious has been engineering custom SaaS products, web applications, mobile apps, and AI agents for founders and mid-market teams. We don&apos;t just build software — we run it.
          </p>
        </div>
        <div className="container-page px-4 sm:px-6 lg:px-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/about-hero-team.jpg"
            alt="Xgenious annual team tour"
            className="w-full max-w-[1100px] mx-auto block h-[200px] sm:h-[360px] lg:h-[520px] object-cover rounded-xl"
          />
        </div>
      </section>

      {/* ── 2. Innovation Motto ── */}
      <section className="bg-white py-10 sm:py-16 lg:py-20">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <p className="text-[18px] leading-[28px] sm:text-[22px] sm:leading-[34px] lg:text-[32px] lg:leading-[46px] font-medium text-[#0f1112] text-center max-w-[1320px] mx-auto">
            We are a custom <span className="text-[#ec7161]">software development</span> company based in Bangladesh, operating globally
            through <span className="text-[#ec7161]">UK, US, and UAE</span> entities. From a team of two engineers in 2017 to a full-service{' '}
            <span className="text-[#ec7161]">SaaS</span> and <span className="text-[#ec7161]">software engineering</span> studio — we have shipped products used by{' '}
            <span className="text-[#ec7161]">13,000+</span> businesses across <span className="text-[#ec7161]">100+ countries</span>. Every service we offer is backed by the same engineering team that
            builds and operates our own software in production.
          </p>
        </div>
      </section>

      {/* ── 3. Trusted By ── */}
      <TrustedBy />

      {/* ── 4. Stats / About ── */}
      <section className="bg-[#F5F6F8] py-14 sm:py-20 lg:py-24 relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/start-with-us-section-bg-path.png"
          alt=""
          aria-hidden
          className="absolute bottom-0 right-0 z-0 pointer-events-none hidden lg:block"
        />
        <div className="container-page px-4 sm:px-6 lg:px-0 relative z-10 flex flex-col gap-10 sm:gap-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[232px] items-start">
            <div className="flex flex-col gap-3 sm:gap-4 w-full lg:w-[552px] lg:flex-shrink-0">
              <SectionBadge className="self-start">Start With Us</SectionBadge>
              <h2 className="text-[26px] leading-[34px] sm:text-[34px] sm:leading-[42px] lg:text-[44px] lg:leading-[52px] font-semibold text-[#181818]">
                Honest service you can trust—no surprises, no confusion
              </h2>
            </div>
            <div className="flex flex-col gap-6 sm:gap-11 text-[14px] sm:text-[16px] leading-[22px] sm:leading-[27px] text-[#383838] flex-1">
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
          <StatsGrid variant="light" />
        </div>
      </section>

      {/* ── 5. Culture / Values ── */}
      <section className="bg-white pt-14 sm:pt-[100px] pb-14 sm:pb-[100px]">
        <div className="container-page px-4 sm:px-6 lg:px-0 flex flex-col gap-10 sm:gap-14 lg:gap-[72px]">

          {/* Header + body */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[100px] items-start">
            <h2 className="text-[26px] leading-[34px] sm:text-[34px] sm:leading-[42px] lg:text-[44px] lg:leading-[52px] font-semibold text-[#181818] lg:w-[480px] lg:flex-shrink-0">
              Engineering Culture Rooted in Ownership
            </h2>
            <p className="text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] lg:text-[18px] lg:leading-[28px] text-[#484848] flex-1">
              We operate like the engineers we are. Scope is agreed in writing. Timelines are committed, not estimated. Code is owned by the client on final payment. We don&apos;t use starter templates, we don&apos;t hand off to junior pods mid-project, and we don&apos;t disappear after go-live. We have skin in the game — seven of our own SaaS products run on the same stack we build for clients.
            </p>
          </div>

          {/* Value cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Fixed Scope, Fixed Price',
                body: 'Every engagement starts with a written scope document. The price is fixed to that scope — not to a billable hour count.',
              },
              {
                title: 'Same Team, Start to Finish',
                body: 'The senior engineers who design your architecture are the same engineers who build it. No handoffs to junior pods after kickoff.',
              },
              {
                title: 'You Own the Code',
                body: 'IP transfers to you on final payment. Your GitHub, your cloud, your App Store account. No licences, no revenue shares, no lock-in.',
              },
              {
                title: 'We Run What We Build',
                body: 'Seven SaaS products in production with 13,000+ active users. We know what it takes to run real software because we do it ourselves.',
              },
            ].map((v) => (
              <div
                key={v.title}
                className="flex flex-col gap-3 p-6 sm:p-8 rounded-[12px] bg-[#f5f6f8]"
              >
                <p className="font-semibold text-[#181818] text-[16px] leading-[24px] sm:text-[18px] sm:leading-[26px]">
                  {v.title}
                </p>
                <p className="font-normal text-[#484848] text-[14px] leading-[22px] sm:text-[15px] sm:leading-[23px]">
                  {v.body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 6. Founder's Vision ── */}
      <section className="bg-[#f5f6f8] py-14 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/founder-section-bg.jpg" alt="" aria-hidden className="w-full h-full object-cover opacity-30 -scale-y-100" />
        </div>
        <div className="container-page px-4 sm:px-6 lg:px-0 relative">
          <h2 className="text-[26px] leading-[34px] sm:text-[34px] sm:leading-[42px] lg:text-[44px] lg:leading-[52px] font-semibold text-[#181818] text-center mb-8 sm:mb-14 lg:mb-[70px]">
            The Founder&apos;s Vision
          </h2>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[88px] items-start lg:items-center">
            <div className="flex-shrink-0 w-full lg:w-[560px] overflow-hidden bg-white rounded-xl lg:rounded-none">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/sharifur-rahman-robin.jpg"
                alt="Sharifur Rahman — Founder & CEO"
                className="w-full h-[260px] sm:h-[400px] lg:h-[582px] object-cover"
              />
            </div>
            <div className="flex flex-col gap-6 sm:gap-12 flex-1">
              <div>
                <p className="text-[20px] leading-[28px] sm:text-[28px] sm:leading-[36px] font-medium text-[#181818]">Sharifur Rahman</p>
                <p className="text-[14px] leading-[21px] sm:text-[18px] sm:leading-[27px] text-[#515151] mt-1">Founder &amp; CEO, Xgenious</p>
              </div>
              <div className="flex flex-col gap-4 sm:gap-6 text-[14px] sm:text-[16px] lg:text-[18px] font-medium leading-[22px] sm:leading-[26px] lg:leading-[27px] text-[#383838]">
                <p>
                  &ldquo;I founded Xgenious in 2017 with a clear belief: businesses deserve software
                  built properly — with a committed delivery date, a fixed price, and code they
                  actually own. What began as a two-person engineering team has grown into a company
                  that has shipped SaaS products, web platforms, mobile apps, and AI agents for{' '}
                  <span className="text-[#ec7161]">13,000+ businesses</span> across{' '}
                  <span className="text-[#ec7161]">100+ countries</span>.
                </p>
                <p>
                  We operate UK, US, and UAE legal entities so our clients can sign locally — and
                  we run <span className="text-[#ec7161]">seven of our own SaaS products</span> in
                  production so we understand the real cost of building software that has to work.
                  That operational experience is what separates us from agencies that only build.
                </p>
                <p>
                  If you have a software problem worth solving, let&rsquo;s talk honestly about
                  what it will take.&rdquo;
                </p>
              </div>
              <Button href="/contact" variant="coral" icon={<ArrowIcon rotate />} className="self-start">
                Let&rsquo;s Connect
              </Button>
            </div>
          </div>
        </div>
      </section>


      <Testimonials />

      {/* ── 9. CTA ── */}
      <section className="bg-[#191b1c] py-14 sm:py-20 lg:py-24 relative overflow-hidden">
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
        <div className="container-page px-4 sm:px-6 lg:px-0 relative flex flex-col items-center text-center gap-6 sm:gap-8">
          <h2 className="text-[26px] leading-[34px] sm:text-[34px] sm:leading-[42px] lg:text-[44px] lg:leading-[52px] font-semibold text-white max-w-[665px]">
            Ready to Build Your SaaS or Marketplace?
          </h2>
          <p className="text-[14px] leading-[21px] sm:text-[18px] sm:leading-[26px] font-medium text-[#efedf0]">
            Book a free consultation — get a roadmap &amp; estimate.
          </p>
          <Button href="/contact" variant="coral" icon={<ArrowIcon />}>
            Book a Free Consultation
          </Button>
        </div>
      </section>
    </>
  );
}
