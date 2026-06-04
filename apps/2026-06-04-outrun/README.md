# OUTRUN ME — Amber's SL 🏎️🐶

**Category:** games · **Date:** 2026-06-04 · **Flagship**

A pseudo-3D arcade racer inspired by SEGA's 1986 *OutRun*, built as a single, mobile-friendly
`index.html` with vanilla JavaScript and an HTML5 2D canvas. No frameworks, no image files, no
audio assets — every pixel is drawn procedurally and the engine sound is synthesized with the
Web Audio API.

## What it is

Amber cruises in a red Mercedes **380SL convertible** (plate `5ADK 68`) with the golden pup
riding shotgun, ears flapping in the wind. Beat the clock across two stages — **Cape Cod coast**
and **the streets of Boston** — where every checkpoint buys bonus time.

## Why

A love-letter flagship: the most technically ambitious build in the collection, proving a full
arcade driving engine fits in one dependency-free file that runs great on a phone.

## How it works

- **Segment-buffer track engine** — each segment stores a far edge (`p1`) and near edge (`p2`)
  with `{world, camera, screen}` coords, plus `curve`, `color`, and roadside `sprites`.
- **Perspective projection** (`scale = cameraDepth / camera.z`) renders hills and curves with
  back-face culling, hill occlusion, and exponential fog.
- **Arcade physics** — accel / brake / coast, centrifugal pull through curves, off-road penalty,
  AI traffic with lane-change dodging and collisions — all on a fixed 60 Hz timestep.
- **Procedural art** — sunny beaches, palms, umbrellas, a lighthouse, the Boston skyline, the
  Charles River and a cable-stayed bridge, brownstones, taxis, VW Beetles, SUVs, and the player
  car + crew, all from vector draw commands.

## Controls

- **Keys:** ◀ ▶ steer · ▲ gas · ▼ brake · Space to start/restart
- **Mobile:** on-screen steering + pedal pads · tap 🔊 for engine audio

## Standalone

A repo-ready copy lives at [`/outrun-me`](../../outrun-me/) — one file you can drop into any new
repository and publish on GitHub Pages.
