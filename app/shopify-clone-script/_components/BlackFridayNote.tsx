import Link from 'next/link';
import { BFCM_COUPON, BFCM_ENDS_AT, BFCM_PCT } from '@/app/black-friday/_components/data';
import { BUNDLE_PRICE } from '@/app/products/nazmart-multi-tenancy-ecommerce-platform/_components/constants';

export default function BlackFridayNote() {
  // Clock check for the published sale end. The page revalidates hourly, so this
  // drops after 31 Dec 2026 23:59:59 UTC without a manual rebuild.
  // eslint-disable-next-line react-hooks/purity
  if (Date.now() > new Date(BFCM_ENDS_AT).getTime()) return null;

  const bundle = (BUNDLE_PRICE * (1 - BFCM_PCT / 100)).toFixed(2);
  const until = new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(BFCM_ENDS_AT));

  return (
    <p className="mb-8 rounded-2xl border border-[#E5E7EC] bg-white px-5 py-4 text-[15px] leading-6 text-[#0F1112]">
      <Link href="/black-friday" className="underline underline-offset-2">
        Black Friday: {BFCM_PCT}% off bundle packs with code {BFCM_COUPON}, until {until}. Nazmart bundle ${bundle}.
      </Link>
    </p>
  );
}
