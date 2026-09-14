# LoloApp

LoloApp is a lightweight flashcard trainer for vocabulary study, designed for students and especially suitable for short study sessions on desktop or mobile.

## Current features

- English → Unité 1 with 119 cards
- FR → EN and EN → FR directions
- Study packs of 10, 20 or 30 cards, or the whole unit
- One randomized full-unit cycle split into non-overlapping packs
- `Je sais` / `Je ne sais pas` card piles
- Retry only missed cards
- First-pass score kept separate from later mastery
- Unit-wide mastery progress
- Difficult-card review based on the learner's error history
- Sound, animation, streaks and lightweight motivational feedback
- Progress stored locally in the browser
- Responsive layout for desktop and mobile

## GitHub Pages

The repository root is ready to be published directly with GitHub Pages from the `main` branch and `/ (root)` folder.

## Main files

- `index.html` — application shell
- `src/runtime-data.js` — vocabulary, study logic, audio and feedback data
- `src/runtime-app-state.js` — application state and rendering
- `src/runtime-app-actions.js` — interactions and session actions
- `src/styles-1.css` … `src/styles-4.css` — responsive UI styles
- `assets/favicon.svg` — app icon

The app has no backend and does not require a build step to run on GitHub Pages.
