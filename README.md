# Entain Technical Task - Next To Go Races

Single page Vue application that displays the next races from the Neds API.

## Requirements Checklist

This section maps each task requirement to the implemented solution.

- Use Vue.js framework: Implemented with Vue 3 + TypeScript + Vite.
- Use Neds API to fetch races: Implemented in `src/services/nedsApi.ts`.
- Show 5 races at all times: Implemented with `.slice(0, 5)` in `src/stores/races.ts`.
- Sort by advertised start ascending: Implemented in `filteredRaces` getter in `src/stores/races.ts`.
- Remove race 1 min past start: Implemented with `start + 60_000 > now` in `src/stores/races.ts`.
- Display meeting name, race number, countdown: Implemented in `src/components/RaceCard.vue` and `src/components/CountdownTimer.vue`.
- Category toggle filtering: Implemented in `src/components/CategoryFilter.vue` + `toggleCategory` in `src/stores/races.ts`.
- Use provided category IDs: Implemented in store defaults and category filter options.

## Features

- Shows 5 races at all times (when available), sorted by advertised start ascending.
- Removes races once they are more than 1 minute past advertised start.
- Displays meeting name, race number, category, and a live countdown.
- Category filtering for:
	- Greyhound racing (`9daef0d7-bf3c-4f50-921d-8e818c60fe61`)
	- Harness racing (`161d9be2-e909-4326-8c2c-35ed71fb460b`)
	- Horse racing (`4a2788f8-e825-4d36-9894-efd4baf1cfae`)

## Tech Stack

- Vue 3
- TypeScript
- Vite
- Pinia (global state)
- Vitest + Vue Test Utils
- CSS with centralized design tokens in `src/style.css`

## Architecture Summary

- API layer: `src/services/nedsApi.ts`
	- Fetches next races from Neds API.
- State layer: `src/stores/races.ts`
	- Holds canonical races list, selected categories, and current time.
	- Computes filtered/sorted/trimmed race list via getter.
- UI layer:
	- `src/components/CategoryFilter.vue`
	- `src/components/RaceList.vue`
	- `src/components/RaceCard.vue`
	- `src/components/CountdownTimer.vue`

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Build production bundle:

```bash
npm run build
```

## Testing Instructions

Run all tests:

```bash
npm run test:run
```

Watch mode:

```bash
npm run test
```

Current coverage includes:

- Store filtering, sorting, race limit, category toggling, and time-boundary edge cases.
- Race card category mapping and fallback behavior.

## Styling Approach

Styling is implemented manually with reusable CSS architecture.

### Design Tokens

Global tokens are defined in `src/style.css` and used across components:

- Brand colors:
	- Magenta accent: `#CC00CC`
	- CTA magenta: `#CC00FF`
	- Deep purple: `#6600CC`
- Text:
	- Heading: `#1A1A1A`
	- Body: `#333333`
- Surface, borders, and shadows for consistent card depth and spacing rhythm.
- Typography stack centered on Inter with geometric sans fallbacks.

### Component Styling Practices

- Semantic class names (`race-card`, `category-filter__button`, `countdown-timer`) for maintainability.
- Responsive layout and spacing using media queries.
- Explicit interaction styles (`hover`, `focus-visible`, active/inactive states).
- Countdown has a live state style when race start is reached.

## Accessibility Notes

- Category controls are real `<button>` elements.
- Filter section has `aria-label`.
- Race list uses `aria-live="polite"` to communicate updates.
- Focus-visible styling is included for keyboard navigation.


## AI Usage Disclosure

AI assistance was used during development for scaffolding, refactors, and documentation drafting.
All generated output was reviewed, corrected, and validated manually.

Log of AI-assisted steps is available in `ai-log.md`.

## Submission Checklist

- Functional requirements implemented.
- Styling requirements implemented with custom CSS.
- Unit tests included and passing.
- README includes setup, testing, architecture, and design notes.
- AI usage is disclosed transparently.