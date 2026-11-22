#!/usr/bin/env python3
"""Punch the glass out of the gilded mirror cutout so it can be a portal, and record the hole in the manifest.
Usage: python3 -I punch_mirror.py <assets_dir>"""
import json, os, sys
import numpy as np
from PIL import Image, ImageDraw
from scipy import ndimage

OUT = sys.argv[1]
man = json.load(open(os.path.join(OUT, "manifest.json")))
im = Image.open(os.path.join(OUT, "mirror.png")).convert("RGBA")
w, h = im.size
a = np.array(im)
# find the gold frame: warm, saturated pixels; the glass is whatever sits inside its inner boundary
rgb = a[:, :, :3].astype(int)
gold = (rgb[:, :, 0] > 120) & (rgb[:, :, 0] - rgb[:, :, 2] > 45) & (a[:, :, 3] > 0)
gold = ndimage.binary_closing(gold, iterations=max(3, h // 120))
# the hole = pixels inside the paper that are enclosed by gold but are not gold
filled = ndimage.binary_fill_holes(gold)
hole = filled & ~gold
lab, n = ndimage.label(hole)
if n > 1:
    sizes = ndimage.sum(hole, lab, range(1, n + 1)); hole = lab == (int(np.argmax(sizes)) + 1)
hole = ndimage.binary_erosion(hole, iterations=max(2, h // 200))
ys, xs = np.where(hole)
cx, cy = xs.mean() / w, ys.mean() / h
r = 0.5 * (ys.max() - ys.min()) / h
a[hole, 3] = 0
Image.fromarray(a, "RGBA").save(os.path.join(OUT, "mirror.png"), optimize=True)
man["mirror"]["heart"] = {"x": float(cx), "y": float(cy), "r": float(r)}
json.dump(man, open(os.path.join(OUT, "manifest.json"), "w"), indent=1)
print("hole", int(hole.sum()), "px at", round(cx, 3), round(cy, 3), "r", round(r, 3))
