# Fortune Cookie Writer

**Category:** delightful  
**Date:** 2026-06-13  
**One-liner:** Write custom fortunes, crack them open with a satisfying tap — save your favorites and share wisdom (or silliness) with friends.

## The idea

Fortune cookies are delightful. Writing your own is even better. This app lets you:

1. Write a fortune (wisdom, jokes, predictions, whatever)
2. Tap to "bake" it into a cookie
3. Tap the cookie to crack it open with animation
4. Read the fortune on a slip of paper
5. Save favorites, write new ones

Perfect for:
- Writing fortunes for friends at dinner
- Making silly predictions
- Storing encouraging notes for yourself
- Party entertainment

## UX notes

- **Zero onboarding** — tap to write, tap to crack
- **Satisfying crack animation** — cookie splits, paper unfurls
- **localStorage persistence** — your fortunes stick around
- **Share-friendly** — copy to clipboard

## Visual direction

Fortune cookies have their own brand: warm tan/golden cookies, cream paper, red accents (Chinese restaurant vibes). This should NOT look like flat iOS — it should look like a fortune cookie.

- Cookie color: warm golden tan (#DEB887, #CD853F)
- Paper: cream/off-white with subtle texture
- Red accents for "lucky numbers" detail
- Playful serif for fortune text (Georgia fallback)
- Dark brown/maroon for text on paper
- Soft drop shadows on the cookie pieces

## Technical notes

- Single HTML file, inline CSS/JS
- Cookie drawn with CSS (rounded shapes, gradients for dimension)
- Crack animation: CSS transform + transition
- localStorage: `fortunes` array with {text, timestamp, favorite}
- Mobile-first, works on iPhone with notch
