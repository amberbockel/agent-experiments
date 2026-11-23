# Crosswind

**Built:** 2026-11-23
**Category:** games
**One-liner:** Land a plane on a runway while gusts shove you sideways, fly it solo or take turns with family.

## What it does
You fly the final approach to five airports, each windier than the last. Steer left and right to fight the gusts and keep on the centerline, and control your sink rate to stay on the glide slope. A four-light PAPI indicator (two red, two white means on slope) tells you whether you're high or low. Touch down and get a score out of 100 for centerline, touchdown spot, softness and glide steadiness, with one plain-language tip. Up to four pilots (editable names) take turns; a leaderboard closes the trip.

## Why it matters
It is a family game with a real piece of aviation in it: the same PAPI lights and glide-slope idea that pilots use. Two people can share one screen, one on Steer and one on Descent. Kids learn that correcting early with small inputs beats big late ones.

## How it works
- Pseudo-3D canvas renderer: perspective projection of runway, banded ground, markers, hills and rain, with camera roll from lateral speed.
- Simple physics: lateral acceleration = steering + summed-sine gusts - damping; sink rate eases toward a target the player adjusts.
- PAPI angle = atan(height / distance to the aim point), compared against 2.5, 2.83, 3.17 and 3.5 degrees.
- Single file, no network, no dependencies. Keyboard (arrows or WASD) and hold-to-press touch buttons. Best landing stored in localStorage (optional).

## Games-window notes
- World: aviation and flying. Game type: reflex and steering, which differs from the last builds (handwriting, space math, pass-and-play agent game).
- Trend source: the nightly games-window brief; no web scan was needed for a game build.

## Design notes
Visual direction: **modern-editorial**, recast as bold and playful: saturated sky blue, tangerine and sun yellow on deep ink navy, a rounded heavy sans, large type, chunky tactile buttons with spring presses, and a stylised flat-shaded cockpit view. It is not in the last six manifest designs (maximalist-contemporary, swiss-minimal, dark-neon, clean-dashboard-dataviz, soft-gradient-depth, monochrome-type-led). No retro, pixel or arcade styling. Reduced-motion disables confetti, shake and entrance animations.
