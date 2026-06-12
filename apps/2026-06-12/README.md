# AI Hedge Detector

**Category:** trend  
**Date:** 2026-06-12  
**One-liner:** Paste any AI response and instantly highlight hedging language — spot where the model is uncertain, see confidence signals, and learn when to verify claims vs. trust the output.

## Problem

AI models hedge when they're uncertain. They use words like "might," "could," "possibly," "arguably," "tends to," "often," "generally," and "typically" to signal lower confidence. Most people read right past these signals and treat all AI output as equally reliable.

Learning to spot hedging language is a core AI literacy skill — it tells you when to double-check, when to ask for sources, and when the model is genuinely confident vs. guessing.

## Solution

A single-screen tool that:
1. Takes any pasted AI text
2. Highlights hedging language in real-time
3. Scores overall confidence (high/medium/low based on hedge density)
4. Shows a quick legend of common hedge patterns

**Features:**
- Real-time highlighting as you paste or type
- Color-coded by hedge type (epistemic vs. general uncertainty)
- Confidence score bar
- Expandable legend with examples
- Works offline, no API calls

## Design

Flat iOS default with a "code editor" vibe:
- Monospace font for pasted text (easier to spot patterns)
- Yellow highlights for hedges (⚠️ caution signal)
- Clean white background with subtle grid texture
- Confidence bar at top (green → yellow → red gradient)
- Collapsible "What to look for" legend at bottom

Mobile-first, but works great on desktop too.

## User flow

1. Open app → see placeholder text with a few hedges pre-highlighted (instant clarity)
2. Clear and paste your own AI response
3. Hedges light up automatically
4. Check the confidence score
5. Tap legend to learn more about what each pattern means

## Tech

- Single HTML file
- Vanilla JS for text analysis
- CSS grid + flexbox
- localStorage to save last paste (optional)
- ~20KB total
