# Day Orbit

**Built:** 2026-10-23
**Category:** productivity
**One-liner:** Sketch your whole day as a 24-hour ring — drag to block time and get an honest verdict on whether the plan is realistic.

## What it does
A circular day planner. Midnight sits at the top; drag along the ring to claim a block (15-minute snap), name it, tag it Focus / Meetings / Rest / Admin, and fine-tune with time inputs. A live "now" hand shows where you are. The centre shows open hours; a Prata headline gives a verdict (overbooked, six hours without a break, more talk than work, an honest day…). Overlapping blocks split into side-by-side lanes. A synced list view makes every block keyboard-reachable.

## Why it matters
Time-blocking tools (Reclaim, Akiflow, Todoist's weekly calendar) are list/grid-first. Seeing a day as a *shape* makes over-commitment and missing rest visible at a glance, and a rule-based reality check turns planning into a decision, not a ritual.

## How it works
Pure SVG arcs generated from minute offsets; pointer events with capture for drag-to-create; a greedy lane assigner for overlaps; interval-union maths for planned time and a stretch detector for the longest run without rest. State persists in `localStorage` (first visit loads a sample day). No network, no dependencies.

## Technical notes
- Single file on top of `brand/amberbockel.css`; offline-safe.
- Blocks can't cross midnight (drag clamps; time inputs warn).
- Keyboard: arc segments and list rows are focusable; Enter/Space selects, Esc deselects, Delete removes; "Add a block" gives a keyboard path to creation.
- 375px tested; safe-area insets respected; reduced-motion honoured.

## Design notes
- **Secondary hue:** `--ab-pink-soft` (rest, free time, verdict emphasis), with lavender for meetings; periwinkle stays the master accent for Focus.
- **Archetype:** single-focus generative/radial canvas, dark-default — a break from yesterday's light game board and the earlier dark-glass tool/dashboard run. Restrained Prata, one big numeric moment in the ring centre.
- **Trend source:** time-blocking/AI-calendar launches on [Product Hunt](https://www.producthunt.com/) (Reclaim, Akiflow, Todoist weekly calendar). The live search returned only older launch pages, so this leans on that standing category theme rather than a specific launch this week.
