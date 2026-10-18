# Switch Tax

**Built:** 2026-10-18 · **Category:** business

**One-liner:** A time tracker that prices every context switch, so you can see what jumping between tasks really costs.

## What it does
Tap a task chip to start its timer; tapping another logs a switch. It shows time per task, switches per hour, and an estimated "refocus tax" with a plain-language verdict. Tasks are editable; the per-switch cost is adjustable.

## Why it matters
Time trackers tell you where hours went but not what fragmentation cost. Making the invisible cost visible nudges batching and deeper focus.

## How it works
State (tasks, per-task totals, switch count, current task) lives in localStorage. A 1s tick renders live elapsed time; switching banks the elapsed ms into the previous task. Tax = switches × minutes-per-switch.

## Technical notes
Single file, vanilla JS, no network. Works offline. Time accrues from timestamps, so backgrounded tabs stay accurate.

## Design notes
Brand kit (Prata/DM Sans, glass cards, single pink accent), dark-first with light toggle, 44px targets, visible focus, 375px-first.

## Inspiration
Product Hunt's time-tracking category (https://www.producthunt.com/categories/time-tracking) and Gloria Mark's UC Irvine research on ~23-minute refocus time after interruptions. (Live Product Hunt scan returned no usable current data tonight.)
