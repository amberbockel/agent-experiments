# Rerun

**Built:** 2026-11-16 · **Category:** delightful

**One-liner:** Draw walls, then watch 36 simulated agents fail, remember, and get better with every run.

## What it does
A canvas map with a start and a goal. You draw or erase walls by dragging (or arrow keys + Enter). Each run, 36 agents try to reach the goal; failed paths show in coral, successes in mint. The agents keep a shared memory between runs, shown as a blue glow, so the success rate climbs. Move a wall after they have learned a route and they stumble, then adapt. A log writes one plain sentence per run, including where the failures stalled.

## Why it matters
Teams building agents increasingly improve them by replaying them in simulated worlds. This makes that loop (fail, remember, retry) visible and tactile in about ten seconds.

## How it works
Tabular Q-learning on an 18x11 grid with four moves, shared across all agents. Rewards: +1 at the goal, -0.01 per step, -0.05 for bumping a wall. Exploration starts at 35% and decays 14% per run. Episodes for a run are computed up front, then animated as growing trails.

## Technical notes
Single file, vanilla JS and canvas, no network, works offline. Pointer events for touch and mouse, keyboard painting, DPR-aware canvas, reduced-motion skips the trail animation. Auto-run stops when every agent succeeds.

## Design notes
Direction: **minimal-dark**. Graphite ground, one light slate for walls, and three signal colors with fixed meanings (mint success, coral failure, blue memory). Light-weight oversized numerals and a single hero canvas. Differs from recent builds (high-contrast-type, modern-editorial, swiss-minimal, soft-gradient-depth, clean-dashboard-dataviz, monochrome-type-led), which were light or type-led.

## Trend source
Inspired by Plurai Simulation, "a simulated world that makes your agent improve on every run," currently topping [Product Hunt](https://www.producthunt.com/).
