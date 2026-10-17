# 4. Planning a first build

Do not pick every component independently and hope they fit. Pick a use case and video/control approach first, then check the parts as one electrical and mechanical system.

> For reusable tick-box checks, see [Practical FPV checklists](checklists.md).

## First decide the use case

Write down:

- Where will it be flown: indoors, a suitable open outdoor area, or a club/track?
- Are there people, pets, roads, buildings, trees, or aircraft nearby?
- Do you prefer a **tiny whoop** (small ducted quad, often useful for protected low-energy practice), a small outdoor quad, or a larger freestyle/racing quad?
- Is the goal mainly learning, racing, freestyle, cinematic footage, or long-range flight?
- What is the total budget, including radio already owned, goggles, batteries, charger, tools, spares, and crashes?

For a beginner, a small and repairable aircraft is usually easier to manage than starting with a heavy, high-power quad. The right choice depends on the legal flight location and whether you can fly safely there.

## Compatibility checklist

Record the exact model and datasheet for every shortlisted part before purchasing.

| Check | Questions to answer |
|---|---|
| Frame | Does the frame fit the FC/ESC mounting pattern, stack height, camera, VTX/air unit, antenna, and battery? Are motor sizes and prop diameter supported? |
| Flight controller | Which firmware does it support? Does it expose the required UARTs, receiver input, video/OSD support, and voltage/current sensing? What voltage can its pads accept? |
| ESC | Is it compatible with the battery cell count? Is its continuous/burst current rating appropriate for the selected motors and props? Does its connector and firmware match the design? |
| Motors | Do mounting pattern, shaft, stator size, KV, battery cell count, and propeller size form a sensible combination? Use a known build or manufacturer recommendation rather than guessing. |
| Propellers | Correct diameter, pitch, shaft fit, direction and clearance? Keep spares. Remove props for setup. |
| Battery | Correct cell count/voltage, connector, dimensions/strap fit, acceptable weight, and suitable discharge capability? Is the charger designed for the pack type? |
| Receiver | Must match **2.4 GHz ExpressLRS** for the Pocket ELRS internal radio unless deliberately using a compatible external module. Verify firmware compatibility and antenna placement. |
| Video | Analog or digital? Camera, VTX/air unit, goggles, antenna connectors, frequency/band support and regional rules must all match. Digital ecosystems are not interchangeable by default. |
| Wiring and cooling | Correct pad voltage and polarity? Can the VTX and FC be cooled as recommended? Are antennas and power wires secured away from props? |
| Repairs | Are frame arms, motors, props, camera mounts, antennas, and batteries readily available? Can the build be repaired with your tools and skills? |

**Never use a connector as proof of voltage compatibility.** Read the actual input-voltage ranges and wiring diagram for each device. Avoid powering a device from a pad until you know that pad's voltage source.

## A sensible order of purchase

1. Learn with the Pocket in Liftoff and define where you can legally/safely fly.
2. Choose video system and aircraft size together, based on availability, repair cost and intended location.
3. Assemble a candidate bill of materials and validate all cross-compatibility items.
4. Budget for the full ecosystem: compatible goggles, antennas, batteries, charger, tools, soldering supplies (if building), and spares.
5. Ask an experienced pilot to review the build list before purchasing and the wiring before first power-up.

## First power-up and configuration: high-level checklist

Use the exact hardware and firmware manuals for detailed procedures. At minimum, before any propeller-on flight:

- [ ] Physical inspection; no shorts, solder bridges, exposed conductors, loose hardware, or damaged battery.
- [ ] All propellers removed.
- [ ] Correct FC firmware target and board orientation.
- [ ] Receiver inputs map to the expected channels/sticks.
- [ ] Arm and disarm switches work as intended; arming prevention warnings understood.
- [ ] Configured failsafe checked with props removed.
- [ ] Motors are numbered, spin in the intended direction, and respond to the correct outputs.
- [ ] Gyro/FC orientation and motor order verified in the configurator.
- [ ] Battery voltage/current readings and regulator outputs are plausible.
- [ ] Video link and antenna mounting inspected.
- [ ] A suitably experienced person has reviewed the setup and chosen flight location.

Do not copy-paste CLI dumps or firmware targets from a different model. A configuration that boots is not proof that the aircraft is safe.
