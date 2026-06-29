
// ══════════════════════════════
//  SPEED ROUND
// ══════════════════════════════
const speedPrompts = [
    { tense:"Simple Present", subject:"She", verb:"go", answer:"goes", label:"Simple Present", color:"var(--accent-present)" },
    { tense:"Present Continuous", subject:"He", verb:"eat", answer:"is eating", label:"Present Continuous", color:"var(--accent-cont)" },
    { tense:"Simple Past", subject:"They", verb:"buy", answer:"bought", label:"Simple Past", color:"var(--accent-past)" },
    { tense:"Future", subject:"I", verb:"travel", answer:"will travel", label:"Future", color:"var(--accent-future)" },
    { tense:"Simple Present", subject:"He", verb:"study", answer:"studies", label:"Simple Present", color:"var(--accent-present)" },
    { tense:"Present Continuous", subject:"We", verb:"run", answer:"are running", label:"Present Continuous", color:"var(--accent-cont)" },
    { tense:"Simple Past", subject:"She", verb:"see", answer:"saw", label:"Simple Past", color:"var(--accent-past)" },
    { tense:"Future", subject:"We", verb:"start", answer:"will start", label:"Future", color:"var(--accent-future)" },
    { tense:"Simple Present", subject:"They", verb:"teach", answer:"teach", label:"Simple Present", color:"var(--accent-present)" },
    { tense:"Present Continuous", subject:"She", verb:"write", answer:"is writing", label:"Present Continuous", color:"var(--accent-cont)" },
    { tense:"Simple Past", subject:"I", verb:"make", answer:"made", label:"Simple Past", color:"var(--accent-past)" },
    { tense:"Future", subject:"She", verb:"fly", answer:"will fly", label:"Future", color:"var(--accent-future)" },
    { tense:"Simple Present", subject:"It", verb:"snow", answer:"snows", label:"Simple Present", color:"var(--accent-present)" },
    { tense:"Present Continuous", subject:"He", verb:"sleep", answer:"is sleeping", label:"Present Continuous", color:"var(--accent-cont)" },
    { tense:"Simple Past", subject:"We", verb:"win", answer:"won", label:"Simple Past", color:"var(--accent-past)" },
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
      document.getElementById('speedBar').style.width = (speedTimeLeft/60*100) + '%';
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
        recordAnswer(p.tense, true);
        showToast('✅ Correct!');
      } else {
        recordAnswer(p.tense, false);
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