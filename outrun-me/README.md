# OUTRUN ME — Amber's SL 🏎️🐶

A self-contained, mobile-friendly **pseudo-3D arcade racer** inspired by SEGA's 1986 *OutRun*,
rendered entirely on a 2D HTML5 canvas with **vanilla JavaScript** — no frameworks, no image
files, no audio assets. Everything (road, sky, palms, skyline, the red 380SL convertible, the
driver, and the golden pup riding shotgun) is drawn procedurally with vector commands, and the
engine sound is synthesized live with the Web Audio API.

> Drive the **Cape Cod coast** (Stage 1) and the **streets of Boston** (Stage 2). Hit every
> checkpoint to buy more time. Don't drive off the road. Plate reads **`5ADK 68`**.

## This whole game is ONE file

`index.html` is the entire app. That's the point — you can drop it anywhere static.

## Put it on its own repo + GitHub Pages (≈2 minutes)

1. Create a new repository on GitHub (e.g. `outrun-me`).
2. Add **this folder's `index.html`** to the repo root and push to `main`.
3. Repo → **Settings → Pages** → *Source:* **Deploy from a branch** → branch `main`, folder `/ (root)` → **Save**.
4. Wait ~60s. Your game is live at `https://<your-user>.github.io/outrun-me/`.

CLI version:

```bash
git init outrun-me && cd outrun-me
cp /path/to/index.html .
git add index.html && git commit -m "OUTRUN ME"
git branch -M main
git remote add origin git@github.com:<your-user>/outrun-me.git
git push -u origin main
# then enable Pages in repo Settings
```

## Controls

| Action | Keyboard | Touch |
|---|---|---|
| Steer | ◀ / ▶ (or A / D) | left / right pads |
| Accelerate | ▲ (or W) | green ▲ pad |
| Brake | ▼ (or S) | red ▮ pad |
| Start / restart | Space / Enter | tap **PRESS START** |
| Engine audio | — | tap 🔊 (top-left) |

## How the engine works

- **Segment buffer** — the track is an array of segments, each with a back edge (`p1`) and front
  edge (`p2`) carrying `{world, camera, screen}` coordinates plus `curve`, `color`, and `sprites`.
- **Perspective projection** — `screen = cameraDepth / camera.z` scales world → screen for the
  classic "road rushing toward you" effect, including hills (segment `y`) and curves.
- **Physics** — acceleration / braking / coast-down, centrifugal pull through curves, and an
  off-road penalty, all on a fixed 60 Hz timestep.
- **Rendering** — near→far road polygons (rumble strips, double-yellow + dashed lane markings,
  exponential fog), then far→near procedural billboards and AI traffic with hill occlusion
  clipping, then the player car, then the HUD.
- **Two stages** with distinct palettes and procedurally-drawn parallax backgrounds (beach +
  headland + lighthouse for Cape Cod; skyline + Charles River + cable-stayed bridge for Boston).

No build step. No dependencies. Just open `index.html`.
