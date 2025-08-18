const test = [
  {
    id: 0,
    topic: "Logarifmik tenglamalar",
    subject: "Matematika",
    question: "log₄(2 + √(x + 3)) = 2cos(5π/3)",
    answer: "x = 1",
  },
  
  {
    id: 1,
    topic: "Logarifmik tenglamalar",
    subject: "Matematika",
    question: "log₃(x) = 2",
    answer: "x = 9",
  },
  
  {
    id: 2,
    topic: "Logarifmik tenglamalar",
    subject: "Matematika",
    question: "2log₅(x) = 2",
    answer: "x = 5",
  },
  
  {
    id: 3,
    topic: "Logarifmik tenglamalar",
    subject: "Matematika",
    question: "log₂(x) + log₂(x - 2) = 3",
    answer: "x = 4",
  },
  
  {
    id: 4,
    topic: "Logarifmik tenglamalar",
    subject: "Matematika",
    question: "log₃(x + 1) = log₃(3)",
    answer: "x = 2",
  },
  
  {
    id: 5,
    topic: "Logarifmik tenglamalar",
    subject: "Matematika",
    question: "log(x² + 1) = 0",
    answer: "x = 0",
  },
  
  {
    id: 6,
    topic: "Logarifmik tenglamalar",
    subject: "Matematika",
    question: "log₉(x + 2) = 1",
    answer: "x = 1",
  },
  
  {
    id: 7,
    topic: "Logarifmik tenglamalar",
    subject: "Matematika",
    question: "log₂(x - 1) = 2",
    answer: "x = 4",
  },
  
  {
    id: 8,
    topic: "Logarifmik tenglamalar",
    subject: "Matematika",
    question: "log(x - 2) = log(5)",
    answer: "x = 7",
  },
  
  {
    id: 9,
    topic: "Logarifmik tenglamalar",
    subject: "Matematika",
    question: "log₅(x²) = 2",
    answer: "x = 5",
  },
  
  {
    id: 10,
    topic: "Logarifmik tenglamalar",
    subject: "Matematika",
    question: "2log₄(x) = 1",
    answer: "x = 2",
  },
  
  {
    id: 11,
    topic: "Logarifmik tenglamalar",
    subject: "Matematika",
    question: "log₃(x² - 6x + 9) = 0",
    answer: "x = 3",
  },
  
  {
    id: 12,
    topic: "Logarifmik tenglamalar",
    subject: "Matematika",
    question: "log(1 + x²) = 0",
    answer: "x = 0",
  },
  
  {
    id: 13,
    topic: "Logarifmik tenglamalar",
    subject: "Matematika",
    question: "log₂(4x) = 2",
    answer: "x = 1",
  },
  
  {
    id: 14,
    topic: "Logarifmik tenglamalar",
    subject: "Matematika",
    question: "log₂(x²) = 2",
    answer: "x = 2",
  },
  
  {
    id: 15,
    topic: "Logarifmik tenglamalar",
    subject: "Matematika",
    question: "log(x² - 4x + 3) = 0",
    answer: "x = 1 yoki x = 3",
  },
  
  {
    id: 16,
    topic: "Logarifmik tenglamalar",
    subject: "Matematika",
    question: "log₆(x) + log₆(2) = 3",
    answer: "x = 9",
  },
  
  {
    id: 17,
    topic: "Logarifmik tenglamalar",
    subject: "Matematika",
    question: "log₇(x - 3) = 1",
    answer: "x = 10",
  },
  
  {
    id: 18,
    topic: "Logarifmik tenglamalar",
    subject: "Matematika",
    question: "log₅(x + 2) = 2",
    answer: "x = 23",
  },
  
  {
    id: 19,
    topic: "Logarifmik tenglamalar",
    subject: "Matematika",
    question: "log₈(x² - 1) = 2",
    answer: "x = 3 yoki x = -3",
  },
  
  {
    id: 20,
    topic: "Logarifmik tenglamalar",
    subject: "Matematika",
    question: "log₁₀(x + 1) = 1",
    answer: "x = 9",
  },
  
  {
    id: 21,
    topic: "Logarifmik tenglamalar",
    subject: "Matematika",
    question: "log₃(x) - log₃(2) = 1",
    answer: "x = 6",
  },
  
  {
    id: 22,
    topic: "Logarifmik tenglamalar",
    subject: "Matematika",
    question: "2log₅(x) - log₅(4) = 1",
    answer: "x = 5",
  },
  
  {
    id: 23,
    topic: "Logarifmik tenglamalar",
    subject: "Matematika",
    question: "log₂(x² + 2x + 1) = 4",
    answer: "x = 1",
  },
  
  {
    id: 24,
    topic: "Logarifmik tenglamalar",
    subject: "Matematika",
    question: "log₄(2x - 1) = 1",
    answer: "x = 2.5",
  },
  
  {
    id: 25,
    topic: "Logarifmik tenglamalar",
    subject: "Matematika",
    question: "log₉(3x) = 2",
    answer: "x = 3",
  },
  
  {
    id: 26,
    topic: "Logarifmik tenglamalar",
    subject: "Matematika",
    question: "log₁₀(x) + log₁₀(x - 1) = 1",
    answer: "x = 2",
  },
  
  {
    id: 27,
    topic: "Logarifmik tenglamalar",
    subject: "Matematika",
    question: "log₁₀(x² - 2x) = 1",
    answer: "x = 10 yoki x = 0 (x ≠ 0)",
  },
  
  {
    id: 28,
    topic: "Logarifmik tenglamalar",
    subject: "Matematika",
    question: "log₂(3x + 1) = 3",
    answer: "x = 2.333",
  },
  
  {
    id: 29,
    topic: "Logarifmik tenglamalar",
    subject: "Matematika",
    question: "log₄(x² - 9) = 2",
    answer: "x = 5 yoki x = -5",
  },
  // avto test
  {
    id: 30,
    topic: "Yo'l harakati belgilari",
    subject: "Avto test",
    question: "Bu qanday yo'l harakati belgisi?",
    answer: "Mehmonxona",
    questionpic: "../images/signs/kasalxona.gif",
  },
  {
    id: 31,
    topic: "Yo'l harakati belgilari",
    subject: "Avto test",
    question: "Bu qanday yo'l harakati belgisi?",
    answer: "Kotarma koprik",
    questionpic: "../images/signs/kotarma_koprik.gif",
  },
  {
    id: 32,
    topic: "Yo'l harakati belgilari",
    subject: "Avto test",
    question: "Bu qanday yo'l harakati belgisi?",
    answer: "Cheklangan balandlik",
    questionpic: "../images/signs/maksimal_balandlik.gif",
  },
  {
    id: 33,
    topic: "Yo'l harakati belgilari",
    subject: "Avto test",
    question: "Bu qanday yo'l harakati belgisi?",
    answer: "Cheklangan kenglik",
    questionpic: "../images/signs/maksimal_kenglik.gif",
  },
  {
    id: 34,
    topic: "Yo'l harakati belgilari",
    subject: "Avto test",
    question: "Bu qanday yo'l harakati belgisi?",
    answer: "Vazn cheklangan",
    questionpic: "../images/signs/maksimal_ogrlik.gif",
  },
  {
    id: 35,
    topic: "Yo'l harakati belgilari",
    subject: "Avto test",
    question: "Bu qanday yo'l harakati belgisi?",
    answer: "Cheklangan uzunlik",
    questionpic: "../images/signs/maksimal_uzunlik.gif",
  },
  {
    id: 36,
    topic: "Yo'l harakati belgilari",
    subject: "Avto test",
    question: "Bu qanday yo'l harakati belgisi?",
    answer: "Avtobus va trolleybus to’xtash joyi",
    questionpic: "../images/signs/marshrut.gif",
  },
  {
    id: 37,
    topic: "Yo'l harakati belgilari",
    subject: "Avto test",
    question: "Bu qanday yo'l harakati belgisi?",
    answer: "Mexanik transport vositalarining harakatlanishi taqiqlangan",
    questionpic: "../images/signs/mexanik_taqiqlangan.gif",
  },
  {
    id: 38,
    topic: "Yo'l harakati belgilari",
    subject: "Avto test",
    question: "Bu qanday yo'l harakati belgisi?",
    answer: "Mototsikllar harakatlanishi taqiqlangan",
    questionpic: "../images/signs/motosikl_taqiqlanadi.gif",
  },
  {
    id: 39,
    topic: "Yo'l harakati belgilari",
    subject: "Avto test",
    question: "Bu qanday yo'l harakati belgisi?",
    answer: "Eng kam oraliq",
    questionpic: "../images/signs/oraliq_masofa.gif",
  },
   {
    id: 40,
    topic: "Sinonimlar",
    subject: "Ona tili",
    question: "“Go‘zal” so‘zining sinonimi qaysi?",
    answer: "Chiroyli"
  },
  {
    id: 41,
    topic: "Sinonimlar",
    subject: "Ona tili",
    question: "“Tez” so‘zining sinonimini toping.",
    answer: "Shiddatli"
  },
  {
    id: 42,
    topic: "Sinonimlar",
    subject: "Ona tili",
    question: "“Katta” so‘zining sinonimi nima?",
    answer: "Ulkan"
  },
  {
    id: 43,
    topic: "Sinonimlar",
    subject: "Ona tili",
    question: "“Xafa” so‘ziga sinonim toping.",
    answer: "Ranjigan"
  },
  {
    id: 44,
    topic: "Sinonimlar",
    subject: "Ona tili",
    question: "“Do‘st” so‘zining sinonimi qaysi?",
    answer: "Yor"
  },
  {
    id: 45,
    topic: "Sinonimlar",
    subject: "Ona tili",
    question: "“Yaxshi” so‘zining sinonimini ko‘rsating.",
    answer: "Zo‘r"
  },
  {
    id: 46,
    topic: "Sinonimlar",
    subject: "Ona tili",
    question: "“Qo‘rqinchli” so‘ziga sinonim nima bo‘la oladi?",
    answer: "Dahshatli"
  },
  {
    id: 47,
    topic: "Sinonimlar",
    subject: "Ona tili",
    question: "“Oson” so‘zining sinonimi qaysi?",
    answer: "Yengil"
  },
  {
    id: 48,
    topic: "Sinonimlar",
    subject: "Ona tili",
    question: "“Aqlli” so‘zining sinonimini tanlang.",
    answer: "Zukkо"
  },
  {
    id: 49,
    topic: "Sinonimlar",
    subject: "Ona tili",
    question: "“Tinch” so‘zining sinonimi nima?",
    answer: "Osuda"
  }
];
