# Division Drift

**Built:** 2026-11-20
**Category:** Games
**One-liner:** A space-mission division game. Boost your ship across the galaxy by solving long division, dividing fractions, and dividing decimals, with step-by-step hints that teach the method when you get stuck.

## What it does

Division Drift turns 6th-grade division practice into a three-sector space mission. You pilot a ship from planet to planet, and every correct answer is a burst of thrust. Three sectors unlock in order, so the math ramps with the pilot:

1. **Asteroid Belt** — long division of multi-digit numbers by 1 to 2 digit divisors, with remainders (enter quotient and remainder).
2. **Fraction Nebula** — dividing fractions with keep-change-flip. Any equivalent fraction is accepted, and the hint shows the simplest form.
3. **Decimal Deep Space** — dividing decimals that land on clean one and two place answers.

## Why it matters

Most drill apps just mark an answer right or wrong. This one *teaches on a miss*: a wrong answer costs a shield and opens a "Show the steps" panel that walks the actual algorithm — the divide / multiply / subtract / bring-down steps for long division, keep-change-flip for fractions, and moving the decimal for decimals. So a stuck kid gets a worked example in context instead of a dead end. Difficulty scales within each mission, and the three sectors move from whole-number division up to fractions and decimals, matching the Massachusetts grade 6 number-sense strand (6.NS.2, 6.NS.1, 6.NS.3).

## How it works

- **Core loop:** 8 problems per mission. Correct answers advance the ship and raise a combo multiplier (up to x5); wrong answers reset the combo and cost one of three shields. Lose all three and you retry the sector.
- **Input:** a big tap-friendly keypad for phones and tablets, plus full physical-keyboard support (type digits, Tab between fields, Enter to boost).
- **Rewards:** animated score count-up, a star rating per mission, total XP, and a warp-and-confetti celebration on a clear. Progress, best scores, and the mute setting are saved on the device.
- **Hints:** tap "Show steps" any time, or they appear automatically after a wrong answer, rendering the worked method for that exact problem.

## Technical notes

Single self-contained `index.html` — inline CSS and vanilla JavaScript, no build step, no external dependencies, no CDN fonts, no network calls. Works offline. Problems are generated so every answer is exact (long division builds from quotient × divisor + remainder; decimals build from an exact answer × divisor), and the fraction checker accepts any equivalent fraction. A lightweight canvas starfield and canvas confetti provide depth; WebAudio drives the blips and the warp sound (mute toggle persisted).

## Design notes

**Visual direction: high-energy aurora sci-fi.** A deep indigo space field lit by two large, slowly drifting aurora nebulae (magenta/violet and cyan/mint) blended over a parallax starfield, with a living cyan-to-violet-to-magenta gradient wordmark, glowing planet orbs with pulsing halos keyed per sector, a comet-trailed ship on the travel track, and a candy-bright cyan-violet-magenta "Boost" button. It is deliberately bold, colorful, and high-energy — but stays firmly modern: smooth gradients, blur, and glow, with no pixel fonts, scanlines, CRT, or 80s-arcade chrome. Tabular-figure numerals keep the equations and score steady; motion (aurora drift, gradient sheen, orb halos, score count-up, ship thrust, confetti, entrance stagger) is spring-eased and fully gated behind `prefers-reduced-motion`, which freezes the aurora and gradient animations. The app is mobile-first (100dvh, safe-area insets, excellent at 375px), keyboard accessible with visible focus, and uses 44px-plus touch targets throughout.

Built for a specific 6th-grade pilot who is working on division right now.
