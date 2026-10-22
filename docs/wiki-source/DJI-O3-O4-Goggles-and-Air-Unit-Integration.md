# DJI O3 / O4 FPV Air Units and Goggles — Compatibility Guide

![Digital video systems map](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/analog-vs-digital-video.svg)

This page covers modular **DJI FPV air units** for compatible DIY aircraft. DJI's consumer camera drones are a separate product category; do not treat a Mavic, Mini or other camera-drone camera as a modular air-unit camera for a build.

## 1. First identify the generation

DJI O3 and O4 are not one interchangeable module. Camera module, air unit, supported goggles/controller generation, input voltage, weight, firmware and recording modes differ. Check the current official compatibility matrix for the exact SKU before purchasing.

- [DJI O4 Air Unit Series specifications](https://www.dji.com/o4-air-unit/specs)
- [DJI O4 Air Unit FAQ](https://www.dji.com/o4-air-unit/faq)

The O4 series specifications distinguish the standard O4 Air Unit from O4 Pro, including weight with/without camera module, sensor/FOV, recording modes and supported goggles/controllers. For example, the listed O4 Pro input range and the standard O4 input range differ, so do not select the battery/regulator based on the DJI name alone. Read the exact table and the product manual. Do not confuse air-unit input voltage with an external regulated output for other electronics.

## 2. Compatibility before buying

Record each of the following:
- Air unit: O3, O4, O4 Pro or a different generation?
- Camera module: exact supported module/cable revision.
- Ground unit: exact goggles model/generation and current firmware.
- Control: which radio/control link is used? DJI video pairing does not automatically configure ELRS or another control receiver.
- Power: full-charge battery voltage and suitable regulator/power path.
- Frame: camera width, cage, mounting hardware, air-unit space, antenna mount and cooling/airflow.
- RF: antenna connector, frequency settings and region-allowed operation.
- Recording: onboard recording specs vs goggle DVR are different capabilities.

## 3. Mechanical fit and cooling

1. Check the frame maker's exact air-unit/camera mounting drawing. Do not infer hole spacing from a product photo.
2. Verify camera fit, coax cable and connector placement; avoid sharp bends and strain.
3. Secure the air unit using the maker-approved mount/soft mount; it must not contact conductive carbon or moving parts unexpectedly.
4. Route and secure antennas so the coax is not pinched by a frame plate and the antenna remains away from propellers.
5. Follow DJI's specified airflow and bench-power instructions. Do not leave a powered air unit on a stationary, unventilated bench if the manual warns against it.
6. Check input-voltage range for the exact unit before connecting the battery; if needed, use only an appropriate documented regulator.

## 4. Binding, activation and firmware

- Read the current DJI guide for the exact combination of air unit and goggles.
- Record current firmware and hardware model before any update.
- Follow the documented bind/activation order; avoid cross-flashing another target or using instructions for an older model.
- Verify that the goggles display the camera feed and status indicators before reinstalling props.
- Test onboard recording and goggles DVR separately, using media/format supported by that unit.

## 5. Common failures

| Symptom | First checks |
|---|---|
| Goggles won't connect | Exact supported goggles generation, firmware, pairing/binding process and air-unit power |
| Image drops / warnings | Antenna/coax, mounting, region/band mode and interference; compare only with manufacturer test conditions |
| Unit gets hot | Stop and check airflow/bench-power restrictions and input voltage |
| No recording | Storage and mode settings; determine whether you expect onboard footage or goggles DVR |
| Frame/camera doesn't fit | Exact frame and camera drawing, camera cable and cage; don't force connectors |

## Sources

- [DJI O4 Air Unit Series specs](https://www.dji.com/o4-air-unit/specs)
- [DJI O4 FAQ](https://www.dji.com/o4-air-unit/faq)
- [DJI consumer camera drone catalogue](https://www.dji.com/global/camera-drones?site=brandsite&from=nav)
- [Analog vs Digital FPV Camera and Video Guide](Analog-vs-Digital-FPV-Camera-Video-Guide.md)
- [Goggles and VRX Integration Guide](FPV-Goggles-and-VRX-Integration-Guide.md)

*Reviewed 22 October 2026. Compatibility/firmware may change; verify current official DJI information for the exact O3/O4/goggles combination.*
