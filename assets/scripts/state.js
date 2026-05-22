// ══════════════════════════════
//  STATE
// ══════════════════════════════
let xp = 0;
let totalQ = 0, totalCorrect = 0, bestStreak = 0;
const tenseStats = { 'Simple Present': [0,0], 'Present Continuous': [0,0], 'Simple Past': [0,0], 'Future': [0,0] };

function addXP(n) {
  xp += n;
  document.getElementById('xpDisplay').textContent = xp;
  showToast(`+${n} XP ⚡`, 'xp');
  updateProgress();
}

function showToast(msg, cls='') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast ' + cls + ' show';
  setTimeout(() => t.classList.remove('show'), 1800);
}

function switchTab(id) {
  document.querySelectorAll('.tab').forEach((t,i) => {
    const ids = ['home','quiz','error','build','story','speed','milhao','progress', 'progress'];
    t.classList.toggle('active', ids[i] === id);
  });
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-'+id).classList.add('active');
  if (id === 'progress') updateProgress();
}

function recordAnswer(tense, correct) {
  totalQ++;
  if (correct) totalCorrect++;
  if (tenseStats[tense]) {
    tenseStats[tense][1]++;
    if (correct) tenseStats[tense][0]++;
  }
}