import { useState } from "react";
import { Family } from "../types";

export type GamePhase =
  | "idle"
  | "card-reveal"
  | "question"
  | "correct"
  | "incorrect"
  | "bonus";

export const useGameFlow = () => {
  const [completedFamily, setCompletedFamily] = useState<Family | null>(null);
  const [phase, setPhase] = useState<GamePhase>("idle");
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const startFamily = (family: Family) => {
    setCompletedFamily(family);
    setIsFlipped(false);
    setSelectedAnswer(null);
    setPhase("card-reveal");
    setTimeout(() => setIsVisible(true), 50);
  };

  const flipCard = () => {
    if (!isFlipped) {
      setIsFlipped(true);
      setTimeout(() => setPhase("question"), 900);
    }
  };

  const answerQuestion = (index: number) => {
    if (selectedAnswer !== null || !completedFamily) return;
    setSelectedAnswer(index);
    const correct = index === completedFamily.question.correctAnswer;
    if (correct) {
      setPhase("correct");
      setTimeout(() => setPhase("bonus"), 1600);
    } else {
      setPhase("incorrect");
    }
  };

  const close = () => {
    setIsVisible(false);
    setTimeout(() => {
      setPhase("idle");
      setCompletedFamily(null);
      setIsFlipped(false);
      setSelectedAnswer(null);
    }, 400);
  };

  return {
    completedFamily,
    phase,
    isFlipped,
    selectedAnswer,
    isVisible,
    startFamily,
    flipCard,
    answerQuestion,
    close,
  };
};
