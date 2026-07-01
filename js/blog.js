// Renderiza a lista de posts do blog a partir de SITE_CONFIG.posts.

(function () {
  function formatDate(iso) {
    try {
      return new Date(iso).toLocaleDateString(undefined, {
        year: "numeric", month: "short", day: "numeric"
      });
    } catch (_) { return iso; }
  }

  function renderBlog() {
    const posts = (SITE_CONFIG.posts || [])
      .slice()
      .sort((a, b) => (b.date || "").localeCompare(a.date || ""));

    if (!posts.length) {
      return `
        <header class="proj-header">
          <h2 class="proj-title" data-i18n="blog.title">Blog</h2>
          <span class="proj-title-rule"></span>
          <p class="proj-sub" data-i18n="blog.empty">No posts yet — check back soon.</p>
        </header>
      `;
    }

    const cards = posts.map(p => {
      const tags = (p.tags || []).map(t => `<span class="post-tag">#${t}</span>`).join("");
      return `
        <a class="post-card" href="post.html?slug=${encodeURIComponent(p.slug)}">
          <p class="post-date">${formatDate(p.date)}</p>
          <h3 class="post-title">${p.title}</h3>
          <p class="post-summary">${p.summary || ""}</p>
          <div class="post-tags">${tags}</div>
          <span class="post-cta" data-i18n="blog.readMore">Read post →</span>
        </a>
      `;
    }).join("");

    return `
      <header class="proj-header">
        <h2 class="proj-title" data-i18n="blog.title">Blog</h2>
        <span class="proj-title-rule"></span>
        <p class="proj-sub" data-i18n="blog.sub">Notes and tutorials on Data Engineering and the modern data stack.</p>
      </header>
      <div class="post-grid">${cards}</div>
    `;
  }

  document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("blog");
    if (!root) return;
    root.innerHTML = renderBlog();
    if (typeof applyLanguage === "function") applyLanguage(getCurrentLang());
  });
})();
