# 📚 Repository-native learning docs

This folder contains legacy Wiki-style Markdown pages retained for reference. **The maintained entry point is [the buildFPV Learning Guide](../LEARNING-GUIDE.md)**, and the main learning pages are the Markdown files directly under `docs/`. The project does not depend on a separate GitHub Wiki repository.

## Where to start

- [Learning Guide](../LEARNING-GUIDE.md) — full beginner sequence and visual guide index.
- [FPV system basics](../01-fpv-basics.md) — control/video/power paths.
- [How FPV drones work](../07-how-fpv-drones-work.md) — thrust, axes, and controller loop.
- [RadioMaster Pocket guide](../06-pocket-button-guide.md) — buttons, switches, gimbals and simulator setup.
- [Liftoff training](../02-simulator-training.md) — structured control practice.
- [Video systems](../08-video-antennas-and-range.md) and [GPS / flight-controller examples](../09-gps-and-flight-controller-examples.md).

## Image handling

Project-owned diagrams and images are maintained under [`docs/assets/`](../assets/README.md). Main learning pages should use relative image links such as `assets/flight-axes.svg`; this keeps files versioned together and avoids depending on a separate Wiki's image upload mechanism. External product photos may still be useful as examples but can move or disappear, so always retain source credits and treat product images as illustrative only.

Before trusting a visual, confirm that the link opens and that the caption identifies its source. Never use a general product photo as a wiring or motor-order instruction. Exact manufacturer manuals and board-revision documentation remain authoritative.

## Editing style

Use short sections, clear tables only where they compare actual options, alt text on images, source credits, a safety note where needed, and a concrete beginner checkpoint at the end. Keep the terminology consistent across pages, explain acronyms on first use, and separate verified facts from examples or recommendations.
