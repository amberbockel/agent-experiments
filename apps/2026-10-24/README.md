# Shrink to Fit

**Built:** 2026-10-24
**Category:** trend
**One-liner:** An interactive explainer of how quantization squeezes a model onto a phone — drop the precision of a picture, then see which devices a model fits on.

## What it does
A three-chapter scrolling story. (I) A slider drops a sunset picture from 8 to 1 bit per channel and shows the shades left and the drift from the original. (II) Pick a model size (1B–27B) and precision (16/8/4/2-bit) and see the weight size in GB and which devices have room. (III) Three takeaways.

## Why it matters
On-device small models (Gemma, LiteRT) are the story of the year, but "4-bit" is abstract. This makes the trade-off tangible in under a minute.

## How it works
Size = parameters × bits ÷ 8. Device budget = 60% of RAM (illustrative). The picture is generated procedurally into a float buffer and rounded to 2^bits levels per channel on a canvas.

## Technical notes
Single file, vanilla JS, brand kit linked, no network calls, works offline. Theme toggle persists via localStorage (try/catch). Reveal-on-scroll honors `prefers-reduced-motion`. Checked at 375px with no overflow or console errors.

## Design notes
Light-default editorial single column with big Prata moments and roman-numeral chapters; secondary hue **green #71d45c** (fit bars, chapter numerals), periwinkle kept as master accent. Differs from recent builds: they were dark-glass tools, a ring canvas, a game and a toy; this is a restrained, scroll-driven explainer.

## Trend source
Google Gemma 4 QAT checkpoints and LiteRT-LM on-device tooling: [Google AI Edge](https://developers.googleblog.com/google-ai-edge-small-language-models-multimodality-rag-function-calling/), [Arm on INT8 vs INT4](https://developer.arm.com/community/arm-community-blogs/b/ai-blog/posts/llm-quantization-for-mobile-deployment).
