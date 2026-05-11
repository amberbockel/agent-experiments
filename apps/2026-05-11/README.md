# Wholesale Calculator

**Category:** business  
**Date:** 2026-05-11  
**One-liner:** Price your creative work for wholesale and gallery channels — calculate what to charge retailers and galleries so you still make money after their cut.

## Problem

When artists move from direct-to-consumer sales to wholesale (selling to galleries, gift shops, or retailers), the pricing math gets confusing fast. A piece that sells for $200 direct might only net you $80 after a gallery's 50% commission and production costs. Many creators undercharge and lose money, or overcharge and price themselves out.

## Solution

A mobile-first calculator that takes your direct retail price, production cost, and desired margin, then shows you:
- What price to set for wholesale buyers (typically 50% off retail)
- What price to set for gallery consignment (retail stays the same, but you get 40-60%)
- Your actual profit in each scenario
- Break-even analysis

Tailored for Amber Miro Creative: original paintings, prints, POD products, and licensed art heading into galleries or retail partnerships.

## User flow

1. Enter your direct retail price (what you'd charge on your own site)
2. Enter your production cost (materials, printing, shipping to buyer)
3. Pick commission % for galleries (default 40-50%) or wholesale discount (default 50%)
4. See three scenarios side-by-side:
   - **Direct:** Your current model
   - **Wholesale:** Selling to retailers at 50% off
   - **Gallery:** Consignment at X% commission
5. Save common products (original paintings, 11×14 print, t-shirt, etc.) to localStorage

## Visual direction

Clean, confident, finance-adjacent. Not playful — this is business math. Think: spreadsheet clarity meets iOS polish.

- Flat iOS base with a slightly elevated feel
- Tabular figures for all numbers
- Green for profit, amber for caution, red for loss
- Three-column comparison view (mobile: swipeable cards)
- Dark mode friendly
- Safe-area-inset for iPhone notch

## Constraints

- Single `index.html`, ~20KB
- No build step, no external CDN
- Mobile-first (iPhone)
- localStorage for saved products
- Works offline

## Success

Amber can quickly price new products for wholesale partnerships without second-guessing the math. Knows exactly what margin she's giving up and whether a deal makes sense.
