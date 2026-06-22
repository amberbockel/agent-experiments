#!/usr/bin/env python3
"""
Generate the "Today" app icons: a quiet typographic mark.

A cream serif lowercase 't' set on a terracotta field — the same two colors
the journal uses. No emoji, no gradients, no AI-art texture. Just one letter.

Outputs (PNG, full-bleed so they also work as Android maskable icons):
  icons/icon-192.png
  icons/icon-512.png
  icons/icon-1024.png   (source / store size)
  icons/apple-touch-icon.png (180)
  icons/favicon-32.png
"""
from PIL import Image, ImageDraw, ImageFont
import os

TERRACOTTA = (184, 80, 58)    # #b8503a
CREAM      = (239, 231, 216)  # #efe7d8
FONT_PATH  = "/mnt/skills/examples/canvas-design/canvas-fonts/CrimsonPro-Bold.ttf"

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT  = os.path.join(HERE, "icons")
os.makedirs(OUT, exist_ok=True)

SS = 4  # supersample for smooth edges


def render(size, glyph="t", radius_ratio=0.0):
    """Render a single centered serif glyph, cream on terracotta."""
    S = size * SS
    img = Image.new("RGB", (S, S), TERRACOTTA)
    d = ImageDraw.Draw(img)

    # Optional rounded corners (used only for the non-maskable favicon/apple variants
    # where the OS does not apply its own mask). 0 = full bleed square.
    if radius_ratio > 0:
        mask = Image.new("L", (S, S), 0)
        ImageDraw.Draw(mask).rounded_rectangle(
            [0, 0, S - 1, S - 1], radius=int(S * radius_ratio), fill=255)
        bg = Image.new("RGB", (S, S), TERRACOTTA)
        canvas = Image.new("RGB", (S, S), (0, 0, 0))
        canvas.paste(bg, (0, 0), mask)
        img = canvas
        d = ImageDraw.Draw(img)

    # Size the glyph to sit comfortably inside the maskable safe zone (~66%).
    font_px = int(S * 0.62)
    font = ImageFont.truetype(FONT_PATH, font_px)
    # Optical centering using the glyph's actual ink bounds.
    l, t, r, b = d.textbbox((0, 0), glyph, font=font)
    gw, gh = r - l, b - t
    x = (S - gw) / 2 - l
    y = (S - gh) / 2 - t
    d.text((x, y), glyph, font=font, fill=CREAM)

    return img.resize((size, size), Image.LANCZOS)


def save(img, name):
    p = os.path.join(OUT, name)
    img.save(p, "PNG")
    print("wrote", os.path.relpath(p, HERE))


render(1024).save(os.path.join(OUT, "icon-1024.png"))
print("wrote icons/icon-1024.png")
save(render(512), "icon-512.png")
save(render(192), "icon-192.png")
# Apple + favicon look better with their own rounding since iOS/desktop don't mask.
save(render(180, radius_ratio=0.22), "apple-touch-icon.png")
save(render(32, radius_ratio=0.22), "favicon-32.png")
print("done")
