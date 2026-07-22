# CLAUDE.md

This repository is **Wallace Camargo's personal professional portfolio** (Data Engineer), published via GitHub Pages at [wlcamargo.github.io](https://wlcamargo.github.io).

## What it is

A static site (vanilla HTML/CSS/JS, no framework or build step) with pages for introduction, experience, projects, courses/certifications, and a blog whose posts are written in Markdown (`content/posts/*.md`).

## Structure

- `index.html`, `about.html`, `experience.html`, `projects.html`, `courses.html`, `blog.html`, `post.html` — site pages
- `css/styles.css` — styles
- `js/` — logic: navigation (`layout.js`), texts/translations (`i18n.js`), and one `*.js` per page
- `content/posts/*.md` — blog posts
- `assets/images/` — images (including certification badges)
- `cv/` — resume PDF
- `docs/DEVELOPMENT.md` — local development (Docker) and publishing guide

## Local development

`docker compose up` serves the site at `http://localhost:8080` with a read-only mounted volume — local file changes show up with a simple browser refresh (F5), no container restart needed.

## Publishing

Deployment is automatic via GitHub Pages on push to the `main` branch. There is no build pipeline — static files are served directly.

## Working on this project

- This is a personal/showcase site — prioritize simplicity, content clarity, and visual consistency over elaborate software engineering.
- Content (experience, about, project descriptions) reflects Wallace's real career — confirm with him before changing facts, dates, or professional experience descriptions.
- `git push origin main` publishes straight to production — always confirm before pushing.
