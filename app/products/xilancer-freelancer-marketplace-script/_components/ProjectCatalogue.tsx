import Image from 'next/image';

export default function ProjectCatalogue() {
  return (
    <section
      className="relative pt-16 sm:pt-20 lg:pt-[100px] pb-0 overflow-hidden"
      style={{ background: '#F5F6F8' }}
    >
      {/* Background image — bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[55%] pointer-events-none"
        style={{
          backgroundImage: 'url(/products/xilancer-catalogue-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <style>{`
        @keyframes xilancer-catalogue-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      <div className="container-page px-4 sm:px-6 lg:px-0 relative z-10">

        {/* Header */}
        <div className="text-center mb-12 max-w-[560px] mx-auto">
          <h2 className="text-[32px] sm:text-[44px] font-bold text-[#0F1112] leading-tight mb-4">
            Project/Gig Catalogue<br className="hidden sm:block" /> for clients
          </h2>
          <p className="text-[#484848] text-[15px] sm:text-[17px] leading-7">
            Clients will be able to filter out and order the project/gigs they need from the catalogue. Easy &amp; convenient for Freelancers &amp; Clients.
          </p>
        </div>

        {/* Screenshot */}
        <div className="relative max-w-[860px] mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.12)]">
            <Image
              src="/products/xilancer-catalogue.jpg"
              alt="Project and gig catalogue for clients in Xilancer"
              width={860}
              height={560}
              className="w-full object-cover object-top"
            />
          </div>

          {/* Floating card — left */}
          <div
            className="absolute top-[62%] -translate-y-1/2 -left-4 sm:-left-8 lg:-left-12 hidden sm:flex bg-white rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.14)] px-4 py-3 items-center gap-3 min-w-[210px]"
            style={{ animation: 'xilancer-catalogue-float 4s ease-in-out infinite' }}
          >
            <div className="w-9 h-9 rounded-full bg-[#e8f5f0] flex items-center justify-center flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" stroke="#1a6b5a" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" stroke="#1a6b5a" strokeWidth="1.8" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <p className="text-[13px] font-semibold text-[#0F1112] truncate">New Gig Posted</p>
                <span className="text-[11px] text-[#9ca3af] flex-shrink-0">Just now</span>
              </div>
              <p className="text-[12px] text-[#6b7280] truncate">Logo design — starting at $25</p>
            </div>
          </div>

          {/* Floating card — right */}
          <div
            className="absolute top-[32%] -translate-y-1/2 -right-4 sm:-right-8 lg:-right-12 hidden sm:flex bg-white rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.14)] px-4 py-3 items-center gap-3 min-w-[210px]"
            style={{ animation: 'xilancer-catalogue-float 5s ease-in-out infinite 0.7s' }}
          >
            <div className="w-9 h-9 rounded-full bg-[#eef1fe] flex items-center justify-center flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="8" stroke="#4f5fe8" strokeWidth="1.8" />
                <path d="M21 21l-4.35-4.35" stroke="#4f5fe8" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <p className="text-[13px] font-semibold text-[#0F1112] truncate">Order Placed</p>
                <span className="text-[11px] text-[#9ca3af] flex-shrink-0">02:15 PM</span>
              </div>
              <p className="text-[12px] text-[#6b7280] truncate">Web Development — $350</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
