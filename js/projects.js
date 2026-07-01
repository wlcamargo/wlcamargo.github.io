// Renderiza a página Projects com métricas dinâmicas do GitHub e YouTube.
// Os números em SITE_CONFIG.metrics são fallback caso as APIs falhem.

(function () {
  function formatCompact(n) {
    if (n == null || isNaN(n)) return "—";
    n = Number(n);
    if (n >= 1_000_000) return (n / 1_000_000).toFixed(2).replace(".", ",") + "M";
    if (n >= 1_000)     return (n / 1_000).toFixed(2).replace(".", ",") + "K";
    return String(n);
  }

  async function fetchGithubStats(username) {
    const out = {};
    try {
      const r = await fetch(`https://api.github.com/users/${username}`);
      if (r.ok) {
        const j = await r.json();
        out.repositories = j.public_repos;
      }
    } catch (_) {}
    try {
      const r = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
      if (r.ok) {
        const j = await r.json();
        if (j.total) {
          out.contributions = j.total.lastYear ?? Object.values(j.total)[0];
        }
      }
    } catch (_) {}
    return out;
  }

  async function fetchYoutubeStats(handle) {
    const clean = handle.replace(/^@/, "");
    try {
      const r = await fetch(
        `https://yt.lemnoslife.com/noKey/channels?part=statistics&forHandle=@${clean}`
      );
      if (r.ok) {
        const j = await r.json();
        const stats = j.items && j.items[0] && j.items[0].statistics;
        if (stats) {
          return {
            subscribers: formatCompact(stats.subscriberCount),
            videos: Number(stats.videoCount)
          };
        }
      }
    } catch (_) {}
    return {};
  }

  function renderProjects() {
    const m = SITE_CONFIG.metrics;
    const gh = m.github;
    const yt = m.youtube;

    return `
      <header class="proj-header">
        <h2 class="proj-title" data-i18n="projects.title">Projects</h2>
        <span class="proj-title-rule"></span>
        <p class="proj-sub" data-i18n="projects.sub">My open-source contributions and video content.</p>
      </header>

      <div class="metrics-grid">
        <a class="metric-card metric-github" href="${gh.url}" target="_blank" rel="noopener">
          <div class="metric-head">
            <span class="metric-icon">
              <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" aria-hidden="true">
                <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.68 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.71 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.12 3.04.74.81 1.18 1.84 1.18 3.1 0 4.44-2.7 5.42-5.27 5.7.41.36.78 1.07.78 2.16v3.2c0 .31.21.66.79.55 4.56-1.52 7.85-5.83 7.85-10.91C23.5 5.66 18.35.5 12 .5Z"/>
              </svg>
            </span>
            <div class="metric-info">
              <h3 class="metric-title">GitHub</h3>
              <span class="metric-handle">@${gh.username}</span>
            </div>
          </div>
          <ul class="metric-stats">
            <li>
              <span class="stat-value" data-stat="gh-repos">${gh.repositories}</span>
              <span class="stat-label" data-i18n="projects.repos">Repositories</span>
            </li>
            <li>
              <span class="stat-value" data-stat="gh-contribs">${gh.contributions}</span>
              <span class="stat-label" data-i18n="projects.contribs">Contributions (last year)</span>
            </li>
          </ul>
          <div class="metric-extra">
            <img class="gh-chart"
                 src="https://ghchart.rshah.org/2d6cdf/${gh.username}"
                 alt="GitHub contributions chart"
                 loading="lazy" />
          </div>
          <span class="metric-cta" data-i18n="projects.viewGithub">View on GitHub →</span>
        </a>

        <a class="metric-card metric-youtube" href="${yt.url}" target="_blank" rel="noopener">
          <div class="metric-head">
            <span class="metric-icon">
              <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" aria-hidden="true">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2C0 8 0 12 0 12s0 4 .5 5.8a3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 16 24 12 24 12s0-4-.5-5.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z"/>
              </svg>
            </span>
            <div class="metric-info">
              <h3 class="metric-title">YouTube</h3>
              <span class="metric-handle">${yt.handle}</span>
            </div>
          </div>
          <ul class="metric-stats">
            <li>
              <span class="stat-value" data-stat="yt-subs">${yt.subscribers}</span>
              <span class="stat-label" data-i18n="projects.subs">Subscribers</span>
            </li>
            <li>
              <span class="stat-value" data-stat="yt-videos">${yt.videos}</span>
              <span class="stat-label" data-i18n="projects.videos">Videos</span>
            </li>
          </ul>
          <div class="metric-extra metric-extra--yt">
            <p class="yt-note" data-i18n="projects.ytNote">
              Tutorials and walkthroughs on Data Engineering, Python and the modern data stack.
            </p>
          </div>
          <span class="metric-cta" data-i18n="projects.viewYoutube">Watch on YouTube →</span>
        </a>
      </div>
    `;
  }

  async function hydrateStats() {
    const m = SITE_CONFIG.metrics;
    const [ghStats, ytStats] = await Promise.all([
      fetchGithubStats(m.github.username),
      fetchYoutubeStats(m.youtube.handle)
    ]);

    const setStat = (key, value) => {
      if (value == null || value === "—") return;
      const el = document.querySelector(`[data-stat="${key}"]`);
      if (el) el.textContent = value;
    };

    setStat("gh-repos",    ghStats.repositories);
    setStat("gh-contribs", ghStats.contributions);
    setStat("yt-subs",     ytStats.subscribers);
    setStat("yt-videos",   ytStats.videos);
  }

  document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("projects");
    if (!root) return;
    root.innerHTML = renderProjects();
    if (typeof applyLanguage === "function") applyLanguage(getCurrentLang());
    hydrateStats();
  });
})();
