// ══════════════════════════════
//  ERROR DETECTOR — Verb To Be
// ══════════════════════════════
const errorData = [
  { wrong: "She are my best friend.", correct: "She is my best friend.", err: "are", fix: "is", topic: "Present (am/is/are)", exp: "She → is (não are)" },
  { wrong: "They is very smart.", correct: "They are very smart.", err: "is", fix: "are", topic: "Present (am/is/are)", exp: "They (plural) → are" },
  { wrong: "I is from Portugal.", correct: "I am from Portugal.", err: "is", fix: "am", topic: "Present (am/is/are)", exp: "I → am" },
  { wrong: "He are a doctor.", correct: "He is a doctor.", err: "are", fix: "is", topic: "Present (am/is/are)", exp: "He → is" },
  { wrong: "We was at school yesterday.", correct: "We were at school yesterday.", err: "was", fix: "were", topic: "Past (was/were)", exp: "We (plural) no passado → were" },
  { wrong: "She were very tired last night.", correct: "She was very tired last night.", err: "were", fix: "was", topic: "Past (was/were)", exp: "She (singular) no passado → was" },
  { wrong: "Is you ready?", correct: "Are you ready?", err: "Is", fix: "Are", topic: "Questions", exp: "Pergunta com you (presente) → Are you?" },
  { wrong: "Were she at the party?", correct: "Was she at the party?", err: "Were", fix: "Was", topic: "Questions", exp: "Pergunta com she (passado) → Was she?" },
  { wrong: "He not is happy.", correct: "He is not happy.", err: "not is", fix: "is not", topic: "Negations", exp: "Negação: sujeito + is/am/are + not (não inverte a ordem)" },
  { wrong: "They was not interested.", correct: "They were not interested.", err: "was", fix: "were", topic: "Negations", exp: "They (plural, passado negativo) → were not" },
];

let errIdx = 0, errScore = 0;

function loadError() {
  if (errIdx >= errorData.length) {
    document.getElementById('errSentence').innerHTML =
      `<strong>🎉 Parabéns!</strong> Você acertou ${errScore} de ${errorData.length}!`;
    document.getElementById('errInput').style.display = 'none';
    addXP(errScore * 8);
    return;
  }
  const d = errorData[errIdx];
  document.getElementById('errNum').textContent = errIdx + 1;
  document.getElementById('errScore').textContent = errScore;
  document.getElementById('errInput').value = '';
  document.getElementById('errInput').className = 'error-input';
  document.getElementById('errFeedback').style.display = 'none';

  const wrongIdx = d.wrong.indexOf(d.err);
  const before = d.wrong.substring(0, wrongIdx);
  const after  = d.wrong.substring(wrongIdx + d.err.length);
  document.getElementById('errSentence').innerHTML =
    before + `<span class="wrong-word">${d.err}</span>` + after;
}

function checkError() {
  if (errIdx >= errorData.length) return;
  const d = errorData[errIdx];
  const val = document.getElementById('errInput').value.trim().toLowerCase();
  const correct = d.correct.toLowerCase();
  const fb = document.getElementById('errFeedback');

  if (val === correct) {
    errScore++;
    fb.className = 'quiz-feedback correct';
    fb.textContent = `✅ Perfeito! "${d.correct}"`;
    document.getElementById('errInput').className = 'error-input correct-input';
    addXP(12);
    recordAnswer(d.topic, true);
    setTimeout(() => { errIdx++; loadError(); }, 1500);
  } else {
    fb.className = 'quiz-feedback wrong';
    fb.textContent = `❌ Tente novamente. Dica: corrija "${d.err}" → "${d.fix}"`;
    document.getElementById('errInput').className = 'error-input wrong-input';
    recordAnswer(d.topic, false);
  }
  fb.style.display = 'block';
}

function skipError() { errIdx++; loadError(); }
function resetError() { errIdx = 0; errScore = 0; document.getElementById('errInput').style.display = ''; loadError(); }

document.getElementById('errInput').addEventListener('keydown', e => { if (e.key === 'Enter') checkError(); });
