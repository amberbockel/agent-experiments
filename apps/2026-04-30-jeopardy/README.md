# Family Jeopardy! 🎤

**Built:** 2026-04-30 (bonus drop)
**Live:** https://amberbockel.github.io/agent-experiments/apps/2026-04-30-jeopardy/
**Category:** Delightful

---

## One-liner
A mobile-first Jeopardy game with 8 family-friendly categories, designed for restaurants, road trips, and waiting rooms — pass one phone, answer in the form of a question, score automatically.

---

## The problem
You're at dinner waiting for food, or in the car, or stuck in a waiting room. Everyone pulls out their phones and scrolls separately. Generic trivia apps are full of ads and adult themes. There's no quick, family-friendly trivia game for the three of you.

---

## The solution
**Family Jeopardy!** — picks up where the PRD from yesterday left off. One phone, three players (Amber / William / Zev — pre-loaded), 8 categories of middle-school-appropriate trivia. Tap a dollar value, read the clue, the kid (or the dad) answers in the form of a question, you tap who got it right, scores update.

---

## How it works
1. Open the app — Amber, William, and Zev are already set up as players (edit names/colors anytime)
2. Pick a category (8 to choose from: Space, Movies, Animals, Science, World, History, Music, Food)
3. Tap a $100–$500 tile
4. Read the clue out loud
5. Whoever answers (in the form of a question!) gets the points
6. Tap **Reveal answer** to see if they were right
7. Tap their name to award points (or "Nobody got it" to skip, or "got it wrong" for a deduction)
8. Round ends when all 5 clues are played → game-over screen with leaderboard

**Persists to localStorage:**
- Player names + colors
- Cumulative scores across rounds
- Which clues you've already played per category

Reset anytime from the game-over screen.

---

## Categories included (40 clues total)

| Category | Sample clue |
|---|---|
| 🚀 **Space Exploration** | "This planet, fourth from the sun, is known as the Red Planet" |
| 🎬 **Movies & Shows** | "In Frozen, this snowman dreams of summer and warm hugs" |
| 🦒 **Animal Kingdom** | "This is the largest mammal on Earth" |
| 🔬 **Science** | "This force pulls objects toward the center of the Earth" |
| 🌍 **World Geography** | "This European country is shaped like a boot" |
| 📜 **History** | "This U.S. president signed the Emancipation Proclamation" |
| 🎸 **Music** | "This British band sang 'Hey Jude' and 'Let It Be'" |
| 🍕 **Food & Cooking** | "This Italian dish features a flat round bread topped with sauce and cheese" |

All clues middle-school appropriate. No politics, no violence, no adult themes.

---

## Why this matters
- **Connection over scrolling** — one phone, three players, actual eye contact
- **Educational without being homework** — Zev gets reinforcement on stuff he's learning
- **Quick games** — 5 clues per round = 5–10 min, perfect for restaurant downtime
- **Works offline** — once loaded, no wifi needed
- **Looks the part** — real Jeopardy blue-and-gold aesthetic, big tap targets, thumb-friendly

---

## Try it tonight
1. Open https://amberbockel.github.io/agent-experiments/apps/2026-04-30-jeopardy/ on your phone
2. (Optional) Add to home screen for app-like feel
3. Tap **Animal Kingdom** for an easy first round
4. Tap $100, read it out loud, see who shouts out the answer first
5. Award points, repeat

---

## Next steps (if the family loves it)
- [ ] **More categories** — Disney, Hamilton, Marvel, holiday packs
- [ ] **Daily Double tile** — random "wager" tile that doubles the value
- [ ] **Final Jeopardy round** — write down answer + wager
- [ ] **Timer mode** — 30-second countdown per clue
- [ ] **Custom packs** — Ada generates packs on request ("Make me a Star Wars pack")
- [ ] **Scoring history** — long-term leaderboard across all games
- [ ] **Productize** — sell themed packs at $0.99 each, or $4.99/mo subscription

---

## Technical notes
- Pure HTML/CSS/JS, no framework, no build step
- ~22KB total, loads instantly
- Mobile-first design with safe-area-inset for iPhone notch
- Real Jeopardy color palette (#060CE9 blue, #FFCC00 gold)
- 3D button effects with box-shadow translateY trick
- All state in localStorage — no backend, no accounts

---

## Questions for Amber
1. Did Zev get any of the $500 ones? (Curious which categories are too hard / too easy)
2. Want me to generate a **Hamilton pack** or a **Disney pack** as bonus drops this weekend?
3. Daily Double / Final Jeopardy: nice-to-haves or must-haves?
