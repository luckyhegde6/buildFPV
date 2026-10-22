# Agent-to-Agent Handoff — buildFPV

**Updated:** 2026-10-22  
**Repository:** https://github.com/luckyhegde6/buildFPV  
**Branch:** `main`  
**Last tree state checked before this handoff update:** `84f493197a7e591594b6efa5be3daef747448e48`  
**Live Wiki (existing, user-confirmed):** https://github.com/luckyhegde6/buildFPV/wiki  
**Wiki source pages:** `docs/wiki-source/`  
**Assets:** `docs/assets/`  
**Publisher:** `scripts/publish-wiki.sh`

## Current state

The connected GitHub MCP has read/write access to the source repository. Source documentation and the new agent governance files are committed. The existing live Wiki was confirmed by the user; do not try to initialize a replacement or infer it is absent from a 404 produced by a repository fetch action.

### Recent implementation

- Charger model comparison: `docs/wiki-source/FPV-Chargers-LiPo-and-Li-ion-Battery-Safety.md` — ISDT UC2, ISDT 608AC, ToolkitRC M7AC, ToolkitRC M6DAC. [Commit](https://github.com/luckyhegde6/buildFPV/commit/801dcb22270d676e1e1682068d5a89daf88bc148)
- Exact-model FPV video matrix: `docs/wiki-source/FPV-Cameras-VTX-VRX-Compatibility-Comparison.md` — BETAFPV Air75, DJI O4 standard/Pro, Walksnail Avatar HD Pro, HDZero Whoop V2/Freestyle V2. [Matrix commit](https://github.com/luckyhegde6/buildFPV/commit/57cb27fe6e20fa5eaca3cba7682b9723645a73cf) · [TODO progress](https://github.com/luckyhegde6/buildFPV/commit/43703fb9c5b1afa1dcabd22dd729896d676fa113)
- Source-level matrix check re-fetched the page through GitHub MCP and found eight table lines, each with five columns, and all six model rows. It does not establish visual rendering or product validity beyond the cited sources.
- Master TODO now records implementation and publish blockers. [Latest TODO tranche commit](https://github.com/luckyhegde6/buildFPV/commit/84f493197a7e591594b6efa5be3daef747448e48)

### Agent operating files added

- `AGENTS.md` — repository-wide rules.
- `HANDOFF.md` — immediate next-agent state.
- `MEMORY.md` — durable project knowledge.
- `SESSIONS.md` — chronological decisions and flows.
- `.agents/README.md` — framework and handoff expectations.
- `.agents/research-agent.md` — evidence collection, primary-source standards and conflict handling.
- `.agents/builder-agent.md` — canonical files, implementation, validation and publication requirements.
- `.agents/workflows/research-to-build.md` — research → build → QA → commit → Wiki publish gates.
- `.agents/templates/research-brief.md` and `.agents/templates/session-entry.md` — reusable handoff/log templates.

Key commits: [AGENTS.md](https://github.com/luckyhegde6/buildFPV/commit/7047eb25b8fd561a47fbf08222d93ec5a0083298), [research workflow](https://github.com/luckyhegde6/buildFPV/commit/a64aea5015adf8d884450ba5a18452351245ec33), [session log update](https://github.com/luckyhegde6/buildFPV/commit/044efb25845377b62d606c733c382e78a9b5d7ed), [durable memory update](https://github.com/luckyhegde6/buildFPV/commit/e81e72d44dd58e4982675aa1a8b1ad5f0f2f3bcc).

## Publish and verify status — still open

| Stage | State |
|---|---|
| Wiki-source pages committed in source repo | Done |
| Existing Wiki inspected for differences before publishing | Not done |
| `bash scripts/test-wiki-link-rewrite.sh` run in a real checkout | Not verified |
| `bash scripts/publish-wiki.sh` run and staged diff reviewed | Not done |
| Git push to Wiki confirmed | Not done |
| Live Home/sidebar/changed pages/assets verified using Playwright/browser | Not done |

Do **not** claim that the requested Wiki publish/Playwright verification completed. Current obstacles:
- Active MCP tool discovery did not expose a Playwright/browser-control action.
- Plugin discovery found TinyFish as an available cloud browser option, but it is not connected in this session.
- GitHub MCP fetch does not expose Wiki Git push; web fetch attempts did not return usable rendered Wiki pages.
- Earlier local shell execution could not resolve `github.com`.

These are environment/connection limits; they do not disprove that the live Wiki exists. The user requested publishing and Playwright verification. Browser/publish were attempted through available routes and remain blocked; the agent framework files were still added so the requested maintenance system would not be lost.

## Next action — publish the existing Wiki

1. Re-read root `AGENTS.md`, `MEMORY.md`, latest `SESSIONS.md`, this file and the master TODO.
2. Connect/use an authenticated Playwright-capable browser or the available browser plugin after it is connected. Inspect the existing live Wiki Home, sidebar, charger page and video-matrix page first; record actual routes/screenshots and check for Wiki-only changes.
3. From a network-enabled checkout of `buildFPV`, fetch the existing Wiki Git remote and preserve intentional Wiki-only content. Run:
   ```bash
   bash scripts/test-wiki-link-rewrite.sh
   bash scripts/publish-wiki.sh
   ```
4. Review `git diff --cached --check` and `git diff --cached`, especially removal/overwrites, stale pages, internal link slugs, image localization and unrelated files. Enter `PUBLISH` only after reviewing the staged diff.
5. Confirm the Wiki push through Git and re-open the live Home, sidebar, affected pages, images/SVGs/GIFs at desktop and narrow/mobile viewport sizes using browser automation.
6. Record push SHA, URLs, screenshots or evidence, failures, and the accurate state in `docs/FPV-WIKI-EXPANSION-TODO.md`, `SESSIONS.md` and this handoff.

## Research and safety caveats

- Confirm each model/SKU/revision and official manual. Product weights, camera modes, voltage, power, goggles compatibility and firmware are not universal across generations.
- The Walksnail Avatar HD Pro page contains non-reconciling marketing versus component weight claims; the source matrix flags the discrepancy pending better evidence.
- Live feed, onboard recording and goggles DVR are separate. “HD” is not a universal inter-brand video standard.
- All battery and bench instructions remain safety-critical: remove props for bench setup/motor checks, disconnect battery before soldering/short investigation, follow exact VTX antenna/cooling guidance, and do not use/charge damaged or swollen packs.
- The source-level table check and empty GitHub status result are not a full test suite, visual review, or Wiki publish.
