import Link from 'next/link';
import {
  COLOR,
  COMBO_PRICE,
  DEMO_URL,
  LIGHT_COLOR,
  REGULAR_PRICE,
} from '@/app/products/prohandy-on-demand-home-service-marketplace/_components/constants';
import { PLAY_CLIENT, PLAY_PROVIDER, PRODUCT_PRICING } from './copy';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-[120px] pb-16 sm:pt-[140px] sm:pb-20" style={{ background: LIGHT_COLOR }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="max-w-[820px] mx-auto flex flex-col items-center text-center gap-5">
          <p className="inline-flex items-center gap-2 bg-white/70 rounded-full px-4 py-1.5 border border-white text-[13px] font-medium text-[#484848]">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
            Handyman app script
          </p>
          <h1 className="text-[34px] leading-[42px] sm:text-[48px] sm:leading-[56px] lg:text-[56px] lg:leading-[64px] font-bold text-[#0F1112]">
            Handyman App Script: Customer App, Provider App and Admin Panel
          </h1>
          <p className="text-[#484848] text-[16px] sm:text-[18px] leading-7 max-w-[720px]">
            ProHandy is a ready-made script for running your own handyman or home service marketplace. Customers book services or post jobs, handymen accept work and get paid, and you take a commission from one admin panel. Built with Laravel and the latest Flutter.
          </p>
          <p className="text-[13px] text-[#484848]">Rated 4.8 · 73+ marketplaces built · Free installation</p>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <Link
              href={PRODUCT_PRICING}
              className="inline-flex items-center gap-2 text-white font-semibold text-[15px] rounded-full px-8 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: COLOR, boxShadow: `0 6px 20px ${COLOR}40` }}
            >
              See pricing
            </Link>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-[15px] rounded-full px-8 py-3.5 border-2 text-[#0F1112] border-[#0F1112]/20 bg-white/70 hover:bg-white transition-all"
            >
              Try the live demo
            </a>
          </div>
          <p className="text-[14px] text-[#484848]">
            Demo apps on Google Play:{' '}
            <a href={PLAY_CLIENT} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 font-medium">
              Customer
            </a>
            {' · '}
            <a href={PLAY_PROVIDER} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 font-medium">
              Provider
            </a>
          </p>
          <p className="text-[13px] font-semibold rounded-full px-4 py-1.5 bg-white text-[#0F1112]">
            ${REGULAR_PRICE} web + admin · ${COMBO_PRICE} with both apps
          </p>
        </div>
      </div>
    </section>
  );
}
