# Runway

**Built:** 2026-10-29 · **Category:** business

**One-liner:** Pull the levers on cash, revenue growth and headcount, and watch a two-ink printed cash line show how many months of runway a small team has left.

## What it does
- Enter cash in the bank, monthly revenue, other costs and monthly growth.
- Add or remove engineers, designers, ops and AI agent seats (each cost is editable).
- Four one-tap scenarios: today's team, hire 3 engineers, swap in agent seats, go lean.
- A big counter ticks to the months of runway and names the month cash hits zero. If revenue outruns burn, it flips to "default alive" and celebrates.
- A 36-month chart with hover/touch scrubbing shows balance and monthly net.

## Why it matters
Small teams are deciding right now whether agent seats replace or add to hires. A runway number you can feel move makes that conversation concrete in seconds.

## How it works
Monthly loop: `cash(t+1) = cash(t) + revenue(t) − payroll − other`, with revenue compounding at the growth rate. Runway is the fractional month where cash first crosses zero.

## Technical notes
Single self-contained HTML file, inline CSS and vanilla JS, SVG chart, canvas confetti, no network, no fonts loaded. Pointer events for scrubbing; `prefers-reduced-motion` disables the line draw, counter tween, pops and confetti. Inputs are keyboard-accessible with 44px targets and visible focus.

## Design notes
**Visual direction: risograph-textured.** Two fluorescent inks (pink and blue) on cream stock with a grain overlay, deliberate misregistration on the chart fill and headline, multiply-blended overprint, hard offset shadows, and a slab serif display face. It is deliberately unlike the previous build (neo-brutalist party game) and avoids the brand kit.

## Trend source
Inspired by the ongoing "lean team plus AI agents" hiring conversation among startups. No live web scan was possible in this run, so no specific article is cited.
