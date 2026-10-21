// Renderiza a página Courses a partir de SITE_CONFIG.courses.

(function () {
  function renderImage(img, course) {
    const href = img.link || course.link;
    const tag = `<img src="${img.src}" alt="${course.title}" loading="lazy" />`;
    return href
      ? `<a class="course-img" href="${href}" target="_blank" rel="noopener">${tag}</a>`
      : `<div class="course-img">${tag}</div>`;
  }

  function renderCourse(c) {
    const imgs = c.images || [];
    const links = [
      c.link ? `<a class="course-link" href="${c.link}" target="_blank" rel="noopener" data-i18n="courses.access">Access course →</a>` : "",
      c.repo ? `<a class="course-link" href="${c.repo}" target="_blank" rel="noopener" data-i18n="courses.repo">Repository →</a>` : ""
    ].join("");

    return `
      <article class="course-card">
        <h3 class="course-title">${c.title}</h3>
        <div class="course-gallery${imgs.length > 1 ? " course-gallery--multi" : ""}">
          ${imgs.map(img => renderImage(img, c)).join("")}
        </div>
        ${links ? `<div class="course-links">${links}</div>` : ""}
      </article>
    `;
  }

  function renderCourses() {
    return `
      <header class="proj-header">
        <h2 class="proj-title" data-i18n="courses.title">Courses</h2>
        <span class="proj-title-rule"></span>
        <p class="proj-sub" data-i18n="courses.sub">Courses, talks and podcasts I've taken part in.</p>
      </header>
      <div class="course-grid">
        ${SITE_CONFIG.courses.map(renderCourse).join("")}
      </div>
    `;
  }

  document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("courses");
    if (!root) return;
    root.innerHTML = renderCourses();
    if (typeof applyLanguage === "function") applyLanguage(getCurrentLang());
  });
})();
