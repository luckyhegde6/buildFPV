# FPV System Basics

## Visual guides: parts, systems and flight

<img src="https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-system-basics-high-resolution.svg" alt="High-resolution vector overview of FPV aircraft components and separate radio-control, video and power paths" width="1200" />

*High-resolution vector recreation of the overview graphic. The diagram is scalable and designed to stay sharp when enlarged. It is a conceptual learning map, not a wiring diagram or exact build layout.*

## Explore the system, one path at a time

Use this page as the map, then open the chapter that explains the part you want to understand. Each chapter follows the signal or energy path through the aircraft and ends with checks and questions. These are learning explanations, not wiring instructions.

### Start with the whole aircraft

1. [How FPV Drones Work — from sticks to flight](How-FPV-Drones-Work.md) explains pitch, roll, yaw, thrust and the control loop.
2. [Drone Parts — One by One](Drone-Parts-One-by-One.md) identifies the hardware and its purpose.
3. [FPV Power System Explained](FPV-Power-System-Explained.md) follows battery energy through distribution and regulated supplies.
4. [FPV Propulsion System Explained](FPV-Propulsion-System-Explained.md) follows the ESC, motors and propellers from electrical command to thrust.
5. [Flight Controller and Stabilization Explained](Flight-Controller-and-Stabilization-Explained.md) explains sensor feedback, setpoints, PID concepts and flight modes.

### Follow each data path

| System path | What travels through it | Read next |
|---|---|---|
| **Radio control** | Stick/channel values from the transmitter, over the RF link and receiver, into the FC | [Radio-Control Path Explained](FPV-Radio-Control-Path-Explained.md) · [ExpressLRS Basics](ExpressLRS-Basics.md) |
| **Live video** | Camera picture through the analog VTX or digital air unit, over the video link to a compatible receiver/goggles | [Video Path Explained](FPV-Video-Path-Explained.md) · [Analog vs Digital Video](Analog-vs-Digital-FPV-Camera-Video-Guide.md) |
| **Power and propulsion** | Stored battery energy converted into controlled motor torque and thrust | [Power System Explained](FPV-Power-System-Explained.md) · [Propulsion System Explained](FPV-Propulsion-System-Explained.md) |
| **Sensors and stabilization** | Gyro/other sensor measurements feed the FC's control loop; motor output changes the aircraft's motion | [Flight Controller and Stabilization](Flight-Controller-and-Stabilization-Explained.md) · [Betaflight Basics](Betaflight-Basics.md) |
| **GPS, telemetry and recovery** | Position/status data feeds supported FC features and selected displays; telemetry can send data back | [GPS, Telemetry and Recovery Explained](FPV-GPS-Telemetry-and-Recovery-Explained.md) · [GPS and Flight Controllers](GPS-and-Flight-Controllers.md) |

### A suggested learning order

Follow the chapter order above if you are starting from zero. Then read [ExpressLRS Basics](ExpressLRS-Basics.md) and [Betaflight Basics](Betaflight-Basics.md) for hands-on configuration, [Motors, Propellers and Battery Compatibility](Motors-Propellers-and-Battery-Compatibility.md) for selection trade-offs, and [FPV Chargers, LiPo and Li-ion Battery Safety](FPV-Chargers-LiPo-and-Li-ion-Battery-Safety.md) before charging or handling packs.

**Important:** a radio bind, a working video picture or a correctly detected GPS is only proof about that part of the system. It does not establish flight readiness. Use the exact hardware documentation, keep props removed during configuration and motor checks, and follow current local rules.

The original supplied raster artwork is still available: [FPV drone basics infographic](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-drone-basics-infographic.webp) · [beginner FPV guide](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-drone-beginner-guide.webp).

Use the visual map for orientation, then follow the text and model-specific manuals for setup, wiring, motor direction and compatibility.

### Enlarged subsystem panels

<img src="https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-section-drone-overview.svg" alt="FPV drone components overview panel" width="1200" />

*Major aircraft parts at a glance.*

<img src="https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-section-control-loop.svg" alt="Flight-control loop from radio through receiver, FC, ESC and motors" width="1200" />

*Control and stabilization path; not a wiring diagram.*

<img src="https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-section-video-system.svg" alt="FPV camera-to-goggles video system overview" width="1200" />

*Camera video and radio control are distinct links.*

<img src="https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-section-antenna-types.svg" alt="Common FPV antenna forms and their typical coverage" width="1200" />

*Confirm antenna band, connector, polarization and orientation.*

<img src="https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-section-flight-controller.svg" alt="Flight controller functional blocks and external interfaces" width="1200" />

*Board-specific pinout documentation remains authoritative.*

<img src="https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-section-radio-control-link.svg" alt="Radio transmitter, ExpressLRS link, aircraft receiver and flight controller" width="1200" />

*Match radio protocol, receiver firmware and wiring.*

<img src="https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-section-gps-navigation.svg" alt="GPS satellites to GNSS module and flight controller" width="1200" />

*GPS-enabled features depend on hardware, firmware and configuration.*


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
