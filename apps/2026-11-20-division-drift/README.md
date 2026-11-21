# Division Drift

**Built:** 2026-11-20
**Category:** Games
**One-liner:** A space-mission long-division game where you show your work the Big Seven way (partial quotients), one move at a time, and finish three ways: with a remainder, as a fraction, or as a decimal.

## What it does

Division Drift turns long-division practice into a three-sector space mission. You don't just type an answer: you build the worktable move by move using **partial quotients (the Big Seven / "box" method)** — the strategy this pilot's class actually teaches — and the ship thrusts toward the next planet as each move lands. The three sectors are the three ways to finish the same division, straight from how it's taught:

1. **Asteroid Belt** — finish with a **remainder** (e.g., 432 ÷ 15 = 28 r 12).
2. **Fraction Nebula** — write the **remainder as a fraction** over the divisor, then simplify (12/15 → 4/5, so 28 4/5).
3. **Decimal Deep Space** — add a **decimal point** and keep dividing into the decimals (28.8).

There's also a **Work Lab**: type any dividend and divisor, pick an ending, and step through the whole worktable one line at a time, like a worked example you can replay.

## Why it matters

The point isn't the answer, it's the method — and partial quotients has no single path, which is the whole point. At each step the game asks the real question: "how many 15s can you pull out of 432?" (take **any** friendly chunk that doesn't overshoot — 20, 10, even 1), then "20 × 15 = ?", then "432 − 300 = ?", and finally "add your partials: 20 + 8 = ?". A wrong move doesn't just buzz: an overshoot is turned away with the reason ("15 × 30 = 450, and that's more than 432 — take a smaller chunk"), and a wrong product or difference fills in the correct value with a short why, so a stuck kid gets a worked step in context instead of a dead end. Because the student chooses the chunks, there's no one "right" sequence — exactly the number sense the method is built to grow. Difficulty scales within each mission, and the three sectors walk from whole-number remainders up through fractions and decimals, matching the Massachusetts grade 6 number-sense strand (6.NS.2, 6.NS.1, 6.NS.3). It's built directly from a teacher's worked example of 432 ÷ 15 shown three ways.

## How it works

- **Core loop:** 6 problems per mission. Each round you pick a chunk, multiply it by the divisor, subtract, and repeat until what's left is smaller than the divisor — then add your partials for the quotient. Finish a problem with no mistakes and your combo multiplier climbs (up to ×5).
- **The worktable:** the Big Seven box, rendered as a real tableau — divisor on the left, the dividend inside the box, each product subtracted going down with a rule line, each partial listed in the right-hand column, and the summed quotient at the bottom. The fraction sector adds a small fraction-reduction step; the decimal sector adds a decimal point and brings down zeros to keep going.
- **Open-ended grading:** a chunk is accepted whenever `divisor × chunk ≤ what's left`, so any valid path works. Overshoots are rejected (try a smaller chunk) rather than auto-corrected, because you can't subtract more than you have.
- **Input:** a big tap-friendly keypad plus full physical-keyboard support (type digits, Enter to submit). The cell you're filling is highlighted, and a "Hint" button shows the reason for the current move.
- **Work Lab:** the same board in demo mode. Enter any problem, choose remainder / fraction / decimal, and reveal it line by line — it plays a clean, friendly chunk path (e.g. 432 ÷ 15 → 20, then 8).
- **Rewards:** animated score, a star rating per mission by accuracy, total XP, and a warp-and-confetti celebration on a clear. Progress, best scores, and the mute setting are saved on the device.

## Technical notes

Single self-contained `index.html` — inline CSS and vanilla JavaScript, no build step, no external dependencies, no CDN fonts, no network calls. Works offline. Because partial quotients has no fixed sequence, the Big Seven board is built live, row by row, as the student picks chunks: a small state machine (`pick → multiply → subtract → … → sum → ending`) generates each prompt, expected value, and teaching reason from the current remainder, so there's no pre-baked step list to drift out of sync. The board is a two-column CSS grid (work on the left, partials on the right) with the box drawn from a top border over the dividend and a right border down the work column — the "7." The Work Lab shares the same board and a greedy friendly-chunk decomposition. Problems are generated so quotients are two non-zero digits (clean chunking), remainders are non-zero where an ending needs them, and the decimal sector only picks divisions that terminate within two places. A canvas starfield and canvas confetti add depth; WebAudio drives the blips and the warp sound (mute toggle persisted).

## Design notes

**Visual direction: high-energy aurora sci-fi.** A deep indigo space field lit by two large, slowly drifting aurora nebulae (magenta/violet and cyan/mint) over a parallax starfield, with a living cyan-to-violet-to-magenta gradient wordmark, glowing planet orbs with pulsing halos keyed per sector, a comet-trailed ship on the travel track, and a candy-bright "Enter" button. It is deliberately bold, colorful, and high-energy, but stays firmly modern: smooth gradients, blur, and glow, with no pixel fonts, scanlines, CRT, or 80s-arcade chrome. The worktable itself is set in steady tabular figures so the math stays legible against the color. Motion (aurora drift, gradient sheen, orb halos, score count-up, ship thrust, confetti, entrance stagger) is spring-eased and fully gated behind `prefers-reduced-motion`, which freezes the aurora and gradient animations. The app is mobile-first (100dvh, safe-area insets, excellent at 375px), keyboard accessible with visible focus, and uses 44px-plus touch targets throughout.

Built for a specific 6th-grade pilot who is learning to show the steps in long division.
