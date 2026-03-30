import { Family } from "../types";

interface Props {
  correct: boolean;
  family: Family;
  onClose: () => void;
}

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" width="40" height="40"
    stroke="white" strokeWidth="3" fill="none">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const CrossIcon = () => (
  <svg viewBox="0 0 24 24" width="40" height="40"
    stroke="white" strokeWidth="3" fill="none">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const Spinner = ({ color }: { color: string }) => (
  <div
    className="w-8 h-8 rounded-full border-4 border-slate-200 animate-spin"
    style={{ borderTopColor: color }}
  />
);

const ResultScreen = ({ correct, family, onClose }: Props) => (
  <div className="w-[320px] bg-white rounded-2xl shadow-2xl flex flex-col
                  items-center px-7 py-9 gap-4 text-center animate-pop">
    <div
      className={`w-[72px] h-[72px] rounded-full flex items-center justify-center
                  ${correct ? "bg-green-500" : "bg-red-500"}`}
    >
      {correct ? <CheckIcon /> : <CrossIcon />}
    </div>

    <h2 className={`text-2xl font-extrabold
                    ${correct ? "text-green-600" : "text-red-600"}`}>
      {correct ? "Correct!" : "Incorrect"}
    </h2>

    {correct ? (
      <>
        <p className="text-slate-500 text-sm">Unlocking your bonus...</p>
        <Spinner color={family.color} />
      </>
    ) : (
      <>
        <p className="text-slate-500 text-sm leading-relaxed">
          The correct answer was:{" "}
          <strong className="text-slate-700">
            {typeof family.question.correctAnswer === "number"
              ? family.question.choices?.[family.question.correctAnswer]
              : "—"}
          </strong>
        </p>
        <p className="text-slate-400 text-xs">
          You keep the{" "}
          <strong style={{ color: family.color }}>{family.name}</strong>{" "}
          family — no bonus this time.
        </p>
        <button
          onClick={onClose}
          className="mt-2 px-6 py-3 rounded-full bg-slate-800 text-white
                     font-bold text-sm hover:bg-slate-700 transition-colors cursor-pointer"
        >
          Continue
        </button>
      </>
    )}
  </div>
);

export default ResultScreen;
