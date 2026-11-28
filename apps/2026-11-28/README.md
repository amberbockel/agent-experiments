# Skill Lint

**Built:** 2026-11-28 · **Category:** productivity

**One-liner:** Paste a SKILL.md and get an instant, offline check against the Agent Skills format, with line-level findings and one-tap fixes.

## What it does
Parses the frontmatter and body of a SKILL.md, runs about 15 checks (missing or unclosed frontmatter, name format and reserved words, vague names, description length, missing "use when" trigger, first-person voice, stale dates, unknown fields, empty body, 500-line limit, Windows paths, missing headings or examples), and scores the file out of 100. Clicking a finding selects that line in the editor. Several findings offer a fix button.

## Why it matters
Agents pick skills by reading the description. Most broken skills fail on the basics, and nobody sees the failure until the agent silently ignores the skill.

## How it works
A small hand-written frontmatter parser (supports folded `>` and `|` values) feeds a list of rule functions. Each returns severity, message, line and an optional fix that rewrites the text. Score is 100 minus 20 per error, 8 per warning, 3 per suggestion. No network, no dependencies.

## Technical notes
Single HTML file. Gutter is a separate element synced to textarea scroll. Score counter animates and respects `prefers-reduced-motion`.

## Design notes
Direction: **swiss-minimal**. Neutral grey paper, one cobalt accent, a very large tight-tracked score as the single memorable element, and strict grid alignment. It differs from the last six builds (dark, gradient, organic, high-contrast type, editorial, noir) by being light, flat and typographic.

## Trend source
Anthropic donated the Agent Skills standard to the Agentic AI Foundation (announced Oct 22, 2026): https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation
