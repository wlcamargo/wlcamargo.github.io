// Renderiza um post individual lendo o arquivo .md indicado por ?slug=...

(function () {
  function formatDate(iso) {
    try {
      return new Date(iso).toLocaleDateString(undefined, {
        year: "numeric", month: "long", day: "numeric"
      });
    } catch (_) { return iso; }
  }

  function findPost(slug) {
    return (SITE_CONFIG.posts || []).find(p => p.slug === slug);
  }

  function notFound() {
    return `
      <div class="post-notfound">
        <h2 data-i18n="blog.notFoundTitle">Post not found</h2>
        <p data-i18n="blog.notFoundSub">The post you're looking for doesn't exist or has been removed.</p>
        <a class="metric-cta" href="blog.html" data-i18n="blog.backToBlog">← Back to blog</a>
      </div>
    `;
  }

  async function renderPost(root) {
    const params = new URLSearchParams(location.search);
    const slug = params.get("slug");
    const post = slug && findPost(slug);

    if (!post) {
      root.innerHTML = notFound();
      return;
    }

    document.title = `${post.title} — Wallace Camargo`;

    const tags = (post.tags || []).map(t => `<span class="post-tag">#${t}</span>`).join("");

    root.innerHTML = `
      <a class="post-back" href="blog.html" data-i18n="blog.backToBlog">← Back to blog</a>
      <header class="post-header">
        <p class="post-date">${formatDate(post.date)}</p>
        <h1 class="post-headline">${post.title}</h1>
        <div class="post-tags">${tags}</div>
      </header>
      <article class="post-body" id="post-body">
        <p class="post-loading" data-i18n="blog.loading">Loading…</p>
      </article>
    `;

    try {
      const resp = await fetch(post.file);
      if (!resp.ok) throw new Error("Failed to load post");
      const md = await resp.text();
      const html = (window.marked && window.marked.parse)
        ? window.marked.parse(md)
        : md.replace(/&/g, "&amp;").replace(/</g, "&lt;");
      document.getElementById("post-body").innerHTML = html;
    } catch (e) {
      document.getElementById("post-body").innerHTML = `
        <p class="post-error">Could not load post content.</p>
      `;
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("post");
    if (!root) return;
    renderPost(root);
    if (typeof applyLanguage === "function") applyLanguage(getCurrentLang());
  });
})();
