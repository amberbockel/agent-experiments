#!/usr/bin/env python3
"""
Second asset pass, for study 02 (hinged motion, backdrops, torn scraps).

Reads the cutouts produced by prepare_assets.py plus the raw photos, writes:
  hero-body.png / hero-jaw.png   the sunglasses girl split at the jaw so she can sing
  barrel.png                     the heather barrel with its heart cut through
  bg-*.jpg                       full backdrops cut from landscape photographs
  scrap-NN.png                   torn paper scraps from the print borders
and extends manifest.json.

Usage: python3 -I prepare_study02.py <raw_dir> <assets_dir>
"""
import json
import os
import sys

import numpy as np
from PIL import Image, ImageDraw, ImageFile, ImageOps
from scipy import ndimage

ImageFile.LOAD_TRUNCATED_IMAGES = True
RAW, OUT = sys.argv[1], sys.argv[2]
man = json.load(open(os.path.join(OUT, "manifest.json")))
rng = np.random.default_rng(11)
PAPER = (250, 246, 238)


def raw(fid):
    path = next(p for p in os.listdir(RAW) if p.startswith(fid))
    im = Image.open(os.path.join(RAW, path)).convert("RGB")
    return ImageOps.exif_transpose(im)


def shadow_from(mask, h):
    s = ndimage.gaussian_filter(mask.astype(np.float32), sigma=h * 0.012)
    s = s / (s.max() + 1e-6)
    return Image.fromarray((s * 255).astype(np.uint8), "L")


def save(name, rgba, kind, extra=None, shadow=True):
    rgba.save(os.path.join(OUT, f"{name}.png"), optimize=True)
    entry = {"kind": kind, "w": rgba.width, "h": rgba.height}
    if shadow:
        a = np.array(rgba)[:, :, 3] > 8
        shadow_from(a, rgba.height).save(os.path.join(OUT, f"{name}_shadow.png"), optimize=True)
    if extra:
        entry.update(extra)
    man[name] = entry
    print(f"  {name:16s} {rgba.width}x{rgba.height} {extra or ''}")


# ---- 1. the hero, split at the jaw ------------------------------------------
hero = Image.open(os.path.join(OUT, "girl-sunglasses.png")).convert("RGBA")
W, H = hero.size
# jaw polygon in pixel coords of the cutout (433x1028): under the mouth, ear to ear, down to the chin
jaw_poly = [(166, 202), (190, 198), (210, 199), (230, 198), (252, 203), (254, 226), (240, 244), (212, 254), (184, 246), (166, 228)]
jaw_mask = Image.new("L", (W, H), 0)
ImageDraw.Draw(jaw_mask).polygon(jaw_poly, fill=255)
jm = np.array(jaw_mask) > 0
arr = np.array(hero)

jaw = arr.copy(); jaw[~jm, 3] = 0
ys, xs = np.where(jm)
x0, x1, y0, y1 = xs.min() - 2, xs.max() + 3, ys.min() - 2, ys.max() + 3
jaw_img = Image.fromarray(jaw[y0:y1, x0:x1], "RGBA")

body = arr.copy()
# the mouth interior: where the jaw was, paint the body a dark warm red so an open mouth reads
interior = jm & (arr[:, :, 3] > 0)
yy = np.where(interior)[0]
yt, yb = yy.min(), yy.max()
grad = ((yy - yt) / max(1, yb - yt))[:, None]
body[interior, :3] = (np.array([[38, 10, 14]]) * (1 - grad) + np.array([[120, 40, 48]]) * grad).astype(np.uint8)
body_img = Image.fromarray(body, "RGBA")
# jaw anchor: where the jaw's top-left sits inside the body image, normalised
save("hero-body", body_img, "cutout", {"jaw": {"x": x0 / W, "y": y0 / H, "w": (x1 - x0) / W, "h": (y1 - y0) / H}})
save("hero-jaw", jaw_img, "part", shadow=False)

# ---- 2. the barrel with its heart cut through ---------------------------------
barrel = Image.open(os.path.join(OUT, "heather.png")).convert("RGBA")
bw, bh = barrel.size
cx, cy, s = 596, 588, 34
heart = Image.new("L", (bw, bh), 0)
d = ImageDraw.Draw(heart)
# a heart from two circles and a triangle
d.ellipse((cx - s, cy - s * 0.9, cx, cy + s * 0.1), fill=255)
d.ellipse((cx, cy - s * 0.9, cx + s, cy + s * 0.1), fill=255)
d.polygon([(cx - s * 0.98, cy - s * 0.25), (cx + s * 0.98, cy - s * 0.25), (cx, cy + s * 0.95)], fill=255)
hm = np.array(heart) > 0
ba = np.array(barrel); ba[hm, 3] = 0
save("barrel", Image.fromarray(ba, "RGBA"), "cutout", {"heart": {"x": cx / bw, "y": cy / bh, "r": s / bh}})

# ---- 3. backdrops --------------------------------------------------------------
def backdrop(name, fid, crop, max_w=1600):
    im = raw(fid)
    w, h = im.size
    l, t, r, b = crop
    im = im.crop((int(l * w), int(t * h), int(r * w), int(b * h)))
    im.thumbnail((max_w, max_w))
    im.save(os.path.join(OUT, f"{name}.jpg"), quality=82, optimize=True)
    man[name] = {"kind": "backdrop", "w": im.width, "h": im.height}
    print(f"  {name:16s} {im.width}x{im.height}")

backdrop("bg-sky", "993df450", (0.0, 0.0, 1.0, 0.46))        # the parking lot sky and treeline
backdrop("bg-bryce", "186f6c4e", (0.0, 0.0, 1.0, 1.0))       # bryce canyon, william in it
backdrop("bg-water", "8c0ddecd", (0.16, 0.50, 0.90, 0.88))   # the pool, water only
backdrop("bg-field", "59d1abcc", (0.05, 0.06, 0.97, 0.98))   # the pink field painting

# ---- 4. torn scraps from the prints ----------------------------------------------
prints = [n for n, v in man.items() if v["kind"] == "print"]
for i in range(14):
    src = Image.open(os.path.join(OUT, f"{rng.choice(prints)}.png")).convert("RGBA")
    pw, ph = src.size
    sw, sh = int(pw * rng.uniform(0.18, 0.4)), int(ph * rng.uniform(0.12, 0.3))
    ox, oy = int(rng.uniform(0, pw - sw)), int(rng.uniform(0, ph - sh))
    piece = src.crop((ox, oy, ox + sw, oy + sh))
    # torn outline: a jagged polygon inside the crop
    n = 14
    ang = np.linspace(0, 2 * np.pi, n, endpoint=False)
    rad = rng.uniform(0.62, 1.0, n)
    poly = [(sw / 2 + np.cos(a) * r * sw / 2, sh / 2 + np.sin(a) * r * sh / 2) for a, r in zip(ang, rad)]
    m = Image.new("L", (sw, sh), 0); ImageDraw.Draw(m).polygon(poly, fill=255)
    mm = np.array(m) > 0
    # fibrous edge: a thin white rim where the paper tore
    rim = ndimage.binary_dilation(mm, iterations=3) & ~mm
    pa = np.array(piece); pa[~mm & ~rim, 3] = 0; pa[rim, :3] = PAPER; pa[rim, 3] = 255
    save(f"scrap-{i:02d}", Image.fromarray(pa, "RGBA"), "scrap", shadow=False)

json.dump(man, open(os.path.join(OUT, "manifest.json"), "w"), indent=1)
print(f"manifest now has {len(man)} entries")
