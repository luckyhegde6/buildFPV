# 🚁 buildFPV Wiki — Learn. Practise. Build. Fly safely.

Welcome to the buildFPV visual learning path. Start with the aircraft overview, then learn the flight axes and control loop, then follow the topic pages in order. These Wiki-ready pages are maintained in the main repository under `docs/wiki-source/`; their core diagrams live in `docs/assets/` so they can be reused consistently.

## 🧭 Recommended beginner path

1. [FPV System Basics](FPV-System-Basics.md) — the control, flight-control, power and video paths.
2. [How FPV Drones Work](How-FPV-Drones-Work.md) — lift, axes, motor rotation and feedback control.
3. [RadioMaster Pocket Button Guide](RadioMaster-Pocket-Button-Guide.md) — identify controls, calibrate axes and keep simulator/aircraft models separate.
4. [Pocket ELRS and Liftoff](Pocket-ELRS-and-Liftoff.md) and [Simulator Training](Simulator-Training.md) — build control skills before buying or flying.
5. [Betaflight Basics](Betaflight-Basics.md), [ExpressLRS Basics](ExpressLRS-Basics.md), [Video Systems and Goggles](Video-Systems-and-Goggles.md), [Video Antennas](Video-Antennas-VTX-VRX.md), and [GPS and Flight Controllers](GPS-and-Flight-Controllers.md).
6. [Bench Safety and Flight Readiness](Bench-Safety-and-Flight-Readiness.md), [Buying Parts in India](Buying-Parts-in-India.md) and [Troubleshooting](Troubleshooting.md).

## 🖼️ Visual learning path

### 1. See the whole aircraft

![FPV quadcopter overview concept](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-build-concept-ai.jpg)

*Concept artwork for orientation only. It is not a wiring schematic; component placement and labels can vary from a real build.*

### 2. Understand how the drone moves

![Flight axes: throttle, roll, pitch and yaw](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/flight-axes.svg)

Throttle changes the overall thrust request. Roll, pitch and yaw describe rotation around the drone's three axes; the flight controller mixes these requests into motor outputs.

### 3. Follow the control loop

![Simplified FPV flight-control feedback loop](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-control-loop.svg)

Your radio sends commands, the flight controller reads sensor feedback and computes corrections, and the ESCs adjust motor power. The gyro is central to fast stabilisation; GPS provides slower navigation data when fitted and configured.

For the full step-by-step explanation, continue to [[How FPV Drones Work]]. Then return to [[FPV System Basics]], and use the sidebar to explore radio setup, video, GPS and safety.

## ✅ Always remember

- Remove every propeller during setup, USB configuration, firmware work, receiver checks and motor testing.
- Disconnect the LiPo before soldering or changing wiring.
- Do not assume a radio bind verifies failsafe, motor direction, video or power wiring.
- Check official documentation and current local airspace/radio rules before outdoor use.

For the full walkthrough, continue through [[How FPV Drones Work]], [[RadioMaster Pocket Button Guide]], [[Video Antennas VTX VRX]], and [[GPS and Flight Controllers]]. The page sources and reusable diagrams are maintained in the main `buildFPV` repository.