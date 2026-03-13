'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useUser } from '@/context/UserContext';
import { ArrowLeft, Sparkles, Heart, X, BookOpen, Zap } from 'lucide-react';
import clsx from 'clsx';

// --- DATA: The Names of Allah (Sample of the first 12 to get you started) ---
// You can easily add the remaining 87 following this exact structure.
export const ALLAH_NAMES = [
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
  { id: 13, arabic: 'الْمُصَوِّرُ', transliteration: 'Al-Musawwir', meaning: 'The Shaper of Beauty', reflection: 'Recognize the unique beauty in yourself and others. Never mock someone\'s appearance, for you are mocking the work of the perfect Fashioner.' },
  { id: 14, arabic: 'الْغَفَّارُ', transliteration: 'Al-Ghaffar', meaning: 'The Forgiving', reflection: 'Forgive people repeatedly, just as you constantly seek Allah\'s forgiveness for your own repeated mistakes.' },
  { id: 15, arabic: 'الْقَهَّارُ', transliteration: 'Al-Qahhar', meaning: 'The Subduer', reflection: 'Subdue your own ego and bad habits. Remember that no tyrant or oppressor on earth is out of Allah\'s ultimate control.' },
  { id: 16, arabic: 'الْوَهَّابُ', transliteration: 'Al-Wahhab', meaning: 'The Giver of All', reflection: 'Give gifts to others without expecting anything in return. Be generous with your time, love, and resources.' },
  { id: 17, arabic: 'الرَّزَّاقُ', transliteration: 'Ar-Razzaq', meaning: 'The Provider', reflection: 'Never compromise your ethics to earn money. Trust that your provision is guaranteed by Allah and comes only from Him.' },
  { id: 18, arabic: 'الْفَتَّاحُ', transliteration: 'Al-Fattah', meaning: 'The Opener', reflection: 'When doors seem closed in your life, pray to The Opener. Also, strive to be someone who opens doors of opportunity for others.' },
  { id: 19, arabic: 'الْعَلِيمُ', transliteration: 'Al-\'Alim', meaning: 'The Knowing', reflection: 'Seek beneficial knowledge constantly. Act with integrity even when alone, knowing that Allah is fully aware of all your actions.' },
  { id: 20, arabic: 'الْقَابِضُ', transliteration: 'Al-Qabid', meaning: 'The Withholder', reflection: 'When things are taken away from you, practice patience. Understand that Allah withholds to test you or protect you from unseen harm.' },
  { id: 21, arabic: 'الْبَاسِطُ', transliteration: 'Al-Basit', meaning: 'The Expander', reflection: 'When Allah expands your wealth, health, or joy, expand your gratitude and share your blessings generously with those in need.' },
  { id: 22, arabic: 'الْخَافِضُ', transliteration: 'Al-Khafid', meaning: 'The Abaser', reflection: 'Do not pursue paths of arrogance or corruption, as Allah brings low the proud. Stay humble to avoid spiritual downfall.' },
  { id: 23, arabic: 'الرَّافِعُ', transliteration: 'Ar-Rafi\'', meaning: 'The Exalter', reflection: 'Elevate others by speaking well of them. Trust that true elevation in status comes through piety and humility, not showing off.' },
  { id: 24, arabic: 'الْمُعِزُّ', transliteration: 'Al-Mu\'izz', meaning: 'The Bestower of Honors', reflection: 'Honor your parents, elders, and guests. Recognize that true dignity is granted by Allah, so do not compromise your faith to please people.' },
  { id: 25, arabic: 'الْمُذِلُّ', transliteration: 'Al-Mudhill', meaning: 'The Humiliator', reflection: 'Never humiliate or embarrass another human being. Fear the day when hidden sins are exposed, and seek Allah\'s protection from disgrace.' },
  { id: 26, arabic: 'السَّمِيعُ', transliteration: 'As-Sami\'', meaning: 'The Hearing', reflection: 'Listen carefully and empathetically when others speak. Remember that Allah hears even the silent prayers of your heart.' },
  { id: 27, arabic: 'الْبَصِيرُ', transliteration: 'Al-Basir', meaning: 'The Seeing', reflection: 'Look at the world with the eyes of wisdom and compassion. Do not commit sins in private, for Allah\'s sight encompasses everything.' },
  { id: 28, arabic: 'الْحَكَمُ', transliteration: 'Al-Hakam', meaning: 'The Judge', reflection: 'Be fair in your daily judgments. Do not jump to conclusions without knowing the facts, and trust Allah\'s ultimate judgment.' },
  { id: 29, arabic: 'الْعَدْلُ', transliteration: 'Al-\'Adl', meaning: 'The Just', reflection: 'Stand firmly for justice, even if it is against yourself or your loved ones. Treat all people fairly.' },
  { id: 30, arabic: 'اللَّطِيفُ', transliteration: 'Al-Latif', meaning: 'The Subtle One', reflection: 'Be gentle and kind in your manners. Notice the subtle blessings Allah places in your life during difficult times.' },
  { id: 31, arabic: 'الْخَبِيرُ', transliteration: 'Al-Khabir', meaning: 'The All-Aware', reflection: 'Be deeply aware of your own flaws before pointing out the flaws of others. Allah knows the reality hidden behind every facade.' },
  { id: 32, arabic: 'الْحَلِيمُ', transliteration: 'Al-Halim', meaning: 'The Forbearing', reflection: 'Control your temper. Do not rush to punish or get angry at others when they make mistakes; practice forbearance instead.' },
  { id: 33, arabic: 'الْعَظِيمُ', transliteration: 'Al-\'Azim', meaning: 'The Magnificent', reflection: 'Magnify Allah in your heart. Let the greatness of Allah shrink your worldly problems and anxieties.' },
  { id: 34, arabic: 'الْغَفُورُ', transliteration: 'Al-Ghafur', meaning: 'The Great Forgiver', reflection: 'Conceal the faults of others and do not expose their private sins. Ask Allah daily to wipe away your own hidden sins.' },
  { id: 35, arabic: 'الشَّكُورُ', transliteration: 'Ash-Shakur', meaning: 'The Rewarder of Thankfulness', reflection: 'Appreciate the small favors people do for you. Never underestimate the value of a small good deed in the eyes of Allah.' },
  { id: 36, arabic: 'الْعَلِيُّ', transliteration: 'Al-\'Ali', meaning: 'The Highest', reflection: 'Aim high in your character and your goals. Do not engage in low, petty arguments or gossip.' },
  { id: 37, arabic: 'الْكَبِيرُ', transliteration: 'Al-Kabir', meaning: 'The Greatest', reflection: 'Say "Allahu Akbar" with true conviction. No obstacle, no enemy, and no problem is greater than Allah.' },
  { id: 38, arabic: 'الْحَفِيظُ', transliteration: 'Al-Hafiz', meaning: 'The Preserver', reflection: 'Protect the trusts and secrets people confide in you. Memorize and preserve the words of the Quran in your heart.' },
  { id: 39, arabic: 'الْمُقِيتُ', transliteration: 'Al-Muqit', meaning: 'The Nourisher', reflection: 'Feed the hungry and nourish the souls of others with kind words. Trust that Allah sustains all living beings.' },
  { id: 40, arabic: 'الْحَسِيبُ', transliteration: 'Al-Hasib', meaning: 'The Bringer to Account', reflection: 'Hold yourself accountable every night for what you did during the day before you are brought to account in the Hereafter.' },
  { id: 41, arabic: 'الْجَلِيلُ', transliteration: 'Al-Jalil', meaning: 'The Majestic', reflection: 'Respect the signs of Allah. Treat the Quran, the places of worship, and the name of Allah with ultimate reverence and majesty.' },
  { id: 42, arabic: 'الْكَرِيمُ', transliteration: 'Al-Karim', meaning: 'The Bountiful / Generous', reflection: 'Be highly generous. Give the best of what you have, not just the leftovers, and overlook the faults of people gracefully.' },
  { id: 43, arabic: 'الرَّقِيبُ', transliteration: 'Ar-Raqib', meaning: 'The Watchful One', reflection: 'Develop Ihsan (excellence) by acting beautifully, knowing that the Watchful One observes your every move.' },
  { id: 44, arabic: 'الْمُجِيبُ', transliteration: 'Al-Mujib', meaning: 'The Responder to Prayer', reflection: 'Never lose hope in making Dua. Respond quickly and warmly when someone calls upon you for help.' },
  { id: 45, arabic: 'الْوَاسِعُ', transliteration: 'Al-Wasi\'', meaning: 'The All-Comprehending', reflection: 'Have a broad and accommodating heart. Do not be narrow-minded or stingy, for Allah’s mercy and provision are vast.' },
  { id: 46, arabic: 'الْحَكِيمُ', transliteration: 'Al-Hakim', meaning: 'The Perfectly Wise', reflection: 'Seek wisdom, not just knowledge. Trust that every difficulty in your life has a wise divine purpose, even if you can\'t see it yet.' },
  { id: 47, arabic: 'الْوَدُودُ', transliteration: 'Al-Wadud', meaning: 'The Loving One', reflection: 'Express love to your family and friends. Be affectionate, warm, and approachable to everyone you meet.' },
  { id: 48, arabic: 'الْمَجِيدُ', transliteration: 'Al-Majid', meaning: 'The Glorious One', reflection: 'Strive for excellence and noble character so that your actions bring glory to your faith.' },
  { id: 49, arabic: 'الْبَاعِثُ', transliteration: 'Al-Ba\'ith', meaning: 'The Resurrector', reflection: 'Live your life with the Day of Resurrection in mind. Help revive dead hearts by spreading hope and the remembrance of Allah.' },
  { id: 50, arabic: 'الشَّهِيدُ', transliteration: 'Ash-Shahid', meaning: 'The Witness', reflection: 'Never bear false witness. Remember that Allah is the ultimate witness to the truth in every dispute.' },
  { id: 51, arabic: 'الْحَقُّ', transliteration: 'Al-Haqq', meaning: 'The Truth', reflection: 'Speak the truth even when it is difficult. Do not engage in fraud, deception, or living a fake life.' },
  { id: 52, arabic: 'الْوَكِيلُ', transliteration: 'Al-Wakil', meaning: 'The Trustee', reflection: 'Tie your camel, then trust in Allah. Do your best in every situation, and then leave the outcome entirely to the Ultimate Trustee.' },
  { id: 53, arabic: 'الْقَوِيُّ', transliteration: 'Al-Qawiyy', meaning: 'The Possessor of All Strength', reflection: 'Use your physical, financial, and emotional strength to protect the weak, not to oppress them.' },
  { id: 54, arabic: 'الْمَتِينُ', transliteration: 'Al-Matin', meaning: 'The Forceful One', reflection: 'Be steadfast and unshakable in your core values. Do not let peer pressure break your moral foundation.' },
  { id: 55, arabic: 'الْوَلِيُّ', transliteration: 'Al-Waliyy', meaning: 'The Protector / Friend', reflection: 'Be a loyal friend and protector to the believers. Seek Allah\'s friendship above the approval of people.' },
  { id: 56, arabic: 'الْحَمِيدُ', transliteration: 'Al-Hamid', meaning: 'The Praised', reflection: 'Make "Alhamdulillah" a constant phrase on your tongue. Praise others for their good qualities and achievements.' },
  { id: 57, arabic: 'الْمُحْصِي', transliteration: 'Al-Muhsi', meaning: 'The Appraiser / Accounter', reflection: 'Keep track of your own actions. Realize that every single breath, word, and deed is counted and recorded precisely.' },
  { id: 58, arabic: 'الْمُبْدِئُ', transliteration: 'Al-Mubdi\'', meaning: 'The Originator', reflection: 'Do not be afraid to start good initiatives. Allah originated you from nothing, so ask Him to help you start fresh when you fail.' },
  { id: 59, arabic: 'الْمُعِيدُ', transliteration: 'Al-Mu\'id', meaning: 'The Restorer', reflection: 'When you lose something valuable, trust the Restorer to bring it back to you or replace it with something better in the Hereafter.' },
  { id: 60, arabic: 'الْمُحْيِي', transliteration: 'Al-Muhyi', meaning: 'The Giver of Life', reflection: 'Breathe life into your days through prayer. Help bring "life" to others by saving them from poverty, ignorance, or depression.' },
  { id: 61, arabic: 'الْمُمِيتُ', transliteration: 'Al-Mumit', meaning: 'The Taker of Life', reflection: 'Remember death often to kill the greed and arrogance in your heart. Live each day as if it could be your last chance to do good.' },
  { id: 62, arabic: 'الْحَيُّ', transliteration: 'Al-Hayy', meaning: 'The Ever Living', reflection: 'Do not attach your heart entirely to people, because people will pass away. Attach your heart to the Ever-Living who never dies.' },
  { id: 63, arabic: 'الْقَيُّومُ', transliteration: 'Al-Qayyum', meaning: 'The Self-Existing / Sustainer', reflection: 'Acknowledge your total dependence on Allah. You cannot sustain yourself for a moment without His will.' },
  { id: 64, arabic: 'الْوَاجِدُ', transliteration: 'Al-Wajid', meaning: 'The Finder', reflection: 'Realize that Allah lacks nothing. Whenever you are in need of something, turn directly to the One who possesses it all.' },
  { id: 65, arabic: 'الْمَاجِدُ', transliteration: 'Al-Majid', meaning: 'The Glorious / Noble', reflection: 'Show nobility in your character. Be dignified and avoid engaging in trivial, unbeneficial matters.' },
  { id: 66, arabic: 'الْوَاحِدُ', transliteration: 'Al-Wahid', meaning: 'The Only One', reflection: 'Unify your focus. Direct your ultimate love, fear, and hope toward the One God, freeing yourself from the worship of worldly desires.' },
  { id: 67, arabic: 'الْأَحَدُ', transliteration: 'Al-Ahad', meaning: 'The One', reflection: 'Appreciate the absolute uniqueness of Allah. Do not compromise on Tawheed (monotheism) in any aspect of your life.' },
  { id: 68, arabic: 'الصَّمَدُ', transliteration: 'As-Samad', meaning: 'The Supreme Provider', reflection: 'Bring all your needs exclusively to Allah. He is the eternal refuge whom everyone needs, while He needs no one.' },
  { id: 69, arabic: 'الْقَادِرُ', transliteration: 'Al-Qadir', meaning: 'The Able', reflection: 'Never think a situation is impossible to resolve. The Able One can change your reality in the blink of an eye.' },
  { id: 70, arabic: 'الْمُقْتَدِرُ', transliteration: 'Al-Muqtadir', meaning: 'The Powerful', reflection: 'Do not abuse the power or authority you have over others. Remember that Allah’s power over you is infinitely greater.' },
  { id: 71, arabic: 'الْمُقَدِّمُ', transliteration: 'Al-Muqaddim', meaning: 'The Expediter', reflection: 'Rush to do good deeds. Push forward in matters of faith and righteousness, rather than dragging your feet.' },
  { id: 72, arabic: 'الْمُؤَخِّرُ', transliteration: 'Al-Mu\'akhkhir', meaning: 'The Delayer', reflection: 'If your prayers are not answered immediately, be patient. Allah delays things for your own benefit and perfectly times everything.' },
  { id: 73, arabic: 'الْأَوَّلُ', transliteration: 'Al-Awwal', meaning: 'The First', reflection: 'Put Allah first in your life. Before making any major decision, ask yourself if it pleases Him.' },
  { id: 74, arabic: 'الْآخِرُ', transliteration: 'Al-Akhir', meaning: 'The Last', reflection: 'Remember that everything around you will eventually perish. Invest your time in deeds that will remain with you in the eternal life.' },
  { id: 75, arabic: 'الظَّاهِرُ', transliteration: 'Az-Zahir', meaning: 'The Manifest', reflection: 'Look at the signs of Allah manifest in the universe. Let the beauty of creation constantly remind you of the Creator.' },
  { id: 76, arabic: 'الْبَاطِنُ', transliteration: 'Al-Batin', meaning: 'The Hidden', reflection: 'Purify your hidden intentions. Allah knows what is concealed deep within your heart, so make your private life better than your public one.' },
  { id: 77, arabic: 'الْوَالِي', transliteration: 'Al-Wali', meaning: 'The Patron / Governor', reflection: 'Take responsibility for those under your care. Be a fair, compassionate leader to your family, community, or team.' },
  { id: 78, arabic: 'الْمُتَعَالِي', transliteration: 'Al-Muta\'ali', meaning: 'The Most Exalted', reflection: 'Keep your ambitions high and exalted. Do not lower your standards to conform to the corrupt practices of society.' },
  { id: 79, arabic: 'الْبَرُّ', transliteration: 'Al-Barr', meaning: 'The Source of All Goodness', reflection: 'Be deeply devoted and good to your parents (Birr al-Walidayn). Shower kindness on everyone, just as Allah showers kindness on you.' },
  { id: 80, arabic: 'التَّوَّابُ', transliteration: 'At-Tawwab', meaning: 'The Ever-Pardoning', reflection: 'Never despair of Allah\'s mercy. No matter how many times you slip, turn back to Him immediately in sincere repentance.' },
  { id: 81, arabic: 'الْمُنْتَقِمُ', transliteration: 'Al-Muntaqim', meaning: 'The Avenger', reflection: 'Do not take revenge into your own hands when wronged. Trust the Ultimate Avenger to exact perfect justice on your behalf.' },
  { id: 82, arabic: 'الْعَفُوُّ', transliteration: 'Al-\'Afuww', meaning: 'The Pardoner', reflection: 'Erase the mistakes of others from your memory. Pardon people fully so that Allah may pardon and erase your sins on the Day of Judgment.' },
  { id: 83, arabic: 'الرَّءُوفُ', transliteration: 'Ar-Ra\'uf', meaning: 'The Compassionate', reflection: 'Be lenient and tender-hearted. Do not be harsh or excessively strict with people, especially those who are struggling.' },
  { id: 84, arabic: 'مَالِكُ الْمُلْكِ', transliteration: 'Malik-ul-Mulk', meaning: 'The Owner of All Sovereignty', reflection: 'Let go of your need for ultimate control. Accept that the Owner of all sovereignty gives power to whom He wills and takes it away as He wills.' },
  { id: 85, arabic: 'ذُو الْجَلَالِ وَالْإِكْرَامِ', transliteration: 'Dhul-Jalali wal-Ikram', meaning: 'Lord of Majesty and Generosity', reflection: 'Balance your awe of Allah\'s majesty with your hope in His immense generosity. Approach Him with both deep respect and great expectation.' },
  { id: 86, arabic: 'الْمُقْسِطُ', transliteration: 'Al-Muqsit', meaning: 'The Equitable', reflection: 'Be impeccably fair. Ensure that you give everyone their due rights, whether in business, family, or resolving disputes.' },
  { id: 87, arabic: 'الْجَامِعُ', transliteration: 'Al-Jami\'', meaning: 'The Gatherer', reflection: 'Strive to unite people and mend broken ties. Bring family and friends together, and prepare for the Day when all mankind will be gathered.' },
  { id: 88, arabic: 'الْغَنِيُّ', transliteration: 'Al-Ghaniyy', meaning: 'The Self-Sufficient', reflection: 'Cultivate contentment (Qana\'ah) in your heart. True wealth is not having many possessions, but having a soul that feels independent of worldly desires.' },
  { id: 89, arabic: 'الْمُغْنِي', transliteration: 'Al-Mughni', meaning: 'The Enricher', reflection: 'Help enrich the lives of others. If Allah has given you wealth or knowledge, use it to uplift people from poverty or ignorance.' },
  { id: 90, arabic: 'الْمَانِعُ', transliteration: 'Al-Mani\'', meaning: 'The Preventer of Harm', reflection: 'When you lose an opportunity, realize it might be Allah preventing harm from reaching you. Trust His protection.' },
  { id: 91, arabic: 'الضَّارُّ', transliteration: 'Ad-Darr', meaning: 'The Creator of the Harmful', reflection: 'Understand that trials and afflictions exist by Allah’s permission to test our faith, expiate our sins, and draw us closer to Him.' },
  { id: 92, arabic: 'النَّافِعُ', transliteration: 'An-Nafi\'', meaning: 'The Creator of Good', reflection: 'Strive to be a highly beneficial person to society. Use your skills, time, and energy to bring goodness and relief to others.' },
  { id: 93, arabic: 'النُّورُ', transliteration: 'An-Nur', meaning: 'The Light', reflection: 'Seek the light of guidance through the Quran. Be a light in the lives of others by offering hope, clarity, and good advice in dark times.' },
  { id: 94, arabic: 'الْهَادِي', transliteration: 'Al-Hadi', meaning: 'The Guide', reflection: 'Always ask Allah to keep you on the straight path. Gently guide others toward goodness without being judgmental or harsh.' },
  { id: 95, arabic: 'الْبَدِيعُ', transliteration: 'Al-Badi\'', meaning: 'The Incomparable Originator', reflection: 'Appreciate the infinite creativity of Allah in the cosmos. Use your own God-given creativity to innovate solutions that help humanity.' },
  { id: 96, arabic: 'الْبَاقِي', transliteration: 'Al-Baqi', meaning: 'The Everlasting', reflection: 'Do not break your heart over things you lose in this world; everything here fades. Build a legacy of good deeds that will last forever.' },
  { id: 97, arabic: 'الْوَارِثُ', transliteration: 'Al-Warith', meaning: 'The Inheritor', reflection: 'Remember that you will leave everything behind. Spend your wealth in good causes before you die, for ultimately, everything returns to Allah.' },
  { id: 98, arabic: 'الرَّشِيدُ', transliteration: 'Ar-Rashid', meaning: 'The Guide to the Right Path', reflection: 'Seek wisdom and maturity in your decisions. Follow the Sunnah of the Prophet to ensure your life is aligned with the most upright path.' },
  { id: 99, arabic: 'الصَّبُورُ', transliteration: 'As-Sabur', meaning: 'The Patient', reflection: 'Practice immense patience. Do not rush to anger, be patient in your trials, and give people time to grow and learn.' }
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