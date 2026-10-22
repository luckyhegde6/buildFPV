# Agent-to-Agent Handoff — buildFPV

**Updated:** 2026-10-22  
**Repository:** https://github.com/luckyhegde6/buildFPV  
**Default branch:** `main`  
**Live Wiki:** https://github.com/luckyhegde6/buildFPV/wiki  
**Canonical Wiki sources:** `docs/wiki-source/`  
**Publisher:** `scripts/publish-wiki.sh`

## Current state

The source repository is accessible through the connected GitHub MCP with repository read/write permissions. The user confirmed the live Wiki already exists. Do not try to initialize a replacement Wiki and do not infer that it is absent from a 404 returned by the GitHub MCP fetch action for `buildFPV.wiki.git`.

Recent committed source work includes:
- Manufacturer-sourced charger comparison in `docs/wiki-source/FPV-Chargers-LiPo-and-Li-ion-Battery-Safety.md` covering ISDT UC2, ISDT 608AC, ToolkitRC M7AC and M6DAC.
- Expanded exact-model video matrix in `docs/wiki-source/FPV-Cameras-VTX-VRX-Compatibility-Comparison.md` covering BETAFPV Air75, DJI O4 standard/Pro, Walksnail Avatar HD Pro, HDZero Whoop V2 and HDZero Freestyle V2.
- Dated TODO additions documenting these tranches and their remaining validation/publishing work.
- Previous commits corrected the Wiki publication blocker wording and source-level matrix QA.

## Publishing status — do not overstate

- [x] Wiki-source changes committed to `buildFPV/main`.
- [ ] Existing live Wiki fetched and checked for Wiki-only differences immediately before publishing.
- [ ] `bash scripts/test-wiki-link-rewrite.sh` executed in a real checkout.
- [ ] `bash scripts/publish-wiki.sh` run from a network-enabled checkout and staged diff reviewed.
- [ ] Publish push confirmed by Git/GitHub.
- [ ] Live Home, sidebar, affected pages, internal slugs, SVGs, GIFs, and image links verified using a connected browser/Playwright-style tool.

In the 2026-10-22 session, direct GitHub MCP fetches for Wiki routes/remote failed, and the local runtime could not resolve `github.com`. Those are tool/runtime limitations, not evidence the live Wiki does not exist. Browser/plugin discovery found TinyFish as an available-but-not-installed cloud browser plugin; no Playwright tool was exposed in the active tool set. Do not claim a Playwright run or live Wiki publish occurred. Connect an approved browser tool, or use a network-enabled local checkout.

## Next sequence

1. Read `AGENTS.md`, `MEMORY.md`, `SESSIONS.md` and this handoff; refetch latest `main`.
2. Use an authenticated browser/Playwright-capable tool to inspect the supplied live Wiki URL, Home and both changed guide routes. Capture actual route/heading/table/image results and screenshots when supported.
3. From a network-enabled checkout, run the rewrite regression script and inspect the publisher's staged diff. Preserve Wiki-only content/edits; do not force-push.
4. Review and publish the existing source pages to the existing Wiki; confirm push outcome and inspect live routes/assets. If publishing cannot be done through available tools, leave status blocked and provide the exact missing capability—do not report success.
5. Continue research/builder work only after documenting the publication outcome; update the TODO with evidence.
6. Use `.agents/workflows/research-to-build.md` for any next content tranche.

## Known research/implementation caveats

- Product specs, receiver compatibility, prices, availability, firmware and regional RF rules are volatile. Recheck the exact SKU/revision from the official source.
- The Walksnail Avatar HD Pro page contains non-reconciling marketing/component weight claims; the matrix flags this. Don't remove the discrepancy without a primary-source resolution.
- Table and source-level checks were performed through the repository connector; the absence of GitHub status checks does not prove browser, shell, test-suite or live-publication success.
- Do not create a new PR merely because the previous session used direct commits. Follow the user's current direction and repository policies.

## Handoff update template

When handing to another agent, append/refresh:
- **State checked at:** timestamp and exact commit SHA.
- **Objective:** one sentence.
- **Changed files/commits:** path and commit links.
- **Validation:** command/tool and result.
- **Publication state:** separate source vs Wiki states.
- **Open questions/blockers:** concrete, evidence-backed.
- **Next action:** one atomic step.
