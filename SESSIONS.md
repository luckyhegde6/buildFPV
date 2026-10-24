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


## 2026-10-22 — Headless Playwright and remote Wiki publish runner

- **Agent / role:** coordinating maintainer using the GitHub MCP, container shell and available plugin discovery.
- **Starting state:** source main contained the FPV video matrix and the agent-governance framework. Node 22.16.0 and system Chromium were available locally.
- **User objective:** execute the pending publish and verify task with headless Playwright via `npx`, then leave the agent-maintenance process durable.
- **Local Playwright attempts:** `timeout 35s npx --yes playwright --version` did not complete in the execution window. The installed Python Playwright CLI reported version 1.57.0. A headless Chromium navigation to `https://github.com/luckyhegde6/buildFPV/wiki` failed with `net::ERR_BLOCKED_BY_ADMINISTRATOR`; curl failed DNS resolution for `github.com`. The web fetcher also returned cache misses for Home and both target Wiki pages. No live screenshot was captured.
- **Remote execution setup:**
  - Added `scripts/verify-wiki-live.mjs` to check live Home, charger guide and video matrix routes with headless Playwright, test required content/tables/extensionless URLs/Wiki-local images, and save desktop/mobile screenshots plus JSON report.
  - Added `.github/workflows/wiki-publish-verify.yml`. It runs the link rewrite regression test, configures a credential helper from `WIKI_PUBLISH_TOKEN` or `GH_PERSONAL_ACCESS_TOKEN`, executes the publisher against the existing Wiki, installs Playwright using `npx --yes playwright@1.57.0 install --with-deps chromium`, and uploads evidence.
  - Added `.agents/PUBLISH_WIKI_NOW` as a one-shot push path; the workflow also supports manual `workflow_dispatch`.
  - Guarded the workflow so editing the marker later will not retrigger a publish; workflow_dispatch remains available.
