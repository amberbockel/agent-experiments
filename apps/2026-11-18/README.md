# Handoff

**Built:** 2026-11-18
**Category:** productivity
**One-liner:** Write the message a stuck AI agent sends to a human expert, and see how many round trips it costs.

## What it does
Five fields (goal, already tried, exact evidence, the question, limits) feed a live "what the expert sees" panel. Each missing or weak part makes the simulated expert ask a clarifying question, adding a round trip and about seven minutes. Fix the gaps and the count falls to zero, leaving one reply. Copy the finished brief as Markdown.

## Why it matters
Agents increasingly escalate to humans through tools like MCP servers. A vague escalation wastes the expert's time and the agent's. Writing a self-contained handoff is a communicating skill that applies to people too.

## How it works
Plain heuristics per field (length, two or more attempts, error-like evidence, a single bounded question ending in "?", stated limits). Read time is estimated from word count. A counter animates between gap totals. No network, no dependencies.

## Technical notes
Single file, vanilla JS, system fonts, works offline, honors prefers-reduced-motion, 44px targets, sticky preview on desktop, light and dark.

## Design notes
Direction: **monochrome-type-led**. Ink on paper, no accent color; a giant serif round-trip count is the hero and weight and inversion carry state. It differs from recent builds (organic-nature, minimal-dark, high-contrast-type, modern-editorial, swiss-minimal, soft-gradient-depth).

## Trend source
Humwork, a YC Spring 2026 company: an MCP server that routes stuck AI agents to human experts (found via a web search of Launch YC / Hacker News launches; ycombinator.com was not reachable from the build sandbox).
