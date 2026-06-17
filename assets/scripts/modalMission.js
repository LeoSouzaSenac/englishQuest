// ══════════════════════════════════════════════════════
//  MODAL MISSION — Modal Verbs Game
// ══════════════════════════════════════════════════════

const modalMissionData = {
  easy: [
    {
      ticket: "TICKET #001 · Code Review",
      context: "A senior dev is reviewing a pull request.",
      message: "Developers ___ document all public methods.",
      options: ["should", "working", "worked", "works"],
      answer: "should",
      explanation: "'Should' expresses recommendation — it's the right modal when suggesting best practices.",
      modal: "should"
    },
    {
      ticket: "TICKET #002 · Security Policy",
      context: "The team is writing security rules for the app.",
      message: "Users ___ share their passwords with anyone.",
      options: ["must not", "is not", "not have", "was not"],
      answer: "must not",
      explanation: "'Must not' expresses prohibition — a strict rule that cannot be broken.",
      modal: "must not"
    },
    {
      ticket: "TICKET #003 · Sprint Planning",
      context: "The PM is describing what the team is capable of.",
      message: "We ___ deploy the new feature today.",
      options: ["can", "is", "working", "has"],
      answer: "can",
      explanation: "'Can' expresses ability or possibility in the present.",
      modal: "can"
    },
    {
      ticket: "TICKET #004 · Bug Report",
      context: "A developer explains what needs to happen urgently.",
      message: "The team ___ fix this bug before the release.",
      options: ["has to", "have", "is fix", "was to"],
      answer: "has to",
      explanation: "'Has to' expresses necessity — something required by the situation.",
      modal: "has to"
    },
    {
      ticket: "TICKET #005 · User Access",
      context: "The admin is setting permissions in the dashboard.",
      message: "Regular users ___ access the admin panel.",
      options: ["cannot", "not should", "is not", "doesn't"],
      answer: "cannot",
      explanation: "'Cannot' expresses impossibility or prohibition — users are blocked from this action.",
      modal: "cannot"
    },
    {
      ticket: "TICKET #006 · Design Review",
      context: "A designer is suggesting improvements to the UI.",
      message: "We ___ redesign the login page to be simpler.",
      options: ["could", "worked", "is could", "were"],
      answer: "could",
      explanation: "'Could' expresses suggestion — it presents an idea without forcing it.",
      modal: "could"
    },
    {
      ticket: "TICKET #007 · Deployment Checklist",
      context: "Before deploying, the lead checks the rules.",
      message: "All tests ___ pass before we deploy.",
      options: ["must", "is", "were", "has working"],
      answer: "must",
      explanation: "'Must' expresses obligation — a non-negotiable requirement.",
      modal: "must"
    },
    {
      ticket: "TICKET #008 · Team Message",
      context: "A developer is asking permission for a task.",
      message: "___ we push the update to production now?",
      options: ["Can", "Is", "Should we", "Were"],
      answer: "Can",
      explanation: "'Can' is used to ask for permission or check possibility.",
      modal: "can"
    }
  ],
  medium: [
    {
      ticket: "TICKET #009 · Performance Issue",
      context: "The app is running slowly. The team discusses solutions.",
      message: "We ___ optimize the database queries to improve speed.",
      options: ["should", "must not", "cannot", "has to"],
      answer: "should",
      explanation: "'Should' is the right choice for a recommendation — not mandatory, but strongly advised.",
      modal: "should"
    },
    {
      ticket: "TICKET #010 · API Documentation",
      context: "The project manager is setting requirements for the new API.",
      message: "The API ___ validate all incoming requests before processing.",
      options: ["must", "could", "should", "can"],
      answer: "must",
      explanation: "'Must' shows obligation — validating requests is a hard requirement, not optional.",
      modal: "must"
    },
    {
      ticket: "TICKET #011 · Brainstorm Session",
      context: "The team is exploring ways to improve user experience.",
      message: "We ___ add a dark mode to the interface.",
      options: ["could", "must not", "has to", "cannot"],
      answer: "could",
      explanation: "'Could' expresses a possibility or suggestion — it's an option worth considering.",
      modal: "could"
    },
    {
      ticket: "TICKET #012 · Compliance Rule",
      context: "Legal team has sent requirements for data handling.",
      message: "The system ___ store personal data without encryption.",
      options: ["must not", "should", "can", "could"],
      answer: "must not",
      explanation: "'Must not' expresses a strict prohibition — this is a legal requirement.",
      modal: "must not"
    },
    {
      ticket: "TICKET #013 · Onboarding",
      context: "A new developer asks about the team's workflow.",
      message: "Junior developers ___ ask for code reviews before merging.",
      options: ["should", "cannot", "must not", "could not"],
      answer: "should",
      explanation: "'Should' is a recommendation — it's best practice, but not a strict rule.",
      modal: "should"
    },
    {
      ticket: "TICKET #014 · Server Maintenance",
      context: "DevOps is explaining what's needed for the maintenance window.",
      message: "We ___ restart the server to apply the security patch.",
      options: ["have to", "should not", "cannot", "could not"],
      answer: "have to",
      explanation: "'Have to' expresses necessity — the restart is required, not optional.",
      modal: "have to"
    },
    {
      ticket: "TICKET #015 · Feature Request",
      context: "A product manager is asking about technical possibilities.",
      message: "___ we integrate real-time notifications into the app?",
      options: ["Can", "Must", "Should we", "Have to"],
      answer: "Can",
      explanation: "'Can' asks about possibility or capability — is it technically feasible?",
      modal: "can"
    },
    {
      ticket: "TICKET #016 · Support Ticket",
      context: "A user reports they can't reset their password.",
      message: "Users ___ reset their passwords — this is a critical bug.",
      options: ["cannot", "should not", "must not", "could not"],
      answer: "cannot",
      explanation: "'Cannot' describes an impossibility — the feature is broken and unavailable.",
      modal: "cannot"
    }
  ],
  hard: [
    {
      ticket: "TICKET #017 · Architecture Decision",
      context: "The tech lead explains why a change is essential for scalability.",
      message: "We ___ migrate to microservices, or the system will fail under load.",
      options: ["must", "could", "should", "can"],
      answer: "must",
      explanation: "'Must' is correct here — the consequence ('will fail') makes this an obligation, not a suggestion.",
      modal: "must"
    },
    {
      ticket: "TICKET #018 · Risk Assessment",
      context: "The security analyst is identifying a potential vulnerability.",
      message: "An attacker ___ access user data if we don't fix this XSS vulnerability.",
      options: ["could", "must", "has to", "should"],
      answer: "could",
      explanation: "'Could' expresses a realistic possibility — the risk exists but isn't certain.",
      modal: "could"
    },
    {
      ticket: "TICKET #019 · Client Meeting",
      context: "A developer explains a limitation to a client.",
      message: "The free plan ___ support more than 100 users simultaneously.",
      options: ["cannot", "must not", "should not", "has not to"],
      answer: "cannot",
      explanation: "'Cannot' is the right choice — it's a technical/business limitation, not a rule or prohibition.",
      modal: "cannot"
    },
    {
      ticket: "TICKET #020 · Code Standard",
      context: "The CTO is setting coding standards for the whole company.",
      message: "Every function ___ have a descriptive name and a docstring.",
      options: ["must", "could", "can", "would"],
      answer: "must",
      explanation: "'Must' is mandatory — this is a company standard, not a recommendation.",
      modal: "must"
    },
    {
      ticket: "TICKET #021 · Sprint Retrospective",
      context: "The team reflects on what could improve the next sprint.",
      message: "We ___ have written better test cases — the bug slipped through QA.",
      options: ["should have", "must have", "could", "has to"],
      answer: "should have",
      explanation: "'Should have' expresses regret about a past action — it was the right thing to do but wasn't done.",
      modal: "should have"
    },
    {
      ticket: "TICKET #022 · Post-mortem",
      context: "The team analyses a critical production failure.",
      message: "The backup system ___ activated automatically, but it didn't.",
      options: ["should have", "must", "could have", "has to"],
      answer: "should have",
      explanation: "'Should have' expresses expectation about a past event that didn't happen as expected.",
      modal: "should have"
    },
    {
      ticket: "TICKET #023 · Debugging Session",
      context: "A developer explains a possible cause for a bug.",
      message: "The issue ___ be caused by a race condition in the async calls.",
      options: ["could", "must not", "has to", "should have"],
      answer: "could",
      explanation: "'Could' expresses possibility when the cause isn't confirmed yet.",
      modal: "could"
    },
    {
      ticket: "TICKET #024 · Release Notes",
      context: "The team is writing notes about a breaking change in the API.",
      message: "Developers ___ update their integration code before upgrading to v3.0.",
      options: ["must", "could", "should not", "cannot"],
      answer: "must",
      explanation: "'Must' is correct — this is a non-optional requirement for upgrading.",
      modal: "must"
    }
  ]
};

