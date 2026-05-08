# Weekly Review Template

**Category:** Productivity  
**Date:** 2026-05-08  
**One-liner:** A structured weekly review ritual — reflect on wins, learnings, and what's next with a mobile-first checklist that saves your progress locally.

## The job

Help people run a consistent weekly review without overthinking the format. Inspired by GTD and bullet journal methods, this gives you a clean template to:

- Celebrate wins from the past week
- Capture key learnings or insights
- Note tasks to carry forward
- Set intentions for the week ahead

All entries save to localStorage so you can pick up mid-review and reference past weeks.

## Who it's for

- Amber (running 4 businesses + creative work)
- Substack readers who care about systems
- Anyone who wants a weekly review habit but finds blank journals intimidating

## Design decisions

**Visual:** Flat iOS default (system fonts, generous whitespace, soft corners, iOS blue accent). Nothing brand-specific here — just a clean, calm tool.

**Flow:** One screen, four sections, autosave on blur. A small "Past Reviews" button at the bottom lets you glance at previous weeks.

**Mobile-first:** Designed for Thursday night on the couch with your phone.

## Constraints met

- Single `index.html`, no build
- ~18KB total
- Inline CSS + JS
- localStorage for persistence
- iOS notch-safe
