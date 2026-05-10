# AI Reasoning Inspector

**Category:** Trend  
**Date:** 2026-05-10

## One-liner
Paste any AI response and get an instant breakdown of its reasoning patterns, confidence signals, logical structure, and potential biases — learn to read AI output critically.

## What it does
Analyzes text from ChatGPT, Claude, Gemini, or any LLM output and highlights:
- **Reasoning patterns** (deductive, inductive, analogical)
- **Confidence markers** (hedging language, certainty claims)
- **Logical structure** (claims → evidence → conclusions)
- **Potential biases** (anthropomorphism, overconfidence, deflection)
- **Readability score** (clarity, jargon density)

Built for AI power users, writers, and anyone who wants to get better at evaluating AI output instead of blindly trusting it.

## Why this matters
As AI gets more sophisticated, the line between "sounds smart" and "is actually correct" gets blurrier. This tool trains your eye to spot patterns — hedge words, circular reasoning, confidence without evidence — so you can use AI as a thinking partner instead of an oracle.

Perfect for:
- Substack writers fact-checking AI drafts
- Researchers evaluating AI-generated summaries
- Anyone learning prompt engineering
- Teachers grading AI-assisted work

## Design notes
Clean, analytical interface — closer to a code editor than a chat app. Monospace font for the input/output, color-coded highlights for each analysis category. Dark mode available. iOS flat aesthetic with surgical precision.

## Technical notes
- Single HTML file (~25KB)
- Client-side text analysis using regex + heuristics
- localStorage for history (last 10 analyses)
- Mobile-optimized with copy-to-clipboard for sharing results
