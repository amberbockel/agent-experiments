# Bedrock

**Built:** 2026-11-17
**Category:** business
**One-liner:** Order an AI agent's prompt so the unchanging parts come first, and watch six turns of cache hits cut the bill per 1,000 conversations.

## What it does
You get a stack of prompt blocks for one of three agents (support, coding, research). Each block is labeled as never changing, growing, or changing every turn. Drag, use the arrows, or use the keyboard to reorder them. Six conversation turns re-run live as stacked bars of cached versus fresh tokens. Cost per 1,000 conversations, cache hit rate and time to first word count up. A meter shows where you sit between the worst and best order, and a note names the block that is breaking your cache.

## Why it matters
Prompt caching is one of the biggest levers on agent cost and latency, and the order of a prompt decides how much of it you get. Teams lose most of the discount by leaving a timestamp near the top.

Trend source: YC's Fall 2026 batch includes Papaya, which optimizes agent context, prompts, prompt caching, subagents and tool calls. Product Hunt's weekly roundups (Sept 2026) show agents moving into whole workflows, where per-turn cost adds up.

## How it works
Each turn, blocks are walked from the top. While the prefix still matches the previous turn, static blocks are cache hits. A growing block hits only on the part it had last turn, and then the cache stops. A volatile block ends the match immediately. Turn 1 is all fresh. Pricing is $3 per million fresh tokens and $0.30 per million cached. Latency assumes 3,000 fresh tokens per second and 30,000 cached tokens per second. The best order is static first, then growing, then volatile.

## Technical notes
Single self-contained HTML file with inline CSS and vanilla JS. No network calls and no dependencies. Pointer-based drag reorder with FLIP animation, plus keyboard and button moves. Counters tween with easing. Respects prefers-reduced-motion. 44px targets, tested at 375px.

## Design notes
Visual direction: **organic-nature**. Moss, lichen and mineral hues, a serif display face and strata-like stacked bars, so the cached "bedrock" reads as geology. It differs from the last six builds, which were minimal-dark, high-contrast-type, modern-editorial, swiss-minimal, soft-gradient-depth and clean-dashboard-dataviz. No brand kit is used.
