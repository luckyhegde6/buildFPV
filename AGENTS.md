# Agent Instructions — buildFPV

These instructions apply to every agent, automation, and contributor working in this repository. Read this file before research, editing, publishing, or handing work to another agent.

## Mission

Maintain a beginner-first, evidence-led FPV learning project. Teach concepts clearly, help readers choose compatible hardware, and prefer safety, exact-model compatibility, and reproducible maintenance over speed or confident-sounding guesses.

## Source-of-truth map

- `README.md`: project entry point and navigation to the maintained learning path.
- `docs/LEARNING-GUIDE.md` and `docs/*.md`: primary repository learning sequence and core beginner guides.
- `docs/wiki-source/*.md`: canonical source pages for the separate live GitHub Wiki.
- `docs/assets/*`: project-owned diagrams and animations referenced by learning pages.
- `docs/assets/README.md`: asset index, context, provenance, and usage limitations.
- `docs/FPV-WIKI-EXPANSION-TODO.md`: implementation backlog; check a task only after the defined evidence/implementation gate is met.
- `docs/research/*`: dated research reports and evidence notes.
- `scripts/publish-wiki.sh`: reviewed publisher for the separate Wiki Git repository.
- `.agents/*`: role definitions, workflow, and templates.
- `HANDOFF.md`: actionable state for the next agent.
- `MEMORY.md`: durable project knowledge and standing constraints.
- `SESSIONS.md`: chronological record of decisions, flows, changes, and validation.

A source-repository commit is **not** proof that the separate GitHub Wiki has been updated. Live publication is complete only after the Wiki Git push and live-page verification are evidenced.

## Mandatory working rules

1. Start by reading this file, `HANDOFF.md`, the latest relevant section of `SESSIONS.md`, `MEMORY.md`, and the relevant TODO entry. Fetch the latest `main` state before editing; handoff notes are snapshots and can become stale.
2. Separate **verified manufacturer fact**, **observed project behaviour**, **inference**, and **recommendation**. State the model/SKU, hardware revision, firmware, region and date whenever they materially affect a claim.
3. For specifications and compatibility, prefer current manufacturer pages, manuals, release notes and official compatibility tables. Use retailer pages for package contents/pricing only when appropriate. Record conflicting claims instead of silently selecting one.
4. No invented prices, weights, voltage limits, receiver/goggle compatibility, test outcomes, legal requirements, commits, browser results, or publication results. If unavailable, say what is missing and how to verify it.
5. Preserve user-provided and existing project context. Keep learning-path pages and Wiki-source pages coherent, cross-linked, and consistent with actual filenames/extensionless Wiki slugs.
6. Technical illustrations are explanatory unless explicitly measured/dimensioned from the exact model drawing. Never present concept art as a wiring diagram, pinout, motor order, drill template, or safety certification. Preserve source attribution and licensing notes for external media.
7. For real-aircraft work, keep propellers removed for bench setup/motor tests; disconnect the battery before soldering or investigating a short; obey exact VTX antenna/cooling instructions; never advise use or charging of damaged/swollen packs.
8. Before marking a TODO checked, name what was changed and verify the file/source/test/output required by that item. “Created” is not the same as “tested”, and “committed to main” is not the same as “published to the Wiki”.
9. Run relevant deterministic checks when an execution environment exists. Report the exact command and actual result. If a tool/runtime limitation prevents a check, record it as blocked—not passed.
10. Use focused commits with descriptive messages. Do not erase user content, rewrite history, force-push, expose credentials, add secrets to files/logs, or bypass repository permission/protection rules.
11. For publishing the Wiki, inspect the existing Wiki and preserve intentional Wiki-only changes. Use `bash scripts/test-wiki-link-rewrite.sh`, then `bash scripts/publish-wiki.sh`; inspect the staged diff before confirming the publisher prompt. Afterwards, verify the actual live Wiki routes and media in a browser.
12. If browser automation is unavailable, request/connect an approved browser tool or record the blocker. Do not relabel a connector/API fetch as a Playwright run.
13. After meaningful work, update `HANDOFF.md`, append a dated entry to `SESSIONS.md`, update `MEMORY.md` only if durable knowledge changed, and revise the TODO. Ensure the updates do not contradict each other.

## Research-to-build coordination

Follow `.agents/workflows/research-to-build.md`. Research Agent owns evidence quality and uncertainty; Builder Agent owns implementation and deterministic validation; a separate QA pass checks links, tables, assets, safety, and the handoff. For multi-agent work, pass explicit paths, claims, sources, acceptance criteria, changed files, and unresolved questions—not just a narrative summary.

## Final status report

Every handoff should state:
- Current branch/commit and changed files.
- Research sources and what they support.
- Checks run and actual outcomes.
- Wiki publication state (source committed, push attempted, push confirmed, live-render verified—keep these as separate states).
- Remaining blockers and the single best next action.
