# Reference library

Use official project documentation for installation, firmware targets, wiring, supported hardware and troubleshooting. Re-check current state before following an old video or guide; projects evolve.

## Personal starting resources

- Joshua Bardwell beginner FPV playlist supplied for this project: https://youtube.com/playlist?list=PLwoDb7WF6c8lCKhQOTy-Vb9LfW0VAIrTP
- Liftoff FPV simulator: https://store.steampowered.com/app/410340/Liftoff_FPV_Drone_Racing/
- RadioMaster official site and documentation: https://radiomasterrc.com/
- ExpressLRS documentation: https://www.expresslrs.org/
- EdgeTX documentation: https://edgetx.org/

## Projects to explore in stages

| Project | Primary role | When it is useful | Beginner caution |
|---|---|---|---|
| [ExpressLRS](https://github.com/ExpressLRS/ExpressLRS) | Open RC link firmware/ecosystem | Now: understand the Pocket ELRS control link and compatible receivers | Flash only the correct target/version; understand binding and failsafe first. |
| [TBS Source One](https://github.com/tbs-trappy/source_one) | Open-source FPV frame design reference | During first-build planning | A frame repository is not a complete compatible electronics bill of materials. Check revision, dimensions and hardware. |
| [RubyFPV](https://rubyfpv.com/) / [RubyFPV source](https://github.com/RubyFPV/RubyFPV) | RubyFPV flight-controller firmware/ecosystem | Later, after standard FC/firmware concepts are understood | Verify current maintenance, supported boards and device-specific docs before selecting it for a first aircraft. |
| [Gyroflow](https://github.com/gyroflow/gyroflow) | Video stabilization workflow | After recording footage and learning the video pipeline | It is post-processing, not a flight-controller or live-video system; compatibility depends on camera footage and gyro data. |
| [OpenVTx](https://github.com/OpenVTx/OpenVTx) | Open VTX firmware for supported hardware | Later, if your exact VTX is supported and you have a recovery plan | VTX firmware is hardware-specific; do not flash arbitrary targets or ignore RF rules. |
| [OpenHD](https://github.com/OpenHD/OpenHD) | Open digital FPV video/telemetry ecosystem | Advanced project when you want the capabilities and complexity of an open digital link | Adds hardware/software/network and RF planning; not necessary for learning to fly. |
| [awesome-flying-fpv](https://github.com/Matthias84/awesome-flying-fpv) | Curated link list | For discovering other learning resources | Treat it as an index, not the final authority; check each linked project for current status. |

This table is an orientation aid, not a definitive project-health assessment. A later research pass should verify recent releases, active maintenance, supported hardware, licensing and documentation for each project.

## India: verify current rules before outdoor flying

Rules for aircraft operation and radio equipment can change and may depend on aircraft category, use, location and equipment. Check current official sources before a real flight rather than relying on forum posts or an old video:

- DGCA: https://www.dgca.gov.in/
- Digital Sky: https://digitalsky.dgca.gov.in/
- Ministry of Civil Aviation: https://www.civilaviation.gov.in/
- Wireless Planning & Coordination (WPC), Department of Telecommunications: https://dot.gov.in/wireless-planning-coordination

This repository does not interpret those rules as legal advice. Confirm that the planned aircraft, location, operation and radio equipment are permitted under the current requirements.

## Updated official docs and India purchase links (checked 17 Oct 2026)

- Betaflight: https://betaflight.com/ and https://betaflight.com/docs/wiki/getting-started/setup-guide
- ExpressLRS getting started / binding: https://www.expresslrs.org/quick-start/getting-started/ and https://www.expresslrs.org/quick-start/binding/
- India stores: [Design Info FPV](https://www.designinfo.in/c/drones-aerial-imaging/fpv-drone-parts/), [DRK Store](https://www.drkstore.in/fpv-accessories-parts/), [Robu drone parts](https://robu.in/product-category/drone-parts/)
- Video systems: [CADDXFPV](https://www.caddxfpv.com/), [BETAFPV](https://betafpv.com/)
- India official rule start point: [Ministry of Civil Aviation — Drone Rules, 2021](https://www.civilaviation.gov.in/ministry-documents/rules/drones-rules-2021-dated-25-august-2021); re-check later amendments and Digital Sky airspace on the day.

For the guided buyer workflow, see [Buying Parts in India](wiki-source/Buying-Parts-in-India.md). For habit and progress logging, see [Daily Liftoff Routine](wiki-source/Daily-Liftoff-Routine.md) and [Learning Journal](learning-log/README.md).
