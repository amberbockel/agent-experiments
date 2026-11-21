# Calibrate

**Built:** 2026-11-21
**Category:** business
**One-liner:** Grade ten support replies yourself, then tune an AI judge until it grades like you.

## What it does
You mark ten refund-desk replies from a support agent as pass or fail. Then a simulated AI judge grades the same ten. Four dials set what it rewards (factual match, length, politeness) and how harsh its pass mark is. Agreement and Cohen's kappa update live. At kappa 0.80 the judge locks and you can copy the rubric.

## Why it matters
Teams grade agents with LLM judges, but an unchecked judge drifts toward length and polite padding. The toy lets you feel why a judge needs calibrating against human labels before anyone trusts its scores.

## How it works
Each reply has hidden traits: correct or not, length, politeness. The judge scores a weighted blend of those traits, normalised so the weights sum to 100%, and passes a reply at the chosen threshold. Kappa is computed from the 2x2 table of your labels against the judge's. Rows show each judge score as a bar with the pass mark as a blue line.

## Technical notes
Single file, vanilla JS and CSS, no network, no dependencies. Keyboard: P and F to grade. Counters tick, flipped verdicts pop, and reduced-motion disables animation. Sliders and rows are keyboard-operable with 44px+ targets.

## Design notes
Direction: **swiss-minimal**. White grid, one ink colour, one signal blue, tight Helvetica-style type with oversized index numerals, and pass/fail colours used only for verdicts. It differs from the last six builds (dashboard, soft-gradient, monochrome, organic, dark, high-contrast type) by being a flat, rule-driven layout with no gradients or tint washes.

## Trend source
ZeroEval's YC launch, which calibrates LLM judges against human preference baselines: https://ycombinator.com/companies/zeroeval and https://fondo.com/blog/zeroeval-launches-ebe5e
