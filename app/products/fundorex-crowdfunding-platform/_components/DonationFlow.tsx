'use client';

import { useEffect, useState } from 'react';
import { COLOR, LIGHT_COLOR } from './constants';

const STEPS = [
  {
    label: 'Browse Campaign',
    desc: 'Donor discovers a campaign and clicks Donate Now',
  },
  {
    label: 'Choose Amount',
    desc: 'Donor selects an amount and payment method',
  },
  {
    label: 'Payment Complete',
    desc: 'Instant confirmation — campaign progress updates in real time',
  },
];

function CampaignScreen() {
  return (
    <div className="flex flex-col gap-4 p-6">
      <div className="rounded-xl overflow-hidden bg-[#E5E7EC] h-[130px] flex items-center justify-center">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="3" fill="#d1d5db" />
          <path d="M3 15l5-5 4 4 3-3 6 6" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <p className="text-[15px] font-bold text-[#0F1112]">Help Poor Kids After an Unfortunate Tragedy</p>
      <div className="flex flex-col gap-1.5">
        <div className="flex justify-between text-[12px] text-[#6b7280]">
          <span>Raised: <strong className="text-[#0F1112]">$16,545</strong></span>
          <span>Goal: $135,165</span>
        </div>
        <div className="w-full h-2 bg-[#E5E7EC] rounded-full overflow-hidden">
          <div className="h-full rounded-full" style={{ width: '12%', background: COLOR }} />
        </div>
      </div>
      <div className="flex items-center gap-2 text-[12px] text-[#6b7280]">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>284 donors · 12 days left</span>
      </div>
      <button
        className="w-full py-3 rounded-xl text-[14px] font-bold text-white mt-1"
        style={{ background: COLOR }}
      >
        Donate Now
      </button>
    </div>
  );
}

