# Blurry click

- **Built:** 2026-11-10
- **Category:** trend
- **One-liner:** Play a computer-use agent: pick how sharp a screenshot to buy, then click the right pixel for the fewest tokens.

## What it does
Six mock screens (cookie banner, ad pop-up, checkout, sign-up form, settings, calendar). Each round starts at a cheap 1/8-scale screenshot. You can pay to look at 1/4, 1/2 or full size, aim with a tap or the arrow keys, and send one click. Clicks snap to the centre of the pixel you aimed at, just as a downscaled screenshot quantises the coordinates a model returns. After each click you see the real screen, the target and a one-line lesson, then a final tally against always using full-size screenshots.

## Why it matters
Computer-use agents are the hot category right now. Their cost and accuracy hinge on one dial that rarely gets explained: screenshot resolution. This makes the tradeoff something you feel rather than read.

## How it works
- Each scene is drawn to a 640x400 canvas, then box-averaged down by 2, 4 or 8 and shown with `image-rendering: pixelated`.
- Token cost uses the rule of thumb width x height / 750 (341, 85, 21, 5).
- A hit means the snapped pixel centre lies inside the target rectangle.
- "Could hit at" is computed by checking whether any pixel centre at each scale falls inside the target.
- Single file, vanilla JS, no network. Keyboard: arrows to aim (Shift for bigger steps), Enter to send. Respects reduced motion.

## Trend source
Product Hunt's current computer-use agent launches, for example NeuralAgent 3.0 and Ara, which act on the screen via coordinates.

## Design notes
Direction: **monochrome-type-led**. Black, white and greys only, with one signal blue reserved for the aim reticle. The headline is the hero: it resolves from blocks to sharp type on load, which is the game's idea. Not used in the last 6 builds (which ran organic-nature, maximalist-contemporary, minimal-dark, modern-editorial, swiss-minimal, clean-dashboard-dataviz). Archetype is a toy/decision game rather than a tool or explainer.
