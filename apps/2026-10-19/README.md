# Next Up

**Built:** 2026-10-19 · **Category:** trend

**One-liner:** An app switcher that learns your habits — a tiny on-device model guesses which app you'll open next.

## What it does
Tap through eight apps like a real switcher. After each switch, Next Up shows its top three predictions with confidence bars and tracks its own top-1 / top-3 hit rate. "Simulate a workday" feeds it a noisy routine so you can watch accuracy climb.

## Why it matters
Predictive UI (Product Hunt's "app switcher" and "predictive AI" categories) is moving on-device: no cloud, no logs of your behavior. This shows how little model it takes — no neural net, just counts.

## How it works
A smoothed n-gram model: counts of what followed the current app, boosted when the time-of-day bucket matches and when the previous two apps match (order-2 context). Scores are normalised into probabilities and ranked. Accuracy is measured prequentially (predict, then learn).

## Technical notes
Single file, vanilla JS, no network. History (max 600 switches) persists in localStorage, guarded with try/catch.

## Design notes
Brand kit tokens, glass tiles, pink accent reserved for the top guess and hits; 44px+ targets, visible focus, reduced-motion respected, built for 375px.

## Trend source
Product Hunt categories: app switcher, predictive AI (https://www.producthunt.com/categories). Live PH data was unavailable via search during this run.
