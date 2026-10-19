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

4. Review the staged diff. The script asks for the exact confirmation word `PUBLISH` before it commits and pushes Wiki pages.
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

The Wiki-ready source and image references can be reviewed in this repository. The connected GitHub API currently reports `has_wiki: true` for the main repository, but `buildFPV.wiki` still returns `404 Not Found`, which usually means its initial page has not been saved yet. The live Wiki could not be browser-verified from the current environment; do not treat a successful `main` commit as proof that the separate Wiki has been published.