// ─── STATE ───────────────────────────────────────────
let mmState = {
  level: null,
  queue: [],
  index: 0,
  score: 0,
  correct: 0,
  selected: null,
  answered: false,
  combo: 0,
  maxCombo: 0,
  xpEarned: 0
};

// ─── INIT ─────────────────────────────────────────────
function loadModalMission() {
  renderLevelSelect();
}

function startModalMission(level) {
  mmState = {
    level,
    queue: [...modalMissionData[level]].sort(() => Math.random() - 0.5),
    index: 0,
    score: 0,
    correct: 0,
    selected: null,
    answered: false,
    combo: 0,
    maxCombo: 0,
    xpEarned: 0
  };
  renderMMQuestion();
}

// ─── RENDER LEVEL SELECT ──────────────────────────────
function renderLevelSelect() {
  const page = document.getElementById('page-modal');
  if (!page) return;

  const levels = [
    { id: 'easy',   icon: '🟢', label: 'Easy',   desc: 'Basic modals in clear tech contexts. Great for beginners.', color: '#10b981' },
    { id: 'medium', icon: '🟡', label: 'Medium', desc: 'Choose the right modal when multiple seem possible.', color: '#f59e0b' },
    { id: 'hard',   icon: '🔴', label: 'Hard',   desc: 'Complex scenarios including past modals. Pro level!', color: '#ef4444' }
  ];

  page.innerHTML = `
    <div class="section-title">🛠️ Modal Mission</div>
    <div class="mm-level-screen">
      <div class="mm-intro">
        <div class="mm-intro-icon">💼</div>
        <h2 class="mm-intro-title">You've got tickets!</h2>
        <p class="mm-intro-sub">Read the tech team's messages and fill in the correct modal verb. Choose your difficulty level to start.</p>
      </div>
      <div class="mm-levels">
        ${levels.map(l => `
          <div class="mm-level-card" onclick="startModalMission('${l.id}')">
            <div class="mm-level-icon">${l.icon}</div>
            <div class="mm-level-info">
              <div class="mm-level-name" style="color:${l.color}">${l.label}</div>
              <div class="mm-level-desc">${l.desc}</div>
            </div>
            <div class="mm-level-arrow">→</div>
          </div>
        `).join('')}
      </div>
      <div class="mm-modal-ref">
        <div class="mm-ref-title">📋 Quick Reference</div>
        <div class="mm-ref-grid">
          <div class="mm-ref-item"><span class="mm-modal-tag">can</span> ability / possibility</div>
          <div class="mm-ref-item"><span class="mm-modal-tag">could</span> suggestion / possibility</div>
          <div class="mm-ref-item"><span class="mm-modal-tag">should</span> recommendation</div>
          <div class="mm-ref-item"><span class="mm-modal-tag">must</span> obligation / rule</div>
          <div class="mm-ref-item"><span class="mm-modal-tag">have to</span> necessity</div>
          <div class="mm-ref-item"><span class="mm-modal-tag">cannot</span> prohibition / impossibility</div>
        </div>
      </div>
    </div>
  `;
}

