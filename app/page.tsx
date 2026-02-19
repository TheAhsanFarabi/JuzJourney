'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useUser } from '@/context/UserContext';
import { BookOpen, ArrowRight, Star, Quote } from 'lucide-react';

export default function Home() {
  const { user, updateName } = useUser();
  const router = useRouter();
  const [inputName, setInputName] = useState('');
  const [step, setStep] = useState<'input' | 'inspire'>('input');
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize Sound
  useEffect(() => {
    audioRef.current = new Audio('/click.mp3');
    audioRef.current.volume = 0.5;
  }, []);

  const playClick = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  };

  // Redirect if already onboarded
  useEffect(() => {
    if (user.hasOnboarded) {
      router.push('/dashboard');
    }
  }, [user.hasOnboarded, router]);

  // Handle auto-redirect on the Inspire screen
  useEffect(() => {
    if (step === 'inspire') {
      // Wait 5 seconds for the user to read the quote, then complete onboarding
      const timer = setTimeout(() => {
        handleComplete();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const handleNext = () => {
    if (inputName.trim()) {
      playClick();
      setStep('inspire');
    }
  };

  const handleComplete = () => {
    playClick();
    // Updating the name sets hasOnboarded to true, which will trigger the redirect
    updateName(inputName); 
  };

  // Avoid flicker if already logged in
  if (user.hasOnboarded) return null;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <motion.div 
           animate={{ rotate: 360, y: [0, 50, 0] }}
           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
           className="absolute -top-20 -left-20 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"
         />
         <motion.div 
           animate={{ rotate: -360, y: [0, -50, 0] }}
           transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
           className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-blue-200/20 rounded-full blur-3xl"
         />
      </div>

      <AnimatePresence mode='wait'>
        
        {/* --- STEP 1: INPUT NAME --- */}
        {step === 'input' && (
          <motion.div 
            key="input-step"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-md"
          >
            <div className="bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white/50 relative overflow-hidden">
               
               {/* Decorative floating icons */}
               <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute top-6 right-6 text-yellow-400">
                  <Star className="w-6 h-6 fill-current opacity-50" />
               </motion.div>

               <div className="flex flex-col items-center text-center">
                  <motion.div 
                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }}
                    className="w-24 h-24 bg-gradient-to-tr from-emerald-100 to-teal-50 rounded-3xl flex items-center justify-center mb-8 shadow-inner rotate-3"
                  >
                    <BookOpen className="w-12 h-12 text-emerald-600" />
                  </motion.div>

                  <motion.h2 
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                    className="text-3xl font-extrabold text-slate-800 mb-2 tracking-tight"
                  >
                    Salaam Alaikum!
                  </motion.h2>
                  
                  <motion.p 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
                    className="text-slate-500 mb-8 font-medium"
                  >
                    What should we call you?
                  </motion.p>
                  
                  <motion.div 
                    className="w-full space-y-4"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                  >
                    <div className="relative group">
                        <input 
                          type="text" 
                          placeholder="Your Name" 
                          value={inputName}
                          onChange={(e) => setInputName(e.target.value)}
                          className="w-full px-6 py-5 rounded-2xl bg-slate-50 border-2 border-slate-200 text-center text-xl font-bold text-slate-800 focus:border-emerald-500 focus:bg-white focus:outline-none transition-all placeholder:text-slate-300 shadow-inner group-hover:border-emerald-200"
                          onKeyDown={(e) => e.key === 'Enter' && handleNext()}
                          autoFocus
                        />
                    </div>
                    
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleNext}
                      disabled={!inputName.trim()}
                      className="w-full py-5 bg-emerald-500 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white rounded-2xl font-bold text-lg shadow-lg shadow-emerald-200 hover:shadow-emerald-300 transition-all flex items-center justify-center gap-2"
                    >
                      Continue <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </motion.div>
               </div>
            </div>
          </motion.div>
        )}

        {/* --- STEP 2: INSPIRING QUOTE & AUTO-REDIRECT --- */}
        {step === 'inspire' && (
          <motion.div 
            key="inspire-step"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-lg"
          >
             <div className="bg-emerald-600 text-white p-10 md:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden text-center flex flex-col items-center">
                
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                
                <motion.div 
                   initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, damping: 15 }}
                   className="relative w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-8 shadow-inner"
                >
                   <Quote className="w-10 h-10 text-emerald-100 fill-emerald-100" />
                </motion.div>

                <motion.h1 
                  initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
                  className="relative text-2xl font-medium text-emerald-100 mb-6"
                >
                  Welcome, <span className="font-bold text-white">{inputName}</span>.
                </motion.h1>

                <motion.div 
                  initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}
                  className="relative space-y-4 mb-12"
                >
                  <p className="text-3xl md:text-4xl font-serif font-bold leading-tight">
                    "The best among you are those who learn the Quran and teach it."
                  </p>
                  <p className="text-emerald-200 font-medium tracking-wide uppercase text-sm">
                    — Prophet Muhammad (ﷺ)
                  </p>
                </motion.div>

                {/* Loading Bar for Auto-Redirect */}
                <div className="w-full max-w-xs relative z-10">
                   <p className="text-emerald-100 text-xs font-bold uppercase tracking-widest mb-3 animate-pulse">
                     Preparing your journey...
                   </p>
                   <div className="h-1.5 w-full bg-emerald-800/50 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 5, ease: "linear" }}
                        className="h-full bg-white rounded-full"
                      />
                   </div>
                </div>
                
             </div>
          </motion.div>
        )}

      </AnimatePresence>
      
      {/* Footer Text */}
      <motion.p 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
        className="absolute bottom-6 text-slate-400 text-xs font-semibold uppercase tracking-widest"
      >
        JuzJourney • v1.0
      </motion.p>
    </div>
  );
}