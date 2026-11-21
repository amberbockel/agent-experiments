#!/usr/bin/env python3
"""
Fourth asset pass: public-domain archive material into paper.

  * Muybridge "Horse in Motion" -> a 12-frame sprite sheet of silhouettes with alpha
  * engravings and plates -> cutouts (white rim, baked shadow) via rembg
  * paintings, charts, waves -> backdrops (jpg)

Usage: python3 -I prepare_archive.py <sources_dir> <assets_dir>
"""
import json
import os
import sys

import numpy as np
from PIL import Image, ImageFile, ImageOps
from scipy import ndimage

ImageFile.LOAD_TRUNCATED_IMAGES = True
SRC, OUT = sys.argv[1], sys.argv[2]
man = json.load(open(os.path.join(OUT, "manifest.json")))
PAPER = (250, 246, 238)
rng = np.random.default_rng(31)
sessions = {}


def src(rel):
    return ImageOps.exif_transpose(Image.open(os.path.join(SRC, rel)).convert("RGB"))


def shadow_from(mask, h):
    s = ndimage.gaussian_filter(mask.astype(np.float32), sigma=h * 0.012)
    return Image.fromarray((s / (s.max() + 1e-6) * 255).astype(np.uint8), "L")


def crop(im, fr):
    w, h = im.size
    l, t, r, b = fr
    return im.crop((int(l * w), int(t * h), int(r * w), int(b * h)))


