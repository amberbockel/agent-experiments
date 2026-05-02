# How AI Actually Works — A Class for Middle Schoolers

**Built:** 2026-05-02
**Live:** https://amberbockel.github.io/agent-experiments/apps/2026-05-02/
**Category:** Delightful (educational)
**Length:** 30–45 minutes
**Audience:** Middle school students (grades 6–8)

---

## One-liner
A 7-slide interactive class that teaches kids how Large Language Models actually work — using a fill-in-the-blank game, four jargon-busting vocab cards, an AI lie-detector quiz, and a real LLM running in their browser.

## The problem
Most AI lessons for kids are either too technical (transformer architecture diagrams) or too vague ("AI is the future!"). Neither helps a 12-year-old understand what's *actually happening* when they ask ChatGPT a question. The "AI is a probability machine" insight is the unlock — and almost no curriculum builds toward it.

## The solution
Seven slides, structured as a real class, with three interactive activities that build toward the same insight from different angles:

1. **Title slide** — what we'll do (sets the contract)
2. **Fill-in-the-blank** — class plays a guessing game; reveals AI does the same thing
3. **Vocab cards** — flip-able cards translating Token / Training / Parameters / Hallucination into kid language
4. **Probability viz** — animated bar chart showing how AI ranks possible next words ("The cat sat on the ___")
5. **AI Lie Detector** — 5-question quiz where kids vote True / Lie / Unsure on real-looking AI responses, then learn which were hallucinations
6. **Try a real AI** — loads Llama-3.2-1B in the browser via WebLLM (~1GB, runs offline once cached) with canned-response fallback for older devices
7. **Takeaway** — the 3 things AI is good at, the 3 things it's bad at, the 3 rules of using AI, and a take-home question

## How it works
- Tap-to-advance navigation with progress dots (jump-to-slide enabled)
- All activities save state in-memory so kids can replay
- Fill-in-the-blank: "Reveal next" or "Reveal all" — last sentence ("a purple ___") deliberately has no consensus answer so the class feels how AI guesses
- Vocab cards flip on tap to show the real explanation
- Lie Detector tracks score across 5 questions, gives a final tally
- Real LLM via [WebLLM](https://github.com/mlc-ai/web-llm) — uses WebGPU when available, falls back to a 5-prompt canned demo on devices that don't support it
- All canned responses pre-tuned to teach the lesson (correct answers AND deliberate hallucinations)

## Why this matters for Amber's family
- Teaches Zev (and his classmates if you ever bring this to a school) the most important AI literacy concept: probability, not knowledge
- Useful at home as a 30-min "Saturday morning explainer" for any kid encountering AI for the first time
- Could be classroom material for a teacher friend — works on a projector or hand-the-phone-around format

## Technical notes
- Pure HTML/CSS/JS, single file, no framework
- WebLLM via ESM CDN (esm.run) — falls back gracefully if WebGPU unavailable
- 30+ KB before the model load
- Mobile-first; optimized for projection (large fonts, big tap targets, high contrast)
- Dark theme by default — easier on eyes in classroom dim
- All animations respect `prefers-reduced-motion`
- WebGPU model: Llama-3.2-1B-Instruct-q4f32_1 (~1GB, ~30s first-token latency on M1 Mac, ~10s subsequent)

## Limitations
- WebLLM requires WebGPU (Chrome 113+, Safari 18+, all M-series Macs, newer Android phones). Older devices fall back to canned demo automatically.
- First model load downloads ~1GB. Persists in browser cache, so subsequent loads are instant.
- Llama-3.2-1B is small and **will** hallucinate freely — which is actually a feature for this lesson, not a bug. Kids see the failure modes live.
- No teacher dashboard / class progress tracking. This is a lesson, not an LMS.

## Next steps (if loved)
- [ ] Teacher's guide PDF with discussion prompts and slide-by-slide notes
- [ ] More activities: "What was the AI trained on?", "Tell it your name and watch what it does"
- [ ] Spanish + simplified English translations
- [ ] Print-it-out worksheet companion for offline classrooms
- [ ] Variants for elementary (simpler) and high school (deeper)

## Questions for Amber
1. Bring it to Zev's school as a PTO offering?
2. Want a parent's-night version with adult-targeted examples?
3. Specific local references to add (his teacher's name, Concord landmarks) — would make the Lie Detector hit harder
