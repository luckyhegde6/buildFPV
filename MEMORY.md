# Durable Project Memory — buildFPV

This file stores durable project facts and operating constraints, not a transcript. Keep it concise and update it only when verified project knowledge, architecture, or a standing decision changes. Chronological work belongs in `SESSIONS.md`; immediate next steps belong in `HANDOFF.md`.

## Identity and purpose

- Repository: https://github.com/luckyhegde6/buildFPV
- Purpose: beginner-first FPV learning, simulator practice, component understanding, safer build planning, troubleshooting and compatible hardware selection.
- Main learning path: `README.md` → `docs/LEARNING-GUIDE.md` → focused `docs/*.md` guides.
- Separate GitHub Wiki exists at https://github.com/luckyhegde6/buildFPV/wiki (confirmed by the user on 2026-10-22).

## Canonical file locations

- `docs/wiki-source/*.md` is the source content used to populate the separate Wiki.
- `docs/assets/*` contains repository-owned SVG diagrams/GIF animations and some supplied/project media. `docs/assets/README.md` explains attribution and limitations.
- `docs/FPV-WIKI-EXPANSION-TODO.md` is the large, dated implementation backlog.
- `docs/research/` holds dated research reports and source evidence.
- `scripts/publish-wiki.sh` copies root Wiki Markdown into the separate Wiki checkout, localizes project/external images where possible, rewrites internal .md links to extensionless Wiki slugs, then stages and prompts before commit/push.
- `scripts/test-wiki-link-rewrite.sh` is the regression test for the internal link rewrite.

## Stable technical/editorial policy

- Keep flight purpose / frame geometry / propeller diameter / wheelbase / package format as separate concepts.
- A video-control receiver (e.g. ExpressLRS RX) is distinct from video VRX/goggles.
- Separate live pilot video, goggle DVR and onboard recording; never imply the same resolution, latency or recording modes without source evidence.
- Digital FPV is not a universal cross-brand standard. Compatibility is exact model/generation/firmware-specific.
- Range claims are not usable range, endurance, or legal authorization. Avoid universal latency, flight-time, cycle-life, motor-KV or range promises.
- Product pages can contain contradictions or revisions; record discrepancies explicitly and prefer current manuals/specifications/official compatibility tables.
- Original explanatory SVGs/GIFs are not wiring diagrams, pinouts, motor-order references, or dimensioned mechanical drawings unless explicitly sourced and labelled as such.
- For bench setup, remove propellers; disconnect battery before soldering or investigating shorts; follow exact VTX antenna/cooling instructions; do not use or charge a swollen/damaged battery.
- Any India-specific buying/pricing/legal statements need an explicit date/region and verified current source. Do not present old prices as current.

## Current work snapshot (2026-10-22; recheck main before relying)

Recent source commits added a charger-model comparison (ISDT UC2, ISDT 608AC, ToolkitRC M7AC, ToolkitRC M6DAC) and an exact-model video matrix (Air75, DJI O4, DJI O4 Pro, Walksnail Avatar HD Pro, HDZero Whoop V2 and Freestyle V2). See `HANDOFF.md` and the latest session records for exact commits.

The main-repository content was committed and source-level table structure was checked. No authenticated Playwright/browser verification or live Wiki push was completed in that session. The user confirmed the Wiki exists. Treat the Wiki publish/render gate as open until actual evidence is recorded.

## Evidence standard

For each meaningful technical claim, retain:
- Exact manufacturer/product page or manual URL.
- Exact product/SKU/revision and firmware where applicable.
- Date checked and region when relevant.
- What the source explicitly states.
- Any measurement/test setup and its limitations.
- Contradictions/open questions.

Do not store credentials, personal data, generated login tokens, or other secrets here.

## Agent operating framework

- Root `AGENTS.md` defines shared quality/safety/contribution rules.
- `.agents/research-agent.md` defines source verification and evidence-led handoffs; `.agents/builder-agent.md` defines scoped implementation and testing; `.agents/workflows/research-to-build.md` is the standard research → build → independent QA → commit → Wiki publish process.
- `.agents/templates/research-brief.md` standardizes source evidence handoffs; `.agents/templates/session-entry.md` standardizes chronological log entries.
- `HANDOFF.md` is the immediate next-agent state; `SESSIONS.md` is append-oriented history; `MEMORY.md` is durable knowledge. Do not duplicate a full transcript between these files.
- Do not mark a Wiki publish complete from a source-repo commit. Require push evidence and live browser checks.
- Browser-tool status at the latest recorded session: no Playwright action was available in the active tool set; TinyFish was identified as an available cloud-browser option but was not connected. Recheck current plugin/tool availability before assuming this is still the case.


## Remote Wiki publish and browser verification

- A headless Playwright verifier now exists at `scripts/verify-wiki-live.mjs`; the GitHub Actions workflow is `.github/workflows/wiki-publish-verify.yml`.
- The workflow publishes to the user's existing Wiki, then installs Playwright with `npx` on a network-enabled runner and uploads screenshots/report.
- It requires the repository secret `WIKI_PUBLISH_TOKEN` or `GH_PERSONAL_ACCESS_TOKEN` with Git access to push the Wiki.
- The ChatGPT local container cannot access GitHub over the network, and a GitHub MCP-created trigger commit did not start an Actions run. The available connector has no dispatch action. Manual `workflow_dispatch` from GitHub is the immediate execution path. Never claim the remote workflow, publication, or Playwright passed until its run results are read.
