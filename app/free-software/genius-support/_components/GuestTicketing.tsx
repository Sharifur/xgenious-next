import { COLOR, LIGHT_COLOR } from './constants';

const CARDS = [
  {
    title: 'Guest Form Submission',
    desc: 'Customers open a ticket from a simple web form. No account, no password, no registration friction. Just name, email, and message.',
    icon: (
      <>
        <path d="M4 7h16M4 12h10M4 17h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: 'Reply by Email',
    desc: 'Every agent reply is sent as an email from your domain. Customers hit reply and it lands in the ticket thread automatically. No portal visit needed.',
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: 'Secure Portal Link',
    desc: 'Each ticket email includes a magic link that opens the ticket in the customer portal. View the full thread and reply — no login screen, no password reset.',
    icon: (
      <>
        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
];

export default function GuestTicketing() {
  return (
    <section className="py-16 sm:py-20 bg-[#f9fafb]">
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="text-center mb-12">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-medium mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            No Login Required
          </span>
          <h2 className="text-[28px] sm:text-[38px] font-semibold text-[#0F1112]">
            Submit and Reply to Tickets Without an Account
          </h2>
          <p className="text-[#484848] text-[15px] mt-3 max-w-[560px] mx-auto leading-7">
            Most helpdesk tools force customers to register before they can submit a ticket. Genius Support removes that friction entirely.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-[900px] mx-auto mb-8">
          {CARDS.map((card) => (
            <div key={card.title} className="bg-white rounded-2xl border border-[#E5E7EC] p-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mb-4"
                style={{ background: LIGHT_COLOR }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ color: COLOR }}>
                  {card.icon}
                </svg>
              </div>
              <h3 className="text-[15px] font-semibold text-[#0F1112] mb-2">{card.title}</h3>
              <p className="text-[13px] text-[#484848] leading-6">{card.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-[15px] text-[#484848] leading-8 max-w-[760px] mx-auto text-center">
          A customer can open a ticket and carry the entire conversation to resolution without ever registering. Agents never lose the thread — every reply, whether by email or portal link, lands in the same ticket. This means fewer abandoned tickets, higher response rates, and no password-reset friction between you and your customers.
        </p>
      </div>
    </section>
  );
}
