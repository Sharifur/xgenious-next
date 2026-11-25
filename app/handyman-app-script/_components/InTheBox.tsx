import { COMBO_PRICE, LIGHT_COLOR, REGULAR_PRICE } from '@/app/products/prohandy-on-demand-home-service-marketplace/_components/constants';

const CARDS = [
  {
    title: 'Customer app (Flutter)',
    body: 'Browse services, book several in one cart with add-ons, a preferred staff member and a time slot, or post a job and compare offers. Live chat, push notifications, saved addresses, reviews.',
  },
  {
    title: 'Provider app (Flutter)',
    body: 'Find jobs in a list or on a map, send offers with a cover letter, accept and manage orders, add staff, set schedules, verify identity, request withdrawals.',
  },
  {
    title: 'Admin panel (Laravel)',
    body: 'Approve and verify providers, manage categories, services and state/city/area lists, set the platform-wide commission rate, coupons, tax, 19 payment gateways, multi-admin roles, support tickets and an earnings report.',
  },
];

export default function InTheBox() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-8">What&apos;s in the box</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CARDS.map((card) => (
            <article key={card.title} className="rounded-2xl border border-[#E5E7EC] p-6" style={{ background: LIGHT_COLOR }}>
              <h3 className="text-[18px] font-bold text-[#0F1112] mb-3">{card.title}</h3>
              <p className="text-[15px] leading-7 text-[#484848]">{card.body}</p>
            </article>
          ))}
        </div>
        <p className="text-[13px] text-[#6b7280] mt-6 leading-6">
          The customer and provider apps and the WhatsApp plugin come with the ${COMBO_PRICE} Everything Bundle. The ${REGULAR_PRICE} Regular licence is the web platform and admin panel.
        </p>
        <p className="text-[13px] text-[#6b7280] mt-2 leading-6">
          Commission can be set platform-wide, per category or per provider. Paid featured listings, a credit system for job offers and configurable withdrawal fees are included.
        </p>
      </div>
    </section>
  );
}
