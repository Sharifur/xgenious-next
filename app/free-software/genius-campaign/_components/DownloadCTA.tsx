import Link from 'next/link';
import DownloadButton from '@/components/ui/DownloadButton';
import { COLOR, LIGHT_COLOR, GITHUB_URL, LICENSE_UUID } from './constants';

export default function DownloadCTA() {
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/cta-bg.jpg" alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none" />
      <div className="absolute inset-0 bg-black/50" />
      <div className="container-page px-4 sm:px-6 lg:px-0 flex flex-col items-center text-center gap-6 max-w-[640px] mx-auto relative z-10">
        <h2 className="text-[28px] sm:text-[38px] font-semibold text-white leading-tight">
          Get Notified When Genius Campaign Launches
        </h2>
        <p className="text-[#d1d5db] text-[15px] leading-7">
          No account. No credit card. No per-contact fees. MIT license. Leave your email and we&apos;ll notify you the moment it&apos;s ready to download.
        </p>
        <DownloadButton
          productName="Genius Campaign"
          productColor={COLOR}
          productLightColor={LIGHT_COLOR}
          githubUrl={GITHUB_URL}
          licenseUuid={LICENSE_UUID}
          label="Get Notified — Free Forever"
          buttonColor={COLOR}
        />
        <p className="text-[13px] text-[#d1d5db]">
          Have questions before it launches?{' '}
          <Link href="/contact" className="text-white underline underline-offset-2 hover:opacity-80 transition-opacity">
            Contact Xgenious
          </Link>
        </p>
      </div>
    </section>
  );
}
