# Per Outcome

**Built:** 2026-11-05
**Category:** business
**One-liner:** Price an AI agent by seat, by ticket or by outcome, and watch which customers sign.

## What it does
You sell an AI agent into three markets (support desk, sales ops, claims). In each round you pick a pricing model, drag a price, and six fictional customers either sign or pass. Bars show the highest price each will accept, and a live profit counter shows what you keep after paying to serve every ticket. Lock in a price and you are scored against the best possible model and price for that market.

## Why it matters
Outcome-based pricing, where the vendor charges only when the agent resolves the task, is the live pricing debate in AI agent companies. The app shows why no model wins everywhere: it depends on agent reliability, deal size and how much buyers fear paying for failure.

## How it works
Each customer has seats, monthly tickets, an agent resolve rate, value per resolved ticket and risk aversion. Their maximum price per model is derived from perceived value (seat fees carry performance risk, per-ticket fees pay for misses, per-outcome fees carry a small metering friction). Your profit is the bill minus serving cost on every ticket. The optimum is found by scanning every model and price step.

## Technical notes
Single self-contained HTML file, vanilla JS, no network or external dependencies. Animated counters, keyboard-operable radiogroup and slider, 44px+ targets, reduced-motion respected, safe-area insets.

## Design notes
Direction: **swiss-minimal**. Pure white, black rules, a single ultramarine, Helvetica set tight and huge, strict grid, no cards or shadows beyond one button. It differs from the last six builds (dashboard, gradient depth, organic, mono type, retro, clay). Dark mode inverts it.

## Trend source
Outcome-based pricing for AI agents (per-resolution models popularised by support-agent vendors). The live YC and Product Hunt scan was blocked by the sandbox network, so this ties to the broader agent-pricing trend rather than one specific launch.
