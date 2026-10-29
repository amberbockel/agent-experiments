# Spectrum

**Date:** 2026-10-29
**Category:** delightful (game)
**Design direction:** neo-brutalist

> A pass-and-play party game: one person gives a clue, everyone else drags the needle to find the hidden spot on a spectrum. Family game night on a single phone.

## The idea

Spectrum is a Wavelength-style guessing game for a group sharing one phone. Each round, one player is the clue giver. Only they see a hidden target band on a dial that runs between two opposites (Overrated to Underrated, Old-school to Futuristic, A snack to A meal). They say a single clue out loud that points to where the band sits. Everyone else debates and drags the needle to their best guess, then locks it in. Points are scored by how close the needle lands: bullseye is 4, near is 3, on the board is 2. First to the target score wins.

The fun is the arguing in between. A good clue is specific enough to aim at but loose enough to debate.

## How to play

1. Add 2 or more players and pick a score to play to.
2. Hand the phone to the clue giver. They tap to reveal the hidden band, give one spoken clue, then hide it.
3. The group drags the needle together and locks in a guess.
4. The band is revealed, points are scored, the phone passes on.
5. First to the goal wins.

## Why these choices

- **Pass-and-play, no accounts.** One device, real people in a room. State is kept in `localStorage` so player names and the score goal survive a refresh.
- **The dial is the whole product.** It is a hand-built SVG gauge with tick marks, a scoring band, a dashed target line, and a spring-eased needle. The reveal animates the band in and counts the score up.
- **Verbal clues, not typed.** Nothing to key in on a shared phone. The game runs on conversation, which is what makes it a party game.

## Build notes

**Design direction: neo-brutalist.** Thick black borders, hard offset shadows, flat poster colors on warm paper, chunky uppercase display type, a faint grain overlay, slight rotations on the chips and spectrum ends. Deliberately nothing like a flat iOS app. Rotated in per the nightly design directive (not used in the last 6 builds).

Finishing craft: staggered entrance on the player rows, spring easing on the needle, an animated count-up on the score, the target band flipping in on reveal, tactile button travel on press, and a confetti burst on the win screen. Honors `prefers-reduced-motion`. Single `index.html`, inline CSS and JS, no build step, no external fonts or CDNs, around 25KB.
