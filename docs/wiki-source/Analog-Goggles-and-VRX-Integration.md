# Analog FPV Goggles and VRX — Integration Tutorial

<img src="https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-section-video-system.svg" alt="Enlarged high-resolution video link diagram from FPV camera through VTX to goggles/VRX" width="1200" />

*High-resolution path overview. This guide covers analog goggles/VRX; verify analog band/channel support, antennas and connectors before connecting equipment.*

![Analog video system diagram](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/analog-vs-digital-video.svg)

![CADDXFPV Ratel 2 analog FPV camera product photo](https://www.caddxfpv.com/cdn/shop/files/CADDXFPVRatel2Camera_c2e413af-99a4-4978-9367-b3ae881ae02f.png?v=1744944069&width=1200)

*Real aircraft-side example: [CADDXFPV Ratel 2 analog camera](https://www.caddxfpv.com/products/ratel-2-1-1-8inch-starlight-sensor-freestyle-fpv-camera). This is the camera end of the analog chain; pair it with a supported analog VTX and compatible analog goggles/VRX.*

This page is for an analog FPV video chain. The typical path is **analog camera → analog video transmitter (VTX) → aircraft antenna → analog video receiver (VRX) → goggles/display**. The control receiver (for example ELRS) is a separate radio system and is not the goggles' VRX.

## 1. Types of analog goggles and receivers

- **Goggles with built-in analog VRX:** simplest setup when the included receiver supports the VTX's channel/frequency.
- **Goggles with a receiver-module bay:** can allow module upgrades, but bay size, connector, power, firmware and supported features vary by goggles.
- **External VRX plus display:** useful for a ground station; check the receiver output interface and monitor input format.
- **Diversity receivers:** use multiple antenna inputs and receiver-selection/combining logic as implemented in that exact product. Diversity does not itself guarantee range.

## 2. Before wiring or powering

- Confirm the exact camera model and analog output connection.
- Confirm the VTX input voltage, output-power modes and allowed regional RF settings.
- Confirm the receiver/goggles support the chosen band/channel and antenna interface.
- Match antenna connector and polarization where applicable; inspect coax and connector condition.
- Confirm the VTX antenna is installed before transmission and keep the VTX cooled as its maker requires.
- Check that the camera, VTX and goggles/VRX physically fit the selected frame.

## 3. Step-by-step integration

1. Identify labels/manuals and write down the exact camera, VTX, goggles/VRX and antenna models.
2. With battery disconnected, connect camera video and ground according to the camera/VTX documentation. Do not guess solder pads or connector pinouts from a similar-looking board.
3. Power the VTX only with its supported voltage; use a bench/current-limited procedure and cooling requirements from the manual.
4. Set VTX band, channel and power to locally permitted values. Do not assume the highest menu setting is legal in every region.
5. On the goggles/VRX, select the matching band/channel and search/scan if the manual supports it.
6. Confirm camera image, OSD if fitted, and antenna alignment/position.
7. Test DVR separately: some goggles record the receiver feed, and not all units support the same format/card.

## 4. Antennas: basic compatibility

The antenna must fit the connector and operate in the intended band. Linear antennas and circular-polarized antennas are different types; where circular polarization is used, match RHCP with RHCP or LHCP with LHCP at the link ends unless the exact system specifies otherwise. Directional patch antennas must be aimed; omnidirectional antennas trade peak gain for broader angular coverage.

Never power a VTX with a missing/damaged antenna if its manual warns against it. Do not bend or twist a small coax cable at the connector.

## 5. Troubleshooting

| Symptom | Safe checks |
|---|---|
| Black/no picture | Confirm camera/VTX power and supported analog output; check wiring/connector while unplugged |
| Picture on one channel only | Ensure VTX band/channel matches RX; confirm region settings and manual |
| Snow/lines/interference | Check antenna/polarization, damaged coax, other nearby transmitters, power filtering and installation |
| No DVR | Check whether the goggles support DVR, storage/card and recording settings |
| VTX hot | Power down; verify input voltage and bench-cooling instructions |

## 6. References

- [Video Systems and Goggles overview](Video-Systems-and-Goggles.md)
- [Analog vs Digital FPV Camera and Video Guide](Analog-vs-Digital-FPV-Camera-Video-Guide.md)
- [Video Antennas, VTX and VRX](Video-Antennas-VTX-VRX.md)
- [BETAFPV official store](https://betafpv.com/)
- [Betaflight setup guide](https://betaflight.com/docs/wiki/getting-started/setup-guide)

*Reviewed 22 October 2026. Verify the exact VTX/goggle manual and local RF regulations before operation.*
