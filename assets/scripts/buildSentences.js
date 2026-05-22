// ══════════════════════════════
//  BUILD SENTENCE (Drag words)
// ══════════════════════════════
const buildData = [
    { words:["every","She","day","English","studies"], answer:["She","studies","English","every","day"], hint:"Simple Present — ela estuda inglês todo dia", tense:"Simple Present" },
    { words:["now","They","football","playing","are"], answer:["They","are","playing","football","now"], hint:"Present Continuous — eles estão jogando futebol agora", tense:"Present Continuous" },
    { words:["visited","museum","last","We","week","the"], answer:["We","visited","the","museum","last","week"], hint:"Simple Past — nós visitamos o museu semana passada", tense:"Simple Past" },
    { words:["tomorrow","will","I","you","call"], answer:["I","will","call","you","tomorrow"], hint:"Future — eu vou te ligar amanhã", tense:"Future" },
    { words:["her","is","homework","She","doing"], answer:["She","is","doing","her","homework"], hint:"Present Continuous — ela está fazendo o dever de casa", tense:"Present Continuous" },
    { words:["bought","dress","new","She","a","yesterday"], answer:["She","bought","a","new","dress","yesterday"], hint:"Simple Past — ela comprou um vestido novo ontem", tense:"Simple Past" },
    { words:["rain","It","tomorrow","will"], answer:["It","will","rain","tomorrow"], hint:"Future — vai chover amanhã", tense:"Future" },
    { words:["works","hospital","He","in","a"], answer:["He","works","in","a","hospital"], hint:"Simple Present — ele trabalha em um hospital", tense:"Simple Present" },
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
      s.innerHTML = '<span class="slot-placeholder">Arraste as palavras aqui em ordem...</span>';
    } else {
      s.innerHTML = buildPlaced.map((w,i) =>
        `<span class="slot-word" onclick="removeFromSlot(${i})">${w} ✕</span>`
      ).join('');
    }
  }
  
  function renderBuildWords() {
    const d = buildData[buildIdx];
    const shuffled = [...d.words].sort(() => Math.random() - .5);
    const w = document.getElementById('buildWords');
    w.innerHTML = shuffled.filter(ww => !buildPlaced.includes(ww)).map(ww =>
      `<span class="drag-word" onclick="placeWord('${ww}')">${ww}</span>`
    ).join('');
  }
  
  function placeWord(w) {
    buildPlaced.push(w);
    renderBuildSlots();
    renderBuildWords();
  }
  
  function removeFromSlot(i) {
    buildPlaced.splice(i, 1);
    renderBuildSlots();
    renderBuildWords();
  }
  
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
    recordAnswer(d.tense, correct);
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