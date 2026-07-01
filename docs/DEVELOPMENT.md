# Guia de Desenvolvimento

Este guia explica como rodar o portfólio localmente com Docker e como publicar alterações no site (wlcamargo.github.io).

## 1. Rodar o projeto com Docker Compose

Pré-requisito: Docker Desktop instalado e em execução.

```bash
# a partir da raiz do projeto
docker compose up
```

- O site fica disponível em [http://localhost:8080](http://localhost:8080)
- O volume é montado como `read-only` (`./:/usr/share/nginx/html:ro`), então qualquer alteração salva em um arquivo local (HTML, CSS, JS, conteúdo em `content/`) aparece só atualizando a página no navegador (F5) — não é necessário reiniciar o container.

Para rodar em segundo plano:

```bash
docker compose up -d
```

Para parar:

```bash
docker compose down
```

Para forçar a reconstrução da imagem (raramente necessário, pois o Dockerfile só copia arquivos estáticos):

```bash
docker compose up --build
```

## 2. Editar o site

Estrutura relevante:

- `index.html`, `about.html`, `experience.html`, `projects.html`, `courses.html`, `blog.html`, `post.html` — páginas do site
- `css/styles.css` — estilos
- `js/` — lógica (navegação em `layout.js`, textos/traduções em `i18n.js`, configuração de menus e links em `config.js`, e um `*.js` por página)
- `content/posts/*.md` — artigos do blog (cada arquivo `.md` vira um post)
- `assets/images/` — imagens usadas no site
- `cv/` — PDF do currículo

Fluxo de edição:

1. Suba o site com `docker compose up` (veja seção 1).
2. Edite os arquivos desejados no editor.
3. Salve e atualize o navegador em `http://localhost:8080` para conferir o resultado.
4. Repita até o resultado ficar como esperado.

## 3. Publicar (push) a nova versão

O site é publicado via GitHub Pages a partir do branch `main` do repositório [wlcamargo.github.io](https://wlcamargo.github.io).

```bash
git status                     # confira o que foi alterado
git add <arquivos alterados>   # evite git add -A para não subir arquivos indesejados
git commit -m "descrição da alteração"
git push origin main
```

Após o push, o GitHub Pages atualiza o site publicado automaticamente em poucos minutos.
