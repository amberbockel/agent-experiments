# Dinner Decision Spinner

**Category:** Delightful  
**One-liner:** A playful spinning wheel to pick what's for dinner when the family can't decide — add options, tap to spin, get dramatic results with sound and flair.

## The problem

"What do you want for dinner?"  
"I don't know, what do *you* want?"  
(Repeat 10× until everyone is hangry.)

## The solution

A carnival-style spinning wheel that makes the decision *fun* instead of frustrating. Add your options (pizza, tacos, leftovers, cook at home), tap the big SPIN button, watch it whirl with sound and animation, land on the winner with confetti + fanfare.

## How it works

1. **Add options** — type in the text field, tap +, see your choices appear as wheel segments
2. **Tap SPIN** — the wheel spins with momentum and a satisfying tick-tick-tick sound
3. **Get the result** — it lands dramatically on one option with confetti burst and a fun message
4. **Remove options** — tap the × on any segment to delete it
5. **Persistent** — localStorage remembers your recent options

## Design notes

- **Carnival game vibe** — bright colors, bold sans-serif, thick black outlines on the wheel segments
- **Sound:** inline base64 data URI for the tick sound (no external files)
- **Animation:** CSS + JS for smooth spin with easing, realistic deceleration
- **Mobile-first:** big tap target for the spin button, works great on iPhone
- **Colors:** rotating rainbow palette for wheel segments (red, orange, yellow, green, blue, purple cycle)

## Target users

- Amber + family dinner planning
- Parents with indecisive kids
- Anyone stuck in decision paralysis over low-stakes choices

## Success metrics

- Gets used at least once a week for real dinner decisions
- Makes someone laugh
- Settles an argument peacefully

## Edge cases handled

- Minimum 2 options required to spin (shows helpful message if < 2)
- Max 12 options (wheel gets crowded beyond that)
- Empty input validation
- Duplicate options allowed (sometimes you really want pizza to have better odds)

## Not included (out of scope)

- Restaurant API integration
- Meal planning calendar
- Nutritional info
- Sharing results

This is a toy. A delightful, useful toy.
