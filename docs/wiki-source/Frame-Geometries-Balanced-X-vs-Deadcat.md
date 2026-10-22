# Frame Geometries: Balanced X vs Deadcat — Selection and Assembly Guide

![Balanced X versus deadcat frame top-view and camera view cone](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/balanced-x-vs-deadcat.svg)

A frame is the structure that holds the motors, flight stack, camera, video transmitter, battery and antennas. **Frame geometry, propeller size, and intended flying purpose are different choices.** Two frames may support the same nominal prop size but differ in camera visibility, mounting space, stiffness, and repair access.

## Real frame examples side by side

![GEPRC GEP-MK5X O3 symmetrical/squashed-X frame, manufacturer's product photo](https://geprc.com/wp-content/uploads/2022/11/GEP-MK5-O3-Frame-1-600x600.jpg)

*Example X/squashed-X frame: GEPRC lists 225 mm wheelbase, 214 × 168 × 42 mm overall size and 5-inch prop compatibility. [Manufacturer source](https://geprc.com/product/gep-mk5x-o3-frame/).*

![GEPRC GEP-MK5D O3 deadcat frame, manufacturer's product photo](https://geprc.com/wp-content/uploads/2023/01/7-2-1-600x600.jpg)

*Example deadcat frame: GEPRC lists 230 mm wheelbase, 208 × 193 × 42 mm overall size and 5-inch prop compatibility. These photos illustrate specific SKUs; other frames with the same label can have different geometry and dimensions. [Manufacturer source](https://geprc.com/product/gep-mk5d-o3-frame/).*

## 1. Frame geometry categories

| Geometry | What it means | Common reason to choose it | Trade-offs / checks |
|---|---|---|---|
| **True / symmetrical X** | Four motor positions are arranged symmetrically around the centre; the motor arms form an X in top view | A common general-purpose geometry for balanced freestyle/racing builds | Front propellers may enter a wide camera's field of view; exact arm shape and motor spacing vary |
| **Deadcat / front-spread** | Front motor positions are spread laterally or otherwise shaped to keep props out of the camera image | Cleaner camera footage with fewer prop tips in the frame | Geometry is not standardized; check stiffness, camera angle, prop clearance and handling/tune implications for the specific frame |
| **Squished X / stretched X** | Same general quad layout but with different front-to-rear versus side-to-side proportions | Fit, responsiveness or handling preference in a specific design | Names are used inconsistently; use actual motor-to-motor dimensions rather than the label |
| **H / plus / specialised layouts** | Arms or motor locations form another shape or payload-specific structure | Unusual mounting, payload or mission requirements | Not interchangeable with a conventional X tuning/motor map; follow frame and firmware documentation |
| **Ducted/guarded whoop/cinewhoop** | Circular or partial ducts/guards surround propeller areas | Close-proximity filming or micro flying where guards are useful | Ducts add drag and mass; they do not make an aircraft collision-proof |
| **Long-range / endurance frame** | Often longer arms and space for efficient propulsion, battery and antenna/GPS placement | Longer missions and equipment fit | Can add momentum and mass; frame name does not guarantee range or endurance |

## 2. Balanced X vs deadcat: which one should I choose?

- Choose a **symmetrical X** when a conventional geometry, straightforward parts availability and a broad range of established setups matter more than eliminating every prop tip from a wide-angle video frame.
- Choose a **deadcat** when avoiding visible front propellers in footage is an important design goal. Verify that the actual camera FOV, tilt, prop diameter and front motor location achieve the result; not every frame advertised as deadcat guarantees zero prop visibility.
- Neither geometry is inherently “better”. Stiffness, frame mass, arm replacement, motor layout, camera mounting, prop clearance, electronics space and the chosen tune matter more than the name alone.

## 3. Parts of the frame to recognise

- **Arms:** hold motors and take impact loads; replaceable arms can simplify crash repair.
- **Centre plates / body:** hold the stack, battery and wiring. Check FC/ESC mounting holes and thickness.
- **Motor mounting pattern:** the motor's hole pattern and screw length must match both arm and motor. Screws that are too long can contact motor windings and cause damage or a short.
- **Stack mounting pattern:** common patterns include compact and larger mounting spacings, but do not assume a board fits because it looks close. Read frame and board drawings.
- **Camera cage / side plates:** protect and position the camera. Verify camera width, height, lens clearance and intended tilt range.
- **Battery mounting surface / straps:** check battery dimensions, centre of gravity, strap path, pad/grip material and whether straps can contact moving parts.
- **Antenna and VTX space:** keep antennas secured, protect coax connectors from strain, and follow the VTX manufacturer's airflow/thermal instructions.
- **Prop clearance:** check every propeller throughout its rotation against the frame, wires, battery, camera cage and antenna. Check clearance again after any repair.

## 4. Assembly tools and consumables

Tool needs vary with whether you are assembling a BNF frame/quad or building a DIY aircraft. Gather the correct tools before starting:

| Tool / material | Why it helps | Notes |
|---|---|---|
| Correct-size quality hex drivers (often metric) | Motor, frame and stack fasteners | Use the exact screw head and size; a worn driver rounds fasteners |
| Small nut driver / wrench and pliers | Locknuts, standoffs, antenna hardware | Avoid twisting or crushing connectors/coax |
| Caliper or ruler | Check frame dimensions, stack pattern and screw length | Compare to the manufacturer drawings; do not infer by photos |
| Tweezers, flush cutters and small scissors | Wire routing, zip ties and heat-shrink trimming | Keep sharp ends and cut-offs away from boards/battery wires |
| Multimeter with continuity mode | Check for unintended shorts after soldering and repairs | Learn where to probe and disconnect all power before continuity testing |
| Soldering iron, suitable solder/flux, fume extraction and heat-resistant work surface | Only for builds requiring soldering | Work ventilated, secure parts and protect battery cells from heat; this is optional for some BNF builds |
| Helping hands / board holder | Stabilises small boards and wires | Do not clamp delicate components or crush coax |
| Heat-shrink, cable ties and suitable electrical insulation | Insulate joints and support wiring | Keep wires clear of props and hot components |
| Smoke-stopper / current-limited first-power tool | Can limit damage from some wiring faults during initial power-up | Not a guarantee; still check polarity and continuity before powering |
| Threadlocker, only where suitable | Helps secure compatible metal-to-metal fasteners | Use only where frame/motor maker allows; some threadlockers damage plastic. Avoid contaminating motor bearings/windings |
| Prop tool and spare screws/arms/props | Routine service and crash repairs | Props stay removed during configuration and bench testing |
| Eye protection and a tidy, non-flammable work area | Helps manage small parts and battery/electrical hazards | Move loose metal off the bench before connecting a battery |

## 5. Mechanical assembly sequence

This is a general planning sequence, not a universal hardware instruction. A frame, motor, FC, ESC, camera or air unit may require a specific order or spacer arrangement, so use each exact manual.

1. **Identify exact models and revisions.** Collect the frame drawing, motor specification, FC/ESC board layout, camera drawing and VTX/air-unit manual. Confirm prop size and battery dimensions before assembly.
2. **Dry-fit the bare frame.** Lay out plates, arms, standoffs, camera cage and stack spacers. Check that holes align without forcing or bending parts.
3. **Mount the motors mechanically.** Use correct screws and length for each arm/motor. Confirm no screw enters windings and motor bells rotate freely.
4. **Plan the electronics order.** Check stack mounting, USB access, connector direction, airflow, antenna access and whether the chosen digital air unit needs an approved mount/cooling arrangement.
5. **Place camera and verify its view.** Check the lens clears the cage, set a reasonable initial camera angle, and confirm props do not enter the desired FOV unnecessarily.
6. **Dry-route wires and antenna leads.** Leave appropriate movement/service slack without leaving loops near props. Avoid sharp bends, pinched cables, direct tension on RF connectors and hot motor/ESC areas.
7. **Position the battery.** Check strap path, secure retention, centre of gravity and connector reach. Do not allow the pack to rub on a sharp frame edge.
8. **Tighten gradually.** Tighten fasteners evenly and according to the frame maker's instructions; do not overtighten carbon plates or plastic ducts.
9. **Inspect every prop clearance and fastener.** Rotate motors by hand with power disconnected. Confirm wires, camera, battery straps and antennas stay out of the prop discs.
10. **Only then proceed to electrical assembly and configuration.** Soldering, polarity/continuity checks, firmware, receiver mapping, VTX configuration and motor direction require separate steps and exact board diagrams.

## 6. After frame assembly: safe bench verification

- [ ] **Remove every propeller** before receiver, firmware, motor direction, failsafe and ESC tests.
- [ ] Before first power, inspect solder joints and connector polarity and check for unintended shorts according to board documentation.
- [ ] Use a current-limited first-power tool where appropriate; stop immediately if there is smoke, unusual heat, smell or unexpected current draw.
- [ ] Check board orientation, channel directions, receiver setup and failsafe using the relevant flight-controller documentation.
- [ ] Verify motor order and direction in the installed firmware's motor diagram. Do not copy an arbitrary internet motor-number illustration.
- [ ] Verify correct propeller type and direction against the actual frame/motor layout only after bench tests pass.
- [ ] Check battery, camera, video transmitter, antennas and radio/control receiver as separate subsystems.

Betaflight's [official Setup Guide](https://betaflight.com/docs/wiki/getting-started/setup-guide) explicitly instructs users to remove props before testing motors and to verify motor direction and failsafe. Follow the exact installed firmware instructions.

## 7. Troubleshooting frame-related issues

| Symptom | Possible cause | Safe first check |
|---|---|---|
| Props visible in recorded video | Symmetrical motor placement, lens FOV, camera tilt or prop size | Compare actual camera FOV and frame drawing; do not change motor positions arbitrarily |
| Persistent vibration / unstable flight | Loose hardware, bent motor shaft, damaged prop, frame crack, wire touching frame/motor or poor soft-mount setup | Disconnect battery, remove props, inspect mechanical condition before changing tune |
| Motor will not spin freely by hand | Screw contacting windings, bent shaft, debris or motor damage | Do not power; remove motor fasteners and inspect screw length and motor |
| Wires touch propellers | Poor routing, ties loosened or too little slack/strain relief | Disconnect battery and reroute with adequate clearance |
| Camera/air unit overheats on bench | Poor ventilation or unit being powered without suitable cooling | Power down and follow that exact product's thermal/bench-operating instructions |
| Stack holes do not align | Incorrect mounting pattern or missing/mismatched spacers | Re-check drawings and hole spacing; never force a PCB onto screws |

## References

- [Betaflight Setup Guide](https://betaflight.com/docs/wiki/getting-started/setup-guide)
- [BETAFPV Pavo35 product example](https://betafpv.com/products/pavo35-brushless-whoop-quadcopter)
- [FPV Drone Parts — One by One](Drone-Parts-One-by-One.md)
- [First Build Checklist](First-Build-Checklist.md)
- [Drone Categories and Size Guide](Drone-Categories-and-Size-Guide.md)

*Reviewed 22 October 2026. Diagrams are explanatory schematics and not to scale. The frame manufacturer and exact component manuals take precedence.*
