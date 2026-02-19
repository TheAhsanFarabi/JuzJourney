'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useUser } from '@/context/UserContext';
import { ArrowLeft, Sparkles, Heart, X, BookOpen, Zap } from 'lucide-react';
import clsx from 'clsx';

// --- DATA: The Names of Allah (Sample of the first 12 to get you started) ---
// You can easily add the remaining 87 following this exact structure.
const ALLAH_NAMES = [
  { id: 1, arabic: 'الرَّحْمَنُ', transliteration: 'Ar-Rahman', meaning: 'The Most Compassionate', reflection: 'Show immense compassion to all of creation, regardless of who they are or what they have done. Be a source of comfort to others.' },
  { id: 2, arabic: 'الرَّحِيمُ', transliteration: 'Ar-Raheem', meaning: 'The Most Merciful', reflection: 'Be specifically merciful in your actions. Forgive those who wrong you and do not hold grudges in your heart.' },
  { id: 3, arabic: 'الْمَلِكُ', transliteration: 'Al-Malik', meaning: 'The King / Sovereign', reflection: 'Remember that true ownership belongs to Allah. Do not become arrogant about your wealth, status, or possessions.' },
  { id: 4, arabic: 'الْقُدُّوسُ', transliteration: 'Al-Quddus', meaning: 'The Most Holy / Pure', reflection: 'Purify your heart from envy, anger, and arrogance. Keep your body, mind, and surroundings clean.' },
  { id: 5, arabic: 'السَّلَامُ', transliteration: 'As-Salam', meaning: 'The Source of Peace', reflection: 'Be a peacemaker. Spread the greeting of peace, resolve conflicts among friends, and cultivate inner peace through prayer.' },
  { id: 6, arabic: 'الْمُؤْمِنُ', transliteration: 'Al-Mu\'min', meaning: 'The Guarantor of Security', reflection: 'Be a trustworthy person. Ensure that people feel safe from your tongue, your hands, and your judgment.' },
  { id: 7, arabic: 'الْمُهَيْمِنُ', transliteration: 'Al-Muhaymin', meaning: 'The Guardian / Overseer', reflection: 'Watch over your own soul and actions carefully. Be a protective guardian for the vulnerable people around you.' },
  { id: 8, arabic: 'الْعَزِيزُ', transliteration: 'Al-Aziz', meaning: 'The Almighty / Invincible', reflection: 'Seek honor and strength only from Allah, not from the fleeting approval of society or social media.' },
  { id: 9, arabic: 'الْجَبَّارُ', transliteration: 'Al-Jabbar', meaning: 'The Compeller / Restorer', reflection: 'Help mend broken hearts. If you see someone who is emotionally or financially broken, be the one who helps restore them.' },
  { id: 10, arabic: 'الْمُتَكَبِّرُ', transliteration: 'Al-Mutakabbir', meaning: 'The Supreme / Majestic', reflection: 'Humble yourself entirely. Realize that true greatness belongs to Allah alone, and ego has no place in a believer\'s heart.' },
  { id: 11, arabic: 'الْخَالِقُ', transliteration: 'Al-Khaliq', meaning: 'The Creator', reflection: 'Reflect on the beauty of nature. Look at the sky, the trees, and your own body, and appreciate the perfect design of the Creator.' },
  { id: 12, arabic: 'الْبَارِئُ', transliteration: 'Al-Bari', meaning: 'The Maker of Order', reflection: 'Bring order to your life. Respect the delicate balance Allah has placed in the universe by not being wasteful.' },
];

