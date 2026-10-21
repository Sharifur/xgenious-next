import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCheckoutProduct } from '@/lib/checkout-products';
import CheckoutClient from './_components/CheckoutClient';

export const metadata: Metadata = {
  title: 'Checkout',
  robots: { index: false, follow: false },
};

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string; coupon?: string }>;
}) {
  const { product, coupon } = await searchParams;
  // Campaign links carry their own code (?coupon=BFCM50); ignore anything that isn't a plain code.
  const initialCoupon = coupon && /^[A-Za-z0-9_-]{1,40}$/.test(coupon) ? coupon.toUpperCase() : undefined;
  const checkoutProduct = getCheckoutProduct(product);

  if (!checkoutProduct) notFound();

  return <CheckoutClient product={checkoutProduct} initialCoupon={initialCoupon} />;
}
