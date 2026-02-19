'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type UserState = {
  name: string;
  xp: number;
  streak: number;
  hearts: number; // This was missing in your old local storage data
  completedSurahs: string[];
  hasOnboarded: boolean;
};

type UserContextType = {
  user: UserState;
  updateName: (name: string) => void;
  completeSurah: (surahId: string) => void;
  addXp: (amount: number) => void;
  loseHeart: () => void;
  refillHearts: () => void;
  resetProgress: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

const INITIAL_STATE: UserState = {
  name: '',
  xp: 0,
  streak: 1,
  hearts: 5, // Default value
  completedSurahs: [],
  hasOnboarded: false,
};

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserState>(INITIAL_STATE);
  const [isLoaded, setIsLoaded] = useState(false);

  // 1. Load from LocalStorage (FIXED)
  useEffect(() => {
    const saved = localStorage.getItem('juz-journey-data');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // SAFETY MERGE:
        // This ensures that if 'hearts' is missing in 'parsed', 
        // it grabs the default '5' from INITIAL_STATE.
        setUser({ ...INITIAL_STATE, ...parsed }); 
      } catch (e) {
        console.error("Failed to parse user data", e);
      }
    }
    setIsLoaded(true);
  }, []);

  // 2. Save to LocalStorage
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('juz-journey-data', JSON.stringify(user));
    }
  }, [user, isLoaded]);

  const updateName = (name: string) => {
    setUser(prev => ({ ...prev, name, hasOnboarded: true }));
  };

  const completeSurah = (surahId: string) => {
    if (!user.completedSurahs.includes(surahId)) {
      setUser(prev => ({
        ...prev,
        completedSurahs: [...prev.completedSurahs, surahId],
        xp: prev.xp + 100
      }));
    }
  };

  const addXp = (amount: number) => {
    setUser(prev => ({ ...prev, xp: prev.xp + amount }));
  };
  
  const loseHeart = () => {
    setUser(prev => ({ 
      ...prev, 
      // Safety check to ensure hearts is a number before subtracting
      hearts: Math.max(0, (prev.hearts || 5) - 1) 
    }));
  };

  const refillHearts = () => {
    setUser(prev => ({ ...prev, hearts: 5 }));
  };

  const resetProgress = () => {
    setUser(INITIAL_STATE);
    localStorage.removeItem('juz-journey-data');
  };

  if (!isLoaded) return null; 

  return (
    <UserContext.Provider value={{ user, updateName, completeSurah, addXp, loseHeart, refillHearts, resetProgress }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}