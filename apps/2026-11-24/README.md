# Sector Shove

**Built:** 2026-11-24
**Category:** games
**One-liner:** A two-player starship tap duel: shove the border into your rival's sector, and freeze when the storm hits.

## What it does
Two players sit on opposite sides of one phone or tablet. The screen splits into a blue sector and a yellow sector, with a glowing border between them. Each player taps their own half to push the border toward the rival. Fill the screen to claim the round. First to 2, 3 or 5 wins takes the match.

Three twists keep it from being a pure button-masher:
- **Storm:** a one-second warning, then every tap shoves *you* backward. You have to freeze.
- **Boost:** the player who is behind gets double-strength taps for two seconds.
- **Too early:** tapping during the 3-2-1 countdown nudges the border against you.

There is also a Versus bot mode with Rookie, Pilot and Ace skill levels. Player names are editable and are never hard-coded.

## Why it matters
It is made for a parent and a 6th grader to play together. The skill gap is small: speed matters, but so does self-control and watching for the storm. Rounds last about ten seconds, so a rematch is easy.

## How it works
- The border position `p` runs from -1 to 1. Each tap adds or subtracts 0.034 (reversed in a storm, doubled in a boost). Reaching an edge ends the round.
- The visible border eases toward `p` every frame, so it feels springy rather than stepping.
- Storms and boosts fire on a random timer of 3 to 6 seconds. The bot taps at a jittered rate and freezes after a skill-based reaction delay, with a small chance of blundering through the storm.
- Sound is generated with WebAudio oscillators. There are no assets, no network calls and no dependencies.

## Technical notes
- A single HTML file with inline CSS and JS. It works offline.
- Pointer events on two fixed halves, so multi-touch works and both players can tap at once. The keyboard also works: A for the top player, L for the bottom.
- Uses `100dvh` and safe-area insets, and keeps 44px targets. It was checked at 375px wide.
- `prefers-reduced-motion` turns off confetti, pops and flame flicker. The game stays fully playable.
- Screen-reader announcements for the go signal, storms, boosts and round wins go through a live region.
- Settings are saved in `localStorage`, and the app works without it.

## Design notes
**Direction: high-contrast-type.** Ultramarine against signal yellow, with very heavy tight-tracked numerals and call-outs as the main graphic. The sector colors also act as the score board. The memorable element is the border: a white glowing line with two ships nose to nose, with blue and yellow areas that grow and shrink. When a storm hits, both sectors flip to violet and magenta at once.

It differs from recent builds: Crosswind was modern-editorial aviation, Deadletter Detective was editorial-noir, Scribe Cadet was a maximalist handwriting trainer, and Division Drift was a dark-neon math game. This one is flat, saturated and type-driven. It has no handwriting, no math and no dark background. The game type is a reflex duel.

**Trend source:** the Games Window brief for this week (family, starship and reflex games). No YC or Product Hunt launch is tied to this build.
