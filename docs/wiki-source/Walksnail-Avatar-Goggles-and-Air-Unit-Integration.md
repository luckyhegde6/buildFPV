# Walksnail Avatar / CADDXFPV — Goggles, VRX and Air-Unit Integration

![Goggles and VRX compatibility map](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/goggles-vrx-integration.svg)

Walksnail Avatar is a digital FPV video family from CADDXFPV/Walksnail. There are multiple camera/air-unit and goggles/receiver generations. Do not treat every Walksnail-labelled product as automatically compatible: use the official matrix for the exact model and firmware.

## 1. Pick the aircraft-side system

Before ordering, record:
- Exact Avatar VTX/air-unit kit or model, and hardware revision.
- Camera module and cable included/supported by that kit.
- Power input, maximum current/thermal requirements, dimensions and mounting.
- Which antenna and connector type the unit uses.
- Exact compatible goggles or VRX model and generation.

Begin with the official [Avatar buying/compatibility guide](https://wiki.caddxfpv.com/en/Avatar-HD-Series/How-to-buy), [Walksnail Goggles X documentation](https://wiki.caddxfpv.com/en/Avatar-HD-Series/Receiver-Unit/Goggles-X), and [CADDXFPV download centre](https://www.caddxfpv.com/pages/download-center).

## 2. Frame and power fit

1. Compare module/camera sizes to the chosen frame drawing; verify mount and cable length.
2. Confirm the air unit input voltage supports the selected battery's full-charge voltage or provide the appropriate regulator.
3. Leave airflow and cooling space as required; don't assume a unit can remain powered at rest indefinitely.
4. Secure antennas and coax with strain relief. Protect connectors from vibration/impact and keep antennas clear of props.
5. Check the FC and air-unit manual for the actual serial/OSD connections and pad labels; do not use pinout diagrams for a different hardware revision.

## 3. Binding and firmware

1. Record firmware versions for air unit and goggles/VRX.
2. Follow the manufacturer procedure for pairing, updating and recording. Use the correct file for the exact model.
3. Do not install guessed or third-party firmware targets just because a name looks similar.
4. Test live video, OSD/telemetry if configured, signal warnings, onboard recording and goggles DVR separately.
5. Re-check compatibility after a firmware update if the manufacturer release notes alter supported pairings.

## 4. Cameras and recording

A camera module designed for one Avatar air unit may not fit or work with another generation. Confirm dimensions, cable, connector and supported firmware in the official list. Live FPV view, onboard recording, and goggle DVR are different outputs; record each feature in the build's compatibility table.

## 5. Troubleshooting

| Symptom | Checks |
|---|---|
| Won't bind | Confirm exact supported goggles/VRX and air-unit generation, firmware and binding steps |
| Black image | Camera module/cable, air-unit power, supported configuration and connectors |
| Video cuts out | Antennas/coax, channel/band/regional settings, airflow, power and interference |
| Overheating | Power down and follow exact manufacturer's ventilation and bench-use requirements |
| Firmware won't update | Exact model/revision, approved package and official update method |

## References

- [Avatar HD buying / compatibility matrix](https://wiki.caddxfpv.com/en/Avatar-HD-Series/How-to-buy)
- [Walksnail Goggles X docs](https://wiki.caddxfpv.com/en/Avatar-HD-Series/Receiver-Unit/Goggles-X)
- [Walksnail Avatar HD Pro Kit](https://www.caddxfpv.com/products/walksnail-avatar-hd-pro-kit)
- [CADDXFPV downloads](https://www.caddxfpv.com/pages/download-center)
- [General goggles and VRX integration](FPV-Goggles-and-VRX-Integration-Guide.md)

*Reviewed 22 October 2026. Always check exact-generation compatibility on the official current product/support page.*
