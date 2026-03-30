import { Family } from "../types";

interface Props {
  family: Family;
  onClose: () => void;
}

const GiftIcon = ({ color }: { color: string }) => (
  <svg viewBox="0 0 24 24" width="48" height="48"
    fill="none" stroke={color} strokeWidth="1.8">
    <path d="M20 12v10H4V12" />
    <path d="M22 7H2v5h20V7z" />
    <path d="M12 22V7" />
    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
  </svg>
);

const BonusScreen = ({ family, onClose }: Props) => (
  <div className="w-[320px] bg-white rounded-2xl shadow-2xl flex flex-col
                  items-center px-7 py-9 gap-4 text-center animate-pop">
    <div
      className="w-[90px] h-[90px] rounded-full border-2 flex items-center
                 justify-center animate-float"
      style={{ borderColor: family.color }}
    >
      <GiftIcon color={family.color} />
    </div>

    <h2 className="text-3xl font-extrabold" style={{ color: family.color }}>
      {family.bonus.label}
    </h2>

    <p className="text-slate-500 text-sm leading-relaxed max-w-[230px]">
      {family.bonus.description}
    </p>

    <span
      className="text-[11px] font-black uppercase tracking-wider
                 px-4 py-1.5 rounded-full border"
      style={{
        color: family.color,
        borderColor: family.color,
        backgroundColor: `${family.color}18`,
      }}
    >
      {family.name} family bonus
    </span>

    <button
      onClick={onClose}
      className="mt-2 px-7 py-3 rounded-full text-white font-bold text-sm
                 transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110
                 shadow-lg cursor-pointer"
      style={{ backgroundColor: family.color }}
    >
      Collect bonus
    </button>
  </div>
);

export default BonusScreen;
