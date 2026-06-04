import Image from 'next/image';
import { COLOR, LIGHT_COLOR } from './constants';

const VERTICALS = [
  {
    title: 'Home Services',
    desc: 'Plumbing, electrical, cleaning, AC repair, and general handyman bookings.',
    example: 'Handy · TaskRabbit clone',
    img: '/products/prohandy-uc-home.jpg',
    gradient: 'from-[#0f4c35] to-[#1a7a56]',
  },
  {
    title: 'Beauty & Wellness',
    desc: 'Hair styling, nail care, massage therapy, skincare, and spa services.',
    example: 'StyleSeat · Treatwell clone',
    img: '/products/prohandy-uc-beauty.jpg',
    gradient: 'from-[#7c2d7c] to-[#b45cb4]',
  },
  {
    title: 'Events & Party Services',
    desc: 'DJ hire, catering, event decoration, photography, and venue setup.',
    example: 'Bark · Thumbtack clone',
    img: '/products/prohandy-uc-events.jpg',
    gradient: 'from-[#7c3d00] to-[#c4640a]',
  },
  {
    title: 'Automotive & Mechanic',
    desc: 'Car repair, detailing, oil change, tire fitting, and roadside assistance.',
    example: 'YourMechanic clone',
    img: '/products/prohandy-uc-auto.jpg',
    gradient: 'from-[#1a1a2e] to-[#16213e]',
  },
  {
    title: 'Pet Care Services',
    desc: 'Dog walking, pet grooming, boarding, vet visits, and pet sitting.',
    example: 'Rover · Wag clone',
    img: '/products/prohandy-uc-pets.jpg',
    gradient: 'from-[#0c4a6e] to-[#0284c7]',
  },
  {
    title: 'Fitness & Personal Training',
    desc: 'Personal trainers, yoga instructors, nutritionists, and gym coaches.',
    example: 'ClassPass · Mindbody clone',
    img: '/products/prohandy-uc-fitness.jpg',
    gradient: 'from-[#3b0764] to-[#7c3aed]',
  },
  {
    title: 'Home Improvement',
    desc: 'Renovation, carpentry, painting, roofing, flooring, and landscaping.',
    example: 'Angi · HomeAdvisor clone',
    img: '/products/prohandy-uc-improvement.jpg',
    gradient: 'from-[#422006] to-[#92400e]',
  },
  {
    title: 'Personal Assistance',
    desc: 'Errands, grocery delivery, tutoring, moving help, and administrative tasks.',
    example: 'TaskRabbit · Errands clone',
    img: '/products/prohandy-uc-errands.jpg',
    gradient: 'from-[#064e3b] to-[#047857]',
  },
];

export default function UseCases() {
  return (
    <section className="py-20 lg:py-[100px] bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1100px] mx-auto">

        <div className="text-center mb-12 max-w-[640px] mx-auto">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
            8 Industry Verticals
          </div>
          <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] leading-tight mb-4">
            Not Just Home Services — Any On-Demand Marketplace
          </h2>
          <p className="text-[15px] text-[#6b7280] leading-7">
            Prohandy is built for any service vertical — launch a home cleaning marketplace, a beauty booking app, a pet care platform, or all eight at once from a single codebase.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {VERTICALS.map((v) => (
            <div
              key={v.title}
              className="relative rounded-2xl overflow-hidden h-[220px] group cursor-default"
            >
              <Image
                src={v.img}
                alt={v.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20" />

              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <h3 className="text-[15px] font-bold text-white mb-1 leading-tight">{v.title}</h3>
                <p className="text-[12px] text-white/75 leading-4 mb-3 line-clamp-2">{v.desc}</p>
                <span className="self-start text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/15 text-white/90 backdrop-blur-sm">
                  {v.example}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-10 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ background: '#F0FDF4', border: `1px solid ${COLOR}30` }}
        >
          <div>
            <p className="text-[15px] font-bold text-[#0F1112] mb-1">One codebase. Any service category.</p>
            <p className="text-[13px] text-[#6b7280]">Configure service categories from the admin panel — no code changes required to add a new vertical.</p>
          </div>
          <div
            className="text-[13px] font-bold px-5 py-2.5 rounded-full flex-shrink-0 text-white"
            style={{ background: COLOR }}
          >
            73+ marketplaces built
          </div>
        </div>

      </div>
    </section>
  );
}
