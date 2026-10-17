# Quiet Notes

**Built:** 2026-10-17 · **Category:** productivity

**One-liner:** Paste a meeting transcript and get action items, decisions and open questions — no bot, no upload, all in your browser.

## What it does
Parses "Name: text" transcripts and extracts action items (with owner and due date), decisions, unanswered questions, notable numbers and per-speaker talk share. Checkable action list and one-tap Markdown copy.

## Why it matters
AI notetakers are everywhere, and so is the backlash against bots silently joining calls. Quiet Notes shows how far purely local, deterministic extraction gets you with zero data leaving the device.

## How it works
Turns are split by speaker, then sentences are matched against commitment ("I'll", "can you", "need to"), decision ("let's go with", "agreed", "decided") and question patterns. Owners come from the speaker or the addressed name; due dates from a date/weekday regex, including replies like "Will do, by EOD Thursday."

## Technical notes
Single HTML file, vanilla JS, no network calls, works offline. Heuristics are English-only and rule-based (no model); an on-device LLM (Gemma/LiteRT) could replace the extractor.

## Design notes
Built on the amberbockel brand kit: glass card surfaces, a single pink accent for due dates and talk bars, 44px targets, dark-first with light toggle, reduced-motion respected.

## Inspiration
Bot-free notetaker trend: Wispr Flow's live notetaker (Aug 2026, AInauten News), Google Meet in-person notes, Granola / Fathom bot-free modes — https://wisprflow.ai/notetaker/best-ai-note-takers
