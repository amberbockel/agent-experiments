# Deep End (working title)

A paper house you fall through, that renovates itself while you're inside it.

Private, long-form web piece. Months, not days. Built to be seen on Awwwards
eventually; built to be lived in first.

## The idea in one paragraph

You don't browse. You fall. The camera is always descending and every door takes
you deeper. Everything is a cut-out photograph from one person's actual archive:
visible scissor edges, slightly wrong scale, one warm lamp that follows your hand
and throws real shadows, motion quantized to 12 frames a second so it jitters like
stop-motion. The house remembers you. Doors you opened stay open. Rooms rearrange a
little between visits. Some things you saw the first time are gone the second.

## References

- Michael Jackson, "Leave Me Alone" (1989, dir. Jim Blashfield): cut-paper collage
  animation, one ruling metaphor (the self as amusement park), a specific personal
  archive, not stock.
- Alice's descent: one direction, no map, no back button.
- *Playdate with the Universe* tarot (Stephanie Gilbert): "play is a portal"; silly
  and sacred in the same frame.

## Structure

**Floors, not "dimensions."** Each floor is a zone of the column with its own light
and sound. Study 01 has three:

| floor | y range | light | what lives there |
|---|---|---|---|
| the yard | 0 to -13 | warm, lattice fence, garden behind | sunglasses girl, the heather, the 1987 drawing |
| the water | -13 to -27 | cool, caustics | the pool, the swing upside down, horses, the tulle skirt |
| the dark | -27 to -40 | one lamp, everything else near black | the rabbit, the "now" photos, the first locked door |

**Locks.** Two kinds, no puzzles.
1. Found keys: an object picked up in one room opens a door in another. (not yet built)
2. Patience doors: open if you stop moving and wait. Built. The door at the bottom
   of study 01 opens after about six seconds of stillness and reveals the first
   photograph.

## Phases

1. **Material study** (this folder, `study/`). One column, three floors, the paper
   shader, the lamp, the jitter, generated room tone, one patience door, memory
   across visits. Reject this twice before moving on.
2. **Descent and doors.** Real portals (render-to-texture through the doorframe),
   branching, found keys.
3. **The archive.** Scanning pipeline hardened. More floors: sound, coast, deep
   ocean, horses, becoming a mother.
4. **Sound design, the reveal, polish, mobile.**

## Running the study

The study is a single HTML fragment (`study/index.html`) that loads three.js from
jsDelivr. It is published privately as a Claude artifact with the assets alongside.

Local render check (writes four screenshots):

```
node tools/shoot.mjs /path/to/out
```

That script loads `study/dev.html`, a generated wrapper that points at a vendored
copy of three.js so Chromium needs no network. Regenerate it after editing
`index.html`:

```
python3 - <<'EOF'
s=open('study/index.html').read().replace("https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js","./vendor/three.module.js")
open('study/dev.html','w').write("<!doctype html>\n<html><head><meta charset='utf-8'></head><body>\n"+s+"\n</body></html>")
EOF
```

## Assets and privacy

Photographs never enter git. `study/assets/` is ignored. The pipeline in
`tools/prepare_assets.py` turns raw photos into cutouts (figure scissored out, white
paper rim, baked soft shadow) and prints (whole photo with a card border), plus a
`manifest.json` of pixel sizes.

```
pip install "rembg[cpu]" scipy pillow numpy
python3 -I tools/prepare_assets.py <raw_dir> study/assets
```

Models download on first run (about 350 MB). Hair against busy backgrounds comes
out scissor-rough, which is the aesthetic. If a cut fails, use the print variant.

### Adding a photo

1. Drop the file in the raw folder. Phone photos of album pages are fine.
2. Add a line to `CUTOUTS` or `PRINTS` in `tools/prepare_assets.py`. Crop fractions
   are left, top, right, bottom in 0..1.
3. Rerun the pipeline. Add a line to `LAYOUT` in `study/index.html`:
   `[name, x, y, z, height, rotation degrees, caption]`.

## Music

Nothing licensed ships. The room tone is synthesized in the browser (four detuned
oscillators through a lowpass that closes as you descend, plus record crackle that
fades with depth). Songs that raised the house appear later as paper: sleeves,
labels, a lyric written on the back of a photo.
