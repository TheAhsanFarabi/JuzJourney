export interface Word {
  id: string;
  arabic: string;
  transliteration: string; 
  meaning: string;
}

export interface Level {
  id: string;
  audio: string;
  arabicFull: string;
  translation: string;
  visual: string; // Simplified type for flexibility
  lesson: string;
  words: Word[];
  distractors?: Omit<Word, 'meaning'>[];
}

export interface Surah {
  id: string;
  number: number;
  title: string;
  meaning: string;
  story: string;
  // Expanded color palette for variety
  color: 'indigo' | 'orange' | 'emerald' | 'rose' | 'blue' | 'slate' | 'violet' | 'cyan' | 'amber' | 'teal';
  themeGradient: string;
  // Expanded icon options for different Surah themes
  iconName: 'Users' | 'Sun' | 'Star' | 'Flame' | 'Zap' | 'Shield' | 'Moon' | 'Cloud' | 'Book' | 'Heart' | 'Feather' | 'Mountain';
  totalVerses: number;
  levels: Level[];
}

export const getAudioUrl = (surah: number, ayah: number) => {
  const padSurah = surah.toString().padStart(3, '0');
  const padAyah = ayah.toString().padStart(3, '0');
  return `https://everyayah.com/data/Alafasy_128kbps/${padSurah}${padAyah}.mp3`;
};

export const SURAHS: Surah[] = [
  // --- 1. SURAH AN-NAS (114) ---
  {
    id: 'nas',
    number: 114,
    title: 'An-Nas',
    meaning: 'The Mankind',
    story: 'This Surah is the final shield. It protects us from internal evils—the whispers that come from devils and bad people. While Al-Falaq protects from outside dangers, An-Nas protects your heart and mind.',
    color: 'indigo',
    themeGradient: 'from-indigo-500 to-purple-700',
    iconName: 'Users',
    totalVerses: 6,
    levels: [
      {
        id: '114-1',
        audio: getAudioUrl(114, 1),
        arabicFull: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ',
        translation: 'Say, "I seek refuge in the Lord of mankind,"',
        visual: 'people',
        lesson: 'Allah is the Rabb (Sustainer) of all humans.',
        words: [
          { id: 'n1-1', arabic: 'قُلْ', transliteration: 'Qul', meaning: 'Say' },
          { id: 'n1-2', arabic: 'أَعُوذُ', transliteration: 'A\'udhu', meaning: 'I seek refuge' },
          { id: 'n1-3', arabic: 'بِرَبِّ', transliteration: 'Bi-rabbi', meaning: 'In the Lord' },
          { id: 'n1-4', arabic: 'النَّاسِ', transliteration: 'An-nas', meaning: 'Of Mankind' }
        ],
        distractors: [{ id: 'd1', arabic: 'الْفَلَقِ', transliteration: 'Al-Falaq' }]
      },
      {
        id: '114-2',
        audio: getAudioUrl(114, 2),
        arabicFull: 'مَلِكِ النَّاسِ',
        translation: 'The King of mankind,',
        visual: 'king',
        lesson: 'He is the true King who has full authority over everyone.',
        words: [
          { id: 'n2-1', arabic: 'مَلِكِ', transliteration: 'Maliki', meaning: 'The King' },
          { id: 'n2-2', arabic: 'النَّاسِ', transliteration: 'An-nas', meaning: 'Of Mankind' }
        ],
        distractors: [{ id: 'd2', arabic: 'إِلَٰهِ', transliteration: 'Ilahi' }]
      },
      {
        id: '114-3',
        audio: getAudioUrl(114, 3),
        arabicFull: 'إِلَٰهِ النَّاسِ',
        translation: 'The God of mankind,',
        visual: 'oneness',
        lesson: 'He is the only One worthy of worship for all people.',
        words: [
          { id: 'n3-1', arabic: 'إِلَٰهِ', transliteration: 'Ilahi', meaning: 'The God' },
          { id: 'n3-2', arabic: 'النَّاسِ', transliteration: 'An-nas', meaning: 'Of Mankind' }
        ],
        distractors: [{ id: 'd3', arabic: 'شَرِّ', transliteration: 'Sharri' }]
      },
      {
        id: '114-4',
        audio: getAudioUrl(114, 4),
        arabicFull: 'مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ',
        translation: 'From the evil of the retreating whisperer,',
        visual: 'whisper',
        lesson: 'The devil whispers bad thoughts but runs away when you remember Allah.',
        words: [
          { id: 'n4-1', arabic: 'مِن', transliteration: 'Min', meaning: 'From' },
          { id: 'n4-2', arabic: 'شَرِّ', transliteration: 'Sharri', meaning: 'The evil' },
          { id: 'n4-3', arabic: 'الْوَسْوَاسِ', transliteration: 'Al-waswasi', meaning: 'Of the whisperer' },
          { id: 'n4-4', arabic: 'الْخَنَّاسِ', transliteration: 'Al-khannas', meaning: 'The retreating one' }
        ],
        distractors: [{ id: 'd4', arabic: 'صُدُورِ', transliteration: 'Suduri' }]
      },
      {
        id: '114-5',
        audio: getAudioUrl(114, 5),
        arabicFull: 'الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ',
        translation: 'Who whispers [evil] into the breasts of mankind,',
        visual: 'default',
        lesson: 'These whispers attack the heart (sadr), the center of our feelings.',
        words: [
          { id: 'n5-1', arabic: 'الَّذِي', transliteration: 'Alladhi', meaning: 'The one who' },
          { id: 'n5-2', arabic: 'يُوَسْوِسُ', transliteration: 'Yuwaswisu', meaning: 'Whispers' },
          { id: 'n5-3', arabic: 'فِي', transliteration: 'Fi', meaning: 'Into' },
          { id: 'n5-4', arabic: 'صُدُورِ', transliteration: 'Suduri', meaning: 'The breasts/hearts' },
          { id: 'n5-5', arabic: 'النَّاسِ', transliteration: 'An-nas', meaning: 'Of Mankind' }
        ],
        distractors: [{ id: 'd5', arabic: 'الْجِنَّةِ', transliteration: 'Al-jinnati' }]
      },
      {
        id: '114-6',
        audio: getAudioUrl(114, 6),
        arabicFull: 'مِنَ الْجِنَّةِ وَالنَّاسِ',
        translation: 'From among the jinn and mankind."',
        visual: 'jinn',
        lesson: 'Evil whispers can come from invisible Jinn or bad humans.',
        words: [
          { id: 'n6-1', arabic: 'مِنَ', transliteration: 'Mina', meaning: 'From' },
          { id: 'n6-2', arabic: 'الْجِنَّةِ', transliteration: 'Al-jinnati', meaning: 'The Jinn' },
          { id: 'n6-3', arabic: 'وَ', transliteration: 'Wa', meaning: 'And' },
          { id: 'n6-4', arabic: 'النَّاسِ', transliteration: 'An-nas', meaning: 'Mankind' }
        ],
        distractors: [{ id: 'd6', arabic: 'صُدُورِ', transliteration: 'Suduri' }]
      }
    ]
  },

  // --- 2. SURAH AL-FALAQ (113) ---
  {
    id: 'falaq',
    number: 113,
    title: 'Al-Falaq',
    meaning: 'The Daybreak',
    story: 'This Surah teaches us that Allah is the Master of Daybreak. Just as He splits the darkness of night to bring the morning, He can split your problems and protect you from external dangers like magic, jealousy, and darkness.',
    color: 'orange',
    themeGradient: 'from-orange-400 to-red-600',
    iconName: 'Sun',
    totalVerses: 5,
    levels: [
      {
        id: '113-1',
        audio: getAudioUrl(113, 1),
        arabicFull: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ',
        translation: 'Say, "I seek refuge in the Lord of daybreak"',
        visual: 'dawn',
        lesson: 'We seek safety with the One who controls the sunrise.',
        words: [
          { id: 'f1-1', arabic: 'قُلْ', transliteration: 'Qul', meaning: 'Say' },
          { id: 'f1-2', arabic: 'أَعُوذُ', transliteration: 'A\'udhu', meaning: 'I seek refuge' },
          { id: 'f1-3', arabic: 'بِرَبِّ', transliteration: 'Bi-rabbi', meaning: 'In the Lord' },
          { id: 'f1-4', arabic: 'الْفَلَقِ', transliteration: 'Al-Falaq', meaning: 'Of Daybreak' }
        ],
        distractors: [{ id: 'fd1', arabic: 'غَاسِقٍ', transliteration: 'Ghasiqin' }]
      },
      {
        id: '113-2',
        audio: getAudioUrl(113, 2),
        arabicFull: 'مِن شَرِّ مَا خَلَقَ',
        translation: 'From the evil of that which He created',
        visual: 'evil',
        lesson: 'Protection from harmful animals, people, or anything created that causes harm.',
        words: [
          { id: 'f2-1', arabic: 'مِن', transliteration: 'Min', meaning: 'From' },
          { id: 'f2-2', arabic: 'شَرِّ', transliteration: 'Sharri', meaning: 'The evil' },
          { id: 'f2-3', arabic: 'مَا', transliteration: 'Ma', meaning: 'Of what' },
          { id: 'f2-4', arabic: 'خَلَقَ', transliteration: 'Khalaqa', meaning: 'He created' }
        ],
        distractors: [{ id: 'fd2', arabic: 'وَقَبَ', transliteration: 'Waqaba' }]
      },
      {
        id: '113-3',
        audio: getAudioUrl(113, 3),
        arabicFull: 'وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ',
        translation: 'And from the evil of darkness when it settles',
        visual: 'night',
        lesson: 'Nighttime is when many dangers (like thieves or animals) are hidden.',
        words: [
          { id: 'f3-1', arabic: 'وَ', transliteration: 'Wa', meaning: 'And' },
          { id: 'f3-2', arabic: 'مِن', transliteration: 'Min', meaning: 'From' },
          { id: 'f3-3', arabic: 'شَرِّ', transliteration: 'Sharri', meaning: 'The evil' },
          { id: 'f3-4', arabic: 'غَاسِقٍ', transliteration: 'Ghasiqin', meaning: 'Of darkness' },
          { id: 'f3-5', arabic: 'إِذَا', transliteration: 'Idha', meaning: 'When' },
          { id: 'f3-6', arabic: 'وَقَبَ', transliteration: 'Waqaba', meaning: 'It settles' }
        ],
        distractors: [{ id: 'fd3', arabic: 'النَّفَّاثَاتِ', transliteration: 'An-naffathati' }]
      },
      {
        id: '113-4',
        audio: getAudioUrl(113, 4),
        arabicFull: 'وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ',
        translation: 'And from the evil of the blowers in knots',
        visual: 'knot',
        lesson: 'Protection against magic and sorcery (those who blow on knots).',
        words: [
          { id: 'f4-1', arabic: 'وَ', transliteration: 'Wa', meaning: 'And' },
          { id: 'f4-2', arabic: 'مِن', transliteration: 'Min', meaning: 'From' },
          { id: 'f4-3', arabic: 'شَرِّ', transliteration: 'Sharri', meaning: 'The evil' },
          { id: 'f4-4', arabic: 'النَّفَّاثَاتِ', transliteration: 'An-naffathati', meaning: 'Of the blowers' },
          { id: 'f4-5', arabic: 'فِي', transliteration: 'Fi', meaning: 'In' },
          { id: 'f4-6', arabic: 'الْعُقَدِ', transliteration: 'Al-\'uqad', meaning: 'The knots' }
        ],
        distractors: [{ id: 'fd4', arabic: 'حَاسِدٍ', transliteration: 'Hasidin' }]
      },
      {
        id: '113-5',
        audio: getAudioUrl(113, 5),
        arabicFull: 'وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ',
        translation: 'And from the evil of an envier when he envies."',
        visual: 'envy',
        lesson: 'Jealousy (Hasad) is dangerous. We seek Allah\'s protection from jealous eyes.',
        words: [
          { id: 'f5-1', arabic: 'وَ', transliteration: 'Wa', meaning: 'And' },
          { id: 'f5-2', arabic: 'مِن', transliteration: 'Min', meaning: 'From' },
          { id: 'f5-3', arabic: 'شَرِّ', transliteration: 'Sharri', meaning: 'The evil' },
          { id: 'f5-4', arabic: 'حَاسِدٍ', transliteration: 'Hasidin', meaning: 'Of an envier' },
          { id: 'f5-5', arabic: 'إِذَا', transliteration: 'Idha', meaning: 'When' },
          { id: 'f5-6', arabic: 'حَسَدَ', transliteration: 'Hasada', meaning: 'He envies' }
        ],
        distractors: [{ id: 'fd5', arabic: 'خَلَقَ', transliteration: 'Khalaqa' }]
      }
    ]
  },

  // --- 3. SURAH AL-IKHLAS (112) ---
  {
    id: 'ikhlas',
    number: 112,
    title: 'Al-Ikhlas',
    meaning: 'The Sincerity',
    story: 'This Surah is equal to one-third of the Quran. It defines who Allah is in the purest form: He is One, He needs no one, He has no family, and there is absolutely nothing like Him.',
    color: 'emerald',
    themeGradient: 'from-emerald-500 to-teal-700',
    iconName: 'Star',
    totalVerses: 4,
    levels: [
      {
        id: '112-1',
        audio: getAudioUrl(112, 1),
        arabicFull: 'قُلْ هُوَ اللَّهُ أَحَدٌ',
        translation: 'Say, "He is Allah, [who is] One,"',
        visual: 'oneness',
        lesson: 'Ahad means absolute Oneness. There is no second.',
        words: [
          { id: 'i1-1', arabic: 'قُلْ', transliteration: 'Qul', meaning: 'Say' },
          { id: 'i1-2', arabic: 'هُوَ', transliteration: 'Huwa', meaning: 'He is' },
          { id: 'i1-3', arabic: 'اللَّهُ', transliteration: 'Allahu', meaning: 'Allah' },
          { id: 'i1-4', arabic: 'أَحَدٌ', transliteration: 'Ahad', meaning: 'One' }
        ],
        distractors: [{ id: 'id1', arabic: 'الصَّمَدُ', transliteration: 'As-Samad' }]
      },
      {
        id: '112-2',
        audio: getAudioUrl(112, 2),
        arabicFull: 'اللَّهُ الصَّمَدُ',
        translation: 'Allah, the Eternal Refuge.',
        visual: 'default',
        lesson: 'As-Samad means the One who needs nothing, but everything needs Him.',
        words: [
          { id: 'i2-1', arabic: 'اللَّهُ', transliteration: 'Allahu', meaning: 'Allah' },
          { id: 'i2-2', arabic: 'الصَّمَدُ', transliteration: 'As-Samad', meaning: 'The Eternal Refuge' }
        ],
        distractors: [{ id: 'id2', arabic: 'كُفُوًا', transliteration: 'Kufuwan' }]
      },
      {
        id: '112-3',
        audio: getAudioUrl(112, 3),
        arabicFull: 'لَمْ يَلِدْ وَلَمْ يُولَدْ',
        translation: 'He neither begets nor is born,',
        visual: 'default',
        lesson: 'Allah has no parents and no children. He is eternal.',
        words: [
          { id: 'i3-1', arabic: 'لَمْ', transliteration: 'Lam', meaning: 'Did not' },
          { id: 'i3-2', arabic: 'يَلِدْ', transliteration: 'Yalid', meaning: 'Beget (give birth)' },
          { id: 'i3-3', arabic: 'وَ', transliteration: 'Wa', meaning: 'And' },
          { id: 'i3-4', arabic: 'لَمْ', transliteration: 'Lam', meaning: 'Did not' },
          { id: 'i3-5', arabic: 'يُولَدْ', transliteration: 'Yulad', meaning: 'Be born' }
        ],
        distractors: [{ id: 'id3', arabic: 'أَحَدٌ', transliteration: 'Ahad' }]
      },
      {
        id: '112-4',
        audio: getAudioUrl(112, 4),
        arabicFull: 'وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ',
        translation: 'Nor is there to Him any equivalent."',
        visual: 'oneness',
        lesson: 'There is nothing comparable to Him in the entire universe.',
        words: [
          { id: 'i4-1', arabic: 'وَ', transliteration: 'Wa', meaning: 'And' },
          { id: 'i4-2', arabic: 'لَمْ', transliteration: 'Lam', meaning: 'Not' },
          { id: 'i4-3', arabic: 'يَكُن', transliteration: 'Yakun', meaning: 'Is' },
          { id: 'i4-4', arabic: 'لَّهُ', transliteration: 'Lahu', meaning: 'For Him' },
          { id: 'i4-5', arabic: 'كُفُوًا', transliteration: 'Kufuwan', meaning: 'Equivalent' },
          { id: 'i4-6', arabic: 'أَحَدٌ', transliteration: 'Ahad', meaning: 'Anyone' }
        ],
        distractors: [{ id: 'id4', arabic: 'يُولَدْ', transliteration: 'Yulad' }]
      }
    ]
  },

  // --- 4. AL-MASAD (111) ---
  {
    id: 'masad',
    number: 111,
    title: 'Al-Masad',
    meaning: 'The Palm Fiber',
    story: 'A warning against arrogance and enmity toward the Truth. It specifically addresses Abu Lahab, who opposed the Prophet (SAW), showing that wealth and status cannot save a person from divine justice.',
    color: 'rose',
    themeGradient: 'from-rose-500 to-red-800',
    iconName: 'Flame',
    totalVerses: 5,
    levels: [
      {
        id: '111-1',
        audio: getAudioUrl(111, 1),
        arabicFull: 'تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ',
        translation: 'May the hands of Abu Lahab be ruined, and ruined is he.',
        visual: 'fire',
        lesson: 'Opposing the truth leads to ultimate loss.',
        words: [
          { id: 'm1-1', arabic: 'تَبَّتْ', transliteration: 'Tabbat', meaning: 'Ruined/Perish' },
          { id: 'm1-2', arabic: 'يَدَا', transliteration: 'Yada', meaning: 'The hands' },
          { id: 'm1-3', arabic: 'أَبِي لَهَبٍ', transliteration: 'Abi Lahab', meaning: 'Of Abu Lahab' },
          { id: 'm1-4', arabic: 'وَتَبَّ', transliteration: 'Wa-tab', meaning: 'And ruined is he' }
        ],
        distractors: [{ id: 'md1', arabic: 'مَا', transliteration: 'Ma' }]
      },
      {
        id: '111-2',
        audio: getAudioUrl(111, 2),
        arabicFull: 'مَا أَغْنَىٰ عَنْهُ مَالُهُ وَمَا كَسَبَ',
        translation: 'His wealth will not avail him or that which he gained.',
        visual: 'wealth',
        lesson: 'Money cannot buy safety from Allah.',
        words: [
          { id: 'm2-1', arabic: 'مَا', transliteration: 'Ma', meaning: 'Not' },
          { id: 'm2-2', arabic: 'أَغْنَىٰ', transliteration: 'Aghna', meaning: 'Avail/Help' },
          { id: 'm2-3', arabic: 'عَنْهُ', transliteration: 'Anhu', meaning: 'Him' },
          { id: 'm2-4', arabic: 'مَالُهُ', transliteration: 'Maluhu', meaning: 'His wealth' },
          { id: 'm2-5', arabic: 'وَمَا', transliteration: 'Wa-ma', meaning: 'And what' },
          { id: 'm2-6', arabic: 'كَسَبَ', transliteration: 'Kasaba', meaning: 'He earned' }
        ]
      },
      {
        id: '111-3',
        audio: getAudioUrl(111, 3),
        arabicFull: 'سَيَصْلَىٰ نَارًا ذَاتَ لَهَبٍ',
        translation: 'He will [enter to] burn in a Fire of [blazing] flame.',
        visual: 'fire',
        lesson: 'A specific punishment matching his name "Father of Flame".',
        words: [
          { id: 'm3-1', arabic: 'سَيَصْلَىٰ', transliteration: 'Sa-yasla', meaning: 'He will burn' },
          { id: 'm3-2', arabic: 'نَارًا', transliteration: 'Naran', meaning: 'In a Fire' },
          { id: 'm3-3', arabic: 'ذَاتَ', transliteration: 'Dhata', meaning: 'Of' },
          { id: 'm3-4', arabic: 'لَهَبٍ', transliteration: 'Lahab', meaning: 'Flame' }
        ]
      },
      {
        id: '111-4',
        audio: getAudioUrl(111, 4),
        arabicFull: 'وَامْرَأَتُهُ حَمَّالَةَ الْحَطَبِ',
        translation: 'And his wife [as well] - the carrier of firewood.',
        visual: 'wood',
        lesson: 'She aided in doing bad, so she shares the fate.',
        words: [
          { id: 'm4-1', arabic: 'وَ', transliteration: 'Wa', meaning: 'And' },
          { id: 'm4-2', arabic: 'امْرَأَتُهُ', transliteration: 'Imra-atuhu', meaning: 'His wife' },
          { id: 'm4-3', arabic: 'حَمَّالَةَ', transliteration: 'Hammalata', meaning: 'Carrier of' },
          { id: 'm4-4', arabic: 'الْحَطَبِ', transliteration: 'Al-hatab', meaning: 'The firewood' }
        ]
      },
      {
        id: '111-5',
        audio: getAudioUrl(111, 5),
        arabicFull: 'فِي جِيدِهَا حَبْلٌ مِّن مَّسَدٍ',
        translation: 'Around her neck is a rope of [twisted] fiber.',
        visual: 'rope',
        lesson: 'The symbol of her pride (necklace) becomes her punishment.',
        words: [
          { id: 'm5-1', arabic: 'فِي', transliteration: 'Fi', meaning: 'In' },
          { id: 'm5-2', arabic: 'جِيدِهَا', transliteration: 'Jidi-ha', meaning: 'Her neck' },
          { id: 'm5-3', arabic: 'حَبْلٌ', transliteration: 'Hablun', meaning: 'A rope' },
          { id: 'm5-4', arabic: 'مِّن', transliteration: 'Min', meaning: 'Of' },
          { id: 'm5-5', arabic: 'مَّسَدٍ', transliteration: 'Masad', meaning: 'Fiber' }
        ]
      }
    ]
  },

  // --- 5. AN-NASR (110) ---
  {
    id: 'nasr',
    number: 110,
    title: 'An-Nasr',
    meaning: 'The Divine Support',
    story: 'This Surah announced the coming victory of Islam and the conquest of Makkah. It teaches us that when we succeed, we should not be arrogant, but instead turn to Allah in gratitude and seek forgiveness.',
    color: 'blue',
    themeGradient: 'from-blue-400 to-indigo-600',
    iconName: 'Zap',
    totalVerses: 3,
    levels: [
      {
        id: '110-1',
        audio: getAudioUrl(110, 1),
        arabicFull: 'إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ',
        translation: 'When the victory of Allah has come and the conquest,',
        visual: 'victory',
        lesson: 'Victory comes only when Allah wills it.',
        words: [
          { id: 'ns1-1', arabic: 'إِذَا', transliteration: 'Idha', meaning: 'When' },
          { id: 'ns1-2', arabic: 'جَاءَ', transliteration: 'Jaa-a', meaning: 'Comes' },
          { id: 'ns1-3', arabic: 'نَصْرُ', transliteration: 'Nasru', meaning: 'Victory' },
          { id: 'ns1-4', arabic: 'اللَّهِ', transliteration: 'Allahi', meaning: 'Of Allah' },
          { id: 'ns1-5', arabic: 'وَالْفَتْحُ', transliteration: 'Wal-fath', meaning: 'And the conquest' }
        ]
      },
      {
        id: '110-2',
        audio: getAudioUrl(110, 2),
        arabicFull: 'وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا',
        translation: 'And you see the people entering into the religion of Allah in multitudes,',
        visual: 'people',
        lesson: 'People will accept the truth in large groups.',
        words: [
          { id: 'ns2-1', arabic: 'وَرَأَيْتَ', transliteration: 'Wa-ra-aita', meaning: 'And you see' },
          { id: 'ns2-2', arabic: 'النَّاسَ', transliteration: 'An-nasa', meaning: 'The people' },
          { id: 'ns2-3', arabic: 'يَدْخُلُونَ', transliteration: 'Yadkhuluna', meaning: 'Entering' },
          { id: 'ns2-4', arabic: 'فِي', transliteration: 'Fi', meaning: 'In' },
          { id: 'ns2-5', arabic: 'دِينِ', transliteration: 'Dini', meaning: 'Religion' },
          { id: 'ns2-6', arabic: 'اللَّهِ', transliteration: 'Allahi', meaning: 'Of Allah' },
          { id: 'ns2-7', arabic: 'أَفْوَاجًا', transliteration: 'Afwajan', meaning: 'In multitudes' }
        ]
      },
      {
        id: '110-3',
        audio: getAudioUrl(110, 3),
        arabicFull: 'فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ ۚ إِنَّهُ كَانَ تَوَّابًا',
        translation: 'Then exalt [Him] with praise of your Lord and ask forgiveness of Him. Indeed, He is ever Accepting of repentance.',
        visual: 'praise',
        lesson: 'The correct response to success is tasbih (praise) and istighfar (repentance).',
        words: [
          { id: 'ns3-1', arabic: 'فَسَبِّحْ', transliteration: 'Fa-sabbih', meaning: 'Then exalt' },
          { id: 'ns3-2', arabic: 'بِحَمْدِ', transliteration: 'Bi-hamdi', meaning: 'With praise' },
          { id: 'ns3-3', arabic: 'رَبِّكَ', transliteration: 'Rabbika', meaning: 'Of your Lord' },
          { id: 'ns3-4', arabic: 'وَاسْتَغْفِرْهُ', transliteration: 'Wastaghfirhu', meaning: 'And seek His forgiveness' },
          { id: 'ns3-5', arabic: 'إِنَّهُ', transliteration: 'Innahu', meaning: 'Indeed He' },
          { id: 'ns3-6', arabic: 'كَانَ', transliteration: 'Kana', meaning: 'Is' },
          { id: 'ns3-7', arabic: 'تَوَّابًا', transliteration: 'Tawwaba', meaning: 'Accepting of repentance' }
        ]
      }
    ]
  },

  // --- 6. AL-KAFIRUN (109) ---
  {
    id: 'kafirun',
    number: 109,
    title: 'Al-Kafirun',
    meaning: 'The Disbelievers',
    story: 'This Surah was a firm response to the disbelievers who asked the Prophet (SAW) to compromise on his faith. It establishes clear boundaries: we respect others, but we never compromise on the Oneness of Allah.',
    color: 'slate',
    themeGradient: 'from-slate-600 to-slate-800',
    iconName: 'Shield',
    totalVerses: 6,
    levels: [
      {
        id: '109-1',
        audio: getAudioUrl(109, 1),
        arabicFull: 'قُلْ يَا أَيُّهَا الْكَافِرُونَ',
        translation: 'Say, "O disbelievers,',
        visual: 'stop',
        lesson: 'A clear address to those who reject the truth.',
        words: [
          { id: 'k1-1', arabic: 'قُلْ', transliteration: 'Qul', meaning: 'Say' },
          { id: 'k1-2', arabic: 'يَا أَيُّهَا', transliteration: 'Ya-ayyuha', meaning: 'O you' },
          { id: 'k1-3', arabic: 'الْكَافِرُونَ', transliteration: 'Al-kafirun', meaning: 'The disbelievers' }
        ]
      },
      {
        id: '109-2',
        audio: getAudioUrl(109, 2),
        arabicFull: 'لَا أَعْبُدُ مَا تَعْبُدُونَ',
        translation: 'I do not worship what you worship.',
        visual: 'worship',
        lesson: 'Total rejection of false gods.',
        words: [
          { id: 'k2-1', arabic: 'لَا', transliteration: 'La', meaning: 'No / I do not' },
          { id: 'k2-2', arabic: 'أَعْبُدُ', transliteration: 'A\'budu', meaning: 'Worship' },
          { id: 'k2-3', arabic: 'مَا', transliteration: 'Ma', meaning: 'What' },
          { id: 'k2-4', arabic: 'تَعْبُدُونَ', transliteration: 'Ta\'budun', meaning: 'You worship' }
        ]
      },
      {
        id: '109-3',
        audio: getAudioUrl(109, 3),
        arabicFull: 'وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ',
        translation: 'Nor are you worshippers of what I worship.',
        visual: 'distinction',
        lesson: 'You cannot worship Allah while associating partners with Him.',
        words: [
          { id: 'k3-1', arabic: 'وَلَا', transliteration: 'Wa-la', meaning: 'And not' },
          { id: 'k3-2', arabic: 'أَنتُمْ', transliteration: 'Antum', meaning: 'You' },
          { id: 'k3-3', arabic: 'عَابِدُونَ', transliteration: 'Abiduna', meaning: 'Worshippers' },
          { id: 'k3-4', arabic: 'مَا', transliteration: 'Ma', meaning: 'Of what' },
          { id: 'k3-5', arabic: 'أَعْبُدُ', transliteration: 'A\'bud', meaning: 'I worship' }
        ]
      },
      {
        id: '109-4',
        audio: getAudioUrl(109, 4),
        arabicFull: 'وَلَا أَنَا عَابِدٌ مَّا عَبَدتُّمْ',
        translation: 'Nor will I be a worshipper of what you worship.',
        visual: 'firmness',
        lesson: 'I will never change my stance in the future.',
        words: [
          { id: 'k4-1', arabic: 'وَلَا', transliteration: 'Wa-la', meaning: 'And not' },
          { id: 'k4-2', arabic: 'أَنَا', transliteration: 'Ana', meaning: 'I' },
          { id: 'k4-3', arabic: 'عَابِدٌ', transliteration: 'Abidum', meaning: 'Worshipper' },
          { id: 'k4-4', arabic: 'مَّا', transliteration: 'Ma', meaning: 'Of what' },
          { id: 'k4-5', arabic: 'عَبَدتُّمْ', transliteration: 'Abadtum', meaning: 'You worshipped' }
        ]
      },
      {
        id: '109-5',
        audio: getAudioUrl(109, 5),
        arabicFull: 'وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ',
        translation: 'Nor will you be worshippers of what I worship.',
        visual: 'firmness',
        lesson: 'Repeated for emphasis and finality.',
        words: [
          { id: 'k5-1', arabic: 'وَلَا', transliteration: 'Wa-la', meaning: 'And not' },
          { id: 'k5-2', arabic: 'أَنتُمْ', transliteration: 'Antum', meaning: 'You' },
          { id: 'k5-3', arabic: 'عَابِدُونَ', transliteration: 'Abiduna', meaning: 'Worshippers' },
          { id: 'k5-4', arabic: 'مَا', transliteration: 'Ma', meaning: 'Of what' },
          { id: 'k5-5', arabic: 'أَعْبُدُ', transliteration: 'A\'bud', meaning: 'I worship' }
        ]
      },
      {
        id: '109-6',
        audio: getAudioUrl(109, 6),
        arabicFull: 'لَكُمْ دِينُكُمْ وَلِيَ دِينِ',
        translation: 'For you is your religion, and for me is my religion."',
        visual: 'separation',
        lesson: 'Complete detachment from false beliefs.',
        words: [
          { id: 'k6-1', arabic: 'لَكُمْ', transliteration: 'Lakum', meaning: 'For you' },
          { id: 'k6-2', arabic: 'دِينُكُمْ', transliteration: 'Dinukum', meaning: 'Your religion' },
          { id: 'k6-3', arabic: 'وَلِيَ', transliteration: 'Wa-liya', meaning: 'And for me' },
          { id: 'k6-4', arabic: 'دِينِ', transliteration: 'Din', meaning: 'My religion' }
        ]
      }
    ]
  },

// --- 7. AL-KAWTHAR (108) ---
  {
    id: 'kawthar',
    number: 108,
    title: 'Al-Kawthar',
    meaning: 'The Abundance',
    story: 'When the Prophet Muhammad (SAW) lost his infant sons, his enemies mocked him, saying his lineage was "cut off". Allah revealed this Surah to comfort him, promising him "Al-Kawthar" (a river of unimaginable abundance in Paradise) and declaring that it is his enemies who will actually be forgotten.',
    color: 'emerald',
    themeGradient: 'from-teal-400 to-emerald-600',
    iconName: 'Star', // Using Star to represent the heavenly gift
    totalVerses: 3,
    levels: [
      {
        id: '108-1',
        audio: getAudioUrl(108, 1),
        arabicFull: 'إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ',
        translation: 'Indeed, We have granted you, [O Muhammad], al-Kawthar.',
        visual: 'river',
        lesson: 'Al-Kawthar means ultimate abundance, including a special river in Jannah given to the Prophet.',
        words: [
          { id: 'kw1-1', arabic: 'إِنَّا', transliteration: 'Inna', meaning: 'Indeed, We' },
          { id: 'kw1-2', arabic: 'أَعْطَيْنَاكَ', transliteration: 'A\'tainaka', meaning: 'Have given you' },
          { id: 'kw1-3', arabic: 'الْكَوْثَرَ', transliteration: 'Al-Kawthar', meaning: 'The Abundance' }
        ],
        distractors: [{ id: 'kwd1', arabic: 'الْأَبْتَرُ', transliteration: 'Al-abtar' }]
      },
      {
        id: '108-2',
        audio: getAudioUrl(108, 2),
        arabicFull: 'فَصَلِّ لِرَبِّكَ وَانْحَرْ',
        translation: 'So pray to your Lord and sacrifice [to Him alone].',
        visual: 'prayer',
        lesson: 'The best way to show gratitude for Allah\'s immense blessings is through prayer and charity/sacrifice.',
        words: [
          { id: 'kw2-1', arabic: 'فَصَلِّ', transliteration: 'Fa-salli', meaning: 'So pray' },
          { id: 'kw2-2', arabic: 'لِرَبِّكَ', transliteration: 'Li-rabbika', meaning: 'To your Lord' },
          { id: 'kw2-3', arabic: 'وَانْحَرْ', transliteration: 'Wanhar', meaning: 'And sacrifice' }
        ],
        distractors: [{ id: 'kwd2', arabic: 'شَانِئَكَ', transliteration: 'Shani\'aka' }]
      },
      {
        id: '108-3',
        audio: getAudioUrl(108, 3),
        arabicFull: 'إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ',
        translation: 'Indeed, your enemy is the one cut off.',
        visual: 'protection',
        lesson: 'Those who hate the truth will be forgotten, while the legacy of the Prophet lives on forever.',
        words: [
          { id: 'kw3-1', arabic: 'إِنَّ', transliteration: 'Inna', meaning: 'Indeed' },
          { id: 'kw3-2', arabic: 'شَانِئَكَ', transliteration: 'Shani\'aka', meaning: 'Your enemy' },
          { id: 'kw3-3', arabic: 'هُوَ', transliteration: 'Huwa', meaning: 'He is' },
          { id: 'kw3-4', arabic: 'الْأَبْتَرُ', transliteration: 'Al-abtar', meaning: 'The cut off' }
        ],
        distractors: [{ id: 'kwd3', arabic: 'الْكَوْثَرَ', transliteration: 'Al-Kawthar' }]
      }
    ]
  },

  // --- 8. AL-MA'UN (107) ---
  {
    id: 'maun',
    number: 107,
    title: 'Al-Ma\'un',
    meaning: 'The Small Kindnesses',
    story: 'This Surah is a powerful warning against hypocrisy. It describes people who pray just to show off to others, but behind closed doors, they mistreat orphans, ignore the hungry, and refuse to help their neighbors with even the smallest, simplest items (like a cup of sugar or a tool). True faith must show in how you treat people.',
    color: 'indigo',
    themeGradient: 'from-indigo-600 to-slate-700',
    iconName: 'Users',
    totalVerses: 7,
    levels: [
      {
        id: '107-1',
        audio: getAudioUrl(107, 1),
        arabicFull: 'أَرَأَيْتَ الَّذِي يُكَذِّبُ بِالدِّينِ',
        translation: 'Have you seen the one who denies the Recompense?',
        visual: 'question',
        lesson: 'Denying the Day of Judgment leads to bad character in this life.',
        words: [
          { id: 'ma1-1', arabic: 'أَرَأَيْتَ', transliteration: 'Ara\'ayta', meaning: 'Have you seen' },
          { id: 'ma1-2', arabic: 'الَّذِي', transliteration: 'Alladhi', meaning: 'The one who' },
          { id: 'ma1-3', arabic: 'يُكَذِّبُ', transliteration: 'Yukadh-dhibu', meaning: 'Denies' },
          { id: 'ma1-4', arabic: 'بِالدِّينِ', transliteration: 'Bid-din', meaning: 'The Recompense (Judgment)' }
        ],
        distractors: [{ id: 'mad1', arabic: 'الْيَتِيمَ', transliteration: 'Al-yatim' }]
      },
      {
        id: '107-2',
        audio: getAudioUrl(107, 2),
        arabicFull: 'فَذَٰلِكَ الَّذِي يَدُعُّ الْيَتِيمَ',
        translation: 'For that is the one who drives away the orphan',
        visual: 'orphan',
        lesson: 'A true believer protects the vulnerable, not pushes them away.',
        words: [
          { id: 'ma2-1', arabic: 'فَذَٰلِكَ', transliteration: 'Fa-dhalika', meaning: 'For that is' },
          { id: 'ma2-2', arabic: 'الَّذِي', transliteration: 'Alladhi', meaning: 'The one who' },
          { id: 'ma2-3', arabic: 'يَدُعُّ', transliteration: 'Yadu\'u', meaning: 'Drives away' },
          { id: 'ma2-4', arabic: 'الْيَتِيمَ', transliteration: 'Al-yatim', meaning: 'The orphan' }
        ],
        distractors: [{ id: 'mad2', arabic: 'الْمِسْكِينِ', transliteration: 'Al-miskin' }]
      },
      {
        id: '107-3',
        audio: getAudioUrl(107, 3),
        arabicFull: 'وَلَا يَحُضُّ عَلَىٰ طَعَامِ الْمِسْكِينِ',
        translation: 'And does not encourage the feeding of the poor.',
        visual: 'food',
        lesson: 'It is not enough to just not harm others; we must actively help those in need.',
        words: [
          { id: 'ma3-1', arabic: 'وَلَا', transliteration: 'Wa-la', meaning: 'And does not' },
          { id: 'ma3-2', arabic: 'يَحُضُّ', transliteration: 'Yahuddu', meaning: 'Encourage' },
          { id: 'ma3-3', arabic: 'عَلَىٰ', transliteration: 'Ala', meaning: 'On / To' },
          { id: 'ma3-4', arabic: 'طَعَامِ', transliteration: 'Ta\'ami', meaning: 'Feeding / Food' },
          { id: 'ma3-5', arabic: 'الْمِسْكِينِ', transliteration: 'Al-miskin', meaning: 'The poor' }
        ],
        distractors: [{ id: 'mad3', arabic: 'الْمَاعُونَ', transliteration: 'Al-ma\'un' }]
      },
      {
        id: '107-4',
        audio: getAudioUrl(107, 4),
        arabicFull: 'فَوَيْلٌ لِّلْمُصَلِّينَ',
        translation: 'So woe to those who pray',
        visual: 'prayer',
        lesson: 'Prayer alone is not enough if the heart is not in it.',
        words: [
          { id: 'ma4-1', arabic: 'فَوَيْلٌ', transliteration: 'Fa-waylun', meaning: 'So woe / destruction' },
          { id: 'ma4-2', arabic: 'لِّلْمُصَلِّينَ', transliteration: 'Lil-musallin', meaning: 'To those who pray' }
        ],
        distractors: [{ id: 'mad4', arabic: 'سَاهُونَ', transliteration: 'Sahun' }]
      },
      {
        id: '107-5',
        audio: getAudioUrl(107, 5),
        arabicFull: 'الَّذِينَ هُمْ عَن صَلَاتِهِمْ سَاهُونَ',
        translation: '[But] who are heedless of their prayer -',
        visual: 'distraction',
        lesson: 'This refers to those who delay, neglect, or pray without focus.',
        words: [
          { id: 'ma5-1', arabic: 'الَّذِينَ', transliteration: 'Alladhina', meaning: 'Those who' },
          { id: 'ma5-2', arabic: 'هُمْ', transliteration: 'Hum', meaning: 'They' },
          { id: 'ma5-3', arabic: 'عَن', transliteration: 'An', meaning: 'Of / About' },
          { id: 'ma5-4', arabic: 'صَلَاتِهِمْ', transliteration: 'Salatihim', meaning: 'Their prayer' },
          { id: 'ma5-5', arabic: 'سَاهُونَ', transliteration: 'Sahun', meaning: 'Are heedless/neglectful' }
        ],
        distractors: [{ id: 'mad5', arabic: 'يُرَاءُونَ', transliteration: 'Yura\'un' }]
      },
      {
        id: '107-6',
        audio: getAudioUrl(107, 6),
        arabicFull: 'الَّذِينَ هُمْ يُرَاءُونَ',
        translation: 'Those who make show [of their deeds]',
        visual: 'show_off',
        lesson: 'Riya (showing off) ruins good deeds. We must do good only for Allah.',
        words: [
          { id: 'ma6-1', arabic: 'الَّذِينَ', transliteration: 'Alladhina', meaning: 'Those who' },
          { id: 'ma6-2', arabic: 'هُمْ', transliteration: 'Hum', meaning: 'They' },
          { id: 'ma6-3', arabic: 'يُرَاءُونَ', transliteration: 'Yura\'un', meaning: 'Make a show (to be seen)' }
        ],
        distractors: [{ id: 'mad6', arabic: 'الْمَاعُونَ', transliteration: 'Al-ma\'un' }]
      },
      {
        id: '107-7',
        audio: getAudioUrl(107, 7),
        arabicFull: 'وَيَمْنَعُونَ الْمَاعُونَ',
        translation: 'And withhold [simple] assistance.',
        visual: 'withhold',
        lesson: 'Refusing to lend simple household items to a neighbor is a sign of a hard heart.',
        words: [
          { id: 'ma7-1', arabic: 'وَيَمْنَعُونَ', transliteration: 'Wa-yamna\'un', meaning: 'And they withhold/deny' },
          { id: 'ma7-2', arabic: 'الْمَاعُونَ', transliteration: 'Al-ma\'un', meaning: 'Simple assistance/necessities' }
        ],
        distractors: [{ id: 'mad7', arabic: 'بِالدِّينِ', transliteration: 'Bid-din' }]
      }
    ]
  },

  // --- 9. QURAYSH (106) ---
  {
    id: 'quraysh',
    number: 106,
    title: 'Quraysh',
    meaning: 'The Tribe of Quraysh',
    story: 'Allah reminds the Quraysh tribe of the great blessings He gave them: safe trade routes in winter and summer, food to cure their hunger, and security from fear. In return, they are simply asked to worship the Lord of the Kaaba.',
    color: 'orange',
    themeGradient: 'from-orange-500 to-amber-700',
    iconName: 'Sun',
    totalVerses: 4,
    levels: [
      {
        id: '106-1',
        audio: getAudioUrl(106, 1),
        arabicFull: 'لِإِيلَافِ قُرَيْشٍ',
        translation: 'For the accustomed security of the Quraysh -',
        visual: 'tribe',
        lesson: 'Allah provided the Quraysh with respect and safety among other tribes.',
        words: [
          { id: 'q1-1', arabic: 'لِإِيلَافِ', transliteration: 'Li-ilafi', meaning: 'For the accustomed security' },
          { id: 'q1-2', arabic: 'قُرَيْشٍ', transliteration: 'Quraysh', meaning: 'Of Quraysh' }
        ],
        distractors: [{ id: 'qd1', arabic: 'رِحْلَةَ', transliteration: 'Rihlata' }]
      },
      {
        id: '106-2',
        audio: getAudioUrl(106, 2),
        arabicFull: 'إِيلَافِهِمْ رِحْلَةَ الشِّتَاءِ وَالصَّيْفِ',
        translation: 'Their accustomed security [in] the caravan of winter and summer -',
        visual: 'caravan',
        lesson: 'They had safe trading journeys to Yemen in winter and Syria in summer.',
        words: [
          { id: 'q2-1', arabic: 'إِيلَافِهِمْ', transliteration: 'Ilafihim', meaning: 'Their accustomed security' },
          { id: 'q2-2', arabic: 'رِحْلَةَ', transliteration: 'Rihlata', meaning: 'The journey/caravan' },
          { id: 'q2-3', arabic: 'الشِّتَاءِ', transliteration: 'Ash-shita-i', meaning: 'Of winter' },
          { id: 'q2-4', arabic: 'وَ', transliteration: 'Wa', meaning: 'And' },
          { id: 'q2-5', arabic: 'الصَّيْفِ', transliteration: 'As-sayf', meaning: 'Summer' }
        ],
        distractors: [{ id: 'qd2', arabic: 'الْبَيْتِ', transliteration: 'Al-bayt' }]
      },
      {
        id: '106-3',
        audio: getAudioUrl(106, 3),
        arabicFull: 'فَلْيَعْبُدُوا رَبَّ هَٰذَا الْبَيْتِ',
        translation: 'Let them worship the Lord of this House,',
        visual: 'kaaba',
        lesson: 'Because of these blessings, they must worship Allah alone, the Lord of the Kaaba.',
        words: [
          { id: 'q3-1', arabic: 'فَلْيَعْبُدُوا', transliteration: 'Fal-ya\'budu', meaning: 'So let them worship' },
          { id: 'q3-2', arabic: 'رَبَّ', transliteration: 'Rabba', meaning: 'The Lord' },
          { id: 'q3-3', arabic: 'هَٰذَا', transliteration: 'Hadha', meaning: 'Of this' },
          { id: 'q3-4', arabic: 'الْبَيْتِ', transliteration: 'Al-bayt', meaning: 'House (Kaaba)' }
        ],
        distractors: [{ id: 'qd3', arabic: 'جُوعٍ', transliteration: 'Ju\'in' }]
      },
      {
        id: '106-4',
        audio: getAudioUrl(106, 4),
        arabicFull: 'الَّذِي أَطْعَمَهُم مِّن جُوعٍ وَآمَنَهُم مِّنْ خَوْفٍ',
        translation: 'Who has fed them, [saving them] from hunger and made them safe, [saving them] from fear.',
        visual: 'food_safety',
        lesson: 'Food and safety are two of the greatest blessings in life.',
        words: [
          { id: 'q4-1', arabic: 'الَّذِي', transliteration: 'Alladhi', meaning: 'Who' },
          { id: 'q4-2', arabic: 'أَطْعَمَهُم', transliteration: 'At\'amahum', meaning: 'Fed them' },
          { id: 'q4-3', arabic: 'مِّن', transliteration: 'Min', meaning: 'From' },
          { id: 'q4-4', arabic: 'جُوعٍ', transliteration: 'Ju\'in', meaning: 'Hunger' },
          { id: 'q4-5', arabic: 'وَ', transliteration: 'Wa', meaning: 'And' },
          { id: 'q4-6', arabic: 'آمَنَهُم', transliteration: 'Amanahum', meaning: 'Made them safe' },
          { id: 'q4-7', arabic: 'مِّنْ', transliteration: 'Min', meaning: 'From' },
          { id: 'q4-8', arabic: 'خَوْفٍ', transliteration: 'Khawf', meaning: 'Fear' }
        ],
        distractors: [{ id: 'qd4', arabic: 'قُرَيْشٍ', transliteration: 'Quraysh' }]
      }
    ]
  },

  // --- 10. AL-FIL (105) ---
  {
    id: 'fil',
    number: 105,
    title: 'Al-Fil',
    meaning: 'The Elephant',
    story: 'This Surah recounts the famous historical event in the year the Prophet (SAW) was born. An army led by Abraha brought war elephants to destroy the Kaaba. Allah protected His house by sending flocks of birds that dropped stones of baked clay, destroying the massive army.',
    color: 'slate',
    themeGradient: 'from-slate-500 to-gray-800',
    iconName: 'Shield',
    totalVerses: 5,
    levels: [
      {
        id: '105-1',
        audio: getAudioUrl(105, 1),
        arabicFull: 'أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ',
        translation: 'Have you not considered, [O Muhammad], how your Lord dealt with the companions of the elephant?',
        visual: 'elephant',
        lesson: 'A reminder of Allah\'s ultimate power over the strongest armies.',
        words: [
          { id: 'fl1-1', arabic: 'أَلَمْ', transliteration: 'A-lam', meaning: 'Did not' },
          { id: 'fl1-2', arabic: 'تَرَ', transliteration: 'Tara', meaning: 'You see/consider' },
          { id: 'fl1-3', arabic: 'كَيْفَ', transliteration: 'Kayfa', meaning: 'How' },
          { id: 'fl1-4', arabic: 'فَعَلَ', transliteration: 'Fa\'ala', meaning: 'Dealt / Did' },
          { id: 'fl1-5', arabic: 'رَبُّكَ', transliteration: 'Rabbuka', meaning: 'Your Lord' },
          { id: 'fl1-6', arabic: 'بِأَصْحَابِ', transliteration: 'Bi-ashabi', meaning: 'With the companions' },
          { id: 'fl1-7', arabic: 'الْفِيلِ', transliteration: 'Al-fil', meaning: 'Of the elephant' }
        ]
      },
      {
        id: '105-2',
        audio: getAudioUrl(105, 2),
        arabicFull: 'أَلَمْ يَجْعَلْ كَيْدَهُمْ فِي تَضْلِيلٍ',
        translation: 'Did He not make their plan into ruin?',
        visual: 'ruin',
        lesson: 'No matter how grand an evil plot is, Allah can easily make it fail.',
        words: [
          { id: 'fl2-1', arabic: 'أَلَمْ', transliteration: 'A-lam', meaning: 'Did not' },
          { id: 'fl2-2', arabic: 'يَجْعَلْ', transliteration: 'Yaj\'al', meaning: 'He make' },
          { id: 'fl2-3', arabic: 'كَيْدَهُمْ', transliteration: 'Kaydahum', meaning: 'Their plan/plot' },
          { id: 'fl2-4', arabic: 'فِي', transliteration: 'Fi', meaning: 'In' },
          { id: 'fl2-5', arabic: 'تَضْلِيلٍ', transliteration: 'Tadlil', meaning: 'Ruin/Astray' }
        ]
      },
      {
        id: '105-3',
        audio: getAudioUrl(105, 3),
        arabicFull: 'وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ',
        translation: 'And He sent against them birds in flocks,',
        visual: 'birds',
        lesson: 'Allah used small, seemingly weak creatures (birds) to destroy giant elephants.',
        words: [
          { id: 'fl3-1', arabic: 'وَ', transliteration: 'Wa', meaning: 'And' },
          { id: 'fl3-2', arabic: 'أَرْسَلَ', transliteration: 'Arsala', meaning: 'He sent' },
          { id: 'fl3-3', arabic: 'عَلَيْهِمْ', transliteration: 'Alayhim', meaning: 'Against them' },
          { id: 'fl3-4', arabic: 'طَيْرًا', transliteration: 'Tayran', meaning: 'Birds' },
          { id: 'fl3-5', arabic: 'أَبَابِيلَ', transliteration: 'Ababil', meaning: 'In flocks' }
        ],
        distractors: [{ id: 'fld3', arabic: 'سِجِّيلٍ', transliteration: 'Sijjil' }]
      },
      {
        id: '105-4',
        audio: getAudioUrl(105, 4),
        arabicFull: 'تَرْمِيهِم بِحِجَارَةٍ مِّن سِجِّيلٍ',
        translation: 'Striking them with stones of hard clay,',
        visual: 'stones',
        lesson: 'The divine punishment was precise and inescapable.',
        words: [
          { id: 'fl4-1', arabic: 'تَرْمِيهِم', transliteration: 'Tarmihim', meaning: 'Striking them' },
          { id: 'fl4-2', arabic: 'بِحِجَارَةٍ', transliteration: 'Bi-hijaratin', meaning: 'With stones' },
          { id: 'fl4-3', arabic: 'مِّن', transliteration: 'Min', meaning: 'Of' },
          { id: 'fl4-4', arabic: 'سِجِّيلٍ', transliteration: 'Sijjil', meaning: 'Hard baked clay' }
        ],
        distractors: [{ id: 'fld4', arabic: 'طَيْرًا', transliteration: 'Tayran' }]
      },
      {
        id: '105-5',
        audio: getAudioUrl(105, 5),
        arabicFull: 'فَجَعَلَهُمْ كَعَصْفٍ مَّأْكُولٍ',
        translation: 'And He made them like eaten stalk.',
        visual: 'destroyed',
        lesson: 'The massive army was left completely obliterated, like chewed-up leaves.',
        words: [
          { id: 'fl5-1', arabic: 'فَجَعَلَهُمْ', transliteration: 'Fa-ja\'alahum', meaning: 'And He made them' },
          { id: 'fl5-2', arabic: 'كَعَصْفٍ', transliteration: 'Ka-\'asfin', meaning: 'Like stalk' },
          { id: 'fl5-3', arabic: 'مَّأْكُولٍ', transliteration: 'Ma\'kul', meaning: 'Eaten/Chewed' }
        ],
        distractors: [{ id: 'fld5', arabic: 'تَضْلِيلٍ', transliteration: 'Tadlil' }]
      }
    ]
  },

  // --- 11. AL-HUMAZAH (104) ---
  {
    id: 'humazah',
    number: 104,
    title: 'Al-Humazah',
    meaning: 'The Traducer',
    story: 'A severe warning against those who mock people, gossip behind their backs, and hoard wealth thinking it makes them immortal. It paints a terrifying picture of the "Crushing Fire" that is aimed directly at arrogant hearts.',
    color: 'rose',
    themeGradient: 'from-rose-600 to-red-900',
    iconName: 'Flame',
    totalVerses: 9,
    levels: [
      {
        id: '104-1',
        audio: getAudioUrl(104, 1),
        arabicFull: 'وَيْلٌ لِّكُلِّ هُمَزَةٍ لُّمَزَةٍ',
        translation: 'Woe to every scorner and mocker',
        visual: 'gossip',
        lesson: 'Humazah is insulting with actions (eye-rolling, gestures), Lumazah is insulting with words (gossip, name-calling).',
        words: [
          { id: 'h1-1', arabic: 'وَيْلٌ', transliteration: 'Waylun', meaning: 'Woe / Destruction' },
          { id: 'h1-2', arabic: 'لِّكُلِّ', transliteration: 'Li-kulli', meaning: 'To every' },
          { id: 'h1-3', arabic: 'هُمَزَةٍ', transliteration: 'Humazah', meaning: 'Scorner / Slanderer' },
          { id: 'h1-4', arabic: 'لُّمَزَةٍ', transliteration: 'Lumazah', meaning: 'Mocker / Backbiter' }
        ]
      },
      {
        id: '104-2',
        audio: getAudioUrl(104, 2),
        arabicFull: 'الَّذِي جَمَعَ مَالًا وَعَدَّدَهُ',
        translation: 'Who collects wealth and [continuously] counts it.',
        visual: 'wealth',
        lesson: 'Hoarding and obsessing over money leads to arrogance and looking down on others.',
        words: [
          { id: 'h2-1', arabic: 'الَّذِي', transliteration: 'Alladhi', meaning: 'The one who' },
          { id: 'h2-2', arabic: 'جَمَعَ', transliteration: 'Jama\'a', meaning: 'Collects' },
          { id: 'h2-3', arabic: 'مَالًا', transliteration: 'Malan', meaning: 'Wealth' },
          { id: 'h2-4', arabic: 'وَعَدَّدَهُ', transliteration: 'Wa-\'addadah', meaning: 'And counts it' }
        ],
        distractors: [{ id: 'hd2', arabic: 'أَخْلَدَهُ', transliteration: 'Akhladah' }]
      },
      {
        id: '104-3',
        audio: getAudioUrl(104, 3),
        arabicFull: 'يَحْسَبُ أَنَّ مَالَهُ أَخْلَدَهُ',
        translation: 'He thinks that his wealth will make him immortal.',
        visual: 'immortal',
        lesson: 'No amount of money can buy a single extra second of life.',
        words: [
          { id: 'h3-1', arabic: 'يَحْسَبُ', transliteration: 'Yahsabu', meaning: 'He thinks' },
          { id: 'h3-2', arabic: 'أَنَّ', transliteration: 'Anna', meaning: 'That' },
          { id: 'h3-3', arabic: 'مَالَهُ', transliteration: 'Malahu', meaning: 'His wealth' },
          { id: 'h3-4', arabic: 'أَخْلَدَهُ', transliteration: 'Akhladah', meaning: 'Will make him immortal' }
        ]
      },
      {
        id: '104-4',
        audio: getAudioUrl(104, 4),
        arabicFull: 'كَلَّا ۖ لَيُنبَذَنَّ فِي الْحُطَمَةِ',
        translation: 'No! He will surely be thrown into the Crusher.',
        visual: 'fire',
        lesson: 'Al-Hutamah is a specific level of Hell that completely crushes whatever enters it.',
        words: [
          { id: 'h4-1', arabic: 'كَلَّا', transliteration: 'Kalla', meaning: 'No! (By no means)' },
          { id: 'h4-2', arabic: 'لَيُنبَذَنَّ', transliteration: 'La-yunbadhanna', meaning: 'He will surely be thrown' },
          { id: 'h4-3', arabic: 'فِي', transliteration: 'Fi', meaning: 'In' },
          { id: 'h4-4', arabic: 'الْحُطَمَةِ', transliteration: 'Al-hutamah', meaning: 'The Crusher' }
        ]
      },
      {
        id: '104-5',
        audio: getAudioUrl(104, 5),
        arabicFull: 'وَمَا أَدْرَاكَ مَا الْحُطَمَةُ',
        translation: 'And what can make you know what is the Crusher?',
        visual: 'question',
        lesson: 'This phrasing is used in the Quran to highlight the unimaginable severity of something.',
        words: [
          { id: 'h5-1', arabic: 'وَمَا', transliteration: 'Wa-ma', meaning: 'And what' },
          { id: 'h5-2', arabic: 'أَدْرَاكَ', transliteration: 'Adraka', meaning: 'Can make you know' },
          { id: 'h5-3', arabic: 'مَا', transliteration: 'Ma', meaning: 'What is' },
          { id: 'h5-4', arabic: 'الْحُطَمَةُ', transliteration: 'Al-hutamah', meaning: 'The Crusher' }
        ]
      },
      {
        id: '104-6',
        audio: getAudioUrl(104, 6),
        arabicFull: 'نَارُ اللَّهِ الْمُوقَدَةُ',
        translation: 'It is the fire of Allah, [eternally] kindled,',
        visual: 'flame',
        lesson: 'It is not a normal fire; it is a fire specifically ignited by divine justice.',
        words: [
          { id: 'h6-1', arabic: 'نَارُ', transliteration: 'Naru', meaning: 'Fire' },
          { id: 'h6-2', arabic: 'اللَّهِ', transliteration: 'Allahi', meaning: 'Of Allah' },
          { id: 'h6-3', arabic: 'الْمُوقَدَةُ', transliteration: 'Al-muqadah', meaning: 'The kindled/ignited' }
        ]
      },
      {
        id: '104-7',
        audio: getAudioUrl(104, 7),
        arabicFull: 'الَّتِي تَطَّلِعُ عَلَى الْأَفْئِدَةِ',
        translation: 'Which mounts directed at the hearts.',
        visual: 'heart',
        lesson: 'Because the arrogance and mockery came from their corrupted hearts, the punishment targets the heart first.',
        words: [
          { id: 'h7-1', arabic: 'الَّتِي', transliteration: 'Allati', meaning: 'Which' },
          { id: 'h7-2', arabic: 'تَطَّلِعُ', transliteration: 'Tattali\'u', meaning: 'Mounts / leaps up' },
          { id: 'h7-3', arabic: 'عَلَى', transliteration: 'Ala', meaning: 'Over / At' },
          { id: 'h7-4', arabic: 'الْأَفْئِدَةِ', transliteration: 'Al-af\'idah', meaning: 'The hearts' }
        ]
      },
      {
        id: '104-8',
        audio: getAudioUrl(104, 8),
        arabicFull: 'إِنَّهَا عَلَيْهِم مُّؤْصَدَةٌ',
        translation: 'Indeed, Hellfire will be closed down upon them',
        visual: 'locked',
        lesson: 'There is no escape. Just as they closed their doors to the needy, the doors of Hell are closed on them.',
        words: [
          { id: 'h8-1', arabic: 'إِنَّهَا', transliteration: 'Innaha', meaning: 'Indeed it' },
          { id: 'h8-2', arabic: 'عَلَيْهِم', transliteration: 'Alayhim', meaning: 'Upon them' },
          { id: 'h8-3', arabic: 'مُّؤْصَدَةٌ', transliteration: 'Mu\'sadah', meaning: 'Closed down / vaulted' }
        ]
      },
      {
        id: '104-9',
        audio: getAudioUrl(104, 9),
        arabicFull: 'فِي عَمَدٍ مُّمَدَّدَةٍ',
        translation: 'In extended columns.',
        visual: 'columns',
        lesson: 'The doors are sealed shut with massive stretching pillars, finalizing their doom.',
        words: [
          { id: 'h9-1', arabic: 'فِي', transliteration: 'Fi', meaning: 'In' },
          { id: 'h9-2', arabic: 'عَمَدٍ', transliteration: 'Amadin', meaning: 'Columns / Pillars' },
          { id: 'h9-3', arabic: 'مُّمَدَّدَةٍ', transliteration: 'Mumaddadah', meaning: 'Extended / Outstretched' }
        ],
        distractors: [{ id: 'hd9', arabic: 'نَارُ', transliteration: 'Naru' }]
      }
    ]
  },

  // --- 12. AL-'ASR (103) ---
  {
    id: 'asr',
    number: 103,
    title: 'Al-\'Asr',
    meaning: 'The Time',
    story: 'One of the shortest, yet most profound Surahs in the Quran. Imam Shafi\'i said that if people only reflected deeply on this Surah, it would be enough for them. It declares that every human is losing the capital of time, except those who do four things.',
    color: 'indigo',
    themeGradient: 'from-blue-500 to-indigo-800',
    iconName: 'Sun',
    totalVerses: 3,
    levels: [
      {
        id: '103-1',
        audio: getAudioUrl(103, 1),
        arabicFull: 'وَالْعَصْرِ',
        translation: 'By time,',
        visual: 'time',
        lesson: 'Allah swears by Time, highlighting its immense value. Time is our only true currency.',
        words: [
          { id: 'as1-1', arabic: 'وَ', transliteration: 'Wa', meaning: 'By (oath)' },
          { id: 'as1-2', arabic: 'الْعَصْرِ', transliteration: 'Al-\'asr', meaning: 'The Time / Declining day' }
        ],
        distractors: [{ id: 'asd1', arabic: 'الْإِنسَانَ', transliteration: 'Al-insan' }]
      },
      {
        id: '103-2',
        audio: getAudioUrl(103, 2),
        arabicFull: 'إِنَّ الْإِنسَانَ لَفِي خُسْرٍ',
        translation: 'Indeed, mankind is in loss,',
        visual: 'loss',
        lesson: 'Every second that passes without being used for good is a permanent loss.',
        words: [
          { id: 'as2-1', arabic: 'إِنَّ', transliteration: 'Inna', meaning: 'Indeed' },
          { id: 'as2-2', arabic: 'الْإِنسَانَ', transliteration: 'Al-insana', meaning: 'The mankind' },
          { id: 'as2-3', arabic: 'لَفِي', transliteration: 'Lafi', meaning: 'Is surely in' },
          { id: 'as2-4', arabic: 'خُسْرٍ', transliteration: 'Khusr', meaning: 'Loss' }
        ],
        distractors: [{ id: 'asd2', arabic: 'آمَنُوا', transliteration: 'Amanu' }]
      },
      {
        id: '103-3',
        audio: getAudioUrl(103, 3),
        arabicFull: 'إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ',
        translation: 'Except for those who have believed and done righteous deeds and advised each other to truth and advised each other to patience.',
        visual: 'success',
        lesson: 'The 4 keys to success: 1. Faith, 2. Good actions, 3. Promoting truth, 4. Encouraging patience.',
        words: [
          { id: 'as3-1', arabic: 'إِلَّا', transliteration: 'Illa', meaning: 'Except' },
          { id: 'as3-2', arabic: 'الَّذِينَ', transliteration: 'Alladhina', meaning: 'Those who' },
          { id: 'as3-3', arabic: 'آمَنُوا', transliteration: 'Amanu', meaning: 'Have believed' },
          { id: 'as3-4', arabic: 'وَعَمِلُوا', transliteration: 'Wa-\'amilu', meaning: 'And done' },
          { id: 'as3-5', arabic: 'الصَّالِحَاتِ', transliteration: 'As-salihat', meaning: 'Righteous deeds' },
          { id: 'as3-6', arabic: 'وَتَوَاصَوْا', transliteration: 'Wa-tawasaw', meaning: 'And advised each other' },
          { id: 'as3-7', arabic: 'بِالْحَقِّ', transliteration: 'Bil-haqq', meaning: 'To truth' },
          { id: 'as3-8', arabic: 'وَتَوَاصَوْا', transliteration: 'Wa-tawasaw', meaning: 'And advised each other' },
          { id: 'as3-9', arabic: 'بِالصَّبْرِ', transliteration: 'Bis-sabr', meaning: 'To patience' }
        ]
      }
    ]
  },

  // --- 13. AT-TAKATHUR (102) ---
  {
    id: 'takathur',
    number: 102,
    title: 'At-Takathur',
    meaning: 'The Rivalry in Worldly Increase',
    story: 'A powerful reality check about the rat race of life. We compete for more money, better titles, and more followers, until suddenly we end up in our graves. It is a reminder that we will be questioned about how we spent these worldly blessings.',
    color: 'slate',
    themeGradient: 'from-slate-500 to-emerald-800',
    iconName: 'Users',
    totalVerses: 8,
    levels: [
      {
        id: '102-1',
        audio: getAudioUrl(102, 1),
        arabicFull: 'أَلْهَاكُمُ التَّكَاثُرُ',
        translation: 'Competition in [worldly] increase diverts you',
        visual: 'distraction',
        lesson: 'Constantly wanting "more" distracts us from the actual purpose of life.',
        words: [
          { id: 't1-1', arabic: 'أَلْهَاكُمُ', transliteration: 'Alhakumu', meaning: 'Diverts / distracts you' },
          { id: 't1-2', arabic: 'التَّكَاثُرُ', transliteration: 'At-takathur', meaning: 'Competition in increase' }
        ],
        distractors: [{ id: 'td1', arabic: 'الْمَقَابِرَ', transliteration: 'Al-maqabir' }]
      },
      {
        id: '102-2',
        audio: getAudioUrl(102, 2),
        arabicFull: 'حَتَّىٰ زُرْتُمُ الْمَقَابِرَ',
        translation: 'Until you visit the graveyards.',
        visual: 'grave',
        lesson: 'The delusion only breaks when we die. Notice it says "visit"—because the grave is not our final destination.',
        words: [
          { id: 't2-1', arabic: 'حَتَّىٰ', transliteration: 'Hatta', meaning: 'Until' },
          { id: 't2-2', arabic: 'زُرْتُمُ', transliteration: 'Zurtumu', meaning: 'You visit' },
          { id: 't2-3', arabic: 'الْمَقَابِرَ', transliteration: 'Al-maqabir', meaning: 'The graveyards' }
        ]
      },
      {
        id: '102-3',
        audio: getAudioUrl(102, 3),
        arabicFull: 'كَلَّا سَوْفَ تَعْلَمُونَ',
        translation: 'No! You are going to know.',
        visual: 'warning',
        lesson: 'A strict awakening: You will soon realize the reality of your actions.',
        words: [
          { id: 't3-1', arabic: 'كَلَّا', transliteration: 'Kalla', meaning: 'No!' },
          { id: 't3-2', arabic: 'سَوْفَ', transliteration: 'Sawfa', meaning: 'Soon' },
          { id: 't3-3', arabic: 'تَعْلَمُونَ', transliteration: 'Ta\'lamun', meaning: 'You will know' }
        ]
      },
      {
        id: '102-4',
        audio: getAudioUrl(102, 4),
        arabicFull: 'ثُمَّ كَلَّا سَوْفَ تَعْلَمُونَ',
        translation: 'Then no! You are going to know.',
        visual: 'warning',
        lesson: 'Repeated for extreme emphasis and terror.',
        words: [
          { id: 't4-1', arabic: 'ثُمَّ', transliteration: 'Thumma', meaning: 'Then' },
          { id: 't4-2', arabic: 'كَلَّا', transliteration: 'Kalla', meaning: 'No!' },
          { id: 't4-3', arabic: 'سَوْفَ', transliteration: 'Sawfa', meaning: 'Soon' },
          { id: 't4-4', arabic: 'تَعْلَمُونَ', transliteration: 'Ta\'lamun', meaning: 'You will know' }
        ]
      },
      {
        id: '102-5',
        audio: getAudioUrl(102, 5),
        arabicFull: 'كَلَّا لَوْ تَعْلَمُونَ عِلْمَ الْيَقِينِ',
        translation: 'No! If you only knew with knowledge of certainty...',
        visual: 'knowledge',
        lesson: 'If you truly internalized the reality of the next life, you would stop competing over this one.',
        words: [
          { id: 't5-1', arabic: 'كَلَّا', transliteration: 'Kalla', meaning: 'No!' },
          { id: 't5-2', arabic: 'لَوْ', transliteration: 'Law', meaning: 'If' },
          { id: 't5-3', arabic: 'تَعْلَمُونَ', transliteration: 'Ta\'lamun', meaning: 'You knew' },
          { id: 't5-4', arabic: 'عِلْمَ', transliteration: 'Ilma', meaning: 'Knowledge' },
          { id: 't5-5', arabic: 'الْيَقِينِ', transliteration: 'Al-yaqin', meaning: 'Of certainty' }
        ],
        distractors: [{ id: 'td5', arabic: 'الْجَحِيمَ', transliteration: 'Al-jahim' }]
      },
      {
        id: '102-6',
        audio: getAudioUrl(102, 6),
        arabicFull: 'لَتَرَوُنَّ الْجَحِيمَ',
        translation: 'You will surely see the Hellfire.',
        visual: 'fire',
        lesson: 'A definitive promise that the Hellfire will be seen by everyone.',
        words: [
          { id: 't6-1', arabic: 'لَتَرَوُنَّ', transliteration: 'La-tarawunna', meaning: 'You will surely see' },
          { id: 't6-2', arabic: 'الْجَحِيمَ', transliteration: 'Al-jahim', meaning: 'The Hellfire' }
        ]
      },
      {
        id: '102-7',
        audio: getAudioUrl(102, 7),
        arabicFull: 'ثُمَّ لَتَرَوُنَّهَا عَيْنَ الْيَقِينِ',
        translation: 'Then you will surely see it with the eye of certainty.',
        visual: 'vision',
        lesson: 'Knowledge of certainty becomes the eye of certainty when you see it directly.',
        words: [
          { id: 't7-1', arabic: 'ثُمَّ', transliteration: 'Thumma', meaning: 'Then' },
          { id: 't7-2', arabic: 'لَتَرَوُنَّهَا', transliteration: 'La-tarawunnaha', meaning: 'You will surely see it' },
          { id: 't7-3', arabic: 'عَيْنَ', transliteration: 'Ayna', meaning: 'Eye' },
          { id: 't7-4', arabic: 'الْيَقِينِ', transliteration: 'Al-yaqin', meaning: 'Of certainty' }
        ]
      },
      {
        id: '102-8',
        audio: getAudioUrl(102, 8),
        arabicFull: 'ثُمَّ لَتُسْأَلُنَّ يَوْمَئِذٍ عَنِ النَّعِيمِ',
        translation: 'Then you will surely be asked that Day about pleasure.',
        visual: 'questioning',
        lesson: 'Every blessing (health, wealth, food, free time) will be accounted for.',
        words: [
          { id: 't8-1', arabic: 'ثُمَّ', transliteration: 'Thumma', meaning: 'Then' },
          { id: 't8-2', arabic: 'لَتُسْأَلُنَّ', transliteration: 'La-tus\'alunna', meaning: 'You will surely be asked' },
          { id: 't8-3', arabic: 'يَوْمَئِذٍ', transliteration: 'Yawma\'idhin', meaning: 'That Day' },
          { id: 't8-4', arabic: 'عَنِ', transliteration: 'Ani', meaning: 'About' },
          { id: 't8-5', arabic: 'النَّعِيمِ', transliteration: 'An-na\'im', meaning: 'The pleasure / blessings' }
        ],
        distractors: [{ id: 'td8', arabic: 'الْيَقِينِ', transliteration: 'Al-yaqin' }]
      }
    ]
  },

// --- 101. AL-QARI'AH (Uses 'Mountain' & 'amber') ---
  {
    id: 'qariah',
    number: 101,
    title: 'Al-Qari\'ah',
    meaning: 'The Striking Calamity',
    story: 'A vivid depiction of the Day of Judgment, where people will be scattered like moths and massive mountains will become like fluffy, dyed wool. It reminds us that our deeds will be weighed on a heavy scale.',
    color: 'amber',
    themeGradient: 'from-amber-500 to-orange-700',
    iconName: 'Mountain',
    totalVerses: 11,
    levels: [
      {
        id: '101-1',
        audio: getAudioUrl(101, 1),
        arabicFull: 'الْقَارِعَةُ',
        translation: 'The Striking Calamity -',
        visual: 'calamity',
        lesson: 'Al-Qari\'ah is a name for the Day of Judgment because it will "strike" fear into the hearts of people.',
        words: [
          { id: 'qa1-1', arabic: 'الْقَارِعَةُ', transliteration: 'Al-qari\'ah', meaning: 'The Striking Calamity' }
        ],
        distractors: [{ id: 'qad1', arabic: 'الْحَاقَّةُ', transliteration: 'Al-haqqah' }]
      },
      {
        id: '101-2',
        audio: getAudioUrl(101, 2),
        arabicFull: 'مَا الْقَارِعَةُ',
        translation: 'What is the Striking Calamity?',
        visual: 'question',
        lesson: 'A rhetorical question to capture attention and emphasize the severity of this event.',
        words: [
          { id: 'qa2-1', arabic: 'مَا', transliteration: 'Ma', meaning: 'What is' },
          { id: 'qa2-2', arabic: 'الْقَارِعَةُ', transliteration: 'Al-qari\'ah', meaning: 'The Striking Calamity' }
        ]
      },
      {
        id: '101-3',
        audio: getAudioUrl(101, 3),
        arabicFull: 'وَمَا أَدْرَاكَ مَا الْقَارِعَةُ',
        translation: 'And what can make you know what is the Striking Calamity?',
        visual: 'unknown',
        lesson: 'The reality of this Day is beyond human imagination.',
        words: [
          { id: 'qa3-1', arabic: 'وَمَا', transliteration: 'Wa-ma', meaning: 'And what' },
          { id: 'qa3-2', arabic: 'أَدْرَاكَ', transliteration: 'Adraka', meaning: 'Can make you know' },
          { id: 'qa3-3', arabic: 'مَا', transliteration: 'Ma', meaning: 'What is' },
          { id: 'qa3-4', arabic: 'الْقَارِعَةُ', transliteration: 'Al-qari\'ah', meaning: 'The Striking Calamity' }
        ]
      },
      {
        id: '101-4',
        audio: getAudioUrl(101, 4),
        arabicFull: 'يَوْمَ يَكُونُ النَّاسُ كَالْفَرَاشِ الْمَبْثُوثِ',
        translation: 'It is the Day when people will be like moths, dispersed,',
        visual: 'moths',
        lesson: 'People will run in every direction in state of sheer panic and confusion, like moths scattering around a light.',
        words: [
          { id: 'qa4-1', arabic: 'يَوْمَ', transliteration: 'Yawma', meaning: 'The Day' },
          { id: 'qa4-2', arabic: 'يَكُونُ', transliteration: 'Yakunu', meaning: 'Will be' },
          { id: 'qa4-3', arabic: 'النَّاسُ', transliteration: 'An-nasu', meaning: 'The people' },
          { id: 'qa4-4', arabic: 'كَالْفَرَاشِ', transliteration: 'Kal-farashi', meaning: 'Like moths' },
          { id: 'qa4-5', arabic: 'الْمَبْثُوثِ', transliteration: 'Al-mabthuthi', meaning: 'Dispersed / Scattered' }
        ]
      },
      {
        id: '101-5',
        audio: getAudioUrl(101, 5),
        arabicFull: 'وَتَكُونُ الْجِبَالُ كَالْعِهْنِ الْمَنفُوشِ',
        translation: 'And the mountains will be like wool, fluffed up.',
        visual: 'mountain_wool',
        lesson: 'Even the strongest, most unmovable things on Earth will become weightless and fragile.',
        words: [
          { id: 'qa5-1', arabic: 'وَتَكُونُ', transliteration: 'Wa-takunu', meaning: 'And will be' },
          { id: 'qa5-2', arabic: 'الْجِبَالُ', transliteration: 'Al-jibalu', meaning: 'The mountains' },
          { id: 'qa5-3', arabic: 'كَالْعِهْنِ', transliteration: 'Kal-\'ihni', meaning: 'Like wool' },
          { id: 'qa5-4', arabic: 'الْمَنفُوشِ', transliteration: 'Al-manfushi', meaning: 'Fluffed up' }
        ]
      },
      {
        id: '101-6',
        audio: getAudioUrl(101, 6),
        arabicFull: 'فَأَمَّا مَن ثَقُلَتْ مَوَازِينُهُ',
        translation: 'Then as for one whose scales are heavy [with good deeds],',
        visual: 'heavy_scale',
        lesson: 'Our actions have literal weight. Sincere faith and good deeds make the scale heavy.',
        words: [
          { id: 'qa6-1', arabic: 'فَأَمَّا', transliteration: 'Fa-amma', meaning: 'Then as for' },
          { id: 'qa6-2', arabic: 'مَن', transliteration: 'Man', meaning: 'One who / Whoever' },
          { id: 'qa6-3', arabic: 'ثَقُلَتْ', transliteration: 'Thaqulat', meaning: 'Are heavy' },
          { id: 'qa6-4', arabic: 'مَوَازِينُهُ', transliteration: 'Mawazinuhu', meaning: 'His scales' }
        ]
      },
      {
        id: '101-7',
        audio: getAudioUrl(101, 7),
        arabicFull: 'فَهُوَ فِي عِيشَةٍ رَّاضِيَةٍ',
        translation: 'He will be in a pleasant life.',
        visual: 'paradise',
        lesson: 'A life in Jannah where the soul is entirely satisfied and pleased.',
        words: [
          { id: 'qa7-1', arabic: 'فَهُوَ', transliteration: 'Fa-huwa', meaning: 'Then he' },
          { id: 'qa7-2', arabic: 'فِي', transliteration: 'Fi', meaning: 'In' },
          { id: 'qa7-3', arabic: 'عِيشَةٍ', transliteration: 'Iishatin', meaning: 'A life' },
          { id: 'qa7-4', arabic: 'رَّاضِيَةٍ', transliteration: 'Radiyah', meaning: 'Pleasant / Satisfying' }
        ]
      },
      {
        id: '101-8',
        audio: getAudioUrl(101, 8),
        arabicFull: 'وَأَمَّا مَنْ خَفَّتْ مَوَازِينُهُ',
        translation: 'But as for one whose scales are light,',
        visual: 'light_scale',
        lesson: 'A life lacking good deeds and sincerity results in an empty, light scale.',
        words: [
          { id: 'qa8-1', arabic: 'وَأَمَّا', transliteration: 'Wa-amma', meaning: 'But as for' },
          { id: 'qa8-2', arabic: 'مَنْ', transliteration: 'Man', meaning: 'One who' },
          { id: 'qa8-3', arabic: 'خَفَّتْ', transliteration: 'Khaffat', meaning: 'Are light' },
          { id: 'qa8-4', arabic: 'مَوَازِينُهُ', transliteration: 'Mawazinuhu', meaning: 'His scales' }
        ]
      },
      {
        id: '101-9',
        audio: getAudioUrl(101, 9),
        arabicFull: 'فَأُمُّهُ هَاوِيَةٌ',
        translation: 'His refuge will be an abyss.',
        visual: 'abyss',
        lesson: 'The word "Umm" (mother) is used here because a falling person will be embraced by Hellfire just as a mother embraces her child.',
        words: [
          { id: 'qa9-1', arabic: 'فَأُمُّهُ', transliteration: 'Fa-ummuhu', meaning: 'His mother (refuge)' },
          { id: 'qa9-2', arabic: 'هَاوِيَةٌ', transliteration: 'Hawiyah', meaning: 'An abyss' }
        ]
      },
      {
        id: '101-10',
        audio: getAudioUrl(101, 10),
        arabicFull: 'وَمَا أَدْرَاكَ مَا هِيَهْ',
        translation: 'And what can make you know what that is?',
        visual: 'unknown_fire',
        lesson: 'Emphasizing the terrifying and unimaginable nature of this abyss.',
        words: [
          { id: 'qa10-1', arabic: 'وَمَا', transliteration: 'Wa-ma', meaning: 'And what' },
          { id: 'qa10-2', arabic: 'أَدْرَاكَ', transliteration: 'Adraka', meaning: 'Can make you know' },
          { id: 'qa10-3', arabic: 'مَا', transliteration: 'Ma', meaning: 'What' },
          { id: 'qa10-4', arabic: 'هِيَهْ', transliteration: 'Hiyah', meaning: 'It is' }
        ]
      },
      {
        id: '101-11',
        audio: getAudioUrl(101, 11),
        arabicFull: 'نَارٌ حَامِيَةٌ',
        translation: 'It is a Fire, intensely hot.',
        visual: 'flame',
        lesson: 'The fires of this world are nothing compared to the blazing intensity of the Hereafter.',
        words: [
          { id: 'qa11-1', arabic: 'نَارٌ', transliteration: 'Narun', meaning: 'A Fire' },
          { id: 'qa11-2', arabic: 'حَامِيَةٌ', transliteration: 'Hamiyah', meaning: 'Intensely hot / blazing' }
        ]
      }
    ]
  },

  // --- 100. AL-'ADIYAT (Uses 'Zap' & 'rose') ---
  {
    id: 'adiyat',
    number: 100,
    title: 'Al-\'Adiyat',
    meaning: 'The Courser / The Chargers',
    story: 'Allah swears by the charging war horses, striking sparks with their hooves as they run into battle, to make a point: horses are incredibly loyal to their masters even in danger. In contrast, human beings are often incredibly ungrateful to their Master (Allah) and overly intensely loyal to their wealth.',
    color: 'rose',
    themeGradient: 'from-rose-500 to-red-800',
    iconName: 'Zap',
    totalVerses: 11,
    levels: [
      {
        id: '100-1',
        audio: getAudioUrl(100, 1),
        arabicFull: 'وَالْعَادِيَاتِ ضَبْحًا',
        translation: 'By the racers, panting,',
        visual: 'horse_charge',
        lesson: 'Allah honors the fierce loyalty and effort of the war horse breathing heavily in battle.',
        words: [
          { id: 'ad1-1', arabic: 'وَ', transliteration: 'Wa', meaning: 'By (oath)' },
          { id: 'ad1-2', arabic: 'الْعَادِيَاتِ', transliteration: 'Al-\'adiyati', meaning: 'The racing horses' },
          { id: 'ad1-3', arabic: 'ضَبْحًا', transliteration: 'Dabhan', meaning: 'Panting' }
        ],
        distractors: [{ id: 'add1', arabic: 'قَدْحًا', transliteration: 'Qadhan' }]
      },
      {
        id: '100-2',
        audio: getAudioUrl(100, 2),
        arabicFull: 'فَالْمُورِيَاتِ قَدْحًا',
        translation: 'And the producers of sparks [when] striking',
        visual: 'sparks',
        lesson: 'The hooves strike the rocks so forcefully that sparks fly into the air.',
        words: [
          { id: 'ad2-1', arabic: 'فَالْمُورِيَاتِ', transliteration: 'Fal-muriyati', meaning: 'And the producers of sparks' },
          { id: 'ad2-2', arabic: 'قَدْحًا', transliteration: 'Qadhan', meaning: 'Striking' }
        ]
      },
      {
        id: '100-3',
        audio: getAudioUrl(100, 3),
        arabicFull: 'فَالْمُغِيرَاتِ صُبْحًا',
        translation: 'And the chargers at dawn,',
        visual: 'dawn_charge',
        lesson: 'They rush into battle courageously at the earliest light of day.',
        words: [
          { id: 'ad3-1', arabic: 'فَالْمُغِيرَاتِ', transliteration: 'Fal-mughirati', meaning: 'And the chargers / raiders' },
          { id: 'ad3-2', arabic: 'صُبْحًا', transliteration: 'Subhan', meaning: 'At dawn' }
        ]
      },
      {
        id: '100-4',
        audio: getAudioUrl(100, 4),
        arabicFull: 'فَأَثَرْنَ بِهِ نَقْعًا',
        translation: 'Stirring up thereby [clouds of] dust,',
        visual: 'dust',
        lesson: 'Their speed and sheer numbers create massive clouds of dust in the battlefield.',
        words: [
          { id: 'ad4-1', arabic: 'فَأَثَرْنَ', transliteration: 'Fa-atharna', meaning: 'Stirring up' },
          { id: 'ad4-2', arabic: 'بِهِ', transliteration: 'Bihi', meaning: 'Thereby' },
          { id: 'ad4-3', arabic: 'نَقْعًا', transliteration: 'Naq\'an', meaning: 'Dust' }
        ]
      },
      {
        id: '100-5',
        audio: getAudioUrl(100, 5),
        arabicFull: 'فَوَسَطْنَ بِهِ جَمْعًا',
        translation: 'Arriving thereby in the center collectively,',
        visual: 'center_battle',
        lesson: 'Without fear, they plunge straight into the heart of the enemy lines for their master.',
        words: [
          { id: 'ad5-1', arabic: 'فَوَسَطْنَ', transliteration: 'Fa-wasatna', meaning: 'Arriving in the center' },
          { id: 'ad5-2', arabic: 'بِهِ', transliteration: 'Bihi', meaning: 'Thereby' },
          { id: 'ad5-3', arabic: 'جَمْعًا', transliteration: 'Jam\'an', meaning: 'Collectively / A group' }
        ]
      },
      {
        id: '100-6',
        audio: getAudioUrl(100, 6),
        arabicFull: 'إِنَّ الْإِنسَانَ لِرَبِّهِ لَكَنُودٌ',
        translation: 'Indeed mankind, to his Lord, is ungrateful.',
        visual: 'ungrateful',
        lesson: 'Kanood is someone who remembers the one bad thing that happened to them and forgets all the good blessings from Allah.',
        words: [
          { id: 'ad6-1', arabic: 'إِنَّ', transliteration: 'Inna', meaning: 'Indeed' },
          { id: 'ad6-2', arabic: 'الْإِنسَانَ', transliteration: 'Al-insana', meaning: 'Mankind' },
          { id: 'ad6-3', arabic: 'لِرَبِّهِ', transliteration: 'Li-rabbihi', meaning: 'To his Lord' },
          { id: 'ad6-4', arabic: 'لَكَنُودٌ', transliteration: 'Lakanud', meaning: 'Is surely ungrateful' }
        ]
      },
      {
        id: '100-7',
        audio: getAudioUrl(100, 7),
        arabicFull: 'وَإِنَّهُ عَلَىٰ ذَٰلِكَ لَشَهِيدٌ',
        translation: 'And indeed, he is to that a witness.',
        visual: 'witness',
        lesson: 'Deep down, mankind knows of his own ingratitude through his actions and complaints.',
        words: [
          { id: 'ad7-1', arabic: 'وَإِنَّهُ', transliteration: 'Wa-innahu', meaning: 'And indeed he is' },
          { id: 'ad7-2', arabic: 'عَلَىٰ', transliteration: 'Ala', meaning: 'To' },
          { id: 'ad7-3', arabic: 'ذَٰلِكَ', transliteration: 'Dhalika', meaning: 'That' },
          { id: 'ad7-4', arabic: 'لَشَهِيدٌ', transliteration: 'La-shahid', meaning: 'A witness' }
        ]
      },
      {
        id: '100-8',
        audio: getAudioUrl(100, 8),
        arabicFull: 'وَإِنَّهُ لِحُبِّ الْخَيْرِ لَشَدِيدٌ',
        translation: 'And indeed he is, in love of wealth, intense.',
        visual: 'wealth',
        lesson: 'In this verse, "Al-Khayr" (the good) refers to worldly wealth. Loving money too much makes us blind to our blessings.',
        words: [
          { id: 'ad8-1', arabic: 'وَإِنَّهُ', transliteration: 'Wa-innahu', meaning: 'And indeed he is' },
          { id: 'ad8-2', arabic: 'لِحُبِّ', transliteration: 'Li-hubbi', meaning: 'In the love' },
          { id: 'ad8-3', arabic: 'الْخَيْرِ', transliteration: 'Al-khayri', meaning: 'Of wealth / good' },
          { id: 'ad8-4', arabic: 'لَشَدِيدٌ', transliteration: 'La-shadid', meaning: 'Surely intense' }
        ],
        distractors: [{ id: 'add8', arabic: 'لَكَنُودٌ', transliteration: 'Lakanud' }]
      },
      {
        id: '100-9',
        audio: getAudioUrl(100, 9),
        arabicFull: '۞ أَفَلَا يَعْلَمُ إِذَا بُعْثِرَ مَا فِي الْقُبُورِ',
        translation: 'But does he not know that when the contents of the graves are scattered',
        visual: 'graves',
        lesson: 'A wake-up call to remember the resurrection, when all hidden things are turned completely inside out.',
        words: [
          { id: 'ad9-1', arabic: 'أَفَلَا', transliteration: 'A-fa-la', meaning: 'But does he not' },
          { id: 'ad9-2', arabic: 'يَعْلَمُ', transliteration: 'Ya\'lamu', meaning: 'Know' },
          { id: 'ad9-3', arabic: 'إِذَا', transliteration: 'Idha', meaning: 'When' },
          { id: 'ad9-4', arabic: 'بُعْثِرَ', transliteration: 'Bu\'thira', meaning: 'Are scattered / overturned' },
          { id: 'ad9-5', arabic: 'مَا', transliteration: 'Ma', meaning: 'What' },
          { id: 'ad9-6', arabic: 'فِي', transliteration: 'Fi', meaning: 'In' },
          { id: 'ad9-7', arabic: 'الْقُبُورِ', transliteration: 'Al-quburi', meaning: 'The graves' }
        ]
      },
      {
        id: '100-10',
        audio: getAudioUrl(100, 10),
        arabicFull: 'وَحُصِّلَ مَا فِي الصُّدُورِ',
        translation: 'And that within the breasts is obtained,',
        visual: 'heart_secrets',
        lesson: 'Every secret intention, hidden jealousy, and silent thought will be made completely public.',
        words: [
          { id: 'ad10-1', arabic: 'وَحُصِّلَ', transliteration: 'Wa-hussila', meaning: 'And is obtained / made apparent' },
          { id: 'ad10-2', arabic: 'مَا', transliteration: 'Ma', meaning: 'What' },
          { id: 'ad10-3', arabic: 'فِي', transliteration: 'Fi', meaning: 'In' },
          { id: 'ad10-4', arabic: 'الصُّدُورِ', transliteration: 'As-suduri', meaning: 'The breasts / hearts' }
        ]
      },
      {
        id: '100-11',
        audio: getAudioUrl(100, 11),
        arabicFull: 'إِنَّ رَبَّهُم بِهِمْ يَوْمَئِذٍ لَّخَبِيرٌ',
        translation: 'Indeed, their Lord with them, that Day, is [fully] Acquainted.',
        visual: 'knowing',
        lesson: 'Allah knows us perfectly right now, but on that Day, His full knowledge will be manifested in absolute justice.',
        words: [
          { id: 'ad11-1', arabic: 'إِنَّ', transliteration: 'Inna', meaning: 'Indeed' },
          { id: 'ad11-2', arabic: 'رَبَّهُم', transliteration: 'Rabbahum', meaning: 'Their Lord' },
          { id: 'ad11-3', arabic: 'بِهِمْ', transliteration: 'Bihim', meaning: 'With them' },
          { id: 'ad11-4', arabic: 'يَوْمَئِذٍ', transliteration: 'Yawma\'idhin', meaning: 'That Day' },
          { id: 'ad11-5', arabic: 'لَّخَبِيرٌ', transliteration: 'La-khabir', meaning: 'Is surely Acquainted' }
        ]
      }
    ]
  },

  // --- 99. AZ-ZALZALAH (Uses 'Mountain' & 'slate') ---
  {
    id: 'zalzalah',
    number: 99,
    title: 'Az-Zalzalah',
    meaning: 'The Earthquake',
    story: 'A vivid, terrifying description of the final earthquake that will violently shake the entire planet, causing the earth to throw out everything buried inside it. It teaches ultimate accountability: absolutely no deed is too small to be ignored.',
    color: 'slate',
    themeGradient: 'from-slate-500 to-gray-800',
    iconName: 'Mountain',
    totalVerses: 8,
    levels: [
      {
        id: '99-1',
        audio: getAudioUrl(99, 1),
        arabicFull: 'إِذَا زُلْزِلَتِ الْأَرْضُ زِلْزَالَهَا',
        translation: 'When the earth is shaken with its [final] earthquake',
        visual: 'earthquake',
        lesson: 'This is not a normal earthquake; it is "ITS" earthquake—the ultimate, final shaking the earth was designed for.',
        words: [
          { id: 'z1-1', arabic: 'إِذَا', transliteration: 'Idha', meaning: 'When' },
          { id: 'z1-2', arabic: 'زُلْزِلَتِ', transliteration: 'Zulzilat', meaning: 'Is shaken' },
          { id: 'z1-3', arabic: 'الْأَرْضُ', transliteration: 'Al-ardu', meaning: 'The earth' },
          { id: 'z1-4', arabic: 'زِلْزَالَهَا', transliteration: 'Zilzalaha', meaning: 'With its earthquake' }
        ]
      },
      {
        id: '99-2',
        audio: getAudioUrl(99, 2),
        arabicFull: 'وَأَخْرَجَتِ الْأَرْضُ أَثْقَالَهَا',
        translation: 'And the earth discharges its burdens',
        visual: 'burdens',
        lesson: 'The earth will throw out everything hidden inside it: the dead bodies, hidden treasures, and ancient secrets.',
        words: [
          { id: 'z2-1', arabic: 'وَأَخْرَجَتِ', transliteration: 'Wa-akhrajati', meaning: 'And discharges / brings out' },
          { id: 'z2-2', arabic: 'الْأَرْضُ', transliteration: 'Al-ardu', meaning: 'The earth' },
          { id: 'z2-3', arabic: 'أَثْقَالَهَا', transliteration: 'Athqalaha', meaning: 'Its burdens / weights' }
        ]
      },
      {
        id: '99-3',
        audio: getAudioUrl(99, 3),
        arabicFull: 'وَقَالَ الْإِنسَانُ مَا لَهَا',
        translation: 'And man says, "What is [wrong] with it?" -',
        visual: 'panic',
        lesson: 'Humanity will be in a state of sheer shock and panic, confused by the breaking of natural laws.',
        words: [
          { id: 'z3-1', arabic: 'وَقَالَ', transliteration: 'Wa-qala', meaning: 'And says' },
          { id: 'z3-2', arabic: 'الْإِنسَانُ', transliteration: 'Al-insanu', meaning: 'Man' },
          { id: 'z3-3', arabic: 'مَا', transliteration: 'Ma', meaning: 'What is' },
          { id: 'z3-4', arabic: 'لَهَا', transliteration: 'Laha', meaning: 'With it' }
        ]
      },
      {
        id: '99-4',
        audio: getAudioUrl(99, 4),
        arabicFull: 'يَوْمَئِذٍ تُحَدِّثُ أَخْبَارَهَا',
        translation: 'That Day, it will report its news',
        visual: 'report',
        lesson: 'The Earth itself will act as a primary witness, testifying to every deed performed on its surface.',
        words: [
          { id: 'z4-1', arabic: 'يَوْمَئِذٍ', transliteration: 'Yawma\'idhin', meaning: 'That Day' },
          { id: 'z4-2', arabic: 'تُحَدِّثُ', transliteration: 'Tuhaddithu', meaning: 'It will report / speak' },
          { id: 'z4-3', arabic: 'أَخْبَارَهَا', transliteration: 'Akhbaraha', meaning: 'Its news' }
        ]
      },
      {
        id: '99-5',
        audio: getAudioUrl(99, 5),
        arabicFull: 'بِأَنَّ رَبَّكَ أَوْحَىٰ لَهَا',
        translation: 'Because your Lord has commanded it.',
        visual: 'command',
        lesson: 'The Earth is a creation of Allah that perfectly submits to His command (Wahy) without hesitation.',
        words: [
          { id: 'z5-1', arabic: 'بِأَنَّ', transliteration: 'Bi-anna', meaning: 'Because' },
          { id: 'z5-2', arabic: 'رَبَّكَ', transliteration: 'Rabbaka', meaning: 'Your Lord' },
          { id: 'z5-3', arabic: 'أَوْحَىٰ', transliteration: 'Awha', meaning: 'Commanded / Inspired' },
          { id: 'z5-4', arabic: 'لَهَا', transliteration: 'Laha', meaning: 'It' }
        ]
      },
      {
        id: '99-6',
        audio: getAudioUrl(99, 6),
        arabicFull: 'يَوْمَئِذٍ يَصْدُرُ النَّاسُ أَشْتَاتًا لِّيُرَوْا أَعْمَالَهُمْ',
        translation: 'That Day, the people will depart separated [into categories] to be shown [the result of] their deeds.',
        visual: 'separation',
        lesson: 'People will be divided based on their actions, either heading towards Paradise or Hellfire.',
        words: [
          { id: 'z6-1', arabic: 'يَوْمَئِذٍ', transliteration: 'Yawma\'idhin', meaning: 'That Day' },
          { id: 'z6-2', arabic: 'يَصْدُرُ', transliteration: 'Yasduru', meaning: 'Will depart / proceed' },
          { id: 'z6-3', arabic: 'النَّاسُ', transliteration: 'An-nasu', meaning: 'The people' },
          { id: 'z6-4', arabic: 'أَشْتَاتًا', transliteration: 'Ashtatan', meaning: 'Separated' },
          { id: 'z6-5', arabic: 'لِّيُرَوْا', transliteration: 'Liyuraw', meaning: 'To be shown' },
          { id: 'z6-6', arabic: 'أَعْمَالَهُمْ', transliteration: 'A\'malahum', meaning: 'Their deeds' }
        ]
      },
      {
        id: '99-7',
        audio: getAudioUrl(99, 7),
        arabicFull: 'فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ',
        translation: 'So whoever does an atom\'s weight of good will see it,',
        visual: 'good_atom',
        lesson: 'Even moving a tiny pebble off a walking path or smiling at someone will be shown to you on Judgment Day.',
        words: [
          { id: 'z7-1', arabic: 'فَمَن', transliteration: 'Fa-man', meaning: 'So whoever' },
          { id: 'z7-2', arabic: 'يَعْمَلْ', transliteration: 'Ya\'mal', meaning: 'Does' },
          { id: 'z7-3', arabic: 'مِثْقَالَ', transliteration: 'Mithqala', meaning: 'Weight' },
          { id: 'z7-4', arabic: 'ذَرَّةٍ', transliteration: 'Dharratin', meaning: 'Of an atom / speck' },
          { id: 'z7-5', arabic: 'خَيْرًا', transliteration: 'Khayran', meaning: 'Of good' },
          { id: 'z7-6', arabic: 'يَرَهُ', transliteration: 'Yarahu', meaning: 'Will see it' }
        ],
        distractors: [{ id: 'zd7', arabic: 'شَرًّا', transliteration: 'Sharran' }]
      },
      {
        id: '99-8',
        audio: getAudioUrl(99, 8),
        arabicFull: 'وَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ شَرًّا يَرَهُ',
        translation: 'And whoever does an atom\'s weight of evil will see it.',
        visual: 'bad_atom',
        lesson: 'Every single micro-aggression, tiny lie, or small harm will be presented on the scales.',
        words: [
          { id: 'z8-1', arabic: 'وَمَن', transliteration: 'Wa-man', meaning: 'And whoever' },
          { id: 'z8-2', arabic: 'يَعْمَلْ', transliteration: 'Ya\'mal', meaning: 'Does' },
          { id: 'z8-3', arabic: 'مِثْقَالَ', transliteration: 'Mithqala', meaning: 'Weight' },
          { id: 'z8-4', arabic: 'ذَرَّةٍ', transliteration: 'Dharratin', meaning: 'Of an atom / speck' },
          { id: 'z8-5', arabic: 'شَرًّا', transliteration: 'Sharran', meaning: 'Of evil' },
          { id: 'z8-6', arabic: 'يَرَهُ', transliteration: 'Yarahu', meaning: 'Will see it' }
        ],
        distractors: [{ id: 'zd8', arabic: 'خَيْرًا', transliteration: 'Khayran' }]
      }
    ]
  },

  // --- 98. AL-BAYYINAH (Uses 'Book' & 'cyan') ---
  {
    id: 'bayyinah',
    number: 98,
    title: 'Al-Bayyinah',
    meaning: 'The Clear Proof',
    story: 'This Surah talks about the necessity of a Messenger reading from purified scrolls (the Quran) to provide clear evidence to humanity, separating the truth from falsehood permanently.',
    color: 'cyan',
    themeGradient: 'from-cyan-500 to-blue-700',
    iconName: 'Book',
    totalVerses: 8,
    levels: [
      {
        id: '98-1',
        audio: getAudioUrl(98, 1),
        arabicFull: 'لَمْ يَكُنِ الَّذِينَ كَفَرُوا مِنْ أَهْلِ الْكِتَابِ وَالْمُشْرِكِينَ مُنفَكِّينَ حَتَّىٰ تَأْتِيَهُمُ الْبَيِّنَةُ',
        translation: 'Those who disbelieved among the People of the Scripture and the polytheists were not to be parted [from misbelief] until there came to them clear evidence -',
        visual: 'evidence',
        lesson: 'People are often stuck in their cultural or ancestral beliefs until undeniable, pure truth arrives.',
        words: [
          { id: 'b1-1', arabic: 'لَمْ يَكُنِ', transliteration: 'Lam yakuni', meaning: 'Were not' },
          { id: 'b1-2', arabic: 'الَّذِينَ', transliteration: 'Alladhina', meaning: 'Those who' },
          { id: 'b1-3', arabic: 'كَفَرُوا', transliteration: 'Kafaru', meaning: 'Disbelieved' },
          { id: 'b1-4', arabic: 'مِنْ', transliteration: 'Min', meaning: 'Among' },
          { id: 'b1-5', arabic: 'أَهْلِ الْكِتَابِ', transliteration: 'Ahli l-kitabi', meaning: 'The People of the Scripture' },
          { id: 'b1-6', arabic: 'وَالْمُشْرِكِينَ', transliteration: 'Wal-mushrikina', meaning: 'And the polytheists' },
          { id: 'b1-7', arabic: 'مُنفَكِّينَ', transliteration: 'Munfakkina', meaning: 'Parted / separated' },
          { id: 'b1-8', arabic: 'حَتَّىٰ', transliteration: 'Hatta', meaning: 'Until' },
          { id: 'b1-9', arabic: 'تَأْتِيَهُمُ', transliteration: 'Ta\'tiyahumu', meaning: 'Came to them' },
          { id: 'b1-10', arabic: 'الْبَيِّنَةُ', transliteration: 'Al-bayyinah', meaning: 'The clear evidence' }
        ]
      },
      {
        id: '98-2',
        audio: getAudioUrl(98, 2),
        arabicFull: 'رَسُولٌ مِّنَ اللَّهِ يَتْلُو صُحُفًا مُّطَهَّرَةً',
        translation: 'A Messenger from Allah, reciting purified scriptures',
        visual: 'scrolls',
        lesson: 'The Quran is described as "Suhuf" (scrolls/pages) that are completely pure from any corruption.',
        words: [
          { id: 'b2-1', arabic: 'رَسُولٌ', transliteration: 'Rasulun', meaning: 'A Messenger' },
          { id: 'b2-2', arabic: 'مِّنَ', transliteration: 'Mina', meaning: 'From' },
          { id: 'b2-3', arabic: 'اللَّهِ', transliteration: 'Allahi', meaning: 'Allah' },
          { id: 'b2-4', arabic: 'يَتْلُو', transliteration: 'Yatlu', meaning: 'Reciting' },
          { id: 'b2-5', arabic: 'صُحُفًا', transliteration: 'Suhufan', meaning: 'Scriptures / Pages' },
          { id: 'b2-6', arabic: 'مُّطَهَّرَةً', transliteration: 'Mutahharah', meaning: 'Purified' }
        ]
      },
      {
        id: '98-3',
        audio: getAudioUrl(98, 3),
        arabicFull: 'فِيهَا كُتُبٌ قَيِّمَةٌ',
        translation: 'Within which are correct writings.',
        visual: 'correct_books',
        lesson: 'The laws and lessons inside the Quran are straight, balanced, and perfectly correct for all times.',
        words: [
          { id: 'b3-1', arabic: 'فِيهَا', transliteration: 'Fiha', meaning: 'Within which' },
          { id: 'b3-2', arabic: 'كُتُبٌ', transliteration: 'Kutubun', meaning: 'Writings / decrees' },
          { id: 'b3-3', arabic: 'قَيِّمَةٌ', transliteration: 'Qayyimah', meaning: 'Correct / upright' }
        ]
      },
      {
        id: '98-4',
        audio: getAudioUrl(98, 4),
        arabicFull: 'وَمَا تَفَرَّقَ الَّذِينَ أُوتُوا الْكِتَابَ إِلَّا مِن بَعْدِ مَا جَاءَتْهُمُ الْبَيِّنَةُ',
        translation: 'Nor did those who were given the Scripture become divided until after there had come to them clear evidence.',
        visual: 'divided',
        lesson: 'Division and splitting into sects didn\'t happen out of ignorance, it happened out of ego after the truth arrived.',
        words: [
          { id: 'b4-1', arabic: 'وَمَا', transliteration: 'Wa-ma', meaning: 'And not' },
          { id: 'b4-2', arabic: 'تَفَرَّقَ', transliteration: 'Tafarraqa', meaning: 'Became divided' },
          { id: 'b4-3', arabic: 'الَّذِينَ', transliteration: 'Alladhina', meaning: 'Those who' },
          { id: 'b4-4', arabic: 'أُوتُوا', transliteration: 'Utu', meaning: 'Were given' },
          { id: 'b4-5', arabic: 'الْكِتَابَ', transliteration: 'Al-kitaba', meaning: 'The Scripture' },
          { id: 'b4-6', arabic: 'إِلَّا', transliteration: 'Illa', meaning: 'Except' },
          { id: 'b4-7', arabic: 'مِن بَعْدِ', transliteration: 'Min ba\'di', meaning: 'After' },
          { id: 'b4-8', arabic: 'مَا', transliteration: 'Ma', meaning: 'What' },
          { id: 'b4-9', arabic: 'جَاءَتْهُمُ', transliteration: 'Ja\'athumu', meaning: 'Came to them' },
          { id: 'b4-10', arabic: 'الْبَيِّنَةُ', transliteration: 'Al-bayyinah', meaning: 'The clear evidence' }
        ]
      },
      {
        id: '98-5',
        audio: getAudioUrl(98, 5),
        arabicFull: 'وَمَا أُمِرُوا إِلَّا لِيَعْبُدُوا اللَّهَ مُخْلِصِينَ لَهُ الدِّينَ حُنَفَاءَ وَيُقِيمُوا الصَّلَاةَ وَيُؤْتُوا الزَّكَاةَ ۚ وَذَٰلِكَ دِينُ الْقَيِّمَةِ',
        translation: 'And they were not commanded except to worship Allah, [being] sincere to Him in religion, inclining to truth, and to establish prayer and to give zakah. And that is the correct religion.',
        visual: 'true_religion',
        lesson: 'The core message of every single prophet was the exact same: Worship Allah sincerely, pray, and give to charity.',
        words: [
          { id: 'b5-1', arabic: 'وَمَا', transliteration: 'Wa-ma', meaning: 'And not' },
          { id: 'b5-2', arabic: 'أُمِرُوا', transliteration: 'Umiru', meaning: 'They were commanded' },
          { id: 'b5-3', arabic: 'إِلَّا', transliteration: 'Illa', meaning: 'Except' },
          { id: 'b5-4', arabic: 'لِيَعْبُدُوا', transliteration: 'Li-ya\'budu', meaning: 'To worship' },
          { id: 'b5-5', arabic: 'اللَّهَ', transliteration: 'Allaha', meaning: 'Allah' },
          { id: 'b5-6', arabic: 'مُخْلِصِينَ', transliteration: 'Mukhlisina', meaning: 'Being sincere' },
          { id: 'b5-7', arabic: 'لَهُ', transliteration: 'Lahu', meaning: 'To Him' },
          { id: 'b5-8', arabic: 'الدِّينَ', transliteration: 'Ad-dina', meaning: 'The religion' },
          { id: 'b5-9', arabic: 'حُنَفَاءَ', transliteration: 'Hunafa\'a', meaning: 'Inclining to truth' },
          { id: 'b5-10', arabic: 'وَيُقِيمُوا', transliteration: 'Wa-yuqimu', meaning: 'And establish' },
          { id: 'b5-11', arabic: 'الصَّلَاةَ', transliteration: 'As-salata', meaning: 'Prayer' },
          { id: 'b5-12', arabic: 'وَيُؤْتُوا', transliteration: 'Wa-yu\'tu', meaning: 'And give' },
          { id: 'b5-13', arabic: 'الزَّكَاةَ', transliteration: 'Az-zakata', meaning: 'Zakah (charity)' },
          { id: 'b5-14', arabic: 'وَذَٰلِكَ', transliteration: 'Wa-dhalika', meaning: 'And that' },
          { id: 'b5-15', arabic: 'دِينُ', transliteration: 'Dinu', meaning: 'Is religion' },
          { id: 'b5-16', arabic: 'الْقَيِّمَةِ', transliteration: 'Al-qayyimah', meaning: 'The correct / upright' }
        ]
      },
      {
        id: '98-6',
        audio: getAudioUrl(98, 6),
        arabicFull: 'إِنَّ الَّذِينَ كَفَرُوا مِنْ أَهْلِ الْكِتَابِ وَالْمُشْرِكِينَ فِي نَارِ جَهَنَّمَ خَالِدِينَ فِيهَا ۚ أُولَٰئِكَ هُمْ شَرُّ الْبَرِيَّةِ',
        translation: 'Indeed, they who disbelieved among the People of the Scripture and the polytheists will be in the fire of Hell, abiding eternally therein. Those are the worst of creatures.',
        visual: 'worst_creatures',
        lesson: 'Rejecting the clear proof after it has been fully explained reduces a person\'s spiritual status to the absolute lowest.',
        words: [
          { id: 'b6-1', arabic: 'إِنَّ', transliteration: 'Inna', meaning: 'Indeed' },
          { id: 'b6-2', arabic: 'الَّذِينَ', transliteration: 'Alladhina', meaning: 'Those who' },
          { id: 'b6-3', arabic: 'كَفَرُوا', transliteration: 'Kafaru', meaning: 'Disbelieved' },
          { id: 'b6-4', arabic: 'مِنْ', transliteration: 'Min', meaning: 'Among' },
          { id: 'b6-5', arabic: 'أَهْلِ الْكِتَابِ', transliteration: 'Ahli l-kitabi', meaning: 'People of the Scripture' },
          { id: 'b6-6', arabic: 'وَالْمُشْرِكِينَ', transliteration: 'Wal-mushrikina', meaning: 'And the polytheists' },
          { id: 'b6-7', arabic: 'فِي', transliteration: 'Fi', meaning: 'In' },
          { id: 'b6-8', arabic: 'نَارِ', transliteration: 'Nari', meaning: 'Fire' },
          { id: 'b6-9', arabic: 'جَهَنَّمَ', transliteration: 'Jahannama', meaning: 'Of Hell' },
          { id: 'b6-10', arabic: 'خَالِدِينَ', transliteration: 'Khalidina', meaning: 'Abiding eternally' },
          { id: 'b6-11', arabic: 'فِيهَا', transliteration: 'Fiha', meaning: 'Therein' },
          { id: 'b6-12', arabic: 'أُولَٰئِكَ', transliteration: 'Ula\'ika', meaning: 'Those' },
          { id: 'b6-13', arabic: 'هُمْ', transliteration: 'Hum', meaning: 'They' },
          { id: 'b6-14', arabic: 'شَرُّ', transliteration: 'Sharru', meaning: 'The worst' },
          { id: 'b6-15', arabic: 'الْبَرِيَّةِ', transliteration: 'Al-bariyyah', meaning: 'Of creatures' }
        ]
      },
      {
        id: '98-7',
        audio: getAudioUrl(98, 7),
        arabicFull: 'إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ أُولَٰئِكَ هُمْ خَيْرُ الْبَرِيَّةِ',
        translation: 'Indeed, they who have believed and done righteous deeds - those are the best of creatures.',
        visual: 'best_creatures',
        lesson: 'A believer who actively does good is elevated above even the angels in rank.',
        words: [
          { id: 'b7-1', arabic: 'إِنَّ', transliteration: 'Inna', meaning: 'Indeed' },
          { id: 'b7-2', arabic: 'الَّذِينَ', transliteration: 'Alladhina', meaning: 'Those who' },
          { id: 'b7-3', arabic: 'آمَنُوا', transliteration: 'Amanu', meaning: 'Believed' },
          { id: 'b7-4', arabic: 'وَعَمِلُوا', transliteration: 'Wa-\'amilu', meaning: 'And did' },
          { id: 'b7-5', arabic: 'الصَّالِحَاتِ', transliteration: 'As-salihat', meaning: 'Righteous deeds' },
          { id: 'b7-6', arabic: 'أُولَٰئِكَ', transliteration: 'Ula\'ika', meaning: 'Those' },
          { id: 'b7-7', arabic: 'هُمْ', transliteration: 'Hum', meaning: 'They' },
          { id: 'b7-8', arabic: 'خَيْرُ', transliteration: 'Khayru', meaning: 'The best' },
          { id: 'b7-9', arabic: 'الْبَرِيَّةِ', transliteration: 'Al-bariyyah', meaning: 'Of creatures' }
        ]
      },
      {
        id: '98-8',
        audio: getAudioUrl(98, 8),
        arabicFull: 'جَزَاؤُهُمْ عِندَ رَبِّهِمْ جَنَّاتُ عَدْنٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ خَالِدِينَ فِيهَا أَبَدًا ۖ رَّضِيَ اللَّهُ عَنْهُمْ وَرَضُوا عَنْهُ ۚ ذَٰلِكَ لِمَنْ خَشِيَ رَبَّهُ',
        translation: 'Their reward with Allah will be gardens of perpetual residence beneath which rivers flow, wherein they will abide forever, Allah being pleased with them and they with Him. That is for whoever has feared his Lord.',
        visual: 'reward',
        lesson: 'The greatest reward of Paradise is not the rivers or gardens, but the absolute mutual pleasure and love between Allah and the believer.',
        words: [
          { id: 'b8-1', arabic: 'جَزَاؤُهُمْ', transliteration: 'Jaza\'uhum', meaning: 'Their reward' },
          { id: 'b8-2', arabic: 'عِندَ', transliteration: 'Inda', meaning: 'With' },
          { id: 'b8-3', arabic: 'رَبِّهِمْ', transliteration: 'Rabbihim', meaning: 'Their Lord' },
          { id: 'b8-4', arabic: 'جَنَّاتُ', transliteration: 'Jannatu', meaning: 'Gardens' },
          { id: 'b8-5', arabic: 'عَدْنٍ', transliteration: 'Adnin', meaning: 'Of perpetual residence' },
          { id: 'b8-6', arabic: 'تَجْرِي', transliteration: 'Tajri', meaning: 'Flow' },
          { id: 'b8-7', arabic: 'مِن تَحْتِهَا', transliteration: 'Min tahtiha', meaning: 'Beneath which' },
          { id: 'b8-8', arabic: 'الْأَنْهَارُ', transliteration: 'Al-anharu', meaning: 'The rivers' },
          { id: 'b8-9', arabic: 'خَالِدِينَ', transliteration: 'Khalidina', meaning: 'Abiding eternally' },
          { id: 'b8-10', arabic: 'فِيهَا', transliteration: 'Fiha', meaning: 'Therein' },
          { id: 'b8-11', arabic: 'أَبَدًا', transliteration: 'Abadan', meaning: 'Forever' },
          { id: 'b8-12', arabic: 'رَّضِيَ', transliteration: 'Radiya', meaning: 'Is pleased' },
          { id: 'b8-13', arabic: 'اللَّهُ', transliteration: 'Allahu', meaning: 'Allah' },
          { id: 'b8-14', arabic: 'عَنْهُمْ', transliteration: 'Anhum', meaning: 'With them' },
          { id: 'b8-15', arabic: 'وَرَضُوا', transliteration: 'Wa-radu', meaning: 'And they are pleased' },
          { id: 'b8-16', arabic: 'عَنْهُ', transliteration: 'Anhu', meaning: 'With Him' },
          { id: 'b8-17', arabic: 'ذَٰلِكَ', transliteration: 'Dhalika', meaning: 'That' },
          { id: 'b8-18', arabic: 'لِمَنْ', transliteration: 'Li-man', meaning: 'Is for whoever' },
          { id: 'b8-19', arabic: 'خَشِيَ', transliteration: 'Khashiya', meaning: 'Has feared' },
          { id: 'b8-20', arabic: 'رَبَّهُ', transliteration: 'Rabbahu', meaning: 'His Lord' }
        ]
      }
    ]
  },

  // --- 97. AL-QADR (Uses 'Moon' & 'violet') ---
  {
    id: 'qadr',
    number: 97,
    title: 'Al-Qadr',
    meaning: 'The Night of Decree',
    story: 'Dedicated to the greatest night of the year—Laylat al-Qadr. It is the night the Quran was first brought down, a night better than a thousand months (over 83 years) of worship, where angels fill the sky.',
    color: 'violet',
    themeGradient: 'from-violet-500 to-purple-800',
    iconName: 'Moon',
    totalVerses: 5,
    levels: [
      {
        id: '97-1',
        audio: getAudioUrl(97, 1),
        arabicFull: 'إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ',
        translation: 'Indeed, We sent the Qur\'an down during the Night of Decree.',
        visual: 'night_sky',
        lesson: 'The "it" (Hu) refers to the Quran, which is so majestic it doesn\'t even need to be named.',
        words: [
          { id: 'qd1-1', arabic: 'إِنَّا', transliteration: 'Inna', meaning: 'Indeed We' },
          { id: 'qd1-2', arabic: 'أَنزَلْنَاهُ', transliteration: 'Anzalnahu', meaning: 'Sent it down' },
          { id: 'qd1-3', arabic: 'فِي', transliteration: 'Fi', meaning: 'In' },
          { id: 'qd1-4', arabic: 'لَيْلَةِ', transliteration: 'Laylati', meaning: 'The night' },
          { id: 'qd1-5', arabic: 'الْقَدْرِ', transliteration: 'Al-Qadr', meaning: 'Of Decree / Power' }
        ]
      },
      {
        id: '97-2',
        audio: getAudioUrl(97, 2),
        arabicFull: 'وَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ',
        translation: 'And what can make you know what is the Night of Decree?',
        visual: 'question_night',
        lesson: 'Another rhetorical question highlighting that the magnitude of this night is beyond human comprehension.',
        words: [
          { id: 'qd2-1', arabic: 'وَمَا', transliteration: 'Wa-ma', meaning: 'And what' },
          { id: 'qd2-2', arabic: 'أَدْرَاكَ', transliteration: 'Adraka', meaning: 'Can make you know' },
          { id: 'qd2-3', arabic: 'مَا', transliteration: 'Ma', meaning: 'What is' },
          { id: 'qd2-4', arabic: 'لَيْلَةُ', transliteration: 'Laylatu', meaning: 'The night' },
          { id: 'qd2-5', arabic: 'الْقَدْرِ', transliteration: 'Al-Qadr', meaning: 'Of Decree' }
        ]
      },
      {
        id: '97-3',
        audio: getAudioUrl(97, 3),
        arabicFull: 'لَيْلَةُ الْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ',
        translation: 'The Night of Decree is better than a thousand months.',
        visual: 'time',
        lesson: 'Worship on this single night is more valuable than an entire lifetime of regular worship.',
        words: [
          { id: 'qd3-1', arabic: 'لَيْلَةُ', transliteration: 'Laylatu', meaning: 'The night' },
          { id: 'qd3-2', arabic: 'الْقَدْرِ', transliteration: 'Al-Qadr', meaning: 'Of Decree' },
          { id: 'qd3-3', arabic: 'خَيْرٌ', transliteration: 'Khayrun', meaning: 'Is better' },
          { id: 'qd3-4', arabic: 'مِّنْ', transliteration: 'Min', meaning: 'Than' },
          { id: 'qd3-5', arabic: 'أَلْفِ', transliteration: 'Alfi', meaning: 'A thousand' },
          { id: 'qd3-6', arabic: 'شَهْرٍ', transliteration: 'Shahrin', meaning: 'Months' }
        ]
      },
      {
        id: '97-4',
        audio: getAudioUrl(97, 4),
        arabicFull: 'تَنَزَّلُ الْمَلَائِكَةُ وَالرُّوحُ فِيهَا بِإِذْنِ رَبِّهِم مِّن كُلِّ أَمْرٍ',
        translation: 'The angels and the Spirit descend therein by permission of their Lord for every matter.',
        visual: 'angels_descend',
        lesson: 'The Earth becomes packed with angels, including Jibreel (The Spirit), bringing down decrees for the upcoming year.',
        words: [
          { id: 'qd4-1', arabic: 'تَنَزَّلُ', transliteration: 'Tanazzalu', meaning: 'Descend' },
          { id: 'qd4-2', arabic: 'الْمَلَائِكَةُ', transliteration: 'Al-mala\'ikatu', meaning: 'The angels' },
          { id: 'qd4-3', arabic: 'وَالرُّوحُ', transliteration: 'War-ruhu', meaning: 'And the Spirit' },
          { id: 'qd4-4', arabic: 'فِيهَا', transliteration: 'Fiha', meaning: 'Therein' },
          { id: 'qd4-5', arabic: 'بِإِذْنِ', transliteration: 'Bi-idhni', meaning: 'By permission' },
          { id: 'qd4-6', arabic: 'رَبِّهِم', transliteration: 'Rabbihim', meaning: 'Of their Lord' },
          { id: 'qd4-7', arabic: 'مِّن', transliteration: 'Min', meaning: 'For / From' },
          { id: 'qd4-8', arabic: 'كُلِّ', transliteration: 'Kulli', meaning: 'Every' },
          { id: 'qd4-9', arabic: 'أَمْرٍ', transliteration: 'Amrin', meaning: 'Matter' }
        ]
      },
      {
        id: '97-5',
        audio: getAudioUrl(97, 5),
        arabicFull: 'سَلَامٌ هِيَ حَتَّىٰ مَطْلَعِ الْفَجْرِ',
        translation: 'Peace it is until the emergence of dawn.',
        visual: 'peace_dawn',
        lesson: 'This night is enveloped in absolute peace and safety from all evil, lasting until the first light of Fajr.',
        words: [
          { id: 'qd5-1', arabic: 'سَلَامٌ', transliteration: 'Salamun', meaning: 'Peace' },
          { id: 'qd5-2', arabic: 'هِيَ', transliteration: 'Hiya', meaning: 'It is' },
          { id: 'qd5-3', arabic: 'حَتَّىٰ', transliteration: 'Hatta', meaning: 'Until' },
          { id: 'qd5-4', arabic: 'مَطْلَعِ', transliteration: 'Matla\'i', meaning: 'The emergence / rising' },
          { id: 'qd5-5', arabic: 'الْفَجْرِ', transliteration: 'Al-fajri', meaning: 'Of dawn' }
        ]
      }
    ]
  },

// --- 96. AL-'ALAQ (Uses 'Feather' & 'indigo') ---
  {
    id: 'alaq',
    number: 96,
    title: 'Al-\'Alaq',
    meaning: 'The Clot',
    story: 'These are the very first words of the Quran revealed to Prophet Muhammad (ﷺ) in the cave of Hira. It commands mankind to read, learn, and recognize that Allah created us from a humble clot of blood and taught us by the pen.',
    color: 'indigo',
    themeGradient: 'from-indigo-600 to-purple-800',
    iconName: 'Feather',
    totalVerses: 19,
    levels: [
      {
        id: '96-1',
        audio: getAudioUrl(96, 1),
        arabicFull: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',
        translation: 'Read in the name of your Lord who created -',
        visual: 'read',
        lesson: 'The very first command in Islam is to read and seek knowledge, grounded in the name of the Creator.',
        words: [
          { id: 'al1-1', arabic: 'اقْرَأْ', transliteration: 'Iqra\'', meaning: 'Read' },
          { id: 'al1-2', arabic: 'بِاسْمِ', transliteration: 'Bismi', meaning: 'In the name' },
          { id: 'al1-3', arabic: 'رَبِّكَ', transliteration: 'Rabbika', meaning: 'Of your Lord' },
          { id: 'al1-4', arabic: 'الَّذِي', transliteration: 'Alladhi', meaning: 'Who' },
          { id: 'al1-5', arabic: 'خَلَقَ', transliteration: 'Khalaqa', meaning: 'Created' }
        ]
      },
      {
        id: '96-2',
        audio: getAudioUrl(96, 2),
        arabicFull: 'خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ',
        translation: 'Created man from a clinging substance.',
        visual: 'creation',
        lesson: 'A reminder of our humble beginnings to cure human arrogance.',
        words: [
          { id: 'al2-1', arabic: 'خَلَقَ', transliteration: 'Khalaqa', meaning: 'He created' },
          { id: 'al2-2', arabic: 'الْإِنسَانَ', transliteration: 'Al-insana', meaning: 'Man' },
          { id: 'al2-3', arabic: 'مِنْ', transliteration: 'Min', meaning: 'From' },
          { id: 'al2-4', arabic: 'عَلَقٍ', transliteration: '\'Alaqin', meaning: 'A clinging clot' }
        ]
      },
      {
        id: '96-3',
        audio: getAudioUrl(96, 3),
        arabicFull: 'اقْرَأْ وَرَبُّكَ الْأَكْرَمُ',
        translation: 'Read, and your Lord is the most Generous -',
        visual: 'generous',
        lesson: 'Allah is incredibly generous, blessing us with knowledge we could never attain on our own.',
        words: [
          { id: 'al3-1', arabic: 'اقْرَأْ', transliteration: 'Iqra\'', meaning: 'Read' },
          { id: 'al3-2', arabic: 'وَرَبُّكَ', transliteration: 'Wa-rabbuka', meaning: 'And your Lord is' },
          { id: 'al3-3', arabic: 'الْأَكْرَمُ', transliteration: 'Al-akramu', meaning: 'The Most Generous' }
        ]
      },
      {
        id: '96-4',
        audio: getAudioUrl(96, 4),
        arabicFull: 'الَّذِي عَلَّمَ بِالْقَلَمِ',
        translation: 'Who taught by the pen -',
        visual: 'pen',
        lesson: 'The pen is a divine tool. Writing preserves human knowledge across generations.',
        words: [
          { id: 'al4-1', arabic: 'الَّذِي', transliteration: 'Alladhi', meaning: 'Who' },
          { id: 'al4-2', arabic: 'عَلَّمَ', transliteration: '\'Allama', meaning: 'Taught' },
          { id: 'al4-3', arabic: 'بِالْقَلَمِ', transliteration: 'Bil-qalami', meaning: 'By the pen' }
        ]
      },
      {
        id: '96-5',
        audio: getAudioUrl(96, 5),
        arabicFull: 'عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ',
        translation: 'Taught man that which he knew not.',
        visual: 'knowledge',
        lesson: 'Every discovery, scientific breakthrough, or skill we possess was ultimately granted by Allah.',
        words: [
          { id: 'al5-1', arabic: 'عَلَّمَ', transliteration: '\'Allama', meaning: 'Taught' },
          { id: 'al5-2', arabic: 'الْإِنسَانَ', transliteration: 'Al-insana', meaning: 'Man' },
          { id: 'al5-3', arabic: 'مَا', transliteration: 'Ma', meaning: 'That which' },
          { id: 'al5-4', arabic: 'لَمْ', transliteration: 'Lam', meaning: 'Not' },
          { id: 'al5-5', arabic: 'يَعْلَمْ', transliteration: 'Ya\'lam', meaning: 'He knew' }
        ]
      },
      {
        id: '96-6',
        audio: getAudioUrl(96, 6),
        arabicFull: 'كَلَّا إِنَّ الْإِنسَانَ لَيَطْغَىٰ',
        translation: 'No! [But] indeed, man transgresses',
        visual: 'transgress',
        lesson: 'Despite being created from a clot, humans often become arrogant and break Allah\'s limits.',
        words: [
          { id: 'al6-1', arabic: 'كَلَّا', transliteration: 'Kalla', meaning: 'No!' },
          { id: 'al6-2', arabic: 'إِنَّ', transliteration: 'Inna', meaning: 'Indeed' },
          { id: 'al6-3', arabic: 'الْإِنسَانَ', transliteration: 'Al-insana', meaning: 'Man' },
          { id: 'al6-4', arabic: 'لَيَطْغَىٰ', transliteration: 'Layatgha', meaning: 'Surely transgresses' }
        ]
      },
      {
        id: '96-7',
        audio: getAudioUrl(96, 7),
        arabicFull: 'أَن رَّآهُ اسْتَغْنَىٰ',
        translation: 'Because he sees himself self-sufficient.',
        visual: 'arrogance',
        lesson: 'Wealth and power create an illusion of independence, causing people to forget they need Allah.',
        words: [
          { id: 'al7-1', arabic: 'أَن', transliteration: 'An', meaning: 'Because' },
          { id: 'al7-2', arabic: 'رَّآهُ', transliteration: 'Ra\'ahu', meaning: 'He sees himself' },
          { id: 'al7-3', arabic: 'اسْتَغْنَىٰ', transliteration: 'Istaghna', meaning: 'Self-sufficient' }
        ]
      },
      {
        id: '96-8',
        audio: getAudioUrl(96, 8),
        arabicFull: 'إِنَّ إِلَىٰ رَبِّكَ الرُّجْعَىٰ',
        translation: 'Indeed, to your Lord is the return.',
        visual: 'return',
        lesson: 'A wake-up call: no matter how wealthy or powerful you become, you will return to face judgment.',
        words: [
          { id: 'al8-1', arabic: 'إِنَّ', transliteration: 'Inna', meaning: 'Indeed' },
          { id: 'al8-2', arabic: 'إِلَىٰ', transliteration: 'Ila', meaning: 'To' },
          { id: 'al8-3', arabic: 'رَبِّكَ', transliteration: 'Rabbika', meaning: 'Your Lord' },
          { id: 'al8-4', arabic: 'الرُّجْعَىٰ', transliteration: 'Ar-ruj\'a', meaning: 'Is the return' }
        ]
      },
      {
        id: '96-9',
        audio: getAudioUrl(96, 9),
        arabicFull: 'أَرَأَيْتَ الَّذِي يَنْهَىٰ',
        translation: 'Have you seen the one who forbids',
        visual: 'forbid',
        lesson: 'This specifically refers to Abu Jahl, who tried to violently stop the Prophet from praying.',
        words: [
          { id: 'al9-1', arabic: 'أَرَأَيْتَ', transliteration: 'Ara\'ayta', meaning: 'Have you seen' },
          { id: 'al9-2', arabic: 'الَّذِي', transliteration: 'Alladhi', meaning: 'The one who' },
          { id: 'al9-3', arabic: 'يَنْهَىٰ', transliteration: 'Yanha', meaning: 'Forbids' }
        ]
      },
      {
        id: '96-10',
        audio: getAudioUrl(96, 10),
        arabicFull: 'عَبْدًا إِذَا صَلَّىٰ',
        translation: 'A servant when he prays?',
        visual: 'praying',
        lesson: 'The greatest injustice is to try and stop a servant of Allah from worshipping Him.',
        words: [
          { id: 'al10-1', arabic: 'عَبْدًا', transliteration: '\'Abdan', meaning: 'A servant' },
          { id: 'al10-2', arabic: 'إِذَا', transliteration: 'Idha', meaning: 'When' },
          { id: 'al10-3', arabic: 'صَلَّىٰ', transliteration: 'Salla', meaning: 'He prays' }
        ]
      },
      {
        id: '96-11',
        audio: getAudioUrl(96, 11),
        arabicFull: 'أَرَأَيْتَ إِن كَانَ عَلَى الْهُدَىٰ',
        translation: 'Have you seen if he is upon guidance',
        visual: 'guidance',
        lesson: 'Imagine the audacity of stopping someone who is actually walking the path of perfect truth.',
        words: [
          { id: 'al11-1', arabic: 'أَرَأَيْتَ', transliteration: 'Ara\'ayta', meaning: 'Have you seen' },
          { id: 'al11-2', arabic: 'إِن', transliteration: 'In', meaning: 'If' },
          { id: 'al11-3', arabic: 'كَانَ', transliteration: 'Kana', meaning: 'He is' },
          { id: 'al11-4', arabic: 'عَلَى', transliteration: '\'Ala', meaning: 'Upon' },
          { id: 'al11-5', arabic: 'الْهُدَىٰ', transliteration: 'Al-huda', meaning: 'Guidance' }
        ]
      },
      {
        id: '96-12',
        audio: getAudioUrl(96, 12),
        arabicFull: 'أَوْ أَمَرَ بِالتَّقْوَىٰ',
        translation: 'Or enjoins righteousness?',
        visual: 'righteousness',
        lesson: 'The Prophet only commanded people to do good and fear Allah.',
        words: [
          { id: 'al12-1', arabic: 'أَوْ', transliteration: 'Aw', meaning: 'Or' },
          { id: 'al12-2', arabic: 'أَمَرَ', transliteration: 'Amara', meaning: 'Enjoins / Commands' },
          { id: 'al12-3', arabic: 'بِالتَّقْوَىٰ', transliteration: 'Bit-taqwa', meaning: 'Righteousness / piety' }
        ]
      },
      {
        id: '96-13',
        audio: getAudioUrl(96, 13),
        arabicFull: 'أَرَأَيْتَ إِن كَذَّبَ وَتَوَلَّىٰ',
        translation: 'Have you seen if he denies and turns away -',
        visual: 'denial',
        lesson: 'A question to prompt reflection on the terrible state of Abu Jahl who rejected clear truth.',
        words: [
          { id: 'al13-1', arabic: 'أَرَأَيْتَ', transliteration: 'Ara\'ayta', meaning: 'Have you seen' },
          { id: 'al13-2', arabic: 'إِن', transliteration: 'In', meaning: 'If' },
          { id: 'al13-3', arabic: 'كَذَّبَ', transliteration: 'Kadhdhaba', meaning: 'He denies' },
          { id: 'al13-4', arabic: 'وَتَوَلَّىٰ', transliteration: 'Wa-tawalla', meaning: 'And turns away' }
        ]
      },
      {
        id: '96-14',
        audio: getAudioUrl(96, 14),
        arabicFull: 'أَلَمْ يَعْلَم بِأَنَّ اللَّهَ يَرَىٰ',
        translation: 'Does he not know that Allah sees?',
        visual: 'allah_sees',
        lesson: 'A profound reminder: whether in public or in secret, nothing escapes the sight of the Creator.',
        words: [
          { id: 'al14-1', arabic: 'أَلَمْ', transliteration: 'A-lam', meaning: 'Does he not' },
          { id: 'al14-2', arabic: 'يَعْلَم', transliteration: 'Ya\'lam', meaning: 'Know' },
          { id: 'al14-3', arabic: 'بِأَنَّ', transliteration: 'Bi-anna', meaning: 'That' },
          { id: 'al14-4', arabic: 'اللَّهَ', transliteration: 'Allaha', meaning: 'Allah' },
          { id: 'al14-5', arabic: 'يَرَىٰ', transliteration: 'Yara', meaning: 'Sees' }
        ]
      },
      {
        id: '96-15',
        audio: getAudioUrl(96, 15),
        arabicFull: 'كَلَّا لَئِن لَّمْ يَنتَهِ لَنَسْفَعًا بِالنَّاصِيَةِ',
        translation: 'No! If he does not desist, We will surely drag him by the forelock -',
        visual: 'forelock_drag',
        lesson: 'A severe warning. The forelock (front of the head) is seized to humiliate the arrogant.',
        words: [
          { id: 'al15-1', arabic: 'كَلَّا', transliteration: 'Kalla', meaning: 'No!' },
          { id: 'al15-2', arabic: 'لَئِن', transliteration: 'La\'in', meaning: 'If' },
          { id: 'al15-3', arabic: 'لَّمْ', transliteration: 'Lam', meaning: 'Not' },
          { id: 'al15-4', arabic: 'يَنتَهِ', transliteration: 'Yantahi', meaning: 'He desists / stops' },
          { id: 'al15-5', arabic: 'لَنَسْفَعًا', transliteration: 'Lanasfa\'an', meaning: 'We will surely drag him' },
          { id: 'al15-6', arabic: 'بِالنَّاصِيَةِ', transliteration: 'Bin-nasiyati', meaning: 'By the forelock' }
        ]
      },
      {
        id: '96-16',
        audio: getAudioUrl(96, 16),
        arabicFull: 'نَاصِيَةٍ كَاذِبَةٍ خَاطِئَةٍ',
        translation: 'A lying, sinning forelock.',
        visual: 'brain_sin',
        lesson: 'Modern science reveals the prefrontal cortex (the forelock) is responsible for lying and sinful decisions.',
        words: [
          { id: 'al16-1', arabic: 'نَاصِيَةٍ', transliteration: 'Nasiyatin', meaning: 'A forelock' },
          { id: 'al16-2', arabic: 'كَاذِبَةٍ', transliteration: 'Kadhibatin', meaning: 'Lying' },
          { id: 'al16-3', arabic: 'خَاطِئَةٍ', transliteration: 'Khati\'atin', meaning: 'Sinning' }
        ]
      },
      {
        id: '96-17',
        audio: getAudioUrl(96, 17),
        arabicFull: 'فَلْيَدْعُ نَادِيَهُ',
        translation: 'Then let him call his associates;',
        visual: 'call_gang',
        lesson: 'Abu Jahl threatened the Prophet with his gang. Allah challenges him to bring them all.',
        words: [
          { id: 'al17-1', arabic: 'فَلْيَدْعُ', transliteration: 'Falyad\'u', meaning: 'Then let him call' },
          { id: 'al17-2', arabic: 'نَادِيَهُ', transliteration: 'Nadiyahu', meaning: 'His associates / council' }
        ]
      },
      {
        id: '96-18',
        audio: getAudioUrl(96, 18),
        arabicFull: 'سَنَدْعُ الزَّبَانِيَةَ',
        translation: 'We will call the angels of Hell.',
        visual: 'hell_angels',
        lesson: 'A human gang is absolutely nothing compared to the terrifying guardians of Hellfire.',
        words: [
          { id: 'al18-1', arabic: 'سَنَدْعُ', transliteration: 'Sanad\'u', meaning: 'We will call' },
          { id: 'al18-2', arabic: 'الزَّبَانِيَةَ', transliteration: 'Az-zabaniyata', meaning: 'The angels of Hell' }
        ]
      },
      {
        id: '96-19',
        audio: getAudioUrl(96, 19),
        arabicFull: 'كَلَّا لَا تُطِعْهُ وَاسْجُدْ وَاقْتَرِب ۩',
        translation: 'No! Do not obey him. But prostrate and draw near [to Allah].',
        visual: 'prostrate',
        lesson: 'The Surah ends beautifully: ignore the haters, put your head on the ground, and draw closer to your Lord.',
        words: [
          { id: 'al19-1', arabic: 'كَلَّا', transliteration: 'Kalla', meaning: 'No!' },
          { id: 'al19-2', arabic: 'لَا', transliteration: 'La', meaning: 'Do not' },
          { id: 'al19-3', arabic: 'تُطِعْهُ', transliteration: 'Tuti\'hu', meaning: 'Obey him' },
          { id: 'al19-4', arabic: 'وَاسْجُدْ', transliteration: 'Wasjud', meaning: 'And prostrate' },
          { id: 'al19-5', arabic: 'وَاقْتَرِب', transliteration: 'Waqtarib', meaning: 'And draw near' }
        ]
      }
    ]
  },

  // --- 95. AT-TIN (Uses 'Star' & 'teal') ---
  {
    id: 'tin',
    number: 95,
    title: 'At-Tin',
    meaning: 'The Fig',
    story: 'Allah swears by sacred locations associated with major prophets (Jesus, Moses, and Muhammad) to emphasize a profound truth: humanity is created in the most beautiful, upright form, but without faith, we degrade to the absolute lowest of the low.',
    color: 'teal',
    themeGradient: 'from-teal-500 to-emerald-800',
    iconName: 'Star',
    totalVerses: 8,
    levels: [
      {
        id: '95-1',
        audio: getAudioUrl(95, 1),
        arabicFull: 'وَالتِّينِ وَالزَّيْتُونِ',
        translation: 'By the fig and the olive',
        visual: 'fig_olive',
        lesson: 'Oaths representing the lands of Palestine and Syria, where Prophet Isa (Jesus) received revelation.',
        words: [
          { id: 'tn1-1', arabic: 'وَالتِّينِ', transliteration: 'Wat-tini', meaning: 'By the fig' },
          { id: 'tn1-2', arabic: 'وَالزَّيْتُونِ', transliteration: 'Waz-zaytuni', meaning: 'And the olive' }
        ]
      },
      {
        id: '95-2',
        audio: getAudioUrl(95, 2),
        arabicFull: 'وَطُورِ سِينِينَ',
        translation: 'And [by] Mount Sinai',
        visual: 'mount_sinai',
        lesson: 'The sacred mountain where Prophet Musa (Moses) spoke directly to Allah.',
        words: [
          { id: 'tn2-1', arabic: 'وَطُورِ', transliteration: 'Wa-turi', meaning: 'And Mount' },
          { id: 'tn2-2', arabic: 'سِينِينَ', transliteration: 'Sinina', meaning: 'Sinai' }
        ]
      },
      {
        id: '95-3',
        audio: getAudioUrl(95, 3),
        arabicFull: 'وَهَٰذَا الْبَلَدِ الْأَمِينِ',
        translation: 'And [by] this secure city [Makkah],',
        visual: 'makkah',
        lesson: 'The sanctuary of Makkah, where Prophet Muhammad (ﷺ) received his revelations.',
        words: [
          { id: 'tn3-1', arabic: 'وَهَٰذَا', transliteration: 'Wa-hadha', meaning: 'And this' },
          { id: 'tn3-2', arabic: 'الْبَلَدِ', transliteration: 'Al-baladi', meaning: 'The city' },
          { id: 'tn3-3', arabic: 'الْأَمِينِ', transliteration: 'Al-amini', meaning: 'Secure / Trustworthy' }
        ]
      },
      {
        id: '95-4',
        audio: getAudioUrl(95, 4),
        arabicFull: 'لَقَدْ خَلَقْنَا الْإِنسَانَ فِي أَحْسَنِ تَقْوِيمٍ',
        translation: 'We have certainly created man in the best of stature;',
        visual: 'perfect_creation',
        lesson: 'Humans are biologically, intellectually, and spiritually designed with absolute perfection by Allah.',
        words: [
          { id: 'tn4-1', arabic: 'لَقَدْ', transliteration: 'Laqad', meaning: 'We have certainly' },
          { id: 'tn4-2', arabic: 'خَلَقْنَا', transliteration: 'Khalaqna', meaning: 'Created' },
          { id: 'tn4-3', arabic: 'الْإِنسَانَ', transliteration: 'Al-insana', meaning: 'Man' },
          { id: 'tn4-4', arabic: 'فِي', transliteration: 'Fi', meaning: 'In' },
          { id: 'tn4-5', arabic: 'أَحْسَنِ', transliteration: 'Ahsani', meaning: 'The best' },
          { id: 'tn4-6', arabic: 'تَقْوِيمٍ', transliteration: 'Taqwimin', meaning: 'Stature / Mould' }
        ]
      },
      {
        id: '95-5',
        audio: getAudioUrl(95, 5),
        arabicFull: 'ثُمَّ رَدَدْنَاهُ أَسْفَلَ سَافِلِينَ',
        translation: 'Then We return him to the lowest of the low,',
        visual: 'lowest',
        lesson: 'Without faith and moral limits, a human being degrades and becomes worse than an animal.',
        words: [
          { id: 'tn5-1', arabic: 'ثُمَّ', transliteration: 'Thumma', meaning: 'Then' },
          { id: 'tn5-2', arabic: 'رَدَدْنَاهُ', transliteration: 'Radadnahu', meaning: 'We return him' },
          { id: 'tn5-3', arabic: 'أَسْفَلَ', transliteration: 'Asfala', meaning: 'To the lowest' },
          { id: 'tn5-4', arabic: 'سَافِلِينَ', transliteration: 'Safilina', meaning: 'Of the low' }
        ]
      },
      {
        id: '95-6',
        audio: getAudioUrl(95, 6),
        arabicFull: 'إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ فَلَهُمْ أَجْرٌ غَيْرُ مَمْنُونٍ',
        translation: 'Except for those who believe and do righteous deeds, for they will have a reward uninterrupted.',
        visual: 'reward_continuous',
        lesson: 'The only way to maintain our dignified human status is through strong faith paired with good actions.',
        words: [
          { id: 'tn6-1', arabic: 'إِلَّا', transliteration: 'Illa', meaning: 'Except' },
          { id: 'tn6-2', arabic: 'الَّذِينَ', transliteration: 'Alladhina', meaning: 'Those who' },
          { id: 'tn6-3', arabic: 'آمَنُوا', transliteration: 'Amanu', meaning: 'Believe' },
          { id: 'tn6-4', arabic: 'وَعَمِلُوا', transliteration: 'Wa-\'amilu', meaning: 'And do' },
          { id: 'tn6-5', arabic: 'الصَّالِحَاتِ', transliteration: 'As-salihati', meaning: 'Righteous deeds' },
          { id: 'tn6-6', arabic: 'فَلَهُمْ', transliteration: 'Fa-lahum', meaning: 'Then for them' },
          { id: 'tn6-7', arabic: 'أَجْرٌ', transliteration: 'Ajrun', meaning: 'Is a reward' },
          { id: 'tn6-8', arabic: 'غَيْرُ', transliteration: 'Ghayru', meaning: 'Never' },
          { id: 'tn6-9', arabic: 'مَمْنُونٍ', transliteration: 'Mamnunin', meaning: 'Interrupted / Cut off' }
        ]
      },
      {
        id: '95-7',
        audio: getAudioUrl(95, 7),
        arabicFull: 'فَمَا يُكَذِّبُكَ بَعْدُ بِالدِّينِ',
        translation: 'So what yet causes you to deny the Recompense?',
        visual: 'questioning',
        lesson: 'After seeing all the signs of Allah\'s power and justice, what excuse is left to deny the Day of Judgment?',
        words: [
          { id: 'tn7-1', arabic: 'فَمَا', transliteration: 'Fa-ma', meaning: 'So what' },
          { id: 'tn7-2', arabic: 'يُكَذِّبُكَ', transliteration: 'Yukadhdhibuka', meaning: 'Makes you deny' },
          { id: 'tn7-3', arabic: 'بَعْدُ', transliteration: 'Ba\'du', meaning: 'After this' },
          { id: 'tn7-4', arabic: 'بِالدِّينِ', transliteration: 'Bid-dini', meaning: 'The Recompense / Judgment' }
        ]
      },
      {
        id: '95-8',
        audio: getAudioUrl(95, 8),
        arabicFull: 'أَلَيْسَ اللَّهُ بِأَحْكَمِ الْحَاكِمِينَ',
        translation: 'Is not Allah the most just of judges?',
        visual: 'scales_justice',
        lesson: 'A rhetorical close. Of course, the Creator who designed us so perfectly will judge our actions fairly.',
        words: [
          { id: 'tn8-1', arabic: 'أَلَيْسَ', transliteration: 'A-laysa', meaning: 'Is not' },
          { id: 'tn8-2', arabic: 'اللَّهُ', transliteration: 'Allahu', meaning: 'Allah' },
          { id: 'tn8-3', arabic: 'بِأَحْكَمِ', transliteration: 'Bi-ahkami', meaning: 'The most just / wise' },
          { id: 'tn8-4', arabic: 'الْحَاكِمِينَ', transliteration: 'Al-hakimina', meaning: 'Of judges' }
        ]
      }
    ]
  },

  // --- 94. ASH-SHARH (Uses 'Heart' & 'rose') ---
  {
    id: 'sharh',
    number: 94,
    title: 'Ash-Sharh',
    meaning: 'The Relief',
    story: 'A deeply comforting Surah revealed to the Prophet (ﷺ) during a time of immense stress. It reminds him (and us) of how Allah expands the chest with peace, removes heavy burdens, and guarantees that ease is deeply embedded within every hardship.',
    color: 'rose',
    themeGradient: 'from-pink-500 to-rose-700',
    iconName: 'Heart',
    totalVerses: 8,
    levels: [
      {
        id: '94-1',
        audio: getAudioUrl(94, 1),
        arabicFull: 'أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ',
        translation: 'Did We not expand for you, [O Muhammad], your breast?',
        visual: 'expand_chest',
        lesson: 'To "expand the breast" means Allah filled his heart with peace, courage, and light to handle his heavy mission.',
        words: [
          { id: 'sh1-1', arabic: 'أَلَمْ', transliteration: 'A-lam', meaning: 'Did We not' },
          { id: 'sh1-2', arabic: 'نَشْرَحْ', transliteration: 'Nashrah', meaning: 'Expand' },
          { id: 'sh1-3', arabic: 'لَكَ', transliteration: 'Laka', meaning: 'For you' },
          { id: 'sh1-4', arabic: 'صَدْرَكَ', transliteration: 'Sadraka', meaning: 'Your breast / heart' }
        ]
      },
      {
        id: '94-2',
        audio: getAudioUrl(94, 2),
        arabicFull: 'وَوَضَعْنَا عَنكَ وِزْرَكَ',
        translation: 'And We removed from you your burden',
        visual: 'burden_lifted',
        lesson: 'The anxiety and sorrow of seeing his people in misguidance was a crushing weight that Allah lifted.',
        words: [
          { id: 'sh2-1', arabic: 'وَوَضَعْنَا', transliteration: 'Wa-wada\'na', meaning: 'And We removed' },
          { id: 'sh2-2', arabic: 'عَنكَ', transliteration: '\'Anka', meaning: 'From you' },
          { id: 'sh2-3', arabic: 'وِزْرَكَ', transliteration: 'Wizraka', meaning: 'Your burden' }
        ]
      },
      {
        id: '94-3',
        audio: getAudioUrl(94, 3),
        arabicFull: 'الَّذِي أَنقَضَ ظَهْرَكَ',
        translation: 'Which had weighed upon your back',
        visual: 'heavy_back',
        lesson: 'The burden was so immense it physically felt like his back was cracking under the pressure.',
        words: [
          { id: 'sh3-1', arabic: 'الَّذِي', transliteration: 'Alladhi', meaning: 'Which' },
          { id: 'sh3-2', arabic: 'أَنقَضَ', transliteration: 'Anqada', meaning: 'Weighed heavily on / cracked' },
          { id: 'sh3-3', arabic: 'ظَهْرَكَ', transliteration: 'Zahraka', meaning: 'Your back' }
        ]
      },
      {
        id: '94-4',
        audio: getAudioUrl(94, 4),
        arabicFull: 'وَرَفَعْنَا لَكَ ذِكْرَكَ',
        translation: 'And raised high for you your repute.',
        visual: 'raised_name',
        lesson: 'Despite being mocked by his enemies, Allah elevated his name so that it is mentioned in every prayer worldwide forever.',
        words: [
          { id: 'sh4-1', arabic: 'وَرَفَعْنَا', transliteration: 'Wa-rafa\'na', meaning: 'And We raised high' },
          { id: 'sh4-2', arabic: 'لَكَ', transliteration: 'Laka', meaning: 'For you' },
          { id: 'sh4-3', arabic: 'ذِكْرَكَ', transliteration: 'Dhikraka', meaning: 'Your repute / mention' }
        ]
      },
      {
        id: '94-5',
        audio: getAudioUrl(94, 5),
        arabicFull: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا',
        translation: 'For indeed, with hardship [will be] ease.',
        visual: 'ease',
        lesson: 'Ease doesn\'t come *after* the hardship; it comes *with* it. Inside every difficult situation, Allah has already planted relief.',
        words: [
          { id: 'sh5-1', arabic: 'فَإِنَّ', transliteration: 'Fa-inna', meaning: 'For indeed' },
          { id: 'sh5-2', arabic: 'مَعَ', transliteration: 'Ma\'a', meaning: 'With' },
          { id: 'sh5-3', arabic: 'الْعُسْرِ', transliteration: 'Al-\'usri', meaning: 'The hardship' },
          { id: 'sh5-4', arabic: 'يُسْرًا', transliteration: 'Yusran', meaning: 'Is ease' }
        ]
      },
      {
        id: '94-6',
        audio: getAudioUrl(94, 6),
        arabicFull: 'إِنَّ مَعَ الْعُسْرِ يُسْرًا',
        translation: 'Indeed, with hardship [will be] ease.',
        visual: 'ease_repeated',
        lesson: 'Repeated for absolute certainty. The Arabic grammar implies that for every *one* hardship, there are *multiple* eases.',
        words: [
          { id: 'sh6-1', arabic: 'إِنَّ', transliteration: 'Inna', meaning: 'Indeed' },
          { id: 'sh6-2', arabic: 'مَعَ', transliteration: 'Ma\'a', meaning: 'With' },
          { id: 'sh6-3', arabic: 'الْعُسْرِ', transliteration: 'Al-\'usri', meaning: 'The hardship' },
          { id: 'sh6-4', arabic: 'يُسْرًا', transliteration: 'Yusran', meaning: 'Is ease' }
        ]
      },
      {
        id: '94-7',
        audio: getAudioUrl(94, 7),
        arabicFull: 'فَإِذَا فَرَغْتَ فَانصَبْ',
        translation: 'So when you have finished [your duties], then stand up [for worship].',
        visual: 'worship_stand',
        lesson: 'When worldly work is done, don\'t just idle away. Find your rest and energy by turning to prayer.',
        words: [
          { id: 'sh7-1', arabic: 'فَإِذَا', transliteration: 'Fa-idha', meaning: 'So when' },
          { id: 'sh7-2', arabic: 'فَرَغْتَ', transliteration: 'Faraghta', meaning: 'You have finished' },
          { id: 'sh7-3', arabic: 'فَانصَبْ', transliteration: 'Fansab', meaning: 'Then labor hard / stand up' }
        ]
      },
      {
        id: '94-8',
        audio: getAudioUrl(94, 8),
        arabicFull: 'وَإِلَىٰ رَبِّكَ فَارْغَب',
        translation: 'And to your Lord direct [your] longing.',
        visual: 'longing',
        lesson: 'Make Allah your ultimate goal. Let all your hopes, desires, and ambitions be tied to pleasing Him.',
        words: [
          { id: 'sh8-1', arabic: 'وَإِلَىٰ', transliteration: 'Wa-ila', meaning: 'And to' },
          { id: 'sh8-2', arabic: 'رَبِّكَ', transliteration: 'Rabbika', meaning: 'Your Lord' },
          { id: 'sh8-3', arabic: 'فَارْغَب', transliteration: 'Farghab', meaning: 'Direct your longing' }
        ]
      }
    ]
  },

  // --- 93. AD-DUHAA (Uses 'Sun' & 'amber') ---
  {
    id: 'duhaa',
    number: 93,
    title: 'Ad-Duhaa',
    meaning: 'The Morning Hours',
    story: 'Revelation had paused for a while, and the Prophet (ﷺ) was deeply depressed, fearing Allah hated him. Allah revealed this beautiful Surah like a warm sunrise, assuring him of His love, reminding him of past blessings, and promising a brilliant future.',
    color: 'amber',
    themeGradient: 'from-amber-400 to-orange-600',
    iconName: 'Sun',
    totalVerses: 11,
    levels: [
      {
        id: '93-1',
        audio: getAudioUrl(93, 1),
        arabicFull: 'وَالضُّحَىٰ',
        translation: 'By the morning brightness',
        visual: 'morning',
        lesson: 'Allah swears by the rising sun, symbolizing hope, warmth, and the return of light after a dark period.',
        words: [
          { id: 'dh1-1', arabic: 'وَالضُّحَىٰ', transliteration: 'Wad-duha', meaning: 'By the morning brightness' }
        ]
      },
      {
        id: '93-2',
        audio: getAudioUrl(93, 2),
        arabicFull: 'وَاللَّيْلِ إِذَا سَجَىٰ',
        translation: 'And [by] the night when it covers with darkness,',
        visual: 'night_still',
        lesson: 'The stillness of the night is normal and peaceful, just like the pause in revelation was a peaceful break, not a punishment.',
        words: [
          { id: 'dh2-1', arabic: 'وَاللَّيْلِ', transliteration: 'Wal-layli', meaning: 'And the night' },
          { id: 'dh2-2', arabic: 'إِذَا', transliteration: 'Idha', meaning: 'When' },
          { id: 'dh2-3', arabic: 'سَجَىٰ', transliteration: 'Saja', meaning: 'It covers / grows still' }
        ]
      },
      {
        id: '93-3',
        audio: getAudioUrl(93, 3),
        arabicFull: 'مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ',
        translation: 'Your Lord has not taken leave of you, [O Muhammad], nor has He detested [you].',
        visual: 'no_abandonment',
        lesson: 'A direct, comforting answer to his depression: Allah has not abandoned you, and He certainly does not hate you.',
        words: [
          { id: 'dh3-1', arabic: 'مَا', transliteration: 'Ma', meaning: 'Has not' },
          { id: 'dh3-2', arabic: 'وَدَّعَكَ', transliteration: 'Wadda\'aka', meaning: 'Forsaken you' },
          { id: 'dh3-3', arabic: 'رَبُّكَ', transliteration: 'Rabbuka', meaning: 'Your Lord' },
          { id: 'dh3-4', arabic: 'وَمَا', transliteration: 'Wa-ma', meaning: 'And has not' },
          { id: 'dh3-5', arabic: 'قَلَىٰ', transliteration: 'Qala', meaning: 'Hated / detested' }
        ]
      },
      {
        id: '93-4',
        audio: getAudioUrl(93, 4),
        arabicFull: 'وَلَلْآخِرَةُ خَيْرٌ لَّكَ مِنَ الْأُولَىٰ',
        translation: 'And the Hereafter is better for you than the first [life].',
        visual: 'hereafter_better',
        lesson: 'Whatever struggles exist now, the future (both later in life and in Jannah) will be vastly superior.',
        words: [
          { id: 'dh4-1', arabic: 'وَلَلْآخِرَةُ', transliteration: 'Wa-lal-akhiratu', meaning: 'And the Hereafter' },
          { id: 'dh4-2', arabic: 'خَيْرٌ', transliteration: 'Khayrun', meaning: 'Is better' },
          { id: 'dh4-3', arabic: 'لَّكَ', transliteration: 'Laka', meaning: 'For you' },
          { id: 'dh4-4', arabic: 'مِنَ', transliteration: 'Mina', meaning: 'Than' },
          { id: 'dh4-5', arabic: 'الْأُولَىٰ', transliteration: 'Al-ula', meaning: 'The first (this life)' }
        ]
      },
      {
        id: '93-5',
        audio: getAudioUrl(93, 5),
        arabicFull: 'وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ',
        translation: 'And your Lord is going to give you, and you will be satisfied.',
        visual: 'satisfaction',
        lesson: 'An incredible promise: Allah will keep giving to the Prophet until his heart is completely happy.',
        words: [
          { id: 'dh5-1', arabic: 'وَلَسَوْفَ', transliteration: 'Wa-lasawfa', meaning: 'And soon' },
          { id: 'dh5-2', arabic: 'يُعْطِيكَ', transliteration: 'Yu\'tika', meaning: 'Will give you' },
          { id: 'dh5-3', arabic: 'رَبُّكَ', transliteration: 'Rabbuka', meaning: 'Your Lord' },
          { id: 'dh5-4', arabic: 'فَتَرْضَىٰ', transliteration: 'Fa-tarda', meaning: 'So you will be satisfied' }
        ]
      },
      {
        id: '93-6',
        audio: getAudioUrl(93, 6),
        arabicFull: 'أَلَمْ يَجِدْكَ يَتِيمًا فَآوَىٰ',
        translation: 'Did He not find you an orphan and give [you] refuge?',
        visual: 'orphan_refuge',
        lesson: 'Allah proves His love by reminding the Prophet of his past. He was an orphan, but Allah protected him.',
        words: [
          { id: 'dh6-1', arabic: 'أَلَمْ', transliteration: 'A-lam', meaning: 'Did He not' },
          { id: 'dh6-2', arabic: 'يَجِدْكَ', transliteration: 'Yajidka', meaning: 'Find you' },
          { id: 'dh6-3', arabic: 'يَتِيمًا', transliteration: 'Yatiman', meaning: 'An orphan' },
          { id: 'dh6-4', arabic: 'فَآوَىٰ', transliteration: 'Fa-awa', meaning: 'And give refuge' }
        ]
      },
      {
        id: '93-7',
        audio: getAudioUrl(93, 7),
        arabicFull: 'وَوَجَدَكَ ضَالًّا فَهَدَىٰ',
        translation: 'And He found you lost and guided [you],',
        visual: 'guided',
        lesson: 'Before Prophethood, he was searching for the truth in a society of idol-worshippers, and Allah guided him directly.',
        words: [
          { id: 'dh7-1', arabic: 'وَوَجَدَكَ', transliteration: 'Wa-wajadaka', meaning: 'And He found you' },
          { id: 'dh7-2', arabic: 'ضَالًّا', transliteration: 'Dallan', meaning: 'Lost / wandering' },
          { id: 'dh7-3', arabic: 'فَهَدَىٰ', transliteration: 'Fa-hada', meaning: 'And guided' }
        ]
      },
      {
        id: '93-8',
        audio: getAudioUrl(93, 8),
        arabicFull: 'وَوَجَدَكَ عَائِلًا فَأَغْنَىٰ',
        translation: 'And He found you poor and made [you] self-sufficient.',
        visual: 'enriched',
        lesson: 'He was financially struggling, but Allah enriched him (spiritually and through his marriage to Khadijah).',
        words: [
          { id: 'dh8-1', arabic: 'وَوَجَدَكَ', transliteration: 'Wa-wajadaka', meaning: 'And He found you' },
          { id: 'dh8-2', arabic: 'عَائِلًا', transliteration: '\'A\'ilan', meaning: 'Poor / in need' },
          { id: 'dh8-3', arabic: 'فَأَغْنَىٰ', transliteration: 'Fa-aghna', meaning: 'And made self-sufficient' }
        ]
      },
      {
        id: '93-9',
        audio: getAudioUrl(93, 9),
        arabicFull: 'فَأَمَّا الْيَتِيمَ فَلَا تَقْهَرْ',
        translation: 'So as for the orphan, do not oppress [him].',
        visual: 'care_orphan',
        lesson: 'Because you were once an orphan, be the kindest person to orphans.',
        words: [
          { id: 'dh9-1', arabic: 'فَأَمَّا', transliteration: 'Fa-amma', meaning: 'So as for' },
          { id: 'dh9-2', arabic: 'الْيَتِيمَ', transliteration: 'Al-yatima', meaning: 'The orphan' },
          { id: 'dh9-3', arabic: 'فَلَا', transliteration: 'Fa-la', meaning: 'Do not' },
          { id: 'dh9-4', arabic: 'تَقْهَرْ', transliteration: 'Taqhar', meaning: 'Oppress' }
        ]
      },
      {
        id: '93-10',
        audio: getAudioUrl(93, 10),
        arabicFull: 'وَأَمَّا السَّائِلَ فَلَا تَنْهَرْ',
        translation: 'And as for the petitioner, do not repel [him].',
        visual: 'help_asker',
        lesson: 'Because you were once seeking answers and wealth, never scold someone who asks you for help or knowledge.',
        words: [
          { id: 'dh10-1', arabic: 'وَأَمَّا', transliteration: 'Wa-amma', meaning: 'And as for' },
          { id: 'dh10-2', arabic: 'السَّائِلَ', transliteration: 'As-sa\'ila', meaning: 'The petitioner / asker' },
          { id: 'dh10-3', arabic: 'فَلَا', transliteration: 'Fa-la', meaning: 'Do not' },
          { id: 'dh10-4', arabic: 'تَنْهَرْ', transliteration: 'Tanhar', meaning: 'Repel / scold' }
        ]
      },
      {
        id: '93-11',
        audio: getAudioUrl(93, 11),
        arabicFull: 'وَأَمَّا بِنِعْمَةِ رَبِّكَ فَحَدِّثْ',
        translation: 'But as for the favor of your Lord, report [it].',
        visual: 'proclaim_blessing',
        lesson: 'Show gratitude by verbally acknowledging Allah\'s blessings and using them to help others.',
        words: [
          { id: 'dh11-1', arabic: 'وَأَمَّا', transliteration: 'Wa-amma', meaning: 'And as for' },
          { id: 'dh11-2', arabic: 'بِنِعْمَةِ', transliteration: 'Bi-ni\'mati', meaning: 'The favor / blessing' },
          { id: 'dh11-3', arabic: 'رَبِّكَ', transliteration: 'Rabbika', meaning: 'Of your Lord' },
          { id: 'dh11-4', arabic: 'فَحَدِّثْ', transliteration: 'Fa-haddith', meaning: 'Report / proclaim' }
        ]
      }
    ]
  },

// --- 92. AL-LAYL (Uses 'Moon' & 'indigo') ---
  {
    id: 'layl',
    number: 92,
    title: 'Al-Layl',
    meaning: 'The Night',
    story: 'This Surah contrasts the two main paths of life: the path of giving, righteousness, and ease versus the path of hoarding, arrogance, and difficulty. It promises that those who give purely to seek the face of their Lord will ultimately be satisfied.',
    color: 'indigo',
    themeGradient: 'from-indigo-800 to-slate-900',
    iconName: 'Moon',
    totalVerses: 21,
    levels: [
      {
        id: '92-1',
        audio: getAudioUrl(92, 1),
        arabicFull: 'وَاللَّيْلِ إِذَا يَغْشَىٰ',
        translation: 'By the night when it covers,',
        visual: 'night_cover',
        lesson: 'Allah swears by the night as it envelops the earth, concealing things in darkness.',
        words: [
          { id: 'ly1-1', arabic: 'وَ', transliteration: 'Wa', meaning: 'By (oath)' },
          { id: 'ly1-2', arabic: 'اللَّيْلِ', transliteration: 'Al-layli', meaning: 'The night' },
          { id: 'ly1-3', arabic: 'إِذَا', transliteration: 'Idha', meaning: 'When' },
          { id: 'ly1-4', arabic: 'يَغْشَىٰ', transliteration: 'Yaghsha', meaning: 'It covers / envelops' }
        ]
      },
      {
        id: '92-2',
        audio: getAudioUrl(92, 2),
        arabicFull: 'وَالنَّهَارِ إِذَا تَجَلَّىٰ',
        translation: 'And [by] the day when it appears,',
        visual: 'daylight',
        lesson: 'The sharp contrast: just as day and night are completely different, so are the actions of human beings.',
        words: [
          { id: 'ly2-1', arabic: 'وَ', transliteration: 'Wa', meaning: 'And by' },
          { id: 'ly2-2', arabic: 'النَّهَارِ', transliteration: 'An-nahari', meaning: 'The day' },
          { id: 'ly2-3', arabic: 'إِذَا', transliteration: 'Idha', meaning: 'When' },
          { id: 'ly2-4', arabic: 'تَجَلَّىٰ', transliteration: 'Tajalla', meaning: 'It appears / shines forth' }
        ]
      },
      {
        id: '92-3',
        audio: getAudioUrl(92, 3),
        arabicFull: 'وَمَا خَلَقَ الذَّكَرَ وَالْأُنثَىٰ',
        translation: 'And [by] He who created the male and female,',
        visual: 'creation',
        lesson: 'Allah highlights the fundamental duality in creation, pointing to His incredible design.',
        words: [
          { id: 'ly3-1', arabic: 'وَمَا', transliteration: 'Wa-ma', meaning: 'And by what / He who' },
          { id: 'ly3-2', arabic: 'خَلَقَ', transliteration: 'Khalaqa', meaning: 'Created' },
          { id: 'ly3-3', arabic: 'الذَّكَرَ', transliteration: 'Adh-dhakara', meaning: 'The male' },
          { id: 'ly3-4', arabic: 'وَالْأُنثَىٰ', transliteration: 'Wal-untha', meaning: 'And the female' }
        ]
      },
      {
        id: '92-4',
        audio: getAudioUrl(92, 4),
        arabicFull: 'إِنَّ سَعْيَكُمْ لَشَتَّىٰ',
        translation: 'Indeed, your efforts are diverse.',
        visual: 'paths',
        lesson: 'Humanity is running in a million different directions. Some are working towards heaven, others towards their own ruin.',
        words: [
          { id: 'ly4-1', arabic: 'إِنَّ', transliteration: 'Inna', meaning: 'Indeed' },
          { id: 'ly4-2', arabic: 'سَعْيَكُمْ', transliteration: 'Sa\'yakum', meaning: 'Your efforts / strivings' },
          { id: 'ly4-3', arabic: 'لَشَتَّىٰ', transliteration: 'La-shatta', meaning: 'Are surely diverse / scattered' }
        ]
      },
      {
        id: '92-5',
        audio: getAudioUrl(92, 5),
        arabicFull: 'فَأَمَّا مَنْ أَعْطَىٰ وَاتَّقَىٰ',
        translation: 'As for he who gives and fears Allah,',
        visual: 'give_fear',
        lesson: 'The first path of success: being generous with what you have while maintaining a mindful awe of God.',
        words: [
          { id: 'ly5-1', arabic: 'فَأَمَّا', transliteration: 'Fa-amma', meaning: 'As for' },
          { id: 'ly5-2', arabic: 'مَنْ', transliteration: 'Man', meaning: 'He who' },
          { id: 'ly5-3', arabic: 'أَعْطَىٰ', transliteration: 'A\'ta', meaning: 'Gives' },
          { id: 'ly5-4', arabic: 'وَاتَّقَىٰ', transliteration: 'Wattaqa', meaning: 'And fears Allah / is mindful' }
        ]
      },
      {
        id: '92-6',
        audio: getAudioUrl(92, 6),
        arabicFull: 'وَصَدَّقَ بِالْحُسْنَىٰ',
        translation: 'And believes in the best [reward],',
        visual: 'belief',
        lesson: 'Trusting completely that Allah will replace what you give with something infinitely better.',
        words: [
          { id: 'ly6-1', arabic: 'وَصَدَّقَ', transliteration: 'Wa-saddaqa', meaning: 'And believes / confirms' },
          { id: 'ly6-2', arabic: 'بِالْحُسْنَىٰ', transliteration: 'Bil-husna', meaning: 'In the best (reward)' }
        ]
      },
      {
        id: '92-7',
        audio: getAudioUrl(92, 7),
        arabicFull: 'فَسَنُيَسِّرُهُ لِلْيُسْرَىٰ',
        translation: 'We will ease him toward ease.',
        visual: 'ease',
        lesson: 'When you try to do good, Allah actually rewires your life and heart to make doing good feel natural and easy.',
        words: [
          { id: 'ly7-1', arabic: 'فَسَنُيَسِّرُهُ', transliteration: 'Fa-sanuyassiruhu', meaning: 'We will ease him' },
          { id: 'ly7-2', arabic: 'لِلْيُسْرَىٰ', transliteration: 'Lil-yusra', meaning: 'Toward ease / the easiest path' }
        ]
      },
      {
        id: '92-8',
        audio: getAudioUrl(92, 8),
        arabicFull: 'وَأَمَّا مَن بَخِلَ وَاسْتَغْنَىٰ',
        translation: 'But as for he who withholds and considers himself free of need,',
        visual: 'withhold',
        lesson: 'The second path: hoarding wealth and arrogantly thinking you don\'t need Allah\'s help.',
        words: [
          { id: 'ly8-1', arabic: 'وَأَمَّا', transliteration: 'Wa-amma', meaning: 'But as for' },
          { id: 'ly8-2', arabic: 'مَن', transliteration: 'Man', meaning: 'He who' },
          { id: 'ly8-3', arabic: 'بَخِلَ', transliteration: 'Bakhila', meaning: 'Withholds / is stingy' },
          { id: 'ly8-4', arabic: 'وَاسْتَغْنَىٰ', transliteration: 'Wastaghna', meaning: 'And considers himself free of need' }
        ]
      },
      {
        id: '92-9',
        audio: getAudioUrl(92, 9),
        arabicFull: 'وَكَذَّبَ بِالْحُسْنَىٰ',
        translation: 'And denies the best [reward],',
        visual: 'deny_reward',
        lesson: 'They don\'t give because they don\'t truly believe Allah will compensate them in the Hereafter.',
        words: [
          { id: 'ly9-1', arabic: 'وَكَذَّبَ', transliteration: 'Wa-kadhdhaba', meaning: 'And denies' },
          { id: 'ly9-2', arabic: 'بِالْحُسْنَىٰ', transliteration: 'Bil-husna', meaning: 'The best (reward)' }
        ]
      },
      {
        id: '92-10',
        audio: getAudioUrl(92, 10),
        arabicFull: 'فَسَنُيَسِّرُهُ لِلْعُسْرَىٰ',
        translation: 'We will ease him toward difficulty.',
        visual: 'difficulty',
        lesson: 'A terrifying reality: Allah will make the path of evil and ultimate destruction easy for them to walk down.',
        words: [
          { id: 'ly10-1', arabic: 'فَسَنُيَسِّرُهُ', transliteration: 'Fa-sanuyassiruhu', meaning: 'We will ease him' },
          { id: 'ly10-2', arabic: 'لِلْعُسْرَىٰ', transliteration: 'Lil-\'usra', meaning: 'Toward difficulty' }
        ]
      },
      {
        id: '92-11',
        audio: getAudioUrl(92, 11),
        arabicFull: 'وَمَا يُغْنِي عَنْهُ مَالُهُ إِذَا تَرَدَّىٰ',
        translation: 'And what will his wealth avail him when he falls?',
        visual: 'fall',
        lesson: 'All that hoarded money is absolutely useless when a person falls into the grave or into Hellfire.',
        words: [
          { id: 'ly11-1', arabic: 'وَمَا', transliteration: 'Wa-ma', meaning: 'And what' },
          { id: 'ly11-2', arabic: 'يُغْنِي', transliteration: 'Yughni', meaning: 'Will avail' },
          { id: 'ly11-3', arabic: 'عَنْهُ', transliteration: '\'Anhu', meaning: 'Him' },
          { id: 'ly11-4', arabic: 'مَالُهُ', transliteration: 'Maluhu', meaning: 'His wealth' },
          { id: 'ly11-5', arabic: 'إِذَا', transliteration: 'Idha', meaning: 'When' },
          { id: 'ly11-6', arabic: 'تَرَدَّىٰ', transliteration: 'Taradda', meaning: 'He falls (perishes)' }
        ]
      },
      {
        id: '92-12',
        audio: getAudioUrl(92, 12),
        arabicFull: 'إِنَّ عَلَيْنَا لَلْهُدَىٰ',
        translation: 'Indeed, [incumbent] upon Us is guidance.',
        visual: 'guidance',
        lesson: 'Allah has fulfilled His responsibility by making the path of truth completely clear to us.',
        words: [
          { id: 'ly12-1', arabic: 'إِنَّ', transliteration: 'Inna', meaning: 'Indeed' },
          { id: 'ly12-2', arabic: 'عَلَيْنَا', transliteration: '\'Alayna', meaning: 'Upon Us' },
          { id: 'ly12-3', arabic: 'لَلْهُدَىٰ', transliteration: 'Lal-huda', meaning: 'Is the guidance' }
        ]
      },
      {
        id: '92-13',
        audio: getAudioUrl(92, 13),
        arabicFull: 'وَإِنَّ لَنَا لَلْآخِرَةَ وَالْأُولَىٰ',
        translation: 'And indeed, to Us belongs the Hereafter and the first [life].',
        visual: 'ownership',
        lesson: 'Allah owns both this world and the next. You can only succeed in either by turning to Him.',
        words: [
          { id: 'ly13-1', arabic: 'وَإِنَّ', transliteration: 'Wa-inna', meaning: 'And indeed' },
          { id: 'ly13-2', arabic: 'لَنَا', transliteration: 'Lana', meaning: 'To Us belongs' },
          { id: 'ly13-3', arabic: 'لَلْآخِرَةَ', transliteration: 'Lal-akhirata', meaning: 'The Hereafter' },
          { id: 'ly13-4', arabic: 'وَالْأُولَىٰ', transliteration: 'Wal-ula', meaning: 'And the first (this life)' }
        ]
      },
      {
        id: '92-14',
        audio: getAudioUrl(92, 14),
        arabicFull: 'فَأَنذَرْتُكُمْ نَارًا تَلَظَّىٰ',
        translation: 'So I have warned you of a Fire which is blazing.',
        visual: 'fire_warning',
        lesson: 'A direct and clear warning so no one can say they didn\'t know.',
        words: [
          { id: 'ly14-1', arabic: 'فَأَنذَرْتُكُمْ', transliteration: 'Fa-andhartukum', meaning: 'So I have warned you' },
          { id: 'ly14-2', arabic: 'نَارًا', transliteration: 'Naran', meaning: 'A Fire' },
          { id: 'ly14-3', arabic: 'تَلَظَّىٰ', transliteration: 'Taladhdha', meaning: 'Blazing fiercely' }
        ]
      },
      {
        id: '92-15',
        audio: getAudioUrl(92, 15),
        arabicFull: 'لَا يَصْلَاهَا إِلَّا الْأَشْقَى',
        translation: 'None will [enter to] burn therein except the most wretched one.',
        visual: 'wretched',
        lesson: 'Hell is reserved for those who actively and stubbornly chose the path of ultimate misery.',
        words: [
          { id: 'ly15-1', arabic: 'لَا', transliteration: 'La', meaning: 'None' },
          { id: 'ly15-2', arabic: 'يَصْلَاهَا', transliteration: 'Yaslaha', meaning: 'Will burn therein' },
          { id: 'ly15-3', arabic: 'إِلَّا', transliteration: 'Illa', meaning: 'Except' },
          { id: 'ly15-4', arabic: 'الْأَشْقَى', transliteration: 'Al-ashqa', meaning: 'The most wretched' }
        ]
      },
      {
        id: '92-16',
        audio: getAudioUrl(92, 16),
        arabicFull: 'الَّذِي كَذَّبَ وَتَوَلَّىٰ',
        translation: 'Who had denied and turned away.',
        visual: 'turned_away',
        lesson: 'The two traits of the wretched: denying the truth internally, and physically turning away from good.',
        words: [
          { id: 'ly16-1', arabic: 'الَّذِي', transliteration: 'Alladhi', meaning: 'Who' },
          { id: 'ly16-2', arabic: 'كَذَّبَ', transliteration: 'Kadhdhaba', meaning: 'Denied' },
          { id: 'ly16-3', arabic: 'وَتَوَلَّىٰ', transliteration: 'Wa-tawalla', meaning: 'And turned away' }
        ]
      },
      {
        id: '92-17',
        audio: getAudioUrl(92, 17),
        arabicFull: 'وَسَيُجَنَّبُهَا الْأَتْقَى',
        translation: 'But the righteous one will avoid it -',
        visual: 'saved',
        lesson: 'The one who is deeply mindful of Allah (Al-Atqa) will be kept entirely away from the Fire.',
        words: [
          { id: 'ly17-1', arabic: 'وَسَيُجَنَّبُهَا', transliteration: 'Wa-sayujannabuha', meaning: 'And will be kept away from it' },
          { id: 'ly17-2', arabic: 'الْأَتْقَى', transliteration: 'Al-atqa', meaning: 'The most righteous' }
        ]
      },
      {
        id: '92-18',
        audio: getAudioUrl(92, 18),
        arabicFull: 'الَّذِي يُؤْتِي مَالَهُ يَتَزَكَّىٰ',
        translation: '[He] who gives [from] his wealth to purify himself',
        visual: 'charity_purify',
        lesson: 'True charity isn\'t just giving money; it\'s an act to cleanse your own heart from greed.',
        words: [
          { id: 'ly18-1', arabic: 'الَّذِي', transliteration: 'Alladhi', meaning: 'Who' },
          { id: 'ly18-2', arabic: 'يُؤْتِي', transliteration: 'Yu\'ti', meaning: 'Gives' },
          { id: 'ly18-3', arabic: 'مَالَهُ', transliteration: 'Malahu', meaning: 'His wealth' },
          { id: 'ly18-4', arabic: 'يَتَزَكَّىٰ', transliteration: 'Yatazakka', meaning: 'To purify himself' }
        ]
      },
      {
        id: '92-19',
        audio: getAudioUrl(92, 19),
        arabicFull: 'وَمَا لِأَحَدٍ عِندَهُ مِن نِّعْمَةٍ تُجْزَىٰ',
        translation: 'And not [giving] for anyone who has [done him] a favor to be rewarded',
        visual: 'no_strings',
        lesson: 'He doesn\'t give charity just to pay back a favor or to get people to praise him.',
        words: [
          { id: 'ly19-1', arabic: 'وَمَا', transliteration: 'Wa-ma', meaning: 'And not' },
          { id: 'ly19-2', arabic: 'لِأَحَدٍ', transliteration: 'Li-ahadin', meaning: 'For anyone' },
          { id: 'ly19-3', arabic: 'عِندَهُ', transliteration: '\'Indahu', meaning: 'With him' },
          { id: 'ly19-4', arabic: 'مِن نِّعْمَةٍ', transliteration: 'Min ni\'matin', meaning: 'Any favor' },
          { id: 'ly19-5', arabic: 'تُجْزَىٰ', transliteration: 'Tujza', meaning: 'To be rewarded / repaid' }
        ]
      },
      {
        id: '92-20',
        audio: getAudioUrl(92, 20),
        arabicFull: 'إِلَّا ابْتِغَاءَ وَجْهِ رَبِّهِ الْأَعْلَىٰ',
        translation: 'But only seeking the countenance of his Lord, Most High.',
        visual: 'seek_face',
        lesson: 'The highest level of sincerity: doing good purely to see the "Face" (pleasure) of Allah.',
        words: [
          { id: 'ly20-1', arabic: 'إِلَّا', transliteration: 'Illa', meaning: 'Except' },
          { id: 'ly20-2', arabic: 'ابْتِغَاءَ', transliteration: 'Ibtigha\'a', meaning: 'Seeking' },
          { id: 'ly20-3', arabic: 'وَجْهِ', transliteration: 'Wajhi', meaning: 'The countenance / Face' },
          { id: 'ly20-4', arabic: 'رَبِّهِ', transliteration: 'Rabbihi', meaning: 'Of his Lord' },
          { id: 'ly20-5', arabic: 'الْأَعْلَىٰ', transliteration: 'Al-a\'la', meaning: 'The Most High' }
        ]
      },
      {
        id: '92-21',
        audio: getAudioUrl(92, 21),
        arabicFull: 'وَلَسَوْفَ يَرْضَىٰ',
        translation: 'And he is going to be satisfied.',
        visual: 'satisfied',
        lesson: 'A beautiful guarantee. If you live for Allah, He will give you so much in Jannah that you will be completely satisfied.',
        words: [
          { id: 'ly21-1', arabic: 'وَلَسَوْفَ', transliteration: 'Wa-lasawfa', meaning: 'And soon' },
          { id: 'ly21-2', arabic: 'يَرْضَىٰ', transliteration: 'Yarda', meaning: 'He will be satisfied' }
        ]
      }
    ]
  },

  // --- 91. ASH-SHAMS (Uses 'Sun' & 'orange') ---
  {
    id: 'shams',
    number: 91,
    title: 'Ash-Shams',
    meaning: 'The Sun',
    story: 'This Surah contains the longest continuous series of oaths in the Quran (the sun, the moon, day, night, sky, earth, and the human soul). After building this massive cosmic stage, Allah reveals the ultimate formula for human success: whoever purifies their soul will succeed, and whoever corrupts it will fail.',
    color: 'orange',
    themeGradient: 'from-orange-400 to-red-500',
    iconName: 'Sun',
    totalVerses: 15,
    levels: [
      {
        id: '91-1',
        audio: getAudioUrl(91, 1),
        arabicFull: 'وَالشَّمْسِ وَضُحَاهَا',
        translation: 'By the sun and its brightness,',
        visual: 'sun',
        lesson: 'The series of oaths begins with the most powerful and visible force in our sky.',
        words: [
          { id: 'sm1-1', arabic: 'وَ', transliteration: 'Wa', meaning: 'By (oath)' },
          { id: 'sm1-2', arabic: 'الشَّمْسِ', transliteration: 'Ash-shamsi', meaning: 'The sun' },
          { id: 'sm1-3', arabic: 'وَ', transliteration: 'Wa', meaning: 'And' },
          { id: 'sm1-4', arabic: 'ضُحَاهَا', transliteration: 'Duhaha', meaning: 'Its brightness / morning light' }
        ]
      },
      {
        id: '91-2',
        audio: getAudioUrl(91, 2),
        arabicFull: 'وَالْقَمَرِ إِذَا تَلَاهَا',
        translation: 'And [by] the moon when it follows it,',
        visual: 'moon',
        lesson: 'The moon reflects the light of the sun, just as a pure soul reflects divine guidance.',
        words: [
          { id: 'sm2-1', arabic: 'وَ', transliteration: 'Wa', meaning: 'And by' },
          { id: 'sm2-2', arabic: 'الْقَمَرِ', transliteration: 'Al-qamari', meaning: 'The moon' },
          { id: 'sm2-3', arabic: 'إِذَا', transliteration: 'Idha', meaning: 'When' },
          { id: 'sm2-4', arabic: 'تَلَاهَا', transliteration: 'Talaha', meaning: 'It follows it' }
        ]
      },
      {
        id: '91-3',
        audio: getAudioUrl(91, 3),
        arabicFull: 'وَالنَّهَارِ إِذَا جَلَّاهَا',
        translation: 'And [by] the day when it displays it,',
        visual: 'daylight',
        lesson: 'The daylight exposes the earth, bringing clarity and activity to the world.',
        words: [
          { id: 'sm3-1', arabic: 'وَ', transliteration: 'Wa', meaning: 'And by' },
          { id: 'sm3-2', arabic: 'النَّهَارِ', transliteration: 'An-nahari', meaning: 'The day' },
          { id: 'sm3-3', arabic: 'إِذَا', transliteration: 'Idha', meaning: 'When' },
          { id: 'sm3-4', arabic: 'جَلَّاهَا', transliteration: 'Jallaha', meaning: 'It displays it / reveals it' }
        ]
      },
      {
        id: '91-4',
        audio: getAudioUrl(91, 4),
        arabicFull: 'وَاللَّيْلِ إِذَا يَغْشَاهَا',
        translation: 'And [by] the night when it conceals it,',
        visual: 'night_covers',
        lesson: 'The darkness of night wraps up the world, a completely opposite phenomenon to the day.',
        words: [
          { id: 'sm4-1', arabic: 'وَ', transliteration: 'Wa', meaning: 'And by' },
          { id: 'sm4-2', arabic: 'اللَّيْلِ', transliteration: 'Al-layli', meaning: 'The night' },
          { id: 'sm4-3', arabic: 'إِذَا', transliteration: 'Idha', meaning: 'When' },
          { id: 'sm4-4', arabic: 'يَغْشَاهَا', transliteration: 'Yaghshaha', meaning: 'It conceals it' }
        ]
      },
      {
        id: '91-5',
        audio: getAudioUrl(91, 5),
        arabicFull: 'وَالسَّمَاءِ وَمَا بَنَاهَا',
        translation: 'And [by] the sky and He who constructed it,',
        visual: 'sky_built',
        lesson: 'Looking up at the massive, flawless sky naturally points the heart to its magnificent Builder.',
        words: [
          { id: 'sm5-1', arabic: 'وَ', transliteration: 'Wa', meaning: 'And by' },
          { id: 'sm5-2', arabic: 'السَّمَاءِ', transliteration: 'As-sama\'i', meaning: 'The sky' },
          { id: 'sm5-3', arabic: 'وَمَا', transliteration: 'Wa-ma', meaning: 'And He who' },
          { id: 'sm5-4', arabic: 'بَنَاهَا', transliteration: 'Banaha', meaning: 'Constructed it' }
        ]
      },
      {
        id: '91-6',
        audio: getAudioUrl(91, 6),
        arabicFull: 'وَالْأَرْضِ وَمَا طَحَاهَا',
        translation: 'And [by] the earth and He who spread it,',
        visual: 'earth_spread',
        lesson: 'The earth was smoothed out perfectly to support mountains, oceans, and human life.',
        words: [
          { id: 'sm6-1', arabic: 'وَ', transliteration: 'Wa', meaning: 'And by' },
          { id: 'sm6-2', arabic: 'الْأَرْضِ', transliteration: 'Al-ardi', meaning: 'The earth' },
          { id: 'sm6-3', arabic: 'وَمَا', transliteration: 'Wa-ma', meaning: 'And He who' },
          { id: 'sm6-4', arabic: 'طَحَاهَا', transliteration: 'Tahaha', meaning: 'Spread it / smoothed it' }
        ]
      },
      {
        id: '91-7',
        audio: getAudioUrl(91, 7),
        arabicFull: 'وَنَفْسٍ وَمَا سَوَّاهَا',
        translation: 'And [by] the soul and He who proportioned it,',
        visual: 'soul_design',
        lesson: 'The greatest miracle of all is the human soul, designed with intricate balance and consciousness.',
        words: [
          { id: 'sm7-1', arabic: 'وَ', transliteration: 'Wa', meaning: 'And by' },
          { id: 'sm7-2', arabic: 'نَفْسٍ', transliteration: 'Nafsin', meaning: 'The soul' },
          { id: 'sm7-3', arabic: 'وَمَا', transliteration: 'Wa-ma', meaning: 'And He who' },
          { id: 'sm7-4', arabic: 'سَوَّاهَا', transliteration: 'Sawwaha', meaning: 'Proportioned it / fashioned it' }
        ]
      },
      {
        id: '91-8',
        audio: getAudioUrl(91, 8),
        arabicFull: 'فَأَلْهَمَهَا فُجُورَهَا وَتَقْوَاهَا',
        translation: 'And inspired it [with discernment of] its wickedness and its righteousness,',
        visual: 'inspiration',
        lesson: 'Every human being is born with a moral compass, deeply knowing the difference between right and wrong.',
        words: [
          { id: 'sm8-1', arabic: 'فَأَلْهَمَهَا', transliteration: 'Fa-alhamaha', meaning: 'And inspired it' },
          { id: 'sm8-2', arabic: 'فُجُورَهَا', transliteration: 'Fujuraha', meaning: 'Its wickedness' },
          { id: 'sm8-3', arabic: 'وَ', transliteration: 'Wa', meaning: 'And' },
          { id: 'sm8-4', arabic: 'تَقْوَاهَا', transliteration: 'Taqwaha', meaning: 'Its righteousness / piety' }
        ]
      },
      {
        id: '91-9',
        audio: getAudioUrl(91, 9),
        arabicFull: 'قَدْ أَفْلَحَ مَن زَكَّاهَا',
        translation: 'He has succeeded who purifies it,',
        visual: 'purify',
        lesson: 'This is the grand conclusion of all the cosmic oaths: True success (Falah) is purifying your inner self.',
        words: [
          { id: 'sm9-1', arabic: 'قَدْ', transliteration: 'Qad', meaning: 'Certainly' },
          { id: 'sm9-2', arabic: 'أَفْلَحَ', transliteration: 'Aflaha', meaning: 'He has succeeded' },
          { id: 'sm9-3', arabic: 'مَن', transliteration: 'Man', meaning: 'Who' },
          { id: 'sm9-4', arabic: 'زَكَّاهَا', transliteration: 'Zakkaha', meaning: 'Purifies it (the soul)' }
        ]
      },
      {
        id: '91-10',
        audio: getAudioUrl(91, 10),
        arabicFull: 'وَقَدْ خَابَ مَن دَسَّاهَا',
        translation: 'And he has failed who instills it [with corruption].',
        visual: 'corrupt',
        lesson: 'To "Dassaha" means to bury or corrupt the soul by hiding its light under layers of sin.',
        words: [
          { id: 'sm10-1', arabic: 'وَقَدْ', transliteration: 'Wa-qad', meaning: 'And certainly' },
          { id: 'sm10-2', arabic: 'خَابَ', transliteration: 'Khaba', meaning: 'He has failed' },
          { id: 'sm10-3', arabic: 'مَن', transliteration: 'Man', meaning: 'Who' },
          { id: 'sm10-4', arabic: 'دَسَّاهَا', transliteration: 'Dassaha', meaning: 'Corrupts it / buries it' }
        ]
      },
      {
        id: '91-11',
        audio: getAudioUrl(91, 11),
        arabicFull: 'كَذَّبَتْ ثَمُودُ بِطَغْوَاهَا',
        translation: 'Thamud denied [their prophet] by reason of their transgression,',
        visual: 'thamud_deny',
        lesson: 'A historical example: the powerful tribe of Thamud ruined their souls because of arrogance.',
        words: [
          { id: 'sm11-1', arabic: 'كَذَّبَتْ', transliteration: 'Kadhdhabat', meaning: 'Denied' },
          { id: 'sm11-2', arabic: 'ثَمُودُ', transliteration: 'Thamudu', meaning: 'Thamud' },
          { id: 'sm11-3', arabic: 'بِطَغْوَاهَا', transliteration: 'Bi-taghwaha', meaning: 'Because of their transgression' }
        ]
      },
      {
        id: '91-12',
        audio: getAudioUrl(91, 12),
        arabicFull: 'إِذِ انبَعَثَ أَشْقَاهَا',
        translation: 'When the most wretched of them was sent forth.',
        visual: 'wretched_sent',
        lesson: 'The most wicked man among them volunteered to commit a terrible crime against Allah\'s sign.',
        words: [
          { id: 'sm12-1', arabic: 'إِذِ', transliteration: 'Idhi', meaning: 'When' },
          { id: 'sm12-2', arabic: 'انبَعَثَ', transliteration: 'Inba\'atha', meaning: 'Was sent forth / arose' },
          { id: 'sm12-3', arabic: 'أَشْقَاهَا', transliteration: 'Ashqaha', meaning: 'The most wretched of them' }
        ]
      },
      {
        id: '91-13',
        audio: getAudioUrl(91, 13),
        arabicFull: 'فَقَالَ لَهُمْ رَسُولُ اللَّهِ نَاقَةَ اللَّهِ وَسُقْيَاهَا',
        translation: 'And the messenger of Allah [Salih] said to them, "[Do not harm] the she-camel of Allah or [prevent her from] her drink."',
        visual: 'camel_warning',
        lesson: 'Prophet Salih gave them a clear warning to leave the miraculous camel in peace.',
        words: [
          { id: 'sm13-1', arabic: 'فَقَالَ', transliteration: 'Fa-qala', meaning: 'Then said' },
          { id: 'sm13-2', arabic: 'لَهُمْ', transliteration: 'Lahum', meaning: 'To them' },
          { id: 'sm13-3', arabic: 'رَسُولُ', transliteration: 'Rasulu', meaning: 'The Messenger' },
          { id: 'sm13-4', arabic: 'اللَّهِ', transliteration: 'Allahi', meaning: 'Of Allah' },
          { id: 'sm13-5', arabic: 'نَاقَةَ', transliteration: 'Naqata', meaning: 'The she-camel' },
          { id: 'sm13-6', arabic: 'اللَّهِ', transliteration: 'Allahi', meaning: 'Of Allah' },
          { id: 'sm13-7', arabic: 'وَسُقْيَاهَا', transliteration: 'Wa-suqyaha', meaning: 'And her drink' }
        ]
      },
      {
        id: '91-14',
        audio: getAudioUrl(91, 14),
        arabicFull: 'فَكَذَّبُوهُ فَعَقَرُوهَا فَدَمْدَمَ عَلَيْهِمْ رَبُّهُم بِذَنبِهِمْ فَسَوَّاهَا',
        translation: 'But they denied him and hamstrung her. So their Lord brought down upon them destruction for their sin and made it equal [upon all of them].',
        visual: 'destruction',
        lesson: 'They arrogantly killed the camel, so Allah wiped out the entire tribe completely.',
        words: [
          { id: 'sm14-1', arabic: 'فَكَذَّبُوهُ', transliteration: 'Fa-kadhdhabuhu', meaning: 'But they denied him' },
          { id: 'sm14-2', arabic: 'فَعَقَرُوهَا', transliteration: 'Fa-\'aqaruha', meaning: 'And hamstrung her (the camel)' },
          { id: 'sm14-3', arabic: 'فَدَمْدَمَ', transliteration: 'Fa-damdama', meaning: 'So He brought destruction' },
          { id: 'sm14-4', arabic: 'عَلَيْهِمْ', transliteration: '\'Alayhim', meaning: 'Upon them' },
          { id: 'sm14-5', arabic: 'رَبُّهُم', transliteration: 'Rabbuhum', meaning: 'Their Lord' },
          { id: 'sm14-6', arabic: 'بِذَنبِهِمْ', transliteration: 'Bi-dhanbihim', meaning: 'For their sin' },
          { id: 'sm14-7', arabic: 'فَسَوَّاهَا', transliteration: 'Fa-sawwaha', meaning: 'And leveled it (equal destruction)' }
        ]
      },
      {
        id: '91-15',
        audio: getAudioUrl(91, 15),
        arabicFull: 'وَلَا يَخَافُ عُقْبَاهَا',
        translation: 'And He does not fear the consequence thereof.',
        visual: 'no_fear',
        lesson: 'Unlike human kings who fear retaliation, Allah executes perfect justice with absolute, unchallenged authority.',
        words: [
          { id: 'sm15-1', arabic: 'وَلَا', transliteration: 'Wa-la', meaning: 'And not' },
          { id: 'sm15-2', arabic: 'يَخَافُ', transliteration: 'Yakhafu', meaning: 'He fears' },
          { id: 'sm15-3', arabic: 'عُقْبَاهَا', transliteration: '\'Uqbaha', meaning: 'Its consequence' }
        ]
      }
    ]
  },

  // --- 90. AL-BALAD (Uses 'Shield' & 'slate') ---
  {
    id: 'balad',
    number: 90,
    title: 'Al-Balad',
    meaning: 'The City',
    story: 'Allah swears by the sacred city of Makkah to establish a universal reality: human life is built on struggle and hardship. However, we are given a choice. The true test is whether we use our energy for the "difficult path" of virtue—freeing the oppressed and feeding the hungry—or the easy path of selfishness.',
    color: 'slate',
    themeGradient: 'from-slate-600 to-stone-800',
    iconName: 'Shield',
    totalVerses: 20,
    levels: [
      {
        id: '90-1',
        audio: getAudioUrl(90, 1),
        arabicFull: 'لَا أُقْسِمُ بِهَٰذَا الْبَلَدِ',
        translation: 'I swear by this city, Makkah -',
        visual: 'city',
        lesson: 'Allah honors Makkah, making it a sanctuary of peace even when the world around it was chaotic.',
        words: [
          { id: 'bd1-1', arabic: 'لَا أُقْسِمُ', transliteration: 'La uqsimu', meaning: 'I swear' },
          { id: 'bd1-2', arabic: 'بِهَٰذَا', transliteration: 'Bi-hadha', meaning: 'By this' },
          { id: 'bd1-3', arabic: 'الْبَلَدِ', transliteration: 'Al-balad', meaning: 'The city' }
        ]
      },
      {
        id: '90-2',
        audio: getAudioUrl(90, 2),
        arabicFull: 'وَأَنتَ حِلٌّ بِهَٰذَا الْبَلَدِ',
        translation: 'And you, [O Muhammad], are free of restriction in this city -',
        visual: 'free_city',
        lesson: 'A reference to the Prophet\'s honor in the city, or a prophecy of the Conquest of Makkah.',
        words: [
          { id: 'bd2-1', arabic: 'وَأَنتَ', transliteration: 'Wa-anta', meaning: 'And you' },
          { id: 'bd2-2', arabic: 'حِلٌّ', transliteration: 'Hillun', meaning: 'Free / lawful resident' },
          { id: 'bd2-3', arabic: 'بِهَٰذَا', transliteration: 'Bi-hadha', meaning: 'In this' },
          { id: 'bd2-4', arabic: 'الْبَلَدِ', transliteration: 'Al-balad', meaning: 'The city' }
        ]
      },
      {
        id: '90-3',
        audio: getAudioUrl(90, 3),
        arabicFull: 'وَوَالِدٍ وَمَا وَلَدَ',
        translation: 'And [by] the father and that which was born [of him],',
        visual: 'father_child',
        lesson: 'An oath by the enduring lineage of humanity, specifically Adam and his descendants.',
        words: [
          { id: 'bd3-1', arabic: 'وَوَالِدٍ', transliteration: 'Wa-walidin', meaning: 'And by the father' },
          { id: 'bd3-2', arabic: 'وَمَا', transliteration: 'Wa-ma', meaning: 'And what' },
          { id: 'bd3-3', arabic: 'وَلَدَ', transliteration: 'Walada', meaning: 'He begot / was born' }
        ]
      },
      {
        id: '90-4',
        audio: getAudioUrl(90, 4),
        arabicFull: 'لَقَدْ خَلَقْنَا الْإِنسَانَ فِي كَبَدٍ',
        translation: 'We have certainly created man into hardship.',
        visual: 'struggle',
        lesson: 'Life is not meant to be a paradise of ease. Struggle (kabad) is woven into the very fabric of human existence.',
        words: [
          { id: 'bd4-1', arabic: 'لَقَدْ', transliteration: 'Laqad', meaning: 'Certainly' },
          { id: 'bd4-2', arabic: 'خَلَقْنَا', transliteration: 'Khalaqna', meaning: 'We created' },
          { id: 'bd4-3', arabic: 'الْإِنسَانَ', transliteration: 'Al-insana', meaning: 'The human' },
          { id: 'bd4-4', arabic: 'فِي', transliteration: 'Fi', meaning: 'Into / In' },
          { id: 'bd4-5', arabic: 'كَبَدٍ', transliteration: 'Kabad', meaning: 'Hardship / Struggle' }
        ]
      },
      {
        id: '90-5',
        audio: getAudioUrl(90, 5),
        arabicFull: 'أَيَحْسَبُ أَن لَّن يَقْدِرَ عَلَيْهِ أَحَدٌ',
        translation: 'Does he think that never will anyone overcome him?',
        visual: 'arrogant',
        lesson: 'Despite being surrounded by struggle, arrogant humans often feel invincible.',
        words: [
          { id: 'bd5-1', arabic: 'أَيَحْسَبُ', transliteration: 'A-yahsabu', meaning: 'Does he think' },
          { id: 'bd5-2', arabic: 'أَن', transliteration: 'An', meaning: 'That' },
          { id: 'bd5-3', arabic: 'لَّن', transliteration: 'Lan', meaning: 'Never' },
          { id: 'bd5-4', arabic: 'يَقْدِرَ', transliteration: 'Yaqdira', meaning: 'Will overcome' },
          { id: 'bd5-5', arabic: 'عَلَيْهِ', transliteration: '\'Alayhi', meaning: 'Upon him' },
          { id: 'bd5-6', arabic: 'أَحَدٌ', transliteration: 'Ahadun', meaning: 'Anyone' }
        ]
      },
      {
        id: '90-6',
        audio: getAudioUrl(90, 6),
        arabicFull: 'يَقُولُ أَهْلَكْتُ مَالًا لُّبَدًا',
        translation: 'He says, "I have spent wealth in abundance."',
        visual: 'waste_wealth',
        lesson: 'The arrogant man boasts about wasting vast amounts of money just to show off his power.',
        words: [
          { id: 'bd6-1', arabic: 'يَقُولُ', transliteration: 'Yaqulu', meaning: 'He says' },
          { id: 'bd6-2', arabic: 'أَهْلَكْتُ', transliteration: 'Ahlaktu', meaning: 'I have squandered / spent' },
          { id: 'bd6-3', arabic: 'مَالًا', transliteration: 'Malan', meaning: 'Wealth' },
          { id: 'bd6-4', arabic: 'لُّبَدًا', transliteration: 'Lubadan', meaning: 'Abundant' }
        ]
      },
      {
        id: '90-7',
        audio: getAudioUrl(90, 7),
        arabicFull: 'أَيَحْسَبُ أَن لَّمْ يَرَهُ أَحَدٌ',
        translation: 'Does he think that no one has seen him?',
        visual: 'seen',
        lesson: 'He brags about his wealth, forgetting that Allah watched exactly how he acquired it and how he wasted it.',
        words: [
          { id: 'bd7-1', arabic: 'أَيَحْسَبُ', transliteration: 'A-yahsabu', meaning: 'Does he think' },
          { id: 'bd7-2', arabic: 'أَن', transliteration: 'An', meaning: 'That' },
          { id: 'bd7-3', arabic: 'لَّمْ', transliteration: 'Lam', meaning: 'Not' },
          { id: 'bd7-4', arabic: 'يَرَهُ', transliteration: 'Yarahu', meaning: 'Has seen him' },
          { id: 'bd7-5', arabic: 'أَحَدٌ', transliteration: 'Ahadun', meaning: 'Anyone' }
        ]
      },
      {
        id: '90-8',
        audio: getAudioUrl(90, 8),
        arabicFull: 'أَلَمْ نَجْعَل لَّهُ عَيْنَيْنِ',
        translation: 'Have We not made for him two eyes?',
        visual: 'eyes',
        lesson: 'Allah points to His greatest gifts. The eyes allow us to perceive truth and beauty.',
        words: [
          { id: 'bd8-1', arabic: 'أَلَمْ', transliteration: 'A-lam', meaning: 'Have We not' },
          { id: 'bd8-2', arabic: 'نَجْعَل', transliteration: 'Naj\'al', meaning: 'Made' },
          { id: 'bd8-3', arabic: 'لَّهُ', transliteration: 'Lahu', meaning: 'For him' },
          { id: 'bd8-4', arabic: 'عَيْنَيْنِ', transliteration: '\'Aynayn', meaning: 'Two eyes' }
        ]
      },
      {
        id: '90-9',
        audio: getAudioUrl(90, 9),
        arabicFull: 'وَلِسَانًا وَشَفَتَيْنِ',
        translation: 'And a tongue and two lips?',
        visual: 'mouth',
        lesson: 'The ability to speak, articulate thoughts, and communicate is a divine blessing not to be used for arrogance.',
        words: [
          { id: 'bd9-1', arabic: 'وَلِسَانًا', transliteration: 'Wa-lisanan', meaning: 'And a tongue' },
          { id: 'bd9-2', arabic: 'وَشَفَتَيْنِ', transliteration: 'Wa-shafatayn', meaning: 'And two lips' }
        ]
      },
      {
        id: '90-10',
        audio: getAudioUrl(90, 10),
        arabicFull: 'وَهَدَيْنَاهُ النَّجْدَيْنِ',
        translation: 'And have shown him the two ways?',
        visual: 'crossroads',
        lesson: 'We are gifted with the intellect to choose between the path of good and the path of evil.',
        words: [
          { id: 'bd10-1', arabic: 'وَهَدَيْنَاهُ', transliteration: 'Wa-hadaynahu', meaning: 'And We guided him' },
          { id: 'bd10-2', arabic: 'النَّجْدَيْنِ', transliteration: 'An-najdayn', meaning: 'The two ways (good and evil)' }
        ]
      },
      {
        id: '90-11',
        audio: getAudioUrl(90, 11),
        arabicFull: 'فَلَا اقْتَحَمَ الْعَقَبَةَ',
        translation: 'But he has not broken through the difficult pass.',
        visual: 'mountain_pass',
        lesson: 'The "difficult pass" (Al-Aqabah) is the steep uphill climb of doing the right thing when it is hard.',
        words: [
          { id: 'bd11-1', arabic: 'فَلَا', transliteration: 'Fa-la', meaning: 'But not' },
          { id: 'bd11-2', arabic: 'اقْتَحَمَ', transliteration: 'Iqtahama', meaning: 'He has broken through' },
          { id: 'bd11-3', arabic: 'الْعَقَبَةَ', transliteration: 'Al-\'aqabah', meaning: 'The difficult pass' }
        ]
      },
      {
        id: '90-12',
        audio: getAudioUrl(90, 12),
        arabicFull: 'وَمَا أَدْرَاكَ مَا الْعَقَبَةُ',
        translation: 'And what can make you know what is [breaking through] the difficult pass?',
        visual: 'question_pass',
        lesson: 'Allah emphasizes the importance of this specific spiritual struggle.',
        words: [
          { id: 'bd12-1', arabic: 'وَمَا', transliteration: 'Wa-ma', meaning: 'And what' },
          { id: 'bd12-2', arabic: 'أَدْرَاكَ', transliteration: 'Adraka', meaning: 'Can make you know' },
          { id: 'bd12-3', arabic: 'مَا', transliteration: 'Ma', meaning: 'What is' },
          { id: 'bd12-4', arabic: 'الْعَقَبَةُ', transliteration: 'Al-\'aqabah', meaning: 'The difficult pass' }
        ]
      },
      {
        id: '90-13',
        audio: getAudioUrl(90, 13),
        arabicFull: 'فَكُّ رَقَبَةٍ',
        translation: 'It is the freeing of a slave',
        visual: 'freedom',
        lesson: 'The first step on the difficult path: liberating those who are oppressed or bound.',
        words: [
          { id: 'bd13-1', arabic: 'فَكُّ', transliteration: 'Fakku', meaning: 'Freeing' },
          { id: 'bd13-2', arabic: 'رَقَبَةٍ', transliteration: 'Raqabah', meaning: 'A neck / slave' }
        ]
      },
      {
        id: '90-14',
        audio: getAudioUrl(90, 14),
        arabicFull: 'أَوْ إِطْعَامٌ فِي يَوْمٍ ذِي مَسْغَبَةٍ',
        translation: 'Or feeding on a day of severe hunger',
        visual: 'feeding',
        lesson: 'Providing food to others when you yourself might be struggling with starvation.',
        words: [
          { id: 'bd14-1', arabic: 'أَوْ', transliteration: 'Aw', meaning: 'Or' },
          { id: 'bd14-2', arabic: 'إِطْعَامٌ', transliteration: 'It\'amun', meaning: 'Feeding' },
          { id: 'bd14-3', arabic: 'فِي', transliteration: 'Fi', meaning: 'In' },
          { id: 'bd14-4', arabic: 'يَوْمٍ', transliteration: 'Yawmin', meaning: 'A day' },
          { id: 'bd14-5', arabic: 'ذِي', transliteration: 'Dhi', meaning: 'Of' },
          { id: 'bd14-6', arabic: 'مَسْغَبَةٍ', transliteration: 'Masghabah', meaning: 'Severe hunger' }
        ]
      },
      {
        id: '90-15',
        audio: getAudioUrl(90, 15),
        arabicFull: 'يَتِيمًا ذَا مَقْرَبَةٍ',
        translation: 'An orphan of near relationship',
        visual: 'orphan_kin',
        lesson: 'Charity starts at home; helping a vulnerable relative holds double the reward.',
        words: [
          { id: 'bd15-1', arabic: 'يَتِيمًا', transliteration: 'Yatiman', meaning: 'An orphan' },
          { id: 'bd15-2', arabic: 'ذَا', transliteration: 'Dha', meaning: 'Of' },
          { id: 'bd15-3', arabic: 'مَقْرَبَةٍ', transliteration: 'Maqrabah', meaning: 'Near relationship / kin' }
        ]
      },
      {
        id: '90-16',
        audio: getAudioUrl(90, 16),
        arabicFull: 'أَوْ مِسْكِينًا ذَا مَتْرَبَةٍ',
        translation: 'Or a needy person in misery',
        visual: 'poor',
        lesson: '"Dha matraba" literally means someone so destitute they are clinging to the dust (dust-poor).',
        words: [
          { id: 'bd16-1', arabic: 'أَوْ', transliteration: 'Aw', meaning: 'Or' },
          { id: 'bd16-2', arabic: 'مِسْكِينًا', transliteration: 'Miskinan', meaning: 'A needy person' },
          { id: 'bd16-3', arabic: 'ذَا', transliteration: 'Dha', meaning: 'Of' },
          { id: 'bd16-4', arabic: 'مَتْرَبَةٍ', transliteration: 'Matrabah', meaning: 'Misery / clinging to dust' }
        ]
      },
      {
        id: '90-17',
        audio: getAudioUrl(90, 17),
        arabicFull: 'ثُمَّ كَانَ مِنَ الَّذِينَ آمَنُوا وَتَوَاصَوْا بِالصَّبْرِ وَتَوَاصَوْا بِالْمَرْحَمَةِ',
        translation: 'And then being among those who believed and advised one another to patience and advised one another to compassion.',
        visual: 'community',
        lesson: 'Actions must be rooted in faith, surrounded by a community that spreads patience and deep empathy.',
        words: [
          { id: 'bd17-1', arabic: 'ثُمَّ', transliteration: 'Thumma', meaning: 'Then' },
          { id: 'bd17-2', arabic: 'كَانَ', transliteration: 'Kana', meaning: 'Being' },
          { id: 'bd17-3', arabic: 'مِنَ', transliteration: 'Mina', meaning: 'Among' },
          { id: 'bd17-4', arabic: 'الَّذِينَ', transliteration: 'Alladhina', meaning: 'Those who' },
          { id: 'bd17-5', arabic: 'آمَنُوا', transliteration: 'Amanu', meaning: 'Believed' },
          { id: 'bd17-6', arabic: 'وَتَوَاصَوْا', transliteration: 'Wa-tawasaw', meaning: 'And advised each other' },
          { id: 'bd17-7', arabic: 'بِالصَّبْرِ', transliteration: 'Bis-sabr', meaning: 'To patience' },
          { id: 'bd17-8', arabic: 'وَتَوَاصَوْا', transliteration: 'Wa-tawasaw', meaning: 'And advised each other' },
          { id: 'bd17-9', arabic: 'بِالْمَرْحَمَةِ', transliteration: 'Bil-marhamah', meaning: 'To compassion / mercy' }
        ]
      },
      {
        id: '90-18',
        audio: getAudioUrl(90, 18),
        arabicFull: 'أُولَٰئِكَ أَصْحَابُ الْمَيْمَنَةِ',
        translation: 'Those are the companions of the right.',
        visual: 'right_hand',
        lesson: 'This exhausting uphill climb makes you a "Companion of the Right", destined for Paradise.',
        words: [
          { id: 'bd18-1', arabic: 'أُولَٰئِكَ', transliteration: 'Ula\'ika', meaning: 'Those' },
          { id: 'bd18-2', arabic: 'أَصْحَابُ', transliteration: 'Ashabu', meaning: 'The companions' },
          { id: 'bd18-3', arabic: 'الْمَيْمَنَةِ', transliteration: 'Al-maymanah', meaning: 'Of the right' }
        ]
      },
      {
        id: '90-19',
        audio: getAudioUrl(90, 19),
        arabicFull: 'وَالَّذِينَ كَفَرُوا بِآيَاتِنَا هُمْ أَصْحَابُ الْمَشْأَمَةِ',
        translation: 'But they who disbelieved in Our signs - those are the companions of the left.',
        visual: 'left_hand',
        lesson: 'Those who rejected the signs and chose the easy path of selfishness are doomed to the left.',
        words: [
          { id: 'bd19-1', arabic: 'وَالَّذِينَ', transliteration: 'Wal-ladhina', meaning: 'And those who' },
          { id: 'bd19-2', arabic: 'كَفَرُوا', transliteration: 'Kafaru', meaning: 'Disbelieved' },
          { id: 'bd19-3', arabic: 'بِآيَاتِنَا', transliteration: 'Bi-ayatina', meaning: 'In Our signs' },
          { id: 'bd19-4', arabic: 'هُمْ', transliteration: 'Hum', meaning: 'They' },
          { id: 'bd19-5', arabic: 'أَصْحَابُ', transliteration: 'Ashabu', meaning: 'Are companions' },
          { id: 'bd19-6', arabic: 'الْمَشْأَمَةِ', transliteration: 'Al-mash\'amah', meaning: 'Of the left' }
        ]
      },
      {
        id: '90-20',
        audio: getAudioUrl(90, 20),
        arabicFull: 'عَلَيْهِمْ نَارٌ مُّؤْصَدَةٌ',
        translation: 'Over them will be fire closed in.',
        visual: 'fire_vault',
        lesson: 'A claustrophobic end: locked inside a vault of fire with absolutely no way to escape.',
        words: [
          { id: 'bd20-1', arabic: 'عَلَيْهِمْ', transliteration: '\'Alayhim', meaning: 'Over them' },
          { id: 'bd20-2', arabic: 'نَارٌ', transliteration: 'Narun', meaning: 'Fire' },
          { id: 'bd20-3', arabic: 'مُّؤْصَدَةٌ', transliteration: 'Mu\'sadah', meaning: 'Closed in / Vaulted' }
        ]
      }
    ]
  },

  // --- 89. AL-FAJR (Uses 'Sun' & 'rose') ---
  {
    id: 'fajr',
    number: 89,
    title: 'Al-Fajr',
    meaning: 'The Dawn',
    story: 'Beginning with the tranquil break of dawn, this Surah abruptly shifts to the terrifying destruction of ancient, arrogant civilizations like \'Aad and Pharaoh. It concludes with one of the most beautiful invitations in the Quran: Allah welcoming the peaceful, reassured soul into Paradise.',
    color: 'rose',
    themeGradient: 'from-rose-500 to-pink-700',
    iconName: 'Sun',
    totalVerses: 30,
    levels: [
      {
        id: '89-1',
        audio: getAudioUrl(89, 1),
        arabicFull: 'وَالْفَجْرِ',
        translation: 'By the dawn',
        visual: 'dawn',
        lesson: 'The dawn represents a new beginning, the dispelling of darkness, and the power of Allah bringing life to a dead world.',
        words: [
          { id: 'fj1-1', arabic: 'وَ', transliteration: 'Wa', meaning: 'By (oath)' },
          { id: 'fj1-2', arabic: 'الْفَجْرِ', transliteration: 'Al-fajri', meaning: 'The dawn' }
        ]
      },
      {
        id: '89-2',
        audio: getAudioUrl(89, 2),
        arabicFull: 'وَلَيَالٍ عَشْرٍ',
        translation: 'And [by] ten nights',
        visual: 'ten_nights',
        lesson: 'Often interpreted as the exceptionally blessed first ten nights of the month of Dhul-Hijjah.',
        words: [
          { id: 'fj2-1', arabic: 'وَ', transliteration: 'Wa', meaning: 'And by' },
          { id: 'fj2-2', arabic: 'لَيَالٍ', transliteration: 'Layalin', meaning: 'Nights' },
          { id: 'fj2-3', arabic: 'عَشْرٍ', transliteration: '\'Ashr', meaning: 'Ten' }
        ]
      },
      {
        id: '89-3',
        audio: getAudioUrl(89, 3),
        arabicFull: 'وَالشَّفْعِ وَالْوَتْرِ',
        translation: 'And [by] the even and the odd',
        visual: 'numbers',
        lesson: 'A profound oath representing everything created (which is in pairs/even) and Allah Himself (who is One/odd).',
        words: [
          { id: 'fj3-1', arabic: 'وَالشَّفْعِ', transliteration: 'Wash-shaf\'i', meaning: 'And by the even' },
          { id: 'fj3-2', arabic: 'وَالْوَتْرِ', transliteration: 'Wal-watri', meaning: 'And the odd' }
        ]
      },
      {
        id: '89-4',
        audio: getAudioUrl(89, 4),
        arabicFull: 'وَاللَّيْلِ إِذَا يَسْرِ',
        translation: 'And [by] the night when it passes,',
        visual: 'night_pass',
        lesson: 'Just as the dark night inevitably passes into dawn, the hardship of believers will pass into relief.',
        words: [
          { id: 'fj4-1', arabic: 'وَاللَّيْلِ', transliteration: 'Wal-layli', meaning: 'And by the night' },
          { id: 'fj4-2', arabic: 'إِذَا', transliteration: 'Idha', meaning: 'When' },
          { id: 'fj4-3', arabic: 'يَسْرِ', transliteration: 'Yasri', meaning: 'It passes / departs' }
        ]
      },
      {
        id: '89-5',
        audio: getAudioUrl(89, 5),
        arabicFull: 'هَلْ فِي ذَٰلِكَ قَسَمٌ لِّذِي حِجْرٍ',
        translation: 'Is there [not] in [all] that an oath [sufficient] for one of perception?',
        visual: 'intellect',
        lesson: 'Anyone with "Hijr" (a strong, rational mind that prevents them from foolishness) knows these oaths are serious.',
        words: [
          { id: 'fj5-1', arabic: 'هَلْ', transliteration: 'Hal', meaning: 'Is there' },
          { id: 'fj5-2', arabic: 'فِي', transliteration: 'Fi', meaning: 'In' },
          { id: 'fj5-3', arabic: 'ذَٰلِكَ', transliteration: 'Dhalika', meaning: 'That' },
          { id: 'fj5-4', arabic: 'قَسَمٌ', transliteration: 'Qasamun', meaning: 'An oath' },
          { id: 'fj5-5', arabic: 'لِّذِي', transliteration: 'Li-dhi', meaning: 'For one of' },
          { id: 'fj5-6', arabic: 'حِجْرٍ', transliteration: 'Hijr', meaning: 'Perception / intellect' }
        ]
      },
      {
        id: '89-6',
        audio: getAudioUrl(89, 6),
        arabicFull: 'أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِعَادٍ',
        translation: 'Have you not considered how your Lord dealt with \'Aad -',
        visual: 'aad_tribe',
        lesson: 'Aad was an ancient civilization renowned for their physical size and unmatched strength, yet they were destroyed.',
        words: [
          { id: 'fj6-1', arabic: 'أَلَمْ', transliteration: 'A-lam', meaning: 'Have not' },
          { id: 'fj6-2', arabic: 'تَرَ', transliteration: 'Tara', meaning: 'You seen / considered' },
          { id: 'fj6-3', arabic: 'كَيْفَ', transliteration: 'Kayfa', meaning: 'How' },
          { id: 'fj6-4', arabic: 'فَعَلَ', transliteration: 'Fa\'ala', meaning: 'Dealt / did' },
          { id: 'fj6-5', arabic: 'رَبُّكَ', transliteration: 'Rabbuka', meaning: 'Your Lord' },
          { id: 'fj6-6', arabic: 'بِعَادٍ', transliteration: 'Bi-\'Aadin', meaning: 'With \'Aad' }
        ]
      },
      {
        id: '89-7',
        audio: getAudioUrl(89, 7),
        arabicFull: 'إِرَمَ ذَاتِ الْعِمَادِ',
        translation: '[With] Iram - who had lofty pillars,',
        visual: 'pillars',
        lesson: 'They built towering, magnificent cities and pillars that dominated the landscape.',
        words: [
          { id: 'fj7-1', arabic: 'إِرَمَ', transliteration: 'Irama', meaning: 'Iram (their city)' },
          { id: 'fj7-2', arabic: 'ذَاتِ', transliteration: 'Dhati', meaning: 'Possessors of' },
          { id: 'fj7-3', arabic: 'الْعِمَادِ', transliteration: 'Al-\'imad', meaning: 'Lofty pillars' }
        ]
      },
      {
        id: '89-8',
        audio: getAudioUrl(89, 8),
        arabicFull: 'الَّتِي لَمْ يُخْلَقْ مِثْلُهَا فِي الْبِلَادِ',
        translation: 'The likes of whom had never been created in the land?',
        visual: 'unique_city',
        lesson: 'Their engineering and power were so advanced that history had never seen anything like them.',
        words: [
          { id: 'fj8-1', arabic: 'الَّتِي', transliteration: 'Allati', meaning: 'The likes of which' },
          { id: 'fj8-2', arabic: 'لَمْ', transliteration: 'Lam', meaning: 'Had not' },
          { id: 'fj8-3', arabic: 'يُخْلَقْ', transliteration: 'Yukhlaq', meaning: 'Been created' },
          { id: 'fj8-4', arabic: 'مِثْلُهَا', transliteration: 'Mithluha', meaning: 'Like them' },
          { id: 'fj8-5', arabic: 'فِي', transliteration: 'Fi', meaning: 'In' },
          { id: 'fj8-6', arabic: 'الْبِلَادِ', transliteration: 'Al-bilad', meaning: 'The land/cities' }
        ]
      },
      {
        id: '89-9',
        audio: getAudioUrl(89, 9),
        arabicFull: 'وَثَمُودَ الَّذِينَ جَابُوا الصَّخْرَ بِالْوَادِ',
        translation: 'And [with] Thamud, who carved out the rocks in the valley?',
        visual: 'thamud',
        lesson: 'Another great empire that carved massive homes directly into solid mountain rock.',
        words: [
          { id: 'fj9-1', arabic: 'وَثَمُودَ', transliteration: 'Wa-Thamuda', meaning: 'And Thamud' },
          { id: 'fj9-2', arabic: 'الَّذِينَ', transliteration: 'Alladhina', meaning: 'Those who' },
          { id: 'fj9-3', arabic: 'جَابُوا', transliteration: 'Jabu', meaning: 'Carved out' },
          { id: 'fj9-4', arabic: 'الصَّخْرَ', transliteration: 'As-sakhra', meaning: 'The rocks' },
          { id: 'fj9-5', arabic: 'بِالْوَادِ', transliteration: 'Bil-wad', meaning: 'In the valley' }
        ]
      },
      {
        id: '89-10',
        audio: getAudioUrl(89, 10),
        arabicFull: 'وَفِرْعَوْنَ ذِي الْأَوْتَادِ',
        translation: 'And [with] Pharaoh, owner of the stakes?',
        visual: 'pharaoh',
        lesson: 'Pharaoh was terrifying. He tortured people by pegging them to the ground (the stakes).',
        words: [
          { id: 'fj10-1', arabic: 'وَفِرْعَوْنَ', transliteration: 'Wa-Fir\'awna', meaning: 'And Pharaoh' },
          { id: 'fj10-2', arabic: 'ذِي', transliteration: 'Dhi', meaning: 'Owner of' },
          { id: 'fj10-3', arabic: 'الْأَوْتَادِ', transliteration: 'Al-awtad', meaning: 'The stakes / pegs' }
        ]
      },
      {
        id: '89-11',
        audio: getAudioUrl(89, 11),
        arabicFull: 'الَّذِينَ طَغَوْا فِي الْبِلَادِ',
        translation: '[All of] whom oppressed within the lands',
        visual: 'oppression',
        lesson: 'Despite their advanced buildings, their legacy was defined by pure tyranny and cruelty.',
        words: [
          { id: 'fj11-1', arabic: 'الَّذِينَ', transliteration: 'Alladhina', meaning: 'Those who' },
          { id: 'fj11-2', arabic: 'طَغَوْا', transliteration: 'Taghaw', meaning: 'Oppressed / transgressed' },
          { id: 'fj11-3', arabic: 'فِي', transliteration: 'Fi', meaning: 'In' },
          { id: 'fj11-4', arabic: 'الْبِلَادِ', transliteration: 'Al-bilad', meaning: 'The lands' }
        ]
      },
      {
        id: '89-12',
        audio: getAudioUrl(89, 12),
        arabicFull: 'فَأَكْثَرُوا فِيهَا الْفَسَادَ',
        translation: 'And increased therein the corruption.',
        visual: 'corruption',
        lesson: 'They filled the earth with chaos, injustice, and moral decay.',
        words: [
          { id: 'fj12-1', arabic: 'فَأَكْثَرُوا', transliteration: 'Fa-aktharu', meaning: 'And increased' },
          { id: 'fj12-2', arabic: 'فِيهَا', transliteration: 'Fiha', meaning: 'Therein' },
          { id: 'fj12-3', arabic: 'الْفَسَادَ', transliteration: 'Al-fasad', meaning: 'The corruption' }
        ]
      },
      {
        id: '89-13',
        audio: getAudioUrl(89, 13),
        arabicFull: 'فَصَبَّ عَلَيْهِمْ رَبُّكَ سَوْطَ عَذَابٍ',
        translation: 'So your Lord poured upon them a scourge of punishment.',
        visual: 'punishment',
        lesson: 'Allah did not just punish them; He "poured" it like a whip (sawt) lashing them from above.',
        words: [
          { id: 'fj13-1', arabic: 'فَصَبَّ', transliteration: 'Fa-sabba', meaning: 'So poured' },
          { id: 'fj13-2', arabic: 'عَلَيْهِمْ', transliteration: '\'Alayhim', meaning: 'Upon them' },
          { id: 'fj13-3', arabic: 'رَبُّكَ', transliteration: 'Rabbuka', meaning: 'Your Lord' },
          { id: 'fj13-4', arabic: 'سَوْطَ', transliteration: 'Sawta', meaning: 'A scourge / whip' },
          { id: 'fj13-5', arabic: 'عَذَابٍ', transliteration: '\'Adhab', meaning: 'Of punishment' }
        ]
      },
      {
        id: '89-14',
        audio: getAudioUrl(89, 14),
        arabicFull: 'إِنَّ رَبَّكَ لَبِالْمِرْصَادِ',
        translation: 'Indeed, your Lord is in observation.',
        visual: 'watching',
        lesson: 'Allah is always watching from an ambush point (Mirsad), waiting for the perfect time to strike the corrupt.',
        words: [
          { id: 'fj14-1', arabic: 'إِنَّ', transliteration: 'Inna', meaning: 'Indeed' },
          { id: 'fj14-2', arabic: 'رَبَّكَ', transliteration: 'Rabbuka', meaning: 'Your Lord' },
          { id: 'fj14-3', arabic: 'لَبِالْمِرْصَادِ', transliteration: 'La-bil-mirsad', meaning: 'Is surely in observation/ambush' }
        ]
      },
      {
        id: '89-15',
        audio: getAudioUrl(89, 15),
        arabicFull: 'فَأَمَّا الْإِنسَانُ إِذَا مَا ابْتَلَاهُ رَبُّهُ فَأَكْرَمَهُ وَنَعَّمَهُ فَيَقُولُ رَبِّي أَكْرَمَنِ',
        translation: 'And as for man, when his Lord tries him and [thus] is generous to him and favors him, he says, "My Lord has honored me."',
        visual: 'wealth_test',
        lesson: 'Humans mistakenly think wealth means God loves them. In reality, wealth is just a test.',
        words: [
          { id: 'fj15-1', arabic: 'فَأَمَّا', transliteration: 'Fa-amma', meaning: 'And as for' },
          { id: 'fj15-2', arabic: 'الْإِنسَانُ', transliteration: 'Al-insanu', meaning: 'The man' },
          { id: 'fj15-3', arabic: 'إِذَا مَا', transliteration: 'Idha ma', meaning: 'When' },
          { id: 'fj15-4', arabic: 'ابْتَلَاهُ', transliteration: 'Ibtalahu', meaning: 'Tries him / tests him' },
          { id: 'fj15-5', arabic: 'رَبُّهُ', transliteration: 'Rabbuhu', meaning: 'His Lord' },
          { id: 'fj15-6', arabic: 'فَأَكْرَمَهُ', transliteration: 'Fa-akramahu', meaning: 'And honors him' },
          { id: 'fj15-7', arabic: 'وَنَعَّمَهُ', transliteration: 'Wa-na\'amahu', meaning: 'And favors him' },
          { id: 'fj15-8', arabic: 'فَيَقُولُ', transliteration: 'Fa-yaqulu', meaning: 'He says' },
          { id: 'fj15-9', arabic: 'رَبِّي', transliteration: 'Rabbi', meaning: 'My Lord' },
          { id: 'fj15-10', arabic: 'أَكْرَمَنِ', transliteration: 'Akramani', meaning: 'Has honored me' }
        ]
      },
      {
        id: '89-16',
        audio: getAudioUrl(89, 16),
        arabicFull: 'وَأَمَّا إِذَا مَا ابْتَلَاهُ فَقَدَرَ عَلَيْهِ رِزْقَهُ فَيَقُولُ رَبِّي أَهَانَنِ',
        translation: 'But when He tries him and restricts his provision, he says, "My Lord has humiliated me."',
        visual: 'poverty_test',
        lesson: 'And when tested with poverty, humans mistakenly think God hates them. Both wealth and poverty are just exams.',
        words: [
          { id: 'fj16-1', arabic: 'وَأَمَّا', transliteration: 'Wa-amma', meaning: 'But as for' },
          { id: 'fj16-2', arabic: 'إِذَا مَا', transliteration: 'Idha ma', meaning: 'When' },
          { id: 'fj16-3', arabic: 'ابْتَلَاهُ', transliteration: 'Ibtalahu', meaning: 'He tests him' },
          { id: 'fj16-4', arabic: 'فَقَدَرَ', transliteration: 'Fa-qadara', meaning: 'And restricts' },
          { id: 'fj16-5', arabic: 'عَلَيْهِ', transliteration: '\'Alayhi', meaning: 'Upon him' },
          { id: 'fj16-6', arabic: 'رِزْقَهُ', transliteration: 'Rizqahu', meaning: 'His provision' },
          { id: 'fj16-7', arabic: 'فَيَقُولُ', transliteration: 'Fa-yaqulu', meaning: 'He says' },
          { id: 'fj16-8', arabic: 'رَبِّي', transliteration: 'Rabbi', meaning: 'My Lord' },
          { id: 'fj16-9', arabic: 'أَهَانَنِ', transliteration: 'Ahanani', meaning: 'Has humiliated me' }
        ]
      },
      {
        id: '89-17',
        audio: getAudioUrl(89, 17),
        arabicFull: 'كَلَّا ۖ بَل لَّا تُكْرِمُونَ الْيَتِيمَ',
        translation: 'No! But you do not honor the orphan,',
        visual: 'no_honor',
        lesson: 'The real problem isn\'t your wealth level; it\'s your behavior. You mistreat the weakest members of society.',
        words: [
          { id: 'fj17-1', arabic: 'كَلَّا', transliteration: 'Kalla', meaning: 'No! (False)' },
          { id: 'fj17-2', arabic: 'بَل', transliteration: 'Bal', meaning: 'But / Rather' },
          { id: 'fj17-3', arabic: 'لَّا', transliteration: 'La', meaning: 'You do not' },
          { id: 'fj17-4', arabic: 'تُكْرِمُونَ', transliteration: 'Tukrimuna', meaning: 'Honor' },
          { id: 'fj17-5', arabic: 'الْيَتِيمَ', transliteration: 'Al-yatim', meaning: 'The orphan' }
        ]
      },
      {
        id: '89-18',
        audio: getAudioUrl(89, 18),
        arabicFull: 'وَلَا تَحَاضُّونَ عَلَىٰ طَعَامِ الْمِسْكِينِ',
        translation: 'And you do not encourage one another to feed the poor.',
        visual: 'selfish_society',
        lesson: 'A diseased society is one where people don\'t even encourage *others* to be charitable.',
        words: [
          { id: 'fj18-1', arabic: 'وَلَا', transliteration: 'Wa-la', meaning: 'And you do not' },
          { id: 'fj18-2', arabic: 'تَحَاضُّونَ', transliteration: 'Tahadduna', meaning: 'Encourage each other' },
          { id: 'fj18-3', arabic: 'عَلَىٰ', transliteration: 'Ala', meaning: 'To' },
          { id: 'fj18-4', arabic: 'طَعَامِ', transliteration: 'Ta\'ami', meaning: 'Feed / Food' },
          { id: 'fj18-5', arabic: 'الْمِسْكِينِ', transliteration: 'Al-miskin', meaning: 'The poor' }
        ]
      },
      {
        id: '89-19',
        audio: getAudioUrl(89, 19),
        arabicFull: 'وَتَأْكُلُونَ التُّرَاثَ أَكْلًا لَّمًّا',
        translation: 'And you consume inheritance, devouring [it] altogether,',
        visual: 'greed',
        lesson: 'Greed drives people to steal the inheritance rights of women, orphans, and the weak.',
        words: [
          { id: 'fj19-1', arabic: 'وَتَأْكُلُونَ', transliteration: 'Wa-ta\'kuluna', meaning: 'And you consume / eat' },
          { id: 'fj19-2', arabic: 'التُّرَاثَ', transliteration: 'At-turatha', meaning: 'The inheritance' },
          { id: 'fj19-3', arabic: 'أَكْلًا', transliteration: 'Aklan', meaning: 'Devouring / Eating' },
          { id: 'fj19-4', arabic: 'لَّمًّا', transliteration: 'Lamman', meaning: 'Altogether / greedily' }
        ]
      },
      {
        id: '89-20',
        audio: getAudioUrl(89, 20),
        arabicFull: 'وَتُحِبُّونَ الْمَالَ حُبًّا جَمًّا',
        translation: 'And you love wealth with immense love.',
        visual: 'love_money',
        lesson: 'An obsessive, blinding love for money that destroys moral boundaries.',
        words: [
          { id: 'fj20-1', arabic: 'وَتُحِبُّونَ', transliteration: 'Wa-tuhibbuna', meaning: 'And you love' },
          { id: 'fj20-2', arabic: 'الْمَالَ', transliteration: 'Al-mala', meaning: 'The wealth' },
          { id: 'fj20-3', arabic: 'حُبًّا', transliteration: 'Hubban', meaning: 'With love' },
          { id: 'fj20-4', arabic: 'جَمًّا', transliteration: 'Jamman', meaning: 'Immense / abundant' }
        ]
      },
      {
        id: '89-21',
        audio: getAudioUrl(89, 21),
        arabicFull: 'كَلَّا إِذَا دُكَّتِ الْأَرْضُ دَكًّا دَكًّا',
        translation: 'No! When the earth has been leveled - pounded and crushed -',
        visual: 'earthquake',
        lesson: 'A harsh stop to their delusion. The earth they fought over will be completely flattened out.',
        words: [
          { id: 'fj21-1', arabic: 'كَلَّا', transliteration: 'Kalla', meaning: 'No!' },
          { id: 'fj21-2', arabic: 'إِذَا', transliteration: 'Idha', meaning: 'When' },
          { id: 'fj21-3', arabic: 'دُكَّتِ', transliteration: 'Dukkati', meaning: 'Has been leveled' },
          { id: 'fj21-4', arabic: 'الْأَرْضُ', transliteration: 'Al-ardu', meaning: 'The earth' },
          { id: 'fj21-5', arabic: 'دَكًّا', transliteration: 'Dakkan', meaning: 'Pounded' },
          { id: 'fj21-6', arabic: 'دَكًّا', transliteration: 'Dakkan', meaning: 'Crushed' }
        ]
      },
      {
        id: '89-22',
        audio: getAudioUrl(89, 22),
        arabicFull: 'وَجَاءَ رَبُّكَ وَالْمَلَائِكَةُ صَفًّا صَفًّا',
        translation: 'And your Lord has come and the angels, rank upon rank,',
        visual: 'angels_ranks',
        lesson: 'The majestic and terrifying descent of Allah for Judgment, surrounded by organized armies of angels.',
        words: [
          { id: 'fj22-1', arabic: 'وَجَاءَ', transliteration: 'Wa-ja\'a', meaning: 'And has come' },
          { id: 'fj22-2', arabic: 'رَبُّكَ', transliteration: 'Rabbuka', meaning: 'Your Lord' },
          { id: 'fj22-3', arabic: 'وَالْمَلَائِكَةُ', transliteration: 'Wal-mala\'ikatu', meaning: 'And the angels' },
          { id: 'fj22-4', arabic: 'صَفًّا', transliteration: 'Saffan', meaning: 'Rank' },
          { id: 'fj22-5', arabic: 'صَفًّا', transliteration: 'Saffan', meaning: 'Upon rank' }
        ]
      },
      {
        id: '89-23',
        audio: getAudioUrl(89, 23),
        arabicFull: 'وَجِيءَ يَوْمَئِذٍ بِجَهَنَّمَ ۚ يَوْمَئِذٍ يَتَذَكَّرُ الْإِنسَانُ وَأَنَّىٰ لَهُ الذِّكْرَىٰ',
        translation: 'And brought [within view], that Day, is Hell - that Day, man will remember, but what good to him will be the remembrance?',
        visual: 'hell_brought',
        lesson: 'Hell is literally dragged into view. In that moment of terror, every sinner will finally "wake up", but it\'s too late.',
        words: [
          { id: 'fj23-1', arabic: 'وَجِيءَ', transliteration: 'Wa-ji\'a', meaning: 'And is brought' },
          { id: 'fj23-2', arabic: 'يَوْمَئِذٍ', transliteration: 'Yawma\'idhin', meaning: 'That Day' },
          { id: 'fj23-3', arabic: 'بِجَهَنَّمَ', transliteration: 'Bi-jahannama', meaning: 'Hell' },
          { id: 'fj23-4', arabic: 'يَتَذَكَّرُ', transliteration: 'Yatadhakkaru', meaning: 'Will remember' },
          { id: 'fj23-5', arabic: 'الْإِنسَانُ', transliteration: 'Al-insanu', meaning: 'The man' },
          { id: 'fj23-6', arabic: 'وَأَنَّىٰ', transliteration: 'Wa-anna', meaning: 'But how/what good' },
          { id: 'fj23-7', arabic: 'لَهُ', transliteration: 'Lahu', meaning: 'To him' },
          { id: 'fj23-8', arabic: 'الذِّكْرَىٰ', transliteration: 'Adh-dhikra', meaning: 'The remembrance' }
        ]
      },
      {
        id: '89-24',
        audio: getAudioUrl(89, 24),
        arabicFull: 'يَقُولُ يَا لَيْتَنِي قَدَّمْتُ لِحَيَاتِي',
        translation: 'He will say, "Oh, I wish I had sent ahead [some good] for my life."',
        visual: 'regret',
        lesson: 'He calls the Hereafter "my life", realizing that his time on earth was just a temporary illusion.',
        words: [
          { id: 'fj24-1', arabic: 'يَقُولُ', transliteration: 'Yaqulu', meaning: 'He will say' },
          { id: 'fj24-2', arabic: 'يَا لَيْتَنِي', transliteration: 'Ya laytani', meaning: 'Oh, I wish' },
          { id: 'fj24-3', arabic: 'قَدَّمْتُ', transliteration: 'Qaddamtu', meaning: 'I had sent ahead' },
          { id: 'fj24-4', arabic: 'لِحَيَاتِي', transliteration: 'Li-hayati', meaning: 'For my life' }
        ]
      },
      {
        id: '89-25',
        audio: getAudioUrl(89, 25),
        arabicFull: 'فَيَوْمَئِذٍ لَّا يُعَذِّبُ عَذَابَهُ أَحَدٌ',
        translation: 'So on that Day, none will punish [as severely] as His punishment,',
        visual: 'severe_punishment',
        lesson: 'The divine punishment for ultimate tyranny and arrogance is unmatched by anything ever seen on earth.',
        words: [
          { id: 'fj25-1', arabic: 'فَيَوْمَئِذٍ', transliteration: 'Fa-yawma\'idhin', meaning: 'So on that Day' },
          { id: 'fj25-2', arabic: 'لَّا', transliteration: 'La', meaning: 'None' },
          { id: 'fj25-3', arabic: 'يُعَذِّبُ', transliteration: 'Yu\'adhdhibu', meaning: 'Will punish' },
          { id: 'fj25-4', arabic: 'عَذَابَهُ', transliteration: '\'Adhabahu', meaning: 'Like His punishment' },
          { id: 'fj25-5', arabic: 'أَحَدٌ', transliteration: 'Ahadun', meaning: 'Anyone' }
        ]
      },
      {
        id: '89-26',
        audio: getAudioUrl(89, 26),
        arabicFull: 'وَلَا يُوثِقُ وَثَاقَهُ أَحَدٌ',
        translation: 'And none will bind [as severely] as His binding of him.',
        visual: 'binding',
        lesson: 'Those who bound and oppressed others unjustly in the world will face inescapable chains.',
        words: [
          { id: 'fj26-1', arabic: 'وَلَا', transliteration: 'Wa-la', meaning: 'And none' },
          { id: 'fj26-2', arabic: 'يُوثِقُ', transliteration: 'Yuthiqu', meaning: 'Will bind' },
          { id: 'fj26-3', arabic: 'وَثَاقَهُ', transliteration: 'Wathaqahu', meaning: 'Like His binding' },
          { id: 'fj26-4', arabic: 'أَحَدٌ', transliteration: 'Ahadun', meaning: 'Anyone' }
        ]
      },
      {
        id: '89-27',
        audio: getAudioUrl(89, 27),
        arabicFull: 'يَا أَيَّتُهَا النَّفْسُ الْمُطْمَئِنَّةُ',
        translation: '[To the righteous it will be said], "O reassured soul,',
        visual: 'peaceful_soul',
        lesson: 'The ultimate goal of a believer is to reach this state: Mutma\'innah. A soul at complete peace with Allah\'s decree.',
        words: [
          { id: 'fj27-1', arabic: 'يَا أَيَّتُهَا', transliteration: 'Ya ayyatuha', meaning: 'O you' },
          { id: 'fj27-2', arabic: 'النَّفْسُ', transliteration: 'An-nafsu', meaning: 'The soul' },
          { id: 'fj27-3', arabic: 'الْمُطْمَئِنَّةُ', transliteration: 'Al-mutma\'innah', meaning: 'The reassured / peaceful' }
        ]
      },
      {
        id: '89-28',
        audio: getAudioUrl(89, 28),
        arabicFull: 'ارْجِعِي إِلَىٰ رَبِّكِ رَاضِيَةً مَّرْضِيَّةً',
        translation: 'Return to your Lord, well-pleased and pleasing [to Him],',
        visual: 'return',
        lesson: 'Death is not an end for the believer; it is a beautiful, welcoming return home.',
        words: [
          { id: 'fj28-1', arabic: 'ارْجِعِي', transliteration: 'Irji\'i', meaning: 'Return' },
          { id: 'fj28-2', arabic: 'إِلَىٰ', transliteration: 'Ila', meaning: 'To' },
          { id: 'fj28-3', arabic: 'رَبِّكِ', transliteration: 'Rabbiki', meaning: 'Your Lord' },
          { id: 'fj28-4', arabic: 'رَاضِيَةً', transliteration: 'Radiyatan', meaning: 'Well-pleased' },
          { id: 'fj28-5', arabic: 'مَّرْضِيَّةً', transliteration: 'Mardiyyah', meaning: 'Pleasing (to Him)' }
        ]
      },
      {
        id: '89-29',
        audio: getAudioUrl(89, 29),
        arabicFull: 'فَادْخُلِي فِي عِبَادِي',
        translation: 'And enter among My [righteous] servants',
        visual: 'servants',
        lesson: 'You are welcomed into the elite company of Prophets, martyrs, and the most sincere worshippers.',
        words: [
          { id: 'fj29-1', arabic: 'فَادْخُلِي', transliteration: 'Fadkhuli', meaning: 'So enter' },
          { id: 'fj29-2', arabic: 'فِي', transliteration: 'Fi', meaning: 'Among' },
          { id: 'fj29-3', arabic: 'عِبَادِي', transliteration: '\'Ibadi', meaning: 'My servants' }
        ]
      },
      {
        id: '89-30',
        audio: getAudioUrl(89, 30),
        arabicFull: 'وَادْخُلِي جَنَّتِي',
        translation: 'And enter My Paradise."',
        visual: 'paradise_door',
        lesson: 'Allah calls it "My Paradise," offering the ultimate divine hospitality to the soul at peace.',
        words: [
          { id: 'fj30-1', arabic: 'وَادْخُلِي', transliteration: 'Wadkhuli', meaning: 'And enter' },
          { id: 'fj30-2', arabic: 'جَنَّتِي', transliteration: 'Jannati', meaning: 'My Paradise' }
        ]
      }
    ]
  },

 // --- 88. AL-GHASHIYAH (Uses 'Cloud' & 'blue') ---
  {
    id: 'ghashiyah',
    number: 88,
    title: 'Al-Ghashiyah',
    meaning: 'The Overwhelming',
    story: 'This Surah vividly describes the Day of Judgment as an "overwhelming" event. it contrasts the faces of the dwellers of Hell—humiliated and exhausted—with the radiant, satisfied faces of the dwellers of Paradise. It then points to the camel, the sky, the mountains, and the earth as signs of Allah\'s power.',
    color: 'blue',
    themeGradient: 'from-blue-600 to-indigo-800',
    iconName: 'Cloud',
    totalVerses: 26,
    levels: [
      {
        id: '88-1',
        audio: getAudioUrl(88, 1),
        arabicFull: 'هَلْ أَتَاكَ حَدِيثُ الْغَاشِيَةِ',
        translation: 'Has there reached you the report of the Overwhelming [event]?',
        visual: 'overwhelming',
        lesson: 'The Day of Judgment is called "Al-Ghashiyah" because its terror will cover and overwhelm everything.',
        words: [
          { id: 'gh1-1', arabic: 'هَلْ', transliteration: 'Hal', meaning: 'Has' },
          { id: 'gh1-2', arabic: 'أَتَاكَ', transliteration: 'ataka', meaning: 'reached you' },
          { id: 'gh1-3', arabic: 'حَدِيثُ', transliteration: 'hadithu', meaning: 'the report / news' },
          { id: 'gh1-4', arabic: 'الْغَاشِيَةِ', transliteration: 'al-ghashiyah', meaning: 'the Overwhelming' }
        ]
      },
      {
        id: '88-2',
        audio: getAudioUrl(88, 2),
        arabicFull: 'وُجُوهٌ يَوْمَئِذٍ خَاشِعَةٌ',
        translation: '[Some] faces, that Day, will be humbled,',
        visual: 'humbled_faces',
        lesson: 'These are the faces of those who rejected the truth; they are filled with shame and downcast eyes.',
        words: [
          { id: 'gh2-1', arabic: 'وُجُوهٌ', transliteration: 'wujuhun', meaning: 'faces' },
          { id: 'gh2-2', arabic: 'يَوْمَئِذٍ', transliteration: 'yawma-idhin', meaning: 'that Day' },
          { id: 'gh2-3', arabic: 'خَاشِعَةٌ', transliteration: 'khashi\'ah', meaning: 'humbled / downcast' }
        ]
      },
      {
        id: '88-3',
        audio: getAudioUrl(88, 3),
        arabicFull: 'عَامِلَةٌ نَّاصِبَةٌ',
        translation: 'Working [hard] and exhausted,',
        visual: 'exhausted',
        lesson: 'They worked hard in the world on the wrong things, and now they are exhausted in the afterlife.',
        words: [
          { id: 'gh3-1', arabic: 'عَامِلَةٌ', transliteration: 'amilatun', meaning: 'working' },
          { id: 'gh3-2', arabic: 'نَّاصِبَةٌ', transliteration: 'nasibah', meaning: 'exhausted / tired' }
        ]
      },
      {
        id: '88-4',
        audio: getAudioUrl(88, 4),
        arabicFull: 'تَصْلَىٰ نَارًا حَامِيَةً',
        translation: 'They will [enter to] burn in an intensely hot Fire.',
        visual: 'hot_fire',
        lesson: 'A description of the severe heat prepared for the rejectors.',
        words: [
          { id: 'gh4-1', arabic: 'تَصْلَىٰ', transliteration: 'tasla', meaning: 'they will burn' },
          { id: 'gh4-2', arabic: 'نَارًا', transliteration: 'naran', meaning: 'a fire' },
          { id: 'gh4-3', arabic: 'حَامِيَةً', transliteration: 'hamiyah', meaning: 'intensely hot' }
        ]
      },
      {
        id: '88-5',
        audio: getAudioUrl(88, 5),
        arabicFull: 'تُسْقَىٰ مِنْ عَيْنٍ آنِيَةٍ',
        translation: 'They will be given drink from a boiling spring.',
        visual: 'boiling_spring',
        lesson: 'Even their relief (drink) is a form of punishment.',
        words: [
          { id: 'gh5-1', arabic: 'تُسْقَىٰ', transliteration: 'tusqa', meaning: 'they will be given drink' },
          { id: 'gh5-2', arabic: 'مِنْ', transliteration: 'min', meaning: 'from' },
          { id: 'gh5-3', arabic: 'عَيْنٍ', transliteration: 'aynin', meaning: 'a spring' },
          { id: 'gh5-4', arabic: 'آنِيَةٍ', transliteration: 'aniyah', meaning: 'boiling' }
        ]
      },
      {
        id: '88-6',
        audio: getAudioUrl(88, 6),
        arabicFull: 'لَّيْسَ لَهُمْ طَعَامٌ إِلَّا مِن ضَرِيعٍ',
        translation: 'For them there will be no food except from a poisonous, thorny plant',
        visual: 'thorny_plant',
        lesson: 'Dhari\' is a dry, thorny plant that no animal would dare to eat.',
        words: [
          { id: 'gh6-1', arabic: 'لَّيْسَ', transliteration: 'laysa', meaning: 'not' },
          { id: 'gh6-2', arabic: 'لَهُمْ', transliteration: 'lahum', meaning: 'for them' },
          { id: 'gh6-3', arabic: 'طَعَامٌ', transliteration: 'taamun', meaning: 'food' },
          { id: 'gh6-4', arabic: 'إِلَّا', transliteration: 'illa', meaning: 'except' },
          { id: 'gh6-5', arabic: 'مِن', transliteration: 'min', meaning: 'from' },
          { id: 'gh6-6', arabic: 'ضَرِيعٍ', transliteration: 'dhari\'', meaning: 'thorny plant' }
        ]
      },
      {
        id: '88-7',
        audio: getAudioUrl(88, 7),
        arabicFull: 'لَّا يُسْمِنُ وَلَا يُغْنِي مِن جُوعٍ',
        translation: 'Which neither nourishes nor avails against hunger.',
        visual: 'hunger',
        lesson: 'The food of Hell provides no energy and satisfies no craving.',
        words: [
          { id: 'gh7-1', arabic: 'لَّا', transliteration: 'la', meaning: 'not' },
          { id: 'gh7-2', arabic: 'يُسْمِنُ', transliteration: 'yusminu', meaning: 'nourishes / fattens' },
          { id: 'gh7-3', arabic: 'وَلَا', transliteration: 'wa-la', meaning: 'and not' },
          { id: 'gh7-4', arabic: 'يُغْنِي', transliteration: 'yughni', meaning: 'avails / satisfies' },
          { id: 'gh7-5', arabic: 'مِن', transliteration: 'min', meaning: 'from' },
          { id: 'gh7-6', arabic: 'جُوعٍ', transliteration: 'ju\'in', meaning: 'hunger' }
        ]
      },
      {
        id: '88-8',
        audio: getAudioUrl(88, 8),
        arabicFull: 'وُجُوهٌ يَوْمَئِذٍ نَّاعِمَةٌ',
        translation: '[Other] faces, that Day, will show pleasure,',
        visual: 'radiant_faces',
        lesson: 'The scene shifts to the believers, whose faces shine with beauty and comfort.',
        words: [
          { id: 'gh8-1', arabic: 'وُجُوهٌ', transliteration: 'wujuhun', meaning: 'faces' },
          { id: 'gh8-2', arabic: 'يَوْمَئِذٍ', transliteration: 'yawma-idhin', meaning: 'that Day' },
          { id: 'gh8-3', arabic: 'نَّاعِمَةٌ', transliteration: 'na\'imah', meaning: 'show pleasure / joyful' }
        ]
      },
      {
        id: '88-9',
        audio: getAudioUrl(88, 9),
        arabicFull: 'لِّسَعْيِهَا رَاضِيَةٌ',
        translation: 'With their effort [they are] satisfied',
        visual: 'satisfied',
        lesson: 'They are happy because they see the fruit of their prayers and good deeds.',
        words: [
          { id: 'gh9-1', arabic: 'لِّسَعْيِهَا', transliteration: 'li-sa\'yiha', meaning: 'with their effort' },
          { id: 'gh9-2', arabic: 'رَاضِيَةٌ', transliteration: 'radiyah', meaning: 'satisfied / pleased' }
        ]
      },
      {
        id: '88-10',
        audio: getAudioUrl(88, 10),
        arabicFull: 'فِي جَنَّةٍ عَالِيَةٍ',
        translation: 'In an elevated garden,',
        visual: 'paradise_garden',
        lesson: 'Paradise is "high" both in its location and its honor.',
        words: [
          { id: 'gh10-1', arabic: 'فِي', transliteration: 'fi', meaning: 'in' },
          { id: 'gh10-2', arabic: 'جَنَّةٍ', transliteration: 'jannatin', meaning: 'a garden' },
          { id: 'gh10-3', arabic: 'عَالِيَةٍ', transliteration: 'aliyah', meaning: 'elevated / high' }
        ]
      },
      {
        id: '88-11',
        audio: getAudioUrl(88, 11),
        arabicFull: 'لَّا تَسْمَعُ فِيهَا لَاغِيَةً',
        translation: 'Wherein they will hear no unsuitable speech.',
        visual: 'peace',
        lesson: 'In Paradise, there is no gossip, lies, or hurtful words—only peace.',
        words: [
          { id: 'gh11-1', arabic: 'لَّا', transliteration: 'la', meaning: 'not' },
          { id: 'gh11-2', arabic: 'تَسْمَعُ', transliteration: 'tasmau', meaning: 'hear' },
          { id: 'gh11-3', arabic: 'فِيهَا', transliteration: 'fiha', meaning: 'therein' },
          { id: 'gh11-4', arabic: 'لَاغِيَةً', transliteration: 'laghiyah', meaning: 'unsuitable / vain speech' }
        ]
      },
      {
        id: '88-12',
        audio: getAudioUrl(88, 12),
        arabicFull: 'فِيهَا عَيْنٌ جَارِيَةٌ',
        translation: 'Within it is a running spring.',
        visual: 'spring',
        lesson: 'Flowing water is a sign of life, abundance, and luxury.',
        words: [
          { id: 'gh12-1', arabic: 'فِيهَا', transliteration: 'fiha', meaning: 'within it' },
          { id: 'gh12-2', arabic: 'عَيْنٌ', transliteration: 'aynun', meaning: 'a spring' },
          { id: 'gh12-3', arabic: 'جَارِيَةٌ', transliteration: 'jariyah', meaning: 'running / flowing' }
        ]
      },
      {
        id: '88-13',
        audio: getAudioUrl(88, 13),
        arabicFull: 'فِيهَا سُرُرٌ مَّرْفُوعَةٌ',
        translation: 'Within it are couches raised high',
        visual: 'couches',
        lesson: 'Raised couches allow people to look out over the vast beauty of their gardens.',
        words: [
          { id: 'gh13-1', arabic: 'فِيهَا', transliteration: 'fiha', meaning: 'within it' },
          { id: 'gh13-2', arabic: 'سُرُرٌ', transliteration: 'sururun', meaning: 'couches / thrones' },
          { id: 'gh13-3', arabic: 'مَّرْفُوعَةٌ', transliteration: 'marfu\'ah', meaning: 'raised high' }
        ]
      },
      {
        id: '88-14',
        audio: getAudioUrl(88, 14),
        arabicFull: 'وَأَكْوَابٌ مَّوْضُوعَةٌ',
        translation: 'And cups put in place',
        visual: 'cups',
        lesson: 'Everything is ready and prepared for the believer\'s comfort.',
        words: [
          { id: 'gh14-1', arabic: 'وَ', transliteration: 'wa', meaning: 'and' },
          { id: 'gh14-2', arabic: 'أَكْوَابٌ', transliteration: 'akwabun', meaning: 'cups' },
          { id: 'gh14-3', arabic: 'مَّوْضُوعَةٌ', transliteration: 'mawdu\'ah', meaning: 'put in place' }
        ]
      },
      {
        id: '88-15',
        audio: getAudioUrl(88, 15),
        arabicFull: 'وَنَمَارِقُ مَصْفُوفَةٌ',
        translation: 'And cushions lined up',
        visual: 'cushions',
        lesson: 'Even the decor is perfectly arranged for a community that loves one another.',
        words: [
          { id: 'gh15-1', arabic: 'وَ', transliteration: 'wa', meaning: 'and' },
          { id: 'gh15-2', arabic: 'نَمَارِقُ', transliteration: 'namariqu', meaning: 'cushions' },
          { id: 'gh15-3', arabic: 'مَصْفُوفَةٌ', transliteration: 'masfufah', meaning: 'lined up' }
        ]
      },
      {
        id: '88-16',
        audio: getAudioUrl(88, 16),
        arabicFull: 'وَزَرَابِيُّ مَبْثُوثَةٌ',
        translation: 'And rich carpets spread around.',
        visual: 'carpets',
        lesson: 'Soft, beautiful carpets spread everywhere to make the home of the hereafter perfect.',
        words: [
          { id: 'gh16-1', arabic: 'وَ', transliteration: 'wa', meaning: 'and' },
          { id: 'gh16-2', arabic: 'زَرَابِيُّ', transliteration: 'zarabiyyu', meaning: 'rich carpets' },
          { id: 'gh16-3', arabic: 'مَبْثُوثَةٌ', transliteration: 'mabthuthah', meaning: 'spread around' }
        ]
      },
      {
        id: '88-17',
        audio: getAudioUrl(88, 17),
        arabicFull: 'أَفَلَا يَنظُرُونَ إِلَى الْإِبِلِ كَيْفَ خُلِقَتْ',
        translation: 'Then do they not look at the camels - how they are created?',
        visual: 'camel',
        lesson: 'The camel is a miracle of engineering, designed to survive the harshest deserts with very little.',
        words: [
          { id: 'gh17-1', arabic: 'أَفَلَا', transliteration: 'a-fa-la', meaning: 'then do not' },
          { id: 'gh17-2', arabic: 'يَنظُرُونَ', transliteration: 'yan-zuruna', meaning: 'they look' },
          { id: 'gh17-3', arabic: 'إِلَى', transliteration: 'ila', meaning: 'at' },
          { id: 'gh17-4', arabic: 'الْإِبِلِ', transliteration: 'al-ibili', meaning: 'the camels' },
          { id: 'gh17-5', arabic: 'كَيْفَ', transliteration: 'kayfa', meaning: 'how' },
          { id: 'gh17-6', arabic: 'خُلِقَتْ', transliteration: 'khuliqat', meaning: 'they were created' }
        ]
      },
      {
        id: '88-18',
        audio: getAudioUrl(88, 18),
        arabicFull: 'وَإِلَى السَّمَاءِ كَيْفَ رُفِعَتْ',
        translation: 'And at the sky - how it is raised?',
        visual: 'sky',
        lesson: 'Look at the vast sky, held up without pillars by the command of Allah.',
        words: [
          { id: 'gh18-1', arabic: 'وَ', transliteration: 'wa', meaning: 'and' },
          { id: 'gh18-2', arabic: 'إِلَى', transliteration: 'ila', meaning: 'at' },
          { id: 'gh18-3', arabic: 'السَّمَاءِ', transliteration: 'as-samai', meaning: 'the sky' },
          { id: 'gh18-4', arabic: 'كَيْفَ', transliteration: 'kayfa', meaning: 'how' },
          { id: 'gh18-5', arabic: 'رُفِعَتْ', transliteration: 'rufi\'at', meaning: 'it was raised' }
        ]
      },
      {
        id: '88-19',
        audio: getAudioUrl(88, 19),
        arabicFull: 'وَإِلَى الْجِبَالِ كَيْفَ نُصِبَتْ',
        translation: 'And at the mountains - how they are erected?',
        visual: 'mountains',
        lesson: 'Mountains act as pegs, stabilizing the very earth we stand on.',
        words: [
          { id: 'gh19-1', arabic: 'وَ', transliteration: 'wa', meaning: 'and' },
          { id: 'gh19-2', arabic: 'إِلَى', transliteration: 'ila', meaning: 'at' },
          { id: 'gh19-3', arabic: 'الْجِبَالِ', transliteration: 'al-jibali', meaning: 'the mountains' },
          { id: 'gh19-4', arabic: 'كَيْفَ', transliteration: 'kayfa', meaning: 'how' },
          { id: 'gh19-5', arabic: 'نُصِبَتْ', transliteration: 'nusibat', meaning: 'they were erected' }
        ]
      },
      {
        id: '88-20',
        audio: getAudioUrl(88, 20),
        arabicFull: 'وَإِلَى الْأَرْضِ كَيْفَ سُطِحَتْ',
        translation: 'And at the earth - how it is spread out?',
        visual: 'earth',
        lesson: 'The earth is smoothed and spread out so that we can easily live and travel upon it.',
        words: [
          { id: 'gh20-1', arabic: 'وَ', transliteration: 'wa', meaning: 'and' },
          { id: 'gh20-2', arabic: 'إِلَى', transliteration: 'ila', meaning: 'at' },
          { id: 'gh20-3', arabic: 'الْأَرْضِ', transliteration: 'al-ardi', meaning: 'the earth' },
          { id: 'gh20-4', arabic: 'كَيْفَ', transliteration: 'kayfa', meaning: 'how' },
          { id: 'gh20-5', arabic: 'سُطِحَتْ', transliteration: 'sutihat', meaning: 'it was spread' }
        ]
      },
      {
        id: '88-21',
        audio: getAudioUrl(88, 21),
        arabicFull: 'فَذَكِّرْ إِنَّمَا أَنتَ مُذَكِّرٌ',
        translation: 'So remind, [O Muhammad]; you are only a reminder.',
        visual: 'reminder',
        lesson: 'The Prophet\'s job (and ours) is just to share the truth beautifully; we can\'t force people to believe.',
        words: [
          { id: 'gh21-1', arabic: 'فَذَكِّرْ', transliteration: 'fa-dhakkir', meaning: 'so remind' },
          { id: 'gh21-2', arabic: 'إِنَّمَا', transliteration: 'innama', meaning: 'only' },
          { id: 'gh21-3', arabic: 'أَنتَ', transliteration: 'anta', meaning: 'you' },
          { id: 'gh21-4', arabic: 'مُذَكِّرٌ', transliteration: 'mudhakkir', meaning: 'a reminder' }
        ]
      },
      {
        id: '88-22',
        audio: getAudioUrl(88, 22),
        arabicFull: 'لَّسْتَ عَلَيْهِم بِمُصَيْطِرٍ',
        translation: 'You are not over them a controller.',
        visual: 'no_control',
        lesson: 'Faith must come from the heart; it cannot be forced by anyone.',
        words: [
          { id: 'gh22-1', arabic: 'لَّسْتَ', transliteration: 'lasta', meaning: 'you are not' },
          { id: 'gh22-2', arabic: 'عَلَيْهِم', transliteration: 'alayhim', meaning: 'over them' },
          { id: 'gh22-3', arabic: 'بِمُصَيْطِرٍ', transliteration: 'bi-musaytir', meaning: 'a controller' }
        ]
      },
      {
        id: '88-23',
        audio: getAudioUrl(88, 23),
        arabicFull: 'إِلَّا مَن تَوَلَّىٰ وَكَفَرَ',
        translation: 'However, he who turns away and disbelieves -',
        visual: 'disbelief',
        lesson: 'Some people will choose to ignore the reminders and turn their backs on the truth.',
        words: [
          { id: 'gh23-1', arabic: 'إِلَّا', transliteration: 'illa', meaning: 'however' },
          { id: 'gh23-2', arabic: 'مَن', transliteration: 'man', meaning: 'who' },
          { id: 'gh23-3', arabic: 'تَوَلَّىٰ', transliteration: 'tawalla', meaning: 'turns away' },
          { id: 'gh23-4', arabic: 'وَ', transliteration: 'wa', meaning: 'and' },
          { id: 'gh23-5', arabic: 'كَفَرَ', transliteration: 'kafara', meaning: 'disbelieves' }
        ]
      },
      {
        id: '88-24',
        audio: getAudioUrl(88, 24),
        arabicFull: 'فَيُعَذِّبُهُ اللَّهُ الْعَذَابَ الْأَكْبَرَ',
        translation: 'Then Allah will punish him with the greatest punishment.',
        visual: 'punishment',
        lesson: 'Rejecting the signs of the Creator leads to the most severe consequences.',
        words: [
          { id: 'gh24-1', arabic: 'فَيُعَذِّبُهُ', transliteration: 'fa-yu\'adhdhibuhu', meaning: 'then He will punish him' },
          { id: 'gh24-2', arabic: 'اللَّهُ', transliteration: 'Allahu', meaning: 'Allah' },
          { id: 'gh24-3', arabic: 'الْعَذَابَ', transliteration: 'al-adhaba', meaning: 'the punishment' },
          { id: 'gh24-4', arabic: 'الْأَكْبَرَ', transliteration: 'al-akbar', meaning: 'the greatest' }
        ]
      },
      {
        id: '88-25',
        audio: getAudioUrl(88, 25),
        arabicFull: 'إِنَّ إِلَيْنَا إِيَابَهُمْ',
        translation: 'Indeed, to Us is their return.',
        visual: 'return_to_allah',
        lesson: 'No matter where we run, we will all eventually return to our Lord.',
        words: [
          { id: 'gh25-1', arabic: 'إِنَّ', transliteration: 'inna', meaning: 'indeed' },
          { id: 'gh25-2', arabic: 'إِلَيْنَا', transliteration: 'ilayna', meaning: 'to Us' },
          { id: 'gh25-3', arabic: 'إِيَابَهُمْ', transliteration: 'iyabahum', meaning: 'their return' }
        ]
      },
      {
        id: '88-26',
        audio: getAudioUrl(88, 26),
        arabicFull: 'ثُمَّ إِنَّ عَلَيْنَا حِسَابَهُم',
        translation: 'Then indeed, upon Us is their account.',
        visual: 'accountability',
        lesson: 'Every single deed will be accounted for by the most Just Judge.',
        words: [
          { id: 'gh26-1', arabic: 'ثُمَّ', transliteration: 'thumma', meaning: 'then' },
          { id: 'gh26-2', arabic: 'إِنَّ', transliteration: 'inna', meaning: 'indeed' },
          { id: 'gh26-3', arabic: 'عَلَيْنَا', transliteration: 'alayna', meaning: 'upon Us' },
          { id: 'gh26-4', arabic: 'حِسَابَهُم', transliteration: 'hisabahum', meaning: 'their account' }
        ]
      }
    ]
  },

  // --- 87. AL-A'LA (Uses 'Mountain' & 'violet') ---
  {
    id: 'ala',
    number: 87,
    title: 'Al-A\'la',
    meaning: 'The Most High',
    story: 'This was one of the Prophet\'s (ﷺ) favorite Surahs. It begins by glorifying Allah as the One who perfectly designs and guides all creation. It promises the Prophet that Allah will make the Quran easy for him to remember, and it reminds us that true success belongs to those who purify their souls.',
    color: 'violet',
    themeGradient: 'from-violet-600 to-fuchsia-900',
    iconName: 'Mountain',
    totalVerses: 19,
    levels: [
      {
        id: '87-1',
        audio: getAudioUrl(87, 1),
        arabicFull: 'سَبِّحِ اسْمَ رَبِّكَ الْأَعْلَى',
        translation: 'Exalt the name of your Lord, the Most High,',
        visual: 'glorify',
        lesson: 'To glorify Allah is to recognize His perfection and that He is far above any flaw.',
        words: [
          { id: 'al1-1', arabic: 'سَبِّحِ', transliteration: 'Sabbih', meaning: 'Exalt / Glorify' },
          { id: 'al1-2', arabic: 'اسْمَ', transliteration: 'isma', meaning: 'the name' },
          { id: 'al1-3', arabic: 'رَبِّكَ', transliteration: 'rabbika', meaning: 'of your Lord' },
          { id: 'al1-4', arabic: 'الْأَعْلَى', transliteration: 'al-ala', meaning: 'the Most High' }
        ]
      },
      {
        id: '87-2',
        audio: getAudioUrl(87, 2),
        arabicFull: 'الَّذِي خَلَقَ فَسَوَّىٰ',
        translation: 'Who created and proportioned',
        visual: 'creation',
        lesson: 'Allah didn\'t just create things; He gave every creature the perfect shape and tools it needs to survive.',
        words: [
          { id: 'al2-1', arabic: 'الَّذِي', transliteration: 'alladhi', meaning: 'who' },
          { id: 'al2-2', arabic: 'خَلَقَ', transliteration: 'khalaqa', meaning: 'created' },
          { id: 'al2-3', arabic: 'فَسَوَّىٰ', transliteration: 'fa-sawwa', meaning: 'and proportioned' }
        ]
      },
      {
        id: '87-3',
        audio: getAudioUrl(87, 3),
        arabicFull: 'وَالَّذِي قَدَّرَ فَهَدَىٰ',
        translation: 'And who destined and [then] guided',
        visual: 'guidance',
        lesson: 'Allah sets a destiny for everything—like a bird knowing how to fly or a seed knowing how to grow.',
        words: [
          { id: 'al3-1', arabic: 'وَ', transliteration: 'wa', meaning: 'and' },
          { id: 'al3-2', arabic: 'الَّذِي', transliteration: 'alladhi', meaning: 'who' },
          { id: 'al3-3', arabic: 'قَدَّرَ', transliteration: 'qaddara', meaning: 'destined / measured' },
          { id: 'al3-4', arabic: 'فَهَدَىٰ', transliteration: 'fa-hada', meaning: 'and guided' }
        ]
      },
      {
        id: '87-4',
        audio: getAudioUrl(87, 4),
        arabicFull: 'وَالَّذِي أَخْرَجَ الْمَرْعَىٰ',
        translation: 'And who brings out the pasture',
        visual: 'pasture',
        lesson: 'Allah brings green vegetation out of the dead earth to feed the animals.',
        words: [
          { id: 'al4-1', arabic: 'وَ', transliteration: 'wa', meaning: 'and' },
          { id: 'al4-2', arabic: 'الَّذِي', transliteration: 'alladhi', meaning: 'who' },
          { id: 'al4-3', arabic: 'أَخْرَجَ', transliteration: 'akhraja', meaning: 'brings out' },
          { id: 'al4-4', arabic: 'الْمَرْعَىٰ', transliteration: 'al-mara', meaning: 'the pasture' }
        ]
      },
      {
        id: '87-5',
        audio: getAudioUrl(87, 5),
        arabicFull: 'فَجَعَلَهُ غُثَاءً أَحْوَىٰ',
        translation: 'And [then] makes it black stubble.',
        visual: 'black_stubble',
        lesson: 'Even the greenest field eventually withers away, just as this life eventually ends.',
        words: [
          { id: 'al5-1', arabic: 'فَجَعَلَهُ', transliteration: 'fa-jaalahu', meaning: 'and then makes it' },
          { id: 'al5-2', arabic: 'غُثَاءً', transliteration: 'ghuthaan', meaning: 'stubble / debris' },
          { id: 'al5-3', arabic: 'أَحْوَىٰ', transliteration: 'ahwa', meaning: 'blackened' }
        ]
      },
      {
        id: '87-6',
        audio: getAudioUrl(87, 6),
        arabicFull: 'سَنُقْرِئُكَ فَلَا تَنسَىٰ',
        translation: 'We will make you recite, [O Muhammad], and you will not forget,',
        visual: 'quran_memorize',
        lesson: 'A miraculous promise: Allah will ensure the Prophet remembers the Quran perfectly.',
        words: [
          { id: 'al6-1', arabic: 'سَنُقْرِئُكَ', transliteration: 'sa-nuqri-uka', meaning: 'We will make you recite' },
          { id: 'al6-2', arabic: 'فَلَا', transliteration: 'fa-la', meaning: 'so not' },
          { id: 'al6-3', arabic: 'تَنسَىٰ', transliteration: 'tansa', meaning: 'you will forget' }
        ]
      },
      {
        id: '87-7',
        audio: getAudioUrl(87, 7),
        arabicFull: 'إِلَّا مَا شَاءَ اللَّهُ ۚ إِنَّهُ يَعْلَمُ الْجَهْرَ وَمَا يَخْفَىٰ',
        translation: 'Except what Allah should will. Indeed, He knows what is declared and what is hidden.',
        visual: 'allah_knows',
        lesson: 'Nothing is hidden from Allah—He knows your public actions and your secret thoughts.',
        words: [
          { id: 'al7-1', arabic: 'إِلَّا', transliteration: 'illa', meaning: 'except' },
          { id: 'al7-2', arabic: 'مَا', transliteration: 'ma', meaning: 'what' },
          { id: 'al7-3', arabic: 'شَاءَ', transliteration: 'shaa', meaning: 'wills' },
          { id: 'al7-4', arabic: 'اللَّهُ', transliteration: 'Allahu', meaning: 'Allah' },
          { id: 'al7-5', arabic: 'إِنَّهُ', transliteration: 'innahu', meaning: 'indeed He' },
          { id: 'al7-6', arabic: 'يَعْلَمُ', transliteration: 'yalamu', meaning: 'knows' },
          { id: 'al7-7', arabic: 'الْجَهْرَ', transliteration: 'al-jahra', meaning: 'the declared' },
          { id: 'al7-8', arabic: 'وَمَا', transliteration: 'wa-ma', meaning: 'and what' },
          { id: 'al7-9', arabic: 'يَخْفَىٰ', transliteration: 'yakhfa', meaning: 'is hidden' }
        ]
      },
      {
        id: '87-8',
        audio: getAudioUrl(87, 8),
        arabicFull: 'وَنُيَسِّرُكَ لِلْيُسْرَىٰ',
        translation: 'And We will ease you toward ease.',
        visual: 'ease',
        lesson: 'Allah promises to make the path of religion and guidance easy for the Prophet.',
        words: [
          { id: 'al8-1', arabic: 'وَ', transliteration: 'wa', meaning: 'and' },
          { id: 'al8-2', arabic: 'نُيَسِّرُكَ', transliteration: 'nu-yassiruka', meaning: 'We will ease you' },
          { id: 'al8-3', arabic: 'لِلْيُسْرَىٰ', transliteration: 'lil-yusra', meaning: 'toward ease' }
        ]
      },
      {
        id: '87-9',
        audio: getAudioUrl(87, 9),
        arabicFull: 'فَذَكِّرْ إِن نَّفَعَتِ الذِّكْرَىٰ',
        translation: 'So remind, if the reminder should benefit;',
        visual: 'remind',
        lesson: 'Keep sharing the message; it will always benefit the hearts that are open to it.',
        words: [
          { id: 'al9-1', arabic: 'فَذَكِّرْ', transliteration: 'fa-dhakkir', meaning: 'so remind' },
          { id: 'al9-2', arabic: 'إِن', transliteration: 'in', meaning: 'if' },
          { id: 'al9-3', arabic: 'نَّفَعَتِ', transliteration: 'nafaat', meaning: 'benefits' },
          { id: 'al9-4', arabic: 'الذِّكْرَىٰ', transliteration: 'adh-dhikra', meaning: 'the reminder' }
        ]
      },
      {
        id: '87-10',
        audio: getAudioUrl(87, 10),
        arabicFull: 'سَيَذَّكَّرُ مَن يَخْشَىٰ',
        translation: 'He who fears [Allah] will be reminded.',
        visual: 'fear_allah',
        lesson: 'Only the one who has "khashyah" (awe/fear) of Allah will truly listen and change.',
        words: [
          { id: 'al10-1', arabic: 'سَيَذَّكَّرُ', transliteration: 'sayadhdhakkaru', meaning: 'will be reminded' },
          { id: 'al10-2', arabic: 'مَن', transliteration: 'man', meaning: 'he who' },
          { id: 'al10-3', arabic: 'يَخْشَىٰ', transliteration: 'yakhsha', meaning: 'fears' }
        ]
      },
      {
        id: '87-11',
        audio: getAudioUrl(87, 11),
        arabicFull: 'وَيَتَجَنَّبُهَا الْأَشْقَى',
        translation: 'But the wretched one will avoid it -',
        visual: 'avoid',
        lesson: 'The "wretched" person is the one who actively runs away from good advice.',
        words: [
          { id: 'al11-1', arabic: 'وَ', transliteration: 'wa', meaning: 'and' },
          { id: 'al11-2', arabic: 'يَتَجَنَّبُهَا', transliteration: 'yatajannabuha', meaning: 'will avoid it' },
          { id: 'al11-3', arabic: 'الْأَشْقَى', transliteration: 'al-ashqa', meaning: 'the wretched one' }
        ]
      },
      {
        id: '87-12',
        audio: getAudioUrl(87, 12),
        arabicFull: 'الَّذِي يَصْلَى النَّارَ الْكُبْرَىٰ',
        translation: '[He] who will [enter and] burn in the greatest Fire,',
        visual: 'greatest_fire',
        lesson: 'The consequence of ignoring the reminder is the "Great Fire" of the hereafter.',
        words: [
          { id: 'al12-1', arabic: 'الَّذِي', transliteration: 'alladhi', meaning: 'who' },
          { id: 'al12-2', arabic: 'يَصْلَى', transliteration: 'yasla', meaning: 'will burn' },
          { id: 'al12-3', arabic: 'النَّارَ', transliteration: 'an-nara', meaning: 'the Fire' },
          { id: 'al12-4', arabic: 'الْكُبْرَىٰ', transliteration: 'al-kubra', meaning: 'the greatest' }
        ]
      },
      {
        id: '87-13',
        audio: getAudioUrl(87, 13),
        arabicFull: 'ثُمَّ لَا يَمُوتُ فِيهَا وَلَا يَحْيَىٰ',
        translation: 'Neither dying therein nor living.',
        visual: 'between_life_death',
        lesson: 'A terrifying state where there is no rest of death, but no quality of life either.',
        words: [
          { id: 'al13-1', arabic: 'ثُمَّ', transliteration: 'thumma', meaning: 'then' },
          { id: 'al13-2', arabic: 'لَا', transliteration: 'la', meaning: 'not' },
          { id: 'al13-3', arabic: 'يَمُوتُ', transliteration: 'yamutu', meaning: 'he dies' },
          { id: 'al13-4', arabic: 'فِيهَا', transliteration: 'fiha', meaning: 'therein' },
          { id: 'al13-5', arabic: 'وَلَا', transliteration: 'wa-la', meaning: 'and not' },
          { id: 'al13-6', arabic: 'يَحْيَىٰ', transliteration: 'yahya', meaning: 'he lives' }
        ]
      },
      {
        id: '87-14',
        audio: getAudioUrl(87, 14),
        arabicFull: 'قَدْ أَفْلَحَ مَن تَزَكَّىٰ',
        translation: 'He has certainly succeeded who purifies himself',
        visual: 'purify',
        lesson: 'True "Falah" (success) is achieved by cleaning your heart from bad intentions.',
        words: [
          { id: 'al14-1', arabic: 'قَدْ', transliteration: 'qad', meaning: 'certainly' },
          { id: 'al14-2', arabic: 'أَفْلَحَ', transliteration: 'aflaha', meaning: 'succeeded' },
          { id: 'al14-3', arabic: 'مَن', transliteration: 'man', meaning: 'he who' },
          { id: 'al14-4', arabic: 'تَزَكَّىٰ', transliteration: 'tazakka', meaning: 'purifies himself' }
        ]
      },
      {
        id: '87-15',
        audio: getAudioUrl(87, 15),
        arabicFull: 'وَذَكَرَ اسْمَ رَبِّهِ فَصَلَّىٰ',
        translation: 'And remembers the name of his Lord and prays.',
        visual: 'prayer',
        lesson: 'Prayer (Salah) is the natural result of a heart that truly remembers Allah.',
        words: [
          { id: 'al15-1', arabic: 'وَ', transliteration: 'wa', meaning: 'and' },
          { id: 'al15-2', arabic: 'ذَكَرَ', transliteration: 'dhakara', meaning: 'remembers' },
          { id: 'al15-3', arabic: 'اسْمَ', transliteration: 'isma', meaning: 'the name' },
          { id: 'al15-4', arabic: 'رَبِّهِ', transliteration: 'rabbiki', meaning: 'of his Lord' },
          { id: 'al15-5', arabic: 'فَصَلَّىٰ', transliteration: 'fa-salla', meaning: 'and prays' }
        ]
      },
      {
        id: '87-16',
        audio: getAudioUrl(87, 16),
        arabicFull: 'بَلْ تُؤْثِرُونَ الْحَيَاةَ الدُّنْيَا',
        translation: 'But you prefer the worldly life,',
        visual: 'worldly_life',
        lesson: 'The biggest mistake of humanity: picking temporary fun over permanent peace.',
        words: [
          { id: 'al16-1', arabic: 'بَلْ', transliteration: 'bal', meaning: 'but / rather' },
          { id: 'al16-2', arabic: 'تُؤْثِرُونَ', transliteration: 'tu\'thiruna', meaning: 'you prefer' },
          { id: 'al16-3', arabic: 'الْحَيَاةَ', transliteration: 'al-hayata', meaning: 'the life' },
          { id: 'al16-4', arabic: 'الدُّنْيَا', transliteration: 'ad-dunya', meaning: 'the worldly' }
        ]
      },
      {
        id: '87-17',
        audio: getAudioUrl(87, 17),
        arabicFull: 'وَالْآخِرَةُ خَيْرٌ وَأَبْقَىٰ',
        translation: 'While the Hereafter is better and more enduring.',
        visual: 'hereafter',
        lesson: 'The Hereafter is "Khayr" (better quality) and "Abqa" (infinite duration).',
        words: [
          { id: 'al17-1', arabic: 'وَ', transliteration: 'wa', meaning: 'while' },
          { id: 'al17-2', arabic: 'الْآخِرَةُ', transliteration: 'al-akhiratu', meaning: 'the Hereafter' },
          { id: 'al17-3', arabic: 'خَيْرٌ', transliteration: 'khayrun', meaning: 'is better' },
          { id: 'al17-4', arabic: 'وَ', transliteration: 'wa', meaning: 'and' },
          { id: 'al17-5', arabic: 'أَبْقَىٰ', transliteration: 'abqa', meaning: 'more enduring' }
        ]
      },
      {
        id: '87-18',
        audio: getAudioUrl(87, 18),
        arabicFull: 'إِنَّ هَٰذَا لَفِي الصُّحُفِ الْأُولَىٰ',
        translation: 'Indeed, this is in the former scriptures,',
        visual: 'scriptures',
        lesson: 'This message—that the Hereafter is better—is the same truth sent to all prophets.',
        words: [
          { id: 'al18-1', arabic: 'إِنَّ', transliteration: 'inna', meaning: 'indeed' },
          { id: 'al18-2', arabic: 'هَٰذَا', transliteration: 'hadha', meaning: 'this' },
          { id: 'al18-3', arabic: 'لَفِي', transliteration: 'la-fi', meaning: 'is surely in' },
          { id: 'al18-4', arabic: 'الصُّحُفِ', transliteration: 'as-suhufi', meaning: 'the scriptures' },
          { id: 'al18-5', arabic: 'الْأُولَىٰ', transliteration: 'al-ula', meaning: 'the former' }
        ]
      },
      {
        id: '87-19',
        audio: getAudioUrl(87, 19),
        arabicFull: 'صُحُفِ إِبْرَاهِيمَ وَمُوسَىٰ',
        translation: 'The scriptures of Abraham and Moses.',
        visual: 'prophets',
        lesson: 'The Quran connects itself to the legacy of Ibrahim (as) and Musa (as).',
        words: [
          { id: 'al19-1', arabic: 'صُحُفِ', transliteration: 'suhufi', meaning: 'scriptures of' },
          { id: 'al19-2', arabic: 'إِبْرَاهِيمَ', transliteration: 'Ibrahima', meaning: 'Abraham' },
          { id: 'al19-3', arabic: 'وَ', transliteration: 'wa', meaning: 'and' },
          { id: 'al19-4', arabic: 'مُوسَىٰ', transliteration: 'Musa', meaning: 'Moses' }
        ]
      }
    ]
  },

  // --- 86. AT-TARIQ (Uses 'Star' & 'indigo') ---
  {
    id: 'tariq',
    number: 86,
    title: 'At-Tariq',
    meaning: 'The Nightcomer',
    story: 'Allah swears by the piercingly bright star that appears at night. The message is simple but powerful: Every soul has a guardian watching over it, and the One who created man from a lowly fluid can certainly bring him back to life after death.',
    color: 'indigo',
    themeGradient: 'from-indigo-900 to-black',
    iconName: 'Star',
    totalVerses: 17,
    levels: [
      {
        id: '86-1',
        audio: getAudioUrl(86, 1),
        arabicFull: 'وَالسَّمَاءِ وَالطَّارِقِ',
        translation: 'By the sky and the Nightcomer -',
        visual: 'night_sky',
        lesson: '"At-Tariq" is something that arrives or knocks at night, referring here to a star.',
        words: [
          { id: 'tr1-1', arabic: 'وَ', transliteration: 'wa', meaning: 'by (oath)' },
          { id: 'tr1-2', arabic: 'السَّمَاءِ', transliteration: 'as-samai', meaning: 'the sky' },
          { id: 'tr1-3', arabic: 'وَ', transliteration: 'wa', meaning: 'and' },
          { id: 'tr1-4', arabic: 'الطَّارِقِ', transliteration: 'at-tariq', meaning: 'the Nightcomer' }
        ]
      },
      {
        id: '86-2',
        audio: getAudioUrl(86, 2),
        arabicFull: 'وَمَا أَدْرَاكَ مَا الطَّارِقُ',
        translation: 'And what can make you know what the Nightcomer is?',
        visual: 'question',
        lesson: 'A phrase used to show that the thing being discussed is of great importance.',
        words: [
          { id: 'tr2-1', arabic: 'وَمَا', transliteration: 'wa-ma', meaning: 'and what' },
          { id: 'tr2-2', arabic: 'أَدْرَاكَ', transliteration: 'adraka', meaning: 'makes you know' },
          { id: 'tr2-3', arabic: 'مَا', transliteration: 'ma', meaning: 'what' },
          { id: 'tr2-4', arabic: 'الطَّارِقُ', transliteration: 'at-tariq', meaning: 'the Nightcomer' }
        ]
      },
      {
        id: '86-3',
        audio: getAudioUrl(86, 3),
        arabicFull: 'النَّجْمُ الثَّاقِبُ',
        translation: 'It is the piercing star -',
        visual: 'piercing_star',
        lesson: 'A star whose light is so intense it "pierces" through the darkness of space.',
        words: [
          { id: 'tr3-1', arabic: 'النَّجْمُ', transliteration: 'an-najmu', meaning: 'the star' },
          { id: 'tr3-2', arabic: 'الثَّاقِبُ', transliteration: 'ath-thaqibu', meaning: 'the piercing' }
        ]
      },
      {
        id: '86-4',
        audio: getAudioUrl(86, 4),
        arabicFull: 'إِن كُلُّ نَفْسٍ لَّمَّا عَلَيْهَا حَافِظٌ',
        translation: 'There is no soul but that it has over it a protector.',
        visual: 'guardian',
        lesson: 'You are never alone; Allah has appointed angels to guard you and record your deeds.',
        words: [
          { id: 'tr4-1', arabic: 'إِن', transliteration: 'in', meaning: 'not' },
          { id: 'tr4-2', arabic: 'كُلُّ', transliteration: 'kullu', meaning: 'every' },
          { id: 'tr4-3', arabic: 'نَفْسٍ', transliteration: 'nafsin', meaning: 'soul' },
          { id: 'tr4-4', arabic: 'لَّمَّا', transliteration: 'lamma', meaning: 'but' },
          { id: 'tr4-5', arabic: 'عَلَيْهَا', transliteration: 'alayha', meaning: 'over it' },
          { id: 'tr4-6', arabic: 'حَافِظٌ', transliteration: 'hafiz', meaning: 'a protector' }
        ]
      },
      {
        id: '86-5',
        audio: getAudioUrl(86, 5),
        arabicFull: 'فَلْيَنظُرِ الْإِنسَانُ مِمَّ خُلِقَ',
        translation: 'So let man observe from what he was created.',
        visual: 'creation_fluid',
        lesson: 'To cure pride, look at the humble material Allah used to create you.',
        words: [
          { id: 'tr5-1', arabic: 'فَلْيَنظُرِ', transliteration: 'fal-yanzur', meaning: 'so let look' },
          { id: 'tr5-2', arabic: 'الْإِنسَانُ', transliteration: 'al-insanu', meaning: 'the human' },
          { id: 'tr5-3', arabic: 'مِمَّ', transliteration: 'mim-ma', meaning: 'from what' },
          { id: 'tr5-4', arabic: 'خُلِقَ', transliteration: 'khuliqa', meaning: 'he was created' }
        ]
      },
      {
        id: '86-6',
        audio: getAudioUrl(86, 6),
        arabicFull: 'خُلِقَ مِن مَّاءٍ دَافِقٍ',
        translation: 'He was created from a fluid, ejected,',
        visual: 'ejected_fluid',
        lesson: 'A simple, humble beginning for every human being.',
        words: [
          { id: 'tr6-1', arabic: 'خُلِقَ', transliteration: 'khuliqa', meaning: 'created' },
          { id: 'tr6-2', arabic: 'مِن', transliteration: 'min', meaning: 'from' },
          { id: 'tr6-3', arabic: 'مَّاءٍ', transliteration: 'main', meaning: 'a water / fluid' },
          { id: 'tr6-4', arabic: 'دَافِقٍ', transliteration: 'dafiq', meaning: 'ejected' }
        ]
      },
      {
        id: '86-7',
        audio: getAudioUrl(86, 7),
        arabicFull: 'يَخْرُجُ مِن بَيْنِ الصُّلْبِ وَالتَّرَائِبِ',
        translation: 'Emerging from between the backbone and the ribs.',
        visual: 'body_anatomy',
        lesson: 'Describing the origin of life within the human body.',
        words: [
          { id: 'tr7-1', arabic: 'يَخْرُجُ', transliteration: 'yakhruju', meaning: 'emerging' },
          { id: 'tr7-2', arabic: 'مِن', transliteration: 'min', meaning: 'from' },
          { id: 'tr7-3', arabic: 'بَيْنِ', transliteration: 'bayni', meaning: 'between' },
          { id: 'tr7-4', arabic: 'الصُّلْبِ', transliteration: 'as-sulbi', meaning: 'the backbone' },
          { id: 'tr7-5', arabic: 'وَ', transliteration: 'wa', meaning: 'and' },
          { id: 'tr7-6', arabic: 'التَّرَائِبِ', transliteration: 'at-taraib', meaning: 'the ribs' }
        ]
      },
      {
        id: '86-8',
        audio: getAudioUrl(86, 8),
        arabicFull: 'إِنَّهُ عَلَىٰ رَجْعِهِ لَقَادِرٌ',
        translation: 'Indeed, He, to return him [to life], is Able.',
        visual: 'resurrection',
        lesson: 'Logic: If Allah could create you from nothing, He can easily bring you back from dust.',
        words: [
          { id: 'tr8-1', arabic: 'إِنَّهُ', transliteration: 'innahu', meaning: 'indeed He' },
          { id: 'tr8-2', arabic: 'عَلَىٰ', transliteration: 'ala', meaning: 'on' },
          { id: 'tr8-3', arabic: 'رَجْعِهِ', transliteration: 'raj-ihi', meaning: 'returning him' },
          { id: 'tr8-4', arabic: 'لَقَادِرٌ', transliteration: 'la-qadir', meaning: 'is surely Able' }
        ]
      },
      {
        id: '86-9',
        audio: getAudioUrl(86, 9),
        arabicFull: 'يَوْمَ تُبْلَى السَّرَائِرُ',
        translation: 'The Day when secrets will be put on trial,',
        visual: 'secrets',
        lesson: 'Judgment Day is when your hidden intentions and private actions are made public.',
        words: [
          { id: 'tr9-1', arabic: 'يَوْمَ', transliteration: 'yawma', meaning: 'the Day' },
          { id: 'tr9-2', arabic: 'تُبْلَى', transliteration: 'tubla', meaning: 'are tested / exposed' },
          { id: 'tr9-3', arabic: 'السَّرَائِرُ', transliteration: 'as-sarair', meaning: 'the secrets' }
        ]
      },
      {
        id: '86-10',
        audio: getAudioUrl(86, 10),
        arabicFull: 'فَمَا لَهُ مِن قُوَّةٍ وَلَا نَاصِرٍ',
        translation: 'Then he will have no power or any helper.',
        visual: 'no_helper',
        lesson: 'On that day, neither your physical strength nor your friends can save you.',
        words: [
          { id: 'tr10-1', arabic: 'فَمَا', transliteration: 'fa-ma', meaning: 'so not' },
          { id: 'tr10-2', arabic: 'لَهُ', transliteration: 'lahu', meaning: 'for him' },
          { id: 'tr10-3', arabic: 'مِن', transliteration: 'min', meaning: 'any' },
          { id: 'tr10-4', arabic: 'قُوَّةٍ', transliteration: 'quwwah', meaning: 'power' },
          { id: 'tr10-5', arabic: 'وَلَا', transliteration: 'wa-la', meaning: 'and not' },
          { id: 'tr10-6', arabic: 'نَاصِرٍ', transliteration: 'nasir', meaning: 'a helper' }
        ]
      },
      {
        id: '86-11',
        audio: getAudioUrl(86, 11),
        arabicFull: 'وَالسَّمَاءِ ذَاتِ الرَّجْعِ',
        translation: 'By the sky which returns [rain],',
        visual: 'rain_sky',
        lesson: 'Allah swears by the sky\'s ability to return rain over and over again.',
        words: [
          { id: 'tr11-1', arabic: 'وَ', transliteration: 'wa', meaning: 'and' },
          { id: 'tr11-2', arabic: 'السَّمَاءِ', transliteration: 'as-samai', meaning: 'the sky' },
          { id: 'tr11-3', arabic: 'ذَاتِ', transliteration: 'dhati', meaning: 'possessor of' },
          { id: 'tr11-4', arabic: 'الرَّجْعِ', transliteration: 'ar-raj\'i', meaning: 'the return / rain' }
        ]
      },
      {
        id: '86-12',
        audio: getAudioUrl(86, 12),
        arabicFull: 'وَالْأَرْضِ ذَاتِ الصَّدْعِ',
        translation: 'And [by] the earth which cracks open [with plants],',
        visual: 'earth_cracks',
        lesson: 'The miracle of a tiny green plant splitting through hard soil.',
        words: [
          { id: 'tr12-1', arabic: 'وَ', transliteration: 'wa', meaning: 'and' },
          { id: 'tr12-2', arabic: 'الْأَرْضِ', transliteration: 'al-ardi', meaning: 'the earth' },
          { id: 'tr12-3', arabic: 'ذَاتِ', transliteration: 'dhati', meaning: 'possessor of' },
          { id: 'tr12-4', arabic: 'الصَّدْعِ', transliteration: 'as-sad\'i', meaning: 'the cracking' }
        ]
      },
      {
        id: '86-13',
        audio: getAudioUrl(86, 13),
        arabicFull: 'إِنَّهُ لَقَوْلٌ فَصْلٌ',
        translation: 'Indeed, the Qur\'an is a decisive word,',
        visual: 'quran_decisive',
        lesson: 'The Quran is the "Fasl"—the ultimate separator between truth and lies.',
        words: [
          { id: 'tr13-1', arabic: 'إِنَّهُ', transliteration: 'innahu', meaning: 'indeed it' },
          { id: 'tr13-2', arabic: 'لَقَوْلٌ', transliteration: 'la-qawlun', meaning: 'is surely a word' },
          { id: 'tr13-3', arabic: 'فَصْلٌ', transliteration: 'fasl', meaning: 'decisive / criterion' }
        ]
      },
      {
        id: '86-14',
        audio: getAudioUrl(86, 14),
        arabicFull: 'وَمَا هُوَ بِالْهَزْلِ',
        translation: 'And it is not amusement.',
        visual: 'not_joke',
        lesson: 'The Quran is serious. It is not poetry, magic, or a joke.',
        words: [
          { id: 'tr14-1', arabic: 'وَمَا', transliteration: 'wa-ma', meaning: 'and not' },
          { id: 'tr14-2', arabic: 'هُوَ', transliteration: 'huwa', meaning: 'it' },
          { id: 'tr14-3', arabic: 'بِالْهَزْلِ', transliteration: 'bil-hazl', meaning: 'amusement / a joke' }
        ]
      },
      {
        id: '86-15',
        audio: getAudioUrl(86, 15),
        arabicFull: 'إِنَّهُمْ يَكِيدُونَ كَيْدًا',
        translation: 'Indeed, they are planning a plan,',
        visual: 'plotting',
        lesson: 'The disbelievers spent all their time plotting against the Prophet.',
        words: [
          { id: 'tr15-1', arabic: 'إِنَّهُمْ', transliteration: 'innahum', meaning: 'indeed they' },
          { id: 'tr15-2', arabic: 'يَكِيدُونَ', transliteration: 'yakiduna', meaning: 'are plotting / planning' },
          { id: 'tr15-3', arabic: 'كَيْدًا', transliteration: 'kaydan', meaning: 'a plan / plot' }
        ]
      },
      {
        id: '86-16',
        audio: getAudioUrl(86, 16),
        arabicFull: 'وَأَكِيدُ كَيْدًا',
        translation: 'But I am planning a plan.',
        visual: 'allah_plan',
        lesson: 'Human plans are nothing compared to the divine plan of Allah.',
        words: [
          { id: 'tr16-1', arabic: 'وَ', transliteration: 'wa', meaning: 'but' },
          { id: 'tr16-2', arabic: 'أَكِيدُ', transliteration: 'akidu', meaning: 'I plan' },
          { id: 'tr16-3', arabic: 'كَيْدًا', transliteration: 'kaydan', meaning: 'a plan' }
        ]
      },
      {
        id: '86-17',
        audio: getAudioUrl(86, 17),
        arabicFull: 'فَمَهِّلِ الْكَافِرِينَ أَمْهِلْهُمْ رُوَيْدًا',
        translation: 'So allow time for the disbelievers. Give them time a little while.',
        visual: 'patience',
        lesson: 'Be patient. Their power is temporary and will soon fade away.',
        words: [
          { id: 'tr17-1', arabic: 'فَمَهِّلِ', transliteration: 'fa-mahhil', meaning: 'so give time' },
          { id: 'tr17-2', arabic: 'الْكَافِرِينَ', transliteration: 'al-kafirina', meaning: 'the disbelievers' },
          { id: 'tr17-3', arabic: 'أَمْهِلْهُمْ', transliteration: 'am-hil-hum', meaning: 'give them time' },
          { id: 'tr17-4', arabic: 'رُوَيْدًا', transliteration: 'ruwayda', meaning: 'a little while' }
        ]
      }
    ]
  },

  // --- 85. AL-BURUJ (Uses 'Flame' & 'rose') ---
  {
    id: 'buruj',
    number: 85,
    title: 'Al-Buruj',
    meaning: 'The Constellations',
    story: 'This Surah tells the heroic and tragic story of the "People of the Ditch"—believers who were thrown into a massive fire because they refused to give up their faith. It serves as a reminder that Allah is the witness of all things, and while tyrants may win in this world, ultimate victory and justice belong to the believers in the next.',
    color: 'rose',
    themeGradient: 'from-rose-700 to-indigo-950',
    iconName: 'Flame',
    totalVerses: 22,
    levels: [
      {
        id: '85-1',
        audio: getAudioUrl(85, 1),
        arabicFull: 'وَالسَّمَاءِ ذَاتِ الْبُرُوجِ',
        translation: 'By the sky containing great stars',
        visual: 'constellations',
        lesson: '"Buruj" refers to the massive stars or "castles" of light in the night sky.',
        words: [
          { id: 'br1-1', arabic: 'وَ', transliteration: 'wa', meaning: 'by (oath)' },
          { id: 'br1-2', arabic: 'السَّمَاءِ', transliteration: 'as-samai', meaning: 'the sky' },
          { id: 'br1-3', arabic: 'ذَاتِ', transliteration: 'dhati', meaning: 'possessor of' },
          { id: 'br1-4', arabic: 'الْبُرُوجِ', transliteration: 'al-buruj', meaning: 'great stars / constellations' }
        ]
      },
      {
        id: '85-2',
        audio: getAudioUrl(85, 2),
        arabicFull: 'وَالْيَوْمِ الْمَوْعُودِ',
        translation: 'And [by] the promised Day',
        visual: 'judgment_day',
        lesson: 'The "Promised Day" is the Day of Judgment, which is guaranteed to happen.',
        words: [
          { id: 'br2-1', arabic: 'وَ', transliteration: 'wa', meaning: 'and' },
          { id: 'br2-2', arabic: 'الْيَوْمِ', transliteration: 'al-yawmi', meaning: 'the day' },
          { id: 'br2-3', arabic: 'الْمَوْعُودِ', transliteration: 'al-maw\'ud', meaning: 'the promised' }
        ]
      },
      {
        id: '85-3',
        audio: getAudioUrl(85, 3),
        arabicFull: 'وَشَاهِدٍ وَمَشْهُودٍ',
        translation: 'And [by] the witness and what is witnessed,',
        visual: 'witnesses',
        lesson: 'Allah is the Witness, and every deed we do is being witnessed.',
        words: [
          { id: 'br3-1', arabic: 'وَ', transliteration: 'wa', meaning: 'and' },
          { id: 'br3-2', arabic: 'شَاهِدٍ', transliteration: 'shahidin', meaning: 'a witness' },
          { id: 'br3-3', arabic: 'وَ', transliteration: 'wa', meaning: 'and' },
          { id: 'br3-4', arabic: 'مَشْهُودٍ', transliteration: 'mashhud', meaning: 'the witnessed' }
        ]
      },
      {
        id: '85-4',
        audio: getAudioUrl(85, 4),
        arabicFull: 'قُتِلَ أَصْحَابُ الْأُخْدُودِ',
        translation: 'Cursed were the companions of the trench',
        visual: 'ditch',
        lesson: 'The "People of the Ditch" were the evil kings and soldiers who burned believers alive.',
        words: [
          { id: 'br4-1', arabic: 'قُتِلَ', transliteration: 'qutila', meaning: 'destroyed / cursed' },
          { id: 'br4-2', arabic: 'أَصْحَابُ', transliteration: 'ashabu', meaning: 'the companions' },
          { id: 'br4-3', arabic: 'الْأُخْدُودِ', transliteration: 'al-ukhdud', meaning: 'the trench / ditch' }
        ]
      },
      {
        id: '85-5',
        audio: getAudioUrl(85, 5),
        arabicFull: 'النَّارِ ذَاتِ الْوَقُودِ',
        translation: '[Containing] the fire full of fuel,',
        visual: 'large_fire',
        lesson: 'They built a massive, fuel-fed fire to intimidate the believers.',
        words: [
          { id: 'br5-1', arabic: 'النَّارِ', transliteration: 'an-nari', meaning: 'the fire' },
          { id: 'br5-2', arabic: 'ذَاتِ', transliteration: 'dhati', meaning: 'possessor of' },
          { id: 'br5-3', arabic: 'الْوَقُودِ', transliteration: 'al-waqud', meaning: 'the fuel' }
        ]
      },
      {
        id: '85-6',
        audio: getAudioUrl(85, 6),
        arabicFull: 'إِذْ هُمْ عَلَيْهَا قُعُودٌ',
        translation: 'When they were sitting near it,',
        visual: 'watching_fire',
        lesson: 'They sat there arrogantly, watching the innocent believers suffer.',
        words: [
          { id: 'br6-1', arabic: 'إِذْ', transliteration: 'idh', meaning: 'when' },
          { id: 'br6-2', arabic: 'هُمْ', transliteration: 'hum', meaning: 'they' },
          { id: 'br6-3', arabic: 'عَلَيْهَا', transliteration: 'alayha', meaning: 'near it' },
          { id: 'br6-4', arabic: 'قُعُودٌ', transliteration: 'qu-ud', meaning: 'sitting' }
        ]
      },
      {
        id: '85-7',
        audio: getAudioUrl(85, 7),
        arabicFull: 'وَهُمْ عَلَىٰ مَا يَفْعَلُونَ بِالْمُؤْمِنِينَ شُهُودٌ',
        translation: 'And they, to what they were doing against the believers, were witnesses.',
        visual: 'believers',
        lesson: 'They were proud of their cruelty, but Allah was also a witness to their actions.',
        words: [
          { id: 'br7-1', arabic: 'وَ', transliteration: 'wa', meaning: 'and' },
          { id: 'br7-2', arabic: 'هُمْ', transliteration: 'hum', meaning: 'they' },
          { id: 'br7-3', arabic: 'عَلَىٰ', transliteration: 'ala', meaning: 'to' },
          { id: 'br7-4', arabic: 'مَا', transliteration: 'ma', meaning: 'what' },
          { id: 'br7-5', arabic: 'يَفْعَلُونَ', transliteration: 'yaf-aluna', meaning: 'they were doing' },
          { id: 'br7-6', arabic: 'بِالْمُؤْمِنِينَ', transliteration: 'bil-muminina', meaning: 'against the believers' },
          { id: 'br7-7', arabic: 'شُهُودٌ', transliteration: 'shuhud', meaning: 'witnesses' }
        ]
      },
      {
        id: '85-8',
        audio: getAudioUrl(85, 8),
        arabicFull: 'وَمَا نَقَمُوا مِنْهُمْ إِلَّا أَن يُؤْمِنُوا بِاللَّهِ الْعَزِيزِ الْحَمِيدِ',
        translation: 'And they resented them not except because they believed in Allah, the Exalted in Might, the Praiseworthy,',
        visual: 'only_faith',
        lesson: 'The believers had done no wrong; their only "crime" in the eyes of the king was their faith in Allah.',
        words: [
          { id: 'br8-1', arabic: 'وَمَا', transliteration: 'wa-ma', meaning: 'and not' },
          { id: 'br8-2', arabic: 'نَقَمُوا', transliteration: 'naqamu', meaning: 'they resented' },
          { id: 'br8-3', arabic: 'مِنْهُمْ', transliteration: 'minhum', meaning: 'them' },
          { id: 'br8-4', arabic: 'إِلَّا', transliteration: 'illa', meaning: 'except' },
          { id: 'br8-5', arabic: 'أَن', transliteration: 'an', meaning: 'that' },
          { id: 'br8-6', arabic: 'يُؤْمِنُوا', transliteration: 'yu-minu', meaning: 'they believe' },
          { id: 'br8-7', arabic: 'بِاللَّهِ', transliteration: 'bil-lahi', meaning: 'in Allah' },
          { id: 'br8-8', arabic: 'الْعَزِيزِ', transliteration: 'al-azizi', meaning: 'the Almighty' },
          { id: 'br8-9', arabic: 'الْحَمِيدِ', transliteration: 'al-hamidi', meaning: 'the Praiseworthy' }
        ]
      },
      {
        id: '85-9',
        audio: getAudioUrl(85, 9),
        arabicFull: 'الَّذِي لَهُ مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ ۚ وَاللَّهُ عَلَىٰ كُلِّ شَيْءٍ شَهِيدٌ',
        translation: 'To whom belongs the dominion of the heavens and the earth. And Allah, over all things, is Witness.',
        visual: 'allah_witness',
        lesson: 'The king thought he owned the land, but true ownership of the universe belongs only to Allah.',
        words: [
          { id: 'br9-1', arabic: 'الَّذِي', transliteration: 'alladhi', meaning: 'who' },
          { id: 'br9-2', arabic: 'لَهُ', transliteration: 'lahu', meaning: 'to Him belongs' },
          { id: 'br9-3', arabic: 'مُلْكُ', transliteration: 'mulku', meaning: 'the dominion' },
          { id: 'br9-4', arabic: 'السَّمَاوَاتِ', transliteration: 'as-samawati', meaning: 'the heavens' },
          { id: 'br9-5', arabic: 'وَ', transliteration: 'wa', meaning: 'and' },
          { id: 'br9-6', arabic: 'الْأَرْضِ', transliteration: 'al-ardi', meaning: 'the earth' },
          { id: 'br9-7', arabic: 'وَاللَّهُ', transliteration: 'wal-lahu', meaning: 'and Allah' },
          { id: 'br9-8', arabic: 'عَلَىٰ كُلِّ شَيْءٍ', transliteration: 'ala kulli shayin', meaning: 'over all things' },
          { id: 'br9-9', arabic: 'شَهِيدٌ', transliteration: 'shahid', meaning: 'is Witness' }
        ]
      },
      {
        id: '85-10',
        audio: getAudioUrl(85, 10),
        arabicFull: 'إِنَّ الَّذِينَ فَتَنُوا الْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ ثُمَّ لَمْ يَتُوبُوا فَلَهُمْ عَذَابُ جَهَنَّمَ وَلَهُمْ عَذَابُ الْحَرِيقِ',
        translation: 'Indeed, those who have tortured the believing men and believing women and then have not repented will have the punishment of Hell, and they will have the punishment of the Burning Fire.',
        visual: 'hell_fire',
        lesson: 'Allah gives tyrants a chance to repent, but if they don\'t, a much worse fire waits for them.',
        words: [
          { id: 'br10-1', arabic: 'إِنَّ', transliteration: 'inna', meaning: 'indeed' },
          { id: 'br10-2', arabic: 'الَّذِينَ', transliteration: 'alladhina', meaning: 'those who' },
          { id: 'br10-3', arabic: 'فَتَنُوا', transliteration: 'fatanu', meaning: 'tortured / tested' },
          { id: 'br10-4', arabic: 'الْمُؤْمِنِينَ', transliteration: 'al-muminina', meaning: 'the believing men' },
          { id: 'br10-5', arabic: 'ثُمَّ', transliteration: 'thumma', meaning: 'then' },
          { id: 'br10-6', arabic: 'لَمْ يَتُوبُوا', transliteration: 'lam yatubu', meaning: 'not repented' },
          { id: 'br10-7', arabic: 'فَلَهُمْ', transliteration: 'fa-lahum', meaning: 'for them' },
          { id: 'br10-8', arabic: 'عَذَابُ', transliteration: 'adhabu', meaning: 'punishment of' },
          { id: 'br10-9', arabic: 'جَهَنَّمَ', transliteration: 'jahannama', meaning: 'Hell' },
          { id: 'br10-10', arabic: 'الْحَرِيقِ', transliteration: 'al-hariq', meaning: 'the Burning' }
        ]
      },
      {
        id: '85-11',
        audio: getAudioUrl(85, 11),
        arabicFull: 'إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ لَهُمْ جَنَّاتٌ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ ۚ ذَٰلِكَ الْفَوْزُ الْكَبِيرُ',
        translation: 'Indeed, those who have believed and done righteous deeds will have gardens beneath which rivers flow. That is the great attainment.',
        visual: 'great_victory',
        lesson: 'While the People of the Ditch died in the world, they won the "Great Victory" in Paradise.',
        words: [
          { id: 'br11-1', arabic: 'إِنَّ', transliteration: 'inna', meaning: 'indeed' },
          { id: 'br11-2', arabic: 'الَّذِينَ', transliteration: 'alladhina', meaning: 'those who' },
          { id: 'br11-3', arabic: 'آمَنُوا', transliteration: 'amanu', meaning: 'believed' },
          { id: 'br11-4', arabic: 'وَعَمِلُوا', transliteration: 'wa-amilu', meaning: 'and did' },
          { id: 'br11-5', arabic: 'الصَّالِحَاتِ', transliteration: 'as-salihati', meaning: 'good deeds' },
          { id: 'br11-6', arabic: 'لَهُمْ', transliteration: 'lahum', meaning: 'for them' },
          { id: 'br11-7', arabic: 'جَنَّاتٌ', transliteration: 'jannatun', meaning: 'gardens' },
          { id: 'br11-8', arabic: 'الْفَوْزُ', transliteration: 'al-fawzu', meaning: 'the victory' },
          { id: 'br11-9', arabic: 'الْكَبِيرُ', transliteration: 'al-kabiru', meaning: 'the great' }
        ]
      },
      {
        id: '85-12',
        audio: getAudioUrl(85, 12),
        arabicFull: 'إِنَّ بَطْشَ رَبِّكَ لَشَدِيدٌ',
        translation: 'Indeed, the assault of your Lord is severe.',
        visual: 'assault',
        lesson: 'When Allah decides to seize a tyrant, no army on earth can stop His grip.',
        words: [
          { id: 'br12-1', arabic: 'إِنَّ', transliteration: 'inna', meaning: 'indeed' },
          { id: 'br12-2', arabic: 'بَطْشَ', transliteration: 'bat-sha', meaning: 'the assault / grip' },
          { id: 'br12-3', arabic: 'رَبِّكَ', transliteration: 'rabbika', meaning: 'of your Lord' },
          { id: 'br12-4', arabic: 'لَشَدِيدٌ', transliteration: 'la-shadid', meaning: 'is surely severe' }
        ]
      },
      {
        id: '85-13',
        audio: getAudioUrl(85, 13),
        arabicFull: 'إِنَّهُ هُوَ يُبْدِئُ وَيُعِيدُ',
        translation: 'Indeed, it is He who originates [creation] and repeats.',
        visual: 'repeat_creation',
        lesson: 'Allah creates life the first time, and He can easily bring everyone back for judgment.',
        words: [
          { id: 'br13-1', arabic: 'إِنَّهُ', transliteration: 'innahu', meaning: 'indeed He' },
          { id: 'br13-2', arabic: 'هُوَ', transliteration: 'huwa', meaning: 'He' },
          { id: 'br13-3', arabic: 'يُبْدِئُ', transliteration: 'yubdiu', meaning: 'originates' },
          { id: 'br13-4', arabic: 'وَيُعِيدُ', transliteration: 'wa-yu-idu', meaning: 'and repeats' }
        ]
      },
      {
        id: '85-14',
        audio: getAudioUrl(85, 14),
        arabicFull: 'وَهُوَ الْغَفُورُ الْوَدُودُ',
        translation: 'And He is the Forgiving, the Affectionate,',
        visual: 'allah_mercy',
        lesson: 'Even after discussing punishment, Allah reminds us He is "Al-Wadud"—He deeply loves His servants.',
        words: [
          { id: 'br14-1', arabic: 'وَ', transliteration: 'wa', meaning: 'and' },
          { id: 'br14-2', arabic: 'هُوَ', transliteration: 'huwa', meaning: 'He' },
          { id: 'br14-3', arabic: 'الْغَفُورُ', transliteration: 'al-ghafuru', meaning: 'the Forgiving' },
          { id: 'br14-4', arabic: 'الْوَدُودُ', transliteration: 'al-wadudu', meaning: 'the Affectionate / Loving' }
        ]
      },
      {
        id: '85-15',
        audio: getAudioUrl(85, 15),
        arabicFull: 'ذُو الْعَرْشِ الْمَجِيدُ',
        translation: 'Honorable Owner of the Throne,',
        visual: 'throne',
        lesson: 'Allah is the true King whose kingdom encompasses all the stars and universes.',
        words: [
          { id: 'br15-1', arabic: 'ذُو', transliteration: 'dhu', meaning: 'owner of' },
          { id: 'br15-2', arabic: 'الْعَرْشِ', transliteration: 'al-arshi', meaning: 'the Throne' },
          { id: 'br15-3', arabic: 'الْمَجِيدُ', transliteration: 'al-majidu', meaning: 'the Honorable / Majestic' }
        ]
      },
      {
        id: '85-16',
        audio: getAudioUrl(85, 16),
        arabicFull: 'فَعَّالٌ لِّمَا يُرِيدُ',
        translation: 'Effecter of what He intends.',
        visual: 'allah_wills',
        lesson: 'Allah does whatever He wants; nothing can prevent His will from happening.',
        words: [
          { id: 'br16-1', arabic: 'فَعَّالٌ', transliteration: 'fa\'allun', meaning: 'Effecter / Doer' },
          { id: 'br16-2', arabic: 'لِّمَا', transliteration: 'li-ma', meaning: 'of what' },
          { id: 'br16-3', arabic: 'يُرِيدُ', transliteration: 'yuridu', meaning: 'He intends / wills' }
        ]
      },
      {
        id: '85-17',
        audio: getAudioUrl(85, 17),
        arabicFull: 'هَلْ أَتَاكَ حَدِيثُ الْجُنُودِ',
        translation: 'Has there reached you the story of the hosts -',
        visual: 'armies',
        lesson: 'Referencing the massive armies of the past that thought they could defeat Allah\'s messengers.',
        words: [
          { id: 'br17-1', arabic: 'هَلْ', transliteration: 'hal', meaning: 'has' },
          { id: 'br17-2', arabic: 'أَتَاكَ', transliteration: 'ataka', meaning: 'reached you' },
          { id: 'br17-3', arabic: 'حَدِيثُ', transliteration: 'hadithu', meaning: 'the story' },
          { id: 'br17-4', arabic: 'الْجُنُودِ', transliteration: 'al-junudi', meaning: 'the hosts / armies' }
        ]
      },
      {
        id: '85-18',
        audio: getAudioUrl(85, 18),
        arabicFull: 'فِرْعَوْنَ وَثَمُودَ',
        translation: '[Of] Pharaoh and Thamud?',
        visual: 'pharaoh_thamud',
        lesson: 'Two of history\'s most powerful empires were wiped out easily by Allah for their arrogance.',
        words: [
          { id: 'br18-1', arabic: 'فِرْعَوْنَ', transliteration: 'Fir\'awna', meaning: 'Pharaoh' },
          { id: 'br18-2', arabic: 'وَ', transliteration: 'wa', meaning: 'and' },
          { id: 'br18-3', arabic: 'ثَمُودَ', transliteration: 'Thamuda', meaning: 'Thamud' }
        ]
      },
      {
        id: '85-19',
        audio: getAudioUrl(85, 19),
        arabicFull: 'بَلِ الَّذِينَ كَفَرُوا فِي تَكْذِيبٍ',
        translation: 'But they who disbelieve are in [persistent] denial,',
        visual: 'persistent_denial',
        lesson: 'The disbelievers don\'t reject truth due to a lack of signs, but because of their own stubbornness.',
        words: [
          { id: 'br19-1', arabic: 'بَلِ', transliteration: 'bal', meaning: 'but / rather' },
          { id: 'br19-2', arabic: 'الَّذِينَ', transliteration: 'alladhina', meaning: 'those who' },
          { id: 'br19-3', arabic: 'كَفَرُوا', transliteration: 'kafaru', meaning: 'disbelieve' },
          { id: 'br19-4', arabic: 'فِي', transliteration: 'fi', meaning: 'in' },
          { id: 'br19-5', arabic: 'تَكْذِيبٍ', transliteration: 'takdhib', meaning: 'denial' }
        ]
      },
      {
        id: '85-20',
        audio: getAudioUrl(85, 20),
        arabicFull: 'وَاللَّهُ مِن وَرَائِهِم مُّحِيطٌ',
        translation: 'While Allah encompasses them from behind.',
        visual: 'encompassed',
        lesson: 'They think they are free, but Allah surrounds them and they can never escape His grasp.',
        words: [
          { id: 'br20-1', arabic: 'وَاللَّهُ', transliteration: 'wal-lahu', meaning: 'and Allah' },
          { id: 'br20-2', arabic: 'مِن', transliteration: 'min', meaning: 'from' },
          { id: 'br20-3', arabic: 'وَرَائِهِم', transliteration: 'waraihim', meaning: 'behind them' },
          { id: 'br20-4', arabic: 'مُّحِيطٌ', transliteration: 'muhit', meaning: 'encompasses / surrounds' }
        ]
      },
      {
        id: '85-21',
        audio: getAudioUrl(85, 21),
        arabicFull: 'بَلْ هُوَ قُرْآنٌ مَّجِيدٌ',
        translation: 'But this is an honored Qur\'an',
        visual: 'honored_quran',
        lesson: 'The Quran is not human-made; it is the glorious and honorable word of the Almighty.',
        words: [
          { id: 'br21-1', arabic: 'بَلْ', transliteration: 'bal', meaning: 'but' },
          { id: 'br21-2', arabic: 'هُوَ', transliteration: 'huwa', meaning: 'it' },
          { id: 'br21-3', arabic: 'قُرْآنٌ', transliteration: 'quranun', meaning: 'is a Quran' },
          { id: 'br21-4', arabic: 'مَّجِيدٌ', transliteration: 'majid', meaning: 'honored / glorious' }
        ]
      },
      {
        id: '85-22',
        audio: getAudioUrl(85, 22),
        arabicFull: 'فِي لَوْحٍ مَّحْفُوظٍ',
        translation: '[Inscribed] in a Preserved Slate.',
        visual: 'preserved_slate',
        lesson: 'The Lawh al-Mahfuz is where Allah has written everything; the Quran is safely protected there.',
        words: [
          { id: 'br22-1', arabic: 'فِي', transliteration: 'fi', meaning: 'in' },
          { id: 'br22-2', arabic: 'لَوْحٍ', transliteration: 'lawhin', meaning: 'a slate / tablet' },
          { id: 'br22-3', arabic: 'مَّحْفُوظٍ', transliteration: 'mahfuz', meaning: 'preserved / protected' }
        ]
      }
    ]
  },
// --- 84. AL-INSHIQAQ (Uses 'Cloud' & 'indigo') ---
  {
    id: 'inshiqaq',
    number: 84,
    title: 'Al-Inshiqaq',
    meaning: 'The Splitting Open',
    story: 'This Surah describes the end of the universe when the sky will split apart and the earth will be flattened like a sheet. It teaches that every human is laboring towards their Lord, and we will each receive a book of our deeds—either in our right hand for an easy judgment, or behind our back for a difficult one.',
    color: 'indigo',
    themeGradient: 'from-blue-900 to-indigo-950',
    iconName: 'Cloud',
    totalVerses: 25,
    levels: [
      {
        id: '84-1',
        audio: getAudioUrl(84, 1),
        arabicFull: 'إِذَا السَّمَاءُ انشَقَّتْ',
        translation: 'When the sky has split [asunder]',
        visual: 'sky_split',
        lesson: 'The beginning of the end: the perfection of the sky will finally break apart by Allah\'s command.',
        words: [
          { id: 'is1-1', arabic: 'إِذَا', transliteration: 'idha', meaning: 'when' },
          { id: 'is1-2', arabic: 'السَّمَاءُ', transliteration: 'as-samau', meaning: 'the sky' },
          { id: 'is1-3', arabic: 'انشَقَّتْ', transliteration: 'inshaqqat', meaning: 'has split open' }
        ]
      },
      {
        id: '84-2',
        audio: getAudioUrl(84, 2),
        arabicFull: 'وَأَذِنَتْ لِرَبِّهَا وَحُقَّتْ',
        translation: 'And has listened to its Lord and was obligated [to do so],',
        visual: 'obedience',
        lesson: 'The massive sky listens and obeys Allah perfectly, realizing that it is its duty to submit.',
        words: [
          { id: 'is2-1', arabic: 'وَ', transliteration: 'wa', meaning: 'and' },
          { id: 'is2-2', arabic: 'أَذِنَتْ', transliteration: 'adhinat', meaning: 'listened / obeyed' },
          { id: 'is2-3', arabic: 'لِرَبِّهَا', transliteration: 'li-rabbiha', meaning: 'to its Lord' },
          { id: 'is2-4', arabic: 'وَ', transliteration: 'wa', meaning: 'and' },
          { id: 'is2-5', arabic: 'حُقَّتْ', transliteration: 'huqqat', meaning: 'was obligated' }
        ]
      },
      {
        id: '84-3',
        audio: getAudioUrl(84, 3),
        arabicFull: 'وَإِذَا الْأَرْضُ مُدَّتْ',
        translation: 'And when the earth has been extended',
        visual: 'earth_extended',
        lesson: 'The mountains will be removed and the earth will be flattened out like a leather sheet.',
        words: [
          { id: 'is3-1', arabic: 'وَ', transliteration: 'wa', meaning: 'and' },
          { id: 'is3-2', arabic: 'إِذَا', transliteration: 'idha', meaning: 'when' },
          { id: 'is3-3', arabic: 'الْأَرْضُ', transliteration: 'al-ardu', meaning: 'the earth' },
          { id: 'is3-4', arabic: 'مُدَّتْ', transliteration: 'muddat', meaning: 'has been extended' }
        ]
      },
      {
        id: '84-4',
        audio: getAudioUrl(84, 4),
        arabicFull: 'وَأَلْقَتْ مَا فِيهَا وَتَخَلَّتْ',
        translation: 'And has cast out that within it and relinquished [it],',
        visual: 'earth_empty',
        lesson: 'The earth will throw out everything hidden inside it—the dead, the secrets, and the treasures.',
        words: [
          { id: 'is4-1', arabic: 'وَ', transliteration: 'wa', meaning: 'and' },
          { id: 'is4-2', arabic: 'أَلْقَتْ', transliteration: 'alqat', meaning: 'has cast out' },
          { id: 'is4-3', arabic: 'مَا', transliteration: 'ma', meaning: 'what' },
          { id: 'is4-4', arabic: 'فِيهَا', transliteration: 'fiha', meaning: 'is in it' },
          { id: 'is4-5', arabic: 'وَ', transliteration: 'wa', meaning: 'and' },
          { id: 'is4-6', arabic: 'تَخَلَّتْ', transliteration: 'takhal-lat', meaning: 'relinquished / became empty' }
        ]
      },
      {
        id: '84-5',
        audio: getAudioUrl(84, 5),
        arabicFull: 'وَأَذِنَتْ لِرَبِّهَا وَحُقَّتْ',
        translation: 'And has listened to its Lord and was obligated [to do so] -',
        visual: 'earth_obedience',
        lesson: 'Repeated to show that both the heavens and the earth are in total submission to Allah.',
        words: [
          { id: 'is5-1', arabic: 'وَ', transliteration: 'wa', meaning: 'and' },
          { id: 'is5-2', arabic: 'أَذِنَتْ', transliteration: 'adhinat', meaning: 'listened' },
          { id: 'is5-3', arabic: 'لِرَبِّهَا', transliteration: 'li-rabbiha', meaning: 'to its Lord' },
          { id: 'is5-4', arabic: 'وَ', transliteration: 'wa', meaning: 'and' },
          { id: 'is5-5', arabic: 'حُقَّتْ', transliteration: 'huqqat', meaning: 'was obligated' }
        ]
      },
      {
        id: '84-6',
        audio: getAudioUrl(84, 6),
        arabicFull: 'يَا أَيَّتُهَا الْإِنسَانُ إِنَّكَ كَادِحٌ إِلَىٰ رَبِّكَ كَدْحًا فَمُلَاقِيهِ',
        translation: 'O mankind, indeed you are laboring toward your Lord with [great] exertion and will meet Him.',
        visual: 'laboring',
        lesson: 'Life is a hard "Kadh" (labor). Every step you take, you are getting closer to meeting your Lord.',
        words: [
          { id: 'is6-1', arabic: 'يَا أَيَّتُهَا', transliteration: 'ya ayyuhal', meaning: 'O you' },
          { id: 'is6-2', arabic: 'الْإِنسَانُ', transliteration: 'al-insanu', meaning: 'human' },
          { id: 'is6-3', arabic: 'إِنَّكَ', transliteration: 'innaka', meaning: 'indeed you' },
          { id: 'is6-4', arabic: 'كَادِحٌ', transliteration: 'kadihun', meaning: 'laboring' },
          { id: 'is6-5', arabic: 'إِلَىٰ', transliteration: 'ila', meaning: 'toward' },
          { id: 'is6-6', arabic: 'رَبِّكَ', transliteration: 'rabbika', meaning: 'your Lord' },
          { id: 'is6-7', arabic: 'كَدْحًا', transliteration: 'kadhan', meaning: 'exertion' },
          { id: 'is6-8', arabic: 'فَمُلَاقِيهِ', transliteration: 'fa-mulaqihi', meaning: 'so will meet Him' }
        ]
      },
      {
        id: '84-7',
        audio: getAudioUrl(84, 7),
        arabicFull: 'فَأَمَّا مَنْ أُوتِيَ كِتَابَهُ بِيَمِينِهِ',
        translation: 'Then as for he who is given his record in his right hand,',
        visual: 'right_hand_book',
        lesson: 'Receiving your deed-book in your right hand is the first sign of success.',
        words: [
          { id: 'is7-1', arabic: 'فَأَمَّا', transliteration: 'fa-amma', meaning: 'then as for' },
          { id: 'is7-2', arabic: 'مَنْ', transliteration: 'man', meaning: 'he who' },
          { id: 'is7-3', arabic: 'أُوتِيَ', transliteration: 'utiya', meaning: 'is given' },
          { id: 'is7-4', arabic: 'كِتَابَهُ', transliteration: 'kitabahu', meaning: 'his book / record' },
          { id: 'is7-5', arabic: 'بِيَمِينِهِ', transliteration: 'bi-yaminihi', meaning: 'in his right hand' }
        ]
      },
      {
        id: '84-8',
        audio: getAudioUrl(84, 8),
        arabicFull: 'فَسَوْفَ يُحَاسَبُ حِسَابًا يَسِيرًا',
        translation: 'He will be judged with an easy account',
        visual: 'easy_judgment',
        lesson: 'An "easy account" means Allah will show the believer their mistakes, then forgive them instantly.',
        words: [
          { id: 'is8-1', arabic: 'فَسَوْفَ', transliteration: 'fa-sawfa', meaning: 'he will soon' },
          { id: 'is8-2', arabic: 'يُحَاسَبُ', transliteration: 'yuhasabu', meaning: 'be judged' },
          { id: 'is8-3', arabic: 'حِسَابًا', transliteration: 'hisaban', meaning: 'an account' },
          { id: 'is8-4', arabic: 'يَسِيرًا', transliteration: 'yasiran', meaning: 'easy' }
        ]
      },
      {
        id: '84-9',
        audio: getAudioUrl(84, 9),
        arabicFull: 'وَيَنقَلِبُ إِلَىٰ أَهْلِهِ مَسْرُورًا',
        translation: 'And return to his people in happiness.',
        visual: 'happy_return',
        lesson: 'Imagine the joy of returning to your family in Jannah, knowing you are safe forever.',
        words: [
          { id: 'is9-1', arabic: 'وَ', transliteration: 'wa', meaning: 'and' },
          { id: 'is9-2', arabic: 'يَنقَلِبُ', transliteration: 'yanqalibu', meaning: 'returns' },
          { id: 'is9-3', arabic: 'إِلَىٰ', transliteration: 'ila', meaning: 'to' },
          { id: 'is9-4', arabic: 'أَهْلِهِ', transliteration: 'ahlihi', meaning: 'his family / people' },
          { id: 'is9-5', arabic: 'مَسْرُورًا', transliteration: 'masruran', meaning: 'happy / joyful' }
        ]
      },
      {
        id: '84-10',
        audio: getAudioUrl(84, 10),
        arabicFull: 'وَأَمَّا مَنْ أُوتِيَ كِتَابَهُ وَرَاءَ ظَهْرِهِ',
        translation: 'But as for he who is given his record behind his back,',
        visual: 'behind_back',
        lesson: 'Their hands are tied behind them, and they are so ashamed they try to hide their bad deeds.',
        words: [
          { id: 'is10-1', arabic: 'وَأَمَّا', transliteration: 'wa-amma', meaning: 'but as for' },
          { id: 'is10-2', arabic: 'مَنْ', transliteration: 'man', meaning: 'he who' },
          { id: 'is10-3', arabic: 'أُوتِيَ', transliteration: 'utiya', meaning: 'is given' },
          { id: 'is10-4', arabic: 'كِتَابَهُ', transliteration: 'kitabahu', meaning: 'his book' },
          { id: 'is10-5', arabic: 'وَرَاءَ', transliteration: 'waraa', meaning: 'behind' },
          { id: 'is10-6', arabic: 'ظَهْرِهِ', transliteration: 'zahrihi', meaning: 'his back' }
        ]
      },
      {
        id: '84-11',
        audio: getAudioUrl(84, 11),
        arabicFull: 'فَسَوْفَ يَدْعُو ثُبُورًا',
        translation: 'He will cry out for destruction',
        visual: 'cry_help',
        lesson: 'He will wish he could just be destroyed and cease to exist rather than face judgment.',
        words: [
          { id: 'is11-1', arabic: 'فَسَوْفَ', transliteration: 'fa-sawfa', meaning: 'he will soon' },
          { id: 'is11-2', arabic: 'يَدْعُو', transliteration: 'yad\'u', meaning: 'cry out' },
          { id: 'is11-3', arabic: 'ثُبُورًا', transliteration: 'thuburan', meaning: 'destruction / ruin' }
        ]
      },
      {
        id: '84-12',
        audio: getAudioUrl(84, 12),
        arabicFull: 'وَيَصْلَىٰ سَعِيرًا',
        translation: 'And [enter to] burn in a Blaze.',
        visual: 'blaze',
        lesson: 'The ultimate destination for those who receive their record behind their backs is the intense fire.',
        words: [
          { id: 'is12-1', arabic: 'وَ', transliteration: 'wa', meaning: 'and' },
          { id: 'is12-2', arabic: 'يَصْلَىٰ', transliteration: 'yasla', meaning: 'will burn' },
          { id: 'is12-3', arabic: 'سَعِيرًا', transliteration: 'sa-iran', meaning: 'a Blaze / intense fire' }
        ]
      },
      {
        id: '84-13',
        audio: getAudioUrl(84, 13),
        arabicFull: 'إِنَّهُ كَانَ فِي أَهْلِهِ مَسْرُورًا',
        translation: 'Indeed, he had once been among his people in happiness;',
        visual: 'fake_happiness',
        lesson: 'He had "joy" in the world because he was partying and doing wrong without caring about the hereafter.',
        words: [
          { id: 'is13-1', arabic: 'إِنَّهُ', transliteration: 'innahu', meaning: 'indeed he' },
          { id: 'is13-2', arabic: 'كَانَ', transliteration: 'kana', meaning: 'was' },
          { id: 'is13-3', arabic: 'فِي', transliteration: 'fi', meaning: 'among' },
          { id: 'is13-4', arabic: 'أَهْلِهِ', transliteration: 'ahlihi', meaning: 'his people' },
          { id: 'is13-5', arabic: 'مَسْرُورًا', transliteration: 'masruran', meaning: 'happy / joyful' }
        ]
      },
      {
        id: '84-14',
        audio: getAudioUrl(84, 14),
        arabicFull: 'إِنَّهُ ظَنَّ أَن لَّن يَحُورَ',
        translation: 'Indeed, he thought that he would never return [to Allah].',
        visual: 'no_return',
        lesson: 'The root of all his mistakes was the arrogant belief that death was the absolute end.',
        words: [
          { id: 'is14-1', arabic: 'إِنَّهُ', transliteration: 'innahu', meaning: 'indeed he' },
          { id: 'is14-2', arabic: 'ظَنَّ', transliteration: 'zanna', meaning: 'thought / assumed' },
          { id: 'is14-3', arabic: 'أَن', transliteration: 'an', meaning: 'that' },
          { id: 'is14-4', arabic: 'لَّن', transliteration: 'lan', meaning: 'never' },
          { id: 'is14-5', arabic: 'يَحُورَ', transliteration: 'yahura', meaning: 'will return' }
        ]
      },
      {
        id: '84-15',
        audio: getAudioUrl(84, 15),
        arabicFull: 'بَلَىٰ إِنَّ رَبَّهُ كَانَ بِهِ بَصِيرًا',
        translation: 'But yes! Indeed, his Lord was ever of him, Seeing.',
        visual: 'allah_sees',
        lesson: 'Allah was watching every single action, intention, and secret he ever had.',
        words: [
          { id: 'is15-1', arabic: 'بَلَىٰ', transliteration: 'bala', meaning: 'but yes' },
          { id: 'is15-2', arabic: 'إِنَّ', transliteration: 'inna', meaning: 'indeed' },
          { id: 'is15-3', arabic: 'رَبَّهُ', transliteration: 'rabbahu', meaning: 'his Lord' },
          { id: 'is15-4', arabic: 'كَانَ', transliteration: 'kana', meaning: 'was' },
          { id: 'is15-5', arabic: 'بِهِ', transliteration: 'bihi', meaning: 'of him' },
          { id: 'is15-6', arabic: 'بَصِيرًا', transliteration: 'basiran', meaning: 'ever Seeing' }
        ]
      },
      {
        id: '84-16',
        audio: getAudioUrl(84, 16),
        arabicFull: 'فَلَا أُقْسِمُ بِالشَّفَقِ',
        translation: 'So I swear by the twilight glow',
        visual: 'twilight',
        lesson: 'The beautiful, red glow of the sky right after the sun sets.',
        words: [
          { id: 'is16-1', arabic: 'فَلَا أُقْسِمُ', transliteration: 'fa-la uqsimu', meaning: 'so I swear' },
          { id: 'is16-2', arabic: 'بِالشَّفَقِ', transliteration: 'bish-shafaq', meaning: 'by the twilight glow' }
        ]
      },
      {
        id: '84-17',
        audio: getAudioUrl(84, 17),
        arabicFull: 'وَاللَّيْلِ وَمَا وَسَقَ',
        translation: 'And [by] the night and what it gathers',
        visual: 'night_gathering',
        lesson: 'As night falls, it gathers people and animals back to their homes.',
        words: [
          { id: 'is17-1', arabic: 'وَ', transliteration: 'wa', meaning: 'and' },
          { id: 'is17-2', arabic: 'اللَّيْلِ', transliteration: 'al-layli', meaning: 'the night' },
          { id: 'is17-3', arabic: 'وَ', transliteration: 'wa', meaning: 'and' },
          { id: 'is17-4', arabic: 'مَا', transliteration: 'ma', meaning: 'what' },
          { id: 'is17-5', arabic: 'وَسَقَ', transliteration: 'wasaqa', meaning: 'it gathers / shrouds' }
        ]
      },
      {
        id: '84-18',
        audio: getAudioUrl(84, 18),
        arabicFull: 'وَالْقَمَرِ إِذَا اتَّسَقَ',
        translation: 'And [by] the moon when it becomes full,',
        visual: 'full_moon',
        lesson: 'The moon reaches its state of perfect completion.',
        words: [
          { id: 'is18-1', arabic: 'وَ', transliteration: 'wa', meaning: 'and' },
          { id: 'is18-2', arabic: 'الْقَمَرِ', transliteration: 'al-qamari', meaning: 'the moon' },
          { id: 'is18-3', arabic: 'إِذَا', transliteration: 'idha', meaning: 'when' },
          { id: 'is18-4', arabic: 'اتَّسَقَ', transliteration: 'ittasaqa', meaning: 'it becomes full' }
        ]
      },
      {
        id: '84-19',
        audio: getAudioUrl(84, 19),
        arabicFull: 'لَتَرْكَبُنَّ طَبَقًا عَن طَبَقٍ',
        translation: 'You will surely embark upon state after state.',
        visual: 'stages',
        lesson: 'Human life is a journey through stages: birth, life, death, resurrection, and the final home.',
        words: [
          { id: 'is19-1', arabic: 'لَتَرْكَبُنَّ', transliteration: 'la-tarkabunna', meaning: 'you will surely embark' },
          { id: 'is19-2', arabic: 'طَبَقًا', transliteration: 'tabaqan', meaning: 'state / stage' },
          { id: 'is19-3', arabic: 'عَن', transliteration: 'an', meaning: 'from' },
          { id: 'is19-4', arabic: 'طَبَقٍ', transliteration: 'tabaq', meaning: 'state / stage' }
        ]
      },
      {
        id: '84-20',
        audio: getAudioUrl(84, 20),
        arabicFull: 'فَمَا لَهُمْ لَا يُؤْمِنُونَ',
        translation: 'So what is [the matter] with them [that] they do not believe,',
        visual: 'why_no_belief',
        lesson: 'After seeing all these signs and knowing their own journey, why do people still refuse to believe?',
        words: [
          { id: 'is20-1', arabic: 'فَمَا', transliteration: 'fa-ma', meaning: 'so what' },
          { id: 'is20-2', arabic: 'لَهُمْ', transliteration: 'lahum', meaning: 'is with them' },
          { id: 'is20-3', arabic: 'لَا', transliteration: 'la', meaning: 'not' },
          { id: 'is20-4', arabic: 'يُؤْمِنُونَ', transliteration: 'yu-minun', meaning: 'they believe' }
        ]
      },
      {
        id: '84-21',
        audio: getAudioUrl(84, 21),
        arabicFull: 'وَإِذَا قُرِئَ عَلَيْهِمُ الْقُرْآنُ لَا يَسْجُدُونَ ۩',
        translation: 'And when the Qur\'an is recited to them, they do not prostrate [to Allah]?',
        visual: 'no_prostration',
        lesson: 'This is a place of Sujud; we put our heads down in awe of Allah\'s powerful words.',
        words: [
          { id: 'is21-1', arabic: 'وَ', transliteration: 'wa', meaning: 'and' },
          { id: 'is21-2', arabic: 'إِذَا', transliteration: 'idha', meaning: 'when' },
          { id: 'is21-3', arabic: 'قُرِئَ', transliteration: 'quri-a', meaning: 'is recited' },
          { id: 'is21-4', arabic: 'عَلَيْهِمُ', transliteration: 'alayhimu', meaning: 'to them' },
          { id: 'is21-5', arabic: 'الْقُرْآنُ', transliteration: 'al-quranu', meaning: 'the Quran' },
          { id: 'is21-6', arabic: 'لَا', transliteration: 'la', meaning: 'not' },
          { id: 'is21-7', arabic: 'يَسْجُدُونَ', transliteration: 'yasjudun', meaning: 'they prostrate' }
        ]
      },
      {
        id: '84-22',
        audio: getAudioUrl(84, 22),
        arabicFull: 'بَلِ الَّذِينَ كَفَرُوا يُكَذِّبُونَ',
        translation: 'But those who have disbelieved deny [it],',
        visual: 'persistent_denial',
        lesson: 'Disbelief is often rooted in a stubborn refusal to accept the truth, even when it is obvious.',
        words: [
          { id: 'is22-1', arabic: 'بَلِ', transliteration: 'bal', meaning: 'but / rather' },
          { id: 'is22-2', arabic: 'الَّذِينَ', transliteration: 'alladhina', meaning: 'those who' },
          { id: 'is22-3', arabic: 'كَفَرُوا', transliteration: 'kafaru', meaning: 'disbelieve' },
          { id: 'is22-4', arabic: 'يُكَذِّبُونَ', transliteration: 'yukadhdhibun', meaning: 'deny' }
        ]
      },
      {
        id: '84-23',
        audio: getAudioUrl(84, 23),
        arabicFull: 'وَاللَّهُ أَعْلَمُ بِمَا يُوعُونَ',
        translation: 'And Allah is most knowing of what they keep within themselves.',
        visual: 'inner_secrets',
        lesson: 'Allah knows exactly what doubts, pride, and plans they are hiding in their hearts.',
        words: [
          { id: 'is23-1', arabic: 'وَاللَّهُ', transliteration: 'wal-lahu', meaning: 'and Allah' },
          { id: 'is23-2', arabic: 'أَعْلَمُ', transliteration: 'alamu', meaning: 'is most knowing' },
          { id: 'is23-3', arabic: 'بِمَا', transliteration: 'bi-ma', meaning: 'of what' },
          { id: 'is23-4', arabic: 'يُوعُونَ', transliteration: 'yu-un', meaning: 'they keep inside' }
        ]
      },
      {
        id: '84-24',
        audio: getAudioUrl(84, 24),
        arabicFull: 'فَبَشِّرْهُم بِعَذَابٍ أَلِيمٍ',
        translation: 'So give them tidings of a painful punishment,',
        visual: 'painful_news',
        lesson: 'A sarcastic way to say they will face the results of their denial.',
        words: [
          { id: 'is24-1', arabic: 'فَبَشِّرْهُم', transliteration: 'fa-bashshirhum', meaning: 'so give them tidings' },
          { id: 'is24-2', arabic: 'بِعَذَابٍ', transliteration: 'bi-adhabin', meaning: 'of a punishment' },
          { id: 'is24-3', arabic: 'أَلِيمٍ', transliteration: 'alimin', meaning: 'painful' }
        ]
      },
      {
        id: '84-25',
        audio: getAudioUrl(84, 25),
        arabicFull: 'إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ لَهُمْ أَجْرٌ غَيْرُ مَمْنُونٍ',
        translation: 'Except for those who believe and do righteous deeds as theirs is a reward uninterrupted.',
        visual: 'eternal_reward',
        lesson: 'The final promise: those with faith and good actions will have a reward that never ends.',
        words: [
          { id: 'is25-1', arabic: 'إِلَّا', transliteration: 'illa', meaning: 'except' },
          { id: 'is25-2', arabic: 'الَّذِينَ', transliteration: 'alladhina', meaning: 'those who' },
          { id: 'is25-3', arabic: 'آمَنُوا', transliteration: 'amanu', meaning: 'believe' },
          { id: 'is25-4', arabic: 'وَعَمِلُوا', transliteration: 'wa-amilu', meaning: 'and do' },
          { id: 'is25-5', arabic: 'الصَّالِحَاتِ', transliteration: 'as-salihati', meaning: 'good deeds' },
          { id: 'is25-6', arabic: 'لَهُمْ', transliteration: 'lahum', meaning: 'for them' },
          { id: 'is25-7', arabic: 'أَجْرٌ', transliteration: 'ajrun', meaning: 'a reward' },
          { id: 'is25-8', arabic: 'غَيْرُ', transliteration: 'ghayru', meaning: 'not' },
          { id: 'is25-9', arabic: 'مَمْنُونٍ', transliteration: 'mamnun', meaning: 'interrupted / cut off' }
        ]
      }
    ]
  },

// --- 83. AL-MUTAFFIFIN (Uses 'Shield' & 'slate') ---
  {
    id: 'mutaffifin',
    number: 83,
    title: 'Al-Mutaffifin',
    meaning: 'The Defrauders',
    story: 'A severe warning against cheating in business and everyday dealings. It calls out those who demand their full rights but secretly give others less than they deserve. It warns that these "hidden" crimes are being recorded in a ledger called Sijjin, while the righteous have their deeds in Illiyyun.',
    color: 'slate',
    themeGradient: 'from-slate-700 to-gray-900',
    iconName: 'Shield',
    totalVerses: 36,
    levels: [
      {
        id: '83-1',
        audio: getAudioUrl(83, 1),
        arabicFull: 'وَيْلٌ لِّلْمُطَفِّفِينَ',
        translation: 'Woe to those who give less [than due],',
        visual: 'scale',
        lesson: 'Mutaffifin are those who cheat people out of small, almost unnoticeable amounts, thinking it won\'t matter.',
        words: [
          { id: 'mt1-1', arabic: 'وَيْلٌ', transliteration: 'Waylun', meaning: 'Woe / Destruction' },
          { id: 'mt1-2', arabic: 'لِّلْمُطَفِّفِينَ', transliteration: 'Lil-mutaffifin', meaning: 'To the defrauders' }
        ],
        distractors: [{ id: 'mtd1', arabic: 'لِّلْمُكَذِّبِينَ', transliteration: 'Lil-mukadh-dhibin' }]
      },
      {
        id: '83-2',
        audio: getAudioUrl(83, 2),
        arabicFull: 'الَّذِينَ إِذَا اكْتَالُوا عَلَى النَّاسِ يَسْتَوْفُونَ',
        translation: 'Who, when they take a measure from people, take in full.',
        visual: 'selfish',
        lesson: 'They are extremely strict about their own rights and make sure they get every single penny they are owed.',
        words: [
          { id: 'mt2-1', arabic: 'الَّذِينَ', transliteration: 'Alladhina', meaning: 'Those who' },
          { id: 'mt2-2', arabic: 'إِذَا', transliteration: 'Idha', meaning: 'When' },
          { id: 'mt2-3', arabic: 'اكْتَالُوا', transliteration: 'Iktalu', meaning: 'They take a measure' },
          { id: 'mt2-4', arabic: 'عَلَى', transliteration: 'Ala', meaning: 'From' },
          { id: 'mt2-5', arabic: 'النَّاسِ', transliteration: 'An-nasi', meaning: 'The people' },
          { id: 'mt2-6', arabic: 'يَسْتَوْفُونَ', transliteration: 'Yastawfun', meaning: 'They take in full' }
        ]
      },
      {
        id: '83-3',
        audio: getAudioUrl(83, 3),
        arabicFull: 'وَإِذَا كَالُوهُمْ أَو وَّزَنُوهُمْ يُخْسِرُونَ',
        translation: 'But if they give by measure or by weight to them, they cause loss.',
        visual: 'cheating',
        lesson: 'They are only dishonest when it benefits them and hurts others.',
        words: [
          { id: 'mt3-1', arabic: 'وَإِذَا', transliteration: 'Wa-idha', meaning: 'But when' },
          { id: 'mt3-2', arabic: 'كَالُوهُمْ', transliteration: 'Kaluhum', meaning: 'They measure for them' },
          { id: 'mt3-3', arabic: 'أَوْ', transliteration: 'Aw', meaning: 'Or' },
          { id: 'mt3-4', arabic: 'وَزَنُوهُمْ', transliteration: 'Wazanuhum', meaning: 'Weigh for them' },
          { id: 'mt3-5', arabic: 'يُخْسِرُونَ', transliteration: 'Yukhsirun', meaning: 'They cause loss' }
        ]
      },
      {
        id: '83-4',
        audio: getAudioUrl(83, 4),
        arabicFull: 'أَلَا يَظُنُّ أُولَٰئِكَ أَنَّهُم مَّبْعُوثُونَ',
        translation: 'Do they not think that they will be resurrected',
        visual: 'judgment',
        lesson: 'A reminder that every small transaction will be audited by Allah.',
        words: [
          { id: 'mt4-1', arabic: 'أَلَا', transliteration: 'Ala', meaning: 'Do not' },
          { id: 'mt4-2', arabic: 'يَظُنُّ', transliteration: 'Yazunnu', meaning: 'Think' },
          { id: 'mt4-3', arabic: 'أُولَٰئِكَ', transliteration: 'Ula-ika', meaning: 'Those' },
          { id: 'mt4-4', arabic: 'أَنَّهُم', transliteration: 'Annahum', meaning: 'That they' },
          { id: 'mt4-5', arabic: 'مَّبْعُوثُونَ', transliteration: 'Mab-uthun', meaning: 'Will be resurrected' }
        ]
      },
      {
        id: '83-5',
        audio: getAudioUrl(83, 5),
        arabicFull: 'لِيَوْمٍ عَظِيمٍ',
        translation: 'For a tremendous Day -',
        visual: 'great_day',
        lesson: 'The Day of Judgment is so massive and terrifying that it is called "Azim" (Tremendous).',
        words: [
          { id: 'mt5-1', arabic: 'لِيَوْمٍ', transliteration: 'Li-yawmin', meaning: 'For a Day' },
          { id: 'mt5-2', arabic: 'عَظِيمٍ', transliteration: 'Azim', meaning: 'Tremendous / Great' }
        ]
      },
      {
        id: '83-6',
        audio: getAudioUrl(83, 6),
        arabicFull: 'يَوْمَ يَقُومُ النَّاسُ لِرَبِّ الْعَالَمِينَ',
        translation: 'The Day when mankind will stand before the Lord of the worlds?',
        visual: 'standing',
        lesson: 'Every human, from the beginning to the end of time, will stand in absolute accountability.',
        words: [
          { id: 'mt6-1', arabic: 'يَوْمَ', transliteration: 'Yawma', meaning: 'The Day' },
          { id: 'mt6-2', arabic: 'يَقُومُ', transliteration: 'Yaqumu', meaning: 'Will stand' },
          { id: 'mt6-3', arabic: 'النَّاسُ', transliteration: 'An-nasu', meaning: 'The mankind' },
          { id: 'mt6-4', arabic: 'لِرَبِّ', transliteration: 'Li-rabbi', meaning: 'Before the Lord' },
          { id: 'mt6-5', arabic: 'الْعَالَمِينَ', transliteration: 'Al-alamin', meaning: 'Of the worlds' }
        ]
      },
      {
        id: '83-7',
        audio: getAudioUrl(83, 7),
        arabicFull: 'كَلَّا إِنَّ كِتَابَ الْفُجَّارِ لَفِي سِجِّينٍ',
        translation: 'No! Indeed, the record of the wicked is in Sijjin.',
        visual: 'sijjin',
        lesson: 'Sijjin is a register in the lowest depths where the names of the wicked are kept.',
        words: [
          { id: 'mt7-1', arabic: 'كَلَّا', transliteration: 'Kalla', meaning: 'No!' },
          { id: 'mt7-2', arabic: 'إِنَّ', transliteration: 'Inna', meaning: 'Indeed' },
          { id: 'mt7-3', arabic: 'كِتَابَ', transliteration: 'Kitaba', meaning: 'The record' },
          { id: 'mt7-4', arabic: 'الْفُجَّارِ', transliteration: 'Al-fujjari', meaning: 'Of the wicked' },
          { id: 'mt7-5', arabic: 'لَفِي', transliteration: 'Lafi', meaning: 'Is surely in' },
          { id: 'mt7-6', arabic: 'سِجِّينٍ', transliteration: 'Sijjin', meaning: 'Sijjin' }
        ]
      },
      {
        id: '83-8',
        audio: getAudioUrl(83, 8),
        arabicFull: 'وَمَا أَدْرَاكَ مَا سِجِّينٌ',
        translation: 'And what can make you know what Sijjin is?',
        visual: 'question',
        lesson: 'A rhetorical question emphasizing how terrifying and dark the ledger of Sijjin truly is.',
        words: [
          { id: 'mt8-1', arabic: 'وَمَا', transliteration: 'Wa-ma', meaning: 'And what' },
          { id: 'mt8-2', arabic: 'أَدْرَاكَ', transliteration: 'Adraka', meaning: 'Makes you know' },
          { id: 'mt8-3', arabic: 'مَا', transliteration: 'Ma', meaning: 'What' },
          { id: 'mt8-4', arabic: 'سِجِّينٌ', transliteration: 'Sijjin', meaning: 'Sijjin' }
        ]
      },
      {
        id: '83-9',
        audio: getAudioUrl(83, 9),
        arabicFull: 'كِتَابٌ مَّرْقُومٌ',
        translation: 'It is a register inscribed.',
        visual: 'record_book',
        lesson: 'Once your deeds are in Sijjin, they are permanent and cannot be deleted.',
        words: [
          { id: 'mt9-1', arabic: 'كِتَابٌ', transliteration: 'Kitabun', meaning: 'A record' },
          { id: 'mt9-2', arabic: 'مَّرْقُومٌ', transliteration: 'Marqum', meaning: 'Inscribed / Marked' }
        ]
      },
      {
        id: '83-10',
        audio: getAudioUrl(83, 10),
        arabicFull: 'وَيْلٌ يَوْمَئِذٍ لِّلْمُكَذِّبِينَ',
        translation: 'Woe, that Day, to the deniers,',
        visual: 'destruction',
        lesson: 'A direct warning of absolute ruin for those who reject the truth.',
        words: [
          { id: 'mt10-1', arabic: 'وَيْلٌ', transliteration: 'Waylun', meaning: 'Woe' },
          { id: 'mt10-2', arabic: 'يَوْمَئِذٍ', transliteration: 'Yawma-idhin', meaning: 'That Day' },
          { id: 'mt10-3', arabic: 'لِّلْمُكَذِّبِينَ', transliteration: 'Lil-mukadh-dhibin', meaning: 'To the deniers' }
        ]
      },
      {
        id: '83-11',
        audio: getAudioUrl(83, 11),
        arabicFull: 'الَّذِينَ يُكَذِّبُونَ بِيَوْمِ الدِّينِ',
        translation: 'Who deny the Day of Recompense.',
        visual: 'denial',
        lesson: 'Denying the Day of Recompense is the root cause of their corrupt behavior in business.',
        words: [
          { id: 'mt11-1', arabic: 'الَّذِينَ', transliteration: 'Alladhina', meaning: 'Those who' },
          { id: 'mt11-2', arabic: 'يُكَذِّبُونَ', transliteration: 'Yukadh-dhibuna', meaning: 'Deny' },
          { id: 'mt11-3', arabic: 'بِيَوْمِ', transliteration: 'Bi-yawmi', meaning: 'The Day' },
          { id: 'mt11-4', arabic: 'الدِّينِ', transliteration: 'Ad-din', meaning: 'Of Recompense' }
        ]
      },
      {
        id: '83-12',
        audio: getAudioUrl(83, 12),
        arabicFull: 'وَمَا يُكَذِّبُ بِهِ إِلَّا كُلُّ مُعْتَدٍ أَثِيمٍ',
        translation: 'And none deny it except every sinful transgressor.',
        visual: 'sin',
        lesson: 'Denying the truth is usually a result of wanting to live a life without moral consequences.',
        words: [
          { id: 'mt12-1', arabic: 'وَمَا', transliteration: 'Wa-ma', meaning: 'And none' },
          { id: 'mt12-2', arabic: 'يُكَذِّبُ', transliteration: 'Yukadh-dhibu', meaning: 'Deny' },
          { id: 'mt12-3', arabic: 'بِهِ', transliteration: 'Bihi', meaning: 'It' },
          { id: 'mt12-4', arabic: 'إِلَّا', transliteration: 'Illa', meaning: 'Except' },
          { id: 'mt12-5', arabic: 'كُلُّ', transliteration: 'Kullu', meaning: 'Every' },
          { id: 'mt12-6', arabic: 'مُعْتَدٍ', transliteration: 'Mu\'tadin', meaning: 'Transgressor' },
          { id: 'mt12-7', arabic: 'أَثِيمٍ', transliteration: 'Athim', meaning: 'Sinful' }
        ]
      },
      {
        id: '83-13',
        audio: getAudioUrl(83, 13),
        arabicFull: 'إِذَا تُتْلَىٰ عَلَيْهِ آيَاتُنَا قَالَ أَسَاطِيرُ الْأَوَّلِينَ',
        translation: 'When Our verses are recited to him, he says, "Ancient myths."',
        visual: 'mockery',
        lesson: 'Arrogance blinds people into thinking timeless wisdom is just old stories.',
        words: [
          { id: 'mt13-1', arabic: 'إِذَا', transliteration: 'Idha', meaning: 'When' },
          { id: 'mt13-2', arabic: 'تُتْلَىٰ', transliteration: 'Tutla', meaning: 'Are recited' },
          { id: 'mt13-3', arabic: 'عَلَيْهِ', transliteration: 'Alayhi', meaning: 'To him' },
          { id: 'mt13-4', arabic: 'آيَاتُنَا', transliteration: 'Ayatuna', meaning: 'Our verses' },
          { id: 'mt13-5', arabic: 'قَالَ', transliteration: 'Qala', meaning: 'He says' },
          { id: 'mt13-6', arabic: 'أَسَاطِيرُ', transliteration: 'Asatiru', meaning: 'Legends / Myths' },
          { id: 'mt13-7', arabic: 'الْأَوَّلِينَ', transliteration: 'Al-awwalin', meaning: 'Of the ancients' }
        ]
      },
      {
        id: '83-14',
        audio: getAudioUrl(83, 14),
        arabicFull: 'كَلَّا ۖ بَلْ ۜ رَانَ عَلَىٰ قُلُوبِهِم مَّا كَانُوا يَكْسِبُونَ',
        translation: 'No! Rather, the stain has covered their hearts from that which they were earning.',
        visual: 'rust_heart',
        lesson: 'Every sin is like a black dot. Eventually, the heart becomes covered in "Raan" (rust) and can no longer see the truth.',
        words: [
          { id: 'mt14-1', arabic: 'كَلَّا', transliteration: 'Kalla', meaning: 'No!' },
          { id: 'mt14-2', arabic: 'بَلْ', transliteration: 'Bal', meaning: 'Rather' },
          { id: 'mt14-3', arabic: 'رَانَ', transliteration: 'Raana', meaning: 'Has stained / rusted' },
          { id: 'mt14-4', arabic: 'عَلَىٰ', transliteration: 'Ala', meaning: 'Upon' },
          { id: 'mt14-5', arabic: 'قُلُوبِهِم', transliteration: 'Qulubihim', meaning: 'Their hearts' },
          { id: 'mt14-6', arabic: 'مَّا', transliteration: 'Ma', meaning: 'What' },
          { id: 'mt14-7', arabic: 'كَانُوا', transliteration: 'Kanu', meaning: 'They were' },
          { id: 'mt14-8', arabic: 'يَكْسِبُونَ', transliteration: 'Yaksibun', meaning: 'Earning / Doing' }
        ]
      },
      {
        id: '83-15',
        audio: getAudioUrl(83, 15),
        arabicFull: 'كَلَّا إِنَّهُمْ عَن رَّبِّهِمْ يَوْمَئِذٍ لَّمَحْجُوبُونَ',
        translation: 'No! Indeed, from their Lord, that Day, they will be partitioned.',
        visual: 'separated',
        lesson: 'The ultimate punishment is not the fire, but being blocked from seeing the mercy and presence of Allah.',
        words: [
          { id: 'mt15-1', arabic: 'كَلَّا', transliteration: 'Kalla', meaning: 'No!' },
          { id: 'mt15-2', arabic: 'إِنَّهُمْ', transliteration: 'Innahum', meaning: 'Indeed they' },
          { id: 'mt15-3', arabic: 'عَن', transliteration: 'An', meaning: 'From' },
          { id: 'mt15-4', arabic: 'رَّبِّهِمْ', transliteration: 'Rabbihim', meaning: 'Their Lord' },
          { id: 'mt15-5', arabic: 'يَوْمَئِذٍ', transliteration: 'Yawma-idhin', meaning: 'That Day' },
          { id: 'mt15-6', arabic: 'لَّمَحْجُوبُونَ', transliteration: 'La-mahjubun', meaning: 'Will surely be veiled / blocked' }
        ]
      },
      {
        id: '83-16',
        audio: getAudioUrl(83, 16),
        arabicFull: 'ثُمَّ إِنَّهُمْ لَصَالُو الْجَحِيمِ',
        translation: 'Then indeed, they will [enter to] burn in Hellfire.',
        visual: 'fire',
        lesson: 'Because their hearts were veiled from Allah, their bodies will now be enveloped in Hellfire.',
        words: [
          { id: 'mt16-1', arabic: 'ثُمَّ', transliteration: 'Thumma', meaning: 'Then' },
          { id: 'mt16-2', arabic: 'إِنَّهُمْ', transliteration: 'Innahum', meaning: 'Indeed they' },
          { id: 'mt16-3', arabic: 'لَصَالُو', transliteration: 'La-salu', meaning: 'Will surely burn' },
          { id: 'mt16-4', arabic: 'الْجَحِيمِ', transliteration: 'Al-jahim', meaning: 'The Hellfire' }
        ]
      },
      {
        id: '83-17',
        audio: getAudioUrl(83, 17),
        arabicFull: 'ثُمَّ يُقَالُ هَٰذَا الَّذِي كُنتُم بِهِ تُكَذِّبُونَ',
        translation: 'Then it will be said, "This is that which you used to deny."',
        visual: 'shame',
        lesson: 'Reality will finally settle in, but it will be a moment of extreme regret.',
        words: [
          { id: 'mt17-1', arabic: 'ثُمَّ', transliteration: 'Thumma', meaning: 'Then' },
          { id: 'mt17-2', arabic: 'يُقَالُ', transliteration: 'Yuqalu', meaning: 'It will be said' },
          { id: 'mt17-3', arabic: 'هَٰذَا', transliteration: 'Hadha', meaning: 'This' },
          { id: 'mt17-4', arabic: 'الَّذِي', transliteration: 'Alladhi', meaning: 'Which' },
          { id: 'mt17-5', arabic: 'كُنتُم', transliteration: 'Kuntum', meaning: 'You used to' },
          { id: 'mt17-6', arabic: 'بِهِ', transliteration: 'Bihi', meaning: 'In it' },
          { id: 'mt17-7', arabic: 'تُكَذِّبُونَ', transliteration: 'Tukadh-dhibun', meaning: 'Deny' }
        ]
      },
      {
        id: '83-18',
        audio: getAudioUrl(83, 18),
        arabicFull: 'كَلَّا إِنَّ كِتَابَ الْأَبْرَارِ لَفِي عِلِّيِّينَ',
        translation: 'No! Indeed, the record of the righteous is in Illiyyun.',
        visual: 'illiyyun',
        lesson: 'Illiyyun is a register in the highest heavens where the names of the noble and righteous are kept.',
        words: [
          { id: 'mt18-1', arabic: 'كَلَّا', transliteration: 'Kalla', meaning: 'No!' },
          { id: 'mt18-2', arabic: 'إِنَّ', transliteration: 'Inna', meaning: 'Indeed' },
          { id: 'mt18-3', arabic: 'كِتَابَ', transliteration: 'Kitaba', meaning: 'The record' },
          { id: 'mt18-4', arabic: 'الْأَبْرَارِ', transliteration: 'Al-abrari', meaning: 'Of the righteous' },
          { id: 'mt18-5', arabic: 'لَفِي', transliteration: 'Lafi', meaning: 'Is surely in' },
          { id: 'mt18-6', arabic: 'عِلِّيِّينَ', transliteration: 'Illiyyun', meaning: 'Illiyyun' }
        ]
      },
      {
        id: '83-19',
        audio: getAudioUrl(83, 19),
        arabicFull: 'وَمَا أَدْرَاكَ مَا عِلِّيُّونَ',
        translation: 'And what can make you know what Illiyyun is?',
        visual: 'question',
        lesson: 'A question to elevate the status of Illiyyun, showing it is beyond human imagination.',
        words: [
          { id: 'mt19-1', arabic: 'وَمَا', transliteration: 'Wa-ma', meaning: 'And what' },
          { id: 'mt19-2', arabic: 'أَدْرَاكَ', transliteration: 'Adraka', meaning: 'Makes you know' },
          { id: 'mt19-3', arabic: 'مَا', transliteration: 'Ma', meaning: 'What' },
          { id: 'mt19-4', arabic: 'عِلِّيُّونَ', transliteration: 'Illiyyun', meaning: 'Illiyyun' }
        ]
      },
      {
        id: '83-20',
        audio: getAudioUrl(83, 20),
        arabicFull: 'كِتَابٌ مَّرْقُومٌ',
        translation: 'It is a register inscribed',
        visual: 'marked_record',
        lesson: 'Just like the book of the wicked, this book is permanently written and cannot be altered.',
        words: [
          { id: 'mt20-1', arabic: 'كِتَابٌ', transliteration: 'Kitabun', meaning: 'A record' },
          { id: 'mt20-2', arabic: 'مَّرْقُومٌ', transliteration: 'Marqum', meaning: 'Inscribed' }
        ]
      },
      {
        id: '83-21',
        audio: getAudioUrl(83, 21),
        arabicFull: 'يَشْهَدُهُ الْمُقَرَّبُونَ',
        translation: 'Which is witnessed by those brought near [to Allah].',
        visual: 'angels',
        lesson: 'The highest angels and the elite souls witness this noble register.',
        words: [
          { id: 'mt21-1', arabic: 'يَشْهَدُهُ', transliteration: 'Yash-haduhu', meaning: 'Witness it' },
          { id: 'mt21-2', arabic: 'الْمُقَرَّبُونَ', transliteration: 'Al-muqarrabun', meaning: 'Those brought near' }
        ]
      },
      {
        id: '83-22',
        audio: getAudioUrl(83, 22),
        arabicFull: 'إِنَّ الْأَبْرَارَ لَفِي نَعِيمٍ',
        translation: 'Indeed, the righteous will be in pleasure',
        visual: 'bliss',
        lesson: 'A guarantee of pure, uninterrupted joy and luxury for those who lived righteously.',
        words: [
          { id: 'mt22-1', arabic: 'إِنَّ', transliteration: 'Inna', meaning: 'Indeed' },
          { id: 'mt22-2', arabic: 'الْأَبْرَارَ', transliteration: 'Al-abrara', meaning: 'The righteous' },
          { id: 'mt22-3', arabic: 'لَفِي', transliteration: 'Lafi', meaning: 'Is surely in' },
          { id: 'mt22-4', arabic: 'نَعِيمٍ', transliteration: 'Na-im', meaning: 'Pleasure / Bliss' }
        ]
      },
      {
        id: '83-23',
        audio: getAudioUrl(83, 23),
        arabicFull: 'عَلَى الْأَرَائِكِ يَنظُرُونَ',
        translation: 'On adorned couches, observing.',
        visual: 'comfort',
        lesson: 'Relaxing on thrones, they will look out over the infinite wonders of Jannah.',
        words: [
          { id: 'mt23-1', arabic: 'عَلَى', transliteration: 'Ala', meaning: 'On' },
          { id: 'mt23-2', arabic: 'الْأَرَائِكِ', transliteration: 'Al-ara-iki', meaning: 'The adorned couches' },
          { id: 'mt23-3', arabic: 'يَنظُرُونَ', transliteration: 'Yanzurun', meaning: 'Observing' }
        ]
      },
      {
        id: '83-24',
        audio: getAudioUrl(83, 24),
        arabicFull: 'تَعْرِفُ فِي وُجُوهِهِمْ نَضْرَةَ النَّعِيمِ',
        translation: 'You will recognize in their faces the radiance of pleasure.',
        visual: 'glow',
        lesson: 'True happiness is so deep that it makes the faces of believers physically glow with light.',
        words: [
          { id: 'mt24-1', arabic: 'تَعْرِفُ', transliteration: 'Ta\'rifu', meaning: 'You recognize' },
          { id: 'mt24-2', arabic: 'فِي', transliteration: 'Fi', meaning: 'In' },
          { id: 'mt24-3', arabic: 'وُجُوهِهِمْ', transliteration: 'Wujuhihim', meaning: 'Their faces' },
          { id: 'mt24-4', arabic: 'نَضْرَةَ', transliteration: 'Nadrata', meaning: 'The radiance / glow' },
          { id: 'mt24-5', arabic: 'النَّعِيمِ', transliteration: 'An-na-im', meaning: 'The pleasure' }
        ]
      },
      {
        id: '83-25',
        audio: getAudioUrl(83, 25),
        arabicFull: 'يُسْقَوْنَ مِن رَّحِيقٍ مَّخْتُومٍ',
        translation: 'They will be given to drink [pure] wine which was sealed.',
        visual: 'sealed_drink',
        lesson: 'A pure, premium drink of Jannah, specially prepared and sealed for the believers.',
        words: [
          { id: 'mt25-1', arabic: 'يُسْقَوْنَ', transliteration: 'Yusqawna', meaning: 'They will be given drink' },
          { id: 'mt25-2', arabic: 'مِن', transliteration: 'Min', meaning: 'From' },
          { id: 'mt25-3', arabic: 'رَّحِيقٍ', transliteration: 'Rahiqin', meaning: 'Pure wine / nectar' },
          { id: 'mt25-4', arabic: 'مَّخْتُومٍ', transliteration: 'Makhtum', meaning: 'Sealed' }
        ]
      },
      {
        id: '83-26',
        audio: getAudioUrl(83, 26),
        arabicFull: 'خِتَامُهُ مِسْكٌ ۚ وَفِي ذَٰلِكَ فَلْيَتَنَافَسِ الْمُتَنَافِسُونَ',
        translation: 'The last of it is musk. So for this let the competitors compete.',
        visual: 'musk',
        lesson: 'The "seal" or the aftertaste is fragrant musk. This is the only competition in life worth winning.',
        words: [
          { id: 'mt26-1', arabic: 'خِتَامُهُ', transliteration: 'Khitamuhu', meaning: 'Its seal / end' },
          { id: 'mt26-2', arabic: 'مِسْكٌ', transliteration: 'Miskun', meaning: 'Musk' },
          { id: 'mt26-3', arabic: 'وَفِي ذَٰلِكَ', transliteration: 'Wa-fi dhalika', meaning: 'And for this' },
          { id: 'mt26-4', arabic: 'فَلْيَتَنَافَسِ', transliteration: 'Falyatanafasi', meaning: 'Let compete' },
          { id: 'mt26-5', arabic: 'الْمُتَنَافِسُونَ', transliteration: 'Al-mutanafisun', meaning: 'The competitors' }
        ]
      },
      {
        id: '83-27',
        audio: getAudioUrl(83, 27),
        arabicFull: 'وَمِزَاجُهُ مِن تَسْنِيمٍ',
        translation: 'And its mixture is of Tasnim,',
        visual: 'mixture',
        lesson: 'Tasnim is a special water from the highest level of Jannah.',
        words: [
          { id: 'mt27-1', arabic: 'وَمِزَاجُهُ', transliteration: 'Wa-mizajuhu', meaning: 'And its mixture' },
          { id: 'mt27-2', arabic: 'مِن', transliteration: 'Min', meaning: 'Of' },
          { id: 'mt27-3', arabic: 'تَسْنِيمٍ', transliteration: 'Tasnim', meaning: 'Tasnim (water)' }
        ]
      },
      {
        id: '83-28',
        audio: getAudioUrl(83, 28),
        arabicFull: 'عَيْنًا يَشْرَبُ بِهَا الْمُقَرَّبُونَ',
        translation: 'A spring from which those near [to Allah] drink.',
        visual: 'spring',
        lesson: 'This exclusive spring is reserved only for those closest to Allah.',
        words: [
          { id: 'mt28-1', arabic: 'عَيْنًا', transliteration: 'Aynan', meaning: 'A spring' },
          { id: 'mt28-2', arabic: 'يَشْرَبُ', transliteration: 'Yashrabu', meaning: 'Drink' },
          { id: 'mt28-3', arabic: 'بِهَا', transliteration: 'Biha', meaning: 'From it' },
          { id: 'mt28-4', arabic: 'الْمُقَرَّبُونَ', transliteration: 'Al-muqarrabun', meaning: 'Those brought near' }
        ]
      },
      {
        id: '83-29',
        audio: getAudioUrl(83, 29),
        arabicFull: 'إِنَّ الَّذِينَ أَجْرَمُوا كَانُوا مِنَ الَّذِينَ آمَنُوا يَضْحَكُونَ',
        translation: 'Indeed, those who committed crimes used to laugh at those who believed.',
        visual: 'laughing',
        lesson: 'In the world, the wicked often mock the righteous and think they are foolish.',
        words: [
          { id: 'mt29-1', arabic: 'إِنَّ', transliteration: 'Inna', meaning: 'Indeed' },
          { id: 'mt29-2', arabic: 'الَّذِينَ', transliteration: 'Alladhina', meaning: 'Those who' },
          { id: 'mt29-3', arabic: 'أَجْرَمُوا', transliteration: 'Ajramu', meaning: 'Committed crimes' },
          { id: 'mt29-4', arabic: 'كَانُوا', transliteration: 'Kanu', meaning: 'Used to' },
          { id: 'mt29-5', arabic: 'مِنَ', transliteration: 'Mina', meaning: 'At' },
          { id: 'mt29-6', arabic: 'الَّذِينَ', transliteration: 'Alladhina', meaning: 'Those who' },
          { id: 'mt29-7', arabic: 'آمَنُوا', transliteration: 'Amanu', meaning: 'Believed' },
          { id: 'mt29-8', arabic: 'يَضْحَكُونَ', transliteration: 'Yadhakun', meaning: 'Laugh' }
        ]
      },
      {
        id: '83-30',
        audio: getAudioUrl(83, 30),
        arabicFull: 'وَإِذَا مَرُّوا بِهِمْ يَتَغَامَزُونَ',
        translation: 'And when they passed by them, they would exchange derisive glances.',
        visual: 'glances',
        lesson: 'Winking and signaling to each other to make fun of believers behind their backs.',
        words: [
          { id: 'mt30-1', arabic: 'وَإِذَا', transliteration: 'Wa-idha', meaning: 'And when' },
          { id: 'mt30-2', arabic: 'مَرُّوا', transliteration: 'Marru', meaning: 'They passed' },
          { id: 'mt30-3', arabic: 'بِهِمْ', transliteration: 'Bihim', meaning: 'By them' },
          { id: 'mt30-4', arabic: 'يَتَغَامَزُونَ', transliteration: 'Yataghamazun', meaning: 'Exchange glances' }
        ]
      },
      {
        id: '83-31',
        audio: getAudioUrl(83, 31),
        arabicFull: 'وَإِذَا انقَلَبُوا إِلَىٰ أَهْلِهِمُ انقَلَبُوا فَكِهِينَ',
        translation: 'And when they returned to their people, they would return jesting.',
        visual: 'jesting',
        lesson: 'They went home happy and amused by their own cruelty.',
        words: [
          { id: 'mt31-1', arabic: 'وَإِذَا', transliteration: 'Wa-idha', meaning: 'And when' },
          { id: 'mt31-2', arabic: 'انقَلَبُوا', transliteration: 'Inqalabu', meaning: 'They returned' },
          { id: 'mt31-3', arabic: 'إِلَىٰ أَهْلِهِمُ', transliteration: 'Ila ahlihimu', meaning: 'To their people' },
          { id: 'mt31-4', arabic: 'انقَلَبُوا', transliteration: 'Inqalabu', meaning: 'They returned' },
          { id: 'mt31-5', arabic: 'فَكِهِينَ', transliteration: 'Fakihin', meaning: 'Jesting / Amused' }
        ]
      },
      {
        id: '83-32',
        audio: getAudioUrl(83, 32),
        arabicFull: 'وَإِذَا رَأَوْهُمْ قَالُوا إِنَّ هَٰؤُلَاءِ لَضَالُّونَ',
        translation: 'And when they saw them, they said, "Indeed, those are truly lost."',
        visual: 'pointing',
        lesson: 'The wicked think the religious people are "lost" or outdated.',
        words: [
          { id: 'mt32-1', arabic: 'وَإِذَا', transliteration: 'Wa-idha', meaning: 'And when' },
          { id: 'mt32-2', arabic: 'رَأَوْهُمْ', transliteration: 'Ra-awhum', meaning: 'They saw them' },
          { id: 'mt32-3', arabic: 'قَالُوا', transliteration: 'Qalu', meaning: 'They said' },
          { id: 'mt32-4', arabic: 'إِنَّ', transliteration: 'Inna', meaning: 'Indeed' },
          { id: 'mt32-5', arabic: 'هَٰؤُلَاءِ', transliteration: 'Ha-ula-i', meaning: 'These' },
          { id: 'mt32-6', arabic: 'لَضَالُّونَ', transliteration: 'La-dallun', meaning: 'Are surely lost' }
        ]
      },
      {
        id: '83-33',
        audio: getAudioUrl(83, 33),
        arabicFull: 'وَمَا أُرْسِلُوا عَلَيْهِمْ حَافِظِينَ',
        translation: 'But they had not been sent as guardians over them.',
        visual: 'no_guards',
        lesson: 'Who gave them the authority to judge the believers?',
        words: [
          { id: 'mt33-1', arabic: 'وَمَا', transliteration: 'Wa-ma', meaning: 'But not' },
          { id: 'mt33-2', arabic: 'أُرْسِلُوا', transliteration: 'Ursilu', meaning: 'They were sent' },
          { id: 'mt33-3', arabic: 'عَلَيْهِمْ', transliteration: 'Alayhim', meaning: 'Over them' },
          { id: 'mt33-4', arabic: 'حَافِظِينَ', transliteration: 'Hafizin', meaning: 'Guardians' }
        ]
      },
      {
        id: '83-34',
        audio: getAudioUrl(83, 34),
        arabicFull: 'فَالْيَوْمَ الَّذِينَ آمَنُوا مِنَ الْكُفَّارِ يَضْحَكُونَ',
        translation: 'So Today those who believed are laughing at the disbelievers,',
        visual: 'table_turn',
        lesson: 'On Judgment Day, the tables are turned. The mocked will now be the ones filled with joy.',
        words: [
          { id: 'mt34-1', arabic: 'فَالْيَوْمَ', transliteration: 'Fal-yawma', meaning: 'So today' },
          { id: 'mt34-2', arabic: 'الَّذِينَ', transliteration: 'Alladhina', meaning: 'Those who' },
          { id: 'mt34-3', arabic: 'آمَنُوا', transliteration: 'Amanu', meaning: 'Believed' },
          { id: 'mt34-4', arabic: 'مِنَ الْكُفَّارِ', transliteration: 'Minal kuffari', meaning: 'At the disbelievers' },
          { id: 'mt34-5', arabic: 'يَضْحَكُونَ', transliteration: 'Yadhakun', meaning: 'Laugh' }
        ]
      },
      {
        id: '83-35',
        audio: getAudioUrl(83, 35),
        arabicFull: 'عَلَى الْأَرَائِكِ يَنظُرُونَ',
        translation: 'On adorned couches, observing.',
        visual: 'comfort',
        lesson: 'Reclining on couches, they will look at the Hellfire and realize what Allah saved them from.',
        words: [
          { id: 'mt35-1', arabic: 'عَلَى', transliteration: 'Ala', meaning: 'On' },
          { id: 'mt35-2', arabic: 'الْأَرَائِكِ', transliteration: 'Al-ara-iki', meaning: 'Couches' },
          { id: 'mt35-3', arabic: 'يَنظُرُونَ', transliteration: 'Yanzurun', meaning: 'Observing' }
        ]
      },
      {
        id: '83-36',
        audio: getAudioUrl(83, 36),
        arabicFull: 'هَلْ ثُوِّبَ الْكُفَّارُ مَا كَانُوا يَفْعَلُونَ',
        translation: 'Have the disbelievers [not] been rewarded for what they used to do?',
        visual: 'justice',
        lesson: 'A rhetorical question: Absolute justice has finally been served.',
        words: [
          { id: 'mt36-1', arabic: 'هَلْ', transliteration: 'Hal', meaning: 'Have' },
          { id: 'mt36-2', arabic: 'ثُوِّبَ', transliteration: 'Thuwwiba', meaning: 'Been rewarded' },
          { id: 'mt36-3', arabic: 'الْكُفَّارُ', transliteration: 'Al-kuffaru', meaning: 'The disbelievers' },
          { id: 'mt36-4', arabic: 'مَا كَانُوا', transliteration: 'Ma kanu', meaning: 'For what they used to' },
          { id: 'mt36-5', arabic: 'يَفْعَلُونَ', transliteration: 'Yaf-alun', meaning: 'Do' }
        ]
      }
    ]
  },
  // --- 82. AL-INFITAR (Uses 'Feather' & 'violet') ---
  {
    id: 'infitar',
    number: 82,
    title: 'Al-Infitar',
    meaning: 'The Cleaving',
    story: 'This Surah depicts the total collapse of the universe. When the sky tears apart and stars fall, mankind will finally see the reality of their lives. It asks a heartbreaking question: "What has deceived you concerning your Lord, the Most Generous?" It also reminds us that noble angels are always recording our every move.',
    color: 'violet',
    themeGradient: 'from-violet-400 to-purple-700',
    iconName: 'Feather',
    totalVerses: 19,
    levels: [
      {
        id: '82-1',
        audio: getAudioUrl(82, 1),
        arabicFull: 'إِذَا السَّمَاءُ انفَطَرَتْ',
        translation: 'When the sky has split [asunder]',
        visual: 'sky_tear',
        lesson: 'The beginning of the end: the sky will physically tear apart.',
        words: [
          { id: 'if1-1', arabic: 'إِذَا', transliteration: 'Idha', meaning: 'When' },
          { id: 'if1-2', arabic: 'السَّمَاءُ', transliteration: 'As-sama\'u', meaning: 'The sky' },
          { id: 'if1-3', arabic: 'انفَطَرَتْ', transliteration: 'Infatarat', meaning: 'Is split / torn' }
        ]
      },
      {
        id: '82-2',
        audio: getAudioUrl(82, 2),
        arabicFull: 'وَإِذَا الْكَوَاكِبُ انتَثَرَتْ',
        translation: 'And when the stars have scattered,',
        visual: 'falling_stars',
        lesson: 'The stars, which seem so fixed and permanent, will fall like loose pearls from a broken string.',
        words: [
          { id: 'if2-1', arabic: 'وَإِذَا', transliteration: 'Wa-idha', meaning: 'And when' },
          { id: 'if2-2', arabic: 'الْكَوَاكِبُ', transliteration: 'Al-kawakibu', meaning: 'The stars' },
          { id: 'if2-3', arabic: 'انتَثَرَتْ', transliteration: 'Intatharat', meaning: 'Are scattered' }
        ]
      },
      {
        id: '82-3',
        audio: getAudioUrl(82, 3),
        arabicFull: 'وَإِذَا الْبِحَارُ فُجِّرَتْ',
        translation: 'And when the seas are erupted',
        visual: 'seas_burst',
        lesson: 'The barriers between oceans will break, and they will overflow and explode.',
        words: [
          { id: 'if3-1', arabic: 'وَإِذَا', transliteration: 'Wa-idha', meaning: 'And when' },
          { id: 'if3-2', arabic: 'الْبِحَارُ', transliteration: 'Al-biharu', meaning: 'The seas' },
          { id: 'if3-3', arabic: 'فُجِّرَتْ', transliteration: 'Fujjirat', meaning: 'Are burst forth / erupted' }
        ]
      },
      {
        id: '82-4',
        audio: getAudioUrl(82, 4),
        arabicFull: 'وَإِذَا الْقُبُورُ بُعْثِرَتْ',
        translation: 'And when the graves are overturned,',
        visual: 'graves',
        lesson: 'The earth will throw out its dead for the final gathering.',
        words: [
          { id: 'if4-1', arabic: 'وَإِذَا', transliteration: 'Wa-idha', meaning: 'And when' },
          { id: 'if4-2', arabic: 'الْقُبُورُ', transliteration: 'Al-quburu', meaning: 'The graves' },
          { id: 'if4-3', arabic: 'بُعْثِرَتْ', transliteration: 'Bu-thirat', meaning: 'Are overturned' }
        ]
      },
      {
        id: '82-5',
        audio: getAudioUrl(82, 5),
        arabicFull: 'عَلِمَتْ نَفْسٌ مَّا قَدَّمَتْ وَأَخَّرَتْ',
        translation: 'A soul will [then] know what it has sent forth and kept back.',
        visual: 'realization',
        lesson: 'You will finally see your priority list: what you did, and what you neglected to do.',
        words: [
          { id: 'if5-1', arabic: 'عَلِمَتْ', transliteration: 'Alimat', meaning: 'Will know' },
          { id: 'if5-2', arabic: 'نَفْسٌ', transliteration: 'Nafsun', meaning: 'A soul' },
          { id: 'if5-3', arabic: 'مَّا', transliteration: 'Ma', meaning: 'What' },
          { id: 'if5-4', arabic: 'قَدَّمَتْ', transliteration: 'Qaddamat', meaning: 'It sent forth' },
          { id: 'if5-5', arabic: 'وَأَخَّرَتْ', transliteration: 'Wa-akhkharat', meaning: 'And left behind' }
        ]
      },
      {
        id: '82-6',
        audio: getAudioUrl(82, 6),
        arabicFull: 'يَا أَيُّهَا الْإِنسَانُ مَا غَرَّكَ بِرَبِّكَ الْكَرِيمِ',
        translation: 'O mankind, what has deceived you concerning your Lord, the Generous,',
        visual: 'deceived',
        lesson: 'A gentle but deep question: Why did you take Allah\'s kindness as a reason to be careless?',
        words: [
          { id: 'if6-1', arabic: 'يَا أَيُّهَا', transliteration: 'Ya ayyahu', meaning: 'O' },
          { id: 'if6-2', arabic: 'الْإِنسَانُ', transliteration: 'Al-insanu', meaning: 'Mankind' },
          { id: 'if6-3', arabic: 'مَا', transliteration: 'Ma', meaning: 'What' },
          { id: 'if6-4', arabic: 'غَرَّكَ', transliteration: 'Gharraka', meaning: 'Has deceived you' },
          { id: 'if6-5', arabic: 'بِرَبِّكَ', transliteration: 'Bi-rabbika', meaning: 'Concerning your Lord' },
          { id: 'if6-6', arabic: 'الْكَرِيمِ', transliteration: 'Al-karim', meaning: 'The Generous' }
        ]
      },
      {
        id: '82-7',
        audio: getAudioUrl(82, 7),
        arabicFull: 'الَّذِي خَلَقَكَ فَسَوَّاكَ فَعَدَلَكَ',
        translation: 'Who created you, fashioned you, and balanced you?',
        visual: 'balance',
        lesson: 'Look at your own body—the perfect design and balance is a proof of His care.',
        words: [
          { id: 'if7-1', arabic: 'الَّذِي', transliteration: 'Alladhi', meaning: 'Who' },
          { id: 'if7-2', arabic: 'خَلَقَكَ', transliteration: 'Khalaqaka', meaning: 'Created you' },
          { id: 'if7-3', arabic: 'فَسَوَّاكَ', transliteration: 'Fa-sawwaka', meaning: 'Fashioned you' },
          { id: 'if7-4', arabic: 'فَعَدَلَكَ', transliteration: 'Fa-adalaka', meaning: 'Balanced you' }
        ]
      },
      {
        id: '82-8',
        audio: getAudioUrl(82, 8),
        arabicFull: 'فِي أَيِّ صُورَةٍ مَّا شَاءَ رَكَّبَكَ',
        translation: 'In whatever form He willed has He assembled you.',
        visual: 'form',
        lesson: 'Allah designed your unique appearance exactly as He wished.',
        words: [
          { id: 'if8-1', arabic: 'فِي أَيِّ', transliteration: 'Fi ayyi', meaning: 'In whatever' },
          { id: 'if8-2', arabic: 'صُورَةٍ', transliteration: 'Suratin', meaning: 'Form' },
          { id: 'if8-3', arabic: 'مَّا شَاءَ', transliteration: 'Ma shaa', meaning: 'He willed' },
          { id: 'if8-4', arabic: 'رَكَّبَكَ', transliteration: 'Rakkabaka', meaning: 'He assembled you' }
        ]
      },
      {
        id: '82-9',
        audio: getAudioUrl(82, 9),
        arabicFull: 'كَلَّا بَلْ تُكَذِّبُونَ بِالدِّينِ',
        translation: 'No! But you deny the Recompense.',
        visual: 'denial',
        lesson: 'The real reason people are ungrateful is that they deny they will ever be judged.',
        words: [
          { id: 'if9-1', arabic: 'كَلَّا', transliteration: 'Kalla', meaning: 'No!' },
          { id: 'if9-2', arabic: 'بَلْ', transliteration: 'Bal', meaning: 'But / Rather' },
          { id: 'if9-3', arabic: 'تُكَذِّبُونَ', transliteration: 'Tukadh-dhibun', meaning: 'You deny' },
          { id: 'if9-4', arabic: 'بِالدِّينِ', transliteration: 'Bid-din', meaning: 'The Judgment' }
        ]
      },
      {
        id: '82-10',
        audio: getAudioUrl(82, 10),
        arabicFull: 'وَإِنَّ عَلَيْكُمْ لَحَافِظِينَ',
        translation: 'And indeed, over you are keepers,',
        visual: 'angels',
        lesson: 'You are never alone. Noble angels are assigned to stay with you always.',
        words: [
          { id: 'if10-1', arabic: 'وَإِنَّ', transliteration: 'Wa-inna', meaning: 'And indeed' },
          { id: 'if10-2', arabic: 'عَلَيْكُمْ', transliteration: 'Alaykum', meaning: 'Over you' },
          { id: 'if10-3', arabic: 'لَحَافِظِينَ', transliteration: 'La-hafizin', meaning: 'Are surely keepers / guardians' }
        ]
      },
      {
        id: '82-11',
        audio: getAudioUrl(82, 11),
        arabicFull: 'كِرَامًا كَاتِبِينَ',
        translation: 'Noble and recording;',
        visual: 'writing',
        lesson: 'The angels are not just computers; they are noble beings who record your actions with care.',
        words: [
          { id: 'if11-1', arabic: 'كِرَامًا', transliteration: 'Kiraman', meaning: 'Noble' },
          { id: 'if11-2', arabic: 'كَاتِبِينَ', transliteration: 'Katibin', meaning: 'Recording / Writers' }
        ]
      },
      {
        id: '82-12',
        audio: getAudioUrl(82, 12),
        arabicFull: 'يَعْلَمُونَ مَا تَفْعَلُونَ',
        translation: 'They know whatever you do.',
        visual: 'watching',
        lesson: 'Nothing escapes their record. They write down every public action and private secret.',
        words: [
          { id: 'if12-1', arabic: 'يَعْلَمُونَ', transliteration: 'Yalamuna', meaning: 'They know' },
          { id: 'if12-2', arabic: 'مَا', transliteration: 'Ma', meaning: 'What' },
          { id: 'if12-3', arabic: 'تَفْعَلُونَ', transliteration: 'Taf-alun', meaning: 'You do' }
        ]
      },
      {
        id: '82-13',
        audio: getAudioUrl(82, 13),
        arabicFull: 'إِنَّ الْأَبْرَارَ لَفِي نَعِيمٍ',
        translation: 'Indeed, the righteous will be in pleasure,',
        visual: 'paradise',
        lesson: 'Those who do good (Al-Abrar) will be surrounded by physical and spiritual bliss.',
        words: [
          { id: 'if13-1', arabic: 'إِنَّ', transliteration: 'Inna', meaning: 'Indeed' },
          { id: 'if13-2', arabic: 'الْأَبْرَارَ', transliteration: 'Al-abrara', meaning: 'The righteous' },
          { id: 'if13-3', arabic: 'لَفِي', transliteration: 'Lafi', meaning: 'Is surely in' },
          { id: 'if13-4', arabic: 'نَعِيمٍ', transliteration: 'Na-im', meaning: 'Pleasure' }
        ]
      },
      {
        id: '82-14',
        audio: getAudioUrl(82, 14),
        arabicFull: 'وَإِنَّ الْفُجَّارَ لَفِي جَحِيمٍ',
        translation: 'And indeed, the wicked will be in Hellfire.',
        visual: 'hell',
        lesson: 'Those who tear through moral boundaries (Al-Fujjar) will tear into the Hellfire.',
        words: [
          { id: 'if14-1', arabic: 'وَإِنَّ', transliteration: 'Wa-inna', meaning: 'And indeed' },
          { id: 'if14-2', arabic: 'الْفُجَّارَ', transliteration: 'Al-fujjara', meaning: 'The wicked' },
          { id: 'if14-3', arabic: 'لَفِي', transliteration: 'Lafi', meaning: 'Is surely in' },
          { id: 'if14-4', arabic: 'جَحِيمٍ', transliteration: 'Jahim', meaning: 'Hellfire' }
        ]
      },
      {
        id: '82-15',
        audio: getAudioUrl(82, 15),
        arabicFull: 'يَصْلَوْنَهَا يَوْمَ الدِّينِ',
        translation: 'They will [enter to] burn therein on the Day of Recompense,',
        visual: 'burning',
        lesson: 'They will enter the fire precisely on the Day they used to deny.',
        words: [
          { id: 'if15-1', arabic: 'يَصْلَوْنَهَا', transliteration: 'Yaslawnaha', meaning: 'They will burn in it' },
          { id: 'if15-2', arabic: 'يَوْمَ', transliteration: 'Yawma', meaning: 'The Day' },
          { id: 'if15-3', arabic: 'الدِّينِ', transliteration: 'Ad-din', meaning: 'Of Recompense' }
        ]
      },
      {
        id: '82-16',
        audio: getAudioUrl(82, 16),
        arabicFull: 'وَمَا هُمْ عَنْهَا بِغَائِبِينَ',
        translation: 'And never thereof will they be absent.',
        visual: 'no_escape',
        lesson: 'There is no "time-out" or escape from the consequences once they begin.',
        words: [
          { id: 'if16-1', arabic: 'وَمَا', transliteration: 'Wa-ma', meaning: 'And not' },
          { id: 'if16-2', arabic: 'هُمْ', transliteration: 'Hum', meaning: 'They' },
          { id: 'if16-3', arabic: 'عَنْهَا', transliteration: 'Anha', meaning: 'From it' },
          { id: 'if16-4', arabic: 'بِغَائِبِينَ', transliteration: 'Bi-gha-ibin', meaning: 'Be absent / escape' }
        ]
      },
      {
        id: '82-17',
        audio: getAudioUrl(82, 17),
        arabicFull: 'وَمَا أَدْرَاكَ مَا يَوْمُ الدِّينِ',
        translation: 'And what can make you know what is the Day of Recompense?',
        visual: 'question',
        lesson: 'Emphasizing the overwhelming reality of Judgment Day.',
        words: [
          { id: 'if17-1', arabic: 'وَمَا', transliteration: 'Wa-ma', meaning: 'And what' },
          { id: 'if17-2', arabic: 'أَدْرَاكَ', transliteration: 'Adraka', meaning: 'Makes you know' },
          { id: 'if17-3', arabic: 'مَا', transliteration: 'Ma', meaning: 'What' },
          { id: 'if17-4', arabic: 'يَوْمُ', transliteration: 'Yawmu', meaning: 'The Day' },
          { id: 'if17-5', arabic: 'الدِّينِ', transliteration: 'Ad-din', meaning: 'Of Recompense' }
        ]
      },
      {
        id: '82-18',
        audio: getAudioUrl(82, 18),
        arabicFull: 'ثُمَّ وَمَا أَدْرَاكَ مَا يَوْمُ الدِّينِ',
        translation: 'Then, what can make you know what is the Day of Recompense?',
        visual: 'repeated_question',
        lesson: 'Repeated for impact: human minds cannot fully comprehend the magnitude of that Day.',
        words: [
          { id: 'if18-1', arabic: 'ثُمَّ', transliteration: 'Thumma', meaning: 'Then' },
          { id: 'if18-2', arabic: 'وَمَا', transliteration: 'Wa-ma', meaning: 'And what' },
          { id: 'if18-3', arabic: 'أَدْرَاكَ', transliteration: 'Adraka', meaning: 'Makes you know' },
          { id: 'if18-4', arabic: 'مَا', transliteration: 'Ma', meaning: 'What' },
          { id: 'if18-5', arabic: 'يَوْمُ', transliteration: 'Yawmu', meaning: 'The Day' },
          { id: 'if18-6', arabic: 'الدِّينِ', transliteration: 'Ad-din', meaning: 'Of Recompense' }
        ]
      },
      {
        id: '82-19',
        audio: getAudioUrl(82, 19),
        arabicFull: 'يَوْمَ لَا تَمْلِكُ نَفْسٌ لِّنَفْسٍ شَيْئًا ۖ وَالْأَمْرُ يَوْمَئِذٍ لِّلَّهِ',
        translation: 'It is the Day when a soul will not possess for another soul [power to do] a thing; and the command, that Day, is [entirely] with Allah.',
        visual: 'sole_command',
        lesson: 'On that day, no father, mother, or friend can help you. Only your deeds and Allah\'s mercy matter.',
        words: [
          { id: 'if19-1', arabic: 'يَوْمَ', transliteration: 'Yawma', meaning: 'The Day' },
          { id: 'if19-2', arabic: 'لَا تَمْلِكُ', transliteration: 'La tamliku', meaning: 'Does not possess' },
          { id: 'if19-3', arabic: 'نَفْسٌ', transliteration: 'Nafsun', meaning: 'A soul' },
          { id: 'if19-4', arabic: 'لِّنَفْسٍ', transliteration: 'Li-nafsin', meaning: 'For another soul' },
          { id: 'if19-5', arabic: 'شَيْئًا', transliteration: 'Shayan', meaning: 'A thing / anything' },
          { id: 'if19-6', arabic: 'وَالْأَمْرُ', transliteration: 'Wal-amru', meaning: 'And the command' },
          { id: 'if19-7', arabic: 'يَوْمَئِذٍ', transliteration: 'Yawma-idhin', meaning: 'That Day' },
          { id: 'if19-8', arabic: 'لِّلَّهِ', transliteration: 'Lillah', meaning: 'Is for Allah' }
        ]
      }
    ]
  },
  // --- 81. AT-TAKWIR (Uses 'Mountain' & 'amber') ---
  {
    id: 'takwir',
    number: 81,
    title: 'At-Takwir',
    meaning: 'The Overthrowing',
    story: 'This Surah lists twelve major cosmic events that happen at the end of the world. It mentions folded suns, falling stars, and oceans set on fire. It specifically mentions the "buried child" to show that even hidden injustices will be brought to light. It then defends the Quran as being brought by a powerful and trustworthy angel, Jibreel.',
    color: 'amber',
    themeGradient: 'from-amber-600 to-orange-800',
    iconName: 'Mountain',
    totalVerses: 29,
    levels: [
      {
        id: '81-1',
        audio: getAudioUrl(81, 1),
        arabicFull: 'إِذَا الشَّمْسُ كُوِّرَتْ',
        translation: 'When the sun is wrapped up [in darkness]',
        visual: 'sun_dark',
        lesson: 'The sun will be folded up like a turban, losing its heat and light.',
        words: [
          { id: 'tk1-1', arabic: 'إِذَا', transliteration: 'Idha', meaning: 'When' },
          { id: 'tk1-2', arabic: 'الشَّمْسُ', transliteration: 'Ash-shamsu', meaning: 'The sun' },
          { id: 'tk1-3', arabic: 'كُوِّرَتْ', transliteration: 'Kuwwirat', meaning: 'Is wrapped up / folded' }
        ]
      },
      {
        id: '81-2',
        audio: getAudioUrl(81, 2),
        arabicFull: 'وَإِذَا النُّجُومُ انكَدَرَتْ',
        translation: 'And when the stars fall, losing their lustre,',
        visual: 'falling_stars',
        lesson: 'The bright, beautiful stars we navigate by will lose their light and fall.',
        words: [
          { id: 'tk2-1', arabic: 'وَإِذَا', transliteration: 'Wa-idha', meaning: 'And when' },
          { id: 'tk2-2', arabic: 'النُّجُومُ', transliteration: 'An-nujumu', meaning: 'The stars' },
          { id: 'tk2-3', arabic: 'انكَدَرَتْ', transliteration: 'Inkadarat', meaning: 'Fall / Are darkened' }
        ]
      },
      {
        id: '81-3',
        audio: getAudioUrl(81, 3),
        arabicFull: 'وَإِذَا الْجِبَالُ سُيِّرَتْ',
        translation: 'And when the mountains are removed',
        visual: 'mountains_move',
        lesson: 'The massive mountains will become like clouds of dust blowing away.',
        words: [
          { id: 'tk3-1', arabic: 'وَإِذَا', transliteration: 'Wa-idha', meaning: 'And when' },
          { id: 'tk3-2', arabic: 'الْجِبَالُ', transliteration: 'Al-jibalu', meaning: 'The mountains' },
          { id: 'tk3-3', arabic: 'سُيِّرَتْ', transliteration: 'Suyyirat', meaning: 'Are set in motion / removed' }
        ]
      },
      {
        id: '81-4',
        audio: getAudioUrl(81, 4),
        arabicFull: 'وَإِذَا الْعِشَارُ عُطِّلَتْ',
        translation: 'And when full-term she-camels are neglected',
        visual: 'neglect',
        lesson: 'The camels were the most prized wealth. This means people will be so panicked they will abandon their most expensive possessions.',
        words: [
          { id: 'tk4-1', arabic: 'وَإِذَا', transliteration: 'Wa-idha', meaning: 'And when' },
          { id: 'tk4-2', arabic: 'الْعِشَارُ', transliteration: 'Al-isharu', meaning: 'Full-term she-camels' },
          { id: 'tk4-3', arabic: 'عُطِّلَتْ', transliteration: 'Uttilat', meaning: 'Are neglected' }
        ]
      },
      {
        id: '81-5',
        audio: getAudioUrl(81, 5),
        arabicFull: 'وَإِذَا الْوُحُوشُ حُشِرَتْ',
        translation: 'And when the wild beasts are gathered',
        visual: 'wild_animals',
        lesson: 'Wild animals that usually avoid each other will be huddled together in terror.',
        words: [
          { id: 'tk5-1', arabic: 'وَإِذَا', transliteration: 'Wa-idha', meaning: 'And when' },
          { id: 'tk5-2', arabic: 'الْوُحُوشُ', transliteration: 'Al-wuhushu', meaning: 'The wild beasts' },
          { id: 'tk5-3', arabic: 'حُشِرَتْ', transliteration: 'Hushirat', meaning: 'Are gathered' }
        ]
      },
      {
        id: '81-6',
        audio: getAudioUrl(81, 6),
        arabicFull: 'وَإِذَا الْبِحَارُ سُجِّرَتْ',
        translation: 'And when the seas are filled with flame',
        visual: 'sea_fire',
        lesson: 'The water of the oceans will be ignited and set on fire.',
        words: [
          { id: 'tk6-1', arabic: 'وَإِذَا', transliteration: 'Wa-idha', meaning: 'And when' },
          { id: 'tk6-2', arabic: 'الْبِحَارُ', transliteration: 'Al-biharu', meaning: 'The seas' },
          { id: 'tk6-3', arabic: 'سُجِّرَتْ', transliteration: 'Sujjirat', meaning: 'Are set on fire' }
        ]
      },
      {
        id: '81-7',
        audio: getAudioUrl(81, 7),
        arabicFull: 'وَإِذَا النُّفُوسُ زُوِّجَتْ',
        translation: 'And when the souls are paired',
        visual: 'souls_paired',
        lesson: 'Souls will be grouped with those like them (good with good, evil with evil).',
        words: [
          { id: 'tk7-1', arabic: 'وَإِذَا', transliteration: 'Wa-idha', meaning: 'And when' },
          { id: 'tk7-2', arabic: 'النُّفُوسُ', transliteration: 'An-nufusu', meaning: 'The souls' },
          { id: 'tk7-3', arabic: 'زُوِّجَتْ', transliteration: 'Zuwwijat', meaning: 'Are paired' }
        ]
      },
      {
        id: '81-8',
        audio: getAudioUrl(81, 8),
        arabicFull: 'وَإِذَا الْمَوْؤُودَةُ سُئِلَتْ',
        translation: 'And when the girl [who was] buried alive is asked',
        visual: 'buried_child',
        lesson: 'A reference to the horrific pre-Islamic custom of burying infant girls. Allah will defend them.',
        words: [
          { id: 'tk8-1', arabic: 'وَإِذَا', transliteration: 'Wa-idha', meaning: 'And when' },
          { id: 'tk8-2', arabic: 'الْمَوْؤُودَةُ', transliteration: 'Al-maw-udatu', meaning: 'The girl buried alive' },
          { id: 'tk8-3', arabic: 'سُئِلَتْ', transliteration: 'Su-ilat', meaning: 'Is asked' }
        ]
      },
      {
        id: '81-9',
        audio: getAudioUrl(81, 9),
        arabicFull: 'بِأَيِّ ذَنبٍ قُتِلَتْ',
        translation: 'For what sin she was killed',
        visual: 'justice',
        lesson: 'Even the most helpless, voiceless victims will have their day in court.',
        words: [
          { id: 'tk9-1', arabic: 'بِأَيِّ', transliteration: 'Bi-ayyi', meaning: 'For what' },
          { id: 'tk9-2', arabic: 'ذَنبٍ', transliteration: 'Dhanbin', meaning: 'Sin' },
          { id: 'tk9-3', arabic: 'قُتِلَتْ', transliteration: 'Qutilat', meaning: 'She was killed' }
        ]
      },
      {
        id: '81-10',
        audio: getAudioUrl(81, 10),
        arabicFull: 'وَإِذَا الصُّحُفُ نُشِرَتْ',
        translation: 'And when the pages are made public',
        visual: 'record_pages',
        lesson: 'All your private records and secret actions will be unrolled for everyone to see.',
        words: [
          { id: 'tk10-1', arabic: 'وَإِذَا', transliteration: 'Wa-idha', meaning: 'And when' },
          { id: 'tk10-2', arabic: 'الصُّحُفُ', transliteration: 'As-suhufu', meaning: 'The record-pages' },
          { id: 'tk10-3', arabic: 'نُشِرَتْ', transliteration: 'Nushirat', meaning: 'Are spread / made public' }
        ]
      },
      {
        id: '81-11',
        audio: getAudioUrl(81, 11),
        arabicFull: 'وَإِذَا السَّمَاءُ كُشِطَتْ',
        translation: 'And when the sky is stripped away',
        visual: 'sky_peel',
        lesson: 'The sky will be peeled away like a skin, revealing what is beyond.',
        words: [
          { id: 'tk11-1', arabic: 'وَإِذَا', transliteration: 'Wa-idha', meaning: 'And when' },
          { id: 'tk11-2', arabic: 'السَّمَاءُ', transliteration: 'As-sama\'u', meaning: 'The sky' },
          { id: 'tk11-3', arabic: 'كُشِطَتْ', transliteration: 'Kushitat', meaning: 'Is stripped away / peeled' }
        ]
      },
      {
        id: '81-12',
        audio: getAudioUrl(81, 12),
        arabicFull: 'وَإِذَا الْجَحِيمُ سُعِّرَتْ',
        translation: 'And when Hellfire is set ablaze',
        visual: 'hell_fire',
        lesson: 'The fires of Hell will be stoked and intensified, ready for the wicked.',
        words: [
          { id: 'tk12-1', arabic: 'وَإِذَا', transliteration: 'Wa-idha', meaning: 'And when' },
          { id: 'tk12-2', arabic: 'الْجَحِيمُ', transliteration: 'Al-jahimu', meaning: 'The Hellfire' },
          { id: 'tk12-3', arabic: 'سُعِّرَتْ', transliteration: 'Su-irat', meaning: 'Is set ablaze' }
        ]
      },
      {
        id: '81-13',
        audio: getAudioUrl(81, 13),
        arabicFull: 'وَإِذَا الْجَنَّةُ أُزْلِفَتْ',
        translation: 'And when Paradise is brought near,',
        visual: 'paradise_near',
        lesson: 'Paradise will be physically moved closer to the believers as a gift.',
        words: [
          { id: 'tk13-1', arabic: 'وَإِذَا', transliteration: 'Wa-idha', meaning: 'And when' },
          { id: 'tk13-2', arabic: 'الْجَنَّةُ', transliteration: 'Al-jannatu', meaning: 'Paradise' },
          { id: 'tk13-3', arabic: 'أُزْلِفَتْ', transliteration: 'Uzlifat', meaning: 'Is brought near' }
        ]
      },
      {
        id: '81-14',
        audio: getAudioUrl(81, 14),
        arabicFull: 'عَلِمَتْ نَفْسٌ مَّا أَحْضَرَتْ',
        translation: 'A soul will [then] know what it has brought [with it].',
        visual: 'realization',
        lesson: 'This is the moment of truth where every person sees their lifetime summarized.',
        words: [
          { id: 'tk14-1', arabic: 'عَلِمَتْ', transliteration: 'Alimat', meaning: 'Will know' },
          { id: 'tk14-2', arabic: 'نَفْسٌ', transliteration: 'Nafsun', meaning: 'A soul' },
          { id: 'tk14-3', arabic: 'مَّا', transliteration: 'Ma', meaning: 'What' },
          { id: 'tk14-4', arabic: 'أَحْضَرَتْ', transliteration: 'Ahdarat', meaning: 'It has brought' }
        ]
      },
      {
        id: '81-15',
        audio: getAudioUrl(81, 15),
        arabicFull: 'فَلَا أُقْسِمُ بِالْخُنَّسِ',
        translation: 'So I swear by the retreating stars -',
        visual: 'stars',
        lesson: 'Referring to the planets that disappear and reappear in their orbits.',
        words: [
          { id: 'tk15-1', arabic: 'فَلَا أُقْسِمُ', transliteration: 'Fa-la uqsimu', meaning: 'So I swear' },
          { id: 'tk15-2', arabic: 'بِالْخُنَّسِ', transliteration: 'Bil-khunnasi', meaning: 'By the retreating stars' }
        ]
      },
      {
        id: '81-16',
        audio: getAudioUrl(81, 16),
        arabicFull: 'الْجَوَارِ الْكُنَّسِ',
        translation: 'Those that run [their courses] and disappear [into the sunset],',
        visual: 'orbit',
        lesson: 'Allah swears by the magnificent movement of planets hiding in the day and sweeping across the night.',
        words: [
          { id: 'tk16-1', arabic: 'الْجَوَارِ', transliteration: 'Al-jawari', meaning: 'Those that run' },
          { id: 'tk16-2', arabic: 'الْكُنَّسِ', transliteration: 'Al-kunnasi', meaning: 'Disappear / Hide' }
        ]
      },
      {
        id: '81-17',
        audio: getAudioUrl(81, 17),
        arabicFull: 'وَاللَّيْلِ إِذَا عَسْعَسَ',
        translation: 'And by the night as it closes in',
        visual: 'night_fall',
        lesson: 'The creeping darkness of the night is a sign of Allah\'s control over time.',
        words: [
          { id: 'tk17-1', arabic: 'وَاللَّيْلِ', transliteration: 'Wal-layli', meaning: 'And the night' },
          { id: 'tk17-2', arabic: 'إِذَا', transliteration: 'Idha', meaning: 'When' },
          { id: 'tk17-3', arabic: 'عَسْعَسَ', transliteration: 'As\'asa', meaning: 'It closes in / departs' }
        ]
      },
      {
        id: '81-18',
        audio: getAudioUrl(81, 18),
        arabicFull: 'وَالصُّبْحِ إِذَا تَنَفَّسَ',
        translation: 'And by the dawn when it breathes,',
        visual: 'dawn',
        lesson: 'A beautiful description of the morning as if it is taking its first breath of life.',
        words: [
          { id: 'tk18-1', arabic: 'وَالصُّبْحِ', transliteration: 'Was-subhi', meaning: 'And the dawn' },
          { id: 'tk18-2', arabic: 'إِذَا', transliteration: 'Idha', meaning: 'When' },
          { id: 'tk18-3', arabic: 'تَنَفَّسَ', transliteration: 'Tanaffasa', meaning: 'It breathes' }
        ]
      },
      {
        id: '81-19',
        audio: getAudioUrl(81, 19),
        arabicFull: 'إِنَّهُ لَقَوْلُ رَسُولٍ كَرِيمٍ',
        translation: '[That] indeed, the Qur\'an is a word [conveyed by] a noble messenger [Gabriel],',
        visual: 'angel_jibreel',
        lesson: 'Allah is defending the Quran: it is delivered by a noble and holy angel.',
        words: [
          { id: 'tk19-1', arabic: 'إِنَّهُ', transliteration: 'Innahu', meaning: 'Indeed it' },
          { id: 'tk19-2', arabic: 'لَقَوْلُ', transliteration: 'La-qawlu', meaning: 'Is surely a word' },
          { id: 'tk19-3', arabic: 'رَسُولٍ', transliteration: 'Rasulin', meaning: 'Of a messenger' },
          { id: 'tk19-4', arabic: 'كَرِيمٍ', transliteration: 'Karim', meaning: 'Noble' }
        ]
      },
      {
        id: '81-20',
        audio: getAudioUrl(81, 20),
        arabicFull: 'ذِي قُوَّةٍ عِندَ ذِي الْعَرْشِ مَكِينٍ',
        translation: '[Who is] possessed of power and with the Owner of the Throne, secure [in position],',
        visual: 'powerful_angel',
        lesson: 'Jibreel is exceptionally powerful and holds a high, secure rank before Allah.',
        words: [
          { id: 'tk20-1', arabic: 'ذِي قُوَّةٍ', transliteration: 'Dhi quwwatin', meaning: 'Possessed of power' },
          { id: 'tk20-2', arabic: 'عِندَ', transliteration: 'Inda', meaning: 'With / Near' },
          { id: 'tk20-3', arabic: 'ذِي الْعَرْشِ', transliteration: 'Dhil arshi', meaning: 'The Owner of the Throne' },
          { id: 'tk20-4', arabic: 'مَكِينٍ', transliteration: 'Makin', meaning: 'Secure / High-ranked' }
        ]
      },
      {
        id: '81-21',
        audio: getAudioUrl(81, 21),
        arabicFull: 'مُّطَاعٍ ثَمَّ أَمِينٍ',
        translation: 'Obeyed there [in heaven] and trustworthy.',
        visual: 'trustworthy',
        lesson: 'The other angels obey Jibreel, and he is perfectly honest in delivering the message.',
        words: [
          { id: 'tk21-1', arabic: 'مُّطَاعٍ', transliteration: 'Muta-in', meaning: 'Obeyed' },
          { id: 'tk21-2', arabic: 'ثَمَّ', transliteration: 'Thamma', meaning: 'There (in heaven)' },
          { id: 'tk21-3', arabic: 'أَمِينٍ', transliteration: 'Amin', meaning: 'Trustworthy' }
        ]
      },
      {
        id: '81-22',
        audio: getAudioUrl(81, 22),
        arabicFull: 'وَمَا صَاحِبُكُم بِمَجْنُونٍ',
        translation: 'And your companion [Muhammad] is not at all mad.',
        visual: 'prophet',
        lesson: 'Allah calls the Prophet your "companion" because you have known his honesty and sanity your whole lives.',
        words: [
          { id: 'tk22-1', arabic: 'وَمَا', transliteration: 'Wa-ma', meaning: 'And not' },
          { id: 'tk22-2', arabic: 'صَاحِبُكُم', transliteration: 'Sahibukum', meaning: 'Your companion' },
          { id: 'tk22-3', arabic: 'بِمَجْنُونٍ', transliteration: 'Bi-majnun', meaning: 'Is at all mad' }
        ]
      },
      {
        id: '81-23',
        audio: getAudioUrl(81, 23),
        arabicFull: 'وَلَقَدْ رَآهُ بِالْأُفُقِ الْمُبِينِ',
        translation: 'And he has already seen Gabriel in the clear horizon.',
        visual: 'horizon',
        lesson: 'The Prophet saw Angel Jibreel in his actual massive form across the sky.',
        words: [
          { id: 'tk23-1', arabic: 'وَلَقَدْ', transliteration: 'Wa-laqad', meaning: 'And certainly' },
          { id: 'tk23-2', arabic: 'رَآهُ', transliteration: 'Ra-ahu', meaning: 'He saw him' },
          { id: 'tk23-3', arabic: 'بِالْأُفُقِ', transliteration: 'Bil ufuqi', meaning: 'On the horizon' },
          { id: 'tk23-4', arabic: 'الْمُبِينِ', transliteration: 'Al-mubin', meaning: 'Clear' }
        ]
      },
      {
        id: '81-24',
        audio: getAudioUrl(81, 24),
        arabicFull: 'وَمَا هُوَ عَلَى الْغَيْبِ بِضَنِينٍ',
        translation: 'And Muhammad is not a withholder of [knowledge of] the unseen.',
        visual: 'generosity',
        lesson: 'He shares the entire revelation without hiding anything for himself.',
        words: [
          { id: 'tk24-1', arabic: 'وَمَا', transliteration: 'Wa-ma', meaning: 'And not' },
          { id: 'tk24-2', arabic: 'هُوَ', transliteration: 'Huwa', meaning: 'He' },
          { id: 'tk24-3', arabic: 'عَلَى الْغَيْبِ', transliteration: 'Alal ghaybi', meaning: 'Of the unseen' },
          { id: 'tk24-4', arabic: 'بِضَنِينٍ', transliteration: 'Bi-danin', meaning: 'A withholder / stingy' }
        ]
      },
      {
        id: '81-25',
        audio: getAudioUrl(81, 25),
        arabicFull: 'وَمَا هُوَ بِقَوْلِ شَيْطَانٍ رَّجِيمٍ',
        translation: 'And the Qur\'an is not the word of a devil, expelled [from the heavens].',
        visual: 'no_devil',
        lesson: 'This revelation is protected; no devil could ever come close to it.',
        words: [
          { id: 'tk25-1', arabic: 'وَمَا', transliteration: 'Wa-ma', meaning: 'And not' },
          { id: 'tk25-2', arabic: 'هُوَ', transliteration: 'Huwa', meaning: 'It' },
          { id: 'tk25-3', arabic: 'بِقَوْلِ', transliteration: 'Bi-qawli', meaning: 'By the word of' },
          { id: 'tk25-4', arabic: 'شَيْطَانٍ', transliteration: 'Shaytanin', meaning: 'A devil' },
          { id: 'tk25-5', arabic: 'رَّجِيمٍ', transliteration: 'Rajim', meaning: 'Expelled / Accursed' }
        ]
      },
      {
        id: '81-26',
        audio: getAudioUrl(81, 26),
        arabicFull: 'فَأَيْنَ تَذْهَبُونَ',
        translation: 'So where are you going?',
        visual: 'lost',
        lesson: 'A direct challenge: if you ignore this perfect guidance, what possible direction are you heading in?',
        words: [
          { id: 'tk26-1', arabic: 'فَأَيْنَ', transliteration: 'Fa-ayna', meaning: 'So where' },
          { id: 'tk26-2', arabic: 'تَذْهَبُونَ', transliteration: 'Tadhhabun', meaning: 'Are you going' }
        ]
      },
      {
        id: '81-27',
        audio: getAudioUrl(81, 27),
        arabicFull: 'إِنْ هُوَ إِلَّا ذِكْرٌ لِّلْعَالَمِينَ',
        translation: 'It is not except a reminder to the worlds',
        visual: 'universal',
        lesson: 'The Quran is not just for the Arabs; it is a universal wake-up call for all of humanity.',
        words: [
          { id: 'tk27-1', arabic: 'إِنْ هُوَ', transliteration: 'In huwa', meaning: 'It is not' },
          { id: 'tk27-2', arabic: 'إِلَّا', transliteration: 'Illa', meaning: 'Except' },
          { id: 'tk27-3', arabic: 'ذِكْرٌ', transliteration: 'Dhikrun', meaning: 'A reminder' },
          { id: 'tk27-4', arabic: 'لِّلْعَالَمِينَ', transliteration: 'Lil alamin', meaning: 'To the worlds' }
        ]
      },
      {
        id: '81-28',
        audio: getAudioUrl(81, 28),
        arabicFull: 'لِمَن شَاءَ مِنكُمْ أَن يَسْتَقِيمَ',
        translation: 'For whoever wills among you to take a right course.',
        visual: 'straight_path',
        lesson: 'Guidance is available, but you must make the active choice to walk the straight path.',
        words: [
          { id: 'tk28-1', arabic: 'لِمَن', transliteration: 'Liman', meaning: 'For whoever' },
          { id: 'tk28-2', arabic: 'شَاءَ', transliteration: 'Shaa', meaning: 'Wills' },
          { id: 'tk28-3', arabic: 'مِنكُمْ', transliteration: 'Minkum', meaning: 'Among you' },
          { id: 'tk28-4', arabic: 'أَن يَسْتَقِيمَ', transliteration: 'An yastaqim', meaning: 'To take the right path' }
        ]
      },
      {
        id: '81-29',
        audio: getAudioUrl(81, 29),
        arabicFull: 'وَمَا تَشَاءُونَ إِلَّا أَن يَشَاءَ اللَّهُ رَبُّ الْعَالَمِينَ',
        translation: 'And you do not will except that Allah wills - Lord of the worlds.',
        visual: 'allah_wills',
        lesson: 'Your willpower is real, but it operates entirely under the ultimate will and permission of Allah.',
        words: [
          { id: 'tk29-1', arabic: 'وَمَا', transliteration: 'Wa-ma', meaning: 'And not' },
          { id: 'tk29-2', arabic: 'تَشَاءُونَ', transliteration: 'Tashaa-un', meaning: 'You will' },
          { id: 'tk29-3', arabic: 'إِلَّا أَن', transliteration: 'Illa an', meaning: 'Except that' },
          { id: 'tk29-4', arabic: 'يَشَاءَ اللَّهُ', transliteration: 'Yashaa Allahu', meaning: 'Allah wills' },
          { id: 'tk29-5', arabic: 'رَبُّ الْعَالَمِينَ', transliteration: 'Rabbul alamin', meaning: 'Lord of the worlds' }
        ]
      }
    ]
  },
// --- 80. 'ABASA (Uses 'Heart' & 'rose') ---
  {
    id: 'abasa',
    number: 80,
    title: '\'Abasa',
    meaning: 'He Frowned',
    story: 'The Prophet (SAW) was speaking to the elite leaders of Makkah, desperately hoping they would accept Islam. A poor, blind man (Ibn Umm Maktum) approached him seeking knowledge. The Prophet (SAW) briefly frowned, not wanting to lose the leaders. Allah gently corrected him: a sincere, pure-hearted seeker is far more valuable than arrogant elites.',
    color: 'rose',
    themeGradient: 'from-rose-400 to-red-600',
    iconName: 'Heart',
    totalVerses: 42,
    levels: [
      {
        id: '80-1',
        audio: getAudioUrl(80, 1),
        arabicFull: 'عَبَسَ وَتَوَلَّىٰ',
        translation: 'He frowned and turned away',
        visual: 'frown',
        lesson: 'Notice Allah uses "He" (third person) to be gentle with the Prophet, rather than saying "You frowned".',
        words: [
          { id: 'ab1-1', arabic: 'عَبَسَ', transliteration: 'Abasa', meaning: 'He frowned' },
          { id: 'ab1-2', arabic: 'وَ', transliteration: 'Wa', meaning: 'And' },
          { id: 'ab1-3', arabic: 'تَوَلَّىٰ', transliteration: 'Tawalla', meaning: 'Turned away' }
        ]
      },
      {
        id: '80-2',
        audio: getAudioUrl(80, 2),
        arabicFull: 'أَن جَاءَهُ الْأَعْمَىٰ',
        translation: 'Because there came to him the blind man.',
        visual: 'blind_man',
        lesson: 'The blind man couldn\'t even see the frown, but Allah saw it from above the seven heavens and defended him.',
        words: [
          { id: 'ab2-1', arabic: 'أَن', transliteration: 'An', meaning: 'Because' },
          { id: 'ab2-2', arabic: 'جَاءَهُ', transliteration: 'Ja\'ahu', meaning: 'Came to him' },
          { id: 'ab2-3', arabic: 'الْأَعْمَىٰ', transliteration: 'Al-a\'ma', meaning: 'The blind man' }
        ]
      },
      {
        id: '80-3',
        audio: getAudioUrl(80, 3),
        arabicFull: 'وَمَا يُدْرِيكَ لَعَلَّهُ يَزَّكَّىٰ',
        translation: 'But what would make you perceive, [O Muhammad], that perhaps he might be purified',
        visual: 'purify',
        lesson: 'We can never know the potential of a person’s heart just by looking at their status or outward appearance.',
        words: [
          { id: 'ab3-1', arabic: 'وَمَا', transliteration: 'Wa-ma', meaning: 'And what' },
          { id: 'ab3-2', arabic: 'يُدْرِيكَ', transliteration: 'yudrika', meaning: 'would make you know' },
          { id: 'ab3-3', arabic: 'لَعَلَّهُ', transliteration: 'la-allahu', meaning: 'perhaps he' },
          { id: 'ab3-4', arabic: 'يَزَّكَّىٰ', transliteration: 'yazzakka', meaning: 'might be purified' }
        ]
      },
      {
        id: '80-4',
        audio: getAudioUrl(80, 4),
        arabicFull: 'أَوْ يَذَّكَّرُ فَتَنفَعَهُ الذِّكْرَىٰ',
        translation: 'Or be reminded and the remembrance would benefit him?',
        visual: 'benefit',
        lesson: 'A sincere seeker of truth will always benefit from a reminder, unlike the arrogant who ignore it.',
        words: [
          { id: 'ab4-1', arabic: 'أَوْ', transliteration: 'Aw', meaning: 'Or' },
          { id: 'ab4-2', arabic: 'يَذَّكَّرُ', transliteration: 'yadhdhakkaru', meaning: 'reminded' },
          { id: 'ab4-3', arabic: 'فَتَنفَعَهُ', transliteration: 'fa-tanfa-ahu', meaning: 'so would benefit him' },
          { id: 'ab4-4', arabic: 'الذِّكْرَىٰ', transliteration: 'adh-dhikra', meaning: 'the reminder' }
        ]
      },
      {
        id: '80-5',
        audio: getAudioUrl(80, 5),
        arabicFull: 'أَمَّا مَنِ اسْتَغْنَىٰ',
        translation: 'As for him who thinks himself self-sufficient,',
        visual: 'arrogant',
        lesson: 'The leaders of Makkah were wealthy and felt they didn\'t need God or guidance.',
        words: [
          { id: 'ab5-1', arabic: 'أَمَّا', transliteration: 'Amma', meaning: 'As for' },
          { id: 'ab5-2', arabic: 'مَنِ', transliteration: 'mani', meaning: 'him who' },
          { id: 'ab5-3', arabic: 'اسْتَغْنَىٰ', transliteration: 'istaghna', meaning: 'is self-sufficient' }
        ]
      },
      {
        id: '80-6',
        audio: getAudioUrl(80, 6),
        arabicFull: 'فَأَنتَ لَهُ تَصَدَّىٰ',
        translation: 'To him you give attention.',
        visual: 'attention',
        lesson: 'The Prophet was giving his full attention to the chiefs, hoping their conversion would help Islam.',
        words: [
          { id: 'ab6-1', arabic: 'فَأَنتَ', transliteration: 'Fa-anta', meaning: 'Then you' },
          { id: 'ab6-2', arabic: 'لَهُ', transliteration: 'lahu', meaning: 'to him' },
          { id: 'ab6-3', arabic: 'تَصَدَّىٰ', transliteration: 'tasadda', meaning: 'give attention' }
        ]
      },
      {
        id: '80-7',
        audio: getAudioUrl(80, 7),
        arabicFull: 'وَمَا عَلَيْكَ أَلَّا يَزَّكَّىٰ',
        translation: 'And not upon you [is any blame] if he will not be purified.',
        visual: 'no_blame',
        lesson: 'You are only a messenger. If they choose to remain arrogant, you are not held responsible.',
        words: [
          { id: 'ab7-1', arabic: 'وَمَا', transliteration: 'Wa-ma', meaning: 'And not' },
          { id: 'ab7-2', arabic: 'عَلَيْكَ', transliteration: 'alayka', meaning: 'upon you' },
          { id: 'ab7-3', arabic: 'أَلَّا', transliteration: 'alla', meaning: 'that not' },
          { id: 'ab7-4', arabic: 'يَزَّكَّىٰ', transliteration: 'yazzakka', meaning: 'he is purified' }
        ]
      },
      {
        id: '80-8',
        audio: getAudioUrl(80, 8),
        arabicFull: 'وَأَمَّا مَن جَاءَكَ يَسْعَىٰ',
        translation: 'But as for him who came to you striving [for knowledge]',
        visual: 'striving',
        lesson: 'The blind man made a physical and eager effort to seek out the Prophet.',
        words: [
          { id: 'ab8-1', arabic: 'وَأَمَّا', transliteration: 'Wa-amma', meaning: 'But as for' },
          { id: 'ab8-2', arabic: 'مَن', transliteration: 'man', meaning: 'him who' },
          { id: 'ab8-3', arabic: 'جَاءَكَ', transliteration: 'ja-aka', meaning: 'came to you' },
          { id: 'ab8-4', arabic: 'يَسْعَىٰ', transliteration: 'yas-aa', meaning: 'striving' }
        ]
      },
      {
        id: '80-9',
        audio: getAudioUrl(80, 9),
        arabicFull: 'وَهُوَ يَخْشَىٰ',
        translation: 'While he fears [Allah],',
        visual: 'fear',
        lesson: 'His striving was paired with a deep, reverent fear and love of Allah in his heart.',
        words: [
          { id: 'ab9-1', arabic: 'وَهُوَ', transliteration: 'Wa-huwa', meaning: 'While he' },
          { id: 'ab9-2', arabic: 'يَخْشَىٰ', transliteration: 'yakhsha', meaning: 'fears' }
        ]
      },
      {
        id: '80-10',
        audio: getAudioUrl(80, 10),
        arabicFull: 'فَأَنتَ عَنْهُ تَلَهَّىٰ',
        translation: 'From him you are distracted.',
        visual: 'distracted',
        lesson: 'A reminder to prioritize those whose hearts are ready over those whose pockets are full.',
        words: [
          { id: 'ab10-1', arabic: 'فَأَنتَ', transliteration: 'Fa-anta', meaning: 'Then you' },
          { id: 'ab10-2', arabic: 'عَنْهُ', transliteration: 'anhu', meaning: 'from him' },
          { id: 'ab10-3', arabic: 'تَلَهَّىٰ', transliteration: 'talah-ha', meaning: 'are distracted' }
        ]
      },
      {
        id: '80-11',
        audio: getAudioUrl(80, 11),
        arabicFull: 'كَلَّا إِنَّهَا تَذْكِرَةٌ',
        translation: 'No! Indeed, these verses are a reminder;',
        visual: 'reminder',
        lesson: 'The Quran is an open invitation; it does not need the endorsement of the elite.',
        words: [
          { id: 'ab11-1', arabic: 'كَلَّا', transliteration: 'Kalla', meaning: 'No!' },
          { id: 'ab11-2', arabic: 'إِنَّهَا', transliteration: 'innaha', meaning: 'indeed it' },
          { id: 'ab11-3', arabic: 'تَذْكِرَةٌ', transliteration: 'tadhkirah', meaning: 'is a reminder' }
        ]
      },
      {
        id: '80-12',
        audio: getAudioUrl(80, 12),
        arabicFull: 'فَمَن شَاءَ ذَكَرَهُ',
        translation: 'So whoever wills may remember it.',
        visual: 'choice',
        lesson: 'Guidance is accessible to absolutely anyone who willingly chooses to remember.',
        words: [
          { id: 'ab12-1', arabic: 'فَمَن', transliteration: 'Fa-man', meaning: 'So whoever' },
          { id: 'ab12-2', arabic: 'شَاءَ', transliteration: 'sha-a', meaning: 'wills' },
          { id: 'ab12-3', arabic: 'ذَكَرَهُ', transliteration: 'dhakarahu', meaning: 'remembers it' }
        ]
      },
      {
        id: '80-13',
        audio: getAudioUrl(80, 13),
        arabicFull: 'فِي صُحُفٍ مُّكَرَّمَةٍ',
        translation: '[It is recorded] in honored sheets,',
        visual: 'sheets',
        lesson: 'The original source of this revelation is kept in the highest, most honored places.',
        words: [
          { id: 'ab13-1', arabic: 'فِي', transliteration: 'Fi', meaning: 'In' },
          { id: 'ab13-2', arabic: 'صُحُفٍ', transliteration: 'suhufin', meaning: 'sheets' },
          { id: 'ab13-3', arabic: 'مُّكَرَّمَةٍ', transliteration: 'mukarramah', meaning: 'honored' }
        ]
      },
      {
        id: '80-14',
        audio: getAudioUrl(80, 14),
        arabicFull: 'مَّرْفُوعَةٍ مُّطَهَّرَةٍ',
        translation: 'Exalted and purified,',
        visual: 'pure',
        lesson: 'These records are elevated beyond any human corruption or physical impurity.',
        words: [
          { id: 'ab14-1', arabic: 'مَّرْفُوعَةٍ', transliteration: 'Marfu-atin', meaning: 'Exalted' },
          { id: 'ab14-2', arabic: 'مُّطَهَّرَةٍ', transliteration: 'mutahharah', meaning: 'purified' }
        ]
      },
      {
        id: '80-15',
        audio: getAudioUrl(80, 15),
        arabicFull: 'بِأَيْدِي سَفَرَةٍ',
        translation: '[Carried] by the hands of messenger-angels,',
        visual: 'angels',
        lesson: 'The message is delivered by the most trustworthy scribes among the angels.',
        words: [
          { id: 'ab15-1', arabic: 'بِأَيْدِي', transliteration: 'Bi-aydi', meaning: 'By (the) hands of' },
          { id: 'ab15-2', arabic: 'سَفَرَةٍ', transliteration: 'safarah', meaning: 'scribes / angels' }
        ]
      },
      {
        id: '80-16',
        audio: getAudioUrl(80, 16),
        arabicFull: 'كِرَامٍ بَرَرَةٍ',
        translation: 'Noble and dutiful.',
        visual: 'noble',
        lesson: 'These angels are honorable in their character and perfectly obedient to Allah.',
        words: [
          { id: 'ab16-1', arabic: 'كِرَامٍ', transliteration: 'Kiramin', meaning: 'Noble' },
          { id: 'ab16-2', arabic: 'بَرَرَةٍ', transliteration: 'bararah', meaning: 'dutiful / righteous' }
        ]
      },
      {
        id: '80-17',
        audio: getAudioUrl(80, 17),
        arabicFull: 'قُتِلَ الْإِنسَانُ مَا أَكْفَرَهُ',
        translation: 'Cursed is man; how ungrateful is he.',
        visual: 'ungrateful',
        lesson: 'Mankind is often blinded by ego, failing to recognize the source of his existence and blessings.',
        words: [
          { id: 'ab17-1', arabic: 'قُتِلَ', transliteration: 'Qutila', meaning: 'Destroyed / Cursed' },
          { id: 'ab17-2', arabic: 'الْإِنسَانُ', transliteration: 'al-insanu', meaning: 'man' },
          { id: 'ab17-3', arabic: 'مَا أَكْفَرَهُ', transliteration: 'ma akfarahu', meaning: 'how ungrateful he is' }
        ]
      },
      {
        id: '80-18',
        audio: getAudioUrl(80, 18),
        arabicFull: 'مِنْ أَيِّ شَيْءٍ خَلَقَهُ',
        translation: 'From what substance did He create him?',
        visual: 'question',
        lesson: 'A rhetorical question to destroy human arrogance by reminding us of our lowly origins.',
        words: [
          { id: 'ab18-1', arabic: 'مِنْ', transliteration: 'Min', meaning: 'From' },
          { id: 'ab18-2', arabic: 'أَيِّ', transliteration: 'ayyi', meaning: 'what' },
          { id: 'ab18-3', arabic: 'شَيْءٍ', transliteration: 'shay-in', meaning: 'thing' },
          { id: 'ab18-4', arabic: 'خَلَقَهُ', transliteration: 'khalaqahu', meaning: 'He created him' }
        ]
      },
      {
        id: '80-19',
        audio: getAudioUrl(80, 19),
        arabicFull: 'مِن نُّطْفَةٍ خَلَقَهُ فَقَدَّرَهُ',
        translation: 'From a sperm-drop He created him and destined for him.',
        visual: 'destiny',
        lesson: 'Everything about you—your height, life span, and features—was calculated from a single, invisible drop.',
        words: [
          { id: 'ab19-1', arabic: 'مِن', transliteration: 'Min', meaning: 'From' },
          { id: 'ab19-2', arabic: 'نُطْفَةٍ', transliteration: 'nutfatin', meaning: 'a sperm-drop' },
          { id: 'ab19-3', arabic: 'خَلَقَهُ', transliteration: 'khalaqahu', meaning: 'He created him' },
          { id: 'ab19-4', arabic: 'فَقَدَّرَهُ', transliteration: 'fa-qaddarahu', meaning: 'and proportioned / destined him' }
        ]
      },
      {
        id: '80-20',
        audio: getAudioUrl(80, 20),
        arabicFull: 'ثُمَّ السَّبِيلَ يَسَّرَهُ',
        translation: 'Then He eased the way for him;',
        visual: 'way',
        lesson: 'Allah makes the path of life, and the very process of birth itself, easy for the human.',
        words: [
          { id: 'ab20-1', arabic: 'ثُمَّ', transliteration: 'Thumma', meaning: 'Then' },
          { id: 'ab20-2', arabic: 'السَّبِيلَ', transliteration: 'as-sabila', meaning: 'the path' },
          { id: 'ab20-3', arabic: 'يَسَّرَهُ', transliteration: 'yassarahu', meaning: 'He eased it' }
        ]
      },
      {
        id: '80-21',
        audio: getAudioUrl(80, 21),
        arabicFull: 'ثُمَّ أَمَاتَهُ فَأَقْبَرَهُ',
        translation: 'Then He causes his death and provides a grave for him.',
        visual: 'grave',
        lesson: 'Even in death, Allah honors the human by establishing the practice of burial rather than leaving bodies exposed.',
        words: [
          { id: 'ab21-1', arabic: 'ثُمَّ', transliteration: 'Thumma', meaning: 'Then' },
          { id: 'ab21-2', arabic: 'أَمَاتَهُ', transliteration: 'amatahu', meaning: 'causes him death' },
          { id: 'ab21-3', arabic: 'فَأَقْبَرَهُ', transliteration: 'fa-aqbarahu', meaning: 'then provides a grave' }
        ]
      },
      {
        id: '80-22',
        audio: getAudioUrl(80, 22),
        arabicFull: 'ثُمَّ إِذَا شَاءَ أَنشَرَهُ',
        translation: 'Then when He wills, He will resurrect him.',
        visual: 'resurrect',
        lesson: 'The same God who created life the first time will effortlessly bring it back when the time is right.',
        words: [
          { id: 'ab22-1', arabic: 'ثُمَّ', transliteration: 'Thumma', meaning: 'Then' },
          { id: 'ab22-2', arabic: 'إِذَا', transliteration: 'idha', meaning: 'when' },
          { id: 'ab22-3', arabic: 'شَاءَ', transliteration: 'sha-a', meaning: 'He wills' },
          { id: 'ab22-4', arabic: 'أَنشَرَهُ', transliteration: 'ansharahu', meaning: 'He resurrects him' }
        ]
      },
      {
        id: '80-23',
        audio: getAudioUrl(80, 23),
        arabicFull: 'كَلَّا لَمَّا يَقْضِ مَا أَمَرَهُ',
        translation: 'No! Mankind has not yet accomplished what He commanded him.',
        visual: 'command',
        lesson: 'Despite all these blessings, humanity constantly falls short of fulfilling their simple duties to Allah.',
        words: [
          { id: 'ab23-1', arabic: 'كَلَّا', transliteration: 'Kalla', meaning: 'No!' },
          { id: 'ab23-2', arabic: 'لَمَّا يَقْضِ', transliteration: 'lamma yaqdi', meaning: 'not yet accomplished' },
          { id: 'ab23-3', arabic: 'مَا أَمَرَهُ', transliteration: 'ma amarahu', meaning: 'what He commanded' }
        ]
      },
      {
        id: '80-24',
        audio: getAudioUrl(80, 24),
        arabicFull: 'فَلْيَنظُرِ الْإِنسَانُ إِلَىٰ طَعَامِهِ',
        translation: 'Then let man look at his food -',
        visual: 'food',
        lesson: 'Reflect on how much divine effort and natural science goes into the simple meal sitting on your plate.',
        words: [
          { id: 'ab24-1', arabic: 'فَلْيَنظُرِ', transliteration: 'Fal-yanzuri', meaning: 'Then let look' },
          { id: 'ab24-2', arabic: 'الْإِنسَانُ', transliteration: 'al-insanu', meaning: 'man' },
          { id: 'ab24-3', arabic: 'إِلَىٰ', transliteration: 'ila', meaning: 'at' },
          { id: 'ab24-4', arabic: 'طَعَامِهِ', transliteration: 'ta-amihi', meaning: 'his food' }
        ]
      },
      {
        id: '80-25',
        audio: getAudioUrl(80, 25),
        arabicFull: 'أَنَّا صَبَبْنَا الْمَاءَ صَبًّا',
        translation: 'How We poured down water in abundance,',
        visual: 'rain',
        lesson: 'The cycle of life begins with the heavy, life-giving rains sent from the sky.',
        words: [
          { id: 'ab25-1', arabic: 'أَنَّا', transliteration: 'Anna', meaning: 'That We' },
          { id: 'ab25-2', arabic: 'صَبَبْنَا', transliteration: 'sababna', meaning: 'poured down' },
          { id: 'ab25-3', arabic: 'الْمَاءَ', transliteration: 'al-ma-a', meaning: 'the water' },
          { id: 'ab25-4', arabic: 'صَبًّا', transliteration: 'sabban', meaning: 'in abundance' }
        ]
      },
      {
        id: '80-26',
        audio: getAudioUrl(80, 26),
        arabicFull: 'ثُمَّ شَقَقْنَا الْأَرْضَ شَقًّا',
        translation: 'Then We cracked the earth open [with sprouts],',
        visual: 'sprout',
        lesson: 'The miracle of a tiny, fragile green shoot breaking through hard, dry dirt.',
        words: [
          { id: 'ab26-1', arabic: 'ثُمَّ', transliteration: 'Thumma', meaning: 'Then' },
          { id: 'ab26-2', arabic: 'شَقَقْنَا', transliteration: 'shaqaqna', meaning: 'We cracked' },
          { id: 'ab26-3', arabic: 'الْأَرْضَ', transliteration: 'al-arda', meaning: 'the earth' },
          { id: 'ab26-4', arabic: 'شَقًّا', transliteration: 'shaqqan', meaning: 'into cracks' }
        ]
      },
      {
        id: '80-27',
        audio: getAudioUrl(80, 27),
        arabicFull: 'فَأَنبَتْنَا فِيهَا حَبًّا',
        translation: 'And caused to grow within it grain',
        visual: 'grain',
        lesson: 'Grains are the foundational food source that sustains both humans and animals globally.',
        words: [
          { id: 'ab27-1', arabic: 'فَأَنبَتْنَا', transliteration: 'Fa-anbatna', meaning: 'And caused to grow' },
          { id: 'ab27-2', arabic: 'فِيْهَا', transliteration: 'fiha', meaning: 'in it' },
          { id: 'ab27-3', arabic: 'حَبًّا', transliteration: 'habban', meaning: 'grain' }
        ]
      },
      {
        id: '80-28',
        audio: getAudioUrl(80, 28),
        arabicFull: 'وَعِنَبًا وَقَضْبًا',
        translation: 'And grapes and herbage',
        visual: 'grapes',
        lesson: 'Allah provides not just survival foods, but sweet, enjoyable fruits for our pleasure.',
        words: [
          { id: 'ab28-1', arabic: 'وَعِنَبًا', transliteration: 'Wa-inaban', meaning: 'And grapes' },
          { id: 'ab28-2', arabic: 'وَقَضْبًا', transliteration: 'wa-qadban', meaning: 'and herbage / green fodder' }
        ]
      },
      {
        id: '80-29',
        audio: getAudioUrl(80, 29),
        arabicFull: 'وَزَيْتُونًا وَنَخْلًا',
        translation: 'And olives and palm trees',
        visual: 'palm',
        lesson: 'Olives and dates were the staple, energy-rich foods of the region, packed with nutrients.',
        words: [
          { id: 'ab29-1', arabic: 'وَزَيْتُونًا', transliteration: 'Wa-zaytunan', meaning: 'And olives' },
          { id: 'ab29-2', arabic: 'وَنَخْلًا', transliteration: 'wa-nakhlan', meaning: 'and palm trees' }
        ]
      },
      {
        id: '80-30',
        audio: getAudioUrl(80, 30),
        arabicFull: 'وَحَدَائِقَ غُلْبًا',
        translation: 'And gardens of thick foliage',
        visual: 'garden',
        lesson: 'Lush, densely packed orchards providing cool shade and immense beauty.',
        words: [
          { id: 'ab30-1', arabic: 'وَحَدَائِقَ', transliteration: 'Wa-hada-iqa', meaning: 'And gardens' },
          { id: 'ab30-2', arabic: 'غُلْبًا', transliteration: 'ghulban', meaning: 'thickly planted' }
        ]
      },
      {
        id: '80-31',
        audio: getAudioUrl(80, 31),
        arabicFull: 'وَفَاكِهَةً وَأَبًّا',
        translation: 'And fruit and grass -',
        visual: 'fruit',
        lesson: 'Fruits for humans to enjoy, and grass/pastures for animals to feed on.',
        words: [
          { id: 'ab31-1', arabic: 'وَفَاكِهَةً', transliteration: 'Wa-fakihatan', meaning: 'And fruit' },
          { id: 'ab31-2', arabic: 'وَأَبًّا', transliteration: 'wa-abban', meaning: 'and grass / fodder' }
        ]
      },
      {
        id: '80-32',
        audio: getAudioUrl(80, 32),
        arabicFull: 'مَّتَاعًا لَّكُمْ وَلِأَنْعَامِكُمْ',
        translation: '[As] enjoyment for you and your grazing livestock.',
        visual: 'enjoy',
        lesson: 'All of these natural wonders are created simply for your temporary provision and enjoyment on earth.',
        words: [
          { id: 'ab32-1', arabic: 'مَّتَاعًا', transliteration: 'Mata-an', meaning: 'Provision / Enjoyment' },
          { id: 'ab32-2', arabic: 'لَّكُمْ', transliteration: 'lakum', meaning: 'for you' },
          { id: 'ab32-3', arabic: 'وَلِأَنْعَامِكُمْ', transliteration: 'wa-lian-amikum', meaning: 'and for your livestock' }
        ]
      },
      {
        id: '80-33',
        audio: getAudioUrl(80, 33),
        arabicFull: 'فَإِذَا جَاءَتِ الصَّاخَّةُ',
        translation: 'But when there comes the Deafening Blast',
        visual: 'blast',
        lesson: 'The Surah transitions sharply to the Day of Judgment, which will be announced by a sound so loud it deafens.',
        words: [
          { id: 'ab33-1', arabic: 'فَإِذَا', transliteration: 'Fa-idha', meaning: 'Then when' },
          { id: 'ab33-2', arabic: 'جَاءَتِ', transliteration: 'ja-at', meaning: 'comes' },
          { id: 'ab33-3', arabic: 'الصَّاخَّةُ', transliteration: 'as-sakh-khah', meaning: 'the Deafening Blast' }
        ]
      },
      {
        id: '80-34',
        audio: getAudioUrl(80, 34),
        arabicFull: 'يَوْمَ يَفِرُّ الْمَرْءُ مِنْ أَخِيهِ',
        translation: 'On the Day a man will flee from his brother',
        visual: 'flee',
        lesson: 'The terror of that Day will cause people to abandon their closest earthly bonds.',
        words: [
          { id: 'ab34-1', arabic: 'يَوْمَ', transliteration: 'Yawma', meaning: 'The Day' },
          { id: 'ab34-2', arabic: 'يَفِرُّ', transliteration: 'yafirru', meaning: 'will flee' },
          { id: 'ab34-3', arabic: 'الْمَرْءُ', transliteration: 'al-mar-u', meaning: 'the man' },
          { id: 'ab34-4', arabic: 'مِنْ', transliteration: 'min', meaning: 'from' },
          { id: 'ab34-5', arabic: 'أَخِيهِ', transliteration: 'akhihi', meaning: 'his brother' }
        ]
      },
      {
        id: '80-35',
        audio: getAudioUrl(80, 35),
        arabicFull: 'وَأُمِّهِ وَأَبِيهِ',
        translation: 'And his mother and his father',
        visual: 'parents',
        lesson: 'Even the instinct to protect one\'s own parents will vanish in the face of God\'s judgment.',
        words: [
          { id: 'ab35-1', arabic: 'وَأُمِّهِ', transliteration: 'Wa-ummihi', meaning: 'And his mother' },
          { id: 'ab35-2', arabic: 'وَأَبِيهِ', transliteration: 'wa-abihi', meaning: 'and his father' }
        ]
      },
      {
        id: '80-36',
        audio: getAudioUrl(80, 36),
        arabicFull: 'وَصَاحِبَتِهِ وَبَنِيهِ',
        translation: 'And his wife and his children,',
        visual: 'family',
        lesson: 'A person will run away from their own spouse and kids, fearing they might ask them for good deeds.',
        words: [
          { id: 'ab36-1', arabic: 'وَصَاحِبَتِهِ', transliteration: 'Wa-sahibatihi', meaning: 'And his wife / companion' },
          { id: 'ab36-2', arabic: 'وَبَنِيهِ', transliteration: 'wa-banihi', meaning: 'and his sons / children' }
        ]
      },
      {
        id: '80-37',
        audio: getAudioUrl(80, 37),
        arabicFull: 'لِكُلِّ امْرِئٍ مِّنْهُمْ يَوْمَئِذٍ شَأْنٌ يُغْنِيهِ',
        translation: 'For every man, that Day, will be a matter adequate for him.',
        visual: 'burden',
        lesson: 'Everyone will be so entirely overwhelmed by their own record that they won\'t have time for anyone else.',
        words: [
          { id: 'ab37-1', arabic: 'لِكُلِّ', transliteration: 'Li-kulli', meaning: 'For every' },
          { id: 'ab37-2', arabic: 'امْرِئٍ', transliteration: 'imri-in', meaning: 'man' },
          { id: 'ab37-3', arabic: 'مِّنْهُمْ', transliteration: 'minhum', meaning: 'of them' },
          { id: 'ab37-4', arabic: 'يَوْمَئِذٍ', transliteration: 'yawma-idhin', meaning: 'that day' },
          { id: 'ab37-5', arabic: 'شَأْنٌ', transliteration: 'sha-nun', meaning: 'a matter / concern' },
          { id: 'ab37-6', arabic: 'يُغْنِيهِ', transliteration: 'yughnihi', meaning: 'occupies him' }
        ]
      },
      {
        id: '80-38',
        audio: getAudioUrl(80, 38),
        arabicFull: 'وُجُوهٌ يَوْمَئِذٍ مُّسْفِرَةٌ',
        translation: '[Some] faces, that Day, will be bright -',
        visual: 'bright_face',
        lesson: 'The faces of the believers will literally glow with light due to their successful outcome.',
        words: [
          { id: 'ab38-1', arabic: 'وُجُوهٌ', transliteration: 'Wujuhun', meaning: 'Faces' },
          { id: 'ab38-2', arabic: 'يَوْمَئِذٍ', transliteration: 'yawma-idhin', meaning: 'that day' },
          { id: 'ab38-3', arabic: 'مُّسْفِرَةٌ', transliteration: 'musfirah', meaning: 'bright / shining' }
        ]
      },
      {
        id: '80-39',
        audio: getAudioUrl(80, 39),
        arabicFull: 'ضَاحِكَةٌ مُّسْتَبْشِرَةٌ',
        translation: 'Laughing, rejoicing at good news.',
        visual: 'laugh',
        lesson: 'Those who wept out of fear of Allah in the world will be the ones laughing in the Hereafter.',
        words: [
          { id: 'ab39-1', arabic: 'ضَاحِكَةٌ', transliteration: 'Dahikah', meaning: 'Laughing' },
          { id: 'ab39-2', arabic: 'مُّسْتَبْشِرَةٌ', transliteration: 'mustabshirah', meaning: 'rejoicing' }
        ]
      },
      {
        id: '80-40',
        audio: getAudioUrl(80, 40),
        arabicFull: 'وَوُجُوهٌ يَوْمَئِذٍ عَلَيْهَا غَبَرَةٌ',
        translation: 'And [other] faces, that Day, will have upon them dust.',
        visual: 'dusty_face',
        lesson: 'The faces of the wicked will be covered in the dust of shame, exhaustion, and regret.',
        words: [
          { id: 'ab40-1', arabic: 'وَوُجُوهٌ', transliteration: 'Wa-wujuhun', meaning: 'And faces' },
          { id: 'ab40-2', arabic: 'عَلَيْهَا', transliteration: 'alayha', meaning: 'upon them' },
          { id: 'ab40-3', arabic: 'غَبَرَةٌ', transliteration: 'ghabarah', meaning: 'dust' }
        ]
      },
      {
        id: '80-41',
        audio: getAudioUrl(80, 41),
        arabicFull: 'تَرْهَقُهَا قَتَرَةٌ',
        translation: 'Darkness will cover them.',
        visual: 'darkness',
        lesson: 'A deep, black gloom of despair will overwhelm their expressions.',
        words: [
          { id: 'ab41-1', arabic: 'تَرْهَقُهَا', transliteration: 'Tarhaquha', meaning: 'Will cover them' },
          { id: 'ab41-2', arabic: 'قَتَرَةٌ', transliteration: 'qatarah', meaning: 'darkness / gloom' }
        ]
      },
      {
        id: '80-42',
        audio: getAudioUrl(80, 42),
        arabicFull: 'أُولَٰئِكَ هُمُ الْكَفَرَةُ الْفُجَّارُ',
        translation: 'Those are the disbelievers, the wicked ones.',
        visual: 'wicked',
        lesson: 'They combine two destructive traits: disbelief in the heart, and wickedness in their actions.',
        words: [
          { id: 'ab42-1', arabic: 'أُولَٰئِكَ', transliteration: 'Ula-ika', meaning: 'Those' },
          { id: 'ab42-2', arabic: 'هُمُ', transliteration: 'humu', meaning: 'they' },
          { id: 'ab42-3', arabic: 'الْكَفَرَةُ', transliteration: 'al-kafarah', meaning: 'the disbelievers' },
          { id: 'ab42-4', arabic: 'الْفُجَّارُ', transliteration: 'al-fujjar', meaning: 'the wicked' }
        ]
      }
    ]
  },

// --- 79. AN-NAZI'AT (Uses 'Zap' & 'blue') ---
  {
    id: 'naziat',
    number: 79,
    title: 'An-Nazi\'at',
    meaning: 'Those who Extract',
    story: 'Allah swears by the angels of death—those who tear out the souls of the wicked violently, and those who draw out the souls of the believers gently. It then transitions to the story of Pharaoh, the most arrogant man on earth, to prove that Allah\'s grip is inescapable.',
    color: 'blue',
    themeGradient: 'from-blue-600 to-indigo-800',
    iconName: 'Zap',
    totalVerses: 46,
    levels: [
      {
        id: '79-1',
        audio: getAudioUrl(79, 1),
        arabicFull: 'وَالنَّازِعَاتِ غَرْقًا',
        translation: 'By those [angels] who extract with violence',
        visual: 'extract',
        lesson: 'The souls of the corrupt will be painfully dragged out, like a thorny branch pulled through wet wool.',
        words: [
          { id: 'nz1-1', arabic: 'وَ', transliteration: 'Wa', meaning: 'By (oath)' },
          { id: 'nz1-2', arabic: 'النَّازِعَاتِ', transliteration: 'An-nazi-ati', meaning: 'Those who extract' },
          { id: 'nz1-3', arabic: 'غَرْقًا', transliteration: 'Gharqan', meaning: 'violently' }
        ]
      },
      {
        id: '79-2',
        audio: getAudioUrl(79, 2),
        arabicFull: 'وَالنَّاشِطَاتِ نَشْطًا',
        translation: 'And [by] those who remove with ease',
        visual: 'ease',
        lesson: 'The souls of believers will slip out easily and peacefully, like a drop of water slipping from the mouth of a jug.',
        words: [
          { id: 'nz2-1', arabic: 'وَ', transliteration: 'Wa', meaning: 'And by' },
          { id: 'nz2-2', arabic: 'النَّاشِطَاتِ', transliteration: 'An-nashitati', meaning: 'Those who remove' },
          { id: 'nz2-3', arabic: 'نَشْطًا', transliteration: 'Nashtan', meaning: 'gently' }
        ]
      },
      {
        id: '79-3',
        audio: getAudioUrl(79, 3),
        arabicFull: 'وَالسَّابِحَاتِ سَبْحًا',
        translation: 'And [by] those who glide [as if] swimming',
        visual: 'glide',
        lesson: 'Angels travel across the universe at immense speeds, smoothly following Allah’s orders.',
        words: [
          { id: 'nz3-1', arabic: 'وَ', transliteration: 'Wa', meaning: 'And by' },
          { id: 'nz3-2', arabic: 'السَّابِحَاتِ', transliteration: 'as-sabihati', meaning: 'those who glide' },
          { id: 'nz3-3', arabic: 'سَبْحًا', transliteration: 'sab-han', meaning: 'as if swimming' }
        ]
      },
      {
        id: '79-4',
        audio: getAudioUrl(79, 4),
        arabicFull: 'فَالسَّابِقَاتِ سَبْقًا',
        translation: 'And those who race each other in a race',
        visual: 'race',
        lesson: 'The angels compete and race one another to perfectly execute the commands of their Lord.',
        words: [
          { id: 'nz4-1', arabic: 'فَالسَّابِقَاتِ', transliteration: 'Fas-sabiqati', meaning: 'And those who race' },
          { id: 'nz4-2', arabic: 'سَبْقًا', transliteration: 'sab-qan', meaning: 'fast / ahead' }
        ]
      },
      {
        id: '79-5',
        audio: getAudioUrl(79, 5),
        arabicFull: 'فَالْمُدَبِّرَاتِ أَمْرًا',
        translation: 'And those who arrange [each] matter.',
        visual: 'arrange',
        lesson: 'Angels manage the events of the universe, from sending rain to recording the deeds of living things.',
        words: [
          { id: 'nz5-1', arabic: 'فَالْمُدَبِّرَاتِ', transliteration: 'Fal-mudabbirati', meaning: 'And those who arrange' },
          { id: 'nz5-2', arabic: 'أَمْرًا', transliteration: 'amran', meaning: 'a matter' }
        ]
      },
      {
        id: '79-6',
        audio: getAudioUrl(79, 6),
        arabicFull: 'يَوْمَ تَرْجُفُ الرَّاجِفَةُ',
        translation: 'On the Day the blast [of the Horn] will shake [the world],',
        visual: 'shake',
        lesson: 'The first blast of the trumpet will violently shake the entire earth, ending all life.',
        words: [
          { id: 'nz6-1', arabic: 'يَوْمَ', transliteration: 'Yawma', meaning: 'The Day' },
          { id: 'nz6-2', arabic: 'تَرْجُفُ', transliteration: 'tar-jufu', meaning: 'will shake' },
          { id: 'nz6-3', arabic: 'الرَّاجِفَةُ', transliteration: 'ar-rajifah', meaning: 'the first blast' }
        ]
      },
      {
        id: '79-7',
        audio: getAudioUrl(79, 7),
        arabicFull: 'تَتْبَعُهَا الرَّادِفَةُ',
        translation: 'Followed by the subsequent [blast].',
        visual: 'blast_2',
        lesson: 'There are two major sounds: the first ends all life, and the second brings all life back.',
        words: [
          { id: 'nz7-1', arabic: 'تَتْبَعُهَا', transliteration: 'Tatba-uha', meaning: 'Follows it' },
          { id: 'nz7-2', arabic: 'الرَّادِفَةُ', transliteration: 'ar-radifah', meaning: 'the second blast' }
        ]
      },
      {
        id: '79-8',
        audio: getAudioUrl(79, 8),
        arabicFull: 'قُلُوبٌ يَوْمَئِذٍ وَاجِفَةٌ',
        translation: 'Hearts, that Day, will palpitate [with fear],',
        visual: 'pounding_heart',
        lesson: 'The terror of the resurrection will cause hearts to physically throb and pound uncontrollably.',
        words: [
          { id: 'nz8-1', arabic: 'قُلُوبٌ', transliteration: 'Qulubun', meaning: 'Hearts' },
          { id: 'nz8-2', arabic: 'يَوْمَئِذٍ', transliteration: 'yawma-idhin', meaning: 'that day' },
          { id: 'nz8-3', arabic: 'وَاجِفَةٌ', transliteration: 'wajifah', meaning: 'throbbing with fear' }
        ]
      },
      {
        id: '79-9',
        audio: getAudioUrl(79, 9),
        arabicFull: 'أَبْصَارُهَا خَاشِعَةٌ',
        translation: 'Their eyes humbled.',
        visual: 'eyes_down',
        lesson: 'Arrogant people who used to look down on others will now have their own eyes cast down in absolute shame.',
        words: [
          { id: 'nz9-1', arabic: 'أَبْصَارُهَا', transliteration: 'Absaruha', meaning: 'Their eyes' },
          { id: 'nz9-2', arabic: 'خَاشِعَةٌ', transliteration: 'khashi-ah', meaning: 'humbled / downcast' }
        ]
      },
      {
        id: '79-10',
        audio: getAudioUrl(79, 10),
        arabicFull: 'يَقُولُونَ أَإِنَّا لَمَرْدُودُونَ فِي الْحَافِرَةِ',
        translation: 'They [now] say, "Will we indeed be returned to [our] former state [of life]?"',
        visual: 'mockery',
        lesson: 'In the world, the disbelievers used to laugh and mock the idea of resurrection.',
        words: [
          { id: 'nz10-1', arabic: 'يَقُولُونَ', transliteration: 'Yaquluna', meaning: 'They say' },
          { id: 'nz10-2', arabic: 'أَإِنَّا', transliteration: 'a-inna', meaning: 'are we really' },
          { id: 'nz10-3', arabic: 'لَمَرْدُودُونَ', transliteration: 'la-mardudun', meaning: 'to be returned' },
          { id: 'nz10-4', arabic: 'فِي الْحَافِرَةِ', transliteration: 'fil hafirah', meaning: 'to the former state' }
        ]
      },
      {
        id: '79-11',
        audio: getAudioUrl(79, 11),
        arabicFull: 'أَإِذَا كُنَّا عِظَامًا نَّخِرَةً',
        translation: 'Even when we are decayed bones?',
        visual: 'bones',
        lesson: 'They thought it was biologically impossible to be rebuilt after their skeletons had turned to dust.',
        words: [
          { id: 'nz11-1', arabic: 'أَإِذَا', transliteration: 'A-idha', meaning: 'Even when' },
          { id: 'nz11-2', arabic: 'كُنَّا', transliteration: 'kunna', meaning: 'we are' },
          { id: 'nz11-3', arabic: 'عِظَامًا', transliteration: 'izaman', meaning: 'bones' },
          { id: 'nz11-4', arabic: 'نَّخِرَةً', transliteration: 'nakhirah', meaning: 'decayed / hollow' }
        ]
      },
      {
        id: '79-12',
        audio: getAudioUrl(79, 12),
        arabicFull: 'قَالُوا تِلْكَ إِذًا كَرَّةٌ خَاسِرَةٌ',
        translation: 'They say, "That, then, would be a losing return."',
        visual: 'regret',
        lesson: 'They sarcastically joked that if resurrection *were* real, they would be losers. They didn\'t realize how right they were.',
        words: [
          { id: 'nz12-1', arabic: 'قَالُوا', transliteration: 'Qalu', meaning: 'They say' },
          { id: 'nz12-2', arabic: 'تِلْكَ', transliteration: 'tilka', meaning: 'that' },
          { id: 'nz12-3', arabic: 'إِذًا', transliteration: 'idhan', meaning: 'then' },
          { id: 'nz12-4', arabic: 'كَرَّةٌ', transliteration: 'karratun', meaning: 'a return' },
          { id: 'nz12-5', arabic: 'خَاسِرَةٌ', transliteration: 'khasirah', meaning: 'losing' }
        ]
      },
      {
        id: '79-13',
        audio: getAudioUrl(79, 13),
        arabicFull: 'فَإِنَّمَا هِيَ زَجْرَةٌ وَاحِدَةٌ',
        translation: 'It will be but one shout,',
        visual: 'shout',
        lesson: 'It won\'t take a long, complicated process to rebuild humanity; it takes just a single, powerful sound.',
        words: [
          { id: 'nz13-1', arabic: 'فَإِنَّمَا', transliteration: 'Fa-innama', meaning: 'So only' },
          { id: 'nz13-2', arabic: 'هِيَ', transliteration: 'hiya', meaning: 'it is' },
          { id: 'nz13-3', arabic: 'زَجْرَةٌ', transliteration: 'zajratun', meaning: 'a shout' },
          { id: 'nz13-4', arabic: 'وَاحِدَةٌ', transliteration: 'wahidah', meaning: 'single' }
        ]
      },
      {
        id: '79-14',
        audio: getAudioUrl(79, 14),
        arabicFull: 'فَإِذَا هُم بِالسَّاهِرَةِ',
        translation: 'And suddenly they will be [awake] upon the earth\'s surface.',
        visual: 'awake',
        lesson: 'In a fraction of a second, the entire human race will find themselves fully awake and gathered above ground.',
        words: [
          { id: 'nz14-1', arabic: 'فَإِذَا', transliteration: 'Fa-idha', meaning: 'Then suddenly' },
          { id: 'nz14-2', arabic: 'هُم', transliteration: 'hum', meaning: 'they' },
          { id: 'nz14-3', arabic: 'بِالسَّاهِرَةِ', transliteration: 'bis-sahirah', meaning: 'on the earth surface' }
        ]
      },
      {
        id: '79-15',
        audio: getAudioUrl(79, 15),
        arabicFull: 'هَلْ أَتَاكَ حَدِيثُ مُوسَىٰ',
        translation: 'Has there reached you the story of Moses?',
        visual: 'musa',
        lesson: 'Allah tells the story of Musa to comfort the Prophet Muhammad (SAW) and warn the arrogant leaders of Makkah.',
        words: [
          { id: 'nz15-1', arabic: 'هَلْ', transliteration: 'Hal', meaning: 'Has' },
          { id: 'nz15-2', arabic: 'أَتَاكَ', transliteration: 'ataka', meaning: 'reached you' },
          { id: 'nz15-3', arabic: 'حَدِيثُ', transliteration: 'hadithu', meaning: 'the story' },
          { id: 'nz15-4', arabic: 'مُوسَىٰ', transliteration: 'Musa', meaning: 'of Moses' }
        ]
      },
      {
        id: '79-16',
        audio: getAudioUrl(79, 16),
        arabicFull: 'إِذْ نَادَاهُ رَبُّهُ بِالْوَادِ الْمُقَدَّسِ طُوًى',
        translation: 'When his Lord called to him in the sacred valley of Tuwa,',
        visual: 'tuwa',
        lesson: 'The divine conversation began in a highly honored and blessed location.',
        words: [
          { id: 'nz16-1', arabic: 'إِذْ', transliteration: 'Idh', meaning: 'When' },
          { id: 'nz16-2', arabic: 'نَادَاهُ', transliteration: 'nadahu', meaning: 'called him' },
          { id: 'nz16-3', arabic: 'رَبُّهُ', transliteration: 'rabbuhu', meaning: 'his Lord' },
          { id: 'nz16-4', arabic: 'بِالْوَادِ', transliteration: 'bil-wadi', meaning: 'in the valley' },
          { id: 'nz16-5', arabic: 'الْمُقَدَّسِ', transliteration: 'al-muqaddasi', meaning: 'the sacred' },
          { id: 'nz16-6', arabic: 'طُوًى', transliteration: 'Tuwa', meaning: 'Tuwa' }
        ]
      },
      {
        id: '79-17',
        audio: getAudioUrl(79, 17),
        arabicFull: 'اذْهَبْ إِلَىٰ فِرْعَوْنَ إِنَّهُ طَغَىٰ',
        translation: '"Go to Pharaoh. Indeed, he has transgressed.',
        visual: 'go',
        lesson: 'Pharaoh was the ultimate tyrant, having crossed every single moral boundary.',
        words: [
          { id: 'nz17-1', arabic: 'اذْهَبْ', transliteration: 'Idhhab', meaning: 'Go' },
          { id: 'nz17-2', arabic: 'إِلَىٰ', transliteration: 'ila', meaning: 'to' },
          { id: 'nz17-3', arabic: 'فِرْعَوْنَ', transliteration: 'Fir-awna', meaning: 'Pharaoh' },
          { id: 'nz17-4', arabic: 'إِنَّهُ', transliteration: 'innahu', meaning: 'indeed he' },
          { id: 'nz17-5', arabic: 'طَغَىٰ', transliteration: 'tagha', meaning: 'has transgressed' }
        ]
      },
      {
        id: '79-18',
        audio: getAudioUrl(79, 18),
        arabicFull: 'فَقُلْ هَل لَّكَ إِلَىٰ أَن تَزَكَّىٰ',
        translation: 'And say to him, \'Would you [be willing to] purify yourself',
        visual: 'purify_pharaoh',
        lesson: 'Even to the worst tyrant, Pharaoh, Allah commanded Musa to speak gently and offer him a chance to purify his heart.',
        words: [
          { id: 'nz18-1', arabic: 'فَقُلْ', transliteration: 'Fa-qul', meaning: 'And say' },
          { id: 'nz18-2', arabic: 'هَل', transliteration: 'hal', meaning: 'is there' },
          { id: 'nz18-3', arabic: 'لَّكَ', transliteration: 'laka', meaning: 'to you' },
          { id: 'nz18-4', arabic: 'إِلَىٰ', transliteration: 'ila', meaning: 'towards' },
          { id: 'nz18-5', arabic: 'أَن', transliteration: 'an', meaning: 'that' },
          { id: 'nz18-6', arabic: 'تَزَكَّىٰ', transliteration: 'tazakka', meaning: 'you purify yourself' }
        ]
      },
      {
        id: '79-19',
        audio: getAudioUrl(79, 19),
        arabicFull: 'وَأَهْدِيَكَ إِلَىٰ رَبِّكَ فَتَخْشَىٰ',
        translation: 'And let me guide you to your Lord so you would fear [Him]?\'"',
        visual: 'guided_pharaoh',
        lesson: 'Knowledge and guidance lead directly to "Khashyah" (awe and fear of Allah).',
        words: [
          { id: 'nz19-1', arabic: 'وَأَهْدِيَكَ', transliteration: 'Wa-ahdiyaka', meaning: 'And let me guide you' },
          { id: 'nz19-2', arabic: 'إِلَىٰ', transliteration: 'ila', meaning: 'to' },
          { id: 'nz19-3', arabic: 'رَبِّكَ', transliteration: 'rabbika', meaning: 'your Lord' },
          { id: 'nz19-4', arabic: 'فَتَخْشَىٰ', transliteration: 'fa-takhsha', meaning: 'so you fear' }
        ]
      },
      {
        id: '79-20',
        audio: getAudioUrl(79, 20),
        arabicFull: 'فَأَرَاهُ الْآيَةَ الْكُبْرَىٰ',
        translation: 'And he showed him the greatest sign,',
        visual: 'miracle',
        lesson: 'Musa proved his prophethood by showing Pharaoh undeniable miracles, like his staff turning into a giant snake.',
        words: [
          { id: 'nz20-1', arabic: 'فَأَرَاهُ', transliteration: 'Fa-arahu', meaning: 'Then he showed him' },
          { id: 'nz20-2', arabic: 'الْآيَةَ', transliteration: 'al-ayata', meaning: 'the sign' },
          { id: 'nz20-3', arabic: 'الْكُبْرَىٰ', transliteration: 'al-kubra', meaning: 'the greatest' }
        ]
      },
      {
        id: '79-21',
        audio: getAudioUrl(79, 21),
        arabicFull: 'فَكَذَّبَ وَعَصَىٰ',
        translation: 'But Pharaoh denied and disobeyed.',
        visual: 'disobey',
        lesson: 'Despite seeing undeniable proof, his ego and love for power caused him to reject it immediately.',
        words: [
          { id: 'nz21-1', arabic: 'فَكَذَّبَ', transliteration: 'Fa-kadhdhaba', meaning: 'But he denied' },
          { id: 'nz21-2', arabic: 'وَعَصَىٰ', transliteration: 'wa-asa', meaning: 'and disobeyed' }
        ]
      },
      {
        id: '79-22',
        audio: getAudioUrl(79, 22),
        arabicFull: 'ثُمَّ أَدْبَرَ يَسْعَىٰ',
        translation: 'Then he turned his back, striving [against Allah].',
        visual: 'turn_back',
        lesson: 'He didn\'t just passively deny; he actively plotted to destroy Musa and the believers.',
        words: [
          { id: 'nz22-1', arabic: 'ثُمَّ', transliteration: 'Thumma', meaning: 'Then' },
          { id: 'nz22-2', arabic: 'أَدْبَرَ', transliteration: 'adbara', meaning: 'he turned his back' },
          { id: 'nz22-3', arabic: 'يَسْعَىٰ', transliteration: 'yas-aa', meaning: 'striving' }
        ]
      },
      {
        id: '79-23',
        audio: getAudioUrl(79, 23),
        arabicFull: 'فَحَشَرَ فَنَادَىٰ',
        translation: 'And he gathered [his people] and called out',
        visual: 'gather',
        lesson: 'He summoned his massive armies and citizens to make a public declaration of his power.',
        words: [
          { id: 'nz23-1', arabic: 'فَحَشَرَ', transliteration: 'Fa-hashara', meaning: 'Then he gathered' },
          { id: 'nz23-2', arabic: 'فَنَادَىٰ', transliteration: 'fa-nada', meaning: 'and called out' }
        ]
      },
      {
        id: '79-24',
        audio: getAudioUrl(79, 24),
        arabicFull: 'فَقَالَ أَنَا رَبُّكُمُ الْأَعْلَىٰ',
        translation: 'And said, "I am your most exalted lord."',
        visual: 'god_complex',
        lesson: 'Pharaoh’s arrogance reached its absolute peak when he literally claimed to be a god.',
        words: [
          { id: 'nz24-1', arabic: 'فَقَالَ', transliteration: 'Fa-qala', meaning: 'And said' },
          { id: 'nz24-2', arabic: 'أَنَا', transliteration: 'ana', meaning: 'I' },
          { id: 'nz24-3', arabic: 'رَبُّكُمُ', transliteration: 'rabbukumu', meaning: 'your lord' },
          { id: 'nz24-4', arabic: 'الْأَعْلَىٰ', transliteration: 'al-ala', meaning: 'the most high' }
        ]
      },
      {
        id: '79-25',
        audio: getAudioUrl(79, 25),
        arabicFull: 'فَأَخَذَهُ اللَّهُ نَكَالَ الْآخِرَةِ وَالْأُولَىٰ',
        translation: 'So Allah seized him with exemplary punishment for the last and the first [transgressions].',
        visual: 'seized',
        lesson: 'Because of his extreme arrogance, Allah made his destruction (drowning in the sea) an unforgettable example for all history.',
        words: [
          { id: 'nz25-1', arabic: 'فَأَخَذَهُ', transliteration: 'Fa-akhadhahu', meaning: 'So seized him' },
          { id: 'nz25-2', arabic: 'اللَّهُ', transliteration: 'Allahu', meaning: 'Allah' },
          { id: 'nz25-3', arabic: 'نَكَالَ', transliteration: 'nakala', meaning: 'punishment' },
          { id: 'nz25-4', arabic: 'الْآخِرَةِ', transliteration: 'al-akhirati', meaning: 'of the hereafter' },
          { id: 'nz25-5', arabic: 'وَالْأُولَىٰ', transliteration: 'wal ula', meaning: 'and the first (life)' }
        ]
      },
      {
        id: '79-26',
        audio: getAudioUrl(79, 26),
        arabicFull: 'إِنَّ فِي ذَٰلِكَ لَعِبْرَةً لِّمَن يَخْشَىٰ',
        translation: 'Indeed in that is a lesson for whoever would fear [Allah].',
        visual: 'lesson',
        lesson: 'If the most powerful human in history could be destroyed so easily, we should remain humble.',
        words: [
          { id: 'nz26-1', arabic: 'إِنَّ', transliteration: 'Inna', meaning: 'Indeed' },
          { id: 'nz26-2', arabic: 'فِي ذَٰلِكَ', transliteration: 'fi dhalika', meaning: 'in that' },
          { id: 'nz26-3', arabic: 'لَعِبْرَةً', transliteration: 'la-ibratan', meaning: 'is a lesson' },
          { id: 'nz26-4', arabic: 'لِّمَن', transliteration: 'liman', meaning: 'for who' },
          { id: 'nz26-5', arabic: 'يَخْشَىٰ', transliteration: 'yakhsha', meaning: 'fears' }
        ]
      },
      {
        id: '79-27',
        audio: getAudioUrl(79, 27),
        arabicFull: 'أَأَنتُمْ أَشَدُّ خَلْقًا أَمِ السَّمَاءُ ۚ بَنَاهَا',
        translation: 'Are you a more difficult creation or is the sky? Allah constructed it.',
        visual: 'sky_build',
        lesson: 'A logical argument: recreating a small human is extremely easy compared to creating the massive, infinite universe.',
        words: [
          { id: 'nz27-1', arabic: 'أَأَنتُمْ', transliteration: 'A-antum', meaning: 'Are you' },
          { id: 'nz27-2', arabic: 'أَشَدُّ', transliteration: 'ashaddu', meaning: 'more difficult' },
          { id: 'nz27-3', arabic: 'خَلْقًا', transliteration: 'khalqan', meaning: 'in creation' },
          { id: 'nz27-4', arabic: 'أَمِ السَّمَاءُ', transliteration: 'amis samau', meaning: 'or the sky' },
          { id: 'nz27-5', arabic: 'بَنَاهَا', transliteration: 'banaha', meaning: 'He built it' }
        ]
      },
      {
        id: '79-28',
        audio: getAudioUrl(79, 28),
        arabicFull: 'رَفَعَ سَمْكَهَا فَسَوَّاهَا',
        translation: 'He raised its ceiling and proportioned it.',
        visual: 'proportion',
        lesson: 'The sky is perfectly balanced without any visible pillars holding it up.',
        words: [
          { id: 'nz28-1', arabic: 'رَفَعَ', transliteration: 'Rafa-a', meaning: 'He raised' },
          { id: 'nz28-2', arabic: 'سَمْكَهَا', transliteration: 'samkaha', meaning: 'its height' },
          { id: 'nz28-3', arabic: 'فَسَوَّاهَا', transliteration: 'fa-sawwaha', meaning: 'and proportioned it' }
        ]
      },
      {
        id: '79-29',
        audio: getAudioUrl(79, 29),
        arabicFull: 'وَأَغْطَشَ لَيْلَهَا وَأَخْرَجَ ضُحَاهَا',
        translation: 'And He darkened its night and extracted its brightness.',
        visual: 'day_night',
        lesson: 'He controls the perfect rotation of the dark night and the brilliant morning sun.',
        words: [
          { id: 'nz29-1', arabic: 'وَأَغْطَشَ', transliteration: 'Wa-aghtasha', meaning: 'And He darkened' },
          { id: 'nz29-2', arabic: 'لَيْلَهَا', transliteration: 'laylaha', meaning: 'its night' },
          { id: 'nz29-3', arabic: 'وَأَخْرَجَ', transliteration: 'wa-akhraja', meaning: 'and extracted' },
          { id: 'nz29-4', arabic: 'ضُحَاهَا', transliteration: 'duhaha', meaning: 'its morning light' }
        ]
      },
      {
        id: '79-30',
        audio: getAudioUrl(79, 30),
        arabicFull: 'وَالْأَرْضَ بَعْدَ ذَٰلِكَ دَحَاهَا',
        translation: 'And after that He spread the earth.',
        visual: 'spread_earth',
        lesson: 'He smoothed out the earth, making it a perfect, habitable home for humanity.',
        words: [
          { id: 'nz30-1', arabic: 'وَالْأَرْضَ', transliteration: 'Wal-arda', meaning: 'And the earth' },
          { id: 'nz30-2', arabic: 'بَعْدَ ذَٰلِكَ', transliteration: 'ba-da dhalika', meaning: 'after that' },
          { id: 'nz30-3', arabic: 'دَحَاهَا', transliteration: 'dahaha', meaning: 'He spread it' }
        ]
      },
      {
        id: '79-31',
        audio: getAudioUrl(79, 31),
        arabicFull: 'أَخْرَجَ مِنْهَا مَاءَهَا وَمَرْعَاهَا',
        translation: 'He brought forth from it its water and its pasture,',
        visual: 'water',
        lesson: 'Providing the two most essential things for life: drinking water and food/vegetation.',
        words: [
          { id: 'nz31-1', arabic: 'أَخْرَجَ', transliteration: 'Akhraja', meaning: 'He brought out' },
          { id: 'nz31-2', arabic: 'مِنْهَا', transliteration: 'minha', meaning: 'from it' },
          { id: 'nz31-3', arabic: 'مَاءَهَا', transliteration: 'ma-aha', meaning: 'its water' },
          { id: 'nz31-4', arabic: 'وَمَرْعَاهَا', transliteration: 'wa-mar-aha', meaning: 'and its pasture' }
        ]
      },
      {
        id: '79-32',
        audio: getAudioUrl(79, 32),
        arabicFull: 'وَالْجِبَالَ أَرْسَاهَا',
        translation: 'And the mountains He set firmly',
        visual: 'mountains',
        lesson: 'Mountains act as heavy pegs to keep the earth\'s crust stable so we don\'t feel constant earthquakes.',
        words: [
          { id: 'nz32-1', arabic: 'وَالْجِبَالَ', transliteration: 'Wal-jibala', meaning: 'And the mountains' },
          { id: 'nz32-2', arabic: 'أَرْسَاهَا', transliteration: 'arsaha', meaning: 'He fixed them' }
        ]
      },
      {
        id: '79-33',
        audio: getAudioUrl(79, 33),
        arabicFull: 'مَتَاعًا لَّكُمْ وَلِأَنْعَامِكُمْ',
        translation: 'As provision for you and your grazing livestock.',
        visual: 'provision',
        lesson: 'All of this incredible cosmic engineering was done simply to provide for you and your animals.',
        words: [
          { id: 'nz33-1', arabic: 'مَتَاعًا', transliteration: 'Mata-an', meaning: 'Provision' },
          { id: 'nz33-2', arabic: 'لَّكُمْ', transliteration: 'lakum', meaning: 'for you' },
          { id: 'nz33-3', arabic: 'وَلِأَنْعَامِكُمْ', transliteration: 'wa-li-an-amikum', meaning: 'and for your livestock' }
        ]
      },
      {
        id: '79-34',
        audio: getAudioUrl(79, 34),
        arabicFull: 'فَإِذَا جَاءَتِ الطَّامَّةُ الْكُبْرَىٰ',
        translation: 'But when there comes the greatest Overwhelming Calamity',
        visual: 'calamity',
        lesson: 'The "Tammah" is another name for Judgment Day because it overwhelms and drowns out all other disasters.',
        words: [
          { id: 'nz34-1', arabic: 'فَإِذَا جَاءَتِ', transliteration: 'Fa-idha ja-at', meaning: 'So when comes' },
          { id: 'nz34-2', arabic: 'الطَّامَّةُ', transliteration: 'at-tam-mah', meaning: 'the Calamity' },
          { id: 'nz34-3', arabic: 'الْكُبْرَىٰ', transliteration: 'al-kubra', meaning: 'the greatest' }
        ]
      },
      {
        id: '79-35',
        audio: getAudioUrl(79, 35),
        arabicFull: 'يَوْمَ يَتَذَكَّرُ الْإِنسَانُ مَا يَسْعَىٰ',
        translation: 'The Day when man will remember that for which he strove,',
        visual: 'remember',
        lesson: 'Every single thing you worked hard for in life will suddenly flash before your eyes.',
        words: [
          { id: 'nz35-1', arabic: 'يَوْمَ', transliteration: 'Yawma', meaning: 'The Day' },
          { id: 'nz35-2', arabic: 'يَتَذَكَّرُ', transliteration: 'yatadhakkaru', meaning: 'will remember' },
          { id: 'nz35-3', arabic: 'الْإِنسَانُ', transliteration: 'al-insanu', meaning: 'man' },
          { id: 'nz35-4', arabic: 'مَا يَسْعَىٰ', transliteration: 'ma yas-aa', meaning: 'what he strove for' }
        ]
      },
      {
        id: '79-36',
        audio: getAudioUrl(79, 36),
        arabicFull: 'وَبُرِّزَتِ الْجَحِيمُ لِمَن يَرَىٰ',
        translation: 'And Hellfire will be exposed for [all] those who see.',
        visual: 'exposed_hell',
        lesson: 'The reality of Hell will no longer be an unseen concept; it will be terrifyingly visible.',
        words: [
          { id: 'nz36-1', arabic: 'وَبُرِّزَتِ', transliteration: 'Wa-burrizati', meaning: 'And will be exposed' },
          { id: 'nz36-2', arabic: 'الْجَحِيمُ', transliteration: 'al-jahimu', meaning: 'the Hellfire' },
          { id: 'nz36-3', arabic: 'لِمَن يَرَىٰ', transliteration: 'liman yara', meaning: 'for those who see' }
        ]
      },
      {
        id: '79-37',
        audio: getAudioUrl(79, 37),
        arabicFull: 'فَأَمَّا مَن طَغَىٰ',
        translation: 'So as for he who transgressed',
        visual: 'rebel',
        lesson: 'Those who acted like Pharaoh, crossing the limits set by God.',
        words: [
          { id: 'nz37-1', arabic: 'فَأَمَّا', transliteration: 'Fa-amma', meaning: 'Then as for' },
          { id: 'nz37-2', arabic: 'مَن', transliteration: 'man', meaning: 'he who' },
          { id: 'nz37-3', arabic: 'طَغَىٰ', transliteration: 'tagha', meaning: 'transgressed' }
        ]
      },
      {
        id: '79-38',
        audio: getAudioUrl(79, 38),
        arabicFull: 'وَآثَرَ الْحَيَاةَ الدُّنْيَا',
        translation: 'And preferred the life of the world,',
        visual: 'prefer_world',
        lesson: 'Choosing temporary fun, status, and wealth over permanent success in the hereafter.',
        words: [
          { id: 'nz38-1', arabic: 'وَآثَرَ', transliteration: 'Wa-athara', meaning: 'And preferred' },
          { id: 'nz38-2', arabic: 'الْحَيَاةَ', transliteration: 'al-hayata', meaning: 'the life' },
          { id: 'nz38-3', arabic: 'الدُّنْيَا', transliteration: 'ad-dunya', meaning: 'of the world' }
        ]
      },
      {
        id: '79-39',
        audio: getAudioUrl(79, 39),
        arabicFull: 'فَإِنَّ الْجَحِيمَ هِيَ الْمَأْوَىٰ',
        translation: 'Then indeed, Hellfire will be [his] refuge.',
        visual: 'refuge_fire',
        lesson: 'Their final home will be the fire they used to deny.',
        words: [
          { id: 'nz39-1', arabic: 'فَإِنَّ', transliteration: 'Fa-inna', meaning: 'Then indeed' },
          { id: 'nz39-2', arabic: 'الْجَحِيمَ', transliteration: 'al-jahima', meaning: 'Hellfire' },
          { id: 'nz39-3', arabic: 'هِيَ الْمَأْوَىٰ', transliteration: 'hiyal ma-wa', meaning: 'is the refuge' }
        ]
      },
      {
        id: '79-40',
        audio: getAudioUrl(79, 40),
        arabicFull: 'وَأَمَّا مَنْ خَافَ مَقَامَ رَبِّهِ وَنَهَى النَّفْسَ عَنِ الْهَوَىٰ',
        translation: 'But as for he who feared the position of his Lord and prevented the soul from [unlawful] inclination,',
        visual: 'self_control',
        lesson: 'The secret to Jannah is two things: fearing Allah and saying "No" to your own bad desires.',
        words: [
          { id: 'nz40-1', arabic: 'وَأَمَّا مَنْ', transliteration: 'Wa-amma man', meaning: 'But as for who' },
          { id: 'nz40-2', arabic: 'خَافَ', transliteration: 'khafa', meaning: 'feared' },
          { id: 'nz40-3', arabic: 'مَقَامَ رَبِّهِ', transliteration: 'maqama rabbihi', meaning: 'standing before his Lord' },
          { id: 'nz40-4', arabic: 'وَنَهَى', transliteration: 'wa-naha', meaning: 'and prevented' },
          { id: 'nz40-5', arabic: 'النَّفْسَ', transliteration: 'an-nafsa', meaning: 'the soul' },
          { id: 'nz40-6', arabic: 'عَنِ الْهَوَىٰ', transliteration: 'anil hawa', meaning: 'from desire' }
        ]
      },
      {
        id: '79-41',
        audio: getAudioUrl(79, 41),
        arabicFull: 'فَإِنَّ الْجَنَّةَ هِيَ الْمَأْوَىٰ',
        translation: 'Then indeed, Paradise will be [his] refuge.',
        visual: 'paradise_refuge',
        lesson: 'Their self-control in the world is rewarded with the ultimate, eternal home of Paradise.',
        words: [
          { id: 'nz41-1', arabic: 'فَإِنَّ', transliteration: 'Fa-inna', meaning: 'Then indeed' },
          { id: 'nz41-2', arabic: 'الْجَنَّةَ', transliteration: 'al-jannata', meaning: 'Paradise' },
          { id: 'nz41-3', arabic: 'هِيَ الْمَأْوَىٰ', transliteration: 'hiyal ma-wa', meaning: 'is the refuge' }
        ]
      },
      {
        id: '79-42',
        audio: getAudioUrl(79, 42),
        arabicFull: 'يَسْأَلُونَكَ عَنِ السَّاعَةِ أَيَّانَ مُرْسَاهَا',
        translation: 'They ask you, [O Muhammad], about the Hour: when is its arrival?',
        visual: 'question_hour',
        lesson: 'Disbelievers constantly asked the Prophet to predict the exact date of the end of the world.',
        words: [
          { id: 'nz42-1', arabic: 'يَسْأَلُونَكَ', transliteration: 'Yas-alunaka', meaning: 'They ask you' },
          { id: 'nz42-2', arabic: 'عَنِ السَّاعَةِ', transliteration: 'anis sa-ati', meaning: 'about the Hour' },
          { id: 'nz42-3', arabic: 'أَيَّانَ', transliteration: 'ayyana', meaning: 'when is' },
          { id: 'nz42-4', arabic: 'مُرْسَاهَا', transliteration: 'mursaha', meaning: 'its arrival' }
        ]
      },
      {
        id: '79-43',
        audio: getAudioUrl(79, 43),
        arabicFull: 'فِيمَ أَنتَ مِن ذِكْرَاهَا',
        translation: 'In what [position] are you that you should mention it?',
        visual: 'no_info',
        lesson: 'Even the greatest Prophet does not possess the knowledge of when the world will end.',
        words: [
          { id: 'nz43-1', arabic: 'فِيمَ أَنتَ', transliteration: 'Fima anta', meaning: 'How are you' },
          { id: 'nz43-2', arabic: 'مِن ذِكْرَاهَا', transliteration: 'min dhikraha', meaning: 'to mention it' }
        ]
      },
      {
        id: '79-44',
        audio: getAudioUrl(79, 44),
        arabicFull: 'إِلَىٰ رَبِّكَ مُنتَهَاهَا',
        translation: 'To your Lord is its finality.',
        visual: 'allah_knows_hour',
        lesson: 'Only Allah holds the absolute, final knowledge of the Hour.',
        words: [
          { id: 'nz44-1', arabic: 'إِلَىٰ رَبِّكَ', transliteration: 'Ila rabbika', meaning: 'To your Lord' },
          { id: 'nz44-2', arabic: 'مُنتَهَاهَا', transliteration: 'muntahaha', meaning: 'is its final knowledge' }
        ]
      },
      {
        id: '79-45',
        audio: getAudioUrl(79, 45),
        arabicFull: 'إِنَّمَا أَنتَ مُنذِرُ مَن يَخْشَاهَا',
        translation: 'You are only a warner for those who fear it.',
        visual: 'warner',
        lesson: 'The Prophet’s job is to warn, but only those whose hearts have fear and respect will listen.',
        words: [
          { id: 'nz45-1', arabic: 'إِنَّمَا أَنتَ', transliteration: 'Innama anta', meaning: 'You are only' },
          { id: 'nz45-2', arabic: 'مُنذِرُ', transliteration: 'mundhiru', meaning: 'a warner' },
          { id: 'nz45-3', arabic: 'مَن يَخْشَاهَا', transliteration: 'man yakhshaha', meaning: 'for who fears it' }
        ]
      },
      {
        id: '79-46',
        audio: getAudioUrl(79, 46),
        arabicFull: 'كَأَنَّهُمْ يَوْمَ يَرَوْنَهَا لَمْ يَلْبَثُوا إِلَّا عَشِيَّةً أَوْ ضُحَاهَا',
        translation: 'It will be, on the Day they see it, as though they had not remained [in the world] except for an afternoon or a morning thereof.',
        visual: 'short_life',
        lesson: 'When the afterlife begins, your entire 80-year life on earth will feel like it only lasted for a few fleeting hours.',
        words: [
          { id: 'nz46-1', arabic: 'كَأَنَّهُمْ', transliteration: 'Ka-annahum', meaning: 'As if they' },
          { id: 'nz46-2', arabic: 'يَوْمَ يَرَوْنَهَا', transliteration: 'yawma yarawnaha', meaning: 'the day they see it' },
          { id: 'nz46-3', arabic: 'لَمْ يَلْبَثُوا', transliteration: 'lam yalbathu', meaning: 'had not stayed' },
          { id: 'nz46-4', arabic: 'إِلَّا عَشِيَّةً', transliteration: 'illa ashiyyatan', meaning: 'except an afternoon' },
          { id: 'nz46-5', arabic: 'أَوْ ضُحَاهَا', transliteration: 'aw duhaha', meaning: 'or its morning' }
        ]
      }
    ]
  },
  
  // --- 78. AN-NABA' (Uses 'Mountain' & 'emerald') ---
  {
    id: 'naba',
    number: 78,
    title: 'An-Naba\'',
    meaning: 'The Great News',
    story: 'This is the very first Surah of Juz 30 (Amma). The people of Makkah were mockingly asking each other about "The Great News" (the Resurrection). Allah responds by pointing to His incredible creations—making the earth a bed, the mountains as pegs, creating sleep, day, and night—as proof that the One who created all of this can easily recreate humans after death.',
    color: 'emerald',
    themeGradient: 'from-emerald-600 to-teal-800',
    iconName: 'Mountain',
    totalVerses: 40,
    levels: [
      {
        id: '78-1',
        audio: getAudioUrl(78, 1),
        arabicFull: 'عَمَّ يَتَسَاءَلُونَ',
        translation: 'About what are they asking one another?',
        visual: 'question',
        lesson: 'The Makkan disbelievers were arrogantly gossiping and debating whether Resurrection was actually real.',
        words: [
          { id: 'nb1-1', arabic: 'عَمَّ', transliteration: 'Amma', meaning: 'About what' },
          { id: 'nb1-2', arabic: 'يَتَسَاءَلُونَ', transliteration: 'Yatasa\'alun', meaning: 'Are they asking one another' }
        ],
        distractors: [{ id: 'nbd1', arabic: 'مُخْتَلِفُونَ', transliteration: 'Mukhtalifun' }]
      },
      {
        id: '78-2',
        audio: getAudioUrl(78, 2),
        arabicFull: 'عَنِ النَّبَإِ الْعَظِيمِ',
        translation: 'About the great news -',
        visual: 'news',
        lesson: '"An-Naba" implies news that is immense, life-changing, and absolutely guaranteed to happen.',
        words: [
          { id: 'nb2-1', arabic: 'عَنِ', transliteration: 'Ani', meaning: 'About' },
          { id: 'nb2-2', arabic: 'النَّبَإِ', transliteration: 'An-naba\'i', meaning: 'The news' },
          { id: 'nb2-3', arabic: 'الْعَظِيمِ', transliteration: 'Al-\'azim', meaning: 'The great / immense' }
        ]
      },
      {
        id: '78-3',
        audio: getAudioUrl(78, 3),
        arabicFull: 'الَّذِي هُمْ فِيهِ مُخْتَلِفُونَ',
        translation: 'That over which they are in disagreement.',
        visual: 'disagreement',
        lesson: 'Even among the disbelievers, they couldn\'t agree. Some thought death was the end, others believed in reincarnation.',
        words: [
          { id: 'nb3-1', arabic: 'الَّذِي', transliteration: 'Alladhi', meaning: 'That which' },
          { id: 'nb3-2', arabic: 'هُمْ', transliteration: 'Hum', meaning: 'They' },
          { id: 'nb3-3', arabic: 'فِيهِ', transliteration: 'Fihi', meaning: 'In it' },
          { id: 'nb3-4', arabic: 'مُخْتَلِفُونَ', transliteration: 'Mukhtalifun', meaning: 'Are in disagreement' }
        ]
      },
      {
        id: '78-4',
        audio: getAudioUrl(78, 4),
        arabicFull: 'كَلَّا سَيَعْلَمُونَ',
        translation: 'No! They are going to know.',
        visual: 'warning',
        lesson: 'A firm, sharp warning. The debate will end when they see it with their own eyes.',
        words: [
          { id: 'nb4-1', arabic: 'كَلَّا', transliteration: 'Kalla', meaning: 'No! (By no means)' },
          { id: 'nb4-2', arabic: 'سَيَعْلَمُونَ', transliteration: 'Saya\'lamun', meaning: 'They will know' }
        ]
      },
      {
        id: '78-5',
        audio: getAudioUrl(78, 5),
        arabicFull: 'ثُمَّ كَلَّا سَيَعْلَمُونَ',
        translation: 'Then, no! They are going to know.',
        visual: 'warning',
        lesson: 'Repeated for emphasis. The first realization is at death, the second is at the Resurrection.',
        words: [
          { id: 'nb5-1', arabic: 'ثُمَّ', transliteration: 'Thumma', meaning: 'Then' },
          { id: 'nb5-2', arabic: 'كَلَّا', transliteration: 'Kalla', meaning: 'No!' },
          { id: 'nb5-3', arabic: 'سَيَعْلَمُونَ', transliteration: 'Saya\'lamun', meaning: 'They will know' }
        ]
      },
      {
        id: '78-6',
        audio: getAudioUrl(78, 6),
        arabicFull: 'أَلَمْ نَجْعَلِ الْأَرْضَ مِهَادًا',
        translation: 'Have We not made the earth a resting place?',
        visual: 'earth',
        lesson: 'Allah shifts the argument: Look at the incredible design of the earth smoothed out for your survival.',
        words: [
          { id: 'nb6-1', arabic: 'أَلَمْ', transliteration: 'A-lam', meaning: 'Have not' },
          { id: 'nb6-2', arabic: 'نَجْعَلِ', transliteration: 'Naj\'ali', meaning: 'We made' },
          { id: 'nb6-3', arabic: 'الْأَرْضَ', transliteration: 'Al-arda', meaning: 'The earth' },
          { id: 'nb6-4', arabic: 'مِهَادًا', transliteration: 'Mihadan', meaning: 'A resting place / bed' }
        ]
      },
      {
        id: '78-7',
        audio: getAudioUrl(78, 7),
        arabicFull: 'وَالْجِبَالَ أَوْتَادًا',
        translation: 'And the mountains as pegs?',
        visual: 'mountain_peg',
        lesson: 'Just like a peg holds down a tent, mountains have deep roots that stabilize the earth\'s crust.',
        words: [
          { id: 'nb7-1', arabic: 'وَ', transliteration: 'Wa', meaning: 'And' },
          { id: 'nb7-2', arabic: 'الْجِبَالَ', transliteration: 'Al-jibala', meaning: 'The mountains' },
          { id: 'nb7-3', arabic: 'أَوْتَادًا', transliteration: 'Awtadan', meaning: 'As pegs' }
        ]
      },
      {
        id: '78-8',
        audio: getAudioUrl(78, 8),
        arabicFull: 'وَخَلَقْنَاكُمْ أَزْوَاجًا',
        translation: 'And We created you in pairs',
        visual: 'pairs',
        lesson: 'The beautiful design of human companionship, male and female, to find tranquility in one another.',
        words: [
          { id: 'nb8-1', arabic: 'وَ', transliteration: 'Wa', meaning: 'And' },
          { id: 'nb8-2', arabic: 'خَلَقْنَاكُمْ', transliteration: 'Khalaqnakum', meaning: 'We created you' },
          { id: 'nb8-3', arabic: 'أَزْوَاجًا', transliteration: 'Azwajan', meaning: 'In pairs' }
        ]
      },
      {
        id: '78-9',
        audio: getAudioUrl(78, 9),
        arabicFull: 'وَجَعَلْنَا نَوْمَكُمْ سُبَاتًا',
        translation: 'And made your sleep [a means for] rest',
        visual: 'sleep',
        lesson: 'Sleep is a daily "minor death" that Allah gives us to cut off our exhaustion and reset our bodies.',
        words: [
          { id: 'nb9-1', arabic: 'وَ', transliteration: 'Wa', meaning: 'And' },
          { id: 'nb9-2', arabic: 'جَعَلْنَا', transliteration: 'Ja\'alna', meaning: 'We made' },
          { id: 'nb9-3', arabic: 'نَوْمَكُمْ', transliteration: 'Nawmakum', meaning: 'Your sleep' },
          { id: 'nb9-4', arabic: 'سُبَاتًا', transliteration: 'Subatan', meaning: 'Rest / Cut-off' }
        ]
      },
      {
        id: '78-10',
        audio: getAudioUrl(78, 10),
        arabicFull: 'وَجَعَلْنَا اللَّيْلَ لِبَاسًا',
        translation: 'And made the night as clothing',
        visual: 'night_clothing',
        lesson: 'The darkness covers and protects the earth like a blanket or a garment.',
        words: [
          { id: 'nb10-1', arabic: 'وَ', transliteration: 'Wa', meaning: 'And' },
          { id: 'nb10-2', arabic: 'جَعَلْنَا', transliteration: 'Ja\'alna', meaning: 'We made' },
          { id: 'nb10-3', arabic: 'اللَّيْلَ', transliteration: 'Al-layla', meaning: 'The night' },
          { id: 'nb10-4', arabic: 'لِبَاسًا', transliteration: 'Libasan', meaning: 'Clothing / Covering' }
        ]
      },
      {
        id: '78-11',
        audio: getAudioUrl(78, 11),
        arabicFull: 'وَجَعَلْنَا النَّهَارَ مَعَاشًا',
        translation: 'And made the day for livelihood',
        visual: 'daylight',
        lesson: 'Daylight is perfectly designed for humans to seek provisions and work.',
        words: [
          { id: 'nb11-1', arabic: 'وَ', transliteration: 'Wa', meaning: 'And' },
          { id: 'nb11-2', arabic: 'جَعَلْنَا', transliteration: 'Ja\'alna', meaning: 'We made' },
          { id: 'nb11-3', arabic: 'النَّهَارَ', transliteration: 'An-nahara', meaning: 'The day' },
          { id: 'nb11-4', arabic: 'مَعَاشًا', transliteration: 'Ma\'ashan', meaning: 'For livelihood' }
        ]
      },
      {
        id: '78-12',
        audio: getAudioUrl(78, 12),
        arabicFull: 'وَبَنَيْنَا فَوْقَكُمْ سَبْعًا شِدَادًا',
        translation: 'And constructed above you seven strong [heavens]',
        visual: 'sky',
        lesson: 'The skies above us are built with immense strength and perfection, without any cracks.',
        words: [
          { id: 'nb12-1', arabic: 'وَ', transliteration: 'Wa', meaning: 'And' },
          { id: 'nb12-2', arabic: 'بَنَيْنَا', transliteration: 'Banayna', meaning: 'We constructed' },
          { id: 'nb12-3', arabic: 'فَوْقَكُمْ', transliteration: 'Fawqakum', meaning: 'Above you' },
          { id: 'nb12-4', arabic: 'سَبْعًا', transliteration: 'Sab\'an', meaning: 'Seven' },
          { id: 'nb12-5', arabic: 'شِدَادًا', transliteration: 'Shidadan', meaning: 'Strong' }
        ]
      },
      {
        id: '78-13',
        audio: getAudioUrl(78, 13),
        arabicFull: 'وَجَعَلْنَا سِرَاجًا وَهَّاجًا',
        translation: 'And made [therein] a burning lamp',
        visual: 'sun',
        lesson: 'The sun is described as a blazing lamp, providing both light and essential heat for life.',
        words: [
          { id: 'nb13-1', arabic: 'وَ', transliteration: 'Wa', meaning: 'And' },
          { id: 'nb13-2', arabic: 'جَعَلْنَا', transliteration: 'Ja\'alna', meaning: 'We made' },
          { id: 'nb13-3', arabic: 'سِرَاجًا', transliteration: 'Sirajan', meaning: 'A lamp' },
          { id: 'nb13-4', arabic: 'وَهَّاجًا', transliteration: 'Wahhajan', meaning: 'Burning / Blazing' }
        ]
      },
      {
        id: '78-14',
        audio: getAudioUrl(78, 14),
        arabicFull: 'وَأَنزَلْنَا مِنَ الْمُعْصِرَاتِ مَاءً ثَجَّاجًا',
        translation: 'And sent down, from the rain clouds, pouring water',
        visual: 'rain',
        lesson: 'The water cycle is a miracle of Allah, sending down abundant rain from squeezed clouds.',
        words: [
          { id: 'nb14-1', arabic: 'وَ', transliteration: 'Wa', meaning: 'And' },
          { id: 'nb14-2', arabic: 'أَنزَلْنَا', transliteration: 'Anzalna', meaning: 'We sent down' },
          { id: 'nb14-3', arabic: 'مِنَ', transliteration: 'Mina', meaning: 'From' },
          { id: 'nb14-4', arabic: 'الْمُعْصِرَاتِ', transliteration: 'Al-mu\'sirati', meaning: 'The rain clouds' },
          { id: 'nb14-5', arabic: 'مَاءً', transliteration: 'Ma\'an', meaning: 'Water' },
          { id: 'nb14-6', arabic: 'ثَجَّاجًا', transliteration: 'Thajjajan', meaning: 'Pouring abundantly' }
        ]
      },
      {
        id: '78-15',
        audio: getAudioUrl(78, 15),
        arabicFull: 'لِّنُخْرِجَ بِهِ حَبًّا وَنَبَاتًا',
        translation: 'That We may bring forth thereby grain and vegetation',
        visual: 'plants',
        lesson: 'Water brings dead earth back to life, producing the food that sustains us.',
        words: [
          { id: 'nb15-1', arabic: 'لِّنُخْرِجَ', transliteration: 'Li-nukhrija', meaning: 'That We may bring forth' },
          { id: 'nb15-2', arabic: 'بِهِ', transliteration: 'Bihi', meaning: 'Thereby / with it' },
          { id: 'nb15-3', arabic: 'حَبًّا', transliteration: 'Habban', meaning: 'Grain' },
          { id: 'nb15-4', arabic: 'وَ', transliteration: 'Wa', meaning: 'And' },
          { id: 'nb15-5', arabic: 'نَبَاتًا', transliteration: 'Nabatan', meaning: 'Vegetation' }
        ]
      },
      {
        id: '78-16',
        audio: getAudioUrl(78, 16),
        arabicFull: 'وَجَنَّاتٍ أَلْفَافًا',
        translation: 'And gardens of entwined growth.',
        visual: 'garden',
        lesson: 'Lush, thick gardens where branches intertwine—a sign of the richness of Allah\'s provision.',
        words: [
          { id: 'nb16-1', arabic: 'وَ', transliteration: 'Wa', meaning: 'And' },
          { id: 'nb16-2', arabic: 'جَنَّاتٍ', transliteration: 'Jannatin', meaning: 'Gardens' },
          { id: 'nb16-3', arabic: 'أَلْفَافًا', transliteration: 'Alfafan', meaning: 'Of entwined growth' }
        ]
      },
      {
        id: '78-17',
        audio: getAudioUrl(78, 17),
        arabicFull: 'إِنَّ يَوْمَ الْفَصْلِ كَانَ مِيقَاتًا',
        translation: 'Indeed, the Day of Judgement is an appointed time -',
        visual: 'judgment',
        lesson: 'After proving His power through creation, Allah returns to the main subject: The Day of Sorting.',
        words: [
          { id: 'nb17-1', arabic: 'إِنَّ', transliteration: 'Inna', meaning: 'Indeed' },
          { id: 'nb17-2', arabic: 'يَوْمَ', transliteration: 'Yawma', meaning: 'The Day' },
          { id: 'nb17-3', arabic: 'الْفَصْلِ', transliteration: 'Al-fasli', meaning: 'Of Judgement / Sorting' },
          { id: 'nb17-4', arabic: 'كَانَ', transliteration: 'Kana', meaning: 'Is' },
          { id: 'nb17-5', arabic: 'مِيقَاتًا', transliteration: 'Miqatan', meaning: 'An appointed time' }
        ]
      },
      {
        id: '78-18',
        audio: getAudioUrl(78, 18),
        arabicFull: 'يَوْمَ يُنفَخُ فِي الصُّورِ فَتَأْتُونَ أَفْوَاجًا',
        translation: 'The Day the Horn is blown and you will come forth in multitudes',
        visual: 'horn',
        lesson: 'The trumpet of Israfil will sound, and all generations of humanity will rise in massive crowds.',
        words: [
          { id: 'nb18-1', arabic: 'يَوْمَ', transliteration: 'Yawma', meaning: 'The Day' },
          { id: 'nb18-2', arabic: 'يُنفَخُ', transliteration: 'Yunfakhu', meaning: 'Is blown' },
          { id: 'nb18-3', arabic: 'فِي', transliteration: 'Fi', meaning: 'In' },
          { id: 'nb18-4', arabic: 'الصُّورِ', transliteration: 'As-suri', meaning: 'The Horn' },
          { id: 'nb18-5', arabic: 'فَتَأْتُونَ', transliteration: 'Fa-ta\'tuna', meaning: 'And you will come' },
          { id: 'nb18-6', arabic: 'أَفْوَاجًا', transliteration: 'Afwajan', meaning: 'In multitudes / crowds' }
        ]
      },
      {
        id: '78-19',
        audio: getAudioUrl(78, 19),
        arabicFull: 'وَفُتِحَتِ السَّمَاءُ فَكَانَتْ أَبْوَابًا',
        translation: 'And the heaven is opened and will become gateways',
        visual: 'sky_doors',
        lesson: 'The sky will open up for the descent of angels, appearing like numerous doors.',
        words: [
          { id: 'nb19-1', arabic: 'وَ', transliteration: 'Wa', meaning: 'And' },
          { id: 'nb19-2', arabic: 'فُتِحَتِ', transliteration: 'Futihati', meaning: 'Is opened' },
          { id: 'nb19-3', arabic: 'السَّمَاءُ', transliteration: 'As-sama\'u', meaning: 'The heaven / sky' },
          { id: 'nb19-4', arabic: 'فَكَانَتْ', transliteration: 'Fa-kanat', meaning: 'And will become' },
          { id: 'nb19-5', arabic: 'أَبْوَابًا', transliteration: 'Abwaban', meaning: 'Gateways / doors' }
        ]
      },
      {
        id: '78-20',
        audio: getAudioUrl(78, 20),
        arabicFull: 'وَسُيِّرَتِ الْجِبَالُ فَكَانَتْ سَرَابًا',
        translation: 'And the mountains are removed and will be [but] a mirage.',
        visual: 'mirage',
        lesson: 'The towering, solid mountains will be crushed to dust, looking like a mirage from afar.',
        words: [
          { id: 'nb20-1', arabic: 'وَ', transliteration: 'Wa', meaning: 'And' },
          { id: 'nb20-2', arabic: 'سُيِّرَتِ', transliteration: 'Suyyirati', meaning: 'Are removed' },
          { id: 'nb20-3', arabic: 'الْجِبَالُ', transliteration: 'Al-jibalu', meaning: 'The mountains' },
          { id: 'nb20-4', arabic: 'فَكَانَتْ', transliteration: 'Fa-kanat', meaning: 'And will be' },
          { id: 'nb20-5', arabic: 'سَرَابًا', transliteration: 'Saraban', meaning: 'A mirage' }
        ]
      },
      {
        id: '78-21',
        audio: getAudioUrl(78, 21),
        arabicFull: 'إِنَّ جَهَنَّمَ كَانَتْ مِرْصَادًا',
        translation: 'Indeed, Hell has been lying in wait',
        visual: 'hell_wait',
        lesson: 'Hell is portrayed as an entity actively watching and waiting in ambush for its inhabitants.',
        words: [
          { id: 'nb21-1', arabic: 'إِنَّ', transliteration: 'Inna', meaning: 'Indeed' },
          { id: 'nb21-2', arabic: 'جَهَنَّمَ', transliteration: 'Jahannama', meaning: 'Hell' },
          { id: 'nb21-3', arabic: 'كَانَتْ', transliteration: 'Kanat', meaning: 'Has been' },
          { id: 'nb21-4', arabic: 'مِرْصَادًا', transliteration: 'Mirsadan', meaning: 'Lying in wait / ambush' }
        ]
      },
      {
        id: '78-22',
        audio: getAudioUrl(78, 22),
        arabicFull: 'لِّلطَّاغِينَ مَآبًا',
        translation: 'For the transgressors, a place of return,',
        visual: 'return_bad',
        lesson: 'Transgressors (those who rebelled against Allah\'s limits) will find Hell as their final home.',
        words: [
          { id: 'nb22-1', arabic: 'لِّلطَّاغِينَ', transliteration: 'Lit-taghina', meaning: 'For the transgressors' },
          { id: 'nb22-2', arabic: 'مَآبًا', transliteration: 'Ma\'aban', meaning: 'A place of return' }
        ]
      },
      {
        id: '78-23',
        audio: getAudioUrl(78, 23),
        arabicFull: 'لَّابِثِينَ فِيهَا أَحْقَابًا',
        translation: 'In which they will remain for ages [unending].',
        visual: 'ages',
        lesson: '"Ahqab" refers to consecutive, endless eras of time.',
        words: [
          { id: 'nb23-1', arabic: 'لَّابِثِينَ', transliteration: 'Labithina', meaning: 'Remaining' },
          { id: 'nb23-2', arabic: 'فِيهَا', transliteration: 'Fiha', meaning: 'In it' },
          { id: 'nb23-3', arabic: 'أَحْقَابًا', transliteration: 'Ahqaban', meaning: 'For ages' }
        ]
      },
      {
        id: '78-24',
        audio: getAudioUrl(78, 24),
        arabicFull: 'لَّا يَذُوقُونَ فِيهَا بَرْدًا وَلَا شَرَابًا',
        translation: 'They will not taste therein [any] coolness or drink',
        visual: 'thirst',
        lesson: 'A terrifying depiction of Hell\'s torment: complete deprivation of any comfort or relief.',
        words: [
          { id: 'nb24-1', arabic: 'لَّا', transliteration: 'La', meaning: 'Not' },
          { id: 'nb24-2', arabic: 'يَذُوقُونَ', transliteration: 'Yadhuquna', meaning: 'They will taste' },
          { id: 'nb24-3', arabic: 'فِيهَا', transliteration: 'Fiha', meaning: 'Therein' },
          { id: 'nb24-4', arabic: 'بَرْدًا', transliteration: 'Bardan', meaning: 'Coolness' },
          { id: 'nb24-5', arabic: 'وَ', transliteration: 'Wa', meaning: 'And' },
          { id: 'nb24-6', arabic: 'لَا', transliteration: 'La', meaning: 'Not' },
          { id: 'nb24-7', arabic: 'شَرَابًا', transliteration: 'Sharaban', meaning: 'Drink' }
        ]
      },
      {
        id: '78-25',
        audio: getAudioUrl(78, 25),
        arabicFull: 'إِلَّا حَمِيمًا وَغَسَّاقًا',
        translation: 'Except scalding water and [foul] purulence -',
        visual: 'punishment_drink',
        lesson: 'The only things offered to drink are boiling liquids and putrid bodily fluids.',
        words: [
          { id: 'nb25-1', arabic: 'إِلَّا', transliteration: 'Illa', meaning: 'Except' },
          { id: 'nb25-2', arabic: 'حَمِيمًا', transliteration: 'Hamiman', meaning: 'Scalding water' },
          { id: 'nb25-3', arabic: 'وَ', transliteration: 'Wa', meaning: 'And' },
          { id: 'nb25-4', arabic: 'غَسَّاقًا', transliteration: 'Ghassaqan', meaning: 'Purulence / foul fluid' }
        ]
      },
      {
        id: '78-26',
        audio: getAudioUrl(78, 26),
        arabicFull: 'جَزَاءً وِفَاقًا',
        translation: 'An appropriate recompense.',
        visual: 'justice',
        lesson: 'This punishment is not unjust; it perfectly matches the severity of their rebellion against Allah.',
        words: [
          { id: 'nb26-1', arabic: 'جَزَاءً', transliteration: 'Jaza\'an', meaning: 'A recompense / reward' },
          { id: 'nb26-2', arabic: 'وِفَاقًا', transliteration: 'Wifaqan', meaning: 'Appropriate / fitting' }
        ]
      },
      {
        id: '78-27',
        audio: getAudioUrl(78, 27),
        arabicFull: 'إِنَّهُمْ كَانُوا لَا يَرْجُونَ حِسَابًا',
        translation: 'Indeed, they were not expecting an account',
        visual: 'no_account',
        lesson: 'The root of their crime: they lived as if they would never have to answer for their actions.',
        words: [
          { id: 'nb27-1', arabic: 'إِنَّهُمْ', transliteration: 'Innahum', meaning: 'Indeed they' },
          { id: 'nb27-2', arabic: 'كَانُوا', transliteration: 'Kanu', meaning: 'Were' },
          { id: 'nb27-3', arabic: 'لَا', transliteration: 'La', meaning: 'Not' },
          { id: 'nb27-4', arabic: 'يَرْجُونَ', transliteration: 'Yarjuna', meaning: 'Expecting / hoping' },
          { id: 'nb27-5', arabic: 'حِسَابًا', transliteration: 'Hisaban', meaning: 'An account / reckoning' }
        ]
      },
      {
        id: '78-28',
        audio: getAudioUrl(78, 28),
        arabicFull: 'وَكَذَّبُوا بِآيَاتِنَا كِذَّابًا',
        translation: 'And denied Our verses with [emphatic] denial.',
        visual: 'denial',
        lesson: 'They didn\'t just ignore the truth; they actively and stubbornly fought against it.',
        words: [
          { id: 'nb28-1', arabic: 'وَ', transliteration: 'Wa', meaning: 'And' },
          { id: 'nb28-2', arabic: 'كَذَّبُوا', transliteration: 'Kadh-dhabu', meaning: 'Denied' },
          { id: 'nb28-3', arabic: 'بِآيَاتِنَا', transliteration: 'Bi-ayatina', meaning: 'Our verses / signs' },
          { id: 'nb28-4', arabic: 'كِذَّابًا', transliteration: 'Kidh-dhaban', meaning: 'With emphatic denial' }
        ]
      },
      {
        id: '78-29',
        audio: getAudioUrl(78, 29),
        arabicFull: 'وَكُلَّ شَيْءٍ أَحْصَيْنَاهُ كِتَابًا',
        translation: 'But all things We have enumerated in writing.',
        visual: 'book_record',
        lesson: 'Every single deed, no matter how small, was perfectly recorded by the angels.',
        words: [
          { id: 'nb29-1', arabic: 'وَ', transliteration: 'Wa', meaning: 'And' },
          { id: 'nb29-2', arabic: 'كُلَّ', transliteration: 'Kulla', meaning: 'All / every' },
          { id: 'nb29-3', arabic: 'شَيْءٍ', transliteration: 'Shay\'in', meaning: 'Thing' },
          { id: 'nb29-4', arabic: 'أَحْصَيْنَاهُ', transliteration: 'Ahsaynahu', meaning: 'We have enumerated it' },
          { id: 'nb29-5', arabic: 'كِتَابًا', transliteration: 'Kitaban', meaning: 'In writing / a book' }
        ]
      },
      {
        id: '78-30',
        audio: getAudioUrl(78, 30),
        arabicFull: 'فَذُوقُوا فَلَن نَّزِيدَكُمْ إِلَّا عَذَابًا',
        translation: '"So taste [the penalty], and never will We increase you except in torment."',
        visual: 'taste_penalty',
        lesson: 'A chilling verdict: their punishment will only increase as time goes on.',
        words: [
          { id: 'nb30-1', arabic: 'فَذُوقُوا', transliteration: 'Fa-dhuqu', meaning: 'So taste' },
          { id: 'nb30-2', arabic: 'فَلَن', transliteration: 'Fa-lan', meaning: 'And never will' },
          { id: 'nb30-3', arabic: 'نَّزِيدَكُمْ', transliteration: 'Nazidakum', meaning: 'We increase you' },
          { id: 'nb30-4', arabic: 'إِلَّا', transliteration: 'Illa', meaning: 'Except' },
          { id: 'nb30-5', arabic: 'عَذَابًا', transliteration: 'Adhaban', meaning: 'In torment' }
        ]
      },
      {
        id: '78-31',
        audio: getAudioUrl(78, 31),
        arabicFull: 'إِنَّ لِلْمُتَّقِينَ مَفَازًا',
        translation: 'Indeed, for the righteous is attainment -',
        visual: 'success',
        lesson: 'The Surah transitions to the beautiful reward of the Muttaqin (those who were mindful of Allah).',
        words: [
          { id: 'nb31-1', arabic: 'إِنَّ', transliteration: 'Inna', meaning: 'Indeed' },
          { id: 'nb31-2', arabic: 'لِلْمُتَّقِينَ', transliteration: 'Lil-muttaqina', meaning: 'For the righteous' },
          { id: 'nb31-3', arabic: 'مَفَازًا', transliteration: 'Mafazan', meaning: 'Attainment / success' }
        ]
      },
      {
        id: '78-32',
        audio: getAudioUrl(78, 32),
        arabicFull: 'حَدَائِقَ وَأَعْنَابًا',
        translation: 'Gardens and grapevines',
        visual: 'grapes',
        lesson: 'A depiction of Paradise filled with lush walled gardens and abundant, sweet fruits.',
        words: [
          { id: 'nb32-1', arabic: 'حَدَائِقَ', transliteration: 'Hada\'iqa', meaning: 'Gardens' },
          { id: 'nb32-2', arabic: 'وَ', transliteration: 'Wa', meaning: 'And' },
          { id: 'nb32-3', arabic: 'أَعْنَابًا', transliteration: 'A\'naban', meaning: 'Grapevines' }
        ]
      },
      {
        id: '78-33',
        audio: getAudioUrl(78, 33),
        arabicFull: 'وَكَوَاعِبَ أَتْرَابًا',
        translation: 'And full-breasted [companions] of equal age',
        visual: 'companions',
        lesson: 'The companions of Jannah are created in perfect youth and beauty.',
        words: [
          { id: 'nb33-1', arabic: 'وَ', transliteration: 'Wa', meaning: 'And' },
          { id: 'nb33-2', arabic: 'كَوَاعِبَ', transliteration: 'Kawa\'iba', meaning: 'Full-breasted companions' },
          { id: 'nb33-3', arabic: 'أَتْرَابًا', transliteration: 'Atraban', meaning: 'Of equal age' }
        ]
      },
      {
        id: '78-34',
        audio: getAudioUrl(78, 34),
        arabicFull: 'وَكَأْسًا دِهَاقًا',
        translation: 'And a full cup.',
        visual: 'cup',
        lesson: 'Cups of pure, delicious drink that are always full to the brim.',
        words: [
          { id: 'nb34-1', arabic: 'وَ', transliteration: 'Wa', meaning: 'And' },
          { id: 'nb34-2', arabic: 'كَأْسًا', transliteration: 'Ka\'san', meaning: 'A cup' },
          { id: 'nb34-3', arabic: 'دِهَاقًا', transliteration: 'Dihaqan', meaning: 'Full' }
        ]
      },
      {
        id: '78-35',
        audio: getAudioUrl(78, 35),
        arabicFull: 'لَّا يَسْمَعُونَ فِيهَا لَغْوًا وَلَا كِذَّابًا',
        translation: 'No ill speech will they hear therein or any falsehood -',
        visual: 'peace',
        lesson: 'Paradise is not just physical pleasure; it is psychological peace. No gossip, lying, or hurtful words exist there.',
        words: [
          { id: 'nb35-1', arabic: 'لَّا', transliteration: 'La', meaning: 'Not' },
          { id: 'nb35-2', arabic: 'يَسْمَعُونَ', transliteration: 'Yasma\'una', meaning: 'They will hear' },
          { id: 'nb35-3', arabic: 'فِيهَا', transliteration: 'Fiha', meaning: 'Therein' },
          { id: 'nb35-4', arabic: 'لَغْوًا', transliteration: 'Laghwan', meaning: 'Ill speech / vain talk' },
          { id: 'nb35-5', arabic: 'وَ', transliteration: 'Wa', meaning: 'And' },
          { id: 'nb35-6', arabic: 'لَا', transliteration: 'La', meaning: 'Not' },
          { id: 'nb35-7', arabic: 'كِذَّابًا', transliteration: 'Kidh-dhaban', meaning: 'Falsehood / lies' }
        ]
      },
      {
        id: '78-36',
        audio: getAudioUrl(78, 36),
        arabicFull: 'جَزَاءً مِّن رَّبِّكَ عَطَاءً حِسَابًا',
        translation: '[As] reward from your Lord, [a generous] gift [made due by] account,',
        visual: 'reward',
        lesson: 'This reward is a gift out of Allah\'s mercy, but it is precisely calculated to recognize their good deeds.',
        words: [
          { id: 'nb36-1', arabic: 'جَزَاءً', transliteration: 'Jaza\'an', meaning: 'A reward' },
          { id: 'nb36-2', arabic: 'مِّن', transliteration: 'Min', meaning: 'From' },
          { id: 'nb36-3', arabic: 'رَّبِّكَ', transliteration: 'Rabbika', meaning: 'Your Lord' },
          { id: 'nb36-4', arabic: 'عَطَاءً', transliteration: 'Ata\'an', meaning: 'A gift' },
          { id: 'nb36-5', arabic: 'حِسَابًا', transliteration: 'Hisaban', meaning: 'Sufficient / by account' }
        ]
      },
      {
        id: '78-37',
        audio: getAudioUrl(78, 37),
        arabicFull: 'رَّبِّ السَّمَاوَاتِ وَالْأَرْضِ وَمَا بَيْنَهُمَا الرَّحْمَٰنِ ۖ لَا يَمْلِكُونَ مِنْهُ خِطَابًا',
        translation: '[From] the Lord of the heavens and the earth and whatever is between them, the Most Merciful. They possess not from Him [authority for] speech.',
        visual: 'lord_mercy',
        lesson: 'Allah\'s majesty is so overwhelming that no one will dare speak on that Day without His permission.',
        words: [
          { id: 'nb37-1', arabic: 'رَّبِّ', transliteration: 'Rabbi', meaning: 'The Lord' },
          { id: 'nb37-2', arabic: 'السَّمَاوَاتِ', transliteration: 'As-samawati', meaning: 'Of the heavens' },
          { id: 'nb37-3', arabic: 'وَ', transliteration: 'Wa', meaning: 'And' },
          { id: 'nb37-4', arabic: 'الْأَرْضِ', transliteration: 'Al-ardi', meaning: 'The earth' },
          { id: 'nb37-5', arabic: 'وَمَا', transliteration: 'Wa-ma', meaning: 'And whatever' },
          { id: 'nb37-6', arabic: 'بَيْنَهُمَا', transliteration: 'Baynahuma', meaning: 'Is between them' },
          { id: 'nb37-7', arabic: 'الرَّحْمَٰنِ', transliteration: 'Ar-Rahmani', meaning: 'The Most Merciful' },
          { id: 'nb37-8', arabic: 'لَا', transliteration: 'La', meaning: 'Not' },
          { id: 'nb37-9', arabic: 'يَمْلِكُونَ', transliteration: 'Yamlikuna', meaning: 'They possess' },
          { id: 'nb37-10', arabic: 'مِنْهُ', transliteration: 'Minhu', meaning: 'From Him' },
          { id: 'nb37-11', arabic: 'خِطَابًا', transliteration: 'Khitaban', meaning: 'Speech / Address' }
        ]
      },
      {
        id: '78-38',
        audio: getAudioUrl(78, 38),
        arabicFull: 'يَوْمَ يَقُومُ الرُّوحُ وَالْمَلَائِكَةُ صَفًّا ۖ لَّا يَتَكَلَّمُونَ إِلَّا مَنْ أَذِنَ لَهُ الرَّحْمَٰنُ وَقَالَ صَوَابًا',
        translation: 'The Day that the Spirit and the angels will stand in rows, they will not speak except for one whom the Most Merciful permits, and he will say what is correct.',
        visual: 'angels_rows',
        lesson: 'The "Spirit" refers to the Angel Jibreel (Gabriel). Even the mightiest angels will stand in silent awe.',
        words: [
          { id: 'nb38-1', arabic: 'يَوْمَ', transliteration: 'Yawma', meaning: 'The Day' },
          { id: 'nb38-2', arabic: 'يَقُومُ', transliteration: 'Yaqumu', meaning: 'Will stand' },
          { id: 'nb38-3', arabic: 'الرُّوحُ', transliteration: 'Ar-ruhu', meaning: 'The Spirit' },
          { id: 'nb38-4', arabic: 'وَ', transliteration: 'Wa', meaning: 'And' },
          { id: 'nb38-5', arabic: 'الْمَلَائِكَةُ', transliteration: 'Al-mala\'ikatu', meaning: 'The angels' },
          { id: 'nb38-6', arabic: 'صَفًّا', transliteration: 'Saffan', meaning: 'In rows' },
          { id: 'nb38-7', arabic: 'لَّا', transliteration: 'La', meaning: 'Not' },
          { id: 'nb38-8', arabic: 'يَتَكَلَّمُونَ', transliteration: 'Yatakallamuna', meaning: 'They will speak' },
          { id: 'nb38-9', arabic: 'إِلَّا', transliteration: 'Illa', meaning: 'Except' },
          { id: 'nb38-10', arabic: 'مَنْ', transliteration: 'Man', meaning: 'Whom' },
          { id: 'nb38-11', arabic: 'أَذِنَ', transliteration: 'Adhina', meaning: 'Permits' },
          { id: 'nb38-12', arabic: 'لَهُ', transliteration: 'Lahu', meaning: 'Him' },
          { id: 'nb38-13', arabic: 'الرَّحْمَٰنُ', transliteration: 'Ar-rahmanu', meaning: 'The Most Merciful' },
          { id: 'nb38-14', arabic: 'وَ', transliteration: 'Wa', meaning: 'And' },
          { id: 'nb38-15', arabic: 'قَالَ', transliteration: 'Qala', meaning: 'He says' },
          { id: 'nb38-16', arabic: 'صَوَابًا', transliteration: 'Sawaban', meaning: 'What is correct' }
        ]
      },
      {
        id: '78-39',
        audio: getAudioUrl(78, 39),
        arabicFull: 'ذَٰلِكَ الْيَوْمُ الْحَقُّ ۖ فَمَن شَاءَ اتَّخَذَ إِلَىٰ رَبِّهِ مَآبًا',
        translation: 'That is the True Day; so he who wills may take to his Lord a [way of] return.',
        visual: 'truth',
        lesson: 'It is the inescapable reality. Allah leaves the choice to us right now to prepare our path back to Him.',
        words: [
          { id: 'nb39-1', arabic: 'ذَٰلِكَ', transliteration: 'Dhalika', meaning: 'That' },
          { id: 'nb39-2', arabic: 'الْيَوْمُ', transliteration: 'Al-yawmu', meaning: 'The Day' },
          { id: 'nb39-3', arabic: 'الْحَقُّ', transliteration: 'Al-haqqu', meaning: 'The True / Reality' },
          { id: 'nb39-4', arabic: 'فَمَن', transliteration: 'Fa-man', meaning: 'So whoever' },
          { id: 'nb39-5', arabic: 'شَاءَ', transliteration: 'Sha\'a', meaning: 'Wills' },
          { id: 'nb39-6', arabic: 'اتَّخَذَ', transliteration: 'Ittakhadha', meaning: 'May take' },
          { id: 'nb39-7', arabic: 'إِلَىٰ', transliteration: 'Ila', meaning: 'To' },
          { id: 'nb39-8', arabic: 'رَبِّهِ', transliteration: 'Rabbihi', meaning: 'His Lord' },
          { id: 'nb39-9', arabic: 'مَآبًا', transliteration: 'Ma\'aban', meaning: 'A way of return' }
        ]
      },
      {
        id: '78-40',
        audio: getAudioUrl(78, 40),
        arabicFull: 'إِنَّا أَنذَرْنَاكُمْ عَذَابًا قَرِيبًا يَوْمَ يَنظُرُ الْمَرْءُ مَا قَدَّمَتْ يَدَاهُ وَيَقُولُ الْكَافِرُ يَا لَيْتَنِي كُنتُ تُرَابًا',
        translation: 'Indeed, We have warned you of a near punishment on the Day when a man will observe what his hands have put forth and the disbeliever will say, "Oh, I wish that I were dust!"',
        visual: 'warning_near',
        lesson: 'To Allah, the Day of Judgment is near, and many will wish they were mere dust rather than face the reality of their deeds.',
        words: [
          { id: 'nb40-1', arabic: 'إِنَّا', transliteration: 'Inna', meaning: 'Indeed We' },
          { id: 'nb40-2', arabic: 'أَنذَرْنَاكُمْ', transliteration: 'Andharnakum', meaning: 'Have warned you' },
          { id: 'nb40-3', arabic: 'عَذَابًا', transliteration: 'Adhaban', meaning: 'Of a punishment' },
          { id: 'nb40-4', arabic: 'قَرِيبًا', transliteration: 'Qariban', meaning: 'Near' },
          { id: 'nb40-5', arabic: 'يَوْمَ', transliteration: 'Yawma', meaning: 'The Day' },
          { id: 'nb40-6', arabic: 'يَنظُرُ', transliteration: 'Yanzuru', meaning: 'Will observe' },
          { id: 'nb40-7', arabic: 'الْمَرْءُ', transliteration: 'Al-mar\'u', meaning: 'The man' },
          { id: 'nb40-8', arabic: 'مَا', transliteration: 'Ma', meaning: 'What' },
          { id: 'nb40-9', arabic: 'قَدَّمَتْ', transliteration: 'Qaddamat', meaning: 'Have put forth' },
          { id: 'nb40-10', arabic: 'يَدَاهُ', transliteration: 'Yadahu', meaning: 'His hands' },
          { id: 'nb40-11', arabic: 'وَ', transliteration: 'Wa', meaning: 'And' },
          { id: 'nb40-12', arabic: 'يَقُولُ', transliteration: 'Yaqulu', meaning: 'Will say' },
          { id: 'nb40-13', arabic: 'الْكَافِرُ', transliteration: 'Al-kafiru', meaning: 'The disbeliever' },
          { id: 'nb40-14', arabic: 'يَا لَيْتَنِي', transliteration: 'Ya laytani', meaning: 'Oh, I wish that I' },
          { id: 'nb40-15', arabic: 'كُنتُ', transliteration: 'Kuntu', meaning: 'Were' },
          { id: 'nb40-16', arabic: 'تُرَابًا', transliteration: 'Turaban', meaning: 'Dust' }
        ]
      }
    ]
  }


  
];