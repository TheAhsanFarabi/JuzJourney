'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/UserContext';
import { SURAHS } from '@/lib/data';
import { DownloadCertificate } from '@/app/components/Certificate';
import { 
  Users, Sun, Star, Lock, Check, Award, 
  Zap, Flame, Shield, Home, Laptop, X, Heart, 
  BookOpen, Sparkles, Moon, Cloud, Book, Feather, Mountain
} from 'lucide-react';
import clsx from 'clsx';
import { ThemeToggle } from '../components/ThemeToggle';

const IconMap: Record<string, any> = {
  Users: Users,
  Sun: Sun,
  Star: Star,
  Flame: Flame,
  Zap: Zap,
  Shield: Shield,
  Moon: Moon,
  Cloud: Cloud,
  Book: Book,
  Heart: Heart,
  Feather: Feather,
  Mountain: Mountain
};

export default function Dashboard() {
  const { user } = useUser();
  const router = useRouter();
  const [showCertificateModal, setShowCertificateModal] = useState(false);

  // --- INSPIRING QUOTES LOGIC ---
  const quotes = [
    "Every letter you recite brings a reward.",
    "The Quran is a light for your heart.",
    "Small, consistent steps build a heavy scale.",
    "Your journey to Allah begins with His words.",
    "Illuminate your path with the final Juz.",
    "Seek knowledge, from the cradle to the grave."
  ];
  
  const [quote, setQuote] = useState("Continue your journey through Juz 30.");

  // Pick a random quote only on the client side to avoid hydration mismatches
  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);

  // Safety check
  if (!user.hasOnboarded) {
    if (typeof window !== 'undefined') router.push('/');
    return null;
  }

  // --- STATS LOGIC ---
  const isCompleted = (id: string) => user.completedSurahs.includes(id);
  const completedCount = user.completedSurahs.length;
  const totalCount = SURAHS.length;
  const allCompleted = completedCount === totalCount;
  const remaining = totalCount - completedCount;

  // --- MAP CONFIGURATION (Zigzag layout) ---
  const leftX = 22;   // left column X (%)
  const rightX = 78;  // right column X (%)
  const topY = 4;     // top Y (%)
  const bottomY = 88; // bottom Y (%) - leave space for trophy
  const total = totalCount;
  const gap = (bottomY - topY) / Math.max(1, total - 1);

  const positions = Array.from({ length: total }, (_, i) => {
    const y = topY + i * gap;
    const x = i % 2 === 0 ? leftX : rightX;
    return { x, y };
  });

  const trophyPos = { x: 50, y: 96 }; 

  // --- DYNAMIC PATH GENERATOR ---
  const pathData = useMemo(() => {
    const pts = [...positions, trophyPos];
    if (pts.length < 2) return "";
    let d = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const current = pts[i];
      const next = pts[i + 1];
      const midY = (current.y + next.y) / 2;
      d += ` C ${current.x} ${midY}, ${next.x} ${midY}, ${next.x} ${next.y}`;
    }
    return d;
  }, [positions, trophyPos]);

  // --- REUSABLE SIDEBAR CONTENT (Shown on Right for Desktop, Bottom for Mobile) ---
  const renderSidebarContent = () => (
    <div className="space-y-6">
       
       {/* Stats Cards */}
       <div className="flex gap-4">
          <div className="flex-1 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-2xl p-4 flex flex-col items-center shadow-sm transition-colors">
              <Flame className="w-8 h-8 text-orange-500 mb-2 fill-orange-100 dark:fill-orange-900" />
              <span className="text-xl font-bold text-slate-700 dark:text-slate-200">{user.streak}</span>
              <span className="text-xs text-slate-400 uppercase font-bold">Streak</span>
          </div>
          <div className="flex-1 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-2xl p-4 flex flex-col items-center shadow-sm transition-colors">
              <Zap className="w-8 h-8 text-yellow-500 mb-2 fill-yellow-100 dark:fill-yellow-900" />
              <span className="text-xl font-bold text-slate-700 dark:text-slate-200">{user.xp}</span>
              <span className="text-xs text-slate-400 uppercase font-bold">XP</span>
          </div>
       </div>
       
       {/* Progress Card (Hidden on Mobile because it's in the Hero section now) */}
       <div className="hidden md:block border-2 border-slate-100 dark:border-slate-800 rounded-2xl p-6 bg-white dark:bg-slate-900 shadow-sm transition-colors">
          <h3 className="font-bold text-slate-700 dark:text-slate-300 mb-4 uppercase tracking-wide text-xs">Your Progress</h3>
          <div className="flex items-center gap-3">
             <Shield className="w-10 h-10 text-emerald-500" />
             <div className="flex-1">
                <p className="text-sm font-bold text-slate-600 dark:text-slate-300">{completedCount} / {totalCount} Surahs</p>
                <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full mt-2">
                   <div className="h-full bg-emerald-500 rounded-full transition-all duration-500" style={{ width: `${(completedCount / totalCount) * 100}%` }}></div>
                </div>
             </div>
          </div>
       </div>

       <div 
         onClick={() => router.push('/names')}
         className="border-2 border-slate-100 dark:border-slate-800 rounded-2xl p-6 bg-white dark:bg-slate-900 shadow-sm cursor-pointer hover:border-emerald-300 dark:hover:border-emerald-500 hover:shadow-md transition-all group"
       >
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                <Sparkles className="w-6 h-6 text-emerald-500 group-hover:text-white transition-colors" />
             </div>
             <div>
                <h3 className="font-bold text-slate-800 dark:text-slate-200 text-sm transition-colors">99 Names of Allah</h3>
                <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">Learn & Reflect</p>
             </div>
          </div>
       </div>
       
       {/* App Info & Credits */}
       <div className="border-2 border-slate-100 dark:border-slate-800 rounded-2xl p-6 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 flex flex-col items-center text-center shadow-sm relative overflow-hidden transition-colors">
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-100 dark:bg-emerald-900/40 rounded-full blur-2xl -mr-10 -mt-10 opacity-50 pointer-events-none"></div>
          
          <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center mb-4 shadow-md border border-slate-100 dark:border-slate-700 z-10 transition-colors">
             <BookOpen className="w-6 h-6 text-emerald-500" />
          </div>
          
          <h3 className="font-black text-slate-800 dark:text-slate-200 text-lg mb-1 z-10 transition-colors">JuzJourney</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium italic mb-6 leading-relaxed z-10 px-2 transition-colors">
            "Your path to understanding the final 30th."
          </p>
          
          <div className="w-full h-px bg-slate-200 dark:bg-slate-700 mb-5 transition-colors"></div>
          
          <p className="text-xs text-slate-400 dark:text-slate-500 font-bold tracking-widest uppercase mb-1">Created By</p>
          <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
             Ahsan Farabi
          </p>
       </div>
       
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20 md:pb-0 font-sans text-slate-900 dark:text-slate-100 flex flex-row transition-colors duration-300">
      
      {/* --- MODAL --- */}
      {showCertificateModal && (
        <div className="fixed inset-0 z-[60] bg-slate-900/60 dark:bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in duration-200">
           <div className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 md:p-10 max-w-sm w-full text-center relative shadow-2xl animate-in zoom-in-95 duration-300 transition-colors">
              <button 
                onClick={() => setShowCertificateModal(false)}
                className="absolute top-4 right-4 p-2 bg-slate-100 dark:bg-slate-700 rounded-full hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
              >
                <X className="w-5 h-5 text-slate-500 dark:text-slate-300" />
              </button>
              {allCompleted ? (
                 <>
                    <div className="w-24 h-24 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner ring-4 ring-yellow-50 dark:ring-yellow-900/20">
                        <Award className="w-12 h-12 text-yellow-600 dark:text-yellow-500 drop-shadow-sm" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Certificate Unlocked!</h2>
                    <p className="text-slate-500 dark:text-slate-300 mb-8 leading-relaxed">MashaAllah! You have completed the course.</p>
                    <div className="flex justify-center"><DownloadCertificate userName={user.name} /></div>
                 </>
              ) : (
                 <>
                    <div className="w-24 h-24 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                        <Lock className="w-10 h-10 text-slate-400 dark:text-slate-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Certificate Locked</h2>
                    <p className="text-slate-500 dark:text-slate-300 mb-8 leading-relaxed">Complete <strong>{remaining} more Surah{remaining > 1 ? 's' : ''}</strong> to unlock.</p>
                    <button onClick={() => setShowCertificateModal(false)} className="w-full py-3 bg-slate-800 dark:bg-slate-700 text-white rounded-xl font-bold shadow-lg hover:bg-slate-700 dark:hover:bg-slate-600 transition-all">Okay!</button>
                 </>
              )}
           </div>
        </div>
      )}

      {/* Mobile Header (Sticky tracking stats + Theme Toggle) */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur z-30 p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center md:hidden transition-colors">
        <div className="flex items-center gap-2">
           <Zap className="w-5 h-5 text-yellow-500 fill-current" />
           <span className="font-bold text-yellow-600 dark:text-yellow-500">{user.xp}</span>
        </div>
        <div className="flex items-center gap-2">
           <Flame className="w-5 h-5 text-orange-500 fill-current" />
           <span className="font-bold text-orange-600 dark:text-orange-500">{user.streak}</span>
        </div>
        <ThemeToggle />
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex justify-center">
        <div className="w-full max-w-md md:max-w-2xl px-4 py-20 md:py-12">
            
            {/* Welcome Banner - DYNAMIC & GRADIENT */}
            <div className="bg-gradient-to-br from-emerald-500 to-teal-700 dark:from-emerald-700 dark:to-slate-800 rounded-[2rem] p-8 md:p-10 mb-6 text-white shadow-lg shadow-emerald-200 dark:shadow-none relative overflow-hidden group min-h-[220px] flex flex-col justify-center transition-all">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                
                <div className="relative z-10">
                    <h2 className="font-extrabold text-2xl md:text-2xl mb-3 drop-shadow-sm">
                        Welcome back, {user.name}!
                    </h2>
                    <p className="text-teal-50 dark:text-slate-200 text-base md:text-lg max-w-[280px] md:max-w-md drop-shadow-sm leading-relaxed mb-6 animate-in fade-in duration-700">
                        {quote}
                    </p>
                    
                    {/* MOBILE ONLY: Embedded Progress Bar inside Hero Section */}
                    <div className="block md:hidden bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/30 dark:border-white/10">
                       <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-bold text-teal-50 dark:text-slate-300 uppercase tracking-wider">Overall Progress</span>
                          <span className="text-sm font-black text-white">{completedCount} / {totalCount}</span>
                       </div>
                       <div className="h-3 bg-teal-900/40 dark:bg-slate-900/50 rounded-full overflow-hidden">
                          <div 
                             className="h-full bg-white dark:bg-emerald-400 rounded-full transition-all duration-1000 ease-out" 
                             style={{ width: `${(completedCount / totalCount) * 100}%` }}
                          ></div>
                       </div>
                    </div>

                </div>
                
                <Award className="absolute -right-4 -bottom-6 w-40 h-40 md:-right-6 md:-bottom-10 md:w-56 md:h-56 text-white opacity-10 rotate-12 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
            </div>

            {/* HEARTS & DHIKR CARD - Placed Directly Under Hero */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 md:p-6 border-2 border-slate-100 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-rose-50 dark:bg-rose-900/30 rounded-full flex items-center justify-center shrink-0 transition-colors">
                        <Heart className="w-6 h-6 text-rose-500 fill-current animate-pulse" />
                    </div>
                    <div>
  
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 transition-colors">
                            {user.hearts} Hearts Remaining
                        </p>
                    </div>
                    <button
                    onClick={() => router.push('/dhikr')}
                    className="w-full sm:w-auto px-5 py-3 bg-slate-800 dark:bg-slate-700 hover:bg-slate-700 dark:hover:bg-slate-600 text-white rounded-xl font-bold text-sm transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 group"
                >
                    <Sparkles className="w-4 h-4 text-yellow-400 group-hover:animate-spin" />
                    Refill with Dhikr
                </button>
                </div>
                
            </div>

            {/* THE INTERACTIVE MAP */}
            <div 
               className="relative w-full" 
               style={{ height: `${Math.max(800, totalCount * 130)}px` }}
            >
               
               {/* 1. The Connector Path - THINNER LINE */}
               <svg className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <defs>
                    <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                 </defs>
                 <path 
                   d={pathData}
                   fill="none" 
                   stroke="url(#pathGradient)" 
                   strokeWidth="0.8" 
                   strokeDasharray="4"
                   strokeLinecap="round"
                   className="opacity-40 dark:opacity-60"
                 />
               </svg>

               {/* 2. Surah Nodes */}
               {SURAHS.map((surah, index) => {
                 const completed = isCompleted(surah.id);
                 const pos = positions[index];
                 const Icon = IconMap[surah.iconName] || Star;

                 // Calculate Progress
                 const savedProgress = user.surahProgress?.[surah.id] || 0;
                 const progressPercentage = completed ? 100 : (savedProgress / surah.totalVerses) * 100;

                 // SVG Circle Math for the border
                 const radius = 46; 
                 const strokeWidth = 8;
                 const circumference = 2 * Math.PI * radius;
                 const strokeDashoffset = circumference - (progressPercentage / 100) * circumference;

                 return (
                   <div 
                     key={surah.id} 
                     className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group" 
                     style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                   >
                     <div className="flex flex-col items-center relative">

                       <button
                         onClick={() => router.push(`/learn/${surah.id}`)}
                         className={clsx(
                           "relative w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95 active:translate-y-1 active:shadow-none focus:outline-none",
                           completed 
                             ? `bg-gradient-to-br ${surah.themeGradient} shadow-[0_6px_0_rgba(203,213,225,0.5)] dark:shadow-[0_6px_0_rgba(15,23,42,0.5)]` 
                             : progressPercentage > 0 
                               ? 'bg-white dark:bg-slate-800 shadow-[0_6px_0_rgba(203,213,225,0.5)] dark:shadow-[0_6px_0_rgba(15,23,42,0.5)]' 
                               : 'bg-slate-50 dark:bg-slate-900 shadow-[0_6px_0_rgba(203,213,225,0.5)] dark:shadow-[0_6px_0_rgba(15,23,42,0.5)]'
                         )}
                       >
                         {/* The SVG acting EXACTLY as the border */}
                         <svg className="absolute inset-0 w-full h-full transform -rotate-90 pointer-events-none rounded-full" viewBox="0 0 100 100">
                           {/* Background Track (The empty border) */}
                           <circle 
                              cx="50" 
                              cy="50" 
                              r={radius} 
                              fill="transparent" 
                              className={clsx(completed ? "stroke-white/20" : "stroke-slate-200 dark:stroke-slate-700")} 
                              strokeWidth={strokeWidth} 
                           />
                           {/* Active Progress Fill */}
                           <circle
                             cx="50"
                             cy="50"
                             r={radius}
                             fill="transparent"
                             className={clsx(
                               "transition-all duration-1000 ease-out",
                               completed ? "stroke-white" : "stroke-emerald-500" 
                             )}
                             strokeWidth={strokeWidth}
                             strokeDasharray={circumference}
                             strokeDashoffset={strokeDashoffset}
                             strokeLinecap="round"
                           />
                         </svg>

                         {/* Inner Icon */}
                         <Icon className={clsx(
                           "relative z-10 w-8 h-8 md:w-10 md:h-10 transition-colors",
                           completed ? "text-white" : progressPercentage > 0 ? "text-emerald-500" : "text-slate-400 dark:text-slate-500"
                         )} />
                         
                         {/* Completion Star Badge */}
                         {completed && ( 
                            <div className="absolute -top-2 -right-2 animate-bounce z-20">
                                <div className="bg-yellow-400 rounded-full p-1.5 border-4 border-white dark:border-slate-800 shadow-sm">
                                    <Star className="w-4 h-4 text-yellow-900 fill-current" />
                                </div>
                            </div> 
                         )}
                       </button>
                       
                       {/* Label */}
                       <div className="mt-4 bg-white dark:bg-slate-800 px-4 py-2 rounded-xl border-2 shadow-sm text-center transform transition-all whitespace-nowrap z-20 border-slate-100 dark:border-slate-700 group-hover:scale-105 group-hover:border-emerald-200 dark:group-hover:border-emerald-500">
                         <h3 className={clsx("text-sm font-bold transition-colors", completed ? 'text-slate-800 dark:text-slate-200' : 'text-slate-500 dark:text-slate-400', "group-hover:text-emerald-700 dark:group-hover:text-emerald-400")}>
                            {surah.title}
                         </h3>
                       </div>
                     </div>
                   </div>
                 );
               })}

               {/* 3. Final Trophy Node */}
               <div 
                 className="absolute transform -translate-x-1/2 -translate-y-1/2" 
                 style={{ left: `${trophyPos.x}%`, top: `${trophyPos.y}%` }}
               >
                 <div className="flex flex-col items-center group">
                     <button
                        onClick={() => setShowCertificateModal(true)}
                        className={clsx(
                          "w-28 h-28 md:w-32 md:h-32 rounded-[2rem] rotate-45 flex items-center justify-center border-[6px] shadow-[0_15px_25px_rgba(0,0,0,0.15)] transition-all duration-500 hover:scale-105 active:scale-95 cursor-pointer",
                          allCompleted 
                            ? 'bg-gradient-to-br from-yellow-300 to-yellow-500 border-white dark:border-slate-800 animate-pulse' 
                            : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 grayscale'
                        )}
                     >
                        <div className="-rotate-45">
                            <Award className={clsx("w-14 h-14 md:w-16 md:h-16", allCompleted ? 'text-yellow-900' : 'text-slate-300 dark:text-slate-500')} />
                        </div>
                     </button>
                     <div className="mt-10 font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest text-xs group-hover:text-yellow-600 dark:group-hover:text-yellow-500 transition-colors bg-white dark:bg-slate-800 px-3 py-1 rounded-full shadow-sm border border-slate-100 dark:border-slate-700">
                         Certificate
                     </div>
                 </div>
               </div>

            </div>

            {/* MOBILE ONLY: Render Sidebar Content Below Dashboard */}
            <div className="block lg:hidden mt-16 mb-8 w-full border-t-2 border-slate-100 dark:border-slate-800 pt-8 transition-colors">
               <h2 className="text-xl font-extrabold text-slate-800 dark:text-slate-200 mb-6 text-center">Your Dashboard</h2>
               {renderSidebarContent()}
            </div>

        </div>
      </main>

      {/* DESKTOP ONLY: Fixed Right Sidebar */}
      <aside className="hidden lg:block w-80 p-8 h-screen sticky top-0 bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 flex-shrink-0 overflow-y-auto transition-colors">
        
        {/* Theme Toggle explicitly at the top of the Desktop Sidebar */}
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800">
            <h2 className="font-black text-slate-800 dark:text-slate-200 text-lg">Dashboard</h2>
            <ThemeToggle />
        </div>

        {renderSidebarContent()}
      </aside>

      {/* Mobile Nav Footer */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t-2 border-slate-200 dark:border-slate-800 py-3 px-6 flex justify-around items-center z-40 pb-safe transition-colors">
        <button onClick={() => router.push('/dashboard')} className="flex flex-col items-center gap-1 text-emerald-500">
          <Home className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase">Learn</span>
        </button>
        <button onClick={() => setShowCertificateModal(true)} className="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500 hover:text-yellow-600 dark:hover:text-yellow-500 transition-colors">
          <Award className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase">Certificate</span>
        </button>
      </nav>

    </div>
  );
}