# ---- 1. Muybridge sprite -------------------------------------------------------
def muybridge():
    im = src("horses/commons-the-horse-in-motion-high-res-jpg.jpg")
    # the 12 cells sit in a 4x3 grid inside the card; fractions measured on the 1280x797 scan
    grid = (0.022, 0.040, 0.980, 0.778)
    g = crop(im, grid)
    gw, gh = g.size
    cw, ch = gw / 4, gh / 3
    frames = []
    for r in range(3):
        for c in range(4):
            cell = g.crop((int(c * cw + cw * 0.04), int(r * ch + ch * 0.17), int((c + 1) * cw - cw * 0.03), int((r + 1) * ch - ch * 0.07)))
            a = np.array(cell.convert("L")).astype(np.float32)
            # the horse is the dark silhouette; grid lines are thin and light grey
            mask = a < 95
            mask = ndimage.binary_opening(mask, iterations=1)
            lab, n = ndimage.label(mask)
            if n > 1:
                sizes = ndimage.sum(mask, lab, range(1, n + 1))
                keep = [i + 1 for i, s in enumerate(sizes) if s > sizes.max() * 0.08]
                mask = np.isin(lab, keep)
            frames.append(mask)
    fw = max(f.shape[1] for f in frames); fh = max(f.shape[0] for f in frames)
    cols, rows = 4, 3
    sheet = np.zeros((rows * fh, cols * fw, 4), np.uint8)
    for i, m in enumerate(frames[:11]):  # frame 12 is the standing horse; leave it out of the gallop
        r, c = divmod(i, cols)
        pad = np.zeros((fh, fw), bool); pad[(fh - m.shape[0]) // 2:(fh - m.shape[0]) // 2 + m.shape[0], (fw - m.shape[1]) // 2:(fw - m.shape[1]) // 2 + m.shape[1]] = m
        rim = ndimage.binary_dilation(pad, iterations=max(2, fh // 70)) & ~pad
        tile = sheet[r * fh:(r + 1) * fh, c * fw:(c + 1) * fw]
        tile[pad] = (28, 22, 24, 255)
        tile[rim] = (*PAPER, 255)
    Image.fromarray(sheet, "RGBA").save(os.path.join(OUT, "muybridge.png"), optimize=True)
    man["muybridge"] = {"kind": "sprite", "w": cols * fw, "h": rows * fh, "cols": cols, "rows": rows, "frames": 11, "fw": fw, "fh": fh}
    print(f"  muybridge sprite {cols}x{rows} cells of {fw}x{fh}")


# ---- 2. cutouts ------------------------------------------------------------------
CUTOUTS = {
    # name: (file, crop fractions, model, max edge)
    "white-rabbit":   ("alice/commons-the-white-rabbit-tenniel-the-nursery-alice-1890-bl-jpg.jpg", (0.08, 0.05, 0.92, 0.88), "isnet-general-use", 900),
    "jelly-blue":     ("deep-sea/commons-haeckel-leptomedusae-jpg.jpg", (0.0, 0.0, 1.0, 1.0), "isnet-general-use", 1100),
    "jelly-siphon":   ("deep-sea/commons-haeckel-siphonophorae-jpg.jpg", (0.05, 0.03, 0.95, 0.97), "isnet-general-use", 1100),
    "jelly-disco":    ("jellyfish/commons-discomedusae-schweibenquallen-lccn2014645034-jpg.jpg", (0.12, 0.10, 0.88, 0.90), "isnet-general-use", 1100),
    "shark-bloch":    ("sharks/commons-d-marcus-elieser-bloch-s-aus-benden-arztes-zu-berlin-konomis.jpg", (0.04, 0.10, 0.96, 0.62), "isnet-general-use", 1100),
    "shark-spotted":  ("sharks/commons-ichthyologie-ou-histoire-naturelle-des-poissons-6918379686-j.jpg", (0.04, 0.20, 0.96, 0.80), "isnet-general-use", 1100),
    "titanic":        ("titanic/commons-rms-titanic-3-cropped-jpg.jpg", (0.0, 0.0, 1.0, 1.0), "isnet-general-use", 1200),
    "rose-pink":      ("flowers/commons-choix-des-plus-belles-fleurs-plate-137-7851518482-jpg.jpg", (0.10, 0.06, 0.90, 0.90), "isnet-general-use", 1000),
    "rose-china":     ("flowers/commons-henry-joseph-redout-the-roses-china-or-bengal-rose-1943-138.jpg", (0.10, 0.06, 0.90, 0.90), "isnet-general-use", 1000),
    "rose-wild":      ("flowers/commons-rosarum-monographia-or-a-botanical-history-of-roses-to-which.jpg", (0.12, 0.06, 0.88, 0.92), "isnet-general-use", 1000),
    "iceberg":        ("titanic/commons-icebergs-photographed-near-rms-titanic-s-grave-jpg.jpg", (0.0, 0.1, 1.0, 0.9), "isnet-general-use", 1000),
    "calliope":       ("circus/commons-calliope-the-wonderful-operonicon-or-steam-car-of-the-muses.jpg", (0.0, 0.0, 1.0, 1.0), "isnet-general-use", 1200),
    "earth":          ("space/nasa-as13-60-8588.jpg", (0.0, 0.0, 1.0, 1.0), "isnet-general-use", 900),
}


def make_cutout(name, rel, fr, model, max_edge):
    from rembg import remove, new_session
    if model not in sessions:
        sessions[model] = new_session(model)
    im = crop(src(rel), fr); im.thumbnail((max_edge, max_edge), Image.LANCZOS)
    seg = remove(im, session=sessions[model])
    alpha = np.array(seg)[:, :, 3]
    h = im.height
    shape = alpha > 110
    shape = ndimage.binary_closing(shape, iterations=max(2, int(h * 0.01)))
    shape = ndimage.binary_fill_holes(shape)
    lab, n = ndimage.label(shape)
    if n > 1:
        sizes = ndimage.sum(shape, lab, range(1, n + 1))
        shape = np.isin(lab, [i + 1 for i, s in enumerate(sizes) if s > sizes.max() * 0.05])
    if shape.sum() < 400:
        print(f"  !! {name}: empty"); return
    dist = ndimage.distance_transform_edt(~shape)
    noise = ndimage.gaussian_filter(rng.standard_normal(shape.shape), sigma=h * 0.01); noise /= (np.abs(noise).max() + 1e-6)
    paper = (dist <= max(3, h * 0.009) * (1 + 0.6 * noise)) | shape
    photo = np.array(im).astype(np.float32)
    soft = np.where(shape, np.clip(alpha / 255.0, 0, 1), 0.0)
    rgb = photo * soft[..., None] + np.array(PAPER, np.float32) * (1 - soft[..., None])
    out = np.zeros((*shape.shape, 4), np.float32)
    out[..., :3] = np.where(paper[..., None], rgb, 0); out[..., 3] = paper * 255
    ys, xs = np.where(paper); y0, y1, x0, x1 = max(ys.min() - 4, 0), ys.max() + 4, max(xs.min() - 4, 0), xs.max() + 4
    out = out[y0:y1, x0:x1]; paper = paper[y0:y1, x0:x1]
    rgba = Image.fromarray(out.astype(np.uint8), "RGBA")
    rgba.save(os.path.join(OUT, f"{name}.png"), optimize=True)
    shadow_from(paper, h).save(os.path.join(OUT, f"{name}_shadow.png"), optimize=True)
    man[name] = {"kind": "cutout", "w": rgba.width, "h": rgba.height, "archive": True}
    print(f"  {name:16s} {rgba.width}x{rgba.height}")


# ---- 3. backdrops ------------------------------------------------------------------
BACKDROPS = {
    "bg-clouds-moon":  ("clouds/commons-albert-bierstadt-cloud-study-moonlight-jpg.jpg", (0.0, 0.0, 1.0, 1.0)),
    "bg-clouds-sea":   ("clouds/commons-hans-gude-cloud-study-over-the-sea-ng-m-02234-national-museu.jpg", (0.0, 0.0, 1.0, 1.0)),
    "bg-clouds-pink":  ("clouds/commons-knud-baade-cloud-study-google-art-project-jpg.jpg", (0.0, 0.0, 1.0, 1.0)),
    "bg-stars":        ("stars/commons-1660-celestial-chart-representing-the-constellations-accordi.jpg", (0.04, 0.04, 0.96, 0.96)),
    "bg-nebula":       ("stars/nasa-gsfc-20171208-archive-e002076.jpg", (0.0, 0.0, 1.0, 1.0)),
    "bg-hokusai":      ("waves/commons-great-wave-hokusai-bm-1906-1220-0-533-n02-jpg.jpg", (0.02, 0.02, 0.98, 0.98)),
    "bg-dore":         ("shipwreck/commons-der-alte-matrose-b-10-jpg.jpg", (0.0, 0.0, 1.0, 1.0)),
    "bg-map":          ("maps/commons-1748-seale-map-of-the-pacific-ocean-w-trade-routes-from-acap.jpg", (0.0, 0.0, 1.0, 1.0)),
}


def make_backdrop(name, rel, fr, max_w=1800):
    im = crop(src(rel), fr); im.thumbnail((max_w, max_w))
    im.save(os.path.join(OUT, f"{name}.jpg"), quality=84, optimize=True)
    man[name] = {"kind": "backdrop", "w": im.width, "h": im.height, "archive": True}
    print(f"  {name:16s} {im.width}x{im.height}")


print("sprite"); muybridge()
print("cutouts")
for n, (rel, fr, model, me) in CUTOUTS.items():
    try: make_cutout(n, rel, fr, model, me)
    except Exception as e: print("  !!", n, e)
print("backdrops")
for n, (rel, fr) in BACKDROPS.items():
    try: make_backdrop(n, rel, fr)
    except Exception as e: print("  !!", n, e)
json.dump(man, open(os.path.join(OUT, "manifest.json"), "w"), indent=1)
print("manifest", len(man))
