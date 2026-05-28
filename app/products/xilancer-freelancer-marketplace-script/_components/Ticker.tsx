export default function Ticker() {
  return (
    <div className="overflow-hidden bg-[#1a3d3a] py-3">
      <style>{`
        @keyframes xilancer-ticker {
          0% { transform: translateX(0) }
          100% { transform: translateX(-50%) }
        }
        .xilancer-ticker-track {
          display: flex;
          width: max-content;
          animation: xilancer-ticker 28s linear infinite;
        }
      `}</style>
      <div className="xilancer-ticker-track">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="flex items-center gap-3 px-8 text-white text-[13px] font-semibold uppercase tracking-wide whitespace-nowrap">
            40% OFF ON INSTALLATION PACKAGE GRAB IT NOW
            <span aria-hidden>✨</span>
            <span aria-hidden className="text-white/30">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
