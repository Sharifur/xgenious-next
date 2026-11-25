import FAQ from '@/components/sections/FAQ';
import { FAQS } from './copy';

export default function FaqSection() {
  return (
    <FAQ
      faqs={FAQS}
      badge="Frequently asked questions"
      title="Frequently asked questions"
      description="Straight answers on what this Shopify clone script is, what it costs, and how stores stay separate."
    />
  );
}
