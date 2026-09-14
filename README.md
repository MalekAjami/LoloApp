# LoloApp

Offline-first flashcard trainer for vocabulary study.

## Current features (v1.3)

- English → Unité 1 with 119 cards
- FR → EN and EN → FR directions
- Study modes:
  - packs of 10, 20 or 30 cards
  - the whole unit
  - difficult cards ranked from the learner's error history
- A full-unit random order is created once per study cycle, then split into non-overlapping packs
- Pack navigation and next-pack flow
- Optional “Nouveau mélange de l’unité” starts a fresh randomized cycle
- `Je sais` / `Je ne sais pas` piles
- Retry only missed cards
- First-pass score kept separate from later mastery
- Unit-wide mastery progress
- Per-card error history saved locally and used for difficult-card review
- Sound, animation, streak and lightweight motivational feedback
- Keyboard controls: Space flips; ← / → answer after flipping
- Works directly from `index.html` via `file://` — no server required
- Progress stored locally when the browser permits localStorage

## Run

Unzip the folder and double-click `index.html`.

## Structure

- `src/data/` vocabulary catalog and units
- `src/logic.js` pure study/session logic
- `src/app.js` UI/state controller source
- `src/app.bundle.js` offline browser bundle loaded by `index.html`
- `tests/logic.test.mjs` unit tests for scoring, packs and difficult-card ranking

## Test

```bash
node tests/logic.test.mjs
```
