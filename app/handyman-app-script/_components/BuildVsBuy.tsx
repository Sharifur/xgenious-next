import Link from 'next/link';
import { COLOR, COMBO_PRICE } from '@/app/products/prohandy-on-demand-home-service-marketplace/_components/constants';

const linkClass = 'underline underline-offset-2';

export default function BuildVsBuy() {
  return (
    <section className="py-16 sm:py-20" style={{ background: '#F5F6F8' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-8">
          What a handyman app costs to build
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-[#E5E7EC] bg-white">
          <table className="w-full min-w-[640px] text-left">
            <thead>
              <tr className="border-b border-[#E5E7EC]">
                {['Path', 'Cost', 'Time'].map((heading) => (
                  <th key={heading} className="px-4 py-3 text-[13px] font-semibold text-[#6b7280]">{heading}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-[14px] text-[#374151]">
              <tr className="border-b border-[#F3F4F6]">
                <td className="px-4 py-3 font-medium">Custom agency build</td>
                <td className="px-4 py-3">
                  $40K–$90K for an MVP (
                  <a className={linkClass} href="https://www.raftlabs.com/blog/how-to-build-app-like-taskrabbit" target="_blank" rel="noopener noreferrer">RaftLabs, Nov 2026</a>
                  )
                </td>
                <td className="px-4 py-3">14–24 weeks</td>
              </tr>
              <tr className="border-b border-[#F3F4F6]">
                <td className="px-4 py-3 font-medium">Hosted platform</td>
                <td className="px-4 py-3">
                  Sharetribe $39/month to build, $199/month (yearly) to go live (
                  <a className={linkClass} href="https://www.sharetribe.com/pricing/" target="_blank" rel="noopener noreferrer">Sharetribe</a>
                  )
                </td>
                <td className="px-4 py-3">Weeks</td>
              </tr>
              <tr className="border-b border-[#F3F4F6]">
                <td className="px-4 py-3 font-medium">White-label agency package</td>
                <td className="px-4 py-3">
                  Oyelabs handyman app from $999 to $4,999 (
                  <a className={linkClass} href="https://oyelabs.com/white-label-handyman-app/" target="_blank" rel="noopener noreferrer">Oyelabs</a>
                  )
                </td>
                <td className="px-4 py-3">Varies</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">ProHandy</td>
                <td className="px-4 py-3">${COMBO_PRICE} with both apps, plus hosting and any customisation</td>
                <td className="px-4 py-3">Days to weeks</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
          <Link href="/how-to-build-an-app-like-taskrabbit" className="text-[15px] font-semibold underline underline-offset-2" style={{ color: COLOR }}>
            Full breakdown: how to build an app like TaskRabbit →
          </Link>
          <Link
            href="/free-tools/home-service-marketplace-commission-calculator"
            className="inline-flex items-center text-[13px] font-semibold rounded-full px-4 py-2 bg-white border border-[#E5E7EC] text-[#0F1112]"
          >
            Model your marketplace revenue →
          </Link>
        </div>
      </div>
    </section>
  );
}
