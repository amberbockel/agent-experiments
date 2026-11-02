# Full Bloom

**Built:** 2026-11-02 · **Category:** games

**One-liner:** A pass-and-play fraction game: plant seeds, fill the pot to exactly one whole, and don't overflow.

## What it does
2–6 players (names are editable) take turns drawing fraction seeds (1/2, 1/3, 3/4, 1/5, 5/6, 1/10, 1/12 and more) into a pot. Bank any time to score the pot's percent; hit exactly 1 for 100 + a 50-point bloom bonus; go over and the pot wilts for 0. Choose 2, 3 or 5 rounds. A toggle swaps every label between fractions and percents.

## Why it matters
It's a family game that quietly practices grade 5–7 fraction addition with unlike denominators, fraction/percent equivalence, and probability ("29 of 32 seeds still fit"), all as a push-your-luck decision rather than a worksheet.

## How it works
Values are stored as integers in sixtieths, so sums are exact and there is no floating-point error. A 32-card bag is shuffled and reshuffled when it runs low. A live meter counts how many remaining seeds still fit under 1.

## Technical notes
Single file, vanilla JS and CSS, no network calls, works offline. Native `<dialog>` for results, `prefers-reduced-motion` honored, 44px+ targets, safe-area insets, `100dvh`.

## Design notes
Direction: **organic-nature**: sage mist backgrounds, deep moss ink, pollen and bloom accents, a serif display for numbers, rounded sans for UI, spring-eased seeds that drop into a glass pot, petal burst on a perfect whole. It differs from the last six builds (monochrome-type-led, retro, clay, riso, neo-brutalist) by being soft, light and botanical.

## Trend source
Aimed at the ongoing family and kid-friendly pass-and-play game slot (Flip 7-style push-your-luck). The YC and Product Hunt scan could not run: the session's network blocked ycombinator.com, so this is not tied to a specific launch.
