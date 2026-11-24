# Deadletter Detective

**Built:** 2026-11-22
**Category:** Games
**One-liner:** A handwriting mystery. Work out each clue, write it in your clearest hand, photograph it, and the case only moves forward when your letters are readable. The reading happens on your device; no photo ever leaves it.

## What it does

Deadletter Detective turns neat handwriting into the way you crack a case. Each piece of evidence hands you a short word or phrase to recover: a stamped word to copy, a riddle to solve, scrambled letters to unscramble, the name painted on a boat, the name of a thief. You figure it out, write it on paper in your own hand, and snap a photo. On-device OCR reads your writing:

- **Clean letters** decode the clue, a green **DECODED** stamp slams down, and the story moves to the next piece of evidence.
- **Smudged letters** get a red **SMUDGED** stamp, and the lab tells you exactly which letters didn't come through so you know what to fix and rewrite.

There are two cases to solve (The Vanishing at Vellum Hall and The Smudged Canvas), each a five-clue trail that ends in naming the culprit.

## Why it matters

It was built for a specific 6th-grade reader who writes cleanly with numbers but struggles with letters and words, and who needed a reason to write neatly that wasn't "because I said so." Here the reason is baked into the mechanic: legibility is the win condition. The clue literally does not decode until a machine can read the word, which is the most honest feedback there is about handwriting. When a word fails, the game doesn't just buzz; it names the specific letters that blurred ("these letters didn't come through: A, G") so practice is targeted, not vague. The clues also push past numbers into spelling, riddles, and vocabulary, so reading, spelling, and penmanship all sit in one loop.

Because real handwriting OCR is imperfect, the game never hard-blocks a child who genuinely wrote clearly: when the read is close but uncertain, a "the detective can't be sure, you be the judge" step shows the photo next to the answer so the writer (or a parent) can pass it. That override only appears when the writing is close to the right word, so a plainly wrong answer can't be waved through.

## How it works

- **The loop:** read the clue, write the word on paper, tap "I've written it, scan my paper," and photograph it. The device reads it and stamps the verdict.
- **Clue types:** copy (a shown word, pure legibility), riddle, unscramble, a two-word hull name, and the suspect's name. Hidden-answer clues test spelling and legibility together; a "nudge" hint is one tap away.
- **Reading your writing:** the photo is converted to grayscale, contrast-corrected, and thresholded (Otsu, with automatic light-on-dark detection), then read with an on-device OCR engine. The recovered text is normalized and fuzzy-matched to the answer, so a single misread letter still passes while a wrong or unreadable word does not.
- **Scoring:** solving a clue cleanly on the first scan counts toward a per-case detective rating of one to three stars. Solved cases and the mute setting are saved on the device.

## Technical notes

Self-contained static app: one `index.html` (inline CSS and vanilla JavaScript) plus a vendored copy of [Tesseract.js](https://github.com/naptha/tesseract.js) (Apache-2.0) in `vendor/`. The OCR engine, its WebAssembly core, and the English language data are all served from this folder, so the app runs fully offline with no CDN and no network calls: a photographed word is read entirely on the device and never uploaded. The engine (the LSTM-only SIMD core, with a non-SIMD fallback) is lazy-loaded the first time you scan, behind a "warming up the lab" loader; the vendored payload is a few megabytes, which is the cost of real on-device reading with no server. Camera capture uses a native file input with `capture="environment"`, so it opens the camera on a phone and a file picker on a desktop. Motion (the stamp slam, the sweeping lens) is gated behind `prefers-reduced-motion`. Mobile-first, since it's a camera game, with large touch targets and safe-area insets.

## Design notes

**Visual direction: modern editorial noir.** A deep ink-navy desk lit from the corners, with evidence rendered as warm cream paper cards (manila folder, washi tape, a dashed evidence box) set in Georgia for a literary, old-document feel. Typewriter monospace carries the case-file chrome (stamps, labels, the CONFIDENTIAL mark and the DECODED / SMUDGED verdicts), and a single case-stamp red plus a brass accent do all the highlighting. The one deliberately bold moment is the verdict stamp that slams across the scanned photo; everything else stays quiet so the writing and the clue are what you look at. A red-string progress board of pinned dots tracks the trail. It is high-energy and characterful without any retro, arcade, or pixel treatment.

Built for a 6th-grade pilot who is learning to write letters and words as clearly as he writes numbers.
