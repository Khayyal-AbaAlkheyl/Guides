# Guides — Arabic travel guides (sell per city)

Each city is published under a **random token URL** — buyers cannot swap `/london/` for `/paris/` because city names are not in the URL.

## Setup (once)

1. Copy `publish-secret.example.txt` → `publish-secret.txt` (or run publish once — it creates the file).
2. Set a strong `OWNER_PASSWORD` in `publish-secret.txt`.
3. **Never commit** `publish-secret.txt` or `tokens.local.json` (both are gitignored).

Changing `SECRET` in that file **regenerates every sell link**.

## Publish

```bash
npm run publish:sites
```

This writes `docs/g/{token}/` for each city plus a private owner catalog.

After building, push `docs/` to GitHub Pages (`gh-pages` branch or `/docs` on `main`).

## Your private catalog (all cities)

After each build, check `tokens.local.json`:

- **Owner URL:** `https://khayyal-abaalkheyl.github.io/Guides/_o…/` (exact path in `tokens.local.json`)
- **Password:** `OWNER_PASSWORD` from `publish-secret.txt`

The catalog lists every city with **Copy** buttons for full sell links.

## Sell links (share one per customer)

Pattern:

- Guide: `https://khayyal-abaalkheyl.github.io/Guides/g/{token}/?lang=ar`
- PDF: `https://khayyal-abaalkheyl.github.io/Guides/g/{token}/pdf.html?lang=ar`

Each token is unique and not guessable from another city’s link.

## Try locally

```powershell
.\run-local.ps1
```

Or:

```bash
npm run publish:sites
python -m http.server 8766 --directory docs
```

## Security notes

- Static GitHub Pages cannot enforce true DRM — opaque tokens stop **casual URL swapping**.
- Keep `publish-secret.txt` private; anyone with `SECRET` can derive all tokens.
- The owner catalog uses a password gate (good enough for your eyes only, not bank-grade).
- Public root `/Guides/` shows “Not found” — no city list.