export default function NamesOfAllahPage() {
  const router = useRouter();
  const { addXp } = useUser();
  const [selectedName, setSelectedName] = useState<typeof ALLAH_NAMES[0] | null>(null);
  const [hasReflected, setHasReflected] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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

  const openModal = (name: typeof ALLAH_NAMES[0]) => {
    playClick();
    setSelectedName(name);
    setHasReflected(false);
  };

  const closeModal = () => {
    playClick();
    setSelectedName(null);
  };

  const handleReflect = () => {
    playClick();
    if (!hasReflected) {
      addXp(5); // Reward them for reflecting!
      setHasReflected(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-24 md:pb-12">
      
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-slate-100 px-6 py-4 flex items-center justify-between shadow-sm">
        <button 
          onClick={() => { playClick(); router.push('/dashboard'); }}
          className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-slate-600" />
        </button>
        <div className="text-center">
          <h1 className="text-xl font-extrabold text-slate-800 tracking-tight">Asma ul-Husna</h1>
          <p className="text-[10px] uppercase tracking-widest text-emerald-600 font-bold">The 99 Names of Allah</p>
        </div>
        <div className="w-10 h-10"></div> {/* Spacer for centering */}
      </header>

      {/* Main Grid */}
      <main className="max-w-5xl mx-auto px-6 py-8">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4 rotate-3">
             <Sparkles className="w-8 h-8 text-emerald-500" />
          </div>
          <p className="text-slate-500 max-w-md mx-auto font-medium">
            Click on a name to learn its meaning and discover how to apply its attributes to your daily life.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {ALLAH_NAMES.map((name, index) => (
            <motion.button
              key={name.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openModal(name)}
              className="bg-white p-6 rounded-3xl border-2 border-slate-100 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all flex flex-col items-center justify-center text-center group"
            >
              <span className="text-emerald-200 text-xs font-bold mb-2">#{name.id}</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors" dir="rtl">
                {name.arabic}
              </h2>
              <p className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">
                {name.transliteration}
              </p>
            </motion.button>
          ))}
        </div>
      </main>

      {/* MODAL: Reflection View */}
      <AnimatePresence>
        {selectedName && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-6"
          >
             <motion.div 
               initial={{ scale: 0.9, y: 20, opacity: 0 }}
               animate={{ scale: 1, y: 0, opacity: 1 }}
               exit={{ scale: 0.9, y: 20, opacity: 0 }}
               className="bg-white w-full max-w-lg rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col"
             >
                {/* Modal Header */}
                <div className="bg-emerald-600 p-8 relative text-center flex flex-col items-center">
                   <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                   <button onClick={closeModal} className="absolute top-4 right-4 p-2 bg-black/10 rounded-full text-white hover:bg-black/20 transition-colors z-10">
                      <X className="w-5 h-5" />
                   </button>
                   
                   <span className="text-emerald-200 text-sm font-bold mb-2 relative z-10">Name #{selectedName.id}</span>
                   <h2 className="text-6xl md:text-7xl font-serif font-bold text-white mb-2 relative z-10 drop-shadow-md" dir="rtl">
                     {selectedName.arabic}
                   </h2>
                   <h3 className="text-xl md:text-2xl font-bold text-white relative z-10">{selectedName.transliteration}</h3>
                   <p className="text-emerald-100 font-medium tracking-wide uppercase text-sm mt-1 relative z-10">{selectedName.meaning}</p>
                </div>

                {/* Modal Body */}
                <div className="p-8 md:p-10 bg-slate-50 flex-1">
                   <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0">
                         <BookOpen className="w-5 h-5 text-emerald-600" />
                      </div>
                      <h4 className="text-lg font-bold text-slate-800">How to reflect</h4>
                   </div>
                   
                   <p className="text-slate-600 leading-relaxed text-lg mb-8">
                     {selectedName.reflection}
                   </p>

                   {/* Interactive Action */}
                   <AnimatePresence mode="wait">
                     {!hasReflected ? (
                       <motion.button
                         key="reflect-btn"
                         exit={{ opacity: 0, scale: 0.9 }}
                         whileHover={{ scale: 1.02 }}
                         whileTap={{ scale: 0.98 }}
                         onClick={handleReflect}
                         className="w-full py-4 bg-slate-800 text-white rounded-2xl font-bold text-lg shadow-lg hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
                       >
                         I will try this today <Heart className="w-5 h-5" />
                       </motion.button>
                     ) : (
                       <motion.div
                         key="success-msg"
                         initial={{ opacity: 0, scale: 0.9 }}
                         animate={{ opacity: 1, scale: 1 }}
                         className="w-full py-4 bg-emerald-100 text-emerald-800 rounded-2xl font-bold text-lg border-2 border-emerald-200 flex items-center justify-center gap-2"
                       >
                         <Zap className="w-5 h-5 text-yellow-500 fill-current" />
                         Awesome! +5 XP Added
                       </motion.div>
                     )}
                   </AnimatePresence>
                </div>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}