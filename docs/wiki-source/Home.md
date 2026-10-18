# 🚁 buildFPV Wiki — Learn. Practise. Build. Fly safely.

**The maintained learning material lives in this repository.** Open the [repository-native Learning Guide](../LEARNING-GUIDE.md) for the complete beginner path; this page remains a quick index for people browsing this folder.

## 🧭 Recommended beginner path

1. [FPV System Basics](FPV-System-Basics.md) — the control, flight-control, power and video paths.
2. [How FPV Drones Work](How-FPV-Drones-Work.md) — lift, axes, motor rotation and feedback control.
3. [RadioMaster Pocket Button Guide](RadioMaster-Pocket-Button-Guide.md) — identify controls, calibrate axes and keep simulator/aircraft models separate.
4. [Pocket ELRS and Liftoff](Pocket-ELRS-and-Liftoff.md) and [Simulator Training](Simulator-Training.md) — build control skills before buying or flying.
5. [Betaflight Basics](Betaflight-Basics.md), [ExpressLRS Basics](ExpressLRS-Basics.md), [Video Systems and Goggles](Video-Systems-and-Goggles.md), [Video Antennas](Video-Antennas-VTX-VRX.md), and [GPS and Flight Controllers](GPS-and-Flight-Controllers.md).
6. [Bench Safety and Flight Readiness](Bench-Safety-and-Flight-Readiness.md), [Buying Parts in India](Buying-Parts-in-India.md) and [Troubleshooting](Troubleshooting.md).

## 🖼️ Visual learning path

### 1. See the whole aircraft

![AI-generated FPV build concept](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-build-concept-ai.jpg)

*Concept artwork for orientation only. It is not a wiring schematic; component placement and labels can vary from a real build.*

### 2. Understand how the drone moves

![Throttle, roll, pitch and yaw illustrated](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/flight-axes.svg)

Throttle changes the overall thrust request. Roll, pitch and yaw describe rotation around the drone's three axes; the flight controller mixes these requests into motor outputs.

### 3. Follow the control loop

![Simplified FPV flight-control feedback loop](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-control-loop.svg)

Your radio sends commands, the flight controller reads sensor feedback and computes corrections, and the ESCs adjust motor power. The gyro is central to fast stabilisation; GPS provides slower navigation data when fitted and configured.

For a step-by-step explanation, continue to [[How FPV Drones Work]].

## ✅ Always remember

- Remove every propeller during setup, USB configuration, firmware work, receiver checks and motor testing.
- Disconnect the LiPo before soldering or changing wiring.
- Do not assume a radio bind verifies failsafe, motor direction, video or power wiring.
- Check official documentation and current local airspace/radio rules before outdoor use.

For the canonical learning path, images and instructions, use the [`docs/` folder in the repository](../LEARNING-GUIDE.md).