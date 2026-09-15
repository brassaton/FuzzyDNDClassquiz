/*
  ============================================================
  D&D QUIZ DATA
  ============================================================
  This is the main section you will edit.

  Each answer can give points to one or more classes.
  You can add subclass scoring later using the same idea.

  Example:
    scores: {
      Fighter: 3,
      Paladin: 1
    }

  The quiz totals the points from every answer and displays
  the highest-scoring class.

  IMPORTANT:
  The class names used in "scores" must match a name in
  CLASS_DATA below.
  ============================================================
*/

const QUESTIONS = [
  {
    question: "Your party encounters a locked door. What sounds most satisfying?",
    answers: [
      {
        text: "Kick it down and deal with whatever is on the other side.",
        scores: { Barbarian: 3, Fighter: 2 }
      },
      {
        text: "Study the mechanism and figure out exactly how it works.",
        scores: { Wizard: 3, Artificer: 2 }
      },
      {
        text: "Pick the lock and quietly move on.",
        scores: { Rogue: 3, Ranger: 1 }
      },
      {
        text: "Convince whoever is behind it to open it for you.",
        scores: { Bard: 3, Sorcerer: 2, Warlock: 1 }
      }
    ]
  },
  {
    question: "What sounds most fun during combat?",
    answers: [
      {
        text: "Getting up close and hitting something really hard.",
        scores: { Barbarian: 3, Fighter: 2, Paladin: 1 }
      },
      {
        text: "Finding the perfect spell or ability to control the situation.",
        scores: { Wizard: 3, Sorcerer: 2 }
      },
      {
        text: "Moving around the battlefield and striking at exactly the right moment.",
        scores: { Rogue: 3, Ranger: 2, Monk: 1 }
      },
      {
        text: "Keeping everyone else alive and making the party stronger.",
        scores: { Cleric: 3, Bard: 2, Druid: 1 }
      }
    ]
  },
  {
    question: "A problem has no obvious solution. Your first instinct is to...",
    answers: [
      {
        text: "Try something completely unexpected.",
        scores: { Bard: 2, Rogue: 2, Sorcerer: 2 }
      },
      {
        text: "Research until I understand the problem.",
        scores: { Wizard: 3, Artificer: 2 }
      },
      {
        text: "Trust my instincts and act.",
        scores: { Barbarian: 3, Monk: 2, Ranger: 1 }
      },
      {
        text: "Look for the solution that helps everyone involved.",
        scores: { Cleric: 2, Druid: 2, Paladin: 2, Bard: 1 }
      }
    ]
  },
  {
    question: "Which character fantasy sounds most appealing?",
    answers: [
      {
        text: "A legendary warrior who refuses to back down.",
        scores: { Fighter: 3, Barbarian: 2, Paladin: 1 }
      },
      {
        text: "A mysterious person whose power comes from something beyond them.",
        scores: { Warlock: 3, Sorcerer: 2 }
      },
      {
        text: "A clever wanderer who always has another trick.",
        scores: { Rogue: 3, Ranger: 2, Bard: 1 }
      },
      {
        text: "A guardian connected deeply to nature or the divine.",
        scores: { Druid: 3, Cleric: 2, Paladin: 2 }
      }
    ]
  },
  {
    question: "How complicated do you want your character's mechanics to be?",
    answers: [
      {
        text: "Keep it simple. I want to focus on the story.",
        scores: { Barbarian: 3, Fighter: 2 }
      },
      {
        text: "Some decisions are good, but I don't want to be overwhelmed.",
        scores: { Paladin: 2, Ranger: 2, Rogue: 2 }
      },
      {
        text: "Give me lots of options.",
        scores: { Bard: 2, Cleric: 2, Druid: 2, Sorcerer: 2 }
      },
      {
        text: "I want as many buttons to press as possible.",
        scores: { Wizard: 3, Artificer: 3, Warlock: 1 }
      }
    ]
  }
];

/*
  ============================================================
  CLASS RESULTS
  ============================================================
  Add or change your result text here.

  You can add every official class you want to support.
  A class needs to exist here before it can appear as a result.
  ============================================================
*/

