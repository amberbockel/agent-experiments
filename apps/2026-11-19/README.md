# Pip's Allowance

**Built:** 2026-11-19 · **Category:** games

**One-liner:** A pass-and-play game where you approve or decline what an errand agent wants to buy, doing the discount and multipack math before the card does.

## What it does
Pip is an errand agent shopping for a school or family event (science fair, bake sale, camping trip) with your allowance. Ten requests arrive one at a time: five are on Pip's list, five are Pip's own ideas. Swipe or use the arrow keys to approve or decline. Prices are written as "3 × $4.25" or "25% off, regular $40", so you work out the true cost. Approve something the card can't cover and it is declined with a penalty. Everyone plays the same deck; players are editable (1 to 6, no hard-coded names). Optional 12-second timer per request.

## Why it matters
Autonomous agents now hold payment rights, and the real skill is setting and checking limits. The game turns that into a family-friendly drill in percent, unit price and budgeting (grade 5–7 math), with the agent as the character.

## How it works
- Seeded generator builds a deck: 5 needs + 5 wants, three price forms (flat, pack, percent off), budget = needs total + ~30% slack, so every need is affordable but not every want.
- Scoring: need bought +100, want bought +40, want declined +20, need declined −60, over-limit approval −100, streak multiplier up to 1.5×, $5 points per leftover dollar.
- Feedback after each choice reveals the true cost.

## Technical notes
Single file, vanilla JS/CSS, offline, no network or storage. Pointer-event swipe with spring settle, rAF counters, keyboard (arrows or A/D), 44px+ targets, `prefers-reduced-motion` and dark mode honored.

## Design notes
Direction: **soft-gradient-depth**. Mint-to-apricot light fields, frosted glass cards with colored soft shadows, rounded heavy sans (Nunito / system rounded), jade and coral for approve/decline. It differs from the last six builds (monochrome type, organic, minimal dark, high-contrast type, editorial, Swiss) by being bright, tactile and rounded.

## Trend source
Product Hunt weekly digests for early November 2026 describe agents moving "from answers to work, permissions, and payments" (e.g. Floot Payments): https://www.shareuhack.com/en/posts/product-hunt-weekly-2026-11-05
