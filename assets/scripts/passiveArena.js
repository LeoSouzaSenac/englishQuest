// ══════════════════════════════════════════════════════════════
//  PASSIVE VOICE ARENA — hub with 5 mini-games about passive voice
//  Each mini-game is a self-contained HTML file loaded in an iframe,
//  so none of its CSS/JS touches the rest of the portal.
// ══════════════════════════════════════════════════════════════

const passiveGames = [
  {
    id: "drill",
    icon: "⌨️",
    title: "Passive Drill",
    desc: "Reescreva frases da voz ativa para a passiva. Pool de 20 frases, dificuldade mista, sorteio diferente a cada partida.",
    color: "var(--accent-present)",
    src: "assets/games/passive-drill.html"
  },
  {
    id: "race",
    icon: "🏁",
    title: "Changelog Race",
    desc: "Corrida contra o tempo: transforme o máximo de frases para passive voice em 3 minutos.",
    color: "var(--accent-future)",
    src: "assets/games/passive-race.html"
  },
  {
    id: "quiz",
    icon: "📰",
    title: "Release Notes Quiz",
    desc: "Leia changelogs reais (5 textos diferentes) e responda perguntas de interpretação.",
    color: "var(--accent-cont)",
    src: "assets/games/passive-quiz.html"
  },
  {
    id: "detective",
    icon: "🔍",
    title: "Bug Report Detective",
    desc: "Clique nas palavras da frase para identificar o sujeito e o verbo na voz passiva.",
    color: "var(--accent-past)",
    src: "assets/games/passive-detective.html"
  },
  {
    id: "mystery",
    icon: "🕶️",
    title: "Mystery Feature",
    desc: "Adivinhe a funcionalidade pelas pistas em passive voice — ou crie a sua própria.",
    color: "#b794f6",
    src: "assets/games/passive-mystery.html"
  }
];

function loadPassiveArena() {
  renderPassiveHub();
}

function renderPassiveHub() {
  const page = document.getElementById('page-passive');
  if (!page) return;

  page.innerHTML = `
    <div class="section-title">🔄 Passive Voice Arena <span>5 jogos para praticar a voz passiva</span></div>
    <div class="game-grid">
      ${passiveGames.map(g => `
        <div class="game-card" style="border-color:${g.color};background:linear-gradient(135deg, ${g.color}14, var(--surface));">
          <div class="game-title"><span class="game-icon">${g.icon}</span>${g.title}</div>
          <p class="game-desc">${g.desc}</p>
          <button class="btn" style="background:${g.color};color:#000;font-family:'Syne', sans-serif;font-weight:700;padding:12px 24px;border-radius:50px;border:none;cursor:pointer;" onclick="openPassiveGame('${g.id}')">Jogar →</button>
        </div>
      `).join('')}
    </div>
  `;
}

function openPassiveGame(id) {
  const game = passiveGames.find(g => g.id === id);
  if (!game) return;
  const page = document.getElementById('page-passive');
  if (!page) return;

  page.innerHTML = `
    <div class="section-title">🔄 Passive Voice Arena</div>
    <button class="btn btn-outline btn-sm pv-back-btn" onclick="renderPassiveHub()">← Voltar para a Arena</button>
    <div class="pv-iframe-wrap">
      <iframe src="${game.src}" title="${game.title}" loading="lazy"></iframe>
    </div>
  `;
}
