# Fudge Factor

**Built:** 2026-10-30
**Category:** productivity
**One-liner:** Guess how long a task takes, time it, and learn your personal planning multiplier.

## What it does
Add a task with a gut-feel estimate, start a timer, and log the real duration when you finish. A dial shows your running multiplier (for example ×1.62) and every queued task shows a predicted range ("you said 30 min, likely 35 to 60 min"). A bar chart compares guess vs. reality. "Load a sample week" seeds data so the first run isn't empty.

## Why it matters
The planning fallacy is well documented, and AI schedulers and predictive time-tracking tools are the current Product Hunt wave (time tracking and predictive AI are both flagged categories). This version keeps it honest and tiny: no account, no cloud, one number that gets better the more you use it.

## How it works
Each finished task contributes ln(actual/estimate). The multiplier is the geometric mean of the last 12 ratios, shrunk toward 1.0 with two phantom perfect guesses so a single outlier can't swing it. The prediction range uses the standard deviation of those log-ratios. State persists in localStorage.

## Technical notes
Single HTML file, vanilla JS, no network. The dial counts up with an eased tween, confetti fires when you beat your estimate, native `<dialog>` for logging time, aria-live regions, 48px targets, safe-area insets, `prefers-reduced-motion` disables all animation.

## Design notes
**Direction: tactile-3d-clay.** Chunky sculpted shapes built from stacked inset highlights and shadows, coloured drop shadows, pressable buttons that physically sink, and a rounded type stack at heavy weight. It differs from the previous builds (risograph, neo-brutalist, and flat-ish dashboards) by being soft, dimensional and warm instead of flat, hard-edged or printed.
