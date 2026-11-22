# Scribe Cadet

**Built:** 2026-11-22 · **Category:** games

**One-liner:** Solve math problems by writing the answer by hand; an on-device recognizer reads your digits and flies the ship to the next planet.

## What it does
- Mission mode: 6 problems per pilot (grade 5–7 arithmetic ramping from two-digit add/subtract to times tables, order of operations, percents and squares). Write the answer one digit per box with a finger or mouse, then send it. Pilots (1–4, names editable) take turns; fuel points reward speed, streaks and first-try answers.
- Practice mode: write any number up to four digits; the app reads it back live and spells it out in words.

## Why it matters
Handwriting recognition normally means a cloud API or a downloaded model. This one is a few KB of JavaScript, runs offline, and turns messy kid handwriting into a game mechanic. It fulfils the "on-device handwriting tool" goal of the games window.

## How it works
- Strokes are captured with Pointer Events (touch, pen, mouse) and assigned to a digit box by their centroid.
- Recognizer: a from-scratch point-cloud matcher in the spirit of $P. Strokes are resampled to 40 points, stretched to a unit box (thin shapes like a plain 1 stay thin), centered, and compared against about 30 hand-authored template shapes (1–4 per digit) with a greedy cloud distance. Stroke order and direction are ignored.
- Leniency: the expected digit is accepted when it is a near-tie with the top guess, so a sloppy 5 is not punished for looking like a 3.
- Synthetic test with random rotation and stretching: about 90–95% self-recognition; plain templates, 100%.
- No network, no storage beyond the crew names in localStorage, sound via WebAudio beeps.

## Design notes
Direction: **maximalist-contemporary**. Saturated cobalt ground, oversized tangerine, pink and lemon circles, rounded heavy type, chunky ink-offset buttons that press down, confetti and a spring-eased ship on a planet track. Deliberately light and flat-colored rather than the dark-neon of two nights ago (Division Drift), and not retro. Reduced-motion disables confetti and transitions.

World: starships. Game type: drawing and recognition. Previous builds were arcade and puzzle math games.

Trend source: on-device AI is the running theme (small models, WebGPU); this answers it with a zero-model, zero-download recognizer.
