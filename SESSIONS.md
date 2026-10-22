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

This section will be completed after the `.agents/` role/workflow files and the root agent memory/handoff files are committed and re-fetched.
