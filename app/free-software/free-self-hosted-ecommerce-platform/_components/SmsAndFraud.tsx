import Image from 'next/image';
import { COLOR, LIGHT_COLOR, SMS_GATEWAYS, FRAUD_CHECKERS } from './constants';
import { PROVIDER_LOGOS } from './logos';

function GroupGrid({ groups }: { groups: { region: string; providers: string[] }[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {groups.map((group) => (
        <div key={group.region} className="bg-white rounded-2xl border border-[#E5E7EC] p-5">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-[13px] font-semibold text-[#0F1112]">{group.region}</h4>
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full" style={{ background: LIGHT_COLOR, color: COLOR }}>
              {group.providers.length}
            </span>
          </div>
          <ul className="flex flex-wrap gap-1.5">
            {group.providers.map((p) => (
              <li key={p} className="flex items-center gap-1.5 text-[12px] font-medium text-[#484848] bg-[#f9fafb] border border-[#E5E7EC] rounded-full pl-1 pr-2.5 py-0.5">
                {PROVIDER_LOGOS[p] ? (
                  <Image src={PROVIDER_LOGOS[p]} alt={p} width={14} height={14} className="rounded-sm object-contain flex-shrink-0" unoptimized />
                ) : null}
                {p}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function SmsAndFraud() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="mb-6">
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-medium mb-4"
                style={{ background: LIGHT_COLOR, color: COLOR }}
              >
                SMS Gateways: 20
              </span>
              <h2 className="text-[22px] sm:text-[26px] font-semibold text-[#0F1112]">
                Order Updates, Delivered by SMS
              </h2>
            </div>
            <GroupGrid groups={SMS_GATEWAYS} />
          </div>

          <div>
            <div className="mb-6">
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-medium mb-4"
                style={{ background: LIGHT_COLOR, color: COLOR }}
              >
                Fraud Checkers: 11
              </span>
              <h2 className="text-[22px] sm:text-[26px] font-semibold text-[#0F1112]">
                Screen Orders Before You Ship
              </h2>
            </div>
            <GroupGrid groups={FRAUD_CHECKERS} />
          </div>
        </div>

        <p className="text-center text-[12px] text-[#9ca3af] mt-10 max-w-[720px] mx-auto">
          Sender IDs need registering with the provider before sending. India requires DLT-approved sender IDs and templates; Saudi Arabia requires locally-registered sender names.
        </p>
      </div>
    </section>
  );
}
