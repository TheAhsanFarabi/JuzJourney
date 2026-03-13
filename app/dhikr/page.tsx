'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useUser } from '@/context/UserContext';
import { ArrowLeft, CheckCircle, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

const TASBIH_STAGES = [
  { 
    label: "SubhanAllah", 
    meaning: "Glory be to Allah", 
    target: 33, 
    hue: 150, saturation: 60, lightnessStart: 95, lightnessEnd: 85,
    buttonColor: "bg-emerald-500", 
    buttonShadow: "shadow-emerald-900",
    buttonBorder: "border-emerald-400",
    textColor: "text-emerald-600"
  },
  { 
    label: "Alhamdulillah", 
    meaning: "All praise is due to Allah", 
    target: 33, 
    hue: 210, saturation: 70, lightnessStart: 95, lightnessEnd: 85,
    buttonColor: "bg-blue-500", 
    buttonShadow: "shadow-blue-900",
    buttonBorder: "border-blue-400",
    textColor: "text-blue-600"
  },
  { 
    label: "Allahu Akbar", 
    meaning: "Allah is the Greatest", 
    target: 34, 
    hue: 270, saturation: 60, lightnessStart: 95, lightnessEnd: 85,
    buttonColor: "bg-purple-500", 
    buttonShadow: "shadow-purple-900",
    buttonBorder: "border-purple-400",
    textColor: "text-purple-600"
  }
];

export default function DhikrPage() {
  const router = useRouter();
  const { refillHearts } = useUser();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const [stageIndex, setStageIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  
  // Guard states for UI animation
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isCooldown, setIsCooldown] = useState(false);
  
  // THE FIX: An instant, synchronous lock to block multi-clicks
  const isCoolingDownRef = useRef(false); 
  const COOLDOWN_MS = 600; // Updated: 0.6 seconds to recharge

  // Initialize Audio
  useEffect(() => {
    audioRef.current = new Audio('/click.mp3'); 
    audioRef.current.volume = 0.6; 
  }, []);

  const playClickSound = () => {
    if (audioRef.current) {
        audioRef.current.currentTime = 0; 
        audioRef.current.play().catch(e => console.log("Audio play failed", e));
    }
  };

  const safeStageIndex = Math.min(stageIndex, TASBIH_STAGES.length - 1);
  const currentStage = TASBIH_STAGES[safeStageIndex];

  // Dynamic Background Calculation
  const progressPercent = count / currentStage.target;
  const currentLightness = currentStage.lightnessStart - (progressPercent * (currentStage.lightnessStart - currentStage.lightnessEnd));
  const dynamicBgColor = `hsl(${currentStage.hue}, ${currentStage.saturation}%, ${currentLightness}%)`;

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#10B981', '#3B82F6', '#8B5CF6', '#F59E0B']
    });
  };

  const handleTap = () => {
    // STRICT SYNC LOCK: Instantly block if ref is true, bypassing React's delay
    if (isCoolingDownRef.current || isTransitioning || isCompleted) return;

    // Instantly lock the button
    isCoolingDownRef.current = true;
    setIsCooldown(true); // Triggers visual UI change

    playClickSound();

    if (typeof navigator !== 'undefined' && navigator.vibrate) {
        navigator.vibrate(15);
    }

    const newCount = count + 1;

    if (newCount >= currentStage.target) {
      setCount(currentStage.target); 
      triggerConfetti();
      
      if (safeStageIndex < TASBIH_STAGES.length - 1) {
        setIsTransitioning(true); 
        setTimeout(() => {
             setCount(0);
             setStageIndex(prev => prev + 1);
             setIsTransitioning(false); 
             setIsCooldown(false); 
             isCoolingDownRef.current = false; // Unlock ref
        }, 800); 
      } else {
        handleAllComplete();
      }
    } else {
      setCount(newCount);
      // Unlock the button after the cooldown animation finishes
      setTimeout(() => {
          setIsCooldown(false);
          isCoolingDownRef.current = false; // Unlock ref
      }, COOLDOWN_MS);
    }
  };

  const handleAllComplete = () => {
    setIsCompleted(true);
    refillHearts();
    
    const end = Date.now() + 1000;
    const colors = ['#10B981', '#ffffff'];

    (function frame() {
      confetti({ particleCount: 2, angle: 60, spread: 55, origin: { x: 0 }, colors: colors });
      confetti({ particleCount: 2, angle: 120, spread: 55, origin: { x: 1 }, colors: colors });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());

    setTimeout(() => router.push('/dashboard'), 3500);
  };

  return (
    <div 
        className="min-h-screen flex flex-col items-center p-6 transition-colors duration-200 ease-linear"
        style={{ backgroundColor: dynamicBgColor }}
    >
      
      {/* Header */}
      <div className="w-full flex justify-between items-center mb-8 z-10">
        <button onClick={() => router.back()} className="p-3 bg-white/50 backdrop-blur rounded-full shadow-sm hover:bg-white transition-colors cursor-pointer">
          <ArrowLeft className="w-6 h-6 text-slate-700" />
        </button>
        <div className="flex items-center gap-2 bg-white/50 backdrop-blur px-4 py-2 rounded-full shadow-sm">
           <Heart className="w-5 h-5 text-rose-500 fill-rose-500 animate-pulse" />
           <span className="font-bold text-slate-600 text-sm">Refilling...</span>
        </div>
      </div>

      <AnimatePresence mode='wait'>
        {isCompleted ? (
            <motion.div 
                key="complete"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex-1 flex flex-col items-center justify-center text-center"
            >
                <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center mb-6 shadow-2xl animate-bounce">
                    <CheckCircle className="w-20 h-20 text-emerald-500" />
                </div>
                <h1 className="text-4xl font-black text-slate-800 mb-2">MashaAllah!</h1>
                <p className="text-slate-600 font-medium text-xl">Hearts Fully Refilled.</p>
            </motion.div>
        ) : (
            <motion.div 
                key="counting"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex-1 flex flex-col items-center w-full max-w-md"
            >
            
            <div className="text-center space-y-2 mb-10 z-10">
                <motion.h2 
                    key={currentStage.label}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className={`text-5xl font-black ${currentStage.textColor} drop-shadow-sm`}
                >
                    {currentStage.label}
                </motion.h2>
                <p className="text-slate-500 font-bold text-lg opacity-80">{currentStage.meaning}</p>
                
                <div className="flex justify-center gap-3 pt-6">
                    {TASBIH_STAGES.map((_, i) => (
                        <div key={i} className={`h-3 rounded-full transition-all duration-500 ${i === safeStageIndex ? `w-12 ${currentStage.buttonColor}` : 'w-3 bg-slate-300/50'}`} />
                    ))}
                </div>
            </div>

            <div className="flex-1 flex items-center justify-center w-full relative z-10">
                
                {/* Background breathing ring */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   <div 
                     className={`w-64 h-64 rounded-full border-[2px] ${currentStage.textColor} opacity-20`} 
                     style={{ transform: `scale(${1 + (count % 2 === 0 ? 0.05 : 0)})`, transition: 'transform 0.2s' }}
                   />
                </div>

                <motion.button
                    // Only allow physical push-down if NOT in cooldown
                    whileTap={!isCooldown && !isTransitioning ? { scale: 0.95, y: 10 } : {}}
                    onClick={handleTap}
                    className={`
                        relative w-72 h-72 rounded-full 
                        ${currentStage.buttonColor} 
                        
                        /* If cooling down, keep the button physically pressed down, dimmed, AND BLOCK THE CURSOR */
                        ${isCooldown || isTransitioning ? `border-b-[4px] translate-y-[12px] scale-[0.98] opacity-90 ${currentStage.buttonShadow} cursor-not-allowed` : `border-b-[16px] ${currentStage.buttonShadow} cursor-pointer`}
                        border-t-[4px] ${currentStage.buttonBorder}
                        
                        transition-all duration-150 ease-out
                        flex flex-col items-center justify-center
                        group outline-none select-none touch-manipulation
                        shadow-2xl overflow-hidden
                    `}
                >
                    <span className="text-9xl font-black text-white drop-shadow-md tabular-nums z-30 relative">
                        {count}
                    </span>
                    <span className="text-white/90 font-bold text-xl mt-2 tracking-widest opacity-80 z-30 relative">
                        / {currentStage.target}
                    </span>
                    
                    {/* Inner highlight */}
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-48 h-24 bg-gradient-to-b from-white/30 to-transparent rounded-full blur-md pointer-events-none z-10"></div>

                    {/* ANIMATION: Recharge Sweep Ring */}
                    {isCooldown && (
                        <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none z-20" viewBox="0 0 288 288">
                            <motion.circle
                                cx="144" cy="144" r="136"
                                stroke="rgba(255, 255, 255, 0.4)"
                                strokeWidth="16"
                                fill="none"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: COOLDOWN_MS / 1000, ease: "linear" }}
                            />
                        </svg>
                    )}

                    {/* Stage Transition Flash */}
                    <AnimatePresence>
                        {isTransitioning && (
                            <motion.div
                                initial={{ opacity: 0.5, scale: 1 }}
                                animate={{ opacity: 0, scale: 1.5 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="absolute inset-0 rounded-full bg-white pointer-events-none z-20"
                            />
                        )}
                    </AnimatePresence>

                </motion.button>
            </div>

            <p className={`font-bold uppercase tracking-[0.2em] text-sm mb-12 transition-all duration-300 ${isCooldown ? 'text-slate-400/50 scale-95' : 'text-slate-500/80 animate-pulse scale-100'}`}>
                {isCooldown ? 'Recharging...' : 'Tap to Count'}
            </p>

            </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}