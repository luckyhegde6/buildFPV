# 🚁 buildFPV Wiki — Learn. Practise. Build. Fly safely.

Welcome to the buildFPV visual learning path. Start with the aircraft overview, understand how it flies, then identify each part one by one before moving into radio setup, simulation, configuration and safety. These Wiki-ready pages are maintained in the main repository under `docs/wiki-source/`; reusable diagrams live in `docs/assets/`.

## 🧭 Recommended beginner path

1. [FPV System Basics](FPV-System-Basics) — understand the control, flight-control, power and video paths.
2. [How FPV Drones Work](How-FPV-Drones-Work) — learn lift, flight axes, motor rotation and feedback control.
3. **[FPV Drone Parts — One by One](Drone-Parts-One-by-One)** — a visual lineup and detailed explanation of the frame, battery, motors, propellers, ESC, flight controller, receiver, camera, video system, antennas and optional GPS/accessories.
4. [Hardware Gallery](Hardware-Gallery) — compare real build photos, boards, antennas and GPS modules.
5. [RadioMaster Pocket Button Guide](RadioMaster-Pocket-Button-Guide) — identify controls and calibrate the radio.
6. [Pocket ELRS and Liftoff](Pocket-ELRS-and-Liftoff) and [Simulator Training](Simulator-Training) — build control skills before a real flight.
7. [Betaflight Basics](Betaflight-Basics), [ExpressLRS Basics](ExpressLRS-Basics), [Video Systems and Goggles](Video-Systems-and-Goggles), [Video Antennas](Video-Antennas-VTX-VRX), and [GPS and Flight Controllers](GPS-and-Flight-Controllers).
8. [Bench Safety and Flight Readiness](Bench-Safety-and-Flight-Readiness), [Buying Parts in India](Buying-Parts-in-India) and [Troubleshooting](Troubleshooting).

## 🖼️ Visual learning path

### 1. See the whole aircraft

![FPV quadcopter overview concept](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-build-concept-ai.jpg)

For a full visual map of the component order, see the [FPV parts lineup](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-parts-lineup.svg).

*Concept artwork for orientation only. It is not a wiring schematic; component placement and labels can vary from a real build.*

### 2. Understand how the drone moves

![Flight axes: throttle, roll, pitch and yaw](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/flight-axes.svg)

Throttle changes the overall thrust request. Roll, pitch and yaw describe rotation around the drone's three axes; the flight controller mixes these requests into motor outputs.

### 3. Follow the control loop

![Simplified FPV flight-control feedback loop](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-control-loop.svg)

Your radio sends commands, the flight controller reads sensor feedback and computes corrections, and the ESCs adjust motor power. The gyro is central to fast stabilisation; GPS provides slower navigation data when fitted and configured.

### 4. Continue to the detailed parts lineup

Open [FPV Drone Parts — One by One](Drone-Parts-One-by-One) next. It now has a dedicated lineup illustration and custom component diagrams for the frame, battery/power, motors/propellers, FC/ESC and AIO, sensor feedback, ELRS receiver, FPV video, antennas and optional GPS/accessories.

## ✅ Always remember

- Remove every propeller during setup, USB configuration, firmware work, receiver checks and motor testing.
- Disconnect the LiPo before soldering or changing wiring.
- Do not assume a radio bind verifies failsafe, motor direction, video or power wiring.
- Check official documentation and current local airspace/radio rules before outdoor use.

This is the live-Wiki learning path. Source Markdown and assets are maintained in the [buildFPV source repository](https://github.com/luckyhegde6/buildFPV); changes become visible here after the Wiki publishing workflow completes.
