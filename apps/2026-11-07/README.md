# Fewer Bits

**Built:** 2026-11-07
**Category:** delightful
**One-liner:** Squeeze a picture and a model's weights down to fewer bits and see where quality falls apart.

## What it does
A before/after picture with a draggable divider, a bit-depth slider (16 down to 1), and live readouts: model size for a 1B-parameter model, picture fidelity in dB, and weight error. A histogram shows the bell curve of model weights with the allowed quantization levels drawn over it. Three procedural pictures, Bayer dithering toggle, and an auto-play "squeeze".

## Why it matters
On-device models (Gemma 3 1B via LiteRT / Google AI Edge) ship as int4 so they fit in a phone's memory. Most people have no feel for what "4-bit" gives up. This makes the trade-off tangible.

## How it works
Pictures are drawn to canvas procedurally, then each RGB channel is rounded to 2^bits levels. PSNR is computed from the real error. Weight error is the analytic RMS error of uniformly quantizing a Gaussian over ±3σ. Size is params × bits / 8.

## Technical notes
Single file, vanilla JS, no network or dependencies. Pointer events plus keyboard (arrow keys) on the divider; reduced motion disables tweening and the intro sweep.

## Design notes
Visual direction: **minimal-dark**. Slate background, one cyan accent for the quantized side, amber for the true distribution, a cyan-to-rose gradient track as the quality gauge. Differs from the last six builds (editorial, swiss, dashboard, soft-gradient, organic, monochrome). Archetype: interactive visual toy, not used in recent builds.

## Trend source
Gemma 3 on mobile and web with Google AI Edge (int4 quantization-aware training, ~529 MB for the 1B model): https://developers.googleblog.com/en/gemma-3-on-mobile-and-web-with-google-ai-edge/. The live YC/Product Hunt scan was unavailable in this run, so the build ties to the on-device model trend.
