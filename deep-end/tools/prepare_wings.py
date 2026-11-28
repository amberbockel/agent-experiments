#!/usr/bin/env python3
"""Seventh asset pass: the four wings (love, travel, motherhood, adventure) and the drive.
Usage: python3 -I prepare_wings.py <album_full_dir> <assets_dir>"""
import importlib.util, json, os, sys
import numpy as np
from PIL import Image, ImageOps
ALBUM, OUT = sys.argv[1], sys.argv[2]
spec = importlib.util.spec_from_file_location("pa", os.path.join(os.path.dirname(__file__), "prepare_assets.py"))
pa = importlib.util.module_from_spec(spec); spec.loader.exec_module(pa)
pa.RAW, pa.OUT = ALBUM, OUT; pa.MAX_CUT, pa.MAX_PRINT = 1100, 900
man = json.load(open(os.path.join(OUT, "manifest.json")))
rng = np.random.default_rng(61); sessions = {}
H = "u2net_human_seg"; G = "isnet-general-use"
CUT = {
  # love
  "love-redshoes":   ("003", None, H), "love-street":   ("004", None, H), "love-window":   ("013", None, H),
  "love-pillars":    ("020", None, H), "love-taxi":     ("022", None, H), "love-dogkiss":  ("025", None, H),
  "love-bridge":     ("041", None, H), "love-bench":    ("043", None, H), "love-walk":     ("045", None, H),
  "love-dance":      ("049", None, H), "love-gala":     ("194", None, H), "love-beanie":   ("201", None, H),
  "love-young":      ("076", None, H), "love-cake":     ("033", None, G), "love-roses":    ("032", None, G),
  # travel
  "travel-zurich":   ("152", None, H), "travel-alley":  ("119", None, H), "travel-swans":  ("157", None, H),
  "travel-lakeside": ("156", None, H), "travel-bean":   ("101", None, H), "travel-broad":  ("298", None, H),
  "travel-koons-kid":("299", None, H), "travel-kelly":  ("295", None, H), "travel-skyline":("010", None, H),
  "travel-rocks-kid":("288", None, H), "travel-beach-walk":("211", None, H), "travel-palm":  ("212", (0.0, 0.0, 0.55, 0.75), G),
  "travel-hammock":  ("213", None, H), "travel-murakami":("292", None, H),
  # motherhood
  "mother-newborn":  ("060", None, H), "mother-grandpa":("062", None, H), "mother-cooking":("083", None, H),
  "mother-cooking-b":("084", None, H), "mother-tube":   ("086", None, H), "mother-shoulders":("102", None, H),
  "mother-hug":      ("103", None, H), "mother-cowboy": ("115", None, H), "mother-chair":  ("118", None, H),
  "mother-bw":       ("124", None, H), "mother-hands":  ("142", None, H), "mother-grandma":("144", None, H),
  "mother-yellow":   ("171", None, H), "mother-grandma-b":("193", None, H), "mother-baby-held":("262", None, H),
  "mother-william":  ("183", None, H),
  # adventure
  "adv-ifly":        ("073", None, H), "adv-horses":    ("127", None, H), "adv-horses-b":  ("128", None, H),
  "adv-kayak":       ("096", (0.0, 0.4, 1.0, 1.0), G), "adv-boat":      ("114", None, H), "adv-fire":      ("110", None, H),
  "adv-jeep":        ("205", None, G), "adv-jump":      ("148", None, H), "adv-zip":       ("069", None, H),
  "adv-rocks":       ("289", None, H), "adv-lanterns":  ("203", None, H), "adv-dumbo":     ("278", None, G),
  "adv-mickey-car":  ("281", None, G), "adv-bike":      ("090", None, H),
  # the drive
  "drive-car":       ("993df450", (0.0, 0.5, 1.0, 0.95), G),
  "drive-hoodoo":    ("186f6c4e", (0.0, 0.45, 0.55, 0.9), G),
  "drive-rock":      ("287", (0.1, 0.3, 0.9, 1.0), G),
}
PRINT = {
  "door-love":       ("190", None), "door-travel": ("119", None), "door-mother": ("086", None), "door-adventure": ("073", None),
  "print-boston":    ("047", None), "print-lucerne-b": ("155", None), "print-beach-b": ("214", None),
  "print-hospital":  ("060", None), "print-nurse-c": ("111", None), "print-bridge-a": ("coast-bridge", None),
}
BACK = {
  "bg-coast":        ("212", (0.0, 0.0, 1.0, 0.75)), "bg-sunset": ("139", (0.0, 0.0, 1.0, 0.6)),
  "bg-skyline":      ("047", (0.0, 0.0, 1.0, 1.0)), "bg-rooftop": ("000", (0.0, 0.0, 1.0, 0.6)),
  "bg-nursery":      ("252", (0.0, 0.0, 1.0, 1.0)), "bg-horses": ("126", (0.0, 0.0, 1.0, 0.7)),
  "bg-lanterns":     ("202", (0.0, 0.0, 1.0, 1.0)), "bg-kayak": ("096", (0.0, 0.0, 1.0, 0.55)),
}
only = set(sys.argv[3:])
def src_for(idx):
    # album index, or a raw-folder file id for the two drive sources that live in the raw dir
    if idx.endswith(".") or idx.isdigit(): return ALBUM, idx + ("" if idx.endswith(".") else ".")
    return "/tmp/claude-0/-home-user-agent-experiments/c704eeaa-52fc-5f3a-82a5-e6dcf1123b85/scratchpad/raw", idx
print("cutouts")
for n, (idx, crop, model) in CUT.items():
    if only and n not in only: continue
    raw, fid = src_for(idx); pa.RAW = raw
    try: pa.make_cutout(n, fid, crop, model, sessions, rng, man)
    except Exception as e: print("  !!", n, e)
print("prints")
for n, (idx, crop) in PRINT.items():
    if only and n not in only: continue
    if idx == "coast-bridge": continue
    pa.RAW = ALBUM
    try: pa.make_print(n, idx + ".", crop, rng, man)
    except Exception as e: print("  !!", n, e)
print("backdrops")
for n, (idx, crop) in BACK.items():
    if only and n not in only: continue
    im = ImageOps.exif_transpose(Image.open(os.path.join(ALBUM, idx + ".jpg")).convert("RGB"))
    w, h = im.size; l, t, r, b = crop; im = im.crop((int(l*w), int(t*h), int(r*w), int(b*h))); im.thumbnail((1600, 1600))
    im.save(os.path.join(OUT, n + ".jpg"), quality=82, optimize=True); man[n] = {"kind": "backdrop", "w": im.width, "h": im.height}; print(f"  {n:16s} {im.width}x{im.height}")
json.dump(man, open(os.path.join(OUT, "manifest.json"), "w"), indent=1)
print("manifest", len(man))
