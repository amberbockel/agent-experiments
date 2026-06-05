# OUTRUN ME — Amber's SL 🏎️🐶

**Category:** games · **Flagship**

A complete, mobile-friendly **pseudo-3D arcade racer** inspired by SEGA's 1986 *OutRun*, rendered
entirely on an HTML5 2D canvas with **vanilla JavaScript** — no frameworks, no image files, no
audio assets. Every pixel (road, sky, palms, the Boston skyline, the red 380SL convertible, the
driver, and the golden pup riding shotgun) is drawn procedurally, and the engine sound is
synthesized live with the Web Audio API.

> Drive the **Cape Cod coast** (Stage 1) and the **streets of Boston** (Stage 2). Hit every
> checkpoint to buy more time. Don't drive off the road. Plate reads **`5ADK 68`**.

## Why

The most technically ambitious build in the collection — proof that a full arcade driving engine
fits in one dependency-free file that runs great on a phone.

## How it works

- **Segment-buffer track** — each segment carries a far edge `p1` and near edge `p2` with
  `{world, camera, screen}` coords, plus `curve`, `color`, and roadside `sprites`.
- **Perspective projection** (`scale = cameraDepth / camera.z`) renders hills and curves with
  back-face culling, hill-occlusion clipping, and exponential fog.
- **Arcade physics** on a fixed 60 Hz timestep — accel / brake / coast, centrifugal pull through
  curves, off-road penalty, AI traffic with lane-change dodging + collisions, and checkpoints that
  grant bonus time.
- **Procedural art** — sunny beaches, palms, umbrellas, a lighthouse, the Boston skyline, the
  Charles River and a cable-stayed bridge, brownstones, taxis, VW Beetles, SUVs, and the player
  car + crew, all from vector draw commands. Two stages with distinct palettes and parallax
  backgrounds.

## Controls

| Action | Keyboard | Touch |
|---|---|---|
| Steer | ◀ / ▶ (or A / D) | left / right pads |
| Accelerate | ▲ (or W) | green ▲ pad |
| Brake | ▼ (or S) | red ▮ pad |
| Start / restart | Space / Enter | tap **PRESS START** |
| Engine audio | — | tap 🔊 (top-left) |

## One file, runs anywhere

`index.html` is the entire app — no build step, no dependencies. To publish it on its own repo +
GitHub Pages: drop this `index.html` at a new repo's root, push to `main`, then enable
**Settings → Pages → Deploy from a branch → `main` / root**. Live in ~60s.
