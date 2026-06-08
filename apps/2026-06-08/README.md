# Sponsor Pitch Calculator

**Category:** Business  
**Built:** 2026-06-08  
**One-liner:** Calculate what to charge for sponsored Substack posts based on subscriber count, engagement rate, niche positioning, and content format — know your worth before the pitch.

## What it does

Helps Substack creators price sponsored content confidently by combining:
- Subscriber count
- Open/engagement rate
- Niche multiplier (tech/AI/leadership = premium, general = standard)
- Content format (full feature vs mention)
- Industry benchmarks

Returns three tiers (conservative, market rate, premium) so you can pitch smart.

## Why it exists

Amber's Substack is growing. Sponsors will ask. Having numbers ready = power in the negotiation.

## How it works

1. Enter your subscriber count
2. Set your typical open rate (%)
3. Pick your niche positioning
4. Choose content format
5. Get instant pricing tiers with reasoning

Saves last settings to localStorage for quick recalculation.

## Technical notes

- Single `index.html`, ~18KB
- Inline CSS + vanilla JS
- localStorage persistence
- Mobile-first with safe-area-inset
- Dark mode via system preference
- Pricing formula based on industry CPM benchmarks ($15–75 range) adjusted by engagement and niche

## Visual direction

Confident fintech vibe — clean, modern, professional. Not playful, not decorative. Numbers are the hero.
