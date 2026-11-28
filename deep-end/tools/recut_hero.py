#!/usr/bin/env python3
"""Recut the hero with a union of three segmenters so the purse survives, then re-split the jaw.
Usage: python3 -I recut_hero.py <raw_dir> <assets_dir>"""
import json, os, sys
import numpy as np
from PIL import Image, ImageDraw, ImageOps
from scipy import ndimage
from rembg import remove, new_session

RAW, OUT = sys.argv[1], sys.argv[2]
PAPER = (250, 246, 238)
man = json.load(open(os.path.join(OUT, "manifest.json")))
src = next(p for p in os.listdir(RAW) if p.startswith("ae7d2747"))
im = ImageOps.exif_transpose(Image.open(os.path.join(RAW, src)).convert("RGB")); im.thumbnail((1100, 1100), Image.LANCZOS)
W0, H0 = im.size
alphas = []
for model in ("u2net_human_seg", "isnet-general-use", "u2net"):
    a = np.array(remove(im, session=new_session(model)))[:, :, 3]
    alphas.append(a)
# union, but weight the human model so the fence never joins the body
alpha = np.maximum(alphas[0], np.maximum(alphas[1], alphas[2]) * 0.9).astype(np.uint8)
h = H0
shape = alpha > 110
shape = ndimage.binary_closing(shape, iterations=max(2, int(h * 0.012)))
shape = ndimage.binary_fill_holes(shape)
lab, n = ndimage.label(shape)
if n > 1:
    sizes = ndimage.sum(shape, lab, range(1, n + 1)); shape = lab == (int(np.argmax(sizes)) + 1)
rng = np.random.default_rng(7)
dist = ndimage.distance_transform_edt(~shape)
noise = ndimage.gaussian_filter(rng.standard_normal(shape.shape), sigma=h * 0.01); noise /= (np.abs(noise).max() + 1e-6)
paper = (dist <= max(3, h * 0.009) * (1 + 0.6 * noise)) | shape
photo = np.array(im).astype(np.float32)
soft = np.where(shape, np.clip(alpha / 255.0, 0, 1), 0.0); soft = ndimage.gaussian_filter(soft, 0.6); soft = np.where(shape, soft, 0.0)
rgb = photo * soft[..., None] + np.array(PAPER, np.float32) * (1 - soft[..., None])
out = np.zeros((H0, W0, 4), np.float32); out[..., :3] = np.where(paper[..., None], rgb, 0); out[..., 3] = paper * 255
ys, xs = np.where(paper); pad = 4
y0, y1 = max(ys.min() - pad, 0), min(ys.max() + pad, H0); x0, x1 = max(xs.min() - pad, 0), min(xs.max() + pad, W0)
out = out[y0:y1, x0:x1].astype(np.uint8); paper = paper[y0:y1, x0:x1]
W, H = out.shape[1], out.shape[0]

# locate the old jaw polygon in the new crop by matching the sunglasses band of the old cut
old = np.array(Image.open(os.path.join(OUT, "hero-body.png")).convert("L")).astype(np.float32)
tpl = old[120:200, 100:330]
new = np.array(Image.fromarray(out, "RGBA").convert("L")).astype(np.float32)
best, bx, by = 1e18, 0, 0
for dy in range(0, max(1, H - tpl.shape[0] - 600)):
    for dx in range(0, max(1, W - tpl.shape[1])):
        win = new[dy:dy + tpl.shape[0], dx:dx + tpl.shape[1]]
        d = np.mean((win - tpl) ** 2)
        if d < best: best, bx, by = d, dx, dy
sx, sy = bx - 100, by - 120   # shift from old coords to new coords
print("old->new shift", sx, sy, "match", round(best, 1), "new size", W, H)
old_poly = [(166, 202), (190, 198), (210, 199), (230, 198), (252, 203), (254, 226), (240, 244), (212, 254), (184, 246), (166, 228)]
poly = [(x + sx, y + sy) for x, y in old_poly]
m = Image.new("L", (W, H), 0); ImageDraw.Draw(m).polygon(poly, fill=255); jm = np.array(m) > 0
jaw = out.copy(); jaw[~jm, 3] = 0
jys, jxs = np.where(jm); jx0, jx1, jy0, jy1 = jxs.min() - 2, jxs.max() + 3, jys.min() - 2, jys.max() + 3
Image.fromarray(jaw[jy0:jy1, jx0:jx1], "RGBA").save(os.path.join(OUT, "hero-jaw.png"), optimize=True)
body = out.copy(); interior = jm & (out[:, :, 3] > 0)
yy = np.where(interior)[0]; yt, yb = yy.min(), yy.max(); grad = ((yy - yt) / max(1, yb - yt))[:, None]
body[interior, :3] = (np.array([[38, 10, 14]]) * (1 - grad) + np.array([[120, 40, 48]]) * grad).astype(np.uint8)
Image.fromarray(body, "RGBA").save(os.path.join(OUT, "hero-body.png"), optimize=True)
s = ndimage.gaussian_filter(paper.astype(np.float32), sigma=H * 0.012); Image.fromarray((s / (s.max() + 1e-6) * 255).astype(np.uint8), "L").save(os.path.join(OUT, "hero-body_shadow.png"), optimize=True)
man["hero-body"] = {"kind": "cutout", "w": int(W), "h": int(H), "jaw": {"x": float(jx0 / W), "y": float(jy0 / H), "w": float((jx1 - jx0) / W), "h": float((jy1 - jy0) / H)}}
man["hero-jaw"] = {"kind": "part", "w": int(jx1 - jx0), "h": int(jy1 - jy0)}
json.dump(man, open(os.path.join(OUT, "manifest.json"), "w"), indent=1)
print("hero", W, H, "jaw", jx1 - jx0, jy1 - jy0)
