// ══════════════════════════════
//  MILLIONAIRE — Verb To Be
// ══════════════════════════════
const milhaoQuestions = [
  { q: "Which form of 'to be' goes with 'I'?", opts: ["is","am","are","was"], ans: 1, exp: "I → am. Ex: I am a student." },
  { q: "Choose the correct sentence:", opts: ["She are happy.","She is happy.","She am happy.","She be happy."], ans: 1, exp: "She (singular) → is." },
  { q: "Which form is correct for 'they' in the present?", opts: ["was","is","am","are"], ans: 3, exp: "They (plural) → are." },
  { q: "Fill in: 'He ___ at school yesterday.'", opts: ["is","are","was","were"], ans: 2, exp: "He (singular) no passado → was." },
  { q: "Which question is correct?", opts: ["Is you ready?","Are you ready?","Am you ready?","Was you ready?"], ans: 1, exp: "Pergunta com you (presente) → Are you…?" },
  { q: "Choose the correct negation:", opts: ["She not is tired.","She is not tired.","She are not tired.","She was not tired now."], ans: 1, exp: "Negação presente → She is not tired (isn't)." },
  { q: "Fill in: 'We ___ late for the meeting.'", opts: ["was","is","are","am"], ans: 2, exp: "We (plural, presente) → are." },
  { q: "Which is the past form for 'they'?", opts: ["was","is","were","are"], ans: 2, exp: "They (plural) no passado → were." },
  { q: "'___ she a good student?' — Choose the correct form:", opts: ["Am","Was","Are","Is"], ans: 3, exp: "Pergunta com she, presente → Is she…?" },
  { q: "Choose the correct sentence:", opts: ["They were not ready.","They was not ready.","They are not ready yesterday.","They is not ready."], ans: 0, exp: "They (plural) passado negativo → were not." },
  { q: "'I ___ not feeling well.' — Choose the correct form:", opts: ["are","is","am","were"], ans: 2, exp: "I (presente) → am. 'I am not feeling well.'" },
  { q: "Which contracted form is correct for 'she is not'?", opts: ["she'sn't","she isn't","she ain't","she not is"], ans: 1, exp: "Contração de 'she is not' → she isn't." },
  { q: "Fill in: '___ you at the party last night?'", opts: ["Are","Is","Were","Was"], ans: 2, exp: "Pergunta com you, passado → Were you…?" },
  { q: "Choose the correct sentence:", opts: ["He am a doctor.","He are a doctor.","He is a doctor.","He were a doctor."], ans: 2, exp: "He (singular, presente) → is." },
  { q: "Which sentence uses 'to be' correctly in ALL forms?", opts: ["I am, she is, they are.","I is, she am, they are.","I are, she is, they am.","I am, she are, they is."], ans: 0, exp: "I → am | she → is | they → are. Perfeito!" },
];

const prizes = [
  "R$ 1.000","R$ 2.000","R$ 3.000","R$ 5.000","R$ 10.000",
  "R$ 20.000","R$ 30.000","R$ 50.000","R$ 100.000","R$ 150.000",
  "R$ 200.000","R$ 300.000","R$ 400.000","R$ 500.000","R$ 1.000.000"
];
const safeHavens = [4, 9];
const friends = ["Maria","João","Ana","Pedro","Lucas"];

let mQ = 0, mSelected = null, mPhoneUsed = false, mAudienceUsed = false, mFiftyUsed = false, mRunning = false;

function buildPrizeLadder() {
  const ladder = document.getElementById('prizeLadder');
  ladder.innerHTML = [...prizes].reverse().map((p, i) => {
    const real = prizes.length - 1 - i;
    const cls = safeHavens.includes(real) ? 'prize-rung safe' : (real === prizes.length - 1 ? 'prize-rung million' : 'prize-rung');
    return `<div class="${cls}" id="rung${real}">${p}</div>`;
  }).join('');
}

function updateLadder() {
  prizes.forEach((_, i) => {
    const el = document.getElementById('rung' + i);
    if (!el) return;
    el.classList.remove('current', 'won');
    if (i === mQ) el.classList.add('current');
    else if (i < mQ) el.classList.add('won');
  });
}

function startMilhao() {
  mQ = 0; mSelected = null;
  mPhoneUsed = false; mAudienceUsed = false; mFiftyUsed = false; mRunning = true;
  document.getElementById('milhaoStart').style.display = 'none';
  document.getElementById('milhaoGame').style.display = 'block';
  document.getElementById('llPhone').disabled = false; document.getElementById('llPhone').classList.remove('used');
  document.getElementById('llAudience').disabled = false; document.getElementById('llAudience').classList.remove('used');
  document.getElementById('llFifty').disabled = false; document.getElementById('llFifty').classList.remove('used');
  document.getElementById('audienceResult').style.display = 'none';
  document.getElementById('phonePopup').style.display = 'none';
  loadMilhaoQuestion();
}

function loadMilhaoQuestion() {
  mSelected = null;
  document.getElementById('mConfirmBtn').disabled = true;
  document.getElementById('mFeedback').innerHTML = '';
  document.getElementById('audienceResult').style.display = 'none';
  document.getElementById('phonePopup').style.display = 'none';
  updateLadder();

  const d = milhaoQuestions[mQ];
  document.getElementById('mQNum').textContent = `Pergunta ${mQ + 1} de ${milhaoQuestions.length}`;
  document.getElementById('mQText').textContent = d.q;
  document.getElementById('mQBox').className = 'milhao-question-box';

  const letters = ['A','B','C','D'];
  document.getElementById('mOptions').innerHTML = d.opts.map((opt, i) => `
    <button class="milhao-opt" onclick="selectMilhao(${i})" id="mOpt${i}">
      <span class="opt-letter">${letters[i]}</span> ${opt}
    </button>
  `).join('');
}

