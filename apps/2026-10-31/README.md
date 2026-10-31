# Leash

**Built:** 2026-10-31 · **Category:** trend

**One-liner:** Decide how much rope an AI agent gets, then watch it use every inch.

## What it does
Pick a mission (team dinner, inbox rescue, refund hunt), then set the agent's permissions: which tools it can touch, a per-purchase spend limit, and when it must ask you first. Send it out and a six-step run log plays. Steps are blocked, finished, or paused for your Approve/Decline. Each mission hides an upsell or destructive "helpful" step. You are graded on whether the job finished, how often you were pinged, and how many messes were made. Best stamp per mission is remembered locally.

## Why it matters
Agent permissions are the practical skill of 2026: too tight and the agent is useless, too loose and it sends, spends, or deletes things you cannot undo. The toy lets you feel that trade-off in under a minute.

## How it works
Each step has a tool, cost, and risk (0 harmless, 1 small, 2 hard to undo). Resolution order: missing tool → blocked; cost over cap → blocked; autonomy says ask → pause for the user; otherwise run (risk 2 unsupervised counts as a mess). A sprung SVG rope shows the autonomy setting.

## Technical notes
Single file, vanilla JS/CSS, no network, no fonts loaded, works offline. Async run loop with cancel token, keyboard-accessible, 44px+ targets, `prefers-reduced-motion` shortens delays and disables animation. localStorage (try/catch) for best stamps.

## Design notes
Direction: **retro-70s-80s**: sunburst-orange/mustard/teal swooping bands, stacked offset-shadow display type, chunky pill buttons with hard drop-shadows, paper-grain overlay. Recent builds were tactile-3d-clay, risograph-textured and neo-brutalist; this one is warm, curvy and wood-and-vinyl rather than blocky or inked.

## Trend source
YC Spring/Summer 2026 batches are heavily agent-focused, with infrastructure for agent identity, permissions, payments and sandboxes (see coverage of YC Spring 2026 batch trends and YC's Summer 2026 Requests for Startups, "Software for Agents").
