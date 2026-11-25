# Hothouse

**Built:** 2026-11-25
**Category:** games
**One-liner:** A pass-and-play number garden: combine seed packets with + − × ÷ to hit the target before your turn timer runs out, and grow your plant.

## What it does
Up to four players (names editable, nothing hard-coded) take turns on the same puzzle each round. Every puzzle is guaranteed solvable by a built-in solver. Tap a seed, pick an operation, tap a second seed, and the two merge into one. Reach the target with the last seed to score. Faster solves earn a bonus, hints cost 3 points, and giving up shows one solution. Each player's plant grows as their score climbs and flowers at 80 points.

Two gardens: **Seedlings** (3 seeds, a target from 6 to 24, 45 seconds) and **Greenhouse** (4 seeds, always make 24, 75 seconds).

## Why it matters
It is the classic "24" card game, which builds operation fluency and order-of-operations intuition for grades 5–7. The rules push real number sense: subtraction must stay above zero and division must come out even, so kids learn why a pair fails. Pass-and-play suits a parent and child at the same table.

## How it works
- A recursive integer solver tries every pair and every legal operation, returns the move list, and powers puzzle generation, hints (solved from the current table) and the reveal.
- Timer uses `performance.now()`, with an SVG ring that turns berry-red under 10 seconds.
- Undo and Start over use card-state snapshots. Keyboard: `+ - * /` pick an operation, Backspace undoes.
- Plants are generated SVG, with level = score ÷ 10.

## Technical notes
Single file, inline CSS and JS, no network, no fonts, works offline. Player setup is saved to localStorage when available. Honors `prefers-reduced-motion`. Targets are 44px or larger, with visible focus rings and `aria-live` feedback.

## Design notes
**Visual direction: organic-nature.** Moss, leaf and sprout greens on a pale mint ground, with sun yellow and berry as the only warm notes. Seed packets are rounded cards with colored top bands, the target is set in a large serif, and UI text uses the system rounded face. It is deliberately different from the previous builds: high-contrast-type (Sector Shove), modern-editorial (Crosswind), editorial-noir (Deadletter Detective) and maximalist-contemporary (Scribe Cadet). Those were space, aviation and detective worlds; this one is a quiet garden and a turn-based number puzzle.

Trend source: the classic "24" math card game, reimagined for the family games window (no launch tie-in this week).
