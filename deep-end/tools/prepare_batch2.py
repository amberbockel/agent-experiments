#!/usr/bin/env python3
"""Third asset pass: the second batch of photographs. Reuses prepare_assets.py."""
import importlib.util, json, os, sys
import numpy as np
RAW, OUT = sys.argv[1], sys.argv[2]
spec = importlib.util.spec_from_file_location("pa", os.path.join(os.path.dirname(__file__), "prepare_assets.py"))
pa = importlib.util.module_from_spec(spec); spec.loader.exec_module(pa)
man = json.load(open(os.path.join(OUT, "manifest.json")))
rng = np.random.default_rng(23); sessions = {}

CUT = {
    "surfers":      ("f86916a0", None, "isnet-general-use"),
    "baby-lap":     ("8ec67e27", (0.22, 0.10, 0.88, 1.0), "isnet-general-use"),
    "roses-coat":   ("aebc9e6e", None, "u2net_human_seg"),
    "diploma":      ("b8a7848d", None, "isnet-general-use"),
    "bucket-hat":   ("9720b1ca", (0.22, 0.0, 0.92, 0.78), "u2net_human_seg"),
    "dog":          ("0e7aee28", (0.0, 0.52, 0.80, 1.0), "isnet-general-use"),
    "kiddie-pool":  ("0e7aee28", (0.18, 0.36, 1.0, 0.72), "isnet-general-use"),
    "braids":       ("77cc6e57", (0.0, 0.30, 0.95, 1.0), "u2net_human_seg"),
    "grad-girl":    ("95858638", (0.26, 0.34, 0.60, 0.92), "isnet-general-use"),
}
PRINTS = {
    "print-bull":        ("d8272628", (0.04, 0.0, 1.0, 1.0)),
    "print-santa":       ("c85b5c1b", (0.11, 0.24, 0.89, 0.85)),
    "booth-a":           ("eca3d068", (0.345, 0.105, 0.745, 0.50)),
    "booth-b":           ("eca3d068", (0.345, 0.545, 0.745, 0.94)),
    "note-lindsey":      ("0e7aee28", (0.0, 0.0, 0.46, 0.09)),
    "note-grad":         ("df87d417", (0.02, 0.20, 0.98, 0.32)),
    "print-montessori":  ("df87d417", (0.04, 0.47, 0.94, 0.98)),
    "print-surf":        ("f86916a0", None),
}
print("cutouts")
for n, (fid, crop, model) in CUT.items():
    try: pa.make_cutout(n, fid, crop, model, sessions, rng, man)
    except Exception as e: print("  !!", n, e)
print("prints")
for n, (fid, crop) in PRINTS.items():
    pa.make_print(n, fid, crop, rng, man)
# backdrops
from PIL import Image, ImageOps
def backdrop(name, fid, crop, max_w=1600):
    path = next(p for p in os.listdir(RAW) if p.startswith(fid))
    im = ImageOps.exif_transpose(Image.open(os.path.join(RAW, path)).convert("RGB"))
    w, h = im.size; l, t, r, b = crop
    im = im.crop((int(l*w), int(t*h), int(r*w), int(b*h))); im.thumbnail((max_w, max_w))
    im.save(os.path.join(OUT, f"{name}.jpg"), quality=82, optimize=True)
    man[name] = {"kind": "backdrop", "w": im.width, "h": im.height}; print(f"  {name:16s} {im.width}x{im.height}")
backdrop("bg-wave", "f86916a0", (0.0, 0.0, 1.0, 1.0))
backdrop("bg-signs", "9720b1ca", (0.0, 0.0, 1.0, 0.62))
json.dump(man, open(os.path.join(OUT, "manifest.json"), "w"), indent=1)
print("manifest", len(man))
