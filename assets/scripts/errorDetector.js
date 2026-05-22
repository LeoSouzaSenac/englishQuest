
// ══════════════════════════════
//  ERROR DETECTOR
// ══════════════════════════════
const errorData = [
    { wrong:"She don't like coffee.", correct:"She doesn't like coffee.", err:"don't","fix":"doesn't", tense:"Simple Present", exp:"He/She/It → doesn't (not don't)" },
    { wrong:"They is playing soccer now.", correct:"They are playing soccer now.", err:"is","fix":"are", tense:"Present Continuous", exp:"They → are (not is)" },
    { wrong:"He goed to work yesterday.", correct:"He went to work yesterday.", err:"goed","fix":"went", tense:"Simple Past", exp:"go é irregular → went (não goed)" },
    { wrong:"I will to call you later.", correct:"I will call you later.", err:"to call","fix":"call", tense:"Future", exp:"After 'will' → base form, no 'to'" },
    { wrong:"She study English every night.", correct:"She studies English every night.", err:"study","fix":"studies", tense:"Simple Present", exp:"She → studies (acrescenta -es)" },
    { wrong:"He is eat lunch right now.", correct:"He is eating lunch right now.", err:"eat","fix":"eating", tense:"Present Continuous", exp:"Present Continuous → is + V-ing (eating)" },
    { wrong:"We buyed a new car last week.", correct:"We bought a new car last week.", err:"buyed","fix":"bought", tense:"Simple Past", exp:"buy é irregular → bought (não buyed)" },
    { wrong:"They will going to the party.", correct:"They will go to the party.", err:"going","fix":"go", tense:"Future", exp:"will + base form (not going)" },
    { wrong:"He don't works here anymore.", correct:"He doesn't work here anymore.", err:"don't works","fix":"doesn't work", tense:"Simple Present", exp:"He → doesn't + base form (not don't works)" },
    { wrong:"She was walking when she heared a noise.", correct:"She was walking when she heard a noise.", err:"heared","fix":"heard", tense:"Simple Past", exp:"hear é irregular → heard (não heared)" },
  ];
  
  let errIdx = 0, errScore = 0;
  
  function loadError() {
    if (errIdx >= errorData.length) {
      document.getElementById('errSentence').innerHTML = `<strong>🎉 Parabéns!</strong> Você acertou ${errScore} de ${errorData.length}!`;
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
    const after = d.wrong.substring(wrongIdx + d.err.length);
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
      recordAnswer(d.tense, true);
      setTimeout(() => { errIdx++; loadError(); }, 1500);
    } else {
      fb.className = 'quiz-feedback wrong';
      fb.textContent = `❌ Tente novamente. Dica: corrija "${d.err}" → "${d.fix}"`;
      document.getElementById('errInput').className = 'error-input wrong-input';
      recordAnswer(d.tense, false);
    }
    fb.style.display = 'block';
  }
  
  function skipError() { errIdx++; loadError(); }
  function resetError() { errIdx = 0; errScore = 0; document.getElementById('errInput').style.display = ''; loadError(); }
  
  document.getElementById('errInput').addEventListener('keydown', e => { if (e.key === 'Enter') checkError(); });