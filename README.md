# Daily Outfit Planner

A web app that generates perfectly coordinated outfit suggestions using seasonal color palette mixing.

## Features

- **Seasonal Color Palettes**: Curated palettes for Spring, Summer, Fall, and Winter
- **5-Component Outfits**: Top, Bottom, Outerwear, Shoes, and Bag
- **Color Harmony Algorithm**: Uses monochromatic, complementary, and neutral harmony rules
- **Tone Preferences**: Filter by warm, cool, neutral, or any tone
- **Instant Generation**: Get 3 unique outfit combinations per request
- **Style Notes**: Each outfit includes styling tips

## Tech Stack

- **Next.js 15** with App Router
- **TypeScript**
- **Tailwind CSS**
- **Static Data**: JSON-based seasonal palettes (no external API dependencies)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
daily-outfit-planner/
├── app/
│   ├── page.tsx          # Main UI
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── lib/
│   └── outfitGenerator.ts # Core logic & algorithms
├── data/
│   └── palettes.json     # Seasonal color data
└── README.md
```

## How It Works

1. **Select Season**: Choose from Spring, Summer, Fall, or Winter
2. **Choose Tone**: Optionally filter by warm, cool, neutral, or any
3. **Generate**: Algorithm creates 3 unique outfit combinations using:
   - Color harmony rules (monochromatic, complementary, neutral)
   - Season-appropriate palettes
   - Variety constraints (no duplicate combinations)
4. **View Results**: Each outfit displays:
   - Color swatches for all 5 components
   - Color category tags (warm/cool/neutral)
   - Styling note for cohesion tips

## Color Palettes

### Spring
Fresh, vibrant colors inspired by blooming flowers and new growth.

### Summer
Bold, bright colors reflecting sun, sea, and warmth.

### Fall
Rich, warm, earthy tones inspired by autumn leaves and harvest.

### Winter
Deep, cool, sophisticated colors with icy accents.

## MVP Scope

✅ Seasonal color palette mixer  
✅ 5-component outfit generation (top, bottom, outerwear, shoes, bag)  
✅ 3 outfit suggestions per generation  
✅ Tone preference filtering  
✅ Style notes  
⬜ Save/share functionality (future)  
⬜ User accounts (future)  
⬜ Custom wardrobe input (future)

## Target Audience

Ages 12-40 who want to stay fashionable and create cohesive, on-trend outfits using seasonal color theory.

---

Built with 🦄 by Ada
