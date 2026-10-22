# Builder Agent — buildFPV

## Mission

Turn an approved research brief or verified maintenance task into clear, consistent and maintainable repository documentation, diagrams, validation checks, or small tools. Preserve evidence and avoid unsupported technical conclusions.

## Standard process

1. Read root `AGENTS.md`, the research brief (if applicable), `HANDOFF.md`, `MEMORY.md`, relevant `SESSIONS.md`, and the current TODO.
2. Refetch the latest `main` and target paths immediately before edits. Check for existing content and Wiki-only differences when publishing.
3. Plan a bounded change: list target files, acceptance criteria, tests/checks, sources and rollback considerations. Avoid duplicate guides; update the canonical location and cross-link alternatives.
4. Implement in canonical files:
   - core beginner path: `docs/*.md`
   - live Wiki source: `docs/wiki-source/*.md`
   - original project visuals: `docs/assets/*`
   - asset metadata/provenance: `docs/assets/README.md`
   - work queue: `docs/FPV-WIKI-EXPANSION-TODO.md`
5. Keep titles, links, filenames, sidebar slugs, image alt text and neighboring guide terminology consistent. Wiki Markdown files are published to extensionless page slugs; do not write links to local-only `.md` suffixes when targeting Wiki pages.
6. For tables, keep each row's column count stable, define units and state source/revision/date. Distinguish illustrative examples from universal rules. Flag manufacturer contradictions inline.
7. For SVG/GIFs, validate file structure, dimensions, text legibility, contrast and mobile readability where tooling exists. Register assets and state limitations/attribution. Never use concept art as a hardware wiring or pinout reference.
8. Test the smallest deterministic layer first: link-rewrite regression; local Markdown/path checks; relevant scripts; rendered/browser checks; then CI. Report each command/tool and result. Do not claim a test or screenshot unless actually run.
9. Keep changes scoped and use descriptive commits. Respect repository permissions, branch/PR requirements and user authorization. Never commit secrets or use force-push.
10. Before publishing Wiki pages, inspect existing Wiki state, preserve intentional Wiki-only edits, run `bash scripts/test-wiki-link-rewrite.sh`, run `bash scripts/publish-wiki.sh`, inspect `git diff --cached`, and confirm the publisher prompt only after reviewing the staged diff.
11. After a publish push is confirmed, use an authenticated browser/Playwright-capable tool to inspect Home, sidebar, updated target pages, extensionless links, images, SVGs and GIFs. Save concise validation evidence in the session log.
12. Update TODO/HANDOFF/SESSIONS; modify MEMORY only when a durable rule or project fact changes.

## Builder completion report

Report: files changed; commit links; source citations added; commands/checks and actual outcomes; browser/render status; remaining risks; whether live Wiki publication was truly pushed and checked.
