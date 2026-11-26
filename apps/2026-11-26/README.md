# Needle Drop

**Built:** 2026-11-26
**Category:** games
**One-liner:** A pass-and-play party game: one player sees a hidden spot on a dial between two opposites, gives a clue, and the group slides the needle to find it.

## What it does
Each round shows a spectrum such as "Soggy ↔ Crunchy". The clue giver secretly peeks at a hidden target on the dial, then says one clue aloud. Everyone else agrees on a needle position and locks it in. Bands score 4, 3 or 2 points, or 0 for a miss. The team plays cooperatively and the clue-giving role rotates. Player names are editable (2 to 8), with one or two laps.

## Why it matters
It is a family game with no setup and no reading-level barrier. It rewards explaining ideas, estimating on a scale and reading each other, and works for a 6th grader and adults at the same table.

## How it works
- 32 built-in spectrums, never repeated in a game; the clue giver can swap the dial.
- Drag the needle anywhere on the dial, or use arrow keys (Shift for bigger steps, Home/End, Enter to lock in). The needle is an ARIA slider.
- Scoring by distance on a 0 to 100 scale: within 4 scores 4, within 9 scores 3, within 15 scores 2.
- The end screen shows the team total and the average score for each clue giver.

## Technical notes
Single HTML file, vanilla JS and inline SVG, no network, no fonts or libraries, works offline. The dial is built once per round so the needle can spring between positions. `prefers-reduced-motion` turns off springs, counters and confetti.

## Design notes
Visual direction: **soft-gradient-depth**. Each spectrum has its own pair of hues. Both the dial arc and the blurred glow behind the frosted cards shift to those hues every round, so the page itself changes with the question. It differs from recent builds (editorial noir, maximalist, high-contrast type, modern editorial, organic nature) by being light, luminous and layered rather than flat or textured. Rounded system type, ink-dark buttons with colored shadows.

## Trend source
Inspired by the spectrum-guessing party-game genre (Wavelength and similar). I did not run a live Product Hunt or YC scan for this build.
