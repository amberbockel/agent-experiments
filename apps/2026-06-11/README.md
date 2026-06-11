# Gratitude Jar

**Category:** delightful  
**One-liner:** Add gratitude notes to a virtual jar, shake your phone to pull one out and remember what matters — a warm pocket ritual for hard days.

## What it does

A digital gratitude jar that feels tactile and warm:
- Tap the jar to add a new gratitude note
- Shake your phone (or tap "shake") to pull a random note
- Notes collect over time in localStorage
- Visual feedback: jar fills with folded paper notes
- Warm, soft aesthetic with gentle animations

## Why it matters

Gratitude practices work, but notebooks get lost and apps feel clinical. This feels like a real object you keep on your desk — something you can shake when you need it.

Perfect for:
- End-of-day reflection rituals
- Picking yourself up on rough days
- Building a personal archive of good moments
- Sharing with family (pass the phone, everyone adds one)

## Design notes

Skeuomorphic but tasteful — the jar should feel like glass, the notes like folded paper. Warm peach/cream palette. Generous whitespace around the jar. Smooth fade-in animations when notes appear.

Mobile-first with safe-area handling for notch devices.

## Technical

- Single HTML file, inline CSS + JS
- localStorage for persistence
- DeviceMotion API for shake detection (with fallback button)
- ~20KB total
- No external dependencies
