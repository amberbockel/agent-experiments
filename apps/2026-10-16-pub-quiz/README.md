# Pub Quiz Night 🍺

**Built:** 2026-10-16
**Category:** games
**Live:** https://amberbockel.github.io/agent-experiments/apps/2026-10-16-pub-quiz/

---

## One-liner
A proper pub-quiz night in your pocket — one phone runs the show, your teams battle across themed rounds, and the quizmaster taps to reveal answers and award the points.

## What it does
Pass-and-play trivia built for a table of friends. The host sets up any number of teams (generic, editable, recolorable — no hardcoded names), then runs the quiz round by round. Each question shows four options (plus a couple of straight "shout it out" questions in the Wildcard round); the host taps **Reveal Answer**, the correct option lights up green, and then taps every team that got it right to award a point. A running scoreboard appears between rounds and a champions screen with a confetti flourish closes out the night.

Seven rounds, 50 questions total:
- 🧠 General Knowledge (8)
- 🎸 Music (7)
- ⚽ Sport (7)
- 🗺️ History & Geography (7)
- 🔬 Science & Nature (7)
- 🎬 Film & TV (7)
- 🎲 Wildcard (7, including two straight question→reveal items)

## Why it matters
Generic trivia apps are full of ads, logins, and one-size difficulty. A real pub quiz is social: one host, paper answers (or shouting), themed rounds, and the drama of the scoreboard. This captures that ritual in a self-contained web page you can pull up anywhere — a dinner table, a road trip, an actual pub — with zero setup and nothing to install.

## How it works
- **Flow:** set up teams → round intro → question (optionally let a team eyeball a multiple-choice pick) → reveal → tap the teams that got it right (+1 each) → scoreboard between rounds → final results with the winning team.
- **Host-driven scoring** mirrors a real quizmaster: teams write/shout answers, the host adjudicates and awards. Multiple teams can be awarded the same question, exactly like a paper round.
- **Teams** start as "Team 1" / "Team 2" and are fully add/rename/remove/recolor — the app never hardcodes specific people's names.
- **Persistence:** an in-progress game is saved to `localStorage` (wrapped in try/catch) so a mid-quiz refresh offers a Resume banner.

## Technical notes
- Single self-contained `index.html`: inline CSS + vanilla JS, no build step, no dependencies, no network calls, no API keys. Works fully offline.
- Mobile-first: `100dvh` + `env(safe-area-inset-*)`, tuned to feel right at 375px, max-width capped for larger screens.
- Content is hand-checked general-knowledge at pub-night level — a mix of easy and hard, clean and inclusive, accurate and unambiguous.
- State machine over five screens (setup → round intro → question → scoreboard → results) driven by a single `state` object; user-entered team names are HTML-escaped on render.

## Design notes
- **Warm pub / neon quiz-night aesthetic:** dim chalkboard-green question cards with a dashed chalk border, amber neon title glow, a wood-and-ink palette, and a serif display face for that slightly old-world local-pub feel.
- Chunky tactile buttons with a pressed-in shadow, team color swatches throughout, a progress bar per round, crown markers for the leaders, and a confetti burst for the champions.
