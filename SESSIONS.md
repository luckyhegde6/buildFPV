# Agent Sessions, Decisions and Flows

This is a chronological, append-oriented engineering log. New work should append a dated session entry rather than silently rewriting old decisions. If a prior decision is superseded, append a correction and link the older entry.

## Entry format

- **Date/time and agent:** include timezone if known.
- **Objective:** desired user-visible result.
- **Starting state:** branch and SHA fetched before work.
- **Decision(s):** options considered and rationale; distinguish evidence from inference.
- **Research evidence:** source URLs, exact model/version, date and what each supports.
- **Changes:** paths plus resulting commit SHAs/URLs.
- **Validation:** exact tools/commands and actual outputs.
- **Wiki publication:** source committed / Wiki push attempted / push confirmed / live rendered verification—record each independently.
- **Open issues:** evidence-backed limitations.
- **Next step:** one atomic action for the next agent.

---

## 2026-10-22 — FPV reference guides and handoff correction

- **Agent:** ChatGPT via connected GitHub MCP.
- **Objective:** continue the FPV Wiki expansion and leave the next agent a truthful, actionable handoff.
- **Starting state:** repository `luckyhegde6/buildFPV`, default branch `main`; the repo was refetched through GitHub MCP before edits.
- **Decisions:**
  - Keep canonical Wiki sources under `docs/wiki-source/` and diagram assets under `docs/assets/`.
  - Treat the user's confirmation that the Wiki exists as authoritative. A connector/API 404 for the .wiki endpoint is not evidence that the Wiki is uninitialized.
  - Do not claim a live publish, Playwright test, or browser screenshot without actual results.
  - Prefer official manufacturer specifications and record conflicting claims explicitly.
- **Changes from the FPV expansion tranche:**
  - `docs/wiki-source/FPV-Chargers-LiPo-and-Li-ion-Battery-Safety.md`: representative charger table for ISDT UC2, ISDT 608AC, ToolkitRC M7AC and M6DAC, emphasizing input power and per-channel limits. Commit: https://github.com/luckyhegde6/buildFPV/commit/801dcb22270d676e1e1682068d5a89daf88bc148
  - `docs/FPV-WIKI-EXPANSION-TODO.md`: records charger matrix tranche and open publication checks. Commit: https://github.com/luckyhegde6/buildFPV/commit/b5bf0c65b859d8da102c46b9d3bb4c9933903cdb
  - `docs/FPV-WIKI-EXPANSION-TODO.md`: corrected publish blocker wording and confirmed existing Wiki. Commit: https://github.com/luckyhegde6/buildFPV/commit/1e3fda03541ddab4b85a613fe15b0ba325372aa9
  - `docs/wiki-source/FPV-Cameras-VTX-VRX-Compatibility-Comparison.md`: six-model camera/video matrix with camera/live-feed/recording distinction, latency test caveats, voltage/mount/power values and receiver ecosystem notes. Commit: https://github.com/luckyhegde6/buildFPV/commit/57cb27fe6e20fa5eaca3cba7682b9723645a73cf
  - `docs/FPV-WIKI-EXPANSION-TODO.md`: status entry for video matrix tranche and a source-level table structure check. Commits: https://github.com/luckyhegde6/buildFPV/commit/cd282add1bfb02cb2664e41e3d08fb20277818a9 and https://github.com/luckyhegde6/buildFPV/commit/43703fb9c5b1afa1dcabd22dd729896d676fa113
- **Validation evidence:** GitHub MCP re-fetched both updated Markdown files; all eight table lines in the video matrix's exact-model section had five columns and six product rows were present. GitHub combined commit status returned an empty statuses list. This is source-level validation only—not full CI, shell test execution, Playwright, or live-Wiki rendering.
- **Browser/publish limitation:** GitHub MCP exposed no Playwright/browser action. Plugin search found TinyFish cloud browser available but not installed; normal web open returned a cache miss for the GitHub Wiki routes. The local shell could not resolve github.com in earlier checks. No publish push or live-render verification was completed.
- **Next action:** use a connected authenticated browser/Playwright-capable tool to inspect the existing Wiki; then from a network-enabled checkout run `bash scripts/test-wiki-link-rewrite.sh`, review/publish with `bash scripts/publish-wiki.sh`, and verify actual rendered routes and assets.

## 2026-10-22 — Repository agent governance files

- **Agent / role:** coordinating maintainer using connected GitHub MCP.
- **Starting state:** `main` at `fcaddcac6608d7173fe2ac1620a0ec8b5eace4e9` after the governance files were created; recursive tree and target files were fetched again from the repository.
- **Objective:** establish repeatable, research-first and builder-led contribution rules, durable memory, agent-to-agent handoff and append-only session decisions.
- **Decisions:**
  - Root `AGENTS.md` is the mandatory contributor/agent rule entry point.
  - `MEMORY.md` stores durable facts and policy; `HANDOFF.md` stores the immediate working state and next action; `SESSIONS.md` records chronological decisions/flows.
  - `.agents/research-agent.md` owns evidence quality and uncertainty; `.agents/builder-agent.md` owns scoped implementation and deterministic validation; `.agents/workflows/research-to-build.md` defines their handshake and independent QA gate.
  - Research, source commits, Wiki push, and live browser verification are different completion states.
