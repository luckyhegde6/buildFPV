# Reference library

Use official project documentation for installation, firmware targets, wiring, supported hardware and troubleshooting. Re-check current state before following an old video or guide; projects evolve.

## Personal starting resources

- Learn to fly an FPV drone (for total beginners) — beginner video playlist: https://www.youtube.com/playlist?list=PLwoDb7WF6c8lCKhQOTy-Vb9LfW0VAIrTP
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


## Visual / hardware references

- [Mouser / Amphenol drone component breakdown infographic](https://www.mouser.in/amphenol-uav-infographic/)
- [SpeedyBee F405 V3 FC official specs and wiring](https://www.speedybee.com/speedybee-f405-v3-30x30-flight-controller/) — this exact V3 listing is marked discontinued; use as an architectural example only.
- [BETAFPV F4 1S 12A AIO](https://betafpv.com/products/f4-1s-12a-flight-controller)
- [BETAFPV F4 1S 12A AIO V3](https://betafpv.com/products/f4-1s-12a-aio-brushless-flight-controller-v3-0)
- [CADDXFPV / Walksnail Avatar VRX](https://www.caddxfpv.com/products/walksnail-avatar-fpv-vrx)
- [ArduPilot GPS/Compass hardware overview](https://ardupilot.org/copter/docs/common-positioning-landing-page.html)


## Video learning courses added for the beginner path

> [!IMPORTANT]
> **Mandatory beginner video course before your first real flight:** complete the [Learn to fly an FPV drone (for total beginners) playlist](https://www.youtube.com/playlist?list=PLwoDb7WF6c8lCKhQOTy-Vb9LfW0VAIrTP) in sequence while practising in Liftoff. This is a buildFPV learning requirement, **not an official licence or certification**; continue to check safety requirements and current local rules.
### Drone systems and controls

## 🎛️ Drone systems and controls — video resources

[![Watch the supplied drone systems and controls video](https://img.youtube.com/vi/sxaEaXcuQA4/hqdefault.jpg)](https://www.youtube.com/watch?v=sxaEaXcuQA4)

- [Drone systems and controls playlist](https://www.youtube.com/playlist?list=PLgMDNELGJ1CYU7vfun-Q7HXsldD-RsocG)
- [Single video: drone systems and controls](https://www.youtube.com/watch?v=sxaEaXcuQA4)

Use these as guided explanations alongside the diagrams and official manuals. I could not reliably confirm the playlist/video titles from public page metadata, so the links are grouped by the topic supplied with them rather than making claims about their exact syllabus.
### RadioMaster Pocket

## 🎥 RadioMaster Pocket setup video

[![RadioMaster Pocket — how to set up and bind a drone](https://img.youtube.com/vi/GgaWMvAHZi8/hqdefault.jpg)](https://www.youtube.com/watch?v=GgaWMvAHZi8)

Watch [RadioMaster Pocket — How To Set Up and Bind a Drone — Step by Step](https://www.youtube.com/watch?v=GgaWMvAHZi8) alongside this button guide. Compare menu names and binding/Betaflight steps with your exact Pocket, EdgeTX, ELRS and receiver versions. For simulator-only input, use USB joystick mode; binding a real drone receiver is a separate task.
### DGCA rules / drone awareness

## 🎥 Video resources supplied for DGCA rules / drone awareness

These are **supplementary learning resources**, not an official DGCA certification path or a legal authority. Playlist/video titles and exact coverage were not reliably verified during this pass; check the contents, publication dates and claims yourself.

[![Open the supplied DGCA-rules video](https://img.youtube.com/vi/jnyQJVzRiyg/hqdefault.jpg)](https://www.youtube.com/watch?v=jnyQJVzRiyg&list=PL_Fsqn9m2GhU3ep-PzQ4jg8aa-oxFP8W6)

- [DGCA/rules playlist supplied with the video](https://www.youtube.com/playlist?list=PL_Fsqn9m2GhU3ep-PzQ4jg8aa-oxFP8W6)
- [Additional supplied drone/rules-awareness playlist](https://www.youtube.com/playlist?list=PL3IOIUhLPNVciQ1V5OLMmgEBQJbSzJ8iS)
- [Additional supplied drone-awareness playlist](https://www.youtube.com/playlist?list=PLn8ARIij4VbeN2OXLqHJfG2Nm4Hx8ilFq)

**Before every outdoor flight, use current official sources below**, especially the latest DGCA / Ministry of Civil Aviation material and Digital Sky airspace map. Old videos may omit amendments, changed airspace status or operation-specific requirements.
### Drone coding and machine learning

- [Drone Coding and Machine Learning Learning Path](drone-coding-and-ml.md)

[![How to Program a Tello Drone With Python](https://img.youtube.com/vi/LmEcyQnfpDA/hqdefault.jpg)](https://www.youtube.com/watch?v=LmEcyQnfpDA)

[![Drone programming in a simulator — supplied video](https://img.youtube.com/vi/k-yDYgc8AmU/hqdefault.jpg)](https://www.youtube.com/watch?v=k-yDYgc8AmU)

[Supplied coding / ML playlist](https://www.youtube.com/playlist?list=PLeuMA6tJBPKsAfRfFuGrEljpBow5hPVD4) · [Additional supplied video](https://www.youtube.com/watch?v=PRwef_c7SXQ)

