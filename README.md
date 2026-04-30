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

1. **2 AM ET** — cron triggers the daily build script on Amber's Mac mini
2. Ada spawns a Sonnet sub-agent with the day's brief
3. Sub-agent generates `apps/YYYY-MM-DD/index.html` + `README.md`
4. `manifest.json` updated, commit pushed to `main`
5. GitHub Action deploys to Pages within ~60 seconds
6. **8 AM ET** — Ada pings Amber with the live link

Bookmark the landing page on every device. Check it with morning coffee. ☕
