# Short Memory

**Built:** 2026-11-06 · **Category:** trend · **Design direction:** modern-editorial

**One-liner:** Shrink a small model's context window and watch which parts of a conversation it forgets.

## What it does
An 11-message planning chat sits next to six questions the assistant is asked at the end. A slider sets the context window size in tokens. Messages that fall out of the window grey out, and any question whose answer lived in a dropped message turns into a confident guess. Three strategies to cope: **Cut oldest** (plain truncation), **Summarize** (dropped messages become a short summary that costs tokens and keeps only major facts), and **Pin messages** (reserve window space for messages you choose). A "Show tokens" switch reveals the toy tokenizer's pieces. Reach 6/6 at a smaller window than the full chat to win.

## Why it matters
On-device small models (Gemma 3 1B / Google AI Edge with LiteRT, WebGPU runtimes) run with tight memory budgets, so context management is the main design problem of agent apps built on them. This makes the trade-off between truncating, summarizing and pinning something you can feel in a minute.

Trend source: Google AI Edge / LiteRT and Gemma on-device small-model coverage (e.g. Google Developers Blog, "Gemma 3 on mobile and web with Google AI Edge"). Live YC and Product Hunt pages were not reachable by the scan tonight.

## How it works
- Toy tokenizer: words split into chunks of up to five letters, punctuation as its own token.
- Window fit: newest-first suffix of messages that fits; summary mode reserves `0.32 × dropped tokens + 6` for the summary; pin mode reserves pinned tokens first.
- Recall: answer is correct if its source message is in the window, pinned, or (summary mode) is a major fact in the summary. Otherwise a plausible wrong guess is shown.
- Single file, vanilla JS, no network.

## Design notes
Modern-editorial: a large serif headline, serif lede and answers, a clean sans for interface text, cool paper background and a single ultramarine ink for "inside the window", with teal for summaries. The memorable element is the memory tape: one segment per message, sized by tokens, sliding from blue to grey as the window shrinks. It differs from recent builds (swiss-minimal, clean-dashboard-dataviz, soft-gradient-depth, organic-nature, monochrome-type-led, retro) by being type-led and explanatory rather than a dashboard or card UI. Reduced-motion respected; 44px targets; mobile-first.
