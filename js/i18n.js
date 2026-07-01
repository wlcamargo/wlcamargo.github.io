// ============================================================
// Internacionalização — edite os textos abaixo por idioma.
// EN é o idioma padrão.
// ============================================================

const FLAGS = {
  en: `<svg viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
         <rect width="60" height="30" fill="#012169"/>
         <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/>
         <path d="M0,0 L60,30 M60,0 L0,30" stroke="#c8102e" stroke-width="2.5"/>
         <rect x="25" width="10" height="30" fill="#fff"/>
         <rect y="10" width="60" height="10" fill="#fff"/>
         <rect x="27" width="6" height="30" fill="#c8102e"/>
         <rect y="12" width="60" height="6" fill="#c8102e"/>
       </svg>`,
  es: `<svg viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
         <rect width="60" height="30" fill="#aa151b"/>
         <rect y="7.5" width="60" height="15" fill="#f1bf00"/>
       </svg>`,
  pt: `<svg viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
         <rect width="60" height="30" fill="#009c3b"/>
         <polygon points="30,3 56,15 30,27 4,15" fill="#ffdf00"/>
         <circle cx="30" cy="15" r="6" fill="#002776"/>
       </svg>`
};

const LANGUAGES = [
  { code: "en", name: "English"    },
  { code: "es", name: "Español"    },
  { code: "pt", name: "Português"  }
];

const I18N = {
  en: {
    nav: { home: "Home", about: "About", experience: "Experience", projects: "Projects", courses: "Courses", blog: "Blog" },
    notification: "Follow me on social medias or text-me",
    hero: { greeting: "Hi there! I'm", resume: "Resume" },
    about: { title: "About Me", location: "Location" },
    experience: { title: "Experience" },
    projects: {
      title: "Projects",
      sub: "My open-source contributions and video content.",
      repos: "Repositories",
      contribs: "Contributions (last year)",
      subs: "Subscribers",
      videos: "Videos",
      viewGithub: "View on GitHub →",
      viewYoutube: "Watch on YouTube →",
      ytNote: "Tutorials and walkthroughs on Data Engineering, Python and the modern data stack."
    },
    blog: {
      title: "Blog",
      sub: "Notes and tutorials on Data Engineering and the modern data stack.",
      empty: "No posts yet — check back soon.",
      readMore: "Read post →",
      backToBlog: "← Back to blog",
      loading: "Loading…",
      notFoundTitle: "Post not found",
      notFoundSub: "The post you're looking for doesn't exist or has been removed."
    },
    pages: {
      home:     { title: "Home",     sub: "Hero, certifications and resume coming next." },
      about:    { title: "About",    sub: "🚧 Under construction" },
      projects: { title: "Projects", sub: "🚧 Under construction" },
      courses:  { title: "Courses",  sub: "Free and paid courses — coming next." },
      blog:     { title: "Blog",     sub: "Posts coming soon." }
    }
  },
  es: {
    nav: { home: "Inicio", about: "Sobre mí", experience: "Experiencia", projects: "Proyectos", courses: "Cursos", blog: "Blog" },
    notification: "Sígueme en mis redes sociales o escríbeme",
    hero: { greeting: "¡Hola! Soy", resume: "Currículum" },
    about: { title: "Sobre mí", location: "Ubicación" },
    experience: { title: "Experiencia" },
    projects: {
      title: "Proyectos",
      sub: "Mis contribuciones open-source y mi contenido en video.",
      repos: "Repositorios",
      contribs: "Contribuciones (último año)",
      subs: "Suscriptores",
      videos: "Vídeos",
      viewGithub: "Ver en GitHub →",
      viewYoutube: "Ver en YouTube →",
      ytNote: "Tutoriales y guías sobre Data Engineering, Python y el modern data stack."
    },
    blog: {
      title: "Blog",
      sub: "Notas y tutoriales sobre Data Engineering y el modern data stack.",
      empty: "Aún no hay posts — vuelve pronto.",
      readMore: "Leer post →",
      backToBlog: "← Volver al blog",
      loading: "Cargando…",
      notFoundTitle: "Post no encontrado",
      notFoundSub: "El post que buscas no existe o fue eliminado."
    },
    pages: {
      home:     { title: "Inicio",    sub: "Hero, certificaciones y currículum en breve." },
      about:    { title: "Sobre mí",  sub: "🚧 En construcción" },
      projects: { title: "Proyectos", sub: "🚧 En construcción" },
      courses:  { title: "Cursos",    sub: "Cursos gratuitos y de pago — en breve." },
      blog:     { title: "Blog",      sub: "Publicaciones próximamente." }
    }
  },
  pt: {
    nav: { home: "Início", about: "Sobre", experience: "Experiência", projects: "Projetos", courses: "Cursos", blog: "Blog" },
    notification: "Me siga nas redes sociais ou me mande mensagem",
    hero: { greeting: "Olá! Eu sou", resume: "Currículo" },
    about: { title: "Sobre Mim", location: "Localização" },
    experience: { title: "Experiência" },
    projects: {
      title: "Projetos",
      sub: "Minhas contribuições open-source e conteúdo em vídeo.",
      repos: "Repositórios",
      contribs: "Contribuições (último ano)",
      subs: "Inscritos",
      videos: "Vídeos",
      viewGithub: "Ver no GitHub →",
      viewYoutube: "Assistir no YouTube →",
      ytNote: "Tutoriais e walkthroughs sobre Engenharia de Dados, Python e o modern data stack."
    },
    blog: {
      title: "Blog",
      sub: "Notas e tutoriais sobre Engenharia de Dados e o modern data stack.",
      empty: "Ainda não há posts — volte em breve.",
      readMore: "Ler post →",
      backToBlog: "← Voltar ao blog",
      loading: "Carregando…",
      notFoundTitle: "Post não encontrado",
      notFoundSub: "O post que você procura não existe ou foi removido."
    },
    pages: {
      home:     { title: "Início",   sub: "Hero, certificações e currículo em breve." },
      about:    { title: "Sobre",    sub: "🚧 Em construção" },
      projects: { title: "Projetos", sub: "🚧 Em construção" },
      courses:  { title: "Cursos",   sub: "Cursos gratuitos e pagos — em breve." },
      blog:     { title: "Blog",     sub: "Posts em breve." }
    }
  }
};

function getI18nValue(dict, path) {
  return path.split(".").reduce((o, k) => (o ? o[k] : undefined), dict);
}

function applyLanguage(lang) {
  const dict = I18N[lang] || I18N.en;
  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const value = getI18nValue(dict, el.dataset.i18n);
    if (typeof value === "string") el.textContent = value;
  });
}

function getCurrentLang() {
  const saved = localStorage.getItem("lang");
  return (saved && I18N[saved]) ? saved : "en";
}
