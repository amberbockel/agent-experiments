# Agent Experiments 🦄

> One mini-app a day, built overnight by Amber's agent crew.

**Live:** https://amberbockel.github.io/agent-experiments/

Ada (Amber's AI thinking partner) ships a fresh mini-app every morning. Each one is fully working, mobile-friendly, and lives at `apps/YYYY-MM-DD/` along with a one-page PRD.

## Categories

| Tag | What it is |
|---|---|
| **Productivity** | Tools that help Amber's businesses run better |
| **Delightful** | Things that make the family smile |
| **Trend** | Prototypes of what's happening in AI/design |
| **Business** | Scalable ideas with revenue potential |
| **Games** | Playable games for the whole family and guests |
| **Collab** | Collaborative or interactive sandbox builds |

## Repo layout

```
.
├── index.html              ← landing page (lists every app)
├── manifest.json           ← machine-readable index
├── apps/
│   └── YYYY-MM-DD/
│       ├── index.html      ← the app
│       └── README.md       ← the PRD
└── .github/workflows/
    └── pages.yml           ← auto-deploy to GitHub Pages
```

## How the daily build works

1. **2 AM ET** — a scheduled Claude cloud routine kicks off the daily build
2. A Sonnet agent designs and writes `apps/YYYY-MM-DD/index.html` + `README.md` from the day's brief
3. `manifest.json` is updated and the commit is pushed to `main`
4. A GitHub Actions workflow (build + deploy) ships it to Pages within ~60 seconds
5. **8 AM ET** — Amber gets a ping with the live link

Bookmark the landing page on every device. Check it with morning coffee. ☕
