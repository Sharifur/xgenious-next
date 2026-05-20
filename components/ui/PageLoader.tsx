export default function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          className="animate-spin"
          style={{ animationDuration: '0.8s' }}
        >
          <circle cx="20" cy="20" r="17" stroke="#f3f4f6" strokeWidth="4" />
          <path
            d="M20 3a17 17 0 0 1 17 17"
            stroke="#ec7161"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
        <span className="text-[13px] text-[#9ca3af] font-medium tracking-wide">Loading…</span>
      </div>
    </div>
  );
}
