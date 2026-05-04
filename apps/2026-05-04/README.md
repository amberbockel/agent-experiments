# Decision Log

**Category:** productivity  
**One-liner:** Track key decisions with context, reasoning, and outcomes — see patterns over time and build your decision-making muscle.

## The Problem

You make dozens of decisions every day. Most vanish into the void. The important ones — "Should I take this job?" "Should we pivot the product?" "Should I hire this person?" — deserve to be remembered, reviewed, and learned from.

But there's no lightweight place to capture them. Email threads scatter context. Notes apps bury them. Journals are unstructured.

## The Solution

A simple log:
- **Decision:** What did you decide?
- **Context:** Why did it matter? What were the options?
- **Reasoning:** What led you here?
- **Date:** When did you decide?
- **Outcome:** (optional, add later) How did it turn out?

Over time, you see:
- Patterns in how you decide
- Whether your reasoning holds up
- Where your gut was right (or wrong)

## Who It's For

- Leaders making strategic calls
- Founders navigating pivots
- Anyone who wants to get better at deciding

## Design

Flat iOS default. Clean, calm, generous. Decision-making deserves breathing room.

- System font stack
- iOS blue accent
- Light + dark mode
- Cards for each decision
- localStorage persistence
- Mobile-first (Amber checks on phone)

## What Makes It Good

1. **Fast capture** — tap, type, done
2. **Review mode** — scroll your history, see patterns
3. **Outcome tracking** — circle back months later and add "here's what happened"
4. **No cloud, no login** — just localStorage, your device, your decisions
5. **Actually useful** — not a toy, not a demo — something you'd use weekly

## File Size

Target ~20KB. Single HTML file. No build step.
