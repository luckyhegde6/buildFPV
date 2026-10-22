# FPV Troubleshooting Quick Guide — Diagnose Safely, One System at a Time

This page gives safe first checks, not a substitute for the exact board, battery, ESC, radio or video-system manual. Avoid changing many settings at once; record the original configuration first.

> **Stop immediately** for smoke, burning smell, unexplained heat, damaged/swollen LiPo, exposed shorted wires, or an unknown board pinout. Disconnect power if it is safe to do so. Never test motors with propellers installed.

## 1. Safety first

- Remove all propellers before receiver, firmware, motor, ESC, failsafe or bench configuration tests.
- Disconnect the battery before soldering, continuity checks, motor inspection or handling bare power leads.
- Never power a digital air unit on a stationary bench unless its instructions allow it; some require proper airflow/cooling.
- Don't charge damaged, swollen, punctured or hot packs. Monitor charging throughout in an appropriate fire-safe location.
- Use the exact firmware target and official board pinout. Do not guess pads from a similar-looking board photo.

## 2. Symptom table

| Symptom | Common possibilities | Safe first checks |
|---|---|---|
| No power | Battery empty/damaged, connector/polarity problem, short, failed regulator | Disconnect; inspect pack/leads; verify polarity and board input rating from exact manual; continuity checks only unpowered |
| Smoke-stopper trips | Short, solder bridge, reversed polarity, damaged component | Stop; do not keep retrying. Inspect soldering and compare the actual board diagram |
| Radio won't bind | Wrong protocol/band, incompatible firmware, wrong binding procedure, damaged antenna | Identify transmitter module and receiver model/version; use the exact ELRS or receiver documentation |
| Receiver channels don't move | Receiver link/configuration, UART/protocol, channel mapping, firmware setup | Props off; check receiver status and channel monitor in the appropriate configurator |
| Won't arm | Arming-disable flag, low battery, receiver failsafe, switch/channel setup, sensor/setup error | Read the exact configurator warning; don't bypass an unexplained safety flag |
| Motor does not spin / wrong motor responds | Motor mapping, ESC output, wiring, firmware configuration, motor damage | Props off; verify motor output map against installed firmware; disconnect before checking wires |
| Motor direction wrong | Motor output configuration, motor wiring arrangement or prop mismatch | Props off; follow installed firmware's motor-direction procedure; install props only after verifying |
| Wobble or sudden vibration | Damaged prop, bent shaft, loose arm/motor, wire contact, FC mounting, tune or sensor issue | Land and unplug; inspect hardware and logs before changing tune |
| Black video | Incompatible VTX/goggles, wrong bind/channel, no VTX power, camera cable, antenna/power fault | Verify exact system generation and power input; use maker binding guide; inspect connectors unpowered |
| Video breakup / short apparent range | Antenna/polarization mismatch, damaged coax, wrong band/channel, interference, power/thermal issue | Check antennas and connectors, system compatibility and local settings; never treat max marketing range as guaranteed |
| VTX/air unit hot | Poor airflow, operating mode or input voltage outside limits | Power down, let cool, check datasheet and specified bench-operating/cooling procedure |
| DVR missing | Recording not enabled, storage/card unsupported, incorrect format or separate recording source | Test goggles DVR separately from onboard air-unit/camera recording and check exact manual |
| GPS no fix | Antenna sky view, power/UART/protocol, configuration or poor reception | Follow module/FC manual; GPS does not replace gyro or guarantee rescue |

## 3. Video troubleshooting flow

1. Identify camera model/interface and air-unit/VTX model.
2. Identify exact goggles/VRX model, receiver type and generation.
3. Confirm the manufacturer explicitly lists the pairing as compatible.
4. Check power input and connectors against the exact manual.
5. Check video antennas, connectors, polarization and supported RF band.
6. Follow the official bind/activation and firmware sequence.
7. Give the transmitter required airflow; test live feed, warnings, DVR and onboard recording separately.
8. If still unresolved, record model/revision, firmware, LED/error code and symptoms before contacting the vendor.

Start with [Analog vs Digital FPV Video](Analog-vs-Digital-FPV-Camera-Video-Guide.md) and [Goggles and VRX Integration](FPV-Goggles-and-VRX-Integration-Guide.md).

## 4. Motor/firmware troubleshooting flow

1. Remove all props and disconnect battery before inspecting wiring.
2. Confirm exact FC/ESC model, board revision, firmware target and motor protocol.
3. Read the actual board pinout; check connector orientation, solder joints and motor wiring.
4. Use configurator status/arming-disable messages and firmware motor-map diagram.
5. Verify motor order and direction with props off.
6. If unusual heat, smoke or repeated current fault occurs, stop rather than repeatedly applying power.
7. Install correct propellers only after direction/order, receiver, failsafe and arming checks are done.

Official reference: [Betaflight Setup Guide](https://betaflight.com/docs/wiki/getting-started/setup-guide).

## 5. Battery and charger troubleshooting

- **Unexpectedly short flights:** check battery age, cell sag, payload, wind, prop/motor loading and flight profile; compare only against the same test configuration.
- **One cell diverges:** stop using the pack if the imbalance is unexplained; consult the pack and charger manual.
- **Pack gets hot/swells/odour appears:** stop charging or flying, isolate only if safe and follow appropriate battery incident guidance. Never reuse a damaged pack.
- **Charger reports wrong cell count:** stop. Don't override a mismatch without identifying the pack and cause.

See [FPV Chargers, LiPo and Li-ion Battery Safety](FPV-Chargers-LiPo-and-Li-ion-Battery-Safety.md).

## 6. Create a useful bug report

Record aircraft/frame and board revision, motor/ESC models, battery chemistry/cell count, prop model, firmware version/target, radio/receiver protocol, camera/VTX/goggles generation, exact symptom, error/LED and recent changes. Include photos of labels or wiring only after removing power; mask serial numbers or personal information.

*Reviewed 22 October 2026. Troubleshooting steps must be adapted to the exact hardware manuals; this page intentionally does not infer pad pinouts or universal motor mappings.*
