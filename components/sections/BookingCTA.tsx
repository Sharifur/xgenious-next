'use client';
import Image from 'next/image';

export default function BookingCTA() {
  return (
    <section id="booking" className="py-16 sm:py-24 relative overflow-hidden bg-[#0C0C10]">
      {/* Background image — object-cover prevents stretching */}
      <Image
        src="/start-with-us-bg.jpg"
        alt=""
        fill
        className="object-cover object-center"
        priority={false}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0A0A0C]/80" />

      {/* Decorative path overlay */}
      <Image
        src="/start-with-us-section-bg-path.png"
        alt=""
        fill
        className="object-cover object-center opacity-30 pointer-events-none"
        priority={false}
      />

      <div className="container-page relative z-10 px-4 sm:px-6 lg:px-0">
        <div className="rounded-[20px] sm:rounded-[24px] overflow-hidden">
          <iframe
            src="https://crm.xgenious.com/public/meetings/book-a-30-min-saas-strategy-call"
            width="100%"
            height="700"
            frameBorder="0"
            allowFullScreen
            className="block w-full"
          />
        </div>
      </div>
    </section>
  );
}
