// Renderiza a timeline de experiência a partir de SITE_CONFIG.experiences.

(function () {
  function renderExperience() {
    const items = SITE_CONFIG.experiences.map(e => {
      const bullets = e.bullets.map(b => `<li>${b}</li>`).join("");
      const meta = e.meta ? `<p class="exp-meta">${e.meta}</p>` : "";
      return `
        <li class="exp-item">
          <span class="exp-dot" aria-hidden="true"></span>
          <div class="exp-card">
            <p class="exp-period">${e.period}</p>
            <h3 class="exp-company">${e.company}</h3>
            <p class="exp-role">${e.role}</p>
            ${meta}
            <ul class="exp-bullets">${bullets}</ul>
          </div>
        </li>
      `;
    }).join("");

    return `
      <header class="exp-header">
        <h2 class="exp-title" data-i18n="experience.title">Experience</h2>
        <span class="exp-title-rule"></span>
      </header>
      <ol class="exp-timeline">${items}</ol>
    `;
  }

  document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("experience");
    if (!root) return;
    root.innerHTML = renderExperience();
    if (typeof applyLanguage === "function") applyLanguage(getCurrentLang());
  });
})();
