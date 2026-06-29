// ══════════════════════════════
//  PROGRESS — Verb To Be
// ══════════════════════════════
function updateProgress() {
  document.getElementById('statXP').textContent = xp;
  document.getElementById('statQ').textContent = totalQ;
  document.getElementById('statAcc').textContent =
    totalQ > 0 ? Math.round((totalCorrect / totalQ) * 100) + '%' : '—';
  document.getElementById('statStreak').textContent = bestStreak;

  const colors = {
    'Present (am/is/are)': 'var(--accent-present)',
    'Past (was/were)':     'var(--accent-past)',
    'Questions':           'var(--accent-cont)',
    'Negations':           'var(--accent-future)',
  };

  const cont = document.getElementById('progressBars');
  cont.innerHTML = Object.entries(topicStats).map(([name, [c, t]]) => {
    const pct = t > 0 ? Math.round((c / t) * 100) : 0;
    return `
      <div class="progress-bar-wrap">
        <div class="progress-bar-label">
          <span>${name}</span>
          <span style="color:${colors[name]}">${t > 0 ? pct + '%' : '—'} (${c}/${t})</span>
        </div>
        <div class="progress-bar">
          <div class="progress-bar-fill" style="width:${pct}%;background:${colors[name]}"></div>
        </div>
      </div>`;
  }).join('');
}
