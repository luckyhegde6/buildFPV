# 5-Inch FPV Frame — Freestyle vs Racing and Assembly

![5-inch frame shape and dimension reference](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/frame-size-reference.svg)

A nominal 5-inch propeller is 127 mm in diameter, but the frame wheelbase and motor geometry vary by model. Many 5-inch builds use open props and share parts across racing and freestyle, yet their priorities can differ substantially.

## 1. Racing vs freestyle frame priorities

| Priority | Racing-oriented build | Freestyle-oriented build |
|---|---|---|
| Main goal | Course response, predictable feel and repair time | Tricks, durability and general outdoor flight |
| Frame | Often light, low-drag and course-focused | Often emphasizes arm/plate strength and camera protection |
| Payload | Low latency and light camera/video gear may dominate | May allow heavier HD system/action camera and robust mounts |
| Repair trade-off | Weight and performance focus may compromise crash durability | Extra strength/guards may add weight |
| Setup | Race rules, field practice and pilot preference matter | Tune, camera angle and personal style vary |

These are tendencies rather than fixed standards. A frame can be used for more than one style, and no one geometry guarantees racing performance or freestyle durability.

## 2. Dimensions and dry-fit

![Dimensioned frame class reference](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/frame-size-reference.svg)

Before ordering, confirm exact wheelbase, motor mounting holes, approved prop diameter, arm thickness/width, stack mounting pattern, camera cage, battery dimensions and antenna position from the manufacturer's drawing. The schematic is not a drill pattern.

## 3. Tools and parts to prepare

Use correct-size hex drivers, nut driver, caliper, motor fasteners of manufacturer-specified length, tweezers, flush cutters, cable ties, spare props/arms and eye protection. DIY wiring requires suitable soldering gear, fume extraction, multimeter, heat-shrink, power/polarity check and safe first-power routine.

## 4. Assembly sequence

1. Inventory frame, arms/plates, standoffs, camera plates and hardware. Identify the front and check the exact revision.
2. Dry-fit the parts and confirm the FC/ESC stack pattern; preserve USB access and don't bend PCBs.
3. Install motors using screws that do not touch windings. Spin each motor by hand with power disconnected.
4. Place stack, receiver, camera and VTX/air unit following their exact manuals and cooling requirements.
5. Fit camera at a conservative initial angle; verify prop visibility, lens clearance and connector reach.
6. Plan the battery position and strap to prevent movement during manoeuvres.
7. Route wires away from prop discs; secure antenna/coax without sharp bends or connector strain.
8. Inspect frame fasteners, arm cracks, motor mounting and prop clearance.
9. Complete electrical and firmware setup only after mechanical inspection. Remove all props for motor, receiver, failsafe and firmware tests.

## 5. Motor / prop / battery fit

Never choose KV only from a “5-inch build” label. Use manufacturer tables linking exact motor, prop model, battery cell count, expected current/thrust and temperature. Verify ESC current/voltage, power-system regulation, battery current capability, and all-up weight. A camera or digital VTX changes the payload and may change the appropriate prop/motor choice.

## 6. Pre-flight checklist

- [ ] Frame, arms and camera cage have no cracks or loose hardware.
- [ ] Correct motors/props are fitted and motor direction matches firmware.
- [ ] Receiver control direction, arming switch and failsafe behave as intended.
- [ ] VTX/antenna are installed and the goggles system is compatible.
- [ ] Battery is secured, voltage compatible and not damaged.
- [ ] Flight area has suitable distance from people/property and complies with local rules.

## Further reading

- [Motor, propeller and battery compatibility](Motors-Propellers-and-Battery-Compatibility.md)
- [Balanced X frame assembly](Balanced-X-Frame-Assembly.md)
- [Deadcat frame assembly](Deadcat-Frame-Assembly.md)
- [First Build Checklist](First-Build-Checklist.md)
- [Betaflight Setup Guide](https://betaflight.com/docs/wiki/getting-started/setup-guide)

*The illustrated wheelbase range is an example only; verify the exact frame drawing.*
