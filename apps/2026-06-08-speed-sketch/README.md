# Speed Sketch Battle

**Category:** Delightful (Games)  
**Built:** 2026-06-08  
**One-liner:** Instant-play drawing game — 30-second sketches, pass the phone, vote for the best. Zero onboarding, pure party game energy.

---

## What It Is

A **zero-friction party game** that starts playing the instant you tap "Start Drawing." No account, no tutorial, no settings — just draw, pass, and laugh.

**Core mechanic:** Random prompt appears → 30-second timer starts → draw on canvas → pass phone to next player → vote or skip → next round.

---

## The Problem It Solves

**"The 30-Second Onboarding Wall"** — Most party game apps waste your group's energy with:
- Account creation prompts
- Tutorial screens explaining obvious mechanics
- Settings menus you'll never use
- Loading animations for assets

By the time you're actually playing, **the vibe is dead.**

**Speed Sketch Battle's solution:**
- ✅ **Instant play** — tap button, timer starts, you're drawing
- ✅ **No tutorial** — the prompt tells you what to do
- ✅ **No accounts** — localStorage for score history only
- ✅ **Pass-and-play** — one phone, unlimited players

---

## How to Play

### Solo Mode (Practice)
1. **Tap "Start Drawing"**
2. **Draw the prompt** (you get a random prompt like "Draw a cat")
3. **30 seconds** — timer counts down, draw fast
4. **See your sketch** — admire (or laugh at) your work
5. **Next round** — tap to get a new prompt

### Party Mode (Real Game)
1. **Player 1 taps "Start Drawing"**
2. **Draw in secret** (don't show the screen!)
3. **Pass phone when time's up**
4. **Everyone votes** for the best sketch (honor system or debate)
5. **Winner keeps the phone** for next round

### Variants
- **Speed round:** 15 seconds instead of 30 (edit timer in code)
- **Theme night:** Only draw animals, food, or abstract concepts
- **Blind drawing:** Draw without looking at the screen
- **Team relay:** Each player adds one element to the same canvas

---

## Features

### Drawing Tools
- **8 colors:** Black, red, orange, yellow, green, blue, purple, pink
- **Smooth brush:** Touch/mouse drawing with anti-aliased lines
- **Clear button:** Start over if you mess up
- **White canvas:** Clean slate every round

### Timer
- **30-second countdown** (large, readable)
- **Warning at 10 seconds** (red pulse animation)
- **Auto-end** — time's up = drawing locked

### Score Tracking (Optional)
- **Rounds played:** Total sketches completed
- **High score:** Track your best (you decide what "best" means!)
- **localStorage:** Persists across sessions

---

## Prompts (40 Total)

- **Easy:** Cat, dog, house, tree, sun, flower, car, bird
- **Medium:** Pizza, rocket, guitar, eyeglasses, coffee cup, rainbow
- **Tricky:** Lighthouse, mushroom, headphones, dinosaur, cactus
- **Abstract:** Ghost, crown, balloon, cloud, star

Randomized every round. No repeats until you've cycled through all 40.

---

## Design Notes

**Aesthetic:** Warm gradient (coral to orange), playful, high-energy

**Color palette:**
- Background: `#FF6B6B` → `#FF8E53` (coral gradient)
- Canvas: White
- Text: White on gradient, dark on cards
- Timer warning: `#FF3B30` (red pulse)

**Typography:**
- Prompt: 28px bold
- Timer: 64px bold, tabular nums
- Buttons: 17px bold, uppercase

**Interaction:**
- Touch drawing (mobile-first)
- Mouse support (desktop)
- Color picker (tap circles)
- Clear button (instant reset)

---

## Technical Stack

- **Single file:** `index.html` (~12KB)
- **No dependencies:** Vanilla JS, Canvas API
- **Mobile-optimized:** Touch events, safe-area-inset
- **Offline-ready:** No external assets, localStorage only

---

## Why It Works for Parties

✅ **Zero setup time** — no explaining rules, no account creation  
✅ **Fast rounds** — 30 seconds keeps energy high  
✅ **Funny outcomes** — bad drawings = more laughter  
✅ **Scales infinitely** — works for 2 or 20 people  
✅ **No connectivity needed** — fully offline  

---

## Future Ideas

- **Multiplayer canvas** — everyone draws on the same canvas simultaneously (chaos mode)
- **AI judge** — upload sketch, get score from vision model
- **Custom prompts** — add your own prompt categories
- **Photo export** — save sketches to camera roll
- **Leaderboard** — track wins across sessions
- **Difficulty modes** — 15/30/60 second variants

---

## Inspiration

- **Pictionary** — drawing game classic
- **Telestrations** — pass-and-draw telephone
- **Jackbox Party Pack** — zero-friction party games
- **Skribbl.io** — online drawing + guessing

Speed Sketch Battle is Pictionary distilled to its pure essence: **draw fast, laugh, pass the phone.**

---

## User Quotes (Inspiration)

> "Every party game app has a 30-second onboarding flow. By the time we're playing, the vibe is dead."  
> — Product Hunt comment, 2026-06-01

> "I just want a drawing game I can start instantly at dinner."  
> — r/SideProject, 2026-05-28

This is that game. 🎨
