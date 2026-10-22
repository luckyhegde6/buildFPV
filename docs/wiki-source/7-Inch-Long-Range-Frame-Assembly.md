# 7-Inch Long-Range FPV Frame — Selection, Assembly and Mission Planning

![7-inch frame class and example wheelbase reference](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/frame-size-reference.svg)

![Product photo of iFlight AOS 7 V5 long-range frame kit](https://fpvstorerc.com/cdn/shop/files/IFlightAOS7V5FrameKit_4.jpg?v=1750820095&width=1445)

*Real frame example: iFlight AOS 7 V5. Official specs list 313 mm wheelbase, 254 × 184 × 36 mm overall dimensions, 8 mm arms and 325 g frame weight. Image: FPV Store RC listing; dimensions: [iFlight official product page](https://shop.iflight.com/AOS-7-V5-Frame-Kit-Pro2311).*

A 7-inch frame is often designed for efficient cruising and mission equipment, but **propeller size alone does not guarantee range or endurance**. Aircraft mass, battery type, wind, average power, radio/video links, legal limits and recovery planning determine whether a mission is viable.

## 1. Design priorities

- **Efficiency:** choose a motor/prop/voltage combination from the motor maker's measured data, not from universal KV rules.
- **Battery fit:** check the battery's weight, dimensions, current capability, voltage and secure retention; the largest pack is not always the best because mass reduces efficiency and changes handling.
- **Structure:** inspect arm stiffness, motor mounts, centre plates, fasteners and battery support. More mass and momentum increase crash consequence.
- **Navigation and recovery:** a GPS/GNSS module or buzzer can support situational awareness and recovery features, but does not guarantee rescue or return-to-home. Function depends on firmware, configuration, sensor status, control link and environment.
- **Video/control links:** place antennas as the hardware makers recommend; route coax with strain relief; keep control RX separate from video VRX/goggles.
- **Cooling and payload:** air unit, camera, GPS, current sensor, receiver and logging all add wiring and mass; respect thermal requirements.

## 2. Dimension and geometry checks

![Frame size reference showing 5 and 7 inch classes](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/frame-size-reference.svg)

Nominal 7-inch propeller diameter is 177.8 mm. Real frame wheelbase, arm geometry, battery bay and mounting patterns vary. The class diagram's example wheelbase range is illustrative and is not suitable for manufacturing or fitting. Use the selected frame's manufacturer drawing to verify:
- diagonal motor-to-motor dimension and prop clearance,
- arm width/thickness and motor screw length,
- FC/ESC mounting pattern and stack height,
- battery compartment/strap load path,
- camera, GPS, receiver, antennas and VTX/air-unit mounting space.

## 3. Assembly tools and mechanical steps

Prepare proper hex drivers, nut driver, caliper, torque caution, screw tray, tweezers, flush cutters, cable ties, heat-shrink and eye protection. DIY electrical work also needs appropriate soldering equipment/fume extraction, multimeter and safe current-limited first-power setup.

1. Verify frame revision and parts. Lay out arms, plates, standoffs, stack spacers and battery supports.
2. Dry-fit stack and power components. Keep the board accessible and prevent any PCB from contacting conductive carbon unless designed/isolated as specified.
3. Mount motors using specified screw lengths; ensure screws cannot touch windings.
4. Plan battery location/strap, receiver, antennas, camera, VTX and GPS/GNSS before soldering. Check the payload distribution and cable service access.
5. Route antenna cables without sharp bends, pinches or prop interference. Mount antennas securely according to their manual.
6. Keep the video unit cooled and follow the exact digital air-unit/VTX bench-power limitations.
7. Inspect all propeller discs, wiring, fasteners and battery retention.
8. Complete polarity/continuity and firmware steps with propellers removed. Verify motor mapping/direction with the installed firmware's instructions.

## 4. Range is a mission plan, not a frame specification

Do not interpret a manufacturer RF link range as guaranteed flight range. A safe mission must account for battery energy and reserve, wind, return distance, altitude/terrain, RF interference, antennas, aircraft direction, link/failsafe behavior, video visibility, weather and local aviation/radio rules. Test failsafe and recovery procedures in a controlled safe environment before any extended mission. A GPS module is not a substitute for pilot skill, a working control link or a safe route.

For initial learning, a small, repairable aircraft and simulator practice is usually a lower-complexity route than a heavy long-range build.

## 5. Sources and further reading

- [Drone Categories and Size Guide](Drone-Categories-and-Size-Guide.md)
- [Motor, propeller and battery compatibility](Motors-Propellers-and-Battery-Compatibility.md)
- [FPV Chargers and Battery Safety](FPV-Chargers-LiPo-and-Li-ion-Battery-Safety.md)
- [First Build Checklist](First-Build-Checklist.md)
- [Betaflight Setup Guide](https://betaflight.com/docs/wiki/getting-started/setup-guide)

*This is a planning/assembly guide, not a guarantee of safe range or flight time. Use exact manuals and applicable local regulations.*
