# Motors, Propellers and Battery Compatibility (1S–6S)

![Motor, propeller and battery compatibility schematic](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/motor-prop-battery-compatibility.svg)

![Animated conceptual view of rotating propellers and thrust direction](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/propeller-thrust-loop.gif)

*Concept animation only. Verify real motor rotation and propeller installation using the installed firmware's motor layout, with all props removed during testing.*

Battery cell count is only one part of the power system. **There is no safe universal table that says one motor KV is always right for 1S, 2S, 3S, 4S or 6S.** Compatibility depends on the exact motor winding/stator, propeller, aircraft weight, ESC, battery current capability, cooling and manufacturer's test recommendations.

## 1. Nominal vs full-charge voltage

For conventional LiPo chemistry labelled **3.7 V nominal / 4.20 V full per cell**, pack voltages are:

| Pack | Nominal voltage | Full charge at 4.20 V/cell | Typical examples, not rules |
|---|---:|---:|---|
| **1S** | 3.7 V | 4.20 V | Tinywhoops and ultra-light micros |
| **2S** | 7.4 V | 8.40 V | Some micro quads and compact cinewhoops |
| **3S** | 11.1 V | 12.60 V | Some lightweight open-prop builds |
| **4S** | 14.8 V | 16.80 V | Many micros and some larger builds |
| **6S** | 22.2 V | 25.20 V | Many performance builds and some 3.5–7-inch aircraft |

These are voltage calculations for conventional 4.20 V/cell LiPo packs, not universal charge limits. LiHV and other chemistries may use different limits. Read the battery label and manual. The FC, ESC, VTX and camera must accept their actual input voltage or be fed by a suitable regulator.

## 2. LiPo and Li-ion compared

| Property | LiPo packs | Li-ion packs |
|---|---|---|
| Typical FPV priority | High current for rapid thrust changes | Energy density and endurance where current demand suits the cell |
| Common use | Racing/freestyle and high-load aircraft designed for the pack | Efficient cruising/longer-endurance builds designed around the cell's discharge limits |
| Main limitation | Weight, sag under load, physical damage/swelling and fire risk | Many energy-dense cells are not intended for high current; sag and heat can be unsafe if overdrawn |
| Charging | Charger must support pack chemistry, cell count and balance arrangement | Charger must explicitly support the cell chemistry and its specified limits |

Some Li-ion cells are 3.6/3.7 V nominal and 4.20 V maximum, but not every lithium chemistry uses the same limits. **Do not choose charging voltage based on the word lithium alone.** A high-energy Li-ion pack is not automatically a suitable substitute for a high-discharge LiPo.

## 3. Motor (BLDC) categories and terms

FPV quads commonly use small brushless DC motors, often an outrunner design: the outer bell rotates around the stationary stator.

- **Stator size** (e.g. 0802, 1103, 1404, 1505, 2006) is a size convention. Larger stator volume can support more torque, but mass, winding, cooling and design still matter.
- **KV** is approximate unloaded RPM per volt. It is not a direct thrust, torque, quality or efficiency score.
- **Mounting** includes the motor bolt-hole pattern, bolt length and shaft/prop retention. A screw that reaches the winding can destroy a motor or cause a short.
- **Motor wires / direction** must be checked against the installed ESC/firmware setup. Do not infer a universal motor order from an arbitrary drawing.
- **ESC** must support battery voltage and the motor/prop's current draw with thermal headroom and appropriate firmware.

Check the exact maker's test table for battery cell count, propeller model, thrust/current, temperature and operating conditions before picking a motor/prop combination.

## 4. Propeller categories

