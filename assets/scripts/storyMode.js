
// ══════════════════════════════
//  STORY MODE
// ══════════════════════════════
const storyData = [
    {
      scene: "Yesterday, Maria ___ (wake) up early.",
      context: "Ontem — ação passada e concluída",
      choices: [{ w:"wakes", correct:false }, { w:"is waking", correct:false }, { w:"woke", correct:true }, { w:"will wake", correct:false }],
      tense: "Simple Past",
      exp: "Simple Past: wake → woke (irregular). 'Yesterday' indica passado."
    },
    {
      scene: "Every morning, she ___ (drink) a cup of coffee before work.",
      context: "Rotina diária",
      choices: [{ w:"drank", correct:false }, { w:"drinks", correct:true }, { w:"is drinking", correct:false }, { w:"will drink", correct:false }],
      tense: "Simple Present",
      exp: "Simple Present: hábito diário. She + drinks (-s)."
    },
    {
      scene: "Right now, she ___ (read) the news on her phone.",
      context: "Ação acontecendo neste momento",
      choices: [{ w:"reads", correct:false }, { w:"read", correct:false }, { w:"is reading", correct:true }, { w:"was reading", correct:false }],
      tense: "Present Continuous",
      exp: "Present Continuous: 'right now' → is reading."
    },
    {
      scene: "Last night, she ___ (meet) her old friend at the restaurant.",
      context: "Ontem à noite — evento passado",
      choices: [{ w:"meets", correct:false }, { w:"met", correct:true }, { w:"is meeting", correct:false }, { w:"will meet", correct:false }],
      tense: "Simple Past",
      exp: "Simple Past: meet → met (irregular). 'last night' indica passado."
    },
    {
      scene: "Tomorrow, Maria ___ (start) a new project at work.",
      context: "Plano para amanhã",
      choices: [{ w:"starts", correct:false }, { w:"started", correct:false }, { w:"is starting", correct:false }, { w:"will start", correct:true }],
      tense: "Future",
      exp: "Future: will + base form. 'Tomorrow' indica futuro."
    },
    {
      scene: "Look at the sky — it ___ (get) dark. It will rain soon.",
      context: "Observação no momento atual",
      choices: [{ w:"gets", correct:false }, { w:"got", correct:false }, { w:"is getting", correct:true }, { w:"will get", correct:false }],
      tense: "Present Continuous",
      exp: "Present Continuous: mudança progressiva observada agora → is getting."
    }
  ];
  
  let storyIdx = 0, storyScore = 0;
  
  function loadStory() {
    if (storyIdx >= storyData.length) {
      document.getElementById('storyContent').innerHTML = `<div style="text-align:center;padding:32px;"><div style="font-size:3rem">🎉</div><div style="font-family:'Syne',sans-serif;font-size:1.5rem;font-weight:900;margin-top:12px;">Fim da história!</div><p style="color:var(--muted);margin-top:8px;">Você acertou ${storyScore} de ${storyData.length}!</p></div>`;
      addXP(storyScore * 12);
      return;
    }
    const d = storyData[storyIdx];
    document.getElementById('storyNum').textContent = storyIdx + 1;
    document.getElementById('storyScore').textContent = storyScore;
    document.getElementById('storyFeedback').style.display = 'none';
  
    const parts = d.scene.split('___');
    document.getElementById('storyContent').innerHTML = `
      <div style="font-size:.75rem;font-weight:700;color:var(--muted);letter-spacing:.1em;text-transform:uppercase;margin-bottom:8px;">${d.context}</div>
      <div class="story-scene">
        <p style="font-size:1.15rem;">${parts[0]}<span class="story-blank">_______</span>${parts[1]}</p>
      </div>
      <div class="story-choices" id="storyChoices"></div>
    `;
    const sc = document.getElementById('storyChoices');
    d.choices.sort(() => Math.random() - .5).forEach(c => {
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
      document.querySelectorAll('.story-choice').forEach(b => { if (d.choices.find(cc => cc.w===b.textContent && cc.correct)) b.classList.add('correct'); });
      fb.className = 'quiz-feedback wrong';
      fb.textContent = '❌ ' + d.exp;
    }
    recordAnswer(d.tense, c.correct);
    fb.style.display = 'block';
    setTimeout(() => { storyIdx++; loadStory(); }, 2200);
  }
  
  function resetStory() { storyIdx = 0; storyScore = 0; loadStory(); }