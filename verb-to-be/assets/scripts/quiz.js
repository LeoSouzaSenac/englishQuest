// ══════════════════════════════
//  QUIZ — Verb To Be
// ══════════════════════════════
const quizData = [
  // PRESENT
  { q: "I ___ a student.", opts: ["am","is","are","was"], ans: 0, topic: "Present (am/is/are)", exp: "I → am (1ª pessoa do singular)" },
  { q: "She ___ very tired today.", opts: ["am","is","are","were"], ans: 1, topic: "Present (am/is/are)", exp: "She/He/It → is" },
  { q: "They ___ good friends.", opts: ["am","is","are","was"], ans: 2, topic: "Present (am/is/are)", exp: "They (plural) → are" },
  { q: "We ___ from Brazil.", opts: ["am","is","are","was"], ans: 2, topic: "Present (am/is/are)", exp: "We (plural) → are" },
  { q: "The dog ___ very big.", opts: ["am","is","are","were"], ans: 1, topic: "Present (am/is/are)", exp: "The dog (singular) → is" },
  // PAST
  { q: "I ___ at the park yesterday.", opts: ["am","is","was","were"], ans: 2, topic: "Past (was/were)", exp: "I no passado → was" },
  { q: "They ___ late to school this morning.", opts: ["am","is","was","were"], ans: 3, topic: "Past (was/were)", exp: "They (plural) no passado → were" },
  { q: "She ___ happy at the party.", opts: ["is","are","was","were"], ans: 2, topic: "Past (was/were)", exp: "She (singular) no passado → was" },
  { q: "The children ___ very quiet.", opts: ["was","were","is","am"], ans: 1, topic: "Past (was/were)", exp: "The children (plural) no passado → were" },
  { q: "He ___ a great teacher.", opts: ["were","are","am","was"], ans: 3, topic: "Past (was/were)", exp: "He (singular) no passado → was" },
  // QUESTIONS
  { q: "___ you ready for the test?", opts: ["Am","Is","Are","Was"], ans: 2, topic: "Questions", exp: "You (presente) → Are you…?" },
  { q: "___ she your sister?", opts: ["Am","Is","Are","Were"], ans: 1, topic: "Questions", exp: "She (singular, presente) → Is she…?" },
  { q: "___ they at home last night?", opts: ["Is","Are","Was","Were"], ans: 3, topic: "Questions", exp: "They (plural, passado) → Were they…?" },
  { q: "___ I late for class?", opts: ["Am","Is","Are","Was"], ans: 0, topic: "Questions", exp: "I (presente) → Am I…?" },
  { q: "___ he at work yesterday?", opts: ["Is","Are","Was","Were"], ans: 2, topic: "Questions", exp: "He (singular, passado) → Was he…?" },
  // NEGATIONS
  { q: "I ___ hungry right now.", opts: ["am not","is not","are not","was not"], ans: 0, topic: "Negations", exp: "I (presente, negativo) → am not (ou I'm not)" },
  { q: "She ___ at home today.", opts: ["am not","is not","are not","were not"], ans: 1, topic: "Negations", exp: "She (singular, negativo) → is not (isn't)" },
  { q: "We ___ ready yet.", opts: ["am not","is not","are not","was not"], ans: 2, topic: "Negations", exp: "We (plural, negativo) → are not (aren't)" },
  { q: "He ___ at the meeting yesterday.", opts: ["is not","are not","was not","were not"], ans: 2, topic: "Negations", exp: "He (singular, passado negativo) → was not (wasn't)" },
  { q: "They ___ happy with the result.", opts: ["is not","am not","was not","were not"], ans: 3, topic: "Negations", exp: "They (plural, passado negativo) → were not (weren't)" },
];

let quizIdx = 0, quizScore = 0, quizStreak = 0, quizAnswered = false;

function loadQuiz() {
  if (quizIdx >= quizData.length) {
    document.getElementById('quizQuestion').innerHTML =
      `<strong>🎉 Fim do Quiz!</strong><br>Você acertou ${quizScore} de ${quizData.length} perguntas!`;
    document.getElementById('quizOptions').innerHTML = '';
    document.getElementById('quizFeedback').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'none';
    addXP(quizScore * 5);
    return;
  }
  const d = quizData[quizIdx];
  document.getElementById('qNum').textContent = quizIdx + 1;
  document.getElementById('qScore').textContent = quizScore;
  document.getElementById('qStreak').textContent = quizStreak;
  document.getElementById('quizQuestion').textContent = d.q;
  document.getElementById('quizFeedback').style.display = 'none';
  document.getElementById('nextBtn').style.display = 'none';
  quizAnswered = false;

  const opts = document.getElementById('quizOptions');
  opts.innerHTML = '';
  d.opts.forEach((o, i) => {
    const b = document.createElement('button');
    b.className = 'quiz-opt';
    b.textContent = o;
    b.onclick = () => answerQuiz(i);
    opts.appendChild(b);
  });
}

function answerQuiz(i) {
  if (quizAnswered) return;
  quizAnswered = true;
  const d = quizData[quizIdx];
  const opts = document.querySelectorAll('.quiz-opt');
  const fb = document.getElementById('quizFeedback');
  opts.forEach(b => b.disabled = true);
  opts[d.ans].classList.add('correct');

  if (i === d.ans) {
    quizScore++; quizStreak++;
    if (quizStreak > bestStreak) bestStreak = quizStreak;
    fb.className = 'quiz-feedback correct';
    fb.textContent = '✅ Correto! ' + d.exp;
    addXP(quizStreak >= 3 ? 15 : 10);
  } else {
    opts[i].classList.add('wrong');
    quizStreak = 0;
    fb.className = 'quiz-feedback wrong';
    fb.textContent = '❌ Incorreto. ' + d.exp;
  }
  recordAnswer(d.topic, i === d.ans);
  fb.style.display = 'block';
  document.getElementById('nextBtn').style.display = 'inline-block';
}

function nextQuestion() { quizIdx++; loadQuiz(); }
function resetQuiz() { quizIdx = 0; quizScore = 0; quizStreak = 0; loadQuiz(); }