- **Changes committed:** 
  - `AGENTS.md`: https://github.com/luckyhegde6/buildFPV/commit/7047eb25b8fd561a47fbf08222d93ec5a0083298
  - `HANDOFF.md`: https://github.com/luckyhegde6/buildFPV/commit/39a2951203656ddf1132ca35a9f07a55858de677
  - `MEMORY.md`: https://github.com/luckyhegde6/buildFPV/commit/b7d273dcea6d3b1afc6ea1d3ab809f1b0bc84c57
  - `SESSIONS.md`: https://github.com/luckyhegde6/buildFPV/commit/60cd65a0753e345bf35c2cbb4c4752f01f7a8ae8
  - `.agents/README.md`: https://github.com/luckyhegde6/buildFPV/commit/584ac93453a914c864447639bcb7acaf9482492a
  - `.agents/research-agent.md`: https://github.com/luckyhegde6/buildFPV/commit/0ef18bb000b1be774d9419002846445dc290a324
  - `.agents/builder-agent.md`: https://github.com/luckyhegde6/buildFPV/commit/4b3a16d7172d63f307f234d8842b5632bf19d5ec
  - `.agents/workflows/research-to-build.md`: https://github.com/luckyhegde6/buildFPV/commit/a64aea5015adf8d884450ba5a18452351245ec33
  - `.agents/templates/research-brief.md`: https://github.com/luckyhegde6/buildFPV/commit/1a79e32f3f15daf104f27d626dd63d9e3f5a2eac
  - `.agents/templates/session-entry.md`: https://github.com/luckyhegde6/buildFPV/commit/fcaddcac6608d7173fe2ac1620a0ec8b5eace4e9
- **Validation:** GitHub MCP recursive tree at `fcaddcac` confirmed all requested root files and the `.agents/` role/workflow/template files exist. Re-fetches of `AGENTS.md`, `HANDOFF.md` and `SESSIONS.md` succeeded. No Playwright/browser session was available. This is repository-source verification, not live Wiki verification.
- **Publication state:** source pages are committed; live Wiki push and browser-render verification remain unconfirmed.
- **Blockers/open questions:** plugin search returned TinyFish as an installable/available cloud browser, but it is not connected to this session; no Playwright action was exposed by the active MCP tools. GitHub Wiki route fetches returned cache miss/unsupported-route errors, which are not proof that the Wiki is absent.
- **Next action:** connect an authenticated browser/Playwright-capable integration (TinyFish was suggested as an available browser alternative), then inspect and publish to the existing Wiki using the network-enabled Git workflow. Do not mark publish/verification complete before evidence is captured.


## 2026-10-22 — Browser/publish attempt and maintainer discoverability

- **Agent / role:** coordinating maintainer using GitHub MCP, web fetch and plugin discovery.
- **Starting state:** `main` was re-fetched; prior root/tree state included all requested `.agents/` and root agent files.
- **Objective:** publish/verify the pending live Wiki using browser automation, then complete and surface the agent-maintenance system.
- **Browser and publish attempts:** searched connected tools for Playwright/browser automation; no Playwright action was exposed. Plugin discovery found TinyFish, a cloud-browser alternative, but it is not connected in this session. The GitHub MCP rejects Wiki routes as unsupported repository-fetch URLs; normal web fetch for the Home and two affected Wiki routes returned cache-miss errors. No live visual result, screenshot, Wiki Git push, or Playwright check was produced.
- **Decision:** leave publication explicitly pending; do not invent a successful push or claim browser QA. Continue independent repository work while documenting the exact next gate. The Wiki exists per user confirmation; a connector 404 is not evidence of nonexistence.
- **Changes:** added `AGENTS.md`, `HANDOFF.md`, `MEMORY.md`, `SESSIONS.md`, `.agents/README.md`, Research Agent and Builder Agent role files, research-to-build workflow and two templates. Updated `docs/FPV-WIKI-EXPANSION-TODO.md` with the publish/browser-tool gate. Added contributor-agent navigation to `README.md`.
- **Latest discoverability commit:** https://github.com/luckyhegde6/buildFPV/commit/549392b19f67fe9aab1e321652df7767d85bd32b
- **Other workflow/status commits:** [session log](https://github.com/luckyhegde6/buildFPV/commit/044efb25845377b62d606c733c382e78a9b5d7ed) · [durable memory](https://github.com/luckyhegde6/buildFPV/commit/e81e72d44dd58e4982675aa1a8b1ad5f0f2f3bcc) · [master TODO](https://github.com/luckyhegde6/buildFPV/commit/84f493197a7e591594b6efa5be3daef747448e48) · [refreshed handoff](https://github.com/luckyhegde6/buildFPV/commit/5ad5acd54398e48eede2566bf21dadc02ceff94b).
- **Validation:** GitHub MCP source reads verified the created agent files exist. The video-model Markdown table passed a structural check (six product rows and five columns per row). No shell publisher test, publish push, or live browser test passed in this session.
- **Next action:** connect an authenticated browser automation integration (Playwright if available; TinyFish is a suggested alternative), then use a network-enabled Git checkout to inspect, publish and verify the existing Wiki. Inspect first and preserve Wiki-only edits.