const CLASS_DATA = {
  Barbarian: {
    subclass: "Example: Path of the Berserker",
    description: "You want to be in the middle of the action. You value direct solutions, durability, and making your presence felt.",
    reasons: [
      "You enjoy solving problems directly.",
      "You like impactful, easy-to-understand abilities.",
      "You aren't afraid to put yourself in danger for the party."
    ]
  },

  Bard: {
    subclass: "Example: College of Lore",
    description: "You like flexibility, personality, and having an answer when the party needs one.",
    reasons: [
      "You enjoy social solutions.",
      "You value versatility.",
      "You like being useful in many different situations."
    ]
  },

  Cleric: {
    subclass: "Example: Life Domain",
    description: "You enjoy being a reliable force for the party and having meaningful tools for both combat and support.",
    reasons: [
      "You care about the group's success.",
      "You enjoy having several ways to contribute.",
      "You like a character with a strong source of power."
    ]
  },

  Druid: {
    subclass: "Example: Circle of the Moon",
    description: "You want a character who feels connected to something bigger than themselves and has unusual ways to approach problems.",
    reasons: [
      "You value adaptability.",
      "You enjoy nature or supernatural themes.",
      "You like having unconventional solutions."
    ]
  },

  Fighter: {
    subclass: "Example: Battle Master",
    description: "You appreciate a character who is dependable, capable, and excellent at the fundamentals of adventuring.",
    reasons: [
      "You like reliable abilities.",
      "You enjoy direct combat.",
      "You prefer making meaningful tactical choices."
    ]
  },

  Monk: {
    subclass: "Example: Way of the Open Hand",
    description: "You value mobility, precision, and characters who can do things other adventurers simply cannot.",
    reasons: [
      "You enjoy movement and positioning.",
      "You like specialized abilities.",
      "You prefer precision over brute force."
    ]
  },

  Paladin: {
    subclass: "Example: Oath of Vengeance",
    description: "You want purpose, power, and the ability to step forward when things go wrong.",
    reasons: [
      "You enjoy protecting people.",
      "You like having a strong character fantasy.",
      "You want your big moments to feel important."
    ]
  },

  Ranger: {
    subclass: "Example: Hunter",
    description: "You enjoy being capable on your own while still bringing valuable tools to the party.",
    reasons: [
      "You like versatility.",
      "You enjoy exploration and mobility.",
      "You prefer having several practical tools."
    ]
  },

  Rogue: {
    subclass: "Example: Thief",
    description: "You enjoy clever solutions, mobility, and finding the opportunity nobody else noticed.",
    reasons: [
      "You enjoy thinking around problems.",
      "You value independence.",
      "You like precise, well-timed actions."
    ]
  },

  Sorcerer: {
    subclass: "Example: Wild Magic",
    description: "You want your power to feel personal, instinctive, and a little unpredictable.",
    reasons: [
      "You trust your instincts.",
      "You like powerful moments.",
      "You prefer expressing magic rather than studying it."
    ]
  },

  Warlock: {
    subclass: "Example: The Great Old One",
    description: "You like characters with mysterious power, strong narrative hooks, and a slightly unusual relationship with the supernatural.",
    reasons: [
      "You enjoy unusual character concepts.",
      "You like narrative complications.",
      "You want your powers to have a story behind them."
    ]
  },

  Wizard: {
    subclass: "Example: School of Divination",
    description: "You enjoy understanding systems, preparing for problems, and having the right tool when the situation demands it.",
    reasons: [
      "You enjoy preparation.",
      "You like having lots of options.",
      "You enjoy solving problems through knowledge."
    ]
  },

  Artificer: {
    subclass: "Example: Battle Smith",
    description: "You like turning creativity and preparation into practical solutions.",
    reasons: [
      "You enjoy building or customizing things.",
      "You like having versatile tools.",
      "You enjoy solving problems creatively."
    ]
  }
};

/*
  ============================================================
  QUIZ ENGINE
  ============================================================
  You normally should not need to edit anything below here.
  ============================================================
*/

let currentQuestion = 0;
let selectedAnswers = [];

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultsScreen = document.getElementById("results-screen");

