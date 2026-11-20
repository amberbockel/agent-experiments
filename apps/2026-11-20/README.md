# Squeeze

**Built:** 2026-11-20
**Category:** trend
**One-liner:** Shrink a language model's weights bit by bit and watch the error, the file size and your phone's memory budget react.

## What it does
Pick a model size (2B to 26B parameters), a bit width (2 to 8) and how many weights share one scale. A stem plot of 96 weights shows each original value, where it lands after rounding, and the error between them. Below it: file size, a measured signal-to-noise figure in dB, an estimated reply speed, and which of four phones can hold the model.

## Why it matters
On-device models are a memory problem first. Quantization is the lever that decides whether a model fits, and the failure mode (a few outlier weights wrecking everyone else's precision) is hard to grasp from a table. Here you can see it, then fix it by switching to per-group scales.

## How it works
- 96 seeded Gaussian weights plus three planted outliers.
- Symmetric quantization: scale = max|w| / (2^(b-1) - 1) per group, round to the nearest level.
- Signal figure = 10·log10(sum w² / sum error²), computed live.
- Size = params × (bits + 16/group) / 8; fp16 scale per group counted. Phone budget = half of RAM minus 0.6 GB context cache. Speed = 60 GB/s ÷ file size.
- Canvas drawing, tweened numbers and points; reduced motion disables tweens.

## Technical notes
Single HTML file, vanilla JS, no network, works offline. All sizes and speeds are illustrative; the dB bands are a rule of thumb, not a benchmark.

## Design notes
Direction: **clean-dashboard-dataviz**. Cool grey paper, white cards, ink navy, a blue-to-green meter for quality, and coral reserved for error. It differs from the last six builds (gradient depth, monochrome type, organic, dark, high-contrast, editorial) by being a data instrument with colour used only to encode meaning.

## Trend source
Google DeepMind's Gemma 4 family and its quantization-aware-trained small models for phones (E2B/E4B in the roughly 1.5 to 2.2 GB range), plus Google AI Edge.
