// Renderiza a seção hero da Home a partir de SITE_CONFIG.

(function () {
  function renderHero() {
    const certs = SITE_CONFIG.certifications.map(c => `
      <a href="${c.url}" target="_blank" rel="noopener" class="cert-card" title="${c.name}">
        <img src="${c.image}" alt="${c.name}" />
      </a>
    `).join("");

    return `
      <div class="hero-top">
        <img class="hero-photo" src="${SITE_CONFIG.heroImage}" alt="${SITE_CONFIG.brand}" />
        <div class="hero-right">
          <p class="hero-greeting" data-i18n="hero.greeting">Hi there! I'm</p>
          <h2 class="hero-role" id="hero-role">${SITE_CONFIG.heroRoles[0]}</h2>
          <a class="hero-resume" href="${SITE_CONFIG.resumePath}" download data-i18n="hero.resume">Resume</a>
        </div>
      </div>
      <div class="hero-certs">
        <div class="cert-grid">${certs}</div>
      </div>
    `;
  }

  function setupRoleRotator() {
    const el = document.getElementById("hero-role");
    if (!el) return;
    const roles = SITE_CONFIG.heroRoles;

    const TYPE_SPEED   = 80;   // ms por caractere ao digitar
    const ERASE_SPEED  = 40;   // ms por caractere ao apagar
    const HOLD_FULL    = 1800; // ms parado com o texto completo
    const HOLD_EMPTY   = 250;  // ms entre palavras

    let roleIdx = 0;
    let charIdx = 0;
    let phase = "typing";

    function tick() {
      const current = roles[roleIdx];

      if (phase === "typing") {
        charIdx++;
        el.textContent = current.slice(0, charIdx);
        if (charIdx >= current.length) {
          phase = "holding-full";
          setTimeout(tick, HOLD_FULL);
        } else {
          setTimeout(tick, TYPE_SPEED);
        }
      } else if (phase === "holding-full") {
        phase = "erasing";
        setTimeout(tick, ERASE_SPEED);
      } else if (phase === "erasing") {
        charIdx--;
        el.textContent = current.slice(0, charIdx);
        if (charIdx <= 0) {
          roleIdx = (roleIdx + 1) % roles.length;
          phase = "typing";
          setTimeout(tick, HOLD_EMPTY);
        } else {
          setTimeout(tick, ERASE_SPEED);
        }
      }
    }

    el.textContent = "";
    el.classList.add("typewriter");
    setTimeout(tick, 400);
  }

  document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("hero");
    if (!root) return;
    root.innerHTML = renderHero();
    setupRoleRotator();
    if (typeof applyLanguage === "function") applyLanguage(getCurrentLang());
  });
})();
