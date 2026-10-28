# AGENTS.md

Guidance for agents working in this repository.

## What this project is

`digital-dendrites` is the marketing site for Sintient Labs: **pure static files**
(`index.html`, `styles.css`, `script.js`). There is **no package.json, no build
step, no bundler, no test suite, and no backend**. `netlify.toml`, `vercel.json`
and `CNAME` are deployment configs for external hosts — they are not used to run
the site locally and should not be changed to make local dev work.

## Running it (Base44 sandbox)

The dev environment lives in `docker-compose.base44.yml`:

```bash
docker compose -f docker-compose.base44.yml up -d --build
```

- Serves the repo root read-only through nginx on host port **3000**
  (`http://localhost:3000/`), using `.base44/nginx.conf`.
- No environment variables or secrets are required, and there is no database,
  migration or seed step. `.base44/environment.json` records `secrets: []`.
- Docker is the only runtime needed; nginx:alpine is the base image.
- **Permissions quirk**: the sandbox clones the repo as root with mode `700`, which
  nginx's unprivileged worker cannot traverse — a naive mount returns `403` on
  `/` and `404` on the assets. The service command therefore does
  `chmod 755 /usr/share/nginx/html` before `exec nginx`. That is why the content
  mount is read-write (nginx itself only reads), and why you should not add `:ro`
  back to the `./:/usr/share/nginx/html` volume.

## Editing loop and quirks

- **There is no live-reload dev server** for plain static files, so an edit is not
  pushed to the browser on its own — the preview must be refreshed. Re-running
  `up`/restarting the container is *not* needed for file changes: the repo is
  bind-mounted, so nginx serves the new bytes immediately. nginx is configured
  with `Cache-Control: no-store` so a reload cannot show a stale page.
- Serving the **repo root** means repository metadata would otherwise be public on
  the preview URL; `.base44/nginx.conf` denies all dotted paths (`.git`, `.base44`).
  Keep that rule when editing the config.
- The `.base44/nginx.conf` health check is done in Compose only (no app code
  change was made for it) and asserts both the page text and the stylesheet.

## Things that look like integrations but are not

- **Contact form**: `<form name="contact" data-netlify="true">` with no `action`
  URL. It is processed by **Netlify Forms on deploy only** — locally it does
  nothing (the JS only toggles the button label). Making it work off-Netlify
  requires choosing a provider (Formspree/EmailJS); that is a product decision,
  not part of local setup.
- **Inter font** is loaded from Google Fonts at runtime by the browser; the
  container needs no network access for it.
- `script.js` also injects a `<style>` block for the mobile nav at runtime, so
  some responsive nav/menu styles are not in `styles.css`.

## Verifying the site works

```bash
curl -s http://localhost:3000/ | grep -q "Sintient Labs" && echo ok
curl -s -o /dev/null -w '%{http_code}\n' http://localhost:3000/styles.css
docker compose -f docker-compose.base44.yml ps   # web should be (healthy)
```

There is no linter, HTML validator or test runner installed in the image; the
`html5validator` / `linkchecker` commands mentioned in `WARP.md` are not available
here and are not installed by this setup.
