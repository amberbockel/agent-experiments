# Prompt Builder

**Category:** Trend (AI Tools)  
**Built:** 2026-06-10  
**One-liner:** Answer 5 questions → get a tool-optimized AI prompt. Stop guessing what to write — build better prompts in 60 seconds.

---

## What It Is

A **prompt engineering assistant** that asks clarifying questions and generates tool-optimized prompts for OpenAI, Claude, Codex, Antigravity, and OpenClaw.

**Problem:** Users type vague prompts ("write a blog post") and get mediocre results. They don't know what details to include or how to structure for their specific tool.

**Solution:** Answer 5 questions → copy optimized prompt → paste in your AI tool → get better results.

---

## How It Works

### 5 Questions

**1. What do you want to accomplish?**
- Be specific: "Write a blog post" → "Write an 800-word blog post explaining React hooks"

**2. Which AI tool are you using?**
- ChatGPT/OpenAI
- Claude (Anthropic)
- Codex/Claude Code
- Antigravity/Relay
- OpenClaw (Telegram/Discord)

**3. What role should the AI play?**
- Examples: "Senior software engineer", "Professional editor", "UX researcher"

**4. Any constraints or requirements?**
- Word limits, tone, format, dependencies, rules to follow

**5. What output format do you want?**
- Markdown (blog posts, docs)
- JSON (structured data)
- Code (with diffs)
- Bullet points (lists, summaries)
- Prose (essays, articles)

### Generate Button
- Creates tool-optimized prompt
- Shows in copy-able code block
- One-tap copy to clipboard

---

## Tool-Specific Optimization

### OpenAI (ChatGPT)
**Pattern:** Role → Task → Constraints → Format

```
You are a [role].

Task: [specific task]

Constraints:
- [requirement 1]
- [requirement 2]

Output format: [format]

Please proceed with the task above.
```

**Why:** OpenAI models respond well to clear role definition and explicit structure.

---

### Claude (Anthropic)
**Pattern:** Role → XML tags for structure

```
You are a [role].

<task>
[specific task]
</task>

<constraints>
- [requirement 1]
- [requirement 2]
</constraints>

<output_format>
[format]
</output_format>

Please complete the task above.
```

**Why:** Claude is trained to recognize XML tags for structured inputs.

---

### Codex/Claude Code
**Pattern:** Role → Task → Requirements → Output (diffs)

```
You are a [role].

Task: [coding task]

Requirements:
- [requirement 1]
- [requirement 2]

Output: [format]

Provide diffs only (not full files).

Please proceed.
```

**Why:** Coding agents benefit from explicit tech stack context and diff requests.

---

### Antigravity/Relay
**Pattern:** System → Goal → Decision authority → Success criteria

```
System: [role]

Goal: [task]

Constraints:
- [requirement 1]
- [requirement 2]

Output format: [format]

Decision authority:
- Proceed if goal is clear
- Ask if ambiguous or risky

Success criteria: [User to define based on goal]
```

**Why:** Amber's agent systems need clear decision authority boundaries.

---

### OpenClaw (Telegram/Discord)
**Pattern:** Direct request → assume context

```
[task]

Act as: [role]

Constraints:
- [requirement 1]
- [requirement 2]

Output: [format]

Write files to workspace. Commit and push when done.

Reference existing files in workspace when relevant.
```

**Why:** OpenClaw agents have workspace context (MEMORY.md, files) — no need to re-explain.

---

## Why It Works

✅ **Teaches structure** — see what good prompts look like  
✅ **Tool-optimized** — different tools need different patterns  
✅ **Fast** — 60 seconds to generate  
✅ **Actionable** — copy/paste immediately  
✅ **Educational** — learn prompt engineering through examples  

---

## Design Notes

**Aesthetic:** Purple gradient, clean form, dark code output

**Color palette:**
- Background: `#667eea` → `#764ba2` (purple gradient)
- Form: White cards with soft shadows
- Output: `#1C1C1E` (dark code block)
- Accent: `#00FFB3` (green for labels)

**Typography:**
- Form labels: 17px bold
- Code output: SF Mono, 14px
- Hints: 14px, gray

**Interaction:**
- Progressive validation (button disabled until all required fields filled)
- One-tap copy (button shows "Copied!" feedback)
- Start over resets form

---

## Technical Stack

- **Single file:** `index.html` (~12KB)
- **No dependencies:** Vanilla JS
- **Mobile-optimized:** Large inputs, safe-area-inset
- **Offline-ready:** No API calls, fully local

---

## Research Sources

**OpenAI Prompt Engineering Guide:**
- Use `developer` role for instructions, `user` for input
- Front-load important info (models attend to start/end)

**Anthropic Claude Cookbooks:**
- XML tags for structured inputs (`<task>`, `<constraints>`)
- Put long context in middle (attend to edges)

**User Friction Signals:**
> "I spend 20 minutes tweaking a prompt, not knowing if version 3 was better than version 1."  
> — r/ChatGPT, 2026-05

---

## Example: Blog Post Prompt

**User input:**
- Goal: "Write a blog post explaining React hooks"
- Tool: Claude
- Role: "Professional tech blogger"
- Constraints: "800 words, conversational tone, include code examples"
- Format: Markdown

**Generated prompt:**
```
You are a Professional tech blogger.

<task>
Write a blog post explaining React hooks
</task>

<constraints>
- 800 words
- conversational tone
- include code examples
</constraints>

<output_format>
Markdown with headers, lists, and code blocks
</output_format>

Please complete the task above.
```

**Result:** User copies → pastes in Claude → gets structured 800-word post with code examples in conversational tone.

---

## Future Ideas

- **Token counter** — show estimated token count + cost
- **Example library** — save/load favorite prompts
- **A/B testing** — generate 2 variations for comparison
- **Prompt history** — localStorage for recent builds
- **Custom tools** — let users add their own tool templates
- **Export formats** — download as .txt or .md

---

## Why Perfect for Experiments

✅ **Solves real pain** — vague prompts → bad results  
✅ **Educational** — teaches prompt craft  
✅ **Tool-agnostic** — works with any AI tool  
✅ **2-hour build** — clean form + template logic  
✅ **High reuse** — users come back to build new prompts  

---

## User Quotes (Inspiration)

> "I don't need to understand temperature sliders. I need to write better prompts."  
> — ChatGPT user, 2026-06

> "I see amazing AI outputs but can't figure out the prompts. It's like seeing magic tricks with no explanation."  
> — r/ChatGPT, 2026-05

> "Most people fail at AI because they don't know how to ask. This fixes that."  
> — Product Hunt comment, 2026-06

This tool teaches users how to ask. 🎯
