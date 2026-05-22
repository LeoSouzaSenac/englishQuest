const hangmanWords = [
  { word: "elephant", category: "🐘 Animals" },
  { word: "computer", category: "💻 Technology" },
  { word: "mountain", category: "⛰️ Nature" },
  { word: "chocolate", category: "🍫 Food" },
  { word: "airplane", category: "✈️ Transport" },
  { word: "adventure", category: "🗺️ Travel" },
  { word: "football", category: "⚽ Sports" },
  { word: "language", category: "📚 Education" },
  { word: "astronaut", category: "🚀 Space" },
  { word: "diamond", category: "💎 Objects" },
];

let hangmanIndex = 0;
let hangmanMistakes = 0;
let hangmanScore = 0;
let currentHangmanWord = "";
let guessedLetters = [];
let hangmanFinished = false;

function initHangmanKeyboard() {
  const keyboard = document.getElementById("hangmanKeyboard");
  keyboard.innerHTML = "";

  const rows = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

  rows.forEach((r) => {
    const row = document.createElement("div");
    row.className = "hangman-row";

    r.split("").forEach((letter) => {
      const btn = document.createElement("button");
      btn.className = "hangman-key";
      btn.textContent = letter;

      btn.onclick = () => {
        guessLetter(letter.toLowerCase(), btn);
      };

      row.appendChild(btn);
    });

    keyboard.appendChild(row);
  });
}

function loadHangmanWord() {
  const data = hangmanWords[hangmanIndex % hangmanWords.length];

  currentHangmanWord = data.word;
  guessedLetters = [];
  hangmanMistakes = 0;
  hangmanFinished = false;

  document.getElementById("hangmanRound").textContent = hangmanIndex + 1;
  document.getElementById("hangmanLives").textContent = hangmanMistakes;
  document.getElementById("hangmanScore").textContent = hangmanScore;
  document.getElementById("hangmanCategory").textContent = data.category;

  document.querySelectorAll(".hm-body").forEach((part) => {
    part.classList.remove("show");
  });

  const result = document.getElementById("hangmanResult");
  result.className = "hangman-result";
  result.innerHTML = "";

  renderHangmanWord();
  initHangmanKeyboard();
}

function renderHangmanWord() {
  const container = document.getElementById("hangmanWord");
  container.innerHTML = "";

  currentHangmanWord.split("").forEach((letter) => {
    const div = document.createElement("div");
    div.className = "hangman-letter";

    if (guessedLetters.includes(letter)) {
      div.textContent = letter;
      div.classList.add("revealed");
    } else {
      div.textContent = "_";
    }

    container.appendChild(div);
  });
}

function guessLetter(letter, btn) {
  if (hangmanFinished) return;

  btn.disabled = true;

  if (currentHangmanWord.includes(letter)) {
    guessedLetters.push(letter);
    btn.classList.add("correct");

    renderHangmanWord();

    const won = currentHangmanWord
      .split("")
      .every((l) => guessedLetters.includes(l));

    if (won) {
      hangmanFinished = true;
      hangmanScore++;

      document.getElementById("hangmanScore").textContent = hangmanScore;

      addXP(20);

      const result = document.getElementById("hangmanResult");
      result.className = "hangman-result win";
      result.innerHTML = `✅ You won! The word was <strong>${currentHangmanWord}</strong>`;

      createSparkles();
    }
  } else {
    hangmanMistakes++;

    btn.classList.add("wrong");

    document.getElementById("hangmanLives").textContent = hangmanMistakes;

    const part = document.getElementById(`hm${hangmanMistakes - 1}`);

    if (part) {
      part.classList.add("show");
    }

    if (hangmanMistakes >= 6) {
      hangmanFinished = true;

      currentHangmanWord.split("").forEach((letter) => {
        if (!guessedLetters.includes(letter)) {
          guessedLetters.push(letter);
        }
      });

      renderHangmanWord();

      const result = document.getElementById("hangmanResult");
      result.className = "hangman-result lose";
      result.innerHTML = `❌ Game Over! The word was <strong>${currentHangmanWord}</strong>`;
    }
  }
}

function nextHangmanWord() {
    hangmanIndex++;
    loadHangmanWord();
  }

  function resetHangman() {
    hangmanIndex = 0;
    hangmanScore = 0;
    loadHangmanWord();
  }

  function createSparkles() {
    const container = document.getElementById('sparkles');
  
    for (let i = 0; i < 24; i++) {
      const sparkle = document.createElement('div');
  
      sparkle.className = 'sparkle';
  
      sparkle.style.left = Math.random() * 100 + '%';
      sparkle.style.bottom = '0px';
  
      sparkle.style.background = Math.random() > 0.5
        ? 'var(--accent-future)'
        : 'var(--accent-present)';
  
      sparkle.style.animationDelay = Math.random() * 0.3 + 's';
  
      container.appendChild(sparkle);
  
      setTimeout(() => {
        sparkle.remove();
      }, 1200);
    }
  }

  // teclado físico
window.addEventListener('keydown', e => {
    if (!document.getElementById('page-hangman').classList.contains('active')) return;
    if (hangmanFinished) return;
  
    const key = e.key.toLowerCase();
  
    if (!/^[a-z]$/.test(key)) return;
  
    const buttons = document.querySelectorAll('.hangman-key');
  
    buttons.forEach(btn => {
      if (btn.textContent.toLowerCase() === key && !btn.disabled) {
        btn.click();
      }
    });
  });
