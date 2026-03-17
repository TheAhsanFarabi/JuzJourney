'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type UserState = {
  name: string;
  xp: number;
  streak: number;
  hearts: number;
  completedSurahs: string[];
  hasOnboarded: boolean;
  // NEW: Track the highest ayah index reached per surah
  surahProgress: { [surahId: string]: number }; 
};

type UserContextType = {
  user: UserState;
  updateName: (name: string) => void;
  completeSurah: (surahId: string) => void;
  addXp: (amount: number) => void;
  loseHeart: () => void;
  refillHearts: () => void;
  resetProgress: () => void;
  updateSurahProgress: (surahId: string, ayahIndex: number) => void; // NEW
};

const UserContext = createContext<UserContextType | undefined>(undefined);

const INITIAL_STATE: UserState = {
  name: '',
  xp: 0,
  streak: 1,
  hearts: 5,
  completedSurahs: [],
  hasOnboarded: false,
  surahProgress: {}, // Default empty object
};

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserState>(INITIAL_STATE);
  const [isLoaded, setIsLoaded] = useState(false);

  // 1. Load from LocalStorage
  useEffect(() => {
    const saved = localStorage.getItem('juz-journey-data');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // SAFETY MERGE: Ensure old saves don't break the app if they lack 'hearts' or 'surahProgress'
        setUser({
          ...INITIAL_STATE,
          ...parsed,
          hearts: parsed.hearts ?? INITIAL_STATE.hearts,
          surahProgress: parsed.surahProgress ?? INITIAL_STATE.surahProgress,
        }); 
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

  // NEW: Function to update how many ayahs the user has completed in a specific surah
  const updateSurahProgress = (surahId: string, ayahIndex: number) => {
    setUser((prev) => {
      const currentProgress = prev.surahProgress?.[surahId] || 0;
      // Only update if they reached a new high score for this surah
      if (ayahIndex > currentProgress) {
        return {
          ...prev,
          surahProgress: {
            ...prev.surahProgress,
            [surahId]: ayahIndex,
          },
        };
      }
      return prev;
    });
  };

  const addXp = (amount: number) => {
    setUser(prev => ({ ...prev, xp: prev.xp + amount }));
  };
  
  const loseHeart = () => {
    setUser(prev => ({ 
      ...prev, 
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
    <UserContext.Provider 
      value={{ 
        user, 
        updateName, 
        completeSurah, 
        addXp, 
        loseHeart, 
        refillHearts, 
        resetProgress, 
        updateSurahProgress // Provide the new function
      }}
    >
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