# Brain Dump → Action

**Category:** Productivity  
**Built:** 2026-06-05  
**One-liner:** Convert messy thoughts into sorted next-actions fast — type everything on your mind, then auto-sort into do-now, do-later, delegate, or drop.

## The problem

You're overwhelmed. Ideas, tasks, worries, reminders — all swirling. Writing them down helps, but then you've just got a messy list.

## What it does

1. **Brain dump zone** — type or paste everything on your mind, one item per line
2. **Auto-categorize** — tap "Sort," and the app groups items into:
   - ✅ **Do now** — urgent, clear, actionable
   - 📅 **Do later** — important but not urgent
   - 🤝 **Delegate** — someone else should handle it
   - 🗑️ **Drop** — not worth doing
3. **Refine & act** — drag items between buckets, check off what's done, clear the deck

## Why it matters

Getting thoughts out of your head is half the battle. The other half is deciding what to do with them. This tool does both in under a minute.

## Design notes

- Flat iOS default — clean, generous whitespace, system fonts
- Drag-and-drop between categories
- localStorage so your brain dump persists
- Mobile-first (this is a phone tool)

## Tech

Single `index.html`, ~20KB, inline CSS + JS, no dependencies.
