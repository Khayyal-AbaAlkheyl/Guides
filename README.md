# Guides — Arabic travel guides (sell per city)

Each city is a **standalone site** — share only that city's link when selling.

## Publish online (GitHub Pages)

1. Build standalone sites:

```bash
npm run publish:sites
```

2. Commit and push `docs/` folder.

3. On GitHub: **Settings → Pages → Source: Deploy from branch `main` → folder `/docs`**.

4. Your links (replace `YOUR_USERNAME`):

| City | Guide (Arabic) | PDF |
|------|----------------|-----|
| Bosnia | `https://YOUR_USERNAME.github.io/Guides/bosnia/?lang=ar` | `.../bosnia/guide-ar.pdf` |
| London | `https://YOUR_USERNAME.github.io/Guides/london/?lang=ar` | `.../london/guide-ar.pdf` |
| Paris | `https://YOUR_USERNAME.github.io/Guides/paris/?lang=ar` | `.../paris/guide-ar.pdf` |
| Edinburgh | `https://YOUR_USERNAME.github.io/Guides/edinburgh/?lang=ar` | `.../edinburgh/guide-ar.pdf` |
| Istanbul | `https://YOUR_USERNAME.github.io/Guides/istanbul/?lang=ar` | `.../istanbul/guide-ar.pdf` |
| Italy | `https://YOUR_USERNAME.github.io/Guides/italy/?lang=ar` | `.../italy/guide-ar.pdf` |
| Azerbaijan | `https://YOUR_USERNAME.github.io/Guides/azerbaijan/?lang=ar` | `.../azerbaijan/guide-ar.pdf` |
| Trabzon | `https://YOUR_USERNAME.github.io/Guides/trabzon/?lang=ar` | `.../trabzon/guide-ar.pdf` |

The owner test catalog: `https://YOUR_USERNAME.github.io/Guides/`

## Try locally

```bash
npm run publish:sites
python -m http.server 8080 --directory docs
```

Open http://localhost:8080/bosnia/?lang=ar

## What's in each city folder

```
docs/bosnia/
  index.html      ← interactive guide (Arabic default)
  guide-ar.pdf    ← phone PDF
  assets/         ← app code (self-contained)
  brand/
  data/           ← only this city's content
```

Each folder is fully independent — no links to other cities.
