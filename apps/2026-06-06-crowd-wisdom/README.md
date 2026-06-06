# Crowd Wisdom

**Category:** Delightful (Family Games)  
**Built:** 2026-06-06  
**One-liner:** Guess numerical answers and see how close you are to the crowd — bet your confidence for bonus points in this family-friendly estimation game.

---

## What It Is

A **Wits & Wagers meets The Price Is Right** estimation game. Answer trivia questions with numerical answers (How many M&Ms fit in a jar? Average wedding cost? Miles from NYC to LA?), set your confidence level (1×–5× multiplier), and earn points based on how close your guess is to the correct answer.

After each round, see where you landed vs. the "crowd" (realistic pre-seeded estimates) on a visual distribution chart.

---

## Game Mechanics

1. **Read the question** — numerical trivia spanning pop culture, science, geography, everyday life
2. **Enter your guess** — any number (no multiple choice)
3. **Set confidence** — 1× (wild guess) to 5× (pretty sure) multiplier
4. **Lock it in** — see the correct answer, your accuracy, and points earned
5. **Visual feedback** — distribution chart shows where you landed vs. the crowd

### Scoring

- **Dead On** (<5% off) → 10 pts × confidence 🔥
- **Very Close** (<15% off) → 7 pts × confidence 🎯
- **Not Bad** (<30% off) → 4 pts × confidence 👍
- **Swing and a Miss** (<50% off) → 2 pts × confidence 🤔
- **Way Off** (>50% off) → 1 pt 😅

**Risk/reward:** High confidence = big points if right, embarrassing if wrong.

---

## Why It Works for Families

- ✅ **Low learning curve** — anyone can guess a number
- ✅ **Debate-friendly** — "I think it's 2,000!" "No way, it's at least 5,000!"
- ✅ **Confidence betting** adds strategic tension
- ✅ **No trivia intimidation** — being close is enough
- ✅ **Fast rounds** — 30 seconds per question
- ✅ **Replayable** — 20 questions, randomized order
- ✅ **Pass-and-play ready** — one phone, take turns

---

## Design Notes

**Visual direction:** Purple gradient (Wits & Wagers vibes), clean iOS base, confident data-viz aesthetic. Hero number display (tabular figures), smooth slider interaction, celebratory result screens.

**Typography:** SF Pro Display, 28px input, 34px answer reveal, generous whitespace

**Color palette:**
- Primary gradient: `#667eea` → `#764ba2` (purple)
- Accent: `#FF3B30` (red, "you" marker)
- Surfaces: white cards on gradient background
- Text: `#1C1C1E` / `#666` / `#999`

**Interaction:**
- Range slider with custom thumb (white + purple border)
- Visual fill bar for confidence level
- Distribution chart with crowd/you markers
- Smooth card transitions (slideUp animation)

**localStorage:** Persists total score across sessions

---

## Technical Stack

- **Single file:** `index.html` (~15KB)
- **No dependencies:** Vanilla JS, inline CSS
- **Mobile-first:** Touch-optimized, safe-area-inset support
- **Offline-ready:** No external resources

---

## Questions (Sample)

- How many M&M's fit in a 1-liter jar?
- Average cost of a wedding in the US?
- How many songs are on Spotify?
- Miles from NYC to LA?
- Number of bones in the human body?
- Speed of light (miles per second)?
- Population of Tokyo metro area?
- Average temperature of human body (°F)?

20 total questions spanning easy (bones in body), medium (Eiffel Tower height), and hard (number of time zones in Russia).

---

## Future Ideas

- Add categories (Science / Pop Culture / Geography / Everyday Life)
- Multiplayer mode with shared leaderboard
- "Challenge a friend" — compare guesses on the same question
- Daily question with global crowd stats
- Custom question builder

---

## Inspiration

- **Wits & Wagers** — estimation + betting mechanic
- **The Price Is Right** — guess the number, closest wins
- **Wavelength** — spectrum guessing, debate-driven
- Family game night energy — quick, social, accessible to all ages
