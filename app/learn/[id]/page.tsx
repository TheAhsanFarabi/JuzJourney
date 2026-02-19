'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useUser } from '@/context/UserContext';
import { SURAHS, Level, Word, Surah } from '@/lib/data';
import { 
  ArrowRight, X, Heart, Users, Sun, Star, 
  Volume2, PauseCircle, Check, Target, Zap, Award, Flame, Shield,
  Mic, Square, Loader2, Lock
} from 'lucide-react';
import clsx from 'clsx';

// --- CONSTANTS & UTILS ---

const IconMap: Record<string, any> = {
  Users: Users,
  Sun: Sun,
  Star: Star,
  Flame: Flame,
  Zap: Zap,
  Shield: Shield
};

// Distinct colors for words
const WORD_PALETTE = [
  { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-800', badge: 'bg-emerald-100 text-emerald-700' },
  { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-800', badge: 'bg-blue-100 text-blue-700' },
  { bg: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-800', badge: 'bg-violet-100 text-violet-700' },
  { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-800', badge: 'bg-orange-100 text-orange-700' },
  { bg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-800', badge: 'bg-rose-100 text-rose-700' },
  { bg: 'bg-cyan-50', border: 'border-cyan-200', text: 'text-cyan-800', badge: 'bg-cyan-100 text-cyan-700' },
];

const getColor = (index: number) => WORD_PALETTE[index % WORD_PALETTE.length];

// --- COMPONENTS ---

// 1. STORY SCREEN
const StoryIntro = ({ surah, onStart }: { surah: Surah, onStart: () => void }) => {
  const Icon = IconMap[surah.iconName];
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 bg-slate-900/90 backdrop-blur-md flex items-center justify-center p-4 md:p-6"
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="bg-white rounded-[2rem] max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col md:flex-row"
      >
        {/* Visual Side */}
        <div className={`py-12 md:h-auto md:w-1/2 bg-gradient-to-br ${surah.themeGradient} flex flex-col items-center justify-center relative px-6 md:px-10 text-center shrink-0`}>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30"></div>
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="w-24 h-24 md:w-32 md:h-32 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-4 border-white/30 mb-4 md:mb-6 shadow-lg"
          >
            <Icon className="w-12 h-12 md:w-16 md:h-16 text-white" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-md">{surah.title}</h2>
          <p className="text-white/90 font-medium text-base md:text-lg tracking-wide uppercase">{surah.meaning}</p>
        </div>
        
        {/* Content Side */}
        <div className="p-6 md:p-10 md:w-1/2 flex flex-col justify-center bg-slate-50">
          <div className="mb-8">
            <h3 className="font-bold text-slate-400 uppercase tracking-widest text-xs mb-3 md:mb-4">The Context</h3>
            <p className="text-slate-700 leading-relaxed text-base md:text-lg font-medium">{surah.story}</p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onStart}
            className="w-full py-4 md:py-5 bg-emerald-600 text-white rounded-2xl font-bold text-lg shadow-lg shadow-emerald-200 hover:shadow-xl hover:bg-emerald-700 transition-all flex items-center justify-center gap-3"
          >
            Start Lesson <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

// 1.5 RECITATION TESTER
const RecitationTester = ({ correctAyah, onScore }: { correctAyah: string, onScore: (score: number) => void }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    setScore(null);
  }, [correctAyah]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = processAudio;
      mediaRecorder.start();
      setIsRecording(true);
      setScore(null);
    } catch (err) {
      alert("Microphone access denied! Please allow microphone permissions.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      setIsAnalyzing(true);
      mediaRecorderRef.current.stream.getTracks().forEach(t => t.stop()); 
    }
  };

  const processAudio = async () => {
    const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
    const formData = new FormData();
    formData.append('audio', audioBlob, 'recitation.webm');
    formData.append('correctAyah', correctAyah);

    try {
      const res = await fetch('/api/score', { method: 'POST', body: formData });
      const data = await res.json();
      
      setScore(data.score);
      onScore(data.score); 
    } catch (error) {
      console.error("Failed to analyze audio", error);
      alert("Failed to analyze recitation. Please try again.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="flex flex-col items-center mt-6 md:mt-10 w-full px-4 md:px-0">
      <div className="flex flex-col items-center p-5 md:p-6 bg-white/60 backdrop-blur rounded-3xl border-2 border-emerald-100 shadow-sm w-full max-w-sm">
        <h3 className="font-bold text-slate-500 mb-4 text-xs md:text-sm uppercase tracking-widest text-center">Test Your Recitation</h3>
        
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={isRecording ? stopRecording : startRecording}
          disabled={isAnalyzing}
          className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-lg transition-colors ${
            isRecording 
              ? 'bg-rose-500 text-white animate-pulse shadow-rose-200' 
              : 'bg-emerald-500 text-white shadow-emerald-200 hover:bg-emerald-600'
          } ${isAnalyzing ? 'bg-slate-400 cursor-not-allowed' : ''}`}
        >
          {isAnalyzing ? (
            <Loader2 className="w-6 h-6 md:w-8 md:h-8 animate-spin" />
          ) : isRecording ? (
            <Square className="w-6 h-6 md:w-8 md:h-8 fill-current" />
          ) : (
            <Mic className="w-6 h-6 md:w-8 md:h-8" />
          )}
        </motion.button>

        <p className="text-slate-500 text-xs md:text-sm mt-3 md:mt-4 font-medium text-center">
          {isAnalyzing ? "Analyzing pronunciation..." : isRecording ? "Tap to stop recording" : "Tap to record"}
        </p>

        <AnimatePresence>
          {score !== null && (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0, height: 0 }} 
              animate={{ scale: 1, opacity: 1, height: 'auto' }}
              className="mt-4 md:mt-6 text-center w-full border-t border-slate-200 pt-4"
            >
              <div className={`text-4xl md:text-5xl font-black ${score >= 80 ? 'text-emerald-500' : score > 50 ? 'text-orange-500' : 'text-rose-500'}`}>
                {score}%
              </div>
              <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] md:text-xs mt-1">Accuracy</p>
              {score < 80 && (
                <p className="text-rose-500 text-[10px] md:text-xs font-bold mt-2 bg-rose-50 px-3 py-1 rounded-full inline-block">
                  Need 80%+ to unlock Quiz
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};


// 2. LEARNING VIEW (SPLIT SCREEN)
const LearningView = ({ level, onReady }: { level: Level, onReady: () => void }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bestScore, setBestScore] = useState<number | null>(null); 
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setBestScore(null);
    playAudio();
    return () => stopAudio();
  }, [level]);

  const playAudio = () => {
    if (audioRef.current) { audioRef.current.pause(); audioRef.current.currentTime = 0; }
    const audio = new Audio(level.audio);
    audioRef.current = audio;
    audio.play().catch(e => console.log("Audio play failed", e));
    setIsPlaying(true);
    audio.onended = () => setIsPlaying(false);
  };

  const stopAudio = () => {
    if (audioRef.current) { audioRef.current.pause(); setIsPlaying(false); }
  };

  const handleScoreUpdate = (score: number) => {
    setBestScore(prev => (prev === null ? score : Math.max(prev, score)));
  };

  const isQuizUnlocked = bestScore !== null && bestScore >= 80;

  return (
    <div className="flex flex-col lg:flex-row h-full w-full overflow-y-auto lg:overflow-hidden relative">
      
      {/* LEFT COLUMN: THE VERSE */}
      <div className="w-full lg:w-1/2 bg-slate-50 flex flex-col items-center justify-center p-6 py-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-200 shrink-0 lg:h-full lg:overflow-y-auto">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
         
         <div className="text-center w-full max-w-lg z-10 flex flex-col items-center">
            <span className="inline-block bg-white border border-slate-200 text-emerald-700 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider mb-6 md:mb-8 shadow-sm">
                Memorize
            </span>

            <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={isPlaying ? stopAudio : playAudio}
                className={`mx-auto w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center mb-6 md:mb-8 transition-all duration-300 ${isPlaying ? 'bg-emerald-500 text-white shadow-xl shadow-emerald-200 ring-4 ring-emerald-100' : 'bg-white text-slate-400 hover:bg-emerald-50 hover:text-emerald-500 shadow-sm border border-slate-200'}`}
            >
                {isPlaying ? <PauseCircle className="w-8 h-8 md:w-12 md:h-12" /> : <Volume2 className="w-8 h-8 md:w-12 md:h-12" />}
            </motion.button>

            <motion.h2 
                key={level.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 font-serif mb-6 md:mb-8 leading-relaxed dir-rtl text-center px-4" 
                style={{ fontFamily: "'Traditional Arabic', serif", lineHeight: 1.6 }}
                dir="rtl"
            >
                {level.arabicFull}
            </motion.h2>
            
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl lg:text-2xl text-slate-500 font-medium leading-relaxed mb-4 md:mb-6 px-4"
            >
                {level.translation}
            </motion.p>

            <RecitationTester correctAyah={level.arabicFull} onScore={handleScoreUpdate} />
         </div>
      </div>

      {/* RIGHT COLUMN: WORD ANALYSIS */}
      <div className="w-full lg:w-1/2 bg-white flex flex-col relative lg:h-full">
         <div className="flex-1 lg:overflow-y-auto p-4 md:p-6 lg:p-12 pb-32 lg:pb-48 flex flex-col">
            <div className="max-w-xl mx-auto space-y-3 md:space-y-4 w-full">
                <div className="flex items-center justify-between mb-4 md:mb-6">
                    <h3 className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-wider">Word Analysis</h3>
                    <div className="h-px bg-slate-100 flex-1 ml-4"></div>
                </div>

                {level.words.map((word, idx) => {
                    const colors = getColor(idx);
                    return (
                    <motion.div 
                        key={idx} 
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ scale: 1.02, x: -5 }}
                        className={`flex items-center p-4 md:p-5 rounded-[1.5rem] md:rounded-3xl border-2 ${colors.bg} ${colors.border} transition-colors cursor-default group`}
                    >
                        <div className={`w-10 h-10 md:w-12 h-12 shrink-0 rounded-xl md:rounded-2xl flex items-center justify-center font-bold text-xs md:text-sm mr-4 md:mr-6 shadow-sm ${colors.badge}`}>
                            {idx + 1}
                        </div>
                        
                        <div className={`flex-1 text-right border-r pr-4 md:pr-6 ${colors.border}`}>
                            <p className={`font-bold text-2xl md:text-3xl font-serif mb-1 ${colors.text}`}>{word.arabic}</p>
                            <p className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wider opacity-70 group-hover:opacity-100 transition-opacity">{word.transliteration}</p>
                        </div>
                        
                        <div className="flex-1 pl-4 md:pl-6 text-left">
                            <p className="font-bold text-slate-700 text-sm md:text-xl leading-tight">{word.meaning}</p>
                        </div>
                    </motion.div>
                    );
                })}
            </div>
         </div>

         {/* Sticky Footer */}
         <div className="sticky bottom-0 lg:absolute left-0 right-0 p-4 md:p-6 lg:p-8 bg-white/95 backdrop-blur border-t border-slate-100 z-20 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] lg:shadow-none mt-auto">
            <motion.button 
                whileHover={isQuizUnlocked ? { scale: 1.02 } : {}}
                whileTap={isQuizUnlocked ? { scale: 0.98 } : {}}
                onClick={() => { if(isQuizUnlocked) { stopAudio(); onReady(); } }}
                disabled={!isQuizUnlocked}
                className={clsx(
                  "w-full max-w-md mx-auto py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-base md:text-xl transition-all flex items-center justify-center gap-2 md:gap-3 uppercase tracking-wide",
                  isQuizUnlocked 
                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-200 hover:shadow-emerald-300"
                    : "bg-slate-100 text-slate-400 border-2 border-slate-200 cursor-not-allowed"
                )}
            >
                {isQuizUnlocked ? (
                  <><span>Start Quiz</span> <ArrowRight className="w-5 h-5 md:w-6 md:h-6" /></>
                ) : (
                  <>
                    <Lock className="w-4 h-4 md:w-5 md:h-5 text-slate-300" />
                    <span className="text-xs md:text-sm">Score 80%+ to Unlock</span>
                  </>
                )}
            </motion.button>
         </div>
      </div>

    </div>
  );
};

// 3. QUIZ VIEW (Centered)
const QuizView = ({ level, onNext, onMistake }: { level: Level, onNext: () => void, onMistake: () => void }) => {
    type QuizWord = Word & { uniqueId: number; used: boolean; colorIdx: number };

    const [selectedWords, setSelectedWords] = useState<QuizWord[]>([]);
    const [availableWords, setAvailableWords] = useState<QuizWord[]>([]);
    const [status, setStatus] = useState<'playing' | 'success' | 'error'>('playing'); 
    const audioRef = useRef<HTMLAudioElement | null>(null);
  
    useEffect(() => {
      const correctWordsWithColors = level.words.map((w, idx) => ({ 
          ...w, type: 'correct', colorIdx: idx 
      }));

      const distractorsWithColors = (level.distractors || []).map((w, idx) => ({ 
          ...w, meaning: '', type: 'distractor', colorIdx: (level.words.length + idx) 
      }));

      const allWords = [...correctWordsWithColors, ...distractorsWithColors];
      
      for (let i = allWords.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allWords[i], allWords[j]] = [allWords[j], allWords[i]];
      }
      
      setAvailableWords(allWords.map((w, i) => ({ ...w, uniqueId: i, used: false })));
      setSelectedWords([]);
      setStatus('playing');
    }, [level]);

    const playHintAudio = () => {
        if (audioRef.current) { audioRef.current.pause(); audioRef.current.currentTime = 0; }
        const audio = new Audio(level.audio);
        audioRef.current = audio;
        audio.play();
    };
  
    const handleWordClick = (word: QuizWord) => {
      if (status !== 'playing') return;
      setSelectedWords([...selectedWords, word]);
      setAvailableWords(prev => prev.map(w => w.uniqueId === word.uniqueId ? { ...w, used: true } : w));
    };
  
    const handleRemoveWord = (word: QuizWord) => {
      if (status !== 'playing') return;
      setSelectedWords(prev => prev.filter(w => w.uniqueId !== word.uniqueId));
      setAvailableWords(prev => prev.map(w => w.uniqueId === word.uniqueId ? { ...w, used: false } : w));
    };
  
    const checkAnswer = () => {
      const currentCorrect = level.words.map(w => w.arabic).join('');
      const userAttempt = selectedWords.map(w => w.arabic).join('');
  
      if (currentCorrect === userAttempt) {
        setStatus('success');
        playHintAudio();
      } else {
        setStatus('error');
        onMistake();
      }
    };
  
    return (
      <div className="flex flex-col h-full w-full bg-slate-50/50 relative">
        <div className="flex-1 overflow-y-auto p-4 md:p-10 pb-56 md:pb-64 scroll-smooth">
          <div className="max-w-4xl mx-auto w-full">
            <div className="flex items-center justify-between mb-6 md:mb-8">
                <div>
                    <h2 className="text-xl md:text-3xl font-bold text-slate-800">Construct the Ayah</h2>
                    <p className="text-slate-400 text-xs md:text-sm font-medium mt-1">Tap words in correct order</p>
                </div>
                <motion.button 
                  whileTap={{ scale: 0.9 }}
                  onClick={playHintAudio} 
                  className="w-10 h-10 md:w-14 md:h-14 bg-white border border-slate-200 rounded-full flex items-center justify-center text-emerald-600 shadow-sm hover:shadow-md transition-all shrink-0 ml-4"
                >
                  <Volume2 className="w-5 h-5 md:w-6 md:h-6" />
                </motion.button>
            </div>
            
            {/* FIXED: Added dir="rtl" so the Arabic words flow Right-to-Left natively */}
            <div 
              dir="rtl" 
              className={`min-h-[140px] md:min-h-[180px] border-2 md:border-4 border-dashed rounded-2xl md:rounded-[2.5rem] p-4 md:p-8 mb-6 md:mb-10 flex flex-wrap gap-2 md:gap-4 items-center justify-center transition-colors duration-300 ${status === 'error' ? 'bg-red-50 border-red-200' : 'bg-white border-slate-200'}`}
            >
                <AnimatePresence>
                    {selectedWords.length === 0 && (
                    <motion.span 
                        dir="ltr" // Kept LTR so English placeholder displays properly
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="text-slate-400 font-medium flex items-center gap-2 text-sm md:text-lg text-center"
                    >
                        <Target className="w-5 h-5 md:w-6 md:h-6 shrink-0" /> Tap words below to build
                    </motion.span>
                    )}
                    {selectedWords.map((word) => {
                        const colors = getColor(word.colorIdx || 0);
                        return (
                            <motion.button
                                layoutId={`word-${word.uniqueId}`}
                                key={word.uniqueId}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                onClick={() => handleRemoveWord(word)}
                                className={`px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl shadow-sm border-b-[3px] md:border-b-4 transition-all flex items-center gap-2 ${colors.bg} ${colors.border} ${colors.text}`}
                            >
                                <span className="font-serif text-2xl md:text-3xl font-bold pb-1">{word.arabic}</span>
                            </motion.button>
                        );
                    })}
                </AnimatePresence>
            </div>
            
            {/* Word Bank */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {availableWords.map((word) => {
                const colors = getColor(word.colorIdx);
                return (
                    <div key={word.uniqueId} className="relative h-24 md:h-32">
                        <AnimatePresence>
                            {!word.used && (
                                <motion.button
                                    layoutId={`word-${word.uniqueId}`}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.5 }}
                                    onClick={() => handleWordClick(word)}
                                    whileTap={{ scale: 0.95 }}
                                    className={`absolute inset-0 w-full h-full border-2 border-b-[3px] md:border-b-4 rounded-xl md:rounded-3xl shadow-sm flex flex-col items-center justify-center ${colors.bg} ${colors.border} ${colors.text} p-2`}
                                >
                                <span className="font-serif text-2xl md:text-4xl font-bold mb-1 md:mb-2 text-center">{word.arabic}</span>
                                <span className={`text-[8px] md:text-[10px] font-bold px-2 py-1 md:px-3 rounded-full ${colors.badge} truncate max-w-full`}>{word.transliteration}</span>
                                </motion.button>
                            )}
                        </AnimatePresence>
                    </div>
                );
                })}
            </div>
          </div>
        </div>
        
        {/* Fixed Footer for Quiz */}
        <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            className={clsx(
            "absolute bottom-0 left-0 right-0 p-4 md:p-6 border-t-2 z-20 transition-colors duration-300",
            status === 'success' ? 'bg-emerald-100 border-emerald-200' : 
            status === 'error' ? 'bg-red-100 border-red-200' : 'bg-white border-slate-200'
            )}
        >
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="w-full sm:flex-1 flex justify-center sm:justify-start">
               <AnimatePresence mode='wait'>
                    {status === 'success' && (
                        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="flex items-center gap-3 md:gap-4">
                            <div className="w-10 h-10 md:w-14 md:h-14 shrink-0 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-emerald-200"><Check className="w-5 h-5 md:w-8 md:h-8" /></div>
                            <div>
                                <h3 className="text-emerald-800 font-bold text-lg md:text-xl">Excellent!</h3>
                                <p className="text-emerald-600 font-medium text-xs md:text-sm line-clamp-2">{level.lesson}</p>
                            </div>
                        </motion.div>
                    )}
                    {status === 'error' && (
                        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="flex items-center gap-3 md:gap-4">
                            <div className="w-10 h-10 md:w-14 md:h-14 shrink-0 bg-red-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-red-200"><X className="w-5 h-5 md:w-8 md:h-8" /></div>
                            <div>
                                <h3 className="text-red-800 font-bold text-lg md:text-xl">Incorrect</h3>
                                <p className="text-red-600 font-medium text-xs md:text-sm">Check the order and try again.</p>
                            </div>
                        </motion.div>
                    )}
               </AnimatePresence>
            </div>
            <div className="w-full sm:w-40 shrink-0">
               {status === 'playing' ? (
                  <motion.button 
                    whileTap={{ scale: 0.95 }}
                    onClick={checkAnswer}
                    disabled={selectedWords.length === 0}
                    className="w-full py-3 md:py-4 bg-slate-800 disabled:bg-slate-300 text-white rounded-xl md:rounded-2xl font-bold shadow-lg active:translate-y-1 transition-all uppercase tracking-wider text-sm md:text-lg"
                  >
                    Check
                  </motion.button>
               ) : status === 'success' ? (
                  <motion.button 
                    whileTap={{ scale: 0.95 }}
                    onClick={onNext}
                    className="w-full py-3 md:py-4 bg-emerald-600 text-white rounded-xl md:rounded-2xl font-bold shadow-lg active:translate-y-1 transition-all uppercase tracking-wider text-sm md:text-lg"
                  >
                    Continue
                  </motion.button>
               ) : (
                  <motion.button 
                    whileTap={{ scale: 0.95 }}
                    onClick={() => { setStatus('playing'); setSelectedWords([]); setAvailableWords(prev => prev.map(w => ({ ...w, used: false }))); }}
                    className="w-full py-3 md:py-4 bg-red-500 text-white rounded-xl md:rounded-2xl font-bold shadow-lg active:translate-y-1 transition-all uppercase tracking-wider text-sm md:text-lg"
                  >
                    Retry
                  </motion.button>
               )}
            </div>
          </div>
        </motion.div>
      </div>
    );
  };

// --- MAIN PAGE COMPONENT ---

export default function LearnPage() {
  const params = useParams();
  const router = useRouter();
  const { user, completeSurah, loseHeart } = useUser();
  
  const surahId = params.id as string;
  const surah = SURAHS.find(s => s.id === surahId);

  const [hasStarted, setHasStarted] = useState(false);
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [mode, setMode] = useState<'learn' | 'quiz'>('learn');
  const [isCompleted, setIsCompleted] = useState(false);

  if (!surah) {
     if(typeof window !== 'undefined') router.push('/dashboard');
     return null;
  }

  const currentLevel = surah.levels[currentLevelIndex];
  const progress = ((currentLevelIndex) / surah.levels.length) * 100;

  const handleNext = () => {
    if (currentLevelIndex < surah.levels.length - 1) {
      setCurrentLevelIndex(prev => prev + 1);
      setMode('learn');
    } else {
      completeSurah(surah.id);
      setIsCompleted(true);
      setTimeout(() => router.push('/dashboard'), 3000);
    }
  };

  const handleMistake = () => {
    loseHeart(); 
  };

  if (user.hearts === 0) {
    return (
      <div className="fixed inset-0 z-[60] bg-slate-900/95 backdrop-blur flex flex-col items-center justify-center p-6 text-center animate-in zoom-in duration-300">
        <motion.div 
            initial={{ scale: 0 }} animate={{ scale: 1 }} 
            className="w-24 h-24 md:w-32 md:h-32 bg-slate-800 rounded-full flex items-center justify-center mb-6 md:mb-8 border-4 border-slate-700"
        >
            <Heart className="w-12 h-12 md:w-16 md:h-16 text-slate-500" fill="none" strokeWidth={1.5} />
        </motion.div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">Out of Hearts</h2>
        <p className="text-slate-400 text-lg md:text-xl mb-8 md:mb-12 max-w-md leading-relaxed px-4">
          Your spiritual energy is low. Perform Dhikr to restore your hearts and continue learning.
        </p>
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push('/dhikr')} 
          className="w-full max-w-xs py-4 md:py-5 bg-emerald-500 hover:bg-emerald-400 text-white rounded-xl md:rounded-2xl font-bold text-lg md:text-xl transition-all shadow-lg hover:shadow-emerald-500/50 flex items-center justify-center gap-3"
        >
          <span>Refill Hearts</span> <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
        </motion.button>

        <button 
          onClick={() => router.push('/dashboard')}
          className="mt-6 md:mt-8 text-slate-500 hover:text-white transition-colors text-xs md:text-sm font-bold uppercase tracking-widest"
        >
          Quit to Dashboard
        </button>
      </div>
    );
  }

  if (isCompleted) {
      return (
        <div className="fixed inset-0 z-[60] bg-emerald-500 flex flex-col items-center justify-center text-white p-6 text-center animate-in zoom-in duration-500">
           <motion.div 
             animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 2 }}
             className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center mb-6 md:mb-8 shadow-2xl"
           >
              <Award className="w-16 h-16 md:w-20 md:h-20 text-emerald-600" />
           </motion.div>
           <h2 className="text-4xl md:text-5xl font-bold mb-3 md:mb-4">MashaAllah!</h2>
           <p className="text-emerald-100 text-lg md:text-2xl mb-6 md:mb-8">Surah {surah.title} Completed.</p>
           <div className="flex items-center gap-2 md:gap-3 bg-emerald-600 px-6 py-3 md:px-8 md:py-4 rounded-full shadow-lg border border-emerald-400/30">
              <Zap className="w-6 h-6 md:w-8 md:h-8 text-yellow-300 fill-current" />
              <span className="font-bold text-xl md:text-2xl">+100 XP</span>
           </div>
        </div>
      );
  }

  if (!hasStarted) {
    return <StoryIntro surah={surah} onStart={() => setHasStarted(true)} />;
  }

  return (
    <div className="fixed inset-0 z-50 bg-slate-50 flex items-center justify-center">
      <div className="w-full h-full flex flex-col relative bg-white">
         
         {/* Top Navbar */}
         <div className="w-full px-4 py-3 md:px-6 md:py-4 flex items-center justify-between border-b border-slate-100 bg-white z-30 shadow-sm shrink-0">
            <button onClick={() => router.push('/dashboard')} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
               <X className="w-5 h-5 md:w-6 md:h-6 text-slate-400" />
            </button>
            
            <div className="flex-1 max-w-md mx-4 md:mx-6 h-2 md:h-3 bg-slate-100 rounded-full overflow-hidden">
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: `${progress}%` }}
                 transition={{ duration: 0.5 }}
                 className="h-full bg-emerald-500 rounded-full"
               ></motion.div>
            </div>

            <div className="flex items-center text-rose-500 font-bold text-sm md:text-lg gap-1.5 md:gap-2 bg-rose-50 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full shrink-0">
               <Heart className="w-4 h-4 md:w-5 md:h-5 fill-current animate-pulse" /> 
               <span>{user.hearts}</span>
            </div>
         </div>

         {/* Main Content Area */}
         <div className="flex-1 relative overflow-hidden bg-white w-full h-full">
            <AnimatePresence mode='wait'>
                {mode === 'learn' ? (
                    <motion.div key="learn" className="h-full w-full absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <LearningView level={currentLevel} onReady={() => setMode('quiz')} />
                    </motion.div>
                ) : (
                    <motion.div key="quiz" className="h-full w-full absolute inset-0" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }}>
                        <QuizView level={currentLevel} onNext={handleNext} onMistake={handleMistake} />
                    </motion.div>
                )}
            </AnimatePresence>
         </div>
      </div>
    </div>
  );
}