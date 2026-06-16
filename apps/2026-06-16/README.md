# System Prompt Tester

**Category:** trend  
**Date:** 2026-06-16  
**One-liner:** Test how different system prompts shape AI behavior — compare responses side-by-side to see which prompt style gets you the output you actually want.

## The problem

You're building with AI and you know the system prompt matters, but you don't know *how much* or *which style* works best. Do you go detailed or minimal? Strict or flexible? Persona-driven or instruction-only?

Right now you're guessing.

## What it does

1. **Pick a system prompt style** from common patterns:
   - Minimal (bare instructions)
   - Detailed (explicit rules + examples)
   - Persona-driven ("You are a...")
   - Structured (chain-of-thought, step-by-step)
   - Or write your own custom prompt

2. **Add a user input** (the actual query/task)

3. **See side-by-side comparison** of how each style responds (simulated, showing typical behavior patterns)

4. **Compare tone, verbosity, structure** — learn what each approach actually changes

## Why it matters

System prompts are the invisible foundation of every AI interaction. This tool makes them visible and testable, so you can stop guessing and start shipping prompts that work.

## Target users

- **Product builders** integrating AI into apps
- **Substack writers** experimenting with AI assistants
- **Curious folks** who want to understand how prompt engineering actually works

## Technical notes

- Single HTML file, no external dependencies
- localStorage for saving favorite prompts
- Simulated responses (not live API calls — this is a learning/comparison tool)
- Mobile-first, iOS aesthetic
- ~20KB total
