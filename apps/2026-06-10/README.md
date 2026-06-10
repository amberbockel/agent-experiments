# Model Personality Slider

**One-liner:** Adjust temperature, top-p, and frequency penalty with live visual feedback — see how LLM parameters transform outputs from robotic to creative to chaotic, and learn what those sliders actually do.

**Category:** trend

**Date:** 2026-06-10

## What it does

An interactive educational tool for understanding LLM sampling parameters. You adjust three key parameters:

- **Temperature** (0.0–2.0): Controls randomness and creativity
- **Top-p** (0.0–1.0): Nucleus sampling threshold
- **Frequency Penalty** (-2.0–2.0): Discourages repetition

As you move the sliders, you see:
1. Real-time visual representation of how the parameter affects token selection
2. Example outputs showing the same prompt at different settings
3. Plain-English explanations of what each parameter does
4. Personality labels ("Robotic," "Balanced," "Creative," "Chaotic") based on the combination

## Why it matters

Most people building with LLMs have never touched these parameters. They leave them at defaults or copy someone else's config without understanding the tradeoffs. This tool makes the abstract concrete — you can *see* and *feel* what temperature does, not just read that it "controls randomness."

## Target users

- Developers learning to prompt LLMs
- Product people spec'ing AI features
- Amber's Substack readers curious about "how the sausage is made"
- Anyone who's wondered why ChatGPT sometimes feels robotic and sometimes goes off the rails

## Design

Clean, minimal interface with three horizontal sliders stacked vertically. Each slider shows:
- Parameter name and current value
- Min/max labels
- Visual indicator (different style for each parameter)

Below the sliders:
- Personality badge (changes based on current combo)
- Example output box showing the same prompt rendered with current settings
- Explanation text that updates as you slide

Mobile-first, iOS-inspired aesthetic with smooth animations on slider changes.

## Technical notes

- Pure vanilla JS, no external libraries
- localStorage to save last-used settings
- Smooth CSS transitions on all visual updates
- Mobile-optimized touch targets (44px min)
- ~20KB total

## Example outputs

**Temperature 0.0:**
"The capital of France is Paris."

**Temperature 0.7:**
"The capital of France is Paris, a city renowned for its art, architecture, and cuisine."

**Temperature 1.5:**
"The capital of France is Paris — that luminous nexus of revolution, romance, and reinvention that has captivated hearts for centuries!"

**Temperature 2.0:**
"France's capital? Paris! Croissants, Eiffel Tower, oui oui! *chef's kiss* 🥐✨"
