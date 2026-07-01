// Renderiza a seção About a partir de SITE_CONFIG.

(function () {
  function renderAbout() {
    const a = SITE_CONFIG.about;
    const bullets = a.bullets.map(b => `
      <li class="about-item">
        <span class="about-check" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="20" height="20"><circle cx="12" cy="12" r="11" fill="#22c55e"/><path d="M7 12.5l3.2 3.2L17 9" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </span>
        <span>${b}</span>
      </li>
    `).join("");

    return `
      <div class="about-photo-wrap">
        <img class="about-photo" src="${SITE_CONFIG.aboutImage}" alt="${SITE_CONFIG.brand}" />
      </div>
      <div class="about-content">
        <h2 class="about-title">
          <span data-i18n="about.title">About Me</span>
          <span class="about-rule"></span>
        </h2>
        <p class="about-intro">${a.intro}</p>
        <p class="about-intro">${a.journey}</p>
        <h3 class="about-bullets-title">${a.bulletsTitle}</h3>
        <ul class="about-list">${bullets}</ul>
        <a class="hero-resume about-cta" href="${SITE_CONFIG.resumePath}" download>${a.cta}</a>
      </div>
      <section class="about-location">
        <h2 class="about-title about-location-title">
          <span class="about-rule"></span>
          <span data-i18n="about.location">Location</span>
          <span class="about-rule"></span>
        </h2>
        <div class="about-map">
          <iframe
            title="Amarante, Porto, Portugal"
            src="https://www.google.com/maps?q=Amarante,Porto,Portugal&output=embed"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen></iframe>
        </div>
      </section>
    `;
  }

  document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("about");
    if (!root) return;
    root.innerHTML = renderAbout();
    if (typeof applyLanguage === "function") applyLanguage(getCurrentLang());
  });
})();
