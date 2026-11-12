# Draft and Verify

**Built:** 2026-11-12 · **Category:** trend · **Design direction:** soft-gradient-depth

**One-liner:** Race a big language model against the same model with a small drafter, and find the draft length that makes it fastest.

## What it does
Two lanes write the same 32-token sentence. The top lane is a big model writing one token per pass. The bottom lane adds a small drafter that guesses ahead; the big model checks the whole guess in one pass, keeps the accepted prefix and writes the next token itself. You choose drafter quality (Tiny 55%, Small 75%, Sharp 90% per-token accuracy) and draft length (1 to 8). Tokens-per-second counters tick live, the speed-up counts up when the race ends, and a chart shows expected speed-up for every draft length with the sweet spot marked. Tap a chart point to try that length.

## Why it matters
Speculative decoding is how small on-device models feel faster, and the lesson is counter-intuitive: longer guesses help up to a point, then cost more than they return. Feeling that peak by moving one slider teaches it faster than a paragraph.

Trend source: Google's Gemma 4 family (April 2026), including Gemma 4 12B with Multi-Token Prediction drafters, aimed at phones and laptops (HotHardware, SiliconANGLE and InfoQ coverage). Live YC and Product Hunt pages were not scanned tonight.

## How it works
- One big-model pass = 1 time unit; one drafted token = 0.1 units.
- Each round: draft k tokens, verify in one pass, accept the prefix until the first miss, then the big model writes the correcting or bonus token.
- Expected speed-up = (1 − a^(k+1)) / (1 − a) / (1 + 0.1k), plotted per k. The race itself is a seeded sample, so it wobbles around the curve.
- Single file, vanilla JS, no network. Reduced motion jumps to the finished state.

## Design notes
Soft-gradient-depth: a mint, blush and butter mesh background, frosted glass cards, colored shadows under the winning lane, rounded system sans with tight heavy headline. Accepted tokens are emerald gradient chips, the big model's own tokens are slate violet, rejections coral. It differs from recent builds (dashboard, monochrome type, organic, maximalist, dark, editorial) by being light, glassy and gradient-led, and by being a live race toy instead of a dashboard or stepper.
