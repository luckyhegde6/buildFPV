# Balanced X FPV Frame — Selection, Dimensions and Assembly

![Balanced X frame geometry and dimension reference](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/balanced-x-vs-deadcat.svg)

![Manufacturer product photo of the Axisflying MANTA 5 True-X frame](https://www.team-blacksheep.com/img/gallery/Axisflying_MANTA5_5inch_TX-0.jpg)

*Real product example: Axisflying MANTA 5 True X. Team BlackSheep lists a 238 mm wheelbase, 133 g frame weight, T700 carbon construction and max 5.1-inch props. The frame has True-X and Squashed-X versions, so verify the selected variant. [Manufacturer listing](https://www.team-blacksheep.com/products/product%3A7703).

A symmetrical or “balanced X” frame places the four motor positions in a symmetric X arrangement around the centre. It is a widely used general-purpose geometry for freestyle and racing builds. This page explains the layout and assembly sequence, not a universal drilling template.

## 1. Geometry and dimensions

Frame makers may report **diagonal motor-to-motor wheelbase**, front/rear span, width, plate size and propeller class. Do not use one dimension as a substitute for another. Prop diameter is a separate measurement.

![Illustrative frame class dimensions and nominal prop diameters](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/frame-size-reference.svg)

Common balanced-X frames exist across micro through 5-inch and larger classes. A nominal 5-inch prop is 127 mm diameter, but this does not define a 127 mm wheelbase. Use the exact frame drawing for motor distances, arm width/thickness, mounting pattern, and screw lengths.

## 2. Benefits and trade-offs

**Benefits:** symmetric geometry is familiar to builders, has a broad range of motor/prop/flight-control setups, and is a useful starting point for general-purpose freestyle or racing.

**Trade-offs:** front propellers may appear near the top corners of a wide-angle camera image. Camera tilt/FOV, frame design and prop size affect how noticeable this is. Balanced geometry does not guarantee better tuning or durability; those depend on frame stiffness, build quality, weight and tune.

## 3. Assembly tools

Prepare the exact metric hex drivers for your fasteners, small nut driver, caliper/ruler, tweezers, flush cutters, heat-shrink, cable ties, eye protection, screw tray and the frame/FC/motor manuals. DIY electrical work may also require a suitable soldering iron, solder/flux, fume extraction, multimeter and current-limited smoke-stopper. A BNF frame may not require soldering.

## 4. Mechanical assembly order

1. **Inventory and dry-fit.** Identify frame revision, arms, plates, standoffs, stack spacers, camera side plates and motor hardware. Check all holes match without force.
2. **Confirm screw lengths.** Compare motor screws with the motor maker's drawing. Too-long screws may touch winding wire; too-short screws may not secure the motor.
3. **Fit arms and centre plates.** Start fasteners by hand, ensure parts seat flush, and tighten evenly to the maker's guidance. Do not over-tighten carbon plates or plastic parts.
4. **Check the stack mounting.** Verify exact FC/ESC mounting-hole spacing, standoff length, USB access and connector orientation. Never make the PCB fit by bending it.
5. **Dry-place camera and video unit.** Confirm lens clearance and camera tilt range, cable reach, and airflow. The VTX/air-unit manual takes precedence on mounting and cooling.
6. **Plan battery and antenna locations.** Ensure the pack cannot slide into the props, the strap clears wires, and antennas have strain relief without sharp bends or prop contact.
7. **Route wires before tightening final mounts.** Keep wires away from motor bells and props. Avoid pinching coax, blocking airflow or putting tension on tiny board connectors.
8. **Rotate each motor by hand with power disconnected.** Check for screw-to-winding contact, bent shafts, rubbing and wires touching the bell.
9. **Inspect prop clearance.** Use the actual propeller size and check the entire rotation disc against the frame, camera cage, battery and antennas.

## 5. Electrical and firmware hand-off

Mechanical completion is not flight readiness. Before any motor test, remove all propellers. Check battery polarity and solder joints, perform appropriate continuity checks with power disconnected, and consult the FC/ESC board layout for exact pads. Follow the correct firmware target, receiver mapping, motor order/direction and failsafe procedures for the installed board and software.

Official starting point: [Betaflight Setup Guide](https://betaflight.com/docs/wiki/getting-started/setup-guide). Use [First Build Checklist](First-Build-Checklist.md) for the full sequence.

## 6. Common issues

| Problem | First safe check |
|---|---|
| Props visible in view | Check real lens FOV, camera angle and frame geometry; do not move motors to improvised positions |
| Motor binds or feels rough | Disconnect battery; inspect screw length, shaft and debris |
| Vibrations after a crash | Inspect props, motor shafts, arms, stack screws, soft mounts and wire/frame contact before retuning |
| Camera/air unit overheating | Power down and follow that model's airflow/bench-use manual |
| Holes do not align | Verify exact frame and board drawings; never force or flex a PCB |

## Related reading

- [Frame geometries — balanced X vs deadcat](Frame-Geometries-Balanced-X-vs-Deadcat.md)
- [Deadcat frame assembly](Deadcat-Frame-Assembly.md)
- [Motor, propeller and battery compatibility](Motors-Propellers-and-Battery-Compatibility.md)
- [First Build Checklist](First-Build-Checklist.md)

*Educational assembly guide. The dimension illustration is indicative only and must never be used as a drill template or substitute for the exact manufacturer's drawing.*