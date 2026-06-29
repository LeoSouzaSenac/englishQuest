// ══════════════════════════════
//  STATE — Verb To Be
// ══════════════════════════════
let xp = 0;
let totalQ = 0, totalCorrect = 0, bestStreak = 0;

const topicStats = {
  'Present (am/is/are)': [0, 0],
  'Past (was/were)':     [0, 0],
  'Questions':           [0, 0],
  'Negations':           [0, 0],
};

function addXP(n) {
  xp += n;
  document.getElementById('xpDisplay').textContent = xp;
  showToast(`+${n} XP ⚡`, 'xp');
  updateProgress();
}

function showToast(msg, cls = '') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast ' + cls + ' show';
  setTimeout(() => t.classList.remove('show'), 1800);
}

function switchTab(id) {
  const allIds = ['home','quiz','error','build','story','speed','milhao','hangman','progress'];
  document.querySelectorAll('.tab').forEach((t, i) => {
    t.classList.toggle('active', allIds[i] === id);
  });
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const pg = document.getElementById('page-' + id);
  if (pg) pg.classList.add('active');
  if (id === 'progress') updateProgress();
}

function recordAnswer(topic, correct) {
  totalQ++;
  if (correct) totalCorrect++;
  if (topicStats[topic]) {
    topicStats[topic][1]++;
    if (correct) topicStats[topic][0]++;
  }
}
