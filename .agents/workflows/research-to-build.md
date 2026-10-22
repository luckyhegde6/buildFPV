# Research → Build → Verify Workflow

This is the standard workflow for nontrivial content, technical comparison, troubleshooting and visual-guide changes.

## Flow and gates

### Gate 0 — Sync and scope

- Read `AGENTS.md`, `HANDOFF.md`, `MEMORY.md`, relevant `SESSIONS.md` and the relevant TODO area.
- Fetch latest `main`; capture starting SHA.
- Identify the canonical source page, downstream links/assets, desired publication target, and acceptance criteria.
- Check whether an existing task/PR/branch is already in progress before creating parallel work.

### Gate 1 — Research Agent evidence

Deliver a structured brief with:
- User intent and question being answered.
- Current source content and exact gaps.
- Exact SKU/revision/firmware/mode/region as needed.
- Evidence ledger with primary URLs and date checked.
- Claim wording supported by each source, including units and test conditions.
- Conflicts, missing fields, confidence and explicit non-claims.
- Recommended page/table/diagram structure and acceptance criteria.

**Stop gate:** if a decision materially depends on missing primary evidence, label it unresolved. Do not ask Builder to invent a number or compatibility link.

### Gate 2 — Builder plan

Builder names:
- files to modify/create,
- sections/claims affected,
- links/navigation/assets to update,
- tests and evidence needed,
- expected diff and rollback risk.

For model/compatibility tables, ensure each row distinguishes exact model variant, receiver side, firmware/mode, voltage/power, weights/units, recording path and source. Not every field applies to every category; use “not stated in cited source” instead of an inference.

### Gate 3 — Implementation

- Edit canonical source files only; avoid redundant duplicate content.
- Place citations immediately beside technical claims and add dated official sources.
- Keep the main beginner path approachable; link advanced details instead of overwhelming initial pages.
- Add images/animations only when they clarify an actual concept. Register all assets and note provenance/limitations.
- Update sidebar/Home cross-links and keep wiki slugs consistent.
- Update TODO checkboxes only after the relevant implementation exists and was checked.

### Gate 4 — Independent QA

Research Agent or a separate reviewer checks:
- claimed specs against cited sources,
- model/SKU and firmware scope,
- safety and regional/legal caveats,
- contradictions and test-condition comparability,
- link targets/slugs, image paths/alt text, table columns and labels,
- no duplicated or stale content,
- asset registry, attribution and mobile legibility,
- handoff accuracy.

Use deterministic scripts for mechanically checkable rules. Visual claims require actual rendered evidence, not code inspection alone.

### Gate 5 — Commit and record

- Commit with a descriptive message; include a concise summary of what changed and why.
- Record the commit SHA and files in `SESSIONS.md`.
- Update `HANDOFF.md` with current state/next action.
- Update `MEMORY.md` only for knowledge that should survive many sessions.
- Leave unresolved tasks explicitly open in the TODO.

### Gate 6 — Wiki publication (separate from source commit)

1. Use the user-confirmed existing Wiki; do not initialize another one.
2. Fetch the actual Wiki branch and inspect its current Home/sidebar/history. Preserve Wiki-only edits and avoid destructive overwrite.
3. From a real network-enabled repository checkout, run:
   ```bash
   bash scripts/test-wiki-link-rewrite.sh
   bash scripts/publish-wiki.sh
   ```
4. Inspect `git diff --cached --check` and `git diff --cached`, especially stale pages, link rewriting, downloaded media, image localization and unrelated changes. Confirm the `PUBLISH` prompt only after review.
5. Verify the push via Wiki Git commit/remote result.
6. Use an approved browser automation tool (Playwright if available) to open the live Home page, sidebar, each changed page and all relevant media. Confirm HTTP/route success, visible headings/table rows, internal links, and loaded image/GIF results. Capture screenshots and note viewport size/browser when available.
7. Update the TODO only with each state supported by evidence: source committed, pushed, and browser verified are separate checkboxes.

If no authenticated browser or network-enabled Git path is available, stop at the blocked gate. Do not claim publishing or Playwright verification. Ask for the specific missing authorized connection only after completing independent repository work.
