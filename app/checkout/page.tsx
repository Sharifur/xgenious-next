import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCheckoutProduct } from '@/lib/checkout-products';
import CheckoutClient from './_components/CheckoutClient';

export const metadata: Metadata = {
  title: 'Checkout — Xgenious',
  robots: { index: false, follow: false },
};

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>;
}) {
  const { product } = await searchParams;
  const checkoutProduct = getCheckoutProduct(product);

  if (!checkoutProduct) notFound();

  return <CheckoutClient product={checkoutProduct} />;
}
