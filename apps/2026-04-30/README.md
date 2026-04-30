# Revenue Pulse

**Built:** 2026-04-30
**Live:** https://amberbockel.github.io/agent-experiments/apps/2026-04-30/
**Category:** Productivity

---

## One-liner
A no-spreadsheet way to track Amber Miro Creative revenue against the $25K/year goal, with a single visual pulse bar that tells you whether you're ahead or behind pace today.

---

## The problem
Revenue tracking lives in a half-finished spreadsheet that nobody opens. The $25K/year goal feels abstract because there's no daily reading on it. Without a glanceable pulse, momentum is invisible.

---

## The solution
One page. One big number. One bar. Add an earning in 5 seconds, see the year-to-date total update, and get an instant "ahead/behind pace by $X" reading based on what day of the year it is.

---

## How it works
1. Open the app, see year-to-date total + progress to $25K
2. Tap **+ Log earning**, enter amount, pick a source (Original / Print / POD / Workshop / Commission)
3. The hero number, bar, monthly stat, and pace message all update
4. Filter past entries by month with the chips
5. Adjust your annual goal anytime in Settings
6. Export JSON for backup or migration

All data lives in `localStorage` — fast, private, no account, no backend.

---

## Why this matters for Amber
- The $25K goal is the headline number for the art business this year. It deserves a daily glance, not a quarterly check-in
- Pace messaging ("ahead by $300" or "behind by $1,200, need $42/day to catch up") turns the goal into something actionable today, not next quarter
- Source tags will reveal which streams (originals vs prints vs POD vs workshops) actually carry the year

---

## Business opportunity
Productized version: a per-creator revenue tracker for solo artists / craft sellers. Shopify charges $39/mo for analytics; this is the 80% of value at $5/mo.

- **Revenue model:** $5/mo or $50/yr, multi-stream tracking + Shopify/Square import
- **Target:** Etsy, Shopify, Squarespace solo creators tracking >1 income stream
- **Estimated build to production:** ~1 week for hosted version with auth + sync
- **Monthly revenue potential:** Niche, but $5K MRR feasible at 1,000 users

---

## Technical notes
- Pure HTML/CSS/JS, no framework, no build step
- `localStorage` for persistence (per-device, per-browser)
- Mobile-first responsive (looks good on iPhone, iPad, desktop)
- ~14KB total, loads instantly

**Limitations:**
- No cross-device sync (by design — adding sync = backend = complexity)
- No automatic Shopify/Square pull (manual entry only in v1)
- Year-locked to current year (no multi-year view yet)

---

## Try it
1. Open https://amberbockel.github.io/agent-experiments/apps/2026-04-30/
2. Tap **+ Log earning**, enter `$425`, source `Print sale`
3. Watch the bar move and the pace message flip from "add your first earning" to "behind pace by..."
4. Add a few more, switch months, adjust the goal

---

## Next steps (if you love it)
- [ ] Ship as-is — bookmark on phone, use daily
- [ ] **Add Shopify import** — paste API key, auto-pull sales
- [ ] **Multi-year view** — line chart of revenue over time
- [ ] **Stream breakdown** — donut chart by source
- [ ] **Productize** — hosted version with auth, $5/mo
- [ ] Kill it — track on the spreadsheet instead

---

## Questions for Amber
- Is the $25K goal still the right north star, or should it be by-stream (originals $X, prints $Y)?
- Would you want this to pull from Shopify automatically, or is manual entry actually the friction you want?
- Best month / worst month framing useful, or distracting?
