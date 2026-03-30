export type QuestionType = 'multiple_choice' | 'true_false' | 'open';

export interface Question {
  type: QuestionType;
  prompt: string;
  choices?: string[];
  correctAnswer?: number | string | boolean; // index for multiple_choice, boolean for true/false, string for open/exact match
}

export type BonusType = 'play_again' | 'draw_card' | 'ask_again' | 'peek' | 'shield' | 'steal';

export interface Bonus {
  type: BonusType;
  label: string;
  description?: string;
}

export interface Card {
  id: string;
  name: string;
  description?: string; // Optional description/content on the card itself
}

export interface Family {
  id: string;
  name: string;
  color: string;
  cards: Card[]; // The 6 members to collect
  question: Question; // The challenge unlocked when completing the family
  bonus: Bonus; // The reward for answering correctly
}
