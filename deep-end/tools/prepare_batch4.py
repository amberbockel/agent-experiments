#!/usr/bin/env python3
"""Sixth asset pass: density. More album pieces, more archive pieces, and the door frames for study 04.
Usage: python3 -I prepare_batch4.py <album_full_dir> <sources_dir> <assets_dir>"""
import importlib.util, json, os, sys
import numpy as np
from PIL import Image, ImageOps
ALBUM, SRC, OUT = sys.argv[1], sys.argv[2], sys.argv[3]
spec = importlib.util.spec_from_file_location("pa", os.path.join(os.path.dirname(__file__), "prepare_assets.py"))
pa = importlib.util.module_from_spec(spec); spec.loader.exec_module(pa)
pa.OUT = OUT; pa.MAX_CUT, pa.MAX_PRINT = 1100, 900
man = json.load(open(os.path.join(OUT, "manifest.json")))
rng = np.random.default_rng(53); sessions = {}

ALBUM_CUT = {
    "ride-redspinner":  ("077", None, "isnet-general-use"),
    "ride-bouncy":      ("093", None, "u2net_human_seg"),
    "kid-jump":         ("148", None, "u2net_human_seg"),
    "kid-rock":         ("288", None, "u2net_human_seg"),
    "kid-rock-b":       ("289", None, "u2net_human_seg"),
    "kid-white-horse":  ("275", None, "u2net_human_seg"),
    "kid-eggs":         ("258", None, "u2net_human_seg"),
    "kid-pointing":     ("253", None, "u2net_human_seg"),
    "kid-scream":       ("134", None, "u2net_human_seg"),
    "kid-run":          ("089", None, "u2net_human_seg"),
    "kid-window":       ("107", None, "u2net_human_seg"),
    "kid-dino-shirt":   ("105", None, "u2net_human_seg"),
    "kid-cookie":       ("219", None, "u2net_human_seg"),
    "amber-skirt":      ("164", None, "u2net_human_seg"),
    "amber-balcony":    ("165", None, "u2net_human_seg"),
    "amber-galaxy":     ("226", None, "u2net_human_seg"),
    "amber-done":       ("141", None, "u2net_human_seg"),
    "amber-dress-koons":("299", None, "u2net_human_seg"),
    "amber-flowers-b":  ("243", None, "u2net_human_seg"),
    "family-pizza":     ("174", None, "u2net_human_seg"),
    "family-cookies":   ("238", None, "u2net_human_seg"),
    "family-tree":      ("198", None, "u2net_human_seg"),
    "family-rooftop":   ("248", None, "u2net_human_seg"),
    "william-tux":      ("195", None, "u2net_human_seg"),
    "amber-tux":        ("196", None, "u2net_human_seg"),
    "two-mickeys":      ("272", None, "u2net_human_seg"),
    "pluto":            ("268", (0.3, 0.0, 1.0, 1.0), "isnet-general-use"),
    "trike":            ("090", (0.0, 0.3, 0.7, 1.0), "isnet-general-use"),
    "connect-four":     ("085", None, "isnet-general-use"),
    "egg-pink":         ("256", None, "isnet-general-use"),
    "egg-brown":        ("257", None, "isnet-general-use"),
    "dog-sleep":        ("080", None, "isnet-general-use"),
    "kid-bunny-statue": ("259", None, "isnet-general-use"),
    # doors
    "door-tube":        ("132", None, "isnet-general-use"),
    "door-h":           ("246", (0.15, 0.0, 0.85, 1.0), "isnet-general-use"),
    "door-corridor":    ("182", None, "isnet-general-use"),
    "door-happy":       ("240", None, "isnet-general-use"),
}
ALBUM_PRINT = {
    "print-corridor":   ("182", None),
    "print-happy":      ("240", None),
    "print-tube":       ("132", None),
    "print-h":          ("246", None),
    "print-arch":       ("187", None),
    "print-wedding-a":  ("003", None),
    "print-wedding-b":  ("045", None),
    "print-ifly":       ("073", None),
    "print-boat":       ("113", None),
    "print-fire":       ("110", None),
}
ARCHIVE_CUT = {
    "alice-drink":      ("alice/commons-alice-drink-me-jpg.jpg", (0.0, 0.0, 1.0, 1.0)),
    "alice-swim":       ("alice/commons-alice-par-john-tenniel-08-png.jpg", (0.0, 0.0, 1.0, 1.0)),
    "alice-caucus":     ("alice/commons-alice-par-john-tenniel-09-png.jpg", (0.0, 0.0, 1.0, 1.0)),
    "alice-big":        ("alice/commons-alice-par-john-tenniel-11-png.jpg", (0.0, 0.0, 1.0, 1.0)),
    "alice-caterpillar":("alice/commons-alice-05a-1116x1492-jpg.jpg", (0.0, 0.0, 1.0, 1.0)),
    "shark-basking":    ("sharks/commons-basking-shark-jonathan-couch-jpg.jpg", (0.0, 0.05, 1.0, 0.95)),
    "shark-head":       ("sharks/commons-broad-headed-gazer-aka-basking-shark-from-front-jpg.jpg", (0.0, 0.0, 1.0, 0.85)),
    "shark-tiger":      ("sharks/commons-carcharias-taurus-mccoy-jpg.jpg", (0.0, 0.0, 1.0, 1.0)),
    "hand-bones":       ("hands/commons-botten-van-de-handen-rp-p-1922-423-jpg.jpg", (0.0, 0.0, 1.0, 1.0)),
    "vesalius":         ("hands/commons-tri-state-medical-journal-and-practitioner-1897-14591666580.jpg", (0.0, 0.0, 1.0, 1.0)),
    "bird-gould":       ("rainbow/commons-john-gould-and-h-c-richter-diphogena-aurora-gould-s-rainbow.jpg", (0.0, 0.0, 1.0, 1.0)),
    "pitta-card":       ("rainbow/commons-rainbow-pitta-from-the-birds-of-the-tropics-series-n5-for-al.jpg", (0.0, 0.0, 1.0, 1.0)),
}
ARCHIVE_PRINT = {
    "print-bathers":    ("swimmers/loc-2004678428.jpg", None),
    "print-beauty":     ("swimmers/commons-11-women-and-a-little-girl-lined-up-for-bathing-beauty-conte.jpg", None),
    "print-circus":     ("circus/commons-barnum-and-bailey-grand-water-circus-jpg.jpg", None),
    "print-dore":       ("shipwreck/commons-der-alte-matrose-b-05-jpg.jpg", None),
    "print-moon":       ("moon/nasa-ksc-20240819-ph-jbs01-0012.jpg", None),
}

