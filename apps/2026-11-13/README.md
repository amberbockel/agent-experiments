# Nudge

**Built:** 2026-11-13
**Category:** delightful
**One-liner:** Watch a greedy agent wander a maze, and leave the fewest hints that get it home.

## What it does
A small agent walks a maze toward a goal in the far corner, always choosing the neighbouring cell that looks closest. It works until a dead end or loop traps it. When it has circled the same cell three times it stalls and pulses. You then place one hint on a shaded cell within five cells of it; the agent follows the real corridors to the hint and goes back to walking on its own. Fewer hints than par wins. Mazes grow from 11 to 17 cells across as you play, and a ledger tracks each result against par.

## Why it matters
Agents that ask a person for help only when truly stuck are the point of this week's launches, and the hard design question is where a small human nudge pays off most. Nudge makes that cost tangible.

Trend source: Humwork (YC Spring 2026) launched an MCP server that routes stuck AI agents to human experts, found in the Launch YC and news scan on 2026-11-13.

## How it works
- Mazes: seeded recursive-backtracker, then about 6% of walls removed to add loops.
- Agent policy: pick the open neighbour minimising Manhattan distance to the goal plus 1.5 times its visit count. Stuck means a cell visited three times.
- Hint: BFS path from the agent to the chosen cell; the agent follows it, visit counts reset, greedy resumes.
- Par: an automatic solver replays the same agent and places each hint as far along the true solution as the reach allows. Mazes are regenerated until par is 2 to 5.
- Single file, vanilla JS and canvas, no network, works offline.

## Technical notes
Agent logic is a pure function shared by the live game and the par solver. Canvas renders at up to 2x DPR. Keyboard: arrow keys move the cursor, Enter places a hint. `prefers-reduced-motion` removes interpolation, pulses and number tweens. Targets are 48px; layout is mobile-first with safe-area insets.

## Design notes
Direction: **swiss-minimal**. Cool grey ground, white board, ink black, one signal red for the agent and its trail and one electric blue reserved for the human. Helvetica-style grotesque, heavy tight title, flush-left grid with ruled stats. Last six builds used soft-gradient-depth, clean-dashboard-dataviz, monochrome-type-led, organic-nature, maximalist-contemporary and minimal-dark, so Swiss rules and flat colour coding are a clear change, and this is a generative canvas toy rather than a quiz or simulator.
