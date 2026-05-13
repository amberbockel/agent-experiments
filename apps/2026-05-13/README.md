# Story Starter Dice

**Category:** Delightful  
**Date:** 2026-05-13  
**One-liner:** Roll the dice to generate creative story prompts — pick your character, setting, object, conflict, and twist with playful dice that shuffle on every tap.

## What it does

A creative writing prompt generator that feels like rolling actual dice. Tap to roll 3–5 story elements:

- **Character** — who the story is about
- **Setting** — where it takes place
- **Object** — a key item in the story
- **Conflict** — the problem to solve
- **Twist** — an unexpected element

Each die shows a random value and animates on roll. Great for kids, writers, creative warm-ups, or family storytelling nights.

## Why it exists

Creative prompts are everywhere, but most are static lists or random text generators. This one feels like a game — tactile, visual, playful. Rolling dice is satisfying. The constraints spark creativity.

## Design notes

**Visual treatment:** Game-board aesthetic with actual dice UI. Each die is a rounded square with dot patterns (like real dice, but with story elements). Warm, playful palette (amber, cream, soft green). Satisfying roll animation with stagger.

**Not flat iOS** — this has its own playful, tactile personality. Matches the content (a game-like creative tool).

## Target users

- Kids (8–14) who love stories
- Writers looking for prompts
- Families doing creative activities together
- Amber for Substack storytelling exercises

## Technical notes

- Single HTML file, ~20KB
- localStorage to remember last roll
- CSS animation for dice roll (rotation + scale bounce)
- Mobile-first, works great on phone
- No external dependencies
