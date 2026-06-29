// ══════════════════════════════
//  SPEED ROUND — Verb To Be
// ══════════════════════════════
const speedPrompts = [
  { topic: "Present (am/is/are)", subject: "I",       verb: "be", answer: "am",   label: "Present", color: "var(--accent-present)" },
  { topic: "Present (am/is/are)", subject: "She",     verb: "be", answer: "is",   label: "Present", color: "var(--accent-present)" },
  { topic: "Present (am/is/are)", subject: "They",    verb: "be", answer: "are",  label: "Present", color: "var(--accent-present)" },
  { topic: "Present (am/is/are)", subject: "He",      verb: "be", answer: "is",   label: "Present", color: "var(--accent-present)" },
  { topic: "Present (am/is/are)", subject: "We",      verb: "be", answer: "are",  label: "Present", color: "var(--accent-present)" },
  { topic: "Present (am/is/are)", subject: "It",      verb: "be", answer: "is",   label: "Present", color: "var(--accent-present)" },
  { topic: "Past (was/were)",     subject: "I",       verb: "be", answer: "was",  label: "Past",    color: "var(--accent-past)" },
  { topic: "Past (was/were)",     subject: "She",     verb: "be", answer: "was",  label: "Past",    color: "var(--accent-past)" },
  { topic: "Past (was/were)",     subject: "They",    verb: "be", answer: "were", label: "Past",    color: "var(--accent-past)" },
  { topic: "Past (was/were)",     subject: "He",      verb: "be", answer: "was",  label: "Past",    color: "var(--accent-past)" },
  { topic: "Past (was/were)",     subject: "We",      verb: "be", answer: "were", label: "Past",    color: "var(--accent-past)" },
  { topic: "Past (was/were)",     subject: "You",     verb: "be", answer: "were", label: "Past",    color: "var(--accent-past)" },
  { topic: "Negations",           subject: "She",     verb: "be (negative)", answer: "isn't",  label: "Negation", color: "var(--accent-future)" },
  { topic: "Negations",           subject: "They",    verb: "be (negative)", answer: "aren't", label: "Negation", color: "var(--accent-future)" },
  { topic: "Negations",           subject: "He",      verb: "be (negative, past)", answer: "wasn't",  label: "Neg. Past", color: "var(--accent-cont)" },
];

let speedInterval, speedTimeLeft = 60, speedScoreVal = 0, speedRunning = false, speedCurrent = 0;

function startSpeed() {
  speedScoreVal = 0; speedTimeLeft = 60; speedRunning = true;
  speedCurrent = Math.floor(Math.random() * speedPrompts.length);
  document.getElementById('speedScore').textContent = 0;
  document.getElementById('speedTime').textContent = 60;
  document.getElementById('speedBar').style.width = '100%';
  document.getElementById('speedStartBtn').style.display = 'none';
  document.getElementById('speedInput').value = '';
  document.getElementById('speedInput').focus();
  showSpeedPrompt();

  speedInterval = setInterval(() => {
    speedTimeLeft--;
    document.getElementById('speedTime').textContent = speedTimeLeft;
    document.getElementById('speedBar').style.width = (speedTimeLeft / 60 * 100) + '%';
    if (speedTimeLeft <= 0) endSpeed();
  }, 1000);
}

function showSpeedPrompt() {
  const p = speedPrompts[speedCurrent];
  document.getElementById('speedTenseLabel').textContent = p.label;
  document.getElementById('speedTenseLabel').style.color = p.color;
  document.getElementById('speedVerb').textContent = p.verb;
  document.getElementById('speedSubject').textContent = p.subject + ' ___';
}

document.getElementById('speedInput').addEventListener('keydown', e => {
  if (e.key === 'Enter' && speedRunning) {
    const val = e.target.value.trim().toLowerCase();
    const p = speedPrompts[speedCurrent];
    if (val === p.answer.toLowerCase()) {
      speedScoreVal++;
      document.getElementById('speedScore').textContent = speedScoreVal;
      addXP(8);
      recordAnswer(p.topic, true);
      showToast('✅ Correct!');
    } else {
      recordAnswer(p.topic, false);
      showToast(`❌ "${p.answer}"`);
    }
    e.target.value = '';
    speedCurrent = (speedCurrent + 1) % speedPrompts.length;
    showSpeedPrompt();
  }
});

function endSpeed() {
  clearInterval(speedInterval);
  speedRunning = false;
  document.getElementById('speedStartBtn').style.display = 'inline-block';
  document.getElementById('speedStartBtn').textContent = '▶ Jogar Novamente';
  showToast(`Fim! ${speedScoreVal} acertos 🏆`, 'xp');
}