function selectMilhao(i) {
  if (!mRunning) return;
  mSelected = i;
  document.querySelectorAll('.milhao-opt').forEach((b, idx) => {
    b.classList.toggle('selected', idx === i);
  });
  document.getElementById('mConfirmBtn').disabled = false;
}

function confirmAnswer() {
  if (mSelected === null || !mRunning) return;
  mRunning = false;
  document.querySelectorAll('.milhao-opt').forEach(b => b.disabled = true);
  document.getElementById('mConfirmBtn').disabled = true;

  const d = milhaoQuestions[mQ];
  const correct = mSelected === d.ans;
  document.getElementById(`mOpt${d.ans}`).classList.add('correct-opt');
  if (!correct) document.getElementById(`mOpt${mSelected}`).classList.add('wrong-opt');

  document.getElementById('mQBox').classList.add(correct ? 'correct-anim' : 'wrong-anim');

  setTimeout(() => {
    if (correct) {
      mQ++;
      if (mQ >= milhaoQuestions.length) {
        showWin(prizes[prizes.length - 1], "Você é o grande campeão! Acertou todas as 15 perguntas! 🏆");
      } else {
        mRunning = true;
        loadMilhaoQuestion();
      }
    } else {
      const safe = [...safeHavens].reverse().find(s => s < mQ);
      const prize = safe !== undefined ? prizes[safe] : "R$ 0";
      showLose(prize, `A resposta correta era: "${d.opts[d.ans]}". ${d.exp}`);
    }
  }, 1800);
}

function stopGame() {
  if (!mRunning) return;
  mRunning = false;
  const safe = [...safeHavens].reverse().find(s => s < mQ);
  const prize = safe !== undefined ? prizes[safe] : "R$ 0";
  showWin(prize, "Você parou na hora certa! Conhecimento vale mais que sorte.");
}

function showWin(prize, msg) {
  document.getElementById('winEmoji').textContent = mQ >= milhaoQuestions.length ? '🏆' : '😎';
  document.getElementById('winTitle').textContent = mQ >= milhaoQuestions.length ? 'MILIONÁRIO!' : 'Você parou!';
  document.getElementById('winPrize').textContent = prize;
  document.getElementById('winMsg').textContent = msg;
  document.getElementById('winOverlay').classList.add('active');
  if (mQ >= milhaoQuestions.length) { addXP(200); }
}

function showLose(prize, msg) {
  document.getElementById('losePrize').textContent = `Você leva: ${prize}`;
  document.getElementById('loseMsg').textContent = msg;
  document.getElementById('loseOverlay').classList.add('active');
}

function resetMilhao() {
  document.getElementById('winOverlay').classList.remove('active');
  document.getElementById('loseOverlay').classList.remove('active');
  document.getElementById('milhaoGame').style.display = 'none';
  document.getElementById('milhaoStart').style.display = 'block';
  updateLadder();
}

function usePhone() {
  if (mPhoneUsed || !mRunning) return;
  mPhoneUsed = true;
  document.getElementById('llPhone').disabled = true;
  document.getElementById('llPhone').classList.add('used');
  const d = milhaoQuestions[mQ];
  const friend = friends[Math.floor(Math.random() * friends.length)];
  const correct = Math.random() < 0.75;
  const answer = correct ? d.opts[d.ans] : d.opts[(d.ans + 1) % d.opts.length];
  document.getElementById('friendName').textContent = `📞 ${friend} diz:`;
  document.getElementById('friendSpeech').textContent = `"Hmm... eu acho que é "${answer}". Mas não tenho certeza absoluta!"`;
  document.getElementById('phonePopup').style.display = 'block';
}

function useAudience() {
  if (mAudienceUsed || !mRunning) return;
  mAudienceUsed = true;
  document.getElementById('llAudience').disabled = true;
  document.getElementById('llAudience').classList.add('used');
  const d = milhaoQuestions[mQ];
  const letters = ['A','B','C','D'];
  const pcts = d.opts.map((_, i) => i === d.ans ? 0 : Math.floor(Math.random() * 15));
  const rem = 100 - pcts.reduce((a, b) => a + b, 0);
  pcts[d.ans] = rem;
  document.getElementById('audienceResult').style.display = 'block';
  document.getElementById('audienceChart').innerHTML = pcts.map((p, i) => `
    <div class="audience-bar-wrap">
      <div class="audience-bar-pct">${p}%</div>
      <div class="audience-bar" style="height:${p}%"></div>
      <div class="audience-bar-label">${letters[i]}</div>
    </div>
  `).join('');
}

function useFifty() {
  if (mFiftyUsed || !mRunning) return;
  mFiftyUsed = true;
  document.getElementById('llFifty').disabled = true;
  document.getElementById('llFifty').classList.add('used');
  const d = milhaoQuestions[mQ];
  let removed = 0;
  for (let i = 0; i < d.opts.length && removed < 2; i++) {
    if (i !== d.ans) {
      document.getElementById('mOpt' + i).classList.add('eliminated');
      removed++;
    }
  }
}