// ─── RENDER QUESTION ──────────────────────────────────
function renderMMQuestion() {
  const page = document.getElementById('page-modal');
  if (!page) return;

  const total = mmState.queue.length;
  const q = mmState.queue[mmState.index];
  const progress = ((mmState.index) / total) * 100;

  const levelColors = { easy: '#10b981', medium: '#f59e0b', hard: '#ef4444' };
  const levelColor = levelColors[mmState.level];

  page.innerHTML = `
    <div class="section-title">🛠️ Modal Mission <span style="font-size:0.85rem;color:var(--muted);font-weight:400;text-transform:none">• ${mmState.level.charAt(0).toUpperCase() + mmState.level.slice(1)}</span></div>

    <div class="mm-hud">
      <div class="mm-hud-item">Ticket <strong>${mmState.index + 1}/${total}</strong></div>
      <div class="mm-hud-item">Score <strong style="color:${levelColor}">${mmState.score}</strong></div>
      <div class="mm-hud-item">🔥 Combo <strong>${mmState.combo}x</strong></div>
      <button class="btn btn-outline btn-sm" onclick="renderLevelSelect()" style="margin-left:auto">← Níveis</button>
    </div>

    <div class="mm-progress-bar"><div class="mm-progress-fill" style="width:${progress}%;background:${levelColor}"></div></div>

    <div class="mm-ticket">
      <div class="mm-ticket-header">
        <span class="mm-ticket-id">${q.ticket}</span>
        <span class="mm-modal-tag mm-tag-float">${q.modal}</span>
      </div>
      <div class="mm-ticket-context">${q.context}</div>
      <div class="mm-ticket-message" id="mmMessage">
        ${renderMessageWithBlank(q.message, null)}
      </div>
    </div>

    <div class="mm-options" id="mmOptions">
      ${q.options.map(opt => `
        <button class="mm-option" onclick="selectMMOption('${opt.replace(/'/g,"\\'")}', this)">${opt}</button>
      `).join('')}
    </div>

    <div class="mm-feedback" id="mmFeedback" style="display:none"></div>

    <div class="mm-controls" id="mmControls" style="display:none">
      <button class="btn btn-primary" onclick="nextMMQuestion()">
        ${mmState.index + 1 < total ? 'Próximo Ticket →' : 'Ver Resultado 🏁'}
      </button>
    </div>
  `;

  mmState.answered = false;
  mmState.selected = null;
}

