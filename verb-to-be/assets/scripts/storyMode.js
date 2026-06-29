// ══════════════════════════════
//  STORY MODE — Verb To Be
// ══════════════════════════════
const storyData = [
  {
    scene: "Hi! My name ___ (be) Lucas. I ___ (be) 18 years old.",
    context: "Apresentação — presente",
    choices: [{ w: "is / am", correct: true }, { w: "am / is", correct: false }, { w: "are / is", correct: false }, { w: "is / are", correct: false }],
    topic: "Present (am/is/are)",
    exp: "Name → is; I → am. 'My name is Lucas. I am 18 years old.'"
  },
  {
    scene: "Yesterday, Maria ___ (be) sick. She ___ (be) at home all day.",
    context: "Passado — ação concluída",
    choices: [{ w: "was / was", correct: true }, { w: "were / was", correct: false }, { w: "was / were", correct: false }, { w: "were / were", correct: false }],
    topic: "Past (was/were)",
    exp: "Maria (singular) → was; She (singular) → was."
  },
  {
    scene: "___ (be) you at the party last Friday?",
    context: "Pergunta no passado",
    choices: [{ w: "Were", correct: true }, { w: "Was", correct: false }, { w: "Are", correct: false }, { w: "Is", correct: false }],
    topic: "Questions",
    exp: "Pergunta com you, passado → Were you…?"
  },
  {
    scene: "The students ___ (be) not ready for the exam. They ___ (be) very nervous.",
    context: "Negação — presente",
    choices: [{ w: "are / were", correct: false }, { w: "were / are", correct: false }, { w: "are / are", correct: true }, { w: "is / are", correct: false }],
    topic: "Negations",
    exp: "The students (plural, presente) → are not; They → are nervous."
  },
  {
    scene: "___ (be) the movie good? No, it ___ (be) not very interesting.",
    context: "Pergunta e negação no passado",
    choices: [{ w: "Was / was", correct: true }, { w: "Were / were", correct: false }, { w: "Is / is", correct: false }, { w: "Was / were", correct: false }],
    topic: "Questions",
    exp: "The movie (singular) → Was it…? / it was not."
  },
  {
    scene: "We ___ (be) best friends in school. Now we ___ (be) still very close.",
    context: "Passado e presente",
    choices: [{ w: "were / are", correct: true }, { w: "was / is", correct: false }, { w: "are / were", correct: false }, { w: "were / were", correct: false }],
    topic: "Past (was/were)",
    exp: "We (plural) no passado → were; We (plural, presente) → are."
  },
];

let storyIdx = 0, storyScore = 0;

function loadStory() {
  if (storyIdx >= storyData.length) {
    document.getElementById('storyContent').innerHTML = `
      <div style="text-align:center;padding:32px;">
        <div style="font-size:3rem">🎉</div>
        <div style="font-family:'Syne',sans-serif;font-size:1.5rem;font-weight:900;margin-top:12px;">Fim da história!</div>
        <p style="color:var(--muted);margin-top:8px;">Você acertou ${storyScore} de ${storyData.length}!</p>
      </div>`;
    addXP(storyScore * 12);
    return;
  }
  const d = storyData[storyIdx];
  document.getElementById('storyNum').textContent = storyIdx + 1;
  document.getElementById('storyScore').textContent = storyScore;
  document.getElementById('storyFeedback').style.display = 'none';

  const parts = d.scene.split('___');
  const sceneHtml = parts.reduce((acc, part, i) => {
    return acc + part + (i < parts.length - 1 ? '<span class="story-blank">_______</span>' : '');
  }, '');

  document.getElementById('storyContent').innerHTML = `
    <div style="font-size:.75rem;font-weight:700;color:var(--muted);letter-spacing:.1em;text-transform:uppercase;margin-bottom:8px;">${d.context}</div>
    <div class="story-scene"><p style="font-size:1.05rem;">${sceneHtml}</p></div>
    <div class="story-choices" id="storyChoices"></div>
  `;
  const sc = document.getElementById('storyChoices');
  d.choices.sort(() => Math.random() - 0.5).forEach(c => {
    const btn = document.createElement('button');
    btn.className = 'story-choice';
    btn.textContent = c.w;
    btn.onclick = () => answerStory(c, btn, d);
    sc.appendChild(btn);
  });
}

function answerStory(c, btn, d) {
  document.querySelectorAll('.story-choice').forEach(b => { b.onclick = null; });
  const fb = document.getElementById('storyFeedback');
  if (c.correct) {
    btn.classList.add('correct');
    storyScore++;
    fb.className = 'quiz-feedback correct';
    fb.textContent = '✅ ' + d.exp;
    addXP(12);
  } else {
    btn.classList.add('wrong');
    document.querySelectorAll('.story-choice').forEach(b => {
      if (d.choices.find(cc => cc.w === b.textContent && cc.correct)) b.classList.add('correct');
    });
    fb.className = 'quiz-feedback wrong';
    fb.textContent = '❌ ' + d.exp;
  }
  recordAnswer(d.topic, c.correct);
  fb.style.display = 'block';
  setTimeout(() => { storyIdx++; loadStory(); }, 2200);
}

function resetStory() { storyIdx = 0; storyScore = 0; loadStory(); }
