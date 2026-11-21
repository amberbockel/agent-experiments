# Division Drift

**Built:** 2026-11-20
**Category:** Games
**One-liner:** A space-mission long-division game where you show your work one move at a time, and finish three ways: with a remainder, as a fraction, or as a decimal.

## What it does

Division Drift turns long-division practice into a three-sector space mission. You don't just type an answer: you build the worktable move by move, and the ship thrusts toward the next planet as each move lands. The three sectors are the three ways to finish the same division, straight from how it's taught:

1. **Asteroid Belt** — finish with a **remainder** (e.g., 432 ÷ 15 = 28 r 12).
2. **Fraction Nebula** — write the **remainder as a fraction** over the divisor, then simplify (12/15 → 4/5, so 28 4/5).
3. **Decimal Deep Space** — add a **decimal point** and keep dividing into the decimals (28.8).

There's also a **Work Lab**: type any dividend and divisor, pick an ending, and step through the whole worktable one line at a time, like a worked example you can replay.

## Why it matters

The point isn't the answer, it's the method. At each step the game asks the actual question in the long-division algorithm — "15 into 43, how many times?", "2 × 15 = ?", "43 − 30 = ?", "bring down the 2" — and checks that move. A wrong move doesn't just buzz: it shows the correct value with the reason ("2 × 15 = 30, and 2 × 16 = 32 would be too big"), so a stuck kid gets a worked step in context instead of a dead end. Difficulty scales within each mission, and the three sectors walk from whole-number remainders up through fractions and decimals, matching the Massachusetts grade 6 number-sense strand (6.NS.2, 6.NS.1, 6.NS.3). It's built directly from a teacher's worked example of 432 ÷ 15 shown three ways.

## How it works

- **Core loop:** 6 problems per mission. You answer each step of the long division — the quotient digit, the multiply, the subtract, the bring-down — and the worktable fills in as you go, exactly like doing it on paper. Finish a problem with no mistakes and your combo multiplier climbs (up to ×5).
- **The worktable:** the classic bring-down method, rendered as a real tableau (divisor, bracket, quotient above, products and subtractions below with rule lines, and `15 × 8`-style notes next to each product). The decimal sector annexes zeros and continues past the decimal point; the fraction sector adds a small fraction-reduction step.
- **Input:** a big tap-friendly keypad plus full physical-keyboard support (type digits, Enter to submit). The step you're on is highlighted in the table, and a "Hint" button shows the reason for the current move.
- **Work Lab:** the same engine in demo mode. Enter any problem, choose remainder / fraction / decimal, and reveal it line by line.
- **Rewards:** animated score, a star rating per mission by accuracy, total XP, and a warp-and-confetti celebration on a clear. Progress, best scores, and the mute setting are saved on the device.

## Technical notes

Single self-contained `index.html` — inline CSS and vanilla JavaScript, no build step, no external dependencies, no CDN fonts, no network calls. Works offline. A single long-division planner computes the full worktable geometry and an ordered list of interactive steps from any dividend/divisor/ending, so the guided game and the Work Lab share one correct engine. Problems are generated so every quotient digit is non-zero (clean tableaus), remainders are non-zero where an ending needs them, and the decimal sector only picks divisions that terminate within two places. The worktable is a column grid that right-aligns each product and difference under the correct place and draws the subtraction rules; a narrow point column keeps the decimal aligned. A canvas starfield and canvas confetti add depth; WebAudio drives the blips and the warp sound (mute toggle persisted).

## Design notes

**Visual direction: high-energy aurora sci-fi.** A deep indigo space field lit by two large, slowly drifting aurora nebulae (magenta/violet and cyan/mint) over a parallax starfield, with a living cyan-to-violet-to-magenta gradient wordmark, glowing planet orbs with pulsing halos keyed per sector, a comet-trailed ship on the travel track, and a candy-bright "Enter" button. It is deliberately bold, colorful, and high-energy, but stays firmly modern: smooth gradients, blur, and glow, with no pixel fonts, scanlines, CRT, or 80s-arcade chrome. The worktable itself is set in steady tabular figures so the math stays legible against the color. Motion (aurora drift, gradient sheen, orb halos, score count-up, ship thrust, confetti, entrance stagger) is spring-eased and fully gated behind `prefers-reduced-motion`, which freezes the aurora and gradient animations. The app is mobile-first (100dvh, safe-area insets, excellent at 375px), keyboard accessible with visible focus, and uses 44px-plus touch targets throughout.

Built for a specific 6th-grade pilot who is learning to show the steps in long division.
