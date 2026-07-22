// Renderiza navbar e footer em todas as páginas a partir de SITE_CONFIG.
// Não edite este arquivo para mudanças de conteúdo — use js/config.js ou js/i18n.js.

(function () {
  const currentPage = (location.pathname.split("/").pop() || "index.html").toLowerCase();

  // ---------- NAVBAR ----------
  function renderHeader() {
    const navLinks = SITE_CONFIG.nav.map(item => {
      const active = item.href.toLowerCase() === currentPage ? " active" : "";
      return `<a href="${item.href}" class="nav-link${active}" data-i18n="nav.${item.key}">${item.label}</a>`;
    }).join("");

    const langOptions = LANGUAGES.map(l => `
      <button type="button" class="lang-option" data-lang="${l.code}">
        <span class="flag-img">${FLAGS[l.code]}</span>
        <span class="lang-name">${l.name}</span>
      </button>
    `).join("");

    return `
      <nav class="navbar">
        <a href="index.html" class="brand">${SITE_CONFIG.brand}</a>
        <div class="nav-links" id="nav-links">${navLinks}</div>
        <div class="nav-actions">
          <button id="theme-toggle" class="icon-btn" aria-label="Toggle theme" title="Theme">
            <span class="theme-icon">🌙</span>
          </button>
          <div class="lang-combo">
            <button id="lang-current" type="button" class="lang-current" aria-haspopup="listbox" aria-expanded="false">
              <span class="flag-img" id="lang-current-flag"></span>
              <span class="chevron">▾</span>
            </button>
            <div id="lang-menu" class="lang-menu" hidden role="listbox">
              ${langOptions}
            </div>
          </div>
          <button id="notif-btn" class="icon-btn notif" aria-label="Notifications" title="Notifications">
            🔔<span class="notif-badge">1</span>
          </button>
          <div id="notif-popover" class="notif-popover" hidden>
            <p id="notif-text" data-i18n="notification">${SITE_CONFIG.notification}</p>
          </div>
          <button id="nav-toggle" class="icon-btn nav-toggle" aria-label="Menu" aria-controls="nav-links" aria-expanded="false">
            <span class="burger"></span>
          </button>
        </div>
      </nav>
    `;
  }

  // ---------- FOOTER ----------
  function renderFooter() {
    const items = SITE_CONFIG.socials.map(s => `
      <a href="${s.url}" target="_blank" rel="noopener" class="social social-${s.icon}" title="${s.name}" aria-label="${s.name}">
        ${SOCIAL_ICONS[s.icon] || ""}
      </a>
    `).join("");

    return `<div class="footer-inner">${items}</div>`;
  }

  // ---------- LANGUAGE COMBOBOX ----------
  function setupLangCombo() {
    const current   = document.getElementById("lang-current");
    const flagSlot  = document.getElementById("lang-current-flag");
    const menu      = document.getElementById("lang-menu");
    if (!current || !menu) return;

    const setFlag = (lang) => { flagSlot.innerHTML = FLAGS[lang] || FLAGS.en; };
    setFlag(getCurrentLang());

    current.addEventListener("click", (e) => {
      e.stopPropagation();
      const expanded = current.getAttribute("aria-expanded") === "true";
      current.setAttribute("aria-expanded", String(!expanded));
      menu.hidden = expanded;
    });

    menu.querySelectorAll(".lang-option").forEach(opt => {
      opt.addEventListener("click", () => {
        const lang = opt.dataset.lang;
        applyLanguage(lang);
        setFlag(lang);
        menu.hidden = true;
        current.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", () => {
      menu.hidden = true;
      current.setAttribute("aria-expanded", "false");
    });
  }

  // ---------- MOBILE NAV TOGGLE ----------
  function setupNavToggle() {
    const toggle = document.getElementById("nav-toggle");
    const links  = document.getElementById("nav-links");
    if (!toggle || !links) return;

    const closeMenu = () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    };

    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    links.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", (e) => {
      if (!links.contains(e.target) && e.target !== toggle) closeMenu();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) closeMenu();
    });
  }

  // ---------- THEME TOGGLE ----------
  function getCurrentTheme() {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    const icon = document.querySelector("#theme-toggle .theme-icon");
    if (icon) icon.textContent = theme === "dark" ? "☀️" : "🌙";
  }

  function setupThemeToggle() {
    const btn = document.getElementById("theme-toggle");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "light";
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }

  // ---------- MOUNT ----------
  document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("site-header");
    const footer = document.getElementById("site-footer");
    if (header) header.innerHTML = renderHeader();
    if (footer) footer.innerHTML = renderFooter();

    // Notification popover
    const notifBtn = document.getElementById("notif-btn");
    const popover  = document.getElementById("notif-popover");
    if (notifBtn && popover) {
      notifBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        popover.hidden = !popover.hidden;
      });
      document.addEventListener("click", () => { popover.hidden = true; });
    }

    setupLangCombo();
    applyLanguage(getCurrentLang());

    setupNavToggle();

    setupThemeToggle();
    applyTheme(getCurrentTheme());
  });
})();