const questionTitle = document.getElementById("question-title");
const questionCounter = document.getElementById("question-counter");
const progressText = document.getElementById("progress-text");
const progressFill = document.getElementById("progress-fill");
const answersContainer = document.getElementById("answers");

const backBtn = document.getElementById("back-btn");
const nextBtn = document.getElementById("next-btn");

function showScreen(screen) {
  [startScreen, quizScreen, resultsScreen].forEach(s => s.classList.remove("active"));
  screen.classList.add("active");
}

function startQuiz() {
  currentQuestion = 0;
  selectedAnswers = new Array(QUESTIONS.length).fill(null);
  showScreen(quizScreen);
  renderQuestion();
}

function renderQuestion() {
  const question = QUESTIONS[currentQuestion];
  const total = QUESTIONS.length;

  questionCounter.textContent = `Question ${currentQuestion + 1} of ${total}`;
  questionTitle.textContent = question.question;
  progressText.textContent = `${Math.round(((currentQuestion + 1) / total) * 100)}%`;
  progressFill.style.width = `${((currentQuestion + 1) / total) * 100}%`;

  answersContainer.innerHTML = "";

  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer";
    button.textContent = answer.text;

    if (selectedAnswers[currentQuestion] === index) {
      button.classList.add("selected");
    }

    button.addEventListener("click", () => selectAnswer(index));
    answersContainer.appendChild(button);
  });

  backBtn.disabled = currentQuestion === 0;
  nextBtn.disabled = selectedAnswers[currentQuestion] === null;
  nextBtn.textContent = currentQuestion === total - 1 ? "See Results" : "Next";
}

function selectAnswer(index) {
  selectedAnswers[currentQuestion] = index;

  document.querySelectorAll(".answer").forEach((button, i) => {
    button.classList.toggle("selected", i === index);
  });

  nextBtn.disabled = false;
}

function nextQuestion() {
  if (selectedAnswers[currentQuestion] === null) return;

  if (currentQuestion === QUESTIONS.length - 1) {
    calculateResults();
    return;
  }

  currentQuestion++;
  renderQuestion();
}

function previousQuestion() {
  if (currentQuestion === 0) return;
  currentQuestion--;
  renderQuestion();
}

function calculateResults() {
  const scores = {};

  Object.keys(CLASS_DATA).forEach(className => {
    scores[className] = 0;
  });

  selectedAnswers.forEach((answerIndex, questionIndex) => {
    if (answerIndex === null) return;

    const answer = QUESTIONS[questionIndex].answers[answerIndex];

    Object.entries(answer.scores).forEach(([className, points]) => {
      if (scores[className] === undefined) {
        scores[className] = 0;
      }
      scores[className] += points;
    });
  });

  const ranked = Object.entries(scores)
    .sort((a, b) => b[1] - a[1]);

  const winner = ranked[0];
  const winnerName = winner[0];

  displayResults(winnerName, winner[1], ranked);
}

function displayResults(winnerName, winnerScore, ranked) {
  const data = CLASS_DATA[winnerName];

  document.getElementById("result-class").textContent = winnerName;
  document.getElementById("result-subclass").textContent = data.subclass;
  document.getElementById("result-description").textContent = data.description;

  const reasons = document.getElementById("result-reasons");
  reasons.innerHTML = "";

  data.reasons.forEach(reason => {
    const li = document.createElement("li");
    li.textContent = reason;
    reasons.appendChild(li);
  });

  const matches = document.getElementById("other-matches");
  matches.innerHTML = "";

  ranked.slice(1, 5).forEach(([className, score]) => {
    const div = document.createElement("div");
    div.className = "match";

    const name = document.createElement("span");
    name.className = "match-name";
    name.textContent = className;

    const percentage = document.createElement("span");
    percentage.className = "match-score";
    percentage.textContent = `${score} points`;

    div.appendChild(name);
    div.appendChild(percentage);
    matches.appendChild(div);
  });

  showScreen(resultsScreen);
}

function restartQuiz() {
  showScreen(startScreen);
}

document.getElementById("start-btn").addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestion);
backBtn.addEventListener("click", previousQuestion);
document.getElementById("restart-btn").addEventListener("click", restartQuiz);
