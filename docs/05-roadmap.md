# 5. Phased learning roadmap

Progress by evidence of skill, not by calendar pressure. You can repeat a phase for as long as needed.

## Phase 0 — Understand the vocabulary

**Focus:** radio, receiver, flight controller, ESC, motors, battery, video transmitter, goggles, firmware, arming and failsafe.

**Work:** read [FPV system basics](01-fpv-basics.md), inspect the Pocket guide, and sketch the signal/power paths.

**Exit evidence:** explain the control path and video path separately, and identify which device runs each firmware project.

## Phase 1 — Make the radio a simulator controller

**Focus:** radio handling, USB joystick, input calibration, axes, switch mapping.

**Work:** connect the Pocket to Liftoff and test one axis at a time. Keep real aircraft hardware out of this workflow.

**Exit evidence:** correct axes, correct directions, reliable throttle minimum, and a consistent arm/disarm mapping.

## Phase 2 — Build muscle memory in Liftoff

**Focus:** smooth control, orientation, circuits, figure-eights, landing and calm recovery.

**Work:** follow [Simulator training](02-simulator-training.md), keep session logs, and practise weak skills before increasing speed.

**Exit evidence:** repeatable takeoffs/landings and stable circuits with fewer unforced crashes; you can explain each crash and name a corrective drill.

## Phase 3 — Plan one small, repairable aircraft

**Focus:** operating location, total budget, control link, video ecosystem, mechanical/electrical compatibility and spare parts.

**Work:** complete the matrix in [First-build planning](04-first-build.md), verify specs, and get an experienced review.

**Exit evidence:** a bill of materials with datasheet/source links, a compatibility checklist, and a clear explanation of why every component fits.

## Phase 4 — Assemble/configure safely

**Focus:** soldering basics, continuity checks, FC/ESC/receiver wiring, firmware targets, channel mapping, arming, failsafe, motor order and direction.

**Work:** follow each manufacturer's wiring diagram and the aircraft/FC documentation. Remove props for all setup and bench testing. Use a smoke stopper where appropriate and get help if wiring is uncertain.

**Exit evidence:** documented propeller-off bench checklist, verified receiver and failsafe behavior, correct motor outputs/directions, and an experienced-pilot review.

## Phase 5 — First real flights and maintenance

**Focus:** suitable location, weather, local requirements, preflight checks, disarm response, battery care and post-crash inspection.

**Work:** fly only after Phase 4 exit checks are met, ideally with an experienced pilot and in a permitted, controlled area. Start gently; inspect after every landing/crash.

**Exit evidence:** repeatable safe preflight/postflight routine and maintenance records.

## Optional extension — drone coding and machine learning

Once simulator practice and basic system understanding are established, explore the [Drone Coding and Machine Learning Learning Path](drone-coding-and-ml.md). Start in a simulator or supported educational platform; this is optional, not a shortcut around manual control skills.

## Phase 6 — Explore advanced projects only when they solve a real need

- **Gyroflow:** after you have recorded footage and want post-production stabilization.
- **RubyFPV:** explore when interested in a Ruby-based flight-controller firmware ecosystem; first verify exact hardware support and project status.
- **OpenVTx:** explore only after understanding your VTX hardware, supported devices, and firmware recovery route.
- **OpenHD:** explore when you specifically want an open digital video/telemetry link and can handle the additional hardware, network and RF complexity.
- **Source One:** use as a frame-design and build-reference case study; verify the version, dimensions, hardware and compatibility before treating any build as a parts list.
- **ExpressLRS:** use the official docs first for the radio link you already own.
- **awesome-flying-fpv:** use as a discovery index, then confirm specific recommendations with official/current documentation.

## Keep a decision log

For each important choice record: question, options considered, source links and date, assumptions, decision, trade-offs, and what would make you revisit the decision. That makes the repository useful to your future self and to other beginners.
