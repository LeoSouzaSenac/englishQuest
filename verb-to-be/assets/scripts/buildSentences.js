// ══════════════════════════════
//  BUILD SENTENCE — Verb To Be
// ══════════════════════════════
const buildData = [
  { words: ["a","I","student","am"], answer: ["I","am","a","student"], hint: "Present — Eu sou um estudante", topic: "Present (am/is/are)" },
  { words: ["teacher","is","She","a"], answer: ["She","is","a","teacher"], hint: "Present — Ela é uma professora", topic: "Present (am/is/are)" },
  { words: ["from","are","We","Brazil"], answer: ["We","are","from","Brazil"], hint: "Present — Nós somos do Brasil", topic: "Present (am/is/are)" },
  { words: ["home","was","at","He","yesterday"], answer: ["He","was","at","home","yesterday"], hint: "Past — Ele estava em casa ontem", topic: "Past (was/were)" },
  { words: ["party","were","at","They","the"], answer: ["They","were","at","the","party"], hint: "Past — Eles estavam na festa", topic: "Past (was/were)" },
  { words: ["ready?","Are","you"], answer: ["Are","you","ready?"], hint: "Question — Você está pronto/a?", topic: "Questions" },
  { words: ["last","Was","sick","she","night?"], answer: ["Was","she","sick","last","night?"], hint: "Question — Ela estava doente ontem à noite?", topic: "Questions" },
  { words: ["late","not","am","I"], answer: ["I","am","not","late"], hint: "Negation — Eu não estou atrasado/a", topic: "Negations" },
];

let buildIdx = 0, buildScore = 0;
let buildPlaced = [];

function loadBuild() {
  if (buildIdx >= buildData.length) {
    document.getElementById('buildFeedback').className = 'quiz-feedback correct';
    document.getElementById('buildFeedback').style.display = 'block';
    document.getElementById('buildFeedback').textContent = `🎉 Fim! Você acertou ${buildScore} de ${buildData.length}!`;
    document.getElementById('buildWords').innerHTML = '';
    document.getElementById('buildSlots').innerHTML = '';
    addXP(buildScore * 10);
    return;
  }
  const d = buildData[buildIdx];
  buildPlaced = [];
  document.getElementById('buildNum').textContent = buildIdx + 1;
  document.getElementById('buildScore').textContent = buildScore;
  document.getElementById('buildHint').textContent = '💡 ' + d.hint;
  document.getElementById('buildFeedback').style.display = 'none';
  renderBuildSlots();
  renderBuildWords();
}

function renderBuildSlots() {
  const s = document.getElementById('buildSlots');
  if (buildPlaced.length === 0) {
    s.innerHTML = '<span class="slot-placeholder">Clique nas palavras para montar a frase...</span>';
  } else {
    s.innerHTML = buildPlaced.map((w, i) =>
      `<span class="slot-word" onclick="removeFromSlot(${i})">${w} ✕</span>`
    ).join('');
  }
}

function renderBuildWords() {
  const d = buildData[buildIdx];
  const shuffled = [...d.words].sort(() => Math.random() - 0.5);
  const w = document.getElementById('buildWords');
  w.innerHTML = shuffled.filter(ww => !buildPlaced.includes(ww)).map(ww =>
    `<span class="drag-word" onclick="placeWord('${ww}')">${ww}</span>`
  ).join('');
}

function placeWord(w) { buildPlaced.push(w); renderBuildSlots(); renderBuildWords(); }
function removeFromSlot(i) { buildPlaced.splice(i, 1); renderBuildSlots(); renderBuildWords(); }
function clearBuild() { buildPlaced = []; renderBuildSlots(); renderBuildWords(); }

function checkBuild() {
  const d = buildData[buildIdx];
  const fb = document.getElementById('buildFeedback');
  if (buildPlaced.length < d.answer.length) {
    fb.className = 'quiz-feedback wrong';
    fb.style.display = 'block';
    fb.textContent = '⚠️ Coloque todas as palavras antes de verificar!';
    return;
  }
  const correct = buildPlaced.join(' ') === d.answer.join(' ');
  recordAnswer(d.topic, correct);
  if (correct) {
    buildScore++;
    fb.className = 'quiz-feedback correct';
    fb.textContent = `✅ Perfeito! "${d.answer.join(' ')}"`;
    addXP(15);
    setTimeout(() => { buildIdx++; loadBuild(); }, 1600);
  } else {
    fb.className = 'quiz-feedback wrong';
    fb.textContent = `❌ Incorreto. Tente reordenar as palavras!`;
  }
  fb.style.display = 'block';
}

function resetBuild() { buildIdx = 0; buildScore = 0; loadBuild(); }
