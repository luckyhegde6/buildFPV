# Agent-to-Agent Handoff — buildFPV

**Updated:** 2026-10-22  
**Repository:** https://github.com/luckyhegde6/buildFPV  
**Branch:** `main`  
**Last session-log state checked before this handoff update:** see the latest `SESSIONS.md` entry for the 2026-10-22 trigger fix and queued run IDs.  
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
- Master TODO now records implementation and publish blockers, including the remote Playwright workflow. [Latest TODO update](https://github.com/luckyhegde6/buildFPV/commit/7831a3da4bd8ded33e64312c2ef96478a7c5b19e)
- Remote publish/test infrastructure: [Playwright verifier](https://github.com/luckyhegde6/buildFPV/commit/adf153b4bb3dd60e65007fd283913bcacf46c941) · [GitHub Actions workflow](https://github.com/luckyhegde6/buildFPV/commit/e177a66f90115804928e98cf364e7a5bec4d3bc3) · [marker commit](https://github.com/luckyhegde6/buildFPV/commit/0e8cf8169b26c627f0c00019493cf3ab6d2eaaf1) · [README workflow link](https://github.com/luckyhegde6/buildFPV/commit/d1d302e03af6b3905fe13b3f61b213916f5a8d8a)

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

- Contributor discoverability was added to the repository README. [Commit](https://github.com/luckyhegde6/buildFPV/commit/549392b19f67fe9aab1e321652df7767d85bd32b)

- The current repository README links the remote [Publish and verify existing Wiki workflow](https://github.com/luckyhegde6/buildFPV/actions/workflows/wiki-publish-verify.yml) for manual dispatch if the trigger commit does not start Actions.

Key commits: [AGENTS.md](https://github.com/luckyhegde6/buildFPV/commit/7047eb25b8fd561a47fbf08222d93ec5a0083298), [research workflow](https://github.com/luckyhegde6/buildFPV/commit/a64aea5015adf8d884450ba5a18452351245ec33), [session log update](https://github.com/luckyhegde6/buildFPV/commit/044efb25845377b62d606c733c382e78a9b5d7ed), [durable memory update](https://github.com/luckyhegde6/buildFPV/commit/e81e72d44dd58e4982675aa1a8b1ad5f0f2f3bcc).

## Publish and verify status — publish blocked; Playwright evidence captured

| Stage | State |
|---|---|
| Wiki-source pages committed in source repo | Done |
| Agent framework and TODO/handoff rules committed | Done |
| Headless Playwright verification script committed | Done |
| GitHub Actions publish/verify workflow committed | Done |
| Publish marker committed and retriggered | Done — workflow conditions accept both added and modified marker paths |
| GitHub Actions run registered | **Yes** — run `39797230235`; publisher failed on missing secret; Playwright checks failed and uploaded artifact `12434310973` |
| Existing Wiki fetched and compared before publish | Not done |
| Wiki push confirmed | Not done |
| Live Home/sidebar/charger/video pages and media verified | **Failed checks captured** — target guides redirect to Home; required content/tables absent; one live image 404 |

## Wiki publishing guide

Created [`.agents/wiki-publishing-runbook.md`](.agents/wiki-publishing-runbook.md), covering PAT generation (fine-grained first where supported, classic fallback), the exact `WIKI_PUBLISH_TOKEN` / `GH_PERSONAL_ACCESS_TOKEN` Actions secret names, secure local authentication, regression tests, interactive publisher review, manual workflow dispatch, verification evidence, troubleshooting and token rotation.

## Remote execution attempt

The local container has Node.js 22.16.0, a `playwright` CLI version 1.57.0, and system Chromium. However:
- `timeout 35s npx --yes playwright --version` did not finish within the execution window.
- Headless Chromium navigation to the live Wiki failed with `net::ERR_BLOCKED_BY_ADMINISTRATOR`.
- Direct curl reports `Could not resolve host: github.com`; the web fetcher returned cache misses for the Wiki routes.
- The first workflow push attempt did not register a run, exposing a marker-condition mismatch. The workflow now accepts `added` or `modified` marker paths; the marker update registered runs `39796268242` and `39796597578` on push.
- The latest run has now emitted job steps and evidence. Link-rewrite regression passed; publisher failed because the `WIKI_PUBLISH_TOKEN` / `GH_PERSONAL_ACCESS_TOKEN` secret was empty; Playwright installed and ran headless Chromium, but required route/content/image checks failed. Artifact `12434310973` contains report and screenshots. The run summary API had lagged job state, so trust completed step logs and the artifact over a stale top-level `in_progress` label.
- Corrected `scripts/verify-wiki-live.mjs` from an over-escaped whitespace regex to `/\s+/g`, and triggered a subsequent run at commit `f2323a59632e35084240b09d314ada144025fa0f`.

The following are committed for a network-enabled GitHub-hosted Actions runner:
- `scripts/verify-wiki-live.mjs` — Playwright headless checks for Home, charger guide and video matrix at desktop and mobile viewports; required content, HTTP status, tables, extensionless routes and Wiki-local images; screenshots and JSON report.
- `.github/workflows/wiki-publish-verify.yml` — installs Playwright with `npx`, runs `scripts/test-wiki-link-rewrite.sh`, publishes to the existing Wiki, then uploads screenshots/report.
- `.agents/PUBLISH_WIKI_NOW` — deliberate re-trigger marker. Editing it triggers the workflow; both `push` and `workflow_dispatch` remain configured.

## Exact next action

Inspect the [latest run](https://github.com/luckyhegde6/buildFPV/actions/runs/39797230235) and [workflow page](https://github.com/luckyhegde6/buildFPV/actions/workflows/wiki-publish-verify.yml). Run [39797230235](https://github.com/luckyhegde6/buildFPV/actions/runs/39797230235) produced artifact [12434310973](https://github.com/luckyhegde6/buildFPV/actions/runs/39797230235/artifacts/12434310973). The publisher failed at credential setup because neither allowed Wiki-write secret was configured. The headless Playwright job ran but failed because both target page URLs redirected to Home, expected model text/tables were absent, and `fpv-build-concept-ai.jpg` did not load from the live Wiki. Follow [the Wiki Publishing Runbook](.agents/wiki-publishing-runbook.md) to generate the PAT and configure either `WIKI_PUBLISH_TOKEN` or `GH_PERSONAL_ACCESS_TOKEN` under Settings → Secrets and variables → Actions. The owner must add the secret with permission to push to the existing Wiki Git remote. Never put tokens into files, chat, or workflow logs.

Before retrying, the repository owner must add `WIKI_PUBLISH_TOKEN` or `GH_PERSONAL_ACCESS_TOKEN` in Settings → Secrets and variables → Actions, with write access to the existing Wiki Git remote; never paste the secret into chat or commit it. Then run the workflow from the Actions UI and review the newly generated report. The source repository contains `docs/assets/fpv-build-concept-ai.jpg`, which the publisher should copy when it can publish.


**Latest remote run update (22 October 2026):** Run [39797230235](https://github.com/luckyhegde6/buildFPV/actions/runs/39797230235) uses commit `ab2592162031430ecb510238af93c3957b40e1f1`. Link-rewrite regression passed. Publisher job failed due to the missing Wiki-write secret. Playwright/Chromium installation succeeded, and the headless report plus six viewport screenshots were uploaded as [artifact 12434310973](https://github.com/luckyhegde6/buildFPV/actions/runs/39797230235/artifacts/12434310973). Report result: `passed: false`; the two guide URLs redirected to Home, missing required content and tables, and a live Wiki-local JPEG returned `naturalWidth: 0`. Source asset exists in `docs/assets/`. The Wiki has not been published by this workflow.


**Post-run changes (not yet re-tested):** after run `39797230235`, `scripts/verify-wiki-live.mjs` gained an explicit final-route assertion (commits `740db33c80abc257ca28a7d64ccef09ed56065a6` and `79572b9a7a3f7174453ea854e339406fa60a4a27`), and `.github/workflows/wiki-publish-verify.yml` had shell-summary quoting/newline fixes (commits `60f521b52f97e175ae6811886c6dbd5f42a71606`, `84f5e794081d5b573715d211b52c26b708776207`, `032fecd0fe52f4a90d76c215620722d73dc4d9e3`). The latest marker update is commit `8e3833255f9485e608d68e75f79333c43a57e3f4`, but the Actions API still shows only three runs and no new run for that marker. Thus those later changes are not yet tested. The next reliable action is to add the Wiki-write secret and manually run the workflow from the Actions UI so current `main` is tested.

## Video learning resources added — source files updated, live Wiki publish pending

- Added the supplied videos/playlists across README, docs/, and canonical docs/wiki-source/ pages.
- Mandatory beginner course: [Learn to fly an FPV drone (for total beginners)](https://www.youtube.com/playlist?list=PLwoDb7WF6c8lCKhQOTy-Vb9LfW0VAIrTP), linked from the README, learning guide, simulator training, Wiki Home, Getting Started, Simulator Training and Daily Liftoff Routine.
- Added drone systems/control playlist and video to system basics/how-drones-work pages, the RadioMaster Pocket setup video to Pocket guides, DGCA/drone-awareness playlists to India rules and references pages, and a new [Drone Coding and Machine Learning page](docs/wiki-source/Drone-Coding-and-Machine-Learning.md) plus [repository guide](docs/drone-coding-and-ml.md).
- Added links to Wiki Home and the sidebar, docs learning guide, reference library and roadmap. Clickable YouTube thumbnails link to individual videos; playlists use direct YouTube playlist links because GitHub-flavored Markdown filters raw iframe tags.
- DGCA videos are marked supplemental and not a legal authority; official DGCA / Ministry of Civil Aviation and Digital Sky links remain primary. Playlist titles/syllabus that could not be confirmed are not inferred.
- A source-level pass re-fetched 20 affected/new files through GitHub MCP and found all supplied playlist/video IDs in the intended docs/Wiki-source groups. The final content check confirmed the new coding page is linked from Wiki Home/sidebar and the mandatory playlist appears in Home. This does not establish that the live Wiki has updated.
- **Publication status:** these edits are in buildFPV/main source files. The existing live Wiki still needs a successful publish workflow; the prior run (39797230235) was blocked by the missing WIKI_PUBLISH_TOKEN / GH_PERSONAL_ACCESS_TOKEN Actions secret. A marker update for this video-course change committed as b3d40fa53b4fb180768bca597a296896600dc30c, but the Actions inventory still shows only the three earlier runs, so it did not produce a new run. Open [the workflow](https://github.com/luckyhegde6/buildFPV/actions/workflows/wiki-publish-verify.yml) and manually dispatch it after configuring the secret. See [the publishing runbook](.agents/wiki-publishing-runbook.md).

## Research and safety caveats

- Confirm each model/SKU/revision and official manual. Product weights, camera modes, voltage, power, goggles compatibility and firmware are not universal across generations.
- The Walksnail Avatar HD Pro page contains non-reconciling marketing versus component weight claims; the source matrix flags the discrepancy pending better evidence.
- Live feed, onboard recording and goggles DVR are separate. “HD” is not a universal inter-brand video standard.
- All battery and bench instructions remain safety-critical: remove props for bench setup/motor checks, disconnect battery before soldering/short investigation, follow exact VTX antenna/cooling guidance, and do not use/charge damaged or swollen packs.
- The source-level table check and empty commit-status result are not a full test suite, visual review, or Wiki publish. No successful remote browser report or Wiki push has been established yet.

## Wiki publication status — 2026-10-23

- The owner reported `WIKI_PUBLISH_TOKEN` is now configured. Run #13 ([Actions](https://github.com/luckyhegde6/buildFPV/actions/runs/39844524646)) confirmed the secret is non-empty, passed `scripts/test-wiki-link-rewrite.sh`, cloned the existing Wiki Git remote, and staged/committed 63 Markdown/image changes in the runner's temporary Wiki clone.
- **The remote publish did not succeed.** `git push origin HEAD` returned HTTP 403: `Permission to luckyhegde6/buildFPV.wiki.git denied to luckyhegde6`. This is now an authorization/scope/repository-access problem, not a missing-secret or Git-identity issue. The token value was not read or printed.
- The live Playwright check failed because the newly staged Wiki content was not pushed. Do not claim the public Wiki has been updated.
- Publisher reliability changes now in `main`: skip optional third-party image downloads in Actions, cap image downloads for normal local runs, normalize trailing blank lines before staging, batch Wiki link rewrites into one `sed` pass per page, and configure a repository-local fallback Git commit identity when none exists.
- **Next action:** replace `WIKI_PUBLISH_TOKEN` in [Actions secrets](https://github.com/luckyhegde6/buildFPV/settings/secrets/actions) with a token that can actually push to the existing Wiki Git remote. GitHub documents the classic PAT `repo` scope for command-line repository access; ensure the token owner is `luckyhegde6` and the account has write access to the Wiki ([PAT documentation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens), [Wiki access documentation](https://docs.github.com/en/communities/documenting-your-project-with-wikis/about-wikis)). Never paste the token in chat. After replacing the secret, dispatch [the existing publish/verify workflow](https://github.com/luckyhegde6/buildFPV/actions/workflows/wiki-publish-verify.yml) and verify both the Wiki push and Playwright report.

## Live Wiki publication update — 2026-10-23

- The owner replaced `WIKI_PUBLISH_TOKEN` with a classic PAT. [Workflow run #14](https://github.com/luckyhegde6/buildFPV/actions/runs/39845553074) successfully pushed the source pages to the existing Wiki Git remote. The prior HTTP 403 is resolved.
- The first live Playwright check returned HTTP 200 for Home, charger guide and video compatibility matrix; the charger and matrix text/table checks passed. It failed on one Wiki-local Home image: `images/fpv-build-concept-ai.jpg`.
- The publisher now force-stages publisher-managed files under `images/`. [Run #15](https://github.com/luckyhegde6/buildFPV/actions/runs/39845914339) successfully republished after that fix. Its Playwright step is still stuck at Playwright/Chromium installation, so this retry does not yet prove the image fix.
- [Run #16](https://github.com/luckyhegde6/buildFPV/actions/runs/39846078398) is queued with expanded checks for the mandatory beginner course and Drone Coding and Machine Learning page. Do not claim a clean end-to-end verification until a browser report passes.

## FPV infographic publish — 2026-10-23

- User supplied four FPV visual guides for the Wiki. The source pages now reference basics + beginner guide at the top of `FPV-System-Basics.md`, and movement + control-loop guides at the top of `How-FPV-Drones-Work.md`.
- The control-loop infographic is committed as a real `docs/assets/fpv-drone-control-loop-guide.webp` binary; Run #18 ([Actions](https://github.com/luckyhegde6/buildFPV/actions/runs/39863362323)) successfully pushed the updated pages/assets to the existing `buildFPV.wiki.git` remote.
- Replaced the stale `fpv-build-concept-ai.jpg` reference on Home with the basics infographic and the stale video-path image on System Basics with `fpv-video-link-separation.svg`. Added the tested `The control path` explanatory text to How FPV Drones Work.
- The live Playwright job for Run #18 is still stuck in its Playwright/Chromium install step and has not reached page/image assertions. Run #19 ([Actions](https://github.com/luckyhegde6/buildFPV/actions/runs/39863710538)) is queued with explicit required-image checks for the two System Basics visuals and both How FPV Drones Work visuals. Do not mark live-browser verification green until the report completes.

## Real-world component photos — published and verified (2026-10-23)

- Updated the existing [Drone Parts One by One Wiki page](https://github.com/luckyhegde6/buildFPV/wiki/Drone-Parts-One-by-One) with real-world component photographs placed immediately after the existing infographics: overall FPV quad, frame, LiPo battery, motor/ESC, propeller, ESC, flight controller, sensor/control board, receiver, camera, VTX, goggles/radio, antennas, GPS and buzzer.
- The images were downloaded at resized widths from Wikimedia Commons, stored in `docs/assets/fpv-photo-*`, and the source files include creator/source/license attribution and model/wiring caveats. Asset credits are in `docs/assets/REAL-WORLD-COMPONENT-PHOTO-CREDITS.md`.
- Workflow `scripts/download-component-photos.sh` downloads and validates images, commits assets to `main`, then the existing publisher copies the page and images into `buildFPV.wiki.git`.
- Live publish + headless verification passed in [Actions run #21](https://github.com/luckyhegde6/buildFPV/actions/runs/39929235479). The Drone Parts page returned HTTP 200; Playwright checked the target page and all 15 unique photo filenames loaded as Wiki-local images with nonzero natural dimensions. The overall photo is intentionally reused in two sections.
- Component-photo assertion bug was fixed: test actual visible section headings via body text, and validate photo alt text/images through image elements / required Wiki-local image checks.

## Enlarged How FPV Drones Work infographics — verified (2026-10-24)

- The two infographics under `## Visual guides: movement, lift and control` now use HTML `<img width="1200">` embeds, preserving descriptive alt text. The Wiki publisher recognizes HTML `img src` references, copies the WebP files to its own `images/` directory and rewrites the source URL while retaining the width attribute.
- Prepublish regression test now covers the HTML image rewrite.
- Live publish and Playwright checks passed in [Actions run #22](https://github.com/luckyhegde6/buildFPV/actions/runs/40063630087). Both `fpv-drone-movements-guide.webp` and `fpv-drone-control-loop-guide.webp` report `declaredWidth=1200`, `renderedWidth=896` at desktop viewport, loaded from Wiki-local paths; the page has no errors.

## Enlarged FPV section panels — published and verified (2026-10-24)

- Added separate scalable section illustrations to the existing Wiki guides: overview build, drone axes and movements, lift/thrust, control loop, video link, antenna types, flight-controller anatomy, motors/props, radio-control link, GPS/navigation, and flight modes.
- Updated `docs/wiki-source/How-FPV-Drones-Work.md`, `FPV-System-Basics.md`, `Drone-Parts-One-by-One.md`, and `Simulator-Training.md` to place relevant images adjacent to their topic explanations, using descriptive alt text and `width="1200"`.
- Created missing `docs/assets/fpv-section-lift-thrust.svg` after the first verification detected the referenced asset had not been committed.
- Set Simulator Training's axes / flight-modes images to direct Wiki-local `images/` paths. The same assets are copied into the Wiki by How-FPV-Drones-Work's project-asset references, avoiding the prior non-local detection.
- Existing publisher regression test passed; the publish job and full Playwright verification passed in [Run #24](https://github.com/luckyhegde6/buildFPV/actions/runs/40067259902). The verifier checked required section images, Wiki-local loading and expanded display sizing across all four guides; no page-level validation errors remain.

## 2026-10-24 — Manufacturer product photos in drone/video guides

- Added real manufacturer-hosted product photos to the class overview, 2.5-inch class/frame guides, video-system compatibility comparison, camera selection, analog-vs-digital video, analog video-chain, general goggles/VRX, DJI O3/O4, Walksnail Avatar and HDZero guides.
- Images are direct product-CDN images where relevant: BETAFPV Air75/Pavo25 V2/Pavo35; CADDXFPV Ratel 2 analog camera, Walksnail Avatar HD Pro Kit and Goggles X; DJI O4 Air Unit; HDZero goggles and VRX. Captions link to exact maker pages and distinguish real photos from diagrams. Kept the appropriate GEPRC 5-inch and iFlight 7-inch frame photos rather than placing an unrelated BETAFPV/CADDX model into those classes.
- Source pages updated on main: Drone-Categories-and-Size-Guide.md, 2-5-Inch-FPV-Guide.md, 2-5-Inch-Frame-Guide.md, FPV-Cameras-VTX-VRX-Compatibility-Comparison.md, FPV-Camera-Selection-Guide.md, Analog-vs-Digital-FPV-Camera-Video-Guide.md, Analog-Goggles-and-VRX-Integration.md, FPV-Goggles-and-VRX-Integration-Guide.md, DJI-O3-O4-Goggles-and-Air-Unit-Integration.md, Walksnail-Avatar-Goggles-and-Air-Unit-Integration.md, and HDZero-Goggles-and-VTX-Integration.md.
- Source-level check re-fetched all 21 requested source pages and found at least one non-SVG product photo on every page. The changed pages also include source-linked captions. This is not proof that the external CDN assets rendered in the live Wiki.
- Publication state: source edits are committed. The existing publish/verify workflow still needs a fresh run for this batch; update .agents/PUBLISH_WIKI_NOW to trigger it, then require the publish job and live image assertions to pass before marking the Wiki updated.

## Official BETAFPV / CADDXFPV real-world photos — published and verified (2026-10-24)

- Added official product photographs across all 10 requested class/frame pages: Drone Categories and Size Guide; Tinywhoops and Micro FPV; 2.5-Inch FPV Guide; 3.5-Inch Cinewhoop Guide; 5-Inch FPV Racing and Freestyle; 7-Inch Long-Range FPV; 2.5-Inch Frame Guide; 3.5-Inch Cinewhoop Frame Assembly; 5-Inch Frame Assembly; 7-Inch Long-Range Frame Assembly.
- Images include BETAFPV Air65 II and Meteor75 Pro II, Pavo25/Pavo25 V2 frame, Pavo35 quad/frame, X-Knight 5-inch quad/frame, and CADDXFPV / Walksnail Avatar GT2 video system. Captions link to the manufacturer's product page and distinguish product vs frame vs video-system component.
- No verified 7-inch drone/frame product was found from BETAFPV or CADDXFPV in the checked official product pages; the 7-inch guides retain the existing iFlight AOS 7 frame photo and show the Caddx GT2 kit only as a long-range video hardware example, not a 7-inch aircraft/frame.
- Publisher now allows official BETAFPV and CADDXFPV product-CDN downloads even when broad third-party image downloading is disabled in CI. Manufacturer images are copied into Wiki-local `images/` paths using hashed filenames.
- Browser publish and live Playwright verification passed in [Actions run #26](https://github.com/luckyhegde6/buildFPV/actions/runs/40075353669). All 10 new page cases passed with no validation errors; representative local file names from browser report include `Air65_II_Brushless_Whoop_Quadcopter_Champion-820d135a.jpg`, `pavo25-whoop-quadcopter...-a11fa374.jpg`, `Meteor75_Pro_II...-0db412b9.jpg`, `FCC-3d05f77c.jpg`, `Avatar_GT2_Kit-32c02d0f.webp`, and Pavo25/Pavo35 frame assets.
