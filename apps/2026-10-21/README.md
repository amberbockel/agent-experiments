# Name Critters

**Built:** 2026-10-21 · **Category:** delightful

**One-liner:** Type any name and meet the one-of-a-kind critter it hatches — generated offline, always the same for the same name.

## What it does
Hash a name into a seed and procedurally draw a unique SVG creature: body shape, colour, eyes, ears, spots, mouth, optional hat, plus a species, mood, quote and five trait meters. Save it as a PNG.

## Why it matters
AI-character and avatar generators are a hot Product Hunt category (AI characters, AI headshot generators), but most need accounts and servers. This is the zero-network, deterministic cousin: no model, no upload, instant.

## How it works
xmur3 string hash seeds a mulberry32 PRNG; every trait is drawn from it in a fixed order, so identical names always give identical critters. SVG is rendered inline, rasterised via canvas for PNG export.

## Technical notes
Single file, vanilla JS, no network. Respects reduced motion via the brand kit.

## Design notes
Light-default, single-focus canvas layout with a tinted stage that changes per critter. Secondary hue: `--ab-green` (stage tint default); periwinkle stays the accent for bars and tags. Differs from recent dark-glass trend tools (Tripwire, Next Up, Switch Tax) by being a playful generative toy with a big illustrated focal point instead of dashboards.

## Trend source
Product Hunt AI characters / AI headshot generator categories (Amber's flagged themes); a web scan this run returned no dated weekly list.
