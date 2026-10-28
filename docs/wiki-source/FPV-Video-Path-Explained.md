# FPV Video Path Explained — from camera to goggles

[Back to FPV System Basics](FPV-System-Basics.md) · [Camera/VTX/VRX compatibility](FPV-Cameras-VTX-VRX-Compatibility-Comparison.md) · [Video systems and goggles](Video-Systems-and-Goggles.md)

The video system carries the live camera picture to the pilot. It is separate from the radio-control link: control commands and live video may use different hardware, protocols, antennas and firmware.

<img src="https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-section-video-system.svg" alt="Expanded FPV camera, video transmitter or digital air unit, antenna and compatible goggles path" width="1200" />

*Conceptual video path; it does not show the wiring or exact connector layout of a particular air unit.*

## 1. The path from sensor to pilot

A typical arrangement follows this chain:

**Camera sensor → camera/video processing → analog VTX or digital air unit → transmitting antenna → radio-frequency video link → compatible receiver/goggles → pilot**

In an analog setup, the camera's video signal is transmitted using an analog video transmitter (VTX), and compatible receiver hardware demodulates it for the display. In a digital setup, an air unit encodes/transmits digital video and the compatible receiving system decodes it. Digital systems often package the camera and video transmitter as one air unit; exact architecture varies.

A camera that can physically fit a frame is not necessarily electrically or digitally compatible with a given air unit. Check the maker's camera module, connector, voltage and supported firmware details.

## 2. Analog and digital are different ecosystems

| Topic | Analog systems | Digital systems |
|---|---|---|
| Image delivery | Analog RF video | Encoded digital video |
| Typical components | Camera, analog VTX, matching receiver/VRX and display | Compatible digital camera/air unit and receiving goggles/system |
| Main compatibility checks | Band/channel, supported power, receiver, antenna and connectors | Brand/ecosystem, hardware generation, firmware, camera module, power and supported goggles |
| Image characteristics | Often lower detail with gradual degradation as signal weakens, though noise/interference matter | Often clearer within usable link conditions, but degradation/latency/dropout behavior depends on system and environment |
| Recording | Goggle DVR or separate onboard camera, depending on equipment | Goggle DVR and/or onboard air-unit/action-camera recording, depending on model |

There is no single “digital FPV protocol” shared by all brands. A digital air unit and goggles must be compatible according to the exact maker's current model/generation matrix. Use [FPV Cameras, VTX, VRX and Goggles Compatibility Comparison](FPV-Cameras-VTX-VRX-Compatibility-Comparison.md) before purchasing.

## 3. What antennas do

Antennas couple RF energy into and out of the air. For a reliable link, check frequency band, connector, polarization, orientation, placement and mounting stress. Circular-polarized antennas can be handedness-specific; patch antennas are directional; linear antennas have different orientation behavior. The system's connectors and polarization must match.

Keep antennas clear of conductive carbon, battery wiring and other hardware as recommended by the manufacturer. Prevent coax cables from being pinched, kinked or pulled at the connector. Don't transmit a powered VTX without the antenna or load specified in its manual.

Video range is not determined by VTX output power alone. Antenna quality and orientation, obstructions, interference, the receiving system, regulatory limits and environment all matter. Do not rely on displayed maximum power as a statement of what is permitted in your location.

<img src="https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-section-antenna-types.svg" alt="Common FPV antenna types, including linear and circular polarized forms and directional patch antennas" width="1200" />

*The drawings illustrate antenna categories, not their exact radiation patterns or installation instructions.*

## 4. OSD, DVR and onboard recording are different

- **On-screen display (OSD):** overlays flight information—such as battery data, timer or warnings—onto the pilot's video view where supported by the FC/video system.
- **Goggle DVR:** records what the receiving display system sees. It is convenient for reviewing the flight and diagnosing signal loss, but its quality and recording behavior depend on the goggles.
- **Onboard recording:** records at the camera or air unit, or uses a separate action camera. It can provide a different quality/resolution from the pilot-view recording.
- **Post-stabilization:** software such as Gyroflow can stabilize supported files only when a compatible file/motion-data workflow is available. It is not part of the live RF link.

Don't assume every digital air unit records onboard in the same way, or that every recorded file contains supported gyro data.

## 5. Latency and link quality

**Latency** is the time between the scene changing in front of the camera and the pilot seeing that change. It can include camera processing, encoding, transmission, receiving and display processing. The exact figure varies with equipment and mode, so compare official specs under the same test conditions.

Video dropouts and breakup can be caused by several layers: power problems, an antenna connection, bad cable/coax, wrong channel, firmware pairing, interference, an obstruction or heat. Change one thing at a time and use the maker's safe bench and temperature instructions.

## 6. Diagnose the video chain in order

| Symptom | Initial checks |
|---|---|
| Black screen | Camera/air-unit power, connectors, module compatibility, firmware and goggles/receiver selection |
| No receiver link/pairing | Exact system generation, pairing procedure and current firmware guidance |
| Picture breaks up at short range | Antennas/connectors/polarization, line of sight, nearby interference, power stability and heat |
| OSD missing | FC-to-video integration support, configured OSD path, firmware and wiring from the exact manuals |
| DVR missing or poor | Confirm whether the chosen device supports DVR/onboard recording, media/card requirements and correct recording mode |
| Video fails when throttle rises | Inspect supply voltage, regulator headroom, ground and electrical noise before assuming the RF transmitter is at fault |

## Compatibility checklist before buying

- [ ] The camera module is supported by the intended VTX/air unit.
- [ ] The intended receiver/goggles are listed for that exact generation.
- [ ] Voltage input, connector and current requirements are supported.
- [ ] Antenna band, connector and polarization are correct.
- [ ] Mounting, camera dimensions, coax routing and airflow fit the frame.
- [ ] Recording expectations match the actual device and file workflow.
- [ ] Current local RF rules and the manufacturer's permitted power modes have been checked.

## Continue learning

- [Analog vs Digital FPV Video Guide](Analog-vs-Digital-FPV-Camera-Video-Guide.md) compares the system families.
- [FPV Camera Selection Guide](FPV-Camera-Selection-Guide.md) covers sensor, size and use-case selection.
- [Video Antennas, VTX and VRX](Video-Antennas-VTX-VRX.md) covers antenna and RF-system considerations.
- [DJI O3/O4](DJI-O3-O4-Goggles-and-Air-Unit-Integration.md), [Walksnail Avatar](Walksnail-Avatar-Goggles-and-Air-Unit-Integration.md) and [HDZero](HDZero-Goggles-and-VTX-Integration.md) pages cover individual ecosystems.

## Knowledge check

1. Why doesn't an ELRS receiver determine what goggles can receive the picture?
2. What does the goggle DVR record, and how can it differ from onboard recording?
3. Name four variables that affect video-link quality besides transmitter power.
