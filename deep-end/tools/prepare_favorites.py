#!/usr/bin/env python3
"""
Fifth asset pass: the Favorites album. Rides, props, portals, and a few prints.
Reuses prepare_assets.make_cutout / make_print with the album download as RAW.

Usage: python3 -I prepare_favorites.py <album_full_dir> <assets_dir>
"""
import importlib.util, json, os, sys
import numpy as np
from PIL import Image, ImageOps

RAW, OUT = sys.argv[1], sys.argv[2]
spec = importlib.util.spec_from_file_location("pa", os.path.join(os.path.dirname(__file__), "prepare_assets.py"))
pa = importlib.util.module_from_spec(spec); spec.loader.exec_module(pa)
pa.RAW, pa.OUT = RAW, OUT
pa.MAX_CUT, pa.MAX_PRINT = 1200, 900
man = json.load(open(os.path.join(OUT, "manifest.json")))
rng = np.random.default_rng(41); sessions = {}

# name: (album index, crop fractions or None, model)
CUT = {
    # vehicles: things she or the kid ride
    "ride-zebra":      ("108", None, "isnet-general-use"),
    "ride-giraffe":    ("162", None, "isnet-general-use"),
    "ride-carousel":   ("283", (0.0, 0.0, 1.0, 1.0), "isnet-general-use"),
    "ride-teacup":     ("284", (0.05, 0.15, 0.95, 1.0), "isnet-general-use"),
    "ride-dumbo":      ("278", None, "isnet-general-use"),
    "ride-hare":       ("260", None, "isnet-general-use"),
    "ride-hare-b":     ("261", None, "isnet-general-use"),
    "ride-ladybug":    ("078", None, "isnet-general-use"),
    "ride-jeep":       ("204", None, "isnet-general-use"),
    "ride-redcar":     ("281", None, "isnet-general-use"),
    "ride-bathtub":    ("235", None, "isnet-general-use"),
    "ride-kayak":      ("096", (0.0, 0.3, 1.0, 1.0), "isnet-general-use"),
    "ride-horses":     ("126", None, "isnet-general-use"),
    "ride-swing":      ("129", None, "isnet-general-use"),
    "ride-hammock":    ("213", None, "isnet-general-use"),
    "ride-bike":       ("090", None, "isnet-general-use"),
    # props and creatures
    "giant-shoes":     ("230", None, "isnet-general-use"),
    "koons-dog":       ("297", None, "isnet-general-use"),
    "letter-h":        ("246", None, "isnet-general-use"),
    "rainbow-arch":    ("244", None, "isnet-general-use"),
    "wings":           ("130", None, "isnet-general-use"),
    "bean":            ("101", None, "isnet-general-use"),
    "clock-cabinet":   ("154", None, "isnet-general-use"),
    "lion":            ("158", None, "isnet-general-use"),
    "neon-skeleton":   ("137", None, "isnet-general-use"),
    "dino-kid":        ("166", None, "u2net_human_seg"),
    "glasses-kid":     ("163", None, "u2net_human_seg"),
    "ifly":            ("073", None, "u2net_human_seg"),
    "goggles-kid":     ("189", None, "u2net_human_seg"),
    "ballpit-face":    ("180", None, "u2net_human_seg"),
    "ballpit-two":     ("181", None, "u2net_human_seg"),
    "yellow-ballpit":  ("245", None, "u2net_human_seg"),
    "flowers-amber":   ("242", None, "u2net_human_seg"),
    "flowers-kid":     ("249", None, "u2net_human_seg"),
    "upside-down":     ("241", None, "u2net_human_seg"),
    "happy-door":      ("240", None, "isnet-general-use"),
    "mirror":          ("270", None, "isnet-general-use"),
    "tunnel-kid":      ("132", None, "u2net_human_seg"),
    "castle":          ("264", (0.1, 0.0, 0.9, 0.75), "isnet-general-use"),
    "mickey-three":    ("274", None, "u2net_human_seg"),
    "pluto-run":       ("268", None, "u2net_human_seg"),
    "amber-yellow":    ("296", None, "u2net_human_seg"),
    "amber-wings":     ("130", (0.2, 0.1, 0.8, 1.0), "u2net_human_seg"),
    "amber-zurich":    ("152", None, "u2net_human_seg"),
    "amber-cowboy":    ("115", None, "u2net_human_seg"),
    "william-kid":     ("184", None, "u2net_human_seg"),
    "william-kid-b":   ("103", None, "u2net_human_seg"),
    "william-wedding": ("016", None, "u2net_human_seg"),
    "amber-wedding":   ("013", None, "u2net_human_seg"),
    "wedding-kiss":    ("039", None, "u2net_human_seg"),
    "dog-bone":        ("080", None, "isnet-general-use"),
    "two-dogs":        ("082", None, "isnet-general-use"),
    "sketch":          ("070", None, "isnet-general-use"),
    "skeleton-dino":   ("224", None, "u2net_human_seg"),
    "puppy":           ("290", None, "u2net_human_seg"),
    "kid-run-pluto":   ("269", None, "u2net_human_seg"),
    "kid-mickey-cookie":("263", None, "u2net_human_seg"),
    "kid-wave":        ("122", None, "u2net_human_seg"),
    "kid-shoulders":   ("123", None, "u2net_human_seg"),
    "kid-glow":        ("106", None, "u2net_human_seg"),
    "beach-amber":     ("210", None, "u2net_human_seg"),
    "beach-kid":       ("214", (0.3, 0.3, 0.9, 1.0), "u2net_human_seg"),
}
PRINTS = {
    "print-nurse-a":    ("111", None),
    "print-nurse-b":    ("112", None),
    "print-old-photo":  ("200", None),
    "print-murakami":   ("292", None),
    "print-kelly":      ("296", None),
    "print-bluebox":    ("182", None),
    "print-disney":     ("265", None),
    "print-zurich":     ("153", None),
    "print-cloud-gate": ("101", None),
    "print-mirror-rooms":("189", None),
}
BACK = {
    "bg-murakami":   ("300", (0.0, 0.0, 1.0, 1.0)),
    "bg-colorroom":  ("182", (0.0, 0.0, 1.0, 1.0)),
    "bg-yellowwall": ("236", (0.0, 0.0, 1.0, 0.6)),
    "bg-castle":     ("282", (0.0, 0.0, 1.0, 0.7)),
    "bg-beach":      ("212", (0.0, 0.0, 1.0, 1.0)),
    "bg-lucerne":    ("155", (0.0, 0.0, 1.0, 1.0)),
    "bg-rocks":      ("287", (0.0, 0.0, 1.0, 1.0)),
    "bg-pumpkins":   ("147", (0.0, 0.0, 1.0, 1.0)),
    "bg-ballpit":    ("177", (0.0, 0.0, 1.0, 1.0)),
    "bg-wedding":    ("047", (0.0, 0.0, 1.0, 1.0)),
    "bg-marigolds":  ("243", (0.0, 0.0, 1.0, 1.0)),
}

only = set(sys.argv[3:])
print("cutouts")
for n, (idx, crop, model) in CUT.items():
    if only and n not in only: continue
    try: pa.make_cutout(n, idx + ".", crop, model, sessions, rng, man)
    except Exception as e: print("  !!", n, e)
print("prints")
for n, (idx, crop) in PRINTS.items():
    if only and n not in only: continue
    try: pa.make_print(n, idx + ".", crop, rng, man)
    except Exception as e: print("  !!", n, e)
print("backdrops")
for n, (idx, crop) in BACK.items():
    if only and n not in only: continue
    im = ImageOps.exif_transpose(Image.open(os.path.join(RAW, idx + ".jpg")).convert("RGB"))
    w, h = im.size; l, t, r, b = crop; im = im.crop((int(l*w), int(t*h), int(r*w), int(b*h))); im.thumbnail((1600, 1600))
    im.save(os.path.join(OUT, n + ".jpg"), quality=82, optimize=True); man[n] = {"kind": "backdrop", "w": im.width, "h": im.height}
    print(f"  {n:16s} {im.width}x{im.height}")
json.dump(man, open(os.path.join(OUT, "manifest.json"), "w"), indent=1)
print("manifest", len(man))
