interface Props {
  index: number;
  text: string;
  selected: boolean;
  correct: boolean | null;
  disabled: boolean;
  onClick: () => void;
}

const LETTERS = ["A", "B", "C", "D"];

const ChoiceButton = ({ index, text, selected, correct, disabled, onClick }: Props) => {
  const base =
    "flex items-center gap-2.5 w-full px-3.5 py-2.5 rounded-xl border text-sm \
     font-medium text-left transition-all duration-200 cursor-pointer";

  let state =
    "bg-slate-50 border-slate-200 text-slate-700 hover:bg-indigo-50 \
     hover:border-indigo-300 hover:translate-x-1";

  if (selected && correct) state = "bg-green-50 border-green-400 text-green-800";
  if (selected && correct === false) state = "bg-red-50 border-red-400 text-red-800";
  if (!selected && disabled && correct === true)
    state = "bg-green-50 border-green-400 text-green-800";

  let badgeStyle = "bg-slate-200 text-slate-600";
  if (selected && correct) badgeStyle = "bg-green-400 text-white";
  if (selected && correct === false) badgeStyle = "bg-red-400 text-white";

  return (
    <button
      className={`${base} ${state} ${disabled ? "cursor-default" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span
        className={`w-6 h-6 min-w-[24px] rounded-full flex items-center justify-center
                    text-[11px] font-black transition-colors duration-200 ${badgeStyle}`}
      >
        {LETTERS[index]}
      </span>
      {text}
    </button>
  );
};

export default ChoiceButton;