- **Trigger result:** after commit `0e8cf8169b26c627f0c00019493cf3ab6d2eaaf1`, GitHub MCP read of `/actions/runs?per_page=10` returned `total_count: 0`. The connected GitHub tools expose no workflow-dispatch action. Therefore, the workflow has been added but has **not been run**; no Wiki push or Playwright results exist yet.
- **Source commit links:** [Playwright verifier](https://github.com/luckyhegde6/buildFPV/commit/adf153b4bb3dd60e65007fd283913bcacf46c941) · [workflow](https://github.com/luckyhegde6/buildFPV/commit/e177a66f90115804928e98cf364e7a5bec4d3bc3) · [one-shot marker](https://github.com/luckyhegde6/buildFPV/commit/0e8cf8169b26c627f0c00019493cf3ab6d2eaaf1) · [trigger guard](https://github.com/luckyhegde6/buildFPV/commit/0cc211102b8e705022359a879944c80b585534cc) · [updated handoff](https://github.com/luckyhegde6/buildFPV/commit/60ed5bf1d144794d8c9e26de87e0b5879016b453).
- **Required GitHub secret:** the publisher workflow needs `WIKI_PUBLISH_TOKEN` or `GH_PERSONAL_ACCESS_TOKEN` with access to push the existing Wiki Git remote. No tool can inspect repository secrets, and no token value was requested or handled.
- **Next action:** open [the workflow on GitHub](https://github.com/luckyhegde6/buildFPV/actions/workflows/wiki-publish-verify.yml), run it on `main`, and inspect its summary/artifact. Do not mark publish or browser verification successful until the Actions run supplies evidence.


## 2026-10-22 — Trigger repair and queued remote workflow attempts

- **Agent / role:** coordinating maintainer using GitHub repository MCP, plugin discovery, and public status research.
- **Task:** continue the existing-Wiki publish and remote headless Playwright verification; do not create a replacement Wiki.
- **Trigger root cause and fix:** the workflow's push-job conditions only accepted `.agents/PUBLISH_WIKI_NOW` when it appeared in the event's `added` paths. Since the marker already existed, a later marker edit could not satisfy the job guard. Updated `.github/workflows/wiki-publish-verify.yml` to accept the marker in either `added` or `modified`.
- **Verifier correction:** re-read `scripts/verify-wiki-live.mjs` and found the body-text whitespace regex was over-escaped. Corrected it to `/\s+/g` so normalized page text collapses whitespace/newlines before required-phrase checks.
- **Runs registered:** commit `3142812db998126435268d3ea610114be6adccfa` registered [run 39796268242](https://github.com/luckyhegde6/buildFPV/actions/runs/39796268242). The next commit, `f2323a59632e35084240b09d314ada144025fa0f`, includes the regex fix and registered [run 39796597578](https://github.com/luckyhegde6/buildFPV/actions/runs/39796597578).
- **Latest remote evidence checked:** both runs reported `queued`; the jobs endpoint returned `total_count: 0`; there were no artifacts. Thus runner execution, Wiki push, and Playwright checks remain unverified. GitHub's public status page listed Actions as operational and described the previous-day incident as recovered; no confirmed outage is asserted.
- **Plugin/MCP inventory:** GitHub repository write/read tools are available, but the connected GitHub tool set exposes neither a workflow-dispatch nor a run-cancel action, and no dedicated Tasks MCP is exposed in the current tool inventory. TinyFish cloud browser was discoverable but was not installed/connected, so it was not used to navigate an authenticated browser session.
- **Current handoff:** inspect [latest run 39796597578](https://github.com/luckyhegde6/buildFPV/actions/runs/39796597578). If it stays queued, check the Actions UI/repository runner settings. Before Wiki publication can succeed, verify that `WIKI_PUBLISH_TOKEN` or `GH_PERSONAL_ACCESS_TOKEN` is configured as an Actions secret with write access to the existing Wiki Git remote. Never ask for or commit secret values.
- **Status discipline:** do not mark the live Wiki published, Playwright passed, or screenshots captured until job logs and the uploaded report/artifacts demonstrate those results.


## 2026-10-22 — Removing job-level guards to permit the queued execution

- **Finding:** run [39796597578](https://github.com/luckyhegde6/buildFPV/actions/runs/39796597578) completed with the Playwright job marked `skipped`; the publisher job and artifact were absent. This showed the extra marker checks were suppressing job scheduling even though the workflow push path filter had already matched.
- **Change:** removed the publisher's job-level `if` condition, leaving `.github/workflows/wiki-publish-verify.yml`'s `push.paths` filter as the push-trigger gate. Changed the browser-verification job guard to `if: always()` so it can execute even if the publish job fails.
- **New marker commit:** `ab2592162031430ecb510238af93c3957b40e1f1`.
- **Latest observed run:** [39797230235](https://github.com/luckyhegde6/buildFPV/actions/runs/39797230235). Both jobs are now registered — `Publish source pages to the existing Wiki` and `Verify live Wiki with headless Playwright` — but both remain `queued` at the latest check. No artifacts or execution logs have arrived, so publishing and browser verification remain incomplete.
- **Next gate:** inspect the latest run via the GitHub Actions UI if it remains queued; check repository Actions settings and runner assignment. Keep the token in GitHub Actions Secrets only; verify the publisher job outcome, then download/read the Playwright report and screenshots before changing publication status.


## 2026-10-22 — Remote headless Playwright execution, evidence, and publish blocker

- **Run:** [GitHub Actions run 39797230235](https://github.com/luckyhegde6/buildFPV/actions/runs/39797230235), triggered from commit `ab2592162031430ecb510238af93c3957b40e1f1`.
- **Unit/regression check:** `bash scripts/test-wiki-link-rewrite.sh` passed.
- **Remote browser install/run:** `npx --yes playwright@1.57.0 install --with-deps chromium` completed on the GitHub-hosted Ubuntu runner. The Playwright verifier ran in Chromium headless at desktop (1440×1000) and mobile (390×844) viewports.
- **Publish outcome:** failed before `scripts/publish-wiki.sh` because the Actions environment had an empty `WIKI_PUBLISH_TOKEN` and `GH_PERSONAL_ACCESS_TOKEN` fallback. The log reported `Missing WIKI_PUBLISH_TOKEN / GH_PERSONAL_ACCESS_TOKEN secret.` No Wiki push took place.
- **Browser outcome:** report `passed: false`. Home returned HTTP 200 but did not contain the newer “Drone Categories and Size Guide” phrase. Both requested guide routes (charger comparison and video compatibility matrix) returned HTTP 200 after redirecting to the Wiki Home route. The checker therefore found none of the expected exact-model phrases and zero content tables. The Wiki-local JPEG `/wiki/images/fpv-build-concept-ai.jpg` failed with a 404; its source counterpart exists at `docs/assets/fpv-build-concept-ai.jpg`.
- **Artifact:** [Playwright evidence artifact 12434310973](https://github.com/luckyhegde6/buildFPV/actions/runs/39797230235/artifacts/12434310973), containing `report.json`, plus desktop/mobile screenshots for Home, charger guide and video matrix. The artifact was downloaded to the current execution environment and the report/screenshot inventory was inspected.
- **Verifier/workflow follow-ups after reading logs:** added an explicit assertion that the final route path matches the requested route, corrected the trailing-slash normalization regex to `/\\/+$/` (i.e., escaped literal slash before the quantifier), and fixed shell summary quoting/newline escapes so backticks are not executed as command substitutions. Commits `740db33c80abc257ca28a7d64ccef09ed56065a6`, `79572b9a7a3f7174453ea854e339406fa60a4a27`, `60f521b52f97e175ae6811886c6dbd5f42a71606`, `84f5e794081d5b573715d211b52c26b708776207` and `032fecd0fe52f4a90d76c215620722d73dc4d9e3` document these fixes; they have not yet been exercised by another Actions run.
- **Durable records updated:** `HANDOFF.md` and the master TODO now identify run 39797230235, report the missing secret/publish failure, and mark live checks failed rather than successful. The Wiki has **not** been published by this workflow.
- **Next gate:** repository owner adds `WIKI_PUBLISH_TOKEN` or `GH_PERSONAL_ACCESS_TOKEN` under Settings → Secrets and variables → Actions, with write access to the existing Wiki Git remote, then dispatches/reruns from the Actions UI. Never paste credentials into chat or source. Verify a successful publisher push and a new passing report before marking completion.


## 2026-10-22 — Latest-code validation trigger did not produce a new Actions run

- **Code now on `main`:** the live verifier explicitly compares requested and final URL paths and emits an “Unexpected redirect” failure, and the workflow summary uses properly escaped newline formats so Markdown backticks cannot be executed by shell interpolation.
- **Trigger attempt:** updated `.agents/PUBLISH_WIKI_NOW` at commit `8e3833255f9485e608d68e75f79333c43a57e3f4`.
- **Observed result:** re-read the GitHub Actions run inventory after the commit; it still contained only runs `39796268242`, `39796597578`, and `39797230235`. The latest marker did not produce a visible new run. Do not claim the post-run code changes have been exercised.
- **Current gate:** the repository owner needs to add `WIKI_PUBLISH_TOKEN` or `GH_PERSONAL_ACCESS_TOKEN` with existing Wiki Git write access in Settings → Secrets and variables → Actions, then manually run the workflow from GitHub Actions UI on `main`. The connected MCP exposes no workflow dispatch action and no secret-setting action.
- **Current truth:** no Wiki push occurred. Latest completed run 39797230235 shows successful regression test, missing secret failure, failed live Playwright checks, and artifact 12434310973 with the report/screenshots.


## 2026-10-22 — Wiki token and publishing runbook added

- **Request:** document PAT generation for the Wiki Git remote and the repeatable script/publishing process inside `.agents/`.
- **Created:** [`.agents/wiki-publishing-runbook.md`](.agents/wiki-publishing-runbook.md).
- **Coverage:** distinguishes PAT value from the Actions secret name; documents preferred `WIKI_PUBLISH_TOKEN` and accepted fallback `GH_PERSONAL_ACCESS_TOKEN`; explains fine-grained PAT first where supported and classic PAT fallback for the Wiki Git remote; gives UI and GitHub CLI secret configuration steps; documents local regression test, safe interactive publishing and diff review, GitHub Actions manual dispatch, headless Playwright artifact review, failure recovery, and token rotation/revocation.
- **Navigation:** linked from `.agents/README.md`, `.agents/builder-agent.md`, and `.agents/workflows/research-to-build.md`; added to `HANDOFF.md`.
- **Security posture:** no token value was created, requested, stored, or committed. The runbook instructs the repo owner to save it as an encrypted repository Actions secret and never disclose it in chat/logs or source files.
- **Evidence sources:** current official GitHub docs for [personal access tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens), [Actions secrets](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets), and [gh secret set](https://cli.github.com/manual/gh_secret_set).
- **Existing publish status unchanged:** run `39797230235` remains the last completed evidence: link test passed, publish failed due to missing secret, Playwright ran and failed against stale/redirecting live pages. The runbook does not claim that publication is complete.


## 2026-10-22 — Beginner video course and categorized YouTube resources

- **Mandatory simulation-first course:** linked the supplied [Learn to fly an FPV drone (for total beginners)](https://www.youtube.com/playlist?list=PLwoDb7WF6c8lCKhQOTy-Vb9LfW0VAIrTP) playlist in the repository README, Learning Guide, simulator-training doc, Wiki Home, Getting Started, Wiki Simulator Training, and Daily Liftoff Routine. Clearly marked it as project onboarding rather than a formal licence/certificate.
- **Drone systems and controls:** added the user-supplied PLgMDNELGJ1CYU7vfun-Q7HXsldD-RsocG playlist and sxaEaXcuQA4 video in docs/references and the Wiki system-basics/how-FPV-drones-work pages.
- **RadioMaster Pocket:** added GgaWMvAHZi8 to docs/03-pocket-elrs.md, docs/06-pocket-button-guide.md, the Wiki Pocket guide, Home and both reference libraries; labelled it as a setup/binding walkthrough.
- **DGCA / India drone rules and awareness:** added the user-supplied PL_Fsqn9m2GhU3ep-PzQ4jg8aa-oxFP8W6, PL3IOIUhLPNVciQ1V5OLMmgEBQJbSzJ8iS, and PLn8ARIij4VbeN2OXLqHJfG2Nm4Hx8ilFq resources to the India rules and reference pages. Unknown titles/syllabus are not inferred. Explicit caution says videos are supplementary and current official DGCA/MoCA/Digital Sky resources govern.
- **Drone coding and ML:** created docs/drone-coding-and-ml.md and docs/wiki-source/Drone-Coding-and-Machine-Learning.md, covering LmEcyQnfpDA, QvRxxjaLjxg / playlist PLeuMA6tJBPKsAfRfFuGrEljpBow5hPVD4, k-yDYgc8AmU, and PRwef_c7SXQ. The track is labelled optional/advanced.
- **Embedding choice:** added clickable YouTube thumbnail images for individual videos and direct links for playlists. GitHub-flavored Markdown filters the raw iframe tag, so literal iframe snippets would not reliably embed within GitHub Wiki Markdown ([GFM spec](https://github.github.com/gfm/#disallowed-raw-html-extension)).
- **QA:** re-fetched 20 files with GitHub MCP and checked each supplied playlist/video ID appears in its expected docs and Wiki-source resources. The new Wiki slug Drone-Coding-and-Machine-Learning is linked from Home and sidebar. This validates source presence, not live render.
- **Publish state:** source docs are committed to main; the live Wiki has not been shown updated. Prior publish run 39797230235 failed because no WIKI_PUBLISH_TOKEN / GH_PERSONAL_ACCESS_TOKEN secret was supplied. Next action is follow the .agents/wiki-publishing-runbook.md, configure the repository Actions secret, then run the existing workflow and inspect a fresh browser artifact.


## 2026-10-22 — Publication attempt for the new video curriculum

- Updated .agents/PUBLISH_WIKI_NOW at commit b3d40fa53b4fb180768bca597a296896600dc30c to request publication of the new course links and coding/ML page to the existing Wiki.
- Checked the GitHub Actions run inventory immediately afterwards; it still showed only runs 39797230235, 39796597578 and 39796268242. The marker commit did not start a new workflow run.
- No live Wiki publication is claimed. The last completed publish attempt failed due to the missing Wiki-write Actions secret. The source repository changes and Wiki-source pages are committed; the existing workflow must be manually dispatched from GitHub Actions after the owner sets WIKI_PUBLISH_TOKEN or GH_PERSONAL_ACCESS_TOKEN.

## 2026-10-23 — Wiki publication authorization result

- Run #13 ([Actions](https://github.com/luckyhegde6/buildFPV/actions/runs/39844524646)) reached the push, after the link rewrite regression test passed and the publisher staged/committed 63 Markdown/image changes in the temporary Wiki clone.
- Push result: **HTTP 403**, `Permission to luckyhegde6/buildFPV.wiki.git denied to luckyhegde6`. The configured token is present but does not have effective Wiki Git write access. Do not treat credential-helper success as publication success.
- The live Playwright verification failed because the content was not published. The existing Wiki still needs a successful push and passing live-site verification.
- Follow-up required: replace `WIKI_PUBLISH_TOKEN` with a token authorized to write to the existing Wiki Git repository (see [GitHub PAT documentation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)); then rerun [the workflow](https://github.com/luckyhegde6/buildFPV/actions/workflows/wiki-publish-verify.yml). No token was exposed.

## 2026-10-23 — Classic PAT publish success and live verification

- Confirmed [run #14](https://github.com/luckyhegde6/buildFPV/actions/runs/39845553074): source pages pushed successfully to the existing Wiki after the classic PAT was configured.
- Playwright reported HTTP 200 for the Wiki Home, charger guide, and video compatibility matrix. Content/table checks passed on the charger and matrix pages. One Home-page local image, `images/fpv-build-concept-ai.jpg`, failed to load, so the workflow overall reported failure.
- Updated the publisher to force-stage publisher-managed Wiki images; [run #15](https://github.com/luckyhegde6/buildFPV/actions/runs/39845914339) successfully republished. Its Playwright/Chromium setup is still in progress; the image fix is not yet browser-confirmed.
- [Run #16](https://github.com/luckyhegde6/buildFPV/actions/runs/39846078398) is queued to validate the mandatory simulator playlist and newly added coding/ML Wiki page alongside image checks. Do not mark Playwright validation green yet.

## 2026-10-23 — Supplied FPV infographics added

- Updated Wiki source pages to include the user-provided basics, beginner, movement, and control-loop infographics. The control-loop visual is a committed binary WebP under `docs/assets/`.
- Fixed two broken legacy image references on Home/System Basics and added the missing “The control path” explanation to How FPV Drones Work.
- Run #18 publish job succeeded: https://github.com/luckyhegde6/buildFPV/actions/runs/39863362323.
- Browser verification did not complete; it remains in the Playwright/Chromium installation step. Run #19 is queued and now explicitly asserts all four intended image filenames. Await that report before recording the live-page image checks as passed.

## 2026-10-23 — Real-world Drone Parts photos published

- Downloaded 15 freely licensed Wikimedia Commons component photos into `docs/assets/` and added in-page attribution/CC license links and technical caveats to `docs/wiki-source/Drone-Parts-One-by-One.md`.
- Publisher script and workflow now download/validate, commit the binary files to main, and copy the local images into the existing Wiki.
- [Run #21](https://github.com/luckyhegde6/buildFPV/actions/runs/39929235479) succeeded for both publish and live Playwright verification. The live Drone Parts page returned HTTP 200, its required headings passed, and all 15 unique photos loaded from Wiki-local image paths. Image caption/alt text is asserted through image elements rather than body text.

## 2026-10-24 — Enlarge movement/control infographics

- Updated the two images in `How-FPV-Drones-Work.md` to use accessible HTML `img` tags with `width="1200"`.
- Publisher and prepublish test now handle/rewrite HTML `img src` attributes to Wiki-local images while preserving the width.
- [Run #22](https://github.com/luckyhegde6/buildFPV/actions/runs/40063630087) succeeded. Live Playwright measured both top infographics at 896 CSS px wide on desktop, with declared width 1200 and no page errors.

## 2026-10-24 — Enlarged section diagrams published

- Added scalable section diagrams across How-FPV-Drones-Work, FPV-System-Basics, Drone-Parts-One-by-One, and Simulator-Training.
- Created the missing lift/thrust asset and changed Simulator's two diagrams to Wiki-local relative paths after Run #23 detected image-path failures.
- [Run #24](https://github.com/luckyhegde6/buildFPV/actions/runs/40067259902) passed publisher regression and live Playwright checks. All required section images loaded locally and no page errors remained.

## 2026-10-24 — Real manufacturer product photos for drone and video guides

- Request: add real-world product images sourced from BETAFPV/CADDXFPV to the specified drone-class/frame and video/goggles/GPS guide set.
- Research/source choices: BETAFPV Air75 and Pavo25 V2/Pavo35 photos; CADDXFPV Ratel 2 analog camera, Walksnail Avatar HD Pro Kit and Avatar Goggles X; DJI O4 Air Unit product image from the official DJI Store; HDZero goggles and VRX product images from the official HDZero product site. Product captions link to the matching manufacturer page and retain exact-model/compatibility caveats.
- Class/frame changes: added three real product examples to Drone-Categories-and-Size-Guide.md; added BETAFPV Pavo25 V2 quad photo to 2-5-Inch-FPV-Guide.md; added a standalone Pavo25 V2 frame photo to 2-5-Inch-Frame-Guide.md. Preserved the existing appropriate GEPRC 5-inch and iFlight 7-inch model photos instead of forcing mismatched BETAFPV/CADDX products onto those class pages.
- Video changes: added product photos in FPV-Cameras-VTX-VRX-Compatibility-Comparison.md, FPV-Camera-Selection-Guide.md, Analog-vs-Digital-FPV-Camera-Video-Guide.md, Analog-Goggles-and-VRX-Integration.md, FPV-Goggles-and-VRX-Integration-Guide.md, DJI-O3-O4-Goggles-and-Air-Unit-Integration.md, Walksnail-Avatar-Goggles-and-Air-Unit-Integration.md, and HDZero-Goggles-and-VTX-Integration.md. Existing suitable product images were retained on Video Systems and Goggles, Video Antennas/VTX/VRX, and GPS/Flight Controllers.
- QA: fetched all 21 specified files from main and counted Markdown images. Each of the 21 now has at least one non-SVG, real product photo. Normalized whitespace around four image URLs. Verified the CADDX Ratel 2 image URL via its official product page; official DJI/HDZero image URLs were found through manufacturer pages. CDN rendering on the live Wiki has not yet been tested.
- Publish status: source changes are committed to main. Update .agents/PUBLISH_WIKI_NOW to trigger the existing publish workflow, then read the actual Action job results and browser report. Do not claim live publication until that run confirms it.

## 2026-10-24 — Official product photos published to ten drone/frame guides

- Added actual manufacturer images from BETAFPV and CADDXFPV to the 10 requested Wiki pages for drone classes and frame geometry. Captions link to official product pages and carefully distinguish full quad, frame, and video-system components.
- Updated `scripts/publish-wiki.sh` so CI's external-image skip still blocks unrelated hosts but lets the requested official BETAFPV / CADDXFPV image-CDN URLs be copied into Wiki-local `images/` assets.
- Expanded live Playwright page assertions to cover all 10 guides and expected official images.
- [Actions run #26](https://github.com/luckyhegde6/buildFPV/actions/runs/40075353669) succeeded for both publish and browser verification. All 10 targeted guides passed with no browser assertion errors.
- The 7-inch guides retain their existing iFlight AOS 7 frame photo; the Caddx GT2 image is clearly captioned as a video component, not a frame/drone.

## 2026-10-24 — Publish result review, CADDX CDN correction and expanded route checks

- Workflow run #27 (https://github.com/luckyhegde6/buildFPV/actions/runs/40075613106) pushed the existing Wiki successfully and its configured Playwright job returned WIKI_PLAYWRIGHT_PASSED=true. The report tested the current baseline subset; a number of page loads emitted 404 console messages, but configured required-content, expected-image and local-image checks reported no errors.
- Inspected the publisher logs. The skip-external-download setting correctly localized the BETAFPV Pavo25 V2 frame/quad and CADDX Ratel2 photo, but kept CADDX Avatar Pro Kit and Goggles X as external URLs because they used the non-www CDN hostname.
- Updated the source URLs to https://www.caddxfpv.com/cdn/shop/ in the video matrix, camera-selection, analog-vs-digital, general goggles/VRX and Walksnail integration guides, allowing the existing publisher whitelist to localize those images.
- Extended scripts/verify-wiki-live.mjs to test the additional video-system overview, camera selection, analog/digital, analog goggles, general goggles/VRX, DJI, Walksnail, HDZero, video antennas and GPS/FC pages. Added checks for required local product photos plus loaded external DJI/HDZero product images.
- The extended verifier and corrected image URLs are committed to main, but require a fresh workflow run before their live state can be marked verified.

## 2026-10-24 — Recreated a high-resolution system overview and extended visual treatment

- Created a project-owned 1800×1240 SVG called `fpv-system-basics-high-resolution.svg`. It shows representative drone hardware and keeps radio-control, FPV video and power pathways clearly separate. Captions state it is not a wiring or mechanical drawing.
- Published-source changes place the overview at width=1200 on FPV System Basics, Home, How FPV Drones Work, Drone Parts — One by One, and Getting Started. The 10 drone class/frame guides now use 1200-wide drone-overview SVG panels; the video/goggles/camera guides use the video-system panel, Video Antennas uses the antenna-types panel, and GPS/FC uses both FC anatomy and GPS-navigation panels.
- Updated `docs/assets/README.md` with the new asset and scope. Extended `scripts/verify-wiki-live.mjs` to require the relevant SVGs and check both the width attribute and rendered size.
- Latest live result before the enlarged panel rollout: run #28 published the product photo sources but failed the new Playwright assertions because the external DJI and HDZero product images did not load. Added explicit official-host download exceptions in `scripts/publish-wiki.sh` so those product images become Wiki-local. Fresh publication/browser verification is pending.

## 2026-10-24 — Added enlarged high-resolution diagrams to three more beginner pages

- **How FPV Drones Work:** added an original 1800×1220 SVG covering roll/pitch/yaw/throttle, lift/thrust balance and the receiver/flight-controller/ESC/motor feedback loop, embedded at width=1200.
- **RadioMaster Pocket Button Guide:** created an original 1800×1240 control-recognition schematic showing switches, Mode 2 stick commands, menu keys, USB simulator setup vs the real-aircraft ELRS model and key precautions. Replaced the small top image with a width=1200 embed; retained a link to the earlier compact map.
- **Simulator Training:** created an original 1800×1220 visual roadmap showing typical Mode 2 mapping, the drill sequence and a repeatable practice routine, embedded at width=1200. Existing axes/mode panels remain enlarged.
- Added two new SVG assets and a README asset registry entry; the live verifier now asserts local Wiki loading and enlarged image widths on all three target pages.
- Fixed two run #29 image issues for the next publish: direct Wiki-local src on Getting Started (the source-asset URL had remained external on that route), and use a genuine PNG source URL for the DJI O4 cover asset rather than requesting WebP with a .png pathname.
- Publication/browser verification for this batch is pending; a fresh workflow run is required.