def run(table, raw, fn):
    pa.RAW = raw
    for n, args in table.items():
        try: fn(n, *args)
        except Exception as e: print("  !!", n, e)

def credit_lookup(rel):
    try:
        cr = json.load(open(os.path.join(SRC, "credits.json")))
        for k, v in cr.items():
            if v["file"] == rel: return k
    except Exception: pass
    return None

print("album cutouts"); run(ALBUM_CUT, ALBUM, lambda n, idx, crop, model: pa.make_cutout(n, idx + ".", crop, model, sessions, rng, man))
print("album prints");  run(ALBUM_PRINT, ALBUM, lambda n, idx, crop: pa.make_print(n, idx + ".", crop, rng, man))
# archive files live in subfolders; resolve by exact relative path
def arch_cut(n, rel, crop):
    pa.RAW = os.path.join(SRC, os.path.dirname(rel)); pa.make_cutout(n, os.path.basename(rel), crop, "isnet-general-use", sessions, rng, man); man[n]["archive"] = True; man[n]["credit"] = credit_lookup(rel)
def arch_print(n, rel, crop):
    pa.RAW = os.path.join(SRC, os.path.dirname(rel)); pa.make_print(n, os.path.basename(rel), crop, rng, man); man[n]["archive"] = True; man[n]["credit"] = credit_lookup(rel)
print("archive cutouts"); run(ARCHIVE_CUT, SRC, arch_cut)
print("archive prints");  run(ARCHIVE_PRINT, SRC, arch_print)
json.dump(man, open(os.path.join(OUT, "manifest.json"), "w"), indent=1)
print("manifest", len(man))
