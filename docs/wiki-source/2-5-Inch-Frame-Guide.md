# 2.5-Inch FPV Frame — Dimensions, Component Fit and Assembly

![2.5-inch frame size example alongside other prop classes](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/frame-size-reference.svg)

![Product photo of Sub250 OasisFly25 2.5-inch carbon frame](https://www.unmannedtechshop.co.uk/cdn/shop/files/Sub250-Oasisfly25-Frame-2.webp?v=1753832978&width=1946)

*Real frame photo: Sub250 OasisFly25. The listed manufacturer model specifies 135 mm wheelbase and HQ 2.5×2.5×3 props; confirm the exact frame/SKU before assembly. Image: Unmanned Tech product listing. [Manufacturer specifications](https://sub250.com/en-nl/collections/oasisfly-series/products/sub250-oasisfly25-hd-o3).*

## Additional manufacturer frame example

<img src="https://betafpv.com/cdn/shop/files/7007342a36fdad8d81fe1333f226d127_1200x.jpg?v=1699430594" alt="BETAFPV Pavo25 V2 guarded 2.5-inch frame product photo" width="800" />
*Manufacturer photo: [BETAFPV Pavo25 V2 Brushless Whoop Frame](https://betafpv.com/products/pavo25-v2-brushless-whoop-frame). A second real frame example with ducts. This geometry differs from an open-prop toothpick frame such as the Sub250 example above; do not transfer dimensions or mounting assumptions between them.*

A 2.5-inch frame is usually designed around a nominal propeller diameter of 2.5 inches (63.5 mm). The frame wheelbase is a different dimension and varies by model. Many small open-prop builds are called micro or toothpick; they are not automatically tinywhoops, which typically use guarded/ducted propellers.

## 1. Why choose this class?

**Strengths:** compact, portable, can use less battery and lower mass than large builds, and can offer outdoor practice without a full 5-inch footprint.

**Trade-offs:** exposed propellers require care; wind and payload can strongly affect performance; small frame space makes wiring and HD video-unit selection important. Adding a heavy digital VTX, camera, ducts or action-camera payload can change a light micro into a much heavier aircraft.

## 2. Dimension and fit sheet

![Illustrative dimensions of 2.5, 3.5, 5 and 7 inch frame classes](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/frame-size-reference.svg)

Before buying, record the exact manufacturer's:
- nominal propeller diameter and clearance envelope,
- diagonal motor-to-motor wheelbase and plate dimensions,
- arm thickness, motor bolt pattern and approved fastener length,
- FC/ESC mount spacing, stack height and connector orientation,
- camera width/height, lens opening and allowable camera tilt,
- battery length/width/thickness, connector and strap placement,
- VTX/air-unit dimensions, supported input voltage, cooling requirement and antenna.

Do not use a category illustration as a drilling plan or infer that any “2.5-inch” prop will clear any 2.5-inch frame.

## 3. Component strategy

Small motors and low battery mass are central to keeping a micro agile. Match motor KV/stator and propeller model to the battery and ESC using manufacturer test data. Check all-up weight with the selected receiver, camera, VTX, battery and guards. A 1S or 2S label alone does not prove the motor/prop/ESC combination is compatible.

Choose open-prop for the intended outdoor micro use only where exposed props are appropriate; choose a guarded/ducted format if the use case and manufacturer's design favour it. Guards are not collision-proof.

## 4. Tools and assembly

**Tools:** suitable hex drivers, caliper, tweezers, flush cutters, small pliers, screw tray and eye protection. DIY builds may require a soldering iron and fume extraction, suitable solder/flux, multimeter, heat-shrink and a current-limited first-power aid. Keep spare props, mounting screws and likely crash parts.

1. Verify the exact frame revision and manual; dry-fit arms/plates/canopy.
2. Check motor mount holes and motor screw length; screws must not reach the windings.
3. Fit FC/AIO using only supported mounting holes and spacers. Ensure the USB port and connector are accessible.
4. Check camera/canopy fit and lens clearance.
5. Route motor wires and antennas away from prop discs and sharp carbon edges; do not pinch coax.
6. Position the battery securely and confirm the mass/centre of gravity is acceptable.
7. Rotate each motor by hand with power disconnected; inspect for rubbing and screw interference.
8. Check actual prop clearance after installing the intended propellers.
9. Remove all props before power, firmware, receiver, motor-direction and failsafe tests.

## 5. Compatibility pitfalls

- **Battery:** exact cell chemistry, cell count, maximum voltage and current capability must suit motor/prop and ESC.
- **Video system:** camera, air unit/VTX and goggles/VRX must match; an HD system may add significant mass and heat to a small frame.
- **Connectors:** physical fit does not prove polarity or current rating.
- **Firmware:** use the target for the exact FC/gyro revision; don't flash a guess.
- **First flights:** choose a permitted safe site with adequate distance from people, keep line of sight and do not treat a small frame as risk-free.

## Sources and related pages

- [Drone Categories and Size Guide](Drone-Categories-and-Size-Guide.md)
- [Motor, propeller and battery compatibility](Motors-Propellers-and-Battery-Compatibility.md)
- [First Build Checklist](First-Build-Checklist.md)
- [Betaflight Setup Guide](https://betaflight.com/docs/wiki/getting-started/setup-guide)

*The illustrated dimension ranges are examples only. Exact frame drawings and component manuals take precedence.*