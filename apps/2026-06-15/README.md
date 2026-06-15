# Music Box

**Date:** 2026-06-15  
**Category:** delightful  
**One-liner:** Wind up a virtual music box and watch it play — tap and hold to wind, release to hear the melody slow down naturally. A pocket toy that's just pleasant.

## What it is

A nostalgic virtual music box. Tap and hold to wind it up, release to let it play. The melody slows down naturally as the spring unwinds, just like a real music box.

## Why it exists

Sometimes you just want something pleasant and tactile — no score, no timer, no goals. This is a pocket toy that rewards patience and feels good to interact with.

## How it works

1. **Wind it up** — Tap and hold the winding key. Watch it rotate, hear the clicking ratchet sound.
2. **Release** — The music box plays a gentle melody. The tempo slows down as the spring unwinds.
3. **Visual feedback** — See the key rotate while playing, watch a wind indicator deplete.
4. **Multiple melodies** — Tap the melody name to cycle through different tunes (Twinkle Twinkle, Für Elise, Swan Lake, Brahms Lullaby).

## Design notes

- **Nostalgic, tactile, warm** — Not flat iOS default; this should feel like an antique object.
- **Soft wood grain texture** (CSS gradient), brass key and mechanism
- **Gentle colors** — warm browns, aged brass gold, soft cream background
- **Smooth animations** — CSS transitions for key rotation, wind-down is eased
- **Audio** — Web Audio API synthesizes simple melodies with tempo control

## Technical approach

- Single HTML file, inline CSS + JS
- Web Audio API for melody playback (simple sine wave tones)
- CSS animations for key rotation
- Touch-friendly (long-press to wind)
- localStorage to save which melody is selected
- ~20KB total
