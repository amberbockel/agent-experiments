# Bull Run

**Category:** Delightful (Games)  
**Built:** 2026-06-08  
**One-liner:** Number placement puzzle — play 10 cards across 4 rows, avoid taking penalty bulls. Fast, strategic, endlessly replayable.

---

## What It Is

A **solo number puzzle** inspired by the classic card game *Take 5* (6 Nimmt!). You have 10 numbered cards and must place them strategically across 4 rows without triggering penalty bulls.

**Core mechanic:** Tap card → tap row → card must be higher than row's last card → row full (5 cards)? You take the penalty! 🐂

---

## How to Play

### Setup
- **4 rows:** Each starts with 1 random seed card
- **Your hand:** 10 random cards (numbered 1-104)
- **Goal:** Place all 10 cards with minimum penalty

### Rules
1. **Select a card** from your hand (tap to select)
2. **Tap a row** to place it
3. **Card must be higher** than the row's last card
4. **Row full (5 cards)?** 6th card triggers penalty:
   - You take all bulls from the row (sum of bull values)
   - Row clears, your card becomes new seed
5. **Game ends** when all 10 cards are played

### Bull Values
- **Most cards:** 1 bull 🐂
- **Cards ending in 5:** 2 bulls 🐂🐂
- **Cards ending in 0:** 3 bulls 🐂🐂🐂
- **Multiples of 11:** 5 bulls 🐂🐂🐂🐂🐂
- **Card 55:** 7 bulls 🐂🐂🐂🐂🐂🐂🐂

---

## Strategy Tips

### Good Plays
- **Low cards early:** Use small numbers when rows are low
- **Space it out:** Avoid clustering cards that will trigger penalties
- **Track row counts:** Remember which rows are close to full (4 cards)
- **High cards last:** Save big numbers for when you have fewer options

### Common Mistakes
- **Playing high cards too early:** You'll have no safe plays later
- **Ignoring row counts:** Accidentally triggering penalties on valuable rows
- **Not planning ahead:** Each card limits future options

---

## Scoring

**Perfect game:** 0 penalty bulls 🏆  
**Great:** <20 bulls 🎉  
**Good:** <40 bulls 😊  
**Try again:** 40+ bulls 😅

Your **best score** is saved locally — aim to beat it!

---

## Why It Works

✅ **Pure logic puzzle** — no luck after initial deal  
✅ **Fast rounds** — 2-3 minutes per game  
✅ **Endlessly replayable** — random card deals = new puzzle  
✅ **Easy to learn** — one rule (higher number)  
✅ **Hard to master** — optimal play requires planning  
✅ **Solo-friendly** — no multiplayer coordination  

---

## Design Notes

**Aesthetic:** Earthy gradient (tan to brown), rustic bull theme

**Color palette:**
- Background: `#D4A574` → `#8B4513` (tan to brown)
- Cards: White with subtle shadows
- Selected card: Brown border + lift animation
- Drop zones: Highlighted when valid

**Typography:**
- Card numbers: 24px bold, tabular nums
- Bull emojis: 16px
- Stats: 24px bold

**Interaction:**
- **Tap card** → lifts up (selected state)
- **Tap row** → places card (if valid)
- **Invalid play** → alert with explanation
- **Penalty trigger** → alert showing bulls taken

---

## Technical Stack

- **Single file:** `index.html` (~12KB)
- **No dependencies:** Vanilla JS
- **Mobile-optimized:** Large tap targets, clear visual states
- **Offline-ready:** Fully local, localStorage for best score

---

## Original Game: Take 5 (6 Nimmt!)

**Designer:** Wolfgang Kramer (1994)  
**Original mechanic:** 2-10 players play cards simultaneously, lowest card resolves first, avoid being 6th card in any row  
**Adaptation:** Converted to solo puzzle by letting player control order and see all cards upfront

**Why this works as solo:**
- Removes timing/bluffing (multiplayer elements)
- Turns simultaneous play into strategic sequencing
- Pure logic puzzle emerges

---

## Comparison to Original

| Aspect | Original (Take 5) | Bull Run (Solo) |
|--------|-------------------|-----------------|
| Players | 2-10 (simultaneous) | Solo |
| Cards | Hidden in hand | Visible upfront |
| Tension | Timing + bluffing | Optimal sequencing |
| Length | 10 rounds | 10 moves |
| Replayability | Social dynamics | Random deals |

Bull Run extracts the **core number puzzle** from Take 5's multiplayer chaos.

---

## Future Ideas

- **Undo button** — take back last move (with penalty?)
- **Hint system** — show optimal next move for beginners
- **Daily challenge** — same deal for all players, leaderboard
- **Hard mode** — 12 cards instead of 10
- **Multiplayer pass-and-play** — take turns placing cards
- **Custom deals** — input specific card sets for puzzle sharing

---

## Why Perfect for Experiments

✅ **2-hour build** — simple rules, clear UI  
✅ **Mobile-first** — tap-based, no complex gestures  
✅ **Replayable** — random deals keep it fresh  
✅ **No server needed** — fully offline  
✅ **Universal appeal** — anyone who likes number puzzles  

---

## User Quotes (Inspiration)

> "I love Take 5 but can never find 4+ people to play. A solo version would be perfect."  
> — BoardGameGeek forum, 2025

> "The best mobile games are the ones I can play in 2 minutes while waiting."  
> — r/iosgaming, 2026

Bull Run is that game. 🐂
