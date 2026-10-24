# HDZero Goggles and VTX Integration Guide

![Goggles and VRX integration map](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/goggles-vrx-integration.svg)

![HDZero goggles product photo from the manufacturer's product catalogue](https://static.wixstatic.com/media/967e02_c553e8472fab468e9214fe2a5123e194~mv2.png)

*Real product example: HDZero goggles, shown in the [official HDZero product catalogue](https://www.hd-zero.com/products). Pair them with supported HDZero VTX hardware and follow the current model-specific manual; this is not interchangeable with DJI or Walksnail digital systems.*

![HDZero video receiver module product photo](https://static.wixstatic.com/media/967e02_33e9daad991546f5830572a3e5ea4dff~mv2.png)

*Ground-side receiver example: HDZero VRX receiver module, from the same [official manufacturer listing](https://www.hd-zero.com/fpv-hd-video-tranceiver). Verify display output, input voltage, antenna connections and required goggles/display configuration.*

HDZero is a digital FPV video ecosystem with multiple VTX/air-side product types. The dimensions, voltage, output power, mounting pattern, weight and intended aircraft size differ between VTX models. “HDZero” must refer to supported components and setup, not a generic digital interface.

## 1. Select an exact VTX and receiver combination

Start with the official [HDZero product catalogue](https://www.hd-zero.com/products), [VTX summary/specifications](https://docs.hd-zero.com/vtx-summary), and the [Freestyle V2 documentation](https://docs.hd-zero.com/freestyle-v2).

Before purchase, record:
- Exact VTX model and revision, including whoop/race/freestyle formats.
- Compatible camera and cable/connector.
- Input voltage, current/power, required cooling and mounting.
- Exact goggles/receiver support, supported video modes, firmware and antennas.
- Whether desired recording is goggles DVR or an independent onboard camera.

## 2. Mechanical and electrical integration

1. Confirm board/VTX mounting pattern and dimensions in manufacturer drawing.
2. Check battery full-charge voltage and the VTX's exact supported input range; use the specified regulator if needed.
3. Install the camera and coax carefully; avoid forcing a connector or bending the cable sharply.
4. Route antennas with strain relief, correct connector and suitable placement.
5. Provide required airflow. Follow product-specific bench-power/cooling rules.
6. Match power and ground, and connect video/control/OSD signals according to the exact board manual. Never infer a pinout from another VTX revision.

## 3. Firmware, setup and goggles

- Record the goggles and VTX firmware versions.
- Follow the official bind/update/setup procedure for the exact product.
- Configure video modes and any FC OSD/telemetry path according to the manual.
- Confirm picture and signal status. Test DVR separately from any onboard camera recording.
- Recheck supported modes and firmware notes after updates.

## 4. Troubleshooting

| Symptom | First checks |
|---|---|
| No image | Camera module and cable, VTX power, compatible goggles/receiver and firmware |
| Unstable/dropped image | Antenna/coax, connector, interference, supported mode and power input |
| VTX hot | Stop and inspect cooling/bench-use guidance and input-voltage compatibility |
| Mounting mismatch | Verify actual hole spacing, dimensions and frame standoffs; don't modify a PCB to force a fit |
| DVR differs from live feed | Confirm receiver DVR vs independent onboard recording and supported recording features |

## References

- [HDZero VTX summary](https://docs.hd-zero.com/vtx-summary)
- [HDZero Freestyle V2](https://docs.hd-zero.com/freestyle-v2)
- [HDZero product catalogue](https://www.hd-zero.com/products)
- [General FPV Goggles and VRX Integration](FPV-Goggles-and-VRX-Integration-Guide.md)
- [Analog vs Digital FPV Camera and Video Guide](Analog-vs-Digital-FPV-Camera-Video-Guide.md)

*Reviewed 22 October 2026. Use the exact HDZero hardware documentation and verify current compatibility before buying or flashing.*
