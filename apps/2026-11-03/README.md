# Card Rules

**Built:** 2026-11-03 · **Category:** trend

**One-liner:** Set the spending rules for an AI agent's virtual card, then watch it try to buy things all day.

## What it does
You write a policy for an agent's card: a daily budget, a per-purchase limit, an "ask me above" threshold, allowed categories, and whether new merchants are declined. Then you run a simulated day of 14 purchase attempts. Each one appears in a live authorization feed with the agent's own explanation and a decision: approved, declined with the reason, or held for you to approve or decline. Ten errands are real work; four are the agent being tricked (a web page demanding a gift card, an email telling it to buy ads, a "verification fee"). The end screen shows bad charges stopped, money leaked, and real errands finished.

## Why it matters
Agents now hold real money. The hard part is not blocking everything; it is a policy tight enough to stop the injected purchases but loose enough that real work finishes. The sim makes that tradeoff tangible in about a minute.

## How it works
Rules run in a fixed order: category, new merchant, per-purchase cap, remaining daily budget, ask threshold. Held purchases pause the day until you choose. Ground truth (real vs. bad) is hidden until the summary.

## Technical notes
Single HTML file, vanilla JS, no network or dependencies. Animated counters, spring easing, `prefers-reduced-motion` shortens waits and disables animation. Range inputs, switch and chips are keyboard accessible with 44px targets.

## Design notes
Direction: **soft-gradient-depth** (sea-glass teal, a glowing gradient card, frosted panels, soft colored shadows). It follows organic-nature, monochrome-type-led, retro, clay, riso and neo-brutalist; none of the last six used it. Archetype is a policy sandbox with a live feed, not a game or a calculator.

## Trend source
Y Combinator's Spring 2026 batch is heavy on agent infrastructure (cards, payments, identity, memory, sandboxes), e.g. Agentcard's virtual Visa for agents. See https://aiweekly.co/alerts/ycs-spring-2026-ships-4-mobile-apps-down-from-15-in-2013 and https://mikareyes.com/ai/yc-spring-2026-batch-trends.
