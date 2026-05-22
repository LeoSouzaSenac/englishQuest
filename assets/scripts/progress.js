// ══════════════════════════════
//  PROGRESS
// ══════════════════════════════
function updateProgress() {
    document.getElementById('statXP').textContent = xp;
    document.getElementById('statQ').textContent = totalQ;
    document.getElementById('statAcc').textContent = totalQ > 0 ? Math.round(totalCorrect/totalQ*100) + '%' : '—';
    document.getElementById('statStreak').textContent = bestStreak;
  
    const colors = { 'Simple Present': 'var(--accent-present)', 'Present Continuous': 'var(--accent-cont)', 'Simple Past': 'var(--accent-past)', 'Future': 'var(--accent-future)' };
    const cont = document.getElementById('progressBars');
    cont.innerHTML = Object.entries(tenseStats).map(([name, [c,t]]) => {
      const pct = t > 0 ? Math.round(c/t*100) : 0;
      return `
        <div class="progress-bar-wrap">
          <div class="progress-bar-label"><span>${name}</span><span style="color:${colors[name]}">${t > 0 ? pct + '%' : '—'} (${c}/${t})</span></div>
          <div class="progress-bar"><div class="progress-bar-fill" style="width:${pct}%;background:${colors[name]}"></div></div>
        </div>`;
    }).join('');
  }