# Fortune Cookie Generator

**Category:** Delightful  
**Date:** 2026-06-02

## One-liner
Tap to crack open a fortune cookie and get a random fortune with lucky numbers — playful, warm, and endlessly replayable.

## What it does
A simple, delightful toy that simulates cracking open fortune cookies. Each tap generates a new fortune with lucky numbers. Tracks how many cookies you've cracked. Pure delight, no purpose beyond a smile.

## Who it's for
Anyone who needs a moment of delight. Amber's family. Substack readers looking for a quick escape. Anyone who misses opening fortune cookies after takeout.

## Design notes
- Warm palette: cream background, golden amber accents, soft red for the cookie
- Cookie illustrated with CSS (curved pill shape, subtle texture)
- Smooth crack animation with two halves splitting apart
- Fortune appears on a paper slip that slides up
- Lucky numbers below in monospace
- Mobile-first, generous tap target
- System fonts (no need for anything fancy)
- Counts cookies cracked (persisted in localStorage)

## Technical
- Single `index.html`, ~18KB
- Inline CSS + JS
- localStorage for cookie count
- 100+ fortunes hardcoded
- Mobile-safe (notch, safe-area-inset)
- Light + dark mode via prefers-color-scheme
