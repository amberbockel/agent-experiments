# Level One

**Category:** Delightful (Games)  
**Built:** 2026-06-06  
**One-liner:** Zero-onboarding physics puzzle — redirect flowing particles into targets by placing blockers. Instant play, no menus, pure mechanics.

---

## What It Is

A **physics-based flow puzzle** that starts playing the instant the page loads. No splash screen, no tutorial, no login — just immediate gameplay.

**Core mechanic:** Particles spawn from source nodes and fall with gravity. Tap empty cells to place blocker nodes that bounce particles toward target zones. Fill all targets to 100% to win.

---

## The Problem It Solves

**"The Hyper-Casual Tutorial Wall"** — Most casual games waste your micro-break window with splash screens, unskippable tutorials, cookie consent, and asset loading. By the time you're actually playing, the 60-second mental break is over.

**Level One's solution:**
- ✅ **Instant play** — game starts on page load, zero onboarding
- ✅ **No menus** — no settings, no accounts, no friction
- ✅ **Pure mechanics** — tap to place/remove blockers, watch particles flow
- ✅ **Predictable physics** — simple gravity + bounce math, no randomness

---

## How to Play

1. **Watch** — particles spawn from blue source nodes and fall
2. **Tap** — place white blocker nodes to redirect particles
3. **Guide** — bounce particles into red target zones
4. **Fill** — get all targets to 100% to complete the level
5. **Tap blockers again** to remove them
6. **Clear button** — reset all blockers and particles

### Rules

- Limited blockers per level (shown in HUD)
- Can't place blockers on sources or targets
- Particles fade after time or when captured
- Progress shown as % in top-right corner

---

## Game Mechanics

### Physics

- **Gravity:** 0.3 units/frame downward acceleration
- **Bounce:** 70% velocity retention on wall/blocker collision
- **Particle lifespan:** ~333 frames before fade
- **Spawn rate:** 1 particle per source every 10 frames

### Level Progression

**Level 1:** 1 source → 1 target (3 blockers)  
**Level 2:** 2 sources → 1 target (4 blockers)  
**Level 3:** 1 source → 2 targets (5 blockers)  
**Level 4:** 2 sources → 2 targets (6 blockers)  
**Level 5:** 2 corner sources → 2 center targets (7 blockers)

Loops after level 5 with same patterns.

---

## Design Philosophy

### Zero-Onboarding Principles

1. **No main menu** — game is already playing when you arrive
2. **Visual language** — blue = source, red = target, white = blocker
3. **Discoverable mechanics** — tap anywhere to learn interaction
4. **Instant feedback** — particles respond immediately to blocker placement
5. **No text instructions** — the HUD shows score/level, nothing else

### Why This Works for Micro-Breaks

- **Immediate engagement** — no loading time mental tax
- **Low cognitive load** — one interaction (tap), predictable physics
- **Session flexibility** — play one level (30 sec) or five (3 min)
- **No punishment** — unlimited retries, clear button for quick reset
- **Portable state** — entire game is stateless matrix math

---

## Technical Architecture

**Single file:** `index.html` (~12KB)  
**No dependencies:** Vanilla JS, canvas API  
**State model:** 2D grid matrix (8×8 cells)  
**Rendering:** requestAnimationFrame loop (~60fps)  
**Particle system:** Array of {x, y, vx, vy, life} objects  
**Collision:** Distance-based (circle-to-circle)

### Why It's Agent-Friendly

- **Predictable physics** — simple math, easy to verify
- **Matrix state** — blockers/sources/targets are just {row, col} objects
- **Canvas isolation** — animation refinements don't affect game logic
- **No external assets** — entire game is code + math

An AI agent can safely tweak particle colors, glow effects, or haptic feedback without risking the core scoring/level logic.

---

## Visual Design

**Aesthetic:** Dark sci-fi minimal — think Geometry Wars meets The Powder Toy

**Color palette:**
- Background: `#0A0E27` (dark navy)
- Sources: `#64C8FF` (cyan blue)
- Targets: `#FF6464` → `#00FFB3` (red when empty, green when full)
- Blockers: `rgba(255,255,255,0.8)` (white with glow)
- Particles: `#64C8FF` → `#00FFB3` (blue when free, green when captured)
- HUD: `#00FFB3` with glow

**Effects:**
- Particle glow (shadowBlur)
- Blocker glow
- Progress arc on targets (partial fill)
- Win screen glow border

---

## Future Ideas

- **Hazards** — red zones that destroy particles
- **Portals** — teleport particles across the grid
- **Timed mode** — complete level before particles run out
- **Multiplier chains** — bonus for consecutive captures
- **Daily challenge** — same level for everyone, global leaderboard
- **Custom levels** — URL-encoded level sharing

---

## Inspiration

- **The Incredible Machine** — physics puzzle sandbox
- **Pipe Dream** — flow redirection mechanics
- **Geometry Wars** — particle effects + neon aesthetic
- **Crossy Road** — instant play, no onboarding
- **The Powder Toy** — emergent physics simulation

---

## Why "Level One"?

The name is intentionally meta:
1. **It's always level one** — each playthrough is fresh
2. **First principles** — stripped to core mechanics
3. **Entry point** — no barrier to start

It's the game equivalent of a blank canvas. Just physics, logic, and flow.
