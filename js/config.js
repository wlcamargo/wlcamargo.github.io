// ============================================================
// EDITE ESTE ARQUIVO PARA ATUALIZAR O SITE
// Tudo aqui é refletido automaticamente nas páginas.
// ============================================================

const SITE_CONFIG = {
  // Assinatura na navbar
  brand: "Wallace Camargo",

  // CV para download
  resumePath: "cv/Data-Engineer-Wallace-Camargo.pdf",

  // Foto principal (hero)
  heroImage: "assets/images/personal/wallace-camargo.png",

  // Foto da página About
  aboutImage: "assets/images/personal/me.png",

  // Conteúdo da página About (editável)
  about: {
    intro: "I am a Data Engineer professional with more than 6 years of experience in the data area, with the ability to plan and develop a data product from start to finish, applying the best market practices.",
    journey: "In 2019, I began working with Power BI and SQL Server, transitioning Excel reports into Business Intelligence (BI) solutions. In 2020 I became a BI Analyst focused on building strategic, tactical and operational dashboards. In 2022 I moved into the big data world — the modern data stack and its technologies are my main focus of learning and evolution today.",
    bulletsTitle: "What I Bring to the Table:",
    bullets: [
      "6+ years of professional experience in the data field",
      "Strong skills in Python, SQL, Spark, and the modern data stack",
      "Hands-on with Azure, Microsoft Fabric, Databricks, and Airflow",
      "End-to-end delivery: from data ingestion to BI and analytics"
    ],
    cta: "Download Resume"
  },

  // Experiência profissional (ordem: mais recente primeiro)
  experiences: [
    {
      period: "FEB 2025 — PRESENT",
      company: "DXC Technology",
      role: "Data Engineer · Remote — Lisbon, Portugal",
      meta: "Client: Galp (Energy) · AWS, S3, Python, Spark, Dremio, Collibra, Docker",
      bullets: [
        "Developed data pipelines using Python and Spark on AWS",
        "Built CI/CD workflows with GitLab",
        "Implemented data quality processes across pipelines",
        "Lakehouse construction with Apache Iceberg tables"
      ]
    },
    {
      period: "MAR 2024 — FEB 2025",
      company: "FWX Consulting",
      role: "Data Engineer · Remote, Brazil",
      meta: "Python, dbt, Airflow, Open Metadata, Docker, Linux",
      bullets: [
        "Developed pipelines using Python and dbt",
        "Automated workflow orchestration with Apache Airflow",
        "Integrated Open Metadata to establish a comprehensive data catalog",
        "Implemented data quality checks"
      ]
    },
    {
      period: "NOV 2022 — FEB 2024",
      company: "Adentis",
      role: "Data Engineer · Remote — Porto, Portugal",
      meta: "Clients: Banco BAI (Banking) and Sonae MC (Retail)",
      bullets: [
        "Developed PySpark pipelines and built a Lakehouse using open-source Delta Tables (Banco BAI)",
        "Reviewed and approved Data Engineering projects for production deployment on Azure",
        "Monitored the migration of Spark scripts to Azure Databricks",
        "Implemented and monitored data quality processes (Sonae MC)"
      ]
    },
    {
      period: "AUG 2022 — NOV 2022",
      company: "Extia",
      role: "Data Engineer · Remote — Lisbon, Portugal",
      meta: "Client: Zap a Minha TV (Telecom) · Python, Airflow, MySQL, MongoDB, Linux",
      bullets: [
        "Developed ETL processes using an internal Python framework",
        "Orchestrated workflows with Apache Airflow"
      ]
    },
    {
      period: "FEB 2022 — AUG 2022",
      company: "Next Engineering",
      role: "Business Intelligence Analyst · Hybrid — Lisbon, Portugal",
      meta: "Client: Banco Primus (Banking) · SQL Server, SSIS, SSAS, SSRS",
      bullets: [
        "Created and maintained data cubes using the SQL Server stack",
        "Supported strategic BI deliveries for the banking segment"
      ]
    }
  ],

  // Mensagem do sino de notificação (editável)
  notification: "Follow me on social medias or text-me",

  // Métricas dos canais (edite os números à vontade)
  metrics: {
    github: {
      username:     "wlcamargo",
      url:          "https://github.com/wlcamargo",
      repositories: 98,
      contributions: 84
    },
    youtube: {
      handle:      "@wallacecamargo1043",
      url:         "https://www.youtube.com/@wallacecamargo1043",
      subscribers: "3,02K",
      videos:      130
    }
  },

  // Posts do blog. Cada post aponta para um arquivo .md em content/posts/.
  // Para criar um novo post: adicione o arquivo Markdown na pasta e
  // inclua aqui (mais recente primeiro).
  posts: [
    {
      slug:    "modern-data-stack-dbt-dremio-powerbi",
      title:   "Modern Data Stack: dbt + Dremio + Power BI",
      date:    "2026-06-28",
      summary: "A practical walkthrough of pairing dbt, Dremio and Power BI to build a lakehouse-style analytics platform.",
      tags:    ["dbt", "dremio", "powerbi", "lakehouse"],
      file:    "content/posts/modern-data-stack-dbt-dremio-powerbi.md"
    },
    {
      slug:    "orchestrating-dbt-airflow-snowflake",
      title:   "Orchestrating dbt with Airflow and Snowflake",
      date:    "2026-06-20",
      summary: "How I structure DAGs to run dbt on Snowflake — splits, secrets, retries and cost controls.",
      tags:    ["dbt", "airflow", "snowflake", "orchestration"],
      file:    "content/posts/orchestrating-dbt-airflow-snowflake.md"
    },
    {
      slug:    "setup-kafka-with-docker",
      title:   "Setting up Apache Kafka locally with Docker",
      date:    "2026-06-10",
      summary: "Spin up a Kafka broker + UI in under a minute with KRaft mode and a Python producer/consumer.",
      tags:    ["kafka", "docker", "streaming", "python"],
      file:    "content/posts/setup-kafka-with-docker.md"
    },
    {
      slug:    "data-validation-pydantic",
      title:   "Data validation in Python with Pydantic",
      date:    "2026-05-25",
      summary: "Declarative schemas, fast validation and a pattern for quarantining bad rows in your pipelines.",
      tags:    ["python", "pydantic", "data-quality"],
      file:    "content/posts/data-validation-pydantic.md"
    },
    {
      slug:    "powerbi-trino-connector",
      title:   "Connecting Power BI to Trino",
      date:    "2026-05-12",
      summary: "Building a custom M extension to query a Trino-based virtual lakehouse natively from Power BI.",
      tags:    ["powerbi", "trino", "lakehouse"],
      file:    "content/posts/powerbi-trino-connector.md"
    },
    {
      slug:    "github-api-python-extraction",
      title:   "Extracting data from the GitHub API with Python",
      date:    "2026-04-30",
      summary: "Authentication, clean pagination, useful endpoints and a tiny pipeline to land everything in Parquet.",
      tags:    ["python", "github", "api", "etl"],
      file:    "content/posts/github-api-python-extraction.md"
    },
    {
      slug:    "welcome",
      title:   "Welcome to my blog",
      date:    "2026-06-30",
      summary: "A short intro about what you'll find here: posts on Data Engineering, Python, Spark and the modern data stack.",
      tags:    ["intro", "data-engineering"],
      file:    "content/posts/welcome.md"
    }
  ],

  // Frases que alternam no hero (a cada 3s)
  heroRoles: [
    "Data Engineer",
    "Python and Spark Developer",
    "Data Specialist",
    "Brazilian"
  ],

  // Links de navegação
  nav: [
    { key: "home",       label: "Home",       href: "index.html"      },
    { key: "about",      label: "About",      href: "about.html"      },
    { key: "experience", label: "Experience", href: "experience.html" },
    { key: "projects",   label: "Projects",   href: "projects.html"   },
    { key: "courses",    label: "Courses",    href: "courses.html"    },
    { key: "blog",       label: "Blog",       href: "blog.html"       }
  ],

  // Redes sociais e contatos (footer fixo)
  socials: [
    { name: "GitHub",    url: "https://github.com/wlcamargo",                               icon: "github"    },
    { name: "LinkedIn",  url: "https://www.linkedin.com/in/wallace-camargo-35b615171/",     icon: "linkedin"  },
    { name: "YouTube",   url: "https://www.youtube.com/@wallacecamargo1043/videos",         icon: "youtube"   },
    { name: "Docker",    url: "https://hub.docker.com/u/wlcamargo",                         icon: "docker"    },
    { name: "Instagram", url: "https://www.instagram.com/wlcamargo/",                       icon: "instagram" },
    { name: "WhatsApp",  url: "https://wa.me/351926802230",                                 icon: "whatsapp"  },
    { name: "E-mail",    url: "mailto:wallacecpdg@gmail.com",                               icon: "email"     }
  ],

  // Certificações (edite/adicione/remova à vontade — ordem importa)
  certifications: [
    {
      name: "Azure Data Fundamentals (DP-900)",
      image: "assets/images/badges/dp-900.png?v=5",
      url:   "https://learn.microsoft.com/api/credentials/share/en-us/wlcamargo/9F29BEAE8D17D8C4?sharingId=52F16E1E9D4D6B2"
    },
    {
      name: "Azure AI Fundamentals (AI-901)",
      image: "assets/images/badges/ai-901.png?v=5",
      url:   "https://learn.microsoft.com/api/credentials/share/en-us/wlcamargo/E88490340D7984BE?sharingId=52F16E1E9D4D6B2"
    },
    {
      name: "Apache Airflow Fundamentals",
      image: "assets/images/badges/airflow.png?v=5",
      url:   "https://www.credly.com/badges/d763c20e-327e-40d8-9562-80d55c5b4b7c/embedded"
    },
    {
      name: "Fabric Data Engineer Associate",
      image: "assets/images/badges/dp700.png?v=5",
      url:   "https://learn.microsoft.com/api/credentials/share/en-us/wlcamargo/54721651A065D9CB?sharingId=52F16E1E9D4D6B2"
    },
    {
      name: "GitHub Foundations (GH-900)",
      image: "assets/images/badges/github.svg?v=5",
      url:   "https://learn.microsoft.com/api/credentials/share/en-us/wlcamargo/2BE31FC1F0230D87?sharingId=52F16E1E9D4D6B2"
    }
  ]
};
