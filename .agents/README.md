# Agent framework for buildFPV

Read the root `AGENTS.md` first. This folder describes the working roles and their handshake.

## Roles

- `research-agent.md`: evidence gathering, model/version specificity, source confidence, discrepancy handling, date-sensitive checks and research briefs.
- `builder-agent.md`: source-of-truth navigation, scoped implementation, diagrams/assets, cross-link maintenance, deterministic checks and builder reports.
- `workflows/research-to-build.md`: the end-to-end handoff and quality gates.
- `templates/research-brief.md`: reusable evidence package for a builder.
- `templates/session-entry.md`: reusable append-only session record.

## Separation of duties

Research Agent should normally not make production content edits while the claim/evidence set is being assembled. Builder Agent should not invent missing evidence or silently “repair” uncertain specs. Builder may make safe editorial changes where evidence is already in the repository, but material product/legal/compatibility claims require a cited evidence trail. A reviewer/QA pass (which may be a third agent or a dedicated pass by another agent) checks the output against the brief and project rules.

## Required handshake

1. Research Agent delivers a brief containing the task, source URLs, exact models/versions, supported claims, caveats, unresolved conflicts and acceptance criteria.
2. Builder Agent acknowledges the brief, names target source files, creates a small implementation plan and keeps source links near the claims.
3. Builder runs the relevant source-level checks; reviewer checks safety, citations, cross-links, tables, assets and no unsupported claims.
4. Builder updates the source repository; publishing agent separately validates and publishes the Wiki source if requested/authorized.
5. The coordinating agent updates `HANDOFF.md`, `MEMORY.md` only for durable knowledge, and appends `SESSIONS.md`.

## No false completion

Every task tracks these states separately: researched, drafted, locally/source validated, committed, Wiki push confirmed, live-render checked. A stage may be skipped only when the user explicitly asks; it must not be marked complete without evidence.
