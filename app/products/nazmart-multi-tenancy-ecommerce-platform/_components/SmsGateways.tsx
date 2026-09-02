import Image from 'next/image';
import { COLOR } from './constants';

const BASE = '/products/sms-logos';

const GATEWAYS = [
  { name: "Africa's Talking", flag: '🌍', region: 'Africa', logo: `${BASE}/africastalking.png` },
  { name: 'Termii', flag: '🌍', region: 'Africa', logo: null },
  { name: 'BulkSMS', flag: '🌍', region: 'Africa', logo: `${BASE}/bulksms.png` },
  { name: 'Hubtel', flag: '🌍', region: 'Africa', logo: `${BASE}/hubtel.png` },
  { name: 'AlphaNet', flag: '🇧🇩', region: 'Bangladesh', logo: `${BASE}/alphanet.png` },
  { name: 'Bulk SMS BD', flag: '🇧🇩', region: 'Bangladesh', logo: `${BASE}/bulksmsbd.png` },
  { name: 'Mimosms', flag: '🇧🇩', region: 'Bangladesh', logo: `${BASE}/mimosms.png` },
  { name: 'SSL Wireless', flag: '🇧🇩', region: 'Bangladesh', logo: `${BASE}/sslwireless.png` },
  { name: 'Twilio', flag: '🌐', region: 'Global', logo: `${BASE}/twilio.png` },
  { name: 'Vonage (Nexmo)', flag: '🌐', region: 'Global', logo: `${BASE}/vonage.png` },
  { name: 'Sinch', flag: '🌐', region: 'Global', logo: `${BASE}/sinch.png` },
  { name: 'Plivo', flag: '🌐', region: 'Global', logo: `${BASE}/plivo.png` },
  { name: 'Fast2SMS', flag: '🇮🇳', region: 'India', logo: `${BASE}/fast2sms.png` },
  { name: 'MSG91', flag: '🇮🇳', region: 'India', logo: `${BASE}/msg91.png` },
  { name: 'TextLocal', flag: '🇮🇳', region: 'India', logo: null },
  { name: 'Zenvia', flag: '🌎', region: 'Latin America', logo: `${BASE}/zenvia.png` },
  { name: 'Gupshup', flag: '🌎', region: 'Latin America', logo: `${BASE}/gupshup.png` },
  { name: 'Infobip', flag: '🌎', region: 'Latin America', logo: `${BASE}/infobip.png` },
  { name: 'MSEGate', flag: '🇸🇦', region: 'Middle East', logo: `${BASE}/msegate.png` },
  { name: 'SMS Misr', flag: '🇸🇦', region: 'Middle East', logo: `${BASE}/smsmisr.png` },
  { name: 'Uniflonic', flag: '🇸🇦', region: 'Middle East', logo: `${BASE}/unifonic.png` },
  { name: 'Sendra', flag: '💬', region: 'WhatsApp', logo: `${BASE}/sendra-app.png` },
  { name: 'Wati', flag: '💬', region: 'WhatsApp', logo: `${BASE}/wati.png` },
];

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="12" height="12" fill="#25D366">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.48 1.32 4.99L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.51 2 12.04 2zm5.71 14.02c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.13.11-1.82-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.8-4.16-4.94-4.35-.14-.19-1.19-1.58-1.19-3.01 0-1.43.75-2.13 1.02-2.42.27-.29.58-.36.78-.36l.56.01c.18.01.42-.07.66.5.24.58.83 2 .9 2.15.07.15.12.32.02.52-.09.19-.14.31-.27.48-.14.16-.29.36-.41.48-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.27.37-.22.62-.13.25.09 1.6.75 1.87.89.28.14.46.21.53.32.07.12.07.68-.17 1.36z" />
    </svg>
  );
}

function GatewayCard({ name, flag, region, logo }: { name: string; flag: string; region: string; logo: string | null }) {
  return (
    <div className="rounded-2xl border border-[#E5E7EC] p-4 flex flex-col items-center text-center gap-2.5 hover:shadow-md transition-shadow">
      <div className="relative w-12 h-12 rounded-xl bg-[#F5F6F8] flex items-center justify-center flex-shrink-0">
        {logo ? (
          <Image src={logo} alt={`${name} logo`} width={28} height={28} className="object-contain rounded-[4px]" />
        ) : (
          <span className="text-[14px] font-bold" style={{ color: '#4c8a12' }}>
            {name.slice(0, 2).toUpperCase()}
          </span>
        )}
        <span
          className="absolute -top-1.5 -right-1.5 w-[18px] h-[18px] rounded-full bg-white border border-[#E5E7EC] flex items-center justify-center text-[10px] leading-none"
          title={region}
        >
          {region === 'WhatsApp' ? <WhatsAppIcon /> : flag}
        </span>
      </div>
      <p className="text-[12.5px] font-bold text-[#0F1112] leading-tight">{name}</p>
    </div>
  );
}

export default function SmsGateways() {
  return (
    <section className="py-14 sm:py-20 bg-white border-t border-[#E5E7EC]">
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-12 max-w-[640px] mx-auto">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-bold uppercase tracking-widest mb-4"
            style={{ background: `${COLOR}20`, color: '#4c8a12' }}
          >
            SMS Gateway Plugin
          </div>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] mb-3">
            {GATEWAYS.length}+ SMS &amp; WhatsApp Gateways Built In
          </h2>
          <p className="text-[#6b7280] text-[15px] leading-6">
            Order confirmations, OTP verification, and marketing SMS — send through whichever gateway your customers&apos; country actually supports, from Twilio to regional providers across Africa, Asia, and the Middle East.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3.5">
          {GATEWAYS.map((g) => (
            <GatewayCard key={g.name} {...g} />
          ))}
        </div>

        <p className="text-center text-[13px] text-[#9ca3af] mt-8">
          SMS Gateway plugin included in Everything Bundle ($99) and Exclusive License ($299) · Regular License gets core platform only
        </p>

      </div>
    </section>
  );
}
