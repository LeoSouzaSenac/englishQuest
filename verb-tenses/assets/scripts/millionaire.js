// ═══════════════════════════════
//  WHO WANTS TO BE A MILLIONAIRE
// ═══════════════════════════════

const PRIZES = [
    "R$ 1.000", "R$ 2.000", "R$ 3.000", "R$ 5.000", "R$ 10.000",
    "R$ 20.000", "R$ 50.000", "R$ 100.000", "R$ 150.000", "R$ 200.000",
    "R$ 300.000", "R$ 400.000", "R$ 500.000", "R$ 750.000", "R$ 1.000.000"
  ];
  const SAFE_RUNGS = [4, 9]; // índices 0-based (R$10k e R$200k)
  
  const milhaoQuestions = [
    // Q1 – easiest
    { q:"Which sentence is in the Simple Present?", opts:["She is studying now.","She studied yesterday.","She studies every day.","She will study tomorrow."], ans:2, tense:"Simple Present", exp:"Simple Present descreve hábitos e rotinas. 'She studies every day' usa a forma correta." },
    // Q2
    { q:"Choose the correct sentence in the Present Continuous.", opts:["He walk to school.","He is walk to school.","He is walking to school.","He was walked to school."], ans:2, tense:"Present Continuous", exp:"Present Continuous: is/am/are + V-ing. Correto: 'He is walking'." },
    // Q3
    { q:"'They ____ a movie last night.' Which word completes the Simple Past?", opts:["watch","watches","are watching","watched"], ans:3, tense:"Simple Past", exp:"'Last night' indica passado. Simple Past: watched." },
    // Q4
    { q:"'I ____ you tomorrow.' Correct Future form:", opts:["calls","called","am calling","will call"], ans:3, tense:"Future", exp:"Future simples: will + base form → will call." },
    // Q5
    { q:"Which sentence uses the WRONG verb form?", opts:["She doesn't work on Sundays.","He don't like coffee.","They don't play soccer.","I don't speak French."], ans:1, tense:"Simple Present", exp:"He/She/It: 'doesn't' (not 'don't'). 'He doesn't like coffee' is correct." },
    // Q6
    { q:"'Look! It ____!' — Which tense is needed?", opts:["rains","rained","is raining","will rain"], ans:2, tense:"Present Continuous", exp:"'Look!' indica ação acontecendo agora → Present Continuous: is raining." },
    // Q7
    { q:"The past of 'go' is:", opts:["goed","gone","went","goes"], ans:2, tense:"Simple Past", exp:"go → went (verbo irregular). 'Gone' é particípio passado, não Simple Past." },
    // Q8
    { q:"Which time expression goes with Simple Present?", opts:["yesterday","right now","every week","last year"], ans:2, tense:"Simple Present", exp:"'Every week' expressa frequência/hábito → Simple Present." },
    // Q9
    { q:"'She ____ her keys yesterday.' Choose the correct option:", opts:["lose","looses","lost","is losing"], ans:2, tense:"Simple Past", exp:"lose → lost (irregular). 'Yesterday' confirma Simple Past." },
    // Q10
    { q:"'By next year, she ____ graduate.' Correct form:", opts:["is","does","will","was"], ans:2, tense:"Future", exp:"'By next year' indica futuro → will graduate." },
    // Q11 – harder
    { q:"Which sentence is grammatically CORRECT?", opts:["He is go to work now.","She are playing tennis.","We is watching TV.","They are having lunch right now."], ans:3, tense:"Present Continuous", exp:"'They are having lunch' está correto. are + V-ing com sujeito plural." },
    // Q12
    { q:"'When I was a child, I ____ to school by bike.' Correct form:", opts:["ride","rides","rode","am riding"], ans:2, tense:"Simple Past", exp:"Ação habitual no passado → Simple Past. ride → rode (irregular)." },
    // Q13
    { q:"'She studies' can be correctly transformed into the negative as:", opts:["She don't studies.","She doesn't study.","She not studies.","She isn't study."], ans:1, tense:"Simple Present", exp:"Simple Present negativo: She doesn't + base form (study, sem -s)." },
    // Q14
    { q:"Which sentence correctly uses Present Continuous for a FUTURE PLAN?", opts:["I will meeting him tomorrow.","I am meeting him tomorrow.","I meet him tomorrow.","I met him tomorrow."], ans:1, tense:"Present Continuous", exp:"Present Continuous pode expressar plano futuro agendado: 'I am meeting him tomorrow.'" },
    // Q15 – hardest / million
    { q:"'By the time you arrive, I ____ finished dinner.' Which form of 'will' fits this future perfect idea?", opts:["will have","will be","will had","will has"], ans:0, tense:"Future", exp:"Future Perfect: will have + particípio. 'I will have finished' indica ação concluída antes de outra no futuro." },
  ];
  
  let mCurrent = 0;
  let mSelected = null;
  let mLifelines = { phone: false, audience: false, fifty: false };
  let mEliminatedOpts = [];
  let mRunning = false;
  
  function buildPrizeLadder() {
    const ladder = document.getElementById('prizeLadder');
    ladder.innerHTML = '';
    for (let i = PRIZES.length - 1; i >= 0; i--) {
      const div = document.createElement('div');
      div.className = 'prize-rung' +
        (i === PRIZES.length - 1 ? ' million' : '') +
        (SAFE_RUNGS.includes(i) ? ' safe' : '');
      div.id = 'rung-' + i;
      div.textContent = (i + 1) + '. ' + PRIZES[i];
      ladder.appendChild(div);
    }
    updateLadder();
  }
  
  function updateLadder() {
    PRIZES.forEach((_, i) => {
      const el = document.getElementById('rung-' + i);
      if (!el) return;
      el.classList.remove('current', 'won');
      if (i < mCurrent) el.classList.add('won');
      else if (i === mCurrent) el.classList.add('current');
    });
  }
  
  function startMilhao() {
    mCurrent = 0; mSelected = null;
    mLifelines = { phone: false, audience: false, fifty: false };
    mEliminatedOpts = []; mRunning = true;
    document.getElementById('milhaoStart').style.display = 'none';
    document.getElementById('milhaoGame').style.display = 'block';
    document.getElementById('llPhone').classList.remove('used');
    document.getElementById('llAudience').classList.remove('used');
    document.getElementById('llFifty').classList.remove('used');
    buildPrizeLadder();
    loadMilhaoQ();
  }
  
  function loadMilhaoQ() {
    if (mCurrent >= milhaoQuestions.length) { triggerWin(); return; }
    const q = milhaoQuestions[mCurrent];
    mSelected = null;
    mEliminatedOpts = [];
    document.getElementById('mQNum').textContent = `Pergunta ${mCurrent + 1} de ${milhaoQuestions.length} — ${PRIZES[mCurrent]}`;
    document.getElementById('mQText').textContent = q.q;
    document.getElementById('mConfirmBtn').disabled = true;
    document.getElementById('mFeedback').innerHTML = '';
    document.getElementById('phonePopup').style.display = 'none';
    document.getElementById('audienceResult').style.display = 'none';
    const qbox = document.getElementById('mQBox');
    qbox.className = 'milhao-question-box';
  
    const opts = document.getElementById('mOptions');
    opts.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    q.opts.forEach((o, i) => {
      const btn = document.createElement('button');
      btn.className = 'milhao-opt';
      btn.id = 'mOpt-' + i;
      btn.innerHTML = `<span class="opt-letter">${letters[i]}</span><span>${o}</span>`;
      btn.onclick = () => selectMilhaoOpt(i);
      opts.appendChild(btn);
    });
    updateLadder();
  }
  
  function selectMilhaoOpt(i) {
    if (mEliminatedOpts.includes(i)) return;
    mSelected = i;
    document.querySelectorAll('.milhao-opt').forEach((b, idx) => {
      b.classList.toggle('selected', idx === i);
    });
    document.getElementById('mConfirmBtn').disabled = false;
  }
  
  function confirmAnswer() {
    if (mSelected === null) return;
    const q = milhaoQuestions[mCurrent];
    document.querySelectorAll('.milhao-opt').forEach(b => { b.disabled = true; b.onclick = null; });
    document.getElementById('mConfirmBtn').disabled = true;
  
    const correct = mSelected === q.ans;
    const box = document.getElementById('mQBox');
  
    document.getElementById('mOpt-' + q.ans).classList.add('correct-opt');
    if (!correct) document.getElementById('mOpt-' + mSelected).classList.add('wrong-opt');
  
    box.className = 'milhao-question-box ' + (correct ? 'correct-anim' : 'wrong-anim');
  
    const fb = document.getElementById('mFeedback');
    fb.innerHTML = correct
      ? `<div style="background:rgba(34,197,94,.1);border:1px solid rgba(34,197,94,.3);border-radius:12px;padding:14px 18px;color:var(--green);font-weight:500;">✅ ${q.exp}</div>`
      : `<div style="background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.3);border-radius:12px;padding:14px 18px;color:var(--red);font-weight:500;">❌ ${q.exp}</div>`;
  
    recordAnswer(q.tense, correct);
  
    if (correct) {
      triggerSparkles();
      addXP(mCurrent < 5 ? 10 : mCurrent < 10 ? 20 : 35);
      setTimeout(() => {
        mCurrent++;
        if (mCurrent >= milhaoQuestions.length) { triggerWin(); return; }
        loadMilhaoQ();
      }, 2400);
    } else {
      setTimeout(() => triggerLose(), 2000);
    }
  }
  
  function stopGame() {
    if (!mRunning) return;
    mRunning = false;
    const safe = getSafeAmount();
    document.getElementById('winEmoji').textContent = '💼';
    document.getElementById('winTitle').textContent = 'Você parou!';
    document.getElementById('winPrize').textContent = safe || 'R$ 0';
    document.getElementById('winMsg').textContent = safe
      ? `Você garantiu ${safe} e sai sem correr mais riscos. Boa decisão?`
      : 'Você saiu antes de chegar em um prêmio seguro.';
    document.getElementById('winOverlay').classList.add('active');
    if (safe) addXP(50);
  }
  
  function getSafeAmount() {
    for (let i = SAFE_RUNGS.length - 1; i >= 0; i--) {
      if (mCurrent > SAFE_RUNGS[i]) return PRIZES[SAFE_RUNGS[i]];
    }
    return null;
  }
  
  function triggerWin() {
    mRunning = false;
    const prize = PRIZES[Math.min(mCurrent, PRIZES.length - 1)];
    document.getElementById('winEmoji').textContent = '🏆';
    document.getElementById('winTitle').textContent = 'VOCÊ GANHOU!';
    document.getElementById('winPrize').textContent = prize;
    document.getElementById('winMsg').textContent = 'Incrível! Você respondeu todas as 15 perguntas corretamente. Você é um mestre dos tempos verbais!';
    document.getElementById('winOverlay').classList.add('active');
    triggerSparkles(true);
    addXP(200);
  }
  
  function triggerLose() {
    mRunning = false;
    const safe = getSafeAmount();
    document.getElementById('losePrize').textContent = safe ? `Você leva: ${safe} (último prêmio seguro)` : 'Você não tinha chegado em um valor seguro ainda.';
    document.getElementById('loseMsg').textContent = `A resposta certa era: "${milhaoQuestions[mCurrent].opts[milhaoQuestions[mCurrent].ans]}". ${milhaoQuestions[mCurrent].exp}`;
    document.getElementById('loseOverlay').classList.add('active');
  }
  
  function resetMilhao() {
    document.getElementById('winOverlay').classList.remove('active');
    document.getElementById('loseOverlay').classList.remove('active');
    document.getElementById('milhaoStart').style.display = 'block';
    document.getElementById('milhaoGame').style.display = 'none';
    mRunning = false;
  }
  
  // ── LIFELINES ──
  function usePhone() {
    if (mLifelines.phone || mSelected === null && false) return;
    mLifelines.phone = true;
    document.getElementById('llPhone').classList.add('used');
    document.getElementById('llPhone').disabled = true;
  
    const q = milhaoQuestions[mCurrent];
    const friends = ["Prof. Maria","Dev Lucas","Mestra Ana","Dr. Carlos"];
    const friend = friends[Math.floor(Math.random() * friends.length)];
    const correct = Math.random() < (mCurrent < 8 ? 0.92 : 0.72); // less reliable on harder Qs
    const answerIdx = correct ? q.ans : (q.ans + 1 + Math.floor(Math.random()*3)) % 4;
    const letters = ['A','B','C','D'];
    const hints = [
      `Hmm... eu tenho quase certeza que é a alternativa ${letters[answerIdx]}. Parece ser "${q.opts[answerIdx]}".`,
      `Olha, não tenho 100% de certeza, mas eu apostaria na ${letters[answerIdx]}: "${q.opts[answerIdx]}".`,
      `Eu estudei isso! Acho que é ${letters[answerIdx]}, "${q.opts[answerIdx]}". Confia em mim!`,
    ];
    const popup = document.getElementById('phonePopup');
    document.getElementById('friendName').textContent = '📞 ' + friend + ' diz:';
    document.getElementById('friendSpeech').textContent = hints[Math.floor(Math.random()*hints.length)];
    popup.style.display = 'block';
  }
  
  function useAudience() {
    if (mLifelines.audience) return;
    mLifelines.audience = true;
    document.getElementById('llAudience').classList.add('used');
    document.getElementById('llAudience').disabled = true;
  
    const q = milhaoQuestions[mCurrent];
    // Generate poll: correct answer gets majority, harder Qs get less
    const correctWeight = mCurrent < 7 ? 65 : mCurrent < 12 ? 50 : 38;
    const remaining = 100 - correctWeight;
    let pcts = [0,0,0,0];
    pcts[q.ans] = correctWeight;
    let left = remaining;
    const others = [0,1,2,3].filter(i => i !== q.ans && !mEliminatedOpts.includes(i));
    others.forEach((idx, i) => {
      const share = i === others.length - 1 ? left : Math.floor(Math.random() * left * .7);
      pcts[idx] = share; left -= share;
    });
  
    const chart = document.getElementById('audienceChart');
    const letters = ['A','B','C','D'];
    chart.innerHTML = pcts.map((p, i) => `
      <div class="audience-bar-wrap">
        <div class="audience-bar-pct">${p}%</div>
        <div class="audience-bar" style="height:${p}%"></div>
        <div class="audience-bar-label">${letters[i]}</div>
      </div>
    `).join('');
    document.getElementById('audienceResult').style.display = 'block';
  }
  
  function useFifty() {
    if (mLifelines.fifty) return;
    mLifelines.fifty = true;
    document.getElementById('llFifty').classList.add('used');
    document.getElementById('llFifty').disabled = true;
  
    const q = milhaoQuestions[mCurrent];
    const wrong = [0,1,2,3].filter(i => i !== q.ans);
    // remove 2 wrong answers
    for (let k = wrong.length - 1; k > 0; k--) {
      const j = Math.floor(Math.random() * (k+1));
      [wrong[k], wrong[j]] = [wrong[j], wrong[k]];
    }
    mEliminatedOpts = wrong.slice(0, 2);
    mEliminatedOpts.forEach(idx => {
      const btn = document.getElementById('mOpt-' + idx);
      if (btn) btn.classList.add('eliminated');
    });
    // deselect if current selection was eliminated
    if (mSelected !== null && mEliminatedOpts.includes(mSelected)) {
      mSelected = null;
      document.querySelectorAll('.milhao-opt').forEach(b => b.classList.remove('selected'));
      document.getElementById('mConfirmBtn').disabled = true;
    }
  }
  
  // ── SPARKLES ──
  function triggerSparkles(big = false) {
    const container = document.getElementById('sparkles');
    const colors = ['#ffd166','#00d4aa','#7c6ffd','#ff6b35','#ffffff'];
    const count = big ? 60 : 20;
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        const s = document.createElement('div');
        s.className = 'sparkle';
        s.style.left = (20 + Math.random() * 60) + 'vw';
        s.style.top = (40 + Math.random() * 40) + 'vh';
        s.style.background = colors[Math.floor(Math.random() * colors.length)];
        s.style.width = s.style.height = (4 + Math.random() * 8) + 'px';
        s.style.animationDuration = (.6 + Math.random() * .8) + 's';
        container.appendChild(s);
        setTimeout(() => s.remove(), 1400);
      }, i * (big ? 40 : 60));
    }
  }