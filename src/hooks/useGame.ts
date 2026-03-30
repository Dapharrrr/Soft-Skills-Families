import { useState, useCallback } from 'react';
import { families } from '../data';
import { Card, Family } from '../types';

export type PlayerId = 'player' | 'cpu';

export interface Player {
  id: PlayerId;
  name: string;
  hand: Card[];
  completedFamilies: string[]; // Family IDs
}

const INITIAL_HAND_SIZE = 6;

export const useGame = () => {
  const [deck, setDeck] = useState<Card[]>([]);
  // Use state updater pattern to avoid stale closures
  const [players, setPlayers] = useState<Record<PlayerId, Player>>({
    player: { id: 'player', name: 'You', hand: [], completedFamilies: [] },
    cpu: { id: 'cpu', name: 'Computer', hand: [], completedFamilies: [] },
  });
  const [currentTurn, setCurrentTurn] = useState<PlayerId>('player');
  const [gameStatus, setGameStatus] = useState<'playing' | 'family_completed' | 'game_over'>('playing');
  const [completedFamily, setCompletedFamily] = useState<Family | null>(null);

  // Initialize game
  const startGame = useCallback(() => {
    // Flatten all cards from families
    const allCards: Card[] = [];
    families.forEach(f => {
      f.cards.forEach(c => allCards.push(c));
    });
    
    // Shuffle
    const shuffled = [...allCards].sort(() => Math.random() - 0.5);
    
    // Deal 6 cards to each player
    const playerHand = shuffled.slice(0, INITIAL_HAND_SIZE);
    const cpuHand = shuffled.slice(INITIAL_HAND_SIZE, INITIAL_HAND_SIZE * 2);
    const remainingDeck = shuffled.slice(INITIAL_HAND_SIZE * 2);
    
    setPlayers({
      player: { id: 'player', name: 'You', hand: playerHand, completedFamilies: [] },
      cpu: { id: 'cpu', name: 'Computer', hand: cpuHand, completedFamilies: [] },
    });
    setDeck(remainingDeck);
    setCurrentTurn('player');
    setGameStatus('playing');
    setCompletedFamily(null);
  }, []);

  // Handle family completion
  const handleCompleteFamily = useCallback((family: Family, playerId: PlayerId) => {
    setCompletedFamily(family);
    setGameStatus('family_completed');
    
    setPlayers(prev => {
      const player = prev[playerId];
      // Remove family cards from hand
      const familyCardIds = new Set(family.cards.map(c => c.id));
      const newHand = player.hand.filter(c => !familyCardIds.has(c.id));
      
      return {
        ...prev,
        [playerId]: {
          ...player,
          hand: newHand,
          completedFamilies: [...player.completedFamilies, family.id]
        }
      };
    });
  }, []);

  return {
    deck,
    players,
    currentTurn,
    gameStatus,
    completedFamily,
    startGame,
    handleCompleteFamily,
    setGameStatus,
    setCompletedFamily
  };
};