function renderMessageWithBlank(message, selected) {
  if (!selected) {
    return message.replace('___', '<span class="mm-blank">___</span>');
  }
  return message.replace('___', `<span class="mm-blank-filled">${selected}</span>`);
}

// ─── SELECT OPTION ────────────────────────────────────
function selectMMOption(option, btn) {
  if (mmState.answered) return;

  mmState.answered = true;
  mmState.selected = option;

  const q = mmState.queue[mmState.index];
  const isCorrect = option === q.answer;

  // Update message display
  document.getElementById('mmMessage').innerHTML = renderMessageWithBlank(q.message, option);

  // Style all buttons
  document.querySelectorAll('.mm-option').forEach(b => {
    b.disabled = true;
    const bOpt = b.textContent.trim();
    if (bOpt === q.answer) {
      b.classList.add('mm-correct');
    } else if (bOpt === option && !isCorrect) {
      b.classList.add('mm-wrong');
    }
  });

  // Score
  if (isCorrect) {
    mmState.combo++;
    if (mmState.combo > mmState.maxCombo) mmState.maxCombo = mmState.combo;
    mmState.correct++;
    const xp = mmState.level === 'easy' ? 10 : mmState.level === 'medium' ? 15 : 20;
    const bonus = mmState.combo >= 3 ? Math.floor(xp * 0.5) : 0;
    const earned = xp + bonus;
    mmState.score += earned;
    mmState.xpEarned += earned;
    addXP(earned);
    showToast(`+${earned} XP${bonus > 0 ? ' 🔥 Combo Bonus!' : ''}`);
  } else {
    mmState.combo = 0;
  }

  // Feedback
  const fb = document.getElementById('mmFeedback');
  fb.style.display = 'block';
  fb.className = `mm-feedback ${isCorrect ? 'mm-fb-correct' : 'mm-fb-wrong'}`;
  fb.innerHTML = `
    <div class="mm-fb-icon">${isCorrect ? '✅' : '❌'}</div>
    <div>
      <strong>${isCorrect ? 'Correct!' : `Wrong. The answer is "${q.answer}"`}</strong>
      <p style="margin:4px 0 0;font-size:0.88rem;opacity:0.85">${q.explanation}</p>
    </div>
  `;

  // Show next button
  document.getElementById('mmControls').style.display = 'flex';

  // Update stats
  updateProgress();
}

// ─── NEXT QUESTION ────────────────────────────────────
function nextMMQuestion() {
  mmState.index++;
  if (mmState.index >= mmState.queue.length) {
    renderMMResult();
  } else {
    renderMMQuestion();
  }
}

// ─── RESULT SCREEN ────────────────────────────────────
function renderMMResult() {
  const page = document.getElementById('page-modal');
  const total = mmState.queue.length;
  const pct = Math.round((mmState.correct / total) * 100);

  const levelColors = { easy: '#10b981', medium: '#f59e0b', hard: '#ef4444' };
  const color = levelColors[mmState.level];

  let medal = '🥉', msg = 'Keep practicing — you\'ll get there!';
  if (pct >= 90) { medal = '🏆'; msg = 'Outstanding! You mastered modal verbs!'; }
  else if (pct >= 70) { medal = '🥇'; msg = 'Great job! Modal verbs are becoming natural for you.'; }
  else if (pct >= 50) { medal = '🥈'; msg = 'Good effort! Review the quick reference and try again.'; }

  page.innerHTML = `
    <div class="section-title">🛠️ Modal Mission</div>
    <div class="mm-result">
      <div class="mm-result-medal">${medal}</div>
      <h2 class="mm-result-title">${msg}</h2>

      <div class="mm-result-stats">
        <div class="mm-result-stat">
          <div class="mm-result-val" style="color:${color}">${pct}%</div>
          <div class="mm-result-label">Accuracy</div>
        </div>
        <div class="mm-result-stat">
          <div class="mm-result-val">${mmState.correct}/${total}</div>
          <div class="mm-result-label">Correct</div>
        </div>
        <div class="mm-result-stat">
          <div class="mm-result-val" style="color:#f59e0b">🔥 ${mmState.maxCombo}x</div>
          <div class="mm-result-label">Best Combo</div>
        </div>
        <div class="mm-result-stat">
          <div class="mm-result-val" style="color:var(--accent-future)">+${mmState.xpEarned}</div>
          <div class="mm-result-label">XP Earned</div>
        </div>
      </div>

      <div class="mm-result-actions">
        <button class="btn btn-primary" onclick="startModalMission('${mmState.level}')">🔄 Play Again</button>
        <button class="btn btn-outline" onclick="renderLevelSelect()">← Change Level</button>
      </div>
    </div>
  `;

  if (typeof triggerSparkles === 'function' && pct >= 70) triggerSparkles();
}
