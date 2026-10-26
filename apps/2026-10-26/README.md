# Agent Jam Band

**Built:** 2026-10-26 · **Category:** delightful

**One-liner:** Four tiny agents, one looping tune — tap steps to teach each a riff, synthesized entirely offline.

## What it does
A 4-track × 16-step sequencer. Each track is a little character (Bass, Pluck, Bell, Tick — names are editable) whose face bounces when it plays. Tempo slider, Play/Pause (Space), Clear, and "Surprise me" for a random pentatonic jam.

## Why it matters
AI characters are having a moment (agents hosting live shows, personas as products). This is the smallest possible "cast of agents performing together" — a toy that makes the idea tactile and sounds good in 10 seconds.

## How it works
Web Audio oscillators and filtered noise, scheduled with a lookahead timer. All pitches come from a C-major pentatonic scale so any combination is consonant. No network, no assets.

## Technical notes
Single file, vanilla JS, brand kit linked. Audio starts only after a user gesture. Mobile layout switches to 8 columns × 2 rows per track to keep targets large. Theme persisted via localStorage in try/catch.

## Design notes
Secondary hue: **green #71d45c** (plus the other shape-palette colours as each character's colour). Archetype: **playful toy / single-focus board**, **light-default** — unlike the last builds (dark receipt, explainer, ring planner, game board, generator). Periwinkle only marks the playhead.

## Trend source
Product Hunt: [The New Beings](https://aitoolly.com/de/ai-news/article/2026-10-21-the-new-beings-launches-on-product-hunt-autonomous-ai-agents-host-satirical-hourly-live-talk-shows) (launched 2026-10-19) — autonomous AI characters performing live.
