# FPV System Basics

## Visual guides: parts, systems and flight

![FPV drone basics infographic covering major components, the control loop, flight axes, thrust, video systems and antenna types](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-drone-basics-infographic.webp)

![Beginner FPV drone guide showing quadcopter components, radio control, movement, propellers and video systems](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-drone-beginner-guide.webp)

These overview infographics are visual companions to the detailed explanations below. Use them for orientation, then follow the text and model-specific manuals for setup, wiring, motor direction and compatibility.

For choosing an aircraft style, see [Drone Categories and Size Guide](Drone-Categories-and-Size-Guide.md). For hardware/video trade-offs, see [Analog vs Digital FPV Video](Analog-vs-Digital-FPV-Camera-Video-Guide.md) and [Goggles/VRX Integration](FPV-Goggles-and-VRX-Integration-Guide.md).

![Real FPV quadcopter example](https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/FPV_Quadrocopter.jpg/960px-FPV_Quadrocopter.jpg)

*Real-build photo: [FPV Quadrocopter on Wikimedia Commons](https://commons.wikimedia.org/wiki/File:FPV_Quadrocopter.jpg). This is an overview photo, not a wiring diagram.*

FPV means first-person view: an onboard camera transmits live video to compatible goggles or a display. A quad combines several systems that must be compatible but are not the same thing.

![Separate control, video and power paths in an FPV quad](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-video-link-separation.svg)

## 🎛️ Drone systems and controls — video resources

[![Watch the supplied drone systems and controls video](https://img.youtube.com/vi/sxaEaXcuQA4/hqdefault.jpg)](https://www.youtube.com/watch?v=sxaEaXcuQA4)

- [Drone systems and controls playlist](https://www.youtube.com/playlist?list=PLgMDNELGJ1CYU7vfun-Q7HXsldD-RsocG)
- [Single video: drone systems and controls](https://www.youtube.com/watch?v=sxaEaXcuQA4)

Use these as guided explanations alongside the diagrams and official manuals. I could not reliably confirm the playlist/video titles from public page metadata, so the links are grouped by the topic supplied with them rather than making claims about their exact syllabus.

## The control path

![Simplified FPV flight-control feedback loop](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-control-loop.svg)

*The control loop describes what happens after your command reaches the flight controller. It is a conceptual diagram, not a pinout or wiring schematic.*

`Pilot's sticks → RadioMaster Pocket ELRS → 2.4 GHz ExpressLRS link → aircraft receiver → flight controller → ESC → motors → propellers`

The radio sends control commands. The receiver delivers channel data to the flight controller. The flight controller combines pilot input with gyro/sensor readings; it then sends motor commands to the ESC.

## The video path

![FPV camera-to-goggles video path overview](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-video-link-separation.svg)

*This concept image is for orientation only. The signal path below shows the logical flow; always check hardware-specific manuals for wiring.*

`Camera → analog VTX or digital air unit → video link → compatible goggles/display → pilot`

Keep this separate from the control path: the radio link carries stick commands, while the video system carries the camera feed. A compatible ELRS radio and receiver do not automatically make a video transmitter compatible with your goggles.

The selected video system determines which goggles/receiver and antennas are compatible. A 2.4 GHz ELRS control link does not determine which FPV video system to use.

## Power and recording

`Battery → power distribution/regulators → FC, ESC, receiver, camera/video hardware, motors`

Actual wiring and supported input voltages depend on each product. Check the board manuals rather than relying on this conceptual diagram.

DVR can record what the goggles/display receives. An onboard camera may record higher-quality footage separately. Gyroflow can stabilize compatible recorded footage when the necessary camera/motion-data workflow is supported; it is not required for flying.

## Firmware is separate by subsystem

- EdgeTX: radio operating system/model configuration on the Pocket.
- ExpressLRS: the RC control link on the transmitter module and receiver.
- Betaflight or another supported flight-controller firmware: flight behavior, receiver mapping, motor outputs and failsafe-related configuration.
- VTX/air-unit firmware: specific video hardware.
- Gyroflow: desktop post-processing/stabilization workflow.

Do not update all systems at once. Confirm the exact target and recovery procedure for each one.

## Quick knowledge check

- [ ] Trace a control command from radio sticks to motor output.
- [ ] Explain why the video link is separate from the ELRS control link.
- [ ] Explain why a concept diagram cannot replace a board-specific wiring diagram.

## Core terms

- **LiPo cell count (S):** number of cells in series; this affects voltage.
- **Rates:** relation between stick input and commanded rotation.
- **Arming switch:** deliberate control used to enable motors.
- **Failsafe:** defined action on signal loss; verify real behavior rather than assuming.
- **Blackbox:** flight-controller logging useful for diagnosis.

## Knowledge check

- [ ] Explain how a roll-stick movement becomes a motor command.
- [ ] Explain why successful ELRS binding does not verify video, motor direction, failsafe, or battery wiring.
- [ ] Explain the difference between ELRS and a video transmitter.
