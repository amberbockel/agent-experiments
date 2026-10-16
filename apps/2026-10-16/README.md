# Pocket AI

**Built:** 2026-10-16
**Category:** trend
**One-liner:** Scan your device and see which on-device AI models you could actually run in the browser — live WebGPU + Gemma / LiteRT.js numbers, and nothing leaves your phone.

## What it does

Pocket AI reads the capability hints your browser already exposes — WebGPU adapter, device memory, CPU cores — and gives you a plain-language verdict on what on-device AI you could realistically run, then grades a curated set of current small models (Gemma 3 1B, Gemma 3n, Gemma 3 4B, Qwen3 0.6B, Gemma 3 12B) as **Runs / Tight / Too big / Needs WebGPU** for *your* hardware.

## Why it matters

As of mid-2026 this stopped being hypothetical. **LiteRT.js** runs genuine models in the browser over **WebGPU**, and **Gemma 3 1B** hits ~2,585 tokens/sec on a mobile GPU. That means private, offline, zero-cost-per-token inference on the device in your pocket — but whether it actually works depends on hardware most people can't eyeball. This makes the abstract shift concrete and personal: *can mine do it?*

## How it works

- **One tap to scan** — `navigator.gpu.requestAdapter()` for WebGPU, `deviceMemory` and `hardwareConcurrency` for headroom
- **Verdict tiers** — Edge powerhouse → Solid on-device → Lightweight capable → CPU only → Not yet
- **Per-model badges** — memory + WebGPU requirements checked against detected specs
- **Honest about privacy** — browsers cap/hide `deviceMemory`, so unknown values are estimated and labeled with an asterisk

## Technical notes

- Single self-contained `index.html`, no build step, no dependencies, no network calls
- All detection is client-side; nothing is sent anywhere
- `localStorage` caches the last scan
- Mobile-first, `dvh` + `env(safe-area-inset-*)` for notch/home-bar handling

## Design notes

Deep violet → teal gradient, a breathing gradient "orb" that spins during the scan, glassmorphic cards. Reads as a calm diagnostic, not a benchmark dump. Verdicts are intentionally a vibe check — approximate signals, framed honestly.

## Sources

- Google LiteRT + Gemini Nano on-device efficiency
- LiteRT.js — running models on-device with WebGPU (Jul 2026)
- Gemma 3 / Gemma 3n on-device model family
