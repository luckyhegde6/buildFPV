# 📚 Wiki source pages and publishing workflow

This folder contains the Markdown pages intended for the **GitHub Wiki view**. The canonical source and reusable image assets remain in this main repository:

- Wiki-ready page sources: `docs/wiki-source/*.md`
- Project-owned diagrams and artwork: `docs/assets/`
- Beginner entry point: [the repository Learning Guide](../LEARNING-GUIDE.md)
- Image/diagram mapping and attribution: [asset index](../assets/README.md)

The source pages use stable `raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/...` URLs for project-owned diagrams so they preview correctly in the main repository. During publishing, `scripts/publish-wiki.sh` copies those project assets into the Wiki repository's `images/` folder, downloads externally hosted image references when possible, and rewrites the Wiki copies to use local `images/...` paths. This means the published Wiki carries its own copies of the images instead of relying only on hotlinks.

## Publish to the live GitHub Wiki

GitHub's documented local workflow requires one initial Wiki page to be created on GitHub before the `OWNER/REPO.wiki.git` repository can be cloned. See [GitHub's instructions for adding and editing Wiki pages](https://docs.github.com/en/communities/documenting-your-project-with-wikis/adding-or-editing-wiki-pages).

1. Open [the buildFPV Wiki](https://github.com/luckyhegde6/buildFPV/wiki/).
2. If GitHub shows **Create the first page** / **New Page**, create the initial page. The Home content to paste is in [Home.md](Home.md). Save it once; that initializes the Wiki repository.
3. From a local clone of this main repository, pull the latest `main` and run:

   ```bash
   bash scripts/publish-wiki.sh
   ```

4. Review the staged diff. For a normal interactive publish, type the exact confirmation word `PUBLISH`. For a deliberate non-interactive publish from automation, use `bash scripts/publish-wiki.sh --yes`.
5. Verify the live Home page, sidebar, images, and internal links after the push.

The publisher intentionally refuses to push to a mismatched remote or over a dirty Wiki checkout. Do not rename `_Sidebar.md`; GitHub uses that exact filename.

## Image and content rules

- Use a visual where it helps explain the adjacent concept; avoid repeating the same diagram without a reason.
- Keep descriptive alt text and a short caption for context.
- Use project-owned diagrams for axes, control-loop and GPS data-flow explanations.
- External product photos are examples, not wiring diagrams. Keep source links/credits and confirm the exact revision's manual for real build decisions.
- Concept art is for orientation only. Never use it to infer pins, motor numbering, rotation or wiring.
- Explain each acronym at first use and separate controller RF links from FPV video links.
- Finish practical pages with a knowledge check or safety checkpoint.

## Current publication status

The Wiki-ready source and image references can be reviewed in this repository. The connected GitHub API reports the main repository has Wiki enabled, but the separate `buildFPV.wiki` repository still returns `404 Not Found`, which usually means its initial page has not been saved yet. The live Wiki could not be browser-verified from this environment. Save the first Home page in the Wiki UI, then run the publisher and verify the published pages and images; a commit to the main repository is not itself publication.


## FPV System Basics — guided subpages

The System Basics page is the hub. These six focused explainer pages describe the energy, control, propulsion, video and supporting-data paths in plain language, link back to practical setup pages, and include knowledge checks:

- [FPV Power System Explained](FPV-Power-System-Explained.md)
- [Flight Controller and Stabilization Explained](Flight-Controller-and-Stabilization-Explained.md)
- [FPV Propulsion System Explained](FPV-Propulsion-System-Explained.md)
- [FPV Radio-Control Path Explained](FPV-Radio-Control-Path-Explained.md)
- [FPV Video Path Explained](FPV-Video-Path-Explained.md)
- [FPV GPS, Telemetry and Recovery Explained](FPV-GPS-Telemetry-and-Recovery-Explained.md)

The source pages intentionally distinguish conceptual paths from real wiring. Always use exact manufacturer board drawings and current firmware guides for voltage, pinout, motor order, firmware targets and safety-critical configuration.


## Simulator integration guides

- `Pocket-ELRS-and-Liftoff.md` — RadioMaster Pocket setup for the original Liftoff FPV Drone Racing.
- `Pocket-ELRS-and-Liftoff-Micro-Drones.md` — USB controller setup and per-game calibration for Liftoff: Micro Drones.
