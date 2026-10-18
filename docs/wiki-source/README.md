# 📚 Wiki source pages and publishing

These Markdown files are the source for the **separate GitHub Wiki**. Names without `.md` become Wiki page titles; for example `Daily-Liftoff-Routine.md` becomes [[Daily Liftoff Routine]]. `_Sidebar.md` supplies the sidebar when added as a Wiki page with that exact name.

## Recommended page structure

- **Daily learning:** Daily Liftoff Routine, Simulator Training, Practice Skills and Race Times, Learning Journal.
- **Technical foundation:** FPV System Basics, How FPV Drones Work, Pocket ELRS and Liftoff, RadioMaster Pocket Button Guide, Pocket Video Walkthrough Notes, ExpressLRS Basics, Betaflight Basics.
- **RF/video/navigation:** Video Antennas VTX VRX, GPS and Flight Controllers.
- **Visual references:** Hardware Gallery (real builds, product photos, attribution and AI-generated concept artwork).
- **Build preparation:** Buying Parts in India, First Build Checklist, Video Systems and Goggles, Bench Safety and Flight Readiness.
- **Ongoing engineering:** Configuration and Customisation, Troubleshooting, BuildFPV Projects Library, Project Roadmap, References, India Outdoor Flying Rules.

## Publish in browser

1. Open https://github.com/luckyhegde6/buildFPV/wiki and confirm `Home` is already published.
2. For each file in this folder, create/update a Wiki page with the filename sans `.md` as the page name and paste its content. New pages include `How-FPV-Drones-Work.md`, `Video-Antennas-VTX-VRX.md`, `GPS-and-Flight-Controllers.md`, and `Hardware-Gallery.md`.
3. Add `_Sidebar.md` as a separate page to enable the navigation shown in the file.
4. Review the links after publishing. GitHub Wiki uses `[[Wiki Page]]` links; repository documentation uses relative Markdown links.
5. Add or update the matching index inside the repository's `docs/` folder so readers can use either entry point.

## Publish by Git (if Wiki access is enabled)

GitHub Wiki content lives in a separate repository, normally `https://github.com/luckyhegde6/buildFPV.wiki.git`:

```bash
git clone https://github.com/luckyhegde6/buildFPV.wiki.git
cd buildFPV.wiki
# Copy files from docs/wiki-source/ into this clone; keep filenames exact.
git add '*.md'
git commit -m "docs: expand beginner FPV wiki and daily practice habit"
git push
```

Do not paste credentials into a repository or shell history. If pushing fails, use GitHub's Wiki editor or review Wiki permissions.

## Repository issue templates

The root `.github/ISSUE_TEMPLATE/` folder has optional forms for a daily Liftoff practice session and a configuration change. Copy those files into the repository if you want structured logs directly in GitHub Issues. They are not Wiki pages.

## Style guide

Use short sections, tables only for real comparisons, `[!TIP]`/`[!WARNING]` GitHub alerts where supported, icons sparingly, and a checkable action at the end of a page. No arbitrary CSS is used because GitHub Markdown does not apply it. Prioritize contrast, scanability, accessibility, plain language and a next action.
