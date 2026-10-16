# Family Jeopardy! 🎤

**Built:** 2026-04-30 · **Content rebuild:** 2026-10-16
**Live:** https://amberbockel.github.io/agent-experiments/apps/2026-04-30-jeopardy/
**Category:** Delightful · Flagship favorite

---

## One-liner
A mobile-first Jeopardy game built on the **Massachusetts Curriculum Frameworks for grades 5–7**, where **the dollar value equals the grade level** — so one board challenges a 5th, 6th, and 7th grader at the same table. Pass one phone, answer in the form of a question, score automatically. Perfect for dinner tables, road trips, and waiting rooms.

---

## The problem
You're at dinner waiting for food, or in the car, or stuck in a waiting room. Everyone pulls out their phones and scrolls separately. Generic trivia apps are full of ads and adult themes, and one-size trivia either bores the oldest kid or crushes the youngest. There's no quick, family-friendly trivia game that stretches each kid at their own level.

---

## The signature design rule: dollar ladder = grade level
Every category maps clue value to difficulty, so each kid always has a tile they can win and one that stretches them:

| Value | Grade | Difficulty |
|---|---|---|
| **$100** | Grade 5 | warm-up / recall |
| **$200** | Grade 5 | solid grade-5 |
| **$300** | Grade 6 | grade-6 core |
| **$400** | Grade 7 | grade-7 core |
| **$500** | Grade 7+ | stretch / cross-curricular |

This ladder is consistent in **every** category — including the fun ones.

---

## Curriculum alignment
Content is tied to the **Massachusetts Curriculum Frameworks** (ELA/Literacy, Mathematics, Science & Technology/Engineering, History & Social Science), the standards in force for MA districts as of 2026, and anchored to materials and assessments districts actually use now (2024–2026): *enVision Mathematics* / *Into Math*, *US History: America Through the Lens*, *World History: Voyages of Exploration*, and the style/rigor of released MCAS 2025–2026 grade-5 and grade-7 items. Clue content is kept contemporary so it never feels dated.

- **Mathematics** — gr5 fractions/decimals & volume · gr6 ratios/rates & negative numbers · gr7 proportional reasoning, integers, geometry (angles, circumference)
- **Science & Tech/Engineering (NGSS-aligned)** — matter & chemical change, life science (cells, ecosystems, decomposers), Earth & space (atmosphere, crust, plate tectonics), forces & energy (Newton's third law)
- **History & Social Science** — gr5 Early United States (colonial/early republic) · gr6–7 Ancient Civilizations & World Geography
- **ELA/Literacy** — vocabulary & roots/affixes, figurative language, grammar/parts of speech

---

## Players are open and editable
The game starts with generic **Player 1 / Player 2 / Player 3** — **no hard-coded names**. Rename, recolor, add, or remove any number of players so anyone at the table (family, friends, guests) can jump in. Names, colors, and scores persist to localStorage.

---

## How it works
1. Open the app — three generic players are ready; edit names/colors or add/remove players anytime
2. The board auto-generates **5 categories** drawn fresh from the library (rotation avoids recent repeats)
3. Tap a $100–$500 tile — difficulty rises with value (grade 5 → grade 7+)
4. Read the clue out loud; whoever answers **in the form of a question** gets the points
5. Tap **Reveal answer**, then tap who got it (or "got it wrong" for a deduction, or "Nobody got it" to skip)
6. Play all 25 tiles → game-over screen with the leaderboard; reset anytime

**Persists to localStorage:** player names + colors, cumulative scores, and recent category/clue history (so boards stay fresh between rounds).

---

## Category library (23 categories · 115 clues)

Each board randomly pulls 5 categories, so the library stays fresh across many sittings.

**Math**
- FRACTIONS & DECIMALS
- RATIOS & RATES
- INTEGERS & NEGATIVES
- GEOMETRY & MEASUREMENT

**Science & Technology/Engineering**
- MATTER & CHEMISTRY
- LIFE SCIENCE
- EARTH & SPACE SCIENCE
- FORCES & ENERGY

**History & Social Science**
- EARLY UNITED STATES
- ANCIENT CIVILIZATIONS
- WORLD GEOGRAPHY

**English Language Arts**
- VOCABULARY
- FIGURATIVE LANGUAGE
- GRAMMAR

**Massachusetts & New England**
- MASS. & NEW ENGLAND

**Crowd-pleasers (same grade ladder)**
- OUTER SPACE
- ANIMAL KINGDOM
- VIDEO GAMES
- SPORTS
- WORLD MYTHOLOGY
- MUSIC NOTES
- WORDPLAY & RIDDLES
- TECH & CODING

All clues are family-safe, inclusive, and fact-checked. No politics, violence, or adult themes.

---

## Why this matters
- **Connection over scrolling** — one phone, everyone in, actual eye contact
- **Differentiated by design** — the dollar ladder means every kid gets a winnable tile and a stretch tile on the same board
- **Educational without being homework** — reinforces exactly what MA grades 5–7 are learning now
- **Quick games** — one tile ≈ a minute, a full board in restaurant downtime
- **Works offline** — once loaded, no wifi needed
- **Looks the part** — real Jeopardy blue-and-gold aesthetic, big tap targets, thumb-friendly

---

## Technical notes
- Pure HTML/CSS/JS, no framework, no build step, no network
- Single-file `index.html` + external `categories.js` (`window.JEOPARDY_CATEGORIES`)
- Schema per category: `{ id, name, grade: "5-7", clues: [{ value, clue, answer }] }` — exactly 5 clues at values 100/200/300/400/500; the running game adds `used` at runtime
- Mobile-first: `100dvh`, `env(safe-area-inset-*)`, tuned for 375px
- Board rotation with recent-history limits (`HISTORY_LIMIT_CATEGORIES`, `HISTORY_LIMIT_CLUES`) to avoid repeats
- Real Jeopardy color palette (#060CE9 blue, #FFCC00 gold); all state in localStorage, no backend, no accounts

---

## Next steps (if the family loves it)
- [ ] **Daily Double tile** — random "wager" tile that doubles the value
- [ ] **Final Jeopardy round** — write down answer + wager
- [ ] **Timer mode** — 30-second countdown per clue
- [ ] **More MA-aligned categories** — rotate in fresh packs each season
- [ ] **Scoring history** — long-term leaderboard across all games
