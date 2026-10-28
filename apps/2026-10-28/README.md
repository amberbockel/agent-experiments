# Spin & Solve

- **Built:** 2026-10-28
- **Category:** games
- **One-liner:** A pass-and-play wheel-and-puzzle word game for the whole family — spin, guess letters, solve the phrase.

## What it does
2–6 players (names fully editable, no hard-coded defaults) share one device. On your turn you spin a 16-wedge wheel, then name a consonant worth the wedge value for every tile it reveals. Vowels cost 200 from your round score. Bankrupt wipes your round score, Lose Turn passes the wheel. Solve any time on your turn; the round winner banks their score plus a 250 bonus. Play 2, 3 or 5 rounds, then see the podium.

## Why it matters
Family game night in a single offline file. Puzzles are grade 5–7 friendly: science, math vocabulary, Massachusetts history, idioms, plus a "Tech" category nodding to on-device AI.

## How it works
- Canvas-drawn wheel with an eased spin; the landed wedge is derived from the final rotation, so the pointer is always honest.
- Tile board uses CSS 3D flips; letters, vowels and solve attempts are validated against a normalized phrase.
- Turn state machine: `spin → spinning → pick → spin | next player`, with vowel buying only on `spin`.
- Physical keyboard works too; on-screen keys show used/live/vowel states.

## Technical notes
Single file, vanilla JS, no network calls, works offline. Respects `prefers-reduced-motion` (shorter spin, no confetti). Modal traps focus and closes on Esc. Theme toggle persists via localStorage (try/catch guarded).

## Design notes
- **Archetype:** playful board game centred on a generative canvas wheel — different from the last five builds (stepper/quiz, music toy, receipt, explainer, ring planner).
- **Secondary hue:** brand green `#71d45c` (tiles, Lose Turn wedge, win states) with periwinkle as the master accent.
- **Light-default**, single-focus column, restrained type with one big Prata moment on the setup headline.
- Last game was Four Alike (Oct 22), so this is the weekly family-game slot.

## Trend source
The Product Hunt scan returned no dated ranking, so this build follows the standing weekly family-game slot rather than a specific launch.
