import { Family } from "../types";

interface Props {
  family: Family;
  onClick: (family: Family) => void;
}

const FamilyButton = ({ family, onClick }: Props) => (
  <button
    onClick={() => onClick(family)}
    className="flex flex-col items-center gap-1.5 px-4 py-5 rounded-2xl
               border-none cursor-pointer transition-all duration-300
               hover:-translate-y-1 hover:brightness-110 active:translate-y-0
               w-full"
    style={{
      backgroundColor: family.color,
      boxShadow: `0 6px 18px ${family.color}55`,
    }}
  >
    <span className="text-white font-bold text-sm">{family.name}</span>
    <span className="text-white/60 text-[11px] font-semibold uppercase tracking-wide">
      Complete family
    </span>
  </button>
);

export default FamilyButton;
