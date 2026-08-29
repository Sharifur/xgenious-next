import { COLOR, LIGHT_COLOR } from './constants';

const NOTES = [
  {
    title: 'Test each gateway in its sandbox before enabling it',
    body: 'Stripe, PayPal, and Cash on Delivery have end-to-end webhook coverage in the test suite. The other 36 gateways are written against each provider\'s documented API and tested for structure, not against live accounts, and webhook signature checks fail open if a field name is wrong.',
  },
  {
    title: 'Sender IDs need registering with the provider',
    body: 'India requires DLT-approved sender IDs and templates; Saudi Arabia requires locally-registered sender names, before SMS will actually deliver.',
  },
  {
    title: 'Tax templates are a starting point, not tax advice',
    body: (
      <>
        Rates change. The US template carries state base rates only; counties add their own, and{' '}
        <a href="https://www.streamlinedsalestax.org/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2" style={{ color: '#0F1112' }}>
          nexus rules
        </a>{' '}
        decide where you must collect at all.
      </>
    ),
  },
  {
    title: 'EU B2B reverse charge is not implemented',
    body: 'For B2B sales into the EU, use a merchant-of-record gateway, Paddle or 2Checkout, which handles VAT registration and remittance for you.',
  },
];

export default function HonestNotes() {
  return (
    <section className="py-16 sm:py-20 bg-[#f9fafb]">
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="text-center mb-10">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-medium mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            Honest Notes
          </span>
          <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#0F1112]">
            What to Check Before You Rely on It
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[900px] mx-auto">
          {NOTES.map((note) => (
            <div key={note.title} className="bg-white rounded-2xl border border-[#E5E7EC] p-6">
              <div className="flex items-start gap-3">
                <svg className="flex-shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 9v4M12 17h.01" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />
                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="#D97706" strokeWidth="1.8" strokeLinejoin="round" />
                </svg>
                <div>
                  <p className="text-[14px] font-semibold text-[#0F1112] mb-1.5">{note.title}</p>
                  <p className="text-[13px] text-[#484848] leading-6">{note.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
