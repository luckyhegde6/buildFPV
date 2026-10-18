# 🚁 buildFPV — Learn. Practise. Build. Fly safely.

![FPV Learning](https://img.shields.io/badge/FPV-Learn%20by%20doing-0ea5e9?style=for-the-badge)
![Beginner first](https://img.shields.io/badge/Path-Beginner--first-22c55e?style=for-the-badge)
![License](https://img.shields.io/badge/License-GPL--3.0-8b5cf6?style=for-the-badge)

**A living field notebook for learning FPV from the simulator upwards.** Start with the radio you have, build control skills, understand the electronics, verify every compatibility assumption, and only then buy/build a quad.

> [!TIP]
> **Today's tiny win is enough:** open Liftoff, select your radio, practise one skill for 5–15 minutes, and record one thing you learned. Consistency beats a once-a-month marathon.

## 🧭 Choose your next step

| I want to… | Start here |
|---|---|
| Understand the whole aircraft | [FPV system basics](docs/01-fpv-basics.md) · [How flight works](docs/07-how-fpv-drones-work.md) |
| See real build photos and boards | [FPV hardware gallery](docs/LEARNING-GUIDE.md#visual-guides) |
| Build a daily flying habit | [Daily Liftoff routine](docs/learning-log/README.md) · [Learning journal](docs/learning-log/README.md) |
| Connect a Pocket ELRS to Liftoff | [Pocket ELRS guide](docs/03-pocket-elrs.md) |
| Learn VTX, VRX, antennas and range | [Video / antenna guide](docs/08-video-antennas-and-range.md) |
| Understand Pocket buttons, switches and gimbal adjustments | [Button, switch and gimbal guide](docs/06-pocket-button-guide.md) |
| Track sessions, race times and screenshots | [Practice log template](docs/learning-log/templates/daily-session.md) |
| Learn Betaflight without risky guesswork | [Betaflight basics](docs/LEARNING-GUIDE.md#beginner-path) · [Official docs](https://betaflight.com/docs/wiki/getting-started) |
| Compare GPS, FC stacks and AIO boards | [GPS and FC examples](docs/09-gps-and-flight-controller-examples.md) |
| Plan a first quad or tiny whoop | [First build checklist](docs/04-first-build.md) · [India buyer guide](docs/LEARNING-GUIDE.md#beginner-path) |
| Diagnose a problem | [Troubleshooting](docs/LEARNING-GUIDE.md#practice-cadence) |
| Explore the projects that inspired this repo | [Project library](docs/references.md) |

## 🏁 Recommended route

1. **Week 1 — radio + simulator:** establish USB input, learn the sticks, and practise basic orientation.
2. **Weeks 2–3 — consistency:** smooth turns, circuits, figure-eights, gates, and deliberate recovery.
3. **Parallel learning — systems:** understand ELRS, batteries, video ecosystems, Betaflight, and failsafe one topic at a time.
4. **Before buying:** decide where you can legally and safely fly, set the complete budget, then shortlist compatible options.
5. **Before maiden flight:** finish the propeller-off bench checklist and ask an experienced pilot to review the build.

Progress is a guide, not a deadline. Repeat a stage when you need to.

## 📁 Repository map

```text
buildFPV/
├── README.md
├── .github/ISSUE_TEMPLATE/       # Optional daily practice + configuration logs
└── docs/
    ├── 01-fpv-basics.md
    ├── 02-simulator-training.md
    ├── 03-pocket-elrs.md
    ├── 04-first-build.md
    ├── 05-roadmap.md
    ├── 06-pocket-button-guide.md
    ├── 07-how-fpv-drones-work.md
    ├── 08-video-antennas-and-range.md
    ├── 09-gps-and-flight-controller-examples.md
    ├── assets/
    │   ├── pocket-control-map.svg
    │   ├── flight-axes.svg
    │   ├── fpv-control-loop.svg
    │   ├── gps-data-chain.svg
    │   ├── fpv-build-concept-ai.jpg
    │   └── pocket-gimbal-adjustment.png
    ├── checklists.md
    ├── references.md
    ├── learning-log/
    │   ├── README.md
    │   └── templates/            # Copy for every session/change
    ├── LEARNING-GUIDE.md          # Maintained learning entry point
    └── wiki-source/              # Legacy/reference Markdown pages
```

## ✅ Keep these rules visible

- **Props off** for USB setup, firmware flashing, motor tests, and bench troubleshooting.
- Disconnect the LiPo before soldering, changing wiring, or investigating a short.
- Never power a video transmitter unless its manual's antenna/cooling requirements are met.
- Back up the current configuration before changing firmware or settings.
- Confirm receiver mapping, arming/disarming, motor order/direction, and failsafe before flight.
- Verify India's current airspace, aircraft, and radio rules through official sources before outdoor use.

## 📚 Learning guide — all content lives in this repository

Use the repository-native [FPV Learning Guide](docs/LEARNING-GUIDE.md) as the contents page. Every guide, diagram and project-owned image is versioned under this repository's `docs/` tree; a normal commit to `main` updates the learning material here without a separate Wiki repository. GitHub renders the Markdown pages directly, including the local SVG diagrams and image files.

## 🔬 How to write a good log

Mark each statement as one of these when it matters:

- **Verified fact:** confirmed in the exact manufacturer's documentation or measured on the hardware.
- **My observation:** what happened in my own sim/build.
- **Recommendation:** a suggested approach, with assumptions stated.
- **Open question:** something that needs verification before it becomes a build decision.

This is a learning project, not legal, electrical, or flight-safety certification. Always check the exact product manual and current local rules.


## 🎮 RadioMaster Pocket quick links

- [Button, switch and gimbal guide](docs/06-pocket-button-guide.md) — identify the Pocket controls and keep simulator and aircraft models separate.
- [Pocket-to-Liftoff setup](docs/03-pocket-elrs.md) — connect with a data-capable USB-C cable and calibrate each primary axis.
- [Video walkthrough notes](docs/LEARNING-GUIDE.md#practice-cadence) — record timestamps and verify instructions against official documentation.

> Safety reminder: USB joystick mode is separate from ExpressLRS binding. For physical aircraft bench work, remove every propeller and verify failsafe, arming, disarming, and motor direction before flight.


## 🖼️ FPV Visual Guides

The technical visuals are split into focused pages so each diagram has context:

- [How an FPV quad works](docs/07-how-fpv-drones-work.md) — real-build photo, throttle/roll/pitch/yaw, clockwise vs counter-clockwise props, lift, and the flight-controller feedback loop.
- [Video, antennas and range](docs/08-video-antennas-and-range.md) — separate control/video links, VTX and VRX, omni vs patch antennas, LHCP/RHCP and range factors.
- [GPS and flight-controller examples](docs/09-gps-and-flight-controller-examples.md) — GNSS/UART data path, GPS Rescue limitations, stacks vs AIO and SpeedyBee/BETAFPV examples.
- [Visual hardware gallery](docs/LEARNING-GUIDE.md#visual-guides) — local diagrams and image-backed visual explanations.
- [Repository-native learning guide](docs/LEARNING-GUIDE.md) — the single entry point for the beginner sequence and all visual guides.

The older `docs/wiki-source/` pages are retained as historical/reference material; the maintained learning path is under `docs/` and uses repository-local assets wherever available.
