# Category Sprint

**One-liner:** Name as many things as you can in 60 seconds — fast word game with rotating categories, perfect for solo play or passing the phone at dinner.

**Category:** delightful

**Built:** 2026-06-09

## What it does

You get a random category (e.g., "Things that are blue," "Pizza toppings," "Cities in Europe"). Type as many valid answers as you can before time runs out. No repeats. Fast, focused, replayable.

## Why it exists

Word games are great but most require spelling precision or obscure vocabulary. This one just needs quick recall and creativity — anyone can play, from kids to grandparents. Great as a solo challenge or a pass-the-phone party game.

## Design choices

- **Flat iOS default** — clean, readable, fast. No theming needed since the content is generic.
- **Big timer** — you always know how much time you have left
- **Instant validation** — no server, just checks for length and duplicates
- **Category variety** — 40+ categories across food, colors, places, things, animals, media
- **localStorage** — tracks your personal bests per category

## Technical notes

- Single `index.html`, ~18KB
- No external dependencies
- Mobile-first, safe-area-inset aware
- 60-second timer with visual countdown
- Simple duplicate detection (case-insensitive)
- Saves high scores per category to localStorage

## Next version ideas

- Add difficulty levels (30s / 60s / 90s)
- Multiplayer mode (take turns, compare scores)
- Category packs (themed sets)
- Share your score as an image
