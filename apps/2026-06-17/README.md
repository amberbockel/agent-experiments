# Breathing Buddy

**Built:** 2026-06-17  
**Category:** delightful  
**One-liner:** A gentle animated companion that breathes with you — tap to start, follow the rhythm, feel calmer. Perfect for desk stress or bedtime wind-down.

## What it does

Breathing Buddy is a calming pocket companion. Tap the screen to start a breathing cycle, then follow along as your buddy (a soft, glowing blob) expands and contracts in a gentle 4-7-8 rhythm (breathe in for 4, hold for 7, breathe out for 8). The colors shift through calming gradients as you breathe.

## Why it matters

Stress is real. Breathing exercises work, but they're boring. A breathing buddy makes the practice delightful — you're not just counting, you're keeping a little creature company. Good for:
- Work stress (Amber at her desk)
- Family bedtime routines (kids love it)
- Quick resets between meetings

## How it works

- **One tap to start:** No setup, no choices, just tap anywhere
- **Follow the blob:** It breathes, you breathe
- **Ambient colors:** Soft gradient shifts (blues → purples → greens) during each cycle
- **Counter:** Tracks how many breaths you've taken this session
- **Tap again to pause or reset**

## Technical notes

- Single `index.html`, ~18KB
- Canvas-based animation (smooth 60fps)
- localStorage saves breath count across sessions
- Mobile-first, works in portrait/landscape
- iOS safe-area handling for notch

## Design notes

Not flat iOS — this is meant to be calming and ambient. Think:
- Deep gradient backgrounds (blues, purples, soft pinks)
- Glowing, soft-edged blob (no hard lines)
- Gentle pulsing animation (easing curves matter)
- Minimal UI (just the blob and a small counter)
- Dark by default (but adjusts to system preference)

Visual inspiration: meditation apps like Calm, but simpler and more playful.
