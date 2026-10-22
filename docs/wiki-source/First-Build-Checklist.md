# First Build Checklist

![Choose an FPV class and compare frame sizes](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/drone-class-overview.svg)

Start with the [Drone Categories and Size Guide](Drone-Categories-and-Size-Guide.md), then choose a physical frame style using [Balanced X vs Deadcat](Frame-Geometries-Balanced-X-vs-Deadcat.md). Purchase format (BNF/PNP/RTF/DIY) is a separate decision: see [BNF, PNP, ARF, RTF and DIY Formats](BNF-PNP-RTF-ARF-and-DIY-Formats.md).

## Pick a class before buying

- [ ] Choose the purpose first: tinywhoop / indoor practice, 2.5-inch micro, cinewhoop, 5-inch racing/freestyle, or experienced-pilot long-range.
- [ ] Confirm prop diameter and frame wheelbase as separate specifications from the actual frame drawing.
- [ ] Decide if prop guards/ducts and camera-payload mounting are needed; they add mass/drag and do not make the aircraft collision-proof.
- [ ] Select camera, VTX/air-unit and goggles/VRX as a compatible system. Start with [Analog vs Digital FPV Video](Analog-vs-Digital-FPV-Camera-Video-Guide.md) and [Goggles/VRX Integration](FPV-Goggles-and-VRX-Integration-Guide.md).
- [ ] Check battery chemistry, series count, voltage/current limits and charger: [Motor/Prop/Battery Compatibility](Motors-Propellers-and-Battery-Compatibility.md), [Charger and Battery Safety](FPV-Chargers-LiPo-and-Li-ion-Battery-Safety.md).

A good first build is not the most powerful build. It is the one whose parts fit, whose video/control systems you understand, and which is repairable within the budget.

## Choose the flying goal first

- [ ] Decide indoor whoop, outdoor freestyle, racing, or cinematic flying.
- [ ] Confirm where a suitable and legal flying site exists.
- [ ] Choose analog or a specific digital-video ecosystem before buying goggles.
- [ ] Establish total budget, including tools, charger, batteries, spares and repairs.
- [ ] Consider a small, repairable aircraft and buy spare propellers and likely crash parts.

## Component compatibility review

- [ ] Frame dimensions, mounting holes, stack footprint, stack height and camera space fit.
- [ ] FC supports required firmware and has appropriate UARTs/ports for receiver/video hardware.
- [ ] ESC voltage and current capability suit intended battery, motors and propellers.
- [ ] Battery cell count is supported by every attached component or a suitable regulator is used.
- [ ] Motors fit the frame and match propeller size, battery voltage and intended flying style.
- [ ] Receiver is 2.4 GHz ExpressLRS-compatible and supports the expected firmware/configuration.
- [ ] Camera, VTX/air unit, antennas and goggles belong to compatible video equipment ecosystems.
- [ ] Connectors and polarity have been checked against the exact manuals.
- [ ] Antennas can be mounted securely away from props and major obstructions.
- [ ] Cooling, airflow, wire routing and repair access are acceptable.
- [ ] Exact board revision and firmware target are known; recovery method is available.
- [ ] Every specification in the bill of materials has a manufacturer/source link.
- [ ] An experienced builder reviews the list and open questions.

## Bill of materials template

| Part | Exact model / revision | Voltage / interface / size | Official source | Compatibility verified? | Open question |
|---|---|---|---|---|---|
| Frame | | | | [ ] | |
| FC | | | | [ ] | |
| ESC | | | | [ ] | |
| Motors | | | | [ ] | |
| Props | | | | [ ] | |
| Receiver | | 2.4 GHz ELRS? | | [ ] | |
| Camera + video transmitter/air unit | | Video system | | [ ] | |
| Goggles/display | | Matching system | | [ ] | |
| Battery | | Cell count / capacity | | [ ] | |
| Charger | | Chemistry / cell count | | [ ] | |

## Purchasing stop rule

Do not purchase if a voltage, connector polarity, mounting dimension, control protocol, video compatibility, or firmware target remains an assumption. Write the question down and get it confirmed first.
