# AI Safety Inspector

**Category:** trend  
**Built:** 2026-06-07  
**One-liner:** Paste any AI-generated text and get instant analysis of hallucination markers, confidence signals, hedging patterns, and potential fabrications — learn to read AI output critically.

## What it does

AI models are getting better, but they still hallucinate, hedge, and make stuff up. This tool teaches you to spot the warning signs.

Paste any AI-generated response and get a breakdown of:
- **Hallucination markers** — specific facts that sound confident but might be wrong
- **Hedging language** — "possibly," "might," "could be" (good when present, red flag when absent on uncertain claims)
- **Confidence signals** — assertive phrasing that may not match certainty
- **Fabrication patterns** — overly specific details, citation-like structures without real citations
- **Safety score** — overall assessment of how critically you should verify this output

## Why it matters

As AI gets embedded everywhere (email drafts, research, code, creative work), the ability to critically evaluate AI output becomes essential. This tool builds that muscle.

Real use cases:
- Fact-checking research assistance
- Reviewing AI-drafted emails before sending
- Teaching students to verify AI homework help
- Auditing AI-generated content before publishing

## Design choices

**Visual language:** Clinical but approachable — think health app meets code review. Clean typography, color-coded risk levels (green/yellow/red), structured output.

**Interactions:**
1. Paste AI text into textarea
2. Instant live analysis as you type (debounced)
3. Expandable sections for each category
4. Copy analysis to clipboard for reference

**Mobile-first:** Large textarea, readable output, thumb-friendly expand/collapse.

## Technical notes

- Single HTML file, ~18KB
- Client-side pattern matching (no API calls)
- localStorage to save last analysis
- Regex + keyword matching for hallucination patterns
- Confidence scoring based on linguistic markers
- Dark mode support

## Example input

```
The Treaty of Versailles was signed on June 28, 1919, in the Hall of Mirrors at the Palace of Versailles. The treaty consisted of exactly 440 articles and was signed by 32 countries. The German delegation was led by Hermann Müller, who arrived at 3:15 PM that day. The signing ceremony lasted exactly 4 hours and 23 minutes.
```

**Analysis would flag:**
- ✅ Date is accurate
- ⚠️ "Exactly 440 articles" — overly specific, verify
- ⚠️ "32 countries" — specific number without hedge, verify
- ⚠️ "3:15 PM" — suspiciously precise timing
- 🚨 "exactly 4 hours and 23 minutes" — fabricated precision, very unlikely to be true

**Safety score:** Medium-High Risk — contains accurate facts mixed with likely fabrications presented with equal confidence.
