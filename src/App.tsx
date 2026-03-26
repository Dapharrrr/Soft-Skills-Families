import { families } from "./data";
import { useGameFlow } from "./hooks/useGameFlow";
import Header from "./components/Header";
import FamiliesGrid from "./components/FamiliesGrid";
import Modal from "./components/Modal";
import FlipCard from "./components/FlipCard";
import ResultScreen from "./components/ResultScreen";
import BonusScreen from "./components/BonusScreen";

const App = () => {
  const {
    completedFamily,
    phase,
    isFlipped,
    selectedAnswer,
    isVisible,
    startFamily,
    flipCard,
    answerQuestion,
    close,
  } = useGameFlow();

  const isOpen = phase !== "idle";

  return (
    <div className="min-h-screen bg-black text-slate-900">
      <div className="max-w-5xl mx-auto px-4 pb-20">
        <Header />
        <FamiliesGrid families={families} onSelect={startFamily} />
      </div>

      {isOpen && completedFamily && (
        <Modal isVisible={isVisible} onClose={close}>
          {(phase === "card-reveal" || phase === "question") && (
            <FlipCard
              family={completedFamily}
              isFlipped={isFlipped}
              selectedAnswer={selectedAnswer}
              onFlip={flipCard}
              onAnswer={answerQuestion}
            />
          )}
          {(phase === "correct" || phase === "incorrect") && (
            <ResultScreen
              correct={phase === "correct"}
              family={completedFamily}
              onClose={close}
            />
          )}
          {phase === "bonus" && (
            <BonusScreen family={completedFamily} onClose={close} />
          )}
        </Modal>
      )}
    </div>
  );
};

export default App;
