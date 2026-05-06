# Deployment Guide

## GitHub Pages Deployment

### Prerequisites
- GitHub SSH key configured: `~/.ssh/id_ed25519.pub`
- Repository: `amberbockel/agent-experiments`

### SSH Key (if not already added)
```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIGzdRwMBg8FNeC1MvdRNRcrdNV4xJ2yMR2nbbK9MrTE4 ada-unicorn@agentmail.to
```
Add at: https://github.com/settings/ssh/new

### Deploy Steps

1. **Build static site:**
```bash
cd ~/.openclaw/workspace/projects/daily-outfit-planner
npm run build
```

2. **Push source to main branch:**
```bash
git remote add origin git@github.com:amberbockel/agent-experiments.git
git push -u origin main
```

3. **Deploy to gh-pages:**
```bash
cd out
git init
git add .
git commit -m "Deploy Daily Outfit Planner"
git branch -M gh-pages
git remote add origin git@github.com:amberbockel/agent-experiments.git
git push -f origin gh-pages
```

4. **Configure GitHub Pages:**
- Go to: https://github.com/amberbockel/agent-experiments/settings/pages
- Source: Deploy from a branch
- Branch: `gh-pages` / `root`
- Save

### Live URL
https://amberbockel.github.io/agent-experiments/

---

## Local Development
```bash
npm run dev
# → http://localhost:3000
```

## Notes
- Base path configured: `/agent-experiments`
- Static export enabled
- Images set to unoptimized for GitHub Pages compatibility
