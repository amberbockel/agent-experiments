#!/usr/bin/env python3
"""
Asset pipeline for the paper house.

Turns raw photographs into two kinds of paper:
  * cutouts  - a figure or object scissored out of its photo, with a white
               paper rim around the silhouette and a baked soft shadow
  * prints   - the whole photograph as a bordered print

Each output is a PNG with alpha plus a matching *_shadow.png (the paper
silhouette, blurred). A manifest.json lists every piece with its pixel size
so the scene can lay things out without loading textures first.

Usage:
  python3 -I prepare_assets.py <raw_dir> <out_dir>

Photos never leave the machine this runs on. The out_dir is gitignored.
"""
import json
import os
import sys

import numpy as np
from PIL import Image, ImageFile, ImageFilter
ImageFile.LOAD_TRUNCATED_IMAGES = True
from scipy import ndimage

RAW, OUT = sys.argv[1], sys.argv[2]
os.makedirs(OUT, exist_ok=True)

PAPER = (250, 246, 238)      # warm white card stock
MAX_CUT = 1100               # long edge for cutouts
MAX_PRINT = 900              # long edge for prints

# name: (file, crop fractions (l,t,r,b) or None, model)
CUTOUTS = {
    "girl-sunglasses": ("ae7d2747", None, "u2net_human_seg"),
    "girl-closeup":    ("7e346391", (0.18, 0.05, 0.82, 1.0), "u2net_human_seg"),
    "girl-swing":      ("720c2f2c", None, "isnet-general-use"),
    "girl-cat":        ("acf932b8", (0.15, 0.0, 0.95, 1.0), "isnet-general-use"),
    "girl-picnic":     ("5d7c7c98", (0.0, 0.0, 0.7, 1.0), "u2net_human_seg"),
    "baby-cake":       ("44f1c8ef", None, "isnet-general-use"),
    "toddler-gift":    ("f5448b1c", (0.10, 0.10, 0.86, 0.93), "isnet-general-use"),
    "horse-white":     ("de7525b6", (0.13, 0.15, 0.88, 0.86), "isnet-general-use"),
    "horse-brown":     ("ea720548", (0.14, 0.15, 0.96, 0.88), "isnet-general-use"),
    "rabbit":          ("feaf3c7e", (0.55, 0.42, 1.0, 0.86), "isnet-general-use"),
    "mom-and-me":      ("feaf3c7e", None, "isnet-general-use"),
    "baby-dad":        ("cf331e0d", (0.0, 0.0, 1.0, 0.73), "isnet-general-use"),
    "heather":         ("ae7d2747", (0.58, 0.50, 1.0, 1.0), "isnet-general-use"),
    "cameras":         ("470be6df", None, "isnet-general-use"),
    "william-bryce":   ("186f6c4e", (0.3, 0.35, 0.65, 0.78), "u2net_human_seg"),
    "cotton-candy":    ("50ec5ec0", None, "isnet-general-use"),
    "red-car":         ("993df450", (0.0, 0.5, 1.0, 0.95), "isnet-general-use"),
    "tulle":           ("6187e15e", None, "isnet-general-use"),
    "teen-orchids":    ("8bcf8fb6", None, "u2net_human_seg"),
}

# name: (file, crop fractions or None)
PRINTS = {
    "print-pool":       ("8c0ddecd", (0.13, 0.17, 0.93, 0.90)),
    "print-portrait":   ("5cb669aa", (0.09, 0.10, 0.63, 0.93)),
    "print-webcam-a":   ("9c5921db", None),
    "print-webcam-b":   ("01589bc0", None),
    "print-bryce":      ("186f6c4e", None),
    "print-drawing":    ("45a08ace", (0.0, 0.18, 0.56, 0.78)),
    "print-swing":      ("720c2f2c", None),
    "print-lattice":    ("7e346391", None),
    "print-cake":       ("44f1c8ef", None),
    "print-horse":      ("de7525b6", (0.13, 0.15, 0.88, 0.86)),
    "print-painting":   ("59d1abcc", (0.05, 0.06, 0.97, 0.98)),
}


def load(fid, crop, max_edge):
    path = next(p for p in os.listdir(RAW) if p.startswith(fid))
    im = Image.open(os.path.join(RAW, path)).convert("RGB")
    try:
        from PIL import ImageOps
        im = ImageOps.exif_transpose(im)
    except Exception:
        pass
    if crop:
        w, h = im.size
        l, t, r, b = crop
        im = im.crop((int(l * w), int(t * h), int(r * w), int(b * h)))
    im.thumbnail((max_edge, max_edge), Image.LANCZOS)
    return im


