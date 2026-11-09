# Graft

**Built:** 2026-11-09
**Category:** productivity
**One-liner:** Three parallel AI agents solved the same task. Graft the best piece of each into one merge and watch the checks respond.

## What it does
A deciding tool for the moment after a swarm of coding agents finishes. Four decisions (loop, wait, what to retry, duplicate protection) each offer one candidate from Run A, B and C. You pick a piece per decision, or start from a whole run, and a merged `deliver.js` assembles live beside five checks that pass, warn or fail as you choose. Run C taken wholesale fails one check on purpose: its recursive form regenerates the idempotency key on each call. Cherry-picking beats picking a winner.

## Why it matters
Parallel agents make generating alternatives cheap. The scarce skill is now reviewing and merging them. This turns that judgment into something you can feel: every combination has consequences you can read.

## How it works
- Vanilla JS, one file, no network. Option data, run presets and check rules are plain objects at the top of the script.
- `gen()` composes real code from the chosen pieces. Each line is tagged with its decision so hovering or focusing an option highlights its lines.
- Checks are pure functions of the picks. A check stays pending until the decisions it depends on are made.
- Score counts up with easing, the progress stem grows as decisions resolve, and a clean merge releases a small burst of leaves.

## Trend source
Product Hunt launches seen this week built around parallel agents and multi-model comparison, notably Cosine Swarm and Kilo Code v7 (parallel agents, diff reviewer). Tonight's scan of Launch YC returned nothing newer.

## Design notes
Direction: **organic-nature**. Cool lichen and moss on stone, a humanist serif for headings, a night-forest code pane. Decisions hang on a growing stem, which is progress information, not decoration. It differs from recent builds (maximalist, minimal-dark, editorial, swiss, dashboard, soft-gradient) and avoids warm cream and terracotta. Keyboard: arrow keys move within a decision; targets are 44px; reduced motion removes animation.
