# FPV Build Budget and Buying Guide

![FPV drone class overview](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/drone-class-overview.svg)

A useful budget includes the complete flying system, ongoing spares and safe charging—not just the aircraft. Choose the mission and video ecosystem first, then check compatibility before paying. Prices and availability vary by country, shipping, customs, warranty and product revision; this guide intentionally uses cost drivers instead of pretending that one price remains current everywhere.

## 1. Start with your goal

| Goal | First classes to compare | Budget pressure points |
|---|---|---|
| Indoor practice / tight gates | Tinywhoop / micro kit | Spare props/ducts, compatible radio, goggles/video link, small batteries and charger |
| Portable outdoor flying | 2–2.5-inch open-prop micro | Lightweight VTX/camera, battery choice, repairable frame and wind limits |
| Close-proximity filming | Cinewhoop by actual size/payload | Digital video or recording camera, mount, airflow, battery, guards/ducts and spare ducts |
| Outdoor freestyle | 3-inch or 5-inch open-prop | Motors/ESC/props, crash parts, camera/video system, batteries, charger and tools |
| Competitive racing | Race-specific build/system | Consistent video/receiver setup, parts replacement, practice gear and event rules |
| Efficient/longer missions | Longer-range class after training | Energy storage, link/antenna equipment, navigation/recovery options and careful testing—not just a larger battery |

The class selector is a starting point. It does not guarantee performance, flight time or legal operating permission.

## 2. Five budget buckets

1. **Aircraft:** frame, FC/ESC, motors, propellers, camera/video transmitter, receiver, antennas and mounting hardware. On a BNF all of these may be bundled, but check the exact package list and revision.
2. **Control and video ground gear:** radio transmitter/module for the control protocol; goggles/VRX for the aircraft video system; required antennas, receiver modules, cables and batteries.
3. **Power:** batteries appropriate for that aircraft, a chemistry/cell-count-compatible charger, power supply if needed, storage/transport solution and spare leads/adapters of known polarity/rating.
4. **Build and repair tools:** correct hex drivers, spare screws/arms/props/ducts, multimeter, soldering gear and fume extraction for DIY, heat-shrink and a suitable current-limited first-power aid.
5. **Learning and ongoing costs:** simulator, repairs, replacements, shipping/customs/tax, warranty and time for firmware/configuration.

A bundle advertised as RTF may reduce separate purchases, but the contents vary. A BNF usually still needs a compatible transmitter and video goggles/VRX. See [BNF, PNP, RTF, ARF and DIY Formats](BNF-PNP-RTF-ARF-and-DIY-Formats.md).

## 3. Buying paths by experience

### Lowest-complexity practice path
Compare a supported tinywhoop kit with a compatible transmitter and goggles/VRX. Confirm whether the kit includes a battery and charger, whether the video is analog or digital, and which receiver protocol is installed. Budget for spare props/ducts and batteries. A tinywhoop is still a powered aircraft and should be flown in a suitable space, away from eyes, pets and people.

### Portable micro path
Compare actual 2–2.5-inch models by prop diameter, wheelbase, takeoff mass, camera/VTX weight, pack type, wind suitability and frame repair. Tiny micro frames have less room for connectors, cable routing and large video units. A heavy air unit can dominate mass and battery demand.

### Cinematic path
Pick the exact camera/recording objective before choosing the frame. Decide whether you need the air unit's onboard recording, goggle DVR, a separate action camera, or some combination. Include the camera mount and payload weight. Verify that the selected frame, camera, cable, air unit and goggles/VRX are supported together.

### DIY freestyle/racing path
Use a complete bill of materials with exact model/revision for frame, FC/ESC, motors, props, receiver, camera/VTX, antennas, goggles, batteries and charger. Verify the motor maker's test table for the planned cell count/propeller rather than using generic KV advice. Count the tools and spare parts needed for repairs.

