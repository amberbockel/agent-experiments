# Press On

**Built:** 2026-11-15
**Category:** games

**One-liner:** A pass-and-play push-your-luck card game with a live bust-odds meter that teaches probability while you play.

## What it does
Players take turns flipping cards from a shared deck. Each number card N has N copies (one 0), plus blue +2/+4/+6 cards and a gold ×2. Flip a number you already hold and you bust for the round; stay and you bank your points. Seven different numbers ends the round with a +15 bonus. First to 50, 100 or 150 wins. Two to six players, names fully editable, one shared device.

## Why it matters
Push-your-luck card games like Flip 7 (The Op Games, 2024) are still selling tens of thousands of copies a month and keep getting spin-offs in 2026, and they are a family-table staple. This version makes the hidden math visible: the odds meter shows how many cards left in the deck match what you hold, so kids in grades 5-7 practice fractions, percentages and expected-value thinking without a worksheet.

## How it works
- Deck: numbers 0-12 with n copies of n (79 cards) plus four modifier cards; discards reshuffle when the draw pile empties.
- Bust odds = copies of held numbers remaining in the draw pile / cards remaining, recomputed every flip.
- Round score = number total (doubled by ×2) + plus cards + 15 for seven unique numbers; busts score 0.
- Turn order rotates its starting player each round.

## Technical notes
Single self-contained HTML file, vanilla JS, no network, no external fonts (system Helvetica/Arial stack). Counters tick via requestAnimationFrame, cards flip in with spring easing, busts shake the stage, wins drop confetti. `prefers-reduced-motion` removes all of it. Mobile-first with 100dvh safe areas, 44px+ targets, visible focus, and `aria-live` for turn changes. Trend source: Flip 7 sales and 2026 editions (Flip 7 With A Vengeance, National Parks, Deluxe).

## Design notes
Direction: **high-contrast-type**. Giant tight-tracked numerals are the whole interface: the title, the round score, the cards and the odds percentage are all set at poster scale on a cool grey-white ground with ink, one ultramarine action color, and signal red reserved for danger. Recent builds were editorial, swiss, soft-gradient, dashboard and monochrome; this is the first loud, display-type-driven one in the series, chosen because a game about nerve should feel like it is shouting its numbers.