- **Two-blade:** often less blade area/drag than a comparable multi-blade prop, but actual efficiency depends on shape, pitch and operating point.
- **Three-blade:** common on FPV micros because it can balance control feel with practical load; it may draw more current than a lighter-load prop on the same setup.
- **Four-blade / more blades:** useful in selected builds, including some guarded ducts; extra blade area often increases load and is not automatically more efficient.
- **Diameter:** maximum propeller size must clear frame, ducts, adjacent props, camera, wires and battery straps.
- **Pitch and blade shape:** strongly affect load, current, response, noise and efficiency; prop labels alone are not a performance guarantee.
- **CW / CCW:** the propeller must match the actual motor direction and firmware layout. Verify with props removed.
- **Ducted / guarded vs open prop:** ducts change airflow and usually add mass and drag; props and tuning are not automatically interchangeable between the two designs.

## 5. What to verify at each cell count

| System | Core compatibility checks |
|---|---|
| **1S** | Full battery voltage, tiny motor/prop rating, board's integrated ESC current limit, connector resistance and pack discharge capability; little weight is available for extra HD video hardware |
| **2S** | Motor/prop test at 2S, ESC and VTX input ranges, regulator voltage, current load and frame clearance |
| **3S** | Motor maker's 3S recommendation, ESC headroom, prop diameter/pitch/blade count and thermal performance |
| **4S** | Check full 16.8 V against every direct-fed component, current at the intended prop and actual AUW; do not assume any 4S-capable FC makes the camera/VTX 4S safe |
| **6S** | Check full 25.2 V wherever conventional 4.2V/cell LiPo is used, ESC/motor test data, correct regulators, wire/connector rating and thermal headroom; some systems require regulated power |

A cell-count label alone does not establish compatibility. Verify all of these together: battery voltage, motor KV/stator, manufacturer-tested prop, ESC current and voltage, frame size/clearance, total mass including battery/camera/guards, regulator outputs, connector/polarity, and cooling.

## 6. Flight-time figures: what the numbers mean

Published flight times belong to one exact test configuration. BETAFPV lists Air75 at 6.5 minutes for a stated voltage range and setup; it lists Pavo35 at 10–12 minutes for its stated battery and product configuration. That is useful for context, not a promise for a different pilot, pack, camera or flight style.

A rough energy estimate is Wh ≈ nominal pack voltage × capacity in amp-hours. This estimates nominal stored energy, not actual usable flight time. Time also needs average power draw and an appropriate battery reserve. Weight, wind, throttle profile, propeller, motor, sag, cell health, voltage cutoff and payload all matter.

## 7. Charge cycles and battery ageing

There is no universal guaranteed number of safe cycles for FPV LiPo or Li-ion packs. Calendar age, depth of discharge, current, temperature, storage state, balancing, manufacturing quality and physical damage all affect life. Follow the specific manufacturer’s cycle-life test notes if available; do not use a cycle count as a substitute for inspection.

Stop using a pack that is swollen, punctured, crushed, unusually hot, leaking, smells abnormal, or has damaged leads or unexplained voltage imbalance. Do not charge or fly a damaged pack.

## 8. Pre-purchase compatibility checklist

- [ ] Battery chemistry, S count and full voltage are explicitly supported.
- [ ] Manufacturer motor testing supports the target cell count and exact prop or an equivalent approved configuration.
- [ ] ESC voltage/current capability has margin and suitable cooling.
- [ ] FC, camera and VTX/air unit accept direct battery voltage or have the correct regulator.
- [ ] Connector polarity, connector current capacity, wire gauge and physical fit are checked.
- [ ] Propellers clear the frame, ducts, camera and wires.
- [ ] Pack discharge rating is supported by the cell/pack datasheet, not just a marketing C-number.
- [ ] A compatible balance charger and safe charging location are available.

## Sources

- [BETAFPV Air75 specs](https://betafpv.com/products/air75-brushless-whoop-quadcopter)
- [BETAFPV Pavo35 specs](https://betafpv.com/products/pavo35-brushless-whoop-quadcopter)
- [BETAFPV batteries](https://betafpv.com/collections/batteries)
- [Betaflight setup guide](https://betaflight.com/docs/wiki/getting-started/setup-guide)

*Reviewed 22 October 2026. This page is educational, not a universal motor/propeller/BOM recommendation. Prioritise the exact battery, motor, propeller, ESC and aircraft manuals.*
