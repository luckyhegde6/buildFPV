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
| Understand the whole aircraft | [FPV system basics](docs/01-fpv-basics.md) |
| Build a daily flying habit | [Daily Liftoff routine](docs/wiki-source/Daily-Liftoff-Routine.md) · [Learning journal](docs/learning-log/README.md) |
| Connect a Pocket ELRS to Liftoff | [Pocket ELRS guide](docs/03-pocket-elrs.md) |
| Track sessions, race times and screenshots | [Practice log template](docs/learning-log/templates/daily-session.md) |
| Learn Betaflight without risky guesswork | [Betaflight basics](docs/wiki-source/Betaflight-Basics.md) |
| Plan a first quad or tiny whoop | [First build checklist](docs/04-first-build.md) · [India buyer guide](docs/wiki-source/Buying-Parts-in-India.md) |
| Diagnose a problem | [Troubleshooting](docs/wiki-source/Troubleshooting.md) |
| Explore the projects that inspired this repo | [Project library](docs/wiki-source/BuildFPV-Projects-Library.md) |

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
    ├── checklists.md
    ├── references.md
    ├── learning-log/
    │   ├── README.md
    │   └── templates/            # Copy for every session/change
    └── wiki-source/              # Source files for GitHub Wiki
```

## ✅ Keep these rules visible

- **Props off** for USB setup, firmware flashing, motor tests, and bench troubleshooting.
- Disconnect the LiPo before soldering, changing wiring, or investigating a short.
- Never power a video transmitter unless its manual's antenna/cooling requirements are met.
- Back up the current configuration before changing firmware or settings.
- Confirm receiver mapping, arming/disarming, motor order/direction, and failsafe before flight.
- Verify India's current airspace, aircraft, and radio rules through official sources before outdoor use.

## 🗂️ Wiki

Open the [buildFPV Wiki](https://github.com/luckyhegde6/buildFPV/wiki) for short, navigable learning pages. Source Markdown for the pages is in [`docs/wiki-source`](docs/wiki-source/README.md). GitHub does not apply arbitrary CSS to Markdown; this project uses headings, icons, clear callouts, diagrams, tables, checklists, and badges for consistent visual hierarchy.

## 🔬 How to write a good log

Mark each statement as one of these when it matters:

- **Verified fact:** confirmed in the exact manufacturer's documentation or measured on the hardware.
- **My observation:** what happened in my own sim/build.
- **Recommendation:** a suggested approach, with assumptions stated.
- **Open question:** something that needs verification before it becomes a build decision.

This is a learning project, not legal, electrical, or flight-safety certification. Always check the exact product manual and current local rules.