def paper_edge(alpha, h):
    """Binarize a segmentation alpha into a scissor-cut paper silhouette."""
    a = alpha > 110
    r = max(2, int(h * 0.012))
    a = ndimage.binary_closing(a, iterations=r)
    a = ndimage.binary_fill_holes(a)
    # keep the largest connected blob plus anything reasonably big
    lab, n = ndimage.label(a)
    if n > 1:
        sizes = ndimage.sum(a, lab, range(1, n + 1))
        keep = [i + 1 for i, s in enumerate(sizes) if s > sizes.max() * 0.05]
        a = np.isin(lab, keep)
    return a


def rim(shape_mask, h, rng):
    """Grow a white rim around the silhouette with a slightly wobbly edge."""
    dist = ndimage.distance_transform_edt(~shape_mask)
    base = max(3, h * 0.009)
    noise = ndimage.gaussian_filter(rng.standard_normal(shape_mask.shape), sigma=h * 0.01)
    noise = noise / (np.abs(noise).max() + 1e-6)
    return dist <= base * (1 + 0.6 * noise)


def shadow_from(mask, h):
    s = ndimage.gaussian_filter(mask.astype(np.float32), sigma=h * 0.012)
    s = s / (s.max() + 1e-6)
    return Image.fromarray((s * 255).astype(np.uint8), "L")


def save_piece(name, rgba, shadow, kind, manifest):
    rgba.save(os.path.join(OUT, f"{name}.png"), optimize=True)
    shadow.save(os.path.join(OUT, f"{name}_shadow.png"), optimize=True)
    manifest[name] = {"kind": kind, "w": rgba.width, "h": rgba.height}
    print(f"  {name:18s} {rgba.width}x{rgba.height}")


def make_cutout(name, fid, crop, model, sessions, rng, manifest):
    from rembg import remove, new_session
    if model not in sessions:
        sessions[model] = new_session(model)
    im = load(fid, crop, MAX_CUT)
    seg = remove(im, session=sessions[model])
    alpha = np.array(seg)[:, :, 3]
    h = im.height
    shape = paper_edge(alpha, h)
    paper = rim(shape, h, rng) | shape

    photo = np.array(im).astype(np.float32)
    # soft photo alpha inside the shape so edges of the photo itself stay crisp
    soft = np.clip(alpha.astype(np.float32) / 255.0, 0, 1)
    soft = np.where(shape, np.maximum(soft, 0.0), 0.0)
    soft = ndimage.gaussian_filter(soft, 0.6)
    soft = np.where(shape, soft, 0.0)

    out = np.zeros((im.height, im.width, 4), np.float32)
    paper_rgb = np.array(PAPER, np.float32)
    rgb = photo * soft[..., None] + paper_rgb * (1 - soft[..., None])
    out[..., :3] = np.where(paper[..., None], rgb, 0)
    out[..., 3] = paper * 255

    # trim to content
    ys, xs = np.where(paper)
    if len(ys) == 0:
        print(f"  !! {name}: empty mask, skipped")
        return
    pad = 4
    y0, y1 = max(ys.min() - pad, 0), min(ys.max() + pad, im.height)
    x0, x1 = max(xs.min() - pad, 0), min(xs.max() + pad, im.width)
    out = out[y0:y1, x0:x1]
    paper = paper[y0:y1, x0:x1]

    rgba = Image.fromarray(out.astype(np.uint8), "RGBA")
    save_piece(name, rgba, shadow_from(paper, h), "cutout", manifest)


def make_print(name, fid, crop, rng, manifest):
    im = load(fid, crop, MAX_PRINT)
    b = max(6, int(min(im.size) * 0.045))
    w, h = im.width + 2 * b, im.height + 2 * b
    card = Image.new("RGB", (w, h), PAPER)
    card.paste(im, (b, b))
    # tiny warm cast and softness like an old print
    card = card.filter(ImageFilter.GaussianBlur(0.3))
    mask = np.ones((h, w), bool)
    rgba = card.convert("RGBA")
    save_piece(name, rgba, shadow_from(mask, h), "print", manifest)


def main():
    rng = np.random.default_rng(7)
    manifest = {}
    sessions = {}
    print("cutouts")
    for name, (fid, crop, model) in CUTOUTS.items():
        try:
            make_cutout(name, fid, crop, model, sessions, rng, manifest)
        except Exception as e:  # keep going; report at the end
            print(f"  !! {name}: {e}")
    print("prints")
    for name, (fid, crop) in PRINTS.items():
        make_print(name, fid, crop, rng, manifest)
    with open(os.path.join(OUT, "manifest.json"), "w") as f:
        json.dump(manifest, f, indent=1)
    print(f"wrote {len(manifest)} pieces to {OUT}")


if __name__ == "__main__":
    main()
