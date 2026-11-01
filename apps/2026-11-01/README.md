# Skill Proof

**Built:** 2026-11-01
**Category:** productivity
**One-liner:** Paste a SKILL.md and get a proofreader's markup: spec errors, weak descriptions, and a test of whether your prompts would trigger it.

## What it does
- Lints a pasted SKILL.md live: frontmatter, name format and length, reserved words, description length, third person, a "use when" trigger, empty body, TODOs, 500-line limit.
- Scores 0–100 with an animated counter. Each mark is a clickable row that jumps to the line in the editor. Fixable marks have a one-click fix.
- "Would it fire?" compares a sample request with the description and shows matched and missing words.

## Why it matters
Agents choose skills almost entirely from the description. A skill with a vague or malformed description is never loaded. This is a DOING tool: you fix the file in place.

## How it works
Single HTML file, vanilla JS, offline. A small frontmatter parser feeds weighted rules (error 22, warning 9, note 3). The trigger test stems words, drops stopwords and measures overlap with the description. It approximates a router, not a model.

## Trend source
Skills registries are hot right now: skills.sh by Vercel (Product Hunt, #3 Product of the Day), SkillMD, and Agent Skills Finder. The format is an open standard adopted by 40+ tools. No YC batch launch turned up in tonight's search.

## Design notes
**Direction: monochrome-type-led.** Ink on paper, one signal red reserved for errors, a large serif score numeral, and a proof-sheet vocabulary. Recent builds were retro, clay, riso and neo-brutalist, so this is the quiet counterpart: no color-coding, severity carried by glyph and weight. Motion is limited to the score count-up and responses to taps; reduced motion is respected.
