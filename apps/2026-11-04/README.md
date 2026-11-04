# Root Cause

**Built:** 2026-11-04 · **Category:** delightful · **Design:** clean-dashboard-dataviz

**One-liner:** Five broken AI agent runs. Read the trace, inspect as few spans as you can, and name the one that actually caused the failure.

## What it does
Each case shows a symptom ("the agent tried to refund $4,200") and a waterfall trace of the agent run. Opening a span reveals its input, output and logs and costs 8 points; naming a wrong span costs 20. Naming the true root cause banks what's left of the case's 100 points, explains how the failure travelled downstream, and gives the fix. A final score (out of 500) earns a rank.

## Why it matters
Agent failures almost never show up where they start. The error span is usually a victim: a unit mismatch, a stale index, a burst of parallel calls, an unlabeled prompt injection, a silently truncated context. Practising trace reading is the core skill of agent observability, and this makes it a ten-minute puzzle.

## How it works
Single self-contained HTML file, vanilla JS, no network calls. Cases are plain data (spans with start, duration, status, input, output, logs, and a note for tempting red herrings). Waterfall bars are positioned by percentage of total run time. Scores count up with eased animation; reduced motion is honored.

## Technical notes
Keyboard: spans are buttons, arrow keys move between rows. Mobile-first, tested at 375px, safe-area insets, 44px+ targets. State is in memory only.

## Design notes
Direction: **clean-dashboard-dataviz**: cool paper background, graphite ink, one signal red reserved for errors, kind-coded bars (model, tool, retrieval), monospaced span names, tabular numerals. It differs from the last six builds (soft-gradient-depth, organic-nature, monochrome-type-led, retro-70s-80s, tactile-3d-clay, risograph-textured) by being a light, data-forward observability UI. Archetype: data-viz detective puzzle.

## Trend source
Product Hunt's current agent-observability launches (Tracea, "Datadog for AI agents with traces and RCA"; APIEval-20, an open agent benchmark) and the Sept 2026 weekly roundup noting that agents need human judgment on permissions, cost and recovery.
