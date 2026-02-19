'use client';

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/UserContext';
import { SURAHS } from '@/lib/data';
import { DownloadCertificate } from '@/app/components/Certificate';
import { 
  Users, Sun, Star, Lock, Check, Award, 
  Zap, Flame, Shield, Home, Laptop, X, Heart, 
  BookOpen
} from 'lucide-react';
import clsx from 'clsx';

const IconMap = {
  Users: Users,
  Sun: Sun,
  Star: Star,
  Flame: Flame,
  Zap: Zap,
  Shield: Shield
};

export default function Dashboard() {
  const { user } = useUser();
  const router = useRouter();
  const [showCertificateModal, setShowCertificateModal] = useState(false);

  // Safety check
  if (!user.hasOnboarded) {
    if (typeof window !== 'undefined') router.push('/');
    return null;
  }

  // --- STATS LOGIC ---
  const isUnlocked = (index: number) => {
    if (index === 0) return true;
    return user.completedSurahs.includes(SURAHS[index - 1].id);
  };

  const isCompleted = (id: string) => user.completedSurahs.includes(id);
  const completedCount = user.completedSurahs.length;
  const totalCount = SURAHS.length;
  const allCompleted = completedCount === totalCount;
  const remaining = totalCount - completedCount;

  // --- MAP CONFIGURATION ---
  // Coordinates in percentage (0-100) relative to container
  const positions = [
    { x: 50, y: 10 },  // 1. Nas
    { x: 25, y: 22 },  // 2. Falaq (Left)
    { x: 75, y: 34 },  // 3. Ikhlas (Right)
    { x: 30, y: 46 },  // 4. Masad (Left)
    { x: 70, y: 58 },  // 5. Nasr (Right)
    { x: 40, y: 70 },  // 6. Kafirun (Left)
    { x: 50, y: 85 }   // 7. Trophy (Center)
  ];

  // --- DYNAMIC PATH GENERATOR ---
  const pathData = useMemo(() => {
    if (positions.length < 2) return "";
    let d = `M ${positions[0].x} ${positions[0].y}`;
    for (let i = 0; i < positions.length - 1; i++) {
      const current = positions[i];
      const next = positions[i + 1];
      const midY = (current.y + next.y) / 2;
      d += ` C ${current.x} ${midY}, ${next.x} ${midY}, ${next.x} ${next.y}`;
    }
    return d;
  }, [positions]);

  return (
    <div className="min-h-screen bg-slate-50 pb-20 md:pb-0 font-sans text-slate-900 flex flex-row">
      
      {/* --- MODAL --- */}
      {showCertificateModal && (
        <div className="fixed inset-0 z-[60] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in duration-200">
           <div className="bg-white rounded-[2rem] p-8 md:p-10 max-w-sm w-full text-center relative shadow-2xl animate-in zoom-in-95 duration-300">
              <button 
                onClick={() => setShowCertificateModal(false)}
                className="absolute top-4 right-4 p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
              >
                <X className="w-5 h-5 text-slate-500" />
              </button>
              {allCompleted ? (
                 <>
                    <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner ring-4 ring-yellow-50">
                        <Award className="w-12 h-12 text-yellow-600 drop-shadow-sm" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">Certificate Unlocked!</h2>
                    <p className="text-slate-500 mb-8 leading-relaxed">MashaAllah! You have completed the course.</p>
                    <div className="flex justify-center"><DownloadCertificate userName={user.name} /></div>
                 </>
              ) : (
                 <>
                    <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                        <Lock className="w-10 h-10 text-slate-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">Certificate Locked</h2>
                    <p className="text-slate-500 mb-8 leading-relaxed">Complete <strong>{remaining} more Surah{remaining > 1 ? 's' : ''}</strong> to unlock.</p>
                    <button onClick={() => setShowCertificateModal(false)} className="w-full py-3 bg-slate-800 text-white rounded-xl font-bold shadow-lg hover:bg-slate-700 transition-all">Okay!</button>
                 </>
              )}
           </div>
        </div>
      )}

      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur z-30 p-4 border-b border-slate-100 flex justify-between items-center md:hidden">
        <div className="flex items-center gap-2">
           <Zap className="w-5 h-5 text-yellow-500 fill-current" />
           <span className="font-bold text-yellow-600">{user.xp}</span>
        </div>
        <div className="flex items-center gap-2">
           <Flame className="w-5 h-5 text-orange-500 fill-current" />
           <span className="font-bold text-orange-600">{user.streak}</span>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex justify-center">
        <div className="w-full max-w-md md:max-w-2xl px-4 py-20 md:py-12">
            
            {/* Welcome Banner */}
            <div className="hidden md:block bg-emerald-600 rounded-3xl p-8 mb-10 text-white shadow-lg shadow-emerald-200 relative overflow-hidden">
                <div className="relative z-10">
                    <h2 className="font-extrabold text-2xl mb-2">Welcome back, {user.name}!</h2>
                    <p className="text-emerald-100 mb-6 max-w-sm">Continue your journey through Juz 30.</p>
                </div>
                <Award className="absolute -right-6 -bottom-10 w-48 h-48 text-emerald-500 opacity-50 rotate-12" />
            </div>

            {/* THE INTERACTIVE MAP */}
            <div className="relative w-full h-[800px] my-8">
               
               {/* 1. The Connector Path */}
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
                   strokeWidth="1.5" 
                   strokeDasharray="4"
                   strokeLinecap="round"
                   className="opacity-40"
                 />
               </svg>

               {/* 2. Surah Nodes */}
               {SURAHS.map((surah, index) => {
                 const unlocked = isUnlocked(index);
                 const completed = isCompleted(surah.id);
                 const pos = positions[index];
                 const Icon = IconMap[surah.iconName];

                 return (
                   <div 
                     key={surah.id} 
                     className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group" 
                     style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                   >
                     <div className="flex flex-col items-center">
                       <button
                         onClick={() => unlocked && router.push(`/learn/${surah.id}`)}
                         disabled={!unlocked}
                         className={clsx(
                           "w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center border-[6px] shadow-[0_8px_0_rgba(0,0,0,0.1)] active:translate-y-2 active:shadow-none transition-all relative z-10",
                           completed ? 'bg-emerald-500 border-emerald-600' : 
                           unlocked ? `bg-gradient-to-br ${surah.themeGradient} border-white hover:scale-110` : 
                           'bg-slate-200 border-slate-300 cursor-not-allowed'
                         )}
                       >
                         {completed ? (
                            <Check className="w-10 h-10 md:w-12 md:h-12 text-white animate-in zoom-in stroke-[3]" />
                         ) : unlocked ? (
                            <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                         ) : (
                            <Lock className="w-6 h-6 md:w-8 md:h-8 text-slate-400" />
                         )}
                         
                         {/* Stars for completion */}
                         {completed && ( 
                            <div className="absolute -top-2 -right-2 animate-bounce">
                                <div className="bg-yellow-400 rounded-full p-1.5 border-4 border-white shadow-sm">
                                    <Star className="w-4 h-4 text-yellow-900 fill-current" />
                                </div>
                            </div> 
                         )}
                       </button>
                       
                       {/* Label */}
                       <div className={clsx(
                           "mt-4 bg-white px-4 py-2 rounded-xl border-2 shadow-sm text-center transform transition-all whitespace-nowrap z-20", 
                           unlocked ? 'border-slate-100 group-hover:scale-105' : 'border-transparent opacity-50'
                       )}>
                         <h3 className={clsx("text-sm font-bold", unlocked ? 'text-slate-800' : 'text-slate-400')}>
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
                 style={{ left: `${positions[positions.length - 1].x}%`, top: `${positions[positions.length - 1].y}%` }}
               >
                 <div className="flex flex-col items-center group">
                     <button
                        onClick={() => setShowCertificateModal(true)}
                        className={clsx(
                          "w-28 h-28 md:w-32 md:h-32 rounded-[2rem] rotate-45 flex items-center justify-center border-[6px] shadow-[0_15px_25px_rgba(0,0,0,0.15)] transition-all duration-500 hover:scale-105 active:scale-95 cursor-pointer",
                          allCompleted 
                            ? 'bg-gradient-to-br from-yellow-300 to-yellow-500 border-white animate-pulse' 
                            : 'bg-slate-100 border-slate-200 grayscale'
                        )}
                     >
                        <div className="-rotate-45">
                            <Award className={clsx("w-14 h-14 md:w-16 md:h-16", allCompleted ? 'text-yellow-900' : 'text-slate-300')} />
                        </div>
                     </button>
                     <div className="mt-10 font-bold text-slate-400 uppercase tracking-widest text-xs group-hover:text-yellow-600 transition-colors bg-white px-3 py-1 rounded-full shadow-sm border border-slate-100">
                         Certificate
                     </div>
                 </div>
               </div>

            </div>
        </div>
      </main>

      {/* RIGHT SIDEBAR (Fixed Width, Sticky) */}
      <aside className="hidden lg:block w-80 p-8 h-screen sticky top-0 bg-white border-l border-slate-200 flex-shrink-0 overflow-y-auto">
        <div className="space-y-6">
           
           {/* Stats Cards */}
           <div className="flex gap-4">
              <div className="flex-1 bg-white border-2 border-slate-100 rounded-2xl p-4 flex flex-col items-center shadow-sm">
                  <Flame className="w-8 h-8 text-orange-500 mb-2 fill-orange-100" />
                  <span className="text-xl font-bold text-slate-700">{user.streak}</span>
                  <span className="text-xs text-slate-400 uppercase font-bold">Streak</span>
              </div>
              <div className="flex-1 bg-white border-2 border-slate-100 rounded-2xl p-4 flex flex-col items-center shadow-sm">
                  <Zap className="w-8 h-8 text-yellow-500 mb-2 fill-yellow-100" />
                  <span className="text-xl font-bold text-slate-700">{user.xp}</span>
                  <span className="text-xs text-slate-400 uppercase font-bold">XP</span>
              </div>
           </div>
           
           {/* Progress Card */}
           <div className="border-2 border-slate-100 rounded-2xl p-6 bg-white shadow-sm">
              <h3 className="font-bold text-slate-700 mb-4 uppercase tracking-wide text-xs">Your Progress</h3>
              <div className="flex items-center gap-3">
                 <Shield className="w-10 h-10 text-emerald-500" />
                 <div className="flex-1">
                    <p className="text-sm font-bold text-slate-600">{completedCount} / {totalCount} Surahs</p>
                    <div className="h-2 bg-slate-100 rounded-full mt-2">
                       <div className="h-full bg-emerald-500 rounded-full transition-all duration-500" style={{ width: `${(completedCount / totalCount) * 100}%` }}></div>
                    </div>
                 </div>
              </div>
           </div>
           
           {/* App Info & Credits */}
           <div className="border-2 border-slate-100 rounded-2xl p-6 bg-gradient-to-b from-slate-50 to-white flex flex-col items-center text-center shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-100 rounded-full blur-2xl -mr-10 -mt-10 opacity-50 pointer-events-none"></div>
              
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-md border border-slate-100 z-10">
                 <BookOpen className="w-6 h-6 text-emerald-500" />
              </div>
              
              <h3 className="font-black text-slate-800 text-lg mb-1 z-10">JuzJourney</h3>
              <p className="text-slate-500 text-sm font-medium italic mb-6 leading-relaxed z-10 px-2">
                "Your path to understanding the final 30th."
              </p>
              
              <div className="w-full h-px bg-slate-200 mb-5"></div>
              
              <p className="text-xs text-slate-400 font-bold tracking-widest uppercase mb-1">Created By</p>
              <p className="text-sm font-bold text-emerald-600 flex items-center gap-1">
                 Ahsan Farabi
              </p>
           </div>
           
        </div>
      </aside>

      {/* Mobile Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t-2 border-slate-200 py-3 px-6 flex justify-around items-center z-40 pb-safe">
        <button onClick={() => router.push('/dashboard')} className="flex flex-col items-center gap-1 text-emerald-500">
          <Home className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase">Learn</span>
        </button>
        <button onClick={() => setShowCertificateModal(true)} className="flex flex-col items-center gap-1 text-slate-400 hover:text-yellow-600 transition-colors">
          <Award className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase">Certificate</span>
        </button>
      </nav>

    </div>
  );
}