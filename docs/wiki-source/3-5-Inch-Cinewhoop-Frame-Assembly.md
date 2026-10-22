# 3.5-Inch Cinewhoop Frame — Guards, Camera Payload and Assembly

![Cinewhoop guarded-frame schematic and frame size reference](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/frame-size-reference.svg)

![BETAFPV Pavo35 ducted cinewhoop frame product photo](https://betafpv.com/cdn/shop/files/d2e1b9aec379546f426ce88c187b9234_7825ca02-2d37-40da-a299-8051a920ac4c.jpg?v=1777538418&width=1445)

*Real frame example: BETAFPV Pavo35. The frame listing states 148 mm wheelbase, 92 mm duct diameter, 3 mm top plate, 1.5 mm base plate and 113.9 g frame weight. [BETAFPV frame specifications](https://betafpv.com/products/pavo35-brushless-whoop-frame).*

A cinewhoop is a filming-oriented quad design that often uses guards or ducts around the propellers for selected close-proximity shots. “Cinewhoop” is not a universal size standard; check actual prop diameter, wheelbase, guard dimensions, payload and takeoff weight. Some models marketed as cinewhoops use 2.5-inch, 3.5-inch or other prop sizes.

## 1. Why use a guarded frame?

**Benefits:** guards may reduce some prop-to-object contact risk and can be useful for planned close-proximity shots; frames often provide dedicated camera/air-unit mounts.

**Trade-offs:** ducts add mass and drag, alter aerodynamic loading and can affect flight time/current/temperature. Guards do not make it safe to fly close to people, pets or fragile objects. Prop wash and airflow performance are model- and tune-dependent.

## 2. Dimensions and payload budget

![Schematic class comparison with nominal prop size and example wheelbase](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/frame-size-reference.svg)

For a 3.5-inch nominal prop class, the prop diameter is 88.9 mm; actual duct outer diameter must be larger and varies. BETAFPV's Pavo35 is a specific example with a published 148 mm wheelbase and D90S 90 mm prop designation, 6S recommended pack, and product weights that change with included video system/camera. This example demonstrates that nominal class names and exact prop diameter can differ.

Source: [BETAFPV Pavo35](https://betafpv.com/products/pavo35-brushless-whoop-quadcopter). Read the listing for the exact package and revision before using the figures.

Before buying, total up frame + motors/props + FC/ESC + camera/air unit + recording camera if used + antennas + battery + all mounts/straps. Distinguish “weight without battery”, “weight with air unit” and complete takeoff weight.

## 3. Mechanical assembly and camera mounting

Tools include correct hex drivers, caliper, suitable motor screws, small pliers, wire cutters, tweezers, cable ties and eye protection. DIY electrical work also requires soldering/fume extraction, multimeter, heat-shrink and safe first-power procedure.

1. Confirm the frame's designated front, duct/guard modules, camera cage, stack supports and mounting hardware.
2. Dry-fit ducts and arms; do not force a guard to line up with an incompatible frame revision.
3. Choose screw length by checking the motor's mounting depth and manufacturer guidance. Long screws can damage the windings.
4. Mount motors and check bell rotation with power disconnected.
5. Place FC/ESC and air unit according to board drawings, maintaining required airflow and avoiding contact with conductive carbon.
6. Fit the camera and any action-camera mount. Check lens FOV, view obstruction and that the camera can be removed for service.
7. Route the antenna where manufacturer instructions specify; keep it supported and away from props. Avoid pinching coax through ducts.
8. Route motor/video wires with prop clearance and strain relief. Ducts hide wires but do not make loose wiring safe.
9. Fit battery strap and pad; verify battery retention, centre of gravity and connector access.
10. Inspect every prop disc against the duct, screws, camera, wiring and guards before electrical tests.

## 4. Heat and tuning considerations

A digital air unit can require a specific airflow/bench-power practice. Follow its manual; do not leave a unit powered on a stationary bench if the manufacturer requires active cooling. Ducts change aerodynamics, so do not expect an open-prop setup or tune to transfer perfectly. Monitor temperature/current using safe manufacturer procedures.

## 5. Pre-flight checklist

- [ ] All ducts/guards are secure and undamaged.
- [ ] Correct propeller model and rotation are verified with props removed.
- [ ] Camera/air unit pairing and goggles/VRX compatibility are confirmed.
- [ ] Battery cell count and voltage are supported by ESC and every direct-fed module.
- [ ] Battery is retained firmly and cannot touch props or sharp edges.
- [ ] Antenna and camera connectors are secure with strain relief.
- [ ] Arming, receiver mapping and failsafe are checked per firmware documentation.
- [ ] Flight location and proximity filming plan are lawful and safe.

## Related pages and sources

- [Drone Categories and Size Guide](Drone-Categories-and-Size-Guide.md)
- [Motor, propeller and battery compatibility](Motors-Propellers-and-Battery-Compatibility.md)
- [Analog vs digital video and cameras](Analog-vs-Digital-FPV-Camera-Video-Guide.md)
- [FPV goggles/VRX integration](FPV-Goggles-and-VRX-Integration-Guide.md)
- [Pavo35 official specs](https://betafpv.com/products/pavo35-brushless-whoop-quadcopter)
- [Betaflight setup guide](https://betaflight.com/docs/wiki/getting-started/setup-guide)

*Dimension graphics are illustrative. Use exact product engineering drawings for assembly and don't treat ducts as a substitute for safe operating distance.*