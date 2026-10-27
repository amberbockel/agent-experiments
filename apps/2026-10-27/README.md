# Switch Tax

- **Built:** 2026-10-27
- **Category:** productivity
- **One-liner:** Measure what an interruption really costs you with two quick rounds, one clean and one pinged.

## What it does
You tap 1 to 16 in order twice. In one round (random order) three pings arrive, each with a tiny sum to answer. The app times only your work, excludes the time spent answering, and reports the extra seconds per ping, a timeline of both rounds, and a slider to project the cost over a workday. Past runs are kept in localStorage on the device.

## Why it matters
Agents, notifiers and app switchers are all fighting for the same attention. "Interruptions are costly" is a claim; this turns it into your own number.

## How it works
Vanilla JS with `performance.now()`. The ping timer pauses the work clock; penalty = (pinged work time - clean work time) / 3. It is one sample, so the note says so, and the order is randomized to spread the practice effect.

## Technical notes
Single file, no network, works offline, brand kit linked. Keyboard accessible, 44px+ targets, reduced-motion respected, safe-area insets.

## Design notes
Light-default editorial column with the green secondary hue (`--ab-green`, darkened for text contrast) marking completed work. Recent builds were dark glass, a ring canvas, a board game and a music toy; this is a timed experiment with a result timeline.

## Trend source
Product Hunt's agent-attention launches (Whirr, Pushary, PopTask "no app switching"), found via web search.
