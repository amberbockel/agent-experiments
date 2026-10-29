# Swarm Math

- **Built:** 2026-10-29
- **Category:** trend
- **One-liner:** Slide the size of a parallel-agent swarm and watch a task's trace redraw — speedup, idle time, and the point where coordination eats the gain.

## What it does
Pick a task (migrate an auth module, rewrite docs, chase one flaky bug), then set the number of agents (1–10) and a coordination tax. A swim-lane trace shows each agent's spans (plan, work, dispatch, test, review, conflict resolution, merge), with a giant speedup number, wall clock, agent-seconds paid, and idle share. A bar chart shows speedup for every swarm size so the sweet spot is visible; tap a bar to jump to it. Tap any span for detail, or replay the run with a moving playhead.

## Why it matters
Parallel-agent tools are the launch pattern of the moment (e.g. Cosine Swarm, Kilo Code v7 parallel agents, and Tracea agent observability appeared in recent Product Hunt launch lists). Adding agents feels free, but serial steps (plan, test, review, merge) and coordination overhead cap the gain — Amdahl's law with a tax. This makes that tangible.

## How it works
A deterministic scheduler: serial plan, then a dispatch cost (grows with extra agents), then work items assigned longest-job-first to the least-loaded agent, then serial test and review, a conflict-resolution cost (grows with extra agents), and merge. Speedup = solo wall time / swarm wall time. Idle share = 1 − busy time / (wall × agents).

## Technical notes
Single HTML file, vanilla JS, no network, works offline. Spans are real `<button>`s positioned by percentage (keyboard-focusable, `aria-pressed`). Theme choice persists in localStorage (try/catch guarded). Respects reduced motion (replay is skipped).

## Design notes
- **Secondary hue:** `--ab-green` (#71d45c), used for "work" spans; periwinkle stays the master accent.
- **Archetype:** data-viz / trace dashboard with one giant Prata number — a single-focus board. Different from the last five builds (word game, timing test, music toy, receipt, quantization explainer).
- **Theme:** light-default, restrained glass cards, hatched idle lanes instead of glows.
- **Source:** Product Hunt launch lists (Cosine Swarm, Kilo Code v7, Tracea), https://www.producthunt.com/
