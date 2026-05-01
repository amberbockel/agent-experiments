# Portfolio Builder — Amber Miro Creative

**Live:** https://amberbockel.github.io/agent-experiments/apps/portfolio-builder/
**Built:** 2026-04-30
**Type:** Flagship app (not a daily drop)

---

## What it is

A shared CMS / workflow tool for building Amber's gallery + designer + press portfolio system. Replaces spreadsheets, drive folders, scattered notes, and "I'll send you the dimensions later."

5 modes:
1. **Pieces** — every piece in your portfolio, tagged by category (Florals / Abstracts / Landscapes), with images, dimensions, price, copy, status
2. **Documents** — the 9 deliverables that pieces route into (Gallery Packet, Designer Sheet, Press One-Pager, Café Outreach, Collector Brief, Show Kit, Website, Etsy, Pinterest)
3. **Tasks** — the 5-sprint, 19-task plan with owner tags (You / Ada / Both)
4. **Outreach** — Concord-area contact list (Ada is building this)
5. **Brand** — artist statement, bio, voice notes, palette, categories — the bio kit that powers every document

## How collaboration works

This is a **two-way sync via Telegram**, not a real-time database. Async by design.

### Your loop
1. Open the app on any device
2. Add pieces, upload images, set dimensions and prices, tag which documents each piece goes into
3. When you have a batch of changes, tap **📤 Export to send Ada** in the sidebar
4. Send the downloaded JSON to Ada on Telegram

### Ada's loop
1. Receives your JSON
2. Drafts copy variants, fills out PDFs from your inputs, builds the Concord outreach list, generates Etsy listings, etc.
3. Sends you back an updated JSON
4. You tap **📥 Import update from Ada** to pull her work into the app

No backend, no auth, no PAT in the browser, no real-time sync to fail.

## Image storage

Images are stored in browser localStorage as compressed JPEG data URLs (max 1600px on the long edge, 85% quality). This means:

- Fast and offline-friendly
- Survives page reloads on the same device
- ~5–10 MB total budget across all images
- For final printable PDFs, Amber will provide the original high-res files via Google Drive or direct hand-off — the in-app images are working previews

If we hit storage limits, next iteration will move images to Cloudinary or a GitHub-hosted assets folder.

## Why no backend

- Ships in one night
- No infra, no cost, no auth complexity
- Collaboration loop is async anyway (we both have time-shifted sessions)
- Easy to switch later if we outgrow it

## Roadmap (when needed)

- v2: Generate copy variants in-app via API call (Ada drafts on-demand without round-trip)
- v3: Direct GitHub commit from app (eliminates manual sync)
- v4: Real-time multi-device sync via Cloudflare D1 or Supabase
- v5: PDF preview + in-app generation (skip the Figma round-trip)
