# Four Alike

- **Built:** 2026-10-22
- **Category:** games
- **One-liner:** A pass-and-play connect-four where every tile is a fraction, decimal or percent — claim the ones worth the same as the target picture and get four in a row.

## What it does
A 5×5 board holds five "families" of equal amounts (e.g. 3/4, 6/8, 9/12, 0.75, 75%), shuffled. Each turn a picture target (a shaded bar or pie) appears; the active player taps any unclaimed tile worth the same amount. A wrong tap passes the turn and says what that tile was actually worth. First to connect four (row, column, diagonal) wins; a full board is decided on tile count. 2–4 players, names fully editable, two difficulty levels (Friendly: halves/fifths/tenths; Stretch: adds eighths and twentieths).

## Why it matters
Equivalent fractions, decimals and percents are a core grade 5–7 (MA curriculum-friendly) skill. Choosing *which* equivalent tile to claim adds real strategy, so kids practice conversion without it feeling like a worksheet. Family-game night, no accounts, offline.

## How it works
`deal()` picks five distinct values, builds five forms for each (reduced fraction, two scaled equivalents, decimal, percent), and shuffles 25 tiles. `newTarget()` chooses a family that still has free tiles and renders it as inline SVG. Win detection precomputes every 4-length line on the grid.

## Technical notes
Single HTML file, vanilla JS, no network, no deps beyond the brand kit. Stacked fractions are CSS; claimed tiles use colour *and* a shape glyph (● ■ ▲ ◆) so colour is never the only cue. Theme preference persists via localStorage with try/catch.

## Design notes
- **Secondary hue:** `--ab-green` (#71d45c, inked darker for contrast) beside the periwinkle accent; players also use pink-soft and lavender tints.
- **Archetype:** game board, single-focus canvas, light-default — a clear break from the recent dark-glass tools (Tripwire, Next Up, Switch Tax) and from yesterday's critter toy. Big Prata hero moment on setup, restrained dense grid in play.
- **Trend source:** no live web scan was possible in this run; the idea comes from the standing "weekly kid-friendly family game" theme (Flip 7 / chess-style pass-and-play) and the school-math brief.
