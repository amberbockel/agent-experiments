# Meeting Receipt

**Built:** 2026-10-25 · **Category:** business

**One-liner:** Add who's in the room and how long it runs — get an itemized receipt for the meeting, or start the clock and watch the bill tick up live.

## What it does
- Pick a template (standup, planning, all-hands, 1:1) or build your own attendee list with editable roles and hourly rates (no names hard-coded).
- A thermal-paper receipt updates live: itemized lines, burn rate per minute, person-hours, total, a "what that buys" equivalent, and a deadpan verdict stamp.
- **Live mode** runs a real-time clock so the total climbs while the meeting happens.

## Why it matters
Meeting load is the standing complaint about knowledge work, and AI meeting notetakers (a flagged Product Hunt category) are crowded with tools that record the meeting — few make its *cost* tangible before it happens. A receipt makes the trade-off legible in one glance.

## How it works
Cost = Σ(hourly rate) / 3600 × seconds. Static mode uses the slider length; live mode uses `requestAnimationFrame` against `performance.now()` so pausing and resuming stay accurate. Equivalents and verdicts are simple thresholds.

## Technical notes
Single file, vanilla JS, no network, no storage beyond the theme preference. Receipt edge is a CSS conic-gradient mask. User text is HTML-escaped. Honors `prefers-reduced-motion`.

## Design notes
- **Secondary hue:** `--ab-pink-soft #ffb8d9` (recent builds used green, lavender and indigo-ish tones); periwinkle remains the master accent for primary buttons.
- **Archetype:** a document/receipt metaphor in a split controls-plus-artifact layout, dark-default — vs. yesterday's light editorial explainer, the day-ring tool and the connect-four board. The cream mono receipt is the one high-contrast object on a glass-dark page.
- **Trend source:** Product Hunt AI meeting notetaker category (e.g. Spellar, Sorinai 2026 launches).
