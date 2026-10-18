# 🚁 buildFPV Learning Guide

This is the main table of contents for the FPV learning material maintained **inside this repository**. Start at the top and move forward when you can explain the concepts or complete the practice checkpoint. There is no deadline: repeat any stage you need.

> [!TIP]
> A useful first session is 10–15 minutes in Liftoff. Practise one control at a time, then record one thing that improved and one goal for the next session.

## Beginner path

1. **Understand the aircraft systems** — [FPV system basics](01-fpv-basics.md). Learn the control link, flight controller, propulsion, video link and power path.
2. **Understand the aircraft physically** — [How an FPV quad works](07-how-fpv-drones-work.md). Learn thrust, roll/pitch/yaw, opposite motor rotation and the flight-control feedback loop.
3. **Connect your RadioMaster Pocket to the simulator** — [Pocket ELRS notes](03-pocket-elrs.md) and the [Pocket control guide](06-pocket-button-guide.md). USB joystick input is separate from binding to a real aircraft.
4. **Build repeatable control** — [Liftoff simulator training](02-simulator-training.md). Progress from single-axis drills to circuits, figure-eights, gates, landing and calm recovery.
5. **Plan before purchasing** — [First-build planning](04-first-build.md) and [buying parts in India](wiki-source/Buying-Parts-in-India.md) — reference page within this repository. Confirm compatibility and the complete budget before ordering.
6. **Learn configuration and safety** — [Practical FPV checklists](checklists.md), [Betaflight basics](https://betaflight.com/docs/wiki/getting-started), and [bench safety / flight readiness](wiki-source/Bench-Safety-and-Flight-Readiness.md). Keep props off for setup and motor checks.
7. **Learn video and navigation systems** — [Video, antennas and range](08-video-antennas-and-range.md) and [GPS/GNSS and flight-controller examples](09-gps-and-flight-controller-examples.md).
8. **Keep improving** — [Phased learning roadmap](05-roadmap.md), [daily learning log](learning-log/README.md), and the [daily-session template](learning-log/templates/daily-session.md).

## Visual guides

### Whole-aircraft mental model
![AI-generated FPV build concept](assets/fpv-build-concept-ai.jpg)

*Concept illustration for orientation only; it is not a wiring diagram. Verify pinouts, motor direction and board revisions in the exact manufacturer's manual.*

- [How an FPV quad works](07-how-fpv-drones-work.md) — annotated explanations and diagrams.
- [RadioMaster Pocket buttons and switches](06-pocket-button-guide.md) — front controls, gimbal adjustments, EdgeTX models and Liftoff calibration.
- [Video, antennas and range](08-video-antennas-and-range.md) — separates control and video systems.
- [GPS and flight-controller examples](09-gps-and-flight-controller-examples.md) — GNSS data flow, UARTs, AIO vs stack and GPS Rescue caveats.

## Practice cadence

At the end of a session, write down:
- **Practised:** the exact drill or configuration change.
- **Observed:** what happened, including crashes or unexpected behavior.
- **Next step:** one small, measurable action.
- **Evidence/source:** simulator settings, firmware version, official manual or measurement when relevant.

## Safety rules that always apply

- Remove all propellers during firmware work, USB setup, receiver checks and motor tests.
- Disconnect the LiPo before soldering or investigating a possible short.
- Follow the VTX manufacturer's antenna and cooling requirements before powering it.
- Back up radio and flight-controller configuration before changing firmware/settings.
- Do not assume GPS Rescue guarantees return-to-home.
- Confirm current local airspace and radio rules through official sources before outdoor flights.

## How to use images

Diagrams and project-owned visual assets live in the `assets/` folder. Markdown pages link to them using relative paths so the rendered repository pages display images directly from the same commit. Product photos hosted by manufacturers or retailers are examples only; follow their links for current versions and specifications. An image is never a substitute for a revision-specific wiring diagram.