### Advanced long-range path
Do not buy a 7-inch aircraft solely to chase maximum range or flight time. Plan battery reserve, legal airspace, visual line of sight, link health, wind, recovery, failsafe behaviour and safe landing options. GPS can support navigation/recovery features but does not guarantee recovery. A smaller, repairable aircraft and simulator time are usually a lower-complexity learning route.

## 4. Camera/video ecosystem is a long-term cost choice

The goggles/VRX and air-unit ecosystem can become a major part of the budget. Check before buying:
- exact VTX/air unit ↔ goggles/VRX compatibility and firmware,
- camera module and cable support,
- antennas/connectors/polarization,
- replacement cameras, coax cables, antennas and air units,
- onboard recording versus goggles DVR,
- physical fit, power input, current draw and thermal requirements,
- whether existing gear is actually reusable.

Read [FPV Cameras, VTX, VRX and Goggles Compatibility Comparison](FPV-Cameras-VTX-VRX-Compatibility-Comparison.md), [Analog vs Digital FPV Cameras and Video](Analog-vs-Digital-FPV-Camera-Video-Guide.md) and [Goggles/VRX Integration](FPV-Goggles-and-VRX-Integration-Guide.md).

## 5. Compatibility gate before checkout

Do not buy until every row in the BOM is answered.

| Part | Must verify | Evidence to retain |
|---|---|---|
| Frame | Prop clearance, wheelbase, arm and plate dimensions, camera cage, stack/VTX mount | Exact dimensioned drawing and version |
| Motors / props | Maker's motor/prop/cell-count data, shaft, screw length, current and temperature | Motor test table + exact prop model |
| ESC / FC | Full battery voltage, current headroom, stack pattern, regulator outputs, firmware/gyro target | Manufacturer spec and firmware target |
| Battery | Chemistry, S count/full voltage, capacity, current rating, connector polarity/physical fit | Pack label/datasheet |
| Charger | Chemistry, max cell count, full voltage, charge current/power and balance connector | Exact charger manual |
| Control link | Protocol, band, firmware, bind process and failsafe | Receiver and transmitter manuals |
| Camera / VTX / VRX | Supported camera, exact VTX/air unit–goggles generation, power, cooling and antennas | Official compatibility matrix |
| Whole aircraft | Takeoff mass including battery/camera/mounts, battery retention, safe place to fly | Updated BOM and pre-flight checklist |

Stop and investigate any unknown voltage, polarity, mount dimension, receiver protocol or video compatibility instead of assuming the plug or label is compatible.

## 6. Used / second-hand equipment

- Check exact model and board revision, not just the model family.
- Ask whether goggles/air unit can still receive supported firmware and whether the manufacturer lists the pairing.
- Inspect connectors, coax, antennas, camera lens, motor shafts, arm cracks, solder joints and battery health.
- Treat damaged/swollen packs as unusable; do not attempt to revive them for a bargain.
- Confirm included accessories and missing mounts/cables before comparing the asking price.
- Save the manual, firmware target, current configuration backup where supported, and proof of compatibility before changing settings.

## 7. Buying guides and next steps

- [Drone Categories and Size Guide](Drone-Categories-and-Size-Guide.md)
- [Frame Geometry and Assembly](Frame-Geometries-Balanced-X-vs-Deadcat.md)
- [First Build Checklist](First-Build-Checklist.md)
- [Motors, Propellers and Battery Compatibility](Motors-Propellers-and-Battery-Compatibility.md)
- [Chargers, LiPo and Li-ion Battery Safety](FPV-Chargers-LiPo-and-Li-ion-Battery-Safety.md)
- [Troubleshooting Quick Guide](FPV-Troubleshooting-Quick-Guide.md)
- [Buying Parts in India](Buying-Parts-in-India.md) for region-specific availability, customs and supplier considerations.

*Reviewed 22 October 2026. Prices and product availability should be checked at purchase time; this guide is about making a compatible system rather than choosing by headline price.*
