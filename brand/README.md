# amberbockel brand kit

A vanilla-CSS distillation of the [amberbockel-ui](https://amberbockel.github.io/ui/) design system, for the single-file apps in this repo. Flat, minimal, delightful — clean glassmorphism and precision typography. **No build step, no framework, self-hosted fonts (offline-safe).**

## Use it in an app

```html
<!-- in <head>, path is relative to apps/YYYY-MM-DD/ -->
<link rel="stylesheet" href="../../brand/amberbockel.css">
```

Then write semantic markup and reach for the classes:

```html
<div class="ab-container">
  <span class="ab-eyebrow">Agent Experiments</span>
  <h1>A headline in Prata</h1>
  <p>Body copy in DM Sans.</p>
  <div class="ab-card">
    <button class="ab-btn ab-btn--primary">Primary</button>
    <button class="ab-btn ab-btn--glass">Glass</button>
  </div>
</div>
```

## What's in it

- **Tokens** — `--ab-*` custom properties for color, type scale, 8pt spacing, radii, motion.
- **Type** — `Prata` (display serif, 400 only — never synth-bold) + `DM Sans` (body, variable 300–800) + system mono.
- **Accent** — amberbockel periwinkle `#b5a4ff` (deepens to `#6e5cd6` in light mode for contrast).
- **Components** — `.ab-btn` (`--primary` / `--secondary` / `--ghost` / `--glass`, `--lg`, `--block`), `.ab-card` / `.ab-glass`, `.ab-input` / `.ab-textarea` / `.ab-select` + `.ab-label`, `.ab-tag`, `.ab-eyebrow`, `.ab-hr`, `.ab-container`.
- **A11y baked in** — visible focus rings, 44px touch targets, `prefers-reduced-motion`.

## Dark / light

Dark is the default. Add `data-theme="light"` on `<html>` to switch. Optional toggle (persists per viewer):

```js
const KEY = 'ab-theme';
const root = document.documentElement;
root.dataset.theme = localStorage.getItem(KEY) || 'dark';
function toggleTheme() {
  root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
  try { localStorage.setItem(KEY, root.dataset.theme); } catch (e) {}
}
```

## Rules of thumb (the polish bar)

1. Prata for display headings only; DM Sans everywhere else.
2. One accent. Let the periwinkle earn attention — don't flood the page with it.
3. Glass surfaces over hard borders; no heavy drop-shadows or glows.
4. 8pt spacing rhythm; generous whitespace.
5. Mobile-first (`100dvh`, `env(safe-area-inset-*)`, works at 375px) and keyboard-accessible.
