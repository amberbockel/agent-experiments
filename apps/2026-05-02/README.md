# Prompt Sharpener

**Category:** Trend  
**Date:** 2026-05-02  
**One-liner:** Paste any AI prompt and get instant critique + rewrite — learn what makes prompts sharp vs sloppy, with before/after examples.

## The Job

Most people write prompts like search queries. This tool teaches prompt craft through pattern recognition: paste yours, see what's weak (vague role, no format, no examples), get a sharper version with annotations.

## Who It's For

- Amber's Substack readers learning to work with AI
- Anyone writing prompts and getting muddy results
- Teams wanting a shared reference for "good prompt" patterns

## How It Works

1. Paste a prompt (yours or an example)
2. See instant feedback across 6 dimensions:
   - **Role definition** — Who is the AI? Generic assistant or specialist?
   - **Specificity** — Concrete ask or vague handwave?
   - **Output format** — Structured (list, table, JSON) or freeform blob?
   - **Examples** — Did you show what good looks like?
   - **Constraints** — Guardrails present?
   - **Context** — Background info included?
3. Get a rewritten version with improvements highlighted
4. Compare before/after, learn the patterns

## Design Decisions

**Visual:** Clean, editorial. This is a teaching tool, not a flashy app. White background, generous line-height for reading prompts, soft green for improvements, muted orange for critiques. Inspired by writing tools like Hemingway Editor.

**Interaction:** One screen. Paste → instant feedback. No loading spinners (all client-side heuristics), no accounts, no saving (each session is a lesson).

**Pedagogy:** Show don't tell. Annotations point to specific weak spots. The rewrite demonstrates patterns, doesn't just lecture.

## Technical Notes

- Pure client-side (no API calls, no server)
- Pattern matching with weighted scoring across 6 dimensions
- Rewrite engine uses templates + token substitution
- ~20KB total (inline CSS + JS)
- localStorage for last prompt (resume if you refresh)

## What It Teaches

The difference between:
> "Write a blog post about AI"

vs

> "You're a UX writer at a tech company. Write a 500-word blog post intro about AI decision-making tools. Audience: product managers who haven't used AI yet. Tone: practical, not hype-y. Include 1-2 concrete examples of decisions AI could help with. Output format: markdown with H2 sections."

One is a wish. The other is a brief. This tool trains you to write briefs.
