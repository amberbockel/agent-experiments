# Palette Studio

**Category:** delightful  
**Built:** 2026-06-06

## One-liner
Mix paint colors like a real artist — slide red, yellow, blue, white, and black to create custom colors, see instant RGB/hex values, and save your favorite palettes.

## What it does
A digital paint mixer that simulates subtractive color mixing. Adjust five paint wells (red, yellow, blue, white, black) with tactile sliders, watch the color blend in real-time, and build a saved palette of your creations.

Perfect for:
- **Artists** planning color palettes before mixing physical paint
- **Designers** experimenting with earthy, hand-mixed aesthetics
- **Anyone** curious about how paint colors actually combine

## Design notes
Visual language deliberately breaks from flat iOS — this is a painter's studio, not a productivity app.

- Warm, earthy neutral palette (canvas beige, raw umber text)
- Rich color gradients on sliders that feel like paint tubes
- Generous rounded corners and tactile shadows
- Paint swatch cards with formula notation (e.g., "R50 + Y30 + W20")
- Dark mode = dimmed studio lighting

Sliders use a subtractive mixing approximation (weighted RGB blend), not true CMYK physics, but close enough for practical palette design.

## Technical
- Single HTML file, ~18KB
- localStorage for saved palettes (max 20)
- Mobile-optimized with 48px touch targets
- Safe-area-inset support for iPhone notch
- Light/dark mode auto-switching

## Usage
1. Drag sliders to mix paint colors
2. Watch the mixed color preview update live
3. Tap "Save Color" to add to your palette
4. Tap any saved color to reload its formula
5. Long-press delete (×) to remove saved colors

Formula notation:
- R = Red
- Y = Yellow  
- B = Blue
- W = White
- K = Black (from CMYK "key")

Example: "R60 + Y40 + W20" = 60% red, 40% yellow, 20% white

## Future ideas
- Export palette as PNG swatch grid
- Import from photo (extract dominant colors)
- Preset palettes (earth tones, ocean, sunset)
- Pantone/hex code lookup
- Print-friendly color reference cards
