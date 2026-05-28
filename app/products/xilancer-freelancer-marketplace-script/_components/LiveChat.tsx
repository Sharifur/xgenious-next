import Image from 'next/image';

export default function LiveChat() {
  return (
    <section
      className="relative pt-16 sm:pt-20 lg:pt-[100px] pb-0 overflow-hidden"
      style={{ background: '#F5F6F8' }}
    >
      {/* Background image — bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[55%] pointer-events-none"
        style={{
          backgroundImage: 'url(/products/xilancer-livechat-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <style>{`
        @keyframes xilancer-chat-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

<div className="container-page px-4 sm:px-6 lg:px-0 relative z-10">

        {/* Header */}
        <div className="text-center mb-12 max-w-[560px] mx-auto">
          <h2 className="text-[32px] sm:text-[44px] font-bold text-[#0F1112] leading-tight mb-4">
            Live Chatting System for<br className="hidden sm:block" /> Freelancers and clients
          </h2>
          <p className="text-[#484848] text-[15px] sm:text-[17px] leading-7">
            Allow Client &amp; Freelancers to efficiently collaborate real time in their projects right into the Xilancer platform
          </p>
        </div>

        {/* Screenshot */}
        <div className="relative max-w-[860px] mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.12)]">
            <Image
              src="/products/xilancer-livechat.jpg"
              alt="Xilancer live chat system — real-time messaging between freelancers and clients"
              width={860}
              height={560}
              className="w-full object-cover object-top"
            />
          </div>

          {/* Floating card — left */}
          <div
            className="absolute top-[62%] -translate-y-1/2 -left-4 sm:-left-8 lg:-left-12 hidden sm:flex bg-white rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.14)] px-4 py-3 items-center gap-3 min-w-[210px]"
            style={{ animation: 'xilancer-chat-float 4s ease-in-out infinite' }}
          >
            <div className="w-9 h-9 rounded-full bg-[#e8f5f0] flex items-center justify-center flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#1a6b5a" strokeWidth="1.8" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <p className="text-[13px] font-semibold text-[#0F1112] truncate">Ronald Richards</p>
                <span className="text-[11px] text-[#9ca3af] flex-shrink-0">06:30 PM</span>
              </div>
              <p className="text-[12px] text-[#6b7280] truncate">Looking forward to hearing fr...</p>
            </div>
          </div>

          {/* Floating card — right */}
          <div
            className="absolute top-[32%] -translate-y-1/2 -right-4 sm:-right-8 lg:-right-12 hidden sm:flex bg-white rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.14)] px-4 py-3 items-center gap-3 min-w-[210px]"
            style={{ animation: 'xilancer-chat-float 5s ease-in-out infinite 0.7s' }}
          >
            <div className="w-9 h-9 rounded-full bg-[#eef1fe] flex items-center justify-center flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#4f5fe8" strokeWidth="1.8" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <p className="text-[13px] font-semibold text-[#0F1112] truncate">Devon Lane</p>
                <span className="text-[11px] text-[#9ca3af] flex-shrink-0">06:30 PM</span>
              </div>
              <p className="text-[12px] text-[#6b7280] truncate">Looking forward to hearing fr...</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
