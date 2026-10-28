# FPV Power System Explained — where the energy goes

[Back to FPV System Basics](FPV-System-Basics.md) · [Related: Motors, Propellers and Battery Compatibility](Motors-Propellers-and-Battery-Compatibility.md) · [Battery and charger safety](FPV-Chargers-LiPo-and-Li-ion-Battery-Safety.md)

The power system does more than make the motors spin. It supplies high, rapidly changing current to propulsion while also providing suitable, stable power to sensitive electronics. The details depend on the exact quad, so treat this page as a mental model rather than a wiring plan.

<img src="https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-part-battery-power.svg" alt="Conceptual FPV battery, power distribution and regulated electronics path" width="1200" />

*Conceptual view of the power path; it is not a board pinout. Confirm every pad, voltage range and wire route in the exact hardware manual.*

## 1. The path from battery to components

A typical 4-motor FPV quad has a path similar to this:

1. **Battery pack** stores electrical energy and supplies the main battery leads.
2. **Power input and distribution** route battery power to the ESC or power-distribution circuitry.
3. **ESC** switches current to each motor under flight-controller command.
4. **Regulators** convert battery voltage into supported rails such as 5 V or 9 V where a board provides them.
5. **Flight controller, receiver, camera and video transmitter/air unit** use the supply voltage each device is designed to accept.

Not every build follows one physical layout. An AIO board may integrate the FC, ESC and regulators. Some video systems can accept the battery directly; others require a regulated supply. A connector that fits is not proof that voltage or polarity is correct.

## 2. Voltage, cell count and current are different ideas

- **Voltage** is the electrical potential supplied by the pack. Cell count is commonly written as 1S, 2S, 4S and so on.
- **Current** is the amount of electrical charge flowing at a given moment. Motors can demand large, rapidly changing current during acceleration.
- **Capacity** (often labelled in mAh) describes stored charge, not a guaranteed flight time.
- **Power** is the rate of energy transfer. As a useful mental model, watts ≈ volts × amps.

For conventional LiPo cells rated 3.7 V nominal and 4.20 V full, a 4S pack is 14.8 V nominal and 16.8 V fully charged. Other chemistries or LiHV packs may have different limits. Always read the exact battery label and manual.

Every directly connected component must support the maximum voltage it can see—not just the pack’s nominal voltage. If a camera or air unit requires a regulated input, use a suitable documented regulator rather than guessing from a product name.

## 3. What the ESC and voltage regulators do

The ESC is part of propulsion, but it is also a major power-distribution component. A 4-in-1 ESC drives all four motors from one board; an AIO combines ESC and FC circuitry on one board. Battery input, motor outputs and regulated pads may be placed differently on every model.

A **voltage regulator** converts one input voltage into a supported output voltage. A regulator's label is not permission to draw unlimited current: its thermal design, output rating and the connected load all matter. High-power digital video hardware may need a different supply arrangement from a small receiver.

## 4. Current spikes, voltage sag and heat

Motor load changes quickly. When current demand rises, voltage measured at the pack or electronics may dip because batteries, connectors, wires and traces have resistance. Severe sag can trigger resets or make video/receiver systems behave unpredictably.

Heat can come from a poor solder joint, undersized wire, overloaded regulator, stressed connector or an overworked battery. Never solve a suspected electrical problem by installing a larger battery or regulator without checking every component's voltage and current limits.

**Capacitors and filtering:** Some builds use low-ESR capacitors or filtering recommended by the ESC/video-system manufacturer to reduce electrical noise and spikes. The correct placement, voltage rating and value depend on the design. Follow the exact board guidance; do not treat a generic diagram as a soldering instruction.

## 5. Why ground and wiring layout matter

Electronic signals need a valid reference as well as the correct signal wire. Some devices share power and ground paths; others use separate connectors or regulated rails. A loose ground, wrong pad, short circuit or signal wire on a power pad can cause failure or hardware damage.

Before changing wiring:

- Disconnect the flight battery and any other power source.
- Confirm the board revision and its labelled pinout.
- Check polarity, supply range and current needs for both ends of the connection.
- Check for solder bridges and accidental contact with conductive frame hardware.
- Use a continuity meter and the manufacturer's procedure where appropriate; don't probe an energized circuit casually.

## 6. Power-related symptoms and what they suggest

| Symptom | Useful first checks |
|---|---|
| FC resets when throttle rises | Battery condition, power joints, regulator loading, wiring resistance and recorded voltage |
| Video cuts out under load | Video-system supply range, regulator capacity, ground path, connectors and heat |
| Component gets unusually hot | Stop powering it; check input voltage, polarity, shorts and the exact current rating |
| Short flight or sudden voltage sag | Battery health, pack suitability, prop/motor load, loose connectors and flight style |
| Smoke, burning smell or a damaged/swollen pack | Disconnect safely if possible, move away, stop using the equipment and follow battery/fire safety guidance |

These symptoms have multiple possible causes. Isolate one subsystem at a time and avoid repeatedly powering a suspected short.

## 7. A safe power review

- [ ] Identify battery chemistry, cell count and maximum charge voltage.
- [ ] Check the battery's discharge capability against the planned load and maker's recommendations.
- [ ] Confirm ESC, FC, camera, video unit and receiver supply ranges.
- [ ] Identify which rails are battery voltage and which are regulated; verify pad labels in the exact manual.
- [ ] Inspect polarity, solder joints, wire strain relief and component temperature.
- [ ] Keep props removed for bench configuration, and disconnect the battery before changing wiring.

## Continue learning

- [Motors, Propellers and Battery Compatibility](Motors-Propellers-and-Battery-Compatibility.md) explains how battery, motor and propeller choices interact.
- [Battery Flight-Time and Cycle-Life Planning](Battery-Flight-Time-and-Cycle-Life-Planning.md) explains the limits of estimating endurance.
- [FPV Chargers, LiPo and Li-ion Battery Safety](FPV-Chargers-LiPo-and-Li-ion-Battery-Safety.md) covers charging and pack handling.
- [Drone Parts — One by One](Drone-Parts-One-by-One.md) provides the broader hardware lineup.

## Knowledge check

1. Why must a component tolerate fully charged battery voltage rather than only nominal voltage?
2. What is the difference between battery capacity and current demand?
3. Why can a voltage regulator with the right output voltage still be unsuitable?