function PaymentScreen() {
  return (
    <div className="flex flex-col gap-4 p-6">
      <p className="text-[14px] font-bold text-[#0F1112]">Choose Donation Amount</p>
      <div className="grid grid-cols-3 gap-2">
        {['$10', '$25', '$50'].map((a, i) => (
          <div
            key={a}
            className="rounded-xl py-2.5 text-center text-[13px] font-bold border"
            style={i === 1 ? { background: COLOR, color: '#fff', borderColor: COLOR } : { background: '#F5F6F8', color: '#374151', borderColor: '#E5E7EC' }}
          >
            {a}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 rounded-xl border border-[#E5E7EC] px-3 py-2.5">
        <span className="text-[13px] text-[#9ca3af]">Custom amount</span>
        <span className="ml-auto text-[13px] font-semibold text-[#0F1112]">$</span>
      </div>
      <p className="text-[13px] font-bold text-[#0F1112]">Payment Method</p>
      <div className="flex flex-col gap-2">
        {['Stripe / Card', 'PayPal'].map((m, i) => (
          <div
            key={m}
            className="flex items-center gap-3 rounded-xl px-4 py-3 border text-[13px]"
            style={i === 0 ? { borderColor: COLOR, background: LIGHT_COLOR, color: '#374151' } : { borderColor: '#E5E7EC', background: '#F9FAFB', color: '#9ca3af' }}
          >
            <div
              className="w-4 h-4 rounded-full border-2 flex-shrink-0"
              style={i === 0 ? { borderColor: COLOR, background: COLOR } : { borderColor: '#d1d5db' }}
            />
            {m}
          </div>
        ))}
      </div>
      <button
        className="w-full py-3 rounded-xl text-[14px] font-bold text-white mt-1"
        style={{ background: COLOR }}
      >
        Pay $25
      </button>
    </div>
  );
}

function SuccessScreen() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8 min-h-[340px]">
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center"
        style={{ background: '#dcfce7' }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M20 6L9 17l-5-5" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="text-center">
        <p className="text-[16px] font-bold text-[#0F1112] mb-1">Donation Successful!</p>
        <p className="text-[13px] text-[#6b7280]">Thank you for your $25 donation.</p>
        <p className="text-[13px] text-[#6b7280]">A receipt has been sent to your email.</p>
      </div>
      <div className="w-full bg-[#F5F6F8] rounded-xl p-4 mt-1">
        <div className="flex justify-between text-[12px] mb-2">
          <span className="text-[#6b7280]">Campaign progress</span>
          <span className="font-bold" style={{ color: COLOR }}>+$25 added</span>
        </div>
        <div className="w-full h-2 bg-[#E5E7EC] rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-1000"
            style={{ width: '14%', background: COLOR }}
          />
        </div>
        <div className="flex justify-between text-[11px] text-[#9ca3af] mt-1.5">
          <span>$16,570 raised</span>
          <span>$135,165 goal</span>
        </div>
      </div>
      <a
        href="#"
        className="text-[13px] font-semibold underline underline-offset-2"
        style={{ color: COLOR }}
      >
        Discover more campaigns →
      </a>
    </div>
  );
}

const SCREENS = [CampaignScreen, PaymentScreen, SuccessScreen];

export default function DonationFlow() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((s) => (s + 1) % SCREENS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const Screen = SCREENS[step];

  return (
    <section className="py-20 lg:py-[100px] bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1100px] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <div>
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-5"
              style={{ background: LIGHT_COLOR, color: COLOR }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
              Donor Experience
            </div>
            <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-5">
              Frictionless Donation Flow That Converts
            </h2>
            <p className="text-[15px] text-[#6b7280] leading-7 mb-8">
              Donors go from campaign discovery to payment confirmation in under 60 seconds. A smooth, trusted checkout flow means more completed donations and fewer abandoned campaigns.
            </p>

            <div className="flex flex-col gap-4">
              {STEPS.map((s, i) => (
                <button
                  key={s.label}
                  onClick={() => setStep(i)}
                  className="flex items-start gap-4 text-left group cursor-pointer"
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-bold flex-shrink-0 mt-0.5 transition-all"
                    style={step === i ? { background: COLOR, color: '#fff' } : { background: '#F5F6F8', color: '#9ca3af' }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <p className={`text-[14px] font-bold mb-0.5 transition-colors ${step === i ? 'text-[#0F1112]' : 'text-[#9ca3af]'}`}>
                      {s.label}
                    </p>
                    <p className="text-[13px] text-[#6b7280] leading-5">{s.desc}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Progress dots */}
            <div className="flex items-center gap-2 mt-8">
              {STEPS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setStep(i)}
                  className="transition-all rounded-full cursor-pointer"
                  style={step === i ? { width: 24, height: 8, background: COLOR } : { width: 8, height: 8, background: '#E5E7EC' }}
                />
              ))}
            </div>
          </div>

          {/* Right — browser mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px]">
              {/* Browser shell */}
              <div className="rounded-xl overflow-hidden shadow-2xl border border-[#E5E7EC] bg-white">

                {/* Browser chrome */}
                <div className="h-10 bg-[#F3F4F6] flex items-center px-4 gap-3 border-b border-[#E5E7EC]">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                  </div>
                  <div className="flex-1 bg-white rounded-md px-3 h-6 flex items-center gap-2 border border-[#E5E7EC]">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="11" width="18" height="11" rx="2" stroke="#9ca3af" strokeWidth="2" />
                      <path d="M7 11V7a5 5 0 0110 0v4" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <span className="text-[10px] text-[#9ca3af] truncate">fundorex.xgenious.com/campaigns/help-poor-kids</span>
                  </div>
                </div>

                {/* App nav */}
                <div className="px-5 py-2.5 border-b border-[#F5F6F8] flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-md flex-shrink-0" style={{ background: COLOR }} />
                    <span className="text-[12px] font-bold text-[#0F1112]">Fundorex</span>
                  </div>
                  <div className="flex items-center gap-3 ml-auto text-[11px] text-[#6b7280]">
                    <span>Campaigns</span>
                    <span>Events</span>
                    <span className="font-semibold" style={{ color: COLOR }}>Donate</span>
                  </div>
                </div>

                {/* Screen content */}
                <div
                  key={step}
                  style={{ animation: 'fadeInUp 0.35s ease' }}
                >
                  <Screen />
                </div>
              </div>

              {/* Glow */}
              <div
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[200px] h-[40px] blur-2xl rounded-full opacity-30"
                style={{ background: COLOR }}
              />
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
