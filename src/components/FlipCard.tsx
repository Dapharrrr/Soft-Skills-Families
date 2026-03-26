import { useEffect, useState } from "react";
import { Family } from "../types";
import ChoiceButton from "./ChoiceButton";

interface Props {
  family: Family;
  isFlipped: boolean;
  selectedAnswer: number | null;
  onFlip: () => void;
  onAnswer: (index: number) => void;
}

const FlipCard = ({ family, isFlipped, selectedAnswer, onFlip, onAnswer }: Props) => {
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const hasAnswered = selectedAnswer !== null;

  // Démarre le timer quand la carte se retourne
  useEffect(() => {
    if (isFlipped) {
      setTimeLeft(60);
    } else {
      setTimeLeft(null);
    }
  }, [isFlipped]);

  // Décompte
  useEffect(() => {
    if (timeLeft === null || hasAnswered) return;
    if (timeLeft === 0) {
      onAnswer(-1);
      return;
    }
    const t = setTimeout(() => setTimeLeft((prev) => (prev ?? 1) - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, hasAnswered]);

  const isUrgent = timeLeft !== null && timeLeft <= 10;
  const progress = timeLeft !== null ? (timeLeft / 60) * 100 : 100;

  return (
    <div className="w-[320px] h-[490px]" style={{ perspective: "1400px" }}>
      <div
        className="relative w-full h-full transition-all duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          cursor: isFlipped ? "default" : "pointer",
          transitionTimingFunction: "cubic-bezier(0.4, 0.2, 0.2, 1)",
        }}
        onClick={!isFlipped ? onFlip : undefined}
      >
        {/* Back face */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl
                     flex flex-col items-center justify-end pb-6"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <img
            src="/dos card.png"
            alt="Card back"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
          />
          <span
            className="relative z-10 text-white/80 text-[13px] font-semibold
                       tracking-wide bg-black/35 px-4 py-1.5 rounded-full animate-pulse"
          >
            Tap to reveal
          </span>
        </div>

        {/* Front face */}
        <div
          className="absolute inset-0 rounded-2xl shadow-2xl bg-white overflow-y-auto
                     flex flex-col items-center px-5 py-6 gap-3"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            borderTop: `4px solid ${family.color}`,
          }}
        >
          <span
            className="text-white text-[11px] font-black uppercase tracking-widest
                       px-4 py-1 rounded-full"
            style={{ backgroundColor: family.color }}
          >
            {family.name}
          </span>

          {/* Timer */}
          {timeLeft !== null && (
            <div className="w-full flex flex-col items-center gap-1">
              <span
                className={`text-2xl font-black tabular-nums transition-colors duration-300
                  ${isUrgent ? "text-red-500 animate-pulse" : "text-slate-600"}`}
              >
                {timeLeft}s
              </span>
              {/* Barre de progression */}
              <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-1000`}
                  style={{ 
                    width: `${progress}%`,
                    backgroundColor: isUrgent ? "#ef4444" : family.color 
                  }}
                />
              </div>
            </div>
          )}

          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
            Bonus Challenge
          </span>

          <p className="text-slate-800 font-semibold text-[15px] text-center leading-relaxed">
            {family.question.prompt}
          </p>

          <div className="flex flex-col gap-2 w-full mt-1">
            {family.question.choices?.map((choice, i) => {
              const isSelected = selectedAnswer === i;
              const isCorrectChoice = i === family.question.correctAnswer;

              return (
                <ChoiceButton
                  key={i}
                  index={i}
                  text={choice}
                  selected={isSelected}
                  correct={
                    isSelected
                      ? isCorrectChoice
                      : hasAnswered && isCorrectChoice
                      ? true
                      : null
                  }
                  disabled={hasAnswered}
                  onClick={() => onAnswer(i)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
