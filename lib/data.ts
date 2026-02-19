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
  color: 'indigo' | 'orange' | 'emerald' | 'rose' | 'blue' | 'slate';
  themeGradient: string;
  iconName: 'Users' | 'Sun' | 'Star' | 'Flame' | 'Zap' | 'Shield';
  totalVerses: number;
  levels: Level[];
}

export const getAudioUrl = (surah: number, ayah: number) => {
  const padSurah = surah.toString().padStart(3, '0');
  const padAyah = ayah.toString().padStart(3, '0');
  return `https://everyayah.com/data/Alafasy_128kbps/${padSurah}${padAyah}.mp3`;
};

export const SURAHS: Surah[] = [
  // --- SURAH AN-NAS (114) ---
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

  // --- SURAH AL-FALAQ (113) ---
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

  // --- SURAH AL-IKHLAS (112) ---
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
  }


  
];