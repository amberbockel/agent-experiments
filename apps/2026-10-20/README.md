# Tripwire

**Built:** 2026-10-20 · **Category:** trend

**One-liner:** Paste an agent skill or prompt file and Tripwire flags injection, exfiltration, hidden characters and risky shell — all offline in your browser.

## What it does
Scans pasted text against ten heuristic checks (instruction overrides, secret access, outbound data sends, pipe-to-shell, destructive commands, secrecy requests, persistence, zero-width characters, hidden HTML comments, broad permissions). Shows a 0–100 risk ring, a verdict, and findings you can tap to jump to the offending line. Includes a suspicious and a clean sample.

## Why it matters
Agents increasingly install third-party skills and plugins, which makes them a supply-chain target. A scan that runs locally means you never upload a private prompt to check it.

## How it works
Each rule is a regex with a severity and weight. Matches are counted, the first hit's line is located, and weights (plus a small repeat bonus) sum to a capped score: under 15 is clear, 15–49 review, 50+ do not install.

## Technical notes
Single file, vanilla JS, no network, no storage beyond the theme preference (try/catch guarded). Heuristic only; it will miss obfuscation and can false-positive.

## Design notes
Brand kit tokens and glass cards; pink appears only on the score ring and high-severity findings once risk is detected. 44px targets, visible focus, reduced motion respected, built for 375px.

**Trend source:** Product Hunt launches such as ClawSecure ("AI-powered antivirus for AI agents") and the wave of agent-environment tools (Warp Open-Source, Kilo Code v7).
