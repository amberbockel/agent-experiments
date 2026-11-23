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

## Studies so far

| study | what it tests | verdict |
|---|---|---|
| 01 | the paper itself: rims, shadows, lamp, 12fps jitter, one patience door | paper works; door was a drawn keyhole and meant nothing |
| 02 | motion to music: hinged jaw, swing, gallop, flash, torn cuts on the downbeat; layered archive backdrops | motion right; the heart-in-the-barrel portal was an object the owner didn't recognise |
| 03 | five floors fed by the Favorites album; carousel orbits, teacup spin, Dumbo flight; red proscenium; gilded mirror as portal | owner wanted denser, and doors |
| 04 | real portals: openings in the prints sample a live render of the room behind; six side rooms with two exits each; a pocket of three items; locked exits and a locked mirror; torn-paper crossings | current |

## How the doors work (study 04)

- A door is a print with a hole. Over the hole sits an ellipse whose shader samples a render target in screen space, so the view through it parallaxes like a real window. Each door owns a render target and a camera; only doors within nine units of the viewer are rendered each frame.
- Rooms are separate scenes. Inside one, the fall stops and the pointer looks around. Every room has exactly two exits: one drops you into the column deeper than you were, one goes sideways to another room. The sideways route is where the items are.
- Items go into a pocket that persists between visits. A locked exit shows a dim silhouette of what it wants. The mirror at the bottom wants the rabbit, who waits in the rocks room, behind the corridor door on the water floor.
- The choice, stated plainly: fall fast and arrive with nothing, or take the long way and arrive with the thing that opens the end.

Rule learned in 02: a portal has to be something the owner already knows. Never promote a background object to a door.

## Sources

- `study/assets/` (ignored): everything the page loads. Personal photos become `cutouts`, `prints`, `backdrops`; archive material is flagged `archive: true` in the manifest.
- `sources/` (ignored except `credits.json`): public-domain downloads from Wikimedia Commons, Library of Congress and NASA. Every file has source, author, license and page URL in `credits.json`.
- The Favorites album is pulled with `tools/prepare_favorites.py` from a local download; nothing from it is committed.

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
