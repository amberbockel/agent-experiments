# Inbox Duty

**Built:** 2026-11-11 · **Category:** business

**One-liner:** Your AI agent has its own email address. Decide what it handles alone, what waits for a human, and what gets quarantined.

## What it does
Eight emails land in an agent's inbox. For each one you choose Handle it, Ask my human, or Quarantine (keys 1, 2, 3). After each call the real tell is highlighted and explained, including text hidden in a newsletter that is aimed at the AI. A "Show what the agent reads" toggle reveals that hidden text beforehand. The final report shows a count-up scorecard (calls right, money sent to the wrong place, private messages leaked), a 3x3 matrix of what each message deserved versus what you chose, and a message-by-message log. The agent's name is editable.

## Why it matters
Agents with their own inboxes are a live product category, and the failure modes are concrete: lookalike payment-change requests, gift-card scams, and prompt injection hidden in legitimate mail. The lesson is that email content is data, never instructions, and that authority comes from sender verification plus action limits.

## How it works
Single-file vanilla HTML/CSS/JS, no network, works offline. Each email carries a verification flag, an amount, and a correct action under a fixed policy (pay matched invoices under $250, refund under $50, edit the calendar; escalate over-limit, legal or irreversible; quarantine unverified money or secret requests and anything that gives orders to the AI). Scoring and the matrix are computed from your picks.

## Technical notes
System font stack, tabular numerals, prefers-reduced-motion and prefers-color-scheme respected, 44px+ targets, visible focus, keyboard play. On mobile the queue collapses to a segmented progress bar.

## Design notes
Direction: **clean-dashboard-dataviz**. Cool grey canvas, white panels, navy ink, and three semantic signal colors (green, amber, red) that mean the same thing everywhere: buttons, chips, matrix cells. It differs from the last six builds (monochrome type, organic, maximalist, dark, editorial, swiss) by being a data-first mail client with a heatmap as its centerpiece.

## Trend source
AgentMail (YC S25), an API that gives agents their own email inboxes, as listed in Launch YC / Hacker News launches, plus YC's current agent-infrastructure wave.
