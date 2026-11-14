# Trigger Words

**Built:** 2026-11-14
**Category:** trend
**One-liner:** Write the one-line description that makes an AI agent load your skill at the right moment, and only then.

## What it does
Three rounds. Each gives you an agent skill (pdf-forms, meeting-notes, chart-maker) with a vague description and seven incoming requests. You rewrite the description (120 characters max) and watch a visible router decide, live, which skill loads for each request. Solve all seven to finish the round; shorter descriptions earn more stars (3 stars at 60 characters or fewer, 2 at 95 or fewer).

## Why it matters
In agent-skill systems (SKILL.md files), the frontmatter description is the only part always in context, so it alone decides when a skill opens. Vague descriptions fire on everything; crowded ones collide with lookalikes. The game makes that tradeoff tangible, and shows the per-turn token cost of every line.

## How it works
A deliberately simple, transparent router: stopword removal and light stemming, then a skill loads only when a request shares at least two words with its description. The highest idf-weighted match wins; ties load nothing. Matched words are highlighted in each request, and each result explains why. Rival skills have fixed descriptions, so you must beat lookalikes, not just match words.

## Technical notes
Single self-contained `index.html`, vanilla JS, no network, no external fonts, works offline. Tested: solutions for all rounds route 7/7, and the page runs with no console errors at 375px and desktop widths. Honors prefers-reduced-motion; 48px targets and visible focus; mobile-first with safe-area insets.

## Design notes
Direction: **modern-editorial**. A magazine-like measure, Charter-style serif for reading and the text you edit, a clean sans for interface, yellow highlighter marks for matched words, and a single green for correct routing. Last used 2026-11-06, and it differs from the preceding builds (swiss-minimal, soft-gradient-depth, clean-dashboard-dataviz, monochrome-type-led, organic-nature, maximalist-contemporary). Motion is limited to responses: score counter, a pop when a request flips to correct, and the win card.

## Trend source
Agent skills and SKILL.md tooling, plus the YC Fall 2026 agent-infrastructure wave (e.g. AgentMail, YC S25, on Launch HN).
