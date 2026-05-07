# Design System — Daily Outfit Planner

## Brand Concept
**Vogue x Apple Health** — Editorial sophistication meets functional daily ritual.

---

## Spacing Scale (8pt grid)

```
--space-1: 4px   (internal component spacing)
--space-2: 8px   (tight grouping)
--space-3: 12px  (compact spacing)
--space-4: 16px  (base spacing)
--space-5: 24px  (section spacing)
--space-6: 32px  (larger sections)
--space-8: 48px  (major sections)
--space-10: 64px (page sections)
```

**Rule:** Internal spacing ≤ External spacing

---

## Typography

**Typeface:** Geist (modern, clean, legible)

**Scale (1.200 Minor Third):**
```
--text-xs: 12px   (labels, metadata)
--text-sm: 14px   (body, secondary)
--text-base: 16px (primary body)
--text-lg: 19px   (emphasized body)
--text-xl: 23px   (subheadings)
--text-2xl: 28px  (headings)
--text-3xl: 33px  (page titles)
--text-4xl: 40px  (hero text)
```

**Line height:**
- Body (base-lg): 1.5
- Headings (xl+): 1.2

**Letter spacing:**
- Body: 0
- Headings: -0.02em
- ALL CAPS: +0.08em

**Weights:**
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

---

## Color System

### Neutrals (Off-white to charcoal)
```
--gray-50: #FAFAFA   (canvas)
--gray-100: #F5F5F5  (subtle bg)
--gray-200: #E5E5E5  (borders)
--gray-300: #D4D4D4  (disabled)
--gray-400: #A3A3A3  (placeholder)
--gray-500: #737373  (muted text)
--gray-600: #525252  (secondary text)
--gray-700: #404040  (body text)
--gray-800: #262626  (headings)
--gray-900: #171717  (primary text)
```

### Bright Winter Palette (Accent colors)
```
--winter-ice: #E0F7FA     (cool, light accent)
--winter-blue: #0096FF    (electric blue, primary)
--winter-magenta: #FF00FF (bold accent)
--winter-pink: #FFB3D9    (soft accent)
--winter-emerald: #50C878 (success/affirmative)
```

### Semantic Colors
```
--success-bg: rgba(80, 200, 120, 0.1)
--success-border: rgba(80, 200, 120, 0.3)
--success-text: #0C5E30

--error-bg: rgba(239, 68, 68, 0.1)
--error-border: rgba(239, 68, 68, 0.3)
--error-text: #991B1B
```

### 60-30-10 Application
- **60%** — Gray-50 (canvas)
- **30%** — Gray-100 to Gray-200 (cards, surfaces)
- **10%** — Winter-blue + accents (CTAs, interactive)

---

## Elevation & Shadows

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 
             0 2px 4px -2px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 
             0 4px 6px -4px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 
             0 8px 10px -6px rgba(0, 0, 0, 0.1);
```

**Usage:**
- Cards at rest: shadow-sm
- Cards on hover: shadow-md
- Modals, dropdowns: shadow-lg
- Hero elements: shadow-xl

---

## Border Radius

**Style: Medium (modern, friendly)**
```
--radius-sm: 8px   (small components, tags)
--radius-md: 12px  (buttons, inputs, small cards)
--radius-lg: 16px  (cards, panels)
--radius-xl: 24px  (large hero cards)
--radius-full: 9999px (pills, avatars)
```

**Rule:** Nested elements have smaller radius than parent

---

## Interactive States

### Buttons
```css
/* Primary Button */
default: bg-gray-900, text-white
hover: bg-gray-800, shadow-md, scale(1.01)
active: bg-gray-900, scale(0.99)
disabled: opacity-40, cursor-not-allowed

/* Secondary Button */
default: bg-gray-100, text-gray-900
hover: bg-gray-200
```

### Color Swatches (Key Component)
```css
default: shadow-sm, border-2 border-gray-200
hover: shadow-md, scale(1.05), border-gray-300
active: shadow-lg, scale(1.08)
```

---

## Component Specs

### Button Heights (matches touch targets)
```
--btn-sm: 36px
--btn-md: 44px (default)
--btn-lg: 52px
```

### Card Padding
```
--card-padding-sm: 16px
--card-padding-md: 24px (default)
--card-padding-lg: 32px
```

**Rule:** Gap between cards > padding inside cards

---

## Animation Timing

```css
--duration-fast: 150ms
--duration-base: 200ms
--duration-slow: 300ms

--ease-out: cubic-bezier(0.33, 1, 0.68, 1)  (entering)
--ease-in: cubic-bezier(0.32, 0, 0.67, 0)   (exiting)
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1) (repositioning)
```

**Animate ONLY:** `transform`, `opacity`

---

## Responsive Breakpoints

```
--mobile: 640px
--tablet: 768px
--desktop: 1024px
--wide: 1280px
```

**Mobile-first design:**
- Single column
- Full-width buttons
- Bottom navigation
- No hover states

---

## Key Principles

1. **Color is the hero** — Large, bold color blocks, not tiny swatches
2. **One action at a time** — Clear focus, no cognitive overload
3. **Effortless interaction** — Swipe, tap, done
4. **Breathing room** — Generous whitespace creates calm
5. **Functional beauty** — Every detail serves the experience

---

This system is locked. Every component built from this foundation.
