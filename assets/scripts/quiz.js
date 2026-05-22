// ══════════════════════════════
//  QUIZ GAME
// ══════════════════════════════
const quizData = [
    { q:"She ____ to school every day.", opts:["go","goes","is going","went"], ans:1, tense:"Simple Present", exp:"Simple Present: she/he/it + verbo com -s/es" },
    { q:"Right now, they ____ football in the park.", opts:["play","played","are playing","will play"], ans:2, tense:"Present Continuous", exp:"Present Continuous: am/is/are + V-ing para ações acontecendo agora" },
    { q:"I ____ a great movie last night.", opts:["watch","watches","watched","am watching"], ans:2, tense:"Simple Past", exp:"Simple Past: usamos o passado do verbo (watched)" },
    { q:"Tomorrow, we ____ visit our grandparents.", opts:["are","do","will","was"], ans:2, tense:"Future", exp:"Future com will: will + verbo na forma base" },
    { q:"He ____ coffee every morning.", opts:["drink","drinks","is drinking","drank"], ans:1, tense:"Simple Present", exp:"Simple Present: he/she/it → drinks (acrescenta -s)" },
    { q:"Look! The baby ____!", opts:["walks","walk","is walking","walked"], ans:2, tense:"Present Continuous", exp:"'Look!' indica ação acontecendo agora → Present Continuous" },
    { q:"My parents ____ married in 1990.", opts:["get","gets","are getting","got"], ans:3, tense:"Simple Past", exp:"1990 é passado → Simple Past (got - irregular)" },
    { q:"I think it ____ rain this afternoon.", opts:["is","will","does","was"], ans:1, tense:"Future", exp:"'I think' + previsão futura → will" },
    { q:"The sun ____ in the east.", opts:["rise","rises","is rising","rose"], ans:1, tense:"Simple Present", exp:"Fato científico → Simple Present (rises)" },
    { q:"We ____ dinner when you called.", opts:["have","had","are having","were having"], ans:3, tense:"Present Continuous", exp:"Ação em progresso interrompida → Past Continuous (were having)" },
    { q:"She ____ her homework an hour ago.", opts:["finish","finishes","is finishing","finished"], ans:3, tense:"Simple Past", exp:"'an hour ago' indica passado → Simple Past (finished)" },
    { q:"I promise I ____ be late.", opts:["am not","don't","won't","wasn't"], ans:2, tense:"Future", exp:"Promessa futura → won't (will not)" },
    { q:"They ____ English at this school.", opts:["teach","teaches","teaching","taught"], ans:0, tense:"Simple Present", exp:"They (plural) → teach, sem -s" },
    { q:"Be quiet! The baby ____.", opts:["sleep","sleeps","is sleeping","slept"], ans:2, tense:"Present Continuous", exp:"'Be quiet!' → ação em andamento → is sleeping" },
    { q:"We ____ to Paris last summer.", opts:["go","goes","went","will go"], ans:2, tense:"Simple Past", exp:"'last summer' → Simple Past (went - irregular)" },
    { q:"She ____ call you later.", opts:["is","does","will","was"], ans:2, tense:"Future", exp:"Ação futura simples → will" },
    { q:"Dogs ____ meat.", opts:["eats","eat","are eating","ate"], ans:1, tense:"Simple Present", exp:"Hábito geral, sujeito plural → eat" },
    { q:"I ____ a shower right now — call back later!", opts:["take","takes","am taking","took"], ans:2, tense:"Present Continuous", exp:"'right now' → ação em andamento → am taking" },
    { q:"He ____ his keys yesterday.", opts:["lose","loses","is losing","lost"], ans:3, tense:"Simple Past", exp:"'yesterday' + irregular verb → lost" },
    { q:"We ____ graduate next year.", opts:["are","do","will","were"], ans:2, tense:"Future", exp:"Plano futuro → will graduate" },
  ];
  
  let quizIdx = 0, quizScore = 0, quizStreak = 0, quizAnswered = false;
  
  function loadQuiz() {
    if (quizIdx >= quizData.length) {
      document.getElementById('quizQuestion').innerHTML = `<strong>🎉 Fim do Quiz!</strong><br>Você acertou ${quizScore} de ${quizData.length} perguntas!`;
      document.getElementById('quizOptions').innerHTML = '';
      document.getElementById('quizFeedback').style.display = 'none';
      document.getElementById('nextBtn').style.display = 'none';
      addXP(quizScore * 5);
      return;
    }
    const d = quizData[quizIdx];
    document.getElementById('qNum').textContent = quizIdx + 1;
    document.getElementById('qScore').textContent = quizScore;
    document.getElementById('qStreak').textContent = quizStreak;
    document.getElementById('quizQuestion').textContent = d.q;
    document.getElementById('quizFeedback').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'none';
    quizAnswered = false;
  
    const opts = document.getElementById('quizOptions');
    opts.innerHTML = '';
    d.opts.forEach((o, i) => {
      const b = document.createElement('button');
      b.className = 'quiz-opt';
      b.textContent = o;
      b.onclick = () => answerQuiz(i);
      opts.appendChild(b);
    });
  }
  
  function answerQuiz(i) {
    if (quizAnswered) return;
    quizAnswered = true;
    const d = quizData[quizIdx];
    const opts = document.querySelectorAll('.quiz-opt');
    const fb = document.getElementById('quizFeedback');
    opts.forEach(b => b.disabled = true);
    opts[d.ans].classList.add('correct');
  
    if (i === d.ans) {
      quizScore++; quizStreak++;
      if (quizStreak > bestStreak) bestStreak = quizStreak;
      fb.className = 'quiz-feedback correct';
      fb.textContent = '✅ Correto! ' + d.exp;
      addXP(quizStreak >= 3 ? 15 : 10);
    } else {
      opts[i].classList.add('wrong');
      quizStreak = 0;
      fb.className = 'quiz-feedback wrong';
      fb.textContent = '❌ Incorreto. ' + d.exp;
    }
    recordAnswer(d.tense, i === d.ans);
    fb.style.display = 'block';
    document.getElementById('nextBtn').style.display = 'inline-block';
  }
  
  function nextQuestion() { quizIdx++; loadQuiz(); }
  function resetQuiz() { quizIdx = 0; quizScore = 0; quizStreak = 0; loadQuiz(); }