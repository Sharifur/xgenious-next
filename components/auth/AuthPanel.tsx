type Props = {
  badge: string;
  headline: React.ReactNode;
  description: string;
};

export default function AuthPanel({ badge, headline, description }: Props) {
  return (
    <div className="hidden md:flex md:w-[44%] bg-[#FDF8F3] p-10 flex-col justify-between relative overflow-hidden">
      <span className="absolute top-[38%] right-10 text-[#ec7161] text-3xl font-light select-none">+</span>
      <svg
        className="absolute top-[32%] right-14 w-10 h-10 text-gray-400 opacity-60"
        viewBox="0 0 60 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M5 30 Q30 5 55 20" strokeLinecap="round" />
        <path d="M48 14 L55 20 L47 26" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div />
      <div className="space-y-5">
        <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase">{badge}</p>
        <h2 className="text-3xl font-bold text-[#0F1112] leading-tight">{headline}</h2>
        <p className="text-sm text-gray-500 leading-relaxed max-w-xs">{description}</p>
      </div>
      <div />
    </div>
  );
}
