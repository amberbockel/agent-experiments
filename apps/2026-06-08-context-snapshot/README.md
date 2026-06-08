# Context Snapshot

**Category:** Productivity  
**Built:** 2026-06-08  
**One-liner:** Save your mental state before interruptions — one-tap context snapshots with quick notes, so you never lose your place when Slack pings.

---

## What It Is

A **micro-tool for context recovery** when interruptions break your flow. Before you context-switch (Slack, email, meeting), tap "Capture Context" with a quick note. When you return, tap "Resume Context" to remember what you were doing.

**Core mechanic:** Tap → type quick note → save → get interrupted → come back → resume from snapshot.

---

## The Problem It Solves

**"Context Loss in Tab Switching"** — Developers and knowledge workers lose mental state when interrupted:

> "I wish there was a tool that just showed me what I was working on before I got interrupted. Not a full task manager, just context recovery."  
> — X (Twitter), 2026-05-28

**Examples of friction:**
- Slack notification → tab switch → forget original task
- GitHub PR review → 10 tabs open → lose review thread  
- Deep work → meeting → return to desk → "what was I doing?"

**Context Snapshot's solution:**
- ✅ **One-tap capture** — save mental state in <10 seconds
- ✅ **Quick notes** — freeform text, no required fields
- ✅ **Resume from anywhere** — snapshots persist across sessions
- ✅ **Local-first** — no cloud sync, no login, privacy-safe

---

## How to Use

### Basic Flow

1. **Before interruption:** Tap "Capture Context"
2. **Type quick note:** "Reviewing PR #234, auth bug line 156"
3. **Save snapshot** → go handle the interruption
4. **After interruption:** Open app, tap "View Snapshots"
5. **Resume context** → see your note, return to work

### Use Cases

**Developer workflow:**
- Save: "Debugging login flow, suspect JWT expiration issue"
- Resume: Pick up exactly where you left off

**Writing/research:**
- Save: "Outlining intro section, need to add stats on AI adoption"
- Resume: Jump back into writing flow

**Deep work sessions:**
- Save: "Halfway through Figma mockup for checkout page"
- Resume: Return to exact mental state

**Meeting prep:**
- Save: "Reading background docs for 2pm strategy call"
- Resume: Quick refresh before meeting

---

## Features

### Capture
- **Quick note field** — freeform text, no structure required
- **Auto-timestamp** — saves exact time of capture
- **No required fields** — can save with empty note if rushed

### View
- **Chronological list** — newest first
- **Relative timestamps** — "5m ago", "2h ago", "Yesterday"
- **Full timestamps** — hover/tap for exact time
- **Search/filter** — (future: filter by date, keyword)

### Resume
- **One-tap restore** — alert shows your note + timestamp
- **Delete old snapshots** — clean up when context is stale
- **Stats tracking** — total snapshots, today's count

---

## Design Notes

**Aesthetic:** Purple gradient, clean cards, minimal friction

**Color palette:**
- Background: `#667eea` → `#764ba2` (purple gradient)
- Cards: White with subtle shadows
- Primary button: Purple gradient
- Secondary button: Light gray

**Typography:**
- Header: 32px bold
- Snapshot notes: 14px, readable line-height
- Timestamps: 13px, purple accent

**Layout:**
- **Main screen:** Capture + View buttons (large tap targets)
- **Capture form:** Single textarea, no clutter
- **Snapshot list:** Card-based, swipe-friendly

---

## Technical Stack

- **Single file:** `index.html` (~11KB)
- **No dependencies:** Vanilla JS, localStorage
- **Mobile-optimized:** Large buttons, safe-area-inset
- **Offline-ready:** No API calls, fully local

---

## Why It Works

✅ **Faster than task managers** — no projects, no tags, no due dates  
✅ **Lower friction than notes apps** — one button, one field  
✅ **More reliable than memory** — you won't forget what you wrote  
✅ **Privacy-safe** — all data stays local  

---

## Future Ideas

- **Browser extension** — auto-capture open tabs + active file
- **Keyboard shortcut** — Cmd+Shift+S to capture instantly
- **Smart suggestions** — "You were reviewing PR #234" (from browser history)
- **Context restoration** — open saved tabs automatically
- **Categories** — tag snapshots (code, writing, research)
- **Daily digest** — "You captured 7 contexts today, here's what you worked on"

---

## Comparison to Alternatives

| Tool | Capture Time | Resume UX | Privacy |
|------|--------------|-----------|---------|
| **Context Snapshot** | <10 sec | One tap | Local-only |
| Task manager (Todoist) | ~30 sec | Navigate projects | Cloud sync |
| Notes app (Apple Notes) | ~20 sec | Search notes | Cloud sync |
| Memory | 0 sec | Unreliable | Perfect |

Context Snapshot is **faster than task managers, more reliable than memory.**

---

## User Quotes (Inspiration)

> "I built this because I was tired of opening 15 tabs every morning just to check the same 5 dashboards."  
> — r/SideProject, 2026-05-20

> "Slack notification → tab switch → forget original task. Every. Single. Day."  
> — Developer on X, 2026-05-28

> "I don't need a full task manager. I just need to remember what I was doing before the meeting."  
> — r/vibecoding, 2026-06-01

This is the tool they wished existed. 📸

---

## Inspiration

- **Tab session managers** (OneTab, Session Buddy) — save/restore browser state
- **Context switchers** (Workspaces, Notion databases) — too heavyweight
- **Quick capture tools** (Drafts, Scratch) — right spirit, wrong UI
- **Mental bookmarks** — what developers actually need

Context Snapshot is the **simplest possible context recovery tool.**
