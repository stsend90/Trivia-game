let questions = [
    {
      question: "Which Hokage sealed the nine-tailed fox inside Naruto?",
      answers: [
        { answer: "A. First Hokage", value: true },
        { answer: "B. Second Hokage", value: false },
        { answer: "C. Third Hokage", value: false },
        { answer: "D. Fourth Hokage", value: false }
      ]
    },
    {
      question: "Who tricked Naruto into stealing a sacred scroll?",
      answers: [
        { answer: "Mizuke", value: true },
        { answer: "Zabuza", value: false },
        { answer: "Sasuke", value: false },
        { answer: "Iruka", value: false }
      ]
    },
    {
      question: "Which character can only use taijutsu?",
      answers: [
        { answer: "Rock Lee", value: true },
        { answer: "Naruto Uzumaki", value: false },
        { answer: "Sasuke Uchiha", value: false },
        { answer: "Gaara", value: false }
      ]
    },
    {
      question: "Naruto first shows hes nine-tails chakra when he fights who?",
      answers: [
        { answer: "Haku", value: true },
        { answer: "Neji Hyuuga", value: false },
        { answer: "Gaara", value: false },
        { answer: "Sasuke Uchiha", value: false }
      ]
    },
    {
      question: "What is the forbidden technique used by Rock Lee that he used on Gaara?",
      answers: [
        { answer: "Primary Lotus", value: true },
        { answer: "Lotus of Destruction", value: false },
        { answer: "Shadow Lotus", value: false },
        { answer: "Fiery Lotus", value: false }
      ]
    },
    {
      question: "Sasuke's goal is gain enough power to kill whom?",
      answers: [
        { answer: "Itachi Uchiha", value: true },
        { answer: "Neji Hyuuga", value: false },
        { answer: "Naruto Uzumaki", value: false },
        { answer: "Tobi Uchiha", value: false }
      ]
    },
    {
      question: "What does 'Chidory' mean?",
      answers: [
        { answer: "One thousand birds", value: true },
        { answer: "Ten thousand stones", value: false },
        { answer: "Five thousand swords", value: false },
        { answer: "Five hundred punches", value: false }
      ]
    }
  ];
  
  // Global variables
  let game;
  let counter = 0;
  let clock;
  let timer = 30;
  let correctCounter = 0;
  let incorrectCounter = 0;
  let unansweredCounter = 0;
  
 