# AI Assistance Log

This file documents prompts where AI assistance was used and summarizes resulting changes.

## 2026-06-10

### Entry 1
Prompt: Create a baseline repository .gitignore for a Vue + TypeScript project.

Response: Created the root `.gitignore` file.

### Entry 2
Prompt: Scaffold initial component files for CategoryFilter, CountdownTimer, RaceCard, and RaceList so I can implement the UI architecture.

Response: Created skeleton Vue components for the requested UI pieces.

### Entry 3
Prompt: Implement the races store for this application using Pinia. The store should fetch race data from the API, maintain race, loading, and error state, and expose the necessary state and actions to components. Reuse existing types and patterns from the codebase where possible, and explain any assumptions made.

Response: Implemented a Pinia store with typed race state, selected category state, and time state used for countdown/expiry behavior. Added actions for loading races, toggling categories, and ticking current time, plus a computed getter for filtering, sorting, and limiting races. Assumption: final app scope prioritizes race list behavior and category/time logic, so loading and error UI state were not retained in the final store implementation.

### Entry 4
Prompt: Set up a focused unit testing baseline for race filtering logic and card rendering behavior.

Response: Configured Vitest scripts and test config; added unit tests for store filtering/sorting/expiry/category toggle behavior and RaceCard category mapping/fallback behavior.

### Entry 5
Prompt: Review my Entain-inspired styling direction and help refine token usage, visual hierarchy, spacing rhythm, and responsive behavior while keeping custom CSS and semantic component structure.

Response: Assisted with iterative styling refinements in `src/style.css`, including brand-aligned design tokens, semantic class naming, interaction states, and responsive layout polish. Final styling decisions and implementation were reviewed and adjusted manually.

### Entry 6
Prompt: Improve submission documentation to clearly communicate requirements traceability, testing approach, styling rationale, and maintainability decisions.

Response: Expanded README with requirements traceability, architecture summary, run/test instructions, styling rationale, accessibility notes, code-quality notes, submission checklist, and AI usage disclosure.
