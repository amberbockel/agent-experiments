# Phrase Spin

**Built:** 2026-11-08
**Category:** games

**One-liner:** A pass-and-play word wheel: spin for points, call letters, and solve a hidden phrase before anyone else does.

## What it does
2–6 players (names are editable, nothing hard-coded) take turns. Spin the wheel, then call a consonant for that wedge's points times the number of matches. Bankrupt wipes your round bank, Lose Turn passes. Vowels cost 250 from your bank. Solve the whole phrase to bank your round total plus 500. Play 3 or 5 rounds; the highest total wins.

## Why it matters
Phrases are drawn from science, math vocabulary, Massachusetts history and tech terms, so a family game night quietly rehearses grade 5–7 vocabulary and spelling. Spin-or-solve is a real risk decision: keep buying letters or gamble on a guess.

## How it works
SVG wheel with 12 wedges. The target wedge is picked first, then the rotation is computed so the pointer lands on it, with a CSS ease-out for the spin. A turn state machine (turn, spinning, consonant, wait, over) gates the keyboard and buttons. Answers are normalized to letters only, so spacing and case don't matter.

## Technical notes
Single file, vanilla JS and CSS, system fonts, no network calls, works offline. Native `<dialog>` for solving and results, physical keyboard letters work, `prefers-reduced-motion` honored (short spin, no confetti or flips), 44px+ targets, safe-area insets, `100dvh`.

## Design notes
Direction: **maximalist-contemporary**: saturated ultramarine, coral, citrus and mint on deep indigo, heavy display type, a wheel with soft colored depth, flip-reveal tiles, tweened score counters and a confetti burst on solves. It differs from the last six builds (minimal-dark, modern-editorial, swiss-minimal, clean-dashboard-dataviz, soft-gradient-depth, organic-nature) by being loud, color-blocked and tactile rather than restrained.

## Trend source
Fits the recurring family pass-and-play game slot (Wheel of Fortune-style). The YC and Product Hunt scan could not run: the session's network blocked ycombinator.com, so this is not tied to a specific launch.
