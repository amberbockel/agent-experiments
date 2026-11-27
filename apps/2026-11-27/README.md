# Next Word

**Built:** 2026-11-27
**Category:** trend

**One-liner:** Roll the dice on a tiny language model and feel what temperature and top-p do to every word it picks.

## What it does
Pick a starting phrase, then draw one word at a time from a hand-built next-word table. Each step shows the candidate words as bars, a spinning pick, and a running "bits of surprise" count. Temperature and top-p sliders reshape the odds live, and "Ten tries" writes ten whole sentences so you can see how many differ.

## Why it matters
Temperature and top-p are the two knobs behind almost every AI product, and most people have never seen them act on a single choice. Seeing a dashed bar (odds at temperature 1) next to the live bar makes the effect concrete.

## How it works
- A small bigram table of weighted next words (about 60 words, all hand-authored).
- Temperature rescales weights as `w^(1/T)` and renormalises; T near 0 is greedy argmax.
- Top-p keeps the likeliest words until their cumulative chance reaches p, cuts the rest, and renormalises.
- Surprise per pick is `-log2(p)` using the post-filter probability.

## Technical notes
Single file, vanilla JS, no network, no fonts loaded. Works offline. Honors `prefers-reduced-motion` (the spin is skipped). Space picks the next word. Targets are at least 44px.

## Design notes
Direction: **minimal-dark**. Ink-blue surface, one sodium-gold accent reserved for the chosen word, the cursor and the sliders; the rest stays quiet. The sentence is set large in a serif; UI is sans. Not used in the previous six builds.

Trend source: could not reach YC Launches or Product Hunt from the build environment tonight (network blocked), so the idea rests on the ongoing public interest in how LLM sampling works rather than on a specific launch.
