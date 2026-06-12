# Bomb Squad

**Category:** Delightful (Games)  
**Built:** 2026-06-12  
**One-liner:** Push-your-luck card game — draw for points or cash out before the bomb explodes. Defuse bombs, bank points, beat your high score.

---

## What It Is

A **fast-paced risk management game** inspired by Exploding Kittens and Blackjack. Draw cards to earn points, but hit a bomb without a defuse and you lose everything.

**Core tension:** Keep drawing for more points (risky) vs cash out with what you have (safe).

---

## How to Play

### Setup
- **Deck:** 20 cards (15 safe, 3 defuse, 2 bombs)
- **Starting defuses:** 3
- **Goal:** Bank as many points as possible

### Turn
1. **Draw card** or **cash out**
2. **Safe card?** Add points (Diamond +5, Crown +7, etc.)
3. **Defuse card?** Gain +1 defuse, bomb goes back in deck
4. **Bomb card?**
   - **Have defuse:** Use it, bomb returns to deck
   - **No defuse:** Game over, lose all current points

### Banking Points
- **Cash out:** Bank current points, reset round
- **Banked points are safe** — won't lose them if you bomb later
- **New round:** Fresh deck, 3 defuses, start again

### Win Condition
- Survive the entire deck → auto-bank points
- **Or** strategically cash out before hitting bombs
- **High score:** Best total across all rounds

---

## Strategy

### Risk Management
- **Early game:** Draw aggressively (2 bombs in 20 cards = 10% chance)
- **Mid game:** Watch deck count (fewer cards = higher bomb density)
- **Late game:** Cash out early (bombs are still in there!)

### Defuse Management
- **Don't waste defuses:** Each one is precious
- **3 defuses = 3 lives:** You can survive 3 bombs per round
- **Found a defuse card?** Now you can push harder

### Optimal Strategy
- **Bank at 15-20 points** (safe, repeatable)
- **Risk it to 30+** if you have 2+ defuses
- **Never draw with 0 defuses** unless deck is nearly empty

---

## Card Types

### Safe Cards (15 total)
- 💎 **Diamond:** +5 points
- ⭐ **Star:** +3 points
- 🎯 **Target:** +4 points
- 🏆 **Trophy:** +6 points
- 👑 **Crown:** +7 points

### Special Cards
- ⚡ **Defuse:** +1 defuse (3 in deck)
- 💣 **Bomb:** Explode unless you have defuse (2 in deck)

---

## Scoring

**Points earned per round:**
- Safe cards: 3-7 points each
- Average deck: ~70 points if you survive all cards

**High score tracking:**
- Best total across all rounds (banked + survived)
- Saved in localStorage

---

## Why It's Addictive

✅ **Fast rounds** — 1-2 minutes per game  
✅ **Push-your-luck tension** — one more card or cash out?  
✅ **Simple rules** — learn in 30 seconds  
✅ **Strategic depth** — defuse management, probability tracking  
✅ **Replayable** — random shuffle every round  

---

## Design Notes

**Aesthetic:** Dark with neon accents, bomb/tech theme

**Color palette:**
- Background: `#1C1C1E` → `#3A3A3C` (dark gradient)
- Safe cards: `#30D158` (green)
- Bombs: `#FF3B30` (red)
- Defuse: `#FFD60A` (yellow)
- Draw button: `#0A84FF` (blue)

**Animations:**
- Card flip: 3D rotate + scale
- Pop-in: Emoji bounces on reveal
- Value fade: Points slide in after emoji
- Boom: Shake + red flash

**Typography:**
- Card values: 48px bold
- Emoji: 100px
- Stats: 32px tabular nums

---

## Technical Stack

- **Single file:** `index.html` (~13KB)
- **No dependencies:** Vanilla JS
- **Mobile-optimized:** Large tap targets, touch-friendly
- **Offline-ready:** No API calls, localStorage only

---

## Inspiration

- **Exploding Kittens** — defuse mechanic, bomb tension
- **Blackjack** — push-your-luck card drawing
- **Russian Roulette** — risk escalation
- **Slay the Spire** — deck probability awareness

---

## Why Perfect for Family Game Night

✅ **No reading required** — emoji + numbers only  
✅ **Instant play** — no tutorial needed  
✅ **Pass-and-play friendly** — one phone, take turns  
✅ **Tension builds naturally** — everyone leans in on bomb draws  
✅ **Satisfying cash-outs** — "I'm out!" moments  

---

## Future Ideas

- **Multiplayer mode** — take turns, first to 100 wins
- **Special cards:** Double points, peek next card, shuffle deck
- **Difficulty modes:** More bombs, fewer defuses
- **Sound effects:** Bomb tick, explosion, cash register
- **Leaderboard:** Compare high scores across sessions

---

## User Quotes (Inspiration)

> "It's like Blackjack but with bombs. One more card... ONE MORE..."  
> — Playtest feedback

> "The defuse mechanic is chef's kiss. You feel invincible with 3, terrified with 0."  
> — Game design analysis

This is the kind of game you play "just one more time" for 20 minutes. 💣
