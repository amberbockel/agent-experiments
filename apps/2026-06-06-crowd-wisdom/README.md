# Crowd Wisdom

**Category:** Delightful (Family Games)  
**Built:** 2026-06-06  
**One-liner:** Fast-paced number guessing — tap the closer answer before you run out of lives. Streaks give bonus points!

---

## What It Is

A **quick-tap number guessing game** inspired by The Price Is Right and Higher or Lower. See a question and two possible answers — tap the one that's closer to the truth. Get 3 wrong and it's game over!

No typing, no waiting — just fast decisions and instant feedback.

---

## Game Mechanics

1. **Read the question** — numerical trivia (How many M&Ms in a jar? Miles from NYC to LA?)
2. **Tap the closer answer** — Option A or Option B
3. **Instant feedback** — correct choice turns green, wrong turns red
4. **Keep your streak alive** — get 3 wrong and it's game over
5. **Bonus points for streaks** — every 3 correct in a row adds +5 pts per answer

### Scoring

- **Correct answer:** 10 points
- **Streak bonus:** Every 3-question streak adds +5 pts per answer (15 pts at 3 streak, 20 pts at 6, etc.)
- **Lives:** Start with 3, lose one per wrong answer
- **Game over:** When you run out of lives

**Strategy:** Build streaks for massive point multipliers!

---

## Why It Works for Families

- ✅ **Instant play** — no typing, just tap
- ✅ **Fast rounds** — 5-10 seconds per question
- ✅ **Debate-friendly** — "I think it's the bigger one!" "No way!"
- ✅ **Low pressure** — you get 3 lives, so mistakes are okay
- ✅ **Addictive streak mechanic** — "One more round to beat my high score!"
- ✅ **Pass-and-play ready** — one phone, take turns
- ✅ **No trivia expertise needed** — it's about instincts, not knowledge

---

## Design Notes

**Visual direction:** Purple gradient background, clean iOS aesthetic, game show energy. Large tap targets, instant visual feedback (green = correct, red = wrong).

**Typography:** SF Pro Display, 36px choice values (tabular figures), 22px questions

**Color palette:**
- Primary gradient: `#667eea` → `#764ba2` (purple)
- Correct: `#10B981` → `#059669` (green)
- Wrong: `#EF4444` → `#DC2626` (red)
- Surfaces: white cards on gradient background
- Text: `#1C1C1E` / `#666` / `#999`

**Animations:**
- Correct: pulse scale animation + green gradient
- Wrong: shake animation + red gradient
- Answer reveal: slide up from bottom
- Choice press: scale down on tap

**No localStorage** — each game is fresh (high score would be a nice future add)

---

## Technical Stack

- **Single file:** `index.html` (~15KB)
- **No dependencies:** Vanilla JS, inline CSS
- **Mobile-first:** Touch-optimized, safe-area-inset support
- **Offline-ready:** No external resources

---

## Questions (Sample)

- How many M&M's fit in a 1-liter jar?
- Average wedding cost in the US?
- Miles from NYC to LA?
- Bones in the human body?
- Speed of light (miles/second)?
- Population of Tokyo?
- Human body temperature (°F)?
- Keys on a standard piano?

25 questions total, spanning easy to hard. Wrong answers are generated dynamically (30-100% off from correct) so every playthrough feels fresh.

---

## Future Ideas

- **High score persistence** (localStorage)
- **Timed mode** — 10 seconds per question
- **Category selection** (Science / Pop Culture / Geography)
- **Multiplayer** — pass-and-play with alternating turns
- **Daily challenge** — same questions for everyone, global leaderboard
- **Power-ups** — skip a question, 50/50, extra life

---

## Inspiration

- **The Price Is Right** — which is closer?
- **Higher or Lower** — binary choice, fast decisions
- **Trivia Crack** — lives system, streak bonuses
- **Family Feud** — accessible trivia, social gameplay
- Arcade energy — fast, replayable, addictive
